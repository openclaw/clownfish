---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-25-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133522188"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133522188"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.982Z"
canonical: "https://github.com/openclaw/openclaw/issues/49381"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49381"
canonical_pr: "https://github.com/openclaw/openclaw/pull/59771"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-25-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133522188](https://github.com/openclaw/clownfish/actions/runs/25133522188)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49381

## Summary

Hydrated state shows no security-sensitive refs and no high-confidence close target among the open candidates. The old representative #38894 is closed; the remaining live canonical path is the open failover duplicate-final issue #49381 with candidate PR #59771, while #71523/#71542 are landed historical evidence for the earlier streaming-card duplicate family. No close, merge, or fix PR action is planned because the open PRs either track distinct work or have unresolved review/check blockers.

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
| #49381 | keep_canonical | planned | canonical | #49381 is the clearest live canonical issue for the remaining unfixed duplicate-final subcase; keep it open. |
| #59771 | keep_canonical | planned | canonical | Keep #59771 as the open canonical PR candidate for #49381, but do not merge or close against it in this dedupe-only job. |
| #31172 | keep_related | planned | related | Keep open as related but not duplicate; no safe close action. |
| #56435 | keep_related | planned | related | Keep open as related but distinct feature/bug work; draft status, broad diff, and unresolved review findings block close or merge. |
| #54899 | keep_related | planned | related | Keep as related surface area; it is not a duplicate close candidate for this cluster. |
| #44077 | keep_independent | planned | independent | Keep independent and outside this cluster's cleanup scope. |

## Needs Human

- none
