---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2462-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133503695"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133503695"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.977Z"
canonical: "https://github.com/openclaw/openclaw/pull/72405"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72405"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2462-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133503695](https://github.com/openclaw/clownfish/actions/runs/25133503695)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72405

## Summary

Hydrated preflight shows current main at 585c2bdba38992564a987199850ff0c49e99c665. Closed representative #57374 was replaced by merged PR #72405 for the restart probe-auth subfamily. No instant closes are safe: the open refs are either distinct related work, have unique reproduction/scope, or require review outside dedupe. #48472 is scoped to security routing because hydrated Aisle findings allege credential/transport boundary issues. #65643/#66000 remain the open launchd-label canonical subfamily; #47555 is related but not a true duplicate because it covers the restart path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #43226 | keep_closed | skipped | superseded | Already closed historical profile-isolation PR; no mutation allowed or needed. |
| #47555 | keep_related | planned | related | Related to the #65643/#66000 launchd-label family, but not a true duplicate because it preserves a unique restart reproduction and user-visible failure. |
| #47594 | keep_closed | skipped | related | Closed historical attempt for the profile lifecycle family; use as evidence only. |
| #48472 | route_security | planned | security_sensitive | Security-shaped credential/transport boundary findings must be routed to central OpenClaw security handling, not dedupe cleanup. |
| #50662 | keep_related | planned | related | Related but not superseded or duplicate; it carries independent rate-limit fallback behavior and unresolved review/check work. |
| #52749 | keep_closed | skipped | fixed_by_candidate | Already closed historical issue; no close action may be emitted. |
| #52829 | keep_closed | skipped | related | Closed historical token-change repair attempt; use as context only. |
| #57374 | keep_closed | skipped | superseded | Closed representative is superseded by merged replacement #72405; do not mutate closed refs. |
| #59439 | keep_closed | skipped | superseded | Already closed as superseded by the merged restart probe-auth replacement. |
| #59495 | keep_closed | skipped | fixed_by_candidate | Closed profile-isolation context; no closure or merge action is valid. |
| #63061 | keep_related | planned | related | Related CLI/profile work, but not a duplicate of the probe-auth or launchd-label canonical paths. |
| #65643 | keep_canonical | planned | canonical | Canonical open issue for the stale launchd-label/profile subfamily. |
| #66000 | keep_canonical | planned | canonical | Canonical active PR for the #65643 launchd-label subfamily; keep open for the permitted non-merge path. |
| #72405 | keep_closed | skipped | canonical | Merged canonical fix for the original restart probe-auth subfamily; closed refs receive keep_closed only. |

## Needs Human

- none
