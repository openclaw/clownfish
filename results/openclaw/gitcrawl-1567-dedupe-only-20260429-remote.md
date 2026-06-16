---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1567-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27586018484"
workflow_run_id: "27586018484"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586018484"
head_sha: "e3eb8644e505a7248576d80431c73eb422cab7c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:42:48.797Z"
canonical: "https://github.com/openclaw/openclaw/issues/56699"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56699"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1567-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586018484](https://github.com/openclaw/clownfish/actions/runs/27586018484)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56699

## Summary

Autonomous close-only pass found no open non-security candidate left to close or merge. The obsolete representative #64650 and all non-security seed candidates are already closed; #6457 and #49980 are already merged, while #64650 was closed unmerged and remains historical evidence only. The only open hydrated ref is security-sensitive issue #56699, so it is routed to central OpenClaw security handling without poisoning the unrelated closed non-security items.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #6457 | keep_closed | skipped | fixed_by_candidate | Already closed and merged; no mutation is valid. |
| #49980 | keep_closed | skipped | fixed_by_candidate | Already closed and merged; no mutation is valid. |
| #56741 | route_security | planned | security_sensitive | Security-sensitive PR must be quarantined to central OpenClaw security handling; closed state prevents any cleanup mutation. |
| #64609 | keep_closed | skipped | related | Already closed; no close/comment mutation is valid. |
| #64650 | keep_closed | skipped | related | Obsolete closed representative; no open canonical PR replaces it in the non-security prompt-fallback subfamily. |
| #56699 | route_security | planned | security_sensitive | Open security-sensitive issue must be routed to central OpenClaw security handling, not handled by ProjectClownfish backlog cleanup. |

## Needs Human

- none
