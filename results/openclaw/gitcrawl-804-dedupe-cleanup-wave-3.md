---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-804-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223528"
workflow_run_id: "27610223528"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223528"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.469Z"
canonical: "https://github.com/openclaw/openclaw/issues/77610"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77610"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-804-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223528](https://github.com/openclaw/clownfish/actions/runs/27610223528)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77610

## Summary

No GitHub mutations are planned. #77610 remains the open canonical issue for the low-FD repeated macOS exec spawn EBADF report. #77750 is related but not a duplicate because it reports a high file-descriptor/service-managed stdin failure path with remaining supervisor hardening scope. The linked PR #77751 is already closed and unmerged, so it is historical evidence only.

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
| #77610 | keep_canonical | planned | canonical | Representative #77610 is still open, hydrated, non-security, and remains the best canonical thread for the low-FD repeated-spawn macOS failure. |
| #77750 | keep_related | planned | related | #77750 is in the same EBADF symptom family but has a different reported root cause and remaining scope, so it should remain open as related rather than be closed as a duplicate of #77610. |
| #77751 | keep_closed | skipped | related | The linked fix PR is already closed and unmerged, so it is historical context for #77750 rather than a live candidate fix. |

## Needs Human

- none
