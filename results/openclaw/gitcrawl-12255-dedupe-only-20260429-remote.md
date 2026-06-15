---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12255-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109660396"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109660396"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.713Z"
canonical: "https://github.com/openclaw/openclaw/pull/65894"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/65894"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-12255-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109660396](https://github.com/openclaw/clownfish/actions/runs/25109660396)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/65894

## Summary

Hydrated preflight shows the local-store open candidates are now closed. #65894 is the canonical path because it was merged via pinned squash merge as e2b825eba4e224ad694944be3e16581614734f14. #52261 and #53459 are independent closed docker-compose PRs, and #68702/#68684 are a separate Docker local-provider family already closed/fixed on main. No GitHub mutation is planned.

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
| #65894 | keep_closed | skipped | canonical | Canonical representative is no longer open; it already landed, so the only valid action is to keep the closed canonical as historical evidence. |
| #52261 | keep_closed | skipped | independent | Already closed and not the same root cause or user-visible failure as #65894; no close/comment/label action is valid. |
| #53459 | keep_closed | skipped | independent | Already closed and independent from the canonical local image build-context fix; no mutation is planned. |
| #68702 | keep_closed | skipped | superseded | Closed context PR was already superseded by a separate landed fix path; no close action may be emitted for an already-closed PR. |
| #68684 | keep_closed | skipped | fixed_by_candidate | Linked issue is already closed as fixed on main by a non-hydrated commit, so candidate_fix is left null and no mutation is planned. |

## Needs Human

- none
