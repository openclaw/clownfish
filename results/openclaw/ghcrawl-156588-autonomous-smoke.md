---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24984731618"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24984731618"
head_sha: "26374cdd2f49f5683850f92c1448eb8af1cfa65f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T08:38:28.440Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: null
actions_total: 21
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24984731618](https://github.com/openclaw/clownfish/actions/runs/24984731618)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Hydrated state shows the original representative #50970 is already closed. The surviving non-security canonical path for the nodes list/status mismatch is the open issue #46871. The available open replacement PR #72619 is security-sensitive and must be quarantined, so no merge or fixed-by-candidate closeout is safe. A narrow credited replacement fix artifact is needed for the non-security nodes mismatch. Adjacent /model and WebChat/context refs are kept open or closed according to their own hydrated state, not folded into the nodes canonical path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/cli/nodes-cli/register.status.ts: core production [check:changed] src/cli/program.nodes-basic.e2e.test.ts: core test [check:changed] conflict markers [check:changed] typecheck core [check:changed] typecheck core tests [check:changed] summary 489ms ok conflict markers 992ms ok typecheck core 1.64s failed:2 typecheck core tests |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | keep_canonical | planned | canonical | Best surviving non-security canonical for the nodes list/status source-of-truth family. |
| #46894 | keep_related | planned | related | Adjacent /model slash-command family, not a duplicate of the nodes canonical. |
| #46895 | keep_related | planned | related | Related to the open WebUI /model issue #46894 but not merge-ready and not part of the nodes canonical path. |
| #47069 | keep_related | planned | related | Related /model subcluster; keep open for its own review/repair path. |
| #49989 | keep_independent | planned | independent | Accidental linked context only; not in this cluster's canonical family. |
| #50847 | keep_closed | skipped | duplicate | Already closed; closed refs are historical evidence only. |
| #50871 | keep_closed | skipped | superseded | Already closed; preserve as historical credited evidence. |
| #50970 | keep_closed | skipped | superseded | Representative is obsolete and already closed. |
| #51027 | keep_closed | skipped | superseded | Already closed and too mixed to be a canonical path. |
| #51051 | keep_related | planned | related | Related useful work but not viable for automated merge or closeout; replacement fix artifact is needed. |
| #51053 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #51126 | keep_closed | skipped | fixed_by_candidate | Already closed and outside the nodes canonical path. |
| #51270 | keep_related | planned | related | Related /model subcluster; keep open for separate triage. |
| #51507 | keep_closed | skipped | fixed_by_candidate | Already closed unrelated context issue. |
| #51536 | keep_closed | skipped | superseded | Already closed unrelated context PR. |
| #65706 | keep_closed | skipped | duplicate | Already closed duplicate evidence. |
| #65772 | keep_closed | skipped | superseded | Already closed and credited; cannot be re-opened or mutated by this worker. |
| #71462 | keep_closed | skipped | fixed_by_candidate | Merged unrelated context PR; closed historical evidence only. |
| #72619 | route_security | planned | security_sensitive | Quarantine exact security-sensitive PR to central OpenClaw security handling; do not comment, close, merge, or open a fix PR for this item. |
| cluster:ghcrawl-156588-autonomous-smoke | fix_needed | planned | related | No non-security merge-ready canonical PR exists for the nodes mismatch; build a narrow credited replacement artifact. |
| cluster:ghcrawl-156588-autonomous-smoke | build_fix_artifact | planned |  | Prepare a replacement fix plan for the executor while preserving contributor credit. |

## Needs Human

- none
