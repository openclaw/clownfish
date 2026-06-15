import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeResultMetadataFromPlan } from "../scripts/result-metadata.mjs";

test("fills action target metadata from hydrated preflight items", () => {
  const result = {
    repo: "openclaw/openclaw",
    actions: [
      {
        target: "#85478",
        action: "needs_human",
        target_kind: null,
        target_updated_at: null,
      },
    ],
  };
  const plan = {
    item_matrix: [
      {
        ref: "#85478",
        kind: "pull_request",
        updated_at: "2026-06-15T02:44:12Z",
      },
    ],
  };

  assert.equal(normalizeResultMetadataFromPlan(result, plan), true);
  assert.equal(result.actions[0].target_kind, "pull_request");
  assert.equal(result.actions[0].target_updated_at, "2026-06-15T02:44:12Z");
});

test("leaves unhydrated action metadata untouched", () => {
  const result = {
    repo: "openclaw/openclaw",
    actions: [
      {
        target: "#99999",
        action: "needs_human",
        target_kind: null,
        target_updated_at: null,
      },
    ],
  };

  assert.equal(normalizeResultMetadataFromPlan(result, { item_matrix: [] }), false);
  assert.equal(result.actions[0].target_kind, null);
  assert.equal(result.actions[0].target_updated_at, null);
});
