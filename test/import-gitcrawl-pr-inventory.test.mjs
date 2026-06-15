import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const hasSqlite = spawnSync("sqlite3", ["--version"], { stdio: "ignore" }).status === 0;

test("PR inventory import supports limit all and emits jq-safe JSON", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedGitcrawlDb(fixture.db);

  const result = spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-pr-inventory.mjs",
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
      "--limit",
      "all",
      "--batch-size",
      "1",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.doesNotMatch(result.stdout, /\\ud(?:800|c00)/i);

  const payload = JSON.parse(result.stdout);
  assert.equal(payload.options.limit, "all");
  assert.equal(payload.totals.candidates, 2);
  assert.equal(payload.generated.length, 2);
  assert.equal(payload.candidates[0].author_association, "\uFFFD");
  assert.equal(payload.candidates[0].assignees[0], "reviewer\uFFFD");
  assert.match(payload.candidates[0].body_excerpt, /\/home\/<user>/);
  assert.match(payload.candidates[0].body_excerpt, /token=<redacted>/);
  assert.match(payload.candidates[0].body_excerpt, /password: <redacted>/);
  assert.doesNotMatch(payload.candidates[0].body_excerpt, /vincentkoc|hunter2|abc123/);
});

test("PR inventory import defaults existing refs to the active out dir", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedGitcrawlDb(fixture.db);
  writeExistingJob(path.join(fixture.out, "existing.md"), "#101");

  const result = spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-pr-inventory.mjs",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--existing-results-dir",
      fixture.results,
      "--dry-run",
      "--json",
      "--limit",
      "all",
      "--batch-size",
      "1",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.existing_refs, 1);
  assert.deepEqual(
    payload.candidates.map((candidate) => candidate.ref),
    ["#102"],
  );
});

test("PR inventory existing refs ignore incidental markdown mentions", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedGitcrawlDb(fixture.db);
  writeExistingJob(path.join(fixture.out, "existing.md"), "#101", "mentions #102 in notes");

  const result = spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-pr-inventory.mjs",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--existing-results-dir",
      fixture.results,
      "--dry-run",
      "--json",
      "--limit",
      "all",
      "--batch-size",
      "1",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.existing_refs, 1);
  assert.deepEqual(
    payload.candidates.map((candidate) => candidate.ref),
    ["#102"],
  );
});

test("PR inventory skips refs already published in result reports", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedGitcrawlDb(fixture.db);
  writePublishedResult(path.join(fixture.results, "processed.md"), ["#101"]);

  const result = spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-pr-inventory.mjs",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--existing-results-dir",
      fixture.results,
      "--dry-run",
      "--json",
      "--limit",
      "all",
      "--batch-size",
      "1",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.existing_result_refs, 1);
  assert.deepEqual(
    payload.candidates.map((candidate) => candidate.ref),
    ["#102"],
  );
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-pr-inventory-"));
  const db = path.join(root, "gitcrawl.db");
  const out = path.join(root, "out");
  const existing = path.join(root, "existing");
  const results = path.join(root, "results");
  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(results, { recursive: true });
  return { root, db, out, existing, results };
}

function writeExistingJob(filePath, ref, extraText = "") {
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: existing
mode: plan
allowed_actions:
  - comment
blocked_actions:
  - merge
require_human_for:
  - merge
canonical: []
candidates:
  - "${ref}"
cluster_refs:
  - "${ref}"
security_sensitive: false
---

# Existing

${extraText}
`,
  );
}

function writePublishedResult(filePath, refs) {
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
${refs.map((ref) => `| ${ref} | keep_independent | planned | independent | already processed |`).join("\n")}
`,
  );
}

function seedGitcrawlDb(dbPath) {
  execFileSync("sqlite3", [dbPath], {
    cwd: repoRoot,
    input: `
create table repositories (
  id integer primary key,
  owner text,
  name text
);
create table threads (
  repo_id integer,
  number integer,
  title text,
  body text,
  author_login text,
  author_type text,
  labels_json text,
  assignees_json text,
  raw_json text,
  is_draft integer,
  created_at_gh text,
  updated_at_gh text,
  last_pulled_at text,
  kind text,
  state text,
  closed_at_local text
);
insert into repositories (id, owner, name) values (1, 'openclaw', 'openclaw');
insert into threads values (
  1,
  101,
  'bad surrogate title',
  'local /home/example/tmp token=abc123 password: example',
  'author',
  'User',
  '[{"name":"needs proof"}]',
  '[{"login":"reviewer\\udc00"}]',
  '{"author_association":"\\ud800"}',
  0,
  '2026-01-01T00:00:00Z',
  '2026-01-02T00:00:00Z',
  '2026-01-02T00:00:00Z',
  'pull_request',
  'open',
  null
);
insert into threads values (
  1,
  102,
  'second PR',
  'normal body',
  'author2',
  'User',
  '[]',
  '[]',
  '{}',
  0,
  '2026-01-03T00:00:00Z',
  '2026-01-04T00:00:00Z',
  '2026-01-04T00:00:00Z',
  'pull_request',
  'open',
  null
);
`,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  });
}
