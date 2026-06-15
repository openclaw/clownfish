---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2866-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134551514"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134551514"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:53.009Z"
canonical: "https://github.com/openclaw/openclaw/issues/75"
canonical_issue: "https://github.com/openclaw/openclaw/issues/75"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2866-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134551514](https://github.com/openclaw/clownfish/actions/runs/25134551514)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/75

## Summary

Hydrated preflight shows #44013 is security-sensitive and must be routed to central security handling. #75 remains the live umbrella canonical for Linux/Windows desktop support. #73315, #59859, and #61576 are active, broad, overlapping implementation tracks, so no high-confidence close, merge, or fix action is safe in this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #75 | keep_canonical | planned | canonical | #75 is the clearest surviving canonical issue; keep it open as the product/validation hub. |
| #44013 | route_security | planned | security_sensitive | Security-sensitive PRs are out of ProjectClownfish cleanup scope; route only #44013 and continue classifying unrelated items. |
| #59075 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #59859 | keep_related | planned | related | Useful active Linux implementation with unique scope and unresolved review; keep open and related to #75. |
| #61576 | keep_related | planned | related | Not a true duplicate; it is a useful alternative Linux implementation requiring maintainer choice, so keep it open as related. |
| #73315 | keep_related | planned | related | Active linked Tauri successor, but not a high-confidence closure or merge target in this dedupe-only job. |
| cluster:gitcrawl-2866-dedupe-only-20260429-remote | needs_human | planned | needs_human | Maintainers need to choose the canonical platform direction before any superseded closeout is safe. |

## Needs Human

- Maintainer decision needed: choose the canonical implementation direction for #75 among #73315 Tauri v2 desktop, #59859 C/GTK native Linux, and #61576 Rust/GTK alternative. #44013 is quarantined to central security handling and cannot be the cleanup canonical.
