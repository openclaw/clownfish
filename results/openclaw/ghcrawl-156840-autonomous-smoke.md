---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156840-autonomous-smoke"
mode: "autonomous"
run_id: "27494693671"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27494693671"
head_sha: "af51481952553ecc04dc988c7eac0b4b6df6cfb8"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.338Z"
canonical: "https://github.com/openclaw/openclaw/issues/49104"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49104"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156840-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27494693671](https://github.com/openclaw/clownfish/actions/runs/27494693671)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/49104

## Summary

#49104 is the surviving open canonical issue for the remaining Telegram strict-mode/literal tag behavior. #49996 is explicitly security-sensitive and must be routed to central security handling. The original PR candidates are already closed, so there are no close or merge mutations to plan, and no fix artifact is safe until maintainers decide the strict-mode privacy semantics.

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
| #49104 | keep_canonical | planned | canonical | Keep #49104 open as the canonical tracker; the remaining behavior is real but needs a maintainer/product decision before an automated fix PR can safely change strict redaction semantics. |
| #49996 | route_security | planned | security_sensitive | Quarantine exactly #49996 to central OpenClaw security handling; do not close, merge, or use it as an automated fix path. |
| #49337 | keep_closed | skipped | superseded | No closure action is valid because #49337 is already closed; keep it as historical superseded evidence under #49104. |
| #51915 | keep_closed | skipped | superseded | No closure action is valid because #51915 is already closed; it remains credited historical evidence for the narrower main fix. |
| #37696 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; it is historical evidence only for this cluster. |
| #40777 | keep_closed | skipped | related | Already closed related context; not a live target for this cluster. |
| #48790 | keep_closed | skipped | independent | Closed independent context; no action belongs in this cluster. |
| #67092 | keep_closed | skipped | related | Closed related privacy-boundary context; keep it as evidence for the maintainer decision on #49104. |

## Needs Human

- #49104 requires maintainer/product direction before any fix PR: decide whether strict mode should continue hiding unclosed <think> tails after already visible answer text, or define a narrower Telegram/shared sanitizer rule that preserves visible answers without weakening the #67092 reasoning-redaction boundary.
