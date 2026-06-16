---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13538-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595658524"
workflow_run_id: "27595658524"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595658524"
head_sha: "2d3662c151e0b150b29dae63ba637e5edb6b6735"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T05:17:06.573Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 19
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13538-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595658524](https://github.com/openclaw/clownfish/actions/runs/27595658524)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Autonomous dedupe-only classification repaired after deterministic validation. The original representative #57999 is closed and should stay historical. Validator output requires #47975 to be treated as security-sensitive, so it is quarantined with route_security and is no longer used as the canonical issue. Other open hydrated non-security issues remain related but not duplicates because they carry distinct stale-reply, scheduler, UI, retention-rule, or session-store scopes. #64199 is separately quarantined for central security handling. No close, merge, or fix PR action is planned; maintainer input is needed to choose any surviving non-security canonical path after #47975 is removed from dedupe automation.

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
| #57999 | keep_closed | skipped |  | Original canonical hint is obsolete because #57999 is already closed. |
| #47975 | route_security | planned | security_sensitive | Route exact security-sensitive ref #47975 to central OpenClaw security handling; do not mutate it through Clownfish. |
| #32296 | keep_related | planned | related | Keep open as a related broad stale-reply tracker, not a duplicate of the quarantined retention issue. |
| #76888 | keep_related | planned | related | Keep open as a narrow related stale-reply tracker with unique implementation evidence. |
| #54488 | keep_related | planned | related | Keep open as a related scheduler fairness issue with distinct scope. |
| #50900 | keep_related | planned | related | Keep open as a related retention-policy design item. |
| #52803 | keep_related | planned | related | Keep open as a related but broader Control UI orchestration feature request. |
| #55334 | keep_related | planned | related | Keep open as a related session-store bloat/OOM tracker, not a duplicate of the quarantined #47975 item. |
| #64199 | route_security | planned | security_sensitive | Route only #64199 to central OpenClaw security handling; do not mutate it through Clownfish. |
| #51767 | keep_closed | skipped |  | Closed candidate retained only as historical retention-family evidence. |
| #54797 | keep_closed | skipped |  | Closed candidate retained only as historical Control UI cleanup evidence. |
| #55807 | keep_closed | skipped |  | Closed candidate retained only as historical ACP thread rendering evidence. |
| #56516 | keep_closed | skipped |  | Closed candidate retained only as historical subagent UI persistence evidence. |
| #58411 | keep_closed | skipped |  | Closed candidate retained only as historical ACP binding evidence. |
| #60780 | keep_closed | skipped |  | Closed candidate retained only as historical Discord ACP duplicate-response evidence. |
| #61885 | keep_closed | skipped |  | Closed candidate retained only as historical Control UI token persistence evidence. |
| #68162 | keep_closed | skipped |  | Closed candidate retained only as historical webchat reconnection/session evidence. |
| #69443 | keep_closed | skipped |  | Closed candidate retained only as historical WeChat callback-routing evidence. |
| cluster:gitcrawl-13538-dedupe-only-20260429-remote | needs_human | blocked | needs_human | Maintainer must choose whether to split the non-security follow-up cluster or designate a different canonical after #47975 is quarantined. |

## Needs Human

- Canonical choice is unclear after validator-required security routing of #47975; remaining open non-security issues are related but not safe replacements from the provided artifacts.
