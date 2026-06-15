---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T131654-011"
mode: "plan"
run_id: "27549040587"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549040587"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.554Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-maintainer_owned-20260615T131654-011

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549040587](https://github.com/openclaw/clownfish/actions/runs/27549040587)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No shared canonical was selected because the job explicitly states this is not a dedupe cluster. Hydrated preflight state shows all 40 listed refs are open pull requests; non-security items are kept as independent backlog/review work, while security-shaped boundary-bypass or sensitive-data-exposure items are routed to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #87895 | keep_independent | planned | independent | Independent maintainer-owned test coverage PR; no closure, merge, or dedupe action is justified in plan mode. |
| #87927 | keep_independent | planned | independent | Independent small-context budget fix; keep for normal maintainer review. |
| #87958 | keep_independent | planned | independent | Independent small-context read-output fix; no closure path. |
| #88142 | keep_independent | planned | independent | Independent PR with failing checks; keep open for repair/review rather than close. |
| #88163 | keep_independent | planned | independent | Independent draft maintainer-owned hardening PR; keep open for author/maintainer review. |
| #88175 | keep_independent | planned | independent | Independent compatibility fix; keep for normal review. |
| #88181 | keep_independent | planned | independent | Independent draft feature PR; keep open. |
| #88212 | keep_independent | planned | independent | Independent draft feature PR with review context; no close-style action. |
| #93118 | keep_independent | planned | independent | Independent cron fix with failing checks; keep open for repair/review. |
| #88296 | keep_independent | planned | independent | Independent draft gateway fix; keep open. |
| #88300 | keep_independent | planned | independent | Independent draft availability/agent parsing fix; keep open. |
| #88311 | keep_independent | planned | independent | Independent Windows migration fix; keep open for review. |
| #88361 | keep_independent | planned | independent | Independent Windows daemon fix; keep open. |
| #88379 | keep_independent | planned | independent | Independent draft plugin compatibility fix; keep open. |
| #88384 | keep_independent | planned | independent | Independent draft plugin loader fix; keep open. |
| #90057 | keep_independent | planned | independent | Independent broad UI PR; keep open for maintainer review. |
| #91290 | keep_independent | planned | independent | Independent CI automation PR with failing lint/proof needs; keep open. |
| #93178 | keep_independent | planned | independent | Independent test consolidation PR; keep open. |
| #89972 | keep_independent | planned | independent | Independent draft dependency replacement PR; keep open for author/review. |
| #91724 | keep_independent | planned | independent | Independent contributor fix; keep open to preserve review/credit path. |
| #88750 | keep_independent | planned | independent | Independent contributor PR with failing checks/review context; keep open. |
| #93181 | keep_independent | planned | independent | Independent test consolidation PR with failing CI; keep open. |
| #93174 | keep_independent | planned | independent | Independent test consolidation PR with failing CI; keep open. |
| #70596 | keep_independent | planned | independent | Independent contributor performance fix; keep open for review and credit preservation. |
| #80426 | keep_independent | planned | independent | Independent channel feature with failing checks; keep open for author/maintainer repair. |
| #81729 | keep_independent | planned | independent | Independent hardening/compatibility PR; keep open for maintainer review. |
| #75025 | keep_independent | planned | independent | Independent contributor fix with active grinding status; keep open. |
| #39059 | route_security | planned | security_sensitive | Security-shaped auth/storage hardening should be handled by central OpenClaw security review, not backlog cleanup automation. |
| #47604 | keep_independent | planned | independent | Independent broad feature PR; keep open rather than close or merge. |
| #60488 | route_security | planned | security_sensitive | The PR appears to address vulnerabilities/security boundary behavior and must be routed to central OpenClaw security handling. |
| #74068 | keep_independent | planned | independent | Independent draft cron fix; keep open. |
| #82434 | keep_independent | planned | independent | Independent approval feature PR; keep open for maintainer review. |
| #83169 | keep_independent | planned | independent | Independent contributor PR; keep open to preserve review/credit path. |
| #83600 | keep_independent | planned | independent | Independent contributor feature PR; keep open for normal review. |
| #93175 | keep_independent | planned | independent | Independent evidence/docs/test PR with failing check; keep open. |
| #24661 | keep_independent | planned | independent | Independent draft provider onboarding PR; keep open. |
| #39046 | route_security | planned | security_sensitive | The described cross-agent content exposure is security-sensitive enough to route centrally. |
| #40782 | keep_independent | planned | independent | Independent contributor PR with active maintainer blocker; keep open rather than close. |
| #85345 | keep_independent | planned | independent | Independent draft maintainer-owned fix; keep open. |
| #85496 | keep_independent | planned | independent | Independent contributor draft fix; keep open. |

## Needs Human

- none
