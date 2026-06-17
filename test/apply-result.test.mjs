import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("apply-result allows explicit current-main fixed-by close without candidate_fix", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
  assert.equal(report.actions[0].reason, "dry run");
  assert.equal(report.actions[0].canonical, "#60063");
  assert.equal(report.actions[0].candidate_fix, undefined);
});

test("apply-result keeps fixed-by close blocked without explicit unmerged-fix opt-in", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: false }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /fixed_by_candidate close requires a merged fix PR/);
});

test("apply-result allows a candidate fix hydrated in the preflight plan", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJsonWithHydratedCandidate(), null, 2)}\n`);
  fs.writeFileSync(
    path.join(tmp, "cluster-plan.json"),
    `${JSON.stringify(
      {
        items: [
          {
            ref: "#60064",
            kind: "pull_request",
            state: "closed",
            updated_at: "2026-06-11T05:07:30Z",
            hydration_error: null,
            security_sensitive: false,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
  assert.equal(report.actions[0].candidate_fix, "#60064");
});

test("apply-result blocks a candidate fix with failed preflight hydration", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJsonWithHydratedCandidate(), null, 2)}\n`);
  fs.writeFileSync(
    path.join(tmp, "cluster-plan.json"),
    `${JSON.stringify(
      {
        items: [
          {
            ref: "#60064",
            kind: "pull_request",
            state: "closed",
            updated_at: "2026-06-11T05:07:30Z",
            hydration_error: "pull request details unavailable",
            security_sensitive: false,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /candidate fix is not a hydrated close reference/);
});

test("apply-result treats closed target with matching marker as idempotently executed", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir, { issueState: "closed", includeExistingMarker: true });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reason, "already closed with matching projectclownfish comment");
  assert.equal(report.actions[0].live_state, "closed");
});

test("apply-result records primary GitHub rate limits as retryable blocks", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeRateLimitedGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  assert.equal(report.actions[0].transient_error, "github_rate_limit");
  assert.match(report.actions[0].reason, /GitHub rate limit/);
});

test("apply-result blocks a merge when the PR base is behind current main", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeStaleMergeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /base is stale relative to current main/);
  assert.equal(report.actions[0].pull_request_base_sha, "stale-base");
  assert.equal(report.actions[0].current_main_sha, "current-main");
});

function apply(jobPath, resultPath, reportPath, binDir) {
  return spawnSync(
    process.execPath,
    ["scripts/apply-result.mjs", jobPath, resultPath, "--dry-run", "--report", reportPath],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOW_EXECUTE: "1",
      },
      encoding: "utf8",
    },
  );
}

function writeGhStub(binDir, { issueState = "open", includeExistingMarker = false } = {}) {
  const ghPath = path.join(binDir, "gh");
  const existingCommentBody = includeExistingMarker
    ? `<!-- projectclownfish:close:ghcrawl-199237-agentic-merge:#60063:${resultJson().actions[0].idempotency_key} -->`
    : "";
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: ${JSON.stringify(issueState)},
    title: "streaming fix",
    updated_at: ${JSON.stringify(issueState === "open" ? "2026-06-11T05:07:30Z" : "2026-06-11T12:38:26Z")},
    labels: [],
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  write(${JSON.stringify(existingCommentBody ? [[{ body: existingCommentBody }]] : [[]])});
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function writeRateLimitedGhStub(binDir) {
  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
process.stderr.write("GraphQL: API rate limit already exceeded for installation ID 127893203.\\n");
process.exit(1);
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function writeStaleMergeGhStub(binDir) {
  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: "open",
    title: "streaming fix",
    updated_at: "2026-06-11T05:07:30Z",
    labels: [],
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/60063") {
  write({
    number: 60063,
    state: "open",
    draft: false,
    updated_at: "2026-06-11T05:07:30Z",
    labels: [],
    base: { ref: "main", sha: "stale-base" }
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  write([[]]);
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/ref/heads/main") {
  write({ object: { sha: "current-main" } });
} else if (args[0] === "api" && args[1] === "graphql") {
  write({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } });
} else if (args[0] === "pr" && args[1] === "view" && args[2] === "60063") {
  write({
    baseRefName: "main",
    isDraft: false,
    mergeable: "MERGEABLE",
    mergeStateStatus: "CLEAN",
    reviewDecision: "APPROVED",
    statusCheckRollup: [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }]
  });
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function jobMarkdown({ allowUnmergedFixClose }) {
  return `---
repo: openclaw/openclaw
cluster_id: ghcrawl-199237-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
canonical:
  - "#60063"
candidates:
  - "#60063"
cluster_refs:
  - "#60063"
allow_instant_close: true
require_fix_before_close: true
allow_unmerged_fix_close: ${allowUnmergedFixClose ? "true" : "false"}
security_sensitive: false
---

# Test job
`;
}

function mergeJobMarkdown() {
  return `---
repo: openclaw/openclaw
cluster_id: stale-merge-test
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - force_push
allow_merge: true
security_sensitive: false
canonical:
  - "#60063"
candidates:
  - "#60063"
cluster_refs:
  - "#60063"
---

# Test job
`;
}

function resultJson() {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "ghcrawl-199237-agentic-merge",
    mode: "autonomous",
    summary: "current main already contains the fix",
    actions: [
      {
        target: "#60063",
        action: "close_fixed_by_candidate",
        status: "planned",
        classification: "fixed_by_candidate",
        canonical: "#60063",
        target_updated_at: "2026-06-11T05:07:30Z",
        reason: "current main already contains the narrow streaming fix and regression coverage",
        idempotency_key: "openclaw/openclaw#60063:close_fixed_by_current_main:test",
      },
    ],
  };
}

function resultJsonWithHydratedCandidate() {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "ghcrawl-199237-agentic-merge",
    mode: "autonomous",
    summary: "a hydrated pull request contains the fix",
    actions: [
      {
        target: "#60063",
        action: "close_fixed_by_candidate",
        status: "planned",
        classification: "fixed_by_candidate",
        candidate_fix: "#60064",
        target_updated_at: "2026-06-11T05:07:30Z",
        reason: "a hydrated pull request contains the narrow streaming fix and regression coverage",
        idempotency_key: "openclaw/openclaw#60063:close_fixed_by_candidate:60064:test",
      },
    ],
  };
}

function mergeResultJson() {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "stale-merge-test",
    mode: "autonomous",
    actions: [
      {
        target: "#60063",
        target_kind: "pull_request",
        target_updated_at: "2026-06-11T05:07:30Z",
        action: "merge_canonical",
        status: "planned",
        classification: "fix_pr",
        idempotency_key: "openclaw/openclaw#60063:merge:stale-test",
      },
    ],
    merge_preflight: [
      {
        target: "#60063",
        security_status: "cleared",
        security_evidence: ["no security-sensitive labels or comments"],
        comments_status: "resolved",
        comments_evidence: ["no unresolved human review threads"],
        bot_comments_status: "resolved",
        bot_comments_evidence: ["no unresolved bot review threads"],
        validation_commands: ["pnpm check:changed"],
        codex_review: {
          command: "/review",
          status: "clean",
          findings_addressed: true,
          evidence: ["Codex /review returned clean"],
        },
      },
    ],
  };
}
