---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166002-agentic-merge"
mode: "autonomous"
run_id: "24951663323"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24951663323"
head_sha: "6415dec173e0f2859db51958e43ea7fb9bdb2d3c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T07:59:30.579Z"
canonical: "https://github.com/openclaw/openclaw/issues/65184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65184"
canonical_pr: null
actions_total: 12
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166002-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24951663323](https://github.com/openclaw/projectclownfish/actions/runs/24951663323)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65184

## Summary

Representative #65184 is no longer an open canonical issue; it is now the closed canonical path for the migrated-root missing-unit subfamily and is marked fixed on `main` by the maintainer comment referencing commit `e4e69c5bc6`. The remaining open issues in this cluster (#39673, #44417, #63561) are still in the same gateway/systemd area but are not high-confidence duplicates of #65184, so they should stay open as related follow-up work. Linked PR #52293 is explicitly security-sensitive in the preflight artifact and is quarantined out of backlog cleanup.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65184 | keep_closed | skipped | canonical | Closed canonical path for the migrated-root systemd-user missing-unit race; retain only as historical canonical evidence. |
| #39673 | keep_related | planned | related | Same subsystem, different failure family from #65184; leave open for separate validation against the broader user-bus-unavailable path. |
| #44417 | keep_related | planned | related | Related Linux/systemd install bug, but not a duplicate of #65184 and not covered by a viable hydrated canonical PR here. |
| #63561 | keep_related | planned | related | Keep open as related follow-up; not safe to close under #65184 and not high-confidence duplicate of #44417 from the provided hydration alone. |
| #52293 | route_security | planned | security_sensitive | Security-sensitive linked PR must be quarantined to central security handling and must not be used as a dedupe or merge path for ordinary backlog cleanup. |
| #54429 | keep_closed | skipped | duplicate | Already closed duplicate; no further action. |
| #42025 | keep_closed | skipped | related | Closed item in the same area but not the same root cause as #65184. |
| #42051 | keep_closed | skipped | superseded | Closed broken PR with unresolved review blockers; not a viable canonical merge path. |
| #44070 | keep_closed | skipped | related | Already closed related report; distinct failure family and no action should be taken through the quarantined PR. |
| #54517 | keep_closed | skipped | related | Closed related issue; no additional mutation. |
| #57188 | keep_closed | skipped | related | Historical related issue only. |
| #68287 | keep_closed | skipped | independent | Different product path and root cause; keep independent from the gateway-install canonical family. |

## Needs Human

- none
