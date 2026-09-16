import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const cases = [
  { script: "queue-status", hang: "secret", args: ["--json"], ok: true },
  { script: "queue-status", hang: "variable", args: ["--json"], ok: true },
  { script: "comment-router", hang: "api" },
  { script: "finalize-open-prs", hang: "pr" },
  { script: "publish-backlog", hang: "run", args: ["--json"] },
  { script: "publish-backlog", hang: "git-fetch", args: ["--json"] },
  { script: "publish-backlog", hang: "git-show", args: ["--json"] },
  { script: "publish-backlog", hang: "git-fetch", args: ["--json", "--process-group-owner"], groupOwner: true },
  { script: "dispatch-jobs", hang: "workflow", dispatch: true, args: ["--skip-publish-backlog-check"] },
  { script: "dispatch-jobs", hang: "git-fetch-backlog", dispatch: true,
    args: ["--wait-for-capacity", "--publish-backlog-wait-ms", "2000"] },
];

for (const scenario of cases) {
  test(`${scenario.script} CLI terminates stalled ${scenario.hang}`, (t) => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-timeout-cli-"));
    const childPidFile = path.join(root, "child.pid");
    t.after(() => {
      if (fs.existsSync(childPidFile)) {
        try { process.kill(Number(fs.readFileSync(childPidFile, "utf8")), "SIGKILL"); } catch (error) {
          if (error.code !== "ESRCH") throw error;
        }
      }
      fs.rmSync(root, { recursive: true, force: true });
    });
    fs.cpSync(path.join(repoRoot, "scripts"), path.join(root, "scripts"), { recursive: true });
    const bin = path.join(root, "bin");
    fs.mkdirSync(bin);
    fs.mkdirSync(path.join(root, "results"));
    fs.mkdirSync(path.join(root, "jobs/openclaw/inbox"), { recursive: true });
    fs.copyFileSync(path.join(repoRoot, "jobs/openclaw/inbox/cluster-example.md"), path.join(root, "jobs/openclaw/inbox/cluster-example.md"));
    fs.writeFileSync(path.join(bin, "gh"), `#!/bin/sh
if [ "$1" = "$HANG_KIND" ]; then
  printf 'started\\n' >> "$CALLS"
  trap '' TERM
  exec /bin/sleep 10
fi
if [ "$1" = secret ]; then
  printf '[{"name":"CLOWNFISH_READ_GH_TOKEN"},{"name":"CLOWNFISH_GH_TOKEN"}]'
elif [ "$1" = api ]; then
  printf '[{"workflow_runs":[]}]'
else
  printf '[]'
fi
`, { mode: 0o755 });
    fs.writeFileSync(path.join(bin, "git"), `#!/bin/sh
if [ "$HANG_KIND" = "git-$1" ] || { [ "$HANG_KIND" = git-fetch-backlog ] && [ "$1" = fetch ] && [ "$4" = --quiet ]; }; then
  printf '%s' "$$" > "$CHILD_PID_FILE"
  printf 'started\\n' >> "$CALLS"
  trap '' TERM
  exec /bin/sleep 10
fi
if [ "$1" = rev-parse ]; then printf 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; fi
if [ "$HANG_KIND" = git-show ] && [ "$1" = ls-tree ]; then printf 'results/review-rejections/123.json\\n'; fi
`, { mode: 0o755 });
    const calls = path.join(root, "calls");
    for (const command of ["gh", "git"]) {
      assert.equal(spawnSync(path.join(bin, command), ["--version"], { timeout: 10000 }).status, 0);
    }
    const args = [path.join(root, "scripts", `${scenario.script}.mjs`)];
    if (scenario.dispatch) args.push("jobs/openclaw/inbox/cluster-example.md", "--mode", "plan",
      "--skip-token-secret-check", "--no-dispatch-ledger", "--max-live-workers", "1", "--gh-bin", path.join(bin, "gh"));
    args.push(...(scenario.args ?? []));
    const child = spawnSync(process.execPath, args, {
      cwd: root, encoding: "utf8", timeout: 20000, killSignal: "SIGKILL", detached: Boolean(scenario.groupOwner),
      env: {
        PATH: `${bin}${path.delimiter}${path.dirname(process.execPath)}${path.delimiter}/usr/bin${path.delimiter}/bin`,
        CLOWNFISH_REPO: "openclaw/clownfish", CLOWNFISH_GH_BIN: path.join(bin, "gh"),
        CLOWNFISH_GH_EXEC_TIMEOUT_MS: "5000", HANG_KIND: scenario.hang, CALLS: calls,
        CHILD_PID_FILE: childPidFile,
      },
    });
    assert.equal(child.error, undefined, child.stderr);
    assert.equal(child.status === 0, Boolean(scenario.ok), child.stderr || child.stdout);
    assert.match(child.stderr, /timed out after (5000|2000|[1-9][0-9]{0,3})ms/);
    assert.equal(fs.readFileSync(calls, "utf8"), "started\n");
    if (scenario.hang === "git-fetch-backlog" || scenario.groupOwner) {
      const pid = fs.readFileSync(childPidFile, "utf8").trim();
      const state = spawnSync("ps", ["-o", "stat=", "-p", pid], { encoding: "utf8" }).stdout.trim();
      assert.ok(!state || state.startsWith("Z"), `nested backlog child survived: ${state}`);
    }
    if (scenario.ok) {
      const auth = JSON.parse(child.stdout).auth;
      assert.equal(auth.checked, scenario.hang !== "secret");
    }
  });
}
