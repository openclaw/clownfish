---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-046"
mode: "plan"
run_id: "27549045791"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045791"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T13:28:19.688Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 20
---

# pr-inventory-needs_proof-20260615T131654-046

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045791](https://github.com/openclaw/clownfish/actions/runs/27549045791)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard. The compacted preflight artifact hydrated 20 listed PRs; those were classified conservatively with no GitHub mutations. One hydrated PR is already closed, two hydrated PRs are security-routed, one hydrated overlapping PR is planned as superseded, and the unhydrated listed PRs require a refreshed preflight artifact before classification or closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 20 |

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
| #49914 | keep_independent | planned | independent | Distinct feature PR in an inventory shard, not a dedupe target; keep open for proof/maintainer review. |
| #92079 | needs_human | blocked | needs_human | Plan mode requires hydrated live state before a close, label, comment, merge, or confident inventory classification. |
| #39245 | keep_independent | planned | independent | Distinct provider compatibility fix; not closable or mergeable in this plan shard. |
| #51683 | keep_independent | planned | independent | Small distinct agents feature/fix, but failing checks block any merge or fixed-by-candidate closeout. |
| #52365 | keep_independent | planned | independent | Potentially viable independent fix; keep open for maintainer merge workflow outside this plan-only shard. |
| #53441 | keep_independent | planned | independent | Distinct channel integration fix lacking required proof; keep open rather than close. |
| #54805 | keep_independent | planned | independent | Independent feature PR with missing proof; not a close candidate in this shard. |
| #55519 | keep_closed | skipped | independent | Already closed in live preflight state. |
| #55723 | keep_independent | planned | independent | Focused but unproven independent fix; keep open for proof. |
| #56420 | route_security | planned | security_sensitive | The PR appears to involve a security boundary and spoofing claim; route only this item to central security handling. |
| #88997 | keep_independent | planned | independent | Distinct Discord CLI routing fix; failing checks block merge or closeout. |
| #89127 | keep_independent | planned | independent | Broad draft feature PR; keep independent for author/maintainer follow-up. |
| #89156 | keep_independent | planned | independent | Focused independent Feishu fix still needs proof. |
| #89419 | keep_independent | planned | independent | Best hydrated path for the explicit main route-binding fix, but merge is blocked in this plan-only job. |
| #89422 | keep_independent | planned | independent | Small independent fix with proof; keep open because merge is blocked by job frontmatter and merge preflight is absent. |
| #89490 | close_superseded | planned | superseded | Hydrated evidence shows #89490 is the weaker duplicate/superseded implementation of the same route-binding fix. |
| #89526 | keep_independent | planned | independent | Independent candidate fix with proof; merge/fix actions are not allowed in this job. |
| #89538 | keep_independent | planned | independent | Independent fix with mixed surface and failing proof; keep open for narrowing/proof. |
| #89580 | keep_independent | planned | independent | Draft low-risk perf PR but not eligible for closeout or merge in this shard. |
| #89590 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89636 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89637 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89690 | needs_human | blocked | needs_human | Missing hydrated live state prevents even a conservative close/keep decision from this run. |
| #89694 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #93246 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89695 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89696 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89702 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89719 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #93247 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89754 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #52236 | keep_independent | planned | independent | Draft independent Mattermost fix with unresolved proof/review blockers; keep open. |
| #89768 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89772 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #92086 | needs_human | blocked | needs_human | The title and scope are security-boundary-shaped, but the item lacks hydrated live state; route/keep decision needs refreshed preflight. |
| #89491 | route_security | planned | security_sensitive | The PR appears to involve auth/OAuth and SSRF-policy handling; route only this item to central security handling. |
| #89645 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #89796 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #93241 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |
| #93244 | needs_human | blocked | needs_human | Missing hydrated live state prevents safe plan-mode classification. |

## Needs Human

- #92079 missing from compacted preflight artifact; no target_updated_at available.
- #89590 missing from compacted preflight artifact; no target_updated_at available.
- #89636 missing from compacted preflight artifact; no target_updated_at available.
- #89637 missing from compacted preflight artifact; no target_updated_at available.
- #89690 missing from compacted preflight artifact; no target_updated_at available.
- #89694 missing from compacted preflight artifact; no target_updated_at available.
- #93246 missing from compacted preflight artifact; no target_updated_at available.
- #89695 missing from compacted preflight artifact; no target_updated_at available.
- #89696 missing from compacted preflight artifact; no target_updated_at available.
- #89702 missing from compacted preflight artifact; no target_updated_at available.
- #89719 missing from compacted preflight artifact; no target_updated_at available.
- #93247 missing from compacted preflight artifact; no target_updated_at available.
- #89754 missing from compacted preflight artifact; no target_updated_at available.
- #89768 missing from compacted preflight artifact; no target_updated_at available.
- #89772 missing from compacted preflight artifact; no target_updated_at available.
- #92086 missing from compacted preflight artifact and appears security-boundary-shaped; refreshed preflight/security routing decision required.
- #89645 missing from compacted preflight artifact; no target_updated_at available.
- #89796 missing from compacted preflight artifact; no target_updated_at available.
- #93241 missing from compacted preflight artifact; no target_updated_at available.
- #93244 missing from compacted preflight artifact; no target_updated_at available.
