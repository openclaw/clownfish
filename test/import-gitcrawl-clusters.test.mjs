import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const hasSqlite = spawnSync("sqlite3", ["--version"], { stdio: "ignore" }).status === 0;

test("cluster import can dedupe against published results without stale job id collisions", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db, { firstLabels: ["merge-risk: 🚨 security-boundary"] });
  writeStaleJob(path.join(fixture.existing, "gitcrawl-1-old.md"));
  writePublishedResult(path.join(fixture.results, "processed.md"), ["#101"]);

  const blocked = runImport(fixture);
  assert.equal(blocked.status, 0, blocked.stderr || blocked.stdout);
  const blockedPayload = JSON.parse(blocked.stdout);
  assert.equal(blockedPayload.generated.length, 0);
  assert.equal(blockedPayload.skipped[0].reason, "existing_cluster");

  const result = runImport(fixture, "--existing-results-only", "--overlap-policy", "exclude-existing");
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.existing_results_only, true);
  assert.equal(payload.totals.existing_clusters, 0);
  assert.equal(payload.totals.existing_refs, 1);
  assert.equal(payload.generated.length, 1);
  assert.equal(payload.generated[0].source_cluster_id, 1);
  assert.deepEqual(payload.generated[0].cluster_refs, ["#102"]);
  assert.deepEqual(payload.generated[0].existing_overlap_refs, ["#101"]);
  assert.deepEqual(payload.generated[0].security_signal_refs, ["#101"]);
});

test("cluster import skips maintainer-only risk labels by default", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db, { secondLabels: ["impact:auth-provider"] });

  const blocked = runImport(fixture);
  assert.equal(blocked.status, 0, blocked.stderr || blocked.stdout);
  const blockedPayload = JSON.parse(blocked.stdout);
  assert.equal(blockedPayload.generated.length, 0);
  assert.equal(blockedPayload.skipped[0].reason, "blocked_label");
  assert.deepEqual(blockedPayload.skipped[0].refs, [102]);
  assert.deepEqual(blockedPayload.skipped[0].labels, ["impact:auth-provider"]);

  const included = runImport(fixture, "--include-blocked-labels");
  assert.equal(included.status, 0, included.stderr || included.stdout);
  const includedPayload = JSON.parse(included.stdout);
  assert.equal(includedPayload.generated.length, 1);
  assert.deepEqual(includedPayload.generated[0].cluster_refs, ["#101", "#102"]);
});

test("cluster import can ignore non-terminal published result actions", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db);
  writePublishedResultRows(path.join(fixture.results, "processed.md"), [
    { ref: "#101", action: "keep_related", status: "planned" },
    { ref: "#102", action: "keep_closed", status: "skipped" },
  ]);

  const result = runImport(
    fixture,
    "--existing-results-only",
    "--overlap-policy",
    "exclude-existing",
    "--existing-results-action-policy",
    "terminal",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.existing_results_action_policy, "terminal");
  assert.equal(payload.totals.existing_refs, 1);
  assert.equal(payload.generated.length, 1);
  assert.deepEqual(payload.generated[0].cluster_refs, ["#101"]);
  assert.deepEqual(payload.generated[0].existing_overlap_refs, ["#102"]);
});

test("cluster import can live-skip stale local open refs", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db);
  const gh = writeFakeGh(fixture.root, () => "CLOSED");

  const result = runImport(fixture, "--live-state-filter", "--gh-bin", gh);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.live_state_filter, true);
  assert.equal(payload.generated.length, 0);
  assert.equal(payload.skipped[0].reason, "closed_only");
});

test("autonomous cluster repair jobs require explicit guarded force-push authorization", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db);

  const defaultResult = runWrittenImport(fixture, "--mode", "autonomous", "--allow-fix-pr", "true");
  assert.equal(defaultResult.status, 0, defaultResult.stderr || defaultResult.stdout);
  const defaultPayload = JSON.parse(defaultResult.stdout);
  const defaultJob = fs.readFileSync(path.join(fixture.out, path.basename(defaultPayload.generated[0].path)), "utf8");
  assert.match(defaultJob, /blocked_actions:\n(?:  - .+\n)*  - force_push/);

  const result = runWrittenImport(
    fixture,
    "--mode",
    "autonomous",
    "--allow-fix-pr",
    "true",
    "--allow-force-push",
    "true",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");

  assert.equal(payload.options.allow_force_push, true);
  assert.match(job, /allowed_actions:\n(?:  - .+\n)*  - force_push\nblocked_actions:/);
  assert.doesNotMatch(job, /blocked_actions:\n(?:  - .+\n)*  - force_push/);
});

test("issue-only autonomous clusters do not require a fix before duplicate close", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db);

  const result = runWrittenImport(
    fixture,
    "--mode",
    "autonomous",
    "--allow-fix-pr",
    "false",
    "--allow-merge",
    "true",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");

  assert.match(job, /require_fix_before_close: false/);
  assert.match(job, /require_human_for:\n  - security_sensitive\n(?:  - .+\n)*  - unclear_canonical/);
});

