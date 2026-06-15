---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238901-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108049800"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108049800"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.686Z"
canonical: "https://github.com/openclaw/openclaw/pull/73453"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49317"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73453"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238901-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108049800](https://github.com/openclaw/clownfish/actions/runs/25108049800)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73453

## Summary

Canonical issue #49317 is already closed after merged PR #73453. The only open cluster target, #62837, is covered by that merged WhatsApp group @mention fix and can be closed as fixed by candidate. Closed refs are kept as historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62837 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49317 | keep_closed | skipped | canonical | Already closed in live preflight state; no close/comment mutation should be emitted for this target. |
| #57109 | keep_closed | skipped | related | Already closed in live preflight state; closed context refs must not receive close actions. |
| #62837 | close_fixed_by_candidate | planned | fixed_by_candidate |  |
| #73453 | keep_closed | skipped | canonical | Merged PR is the canonical fix path; no merge or close mutation is allowed or needed. |

## Needs Human

- none
