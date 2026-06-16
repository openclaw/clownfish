---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-254-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384726"
workflow_run_id: "27609384726"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384726"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.135Z"
canonical: "https://github.com/openclaw/openclaw/issues/90548"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90548"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-254-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384726](https://github.com/openclaw/clownfish/actions/runs/27609384726)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90548

## Summary

No mutating action is safe for this cluster. #90548 remains the best live canonical issue for the broader macOS per-port lsof port-health problem. #75767 is related but not a high-confidence duplicate because it preserves unique SMB-mounted-volume stat() timeout evidence and restart/force-path detail. #90622 is a related partial mitigation PR kept as excluded overlap context, not a merge or close target for this job.

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
| #90548 | keep_canonical | planned | canonical | Best surviving canonical for the broader macOS lsof port-health polling family. |
| #75767 | keep_related | planned | related | Related to #90548 but not a true duplicate; keep open to preserve the SMB stat() timeout reproduction path. |
| #76352 | keep_independent | planned | independent | Different OS, symptom, and fix path from the macOS lsof polling cluster. |
| #90622 | keep_related | skipped | related | Related partial mitigation for #90548, but excluded from actionable refs and not merge/fix eligible in this job. |
| #14083 | keep_closed | skipped | independent | Already closed and about a Linux fallback path, not an actionable macOS lsof polling target. |

## Needs Human

- none
