import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const readWorkflow = (name) => fs.readFileSync(path.join(repoRoot, ".github/workflows", name), "utf8");
const finalizer = readWorkflow("finalize-open-prs.yml");
const router = readWorkflow("comment-router.yml");
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-ledger-recovery-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}
function git(args, cwd) {
  const child = spawnSync("git", ["-c", "user.name=Test User", "-c", "user.email=test@example.com", ...args], { cwd, encoding: "utf8" });
  assert.equal(child.status, 0, child.stderr);
  return child.stdout;
}

test("finalizer publishes a timeout ledger even when no report files were written", (t) => {
  const step = finalizer.split("      - name: Commit finalizer ledger\n")[1];
  assert.ok(step);
  assert.match(step, /^        if: always\(\)/);
  const script = step.split("        run: |\n")[1].split("\n").map((line) => line.replace(/^          /, "")).join("\n");
  const root = fixture(t);
  const origin = path.join(root, "origin.git");
  const work = path.join(root, "work");
  git(["init", "--bare", origin], root);
  git(["init", "-b", "main", work], root);
  fs.writeFileSync(path.join(work, "README.md"), "fixture\n");
  git(["add", "."], work);
  git(["commit", "-m", "fixture"], work);
  git(["remote", "add", "origin", origin], work);
  git(["push", "-u", "origin", "main"], work);
  fs.mkdirSync(path.join(work, "results"));
  const ledger = { attempts: [{ idempotency_key: "one", status: "unknown" }] };
  fs.writeFileSync(path.join(work, "results/finalize-open-prs-dispatch.json"), JSON.stringify(ledger));
  const run = spawnSync("bash", ["-e", "-c", script], { cwd: work, encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const published = JSON.parse(git(["show", "main:results/finalize-open-prs-dispatch.json"], origin));
  assert.deepEqual(published, ledger);
});

test("finalizer workflow serializes ledger owners without cancelling them", () => {
  assert.match(finalizer, /uses: actions\/checkout@[^\n]+\n\s+with:\n\s+ref: main/);
  assert.match(finalizer, /concurrency:\s*\n\s*group: projectclownfish-finalizer/);
  assert.match(finalizer, /cancel-in-progress: false/);
  assert.match(finalizer, /queue: max/);
});

const replays = [...router.matchAll(/node --input-type=module <<\x27NODE\x27\n([^]*?)^          NODE/gm)]
  .map((match) => match[1].replace(/^          /gm, ""))
  .filter((script) => script.includes("const recordable ="));
assert.equal(replays.length, 2);
for (const [index, script] of replays.entries()) {
  test(`router workflow replay ${index + 1} restores unknown outcomes after a conflicting ledger update`, (t) => {
    const root = fixture(t);
    fs.mkdirSync(path.join(root, "scripts"));
    fs.mkdirSync(path.join(root, "results"));
    fs.copyFileSync(path.join(repoRoot, "scripts/comment-router-utils.mjs"), path.join(root, "scripts/comment-router-utils.mjs"));
    const ledgerFile = path.join(root, "results/comment-router.json");
    fs.writeFileSync(ledgerFile, JSON.stringify({ commands: [{ idempotency_key: "remote", comment_id: "2", status: "executed" }] }));
    const reportFile = path.join(root, "report.json");
    fs.writeFileSync(reportFile, JSON.stringify({
      repo: "example/repo", mode: "merge_only", requested_comment_ids: ["1"],
      commands: [{ idempotency_key: "local", comment_id: "1", status: "unknown", reason: "dispatch timed out" }],
    }));
    const run = spawnSync(process.execPath, ["--input-type=module"], {
      cwd: root, input: script, encoding: "utf8",
      env: { ...process.env, REPORT_FILE: reportFile, EXPECTED_TARGET_REPO: "example/repo", EXPECTED_COMMENT_IDS: "1" },
    });
    assert.equal(run.status, 0, run.stderr);
    const ledger = JSON.parse(fs.readFileSync(ledgerFile, "utf8"));
    assert.equal(ledger.commands.find((entry) => entry.idempotency_key === "remote").status, "executed");
    assert.equal(ledger.commands.find((entry) => entry.idempotency_key === "local")?.status, "unknown");
  });
}
