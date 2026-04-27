---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156598-autonomous-smoke"
mode: "autonomous"
run_id: "24982562371"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982562371"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:43:00.249Z"
canonical: "https://github.com/openclaw/openclaw/pull/72331"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72331"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 4
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156598-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982562371](https://github.com/openclaw/clownfish/actions/runs/24982562371)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72331

## Summary

Canonical representative #68397 is now closed. Hydrated evidence shows the narrow replacement/current-main path is #72331, with current main reported as implementing the ACP-only streamTo/resumeSessionId tolerance. Security-sensitive PRs #63121 and #66720 are quarantined only. Open ordinary duplicate reports can be closed against #72331/current main; broader or under-hydrated related items stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 4 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #58686 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #56326 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |
| #61724 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |
| #63120 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40102 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56342 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #58686 | close_superseded | planned | superseded | Useful but stale contributor PR is covered by the already-landed replacement/current-main fix path. |
| #63121 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #64787 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #65282 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #66720 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #68397 | keep_closed | skipped | superseded | Original representative is obsolete and already closed; no mutation is valid. |
| #69170 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56326 | close_fixed_by_candidate | planned | fixed_by_candidate | Open duplicate issue is covered by the current-main fix path. |
| #61724 | close_fixed_by_candidate | planned | fixed_by_candidate | Open duplicate issue is covered by the current-main fix path. |
| #63120 | close_fixed_by_candidate | planned | fixed_by_candidate | Open duplicate issue is covered by the current-main fix path. |
| #59225 | keep_related | planned | related | Related broader feature request; not a true duplicate and should stay open. |
| #67276 | keep_independent | planned | independent | Independent PR outside the sessions_spawn ACP-only field cluster. |
| #72614 | keep_related | planned | related | Likely related duplicate/replacement PR, but insufficient hydrated detail for a mutating action. |

## Needs Human

- none
