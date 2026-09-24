import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { renderPrompt } from "../scripts/lib.mjs";

function renderPlan(t, plan) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-evidence-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const clusterPlanPath = path.join(dir, "cluster-plan.json");
  const raw = JSON.stringify(plan, null, 2);
  fs.writeFileSync(clusterPlanPath, raw);
  const prompt = renderPrompt({ raw: "fixture job", frontmatter: { mode: "plan" } }, "plan", { clusterPlanPath });
  assert.equal(fs.readFileSync(clusterPlanPath, "utf8"), raw, "rendering must preserve the retained artifact");
  return JSON.parse(prompt.split("## Cluster preflight artifact")[1].match(/```json\n([\s\S]*?)\n```/)[1]);
}

test("prompt evidence deduplicates identities and retains all classifications and distinct same-text comments", (t) => {
  const comment = { id: 11, url: "https://github.com/openclaw/openclaw/issues/1#issuecomment-11", body_excerpt: "same text" };
  const review = { id: 11, state: "CHANGES_REQUESTED", submitted_at: "2026-09-24T00:00:00Z", body_excerpt: "review text" };
  const inline = { id: 11, path: "src/one.ts", line: 4, side: "RIGHT", body_excerpt: "same text" };
  const item = renderPlan(t, { items: [{
    ref: "#1",
    comments: [comment, { ...comment, id: 12, url: "https://github.com/openclaw/openclaw/issues/1#issuecomment-12" }],
    maintainer_comments: [comment, { id: 13, body_excerpt: "maintainer-only evidence" }],
    bot_comments: [comment],
    pull_request: {
      reviews: [review],
      review_comments: [inline, { ...inline, id: 12, path: "src/two.ts" }],
      review_bot_comments: [review, inline],
    },
  }] }).items[0];

  assert.equal(item.comments.length, 3);
  assert.deepEqual(item.comments.find((entry) => entry.id === 11).classifications, ["maintainer", "review_bot"]);
  assert.equal(item.comments.filter((entry) => entry.body_excerpt === "same text").length, 2);
  assert.equal("maintainer_comments" in item, false);
  assert.equal("bot_comments" in item, false);
  assert.equal(item.pull_request.reviews.length, 1);
  assert.deepEqual(item.pull_request.reviews[0].classifications, ["review_bot"]);
  assert.equal(item.pull_request.review_comments.length, 2);
  assert.deepEqual(item.pull_request.review_comments.find((entry) => entry.id === 11).classifications, ["review_bot"]);
  assert.equal("review_bot_comments" in item.pull_request, false);
});

test("prompt evidence keeps identity-less records separate", (t) => {
  const comment = { author: "maintainer", body_excerpt: "identical text and metadata" };
  const item = renderPlan(t, { items: [{ comments: [comment, { ...comment }], maintainer_comments: [comment] }] }).items[0];
  assert.equal(item.comments.length, 3);
});

test("compaction selects maintainer and bot evidence before deduplicating", (t) => {
  const comments = Array.from({ length: 20 }, (_, index) => ({ id: index + 1, body_excerpt: `comment ${index + 1}` }));
  const plan = renderPlan(t, { items: [{
    ref: "#1", body_excerpt: "x".repeat(330_000), comments,
    maintainer_comments: [comments[19]], bot_comments: [comments[18]],
  }] });
  assert.equal(plan._prompt_compacted, true);
  assert.deepEqual(plan.items[0].comments.map((entry) => entry.id).sort((a, b) => a - b), [1, 2, 3, 4, 19, 20]);
  assert.deepEqual(plan.items[0].comments.find((entry) => entry.id === 20).classifications, ["maintainer"]);
  assert.deepEqual(plan.items[0].comments.find((entry) => entry.id === 19).classifications, ["review_bot"]);
});
