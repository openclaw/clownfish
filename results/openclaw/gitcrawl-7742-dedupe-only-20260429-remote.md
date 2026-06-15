---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7742-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136870106"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136870106"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.292Z"
canonical: "https://github.com/openclaw/openclaw/issues/51349"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51349"
canonical_pr: "https://github.com/openclaw/openclaw/pull/51399"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7742-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136870106](https://github.com/openclaw/clownfish/actions/runs/25136870106)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51349

## Summary

#51399 has already landed as the Slack attachment-vision docs fix. #51349 remains the open canonical epic because linked audit child #51350 is still open; no close, merge, or fix action is planned for this dedupe-only job.

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
| #28037 | route_security | planned | security_sensitive | A linked closed issue contains a secret-scanning notice, so it belongs with central OpenClaw security handling rather than dedupe cleanup. |
| #51349 | keep_canonical | planned | canonical | Keep the parent epic open as the canonical issue for remaining Slack attachment-vision follow-up. |
| #51350 | keep_related | planned | related | Keep the audit issue open as related work under #51349. |
| #51353 | keep_closed | skipped | fixed_by_candidate | Closed context ref only; no closure action is valid or needed. |
| #51354 | keep_closed | skipped | related | Closed context ref only; preserve the existing disposition. |
| #51355 | keep_closed | skipped | superseded | The documentation issue is already closed against the now-merged canonical docs PR. |
| #51399 | keep_closed | skipped | canonical | Representative PR has already landed; no merge action is permitted or necessary. |
| #51400 | keep_closed | skipped | superseded | Closed linked implementation PR remains historical evidence only. |
| #53112 | keep_closed | skipped | independent | Already-merged independent Slack docs PR; no cluster action. |
| #67650 | keep_closed | skipped | independent | Already-closed independent product/docs decision; no cluster action. |

## Needs Human

- none
