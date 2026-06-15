---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238785-dedupe-only-20260429"
mode: "autonomous"
run_id: "25107635429"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107635429"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.620Z"
canonical: "https://github.com/openclaw/openclaw/issues/58890"
canonical_issue: "https://github.com/openclaw/openclaw/issues/58890"
canonical_pr: null
actions_total: 20
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238785-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107635429](https://github.com/openclaw/clownfish/actions/runs/25107635429)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/58890

## Summary

Classified the 20 job candidates from the hydrated preflight artifact. The original representative #57379 is now closed; #58890 is the best hydrated open canonical for the original macOS auto-update/restart-handoff family. No close/comment/label mutation is safe in this pass: 8 candidates are already closed, and the 11 other open reports have distinct remaining work rather than true duplicate coverage. No security-sensitive refs were detected.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 20 |
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
| #40207 | keep_related | planned | related | Same macOS LaunchAgent reliability area, but a distinct StandardOutPath/StandardErrorPath symlink failure; keep open. |
| #46153 | keep_related | planned | related | Distinct LaunchAgent startup hang with missing-stdin evidence; not a duplicate of #58890. |
| #53475 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #55880 | keep_related | planned | related | Related to the auto-update recovery family, but it includes distinct cron execution, notification, and service-not-installed repair scope. |
| #57052 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #57379 | keep_closed | skipped | fixed_by_candidate | Original representative is obsolete because it is already closed; keep it closed and use #58890 for the surviving open auto-update handoff family. |
| #58041 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #58306 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #58890 | keep_canonical | planned | canonical | Best surviving hydrated open canonical for the original auto-update handoff family after #57379 closed. |
| #60885 | keep_related | planned | related | Related to auto-update and LaunchAgent supervision, but has unique ThrottleInterval/ExitTimeOut and downtime scope. |
| #65971 | keep_closed | skipped | independent | Already closed and the Feishu message-processing failure is independent of the macOS LaunchAgent auto-update/restart cluster. |
| #66390 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #66436 | keep_related | planned | related | Distinct missing-config crash-loop/log-storm case; keep open. |
| #67335 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #71060 | keep_related | planned | related | Related to LaunchAgent lifecycle repair, but not covered by #72616 or #58890; keep open. |
| #72948 | keep_related | planned | related | Distinct foreground/no-service-manager stop behavior; keep open. |
| #73132 | keep_related | planned | related | Related stop-path issue with unique wedged-node-process evidence and active review signal; keep open. |
| #73303 | keep_related | planned | related | Same gateway restart area but not a true duplicate; keep open for focused triage. |
| #73520 | keep_related | planned | related | Related update crash-loop report with distinct stale plugin-runtime-deps root cause and active work signal; keep open. |
| #73673 | keep_related | planned | related | Related LaunchAgent crash-loop/debuggability issue with broader product semantics; keep open. |

## Needs Human

- none
