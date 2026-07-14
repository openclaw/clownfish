#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { assertAllowedOwner, hasDeterministicSecuritySignal, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import { defaultCloseComment, externalMessageProvenance } from "./external-messages.mjs";
import {
  COORDINATOR_CHECK_NAMES,
  EXACT_MERGE_CHECK_NAME,
  REQUIRED_CI_GATE_NAME,
} from "./external-merge-checks.mjs";

const MAINTAINER_AUTHOR_ASSOCIATIONS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const CLOSE_CLASSIFICATIONS = new Set(["duplicate", "superseded", "fixed_by_candidate", "low_signal"]);
const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN"]);
const CLOWNFISH_LABEL = "clownfish";
const CLOWNFISH_LABEL_COLOR = "F97316";
const CLOWNFISH_LABEL_DESCRIPTION = "Tracked by Clownfish automation";
const DEFAULT_REQUIRED_CI_GATE_APP_ID = 15368;
const DEFAULT_REQUIRED_CI_GATE_MAX_AGE_HOURS = 24;
const DEFAULT_REQUIRED_CI_WORKFLOW_PATH = ".github/workflows/ci.yml";
let activeExactMergeAuthorization = null;
let exactMergeCleanupRunning = false;

installExactMergeExitCleanup();

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_APPLY_DRY_RUN === "1");
const allowMissingUpdatedAt = Boolean(args["allow-missing-updated-at"]);
const reportPathArg = args["report"];

if (!jobPath) {
  console.error("usage: node scripts/apply-result.mjs <job.md> [result.json] [--latest] [--dry-run]");
  process.exit(2);
}
if (!resultPathArg && !latest) {
  console.error("result path is required unless --latest is set");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (!["execute", "autonomous"].includes(job.frontmatter.mode)) {
  throw new Error("refusing apply: job frontmatter mode is not execute or autonomous");
}
if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing apply: CLOWNFISH_ALLOW_EXECUTE must be 1");
}
const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(
    `result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`,
  );
}
if (!["execute", "autonomous"].includes(result.mode)) {
  throw new Error(`refusing apply: result mode is ${result.mode}`);
}
if (result.mode !== job.frontmatter.mode) {
  throw new Error(`refusing apply: result mode ${result.mode} does not match job mode ${job.frontmatter.mode}`);
}

const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  dry_run: dryRun,
  result_path: path.relative(repoRoot(), resultPath),
  applied_at: new Date().toISOString(),
  actions: [],
};
const reportPath =
  typeof reportPathArg === "string"
    ? path.resolve(reportPathArg)
    : path.join(path.dirname(resultPath), "apply-report.json");
const priorApplyReport = readApplyReport(reportPath);
const priorApplyAttempts = readApplyAttempts(priorApplyReport);
let githubRateLimitBlockReason = "";

const allowedRefs = new Set(
  [
    ...(job.frontmatter.cluster_refs ?? []),
    ...(job.frontmatter.canonical ?? []),
    ...(job.frontmatter.candidates ?? []),
  ]
    .map((ref) => normalizeIssueRef(ref, result.repo))
    .filter(Boolean),
);
const hydratedCloseRefs = hydratedPreflightCloseRefs(resultPath, result.repo);
const allowedCloseRefs = new Set([...allowedRefs, ...hydratedCloseRefs]);
const maintainerCloseRefs = new Set(
  (job.frontmatter.maintainer_close_refs ?? [])
    .map((ref) => normalizeIssueRef(ref, result.repo))
    .filter(Boolean),
);

for (const action of result.actions ?? []) {
  if (!isApplicatorAction(action)) continue;
  report.actions.push(applyAction({ job, result, action, dryRun, allowMissingUpdatedAt }));
}

report.apply_attempts = [
  ...priorApplyAttempts,
  {
    dry_run: report.dry_run,
    result_path: report.result_path,
    applied_at: report.applied_at,
    actions: report.actions,
  },
];
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

function readApplyReport(reportPath) {
  if (!fs.existsSync(reportPath)) return null;
  return JSON.parse(fs.readFileSync(reportPath, "utf8"));
}

function readApplyAttempts(previous) {
  if (!previous) return [];
  if (Array.isArray(previous.apply_attempts)) return previous.apply_attempts;
  if (!Array.isArray(previous.actions)) return [];
  return [
    {
      dry_run: previous.dry_run ?? null,
      result_path: previous.result_path ?? null,
      applied_at: previous.applied_at ?? null,
      actions: previous.actions,
    },
  ];
}

function findLatestResultPath() {
  const runsRoot = path.join(repoRoot(), ".projectclownfish", "runs");
  if (!fs.existsSync(runsRoot)) {
    throw new Error("no run directory exists");
  }
  const candidates = [];
  for (const runName of fs.readdirSync(runsRoot)) {
    const candidate = path.join(runsRoot, runName, "result.json");
    if (!fs.existsSync(candidate)) continue;
    candidates.push({ path: candidate, mtimeMs: fs.statSync(candidate).mtimeMs });
  }
  candidates.sort((left, right) => right.mtimeMs - left.mtimeMs);
  if (!candidates[0]) throw new Error("no result.json files found");
  return candidates[0].path;
}

function hydratedPreflightCloseRefs(resultPath, repo) {
  const planPath = path.join(path.dirname(resultPath), "cluster-plan.json");
  if (!fs.existsSync(planPath)) return new Set();
  const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
  const readOnlyContextRefs = new Set(
    (plan.scope?.read_only_context_refs ?? [])
      .map((ref) => normalizeIssueRef(ref, repo))
      .filter(Boolean),
  );
  return new Set(
    (plan.items ?? [])
      .filter(
        (item) =>
          item &&
          !item.hydration_error &&
          item.security_sensitive !== true &&
          item.ref &&
          item.kind &&
          item.state &&
          item.updated_at &&
          !readOnlyContextRefs.has(normalizeIssueRef(item.ref, repo)),
      )
      .map((item) => normalizeIssueRef(item.ref, repo))
      .filter(Boolean),
  );
}

function readFixExecutionReport() {
  const reportPath = path.join(path.dirname(resultPath), "fix-execution-report.json");
  if (!fs.existsSync(reportPath)) return null;
  return JSON.parse(fs.readFileSync(reportPath, "utf8"));
}

function applyAction({ job, result, action, dryRun, allowMissingUpdatedAt }) {
  const target = normalizeIssueRef(action.target, result.repo);
  const actionName = String(action.action ?? "");
  const classification = normalizeClassification(action);
  const canonical = normalizeIssueRef(action.canonical ?? action.duplicate_of, result.repo);
  const candidateFix = normalizeIssueRef(
    action.candidate_fix ?? action.fixed_by ?? action.fix_candidate,
    result.repo,
  );
  const idempotencyKey =
    typeof action.idempotency_key === "string" && action.idempotency_key.trim()
      ? action.idempotency_key.trim()
      : defaultIdempotencyKey(result.cluster_id, target, actionName, classification);
  const base = {
    target: `#${target}`,
    action: actionName,
    classification,
    canonical: canonical ? `#${canonical}` : undefined,
    candidate_fix: candidateFix ? `#${candidateFix}` : undefined,
    idempotency_key: idempotencyKey,
  };

  if (!target) return { ...base, status: "failed", reason: "target must look like #123" };
  if (action.status !== "planned") {
    return {
      ...base,
      status: "skipped",
      source_status: action.status ?? null,
      source_reason: action.reason ?? null,
      reason: `action status is ${action.status ?? "missing"}`,
    };
  }
  if (githubRateLimitBlockReason) {
    return transientRateLimitBlock(base, githubRateLimitBlockReason);
  }
  if (MERGE_ACTIONS.has(actionName)) {
    try {
      return applyMergeAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base });
    } catch (error) {
      if (isPrimaryRateLimitError(error)) {
        githubRateLimitBlockReason = transientRateLimitReason(error);
        return transientRateLimitBlock(base, githubRateLimitBlockReason);
      }
      throw error;
    }
  }
  if (!CLOSE_ACTIONS.has(actionName)) {
    return { ...base, status: "skipped", reason: "action is not an applicator action" };
  }

  try {
    return applyCloseAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base, actionName, classification, canonical, candidateFix, idempotencyKey });
  } catch (error) {
    if (isPrimaryRateLimitError(error)) {
      githubRateLimitBlockReason = transientRateLimitReason(error);
      return transientRateLimitBlock(base, githubRateLimitBlockReason);
    }
    throw error;
  }
}

