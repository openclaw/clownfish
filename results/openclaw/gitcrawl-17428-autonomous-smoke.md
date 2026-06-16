---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17428-autonomous-smoke"
mode: "autonomous"
run_id: "27598134830"
workflow_run_id: "27598134830"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598134830"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:19:29.396Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17428-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598134830](https://github.com/openclaw/clownfish/actions/runs/27598134830)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutation is safe for this cluster. The hydrated live state materially contradicts the job inventory: the supposed open missing-undici candidates #23, #33, and #51 are all closed and have different titles/scopes. Current target main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 already lists undici 8.3.0 in package.json and pnpm-lock.yaml, but the stale ref mismatch prevents choosing a hydrated canonical issue/PR or closing anything.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| cluster:gitcrawl-17428-autonomous-smoke | needs_human | blocked | needs_human | Canonical choice is unclear because the live hydrated refs do not match the gitcrawl cluster inventory; a maintainer or refreshed planner must rebuild the cluster from current GitHub state before any close, merge, or fix action. |
| #23 | keep_closed | skipped |  | Already closed and materially different from the job inventory. |
| #24 | keep_closed | skipped |  | Already closed context item. |
| #25 | keep_closed | skipped |  | Already closed context item. |
| #33 | keep_closed | skipped |  | Already closed and materially different from the job inventory. |
| #46 | keep_closed | skipped |  | Already closed context item. |
| #47 | keep_closed | skipped |  | Already closed context item. |
| #51 | keep_closed | skipped |  | Already closed and materially different from the job inventory. |
| #57 | keep_closed | skipped |  | Already closed context item. |

## Needs Human

- Refresh or discard gitcrawl cluster 17428: live hydrated refs #23, #33, and #51 do not match the missing-undici open-candidate inventory, so no hydrated canonical issue/PR can be selected for closure, merge, or fix planning.
