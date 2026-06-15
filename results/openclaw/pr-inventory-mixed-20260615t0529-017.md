---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-017"
mode: "plan"
run_id: "27526347234"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526347234"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.251Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526347234](https://github.com/openclaw/clownfish/actions/runs/27526347234)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job is explicitly not a dedupe cluster. Closed candidates are kept closed, ordinary open PRs are left for independent maintainer/author follow-up, and the two security-sensitive refs are routed to central security handling without affecting unrelated items.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #71953 | keep_closed | skipped |  | Already closed; no mutation is available in plan mode. |
| #72005 | keep_independent | planned | independent | Useful but not merge-ready; leave as independent maintainer/author follow-up. |
| #72009 | needs_human | planned | needs_human | This is the one candidate that appears closest to landable, but final maintainer judgment is explicitly required and merge is blocked in this plan-mode job. |
| #85353 | keep_closed | skipped |  | Already closed; retain historical state. |
| #72055 | keep_independent | planned | independent | Useful standalone PR with unresolved review/author work; not eligible for close or merge in this shard. |
| #72115 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup scope and should stay with central OpenClaw security handling. |
| #72128 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #72178 | keep_independent | planned | independent | Open feature/bugfix PR with useful scope but unresolved readiness blockers; keep independent. |
| #72187 | keep_closed | skipped |  | Already closed; preserve historical state without further action. |
| #72209 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope; route only this PR and continue unrelated classifications. |

## Needs Human

- #72009 requires maintainer technical/product review before any merge decision; this job is plan mode and merge is blocked by frontmatter.
