---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156739-autonomous-smoke"
mode: "autonomous"
run_id: "25039125475"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039125475"
head_sha: "866a71962207327a1ba4de2aa40ac326ff0e2ae7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:17:10.931Z"
canonical: "https://github.com/openclaw/openclaw/pull/62308"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62308"
actions_total: 11
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156739-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039125475](https://github.com/openclaw/clownfish/actions/runs/25039125475)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62308

## Summary

Classified the launchd/App Nap cluster from the hydrated preflight artifact. #62308 remains the non-security canonical ProcessType=Interactive path but is not merge-ready; plan repair of that contributor branch. #58070 and linked #72616 are quarantined to central security handling per the artifact. Duplicate closeout for #58061 is blocked until the canonical fix lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/daemon/launchd-plist.ts: core production [check:changed] src/daemon/launchd.test.ts: core test [check:changed] conflict markers [check:changed] changelog attributions [check:changed] guarded extension wildcard re-exports [check:changed] plugin-sdk wildcard re-exports [check:changed] typecheck core [check:changed] typecheck core tests [check:changed] summary 629ms ok conflict markers 259ms ok changelog attributions 367ms ok guarded extension wildcard re-exports 260ms ok plugin-sdk wildcard re-exports 1.73s ok typecheck core 2.76s failed:2 typecheck core tests |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/daemon/launchd-plist.ts: core production [check:changed] src/daemon/launchd.test.ts: core test [check:changed] conflict markers [check:changed] changelog attributions [check:changed] guarded extension wildcard re-exports [check:changed] plugin-sdk wildcard re-exports [check:changed] typecheck core [check:changed] typecheck core tests [check:changed] summary 629ms ok conflict markers 259ms ok changelog attributions 367ms ok guarded extension wildcard re-exports 260ms ok plugin-sdk wildcard re-exports 1.73s ok typecheck core 2.76s failed:2 typecheck core tests |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #58061 | close_fixed_by_candidate | skipped | fixed_by_candidate | Clear covered issue, but closeout is blocked on the canonical fix path landing. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #52270 | keep_closed | skipped | related | Already closed; historical heartbeat evidence only. |
| #52819 | keep_closed | skipped | related | Already closed; related heartbeat context only. |
| #54861 | keep_closed | skipped | related | Already closed; no closure action allowed. |
| #58061 | close_fixed_by_candidate | blocked | fixed_by_candidate | Clear covered issue, but closeout is blocked on the canonical fix path landing. |
| #58070 | route_security | planned | security_sensitive | Exact security-sensitive item must be routed to central security triage. |
| #59710 | keep_independent | planned | independent | Different platform and likely different root cause. |
| #62294 | keep_related | planned | related | Related evidence for the canonical ProcessType fix, but not safe to close as a full duplicate. |
| #62308 | fix_needed | planned | canonical | Useful contributor PR with maintainer_can_modify=true needs executor repair, fresh review, and validation before merge. |
| #66992 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #72616 | route_security | planned | security_sensitive | Security-sensitive linked item is quarantined without poisoning unrelated non-security ProcessType classification. |
| cluster:ghcrawl-156739-autonomous-smoke | build_fix_artifact | planned |  | Canonical PR is useful but not merge-ready; autonomous executor needs a concrete repair artifact. |

## Needs Human

- none
