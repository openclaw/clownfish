---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9458-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137278649"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137278649"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.307Z"
canonical: "https://github.com/openclaw/openclaw/pull/63552"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63552"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9458-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137278649](https://github.com/openclaw/clownfish/actions/runs/25137278649)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63552

## Summary

Classified the hydrated provider-discovery cluster without GitHub mutation. The obsolete representative #57116 remains historical only; #63552 is the current narrow canonical PR for explicit-provider non-live discovery scoping. Overlapping #72352 and #66957 should stay open as related follow-up/candidate work because they cover broader configured-model and replace-mode behavior rather than the same exact change. Closed #64694 is quarantined to security routing because its hydrated review comments contain security-shaped findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #57116 | keep_closed | skipped | superseded | Already closed; obsolete as canonical for the still-open non-live discovery optimization family. |
| #63552 | keep_canonical | planned | canonical | Best current canonical path for the narrow explicit-provider non-live discovery scoping work; no merge or fix action is allowed by this job. |
| #64691 | keep_closed | skipped | independent | Closed unrelated linked context only. |
| #64693 | keep_closed | skipped | independent | Closed unrelated linked context only. |
| #64694 | route_security | planned | security_sensitive | Security-shaped review evidence is scoped to #64694, so route only this item to central OpenClaw security handling and keep processing unrelated non-security items. |
| #66957 | keep_related | planned | related | Related provider-discovery startup cost, but the replace-mode contract is a distinct root cause and should remain open. |
| #72352 | keep_related | planned | related | Overlapping but not a safe duplicate closeout; keep open for maintainer review and coordination with #63552. |

## Needs Human

- none
