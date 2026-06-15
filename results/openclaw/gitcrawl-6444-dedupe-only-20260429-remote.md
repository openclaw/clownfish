---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6444-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136444560"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136444560"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.274Z"
canonical: "https://github.com/openclaw/openclaw/pull/47029"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47029"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-6444-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136444560](https://github.com/openclaw/clownfish/actions/runs/25136444560)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/47029

## Summary

Hydrated preflight shows #47029 remains the open cluster representative, but its remaining loopback-identity behavior is a maintainer policy decision and has unresolved review-bot findings. The linked open #73925 belongs to a separate gateway handshake repair path and has a security-shaped auth-watchdog review finding, so it is routed out of this dedupe job. Closed refs are historical evidence only; no close, merge, label, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #47029 | needs_human | blocked | needs_human | Maintainer judgment is required before closing, superseding, repairing, or accepting the remaining loopback-identity behavior in #47029. |
| #73925 | route_security | planned | security_sensitive | The security-shaped auth-watchdog finding belongs in central OpenClaw security handling, not this dedupe-only cluster. |
| #48950 | keep_closed | skipped | superseded | Already closed; no mutation is valid for this worker result. |
| #49751 | keep_closed | skipped | related | Already closed and related only as historical context; no closeout action is valid. |
| #51172 | keep_closed | skipped | superseded | Already closed; no mutation is valid for this worker result. |
| #52142 | keep_closed | skipped | related | Already closed and historical only; no mutation is valid. |

## Needs Human

- Maintainer decision needed for #47029: accept a loopback status/probe behavior change that can reuse cached paired operator identity, or preserve current main's non-mutating anonymous unauthenticated loopback probe policy and close the PR manually as not accepted.
