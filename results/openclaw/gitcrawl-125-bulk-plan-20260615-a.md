---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-125-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520786704"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520786704"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.887Z"
canonical: "#92688"
canonical_issue: "#92688"
canonical_pr: "#92770"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-125-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520786704](https://github.com/openclaw/clownfish/actions/runs/27520786704)

Workflow conclusion: success

Worker result: planned

Canonical: #92688

## Summary

Classified the open Qwen/DashScope image-tool cluster in read-only plan mode. #92688 remains the canonical issue. #92770 is the strongest non-security fix candidate but merge is blocked by the job policy, so it is kept related for maintainer follow-up. #92704 is superseded by the narrower #92770 path. #92782 is explicitly listed as a security-signal ref by the job and is routed to central security handling without blocking unrelated non-security classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #92688 | keep_canonical | planned | canonical | Best surviving issue for the root cause. |
| #92704 | close_superseded | planned | superseded | Open PR #92704 overlaps #92688 but is less safe than #92770 and is blocked by proof and CI failures. |
| #92770 | keep_related | planned | related | Strongest non-security candidate fix, but merge is out of scope for this plan-mode job. |
| #92782 | route_security | planned | security_sensitive | Exact ref is marked by the job as a security-signal item requiring central security handling. |

## Needs Human

- none
