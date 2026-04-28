---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156675-autonomous-smoke"
mode: "autonomous"
run_id: "25070590154"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25070590154"
head_sha: "8b6e588945d23823a34b05ad78ca752a430936c7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T18:39:41.259Z"
canonical: "https://github.com/openclaw/openclaw/pull/49751"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/49751"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156675-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25070590154](https://github.com/openclaw/clownfish/actions/runs/25070590154)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49751

## Summary

Classified #49751 as the live canonical repairable PR for the WS handshake timer race. Merge is not recommended yet because mergeability/check proof and post-repair Codex /review are missing. Planned a repair_contributor_branch fix artifact for #49751, kept #62060 open as related, marked already-closed candidate PRs as skipped, and quarantined the hydrated security-sensitive linked refs only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/49751 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49751 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49751 | fix_needed | planned | canonical | Repair the contributor branch before any merge or duplicate closeout. |
| cluster:ghcrawl-156675-autonomous-smoke | build_fix_artifact | planned |  | Canonical PR is useful and repairable, but missing merge preflight. |
| #62060 | keep_related | planned | related | Related timeout tuning follow-up; leave open for separate maintainer decision after #49751 repair/merge path is resolved. |
| #48950 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #51172 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #52142 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #47113 | route_security | planned | security_sensitive | Security-sensitive linked ref is out of ProjectClownfish mutation scope. |
| #47640 | route_security | planned | security_sensitive | Security-sensitive linked ref is out of ProjectClownfish mutation scope. |

## Needs Human

- none
