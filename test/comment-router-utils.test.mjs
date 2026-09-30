import assert from "node:assert/strict";
import test from "node:test";

import { appendLedger } from "../scripts/comment-router-utils.mjs";

test("appendLedger preserves per-repo single-slot scheduling across empty and stale reports", () => {
  const ledger = { commands: [] };
  const pending = { kind: "pending", at: "2026-07-12T06:02:00.000Z" };
  appendLedger(ledger, [], { ...pending, repo: "openclaw/openclaw" });
  appendLedger(ledger, [], { kind: "recent", at: "2026-07-12T06:03:00.000Z", repo: "example/other" });
  appendLedger(ledger, [], { kind: "recent", at: "2026-07-12T06:01:00.000Z", repo: "openclaw/openclaw" });
  assert.deepEqual(ledger.single_slot_selections?.["openclaw/openclaw"], pending);
  assert.equal(ledger.single_slot_selections?.["example/other"].kind, "recent");
});

test("appendLedger retains pending confirmations beyond terminal history and preserves terminal outcomes", () => {
  const pending = {
    idempotency_key: "pending", comment_id: "202", comment_version_key: "202:updated",
    repo: "openclaw/openclaw", intent: "clawsweeper_auto_merge", status: "waiting",
    pending_merge_confirmation: true, expected_head_sha: "a".repeat(40),
  };
  const ledger = { commands: [] };
  appendLedger(ledger, [pending, { idempotency_key: "ordinary-wait", status: "waiting" }]);
  assert.equal(ledger.commands.length, 1);
  assert.equal(ledger.commands[0].pending_merge_confirmation, true);
  appendLedger(ledger, Array.from({ length: 1001 }, (_, index) => ({ idempotency_key: `done-${index}`, status: "executed" })));
  assert.equal(ledger.commands.length, 1001);
  assert.equal(ledger.commands.find((entry) => entry.idempotency_key === "pending").status, "waiting");
  appendLedger(ledger, [{ ...pending, status: "executed" }]);
  appendLedger(ledger, [pending]);
  assert.equal(ledger.commands.find((entry) => entry.idempotency_key === "pending").status, "executed");
  const unknownLedger = { commands: [{ ...pending, status: "unknown" }] };
  appendLedger(unknownLedger, [pending]);
  assert.equal(unknownLedger.commands[0].status, "unknown");
});

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

test("appendLedger never downgrades an executed command to skipped", () => {
  const idempotencyKey = "comment-router:openclaw/openclaw:2:202:2026-07-12T00:02:00Z:automerge";
  const ledger = {
    updated_at: null,
    commands: [
      {
        idempotency_key: idempotencyKey,
        comment_id: "202",
        comment_version_key: "202:2026-07-12T00:02:00Z",
        status: "executed",
        intent: "automerge",
        issue_number: 2,
        repo: "openclaw/openclaw",
      },
    ],
  };

  appendLedger(ledger, [
    {
      idempotency_key: idempotencyKey,
      comment_id: "202",
      comment_version_key: "202:2026-07-12T00:02:00Z",
      status: "skipped",
      intent: "automerge",
      issue_number: 2,
      repo: "openclaw/openclaw",
    },
  ]);

  assert.equal(ledger.commands.length, 1);
  assert.equal(ledger.commands[0].status, "executed");
});

test("appendLedger retains unknown timeout outcomes without claiming execution", () => {
  const ledger = { commands: [] };
  appendLedger(ledger, [{
    idempotency_key: "timeout-1", comment_id: "1", comment_version_key: "1:updated",
    status: "unknown", reason: "dispatch timed out; verify remote outcome",
  }]);
  assert.equal(ledger.commands.length, 1);
  assert.equal(ledger.commands[0].status, "unknown");
  assert.match(ledger.commands[0].reason, /verify remote outcome/);
  appendLedger(ledger, [{
    idempotency_key: "timeout-1", comment_id: "1", comment_version_key: "1:updated",
    status: "skipped", reason: "comment version already processed",
  }]);
  assert.equal(ledger.commands[0].status, "unknown");
  assert.match(ledger.commands[0].reason, /verify remote outcome/);
});
