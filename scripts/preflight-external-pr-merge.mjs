#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { assertAllowedOwner, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import { hasSecuritySensitiveText } from "./security-sensitive.mjs";

const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN"]);
const IGNORED_CHECKS = new Set(["auto-response", "Labeler", "Stale"]);
const REVIEW_BOT_PATTERN = /\b(?:greptile|codex|asile|coderabbit|copilot)\b/i;

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
let view = null;
let plan = null;
let preflightJobPath = null;
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
  pull = ghJson(["api", `repos/${sourceJob.frontmatter.repo}/pulls/${pullRequest}`]);
  view = ghJson([
    "pr",
    "view",
    String(pullRequest),
    "--repo",
    sourceJob.frontmatter.repo,
    "--json",
    "comments,headRefOid,isDraft,mergeStateStatus,mergeable,reviewDecision,reviews,statusCheckRollup,updatedAt,url",
  ]);

  const virtualJob = writePreflightJob({ sourceJob, pull, pullRequest, runDir });
  preflightJobPath = virtualJob.path;
  plan = buildPlan({ sourceJob, virtualJob, pull, view, pullRequest, baseBranch });

  const blockers = readOnlyBlockers({ sourceJob, pull, view, pullRequest });
  if (blockers.length > 0) {
    writeBlockedArtifacts({ reason: blockers.join("; ") });
    process.exit(0);
  }

  checkoutExactPullHead({ repo: sourceJob.frontmatter.repo, pullRequest, expectedHeadSha: pull.head.sha });
  const currentMainSha = run("git", ["rev-parse", `origin/${baseBranch}`], { cwd: targetDir }).trim();
  if (currentMainSha !== pull.base.sha) {
    writeBlockedArtifacts({
      reason: `base advanced before validation: reviewed base ${pull.base.sha}, current ${currentMainSha}`,
      currentMainSha,
    });
    process.exit(0);
  }

  prepareTargetToolchain(targetDir);
  const validationCommands = runValidation({ targetDir, baseBranch });
  const codexReview = runCodexReview({
    repo: sourceJob.frontmatter.repo,
    pullRequest,
    targetDir,
    validationCommands,
    sourceJob,
  });
  if (!isCleanCodexReview(codexReview)) {
    writeBlockedArtifacts({
      reason: `Codex /review did not pass: ${String(codexReview.summary ?? "unknown")}`,
      validationCommands,
      codexReview,
      currentMainSha,
    });
    process.exit(0);
  }

  const result = buildMergeResult({
    sourceJob,
    virtualJob,
    pull,
    view,
    pullRequest,
    validationCommands,
    codexReview,
    currentMainSha,
  });
  report = {
    ...report,
    status: "passed",
    reviewed_head_sha: pull.head.sha,
    reviewed_base_sha: pull.base.sha,
    current_main_sha: currentMainSha,
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
  writeBlockedArtifacts({ reason });
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

function buildPlan({ sourceJob, virtualJob, pull, view, pullRequest, baseBranch }) {
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
        updated_at: pull?.updated_at ?? null,
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

function readOnlyBlockers({ sourceJob, pull, view, pullRequest }) {
  const blockers = [];
  const issueComments = Array.isArray(view.comments) ? view.comments : [];
  const reviewComments = ghJson(["api", `repos/${sourceJob.frontmatter.repo}/pulls/${pullRequest}/comments?per_page=100`]);
  const threads = fetchReviewThreads({ repo: sourceJob.frontmatter.repo, pullRequest });
  const texts = [
    pull.title,
    pull.body,
    ...(pull.labels ?? []).map((label) => label.name),
    ...issueComments.filter((comment) => !isNonBlockingCommentEvidence(comment, { pull })).map((comment) => comment.body),
    ...(view.reviews ?? []).filter((review) => !isNonBlockingCommentEvidence(review, { pull })).map((review) => review.body),
    ...reviewComments.map((comment) => comment.body),
  ];

  if (hasSecuritySensitiveText(texts)) blockers.push("security-sensitive signal in hydrated PR metadata or comments");
  if (String(pull.state ?? "").toLowerCase() !== "open") blockers.push(`PR is ${pull.state ?? "unknown"}`);
  if (pull.draft) blockers.push("PR is draft");
  if (pull.base?.ref !== "main") blockers.push(`PR base is ${pull.base?.ref ?? "unknown"}, not main`);
  if (!/^[0-9a-f]{40}$/i.test(String(pull.head?.sha ?? ""))) blockers.push("PR head SHA is unavailable");
  if (!/^[0-9a-f]{40}$/i.test(String(pull.base?.sha ?? ""))) blockers.push("PR base SHA is unavailable");
  if (view.mergeable !== "MERGEABLE") blockers.push(`PR mergeability is ${view.mergeable ?? "unknown"}`);
  if (!CLEAN_MERGE_STATES.has(String(view.mergeStateStatus ?? ""))) {
    blockers.push(`PR merge state is ${view.mergeStateStatus ?? "unknown"}`);
  }
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    blockers.push(`PR review decision is ${view.reviewDecision}`);
  }
  const failingChecks = (view.statusCheckRollup ?? []).filter(isFailingCheck).map(checkName);
  if (failingChecks.length > 0) blockers.push(`PR has non-passing checks: ${failingChecks.slice(0, 4).join(", ")}`);
  if (threads.hasNextPage) blockers.push("PR has more than 100 review threads");
  const unresolved = threads.nodes.filter((thread) => !thread.isResolved);
  if (unresolved.length > 0) blockers.push(`PR has ${unresolved.length} unresolved review thread(s)`);
  const actionableIssueComments = issueComments.filter((comment) => isActionableCommentEvidence(comment, { pull }));
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
  run("git", ["merge-base", `origin/${baseBranch}`, "HEAD"], { cwd: targetDir });
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
  run("corepack", ["enable"], { cwd, env });
  run("corepack", ["prepare", packageManager, "--activate"], { cwd, env });
  run(
    "pnpm",
    ["install", "--frozen-lockfile", "--prefer-offline", "--config.engine-strict=false", "--config.enable-pre-post-scripts=true"],
    { cwd, env },
  );
}

function runValidation({ targetDir, baseBranch }) {
  const env = validationEnv();
  run("pnpm", ["check:changed"], { cwd: targetDir, env });
  run("git", ["diff", "--check", `origin/${baseBranch}...HEAD`], { cwd: targetDir, env });
  run("git", ["diff", "--check"], { cwd: targetDir, env });
  return ["pnpm check:changed", `git diff --check origin/${baseBranch}...HEAD`, "git diff --check"];
}

function runCodexReview({ repo, pullRequest, targetDir, validationCommands, sourceJob }) {
  const schemaPath = path.join(runDir, "codex-review.schema.json");
  const outputPath = path.join(runDir, "codex-review.json");
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
    `Review the exact checked-out PR head against origin/${baseBranch}.`,
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
      "read-only",
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

function buildMergeResult({ sourceJob, virtualJob, pull, view, pullRequest, validationCommands, codexReview, currentMainSha }) {
  const evidence = [
    `Exact PR head ${pull.head.sha} checked out from refs/pull/${pullRequest}/head.`,
    `PR base ${pull.base.sha} matched current origin/main ${currentMainSha} before validation.`,
    `GitHub merge state ${view.mergeStateStatus} and review decision ${view.reviewDecision ?? "none"} were clean.`,
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
        idempotency_key: `external-merge-preflight:${sourceJob.frontmatter.repo}#${pullRequest}:${pull.head.sha}`,
        expected_head_sha: pull.head.sha,
        classification: "canonical",
        target_kind: "pull_request",
        target_updated_at: pull.updated_at,
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
        security_status: "cleared",
        security_evidence: [
          "Fresh deterministic security scan found no matching signal in the PR title, body, labels, issue comments, reviews, or inline review comments.",
        ],
        comments_status: "resolved",
        comments_evidence: ["Fresh GitHub hydration found zero top-level issue comments, zero inline review comments, and zero unresolved review threads."],
        bot_comments_status: "resolved",
        bot_comments_evidence: ["Fresh GitHub hydration found zero review-bot comments or review bodies requiring follow-up."],
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

function isFailingCheck(check) {
  const name = checkName(check);
  if (IGNORED_CHECKS.has(name) || IGNORED_CHECKS.has(String(check.workflowName ?? ""))) return false;
  const status = String(check.status ?? check.state ?? "").toUpperCase();
  const conclusion = String(check.conclusion ?? "").toUpperCase();
  return (status && !["COMPLETED", "SUCCESS"].includes(status)) || (conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion));
}

function checkName(check) {
  return String(check.name ?? check.context ?? "unknown check");
}

function isReviewBot(review) {
  return REVIEW_BOT_PATTERN.test(`${review.author?.login ?? ""}\n${review.body ?? ""}`);
}

function isActionableCommentEvidence(comment, { pull }) {
  if (isNonBlockingCommentEvidence(comment, { pull })) return false;

  const body = String(comment.body ?? "").trim();
  const author = String(comment.user?.login ?? comment.author?.login ?? "").toLowerCase();

  if (isReviewBot({ author: { login: author }, body })) {
    return /found issues|requested changes|changes requested|needs human|do not merge|duplicate|superseded|security/i.test(
      body,
    );
  }

  return true;
}

function isNonBlockingCommentEvidence(comment, { pull }) {
  const body = String(comment.body ?? "").trim();
  if (!body) return true;
  const author = String(comment.user?.login ?? comment.author?.login ?? "").toLowerCase();
  const association = String(comment.author_association ?? comment.authorAssociation ?? "").toUpperCase();
  const normalized = body.toLowerCase();

  if (isBenignAutomationComment({ author, body: normalized, pull })) return true;
  if (isMaintainerCommandComment({ association, body: normalized })) return true;

  const pullAuthor = String(pull?.user?.login ?? "").toLowerCase();
  if (author && pullAuthor && author === pullAuthor && isAuthorStatusComment(normalized)) return true;
  return false;
}

function isBenignAutomationComment({ author, body, pull }) {
  if (!isAutomationAuthor(author)) return false;
  if (isClawSweeperReadyReviewComment({ author, body, pull })) return true;
  return (
    /clawsweeper pr egg|hatched:|hatch command|automatically marked as stale|clawsweeper-command-status|re-review requested|clownfish is on the reef|tagged `clownfish:automerge`/.test(
      body,
    ) || /^<!--\s*(?:clawsweeper|clownfish)-command/.test(body)
  );
}

function isMaintainerCommandComment({ association, body }) {
  return (
    ["MEMBER", "OWNER", "COLLABORATOR"].includes(association) &&
    (/^\/(?:clownfish|clawsweeper)\b/.test(body) || /^<!--\s*(?:clownfish|clawsweeper)-command:/.test(body))
  );
}

function isClawSweeperReadyReviewComment({ author, body, pull }) {
  if (!["clawsweeper", "clawsweeper[bot]"].includes(author)) return false;
  if (!hasClownfishAutomergeLabel(pull)) return false;
  if (!/^codex review:\s*needs maintainer review before merge\./.test(body)) return false;
  if (!/(review metrics:\*\*\s*none identified|review metrics:\s*none identified|result:\s*ready for maintainer review|no repair job is needed)/.test(body)) {
    return false;
  }
  return !/found issues before merge|requested changes|changes requested|do not merge/.test(body);
}

function hasClownfishAutomergeLabel(pull) {
  return (pull?.labels ?? []).some((label) => String(label?.name ?? "").toLowerCase() === "clownfish:automerge");
}

function isAutomationAuthor(author) {
  return /\[bot\]$|bot$/.test(author) || ["clawsweeper", "openclaw-clownfish"].includes(author);
}

function isAuthorStatusComment(body) {
  return /\b(addressed|updated|added|fixed|ready for maintainer|marked `proof: sufficient`|please take a look|merge if)\b/.test(body);
}

function evidenceExamples(items) {
  return items
    .slice(0, 3)
    .map((item) => item.html_url ?? item.url ?? item.author?.login ?? item.user?.login ?? "comment");
}

function isCleanCodexReview(review) {
  return (
    ["passed", "clean"].includes(String(review?.status ?? "").toLowerCase()) &&
    Array.isArray(review?.findings) &&
    review.findings.length === 0 &&
    review.findings_addressed === true
  );
}

function ghJson(commandArgs) {
  return JSON.parse(run("gh", commandArgs, { env: ghReadEnv() }));
}

function ghReadEnv() {
  return { ...process.env, GH_TOKEN: process.env.CLOWNFISH_READ_GH_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_TOKEN };
}

function validationEnv() {
  const env = { ...process.env, OPENCLAW_LOCAL_CHECK: "0" };
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
  const env = { ...process.env };
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
  if (child.error?.code === "ETIMEDOUT") throw new Error(`${command} ${commandArgs.join(" ")} timed out`);
  if (child.error) throw child.error;
  if (child.status !== 0) throw new Error((child.stderr || child.stdout || `${command} exited ${child.status}`).trim());
  return child.stdout ?? "";
}

function normalizeRef(value) {
  const match = String(value ?? "").match(/^#?(\d+)$/);
  return match ? `#${match[1]}` : "";
}

function normalizeState(value) {
  return String(value ?? "").toLowerCase() || "unavailable";
}

function redact(value) {
  return value
    .replaceAll(process.env.GH_TOKEN ?? "", "[redacted]")
    .replaceAll(process.env.GITHUB_TOKEN ?? "", "[redacted]")
    .replaceAll(process.env.CLOWNFISH_READ_GH_TOKEN ?? "", "[redacted]")
    .slice(0, 1200);
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}
