#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { assertAllowedOwner, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import { hasSecuritySensitiveText } from "./security-sensitive.mjs";

const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN"]);
const PRE_AUTHORIZATION_MERGE_STATES = new Set(["UNSTABLE", "BLOCKED", "BEHIND"]);
const IGNORED_CHECKS = new Set(["auto-response", "Labeler", "Stale"]);
const REVIEW_BOT_PATTERN = /\b(?:greptile|codex|asile|coderabbit|copilot)\b/i;
const INSTALL_TIMEOUT_MS = positiveInteger(process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_INSTALL_TIMEOUT_MS, 10 * 60 * 1000);
const VALIDATION_TIMEOUT_MS = positiveInteger(process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_VALIDATION_TIMEOUT_MS, 20 * 60 * 1000);
const FAILURE_REASON_MAX_CHARS = 4000;
const FAILURE_STREAM_MAX_CHARS = 1800;

const args = parseArgs(process.argv.slice(2));
const sourceJobPath = args._[0];
const pullRequest = Number(args.pr ?? args["pull-request"]);
const runDir = path.resolve(String(args["run-dir"] ?? path.join(repoRoot(), ".projectclownfish", "external-merge-preflight")));
const targetDir = path.resolve(String(args["target-dir"] ?? path.join(runDir, "target")));
const baseBranch = String(args["base-branch"] ?? "main");

if (!sourceJobPath || !Number.isInteger(pullRequest) || pullRequest < 1) {
  console.error("usage: node scripts/preflight-external-pr-merge.mjs <source-job.md> --pr <number> [--run-dir <path>]");
  process.exit(2);
}

const sourceJob = parseJob(sourceJobPath);
const jobErrors = validateJob(sourceJob);
if (jobErrors.length > 0) throw new Error(jobErrors.join("\n"));
assertAllowedOwner(sourceJob.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (!sourceJob.frontmatter.allowed_actions.includes("merge") || sourceJob.frontmatter.allow_merge !== true) {
  throw new Error("source job must explicitly allow merge");
}

const sourceRefs = new Set(
  [...(sourceJob.frontmatter.candidates ?? []), ...(sourceJob.frontmatter.cluster_refs ?? []), ...(sourceJob.frontmatter.canonical ?? [])]
    .map(normalizeRef)
    .filter(Boolean),
);
const targetRef = `#${pullRequest}`;
if (!sourceRefs.has(targetRef)) {
  throw new Error(`source job does not explicitly contain ${targetRef}`);
}

fs.mkdirSync(runDir, { recursive: true });

let pull = null;
let issue = null;
let view = null;
let plan = null;
let preflightJobPath = null;
let reviewContext = null;
let validationCommands = [];
let codexReview = null;
let report = {
  repo: sourceJob.frontmatter.repo,
  source_job: sourceJob.relativePath,
  pull_request: pullRequest,
  status: "blocked",
  reviewed_at: new Date().toISOString(),
  reviewed_head_sha: null,
  reason: null,
  validation_commands: [],
  codex_review: null,
};

try {
  pull = stage("hydrate GitHub state", () => ghJson(["api", `repos/${sourceJob.frontmatter.repo}/pulls/${pullRequest}`]));
  issue = stage("hydrate issue state", () => ghJson(["api", `repos/${sourceJob.frontmatter.repo}/issues/${pullRequest}`]));
  const issueComments = stage("hydrate issue comments", () =>
    fetchIssueComments({ repo: sourceJob.frontmatter.repo, pullRequest }),
  );
  view = stage("poll mergeability", () => fetchSettledPullRequestView({ repo: sourceJob.frontmatter.repo, pullRequest }));

  const virtualJob = writePreflightJob({ sourceJob, pull, pullRequest, runDir });
  preflightJobPath = virtualJob.path;
  plan = buildPlan({ sourceJob, virtualJob, pull, issue, view, pullRequest, baseBranch });

  const blockers = stage("read-only blockers", () =>
    readOnlyBlockers({ sourceJob, pull, view, issueComments, pullRequest }),
  );
  if (blockers.length > 0) {
    writeBlockedArtifacts({ reason: blockers.join("; ") });
    process.exit(0);
  }

  stage("checkout exact PR head", () => checkoutExactPullHead({ repo: sourceJob.frontmatter.repo, pullRequest, expectedHeadSha: pull.head.sha }));
  const currentMainSha = run("git", ["rev-parse", `origin/${baseBranch}`], {
    cwd: targetDir,
    env: gitIntegrityEnv(),
  }).trim();
  const baseDriftAllowed = currentMainSha !== pull.base.sha && canTolerateBaseDrift(view);
  if (currentMainSha !== pull.base.sha && !baseDriftAllowed) {
    writeBlockedArtifacts({
      reason: `base advanced before validation: reviewed base ${pull.base.sha}, current ${currentMainSha}`,
      currentMainSha,
    });
    process.exit(0);
  }

  reviewContext = stage("prepare synthetic merge review", () =>
    prepareSyntheticMergeReview({
      targetDir,
      baseBranch,
      currentMainSha,
      exactHeadSha: pull.head.sha,
    }),
  );
  stage("prepare target toolchain", () => prepareTargetToolchain(targetDir));
  reviewContext.integrityBaseline = stage("verify synthetic review checkout after toolchain", () =>
    verifySyntheticReviewCheckout({
      targetDir,
      expectedSnapshot: reviewContext.preToolchainSnapshot,
      expectedEntries: reviewContext.expectedTreeEntries,
      phase: "target toolchain preparation",
      allowToolchainGitConfigChange: true,
    }),
  );
  validationCommands = stage("target validation", () =>
    runValidation({ targetDir, reviewContext }),
  );
  stage("verify synthetic review checkout after validation", () =>
    verifySyntheticReviewCheckout({
      targetDir,
      expectedSnapshot: reviewContext.integrityBaseline,
      expectedEntries: reviewContext.expectedTreeEntries,
      phase: "target validation",
    }),
  );
  codexReview = stage("Codex review", () =>
    runCodexReview({
      repo: sourceJob.frontmatter.repo,
      pullRequest,
      targetDir,
      validationCommands,
      sourceJob,
      reviewContext,
    }),
  );
  stage("verify synthetic review checkout after Codex review", () =>
    verifySyntheticReviewCheckout({
      targetDir,
      expectedSnapshot: reviewContext.integrityBaseline,
      expectedEntries: reviewContext.expectedTreeEntries,
      phase: "Codex review",
    }),
  );
  if (!isCleanCodexReview(codexReview)) {
    writeBlockedArtifacts({
      reason: `Codex /review did not pass: ${String(codexReview.summary ?? "unknown")}`,
      validationCommands,
      codexReview,
      currentMainSha,
    });
    process.exit(0);
  }

  const reviewedHeadSha = pull.head.sha;
  const reviewedState = String(pull.state ?? "").toLowerCase();
  const refreshedPull = stage("rehydrate GitHub state after review", () =>
    ghJson(["api", `repos/${sourceJob.frontmatter.repo}/pulls/${pullRequest}`]),
  );
  const refreshedIssue = stage("rehydrate issue state after review", () =>
    ghJson(["api", `repos/${sourceJob.frontmatter.repo}/issues/${pullRequest}`]),
  );
  const refreshedIssueComments = stage("rehydrate issue comments after review", () =>
    fetchIssueComments({ repo: sourceJob.frontmatter.repo, pullRequest }),
  );
  const refreshedView = stage("poll mergeability after review", () =>
    fetchSettledPullRequestView({ repo: sourceJob.frontmatter.repo, pullRequest }),
  );
  const finalBlockers = stage("final read-only blockers", () => [
    ...(refreshedPull.head?.sha !== reviewedHeadSha
      ? [`PR head changed after validation: reviewed ${reviewedHeadSha}, current ${refreshedPull.head?.sha ?? "unknown"}`]
      : []),
    ...(String(refreshedPull.state ?? "").toLowerCase() !== reviewedState
      ? [`PR state changed after validation: reviewed ${reviewedState || "unknown"}, current ${refreshedPull.state ?? "unknown"}`]
      : []),
    ...readOnlyBlockers({
      sourceJob,
      pull: refreshedPull,
      view: refreshedView,
      issueComments: refreshedIssueComments,
      pullRequest,
    }),
  ]);
  if (finalBlockers.length > 0) {
    writeBlockedArtifacts({
      reason: finalBlockers.join("; "),
      validationCommands,
      codexReview,
      currentMainSha,
    });
    process.exit(0);
  }

  const verifiedMainSha = stage("refresh target main after review", () =>
    refreshTargetMain({ targetDir, baseBranch }),
  );
  if (verifiedMainSha !== reviewContext.reviewedBaseSha) {
    writeBlockedArtifacts({
      reason:
        `origin/${baseBranch} changed while validation or review was running: reviewed ` +
        `${reviewContext.reviewedBaseSha}, current ${verifiedMainSha}`,
      validationCommands,
      codexReview,
      currentMainSha: verifiedMainSha,
    });
    process.exit(0);
  }
  const verifiedMergeContext = stage("verify effective diff against latest main", () =>
    computeEffectiveMergeContext({
      targetDir,
      baseSha: verifiedMainSha,
      exactHeadSha: reviewedHeadSha,
    }),
  );
  if (verifiedMergeContext.effectiveDiffSha256 !== reviewContext.effectiveDiffSha256) {
    writeBlockedArtifacts({
      reason:
        `effective merge diff changed while review was running: reviewed ${reviewContext.effectiveDiffSha256}, ` +
        `current ${verifiedMergeContext.effectiveDiffSha256}`,
      validationCommands,
      codexReview,
      currentMainSha: verifiedMainSha,
    });
    process.exit(0);
  }
  reviewContext.verifiedMainSha = verifiedMainSha;
  reviewContext.verifiedMergeTreeSha = verifiedMergeContext.mergeTreeSha;
  reviewContext.baseDriftProof = {
    status: "unchanged",
    reviewed_base_sha: reviewContext.reviewedBaseSha,
    current_base_sha: verifiedMainSha,
  };

  pull = refreshedPull;
  issue = refreshedIssue;
  view = refreshedView;
  const finalBaseDriftAllowed = verifiedMainSha !== pull.base.sha && canTolerateBaseDrift(view);
  const rehydratedAt = new Date().toISOString();
  const result = buildMergeResult({
    sourceJob,
    virtualJob,
    pull,
    issue,
    view,
    pullRequest,
    validationCommands,
    codexReview,
    currentMainSha: verifiedMainSha,
    baseDriftAllowed: finalBaseDriftAllowed,
    reviewContext,
  });
  report = {
    ...report,
    status: "passed",
    reviewed_at: rehydratedAt,
    rehydrated_at: rehydratedAt,
    reviewed_head_sha: pull.head.sha,
    reviewed_base_sha: reviewContext.reviewedBaseSha,
    current_main_sha: verifiedMainSha,
    pull_request_base_sha: pull.base.sha,
    base_drift_allowed: finalBaseDriftAllowed,
    synthetic_merge_sha: reviewContext.syntheticMergeSha,
    synthetic_merge_tree_sha: reviewContext.mergeTreeSha,
    raw_diff_files: reviewContext.rawDiffFiles,
    effective_diff_files: reviewContext.effectiveDiffFiles,
    effective_diff_sha256: reviewContext.effectiveDiffSha256,
    base_drift_proof: reviewContext.baseDriftProof,
    validation_commands: validationCommands,
    codex_review: {
      status: codexReview.status,
      findings: codexReview.findings.length,
    },
  };
  writeJson(path.join(runDir, "result.json"), result);
  writeJson(path.join(runDir, "cluster-plan.json"), plan);
  writeJson(path.join(runDir, "preflight-report.json"), report);
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  const reason = redact(String(error?.message ?? error));
  if (!plan) {
    plan = fallbackPlan({ sourceJob, pullRequest, baseBranch });
  }
  if (!preflightJobPath) {
    preflightJobPath = writePreflightJob({ sourceJob, pull, pullRequest, runDir }).path;
    plan.source_job = path.relative(repoRoot(), preflightJobPath);
  }
  writeBlockedArtifacts({ reason, validationCommands, codexReview });
  process.exitCode = 0;
}

function writeBlockedArtifacts({ reason, validationCommands = [], codexReview = null, currentMainSha = null }) {
  const virtualJob = parseJob(preflightJobPath);
  const result = {
    status: "planned",
    repo: sourceJob.frontmatter.repo,
    cluster_id: virtualJob.frontmatter.cluster_id,
    mode: virtualJob.frontmatter.mode,
    summary: `External merge preflight blocked: ${reason}`,
    actions: [],
    needs_human: [],
    canonical: pull?.html_url ?? null,
    canonical_issue: null,
    canonical_pr: pull?.html_url ?? null,
    merge_preflight: [],
    fix_artifact: null,
  };
  report = {
    ...report,
    status: "blocked",
    reason,
    reviewed_head_sha: pull?.head?.sha ?? null,
    reviewed_base_sha: pull?.base?.sha ?? null,
    current_main_sha: currentMainSha,
    synthetic_merge_sha: reviewContext?.syntheticMergeSha ?? null,
    synthetic_merge_tree_sha: reviewContext?.mergeTreeSha ?? null,
    raw_diff_files: reviewContext?.rawDiffFiles ?? null,
    effective_diff_files: reviewContext?.effectiveDiffFiles ?? null,
    effective_diff_sha256: reviewContext?.effectiveDiffSha256 ?? null,
    validation_commands: validationCommands,
    codex_review: codexReview
      ? { status: codexReview.status ?? "unknown", findings: Array.isArray(codexReview.findings) ? codexReview.findings.length : null }
      : null,
  };
  writeJson(path.join(runDir, "result.json"), result);
  writeJson(path.join(runDir, "cluster-plan.json"), plan);
  writeJson(path.join(runDir, "preflight-report.json"), report);
  console.log(JSON.stringify(result, null, 2));
}

function writePreflightJob({ sourceJob, pull, pullRequest, runDir }) {
  const headSuffix = String(pull?.head?.sha ?? "pending").slice(0, 12);
  const clusterId = `external-merge-preflight-${pullRequest}-${headSuffix}`;
  const filePath = path.join(runDir, "preflight-job.md");
  const markdown = [
    "---",
    `repo: ${sourceJob.frontmatter.repo}`,
    `cluster_id: ${clusterId}`,
    "mode: autonomous",
    "allowed_actions:",
    '  - "merge"',
    "blocked_actions:",
    '  - "comment"',
    '  - "label"',
    '  - "close"',
    '  - "fix"',
    '  - "raise_pr"',
    '  - "force_push"',
    '  - "bypass_checks"',
    "require_human_for:",
    '  - "security_sensitive"',
    '  - "unresolved_review"',
    `canonical: ["#${pullRequest}"]`,
    `candidates: ["#${pullRequest}"]`,
    `cluster_refs: ["#${pullRequest}"]`,
    "security_policy: central_security_only",
    "security_sensitive: false",
    "allow_instant_close: false",
    "allow_fix_pr: false",
    "allow_merge: true",
    "allow_post_merge_close: false",
    "require_fix_before_close: false",
    'canonical_hint: "A deterministic read-only external merge preflight must pass before apply-result may merge this exact PR head."',
    `notes: "Generated from ${sourceJob.relativePath}; source job remains read-only and is not mutated by this preflight."`,
    "---",
    "",
    "# External Merge Preflight",
    "",
    `- source job: ${sourceJob.relativePath}`,
    `- pull request: #${pullRequest}`,
    "",
  ].join("\n");
  fs.writeFileSync(filePath, `${markdown}\n`);
  return { path: filePath, clusterId };
}

function buildPlan({ sourceJob, virtualJob, pull, issue, view, pullRequest, baseBranch }) {
  return {
    repo: sourceJob.frontmatter.repo,
    cluster_id: virtualJob.clusterId,
    mode: "autonomous",
    generated_at: new Date().toISOString(),
    source_job: path.relative(repoRoot(), virtualJob.path),
    source_job_permissions: sourceJobPermissions(parseJob(virtualJob.path)),
    main: {
      branch: baseBranch,
      sha: pull?.base?.sha ?? null,
    },
    security_boundary: {
      security_sensitive_items: [],
      policy: "central_security_only",
    },
    items: [
      {
        ref: `#${pullRequest}`,
        kind: "pull_request",
        state: normalizeState(pull?.state),
        title: pull?.title ?? `Pull request #${pullRequest}`,
        html_url: pull?.html_url ?? null,
        updated_at: issue?.updated_at ?? pull?.updated_at ?? null,
        labels: (pull?.labels ?? []).map((label) => label.name).filter(Boolean),
        comments_hydrated: Array.isArray(view?.comments) ? view.comments.length : 0,
        security_sensitive: false,
        pull_request: {
          draft: Boolean(pull?.draft),
          merged: Boolean(pull?.merged),
          mergeable: view?.mergeable ?? null,
          mergeable_state: view?.mergeStateStatus ?? null,
          base_ref: pull?.base?.ref ?? null,
          head_ref: pull?.head?.ref ?? null,
          head_repo: pull?.head?.repo?.full_name ?? null,
          head_sha: pull?.head?.sha ?? null,
          checks: view?.statusCheckRollup ?? [],
          reviews: view?.reviews ?? [],
        },
      },
    ],
  };
}

function fallbackPlan({ sourceJob, pullRequest, baseBranch }) {
  return {
    repo: sourceJob.frontmatter.repo,
    cluster_id: `external-merge-preflight-${pullRequest}-pending`,
    mode: "autonomous",
    generated_at: new Date().toISOString(),
    source_job: null,
    source_job_permissions: {
      allowed_actions: ["merge"],
      blocked_actions: ["comment", "label", "close", "fix", "raise_pr", "force_push", "bypass_checks"],
      allow_fix_pr: false,
      allow_merge: true,
      maintainer_calibration: [],
    },
    main: { branch: baseBranch, sha: null },
    security_boundary: { security_sensitive_items: [], policy: "central_security_only" },
    items: [],
  };
}

function sourceJobPermissions(job) {
  return {
    source: job.frontmatter.source ?? null,
    canonical: [...(job.frontmatter.canonical ?? [])],
    allowed_actions: [...job.frontmatter.allowed_actions],
    blocked_actions: [...(job.frontmatter.blocked_actions ?? [])],
    allow_fix_pr: job.frontmatter.allow_fix_pr === true,
    allow_merge: job.frontmatter.allow_merge === true,
    maintainer_calibration: [...(job.frontmatter.maintainer_calibration ?? [])],
  };
}

function fetchSettledPullRequestView({ repo, pullRequest }) {
  const attempts = positiveInteger(process.env.CLOWNFISH_MERGEABLE_POLL_ATTEMPTS, 6);
  const delayMs = nonNegativeInteger(process.env.CLOWNFISH_MERGEABLE_POLL_DELAY_MS, 5000);
  let latest = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    latest = ghJson([
      "pr",
      "view",
      String(pullRequest),
      "--repo",
      repo,
      "--json",
      "comments,headRefOid,isDraft,mergeStateStatus,mergeable,reviewDecision,reviews,statusCheckRollup,updatedAt,url",
    ]);
    if (!hasUnknownMergeability(latest)) return latest;
    if (attempt < attempts && delayMs > 0) {
      run("sleep", [String(delayMs / 1000)]);
    }
  }
  return latest;
}

