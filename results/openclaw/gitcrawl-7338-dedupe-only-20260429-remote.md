---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7338-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136856574"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136856574"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.283Z"
canonical: "https://github.com/openclaw/openclaw/pull/61753"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50120"
canonical_pr: "https://github.com/openclaw/openclaw/pull/61753"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7338-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136856574](https://github.com/openclaw/clownfish/actions/runs/25136856574)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/61753

## Summary

Classified with no GitHub mutations. The closed scrollbar family remains covered by merged #61753/#50120. The only direct open candidate, #55850, is a related but distinct Safari collapsed-sidebar layout bug with open PR #55861, so no high-confidence close/comment/label mutation is safe in this dedupe-only run.

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
| #50120 | keep_closed | skipped | fixed_by_candidate | Representative issue is already closed; retain as historical canonical context for the scrollbar visibility family. |
| #45695 | keep_closed | skipped | fixed_by_candidate | Already closed; keep only as historical evidence for the resolved scrollbar family. |
| #61753 | keep_closed | skipped | canonical | Merged PR is the canonical fixed path for the closed scrollbar visibility reports. |
| #55850 | keep_related | planned | related | Related Control UI layout work, but not a duplicate of the resolved scrollbar visibility family; keep open until #55861 or a replacement lands. |
| #55861 | keep_related | planned | related | Useful related implementation candidate for #55850, but not merge-ready and this job blocks merge/fix actions. |
| #45649 | keep_related | planned | related | Related follow-up UI work; keep open as its own issue rather than closing in this cluster. |
| #45656 | keep_related | planned | related | Related follow-up UI work; keep open as its own issue rather than closing in this cluster. |

## Needs Human

- none
