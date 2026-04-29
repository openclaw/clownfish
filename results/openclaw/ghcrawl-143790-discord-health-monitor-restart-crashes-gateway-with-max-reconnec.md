---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143790-discord-health-monitor-restart-crashes-gateway-with-max-reconnec"
mode: "autonomous"
run_id: "25105379783"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105379783"
head_sha: "f4310f686a7c936b6d823e2f2236940847c8f999"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:24:24.346Z"
canonical: "#56184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56184"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143790-discord-health-monitor-restart-crashes-gateway-with-max-reconnec

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105379783](https://github.com/openclaw/clownfish/actions/runs/25105379783)

Workflow conclusion: success

Worker result: planned

Canonical: #56184

## Summary

Hydrated preflight artifact generated at 2026-04-29T11:09:19.822Z on main 77a5d82e64d1bdce09d87b3f42a56150b1b103ef shows the representative #56184 and all job-listed open candidates are already closed. No close, merge, label, comment, or fix action is planned. No open issue should replace #56184 as the live canonical for the Max reconnect attempts health-monitor restart crash; the only hydrated open ref, #71546, is a related but distinct Discord message-ingest lag report and should stay open separately.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #56184 | keep_closed | skipped | canonical | Historical canonical remains closed; no open replacement is clearer for this exact crash family. |
| #57111 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 Max reconnect attempts stale-socket restart crash family. |
| #57195 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 shutdown/reconnect-exhausted crash family. |
| #57291 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 crash family. |
| #57666 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 stale-socket teardown crash family. |
| #59927 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 reconnect-exhausted crash family. |
| #61124 | keep_closed | skipped | duplicate | Already closed duplicate of the #56184 health-monitor restart crash family. |
| #38596 | keep_closed | skipped | related | Closed related follow-up family; no action because the replacement path is not hydrated in this job. |
| #40413 | keep_closed | skipped | superseded | Already closed as superseded by an unhydrated replacement PR with contributor credit preserved. |
| #41354 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current-main transport-liveness work; no closure action is valid. |
| #57731 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current-main transport-liveness work; it is related to but not duplicate of #56184. |
| #45712 | keep_closed | skipped | superseded | Already closed as superseded by an unhydrated replacement PR with contributor credit preserved. |
| #53168 | keep_closed | skipped | independent | Independent closed issue; not a live canonical candidate for this cluster. |
| #64201 | keep_closed | skipped | independent | Independent closed issue; not a live canonical candidate for this cluster. |
| #71546 | keep_related | planned | related | Related Discord reconnect/liveness evidence, but not the #56184 Max reconnect attempts crash and not a replacement canonical. |

## Needs Human

- none
