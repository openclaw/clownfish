---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-254-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220247"
workflow_run_id: "27610220247"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220247"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.416Z"
canonical: "https://github.com/openclaw/openclaw/issues/90548"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90548"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-254-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220247](https://github.com/openclaw/clownfish/actions/runs/27610220247)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90548

## Summary

Hydrated preflight supports non-mutating classification only. #90548 remains the best open canonical issue for the macOS lsof port-health saturation family. #75767 is related but not a safe duplicate because it has distinct SMB-mounted-volume restart/force reproduction. #76352 is independent Linux missing-lsof warning work. #90622 is a related partial mitigation PR and context only for this job; merge, fix, and PR creation are blocked by frontmatter.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #90548 | keep_canonical | planned | canonical | Best surviving canonical issue for the cluster; keep open for validation and follow-up rather than closing related reports into an incomplete fix path. |
| #75767 | keep_related | planned | related | Related macOS lsof failure family, but not a high-confidence duplicate because it carries distinct SMB-mounted-volume reproduction and restart/force behavior that #90622 does not close. |
| #76352 | keep_independent | planned | independent | Distinct Linux missing-binary warning work; do not close or fold into the macOS availability cluster. |
| #90622 | keep_related | planned | related | Related partial mitigation PR for #90548, kept as context only because this job cannot merge or repair it and it does not fully resolve the canonical issue. |

## Needs Human

- none
