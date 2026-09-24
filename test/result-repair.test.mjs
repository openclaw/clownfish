import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const head = "a".repeat(40);
const updatedAt = "2026-09-24T00:00:00Z";

function runFixture(t, variant = "normal", mode = "plan") {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-repair-"));
  const slug = path.basename(dir);
  const bin = path.join(dir, "bin");
  fs.mkdirSync(bin);
  const runsRoot = path.join(root, ".projectclownfish", "runs");
  t.after(() => {
    fs.rmSync(dir, { recursive: true, force: true });
    for (const name of fs.existsSync(runsRoot) ? fs.readdirSync(runsRoot) : []) {
      if (name.startsWith(`${slug}-${mode}-`)) fs.rmSync(path.join(runsRoot, name), { recursive: true, force: true });
    }
  });
  const jobPath = path.join(dir, `${slug}.md`);
  fs.writeFileSync(jobPath, `---\nrepo: openclaw/openclaw\ncluster_id: ${slug}\nmode: ${mode}\nallowed_actions:\n  - comment\ncandidates:\n  - "#1"\n---\nExact job scope must survive repair.\n`);
  fs.writeFileSync(path.join(bin, "gh"), `#!/usr/bin/env node
const args = process.argv.slice(2);
const write = (value) => process.stdout.write(JSON.stringify(value));
const comment = { id: 41, html_url: "https://github.com/openclaw/openclaw/issues/1#issuecomment-41", user: { login: "maintainer" }, author_association: "MEMBER", body: "INVESTIGATION_DISCUSSION codex", created_at: "${updatedAt}", updated_at: "${updatedAt}" };
if (args[0] === "pr" && args[1] === "checks") write([]);
else if (args[0] !== "api" || args.includes("--method") || args.includes("-X")) process.exit(1);
else if (args[1].endsWith("/branches/main")) write({ commit: { sha: "${head}" } });
else if (args[1].endsWith("/issues/1")) write({ state: "open", title: "fixture", html_url: "https://github.com/openclaw/openclaw/pull/1", body: "INVESTIGATION_BODY", labels: [], comments: 1, updated_at: "${updatedAt}", pull_request: {} });
else if (args[1].endsWith("/issues/1/comments")) write([[comment]]);
else if (args[1].endsWith("/pulls/1")) write({ draft: false, merged: false, head: { sha: "${head}" }, base: { ref: "main" } });
else if (args[1].endsWith("/pulls/1/reviews")) write([[{ id: 51, html_url: "https://github.com/openclaw/openclaw/pull/1#pullrequestreview-51", user: { login: "codex" }, state: "COMMENTED", body: "INVESTIGATION_REVIEW" }]]);
else if (args[1].endsWith("/pulls/1/comments")) write([[{ ...comment, id: 61, html_url: "https://github.com/openclaw/openclaw/pull/1#discussion_r61", path: "src/fixture.ts", line: 1, side: "RIGHT" }]]);
else if (/\\/pulls\\/1\\/(files|commits)$/.test(args[1])) write([[]]);
else process.exit(1);
`);
  fs.writeFileSync(path.join(bin, "codex"), `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const dir = process.env.CLOWNFISH_TEST_FIXTURE;
const callsPath = path.join(dir, "calls.json");
const calls = fs.existsSync(callsPath) ? JSON.parse(fs.readFileSync(callsPath, "utf8")) : [];
calls.push({ args, input: fs.readFileSync(0, "utf8") });
fs.writeFileSync(callsPath, JSON.stringify(calls));
const output = args[args.indexOf("--output-last-message") + 1];
fs.writeFileSync(path.join(dir, "output-path"), output);
if (process.env.CLOWNFISH_TEST_VARIANT === "missing-plan") fs.rmSync(path.join(path.dirname(output), "cluster-plan.json"));
fs.writeFileSync(output, JSON.stringify({ status: calls.length === 1 ? "failed" : "planned", repo: "openclaw/openclaw", cluster_id: path.basename(dir), mode: "${mode}", summary: process.env.CLOWNFISH_TEST_VARIANT === "oversized" ? "x".repeat(100_000) : "fixture result", actions: [], needs_human: [], canonical: null, merge_preflight: [], fix_artifact: null }));
`);
  for (const name of ["gh", "codex"]) fs.chmodSync(path.join(bin, name), 0o755);
  const child = spawnSync(process.execPath, ["scripts/run-worker.mjs", jobPath, "--mode", mode], {
    cwd: root,
    env: {
      ...process.env,
      PATH: `${bin}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_TEST_FIXTURE: dir, CLOWNFISH_TEST_VARIANT: variant,
      CLOWNFISH_TARGET_CHECKOUT: "", CLOWNFISH_DRY_RUN: "0",
      CLOWNFISH_ALLOW_EXECUTE: "1",
      CLOWNFISH_MODEL: "gpt-5.5", CLOWNFISH_CODEX_REASONING_EFFORT: "medium",
      CLOWNFISH_RESULT_REPAIR_ATTEMPTS: "1", CLOWNFISH_HYDRATE_COMMENTS: "1",
      CLOWNFISH_MAX_LINKED_REFS: "0",
    },
    encoding: "utf8", timeout: 15_000,
  });
  assert.equal(child.error, undefined, child.stderr);
  const calls = JSON.parse(fs.readFileSync(path.join(dir, "calls.json"), "utf8"));
  const output = fs.readFileSync(path.join(dir, "output-path"), "utf8");
  return { child, calls, output, runDir: path.dirname(output) };
}

test("worker repairs only the structured result with exact scope and retained evidence", (t) => {
  const { child, calls, output, runDir } = runFixture(t);
  assert.equal(child.status, 0, child.stderr || child.stdout);
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[1].args, calls[0].args, "repair preserves model, effort and execution settings");
  assert.match(calls[0].input, /INVESTIGATION_DISCUSSION/);
  assert.doesNotMatch(calls[1].input, /INVESTIGATION_(BODY|DISCUSSION|REVIEW)|Original worker prompt/);
  assert.match(calls[1].input, /worker result status is failed/);
  assert.match(calls[1].input, /Exact job scope must survive repair/);
  assert.match(calls[1].input, new RegExp(head));
  assert.match(calls[1].input, /"security_sensitive": false/);
  assert.match(calls[1].input, /"ref": "#1"/);
  assert.match(calls[1].input, new RegExp(updatedAt));
  assert.match(calls[1].input, /Never invent resolved comments/);
  assert.equal(JSON.parse(fs.readFileSync(output, "utf8")).status, "planned");

  const item = JSON.parse(fs.readFileSync(path.join(runDir, "cluster-plan.json"), "utf8")).items[0];
  assert.equal(item.comments[0].id, 41);
  assert.equal(item.comments[0].url, "https://github.com/openclaw/openclaw/issues/1#issuecomment-41");
  assert.deepEqual(item.maintainer_comments[0], item.comments[0]);
  assert.deepEqual(item.bot_comments[0], item.comments[0]);
  assert.equal(item.pull_request.reviews[0].id, 51);
  assert.equal(item.pull_request.review_comments[0].id, 61);
  assert.deepEqual(item.pull_request.review_bot_comments.map((entry) => entry.id), [51, 61]);
});

test("oversized repair context remains invalid without another inference attempt", (t) => {
  const { child, calls, output, runDir } = runFixture(t, "oversized");
  assert.notEqual(child.status, 0);
  assert.equal(calls.length, 1);
  assert.match(child.stderr, /repair skipped: required context exceeds 96000 characters/);
  assert.equal(JSON.parse(fs.readFileSync(output, "utf8")).status, "failed");
  assert.equal(fs.readFileSync(output, "utf8"), fs.readFileSync(path.join(runDir, "result.before-repair-1.json"), "utf8"));
});

test("missing preflight evidence cannot start a repair or manufacture a passing result", (t) => {
  const { child, calls, output } = runFixture(t, "missing-plan");
  assert.notEqual(child.status, 0);
  assert.equal(calls.length, 1);
  assert.match(child.stderr, /ENOENT/);
  assert.equal(JSON.parse(fs.readFileSync(output, "utf8")).status, "failed");
});

for (const [mode, modePrompt] of [["plan", "plan-only"], ["execute", "execute"], ["autonomous", "autonomous"]]) {
  test(`${mode} repair retains complete worker and selected mode instructions`, (t) => {
    const { child, calls } = runFixture(t, "normal", mode);
    assert.equal(child.status, 0, child.stderr || child.stdout);
    assert.equal(calls.length, 2);
    for (const file of ["worker-system", modePrompt]) {
      const instructions = fs.readFileSync(path.join(root, "prompts", `${file}.md`), "utf8");
      assert.ok(calls[0].input.includes(instructions), `initial prompt includes ${file}`);
      assert.ok(calls[1].input.includes(instructions), `repair prompt includes ${file}`);
    }
    assert.doesNotMatch(calls[1].input, /INVESTIGATION_(BODY|DISCUSSION|REVIEW)/);
  });
}
