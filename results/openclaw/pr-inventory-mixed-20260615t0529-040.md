---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-040"
mode: "plan"
run_id: "27526377009"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526377009"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.393Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# pr-inventory-mixed-20260615T0529-040

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526377009](https://github.com/openclaw/clownfish/actions/runs/27526377009)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for openclaw/openclaw. No shared canonical was selected because the job is an inventory shard. No GitHub mutations are planned beyond non-mutating classifications; closed PRs are kept closed, and the linked security-sensitive issue is routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

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
| #66702 | route_security | planned | security_sensitive | Security-sensitive linked ref is quarantined without mutating or summarizing exploit details. |
| #77843 | keep_independent | planned | independent | Focused non-security bugfix remains independently reviewable but blocked on proof/merge gates. |
| #77774 | needs_human | planned | needs_human | Maintainer-owned broad UI redesign with overlapping hydrated follow-up work requires maintainer judgment rather than closure or merge planning. |
| #77313 | keep_closed | skipped | superseded | Already closed; no further action is valid. |
| #77290 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no further action is valid. |
| #76666 | needs_human | planned | needs_human | The remaining decision is maintainer review of a behavior-changing gateway memory path; merge and fix actions are blocked by job frontmatter. |
| #76631 | needs_human | planned | needs_human | The precision of the docs warning is an unresolved maintainer/product wording decision with active author follow-up. |
| #76618 | keep_independent | planned | independent | Focused provider compatibility fix remains independent and blocked only on proof/merge gates. |
| #76617 | keep_independent | planned | independent | Focused channel behavior fix remains independent and blocked only on proof/merge gates. |
| #76479 | keep_independent | planned | low_signal | Low-signal docs PR is not a close candidate in this run because low-signal closeout is disabled; keep it as an independent backlog item. |
| #75679 | keep_related | planned | related | The PR is related to the hydrated open subagent visibility issue but should remain open and unmerged until proof/conflict/technical concerns are resolved. |

## Needs Human

- #77774: maintainer-owned broad Control overview redesign overlaps hydrated draft PR #86460 and requires maintainer/product path selection.
- #76666: proof-labeled gateway memory change still needs maintainer review before any merge path.
- #76631: docs wording precision was explicitly deferred by the author to maintainer review.
