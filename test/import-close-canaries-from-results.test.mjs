import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("import-close-canaries writes merged PR closeouts as candidate_fix guidance", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "123.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster",
        actions: [
          {
            target: "#84902",
            action: "close_superseded",
            status: "planned",
            canonical: "#74273",
            classification: "superseded",
            reason: "target is already covered by the merged implementation",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const job = fs.readFileSync(path.join(fixture.inbox, "pr-close-canary-84902-test.md"), "utf8");
  assert.match(job, /use candidate_fix rather than canonical/);
  assert.match(job, /prefer `close_fixed_by_candidate` with `candidate_fix: "#74273"`/);
  assert.match(job, /Do not emit `close_superseded` with closed\/merged #74273 in `canonical`/);
});

test("import-close-canaries writes open canonical duplicate closeouts", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "124.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster-open",
        actions: [
          {
            target: "#91955",
            action: "close_duplicate",
            status: "planned",
            canonical: "#91988",
            classification: "duplicate",
            reason: "target is a duplicate of the open canonical issue",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const job = fs.readFileSync(path.join(fixture.inbox, "pr-close-canary-91955-test.md"), "utf8");
  assert.match(job, /prefer `close_duplicate` with `canonical: "#91988"`/);
  assert.match(job, /Do not use `candidate_fix` for open canonical refs/);
});

test("import-close-canaries ignores explicit non-security action evidence", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "129.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster-non-security",
        actions: [
          {
            target: "#92164",
            action: "close_duplicate",
            status: "planned",
            canonical: "#92341",
            classification: "duplicate",
            reason: "The target duplicates the open canonical issue.",
            evidence: ["Hydrated artifact marks security_sensitive=false."],
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "non-security",
      "--limit",
      "1",
      "--json",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  assert.deepEqual(JSON.parse(run.stdout).candidates.map((candidate) => candidate.target), ["#92164"]);
  const job = fs.readFileSync(path.join(fixture.inbox, "pr-close-canary-92164-non-security.md"), "utf8");
  assert.match(job, /source result: ProjectClownfish workflow run 129/);
  assert.doesNotMatch(job, /clownfish-close-canary-/);
});

test("import-close-canaries prioritizes newly published results before stale lexical run ids", () => {
  const fixture = makeFixture();
  for (let index = 1; index <= 5; index += 1) {
    fs.writeFileSync(
      path.join(fixture.results, `10000000000000${index}.json`),
      JSON.stringify({
        published_at: "2026-06-15T00:00:00.000Z",
        actions: [{ target: `#9900${index}`, action: "close_superseded", status: "planned", canonical: "#74273" }],
      }),
    );
  }
  fs.writeFileSync(
    path.join(fixture.results, "999.json"),
    JSON.stringify({
      published_at: "2026-06-16T23:07:18.007Z",
      actions: [{ target: "#84902", action: "close_superseded", status: "planned", canonical: "#74273" }],
    }),
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--limit",
      "1",
      "--live-fetch-limit",
      "5",
      "--suffix",
      "newest",
      "--json",
    ],
    { cwd: repoRoot, env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` }, encoding: "utf8" },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  assert.deepEqual(JSON.parse(run.stdout).candidates.map((candidate) => candidate.target), ["#84902"]);
});

test("import-close-canaries quarantines security-shaped candidates before generation", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "125.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster-security",
        actions: [
          {
            target: "#91286",
            action: "close_superseded",
            status: "planned",
            canonical: "#91290",
            classification: "superseded",
            reason: "Superseded by a stronger implementation candidate.",
          },
          {
            target: "#92164",
            action: "close_duplicate",
            status: "planned",
            canonical: "#92341",
            classification: "duplicate",
            reason: "Target duplicates the open canonical memory issue.",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
      "--json",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const payload = JSON.parse(run.stdout);
  assert.deepEqual(
    payload.candidates.map((candidate) => candidate.target),
    ["#92164"],
  );
  assert.deepEqual(
    payload.dropped.map((candidate) => [candidate.target, candidate.reason]),
    [["#91286", "security signal in target"]],
  );
  assert.equal(fs.existsSync(path.join(fixture.inbox, "pr-close-canary-91286-test.md")), false);
  assert.equal(fs.existsSync(path.join(fixture.inbox, "pr-close-canary-92164-test.md")), true);
});

test("import-close-canaries quarantines security-shaped canonical refs", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "126.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster-security-canonical",
        actions: [
          {
            target: "#92164",
            action: "close_superseded",
            status: "planned",
            canonical: "#91291",
            classification: "superseded",
            reason: "Superseded by canonical routing work.",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
      "--json",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const payload = JSON.parse(run.stdout);
  assert.deepEqual(payload.candidates, []);
  assert.deepEqual(
    payload.dropped.map((candidate) => [candidate.target, candidate.reason]),
    [["#92164", "security signal in canonical"]],
  );
  assert.equal(fs.existsSync(path.join(fixture.inbox, "pr-close-canary-92164-test.md")), false);
});

test("import-close-canaries skips maintainer targets and human-hold targets", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "127.json"),
    JSON.stringify({
      actions: [{ target: "#91770", action: "close_superseded", status: "planned", canonical: "#92892" }],
    }),
  );
  fs.writeFileSync(
    path.join(fixture.results, "128.json"),
    JSON.stringify({
      actions: [{ target: "#92526", action: "close_superseded", status: "planned", canonical: "#92892" }],
    }),
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "2",
      "--json",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const payload = JSON.parse(run.stdout);
  assert.deepEqual(payload.candidates, []);
  assert.deepEqual(
    new Map(payload.dropped.map((candidate) => [candidate.target, candidate.reason])),
    new Map([
      ["#91770", "target author association is MEMBER"],
      ["#92526", "target has human-hold label status: needs proof"],
    ]),
  );
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-close-canary-"));
  const results = path.join(root, "results");
  const inbox = path.join(root, "inbox");
  const existing = path.join(root, "existing");
  const bin = path.join(root, "bin");
  fs.mkdirSync(results, { recursive: true });
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(bin, { recursive: true });
  return { root, results, inbox, existing, bin };
}

function writeFakeGhx(bin) {
  const ghx = path.join(bin, "ghx");
  fs.writeFileSync(
    ghx,
    `#!/usr/bin/env node
console.log(JSON.stringify({
  data: {
    repository: {
      n84902: {
        __typename: "PullRequest",
        number: 84902,
        title: "stale provider thinking profile",
        state: "OPEN",
        updatedAt: "2026-06-15T02:05:27Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n74273: {
        __typename: "PullRequest",
        number: 74273,
        title: "merged provider thinking fix",
        state: "MERGED",
        updatedAt: "2026-04-29T10:36:18Z",
        mergedAt: "2026-04-29T10:35:03Z",
        isDraft: false,
        labels: { nodes: [] }
      },
      n91955: {
        __typename: "PullRequest",
        number: 91955,
        title: "duplicate hook regression PR",
        state: "OPEN",
        updatedAt: "2026-06-15T12:00:00Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n91988: {
        __typename: "Issue",
        number: 91988,
        title: "canonical hook regression issue",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T12:01:00Z",
        labels: { nodes: [] }
      },
      n91286: {
        __typename: "PullRequest",
        number: 91286,
        title: "fix(security): tighten SecretRef auth boundary",
        body: "Tightens credential handling around redacted workspace context.",
        state: "OPEN",
        updatedAt: "2026-06-15T10:00:00Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [{ name: "merge-risk: security-boundary" }] }
      },
      n91290: {
        __typename: "PullRequest",
        number: 91290,
        title: "fix: harden command routing",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T10:01:00Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n91291: {
        __typename: "PullRequest",
        number: 91291,
        title: "security(gateway): route hook completion events to target agent session",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T10:01:00Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n92164: {
        __typename: "PullRequest",
        number: 92164,
        title: "fix(memory-core): score CJK keyword search",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T17:19:13Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n92341: {
        __typename: "Issue",
        number: 92341,
        title: "fix(memory-core): CJK textScore=0 fallback",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T17:20:00Z",
        labels: { nodes: [] }
      },
      n91770: {
        __typename: "PullRequest",
        number: 91770,
        title: "maintainer-owned duplicate",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T17:20:00Z",
        mergedAt: null,
        authorAssociation: "MEMBER",
        isDraft: false,
        labels: { nodes: [] }
      },
      n92526: {
        __typename: "PullRequest",
        number: 92526,
        title: "proof-blocked duplicate",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T17:20:00Z",
        mergedAt: null,
        authorAssociation: "CONTRIBUTOR",
        isDraft: false,
        labels: { nodes: [{ name: "status: needs proof" }] }
      },
      n92892: {
        __typename: "PullRequest",
        number: 92892,
        title: "canonical implementation",
        body: "",
        state: "OPEN",
        updatedAt: "2026-06-15T17:20:00Z",
        mergedAt: null,
        authorAssociation: "CONTRIBUTOR",
        isDraft: false,
        labels: { nodes: [] }
      }
    }
  }
}));
`,
  );
  fs.chmodSync(ghx, 0o755);
}
