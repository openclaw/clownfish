---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-164-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384218"
workflow_run_id: "27609384218"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384218"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.994Z"
canonical: "https://github.com/openclaw/openclaw/issues/87352"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87352"
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

# gitcrawl-164-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384218](https://github.com/openclaw/clownfish/actions/runs/27609384218)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/87352

## Summary

Hydrated state shows #87352 is still the open canonical issue. #87504 is a linked open PR with a security-signal marker and must be quarantined with exact-ref route_security rather than classified as canonical in this ProjectClownfish cleanup result. No close, merge, or fix action is safe or allowed in this job: the issue should remain open, the security-signaled PR should route to central OpenClaw security handling, and merge/fix/post-merge close are disabled by frontmatter.

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
| #87352 | keep_canonical | planned | canonical | Keep #87352 open as the canonical tracking issue while the linked security-signaled PR is handled through central OpenClaw security triage. |
| #87504 | route_security | planned | security_sensitive | Quarantine the exact security-signaled PR to central OpenClaw security handling instead of treating it as a canonical cleanup target. |

## Needs Human

- none
