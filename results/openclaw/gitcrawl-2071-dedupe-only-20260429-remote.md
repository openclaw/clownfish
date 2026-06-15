---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2071-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131890945"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131890945"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.930Z"
canonical: "https://github.com/openclaw/openclaw/pull/73453"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49317"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73453"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2071-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131890945](https://github.com/openclaw/clownfish/actions/runs/25131890945)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73453

## Summary

Hydrated live state moved the canonical path from issue #49317 to merged PR #73453. #49317 is already closed, #73453 is merged and closed with contributor credit preserved, and the only still-open candidate #62837 is related but not a safe duplicate because it reports `mentionedJids: null` from extraction rather than the #49317/#73453 self-chat `allowFrom` normalized-LID matching failure. No GitHub mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #692 | keep_closed | skipped | related | Historical related fix; no action because the PR is already closed and merged. |
| #46010 | keep_closed | skipped | duplicate | Already-closed duplicate context for the #49317 WhatsApp group LID mention family. |
| #46457 | keep_closed | skipped | related | Related WhatsApp mention-gating edge case, but not a duplicate target and already closed. |
| #48188 | keep_closed | skipped | independent | Independent closed linked ref; no cluster action. |
| #48817 | keep_closed | skipped | independent | Independent closed linked ref; no cluster action. |
| #49317 | keep_closed | skipped | fixed_by_candidate | Canonical issue is already closed by the hydrated merged candidate fix. |
| #51804 | keep_closed | skipped | related | Related but distinct closed context issue. |
| #52667 | keep_closed | skipped | duplicate | Already-closed duplicate context for the WhatsApp group LID mention failure. |
| #57109 | keep_closed | skipped | duplicate | Already-closed duplicate context for the WhatsApp group LID mention failure. |
| #62837 | keep_related | planned | related | Not safe to close as duplicate or fixed-by-candidate because #62837 has a unique extraction-path reproduction signal and may need a separate follow-up cluster. |
| #73453 | keep_closed | skipped | canonical | Canonical fix PR has already landed; merge and post-merge actions are disabled for this job and unnecessary. |

## Needs Human

- none
