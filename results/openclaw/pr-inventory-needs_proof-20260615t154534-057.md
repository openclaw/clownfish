---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-057"
mode: "plan"
run_id: "27560323972-1-60"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-22T05:48:04.415Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-needs_proof-20260615T154534-057

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact supports conservative non-mutating keep_independent actions for 20 open PRs. Five listed candidate refs were not hydrated in the preflight artifact, so they are scoped needs_human until live state is available.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91533 | needs_human | blocked | needs_human | Live preflight state is missing for this candidate, so no reliable classification or mutation can be planned. |
| #80683 | keep_independent | planned | independent | Standalone useful PR; no duplicate, superseded, low-signal, or security evidence in the artifact. |
| #81208 | keep_independent | planned | independent | Keep as independent review candidate; no safe close classification is supported. |
| #81298 | keep_independent | planned | independent | Useful standalone PR with no duplicate or superseding PR identified. |
| #81299 | keep_independent | planned | independent | Independent message-delivery PR; keep for normal maintainer review. |
| #81306 | keep_independent | planned | independent | Independent compatibility fix; no duplicate or superseded evidence. |
| #81352 | keep_independent | planned | independent | Keep open as an independent PR needing proof/check repair. |
| #81407 | keep_independent | planned | independent | Independent small feature PR; no safe close classification applies. |
| #81418 | keep_independent | planned | independent | Keep as independent PR needing validation repair. |
| #81431 | keep_independent | planned | independent | Independent feature PR with failing proof/checks; keep for maintainer review. |
| #81470 | keep_independent | planned | independent | Independent bugfix PR needing proof/check and review-bot follow-up. |
| #81592 | keep_independent | planned | independent | Keep draft PR open as independent work needing proof. |
| #83868 | keep_independent | planned | independent | Independent PR needing proof follow-up, not closure. |
| #83980 | keep_independent | planned | independent | Independent PR with broad scope and a failing check; keep for maintainer triage rather than close. |
| #84023 | keep_independent | planned | independent | Independent feature PR needing normal review/check repair. |
| #84036 | keep_independent | planned | independent | Independent CLI enhancement PR; keep for review. |
| #84072 | keep_independent | planned | independent | Independent PR with unresolved validation/review-bot surface; keep open. |
| #84111 | keep_independent | planned | independent | Independent auth-provider PR needing maintainer review/proof, not automated closeout. |
| #84122 | keep_independent | planned | independent | Independent small PR needing proof follow-up. |
| #84123 | keep_independent | planned | independent | Independent provider feature PR needing proof and maintainer review. |
| #84161 | keep_independent | planned | independent | Keep independent; security routing is not supported by the artifact, and the broad failing PR needs normal maintainer review. |
| #84248 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #84280 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #84300 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #84325 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |

## Needs Human

- #91533: listed candidate missing from hydrated preflight artifact; live target kind and updated_at unavailable.
- #84248: listed candidate missing from hydrated preflight artifact; live target kind and updated_at unavailable.
- #84280: listed candidate missing from hydrated preflight artifact; live target kind and updated_at unavailable.
- #84300: listed candidate missing from hydrated preflight artifact; live target kind and updated_at unavailable.
- #84325: listed candidate missing from hydrated preflight artifact; live target kind and updated_at unavailable.
