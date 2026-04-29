---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14002-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110381178"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110381178"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T13:21:36.946Z"
canonical: "No single canonical replaces closed #58356. Open subfamily anchors: https://github.com/openclaw/openclaw/issues/14251, https://github.com/openclaw/openclaw/issues/47555, https://github.com/openclaw/openclaw/pull/52515, and https://github.com/openclaw/openclaw/pull/66000."
canonical_issue: null
canonical_pr: null
actions_total: 19
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14002-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110381178](https://github.com/openclaw/clownfish/actions/runs/25110381178)

Workflow conclusion: success

Worker result: planned

Canonical: No single canonical replaces closed #58356. Open subfamily anchors: https://github.com/openclaw/openclaw/issues/14251, https://github.com/openclaw/openclaw/issues/47555, https://github.com/openclaw/openclaw/pull/52515, and https://github.com/openclaw/openclaw/pull/66000.

## Summary

Hydrated preflight shows the representative #58356 is already closed and the remaining open refs split into several non-duplicate subfamilies. No high-confidence close/comment/label mutation is planned. Open anchors are #14251 for macOS LaunchDaemon/system-service scope, #47555/#66000 for stale launchd-label profile handling, and #52515 for doctor cleanup hints; unrelated or distinct reports are kept open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
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
| #58356 | keep_closed | skipped | duplicate | Closed representative is historical evidence only; do not emit close/comment mutations for it. |
| #48457 | route_security | planned | security_sensitive | Route this exact security-sensitive linked ref to central OpenClaw security handling; no ProjectClownfish mutation. |
| #14251 | keep_canonical | planned | canonical | Best open anchor for the macOS system LaunchDaemon lifecycle subfamily; related items carry distinct details, so no duplicate close. |
| #40207 | keep_related | planned | related | Related macOS launchd reliability issue, but distinct from system LaunchDaemon lifecycle and not a safe duplicate close. |
| #42252 | keep_related | planned | related | Related diagnostics work, but it is not the same root cause as the launchd lifecycle, profile, or doctor cleanup subfamilies. |
| #47555 | keep_canonical | planned | canonical | Keep as the profile stale-label restart canonical; do not close until PR #66000 or equivalent proves lifecycle commands are fixed. |
| #51860 | keep_related | planned | related | Related to #14251, but it has unique boot, status, and TMPDIR evidence; keep open. |
| #52510 | keep_related | planned | fixed_by_candidate | Covered by open candidate PR #52515, but closeout is not safe before the PR is repaired/reviewed and landed. |
| #52515 | keep_canonical | planned | canonical | Keep as the doctor cleanup candidate PR, but no merge or fixed-by closeout is planned under this dedupe-only job. |
| #55208 | keep_related | planned | related | Related to #14251, but the Local Network Privacy angle and product design scope are distinct enough to keep open. |
| #55880 | keep_related | planned | related | Related gateway recovery area, but not a duplicate of the LaunchDaemon, profile, or doctor cleanup issues. |
| #59349 | keep_independent | planned | independent | Independent session-routing bug; keep open outside this cluster. |
| #59665 | keep_related | planned | related | Related launchd environment issue with a distinct PATH policy question; keep open. |
| #60398 | keep_related | planned | related | Related external-volume launchd bug, but distinct from #40207 log-path EX_CONFIG and from system LaunchDaemon mode. |
| #61713 | keep_related | planned | related | Related macOS gateway exec/environment reachability issue; keep open because reproduction and root cause differ from the launchd service items. |
| #65643 | keep_related | planned | fixed_by_candidate | Covered by candidate PR #66000, but not safe to close in this dedupe pass. |
| #66000 | keep_canonical | planned | canonical | Keep as the active profile-label fix candidate; no merge recommendation is allowed in this job. |
| #67631 | keep_related | planned | related | Related macOS launchd ownership gap with distinct Mac App/CLI behavior; keep open. |
| #70223 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |

## Needs Human

- none
