import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("review-results fails worker infrastructure auth blocks", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary:
      "2026-06-09T05:41:01Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: HTTP error: 401 Unauthorized, url: wss://api.openai.com/v1/responses",
    needs_human: ["HTTP error: 401 Unauthorized"],
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker infrastructure blocked/);
  assert.match(result.stdout, /401 Unauthorized/);
});

test("review-results fails explicit worker failed status", () => {
  const dir = makeResultDir({
    status: "failed",
    summary: "worker produced an invalid terminal result",
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker result status is failed/);
});

test("review-results allows actionless blocked maintainer decisions", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary: "needs maintainer choice between two live canonical issues",
    needs_human: ["choose canonical issue"],
  });

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results allows unavailable security route when hydration was rate limited", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#89935",
          action: "route_security",
          status: "planned",
          idempotency_key: "cluster-test:route_security:89935:unavailable",
          classification: "security_sensitive",
          target_kind: "unknown",
          target_updated_at: null,
          evidence: [
            "Job body labels #89935 merge-risk: security-boundary.",
            "Hydration failed with GitHub API rate limit HTTP 403 before live metadata was available.",
          ],
          reason: "Route the security-shaped PR to central security handling without mutation.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#89935",
            kind: "unknown",
            state: "unavailable",
            updated_at: null,
            security_sensitive: false,
            hydration_error: "gh: API rate limit exceeded for installation ID 127893203 (HTTP 403)",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
  assert.match(result.stdout, /route_security target was not marked security_sensitive in preflight/);
});

test("review-results rejects fix artifacts when source job disallows fix PRs", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["closed-source PR is useful, but this job is close-only"],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    { job: closeOnlyJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /fix actions are not permitted by job frontmatter/);
  assert.match(result.stdout, /allowed_actions lacks fix/);
  assert.match(result.stdout, /allow_fix_pr is not true/);
});

function makeResultDir(overrides, options = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-review-"));
  const result = {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "cluster-test",
    mode: "plan",
    summary: "test result",
    actions: [],
    needs_human: [],
    ...overrides,
  };
  fs.writeFileSync(path.join(dir, "result.json"), `${JSON.stringify(result, null, 2)}\n`);
  if (options.job || options.plan) {
    const jobPath = path.join(dir, "job.md");
    fs.writeFileSync(jobPath, options.job ?? closeOnlyJob());
    fs.writeFileSync(
      path.join(dir, "cluster-plan.json"),
      `${JSON.stringify(
        {
          source_job: path.relative(repoRoot, jobPath),
          repo: result.repo,
          cluster_id: result.cluster_id,
          mode: result.mode,
          items: [],
          ...options.plan,
        },
        null,
        2,
      )}\n`,
    );
  }
  return dir;
}

function review(dir) {
  return spawnSync(process.execPath, ["scripts/review-results.mjs", dir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function closeOnlyJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - fix
  - raise_pr
candidates:
  - "#1"
allow_fix_pr: false
---

# Close-only job
`;
}