function hasUnknownMergeability(view) {
  return ["", "UNKNOWN"].includes(String(view?.mergeable ?? "").toUpperCase()) || ["", "UNKNOWN"].includes(String(view?.mergeStateStatus ?? "").toUpperCase());
}

function readOnlyBlockers({ sourceJob, pull, view, issueComments, pullRequest }) {
  const blockers = [];
  const trustedAuthorEvidenceApprovalAt = trustedAuthorEvidenceApprovalTimestamp(issueComments, { pull });
  const trustedAuthorProgressApprovalAt = trustedAuthorProgressApprovalTimestamp(issueComments, { pull });
  const reviewComments = ghJson(["api", `repos/${sourceJob.frontmatter.repo}/pulls/${pullRequest}/comments?per_page=100`]);
  const threads = fetchReviewThreads({ repo: sourceJob.frontmatter.repo, pullRequest });
  const texts = [
    pull.title,
    pull.body,
    ...(pull.labels ?? []).map((label) => label.name),
    ...issueComments
      .filter(
        (comment) =>
          !isNonBlockingCommentEvidence(comment, {
            pull,
            trustedAuthorEvidenceApprovalAt,
            trustedAuthorProgressApprovalAt,
          }),
      )
      .map((comment) => comment.body),
    ...(view.reviews ?? []).filter((review) => !isNonBlockingCommentEvidence(review, { pull })).map((review) => review.body),
    ...reviewComments.map((comment) => comment.body),
  ];

  if (hasSecuritySensitiveText(texts.map(maskBenignApprovalSecurityTranscriptLines))) {
    blockers.push("security-sensitive signal in hydrated PR metadata or comments");
  }
  const blockedLabel = findHighRiskMergeLabel(pull.labels);
  if (blockedLabel) blockers.push(`PR has blocked live label: ${blockedLabel}`);
  if (String(pull.state ?? "").toLowerCase() !== "open") blockers.push(`PR is ${pull.state ?? "unknown"}`);
  if (pull.draft) blockers.push("PR is draft");
  if (pull.base?.ref !== "main") blockers.push(`PR base is ${pull.base?.ref ?? "unknown"}, not main`);
  if (!/^[0-9a-f]{40}$/i.test(String(pull.head?.sha ?? ""))) blockers.push("PR head SHA is unavailable");
  if (!/^[0-9a-f]{40}$/i.test(String(pull.base?.sha ?? ""))) blockers.push("PR base SHA is unavailable");
  if (view.mergeable !== "MERGEABLE") blockers.push(`PR mergeability is ${view.mergeable ?? "unknown"}`);
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    blockers.push(`PR review decision is ${view.reviewDecision}`);
  }
  const failingChecks = latestStatusChecks(view.statusCheckRollup ?? []).filter(isFailingCheck).map(checkName);
  if (failingChecks.length > 0) blockers.push(`PR has non-passing checks: ${failingChecks.slice(0, 4).join(", ")}`);
  if (!isAcceptableMergeState(view)) {
    blockers.push(`PR merge state is ${view.mergeStateStatus ?? "unknown"}`);
  }
  if (threads.hasNextPage) blockers.push("PR has more than 100 review threads");
  const unresolved = threads.nodes.filter((thread) => !thread.isResolved);
  if (unresolved.length > 0) blockers.push(`PR has ${unresolved.length} unresolved review thread(s)`);
  if (issueComments.length >= 100) blockers.push("PR has at least 100 top-level issue comments; comment history may be truncated");
  const actionableIssueComments = issueComments.filter(
    (comment, index) =>
      !isSupersededDependencyGuardNotice(comment, issueComments.slice(index + 1), { pull, view }) &&
      isActionableCommentEvidence(comment, {
        pull,
        trustedAuthorEvidenceApprovalAt,
        trustedAuthorProgressApprovalAt,
      }),
  );
  if (actionableIssueComments.length > 0) {
    blockers.push(
      `PR has ${actionableIssueComments.length} actionable top-level issue comment(s): ${evidenceExamples(actionableIssueComments).join(", ")}`,
    );
  }
  const actionableReviewComments = reviewComments.filter((comment) => isActionableCommentEvidence(comment, { pull }));
  if (actionableReviewComments.length > 0) {
    blockers.push(
      `PR has ${actionableReviewComments.length} actionable inline review comment(s): ${evidenceExamples(actionableReviewComments).join(", ")}`,
    );
  }
  const nonApprovalReviewBodies = (view.reviews ?? []).filter(
    (review) => String(review.body ?? "").trim() && !isReviewBot(review) && isActionableCommentEvidence(review, { pull }),
  );
  if (nonApprovalReviewBodies.length > 0) {
    blockers.push(
      `PR has ${nonApprovalReviewBodies.length} actionable human review body comment(s): ${evidenceExamples(nonApprovalReviewBodies).join(", ")}`,
    );
  }
  const botReviewBodies = (view.reviews ?? []).filter(
    (review) => isReviewBot(review) && String(review.body ?? "").trim() && isActionableCommentEvidence(review, { pull }),
  );
  if (botReviewBodies.length > 0) {
    blockers.push(`PR has ${botReviewBodies.length} actionable review-bot finding(s): ${evidenceExamples(botReviewBodies).join(", ")}`);
  }
  return blockers;
}

