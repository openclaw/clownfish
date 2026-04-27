---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156597-autonomous-smoke"
mode: "autonomous"
run_id: "24979998468"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979998468"
head_sha: "83a7148bc5de8d1cf6f53dc784229962ebfcf20a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:43:04.963Z"
canonical: "https://github.com/openclaw/openclaw/issues/44417"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44417"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156597-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979998468](https://github.com/openclaw/clownfish/actions/runs/24979998468)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44417

## Summary

Hydrated preflight shows the original representative #39673 is now closed, so the best surviving non-security canonical is #44417 for the user-systemd false-unavailable/SUDO_USER failure family. #52293 is explicitly security-sensitive and is quarantined only. No merge is recommended. Closures that depend on the still-unlanded #44417 fix path are blocked by require_fix_before_close; a narrow credited replacement fix artifact is planned because #42051 is closed, uneditable, and review-blocked.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72655 | clownfish/ghcrawl-156597-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63561 | close_duplicate | skipped | duplicate | action status is blocked |
| #72655 | merge_canonical | blocked | fix_pr | security-sensitive PR requires central security triage |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39673 | keep_closed | skipped | duplicate | Closed representative cannot remain the live canonical target; classify it as historical duplicate evidence for #44417. |
| #42025 | keep_closed | skipped | related | Already closed; related to the user-systemd install family but not an open mutation target. |
| #44070 | keep_closed | skipped | related | Already closed; transport-endpoint handling is adjacent but the open linked PR is quarantined. |
| #44417 | keep_canonical | planned | canonical | Best surviving canonical issue after #39673 closed. |
| #54429 | keep_closed | skipped | duplicate | Already closed duplicate; no further action. |
| #54517 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented/stale against current main; no mutation target. |
| #62763 | keep_related | planned | related | Related follow-up from the same doctor --fix run; should not be closed or folded into the gateway install canonical. |
| #62764 | keep_related | planned | related | Related systemd ownership bug, not a true duplicate of the gateway install false-unavailable canonical. |
| #63561 | close_duplicate | blocked | duplicate | Blocked by require_fix_before_close until a #44417 fix PR exists or lands. |
| #65184 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main. |
| #52293 | route_security | planned | security_sensitive | Security-sensitive linked PR must not be closed, merged, labeled, commented on, or used as the ProjectClownfish fix path. |
| cluster:ghcrawl-156597-autonomous-smoke | fix_needed | planned |  | A narrow credited replacement fix is needed for the non-security #44417/#63561 user-systemd false-unavailable failure family. |
| cluster:ghcrawl-156597-autonomous-smoke | build_fix_artifact | planned |  | Build a replacement fix plan that the deterministic executor can apply after preparing a target checkout. |
| cluster:ghcrawl-156597-autonomous-smoke | open_fix_pr | blocked |  | Implementation is blocked on executor target checkout preparation; classifications and fix artifact remain usable. |

## Needs Human

- none
