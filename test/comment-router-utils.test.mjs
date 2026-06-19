import assert from "node:assert/strict";
import test from "node:test";

import { appendLedger } from "../scripts/comment-router-utils.mjs";

test("appendLedger keeps edited comment versions separate", () => {
  const ledger = { updated_at: null, commands: [] };

  appendLedger(ledger, [
    {
      idempotency_key: "first",
      comment_id: "123",
      comment_version_key: "123:2026-04-29T01:00:00Z",
      comment_updated_at: "2026-04-29T01:00:00Z",
      status: "executed",
      intent: "clawsweeper_auto_repair",
      issue_number: 74075,
      repo: "openclaw/openclaw",
    },
    {
      idempotency_key: "second",
      comment_id: "123",
      comment_version_key: "123:2026-04-29T02:00:00Z",
      comment_updated_at: "2026-04-29T02:00:00Z",
      status: "executed",
      intent: "clawsweeper_auto_repair",
      issue_number: 74075,
      repo: "openclaw/openclaw",
    },
  ]);

  assert.equal(ledger.commands.length, 2);
  assert.deepEqual(
    ledger.commands.map((entry) => entry.comment_version_key),
    ["123:2026-04-29T01:00:00Z", "123:2026-04-29T02:00:00Z"],
  );
});

test("appendLedger preserves a legacy automerge bridge replay", () => {
  const ledger = {
    updated_at: null,
    commands: [
      {
        idempotency_key: "comment-router:openclaw/openclaw:74075:123:2026-04-29T01:00:00Z:automerge",
        comment_id: "123",
        comment_version_key: "123:2026-04-29T01:00:00Z",
        comment_updated_at: "2026-04-29T01:00:00Z",
        status: "executed",
        intent: "automerge",
        issue_number: 74075,
        repo: "openclaw/openclaw",
      },
    ],
  };

  appendLedger(ledger, [
    {
      idempotency_key: "comment-router:openclaw/openclaw:74075:123:2026-04-29T01:00:00Z:automerge:legacy-automerge-bridge-v1",
      comment_id: "123",
      comment_version_key: "123:2026-04-29T01:00:00Z",
      comment_updated_at: "2026-04-29T01:00:00Z",
      automation_source: "legacy_automerge_bridge",
      status: "executed",
      intent: "automerge",
      issue_number: 74075,
      repo: "openclaw/openclaw",
    },
  ]);

  assert.equal(ledger.commands.length, 2);
  assert.deepEqual(
    ledger.commands.map((entry) => entry.idempotency_key),
    [
      "comment-router:openclaw/openclaw:74075:123:2026-04-29T01:00:00Z:automerge",
      "comment-router:openclaw/openclaw:74075:123:2026-04-29T01:00:00Z:automerge:legacy-automerge-bridge-v1",
    ],
  );
});
