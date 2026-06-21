import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("autonomous live PR inventory defaults to stale candidates and terminal result filtering", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writePublishedResult(path.join(fixture.results, "processed.md"));

  const autonomous = runImport(fixture);
  assert.equal(autonomous.status, 0, autonomous.stderr || autonomous.stdout);
  const autonomousPayload = JSON.parse(autonomous.stdout);

  assert.equal(autonomousPayload.options.bucket, "stale_unassigned");
  assert.equal(autonomousPayload.options.existing_results_action_policy, "terminal");
  assert.deepEqual(autonomousPayload.candidates.map((candidate) => candidate.ref), ["#101", "#104"]);

  const broad = runImport(fixture, "--bucket", "all", "--existing-results-action-policy", "all");
  assert.equal(broad.status, 0, broad.stderr || broad.stdout);
  assert.deepEqual(JSON.parse(broad.stdout).candidates.map((candidate) => candidate.ref), ["#104", "#105", "#106", "#108"]);
});

test("live PR inventory protects active structured job refs but not archived or incidental references", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writeExistingJob(path.join(fixture.out, "active.md"), "#101", "mentions #102 in notes");
  writeExistingJob(path.join(fixture.root, "outbox", "finalized", "archived.md"), "#104");

  const result = runImport(fixture, "--default-existing-dir", "--bucket", "all");
  assert.equal(result.status, 0, result.stderr || result.stdout);

  const candidates = new Set(JSON.parse(result.stdout).candidates.map((candidate) => candidate.ref));
  assert.equal(candidates.has("#101"), false);
  assert.equal(candidates.has("#102"), true);
  assert.equal(candidates.has("#104"), true);
});

test("remediation inventory is plan-only and enables finalization recommendations", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);

  const remediation = runImport(
    fixture,
    "--write",
    "--mode",
    "plan",
    "--strategy",
    "remediation",
    "--bucket",
    "ready_for_maintainer",
  );
  assert.equal(remediation.status, 0, remediation.stderr || remediation.stdout);
  const payload = JSON.parse(remediation.stdout);

  assert.equal(payload.options.strategy, "remediation");
  assert.equal(payload.options.bucket, "ready_for_maintainer");
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#106"]);

  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");
  assert.match(job, /mode: plan/);
  assert.match(job, /  - "merge"/);
  assert.match(job, /  - "fix"/);
  assert.match(job, /blocked_actions:\n  - "comment"/);
  assert.match(job, /allow_fix_pr: true/);
  assert.match(job, /allow_merge: true/);
  assert.match(job, /allow_post_merge_close: false/);
  assert.match(job, /plan-only remediation assessment/);
  assert.match(job, /complete merge preflight is required only for a merge recommendation; a repair requires a complete executable fix artifact/);
  assert.match(job, /Missing merge preflight alone is not a `needs_human` reason/);
  assert.match(job, /concrete repair with a complete executable `fix_artifact`/);
  assert.match(job, /classify the PR `keep_related` or `keep_independent`/);

  const rejected = runImport(fixture, "--strategy", "remediation");
  assert.notEqual(rejected.status, 0);
  assert.match(rejected.stderr, /requires --mode plan/);
});

function runImport(fixture, ...extraArgs) {
  const write = extraArgs.includes("--write");
  const defaultExistingDir = extraArgs.includes("--default-existing-dir");
  const args = extraArgs.filter((arg) => arg !== "--write" && arg !== "--default-existing-dir");
  return spawnSync(
    process.execPath,
    [
      "scripts/import-github-pr-inventory.mjs",
      "--repo",
      "openclaw/openclaw",
      "--mode",
      "autonomous",
      "--limit",
      "all",
      "--batch-size",
      "10",
      ...(defaultExistingDir ? [] : ["--existing-dir", fixture.existing]),
      "--existing-results-dir",
      fixture.results,
      "--out",
      fixture.out,
      "--gh-bin",
      fixture.gh,
      ...(write ? [] : ["--dry-run"]),
      "--json",
      ...args,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );
}

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-live-pr-import-"));
  const out = path.join(root, "out");
  const existing = path.join(root, "existing");
  const results = path.join(root, "results");
  const gh = path.join(root, "fake-gh.mjs");
  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(results, { recursive: true });
  return { root, out, existing, results, gh };
}

function writeFakeGh(filePath) {
  const pulls = [101, 102, 103, 104].map((number) => ({
    number,
    title: `candidate ${number}`,
    url: `https://github.com/openclaw/openclaw/pull/${number}`,
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: `2026-01-0${number - 100}T00:00:00Z`,
    isDraft: false,
    author: { login: `contributor-${number}` },
    authorAssociation: "CONTRIBUTOR",
    labels: { nodes: [] },
    assignees: { nodes: [] },
  }));
  pulls.push(
    {
      number: 105,
      title: "maintainer candidate",
      url: "https://github.com/openclaw/openclaw/pull/105",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-05T00:00:00Z",
      isDraft: true,
      author: { login: "maintainer" },
      authorAssociation: "MEMBER",
      labels: { nodes: [{ name: "maintainer" }] },
      assignees: { nodes: [] },
    },
    {
      number: 106,
      title: "ready candidate",
      url: "https://github.com/openclaw/openclaw/pull/106",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-06T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-106" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }] },
      assignees: { nodes: [] },
    },
    {
      number: 107,
      title: "security candidate",
      url: "https://github.com/openclaw/openclaw/pull/107",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-07T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-107" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "security" }] },
      assignees: { nodes: [] },
    },
    {
      number: 108,
      title: "waiting candidate",
      url: "https://github.com/openclaw/openclaw/pull/108",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-08T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-108" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }, { name: "status: waiting on author" }] },
      assignees: { nodes: [] },
    },
    {
      number: 106,
      title: "ready candidate refreshed",
      url: "https://github.com/openclaw/openclaw/pull/106",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-08T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-106" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }] },
      assignees: { nodes: [] },
    },
  );
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
console.log(${JSON.stringify(JSON.stringify({
  data: {
    repository: {
      pullRequests: {
        nodes: pulls,
        pageInfo: { hasNextPage: false, endCursor: null },
      },
    },
  },
}))});
`,
    { mode: 0o755 },
  );
}

function writePublishedResult(filePath) {
  fs.writeFileSync(
    filePath,
    `---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-test"
mode: "autonomous"
result_status: "planned"
---

# live-pr-inventory-test

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #103 | close_duplicate | executed | duplicate | Closed by applicator. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #101 | keep_independent | planned | independent | Non-terminal inventory classification. |
| #102 | keep_closed | skipped | superseded | Already closed. |
| #103 | close_duplicate | planned | duplicate | Planned close that executed. |
`,
  );
}

function writeExistingJob(filePath, ref, notes = "") {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: existing-${ref.slice(1)}
mode: plan
candidates:
  - "${ref}"
cluster_refs:
  - "${ref}"
---

${notes}
`,
  );
}
