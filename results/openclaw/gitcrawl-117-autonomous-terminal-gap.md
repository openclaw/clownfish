---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-117-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27666807987"
workflow_run_id: "27666807987"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27666807987"
head_sha: "1cfa357bb6e2e0dc9f37fd20ef7f7b69b41271f5"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-17T05:01:31.000Z"
canonical: "https://github.com/openclaw/openclaw/issues/66360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66360"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-117-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27666807987](https://github.com/openclaw/clownfish/actions/runs/27666807987)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/66360

## Summary

Classified #66360 as the live canonical issue for this cluster. Current main still has no raw active transcript JSONL size cap under session.maintenance, but the requested fix changes retention/product semantics and the hydrated issue is already marked no-new-fix-pr/needs-product-decision, so no executable autonomous fix artifact is safe without maintainer direction.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #66360 | keep_canonical | planned | canonical | Best live canonical issue for the non-security transcript growth report, but closure/merge is not applicable and autonomous fix selection is product-gated. |
| #18572 | keep_closed | skipped | related | Closed context refs are evidence only and must not receive close actions. |
| cluster:gitcrawl-117-autonomous-terminal-gap | needs_human | blocked | needs_human | Maintainer needs to choose the supported product direction for oversized active transcript JSONL files: raw cap/rotation, compaction-only, disk-budget semantics change, or documentation-only clarification. |

## Needs Human

- Maintainer decision needed for #66360: should OpenClaw add a disabled-by-default raw active transcript JSONL cap under session.maintenance, rely on agents.defaults.compaction.maxActiveTranscriptBytes plus truncateAfterCompaction, change disk-budget cleanup semantics for protected active conversations, or document raw active transcripts as intentionally uncapped?
