---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-047"
mode: "plan"
run_id: "27549045870"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045870"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.700Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-047

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045870](https://github.com/openclaw/clownfish/actions/runs/27549045870)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Each PR is kept as an independent open candidate needing proof or maintainer review, except #58971, which is routed to central security handling because it references SSRF/CVE/GHSA guard bypass work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #89687 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90579 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90770 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90779 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90817 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90827 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90828 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #90887 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #91315 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #91479 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #93249 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #55018 | keep_independent | planned | independent | Independent performance/schema fix candidate; keep open because proof is still failing. |
| #55211 | keep_independent | planned | independent | Independent PR with proof, but merge is not allowed in this job. |
| #55487 | keep_independent | planned | independent | Independent gateway availability fix candidate; keep open because proof and checks are failing. |
| #55644 | keep_independent | planned | independent | Independent small chore PR; no closeout is allowed or proven. |
| #55766 | keep_independent | planned | independent | Independent ACP feature/fix candidate; keep open because proof/checks are failing. |
| #55789 | keep_independent | planned | independent | Independent gateway hardening/compatibility candidate; keep open for proof/review. |
| #55970 | keep_independent | planned | independent | Independent Telegram delivery candidate; keep open because proof/checks are failing. |
| #56116 | keep_independent | planned | independent | Independent Feishu channel candidate; keep open because proof is failing. |
| #56258 | keep_independent | planned | independent | Independent gateway availability candidate; keep open because proof is failing. |
| #56674 | keep_independent | planned | independent | Independent API feature candidate; keep open because proof/checks are failing. |
| #56830 | keep_independent | planned | independent | Independent UI/gateway messaging candidate; keep open because proof is failing. |
| #56861 | keep_independent | planned | independent | Independent Signal channel candidate; keep open because proof is failing. |
| #57597 | keep_independent | planned | independent | Independent ACP candidate; keep open because proof is failing. |
| #58051 | keep_independent | planned | independent | Independent agent fallback candidate; keep open because proof/checks are failing. |
| #58478 | keep_independent | planned | independent | Independent Android availability candidate; keep open because proof/checks are failing. |
| #58482 | keep_independent | planned | independent | Independent memory-host candidate; keep open because proof is failing and review concerns need resolution. |
| #58971 | route_security | planned | security_sensitive | Security-sensitive SSRF/CVE/GHSA boundary work is out of scope for Clownfish backlog cleanup. |
| #59013 | keep_independent | planned | independent | Independent Windows/session-lock candidate; keep open because proof/checks are failing. |
| #68590 | keep_independent | planned | independent | Independent memory-core candidate; keep open because proof is failing. |
| #70990 | keep_independent | planned | independent | Independent broad feature PR; keep open for maintainer review rather than close or merge. |
| #71887 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #72535 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #72749 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #93260 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #75011 | keep_independent | planned | independent | Potential low-signal docs PR, but closeout is disabled and live hydrated state is unavailable. |
| #75024 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #75270 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #76332 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |
| #84666 | keep_independent | planned | independent | Distinct open PR inventory item; keep open for proof/review. |

## Needs Human

- none
