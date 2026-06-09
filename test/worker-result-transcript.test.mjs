import assert from "node:assert/strict";
import test from "node:test";

import { extractWorkerResultFromCodexJsonl } from "../scripts/worker-result-transcript.mjs";

test("extractWorkerResultFromCodexJsonl ignores progress placeholders", () => {
  const progress = workerResult({
    summary: "I am checking the target checkout before building the result.",
  });

  assert.equal(extractWorkerResultFromCodexJsonl(jsonl(progress)), null);
});

test("extractWorkerResultFromCodexJsonl recovers latest terminal worker result", () => {
  const progress = workerResult({ summary: "still checking", actions: [] });
  const terminal = workerResult({
    summary: "build a fix artifact for the still-valid finding",
    actions: [
      {
        target: "cluster:cluster-test",
        action: "build_fix_artifact",
        status: "planned",
        idempotency_key: "cluster-test:build-fix-artifact",
        classification: null,
        target_kind: null,
        target_updated_at: null,
        canonical: null,
        duplicate_of: null,
        candidate_fix: null,
        comment: null,
        evidence: [],
        reason: "the finding is still valid on current main",
      },
    ],
    fix_artifact: {
      summary: "fix the still-valid finding",
      affected_surfaces: ["src/example.ts"],
      likely_files: ["src/example.ts"],
      linked_refs: [],
      validation_commands: ["pnpm check:changed"],
      changelog_required: false,
      credit_notes: [],
      pr_title: "fix: example",
      pr_body: "Fixes the example finding.",
      source_prs: [],
      repair_strategy: "new_fix_pr",
      allow_no_pr: false,
      branch_update_blockers: [],
    },
  });

  assert.deepEqual(extractWorkerResultFromCodexJsonl(jsonl(progress, terminal, progress)), terminal);
});

test("extractWorkerResultFromCodexJsonl accepts fenced terminal JSON", () => {
  const terminal = workerResult({ status: "blocked", needs_human: ["choose canonical"], summary: "choose canonical" });
  const event = {
    item: {
      type: "agent_message",
      text: `\`\`\`json\n${JSON.stringify(terminal, null, 2)}\n\`\`\``,
    },
  };

  assert.deepEqual(extractWorkerResultFromCodexJsonl(`${JSON.stringify(event)}\n`), terminal);
});

function jsonl(...messages) {
  return messages
    .map((message) =>
      JSON.stringify({
        item: {
          type: "agent_message",
          text: JSON.stringify(message),
        },
      }),
    )
    .join("\n");
}

function workerResult(overrides = {}) {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "cluster-test",
    mode: "autonomous",
    summary: "test result",
    actions: [],
    needs_human: [],
    canonical: null,
    canonical_issue: null,
    canonical_pr: null,
    merge_preflight: [],
    fix_artifact: null,
    ...overrides,
  };
}
