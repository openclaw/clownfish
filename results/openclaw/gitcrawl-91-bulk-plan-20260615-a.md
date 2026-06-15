---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-91-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523511523"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523511523"
head_sha: "049f47ae3011c5056036ff5587d219164531b584"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:16:19.499Z"
canonical: "#92664"
canonical_issue: "#92664"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-91-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523511523](https://github.com/openclaw/clownfish/actions/runs/27523511523)

Workflow conclusion: success

Worker result: planned

Canonical: #92664

## Summary

Plan-mode classification for cluster gitcrawl-91-bulk-plan-20260615-a using the hydrated preflight artifact. Canonical issue #92664 remains the open root report. #92680 is routed to central security handling because the job explicitly marks it as a security-signal ref. The remaining non-security PRs overlap the same read-tool GBK decoding root cause; #92682 is the narrowest non-security repair path, while #92700 and #92756 should not be merged as-is.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #92664 | keep_canonical | planned | canonical |  |
| #92680 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; route to central OpenClaw security handling without mutating it. |
| #92682 | keep_related | planned | related | Clear same root cause and viable narrow non-security repair path, but plan-mode job disallows merge and competing repair candidates remain open. |
| #92700 | close_superseded | planned | superseded | Superseded by a smaller same-root-cause repair path; closure is only planned for applicator replay after live-state re-fetch and comment-first policy. |
| #92756 | close_superseded | planned | superseded | Superseded by a narrower same-root-cause repair path and blocked by failing proof; closure is only planned for applicator replay after live-state re-fetch and comment-first policy. |

## Needs Human

- none
