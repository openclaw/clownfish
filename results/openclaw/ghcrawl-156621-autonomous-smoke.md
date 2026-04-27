---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156621-autonomous-smoke"
mode: "autonomous"
run_id: "24980255440"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980255440"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:40:54.869Z"
canonical: "https://github.com/openclaw/openclaw/issues/41609"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41609"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56795"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 2
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156621-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980255440](https://github.com/openclaw/clownfish/actions/runs/24980255440)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41609

## Summary

Hydrated state shows the original representative #42218 is now closed and security-sensitive, so it is not the canonical path. The surviving non-security canonical family is open issue #41609 with repairable contributor PR #56795 for broader inbound Feishu interactive card parsing. The narrow quoted/replied and post-format fallback bug is already present on current main via merged #72397, but #72397 itself must be routed to security because the artifact contains a security analysis finding. No GitHub mutations are performed by this worker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45936 | close_superseded | skipped | superseded | action status is blocked |
| #60380 | close_fixed_by_candidate | blocked | fixed_by_candidate | canonical is not listed in job refs |
| #60383 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #32023 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state; no close action is valid. |
| #32712 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state; no close action is valid. |
| #38776 | keep_closed | skipped | superseded | Already closed after replacement; no close action is valid. |
| #39339 | keep_closed | skipped | related | Closed related historical PR; no mutation target. |
| #41609 | keep_canonical | planned | canonical | Best surviving non-security canonical issue for broad Feishu interactive card parsing support. |
| #42218 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling and not mutated by ProjectClownfish. |
| #45936 | close_superseded | blocked | superseded | Blocked by require_fix_before_close until the canonical #56795 repair path lands or a replacement fix PR exists. |
| #48281 | keep_closed | skipped | duplicate | Already closed duplicate/superseded context; no mutation target. |
| #48313 | keep_closed | skipped | superseded | Already closed superseded PR; no mutation target. |
| #55466 | keep_closed | skipped | related | Closed related context ref; no mutation target. |
| #56795 | keep_canonical | planned | canonical | Best repairable contributor PR for the broad non-security canonical path, but not merge-ready. |
| #60380 | close_fixed_by_candidate | planned | fixed_by_candidate | High-confidence ordinary bug fixed by already-merged hydrated PR #72397; target is non-security, while #72397 itself is separately routed to security. |
| #60383 | close_superseded | planned | superseded | Covered by already-merged #72397; contributor credit is preserved in the planned close comment. |
| #72397 | route_security | planned | security_sensitive | Route exact security-sensitive merged PR to central OpenClaw security handling while continuing unrelated non-security classification. |
| cluster:ghcrawl-156621-autonomous-smoke | fix_needed | planned |  | Repair the contributor branch for #56795 before any broad parser closeout or merge. |
| cluster:ghcrawl-156621-autonomous-smoke | build_fix_artifact | planned |  | Provide deterministic repair instructions for the ProjectClownfish fix executor. |

## Needs Human

- none
