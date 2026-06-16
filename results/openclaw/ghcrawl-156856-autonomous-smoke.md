---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156856-autonomous-smoke"
mode: "autonomous"
run_id: "27598130832"
workflow_run_id: "27598130832"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130832"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.342Z"
canonical: "https://github.com/openclaw/openclaw/pull/51596"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51596"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156856-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130832](https://github.com/openclaw/clownfish/actions/runs/27598130832)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51596

## Summary

No GitHub mutations are planned. The hydrated live state shows all three job PRs are already closed; #51596 is the merged canonical naming fix, #67153 was already closed as fixed by #51596, and #59650 was closed after a maintainer absorbed the useful advanced-features docs into main. Current target main 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the corrected skill name example and the broader skill-authoring guidance, so no replacement fix PR is needed.

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
| #51596 | keep_closed | skipped | canonical | Already closed merged canonical PR; closure and merge actions are invalid for closed refs. |
| #59650 | keep_closed | skipped | fixed_by_candidate | Already closed and separately absorbed into current main; no hydrated open target remains for close, merge, or repair. |
| #67153 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by the hydrated merged canonical PR #51596; no further action is valid. |
| #39681 | keep_closed | skipped | fixed_by_candidate | Closed linked context ref; do not emit close actions for already-closed refs. |
| #76510 | keep_closed | skipped | related | Closed related context ref; no cluster mutation is needed. |

## Needs Human

- none
