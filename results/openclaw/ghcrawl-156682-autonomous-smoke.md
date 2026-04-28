---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156682-autonomous-smoke"
mode: "autonomous"
run_id: "25070632559"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25070632559"
head_sha: "1f1d8801702d997cb2b549f0a830f45ccbd9844c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T18:37:00.727Z"
canonical: "https://github.com/openclaw/openclaw/issues/55532"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55532"
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156682-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25070632559](https://github.com/openclaw/clownfish/actions/runs/25070632559)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55532

## Summary

Classified the Feishu WebSocket reconnect cluster using the hydrated preflight artifact. Keep #55532 as the primary open canonical for the PingInterval/backoff/token-cache thread, keep #52618 open as the related supervisor/retry-exhaustion follow-up, close only the open superseded prototype PR #55619 after credit-preserving comment, route security-sensitive hydrated PR refs to central security, and build a narrow fix artifact for the remaining non-security supervisor gap tracked by #52618.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/73739 | clownfish/ghcrawl-156682-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #55619 | close_superseded | blocked | superseded | target is not listed in job candidates |
| #73739 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #55532 | keep_canonical | planned | canonical | Open canonical issue remains the safest coordination point for the PingInterval/backoff/token-cache family. |
| #52618 | keep_related | planned | related | Related but not a true duplicate; keep open and create a narrow fix artifact for this subfamily. |
| #55531 | keep_closed | skipped | duplicate | Already closed items must not receive close actions. |
| #59753 | keep_closed | skipped | duplicate | Already closed items must not receive close actions. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed after the merged repair; no additional close action is valid. |
| #55619 | close_superseded | planned | superseded | The useful contributor idea has been credited and carried forward by merged #72411; #55619 itself is not merge-ready and should not remain as a parallel prototype path. |
| #55546 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |
| #1 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog mutation scope. |
| #57978 | route_security | planned | security_sensitive | Route the exact security-sensitive PR to central security while continuing non-security classification for #52618. |
| #68865 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope. |
| #72411 | route_security | planned | security_sensitive | Route the exact security-sensitive merged PR to central security handling without poisoning unrelated non-security cleanup. |
| #2 | keep_closed | skipped | independent | Closed independent context ref; no action. |
| #69254 | keep_closed | skipped | independent | Closed historical context only. |
| #69255 | keep_closed | skipped | related | Closed related context; no close action is valid. |
| #69304 | keep_closed | skipped | independent | Closed independent context ref. |
| cluster:ghcrawl-156682-autonomous-smoke | fix_needed | planned |  | A narrow non-security fix path is needed for the #52618 supervisor/retry-exhaustion subfamily, separate from the security-routed PR. |
| cluster:ghcrawl-156682-autonomous-smoke | build_fix_artifact | planned |  | No non-security viable PR is available for #52618, so the executor needs a narrow fix artifact. |

## Needs Human

- none
