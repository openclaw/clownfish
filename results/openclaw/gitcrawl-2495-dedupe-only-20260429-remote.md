---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2495-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133520626"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133520626"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.979Z"
canonical: "https://github.com/openclaw/openclaw/tree/585c2bdba38992564a987199850ff0c49e99c665"
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2495-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133520626](https://github.com/openclaw/clownfish/actions/runs/25133520626)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/585c2bdba38992564a987199850ff0c49e99c665

## Summary

Hydrated state shows the local-store open candidate is already closed, and every seeded or first-hop linked ref in this cluster is closed. No GitHub mutation is planned. The canonical path is current main at 585c2bdba38992564a987199850ff0c49e99c665, where the plain-HTTP localhost Control UI approval path is handled by preserving scopes for allowed insecure-local auth rather than widening client-id approval detection.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #51932 | keep_closed | skipped | fixed_by_candidate | Already closed; current main is the canonical fixed behavior. |
| #51955 | keep_closed | skipped | superseded | Closed historical PR; superseded by current main behavior, not a merge or close target. |
| #52178 | keep_closed | skipped | superseded | Already closed; stale local-store open-candidate status is resolved by hydrated state. |
| #52302 | keep_closed | skipped | superseded | Closed predecessor PR; historical evidence only. |
| #53044 | keep_closed | skipped | superseded | Already closed; superseded by current main behavior and not a mutation target. |

## Needs Human

- none
