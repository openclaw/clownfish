import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  hasDeterministicSecuritySignal,
  hasSecuritySignalText,
  parseJob,
  renderPrompt,
  resolveJobPath,
  validateJob,
} from "../scripts/lib.mjs";

test("security signal detection ignores non-security advisory wording", () => {
  assert.equal(
    hasSecuritySignalText("pnpm lint:tmp:dynamic-import-warts (advisory-only; no new run-loop.ts advisory)"),
    false,
  );
});

test("security signal detection keeps explicit security advisory wording", () => {
  assert.equal(hasSecuritySignalText("security advisory triage for GHSA-1234-5678-abcd"), true);
});

test("security signal detection catches review and scanner appeal wording", () => {
  assert.equal(hasSecuritySignalText("Security Review Request: metadata inconsistency false positive"), true);
  assert.equal(hasSecuritySignalText("False positive security flag on published skill"), true);
  assert.equal(hasSecuritySignalText("Skill flagged as suspicious despite benign scanner verdicts"), true);
  assert.equal(hasSecuritySignalText("fix: avoid inlining daemon secrets in generated systemd units"), true);
});

test("deterministic security signals ignore prose credential wording", () => {
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: [
        "Current main's Codex credential reader types expose codexHome, platform, and execSync, but no allowKeychainPrompt.",
      ],
    }),
    false,
  );
});

test("deterministic security signals accept labels and structured ClawSweeper markers", () => {
  assert.equal(hasDeterministicSecuritySignal({ labels: ["security:sensitive"] }), true);
  assert.equal(hasDeterministicSecuritySignal({ labels: ["merge-risk: 🚨 security-boundary"] }), true);
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: ["<!-- clawsweeper-security:security-sensitive item=123 sha=abc -->"],
    }),
    true,
  );
});

test("validateJob rejects non-literal allowed_fix_files", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-"));
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: allowed-fix-files
mode: autonomous
allowed_actions:
  - fix
candidates:
  - "#1"
allowed_fix_files:
  - "src/app.js"
  - "../escape.js"
  - "src/*.test.js"
  - "src/app.js"
---
`,
  );

  assert.deepEqual(validateJob(parseJob(jobPath)), [
    "allowed_fix_files must contain unique literal repo-relative paths: ../escape.js",
    "allowed_fix_files must contain unique literal repo-relative paths: src/*.test.js",
    "allowed_fix_files must not contain duplicates: src/app.js",
  ]);
});

test("validateJob rejects an invalid expected_head_sha", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-head-"));
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: expected-head
mode: autonomous
expected_head_sha: not-a-sha
allowed_actions:
  - merge
candidates:
  - "#1"
---
`,
  );

  assert.deepEqual(validateJob(parseJob(jobPath)), [
    "expected_head_sha must be a 40-character Git SHA",
  ]);
});

test("validateJob requires merge permission for deterministic external preflight", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-external-preflight-"));
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: external-preflight-policy
mode: autonomous
allowed_actions:
  - comment
candidates:
  - "#1"
allow_merge: false
require_external_merge_preflight: true
---
`,
  );

  assert.deepEqual(validateJob(parseJob(jobPath)), [
    "require_external_merge_preflight requires allowed_actions: merge and allow_merge: true",
  ]);
});

test("validateJob requires one expected_head_shas entry per candidate", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-heads-"));
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: expected-heads
mode: autonomous
expected_head_shas:
  - "#1=${"a".repeat(40)}"
  - "#3=${"b".repeat(40)}"
allowed_actions:
  - merge
candidates:
  - "#1"
  - "#2"
---
`,
  );

  assert.deepEqual(validateJob(parseJob(jobPath)), [
    "expected_head_shas must include candidate ref: #2",
    "expected_head_shas contains non-candidate ref: #3",
  ]);
});

test("resolveJobPath follows a job moved from inbox to finalized", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-lifecycle-"));
  const finalized = path.join(root, "jobs", "openclaw", "outbox", "finalized", "retry.md");
  fs.mkdirSync(path.dirname(finalized), { recursive: true });
  fs.writeFileSync(finalized, "# fixture\n");

  assert.equal(
    resolveJobPath("jobs/openclaw/inbox/retry.md", { root }),
    finalized,
  );
});

test("resolveJobPath fails closed when lifecycle locations are ambiguous", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-ambiguous-"));
  const inbox = path.join(root, "jobs", "openclaw", "inbox", "retry.md");
  const finalized = path.join(root, "jobs", "openclaw", "outbox", "finalized", "retry.md");
  const stuck = path.join(root, "jobs", "openclaw", "outbox", "stuck", "retry.md");
  fs.mkdirSync(path.dirname(inbox), { recursive: true });
  fs.mkdirSync(path.dirname(finalized), { recursive: true });
  fs.mkdirSync(path.dirname(stuck), { recursive: true });
  fs.writeFileSync(inbox, "# inbox\n");
  fs.writeFileSync(finalized, "# finalized\n");
  fs.writeFileSync(stuck, "# stuck\n");

  assert.throws(
    () => resolveJobPath("jobs/openclaw/inbox/retry.md", { root }),
    /ambiguous job lifecycle copies: .*inbox\/retry\.md.*finalized\/retry\.md.*stuck\/retry\.md/,
  );
});

