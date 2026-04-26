---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166014-agentic-merge"
mode: "autonomous"
run_id: "24962783124"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24962783124"
head_sha: "c6a011e689cd5c31e8b8008fb1626f775ad148df"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T17:44:40.589Z"
canonical: "https://github.com/openclaw/openclaw/issues/54155"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54155"
canonical_pr: null
actions_total: 11
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-166014-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24962783124](https://github.com/openclaw/projectclownfish/actions/runs/24962783124)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/54155

## Summary

Classified the hydrated cluster without GitHub mutations. #54155 remains the best open canonical broad Gateway memory-growth tracker. #45718, #51977, and #55334 are clear duplicates/subreports of the same session-store/skillsSnapshot/systemPromptReport accumulation family, but duplicate closeout is blocked by require_fix_before_close until a canonical fix PR exists. Already-closed refs were kept closed only. No security-sensitive items were detected. A narrow new fix artifact is needed because no viable open canonical PR exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45718 | close_duplicate | skipped | duplicate | action status is blocked |
| #51977 | close_duplicate | skipped | duplicate | action status is blocked |
| #55334 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54155 | keep_canonical | planned | canonical | Best surviving open canonical issue for the broad Gateway memory growth and session accumulation family. |
| #45718 | close_duplicate | blocked | duplicate | True duplicate/subreport of #54155, but close is blocked on the canonical fix path or fix PR. |
| #51977 | close_duplicate | blocked | duplicate | True duplicate/subreport of #54155, but close is blocked on the canonical fix path or fix PR. |
| #55334 | close_duplicate | blocked | duplicate | True duplicate/subreport of #54155, but close is blocked on the canonical fix path or fix PR. |
| #57699 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #62717 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #66886 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #69977 | keep_closed | skipped | related | Already closed refs must not receive close actions; evidence is related but narrower than the canonical #54155 family. |
| #70717 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| cluster:ghcrawl-166014-agentic-merge | fix_needed | planned |  | A new narrow fix path is needed before duplicate closeout can proceed. |
| cluster:ghcrawl-166014-agentic-merge | build_fix_artifact | planned |  | Build a credited, auditable fix artifact for the unresolved canonical issue family. |

## Needs Human

- none
