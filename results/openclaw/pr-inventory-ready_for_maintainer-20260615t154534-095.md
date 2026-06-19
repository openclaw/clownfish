---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-095"
mode: "plan"
run_id: "27560323972-1-97"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T00:25:26.623Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 7
---

# pr-inventory-ready_for_maintainer-20260615T154534-095

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No GitHub mutations, merges, or fix PRs are planned. The shard is not a dedupe cluster, so no shared canonical is selected; hydrated PRs are classified independently, and PRs absent from the preflight artifact are escalated only for missing live state.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 7 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80929 | keep_independent | planned | independent | Small focused PR with passing checks, but merge is blocked by job frontmatter and no shared canonical exists. |
| #80957 | keep_independent | planned | independent | Independent PR with passing checks, but waiting-on-author state should remain with maintainers/authors. |
| #80965 | keep_independent | planned | independent | Independent PR, but failing proof checks and waiting-on-author state block merge or closeout. |
| #80985 | keep_independent | planned | independent | Focused independent PR with passing checks, but merge/fix actions are blocked. |
| #81008 | needs_human | planned | needs_human | Broad cross-area feature/cleanup PR needs maintainer judgment; this shard should not close, merge, or split it. |
| #81019 | keep_independent | planned | independent | Independent PR with proof, but waiting-on-author state and larger compatibility/auth-provider surface block merge planning. |
| #81047 | keep_independent | planned | independent | Focused independent PR, but waiting-on-author state blocks merge planning. |
| #81053 | keep_independent | planned | independent | Independent feature PR with successful checks, but waiting-on-author state blocks merge planning. |
| #81157 | keep_independent | planned | independent | Independent bugfix PR, but failing proof check blocks merge or fixed-by-candidate outcomes. |
| #81184 | keep_independent | planned | independent | Independent PR, but failing core check and waiting-on-author state block merge or closeout. |
| #81190 | keep_independent | planned | independent | Focused independent PR with passing checks, but job blocks merge. |
| #92900 | needs_human | planned | needs_human | Missing hydrated live state for a listed primary candidate. |
| #90227 | needs_human | planned | needs_human | Missing hydrated live state for a listed primary candidate. |
| #90234 | needs_human | planned | needs_human | Missing hydrated live state for a listed primary candidate. |
| #90266 | needs_human | planned | needs_human | Missing hydrated live state for a listed primary candidate. |
| #80632 | keep_independent | planned | independent | Independent PR with passing checks, but waiting-on-author state blocks merge planning. |
| #92892 | needs_human | planned | needs_human | Missing hydrated live state for a listed primary candidate. |
| #77784 | needs_human | planned | needs_human | Broad auth-related contributor PR with unresolved/unhydrated review-bot history needs maintainer judgment. |
| #79747 | keep_independent | planned | independent | Independent feature PR with passing checks, but broad UI/session behavior and waiting-on-author state should remain for maintainer review. |
| #79882 | keep_independent | planned | independent | Independent PR with passing checks, but runtime-scope behavior and waiting-on-author state keep it in maintainer review. |
| #80033 | keep_independent | planned | independent | Draft independent PR with failing proof check; no closure or merge action should be planned. |
| #81158 | keep_independent | planned | independent | Focused independent PR with passing checks, but merge/fix actions are blocked. |
| #81243 | keep_independent | planned | independent | Independent feature PR with passing checks; absent hydrated review-thread details block merge recommendation. |
| #89635 | keep_independent | planned | independent | Under the provided security posture this is hardening/bugfix work without a routed security-sensitive signal; keep as an independent PR. |
| #81300 | keep_independent | planned | independent | Independent PR, but failing proof check and waiting-on-author state block merge or closeout. |

## Needs Human

- #92900 missing hydrated live state from the compacted preflight artifact.
- #90227 missing hydrated live state from the compacted preflight artifact.
- #90234 missing hydrated live state from the compacted preflight artifact.
- #90266 missing hydrated live state from the compacted preflight artifact.
- #92892 missing hydrated live state from the compacted preflight artifact.
- #81008 broad dirty-candidate PR spans many unrelated areas and needs maintainer/product judgment.
- #77784 broad auth-related PR has unresolved/unhydrated review-bot history and needs maintainer judgment.
