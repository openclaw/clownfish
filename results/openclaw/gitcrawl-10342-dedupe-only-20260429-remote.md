---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-10342-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109625874"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109625874"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.706Z"
canonical: "https://github.com/openclaw/openclaw/issues/56694"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56694"
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

# gitcrawl-10342-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109625874](https://github.com/openclaw/clownfish/actions/runs/25109625874)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/56694

## Summary

Representative PR #60325 is closed and should remain historical evidence. The best live canonical for the read-alias diagnostic family is open issue #56694. The display-layer issue #54882 and detailed diagnostic issue #60008 are related but not safe to close in this pass, and open PR #55121 needs maintainer judgment because it is a useful editable mixed-surface PR with failing checks while current main appears to have moved toward a canonical path-only contract. No close/comment/label mutations are planned.

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
| #56694 | keep_canonical | planned | canonical | Best live canonical issue for the read-diagnostic alias family after representative #60325 closed. |
| #54882 | keep_related | planned | related | Related alias-compatibility work with a distinct display/summary surface; keep open rather than closing as a duplicate. |
| #60008 | keep_related | planned | related | Duplicate-like but not closed because it carries unique impact detail and prior canonical signals are mixed. |
| #55121 | needs_human | blocked | needs_human | Maintainer decision required: either close #55121 as obsolete under the current path-only contract or authorize repair/review if legacy alias compatibility is still desired. |
| #60047 | keep_closed | skipped | superseded | Already closed in live state; retained only as historical evidence for #55121/#54882. |
| #60325 | keep_closed | skipped | superseded | Closed representative is obsolete; use open issue #56694 as the live canonical tracker. |
| #55806 | keep_independent | planned | independent | Independent follow-up cluster; leave open and do not route through this alias-dedupe cleanup. |

## Needs Human

- #55121 requires maintainer judgment: decide whether to close it as obsolete under the current path-only contract or authorize repair/review if legacy alias compatibility remains desired. The PR is open, maintainer_can_modify=true, mixed display+diagnostic scope, and has failing checks while this job forbids fix, raise_pr, and merge.