function checkoutExactPullHead({ repo, pullRequest, expectedHeadSha }) {
  if (!fs.existsSync(path.join(targetDir, ".git"))) {
    fs.mkdirSync(path.dirname(targetDir), { recursive: true });
    run("gh", ["repo", "clone", repo, targetDir, "--", "--depth=1", "--filter=blob:none"], { env: ghReadEnv() });
  }
  if (run("git", ["status", "--porcelain"], { cwd: targetDir }).trim()) {
    throw new Error("target checkout has uncommitted changes");
  }
  run("git", ["fetch", "--no-tags", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd: targetDir });
  const ref = `refs/remotes/origin/clownfish-preflight-${pullRequest}`;
  run("git", ["fetch", "--no-tags", "origin", `pull/${pullRequest}/head:${ref}`], { cwd: targetDir });
  run("git", ["checkout", "--detach", ref], { cwd: targetDir });
  const actualHeadSha = run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
  if (actualHeadSha !== expectedHeadSha) {
    throw new Error(`PR head changed during checkout: expected ${expectedHeadSha}, got ${actualHeadSha}`);
  }
  ensureMergeBase({ cwd: targetDir, baseBranch, pullRequest, ref });
}

function ensureMergeBase({ cwd, baseBranch, pullRequest, ref }) {
  for (const depth of [50, 200, 1000]) {
    const probe = spawnSync("git", ["merge-base", `origin/${baseBranch}`, "HEAD"], {
      cwd,
      encoding: "utf8",
      maxBuffer: 1024 * 1024,
    });
    if (probe.status === 0 && String(probe.stdout ?? "").trim()) return;
    run("git", ["fetch", "--no-tags", "--deepen", String(depth), "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd });
    run("git", ["fetch", "--no-tags", "--deepen", String(depth), "origin", `pull/${pullRequest}/head:${ref}`], { cwd });
  }
  if (isShallowRepository(cwd)) {
    run(
      "git",
      ["fetch", "--no-tags", "--unshallow", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`, `pull/${pullRequest}/head:${ref}`],
      { cwd },
    );
  }
  run("git", ["merge-base", `origin/${baseBranch}`, "HEAD"], { cwd });
}

function prepareSyntheticMergeReview({ targetDir, baseBranch, currentMainSha, exactHeadSha }) {
  const baseRef = `origin/${baseBranch}`;
  const rawDiffFiles = changedFileCount({ cwd: targetDir, baseRef, targetRef: exactHeadSha });
  const mergeContext = computeEffectiveMergeContext({
    targetDir,
    baseSha: currentMainSha,
    exactHeadSha,
  });
  const {
    mergeTreeSha,
    effectiveDiffFiles,
    effectiveDiffSha256,
    resultEntries,
    changedFiles,
  } = mergeContext;
  const syntheticMergeSha = run(
    "git",
    [
      "commit-tree",
      mergeTreeSha,
      "-p",
      currentMainSha,
    ],
    {
      cwd: targetDir,
      env: {
        ...process.env,
        GIT_AUTHOR_NAME: "ProjectClownfish",
        GIT_AUTHOR_EMAIL: "projectclownfish@users.noreply.github.com",
        GIT_AUTHOR_DATE: "2000-01-01T00:00:00Z",
        GIT_COMMITTER_NAME: "ProjectClownfish",
        GIT_COMMITTER_EMAIL: "projectclownfish@users.noreply.github.com",
        GIT_COMMITTER_DATE: "2000-01-01T00:00:00Z",
      },
      input: `projectclownfish synthetic squash review for ${exactHeadSha}\n`,
      timeout: VALIDATION_TIMEOUT_MS,
    },
  ).trim();
  if (!/^[0-9a-f]{40}$/i.test(syntheticMergeSha)) {
    throw new Error(`synthetic merge returned invalid commit SHA: ${syntheticMergeSha || "empty"}`);
  }
  run("git", ["checkout", "--detach", syntheticMergeSha], { cwd: targetDir });
  const preToolchainSnapshot = syntheticReviewCheckoutSnapshot(targetDir);
  if (
    preToolchainSnapshot.head !== syntheticMergeSha ||
    preToolchainSnapshot.tree !== mergeTreeSha ||
    preToolchainSnapshot.parent !== currentMainSha
  ) {
    throw new Error(
      `synthetic merge binding mismatch: expected head ${syntheticMergeSha}, tree ${mergeTreeSha}, parent ${currentMainSha}; ` +
        `actual head ${preToolchainSnapshot.head}, tree ${preToolchainSnapshot.tree}, parent ${preToolchainSnapshot.parent}`,
    );
  }
  return {
    syntheticMergeSha,
    mergeTreeSha,
    rawDiffFiles,
    effectiveDiffFiles,
    effectiveDiffSha256,
    reviewedBaseSha: currentMainSha,
    expectedTreeEntries: resultEntries,
    changedFiles,
    preToolchainSnapshot,
  };
}

function changedFileCount({ cwd, baseRef, targetRef }) {
  const output = run("git", ["diff", "--name-only", `${baseRef}...${targetRef}`], { cwd }).trim();
  return output ? output.split(/\r?\n/).length : 0;
}

function computeEffectiveMergeContext({ targetDir, baseSha, exactHeadSha }) {
  const mergeTreeSha = run("git", ["merge-tree", "--write-tree", baseSha, exactHeadSha], {
    cwd: targetDir,
    env: gitIntegrityEnv(),
    timeout: VALIDATION_TIMEOUT_MS,
  }).trim();
  if (!/^[0-9a-f]{40}$/i.test(mergeTreeSha)) {
    throw new Error(`synthetic merge returned invalid tree SHA: ${mergeTreeSha || "empty"}`);
  }
  const fingerprint = effectiveTreeFingerprint({
    cwd: targetDir,
    baseTreeish: baseSha,
    resultTreeish: mergeTreeSha,
  });
  return {
    mergeTreeSha,
    effectiveDiffFiles: fingerprint.files,
    effectiveDiffSha256: fingerprint.sha256,
    changedFiles: fingerprint.changes.map(([filePath]) => filePath),
    resultEntries: fingerprint.resultEntries,
  };
}

function effectiveTreeFingerprint({ cwd, baseTreeish, resultTreeish }) {
  return fingerprintTreeEntries(
    readGitTreeEntries({ cwd, treeish: baseTreeish }),
    readGitTreeEntries({ cwd, treeish: resultTreeish }),
  );
}

function readGitTreeEntries({ cwd, treeish }) {
  const output = run("git", ["ls-tree", "-r", "-z", treeish], {
    cwd,
    env: gitIntegrityEnv(),
    timeout: VALIDATION_TIMEOUT_MS,
    maxBuffer: 64 * 1024 * 1024,
  });
  const entries = new Map();
  for (const record of output.split("\0").filter(Boolean)) {
    const match = record.match(/^([0-7]{6}) ([a-z]+) ([0-9a-f]{40})\t([\s\S]+)$/i);
    if (!match) throw new Error(`could not parse git tree entry for ${treeish}`);
    entries.set(match[4], `${match[1]}:${match[2]}:${match[3].toLowerCase()}`);
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
    sha256: createHash("sha256").update(serialized).digest("hex"),
    changes,
    resultEntries,
  };
}

function verifySyntheticReviewCheckout({
  targetDir,
  expectedSnapshot,
  expectedEntries,
  phase,
  allowToolchainGitConfigChange = false,
}) {
  const actualSnapshot = syntheticReviewCheckoutSnapshot(targetDir);
  const toolchainConfigChangeAllowed =
    allowToolchainGitConfigChange &&
    isAllowedToolchainGitConfigChange(expectedSnapshot.gitConfig, actualSnapshot.gitConfig);
  const mismatchedFields = [
    ["head", expectedSnapshot.head, actualSnapshot.head],
    ["tree", expectedSnapshot.tree, actualSnapshot.tree],
    ["parent", expectedSnapshot.parent, actualSnapshot.parent],
    ["config", expectedSnapshot.gitConfig.sha256, actualSnapshot.gitConfig.sha256],
  ]
    .filter(
      ([field, expected, actual]) =>
        expected !== actual && !(field === "config" && toolchainConfigChangeAllowed),
    )
    .map(([field]) => field);
  if (mismatchedFields.length > 0) {
    const changedKeys = changedGitConfigKeys(expectedSnapshot.gitConfig, actualSnapshot.gitConfig);
    throw new Error(
      `synthetic review checkout integrity mismatch: phase=${phase}; mismatched_fields=${mismatchedFields.join(",")}; ` +
        `expected_head=${expectedSnapshot.head}; actual_head=${actualSnapshot.head}; ` +
        `expected_tree=${expectedSnapshot.tree}; actual_tree=${actualSnapshot.tree}; ` +
        `expected_parent=${expectedSnapshot.parent}; actual_parent=${actualSnapshot.parent}; ` +
        `expected_config_sha256=${expectedSnapshot.gitConfig.sha256}; actual_config_sha256=${actualSnapshot.gitConfig.sha256}; ` +
        `changed_git_config_keys=${formatChangedGitConfigKeys(changedKeys)}`,
    );
  }
  verifyTrackedFilesystem({ targetDir, expectedEntries });
  return actualSnapshot;
}

function syntheticReviewCheckoutSnapshot(targetDir) {
  const env = gitIntegrityEnv();
  return {
    head: run("git", ["rev-parse", "HEAD"], { cwd: targetDir, env }).trim(),
    tree: run("git", ["rev-parse", "HEAD^{tree}"], { cwd: targetDir, env }).trim(),
    parent: run("git", ["rev-parse", "HEAD^"], { cwd: targetDir, env }).trim(),
    gitConfig: localGitConfigSnapshot(targetDir),
  };
}

function refreshTargetMain({ targetDir, baseBranch }) {
  run("git", ["fetch", "--no-tags", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], {
    cwd: targetDir,
    env: gitIntegrityEnv(),
    timeout: VALIDATION_TIMEOUT_MS,
  });
  const sha = run("git", ["rev-parse", `origin/${baseBranch}`], {
    cwd: targetDir,
    env: gitIntegrityEnv(),
  }).trim();
  if (!/^[0-9a-f]{40}$/i.test(sha)) {
    throw new Error(`refreshed origin/${baseBranch} returned invalid SHA: ${sha || "empty"}`);
  }
  return sha;
}

function verifyTrackedFilesystem({ targetDir, expectedEntries }) {
  if (!(expectedEntries instanceof Map) || expectedEntries.size === 0) {
    throw new Error("synthetic review tree entries are unavailable");
  }
  const root = `${path.resolve(targetDir)}${path.sep}`;
  for (const [filePath, entry] of expectedEntries) {
    const fullPath = path.resolve(targetDir, filePath);
    if (!fullPath.startsWith(root)) throw new Error(`synthetic review tree contains unsafe path ${filePath}`);
    const [mode, type, expectedSha] = String(entry).split(":");
    if (type !== "blob" || !["100644", "100755", "120000"].includes(mode)) {
      throw new Error(`synthetic review tree contains unsupported entry ${mode}:${type} at ${filePath}`);
    }
    let stats;
    try {
      stats = fs.lstatSync(fullPath);
    } catch {
      throw new Error(`synthetic review checkout is missing tracked path ${filePath}`);
    }
    let bytes;
    if (mode === "120000") {
      if (!stats.isSymbolicLink()) throw new Error(`synthetic review checkout changed tracked type at ${filePath}`);
      bytes = fs.readlinkSync(fullPath, { encoding: "buffer" });
    } else {
      if (!stats.isFile() || stats.isSymbolicLink()) {
        throw new Error(`synthetic review checkout changed tracked type at ${filePath}`);
      }
      const executable = (stats.mode & 0o111) !== 0;
      if ((mode === "100755") !== executable) {
        throw new Error(`synthetic review checkout changed executable mode at ${filePath}`);
      }
      bytes = fs.readFileSync(fullPath);
    }
    const actualSha = gitBlobSha(bytes);
    if (actualSha !== expectedSha) {
      throw new Error(`synthetic review checkout changed tracked bytes at ${filePath}`);
    }
  }
}

function gitBlobSha(bytes) {
  return createHash("sha1")
    .update(`blob ${bytes.length}\0`)
    .update(bytes)
    .digest("hex");
}

function gitIntegrityEnv() {
  return {
    ...process.env,
    GIT_ALLOW_PROTOCOL: "https:ssh",
    GIT_CONFIG_COUNT: "2",
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_KEY_0: "core.hooksPath",
    GIT_CONFIG_KEY_1: "protocol.ext.allow",
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_VALUE_0: "/dev/null",
    GIT_CONFIG_VALUE_1: "never",
    GIT_NO_REPLACE_OBJECTS: "1",
  };
}

function localGitConfigSnapshot(cwd) {
  const config = run("git", ["config", "--local", "--includes", "--list", "--null"], {
    cwd,
    env: gitIntegrityEnv(),
    maxBuffer: 1024 * 1024,
  });
  const keyValues = new Map();
  for (const entry of config.split("\0").filter(Boolean)) {
    const separator = entry.indexOf("\n");
    const key = (separator === -1 ? entry : entry.slice(0, separator)).trim().toLowerCase();
    if (!key) continue;
    const value = separator === -1 ? "" : entry.slice(separator + 1);
    const valueHashes = keyValues.get(key) ?? [];
    valueHashes.push(createHash("sha256").update(value).digest("hex"));
    keyValues.set(key, valueHashes);
  }
  return {
    sha256: createHash("sha256").update(config).digest("hex"),
    valueFingerprints: keyValues,
    keyFingerprints: new Map(
      [...keyValues].map(([key, valueHashes]) => [
        key,
        createHash("sha256").update(valueHashes.join("\0")).digest("hex"),
      ]),
    ),
  };
}

function changedGitConfigRawKeys(expected, actual) {
  const keys = new Set([...expected.keyFingerprints.keys(), ...actual.keyFingerprints.keys()]);
  return [...keys]
    .filter((key) => expected.keyFingerprints.get(key) !== actual.keyFingerprints.get(key))
    .sort();
}

function changedGitConfigKeys(expected, actual) {
  return changedGitConfigRawKeys(expected, actual)
    .map(safeGitConfigKey)
    .sort();
}

function isAllowedToolchainGitConfigChange(expected, actual) {
  const changedKeys = changedGitConfigRawKeys(expected, actual);
  if (changedKeys.length !== 1 || changedKeys[0] !== "core.hookspath") {
    return false;
  }
  const values = actual.valueFingerprints.get("core.hookspath") ?? [];
  return (
    values.length === 1 &&
    values[0] === createHash("sha256").update("git-hooks").digest("hex")
  );
}

function safeGitConfigKey(key) {
  const parts = key.split(".");
  const safePart = /^[a-z][a-z0-9-]{0,63}$/;
  if (parts.length === 2 && parts.every((part) => safePart.test(part))) return key;
  const section = safePart.test(parts[0] ?? "") ? parts[0] : "config";
  const name = safePart.test(parts.at(-1) ?? "") ? parts.at(-1) : "key";
  return `${section}.[redacted].${name}`;
}

function formatChangedGitConfigKeys(keys) {
  if (keys.length === 0) return "unavailable";
  const shown = keys.slice(0, 20);
  return keys.length === shown.length ? shown.join(",") : `${shown.join(",")},...(+${keys.length - shown.length})`;
}

function isShallowRepository(cwd) {
  return run("git", ["rev-parse", "--is-shallow-repository"], { cwd }).trim() === "true";
}

function prepareTargetToolchain(cwd) {
  const packagePath = path.join(cwd, "package.json");
  if (!fs.existsSync(packagePath)) return;
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const packageManager = String(packageJson.packageManager ?? "pnpm@10.33.0");
  if (!packageManager.startsWith("pnpm@")) throw new Error(`unsupported target package manager: ${packageManager}`);
  const env = validationEnv();
  run(
    "node",
    [
      "-e",
      "const major = Number(process.versions.node.split('.')[0]); if (major < 22) { console.error(`Node ${process.version} is too old for target validation`); process.exit(1); }",
    ],
    { cwd, env },
  );
  run("corepack", ["enable"], { cwd, env, timeout: INSTALL_TIMEOUT_MS });
  run("corepack", ["prepare", packageManager, "--activate"], { cwd, env, timeout: INSTALL_TIMEOUT_MS });
  run(
    "pnpm",
    ["install", "--frozen-lockfile", "--prefer-offline", "--config.engine-strict=false", "--config.enable-pre-post-scripts=false"],
    { cwd, env, timeout: INSTALL_TIMEOUT_MS },
  );
}

function runValidation({ targetDir, reviewContext }) {
  const env = validationEnv();
  const baseSha = reviewContext.reviewedBaseSha;
  const headSha = reviewContext.syntheticMergeSha;
  run("pnpm", ["check:changed", "--base", baseSha, "--head", headSha], {
    cwd: targetDir,
    env,
    timeout: VALIDATION_TIMEOUT_MS,
  });
  run("git", ["diff", "--check", `${baseSha}...${headSha}`], {
    cwd: targetDir,
    env,
    timeout: VALIDATION_TIMEOUT_MS,
  });
  run("git", ["diff", "--check"], { cwd: targetDir, env, timeout: VALIDATION_TIMEOUT_MS });
  return [
    `pnpm check:changed --base ${baseSha} --head ${headSha}`,
    `git diff --check ${baseSha}...${headSha}`,
    "git diff --check",
  ];
}

function runCodexReview({ repo, pullRequest, targetDir, validationCommands, sourceJob, reviewContext }) {
  const schemaPath = path.join(runDir, "codex-review.schema.json");
  const outputPath = path.join(runDir, "codex-review.json");
  const defaultCodexReviewSandbox = "read-only";
  const codexReviewSandbox = process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX ?? defaultCodexReviewSandbox;
  writeJson(schemaPath, {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    required: ["status", "summary", "findings", "findings_addressed", "evidence"],
    additionalProperties: false,
    properties: {
      status: { type: "string", enum: ["passed", "clean", "failed", "blocked"] },
      summary: { type: "string" },
      findings: {
        type: "array",
        items: {
          type: "object",
          required: ["severity", "summary", "evidence"],
          additionalProperties: false,
          properties: {
            severity: { type: "string", enum: ["critical", "high", "medium", "low"] },
            summary: { type: "string" },
            evidence: { type: "string" },
          },
        },
      },
      findings_addressed: { type: "boolean" },
      evidence: { type: "array", items: { type: "string" } },
    },
  });
  const prompt = [
    "/review",
    "",
    `Review openclaw PR #${pullRequest} in ${repo}. This is a read-only external merge preflight.`,
    `The checkout is an ephemeral one-parent squash-result commit built from the exact PR head and reviewed base ${reviewContext.reviewedBaseSha}.`,
    `Review only the immutable effective diff ${reviewContext.reviewedBaseSha}...${reviewContext.syntheticMergeSha}; do not use mutable branch refs.`,
    `Synthetic commit: ${reviewContext.syntheticMergeSha}; raw PR diff files: ${reviewContext.rawDiffFiles}; effective merge diff files: ${reviewContext.effectiveDiffFiles}.`,
    `Effective diff fingerprint: ${reviewContext.effectiveDiffSha256}.`,
    "",
    "The preflight already verified that the PR has no top-level or inline review comments, no unresolved review threads, no review-bot findings, no security signal, and passing GitHub checks.",
    "Do not mutate GitHub or the checkout. Do not run validation commands.",
    "Return clean only when the diff is narrow, safe, and merge-ready. Return actionable findings otherwise.",
    "",
    `Validation commands already passed: ${validationCommands.join("; ")}`,
    `Source job: ${sourceJob.relativePath}`,
  ].join("\n");
  run(
    "codex",
    [
      "exec",
      "--cd",
      targetDir,
      "--model",
      String(process.env.CLOWNFISH_MODEL ?? "gpt-5.5"),
      "--sandbox",
      codexReviewSandbox,
      "--output-schema",
      schemaPath,
      "--output-last-message",
      outputPath,
      "--ephemeral",
      "--json",
      "-",
    ],
    {
      cwd: targetDir,
      input: prompt,
      env: codexEnv(),
      timeout: Number(process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_TIMEOUT_MS ?? 10 * 60 * 1000),
      maxBuffer: 64 * 1024 * 1024,
    },
  );
  if (!fs.existsSync(outputPath)) throw new Error("Codex /review did not write structured output");
  return JSON.parse(fs.readFileSync(outputPath, "utf8"));
}

function buildMergeResult({
  sourceJob,
  virtualJob,
  pull,
  issue,
  view,
  pullRequest,
  validationCommands,
  codexReview,
  currentMainSha,
  baseDriftAllowed,
  reviewContext,
}) {
  const evidence = [
    `Exact PR head ${pull.head.sha} checked out from refs/pull/${pullRequest}/head.`,
    `Validation and Codex review ran on synthetic squash-result commit ${reviewContext.syntheticMergeSha} with origin/main ${reviewContext.reviewedBaseSha} as its parent and merge tree ${reviewContext.mergeTreeSha} computed from exact PR head ${pull.head.sha}.`,
    `Review surface narrowed from ${reviewContext.rawDiffFiles} raw PR file(s) to ${reviewContext.effectiveDiffFiles} effective merge file(s).`,
    `Effective blob delta ${reviewContext.effectiveDiffSha256} was unchanged after refreshing origin/main to ${reviewContext.verifiedMainSha}.`,
    reviewContext.baseDriftProof.drift_commit_count > 0
      ? `Review-base reuse accepted ${reviewContext.baseDriftProof.drift_commit_count} bounded disjoint main commit(s).`
      : "Review base still matched current origin/main after review.",
    baseDriftAllowed
      ? `PR base ${pull.base.sha} drifted from origin/main ${currentMainSha}; exact head remained mergeable with clean latest checks and validation ran against origin/main.`
      : `PR base ${pull.base.sha} matched current origin/main ${currentMainSha} before validation.`,
    `GitHub merge state ${view.mergeStateStatus} and review decision ${view.reviewDecision ?? "none"} were clean.`,
    `Final GitHub recheck after validation and Codex review kept PR #${pullRequest} open at exact head ${pull.head.sha}.`,
  ];
  return {
    status: "planned",
    repo: sourceJob.frontmatter.repo,
    cluster_id: virtualJob.clusterId,
    mode: "autonomous",
    summary: `External merge preflight passed for #${pullRequest} at ${pull.head.sha}.`,
    actions: [
      {
        target: `#${pullRequest}`,
        action: "merge_canonical",
        status: "planned",
        idempotency_key: `external-merge-preflight:${sourceJob.frontmatter.repo}#${pullRequest}:${pull.head.sha}:${reviewContext.effectiveDiffSha256}`,
        expected_head_sha: pull.head.sha,
        classification: "canonical",
        target_kind: "pull_request",
        target_updated_at: issue?.updated_at ?? pull.updated_at,
        canonical: `#${pullRequest}`,
        duplicate_of: null,
        candidate_fix: null,
        comment: null,
        evidence,
        reason: "Deterministic external merge preflight passed on the exact current head.",
      },
    ],
    needs_human: [],
    canonical: pull.html_url,
    canonical_issue: null,
    canonical_pr: pull.html_url,
    merge_preflight: [
      {
        target: `#${pullRequest}`,
        reviewed_base_sha: reviewContext.reviewedBaseSha,
        reviewed_head_sha: pull.head.sha,
        effective_diff_sha256: reviewContext.effectiveDiffSha256,
        effective_diff_files: reviewContext.effectiveDiffFiles,
        security_status: "cleared",
        security_evidence: [
          "Final deterministic security scan after validation and Codex review found no matching signal in the PR title, body, labels, issue comments, reviews, or inline review comments.",
        ],
        comments_status: "resolved",
        comments_evidence: [
          "Final GitHub hydration after validation and Codex review found no actionable top-level or inline comments and no unresolved review threads.",
        ],
        bot_comments_status: "resolved",
        bot_comments_evidence: [
          "Final GitHub hydration after validation and Codex review found zero review-bot comments or review bodies requiring follow-up.",
        ],
        codex_review: {
          command: "/review",
          status: codexReview.status === "clean" ? "clean" : "passed",
          findings_addressed: true,
          evidence: [
            `Codex /review returned ${codexReview.status} with zero findings on exact head ${pull.head.sha}.`,
            ...String(codexReview.summary ?? "")
              .trim()
              .slice(0, 500)
              .split("\n")
              .filter(Boolean)
              .slice(0, 1),
          ],
        },
        validation_commands: validationCommands,
      },
    ],
    fix_artifact: null,
  };
}

function fetchReviewThreads({ repo, pullRequest }) {
  const [owner, name] = repo.split("/");
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        pullRequest(number: $number) {
          reviewThreads(first: 100) {
            pageInfo { hasNextPage }
            nodes { isResolved }
          }
        }
      }
    }
  `;
  const data = ghJson(["api", "graphql", "-f", `owner=${owner}`, "-f", `name=${name}`, "-F", `number=${pullRequest}`, "-f", `query=${query}`]);
  const threads = data?.data?.repository?.pullRequest?.reviewThreads;
  return {
    hasNextPage: Boolean(threads?.pageInfo?.hasNextPage),
    nodes: threads?.nodes ?? [],
  };
}

function fetchIssueComments({ repo, pullRequest }) {
  const [owner, name] = repo.split("/");
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        pullRequest(number: $number) {
          comments(first: 100) {
            nodes {
              author { login }
              authorAssociation
              body
              createdAt
              updatedAt
              isMinimized
              minimizedReason
              url
            }
          }
        }
      }
    }
  `;
  const data = ghJson(["api", "graphql", "-f", `owner=${owner}`, "-f", `name=${name}`, "-F", `number=${pullRequest}`, "-f", `query=${query}`]);
  return data?.data?.repository?.pullRequest?.comments?.nodes ?? [];
}

function isFailingCheck(check) {
  const name = checkName(check);
  if (IGNORED_CHECKS.has(name) || IGNORED_CHECKS.has(String(check.workflowName ?? ""))) return false;
  const status = String(check.status ?? check.state ?? "").toUpperCase();
  const conclusion = String(check.conclusion ?? "").toUpperCase();
  return ["COMPLETED", "SUCCESS"].includes(status) && conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion);
}

function isAcceptableMergeState(view) {
  const state = String(view.mergeStateStatus ?? "");
  if (CLEAN_MERGE_STATES.has(state)) return true;
  // External preflight can safely review BLOCKED or BEHIND heads because it
  // binds a synthetic merge against current main before authorization.
  return (
    PRE_AUTHORIZATION_MERGE_STATES.has(state) &&
    view.mergeable === "MERGEABLE" &&
    latestStatusChecks(view.statusCheckRollup ?? []).every((check) => !isFailingCheck(check))
  );
}

function canTolerateBaseDrift(view) {
  return view?.mergeable === "MERGEABLE" && isAcceptableMergeState(view) && latestStatusChecks(view.statusCheckRollup ?? []).every((check) => !isFailingCheck(check));
}

function latestStatusChecks(checks) {
  const latest = new Map();
  for (const check of checks) {
    const key = `${String(check.workflowName ?? "")}\0${checkName(check)}`;
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

function checkName(check) {
  return String(check.name ?? check.context ?? "unknown check");
}

function maskBenignApprovalSecurityTranscriptLines(value) {
  const lines = String(value ?? "").split(/\r?\n/);
  let fence = null;

  return lines
    .map((line) => {
      const marker = line.match(/^\s*(`{3,}|~{3,})/)?.[1];
      if (marker) {
        if (!fence) {
          fence = marker[0];
        } else if (marker[0] === fence) {
          fence = null;
        }
        return line;
      }
      if (fence && /^\s*security:\s*(?:deny|allowlist|full)\s*$/i.test(line)) {
        return "";
      }
      return line;
    })
    .join("\n");
}

function isReviewBot(review) {
  return REVIEW_BOT_PATTERN.test(`${review.author?.login ?? ""}\n${review.body ?? ""}`);
}

function isActionableCommentEvidence(
  comment,
  { pull, trustedAuthorEvidenceApprovalAt = null, trustedAuthorProgressApprovalAt = null },
) {
  if (
    isNonBlockingCommentEvidence(comment, {
      pull,
      trustedAuthorEvidenceApprovalAt,
      trustedAuthorProgressApprovalAt,
    })
  ) {
    return false;
  }

  const body = String(comment.body ?? "").trim();
  const author = String(comment.user?.login ?? comment.author?.login ?? "").toLowerCase();

  if (isClawSweeperAuthor(author)) {
    const currentReview = body.toLowerCase().split(/<details>/, 1)[0];
    if (hasActionableClawSweeperReviewSignal(currentReview)) return true;
    if (hasClawSweeperReadyReviewSignal(currentReview)) return true;
  }
  if (isReviewBot({ author: { login: author }, body })) {
    return /found issues|requested changes|changes requested|needs changes?|needs human|do not merge|duplicate|superseded|security/i.test(
      body,
    );
  }

  const pullAuthor = String(pull?.user?.login ?? "").toLowerCase();
  if (author && pullAuthor && author === pullAuthor) {
    return !isCommentCoveredByTrustedApproval(comment, trustedAuthorEvidenceApprovalAt);
  }

  return Boolean(body);
}

function isNonBlockingCommentEvidence(
  comment,
  { pull, trustedAuthorEvidenceApprovalAt = null, trustedAuthorProgressApprovalAt = null },
) {
  if (comment.isMinimized === true || comment.is_minimized === true) return true;
  const body = String(comment.body ?? "").trim();
  if (!body) return true;
  const author = String(comment.user?.login ?? comment.author?.login ?? "").toLowerCase();
  const association = String(comment.author_association ?? comment.authorAssociation ?? "").toUpperCase();
  const normalized = body.toLowerCase();

  if (isBenignAutomationComment({ author, body: normalized, pull })) return true;
  if (
    String(comment.state ?? "").toUpperCase() === "APPROVED" &&
    !hasActionableApprovedReviewBody(normalized)
  ) {
    return true;
  }
  if (isMaintainerCommandComment({ association, body: normalized })) return true;
  if (isMaintainerApprovalComment({ association, body: normalized })) return true;
  if (isMaintainerProofOrStatusComment({ association, body })) return true;
  if (isMaintainerEvidenceApprovalComment(comment)) return true;
  if (isReviewRequestComment(normalized)) return true;
  if (
    isClawSweeperReviewRefreshRequestComment(normalized) &&
    isCommentCoveredByTrustedApproval(comment, trustedAuthorProgressApprovalAt)
  ) {
    return true;
  }

  const pullAuthor = String(pull?.user?.login ?? "").toLowerCase();
  if (
    author &&
    pullAuthor &&
    author === pullAuthor &&
    isSupersededAuthorUnrelatedCiFailureComment(body) &&
    isCommentCoveredByTrustedApproval(comment, trustedAuthorProgressApprovalAt)
  ) {
    return true;
  }
  if (author && pullAuthor && author === pullAuthor && isAuthorProofOrStatusComment(body)) {
    return true;
  }
  if (
    author &&
    pullAuthor &&
    author === pullAuthor &&
    (isCommentCoveredByTrustedApproval(comment, trustedAuthorEvidenceApprovalAt) ||
      (isAuthorProgressEvidenceComment(body) &&
        isCommentCoveredByTrustedApproval(comment, trustedAuthorProgressApprovalAt)))
  ) {
    return true;
  }
  return false;
}

function hasActionableApprovedReviewBody(body) {
  const unresolved = body
    .replace(/\b(?:no|without)\s+(?:blocking\s+)?(?:concerns?|issues?|findings?|blockers?)\b/gi, "")
    .replace(/\bsecurity (?:checks?|review) (?:passed|cleared)\b/gi, "")
    .replace(/\bsecurity (?:concerns?|issues?|risks?) (?:are )?(?:resolved|addressed|cleared)\b/gi, "");
  return [
    /\b(?:do not|don't|should not|shouldn't|cannot|can't)\s+(?:merge|land|ship)\b/i,
    /\b(?:hold off|not ready|not convinced|changes? requested)\b/i,
    /\b(?:this|it|the (?:pr|patch|change))\s+(?:breaks?|fails?|regresses?|leaks?|exposes?)\b/i,
    /\b(?:needs?|requires?)\s+(?:changes?|fix(?:es)?|work|tests?|follow-?up)\b/i,
    /\b(?:must|please)\s+(?:fix|address|change|add|remove|resolve)\b/i,
    /\b(?:still blocking|blocker (?:remains|is unresolved))\b/i,
    /\bsecurity\b.{0,60}\b(?:unclear|concern|issue|risk|blocker)\b/i,
  ].some((pattern) => pattern.test(unresolved));
}

function isBenignAutomationComment({ author, body, pull }) {
  const currentReview = String(body).split(/<details>/, 1)[0];
  if (isClawSweeperAuthor(author) && hasClawSweeperReadyReviewSignal(currentReview)) {
    return isClawSweeperReadyReviewComment({ author, body, pull });
  }
  if (isStaleAutomationReviewComment({ author, body, pull })) return true;
  if (!isAutomationAuthor(author)) return false;
  if (isDependencyGuardAutomationComment({ body, pull })) return true;
  if (isClawSweeperReadyReviewComment({ author, body, pull })) return true;
  return (
    /clawsweeper pr egg|hatched:|hatch command|automatically marked as stale|clawsweeper-command-status|re-review requested|clownfish is on the reef|tagged `clownfish:automerge`/.test(
      body,
    ) || /^<!--\s*(?:clawsweeper|clownfish)-command/.test(body)
  );
}

function isDependencyGuardAutomationComment({ body, pull }) {
  if (/^<!--\s*openclaw:dependency-guard\s*-->/.test(body)) return true;
  if (!/^<!--\s*openclaw:dependency-graph-guard\s*-->/.test(body)) return false;
  const headSha = String(pull?.head?.sha ?? "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(headSha)) return false;
  if (/### dependency graph change authorized\b/.test(body)) {
    const approvedSha = body.match(/\bapproved sha:\s*`([0-9a-f]{40})`/)?.[1];
    return approvedSha === headSha;
  }
  const cleared = body.match(
    /^<!--\s*openclaw:dependency-graph-guard\s*-->\s*### dependency graph guard cleared\s+this pr no longer has blocked dependency graph changes\.\s+a future dependency graph change requires a fresh `\/allow-dependencies-change` comment after the guard blocks that new head sha\.\s+- current sha:\s*`([0-9a-f]{40})`\s*$/i,
  );
  return cleared?.[1]?.toLowerCase() === headSha;
}

function isStaleAutomationReviewComment({ author, body, pull }) {
  const headSha = String(pull?.head?.sha ?? "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(headSha)) return false;
  if (!isReviewBot({ author: { login: author }, body })) return false;
  const reviewedShas = commentReviewShas(body);
  return reviewedShas.length > 0 && reviewedShas.every((sha) => sha !== headSha);
}

function commentReviewShas(body) {
  const shas = new Set();
  const normalized = String(body ?? "").toLowerCase();
  const patterns = [
    /<!--\s*clawsweeper-(?:verdict|action):[^>]*\bsha=([0-9a-f]{40})\b[^>]*-->/g,
    /\blast reviewed commit:\s*(?:https?:\/\/\S+\/commit\/)?([0-9a-f]{40})\b/g,
    /\breviewed against\s*(?:\[[^\]]+\]\()?https?:\/\/\S+\/commit\/([0-9a-f]{40})\)?/g,
  ];
  for (const pattern of patterns) {
    for (const match of normalized.matchAll(pattern)) {
      shas.add(match[1]);
    }
  }
  return [...shas];
}

function isMaintainerCommandComment({ association, body }) {
  return (
    ["MEMBER", "OWNER", "COLLABORATOR"].includes(association) &&
    (/^\/(?:clownfish|clawsweeper)\b/.test(body) ||
      /^\/allow-dependencies-change(?:\s|$)/.test(body) ||
      /^<!--\s*(?:clownfish|clawsweeper)-command:/.test(body))
  );
}

function isMaintainerApprovalComment({ association, body }) {
  return (
    ["MEMBER", "OWNER", "COLLABORATOR"].includes(association) &&
    /^(?:lgtm|looks good(?: to me)?|approved|ship it|:\+1:|👍)[.! ]*$/.test(body)
  );
}

function isMaintainerProofOrStatusComment({ association, body }) {
  return (
    ["MEMBER", "OWNER", "COLLABORATOR"].includes(association) &&
    isAuthorProofOrStatusComment(body)
  );
}

function isClawSweeperReadyReviewComment({ author, body, pull }) {
  if (!isClawSweeperAuthor(author)) return false;
  const normalized = String(body ?? "").trim().toLowerCase();
  const hasExactMarker = hasExactHeadClawSweeperReadyMarker({ body: normalized, pull });
  if (!hasExactMarker) return false;

  const currentReview = normalized.split(/<details>/, 1)[0];
  return !hasActionableClawSweeperReviewSignal(currentReview) && hasClawSweeperReadyReviewSignal(currentReview);
}

function hasClawSweeperReadyReviewSignal(body) {
  const firstLine = String(body).split(/\r?\n/, 1)[0].trim();
  return (
    isClawSweeperMaintainerReviewHeader(firstLine) &&
    /result:\s*ready for maintainer review\./.test(body) &&
    /(review metrics:\*\*\s*none identified|review metrics:\s*none identified|no (?:clawsweeper |automated )?repair(?: job)? is needed|no concrete contributor-facing blocker left|remaining action is normal maintainer review)/.test(
      body,
    )
  );
}

function isClawSweeperAuthor(author) {
  return ["clawsweeper", "clawsweeper[bot]"].includes(author);
}

function hasActionableClawSweeperReviewSignal(body) {
  const firstLine = String(body).split(/\r?\n/, 1)[0].trim();
  if (
    !isClawSweeperMaintainerReviewHeader(firstLine) &&
    /\b(?:needs?|requires?|blocked|changes?)\b.*\bbefore merge\./.test(firstLine)
  ) {
    return true;
  }
  return [
    /\*\*merge readiness\*\*[\s\S]{0,1200}\bresult:\s*blocked until\b/,
    /\*\*proof guidance\*\*[\s\S]{0,1600}\b(?:needs?|requires?) (?:stronger )?real behavior proof before merge\b/,
    /\*\*risk before merge\*\*[\s\S]{0,1600}\b(?:blocker|must|needs?|required|missing)\b/,
    /\*\*next step before merge\*\*[\s\S]{0,1200}\bremaining (?:merge )?blocker\b/,
  ].some((pattern) => pattern.test(body));
}

function isClawSweeperMaintainerReviewHeader(line) {
  return /^codex review:\s*needs maintainer review before merge\.(?:\s+_reviewed [^_\r\n]+_)?$/i.test(
    String(line ?? "").trim(),
  );
}

function findHighRiskMergeLabel(labels) {
  return (labels ?? [])
    .map((label) => String(label?.name ?? label).trim())
    .find((label) => /^merge-risk:/i.test(label));
}

function isAutomationAuthor(author) {
  return (
    /\[bot\]$|bot$/.test(author) ||
    ["clawsweeper", "openclaw-clownfish", "openclaw-barnacle", "barnacle-openclaw", "greptile-apps"].includes(author)
  );
}

function trustedAuthorEvidenceApprovalTimestamp(comments, { pull }) {
  const headSha = String(pull?.head?.sha ?? "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(headSha)) return null;
  const timestamps = comments
    .filter((comment) => isMaintainerEvidenceApprovalComment(comment, { headSha }))
    .map(commentTimestamp)
    .filter(Number.isFinite);
  return timestamps.length > 0 ? Math.max(...timestamps) : null;
}

function trustedAuthorProgressApprovalTimestamp(comments, { pull }) {
  const timestamps = comments
    .filter((comment) => isTrustedExactHeadReadyReviewComment(comment, { pull }))
    .map(commentTimestamp)
    .filter(Number.isFinite);
  return timestamps.length > 0 ? Math.max(...timestamps) : null;
}

function isCommentCoveredByTrustedApproval(comment, trustedAuthorEvidenceApprovalAt) {
  if (!Number.isFinite(trustedAuthorEvidenceApprovalAt)) return false;
  const timestamp = commentTimestamp(comment);
  return Number.isFinite(timestamp) && timestamp < trustedAuthorEvidenceApprovalAt;
}

function isTrustedExactHeadReadyReviewComment(comment, { pull }) {
  const body = String(comment.body ?? "").trim();
  const author = String(comment.user?.login ?? comment.author?.login ?? "").toLowerCase();
  return isClawSweeperReadyReviewComment({ author, body, pull });
}

function hasExactHeadClawSweeperReadyMarker({ body, pull }) {
  if (/<!--\s*clawsweeper-action:/i.test(body)) return false;

  const verdictOpeners = body.match(/<!--\s*clawsweeper-verdict:/gi) ?? [];
  if (verdictOpeners.length !== 1) return false;
  const verdicts = [...body.matchAll(/<!--\s*clawsweeper-verdict:([a-z-]+)\s+([^>]*)-->/gi)];
  if (verdicts.length !== 1 || verdicts[0][1].toLowerCase() !== "needs-human") return false;

  const attributes = parseMarkerAttributes(verdicts[0][2]);
  if (!attributes) return false;
  const reviewOpeners = body.match(/<!--\s*clawsweeper-review(?=\s)/gi) ?? [];
  if (reviewOpeners.length !== 1) return false;
  const reviews = [...body.matchAll(/<!--\s*clawsweeper-review\s+([^>]*)-->/gi)];
  if (reviews.length !== 1) return false;
  const reviewAttributes = parseMarkerAttributes(reviews[0][1]);
  if (!reviewAttributes) return false;

  const headSha = String(pull?.head?.sha ?? "").toLowerCase();
  const pullNumber = String(pull?.number ?? "");
  return (
    /^[0-9a-f]{40}$/.test(headSha) &&
    attributes.sha?.toLowerCase() === headSha &&
    attributes.item === pullNumber &&
    attributes.confidence === "high" &&
    reviewAttributes.item === pullNumber
  );
}

function parseMarkerAttributes(input) {
  const attributes = {};
  const tokens = String(input).trim().split(/\s+/);
  if (tokens.length === 0) return null;
  for (const token of tokens) {
    const match = token.match(/^([a-z_]+)=([^\s=]+)$/i);
    if (!match) return null;
    const key = match[1].toLowerCase();
    if (Object.hasOwn(attributes, key)) return null;
    attributes[key] = match[2];
  }
  return attributes;
}

function isAuthorProgressEvidenceComment(body) {
  const normalized = String(body ?? "").trim().toLowerCase();
  if (!normalized || isAuthorObjectionComment(normalized)) return false;
  const lines = normalized
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length > 0 && lines.every(isSafeAuthorProgressLine);
}

function isAuthorProofOrStatusComment(body) {
  const normalized = String(body ?? "").trim().toLowerCase();
  if (!normalized || isAuthorObjectionComment(normalized)) return false;

  const lines = normalized
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length === 0) return false;
  if (lines.every(isSafeAuthorProgressLine)) return true;

  const contentLines = lines.map((line) => line.replace(/^[-*]\s+/, "").replace(/^#{1,6}\s*/, ""));
  const hasStatusLead = contentLines.some((line) =>
    [
      /^(?:rebas(?:ed|ing)|re-ran|reran|ran|verified|validated|updated|added|addressed|resolved|fixed|tested)\b/,
      /^(?:this|the (?:change|patch|pr))\s+(?:fixes|adds|updates|preserves|addresses)\b/,
    ].some((pattern) => pattern.test(line)),
  );
  const hasProofHeading = contentLines.some((line) =>
    /^(?:real behavior proof|proof|validation|verification|test results|current status|status):?$/.test(line),
  );
  const hasRealBehaviorProofHeading = contentLines.some((line) => /^real behavior proof:?$/.test(line));
  const hasEvidenceDetail = lines.some(
    (line) =>
      /^[-*]\s+/.test(line) &&
      /`[^`]+`|\b(?:accepted|confirms?|green|ignored|no failures|passed|passing|proof|shows?|skipped|verified)\b/.test(
        line,
      ),
  );
  const hasInlineEvidenceDetail = contentLines.some(
    (line) =>
      /^(?:proof|validation|verification|test results|current status|status):\s+\S/.test(line) &&
      /`[^`]+`|\b(?:git|node|pnpm|npm|yarn|bun)\s+\S+|\b(?:passed|passing|green|clean|successful)\b/.test(
        line,
      ),
  );
  const hasProofSignal =
    /\b(?:proof|validation|verification|tests?|checks?|ci\/status|repro(?:duction|ducible)?|autoreview)\b/.test(
      normalized,
    );

  if (hasRealBehaviorProofHeading) return isSafeRealBehaviorProof(lines);
  return (
    hasInlineEvidenceDetail ||
    (hasProofHeading && hasEvidenceDetail) ||
    (hasStatusLead && (hasEvidenceDetail || hasProofSignal))
  );
}

function isSafeRealBehaviorProof(lines) {
  let section = "";
  let inFence = false;
  let fenceLines = [];
  const seenSections = new Set();
  for (const line of lines) {
    const fence = line.match(/^```([a-z0-9_-]*)$/);
    if (fence) {
      if (inFence) {
        if (fence[1]) return false;
        if (!isSafeRealBehaviorProofFence(section, fenceLines)) return false;
        inFence = false;
        fenceLines = [];
        continue;
      }
      const expectedLanguage = section === "raw" ? "bash" : section === "behavior" ? "typescript" : "";
      if (!expectedLanguage || fence[1] !== expectedLanguage) return false;
      inFence = true;
      fenceLines = [];
      continue;
    }
    if (inFence) {
      fenceLines.push(line);
      continue;
    }

    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      const title = heading[2].trim().toLowerCase();
      if (heading[1] === "##" && title === "real behavior proof") {
        if (section) return false;
        section = "proof";
        seenSections.add(section);
        continue;
      }
      const knownSection = {
        "system environment": "environment",
        "raw lsof output (sample)": "raw",
        "behavior verification": "behavior",
        "test coverage": "tests",
      }[title];
      if (heading[1] === "###" && knownSection && seenSections.has("proof")) {
        if (seenSections.has(knownSection)) return false;
        section = knownSection;
        seenSections.add(section);
        continue;
      }
      return false;
    }

    if (section === "environment") {
      if (
        /^[-*]\s+os:\s+(?:linux|darwin|macos|windows)(?:\s+[0-9][a-z0-9._-]*)?$/.test(line) ||
        /^[-*]\s+lsof version:\s+(?:available at \/[a-z0-9._/-]+|[0-9][a-z0-9._-]*)$/.test(line) ||
        isValidProofUtcTimestamp(line)
      ) {
        continue;
      }
      return false;
    }
    if (section === "raw") return false;
    if (section === "behavior") {
      const content = line.replace(/^[-*]\s+/, "");
      if (
        isSafeBehaviorAssertion(content) ||
        /^\*\*before this fix\*\*:\s+(?:a malformed `p` record(?: \(e\.g\., `p-1` or `pabc`\))? followed by address lines would create listener entries with invalid or missing pids|(?:known issue:\s+)?valid listeners were (?:still )?missing)\.$/.test(
          content,
        ) ||
        /^\*\*after this fix\*\*:\s+the parser at `[^`]+` validates that parsed pids are positive integers before accepting them:$/.test(
          content,
        ) ||
        /^the fix ensures that only process records with valid positive pids are accepted\.$/.test(content) ||
        /^this means subsequent address lines \(`n\.\.\.`\) are only attached to valid process records, preventing phantom listeners in diagnostic output\.$/.test(
          content,
        )
      ) {
        continue;
      }
      return false;
    }
    if (section === "tests") {
      const content = line.replace(/^[-*]\s+/, "");
      if (
        isSafeBehaviorAssertion(content) ||
        /^unit tests verify this behavior:?$/.test(content) ||
        /^all [1-9]\d* tests in `[a-z0-9_./-]+` pass, confirming the fix works correctly\.$/.test(
          content,
        ) ||
        /^all [1-9]\d* focused tests passed\.$/.test(content) ||
        /^`[^`]+`\s+(?:passed|passing|succeeded|successful)\b[.!]?$/.test(content)
      ) {
        continue;
      }
      return false;
    }
    return false;
  }
  return !inFence && seenSections.has("behavior") && seenSections.has("tests");
}

function isValidProofUtcTimestamp(line) {
  const match = line.match(
    /^[-*]\s+test date:\s+(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})\s+utc$/,
  );
  if (!match) return false;
  const [, yearText, monthText, dayText, hourText, minuteText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day &&
    date.getUTCHours() === hour &&
    date.getUTCMinutes() === minute
  );
}

function isSafeRealBehaviorProofFence(section, lines) {
  if (section === "raw") {
    return (
      lines.length >= 2 &&
      /^\$ lsof -np -itcp -stcp:listen -fpfcn \| head -30$/.test(lines[0]) &&
      lines.slice(1).every((line) => /^[pcn]\S+$/.test(line)) &&
      lines.slice(1).some((line) => /^p[1-9]\d*$/.test(line))
    );
  }
  if (section === "behavior") {
    const snippet = lines.join("\n");
    return [
      [
        "const pid = number.parseint(line.slice(1), 10);",
        "processfields = number.isfinite(pid) && pid > 0 ? { pid } : {};",
      ].join("\n"),
      [
        "const pid = parsestrictpositiveinteger(line.slice(1));",
        "processfields = pid === undefined ? {} : { pid };",
      ].join("\n"),
    ].includes(snippet);
  }
  return false;
}

function isSafeBehaviorAssertion(content) {
  return [
    /^valid pids? \(positive integers\)\s*(?:→|=>)\s*accepted[.]?$/,
    /^invalid pids? \(negative, non-numeric, or missing\)\s*(?:→|=>)\s*skipped[.]?$/,
    /^address lines without valid pid context\s*(?:→|=>)\s*ignored[.]?$/,
    /^no valid listeners are skipped[.]?$/,
    /^no invalid listeners are accepted[.]?$/,
    /^(?:known|remaining|current)\s+(?:bug|concern|defect|error|failure|issue|limitation|problem|regression|risk)\s+(?:(?:is|was|has been)\s+)?(?:addressed|closed|fixed|none|resolved)\b[.!]?$/,
    /^remaining issue count:\s*0\b[.!]?$/,
  ].some((pattern) => pattern.test(content));
}

function isSupersededAuthorUnrelatedCiFailureComment(body) {
  const normalized = String(body ?? "").trim().toLowerCase();
  if (!normalized || hasSecuritySensitiveText(normalized) || hasActionableApprovedReviewBody(normalized)) {
    return false;
  }

  const objectionProbe = normalized.replace(/\b`?qa smoke ci`?\s+is the only red check\b/g, "");
  if (isAuthorObjectionComment(objectionProbe)) return false;

  const claimsUnrelatedFailure =
    /\b(?:ci|check|job|smoke)\b.{0,50}\bfailure\b.{0,100}\bunrelated to (?:this|the) (?:change|patch|pr)\b/.test(
      normalized,
    );
  const claimsCurrentSurfaceGreen =
    /\b(?:own|pr-relevant|relevant)\b.{0,80}\b(?:surface|ci lanes?|checks?)\b.{0,80}\b(?:green|pass(?:es|ed|ing)?)\b/.test(
      normalized,
    );
  const identifiesExternalFlake =
    /\b(?:identical|same) failure\b.{0,160}\bother (?:open )?prs?\b/.test(normalized) ||
    /\bknown\b.{0,80}\b(?:ci|qa|harness)\b.{0,50}\bflake\b.{0,100}\bmain\b/.test(normalized);
  const requestsRerun = /\b(?:re-?run|retrigger)\b.{0,100}\b(?:ci|check|job)\b/.test(normalized);

  return claimsUnrelatedFailure && claimsCurrentSurfaceGreen && identifiesExternalFlake && requestsRerun;
}

function isSafeAuthorProgressLine(line) {
  const content = line.replace(/^[-*]\s+/, "");
  return [
    /^@clawsweeper\s+(?:re-review|re-run|review)(?:\s+please)?$/,
    /^rebased onto (?:current )?(?:`main`|main)[.!]?$/,
    /^rebased (?:this pr|the branch|the patch) onto (?:current )?(?:`?upstream\/main`?|`?main`?).*$/,
    /^resolved (?:the |a )?.*conflict.*$/,
    /^the dependency guard check should pass now[.!]?$/,
    /^changes made[.!]?$/,
    /^(?:tests?|checks?) (?:are )?(?:green|passing|passed)[.!]?$/,
    /^all github checks are (?:passing|green)(?: or skipped)?[.!]?$/,
    /^merge state is clean[.!]?$/,
    /^real behavior proof (?:has been |is )?(?:added|passing|passed).*$/,
    /^github real behavior proof is passing.*$/,
    /^addressed (?:the )?.*$/,
    /^rebuilt (?:the )?.*$/,
    /^preserved (?:the )?.*$/,
    /^removed (?:the )?.*$/,
    /^updated (?:the )?.*$/,
    /^the conflict resolution (?:keeps|preserves) .*$/,
    /^current (?:local validation|status)(?: after the rebase| on head `?[0-9a-f]+`?)?:$/,
    /^local validation after the rebase:$/,
    /^requested after the clawsweeper .*fix.*$/,
    /^the latest review comment .*ready for maintainer review.*$/,
    /^`[^`]+`(?:\s+from\s+`[^`]+`)?$/,
    /^(?:verified|verification complete)[.!]?$/,
    /^(?:would you mind (?:taking|to take)|please (?:take|have)) a look[.!?]?$/,
    /^ready for (?:another )?(?:look|review)[.!]?$/,
    /^thanks?[.!]?$/,
  ].some((pattern) => pattern.test(content));
}

function isAuthorObjectionComment(body) {
  if (hasSecuritySensitiveText(body)) return true;
  if (hasActionableApprovedReviewBody(body)) return true;
  const currentClaims = String(body)
    .split(/\r?\n/)
    .filter((line) => !/^\s*\*\*before this fix\*\*:/.test(line))
    .join("\n");
  return hasOpenIssueStatement(currentClaims) || hasInvertedProofEvidence(currentClaims) || [
    /\b(?:pause|wait|hold)(?:\s+off)?\b/,
    /\b(?:not|isn't|aren't)\s+(?:ready|complete|fixed|resolved)\b/,
    /\b(?:incomplete|unfinished|still investigating|need more time|one more thought|worried|concerns?|unclear)\b/,
    /\b(?:haven't|hasn't|nothing was)\s+fixed\b/,
    /\b(?:tests?|checks?|ci)\b.{0,40}\b(?:are |is )?(?:still )?(?:failing|failed|red|broken)\b/,
    /\b(?:found|noticed|observed|identified|detected)\b(?![^.\n]{0,20}\bno\b)[^.\n]{0,100}\b(?:bug|issue|problem|regression|failure|error|risk|concern)\b/,
    /\b(?:but|however|still|yet)\b.{0,100}\b(?:broken|crashes?|fails?|failure|incorrect|loses?|missing|regression)\b/,
    /\b(?:rather|prefer)\b.{0,40}\bnot (?:merge|land|ship)\b/,
    /\b(?:withdraw|withdrawn|abandon|abandoned|cancel|cancelled|superseded|obsolete)\b/,
    /\b(?:close|stop)\s+(?:this|the)\s+(?:pr|pull request)\b/,
    /\bno longer (?:want|need|support)\b/,
    /\bwrong (?:approach|direction|fix)\b/,
  ].some((pattern) => pattern.test(currentClaims));
}

function hasOpenIssueStatement(body) {
  return String(body)
    .split(/\r?\n/)
    .some((rawLine) => {
      const line = rawLine.trim().toLowerCase().replace(/^[-*]\s+/, "");
      const pattern =
        /\b(?:known|remaining|current)\s+(?:bug|concern|defect|error|failure|issue|limitation|problem|regression|risk)\b/g;
      return [...line.matchAll(pattern)].some((match) => {
        const suffix = line.slice((match.index ?? 0) + match[0].length);
        return !/^\s*(?::\s*)?(?:count\s*[:=]\s*0\b|(?:is|was|has been)?\s*(?:addressed|closed|fixed|none|resolved)\b)/.test(
          suffix,
        );
      });
    });
}

function hasInvertedProofEvidence(body) {
  return String(body)
    .split(/\r?\n/)
    .some((rawLine) => {
      const line = rawLine.trim().toLowerCase().replace(/^[-*]\s+/, "");
      if (/^\*\*before this fix\*\*:/.test(line)) return false;
      if (/\bno\s+valid\b.{0,80}\b(?:accepted|processed|preserved)\b/.test(line)) return true;
      if (
        /\bno\s+(?:invalid|malformed|unsupported)\b.{0,80}\b(?:accepted|allowed|processed|preserved|produced)\b/.test(
          line,
        )
      ) {
        return false;
      }
      if (
        /\b(?:no\s+valid|without (?:an? )?valid)\b.{0,80}\b(?:dropped|fails?|ignored|rejected|skipped)\b/.test(
          line,
        )
      ) {
        return false;
      }
      return [
        /\b(?:expected|supported|valid)\b.{0,80}\b(?:disappears?|dropped|fails?|ignored|lost|missing|rejected|skipped)\b/,
        /\b(?:disappears?|drops?|ignores?|loses?|rejects?|skips?)\b.{0,80}\b(?:expected|supported|valid)\b/,
        /\b(?:invalid|malformed|unsupported)\b.{0,80}\b(?:accepted|allowed|creates?|processed|preserved|produces?)\b/,
        /\b(?:accepts?|allows?|creates?|processes?|preserves?|produces?)\b.{0,80}\b(?:invalid|malformed|unsupported)\b/,
      ].some((pattern) => pattern.test(line));
    });
}

function commentTimestamp(comment) {
  const value = Date.parse(
    String(comment.updated_at ?? comment.updatedAt ?? comment.created_at ?? comment.createdAt ?? ""),
  );
  return Number.isFinite(value) ? value : Number.NaN;
}

function isMaintainerEvidenceApprovalComment(comment, { headSha = null } = {}) {
  const association = String(comment.author_association ?? comment.authorAssociation ?? "").toUpperCase();
  if (!["MEMBER", "OWNER", "COLLABORATOR"].includes(association)) return false;
  const match = String(comment.body ?? "")
    .trim()
    .match(/^<!--\s*clownfish-author-evidence-approved\s+sha=([0-9a-f]{40})\s*-->$/i);
  if (!match) return false;
  return !headSha || match[1].toLowerCase() === headSha;
}

function isSupersededDependencyGuardNotice(comment, laterComments, { pull, view }) {
  const body = String(comment.body ?? "").trim();
  const marker = /^<!--\s*dependency-guard-rebase-needed-backfill\s*-->\s*/i;
  if (!marker.test(body)) return false;
  if (
    view?.mergeable !== "MERGEABLE" ||
    !isAcceptableMergeState(view) ||
    latestStatusChecks(view.statusCheckRollup ?? []).some(isFailingCheck)
  ) {
    return false;
  }
  const notice = body.replace(marker, "").trim();
  if (
    !/^heads up: this pr needs to be updated against current `?main`? before (?:the new required )?dependency guard check can pass\.?$/i.test(
      notice,
    )
  ) {
    return false;
  }

  const pullAuthor = String(pull?.user?.login ?? "").toLowerCase();
  return laterComments.some((later) => {
    const author = String(later.user?.login ?? later.author?.login ?? "").toLowerCase();
    const laterBody = String(later.body ?? "");
    return (
      author === pullAuthor &&
      (/\brebased onto (?:current )?(?:`main`|main)(?:\s|[.,]|$)/i.test(laterBody) ||
        /\bdependency guard\b.{0,40}\bshould pass\b/i.test(laterBody))
    );
  });
}

function isReviewRequestComment(body) {
  return /^@clawsweeper\s+(?:re-review|re-run|review)(?:\s+please)?\s*$/.test(body);
}

function isClawSweeperReviewRefreshRequestComment(body) {
  if (isAuthorObjectionComment(body)) return false;
  return (
    /\bclawsweeper\b.{0,100}\b(?:label|comment) sync bug\b/.test(body) &&
    /\b(?:post|add)\b.{0,80}\bclawsweeper\b.{0,40}\bre-review\b/.test(body)
  );
}

function evidenceExamples(items) {
  return items
    .slice(0, 3)
    .map((item) => item.html_url ?? item.url ?? item.author?.login ?? item.user?.login ?? "comment");
}

function isCleanCodexReview(review) {
  const findings = Array.isArray(review?.findings) ? review.findings : null;
  return (
    ["passed", "clean"].includes(String(review?.status ?? "").toLowerCase()) &&
    findings &&
    findings.length === 0
  );
}

function positiveInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function nonNegativeInteger(value, fallback) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
}

function ghJson(commandArgs) {
  return JSON.parse(run("gh", commandArgs, { env: ghReadEnv() }));
}

function ghReadEnv() {
  return { ...process.env, GH_TOKEN: process.env.CLOWNFISH_READ_GH_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_TOKEN };
}

function validationEnv() {
  const env = {
    ...process.env,
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    OPENCLAW_LOCAL_CHECK: "0",
  };
  for (const key of [
    "GH_TOKEN",
    "GITHUB_TOKEN",
    "OPENCLAW_GH_TOKEN",
    "CLOWNFISH_GH_TOKEN",
    "CLOWNFISH_READ_GH_TOKEN",
    "CLOWNFISH_CODEX_GH_TOKEN",
  ]) {
    delete env[key];
  }
  return env;
}

function codexEnv() {
  const env = {
    ...process.env,
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
  };
  for (const key of [
    "GH_TOKEN",
    "GITHUB_TOKEN",
    "OPENCLAW_GH_TOKEN",
    "CLOWNFISH_GH_TOKEN",
    "CLOWNFISH_READ_GH_TOKEN",
    "CLOWNFISH_CODEX_GH_TOKEN",
  ]) {
    delete env[key];
  }
  if (process.env.GITHUB_ACTIONS === "true") {
    delete env.OPENAI_API_KEY;
    delete env.CODEX_API_KEY;
  }
  return env;
}

function run(command, commandArgs, options = {}) {
  const child = spawnSync(command, commandArgs, {
    cwd: options.cwd,
    env: options.env ?? process.env,
    input: options.input,
    encoding: "utf8",
    timeout: options.timeout,
    maxBuffer: options.maxBuffer,
  });
  if (child.error?.code === "ETIMEDOUT") {
    const timeout = options.timeout ? `${options.timeout}ms` : "the configured deadline";
    throw new Error(
      formatCommandFailure(command, commandArgs, child, `timed out after ${timeout}`),
    );
  }
  if (child.error) {
    throw new Error(formatCommandFailure(command, commandArgs, child, `failed to start: ${child.error.message}`));
  }
  if (child.signal) {
    throw new Error(formatCommandFailure(command, commandArgs, child, `terminated by ${child.signal}`));
  }
  if (child.status !== 0) {
    throw new Error(formatCommandFailure(command, commandArgs, child, `failed with exit ${child.status}`));
  }
  return child.stdout ?? "";
}

function formatCommandFailure(command, commandArgs, child, outcome) {
  const sections = [`command ${outcome}: ${renderCommand(command, commandArgs)}`];
  for (const [label, value] of [
    ["stderr", child.stderr],
    ["stdout", child.stdout],
  ]) {
    const stream = redactSecrets(stripAnsi(value)).trim();
    if (stream) sections.push(`${label}:\n${boundDiagnostic(stream, FAILURE_STREAM_MAX_CHARS)}`);
  }
  return boundDiagnostic(redactSecrets(sections.join("\n")), FAILURE_REASON_MAX_CHARS);
}

function renderCommand(command, commandArgs) {
  return [command, ...commandArgs]
    .map((part) => {
      const value = String(part);
      return /^[A-Za-z0-9_./:@%+=,-]+$/.test(value) ? value : JSON.stringify(value);
    })
    .join(" ");
}

function boundDiagnostic(value, maxChars) {
  const text = String(value ?? "");
  if (text.length <= maxChars) return text;
  const marker = "\n... [truncated; showing head and tail] ...\n";
  const contentChars = maxChars - marker.length;
  const headChars = Math.min(400, Math.floor(contentChars / 4));
  return `${text.slice(0, headChars)}${marker}${text.slice(-(contentChars - headChars))}`;
}

function stage(name, fn) {
  console.log(`::group::external preflight: ${name}`);
  const started = Date.now();
  try {
    return fn();
  } finally {
    console.log(`external preflight: ${name} finished in ${Date.now() - started}ms`);
    console.log("::endgroup::");
  }
}

function normalizeRef(value) {
  const match = String(value ?? "").match(/^#?(\d+)$/);
  return match ? `#${match[1]}` : "";
}

function normalizeState(value) {
  return String(value ?? "").toLowerCase() || "unavailable";
}

function redact(value) {
  return boundDiagnostic(redactSecrets(stripAnsi(value)), FAILURE_REASON_MAX_CHARS);
}

function redactSecrets(value) {
  let redacted = String(value ?? "")
    .replace(
      /\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9_-]{20,})\b/g,
      "[redacted]",
    )
    .replace(
      /\b(authorization)\b(\s*:\s*)(bearer\s+)?([^\s]+)/gi,
      "$1$2$3[redacted]",
    )
    .replace(
      /\b(bearer)\b(\s+)([^\s]+)/gi,
      "$1$2[redacted]",
    )
    .replace(
      /\b(token|api[_-]?key|password|secret)\b(\s*[:=]\s*)([^\s]+)/gi,
      "$1$2[redacted]",
    );
  const secrets = new Set(
    Object.entries(process.env)
      .filter(([key, secret]) => secret && /(token|secret|password|api[_-]?key|private[_-]?key)/i.test(key))
      .map(([, secret]) => secret)
      .filter((secret) => secret.length >= 4),
  );
  for (const secret of [...secrets].sort((left, right) => right.length - left.length)) {
    if (secret) redacted = redacted.replaceAll(secret, "[redacted]");
  }
  return redacted;
}

function stripAnsi(value) {
  return String(value ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}
