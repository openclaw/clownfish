---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T060018-005"
mode: "plan"
run_id: "27527689410"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527689410"
head_sha: "80e95d189d90cd2eb7c81cfd29f8509fb8a0549d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:18:11.584Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-maintainer_owned-20260615T060018-005

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527689410](https://github.com/openclaw/clownfish/actions/runs/27527689410)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are planned. Open PRs are kept independently unless security routing is required; failing checks, draft state, unresolved proof, and review-bot findings block merge/closeout decisions for the affected PR only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
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
| #74190 | keep_closed | skipped | superseded | Already closed historical context. |
| #75814 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue; no mutation allowed. |
| #76235 | keep_independent | planned | independent | Narrow standalone PR; not a duplicate or closure candidate. |
| #76245 | keep_independent | planned | independent | Narrow standalone Windows gateway fallback PR; no duplicate/superseded evidence. |
| #76263 | route_security | planned | security_sensitive | Security-sensitive linked issue must be routed to central OpenClaw security handling. |
| #76326 | keep_closed | skipped | superseded | Already closed historical context. |
| #76730 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish cleanup scope. |
| #76895 | keep_independent | planned | independent | Broad maintainer-owned performance PR with active prior maintainer signal; keep independently for maintainer follow-up. |
| #76927 | keep_independent | planned | independent | Standalone agent/session-state PR blocked by draft state and proof failures. |
| #76980 | keep_related | planned | related | Related to #77020 diagnostics, but not fixed or duplicate based on hydrated evidence. |
| #77020 | keep_independent | planned | independent | Standalone diagnostics PR; not closable and not merge-ready. |
| #77045 | keep_independent | planned | independent | Standalone Slack PR with unresolved bot review and failing checks; keep for author/maintainer follow-up. |
| #77134 | keep_independent | planned | independent | Follow-on feature PR related to #74190, but not duplicate and not merge-ready. |
| #77213 | keep_independent | planned | independent | Standalone fix PR for a closed linked issue, but draft and proof-failed; no closeout or merge action. |
| #77542 | keep_independent | planned | independent | Standalone diagnostics PR with related closed QA context but no duplicate/superseded evidence. |
| #82609 | keep_closed | skipped | fixed_by_candidate | Already closed historical context. |
| #92550 | keep_closed | skipped | fixed_by_candidate | Already closed historical context. |

## Needs Human

- none
