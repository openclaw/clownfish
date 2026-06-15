---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2569-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134024518"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134024518"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.988Z"
canonical: "https://github.com/openclaw/openclaw/pull/63644"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63644"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2569-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134024518](https://github.com/openclaw/clownfish/actions/runs/25134024518)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63644

## Summary

#63644 remains the canonical open PR for the broader iPhone Safari chat viewport/global-scrollbar work. #64673 is related but narrower input-font-size work tied to #64651, so it should stay open rather than be closed as a duplicate. #65188 is already closed and remains historical superseded context; #47887 is independent iOS LAN/auth work.

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
| #63644 | keep_canonical | planned | canonical | #63644 is still the best surviving canonical PR for the broader chat layout and input zoom cluster, but this run should not merge or repair it. |
| #64673 | keep_related | planned | related | #64673 overlaps the input-zoom part of #63644 but has unique narrower scope and should remain open for the #64651 font-size path. |
| #64651 | keep_related | planned | related | #64651 is the linked issue for the narrower input-font-size bug and should stay open while #64673 or an equivalent fix remains under review. |
| #65188 | keep_closed | skipped | superseded | Already-closed historical PR; included only as evidence of the superseded broader attempt. |
| #47887 | keep_independent | planned | independent | #47887 is linked historical context through #65188 but is an independent follow-up outside this UI CSS dedupe cluster. |

## Needs Human

- none
