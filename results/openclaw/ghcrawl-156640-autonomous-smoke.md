---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156640-autonomous-smoke"
mode: "autonomous"
run_id: "25033398499"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25033398499"
head_sha: "8facaf4d62a54b2dc9151b96cf6fc16e62caecb0"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T04:22:38.849Z"
canonical: "https://github.com/openclaw/openclaw/pull/73229"
canonical_issue: "https://github.com/openclaw/openclaw/issues/9795"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73229"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 2
needs_human_count: 0
---

# ghcrawl-156640-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25033398499](https://github.com/openclaw/clownfish/actions/runs/25033398499)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73229

## Summary

Hydrated state splits this cluster into two subfamilies. The sanitizer anchoring work is now best represented by ProjectClownfish replacement PR #73229, which supersedes #61016, #68225, and #68456 but is not merge-ready because the artifact reports mergeable=false/dirty and no Codex /review preflight. The legacy Word/OLE binary-MIME work is related but separate; #54380 remains the best open path for #54176, while #44068 is superseded by that path but should not close until the legacy-doc fix lands or is otherwise finalized.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 2 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/73229 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #44068 | close_superseded | skipped | superseded | action status is blocked |
| #61016 | close_superseded | skipped | superseded | action status is blocked |
| #73229 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #9795 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated state; retain only as historical sanitizer evidence. |
| #10257 | keep_closed | skipped | superseded | Already closed; no mutation permitted. |
| #44068 | close_superseded | blocked | superseded | Blocked by require_fix_before_close because #54380 is open and unmerged. |
| #54176 | keep_related | planned | related | Separate legacy Word/OLE subcluster; keep open until #54380 or equivalent lands. |
| #54190 | keep_closed | skipped | superseded | Already closed; no mutation permitted. |
| #54234 | keep_closed | skipped | superseded | Already closed; no mutation permitted. |
| #54380 | keep_related | planned | related | Related but independent subfamily from the sanitizer anchoring canonical. |
| #61016 | close_superseded | blocked | superseded | Blocked by canonical fix path: #73229 exists but is not merge-ready yet. |
| #68225 | keep_closed | skipped | superseded | Already closed after replacement; no mutation permitted. |
| #68456 | keep_closed | skipped | superseded | Canonical hint is obsolete because #68456 is already closed. |
| #73229 | fix_needed | planned | canonical | Repair the dirty branch, rerun validation and Codex /review, then re-evaluate for merge. |
| cluster:ghcrawl-156640-autonomous-smoke | build_fix_artifact | planned | canonical | Canonical fix path exists but needs repair before merge or closeout replay. |

## Needs Human

- none
