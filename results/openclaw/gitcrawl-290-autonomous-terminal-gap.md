---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27623696118"
workflow_run_id: "27623696118"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27623696118"
head_sha: "49af434b25e9ed881efb163fc22dc0077d559bf3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T14:28:55.511Z"
canonical: "https://github.com/openclaw/openclaw/issues/77344"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77344"
canonical_pr: "https://github.com/openclaw/openclaw/pull/75754"
actions_total: 4
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-290-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27623696118](https://github.com/openclaw/clownfish/actions/runs/27623696118)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77344

## Summary

Current main at ea6704319ad7960a3149be51ff84b2cb0a420b6a still runs clawdock-dashboard through `docker compose run --rm openclaw-cli dashboard --no-open`, so #77344 remains the canonical published-port bug and #77574 is a related but distinct dependency-start regression in the same helper. The open linked PR #75754 is useful and maintainer-editable, but it is not merge-ready because its proof check failed, mergeability is unknown, and the bot review requires removing the direct CHANGELOG.md edit. Plan a narrow repair of #75754 that also covers #77574 by adding --no-deps and focused helper tests.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #75754 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93663 | clownfish/gitcrawl-290-autonomous-terminal-gap |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93663 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77344 | keep_canonical | planned | canonical | Keep #77344 as the canonical issue until the helper repair lands. |
| #77574 | keep_related | planned | related | Keep open as related and include it in the narrow ClawDock helper repair path. |
| cluster:gitcrawl-290-autonomous-terminal-gap | fix_needed | planned |  | Repair the existing contributor PR branch and validate before any merge or closeout. |
| cluster:gitcrawl-290-autonomous-terminal-gap | build_fix_artifact | planned |  | Produce an executable branch-repair plan for the deterministic fix executor. |

## Needs Human

- none
