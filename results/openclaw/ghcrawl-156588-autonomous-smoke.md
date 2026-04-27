---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24987815914"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987815914"
head_sha: "f677d095c70e025afb42e22cf29ae7b90caccf9c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:46:05.321Z"
canonical: "https://github.com/openclaw/openclaw/pull/72619"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72619"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987815914](https://github.com/openclaw/clownfish/actions/runs/24987815914)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72619

## Summary

Hydrated state shows the original representative #50970 is obsolete and already closed. The nodes-list/status family is now fixed by merged PR #72619 against open canonical issue #46871, so the remaining open nodes PR #51051 can be closed as superseded and #46871 can be closed as fixed. The /model WebUI/TUI PRs are related but separate subclusters with unresolved review concerns, so they remain open. No security-sensitive items were detected; #72619 had an explicit false-positive security override and merged with passing checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |
| #51051 | close_superseded | blocked | superseded | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72619 | keep_canonical | planned | canonical | #72619 is the landed canonical fix for the nodes-list/status family. |
| #46871 | close_fixed_by_candidate | planned | fixed_by_candidate | The canonical fix has landed, so require_fix_before_close no longer blocks closeout. |
| #51051 | close_superseded | planned | superseded | The open PR is superseded by an already-merged, narrower canonical fix. |
| #46895 | keep_related | planned | related | Related /model WebUI subcluster; not safe to close or merge in the nodes-list cluster. |
| #47069 | keep_related | planned | related | Related /model WebUI subcluster with unresolved review concerns; keep open for a separate decision path. |
| #46894 | keep_related | planned | related | Related but separate /model WebUI issue family; no closure action in this nodes-list cluster. |
| #51270 | keep_related | planned | related | Related /model TUI subcluster; keep open for separate repair/merge triage. |
| #49989 | keep_independent | planned | independent | Hydrated linked issue is unrelated to this cluster's canonical families. |
| #50871 | keep_closed | skipped | superseded | Historical closed PR evidence only. |
| #50970 | keep_closed | skipped | superseded | Historical closed PR evidence only; no mutation. |
| #51027 | keep_closed | skipped | superseded | Historical closed mixed-scope PR evidence only. |
| #51053 | keep_closed | skipped | superseded | Historical closed PR evidence only. |
| #51536 | keep_closed | skipped | fixed_by_candidate | Historical closed WebChat context PR; independent from the nodes-list canonical family. |
| #65772 | keep_closed | skipped | superseded | Historical source PR superseded by the landed ProjectClownfish repair. |

## Needs Human

- none