function applyCloseAction({
  job,
  result,
  action,
  dryRun,
  allowMissingUpdatedAt,
  target,
  base,
  actionName,
  classification,
  canonical,
  candidateFix,
  idempotencyKey,
}) {
  const closePolicyBlock = validateClosePolicy({ job, actionName });
  if (closePolicyBlock) return { ...base, status: "blocked", reason: closePolicyBlock };
  const fixFirstBlock = validateFixFirstClose({ job, result, actionName, classification, candidateFix });
  if (fixFirstBlock) return { ...base, status: "blocked", reason: fixFirstBlock };
  const allowCurrentMainFixedClose = allowsCurrentMainFixedClose({ job, actionName, classification, candidateFix });
  if (!CLOSE_CLASSIFICATIONS.has(classification)) {
    return {
      ...base,
      status: "blocked",
      reason: "auto-closure requires duplicate, superseded, fixed_by_candidate, or low_signal classification",
    };
  }
  if (actionName === "post_merge_close" && job.frontmatter.allow_post_merge_close !== true) {
    return { ...base, status: "blocked", reason: "post-merge close requires allow_post_merge_close: true" };
  }
  if (!job.frontmatter.candidates.map(normalizeIssueRef).includes(target)) {
    return { ...base, status: "blocked", reason: "target is not listed in job candidates" };
  }
  if (classification === "low_signal" || actionName === "close_low_signal") {
    const lowSignalBlock = validateLowSignalIntent({ job, action, actionName, classification });
    if (lowSignalBlock) return { ...base, status: "blocked", reason: lowSignalBlock };
  }
  const explicitSupersededByCandidate =
    actionName === "close_superseded" &&
    classification === "superseded" &&
    !canonical &&
    candidateFix &&
    maintainerCloseRefs.has(target);
  if ((classification === "duplicate" || classification === "superseded") && !canonical && !explicitSupersededByCandidate) {
    return { ...base, status: "blocked", reason: "closure requires canonical or duplicate_of" };
  }
  const isPostMergeFixedClose = actionName === "post_merge_close" && classification === "fixed_by_candidate";
  if (canonical && !allowedCloseRefs.has(canonical) && !isPostMergeFixedClose) {
    return { ...base, status: "blocked", reason: "canonical is not a hydrated close reference" };
  }
  if (classification === "fixed_by_candidate" && !candidateFix && !allowCurrentMainFixedClose) {
    return { ...base, status: "blocked", reason: "closure requires candidate_fix" };
  }
  if (candidateFix && !allowedCloseRefs.has(candidateFix) && !isPostMergeFixedClose) {
    return { ...base, status: "blocked", reason: "candidate fix is not a hydrated close reference" };
  }
  if (actionName === "post_merge_close" || explicitSupersededByCandidate) {
    const candidateBlock = validateMergedCandidateFix(result.repo, candidateFix);
    if (candidateBlock) return { ...base, status: "blocked", reason: candidateBlock };
  }
  if ((canonical === target && !allowCurrentMainFixedClose) || candidateFix === target) {
    return { ...base, status: "blocked", reason: "target cannot close against itself" };
  }
  const replacementCloseoutBlock = validateReplacementCloseout({ result, actionName, target });
  if (replacementCloseoutBlock) return { ...base, status: "blocked", reason: replacementCloseoutBlock };

  const live = fetchIssue(result.repo, target);
  const kind = live.pull_request ? "pull_request" : "issue";
  const authorAssociation = normalizeAuthorAssociation(live.author_association);
  if (MAINTAINER_AUTHOR_ASSOCIATIONS.has(authorAssociation) && !maintainerCloseRefs.has(target)) {
    return {
      ...base,
      status: "blocked",
      reason: `target author association is ${authorAssociation}`,
      live_state: live.state,
    };
  }
  if (hasSecuritySignal(live)) {
    return {
      ...base,
      status: "blocked",
      reason: "security-sensitive target requires central security triage",
      live_state: live.state,
    };
  }
  const blockedLabel = findHighRiskMutationLabel(live.labels);
  if (blockedLabel) {
    return {
      ...base,
      status: "blocked",
      reason: `target has blocked live label: ${blockedLabel}`,
      live_state: live.state,
    };
  }
  if (classification === "low_signal") {
    const lowSignalBlock = validateLowSignalLiveState(result.repo, target, live, kind);
    if (lowSignalBlock) {
      return {
        ...base,
        status: "blocked",
        reason: lowSignalBlock,
        live_state: live.state,
        live_updated_at: live.updated_at,
      };
    }
  }

  const comment = renderCloseComment({ action, classification, result, target, live });
  const marker = idempotencyMarker(result.cluster_id, target, idempotencyKey);
  const body = comment.includes(marker) ? comment : `${comment.trim()}\n\n${marker}`;
  const existingComment = findExistingComment(result.repo, target, marker, body);

  if (live.state !== "open" && existingComment) {
    return {
      ...base,
      status: "executed",
      reason: "already closed with matching projectclownfish comment",
      live_state: live.state,
    };
  }

  const expectedUpdatedAt = action.target_updated_at ?? action.live_updated_at;
  if (!expectedUpdatedAt && !allowMissingUpdatedAt) {
    return {
      ...base,
      status: "blocked",
      reason: "missing target_updated_at; rerun the worker against live GitHub state",
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  if (
    expectedUpdatedAt &&
    expectedUpdatedAt !== live.updated_at &&
    !(existingComment && commentMatchesLiveUpdatedAt(existingComment, live))
  ) {
    return {
      ...base,
      status: "blocked",
      reason: "target changed since worker review",
      expected_updated_at: expectedUpdatedAt,
      live_updated_at: live.updated_at,
      live_state: live.state,
    };
  }

  if (live.state !== "open") {
    return { ...base, status: "skipped", reason: "already closed", live_state: live.state };
  }

  if (dryRun) {
    return {
      ...base,
      status: "planned",
      reason: "dry run",
      live_state: live.state,
      live_updated_at: live.updated_at,
      comment,
    };
  }

  if (!existingComment) {
    postIssueComment(result.repo, target, body);
  }
  closeIssueOrPullRequest(result.repo, target, kind, classification);

  return {
    ...base,
    status: "executed",
    reason: closeReasonText(classification),
    live_state: "closed",
    live_updated_at: live.updated_at,
  };
}

function applyMergeAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base }) {
  const policyBlock = validateMergePolicy({ job, action });
  if (policyBlock) return { ...base, status: "blocked", reason: policyBlock };
  const externalMergeAction = isExternalMergeAction(action);
  const ignoredCheckNames = externalMergeAction ? COORDINATOR_CHECK_NAMES : [];
  if (!allowedRefs.has(target)) {
    return { ...base, status: "blocked", reason: "merge target is not listed in job refs" };
  }
  if (action.target_kind !== "pull_request") {
    return { ...base, status: "blocked", reason: "merge action requires pull_request target_kind" };
  }

  let live = fetchIssue(result.repo, target);
  if (!live.pull_request) {
    return { ...base, status: "blocked", reason: "merge target is not a pull request", live_state: live.state };
  }
  if (hasSecuritySignal(live)) {
    return {
      ...base,
      status: "blocked",
      reason: "security-sensitive target requires central security triage",
      live_state: live.state,
    };
  }
  const blockedLabel = findHighRiskMergeLabel(live.labels);
  if (blockedLabel) {
    return {
      ...base,
      status: "blocked",
      reason: `target has blocked live label: ${blockedLabel}`,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }

  const expectedUpdatedAt = action.target_updated_at ?? action.live_updated_at;
  if (!expectedUpdatedAt && !allowMissingUpdatedAt) {
    return {
      ...base,
      status: "blocked",
      reason: "missing target_updated_at; rerun the worker against live GitHub state",
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  const metadataDrifted = Boolean(expectedUpdatedAt && expectedUpdatedAt !== live.updated_at);

  let pullRequest = fetchPullRequest(result.repo, target);
  let view = fetchSettledPullRequestView(
    result.repo,
    target,
    externalMergeAction ? { allowedPendingCheckNames: ignoredCheckNames } : {},
  );
  const mergedAt = pullRequest.merged_at ?? view.mergedAt ?? null;
  const expectedHeadSha = String(action.expected_head_sha ?? "");
  if (!/^[0-9a-f]{40}$/i.test(expectedHeadSha)) {
    return {
      ...base,
      status: "blocked",
      reason: "merge action requires expected_head_sha as a 40-character Git SHA",
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  const liveHeadSha = String(pullRequest.head?.sha ?? "");
  if (!mergedAt && liveHeadSha !== expectedHeadSha) {
    return {
      ...base,
      status: "blocked",
      reason: "pull request head changed since worker review",
      expected_head_sha: expectedHeadSha,
      live_head_sha: liveHeadSha || null,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  if (mergedAt) {
    const mergePreflightBlock = validateMergePreflight({
      result,
      action,
      target,
      expectedHeadSha,
    });
    if (mergePreflightBlock) {
      return {
        ...base,
        status: "blocked",
        reason: mergePreflightBlock,
        live_state: "merged",
        live_updated_at: live.updated_at,
        merged_at: mergedAt,
        merge_commit_sha: pullRequest.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
      };
    }
    const replayBinding = restoreBaseAdoptionBinding({
      action,
      target,
      expectedHeadSha,
      preflight: findMergePreflight(result, target),
    });
    const authorizedMergeHeadSha =
      replayBinding?.merge_head_sha ?? expectedHeadSha;
    if (liveHeadSha.toLowerCase() !== authorizedMergeHeadSha.toLowerCase()) {
      return {
        ...base,
        status: "blocked",
        reason: "merged pull request head does not match the verified merge head",
        expected_head_sha: expectedHeadSha,
        authorized_merge_head_sha: authorizedMergeHeadSha,
        live_head_sha: liveHeadSha || null,
        live_state: "merged",
        live_updated_at: live.updated_at,
        merged_at: mergedAt,
        merge_commit_sha: pullRequest.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
      };
    }
    const mergedProof = verifyActualMergedCommit({
      result,
      action,
      target,
      expectedHeadSha,
      mergeHeadSha: authorizedMergeHeadSha,
      pullRequest,
      effectiveDiffBinding: replayBinding,
    });
    if (mergedProof?.reason) {
      return {
        ...base,
        status: "blocked",
        reason: mergedProof.reason,
        live_state: "merged",
        live_updated_at: live.updated_at,
        merged_at: mergedAt,
        merge_commit_sha: pullRequest.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
        reviewed_effective_diff_sha256: mergedProof.reviewed_effective_diff_sha256 ?? null,
        merged_effective_diff_sha256: mergedProof.merged_effective_diff_sha256 ?? null,
      };
    }
    return {
      ...base,
      status: "executed",
      reason: "already merged",
      live_state: "merged",
      live_updated_at: live.updated_at,
      merged_at: mergedAt,
      merge_commit_sha: pullRequest.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
      effective_diff_sha256: mergedProof?.merged_effective_diff_sha256 ?? null,
      verified_main_sha: mergedProof?.verified_parent_sha ?? null,
      ...externalMergeHeadReport(action, expectedHeadSha, replayBinding),
    };
  }

  if (
    metadataDrifted &&
    !isBenignExactHeadClawSweeperUpdate({
      repo: result.repo,
      target,
      live,
      expectedHeadSha,
    })
  ) {
    return {
      ...base,
      status: "blocked",
      reason: "target changed since worker review",
      expected_updated_at: expectedUpdatedAt,
      live_updated_at: live.updated_at,
      live_state: live.state,
    };
  }

  const mergeBlock = validateMergeablePullRequest({
    pullRequest,
    view,
    allowExactMergeState: externalMergeAction,
    ignoredCheckNames,
  });
  if (mergeBlock) {
    return {
      ...base,
      status: "blocked",
      reason: mergeBlock,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  const mergePreflightBlock = validateMergePreflight({
    result,
    action,
    target,
    expectedHeadSha,
  });
  if (mergePreflightBlock) {
    return {
      ...base,
      status: "blocked",
      reason: mergePreflightBlock,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  const effectiveDiffBinding = verifyExternalMergeBinding({
    result,
    action,
    target,
    expectedHeadSha,
  });
  if (effectiveDiffBinding?.reason) {
    return {
      ...base,
      status: "blocked",
      reason: effectiveDiffBinding.reason,
      ...(effectiveDiffBinding.retry_recommended ? { retry_recommended: true } : {}),
      live_state: live.state,
      live_updated_at: live.updated_at,
      reviewed_effective_diff_sha256: effectiveDiffBinding.reviewed_effective_diff_sha256 ?? null,
      live_effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256 ?? null,
      verified_main_sha: effectiveDiffBinding.verified_main_sha ?? null,
      base_drift_proof: effectiveDiffBinding.base_drift_proof ?? null,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }
  const mergeHeadSha = effectiveDiffBinding?.merge_head_sha ?? expectedHeadSha;
  const currentBaseBlock = validatePullRequestCurrentBase({
    repo: result.repo,
    pullRequest,
    view,
    allowExactMergeState: externalMergeAction,
    ignoredCheckNames,
  });
  if (currentBaseBlock) {
    return {
      ...base,
      status: "blocked",
      reason: currentBaseBlock.reason,
      live_state: live.state,
      live_updated_at: live.updated_at,
      pull_request_base_sha: currentBaseBlock.pull_request_base_sha,
      current_main_sha: currentBaseBlock.current_main_sha,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }
  if (effectiveDiffBinding) {
    const mergeMainSha = fetchBranchHeadSha(result.repo, "main");
    if (mergeMainSha !== effectiveDiffBinding.verified_main_sha) {
      return {
        ...base,
        status: "blocked",
        reason: "main changed after effective merge diff verification",
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        current_main_sha: mergeMainSha,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
  }
  const ciGate = effectiveDiffBinding
    ? verifyFreshExactHeadCiGate({
        repo: result.repo,
        target,
        headSha: expectedHeadSha,
        preflight: findMergePreflight(result, target),
      })
    : null;
  if (ciGate?.reason) {
    return {
      ...base,
      status: "blocked",
      reason: ciGate.reason,
      retry_recommended: true,
      live_state: live.state,
      live_updated_at: live.updated_at,
      expected_head_sha: expectedHeadSha,
      effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
      verified_main_sha: effectiveDiffBinding.verified_main_sha,
      ci_gate: ciGate,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }

  if (process.env.CLOWNFISH_ALLOW_MERGE !== "1") {
    if (!dryRun) labelForClownfishReview(result.repo, target);
    return {
      ...base,
      status: "blocked",
      reason: "merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish",
      live_state: live.state,
      live_updated_at: live.updated_at,
      merge_method: "squash",
      effective_diff_sha256: effectiveDiffBinding?.live_effective_diff_sha256 ?? null,
      verified_main_sha: effectiveDiffBinding?.verified_main_sha ?? null,
      base_drift_proof: effectiveDiffBinding?.base_drift_proof ?? null,
      ci_gate: ciGate,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }

  if (dryRun) {
    return {
      ...base,
      status: "planned",
      reason: "dry run",
      live_state: live.state,
      live_updated_at: live.updated_at,
      merge_method: "squash",
      effective_diff_sha256: effectiveDiffBinding?.live_effective_diff_sha256 ?? null,
      verified_main_sha: effectiveDiffBinding?.verified_main_sha ?? null,
      base_drift_proof: effectiveDiffBinding?.base_drift_proof ?? null,
      ci_gate: ciGate,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }

  // Executable merges have one authorization path. Worker-authored preflight
  // can inform planning, but only deterministic external preflight binds the
  // reviewed diff, current main, canonical CI, and the non-bypassed App actor.
  if (!effectiveDiffBinding) {
    return {
      ...base,
      status: "blocked",
      reason: "merge execution requires deterministic external preflight",
      live_state: live.state,
      live_updated_at: live.updated_at,
      expected_head_sha: expectedHeadSha,
    };
  }

  if (!process.env.CLOWNFISH_CHECKS_GH_TOKEN) {
    return {
      ...base,
      status: "blocked",
      reason: "external merge requires CLOWNFISH_CHECKS_GH_TOKEN for exact-merge authorization",
      live_state: live.state,
      live_updated_at: live.updated_at,
      ci_gate: ciGate,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }

  let exactMergeCheck = null;
  {
    const ruleBlock = validateExactMergeRule(result.repo);
    if (ruleBlock) {
      return {
        ...base,
        status: "blocked",
        reason: ruleBlock,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        ci_gate: ciGate,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
    let checkedIssue;
    let checkedPull;
    let checkedView;
    let checkedMainSha;
    try {
      checkedIssue = fetchIssue(result.repo, target);
      checkedPull = fetchPullRequest(result.repo, target);
      checkedView = fetchSettledPullRequestView(result.repo, target, {
        allowedPendingCheckNames: ignoredCheckNames,
      });
      checkedMainSha = fetchBranchHeadSha(result.repo, "main");
    } catch (error) {
      return {
        ...base,
        status: "blocked",
        reason: `could not complete final exact-merge recheck: ${compactErrorText(commandErrorText(error), 500)}`,
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        ci_gate: ciGate,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
    const checkedMergeBlock = validateMergeablePullRequest({
      pullRequest: checkedPull,
      view: checkedView,
      allowExactMergeState: externalMergeAction,
      ignoredCheckNames,
    });
    const checkedPreflightBlock = validateMergePreflight({
      result,
      action,
      target,
      expectedHeadSha,
    });
    if (
      String(checkedPull.head?.sha ?? "").toLowerCase() !== mergeHeadSha.toLowerCase() ||
      String(checkedPull.merge_commit_sha ?? "").toLowerCase() !==
        effectiveDiffBinding.merge_commit_sha.toLowerCase() ||
      checkedMainSha !== effectiveDiffBinding.verified_main_sha ||
      checkedIssue.updated_at !== live.updated_at ||
      (effectiveDiffBinding.base_adoption
        ? externalMergeMetadataBlock({
            beforeIssue: live,
            beforePull: pullRequest,
            afterIssue: checkedIssue,
            afterPull: checkedPull,
          })
        : "") ||
      hasSecuritySignal(checkedIssue) ||
      findHighRiskMergeLabel(checkedIssue.labels) ||
      checkedMergeBlock ||
      checkedPreflightBlock
    ) {
      return {
        ...base,
        status: "blocked",
        reason:
          checkedPreflightBlock ||
          checkedMergeBlock ||
          "head, test merge, main, metadata, or risk state changed before exact-merge authorization",
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        current_main_sha: checkedMainSha,
        ci_gate: ciGate,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
    if (effectiveDiffBinding.base_adoption) {
      persistBaseAdoptionCheckpoint({
        base,
        action,
        expectedHeadSha,
        effectiveDiffBinding,
      });
    }
    try {
      exactMergeCheck = prepareExactMergeCheck({
        repo: result.repo,
        action,
        target,
        effectiveDiffBinding,
      });
    } catch (error) {
      return {
        ...base,
        status: "blocked",
        reason: `could not publish exact-merge check: ${compactErrorText(commandErrorText(error), 500)}`,
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        ci_gate: ciGate,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
    const mergeState = verifyExactMergeAuthorizationState({
      result,
      action,
      target,
      expectedHeadSha,
      mergeHeadSha,
      effectiveDiffBinding,
      beforeIssue: checkedIssue,
      beforePull: checkedPull,
    });
    if (mergeState.reason) {
      return withExactMergeRevocation({
        repo: result.repo,
        exactMergeCheck,
        result: {
          ...base,
          status: "blocked",
          reason: mergeState.reason,
          retry_recommended: true,
          live_state: live.state,
          live_updated_at: live.updated_at,
          expected_head_sha: expectedHeadSha,
          effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
          verified_main_sha: effectiveDiffBinding.verified_main_sha,
          current_main_sha: mergeState.current_main_sha ?? null,
          ci_gate: mergeState.ci_gate ?? ciGate,
          exact_merge_check: exactMergeCheck,
          ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
        },
      });
    }
    try {
      exactMergeCheck = authorizeExactMergeCheck({
        repo: result.repo,
        target,
        exactMergeCheck,
        expectedHeadSha,
        mergeHeadSha,
        effectiveDiffBinding,
        ciGate,
      });
    } catch (error) {
      return {
        ...base,
        status: "blocked",
        reason: `could not authorize exact merge: ${compactErrorText(commandErrorText(error), 500)}`,
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        ci_gate: ciGate,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    }
  }

  try {
    // The actor checked for ruleset bypass must also consume the authorization;
    // a fallback maintainer token may have a role-based bypass of its own.
    const mergeEnv = githubCliEnv({ ghToken: process.env.CLOWNFISH_CHECKS_GH_TOKEN });
    ghOnce([
      "pr",
      "merge",
      String(target),
      "--repo",
      result.repo,
      "--squash",
      "--match-head-commit",
      mergeHeadSha,
    ], mergeEnv);
  } catch (error) {
    const mergedAfterError = fetchPullRequestAfterMergeAttempt(result.repo, target);
    if (mergedAfterError?.merged_at) {
      return buildMergedActionResult({
        base,
        live,
        result,
        action,
        target,
        expectedHeadSha,
        mergeHeadSha,
        merged: mergedAfterError,
        effectiveDiffBinding,
        exactMergeCheck,
        ciGate,
        reason: "merge command failed after GitHub accepted the merge",
      });
    }
    const blockedResult = {
        ...base,
        status: "blocked",
        reason: isMergeRefMovementError(error)
          ? "pull request base or head changed during merge; rerun preflight"
          : `merge command failed without retry: ${compactErrorText(commandErrorText(error), 500)}`,
        retry_recommended: true,
        live_state: live.state,
        live_updated_at: live.updated_at,
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding?.live_effective_diff_sha256 ?? null,
        verified_main_sha: effectiveDiffBinding?.verified_main_sha ?? null,
        base_drift_proof: effectiveDiffBinding?.base_drift_proof ?? null,
        ci_gate: ciGate,
        exact_merge_check: exactMergeCheck,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      };
    return exactMergeCheck
      ? withExactMergeRevocation({
          repo: result.repo,
          exactMergeCheck,
          result: blockedResult,
        })
      : blockedResult;
  }
  const merged = fetchPullRequestAfterMergeAttempt(result.repo, target);
  return buildMergedActionResult({
    base,
    live,
    result,
    action,
    target,
    expectedHeadSha,
    mergeHeadSha,
    merged,
    effectiveDiffBinding,
    exactMergeCheck,
    ciGate,
    reason: "merged by projectclownfish",
  });
}

function fetchPullRequestAfterMergeAttempt(repo, target) {
  try {
    return fetchPullRequest(repo, target);
  } catch {
    return null;
  }
}

function buildMergedActionResult({
  base,
  live,
  result,
  action,
  target,
  expectedHeadSha,
  mergeHeadSha,
  merged,
  effectiveDiffBinding,
  exactMergeCheck,
  ciGate,
  reason,
}) {
  if (!merged?.merged_at || !/^[0-9a-f]{40}$/i.test(String(merged?.merge_commit_sha ?? ""))) {
    const blockedResult = {
      ...base,
      status: "blocked",
      reason: "merge command returned without a verified merged pull request",
      retry_recommended: true,
      live_state: merged?.state ?? live.state,
      live_updated_at: merged?.updated_at ?? live.updated_at,
      expected_head_sha: expectedHeadSha,
      effective_diff_sha256: effectiveDiffBinding?.live_effective_diff_sha256 ?? null,
      verified_main_sha: effectiveDiffBinding?.verified_main_sha ?? null,
      ci_gate: ciGate,
      exact_merge_check: exactMergeCheck,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
    return exactMergeCheck
      ? withExactMergeRevocation({
          repo: result.repo,
          exactMergeCheck,
          result: blockedResult,
        })
      : blockedResult;
  }
  clearActiveExactMergeAuthorization(exactMergeCheck);
  const mergedProof = verifyActualMergedCommit({
    result,
    action,
    target,
    expectedHeadSha,
    mergeHeadSha,
    pullRequest: merged,
    effectiveDiffBinding,
  });
  if (mergedProof?.reason) {
    return {
      ...base,
      status: "blocked",
      reason: mergedProof.reason,
      retry_recommended: true,
      live_state: "merged",
      live_updated_at: merged.updated_at ?? live.updated_at,
      merged_at: merged.merged_at,
      merge_commit_sha: merged.merge_commit_sha,
      expected_head_sha: expectedHeadSha,
      reviewed_effective_diff_sha256: mergedProof.reviewed_effective_diff_sha256 ?? null,
      merged_effective_diff_sha256: mergedProof.merged_effective_diff_sha256 ?? null,
      verified_main_sha: mergedProof.verified_parent_sha ?? effectiveDiffBinding?.verified_main_sha ?? null,
      ci_gate: ciGate,
      exact_merge_check: exactMergeCheck,
      ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
    };
  }
  return {
    ...base,
    status: "executed",
    reason,
    live_state: "merged",
    live_updated_at: merged.updated_at ?? live.updated_at,
    merged_at: merged.merged_at,
    merge_commit_sha: merged.merge_commit_sha,
    merge_method: "squash",
    expected_head_sha: expectedHeadSha,
    effective_diff_sha256:
      mergedProof?.merged_effective_diff_sha256 ??
      effectiveDiffBinding?.live_effective_diff_sha256 ??
      null,
    verified_main_sha:
      mergedProof?.verified_parent_sha ??
      effectiveDiffBinding?.verified_main_sha ??
      null,
    ci_gate: ciGate,
    exact_merge_check: exactMergeCheck,
    ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
  };
}

function findHighRiskMutationLabel(labels) {
  return (labels ?? [])
    .map((label) => String(label?.name ?? label).trim())
    .find((label) => /^merge-risk:/i.test(label) || label.toLowerCase() === "clawsweeper:automerge");
}

function findHighRiskMergeLabel(labels) {
  return (labels ?? [])
    .map((label) => String(label?.name ?? label).trim())
    .find((label) => /^merge-risk:/i.test(label));
}

function validateClosePolicy({ job, actionName }) {
  if (!job.frontmatter.allowed_actions.includes("close")) return "job does not allow close";
  if (!job.frontmatter.allowed_actions.includes("comment")) return "job does not allow close comments";
  if ((job.frontmatter.blocked_actions ?? []).includes("close")) return "close is blocked by job frontmatter";
  if ((job.frontmatter.blocked_actions ?? []).includes("comment")) return "comment is blocked by job frontmatter";
  if (!["close_low_signal", "post_merge_close"].includes(actionName) && job.frontmatter.allow_instant_close !== true) {
    return "instant close requires allow_instant_close: true";
  }
  return "";
}

function validateFixFirstClose({ job, result, actionName, classification, candidateFix }) {
  if (job.frontmatter.require_fix_before_close !== true) return "";
  if (["close_low_signal", "post_merge_close"].includes(actionName)) return "";
  if (classification === "duplicate") return "";

  const priorMerge = report.actions.some(
    (entry) => MERGE_ACTIONS.has(entry.action) && entry.status === "executed",
  );
  if (priorMerge) return "";

  if (candidateFix && isMergedCandidateFix(result.repo, candidateFix)) {
    return "";
  }

  if (classification === "fixed_by_candidate") {
    if (job.frontmatter.allow_unmerged_fix_close !== true) {
      return "fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true";
    }
    return "";
  }

  const fixReport = readFixExecutionReport(result);
  const fixLanded = (fixReport?.actions ?? []).some((entry) =>
    ["open_fix_pr", "repair_contributor_branch"].includes(String(entry.action ?? "")) &&
    ["opened", "pushed"].includes(String(entry.status ?? "")),
  );
  if (fixLanded) return "";

  return "close requires Clownfish fix PR opened/pushed, merged candidate fix, or merge executed first";
}

function allowsCurrentMainFixedClose({ job, actionName, classification, candidateFix }) {
  return (
    actionName === "close_fixed_by_candidate" &&
    classification === "fixed_by_candidate" &&
    job.frontmatter.allow_unmerged_fix_close === true &&
    !candidateFix
  );
}

function isMergedCandidateFix(repo, candidateFix) {
  try {
    return validateMergedCandidateFix(repo, candidateFix) === "";
  } catch {
    return false;
  }
}

function validateMergePolicy({ job, action }) {
  if (!job.frontmatter.allowed_actions.includes("merge")) return "job does not allow merge";
  if ((job.frontmatter.blocked_actions ?? []).includes("merge")) return "merge is blocked by job frontmatter";
  if (job.frontmatter.allow_merge !== true) return "merge requires allow_merge: true";
  if (job.frontmatter.require_external_merge_preflight === true) {
    return "merge must be applied by the deterministic external preflight";
  }
  if (!["merge_candidate", "merge_canonical"].includes(String(action.action ?? ""))) {
    return "unsupported merge action";
  }
  return "";
}

function labelForClownfishReview(repo, target) {
  ensureLabel(repo, CLOWNFISH_LABEL, CLOWNFISH_LABEL_COLOR, CLOWNFISH_LABEL_DESCRIPTION);
  ghBestEffort(["issue", "edit", String(target), "--repo", repo, "--add-label", CLOWNFISH_LABEL]);
}

function ensureLabel(repo, name, color, description) {
  try {
    execFileSync("gh", ["label", "create", name, "--repo", repo, "--color", color, "--description", description], {
      cwd: repoRoot(),
      encoding: "utf8",
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 8 * 1024 * 1024,
    });
  } catch (error) {
    const detail = commandErrorText(error);
    if (!/already exists/i.test(detail)) return;
  }
}

function validateMergePreflight({ result, action, target, expectedHeadSha }) {
  const preflight = findMergePreflight(result, target);
  if (!preflight) return "merge requires merge_preflight entry";
  const externalBindingBlock = validateExternalMergeBindingFields({
    action,
    preflight,
    expectedHeadSha,
  });
  if (externalBindingBlock) return externalBindingBlock;
  if (preflight.security_status !== "cleared") return "security preflight is not cleared";
  if (!Array.isArray(preflight.security_evidence) || preflight.security_evidence.length === 0) {
    return "security preflight evidence is missing";
  }
  if (preflight.comments_status !== "resolved") return "review comments are not resolved";
  if (!Array.isArray(preflight.comments_evidence) || preflight.comments_evidence.length === 0) {
    return "review comments resolution evidence is missing";
  }
  if (preflight.bot_comments_status !== "resolved") return "review-bot comments are not resolved";
  if (!Array.isArray(preflight.bot_comments_evidence) || preflight.bot_comments_evidence.length === 0) {
    return "review-bot comment resolution evidence is missing";
  }
  if (!Array.isArray(preflight.validation_commands) || preflight.validation_commands.length === 0) {
    return "merge validation commands are missing";
  }
  const codexReview = preflight.codex_review;
  if (!codexReview || codexReview.command !== "/review") return "Codex /review preflight is missing";
  if (!["passed", "clean"].includes(codexReview.status)) return `Codex /review status is ${codexReview.status || "missing"}`;
  if (codexReview.findings_addressed !== true) return "Codex /review findings are not addressed";
  if (!Array.isArray(codexReview.evidence) || codexReview.evidence.length === 0) {
    return "Codex /review evidence is missing";
  }
  const unresolvedThreadBlock = validateResolvedReviewThreads(result.repo, target);
  if (unresolvedThreadBlock) return unresolvedThreadBlock;
  return "";
}

function validateExternalMergeBindingFields({ action, preflight, expectedHeadSha }) {
  if (!isExternalMergeAction(action)) return "";
  if (!preflight) return "external merge requires merge_preflight entry";
  if (!/^[0-9a-f]{40}$/i.test(String(preflight.reviewed_base_sha ?? ""))) {
    return "external merge preflight reviewed_base_sha is missing or invalid";
  }
  if (String(preflight.reviewed_head_sha ?? "").toLowerCase() !== expectedHeadSha.toLowerCase()) {
    return "external merge preflight reviewed_head_sha does not match expected head";
  }
  if (!/^[0-9a-f]{64}$/i.test(String(preflight.effective_diff_sha256 ?? ""))) {
    return "external merge preflight effective_diff_sha256 is missing or invalid";
  }
  if (!Number.isInteger(preflight.effective_diff_files) || preflight.effective_diff_files < 0) {
    return "external merge preflight effective_diff_files is missing or invalid";
  }
  if (!/^[0-9a-f]{40}$/i.test(String(preflight.synthetic_merge_tree_sha ?? ""))) {
    return "external merge preflight synthetic_merge_tree_sha is missing or invalid";
  }
  const manifest = preflight.base_adoption_manifest;
  if (manifest?.schema_version !== 1 || manifest?.policy !== "bounded-fast-forward-v1") {
    return "external merge preflight base adoption manifest is missing or unsupported";
  }
  if (
    String(manifest.reviewed_base_sha ?? "").toLowerCase() !==
      String(preflight.reviewed_base_sha).toLowerCase() ||
    String(manifest.reviewed_head_sha ?? "").toLowerCase() !== expectedHeadSha.toLowerCase() ||
    String(manifest.reviewed_merge_tree_sha ?? "").toLowerCase() !==
      String(preflight.synthetic_merge_tree_sha).toLowerCase() ||
    String(manifest.effective_diff_sha256 ?? "").toLowerCase() !==
      String(preflight.effective_diff_sha256).toLowerCase() ||
    manifest.effective_diff_files !== preflight.effective_diff_files
  ) {
    return "external merge preflight base adoption manifest does not match reviewed binding";
  }
  return "";
}

function isExternalMergeAction(action) {
  return String(action?.idempotency_key ?? "").startsWith("external-merge-preflight:");
}

function externalMergeHeadReport(action, expectedHeadSha, binding) {
  if (!isExternalMergeAction(action)) return {};
  return {
    reviewed_head_sha: binding?.reviewed_head_sha ?? expectedHeadSha,
    merge_head_sha: binding?.merge_head_sha ?? expectedHeadSha,
    ...(binding?.merge_commit_sha ? { test_merge_sha: binding.merge_commit_sha } : {}),
    ...(binding?.base_adoption ? { base_adoption: binding.base_adoption } : {}),
  };
}

function verifyExternalMergeBinding({ result, action, target, expectedHeadSha }) {
  if (!isExternalMergeAction(action)) return null;
  const preflight = findMergePreflight(result, target);
  const reviewedFingerprint = String(preflight.effective_diff_sha256).toLowerCase();
  const reviewedBaseSha = String(preflight.reviewed_base_sha).toLowerCase();
  const attempts = positiveInteger(process.env.CLOWNFISH_APPLY_MERGE_BINDING_ATTEMPTS, 60);
  const delayMs = nonNegativeInteger(process.env.CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS, 2000);
  let lastReason = "GitHub test merge ref was unavailable";
  let lastVerifiedMainSha = reviewedBaseSha;

  // GET /pulls/{number} asks GitHub to (re)compute the test merge. Wait for that
  // server-owned ref instead of rewriting the contributor branch when main advances.
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const verifiedMainSha = fetchBranchHeadSha(result.repo, "main");
      lastVerifiedMainSha = verifiedMainSha;
      const pull = fetchPullRequest(result.repo, target);
      const liveHeadSha = String(pull.head?.sha ?? "").toLowerCase();
      if (liveHeadSha !== expectedHeadSha.toLowerCase()) {
        return {
          reason: "pull request head changed during effective merge diff verification",
          reviewed_effective_diff_sha256: reviewedFingerprint,
          verified_main_sha: verifiedMainSha,
          retry_recommended: true,
          reviewed_head_sha: expectedHeadSha,
          merge_head_sha: liveHeadSha || null,
        };
      }
      if (verifiedMainSha !== reviewedBaseSha && !preflight.base_adoption_manifest) {
        return {
          reason: "main changed since external validation and Codex review",
          reviewed_effective_diff_sha256: reviewedFingerprint,
          verified_main_sha: verifiedMainSha,
          retry_recommended: true,
          reviewed_head_sha: expectedHeadSha,
          merge_head_sha: expectedHeadSha,
        };
      }

      const mergeCommitSha = String(pull.merge_commit_sha ?? "").toLowerCase();
      if (!/^[0-9a-f]{40}$/.test(mergeCommitSha)) {
        lastReason = "GitHub test merge commit SHA is unavailable";
      } else {
        const mergeCommit = ghJson([
          "api",
          `repos/${result.repo}/git/commits/${mergeCommitSha}`,
        ]);
        const parents = mergeCommit.parents ?? [];
        const mergeBaseSha = String(parents[0]?.sha ?? "").toLowerCase();
        const mergeHeadSha = String(parents[1]?.sha ?? "").toLowerCase();
        if (
          parents.length !== 2 ||
          mergeBaseSha !== verifiedMainSha ||
          mergeHeadSha !== expectedHeadSha.toLowerCase()
        ) {
          lastReason =
            "GitHub is still regenerating the test merge for current main and the exact PR head";
        } else {
          const baseCommit = ghJson([
            "api",
            `repos/${result.repo}/git/commits/${mergeBaseSha}`,
          ]);
          const baseEntries = fetchGitTreeEntries(result.repo, baseCommit.tree?.sha);
          const mergeEntries = fetchGitTreeEntries(result.repo, mergeCommit.tree?.sha);
          const liveFingerprint = fingerprintTreeEntries(baseEntries, mergeEntries);
          if (
            liveFingerprint.files !== preflight.effective_diff_files ||
            liveFingerprint.sha256 !== reviewedFingerprint
          ) {
            return {
              reason: "effective merge diff changed since Codex review",
              reviewed_effective_diff_sha256: reviewedFingerprint,
              live_effective_diff_sha256: liveFingerprint.sha256,
              verified_main_sha: verifiedMainSha,
              retry_recommended: true,
              reviewed_head_sha: expectedHeadSha,
              merge_head_sha: expectedHeadSha,
            };
          }

          let baseAdoption = null;
          if (verifiedMainSha !== reviewedBaseSha) {
            baseAdoption = runApplyTimeBaseAdoptionValidation({
              preflight,
              target,
              adoptedBaseSha: verifiedMainSha,
              expectedHeadSha,
            });
            if (baseAdoption.status !== "adopted") {
              return {
                reason: baseAdoption.reason || "apply-time main adoption validation failed",
                reviewed_effective_diff_sha256: reviewedFingerprint,
                live_effective_diff_sha256: liveFingerprint.sha256,
                verified_main_sha: verifiedMainSha,
                retry_recommended: true,
                reviewed_head_sha: expectedHeadSha,
                merge_head_sha: expectedHeadSha,
                base_adoption: baseAdoption,
              };
            }
          }
          const expectedTreeSha = String(
            baseAdoption?.synthetic_merge_tree_sha ?? preflight.synthetic_merge_tree_sha,
          ).toLowerCase();
          const liveTreeSha = String(mergeCommit.tree?.sha ?? "").toLowerCase();
          if (liveTreeSha !== expectedTreeSha) {
            return {
              reason: "GitHub test merge tree does not match the validated synthetic merge tree",
              reviewed_effective_diff_sha256: reviewedFingerprint,
              live_effective_diff_sha256: liveFingerprint.sha256,
              verified_main_sha: verifiedMainSha,
              retry_recommended: true,
              reviewed_head_sha: expectedHeadSha,
              merge_head_sha: expectedHeadSha,
            };
          }
          return {
            reviewed_effective_diff_sha256: reviewedFingerprint,
            live_effective_diff_sha256: liveFingerprint.sha256,
            effective_diff_files: liveFingerprint.files,
            verified_main_sha: verifiedMainSha,
            merge_commit_sha: mergeCommitSha,
            synthetic_merge_tree_sha: liveTreeSha,
            reviewed_head_sha: expectedHeadSha,
            merge_head_sha: expectedHeadSha,
            ...(baseAdoption
              ? {
                  base_drift_proof: baseAdoption.drift_proof,
                  base_adoption: baseAdoption,
                }
              : {}),
          };
        }
      }
    } catch (error) {
      lastReason = `could not verify GitHub test merge commit: ${compactErrorText(commandErrorText(error), 500)}`;
    }
    if (attempt < attempts && delayMs > 0) sleepMs(delayMs);
  }

  return {
    reason: lastReason,
    reviewed_effective_diff_sha256: reviewedFingerprint,
    verified_main_sha: lastVerifiedMainSha,
    retry_recommended: true,
    reviewed_head_sha: expectedHeadSha,
    merge_head_sha: expectedHeadSha,
  };
}

function runApplyTimeBaseAdoptionValidation({
  preflight,
  target,
  adoptedBaseSha,
  expectedHeadSha,
}) {
  const tempRoot = fs.mkdtempSync(
    path.join(path.dirname(resultPath), `.base-adoption-${target}-`),
  );
  const manifestPath = path.join(tempRoot, "manifest.json");
  const proofPath = path.join(tempRoot, "proof.json");
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(preflight.base_adoption_manifest, null, 2)}\n`,
  );
  try {
    execFileSync(
      process.execPath,
      [
        path.join(repoRoot(), "scripts", "preflight-external-pr-merge.mjs"),
        jobPath,
        "--pr",
        String(target),
        "--run-dir",
        tempRoot,
        "--target-dir",
        path.join(tempRoot, "target"),
        "--adoption-manifest",
        manifestPath,
        "--adopted-base-sha",
        adoptedBaseSha,
        "--expected-head-sha",
        expectedHeadSha,
        "--output",
        proofPath,
      ],
      {
        cwd: repoRoot(),
        env: githubCliEnv(),
        encoding: "utf8",
        timeout: positiveInteger(
          process.env.CLOWNFISH_APPLY_BASE_ADOPTION_TIMEOUT_MS,
          30 * 60 * 1000,
        ),
        maxBuffer: 64 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    if (!fs.existsSync(proofPath)) {
      return {
        schema_version: 1,
        policy: "bounded-fast-forward-v1",
        status: "blocked",
        reason: "apply-time adoption validator did not write a proof",
      };
    }
    return JSON.parse(fs.readFileSync(proofPath, "utf8"));
  } catch (error) {
    return {
      schema_version: 1,
      policy: "bounded-fast-forward-v1",
      status: "blocked",
      reason: `apply-time adoption validator failed: ${compactErrorText(commandErrorText(error), 500)}`,
    };
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

function captureApplyTimeAdoptionState({
  target,
  adoptedBaseSha,
  expectedHeadSha,
}) {
  const tempRoot = fs.mkdtempSync(
    path.join(path.dirname(resultPath), `.base-adoption-state-${target}-`),
  );
  const statePath = path.join(tempRoot, "state.json");
  try {
    execFileSync(
      process.execPath,
      [
        path.join(repoRoot(), "scripts", "preflight-external-pr-merge.mjs"),
        jobPath,
        "--pr",
        String(target),
        "--run-dir",
        tempRoot,
        "--adoption-state-only",
        "--adopted-base-sha",
        adoptedBaseSha,
        "--expected-head-sha",
        expectedHeadSha,
        "--output",
        statePath,
      ],
      {
        cwd: repoRoot(),
        env: githubCliEnv(),
        encoding: "utf8",
        timeout: positiveInteger(
          process.env.CLOWNFISH_APPLY_BASE_ADOPTION_STATE_TIMEOUT_MS,
          5 * 60 * 1000,
        ),
        maxBuffer: 16 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    if (!fs.existsSync(statePath)) {
      return {
        status: "blocked",
        reason: "apply-time adoption state recheck did not write a result",
      };
    }
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  } catch (error) {
    return {
      status: "blocked",
      reason: `apply-time adoption state recheck failed: ${compactErrorText(commandErrorText(error), 500)}`,
    };
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

function externalMergeMetadataBlock({ beforeIssue, beforePull, afterIssue, afterPull }) {
  const issueSnapshot = (issue) =>
    JSON.stringify({
      state: issue?.state ?? null,
      title: issue?.title ?? null,
      labels: (issue?.labels ?? [])
        .map((label) => String(label?.name ?? label))
        .sort(),
      author_association: issue?.author_association ?? null,
      locked: issue?.locked ?? false,
      milestone: issue?.milestone?.number ?? null,
      assignees: (issue?.assignees ?? [])
        .map((assignee) => String(assignee?.login ?? ""))
        .filter(Boolean)
        .sort(),
    });
  const pullSnapshot = (pull) =>
    JSON.stringify({
      state: pull?.state ?? null,
      draft: pull?.draft ?? false,
      base_ref: pull?.base?.ref ?? null,
      head_ref: pull?.head?.ref ?? null,
      head_repo: pull?.head?.repo?.full_name ?? null,
    });
  if (issueSnapshot(beforeIssue) !== issueSnapshot(afterIssue)) {
    return "target metadata changed during merge verification";
  }
  if (pullSnapshot(beforePull) !== pullSnapshot(afterPull)) {
    return "pull request metadata changed during merge verification";
  }
  if (String(afterPull?.head?.repo?.full_name ?? "") === "") {
    return "pull request head repository is unavailable";
  }
  if (String(afterPull?.head?.ref ?? "") === "") {
    return "pull request head ref is unavailable";
  }
  if (String(afterPull?.base?.ref ?? "") !== "main") {
    return "pull request base changed during merge verification";
  }
  return "";
}

function persistBaseAdoptionCheckpoint({
  base,
  action,
  expectedHeadSha,
  effectiveDiffBinding,
}) {
  const checkpoint = {
    ...report,
    checkpoint: "base_adoption_verified",
    actions: [
      ...report.actions,
      {
        ...base,
        status: "authorizing",
        reason: "apply-time base adoption validated; final merge recheck pending",
        expected_head_sha: expectedHeadSha,
        effective_diff_sha256: effectiveDiffBinding.live_effective_diff_sha256,
        verified_main_sha: effectiveDiffBinding.verified_main_sha,
        ...externalMergeHeadReport(action, expectedHeadSha, effectiveDiffBinding),
      },
    ],
    apply_attempts: priorApplyAttempts,
  };
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(checkpoint, null, 2)}\n`);
}

function restoreBaseAdoptionBinding({ action, target, expectedHeadSha, preflight }) {
  const priorActions = [
    ...(priorApplyReport?.apply_attempts ?? []).flatMap((attempt) => attempt?.actions ?? []),
    ...(priorApplyReport?.actions ?? []),
  ].reverse();
  for (const priorAction of priorActions) {
    const proof = priorAction?.base_adoption;
    if (
      String(priorAction?.target ?? "") !== String(action.target ?? target) ||
      proof?.schema_version !== 1 ||
      proof?.policy !== "bounded-fast-forward-v1" ||
      proof?.status !== "adopted"
    ) {
      continue;
    }
    const authorization = baseAdoptionAuthorization(proof);
    const authorizationSha256 = createHash("sha256")
      .update(JSON.stringify(authorization))
      .digest("hex");
    const verifiedMainSha = String(priorAction.verified_main_sha ?? "").toLowerCase();
    const effectiveDiffSha256 = String(
      priorAction.effective_diff_sha256 ?? "",
    ).toLowerCase();
    const mergeHeadSha = String(
      proof.merge_head_sha ?? proof.reviewed_head_sha ?? "",
    ).toLowerCase();
    if (
      proof.authorization_sha256 !== authorizationSha256 ||
      String(proof.reviewed_base_sha ?? "").toLowerCase() !==
        String(preflight?.reviewed_base_sha ?? "").toLowerCase() ||
      String(proof.reviewed_head_sha ?? "").toLowerCase() !==
        expectedHeadSha.toLowerCase() ||
      mergeHeadSha !==
        String(priorAction.merge_head_sha ?? expectedHeadSha).toLowerCase() ||
      String(proof.adopted_base_sha ?? "").toLowerCase() !== verifiedMainSha ||
      String(proof.effective_diff_sha256 ?? "").toLowerCase() !==
        String(preflight?.effective_diff_sha256 ?? "").toLowerCase() ||
      effectiveDiffSha256 !== String(preflight?.effective_diff_sha256 ?? "").toLowerCase() ||
      proof.effective_diff_files !== preflight?.effective_diff_files ||
      !/^[0-9a-f]{40}$/.test(verifiedMainSha)
    ) {
      continue;
    }
    return {
      reviewed_effective_diff_sha256: effectiveDiffSha256,
      live_effective_diff_sha256: effectiveDiffSha256,
      effective_diff_files: proof.effective_diff_files,
      verified_main_sha: verifiedMainSha,
      reviewed_head_sha: expectedHeadSha.toLowerCase(),
      merge_head_sha: mergeHeadSha,
      base_drift_proof: proof.drift_proof ?? null,
      base_adoption: proof,
    };
  }
  return null;
}

function baseAdoptionAuthorization(proof) {
  return {
    policy: proof.policy,
    reviewed_base_sha: proof.reviewed_base_sha,
    adopted_base_sha: proof.adopted_base_sha,
    reviewed_head_sha: proof.reviewed_head_sha,
    synthetic_merge_tree_sha: proof.synthetic_merge_tree_sha,
    effective_diff_files: proof.effective_diff_files,
    effective_diff_sha256: proof.effective_diff_sha256,
    drift_commit_count: proof.drift_commit_count,
    drift_file_count: proof.drift_file_count,
    drift_paths_sha256: proof.drift_paths_sha256,
    reviewed_paths_sha256: proof.reviewed_paths_sha256,
    validation_controls_sha256: proof.validation_controls_sha256,
    review_context_sha256: proof.review_context_sha256,
    validation_commands: proof.validation_commands,
    github_state_sha256: proof.github_state_sha256,
    issue_updated_at: proof.issue_updated_at,
    pull_updated_at: proof.pull_updated_at,
  };
}

function verifyExactMergeAuthorizationState({
  result,
  action,
  target,
  expectedHeadSha,
  mergeHeadSha,
  effectiveDiffBinding,
  beforeIssue,
  beforePull,
}) {
  try {
    // Finish the slow, paginated evidence checks before the final mutable PR
    // snapshot. Otherwise comments, reviews, labels, or checks can change while
    // CI history is being authenticated and escape the authorization decision.
    const ciGate = verifyFreshExactHeadCiGate({
      repo: result.repo,
      target,
      headSha: expectedHeadSha,
      preflight: findMergePreflight(result, target),
    });
    const preflightBlock = validateMergePreflight({
      result,
      action,
      target,
      expectedHeadSha,
    });
    let adoptionStateBlock = "";
    if (effectiveDiffBinding.base_adoption) {
      const adoptionState = captureApplyTimeAdoptionState({
        target,
        adoptedBaseSha: effectiveDiffBinding.verified_main_sha,
        expectedHeadSha,
      });
      if (adoptionState.status !== "clean") {
        adoptionStateBlock =
          adoptionState.reason || "fresh adoption verification state is not clean";
      } else if (
        adoptionState.github_state_sha256 !==
        effectiveDiffBinding.base_adoption.github_state_sha256
      ) {
        adoptionStateBlock =
          "GitHub comments, reviews, metadata, or checks changed during merge verification";
      }
    }
    const currentMainSha = fetchBranchHeadSha(result.repo, "main");
    const currentPull = fetchPullRequest(result.repo, target);
    const currentView = fetchSettledPullRequestView(result.repo, target, {
      allowedPendingCheckNames: COORDINATOR_CHECK_NAMES,
    });
    const currentIssue = fetchIssue(result.repo, target);
    const metadataBlock = externalMergeMetadataBlock({
      beforeIssue,
      beforePull,
      afterIssue: currentIssue,
      afterPull: currentPull,
    });
    const riskLabel = findHighRiskMergeLabel(currentIssue.labels);
    const mergeBlock = validateMergeablePullRequest({
      pullRequest: currentPull,
      view: currentView,
      allowExactMergeState: true,
      allowedPendingCheckNames: COORDINATOR_CHECK_NAMES,
      ignoredCheckNames: COORDINATOR_CHECK_NAMES,
    });
    if (
      currentMainSha !== effectiveDiffBinding.verified_main_sha ||
      String(currentPull.head?.sha ?? "").toLowerCase() !== mergeHeadSha.toLowerCase() ||
      String(currentPull.merge_commit_sha ?? "").toLowerCase() !==
        effectiveDiffBinding.merge_commit_sha.toLowerCase() ||
      currentIssue.updated_at !== beforeIssue.updated_at ||
      metadataBlock ||
      hasSecuritySignal(currentIssue) ||
      riskLabel ||
      mergeBlock ||
      preflightBlock ||
      ciGate.reason ||
      adoptionStateBlock
    ) {
      return {
        reason:
          preflightBlock ||
          mergeBlock ||
          ciGate.reason ||
          adoptionStateBlock ||
          metadataBlock ||
          (riskLabel ? `target has blocked live label: ${riskLabel}` : "") ||
          "head, test merge, main, metadata, comments, checks, or risk changed during exact-merge authorization",
        current_main_sha: currentMainSha,
        ci_gate: ciGate,
      };
    }
    return { reason: "", current_main_sha: currentMainSha, ci_gate: ciGate };
  } catch (error) {
    return {
      reason: `could not recheck exact-merge authorization: ${compactErrorText(commandErrorText(error), 500)}`,
      current_main_sha: null,
    };
  }
}

function verifyFreshExactHeadCiGate({ repo, target, headSha, preflight }) {
  // The Actions App is shared by every workflow. Bind the check back to the
  // repository's canonical CI workflow and refuse PRs that edit that workflow.
  const name = REQUIRED_CI_GATE_NAME;
  const workflowPath =
    process.env.CLOWNFISH_REQUIRED_CI_WORKFLOW_PATH ?? DEFAULT_REQUIRED_CI_WORKFLOW_PATH;
  const appId = positiveInteger(
    process.env.CLOWNFISH_REQUIRED_CI_GATE_APP_ID,
    DEFAULT_REQUIRED_CI_GATE_APP_ID,
  );
  const maxAgeHours = positiveInteger(
    process.env.CLOWNFISH_REQUIRED_CI_GATE_MAX_AGE_HOURS,
    DEFAULT_REQUIRED_CI_GATE_MAX_AGE_HOURS,
  );
  const effectivePaths = preflight?.base_adoption_manifest?.effective_paths ?? [];
  if (effectivePaths.includes(workflowPath)) {
    return {
      name,
      app_id: appId,
      head_sha: headSha.toLowerCase(),
      max_age_hours: maxAgeHours,
      workflow_path: workflowPath,
      reason: `${workflowPath} changed in this PR; exact-head CI requires maintainer handling`,
    };
  }
  const baseGate = {
    name,
    app_id: appId,
    head_sha: headSha.toLowerCase(),
    max_age_hours: maxAgeHours,
    workflow_path: workflowPath,
  };
  const pages = ghJson([
    "api",
    `repos/${repo}/commits/${headSha}/check-runs?check_name=${encodeURIComponent(name)}&filter=all&per_page=100`,
    "--paginate",
    "--slurp",
  ]);
  if (!Array.isArray(pages)) {
    return { ...baseGate, reason: `${name} check-run pagination returned an invalid response` };
  }
  const matching = pages
    .flatMap((page) => page?.check_runs ?? [])
    .filter(
      (check) =>
        check?.name === name &&
        String(check?.head_sha ?? "").toLowerCase() === headSha.toLowerCase() &&
        Number(check?.app?.id) === appId,
    )
    .sort((left, right) => {
      const timeOrder =
        Date.parse(String(right?.completed_at ?? "")) -
        Date.parse(String(left?.completed_at ?? ""));
      return Number.isFinite(timeOrder) && timeOrder !== 0
        ? timeOrder
        : Number(right?.id ?? 0) - Number(left?.id ?? 0);
    });
  const latest = matching[0];
  if (!latest) {
    return {
      ...baseGate,
      check_run_id: null,
      reason: `exact PR head has no ${name} check from GitHub App ${appId}`,
    };
  }
  // Gate policy is evidence-window based, not latest-attempt based: one
  // authenticated success remains valid for 24h despite later reruns.
  const successful = matching.filter(
    (check) => check.status === "completed" && check.conclusion === "success",
  );
  if (successful.length === 0) {
    return {
      ...baseGate,
      check_run_id: latest.id,
      status: latest.status ?? null,
      conclusion: latest.conclusion ?? null,
      completed_at: latest.completed_at ?? null,
      details_url: latest.details_url ?? null,
      reason: `${name} on the exact PR head is ${latest.status ?? "unknown"}/${latest.conclusion ?? "unknown"}`,
    };
  }
  const configuredNow = Date.parse(String(process.env.CLOWNFISH_GATE_NOW ?? ""));
  const now = Number.isFinite(configuredNow) ? configuredNow : Date.now();
  const maxAgeMs = maxAgeHours * 60 * 60 * 1000;
  const workflowFile = path.basename(workflowPath);
  let workflow;
  try {
    workflow = ghJson([
      "api",
      `repos/${repo}/actions/workflows/${encodeURIComponent(workflowFile)}`,
    ]);
  } catch (error) {
    return {
      ...baseGate,
      reason: `could not verify canonical CI workflow: ${compactErrorText(commandErrorText(error), 500)}`,
    };
  }
  if (!Number.isInteger(Number(workflow?.id)) || workflow.path !== workflowPath || workflow.state !== "active") {
    return { ...baseGate, reason: `${workflowPath} is not the active canonical CI workflow` };
  }

  let lastBlock = null;
  for (const check of successful) {
    const gate = {
      ...baseGate,
      check_run_id: check.id,
      status: check.status,
      conclusion: check.conclusion,
      completed_at: check.completed_at ?? null,
      details_url: check.details_url ?? null,
      workflow_id: workflow.id,
    };
    const completedAt = Date.parse(String(check.completed_at ?? ""));
    const ageMs = now - completedAt;
    if (!Number.isFinite(completedAt)) {
      lastBlock ??= { ...gate, reason: `${name} completion time is missing or invalid` };
      continue;
    }
    if (ageMs < -5 * 60 * 1000) {
      lastBlock ??= { ...gate, reason: `${name} completion time is unexpectedly in the future` };
      continue;
    }
    if (ageMs > maxAgeMs) {
      lastBlock ??= {
        ...gate,
        age_ms: ageMs,
        reason: `${name} has no successful canonical run within ${maxAgeHours} hours on the exact PR head`,
      };
      continue;
    }
    const details = String(check.details_url ?? "").match(
      /^https:\/\/github\.com\/([^/]+\/[^/]+)\/actions\/runs\/(\d+)\/job\/(\d+)$/,
    );
    if (!details || details[1].toLowerCase() !== repo.toLowerCase()) {
      lastBlock ??= {
        ...gate,
        age_ms: Math.max(0, ageMs),
        reason: `${name} has an invalid Actions URL`,
      };
      continue;
    }
    const runId = Number(details[2]);
    const jobId = Number(details[3]);
    let actionsJob;
    let actionsRun;
    try {
      actionsJob = ghJson(["api", `repos/${repo}/actions/jobs/${jobId}`]);
      actionsRun = ghJson(["api", `repos/${repo}/actions/runs/${runId}`]);
    } catch (error) {
      lastBlock ??= {
        ...gate,
        age_ms: Math.max(0, ageMs),
        run_id: runId,
        job_id: jobId,
        reason: `could not verify ${name} Actions run: ${compactErrorText(commandErrorText(error), 500)}`,
      };
      continue;
    }
    const pullBinding = (actionsRun.pull_requests ?? []).some(
      (pull) =>
        Number(pull?.number) === Number(target) &&
        String(pull?.head?.sha ?? "").toLowerCase() === headSha.toLowerCase() &&
        pull?.base?.ref === "main",
    );
    const expectedCheckRunUrl = `https://api.github.com/repos/${repo}/check-runs/${check.id}`;
    const workflowRunPath = String(actionsRun.path ?? "");
    const canonicalWorkflowRunPath =
      workflowRunPath === workflowPath ||
      (workflowRunPath.startsWith(`${workflowPath}@`) &&
        workflowRunPath.length > workflowPath.length + 1);
    if (
      Number(actionsJob.id) !== jobId ||
      Number(actionsJob.run_id) !== runId ||
      actionsJob.name !== name ||
      String(actionsJob.head_sha ?? "").toLowerCase() !== headSha.toLowerCase() ||
      actionsJob.status !== "completed" ||
      actionsJob.conclusion !== "success" ||
      actionsJob.check_run_url !== expectedCheckRunUrl ||
      actionsJob.html_url !== check.details_url ||
      Number(actionsRun.id) !== runId ||
      Number(actionsRun.workflow_id) !== Number(workflow.id) ||
      !canonicalWorkflowRunPath ||
      actionsRun.event !== "pull_request" ||
      String(actionsRun.head_sha ?? "").toLowerCase() !== headSha.toLowerCase() ||
      !pullBinding
    ) {
      lastBlock ??= {
        ...gate,
        age_ms: Math.max(0, ageMs),
        run_id: runId,
        job_id: jobId,
        reason: `${name} is not bound to the canonical completed CI workflow for this PR head`,
      };
      continue;
    }
    return {
      ...gate,
      age_ms: Math.max(0, ageMs),
      run_id: runId,
      job_id: jobId,
      workflow_run_status: actionsRun.status ?? null,
      workflow_run_conclusion: actionsRun.conclusion ?? null,
      reason: "",
    };
  }
  return lastBlock ?? { ...baseGate, reason: `${name} has no acceptable successful run` };
}

function validateExactMergeRule(repo) {
  const appId = positiveInteger(process.env.CLOWNFISH_APP_ID, 0);
  if (!appId) return "external merge requires CLOWNFISH_APP_ID for exact-merge rule verification";
  const rules = rulesetGhJson(["api", `repos/${repo}/rules/branches/main`]);
  const statusRules = (rules ?? []).filter((rule) => {
    if (rule?.type !== "required_status_checks") return false;
    const parameters = rule.parameters ?? {};
    if (parameters.strict_required_status_checks_policy !== true) return false;
    return (parameters.required_status_checks ?? []).some(
      (check) =>
        check?.context === EXACT_MERGE_CHECK_NAME &&
        Number(check?.integration_id) === appId,
    );
  });
  if (statusRules.length === 0) {
    return `main must strictly require ${EXACT_MERGE_CHECK_NAME} from GitHub App ${appId}`;
  }
  let bypassActorsUnavailable = false;
  for (const rule of statusRules) {
    const rulesetId = Number(rule.ruleset_id);
    const sourceType = String(rule.ruleset_source_type ?? "");
    const source = String(rule.ruleset_source ?? "");
    const endpoint =
      sourceType === "Repository" && source
        ? `repos/${source}/rulesets/${rulesetId}`
        : sourceType === "Organization" && source
          ? `orgs/${source}/rulesets/${rulesetId}`
          : "";
    if (!Number.isInteger(rulesetId) || rulesetId <= 0 || !endpoint) continue;
    let ruleset;
    try {
      ruleset = rulesetGhJson(["api", endpoint]);
    } catch {
      continue;
    }
    // GitHub omits bypass_actors without ruleset write access. Missing data
    // cannot prove that the App-bound check is non-bypassable.
    if (!Array.isArray(ruleset?.bypass_actors)) {
      bypassActorsUnavailable = true;
      continue;
    }
    const appBypasses = ruleset.bypass_actors.some(
      (actor) => actor?.actor_type === "Integration" && Number(actor?.actor_id) === appId,
    );
    const hasMatchingRule = (ruleset?.rules ?? []).some((candidate) => {
      const parameters = candidate?.parameters ?? {};
      return (
        candidate?.type === "required_status_checks" &&
        parameters.strict_required_status_checks_policy === true &&
        (parameters.required_status_checks ?? []).some(
          (check) =>
            check?.context === EXACT_MERGE_CHECK_NAME &&
            Number(check?.integration_id) === appId,
        )
      );
    });
    if (
      ruleset?.enforcement === "active" &&
      ruleset?.target === "branch" &&
      hasMatchingRule &&
      !appBypasses
    ) {
      return "";
    }
  }
  if (bypassActorsUnavailable) {
    return `${EXACT_MERGE_CHECK_NAME} ruleset bypass actors are unavailable; ruleset write access is required`;
  }
  return `${EXACT_MERGE_CHECK_NAME} must be enforced without a GitHub App ${appId} bypass`;
}

function prepareExactMergeCheck({ repo, action, target, effectiveDiffBinding }) {
  const appId = positiveInteger(process.env.CLOWNFISH_APP_ID, 0);
  const mergeCommitSha = effectiveDiffBinding.merge_commit_sha.toLowerCase();
  const adoptionProofSha = effectiveDiffBinding.base_adoption?.authorization_sha256 ?? null;
  const externalId = adoptionProofSha
    ? `${String(action.idempotency_key)}:adopt:${adoptionProofSha}`
    : String(action.idempotency_key);
  const detailsUrl =
    process.env.GITHUB_RUN_ID && process.env.GITHUB_REPOSITORY
      ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : undefined;
  let pending = findExactMergeCheckCandidate({ repo, mergeCommitSha, externalId, appId });
  if (pending?.status === "completed" && pending?.conclusion === "success") {
    const staleAuthorization = exactMergeCheckRecord(pending, mergeCommitSha, externalId);
    setActiveExactMergeAuthorization(repo, staleAuthorization);
    revokeExactMergeCheck({ repo, exactMergeCheck: staleAuthorization });
    clearActiveExactMergeAuthorization(staleAuthorization);
    pending = null;
  }
  if (!pending) {
    const pendingPayloadPath = writePayload(`pending-exact-merge-check-${target}`, {
      name: EXACT_MERGE_CHECK_NAME,
      head_sha: mergeCommitSha,
      status: "in_progress",
      external_id: externalId,
      ...(detailsUrl ? { details_url: detailsUrl } : {}),
      output: {
        title: `Exact merge pending for #${target}`,
        summary: "Final policy checks passed; merge authorization has not been granted yet.",
      },
    });
    try {
      pending = exactMergeGhJson([
        "api",
        `repos/${repo}/check-runs`,
        "--method",
        "POST",
        "--input",
        pendingPayloadPath,
      ]);
    } catch (error) {
      pending = findExactMergeCheckCandidate({ repo, mergeCommitSha, externalId, appId });
      if (!pending) throw error;
    }
  }
  if (pending?.status === "completed" && pending?.conclusion === "success") {
    const staleAuthorization = exactMergeCheckRecord(pending, mergeCommitSha, externalId);
    setActiveExactMergeAuthorization(repo, staleAuthorization);
    revokeExactMergeCheck({ repo, exactMergeCheck: staleAuthorization });
    clearActiveExactMergeAuthorization(staleAuthorization);
    return prepareExactMergeCheck({ repo, action, target, effectiveDiffBinding });
  }
  if (
    !pending ||
    pending.name !== EXACT_MERGE_CHECK_NAME ||
    pending.head_sha?.toLowerCase() !== mergeCommitSha ||
    pending.external_id !== externalId ||
    pending.status !== "in_progress" ||
    pending.conclusion != null ||
    Number(pending.app?.id) !== appId
  ) {
    throw new Error("GitHub returned an invalid pending exact-merge check run");
  }
  const pendingRecord = exactMergeCheckRecord(pending, mergeCommitSha, externalId);
  setActiveExactMergeAuthorization(repo, pendingRecord);
  return pendingRecord;
}

function authorizeExactMergeCheck({
  repo,
  target,
  exactMergeCheck,
  expectedHeadSha,
  mergeHeadSha,
  effectiveDiffBinding,
  ciGate,
}) {
  const appId = positiveInteger(process.env.CLOWNFISH_APP_ID, 0);
  const mergeCommitSha = effectiveDiffBinding.merge_commit_sha.toLowerCase();
  const adoptionProofSha = effectiveDiffBinding.base_adoption?.authorization_sha256 ?? null;
  const detailsUrl =
    process.env.GITHUB_RUN_ID && process.env.GITHUB_REPOSITORY
      ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : undefined;
  if (
    !exactMergeCheck ||
    exactMergeCheck.name !== EXACT_MERGE_CHECK_NAME ||
    exactMergeCheck.head_sha !== mergeCommitSha ||
    exactMergeCheck.status !== "in_progress" ||
    exactMergeCheck.conclusion != null ||
    exactMergeCheck.app_id !== appId
  ) {
    throw new Error("exact-merge authorization requires a valid pending check");
  }
  const successPayloadPath = writePayload(`authorize-exact-merge-check-${target}`, {
    name: EXACT_MERGE_CHECK_NAME,
    status: "completed",
    conclusion: "success",
    ...(detailsUrl ? { details_url: detailsUrl } : {}),
    output: {
      title: `Exact merge verified for #${target}`,
      summary:
        `Reviewed base ${effectiveDiffBinding.verified_main_sha}, reviewed head ${expectedHeadSha}, ` +
        `test merge ${mergeCommitSha}, effective diff ${effectiveDiffBinding.live_effective_diff_sha256}, ` +
        `CI run ${ciGate.run_id} (${ciGate.completed_at})` +
        `${mergeHeadSha !== expectedHeadSha ? `, merge head ${mergeHeadSha}` : ""}` +
        `${adoptionProofSha ? `, adoption proof ${adoptionProofSha}` : ""}.`,
    },
  });
  let authorized;
  try {
    authorized = exactMergeGhJson([
      "api",
      `repos/${repo}/check-runs/${exactMergeCheck.id}`,
      "--method",
      "PATCH",
      "--input",
      successPayloadPath,
    ]);
  } catch (error) {
    const recovered = findExactMergeCheck({
      repo,
      mergeCommitSha,
      externalId: exactMergeCheck.external_id,
      appId,
    });
    if (recovered?.id === exactMergeCheck.id) {
      const recoveredCheck = exactMergeCheckRecord(
        recovered,
        mergeCommitSha,
        exactMergeCheck.external_id,
      );
      setActiveExactMergeAuthorization(repo, recoveredCheck);
      return recoveredCheck;
    }
    setActiveExactMergeAuthorization(repo, exactMergeCheck);
    try {
      revokeExactMergeCheck({ repo, exactMergeCheck });
      clearActiveExactMergeAuthorization(exactMergeCheck);
    } catch {
      // The exit guard retries if GitHub accepted the authorization update.
    }
    throw error;
  }
  if (
    !authorized ||
    authorized.id !== exactMergeCheck.id ||
    authorized.name !== EXACT_MERGE_CHECK_NAME ||
    authorized.head_sha?.toLowerCase() !== mergeCommitSha ||
    authorized.status !== "completed" ||
    authorized.conclusion !== "success" ||
    authorized.external_id !== exactMergeCheck.external_id ||
    Number(authorized.app?.id) !== appId
  ) {
    setActiveExactMergeAuthorization(repo, exactMergeCheck);
    try {
      revokeExactMergeCheck({ repo, exactMergeCheck });
      clearActiveExactMergeAuthorization(exactMergeCheck);
    } catch {
      // The exit guard retries cleanup if authorization became visible late.
    }
    throw new Error("GitHub returned an invalid exact-merge authorization");
  }
  const authorizedCheck = exactMergeCheckRecord(
    authorized,
    mergeCommitSha,
    exactMergeCheck.external_id,
  );
  setActiveExactMergeAuthorization(repo, authorizedCheck);
  return authorizedCheck;
}

function findExactMergeCheck({ repo, mergeCommitSha, externalId, appId }) {
  const candidate = findExactMergeCheckCandidate({ repo, mergeCommitSha, externalId, appId });
  return candidate?.status === "completed" && candidate?.conclusion === "success"
    ? candidate
    : null;
}

function findExactMergeCheckCandidate({ repo, mergeCommitSha, externalId, appId }) {
  const response = ghJson([
    "api",
    `repos/${repo}/commits/${mergeCommitSha}/check-runs?check_name=${encodeURIComponent(EXACT_MERGE_CHECK_NAME)}&filter=all`,
  ]);
  const matching = (response?.check_runs ?? [])
    .filter(
      (check) =>
        check?.name === EXACT_MERGE_CHECK_NAME &&
        check?.head_sha?.toLowerCase() === mergeCommitSha &&
        check?.external_id === externalId &&
        Number(check?.app?.id) === appId,
    )
    .sort((left, right) => Number(right?.id ?? 0) - Number(left?.id ?? 0));
  const latest = matching[0];
  return latest?.status === "in_progress" ||
    (latest?.status === "completed" && latest?.conclusion === "success")
    ? latest
    : null;
}

function exactMergeCheckRecord(check, mergeCommitSha, externalId) {
  return {
    id: check.id,
    name: EXACT_MERGE_CHECK_NAME,
    head_sha: mergeCommitSha,
    external_id: externalId,
    app_id: Number(check.app?.id),
    status: check.status,
    conclusion: check.conclusion,
  };
}

function withExactMergeRevocation({ repo, exactMergeCheck, result }) {
  try {
    const revocation = revokeExactMergeCheck({ repo, exactMergeCheck });
    clearActiveExactMergeAuthorization(exactMergeCheck);
    return { ...result, exact_merge_revocation: revocation };
  } catch (error) {
    const reason = compactErrorText(commandErrorText(error), 500);
    return {
      ...result,
      reason: `${result.reason}; exact-merge revocation failed: ${reason}`,
      exact_merge_revocation: { status: "failed", reason },
    };
  }
}

function revokeExactMergeCheck({ repo, exactMergeCheck }) {
  const payloadPath = writePayload(`revoke-exact-merge-check-${exactMergeCheck.id}`, {
    name: EXACT_MERGE_CHECK_NAME,
    status: "completed",
    conclusion: "failure",
    output: {
      title: "Exact-merge authorization revoked",
      summary: "The authorization was not consumed by a verified merge.",
    },
  });
  const revoked = exactMergeGhJson([
    "api",
    `repos/${repo}/check-runs/${exactMergeCheck.id}`,
    "--method",
    "PATCH",
    "--input",
    payloadPath,
  ]);
  if (
    revoked?.id !== exactMergeCheck.id ||
    revoked?.name !== EXACT_MERGE_CHECK_NAME ||
    revoked?.status !== "completed" ||
    revoked?.conclusion !== "failure" ||
    Number(revoked?.app?.id) !== exactMergeCheck.app_id
  ) {
    throw new Error("GitHub returned an invalid exact-merge revocation");
  }
  return {
    status: "revoked",
    check_id: revoked.id,
    head_sha: exactMergeCheck.head_sha,
    external_id: exactMergeCheck.external_id,
    app_id: exactMergeCheck.app_id,
  };
}

function setActiveExactMergeAuthorization(repo, exactMergeCheck) {
  activeExactMergeAuthorization = { repo, exactMergeCheck };
}

function clearActiveExactMergeAuthorization(exactMergeCheck) {
  if (!activeExactMergeAuthorization) return;
  if (
    exactMergeCheck &&
    Number(activeExactMergeAuthorization.exactMergeCheck?.id) !== Number(exactMergeCheck.id)
  ) {
    return;
  }
  activeExactMergeAuthorization = null;
}

function installExactMergeExitCleanup() {
  const cleanup = () => {
    if (!activeExactMergeAuthorization || exactMergeCleanupRunning) return;
    exactMergeCleanupRunning = true;
    try {
      revokeExactMergeCheck(activeExactMergeAuthorization);
      activeExactMergeAuthorization = null;
    } catch (error) {
      console.error(
        `failed to revoke active exact-merge authorization: ${compactErrorText(commandErrorText(error), 500)}`,
      );
    } finally {
      exactMergeCleanupRunning = false;
    }
  };
  process.once("exit", cleanup);
  for (const [signal, exitCode] of [
    ["SIGINT", 130],
    ["SIGTERM", 143],
    ["SIGHUP", 129],
  ]) {
    process.once(signal, () => {
      cleanup();
      process.exit(exitCode);
    });
  }
}

function verifyActualMergedCommit({
  result,
  action,
  target,
  expectedHeadSha,
  mergeHeadSha = expectedHeadSha,
  pullRequest,
  effectiveDiffBinding = null,
}) {
  if (!isExternalMergeAction(action)) return null;
  const preflight = findMergePreflight(result, target);
  const bindingBlock = validateExternalMergeBindingFields({
    action,
    preflight,
    expectedHeadSha,
  });
  if (bindingBlock) return { reason: bindingBlock };
  if (String(pullRequest?.head?.sha ?? "").toLowerCase() !== mergeHeadSha.toLowerCase()) {
    return { reason: "merged pull request head does not match the verified merge head" };
  }
  const reviewedFingerprint = String(
    effectiveDiffBinding?.live_effective_diff_sha256 ??
      preflight.effective_diff_sha256,
  ).toLowerCase();
  const reviewedBaseSha = String(
    effectiveDiffBinding?.verified_main_sha ??
      preflight.reviewed_base_sha,
  ).toLowerCase();
  const mergeCommitSha = String(pullRequest?.merge_commit_sha ?? "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(mergeCommitSha)) {
    return {
      reason: "merged pull request does not expose a valid squash commit SHA",
      reviewed_effective_diff_sha256: reviewedFingerprint,
    };
  }
  try {
    const mergeCommit = ghJson(["api", `repos/${result.repo}/git/commits/${mergeCommitSha}`]);
    const parents = mergeCommit.parents ?? [];
    if (parents.length !== 1 || String(parents[0]?.sha ?? "").toLowerCase() !== reviewedBaseSha) {
      return {
        reason: "actual squash commit is not based on the authorized main SHA",
        reviewed_effective_diff_sha256: reviewedFingerprint,
        verified_parent_sha: String(parents[0]?.sha ?? "").toLowerCase() || null,
      };
    }
    const parentCommit = ghJson(["api", `repos/${result.repo}/git/commits/${reviewedBaseSha}`]);
    const parentEntries = fetchGitTreeEntries(result.repo, parentCommit.tree?.sha);
    const mergedEntries = fetchGitTreeEntries(result.repo, mergeCommit.tree?.sha);
    const mergedFingerprint = fingerprintTreeEntries(parentEntries, mergedEntries);
    if (
      mergedFingerprint.files !== preflight.effective_diff_files ||
      mergedFingerprint.sha256 !== reviewedFingerprint
    ) {
      return {
        reason: "actual squash commit diff does not match the reviewed effective diff",
        reviewed_effective_diff_sha256: reviewedFingerprint,
        merged_effective_diff_sha256: mergedFingerprint.sha256,
        verified_parent_sha: reviewedBaseSha,
      };
    }
    return {
      reviewed_effective_diff_sha256: reviewedFingerprint,
      merged_effective_diff_sha256: mergedFingerprint.sha256,
      verified_parent_sha: reviewedBaseSha,
    };
  } catch (error) {
    return {
      reason: `could not verify actual squash commit: ${compactErrorText(String(error?.message ?? error), 500)}`,
      reviewed_effective_diff_sha256: reviewedFingerprint,
    };
  }
}

function fetchGitTreeEntries(repo, treeSha) {
  if (!/^[0-9a-f]{40}$/i.test(String(treeSha ?? ""))) {
    throw new Error("GitHub commit tree SHA is missing or invalid");
  }
  const response = ghJson(["api", `repos/${repo}/git/trees/${treeSha}?recursive=1`]);
  if (response.truncated) throw new Error("GitHub recursive tree response was truncated");
  const entries = new Map();
  for (const entry of response.tree ?? []) {
    if (entry.type === "tree") continue;
    const filePath = String(entry.path ?? "");
    const mode = String(entry.mode ?? "");
    const type = String(entry.type ?? "");
    const sha = String(entry.sha ?? "").toLowerCase();
    if (!filePath || !mode || !type || !/^[0-9a-f]{40}$/i.test(sha)) {
      throw new Error("GitHub tree contains an invalid entry");
    }
    entries.set(filePath, `${mode}:${type}:${sha}`);
  }
  return entries;
}

function fingerprintTreeEntries(baseEntries, resultEntries) {
  const changes = [];
  const paths = [...new Set([...baseEntries.keys(), ...resultEntries.keys()])].sort();
  for (const filePath of paths) {
    const before = baseEntries.get(filePath) ?? null;
    const after = resultEntries.get(filePath) ?? null;
    if (before === after) continue;
    changes.push([filePath, before, after]);
  }
  const serialized = `${changes.map((entry) => JSON.stringify(entry)).join("\n")}\n`;
  return {
    files: changes.length,
    sha256: sha256(serialized),
    changes,
  };
}

function findMergePreflight(result, target) {
  const expected = `#${target}`;
  for (const item of result.merge_preflight ?? []) {
    if (normalizeIssueRef(item?.target, result.repo) === target || String(item?.target ?? "") === expected) {
      return item;
    }
  }
  return null;
}

function validateMergedCandidateFix(repo, candidateFix) {
  if (!candidateFix) return "post-merge close requires candidate_fix";
  const candidate = fetchPullRequest(repo, candidateFix);
  if (!candidate.merged_at) return "candidate fix is not merged";
  return "";
}

function validateResolvedReviewThreads(repo, target) {
  const [owner, name] = repo.split("/");
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        pullRequest(number: $number) {
          reviewThreads(first: 100) {
            pageInfo { hasNextPage }
            nodes {
              isResolved
              path
              line
              comments(first: 1) {
                nodes {
                  url
                  author { login }
                  body
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = ghJson([
    "api",
    "graphql",
    "-f",
    `owner=${owner}`,
    "-f",
    `name=${name}`,
    "-F",
    `number=${target}`,
    "-f",
    `query=${query}`,
  ]);
  const threads = data?.data?.repository?.pullRequest?.reviewThreads;
  if (threads?.pageInfo?.hasNextPage) return "too many review threads to prove resolved";
  const unresolved = (threads?.nodes ?? []).filter((thread) => thread && !thread.isResolved);
  if (unresolved.length === 0) return "";
  const examples = unresolved
    .slice(0, 3)
    .map((thread) => thread.comments?.nodes?.[0]?.url ?? `${thread.path}:${thread.line ?? "?"}`);
  return `unresolved review threads remain: ${examples.join(", ")}`;
}

function validateReplacementCloseout({ result, actionName, target }) {
  if (!["close_superseded", "close_fixed_by_candidate", "post_merge_close"].includes(actionName)) return "";
  const fixArtifact = result.fix_artifact;
  if (fixArtifact?.repair_strategy !== "replace_uneditable_branch") return "";
  const sourceTargets = new Set((fixArtifact.source_prs ?? []).map((ref) => normalizeIssueRef(ref, result.repo)));
  if (!sourceTargets.has(target)) return "";
  return "replacement PR closeout is handled by execute-fix after the replacement branch is pushed";
}

function validateMergeablePullRequest({
  pullRequest,
  view,
  allowExactMergeState = false,
  allowedPendingCheckNames = [],
  ignoredCheckNames = [],
}) {
  if (pullRequest.state !== "open") return `pull request is ${pullRequest.state}`;
  if (pullRequest.draft || view.isDraft) return "pull request is draft";
  if (String(view.baseRefName ?? pullRequest.base?.ref ?? "") !== "main") return "pull request base is not main";
  if (view.mergeable !== "MERGEABLE") return `mergeable state is ${view.mergeable || "unknown"}`;
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    return `review decision is ${view.reviewDecision}`;
  }
  const checkBlock = validateStatusChecks(view.statusCheckRollup ?? [], {
    allowedPendingCheckNames,
    ignoredCheckNames,
  });
  if (checkBlock) return checkBlock;
  if (
    !isAcceptableMergeState(view, {
      allowExactMergeState,
      allowedPendingCheckNames,
      ignoredCheckNames,
    })
  ) {
    return `merge state status is ${view.mergeStateStatus || "unknown"}`;
  }
  return "";
}

function validatePullRequestCurrentBase({
  repo,
  pullRequest,
  view,
  allowExactMergeState = false,
  ignoredCheckNames = [],
}) {
  const pullRequestBaseSha = String(pullRequest?.base?.sha ?? "");
  const currentMainSha = fetchBranchHeadSha(repo, "main");
  if (!pullRequestBaseSha || !currentMainSha) {
    return {
      reason: "could not verify that the pull request base matches current main",
      pull_request_base_sha: pullRequestBaseSha || null,
      current_main_sha: currentMainSha || null,
    };
  }
  if (pullRequestBaseSha !== currentMainSha) {
    if (
      view?.mergeable === "MERGEABLE" &&
      isAcceptableMergeState(view, { allowExactMergeState, ignoredCheckNames }) &&
      !validateStatusChecks(view.statusCheckRollup ?? [], { ignoredCheckNames })
    ) {
      return null;
    }
    return {
      reason:
        "pull request base is stale relative to current main and cannot be adopted cleanly; resolve the blocker and rerun external preflight",
      pull_request_base_sha: pullRequestBaseSha,
      current_main_sha: currentMainSha,
    };
  }
  return null;
}

function validateStatusChecks(
  checks,
  { allowedPendingCheckNames = [], ignoredCheckNames = [] } = {},
) {
  if (!Array.isArray(checks) || checks.length === 0) return "no PR checks found";
  const blockers = [];
  const pending = [];
  const allowedPending = new Set(allowedPendingCheckNames);
  const ignored = new Set(ignoredCheckNames);
  for (const check of latestStatusChecks(checks)) {
    const name = check.name ?? check.context ?? "unknown check";
    if (ignored.has(name)) continue;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    if (status === "COMPLETED") {
      if (!conclusion || !PASSING_CHECK_CONCLUSIONS.has(conclusion)) {
        blockers.push(`${name}: ${conclusion || "MISSING_CONCLUSION"}`);
      }
    } else if (status === "SUCCESS") {
      continue;
    } else if (["FAILURE", "ERROR"].includes(status)) {
      blockers.push(`${name}: ${status}`);
    } else if (!allowedPending.has(name)) {
      pending.push(`${name}: ${status || "PENDING"}`);
    }
  }
  if (blockers.length > 0) return `checks are not clean: ${blockers.slice(0, 5).join(", ")}`;
  if (pending.length > 0) return `checks are pending: ${pending.slice(0, 5).join(", ")}`;
  return "";
}

function isAcceptableMergeState(
  view,
  {
    allowExactMergeState = false,
    allowedPendingCheckNames = [],
    ignoredCheckNames = [],
  } = {},
) {
  const state = String(view.mergeStateStatus ?? "");
  if (CLEAN_MERGE_STATES.has(state)) return true;
  if (
    state !== "UNSTABLE" &&
    !(allowExactMergeState && ["BLOCKED", "BEHIND"].includes(state))
  ) {
    return false;
  }
  // Exact-bound external actions verify the synthetic merge against current
  // main before attempting the one-shot merge.
  return (
    view.mergeable === "MERGEABLE" &&
    !validateStatusChecks(view.statusCheckRollup ?? [], {
      allowedPendingCheckNames,
      ignoredCheckNames,
    })
  );
}

function latestStatusChecks(checks) {
  const latest = new Map();
  for (const check of checks) {
    const key = `${String(check.workflowName ?? "")}\0${check.name ?? check.context ?? "unknown check"}`;
    const prior = latest.get(key);
    if (!prior || checkTimestamp(check) >= checkTimestamp(prior)) {
      latest.set(key, check);
    }
  }
  return [...latest.values()];
}

function checkTimestamp(check) {
  const value = Date.parse(String(check.completedAt ?? check.completed_at ?? check.startedAt ?? check.started_at ?? ""));
  return Number.isFinite(value) ? value : 0;
}

function isApplicatorAction(action) {
  return CLOSE_ACTIONS.has(String(action?.action ?? "")) || MERGE_ACTIONS.has(String(action?.action ?? ""));
}

function normalizeIssueRef(value, expectedRepo = "") {
  const text = String(value ?? "").trim();
  const shorthand = text.match(/^#?(\d+)$/);
  if (shorthand) return Number(shorthand[1]);

  const url = text.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/(?:issues|pull)\/(\d+)(?:[/?#].*)?$/);
  if (!url) return 0;
  if (expectedRepo && url[1].toLowerCase() !== expectedRepo.toLowerCase()) return 0;
  return Number(url[2]);
}

function normalizeClassification(action) {
  const raw = String(action.classification ?? action.close_reason ?? action.reason ?? "").toLowerCase();
  if (raw.includes("low_signal") || raw.includes("low-signal") || raw.includes("low signal")) return "low_signal";
  if (raw.includes("fixed") || raw.includes("candidate")) return "fixed_by_candidate";
  if (raw.includes("superseded") || raw.includes("supersede")) return "superseded";
  if (raw.includes("duplicate") || raw.includes("dupe")) return "duplicate";
  if (action.action === "close_fixed_by_candidate") return "fixed_by_candidate";
  if (action.action === "close_low_signal") return "low_signal";
  if (action.action === "close_superseded") return "superseded";
  if (action.action === "close_duplicate") return "duplicate";
  if (action.action === "post_merge_close") return "fixed_by_candidate";
  return raw;
}

function defaultIdempotencyKey(clusterId, target, actionName, classification) {
  return sha256(`${clusterId}:${target}:${actionName}:${classification}`).slice(0, 24);
}

function idempotencyMarker(clusterId, target, key) {
  return `<!-- projectclownfish:close:${clusterId}:#${target}:${key} -->`;
}

function renderCloseComment({ action, classification, result, target, live }) {
  if (typeof action.comment === "string" && action.comment.trim()) return action.comment;
  const canonical = normalizeIssueRef(action.canonical ?? action.duplicate_of);
  const candidateFix = normalizeIssueRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
  const title = typeof live.title === "string" ? live.title : `#${target}`;
  const reason = action.reason ? String(action.reason).trim() : closeReasonText(classification);
  return defaultCloseComment({
    action,
    classification,
    clusterId: result.cluster_id,
    target,
    title,
    canonical,
    candidateFix,
    reason,
    provenance: externalMessageProvenance({
      reviewedSha: action.reviewed_sha ?? action.head_sha ?? result.reviewed_sha ?? result.head_sha,
    }),
  });
}

function closeReasonText(classification) {
  switch (classification) {
    case "duplicate":
      return "duplicate of the canonical thread";
    case "superseded":
      return "superseded by the canonical candidate";
    case "fixed_by_candidate":
      return "covered by the candidate fix";
    case "low_signal":
      return "low-signal PR cleanup";
    default:
      return "closed by projectclownfish";
  }
}

function validateLowSignalIntent({ job, action, actionName, classification }) {
  if (job.frontmatter.triage_policy !== "low_signal_prs") {
    return "low-signal close requires triage_policy: low_signal_prs";
  }
  if (job.frontmatter.allow_low_signal_pr_close !== true) {
    return "low-signal close requires allow_low_signal_pr_close: true";
  }
  if (actionName !== "close_low_signal" || classification !== "low_signal") {
    return "low-signal close requires close_low_signal action and low_signal classification";
  }
  if (action.target_kind !== "pull_request") {
    return "low-signal close requires pull_request target_kind";
  }
  return "";
}

function validateLowSignalLiveState(repo, target, live, kind) {
  if (kind !== "pull_request") return "low-signal cleanup may only close pull requests";
  if (hasSecuritySignal(live)) return "security-sensitive target requires human triage";
  if (Array.isArray(live.assignees) && live.assignees.length > 0) {
    return "assigned PR has maintainer/human signal";
  }

  const pullRequest = fetchPullRequest(repo, target);
  if ((pullRequest.requested_reviewers ?? []).length > 0 || (pullRequest.requested_teams ?? []).length > 0) {
    return "requested reviewers or teams indicate active review signal";
  }

  const maintainerComments = ghPaged(`repos/${repo}/issues/${target}/comments`).filter((comment) =>
    MAINTAINER_AUTHOR_ASSOCIATIONS.has(normalizeAuthorAssociation(comment.author_association)),
  );
  if (maintainerComments.length > 0) return "maintainer issue comment blocks low-signal auto-close";

  const maintainerReviews = ghPaged(`repos/${repo}/pulls/${target}/reviews`).filter((review) =>
    MAINTAINER_AUTHOR_ASSOCIATIONS.has(normalizeAuthorAssociation(review.author_association)),
  );
  if (maintainerReviews.length > 0) return "maintainer PR review blocks low-signal auto-close";

  return "";
}

function hasSecuritySignal(issue) {
  if (hasDeterministicSecuritySignal({ labels: issue.labels ?? [] })) return true;
  const comments = ghPaged(`repos/${result.repo}/issues/${issue.number}/comments?per_page=100`).map((comment) => comment.body ?? "");
  return hasDeterministicSecuritySignal({ comments });
}

function fetchIssue(repo, number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function fetchPullRequest(repo, number) {
  return ghJson(["api", `repos/${repo}/pulls/${number}`]);
}

function fetchBranchHeadSha(repo, branch) {
  const ref = ghJson(["api", `repos/${repo}/git/ref/heads/${branch}`]);
  return String(ref?.object?.sha ?? "");
}

function fetchPullRequestView(repo, number) {
  return ghJson([
    "pr",
    "view",
    String(number),
    "--repo",
    repo,
    "--json",
    [
      "baseRefName",
      "isDraft",
      "mergeable",
      "mergeCommit",
      "mergeStateStatus",
      "mergedAt",
      "reviewDecision",
      "state",
      "statusCheckRollup",
      "title",
      "updatedAt",
      "url",
    ].join(","),
  ]);
}

function fetchSettledPullRequestView(
  repo,
  number,
  { allowedPendingCheckNames = [] } = {},
) {
  const attempts = positiveInteger(process.env.CLOWNFISH_APPLY_MERGEABLE_POLL_ATTEMPTS, 6);
  const delayMs = nonNegativeInteger(process.env.CLOWNFISH_APPLY_MERGEABLE_POLL_DELAY_MS, 5000);
  let latest = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    latest = fetchPullRequestView(repo, number);
    if (
      !hasUnknownMergeability(latest) &&
      !hasPendingStatusChecks(latest.statusCheckRollup ?? [], {
        allowedPendingCheckNames,
      })
    ) {
      return latest;
    }
    if (attempt < attempts && delayMs > 0) {
      execFileSync("sleep", [String(delayMs / 1000)], { stdio: "ignore" });
    }
  }
  return latest;
}

function hasPendingStatusChecks(checks, { allowedPendingCheckNames = [] } = {}) {
  if (!Array.isArray(checks) || checks.length === 0) return true;
  const allowedPending = new Set(allowedPendingCheckNames);
  return latestStatusChecks(checks).some((check) => {
    const name = check.name ?? check.context ?? "unknown check";
    if (allowedPending.has(name)) return false;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    return !["COMPLETED", "SUCCESS", "FAILURE", "ERROR"].includes(status);
  });
}

function hasUnknownMergeability(view) {
  return ["", "UNKNOWN"].includes(String(view?.mergeable ?? "").toUpperCase()) || ["", "UNKNOWN"].includes(String(view?.mergeStateStatus ?? "").toUpperCase());
}

function findExistingComment(repo, number, marker, body) {
  const comments = ghPaged(`repos/${repo}/issues/${number}/comments`);
  return comments.find((comment) => comment.body?.includes(marker) || comment.body === body);
}

function commentMatchesLiveUpdatedAt(comment, live) {
  const liveUpdatedAt = String(live?.updated_at ?? "");
  return Boolean(liveUpdatedAt && [comment?.updated_at, comment?.created_at].includes(liveUpdatedAt));
}

function isBenignExactHeadClawSweeperUpdate({ repo, target, live, expectedHeadSha }) {
  const comments = ghPaged(`repos/${repo}/issues/${target}/comments?per_page=100`).filter((comment) =>
    commentMatchesLiveUpdatedAt(comment, live),
  );
  if (comments.length === 0) return false;
  return comments.every((comment) => {
    const author = String(comment.user?.login ?? "").toLowerCase();
    const body = String(comment.body ?? "");
    if (!["clawsweeper", "clawsweeper[bot]"].includes(author)) return false;
    const verdicts = parseClawSweeperMarkers(body, "verdict");
    const actions = parseClawSweeperMarkers(body, "action");
    const results = [...body.matchAll(/^Result:\s*(.+?)\s*$/gim)].map((match) =>
      String(match[1] ?? "").toLowerCase(),
    );
    if (verdicts.length !== 1 || actions.length !== 0 || results.length !== 1) return false;
    const [verdict] = verdicts;
    return (
      verdict.valid &&
      verdict.action === "needs-human" &&
      verdict.attrs.item === String(target) &&
      verdict.attrs.sha?.toLowerCase() === expectedHeadSha.toLowerCase() &&
      verdict.attrs.confidence === "high" &&
      results[0] === "ready for maintainer review."
    );
  });
}

function parseClawSweeperMarkers(body, kind) {
  const markers = [];
  const pattern = new RegExp(`<!--\\s*clawsweeper-${kind}:\\s*([a-z0-9_-]+)([^>]*)-->`, "gi");
  for (const match of String(body ?? "").matchAll(pattern)) {
    const attrs = {};
    let valid = true;
    for (const attr of String(match[2] ?? "").matchAll(/([a-z0-9_-]+)=("[^"]*"|'[^']*'|[^\s>]+)/gi)) {
      const key = attr[1].toLowerCase();
      if (Object.hasOwn(attrs, key)) valid = false;
      attrs[key] = String(attr[2] ?? "").replace(/^["']|["']$/g, "");
    }
    markers.push({ action: match[1].toLowerCase(), attrs, valid });
  }
  return markers;
}

function postIssueComment(repo, number, body) {
  const payloadPath = writePayload(`comment-${number}`, { body });
  ghWithRetry(["api", `repos/${repo}/issues/${number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function closeIssueOrPullRequest(repo, number, kind, classification) {
  if (kind === "pull_request") {
    ghWithRetry(["pr", "close", String(number), "--repo", repo]);
    return;
  }
  const stateReason = classification === "fixed_by_candidate" ? "completed" : "not_planned";
  const payloadPath = writePayload(`close-${number}`, { state: "closed", state_reason: stateReason });
  ghWithRetry(["api", `repos/${repo}/issues/${number}`, "--method", "PATCH", "--input", payloadPath]);
}

function writePayload(name, value) {
  const dir = path.join(repoRoot(), ".projectclownfish", "payloads");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(value), "utf8");
  return file;
}

function positiveInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function nonNegativeInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
}

function ghJson(ghArgs) {
  const text = ghWithRetry(ghArgs);
  return JSON.parse(stripAnsi(text) || "null");
}

function exactMergeGhJson(ghArgs) {
  const token = process.env.CLOWNFISH_CHECKS_GH_TOKEN;
  if (!token) {
    throw new Error("exact-merge check mutation requires CLOWNFISH_CHECKS_GH_TOKEN");
  }
  const text = ghWithRetry(ghArgs, 6, githubCliEnv({ ghToken: token }));
  return JSON.parse(stripAnsi(text) || "null");
}

function rulesetGhJson(ghArgs) {
  const token = process.env.CLOWNFISH_RULES_GH_TOKEN;
  if (!token) return ghJson(ghArgs);
  const text = ghWithRetry(ghArgs, 6, githubCliEnv({ ghToken: token }));
  return JSON.parse(stripAnsi(text) || "null");
}

function ghPaged(apiPath) {
  const pages = ghJson(["api", apiPath, "--paginate", "--slurp"]);
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => (Array.isArray(page) ? page : []));
}

function ghWithRetry(ghArgs, attempts = 6, env = githubCliEnv()) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return ghOnce(ghArgs, env);
    } catch (error) {
      lastError = error;
      if (!shouldRetryGh(error) || attempt === attempts - 1) throw error;
      const baseDelayMs = positiveInteger(process.env.CLOWNFISH_GH_RETRY_BASE_MS, 10_000);
      sleepMs(Math.min(120_000, baseDelayMs * 2 ** attempt));
    }
  }
  throw lastError;
}

function ghOnce(ghArgs, env = githubCliEnv()) {
  return execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function githubCliEnv({ ghToken } = {}) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  if (ghToken) env.GH_TOKEN = ghToken;
  else if (!env.GH_TOKEN && env.CLOWNFISH_GH_TOKEN) env.GH_TOKEN = env.CLOWNFISH_GH_TOKEN;
  delete env.FORCE_COLOR;
  return env;
}

function ghBestEffort(ghArgs) {
  try {
    return ghWithRetry(ghArgs);
  } catch {
    return "";
  }
}

function commandErrorText(error) {
  return [
    error?.stderr,
    error?.stdout,
    error instanceof Error ? error.message : String(error ?? ""),
  ]
    .filter(Boolean)
    .join("\n")
    .trim();
}

function transientRateLimitBlock(base, reason) {
  return {
    ...base,
    status: "blocked",
    reason,
    retry_recommended: true,
    transient_error: "github_rate_limit",
  };
}

function transientRateLimitReason(error) {
  return `GitHub rate limit while applying action; retry the job after quota resets: ${compactErrorText(commandErrorText(error), 500)}`;
}

function isPrimaryRateLimitError(error) {
  return isGithubRateLimitText(commandErrorText(error));
}

function isGithubRateLimitText(value) {
  return /\b(?:graphql:\s*)?(?:api\s*)?(?:secondary\s*)?rate limit(?: already)? exceeded\b/i.test(
    String(value ?? ""),
  );
}

function compactErrorText(text, maxChars) {
  const compacted = stripAnsi(String(text ?? "")).replace(/\s+/g, " ").trim();
  if (compacted.length <= maxChars) return compacted;
  return `${compacted.slice(0, maxChars - 3)}...`;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function shouldRetryGh(error) {
  const stderr = String(error?.stderr ?? "");
  const message = `${error instanceof Error ? error.message : String(error)}\n${stderr}`;
  return (
    message.includes("was submitted too quickly") ||
    message.includes("secondary rate") ||
    /\bHTTP (?:502|503|504)\b/i.test(message) ||
    /\b(?:bad gateway|service unavailable|gateway timeout)\b/i.test(message) ||
    /error connecting to api\.github\.com/i.test(message)
  );
}

function isMergeRefMovementError(error) {
  const text = commandErrorText(error);
  return text.includes("Base branch was modified") || text.includes("Head branch was modified");
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function normalizeAuthorAssociation(value) {
  return typeof value === "string" && value.trim() ? value.trim().toUpperCase() : "NONE";
}

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}
