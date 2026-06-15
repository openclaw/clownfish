---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2819-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134544421"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134544421"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.007Z"
canonical: "https://github.com/openclaw/openclaw/pull/42841"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47342"
canonical_pr: "https://github.com/openclaw/openclaw/pull/42841"
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2819-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134544421](https://github.com/openclaw/clownfish/actions/runs/25134544421)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42841

## Summary

Hydrated state splits the cluster into separate non-mutating paths: #42841 remains the canonical open PR for Cloudflare/Zero Trust WebSocket upgrade headers; #47342 remains a related but distinct open issue for first-class node-host SSH transport; #26250 is security-sensitive and must be routed to central security handling. No close, merge, or fix PR action is safe or allowed for this dedupe-only job.

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
| #17745 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #22655 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #26250 | route_security | planned | security_sensitive | Route this exact issue to central OpenClaw security handling; do not close, comment, merge, or fix it through this cluster. |
| #26888 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #27656 | keep_closed | skipped | independent | Closed unrelated context only; no mutation is valid. |
| #29908 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #31804 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #37749 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #42792 | keep_closed | skipped | superseded | Already closed as superseded by hydrated PR #42841; no further close action is valid. |
| #42808 | keep_closed | skipped | independent | Closed obsolete representative; use open #42841 and #47342 only for their distinct remaining work. |
| #42841 | keep_canonical | planned | canonical | Keep #42841 open as the canonical implementation path for Cloudflare/Zero Trust upgrade headers; do not close or merge it in this dedupe-only job. |
| #44493 | keep_closed | skipped | independent | Closed external-adapter context only; no mutation is valid. |
| #44574 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #47342 | keep_related | planned | related | Keep #47342 open as a related but distinct canonical issue for node-host SSH transport work; it is not a true duplicate of #42841 or the closed #42808 representative. |
| #48566 | keep_closed | skipped | superseded | Already closed as superseded by hydrated PR #48637; no further close action is valid. |
| #48637 | keep_independent | planned | independent | Separate Paperclip documentation subcluster; keep open independently of the #42841/#47342 node transport/header cluster. |
| #53090 | keep_closed | skipped | independent | Closed independent context only; no mutation is valid. |

## Needs Human

- none
