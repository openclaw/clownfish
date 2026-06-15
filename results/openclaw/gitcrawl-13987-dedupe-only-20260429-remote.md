---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13987-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109804934"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109804934"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.776Z"
canonical: "https://github.com/openclaw/openclaw/issues/63491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63491"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13987-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109804934](https://github.com/openclaw/clownfish/actions/runs/25109804934)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63491

## Summary

Representative #50169 is closed. Hydrated preflight shows no security-sensitive refs; #63491 is the best open canonical for the remaining Windows Scheduled Task restart-health/post-ready liveness family. The other open refs are related but distinct subfamilies or unready implementation candidates, so no close, merge, label, fix, or PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #63491 | keep_canonical | planned | canonical | Keep #63491 as the open canonical issue for the Windows Scheduled Task post-ready restart-health family. |
| #73889 | keep_related | planned | related | Keep #73889 open as a related implementation candidate for #63491, but do not treat it as landed or merge-ready. |
| #52487 | keep_related | planned | related | Related Windows restart race fix; keep open because it is useful but still has unresolved review evidence and merge is out of scope. |
| #63651 | keep_related | planned | related | Related but not automation-closeable or merge-ready because the diff is broad and has an unresolved P1 review finding. |
| #63561 | keep_related | planned | related | Related Linux systemd bus-env subfamily with its own canonical issue and open candidate PR. |
| #73888 | keep_related | planned | related | Keep open as the related implementation candidate for #63561; it is not merge-ready. |
| #66675 | keep_related | planned | related | Keep #66675 open as a related Linux/systemd restart false-failure subfamily. |
| #68109 | keep_related | planned | related | Keep related to #66675 rather than closing as a duplicate. |
| #66685 | keep_related | planned | related | Keep open as related partial cleanup, not as the canonical fix for the restart false-failure report. |
| #68853 | keep_related | planned | related | Keep open as a related active implementation candidate for the SIGUSR1 restart subfamily. |

## Needs Human

- none
