---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1468-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130275993"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130275993"
head_sha: "d8402244adeff9d7d53d01dc45e960e2851caca3"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.854Z"
canonical: "https://github.com/openclaw/openclaw/pull/70479"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70330"
canonical_pr: "https://github.com/openclaw/openclaw/pull/70479"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1468-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130275993](https://github.com/openclaw/clownfish/actions/runs/25130275993)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/70479

## Summary

Classified the live open items into related subfamilies. #70479 is the canonical PR candidate for the compaction/orphaned WebChat session path tracked by #70472, #70330 remains the canonical open issue for restart/reconnect-driven silent rotation, and no high-confidence close action is safe. The only unresolved maintainer decision is how to handle #68575 because it overlaps the same reset/overflow surface but has an unresolved P1 Codex review finding and conflicts with #70479's preserve-session direction.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #67619 | keep_closed | skipped | superseded | Closed representative is obsolete for live cleanup; keep it as historical evidence only. |
| #40125 | keep_related | planned | related | Related follow-up enhancement with distinct scope; keep open rather than deduping into the WebChat rotation bug. |
| #59839 | keep_related | planned | related | Same WebChat session-continuity family, but the explicit New session trigger is not a true duplicate of #70330 or #70472. |
| #68494 | keep_related | planned | related | Related but not duplicate: #68494 has Telegram-specific transport and recovery evidence, and its candidate PR #68575 is still unresolved. |
| #68575 | needs_human | blocked | needs_human | Maintainer judgment is needed on whether #68575 should be repaired as a Telegram-specific overflow-reset PR, superseded by #70479's preserve-session strategy, or replaced by a narrower follow-up. |
| #70330 | keep_canonical | planned | canonical | Keep as the canonical open issue for restart/reconnect silent-rotation provenance; no hydrated fix PR currently owns this exact scope. |
| #70472 | keep_related | planned | fixed_by_candidate | Keep open while #70479 remains unmerged; do not close as fixed before the candidate lands or is otherwise resolved. |
| #70479 | keep_canonical | planned | canonical | Canonical contributor PR for the #70472 compaction-failure WebChat orphaning path; keep open for maintainer review/landing rather than closing related issues now. |

## Needs Human

- #68575 needs maintainer direction because it expands automatic session reset on the same overflow surface where #70479 preserves session mapping, and it has an unresolved P1 Codex review finding about mixed fallback failures causing avoidable session loss.
