---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156623-autonomous-smoke"
mode: "autonomous"
run_id: "24980258159"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980258159"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:39:42.942Z"
canonical: "https://github.com/openclaw/openclaw/issues/34574"
canonical_issue: "https://github.com/openclaw/openclaw/issues/34574"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156623-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980258159](https://github.com/openclaw/clownfish/actions/runs/24980258159)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/34574

## Summary

Used the hydrated preflight/fix artifacts as live state. No GitHub mutations were performed; actions are planned or blocked for the applicator.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| execute_fix | skipped |  |  | fix artifact source PR #41502 is security-sensitive |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41502 | route_security | planned | security_sensitive | Security-sensitive item must route to central OpenClaw security handling only. |
| #62775 | route_security | planned | security_sensitive | Security-sensitive and broad trust-boundary-adjacent PR must route to central security handling only. |
| #34574 | fix_needed | planned | canonical | Open canonical issue remains real from hydrated artifact; needs a narrow fix path rather than closure. |
| #52126 | keep_closed | skipped | superseded | Already closed historical context; canonical path is now #34574 plus a new narrow fix artifact. |
| #52759 | keep_related | planned | related | Related loop-detection/defaults work, but not a true duplicate or mergeable fix for #34574. |
| #56403 | keep_related | planned | related | Related default-enable work with unresolved bot findings and failing checks; keep open as related. |
| #68673 | keep_independent | planned | independent | Different tool and root cause; not part of this exec/default-enable closeout cluster. |
| #70877 | keep_related | planned | related | Related and plausibly useful, but failing checks and unresolved bot findings block merge or closeout. |
| cluster:ghcrawl-156623-autonomous-smoke | build_fix_artifact | planned |  | A new narrow fix artifact is needed for the still-open canonical issue because no open PR is safe to merge automatically. |

## Needs Human

- none
