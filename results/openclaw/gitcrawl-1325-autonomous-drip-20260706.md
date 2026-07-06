---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1325-autonomous-drip-20260706"
mode: "autonomous"
run_id: "28785157369"
workflow_run_id: "28785157369"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28785157369"
head_sha: "ded48f35f86504bb375987a529344c4f75145558"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-07-06T10:46:50.419Z"
canonical: "https://github.com/openclaw/openclaw/issues/84623"
canonical_issue: "https://github.com/openclaw/openclaw/issues/84623"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1325-autonomous-drip-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28785157369](https://github.com/openclaw/clownfish/actions/runs/28785157369)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/84623

## Summary

Issue #84623 remains the canonical open tracker for the non-streaming dispatchReplyFromConfig duplicate-final-payload bug. Current main still iterates every replyResult entry through sendFinalPayload with no per-turn final duplicate guard. Prior PR #94294 is closed and carries a blocked merge-risk: message-delivery label, so it is retained only as non-mutating related context while the safe executable path is a new narrow fix from the canonical issue and current-main proof.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#84623",
  "source_refs": [
    "#84623",
    "#41362",
    "#79339",
    "#90943",
    "#94294",
    "#49381",
    "#76935"
  ],
  "repair_strategy": "new_fix_pr",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Add a narrow per-turn final-dispatch dedupe guard in dispatchReplyFromConfig so byte-identical non-streaming final payload entries for one turn are delivered once, while preserving intentionally distinct same-content finals that differ by delivery-visible metadata or route identity.",
  "pr_title": "fix(reply): dedupe duplicate non-streaming final replies",
  "pr_body": "## What Problem This Solves\n\nFixes #84623, where non-streaming dispatchReplyFromConfig can deliver identical final reply payload entries twice for one turn.\n\n## Why This Change Was Made\n\nCurrent main still normalizes replyResult to an array and sends each non-suppressed entry through sendFinalPayload without a per-turn duplicate-final guard. The fix belongs at the shared dispatcher choke point so channels using non-streaming final replies do not receive duplicate identical text or media payloads for one inbound message.\n\n## User Impact\n\nChannels using non-streaming final replies, including media directive delivery, should no longer send duplicate identical text or media replies for one inbound message. Intentionally distinct finals must remain deliverable when their delivery-visible identity differs.\n\n## Evidence\n\n- Current main 17777b3a9ff18e0262e55815d46c168933c82b8e still loops over every replyResult final entry in src/auto-reply/reply/dispatch-from-config.ts.\n- Add regression coverage for duplicate identical final entries and for preserved distinct same-content entries.\n- Run pnpm test src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts src/auto-reply/reply/agent-runner-payloads.test.ts.\n- Run pnpm check:changed.",
  "likely_files": [
    "src/auto-reply/reply/dispatch-from-config.ts",
    "src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts",
    "src/auto-reply/reply/agent-runner-payloads.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts src/auto-reply/reply/agent-runner-payloads.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Base the implementation on canonical issue #84623 and current-main source proof, not on blocked PR lineage.",
    "Keep the patch narrow and preserve any reporter attribution required by the PR template."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-1325-autonomous-drip-20260706.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "opened",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/100828 | clownfish/gitcrawl-1325-autonomous-drip-20260706 |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84623 | fix_needed | planned | canonical | Real bug remains on current main and no viable open canonical PR owns the exact fix. |
| #49381 | keep_related | planned | related | Same message-delivery symptom family, different channel/failover root cause and separate maintainer follow-up. |
| #79339 | keep_independent | planned | independent | Different root cause and repair surface; should not be closed or merged in this cluster. |
| #94294 | keep_related | skipped | related | Blocked-label lineage cannot be used for executable repair planning. |
| cluster:gitcrawl-1325-autonomous-drip-20260706 | build_fix_artifact | planned |  | Build a new narrow fix PR from canonical issue #84623 and current-main proof; do not use blocked PR #94294 as source lineage. |

## Needs Human

- none