test("mixed autonomous clusters require a fix before close when merge is allowed", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db, { secondKind: "pull_request" });

  const result = runWrittenImport(
    fixture,
    "--mode",
    "autonomous",
    "--allow-fix-pr",
    "false",
    "--allow-merge",
    "true",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");

  assert.match(job, /require_fix_before_close: true/);
});

test("issue-only autonomous clusters keep fix-first quarantine when any member has a security signal", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedPortableGitcrawlDb(fixture.db, { firstTitle: "Security issue: first duplicate" });

  const result = runWrittenImport(
    fixture,
    "--mode",
    "autonomous",
    "--allow-fix-pr",
    "false",
    "--allow-merge",
    "true",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");

  assert.match(job, /security_signal_refs:\n  - "#101"/);
  assert.match(job, /require_fix_before_close: true/);
});

function runImport(fixture, ...extraArgs) {
  return spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-clusters.mjs",
      "--from-gitcrawl",
      "--limit",
      "1",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--existing-dir",
      fixture.existing,
      "--existing-results-dir",
      fixture.results,
      "--dry-run",
      "--json",
      ...extraArgs,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );
}

function runWrittenImport(fixture, ...extraArgs) {
  return spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-clusters.mjs",
      "--from-gitcrawl",
      "--limit",
      "1",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--existing-dir",
      fixture.existing,
      "--existing-results-dir",
      fixture.results,
      "--json",
      ...extraArgs,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );
}

function writeFakeGh(root, stateForNumber) {
  const file = path.join(root, "fake-gh.mjs");
  fs.writeFileSync(
    file,
    `#!/usr/bin/env node
let number = null;
for (const arg of process.argv.slice(2)) {
  if (arg.startsWith("number=")) number = Number(arg.slice("number=".length));
}
const state = (${stateForNumber.toString()})(number);
process.stdout.write(JSON.stringify({
  data: {
    repository: {
      issueOrPullRequest: {
        __typename: "Issue",
        state,
      },
    },
  },
}));
`,
  );
  fs.chmodSync(file, 0o755);
  return file;
}

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-cluster-import-"));
  const db = path.join(root, "gitcrawl.db");
  const out = path.join(root, "out");
  const existing = path.join(root, "existing");
  const results = path.join(root, "results");
  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(results, { recursive: true });
  return { root, db, out, existing, results };
}

function writeStaleJob(filePath) {
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: gitcrawl-1-old
mode: plan
allowed_actions:
  - comment
blocked_actions:
  - merge
require_human_for:
  - merge
canonical: []
candidates:
  - "#999"
cluster_refs:
  - "#999"
security_sensitive: false
---

# Gitcrawl Cluster 1
`,
  );
}

function writePublishedResult(filePath, refs) {
  writePublishedResultRows(
    filePath,
    refs.map((ref) => ({ ref, action: "keep_independent", status: "planned" })),
  );
}

function writePublishedResultRows(filePath, rows) {
  fs.writeFileSync(
    filePath,
    `---
repo: "openclaw/openclaw"
cluster_id: "published"
mode: "plan"
run_id: "123"
workflow_conclusion: "success"
result_status: "complete"
---

# published

mentions #102 outside the worker table

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
${rows.map((row) => `| ${row.ref} | ${row.action} | ${row.status} | independent | already processed |`).join("\n")}
`,
  );
}

function seedPortableGitcrawlDb(
  dbPath,
  {
    firstLabels = [],
    firstTitle = "Bug: first duplicate",
    secondLabels = [],
    secondKind = "issue",
  } = {},
) {
  execFileSync("sqlite3", [dbPath], {
    input: `
create table cluster_groups (
  id integer primary key,
  representative_thread_id integer,
  status text,
  created_at text,
  closed_at text
);
create table cluster_memberships (
  cluster_id integer,
  thread_id integer,
  state text
);
create table threads (
  id integer primary key,
  number integer,
  kind text,
  state text,
  title text,
  body text,
  body_excerpt text,
  labels_json text,
  updated_at text
);
insert into threads values
  (1, 101, 'issue', 'open', '${sqlText(firstTitle)}', 'body', 'body', '${sqlJson(firstLabels)}', '2026-06-01T00:00:00Z'),
  (2, 102, '${secondKind}', 'open', 'Bug: second duplicate', 'body', 'body', '${sqlJson(secondLabels)}', '2026-06-02T00:00:00Z');
insert into cluster_groups values (1, 1, 'active', '2026-06-01T00:00:00Z', null);
insert into cluster_memberships values
  (1, 1, 'active'),
  (1, 2, 'active');
`,
  });
}

function sqlJson(value) {
  return JSON.stringify(value).replaceAll("'", "''");
}

function sqlText(value) {
  return String(value).replaceAll("'", "''");
}
