---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13669-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109746645"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109746645"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.748Z"
canonical: "https://github.com/openclaw/openclaw/pull/72619"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72619"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13669-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109746645](https://github.com/openclaw/clownfish/actions/runs/25109746645)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72619

## Summary

Hydrated preflight shows the job's only listed open candidate, #51051, is already closed. The obsolete representative #50871 and the related contributor PRs are historical context only. The canonical path is the already-merged replacement PR #72619 for the nodes list/status mismatch tracked by #46871. No close, merge, fix, label, or comment mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #46871 | keep_closed | skipped | fixed_by_candidate | Already closed by maintainer after the merged canonical fix; closed refs are evidence only. |
| #49989 | keep_independent | planned | independent | Unrelated first-hop linked issue; leave open and out of this cluster. |
| #50847 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate/superseded context; no mutation is valid. |
| #50871 | keep_closed | skipped | superseded | Obsolete closed representative; canonical has moved to merged PR #72619. |
| #50970 | keep_closed | skipped | superseded | Already closed superseded contributor PR; no further action. |
| #51051 | keep_closed | skipped | superseded | The only job-listed open candidate is now closed and superseded by merged PR #72619. |
| #51053 | keep_closed | skipped | superseded | Already closed superseded PR; retain as historical credit/evidence only. |
| #65706 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate/superseded issue; no mutation is valid. |
| #65772 | keep_closed | skipped | superseded | Already closed source contributor PR superseded by replacement PR #72619. |
| #72619 | keep_closed | skipped | canonical | Already-merged canonical fix; no merge or post-merge closeout is allowed by this job. |

## Needs Human

- none