test("resolveJobPath fails closed when legacy lifecycle locations are ambiguous", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-legacy-ambiguous-"));
  const inbox = path.join(root, "jobs", "openclaw", "inbox", "retry.md");
  const finalized = path.join(root, "jobs", "openclaw", "outbox", "finalized", "retry.md");
  fs.mkdirSync(path.dirname(inbox), { recursive: true });
  fs.mkdirSync(path.dirname(finalized), { recursive: true });
  fs.writeFileSync(inbox, "# inbox\n");
  fs.writeFileSync(finalized, "# finalized\n");

  assert.throws(
    () => resolveJobPath("jobs/openclaw/retry.md", { root }),
    /ambiguous job lifecycle copies: .*inbox\/retry\.md.*finalized\/retry\.md/,
  );
});

test("resolveJobPath preserves an existing absolute path outside the current root", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-current-root-"));
  const otherRoot = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-other-root-"));
  const external = path.join(otherRoot, "jobs", "openclaw", "inbox", "retry.md");
  const local = path.join(root, "jobs", "openclaw", "outbox", "finalized", "retry.md");
  fs.mkdirSync(path.dirname(external), { recursive: true });
  fs.mkdirSync(path.dirname(local), { recursive: true });
  fs.writeFileSync(external, "# external\n");
  fs.writeFileSync(local, "# local\n");

  assert.equal(resolveJobPath(external, { root }), external);
});

test("resolveJobPath preserves a missing absolute path outside the current root", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-current-root-"));
  const otherRoot = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-job-missing-root-"));
  const external = path.join(otherRoot, "jobs", "openclaw", "inbox", "retry.md");
  const local = path.join(root, "jobs", "openclaw", "outbox", "finalized", "retry.md");
  fs.mkdirSync(path.dirname(local), { recursive: true });
  fs.writeFileSync(local, "# local\n");

  assert.equal(resolveJobPath(external, { root }), external);
});

test("renderPrompt compacted cluster plan keeps live hydration metadata", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-prompt-"));
  const clusterPlanPath = path.join(tmp, "cluster-plan.json");
  const plan = {
    repo: "openclaw/openclaw",
    cluster_id: "prompt-metadata",
    mode: "plan",
    generated_at: "2026-06-15T00:00:00Z",
    safety_gates: [],
    items: [
      {
        repo: "openclaw/openclaw",
        ref: "#123",
        number: 123,
        kind: "pull_request",
        state: "open",
        title: "test pr",
        url: "https://github.com/openclaw/openclaw/pull/123",
        author: "contributor",
        author_association: "CONTRIBUTOR",
        labels: [],
        created_at: "2026-06-14T00:00:00Z",
        updated_at: "2026-06-15T00:00:00Z",
        closed_at: null,
        hydration_error: "pull request #123 reviews: rate limited",
        body_excerpt: "x".repeat(330_000),
        security_sensitive: false,
        comments_count: 0,
        comments_hydrated: 0,
        comments_truncated: 0,
        pull_request: {
          draft: false,
          merged: false,
          merged_at: null,
          merge_commit_sha: null,
          mergeable: null,
          mergeable_state: "unknown",
          base_ref: "main",
          head_ref: "patch-1",
          head_repo: "contributor/openclaw",
          head_repo_owner: "contributor",
          head_sha: "abc123",
          maintainer_can_modify: true,
          hydration_error: "pull request #123 reviews: rate limited",
          requested_reviewers: ["reviewer"],
          requested_teams: ["maintainers"],
          changed_files: 1,
          additions: 2,
          deletions: 0,
          files: [],
          commits: [],
          reviews: [],
          review_comments_count: 0,
          review_comments_hydrated: 0,
          review_comments_truncated: 0,
          review_comments: [],
          review_bot_comments: [],
          checks: [{ error: "checks unavailable" }],
        },
      },
    ],
  };
  fs.writeFileSync(clusterPlanPath, `${JSON.stringify(plan, null, 2)}\n`);

  const prompt = renderPrompt(
    {
      raw: "---\nrepo: openclaw/openclaw\ncluster_id: prompt-metadata\nmode: plan\ncandidates:\n  - \"#123\"\n---\n",
      frontmatter: { repo: "openclaw/openclaw", cluster_id: "prompt-metadata", mode: "plan" },
    },
    "plan",
    { clusterPlanPath },
  );

  assert.match(prompt, /"_prompt_compacted": true/);
  assert.match(prompt, /"hydration_error": "pull request #123 reviews: rate limited"/);
  assert.match(prompt, /"created_at": "2026-06-14T00:00:00Z"/);
  assert.match(prompt, /"head_repo_owner": "contributor"/);
  assert.match(prompt, /"requested_reviewers": \[\s+"reviewer"\s+\]/);
});
