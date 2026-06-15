---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-038"
mode: "plan"
run_id: "27526374265"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526374265"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.382Z"
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
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-038

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526374265](https://github.com/openclaw/clownfish/actions/runs/27526374265)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. Kept all 10 listed open PR candidates non-mutating for normal maintainer/author follow-up; no close, merge, label, or fix PR action is planned. Routed the hydrated security-sensitive linked PR #52747 to central security handling without affecting unrelated PRs.

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
| #52747 | route_security | planned | security_sensitive | Security-sensitive linked ref is out of ProjectClownfish mutation scope and should be handled by central OpenClaw security. |
| #80929 | keep_related | planned | related | Related narrow delivery-queue fix; keep open for maintainer review rather than close or merge in this inventory shard. |
| #80658 | keep_independent | planned | independent | Independent docs PR with proof/rebase follow-up; closure is not enabled and there is no shared canonical. |
| #80596 | keep_independent | planned | independent | Independent plugin-runtime API PR with active review/proof follow-up; do not close or merge in this shard. |
| #80383 | keep_related | planned | related | Related ACP availability work, but not a duplicate of the closed/security-linked timeout PR; keep open for focused review. |
| #79985 | keep_independent | planned | independent | Independent docs+test clarification awaiting maintainer review/rebase; no close or merge action is permitted. |
| #79861 | keep_independent | planned | independent | Independent gateway hardening bugfix awaiting maintainer review/rebase; no closure or merge in plan mode. |
| #79853 | keep_independent | planned | independent | Independent low-risk test fix awaiting maintainer review/rebase; no dedupe or closure action applies. |
| #79852 | keep_independent | planned | independent | Independent memory-core fix with proof/rebase follow-up; keep open rather than close or merge. |
| #79846 | keep_independent | planned | independent | Independent docs PR with low-signal labels but closeout disabled and author follow-up present; keep open. |
| #79626 | keep_independent | planned | independent | Independent CLI availability fix awaiting changes/rebase; no close or merge action is valid in this plan run. |

## Needs Human

- none
