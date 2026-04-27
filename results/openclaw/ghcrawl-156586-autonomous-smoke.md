---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156586-autonomous-smoke"
mode: "autonomous"
run_id: "24982554957"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982554957"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-27T07:42:34.473Z"
canonical: "https://github.com/openclaw/openclaw/issues/46647"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46647"
canonical_pr: null
actions_total: 20
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156586-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982554957](https://github.com/openclaw/clownfish/actions/runs/24982554957)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46647

## Summary

Hydrated state shows the original representative #47362 is already closed and superseded by a replacement Slack fix path, while #46647 remains the open non-security canonical issue for the Slack inline-button/final-update bug family. The opened replacement PR #72626 is security-sensitive in the artifact, so it is quarantined for central security handling and no merge, closeout, or post-merge action is planned. Other open prompt PRs in this over-broad cluster are independent or security-routed; already-closed refs are kept closed/skipped. Unavailable ref #39020 returned 404 and is isolated as needs_human because no live kind or updated_at can be safely proven from the artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 20 |
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
| #46647 | keep_canonical | planned | canonical | Best live non-security canonical issue for the Slack inline-button/final-update family. |
| #72626 | route_security | planned | security_sensitive | Quarantine exact security-sensitive replacement PR; do not merge, comment, close, label, or open a fix against it from this worker. |
| #47362 | keep_closed | skipped | superseded | Already closed; historical source PR evidence only. |
| #56951 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker mutation allowed. |
| #56955 | keep_closed | skipped | superseded | Already closed and superseded by the current Slack presentation-contract replacement path. |
| #45062 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central security handling. |
| #63940 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central security handling. |
| #65777 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central security handling. |
| #8813 | route_security | planned | security_sensitive | Route exact security-sensitive linked issue to central security handling. |
| #14432 | keep_independent | planned | independent | Independent prompt-guidance PR; no close or merge action in this Slack cluster. |
| #52727 | keep_independent | planned | independent | Independent feature PR with its own review/check blockers. |
| #57247 | keep_independent | planned | independent | Independent prompt feature PR; not a duplicate or replacement for the Slack issue. |
| #70605 | keep_independent | planned | independent | Independent bugfix PR belonging to the #47668 context accumulation family. |
| #47668 | keep_independent | planned | independent | Independent issue family with its own candidate PR #70605. |
| #14310 | keep_closed | skipped | independent | Already closed independent PR. |
| #32466 | keep_closed | skipped | independent | Already closed independent issue. |
| #10841 | keep_closed | skipped | security_sensitive | Already closed linked security-sensitive issue; no ProjectClownfish mutation. |
| #60017 | keep_closed | skipped | independent | Already closed independent reminder-scheduling PR. |
| #62953 | keep_closed | skipped | security_sensitive | Already closed linked security-sensitive PR. |
| #39020 | needs_human | planned | needs_human | Unavailable linked ref requires human follow-up or refreshed hydration before any per-item classification. |

## Needs Human

- #39020 returned gh: Not Found (HTTP 404) with kind unknown, state unavailable, and updated_at null; no safe per-item classification is possible from the provided artifacts.
