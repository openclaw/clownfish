---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238881-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108011880"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108011880"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.679Z"
canonical: "https://github.com/openclaw/openclaw/pull/73799"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54176"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73799"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238881-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108011880](https://github.com/openclaw/clownfish/actions/runs/25108011880)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73799

## Summary

Hydrated preflight state shows #73799 is the only open canonical PR for the legacy Word/OLE binary MIME guard. The original representative #54380 and source PR #44068 are already closed as superseded, #54176 should remain open until the canonical fix lands, and the security-sensitive linked context #9795 is quarantined separately. No close, merge, or fix PR mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #9795 | route_security | planned | security_sensitive | Security-sensitive linked context is outside ProjectClownfish dedupe cleanup and should remain routed to central OpenClaw security handling. |
| #73799 | keep_canonical | planned | canonical | #73799 is the best current canonical path, but this dedupe-only job must not merge or raise/fix PRs. |
| #54176 | keep_related | planned | fixed_by_candidate | The issue is covered by the canonical candidate PR but should remain open until #73799 or an equivalent fix lands. |
| #44068 | keep_closed | skipped | superseded | Already closed PR; no close action is valid or needed. |
| #54380 | keep_closed | skipped | superseded | Canonical hint is obsolete because #54380 was replaced by the open #73799 path. |
| #54190 | keep_closed | skipped | superseded | Closed historical source PR in the same fix family; no mutation is valid. |
| #54234 | keep_closed | skipped | superseded | Closed historical source PR in the same fix family; no mutation is valid. |
| #73229 | keep_closed | skipped | independent | Closed independent sanitizer context; it should not affect the legacy Word/OLE dedupe decisions. |

## Needs Human

- none
