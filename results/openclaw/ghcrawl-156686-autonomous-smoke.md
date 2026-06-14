---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156686-autonomous-smoke"
mode: "autonomous"
run_id: "27491294402"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27491294402"
head_sha: "92614437e428c57ed73bd7804c00fbc2db3dfa6f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T07:37:13.913Z"
canonical: "https://github.com/openclaw/openclaw/pull/63593"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63593"
actions_total: 9
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156686-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27491294402](https://github.com/openclaw/clownfish/actions/runs/27491294402)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63593

## Summary

Live hydration shows the original representative #69645 is closed. The only open candidate is #63593, a distinct update-cli downgrade-prompt bug; it is narrow and maintainer-modifiable, but not merge-ready because real-behavior proof failed, so this result plans a contributor-branch repair artifact and no direct close or merge.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #63593 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92911 | clownfish/ghcrawl-156686-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92911 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #53426 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by the merged post-self-update respawn path. |
| #58352 | keep_closed | skipped | fixed_by_candidate | Closed historical contributor PR covered by merged replacement #65471. |
| #65471 | route_security | planned | security_sensitive | Quarantine the exact security-shaped closed PR comment to central OpenClaw security handling. |
| #67702 | keep_closed | skipped | related | Closed related update-cli work with distinct git-mode gateway scope. |
| #69412 | keep_closed | skipped | canonical | Closed root issue for the stale skip/no-op package update family. |
| #69421 | keep_closed | skipped | superseded | Closed superseded PR for the stale #69412 skip/no-op design. |
| #69645 | keep_closed | skipped | superseded | Representative is obsolete and already closed; no mutation is valid. |
| #63593 | fix_needed | planned | canonical | Repair the existing contributor branch before any merge recommendation. |
| cluster:ghcrawl-156686-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the only live canonical PR. |

## Needs Human

- none
