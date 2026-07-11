import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const clusterWorkflow = readWorkflow("cluster-worker.yml");
const externalWorkflow = readWorkflow("external-merge-preflight.yml");
const commentRouterWorkflow = readWorkflow("comment-router.yml");

test("cluster workers prepare in parallel and serialize final mutations by target repo", () => {
  assert.match(clusterWorkflow, /target_repo: \$\{\{ steps\.plan\.outputs\.target_repo \}\}/);
  assert.match(clusterWorkflow, /target_repo=\$\{job\.frontmatter\.repo\}/);
  assert.match(clusterWorkflow, /may_merge: \$\{\{ steps\.plan\.outputs\.may_merge \}\}/);
  assert.match(clusterWorkflow, /may_merge=\$\{mayMerge \? "1" : "0"\}/);

  const prepareMutations = jobBody(clusterWorkflow, "execute", "apply");
  assert.match(prepareMutations, /--phase preflight/);
  assert.match(prepareMutations, /name: projectclownfish-preapply-/);
  assert.doesNotMatch(prepareMutations, /npm run apply-result/);
  assert.doesNotMatch(prepareMutations, /npm run post-flight/);
  assert.doesNotMatch(prepareMutations, /--phase apply/);

  const applyMutations = jobBody(clusterWorkflow, "apply");
  assert.match(
    applyMutations,
    /needs\.prepare\.outputs\.may_merge == '1'[\s\S]*?projectclownfish-merge-\{0\}[\s\S]*?needs\.prepare\.outputs\.target_repo[\s\S]*?projectclownfish-apply-\{0\}-\{1\}/,
  );
  assert.match(applyMutations, /cancel-in-progress: false/);
  assert.match(applyMutations, /queue: max/);
  assert.match(applyMutations, /name: projectclownfish-preapply-/);
  assert.match(applyMutations, /--phase apply/);
  assert.match(applyMutations, /npm run apply-result/);
  assert.match(applyMutations, /npm run post-flight/);
});

test("standalone preflight and comment-router merges share the repository mutation queue", () => {
  const externalApply = jobBody(externalWorkflow, "apply");
  assert.match(externalWorkflow, /target_repo: \$\{\{ steps\.outcome\.outputs\.target_repo \}\}/);
  assert.match(externalApply, /group: projectclownfish-merge-\$\{\{ needs\.preflight\.outputs\.target_repo \}\}/);
  assert.match(externalApply, /cancel-in-progress: false/);
  assert.match(externalApply, /queue: max/);
  assert.match(
    externalWorkflow,
    /external-merge-preflight-\$\{\{ github\.run_id \}\}/,
  );

  const router = jobBody(commentRouterWorkflow, "route-comments", "merge-comments");
  const routerMerge = jobBody(commentRouterWorkflow, "merge-comments");
  assert.doesNotMatch(router, /\n    concurrency:/);
  assert.match(router, /--defer-merges/);
  assert.match(routerMerge, /group: projectclownfish-merge-\$\{\{ needs\.route-comments\.outputs\.target_repo \}\}/);
  assert.match(routerMerge, /cancel-in-progress: false/);
  assert.match(routerMerge, /queue: max/);
  assert.match(routerMerge, /--merge-only/);
  assert.match(routerMerge, /--merge-scope-file/);
  assert.match(routerMerge, /git push origin HEAD:main/);
  assert.doesNotMatch(commentRouterWorkflow, /\n  record-merge-comments:/);
});

test("serialized workflow artifacts include hidden ProjectClownfish paths", () => {
  for (const workflow of [clusterWorkflow, externalWorkflow, commentRouterWorkflow]) {
    const uploads = workflow.match(/uses: actions\/upload-artifact@v7/g) ?? [];
    const hiddenOptIns = workflow.match(/include-hidden-files: true/g) ?? [];
    assert.ok(uploads.length > 0);
    assert.equal(hiddenOptIns.length, uploads.length);
  }
});

test("producer artifacts survive failed-job reruns", () => {
  for (const [workflow, name] of [
    [clusterWorkflow, "projectclownfish-worker"],
    [clusterWorkflow, "projectclownfish-preapply"],
    [externalWorkflow, "external-merge-preflight"],
    [commentRouterWorkflow, "comment-router-merge-scope"],
  ]) {
    const producer = new RegExp(
      `uses: actions/upload-artifact@v7[\\s\\S]*?name: ${name}-\\$\\{\\{ github\\.run_id \\}\\}[\\s\\S]*?overwrite: true`,
    );
    const consumer = new RegExp(
      `uses: actions/download-artifact@v8[\\s\\S]*?name: ${name}-\\$\\{\\{ github\\.run_id \\}\\}`,
    );
    assert.match(workflow, producer);
    assert.match(workflow, consumer);
    assert.doesNotMatch(
      workflow,
      new RegExp(`${name}-\\$\\{\\{ github\\.run_id \\}\\}-\\$\\{\\{ github\\.run_attempt \\}\\}`),
    );
  }
});

function readWorkflow(name) {
  return fs.readFileSync(path.join(repoRoot, ".github", "workflows", name), "utf8");
}

function jobBody(workflow, jobName, nextJobName = null) {
  const start = workflow.indexOf(`\n  ${jobName}:\n`);
  assert.notEqual(start, -1, `missing ${jobName} job`);
  const end = nextJobName ? workflow.indexOf(`\n  ${nextJobName}:\n`, start + 1) : workflow.length;
  assert.notEqual(end, -1, `missing ${nextJobName} job`);
  return workflow.slice(start, end);
}
