---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2476-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133512359"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133512359"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.978Z"
canonical: "https://github.com/openclaw/openclaw/issues/14785"
canonical_issue: "https://github.com/openclaw/openclaw/issues/14785"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2476-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133512359](https://github.com/openclaw/clownfish/actions/runs/25133512359)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/14785

## Summary

Representative #49888 is already closed. The open refs split into subfamilies: #14785 remains the canonical tool-schema/prompt-overhead tracker, #52861 and #14619 stay open as related scoped follow-ups, #53540 remains its own canonical provider/large-tool-parameter timeout tracker, and the other hydrated open refs are not close candidates for this dedupe-only cluster. No close, merge, or fix artifact is planned.

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
| #49888 | keep_closed | skipped |  | The original representative is obsolete as an open canonical and must not receive a close action. |
| #14785 | keep_canonical | planned | canonical | #14785 is the best open canonical for the tool-schema and prompt-overhead subfamily. |
| #14619 | keep_related | planned | related | Keep open as a scoped follow-up under the #14785 performance umbrella. |
| #52861 | keep_related | planned | related | Related to canonical #14785 but not a true duplicate because it carries distinct conditional-injection and workspace prompt scope. |
| #53540 | keep_canonical | planned | canonical | #53540 is a separate open canonical for the provider/runtime timeout subfamily and should not be closed under the tool-schema overhead canonical. |
| #45438 | keep_independent | planned | independent | Independent memory/auth-profile follow-up; not a duplicate close candidate in this cluster. |
| #47534 | keep_independent | planned | independent | Independent doctor/session snapshot diagnostic; keep open for its own follow-up path. |
| #59618 | keep_related | planned | related | Related context/compaction follow-up, not a high-confidence duplicate or close candidate for this dedupe-only run. |

## Needs Human

- none
