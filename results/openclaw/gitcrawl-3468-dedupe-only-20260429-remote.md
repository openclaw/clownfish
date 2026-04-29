---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3468-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135578222"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135578222"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:50:57.612Z"
canonical: "https://github.com/openclaw/openclaw/pull/63497"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63476"
canonical_pr: "https://github.com/openclaw/openclaw/pull/63497"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3468-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135578222](https://github.com/openclaw/clownfish/actions/runs/25135578222)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63497

## Summary

Hydrated #67723 is closed and obsolete as the representative. The clear active canonical path is #63497 for the #63476 image-tool media://inbound subfamily; #48958, #62514/#63710, and #74123/#74186 are separate related subfamilies. No close/comment/label mutation is high-confidence. #63710 and #74186 are routed to central security handling because their hydrated review comments raise SSRF or workspace-boundary issues.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #43106 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #43488 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #67723 | keep_closed | skipped | superseded | Closed representative is obsolete; do not target it for closure or merge. |
| #69577 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #63497 | keep_canonical | planned | canonical | Best active canonical for the image-tool media://inbound subfamily, but not merge-ready and this job is dedupe-only. |
| #63476 | keep_related | planned | fixed_by_candidate | Keep open until the active candidate PR lands or an equivalent fix is validated. |
| #48958 | keep_related | planned | related | Useful but separate subfamily; not a duplicate and not closeable. |
| #62514 | keep_related | planned | related | Keep open as a related but distinct product/bug subfamily. |
| #63710 | route_security | planned | security_sensitive | Security-shaped SSRF-policy finding belongs in central OpenClaw security handling; quarantine only this PR. |
| #74123 | keep_related | planned | related | Keep open as a separate sandbox media resolver subfamily. |
| #74186 | route_security | planned | security_sensitive | Sandbox/workspace-boundary review findings are security-sensitive; route this PR to central OpenClaw security handling. |

## Needs Human

- none
