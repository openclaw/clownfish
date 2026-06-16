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
  assert.deepEqual(JSON.parse(broad.stdout).candidates.map((candidate) => candidate.ref), ["#104", "#105", "#106"]);
});

function runImport(fixture, ...extraArgs) {
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
      "--existing-dir",
      fixture.existing,
      "--existing-results-dir",
      fixture.results,
      "--out",
      fixture.out,
      "--gh-bin",
      fixture.gh,
      "--dry-run",
      "--json",
      ...extraArgs,
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
