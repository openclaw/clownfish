---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-254-fresh-plan-ramp"
mode: "plan"
run_id: "27659257780-1-17"
workflow_run_id: "27659257780"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27659257780"
head_sha: "d478a8869dca49e522a4036503c0f850a3b41509"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T01:50:03.805Z"
canonical: "#90548"
canonical_issue: "#90548"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-254-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27659257780](https://github.com/openclaw/clownfish/actions/runs/27659257780)

Workflow conclusion: success

Worker result: planned

Canonical: #90548

## Summary

Plan-only classification: #90548 remains the live canonical for the macOS per-port lsof polling / launchservicesd saturation report. #75767 is related but should not be closed as a duplicate because it carries a distinct SMB-mounted-volume lsof stat timeout / gateway restart hang reproduction path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #90548 | keep_canonical | planned | canonical | #90548 is open and is the clearest canonical issue for the cluster's displayed root cause: macOS per-port lsof health polling causing launchservicesd saturation and watchdog reboot. |
| #75767 | keep_related | planned | related | #75767 shares the macOS lsof port-inspection area with #90548, but its SMB-mounted-volume stat timeout and gateway restart hang details are meaningfully distinct from #90548's launchservicesd saturation / watchdog reboot report. |

## Needs Human

- none
