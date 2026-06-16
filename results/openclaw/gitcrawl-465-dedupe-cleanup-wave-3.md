---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-465-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221594"
workflow_run_id: "27610221594"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221594"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.444Z"
canonical: "https://github.com/openclaw/openclaw/issues/57858"
canonical_issue: "https://github.com/openclaw/openclaw/issues/57858"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87702"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-465-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221594](https://github.com/openclaw/clownfish/actions/runs/27610221594)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/57858

## Summary

Classified the live cluster without mutations. #57858 remains the canonical open issue because current main still contains the direct Claude Code launch recipe and the backend clear-env list still omits CLAUDECODE and CLAUDE_CODE_SESSION_ID. #87702 is the hydrated narrow candidate fix but is an existing-overlap context PR and this job cannot merge or raise fixes. #75777 is related watchdog/operator guidance with a failing proof check, not a duplicate or close target.

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
| #57858 | keep_canonical | planned | canonical | Keep #57858 open as the canonical issue until the hydrated fix PR or another maintainer-approved fix lands on main. |
| #75777 | keep_related | planned | related | Keep open as related follow-up/operator-guidance work; it is not a true duplicate and should not be closed by this cluster. |
| #87702 | keep_related | planned | fixed_by_candidate | Keep #87702 associated as the hydrated candidate fix for #57858, but do not plan merge or repair because this job forbids merge, fix, and raise_pr and #87702 is an excluded overlap context ref. |

## Needs Human

- none
