---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-048"
mode: "plan"
run_id: "27526387754"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526387754"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.462Z"
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
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-048

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526387754](https://github.com/openclaw/clownfish/actions/runs/27526387754)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations planned. Security-sensitive open PRs are routed to central security handling; already-closed candidates are kept closed; remaining open non-security PRs are kept for maintainer/author follow-up because they are useful but not eligible for close, merge, or fix actions in this job.

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
| #74231 | route_security | planned | security_sensitive | Security-boundary labeled media access change is out of scope for backlog cleanup automation. |
| #73919 | keep_closed | skipped | superseded | Already closed; no mutation is valid in plan mode. |
| #73247 | keep_closed | skipped | superseded | Already closed; no closure action may be emitted. |
| #74940 | keep_independent | planned | independent | Useful independent PR with active author/maintainer follow-up; not closable or mergeable under this plan job. |
| #74990 | route_security | planned | security_sensitive | Auth-provider/security-boundary onboarding change is outside ProjectClownfish cleanup scope. |
| #75018 | route_security | planned | security_sensitive | Provider/auth-boundary feature work must be handled by central security-aware review. |
| #73159 | keep_independent | planned | independent | Useful but non-merge-ready independent PR; no close, merge, or fix action is allowed by this job. |
| #74083 | keep_related | planned | related | Related to the open sandbox zombie-process issue, but not a complete or merge-ready fix. |
| #73884 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #74719 | keep_closed | skipped | superseded | Already closed; no closure action may be emitted. |

## Needs Human

- none
