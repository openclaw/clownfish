---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2379-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132989685"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132989685"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.971Z"
canonical: "https://github.com/openclaw/openclaw/pull/59964"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/59964"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2379-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132989685](https://github.com/openclaw/clownfish/actions/runs/25132989685)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/59964

## Summary

Hydrated preflight shows #41786 is already closed and should remain historical evidence only. The current open config-recovery candidate is #59964, but it is not merge-ready and this dedupe-only job cannot fix or merge it. #59280 is an independent backup-archive restore feature, not a duplicate of the config recovery family.

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
| #41786 | keep_closed | skipped | fixed_by_candidate | Closed context refs are evidence only; no mutation is valid for #41786. |
| #59964 | keep_canonical | planned | canonical | Current open canonical for the config-recovery subfamily, but no merge or fix action is permitted or safe in this dedupe-only job. |
| #59280 | keep_independent | planned | independent | Different root cause and product surface; leave #59280 open outside this cluster. |

## Needs Human

- none
