import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const hasSqlite = spawnSync("sqlite3", ["--version"], { stdio: "ignore" }).status === 0;

test("low-signal import blocks PRs with proof, ready, waiting, and risk labels", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedLowSignalDb(fixture.db);

  const result = runImport(fixture, "--require-signal", "docs_only", "--require-label", "triage: low-signal-docs");
  assert.equal(result.status, 0, result.stderr || result.stdout);

  const payload = JSON.parse(result.stdout);
  assert.deepEqual(
    payload.candidates.map((candidate) => candidate.ref),
    ["#990001"],
  );
  assert.deepEqual(payload.options.required_signals, ["docs_only"]);
  assert.deepEqual(payload.options.required_labels, ["triage: low-signal-docs"]);
});

test("low-signal import preserves repeated exclude-signal flags", { skip: hasSqlite ? false : "sqlite3 missing" }, () => {
  const fixture = makeFixture();
  seedLowSignalDb(fixture.db);

  const result = runImport(fixture, "--exclude-signal", "docs_only", "--exclude-signal", "test_only", "--require-label", "triage: low-signal-docs");
  assert.equal(result.status, 0, result.stderr || result.stdout);

  const payload = JSON.parse(result.stdout);
  assert.deepEqual(payload.candidates, []);
  assert.deepEqual(payload.options.excluded_signals, ["docs_only", "test_only"]);
});

function runImport(fixture, ...extraArgs) {
  return spawnSync(
    process.execPath,
    [
      "scripts/import-gitcrawl-low-signal-prs.mjs",
      "--db",
      fixture.db,
      "--out",
      fixture.out,
      "--dry-run",
      "--json",
      "--limit",
      "20",
      "--batch-size",
      "5",
      "--min-score",
      "1",
      "--skip-existing",
      "false",
      ...extraArgs,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );
}

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-low-signal-import-"));
  const db = path.join(root, "gitcrawl.db");
  const out = path.join(root, "out");
  fs.mkdirSync(out, { recursive: true });
  return { root, db, out };
}

function seedLowSignalDb(dbPath) {
  execFileSync("sqlite3", [dbPath], {
    input: `
create table repositories (
  id integer primary key,
  owner text,
  name text
);
create table threads (
  id integer primary key,
  repo_id integer,
  number integer,
  kind text,
  state text,
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
  closed_at_local text
);
create table pull_request_files (
  thread_id integer,
  path text
);
insert into repositories values (1, 'openclaw', 'openclaw');
${[
  {
    id: 1,
    number: 990001,
    title: "docs: polish README wording",
    labels: ["triage: low-signal-docs"],
    file: "docs/guide.md",
  },
  {
    id: 2,
    number: 990002,
    title: "docs: add setup note",
    labels: ["triage: low-signal-docs", "proof: sufficient"],
    file: "docs/setup.md",
  },
  {
    id: 3,
    number: 990003,
    title: "docs: clarify provider wording",
    labels: ["triage: low-signal-docs", "status: ready for maintainer look"],
    file: "docs/providers.md",
  },
  {
    id: 4,
    number: 990004,
    title: "docs: add troubleshooting note",
    labels: ["triage: low-signal-docs", "status: waiting on author"],
    file: "docs/troubleshooting.md",
  },
  {
    id: 5,
    number: 990005,
    title: "docs: describe runtime behavior",
    labels: ["triage: low-signal-docs", "triage: needs-real-behavior-proof"],
    file: "docs/runtime.md",
  },
  {
    id: 6,
    number: 990006,
    title: "docs: describe deploy workflow",
    labels: ["triage: low-signal-docs", "merge-risk: automation"],
    file: "docs/deploy.md",
  },
  {
    id: 7,
    number: 990007,
    title: "test: add helper coverage",
    labels: ["triage: low-signal-docs"],
    file: "test/helper.test.ts",
  },
]
  .map((row) => renderThreadInsert(row))
  .join("\n")}
`,
  });
}

function renderThreadInsert(row) {
  const body = "A small drive-by wording update without linked context.";
  const labelsJson = JSON.stringify(row.labels.map((name) => ({ name })));
  const rawJson = JSON.stringify({ author_association: "CONTRIBUTOR" });
  return `
insert into threads values (
  ${row.id},
  1,
  ${row.number},
  'pull_request',
  'open',
  ${sqlString(row.title)},
  ${sqlString(body)},
  'contributor',
  'User',
  ${sqlString(labelsJson)},
  '[]',
  ${sqlString(rawJson)},
  0,
  '2025-01-01T00:00:00Z',
  '2025-01-0${row.id}T00:00:00Z',
  '2025-01-0${row.id}T00:00:00Z',
  null
);
insert into pull_request_files values (${row.id}, ${sqlString(row.file)});
`;
}

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}
