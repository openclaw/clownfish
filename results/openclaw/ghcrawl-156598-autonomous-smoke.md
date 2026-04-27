---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156598-autonomous-smoke"
mode: "autonomous"
run_id: "24979742859"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979742859"
head_sha: "8806d2971f220668a5fdb92adf8595525bd6678b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:26:40.861Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 6
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156598-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979742859](https://github.com/openclaw/clownfish/actions/runs/24979742859)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated artifact shows the original representative #68397 is now closed and superseded by merged replacement PR #72331. Because #72331 is closed after merge, it is treated as the landed candidate fix rather than an open canonical target. Plan post-merge closeout for open duplicate issue reports, supersede redundant open PRs where credit is preserved, quarantine security-sensitive PRs #63121 and #66720, and keep the broader schema-filtering feature work separate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 6 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | post_merge_close | blocked | fixed_by_candidate | target is not listed in job candidates |
| #61724 | post_merge_close | blocked | fixed_by_candidate | target is not listed in job candidates |
| #63120 | post_merge_close | blocked | fixed_by_candidate | target is not listed in job candidates |
| #64714 | post_merge_close | blocked | fixed_by_candidate | target is not listed in job candidates |
| #58686 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #72614 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72331 | keep_closed | skipped | fixed_by_candidate | Merged fix path for this cluster; closed PRs must not be kept as open canonical targets. |
| #56326 | post_merge_close | planned | fixed_by_candidate | Open duplicate issue is covered by merged candidate PR #72331. |
| #61724 | post_merge_close | planned | fixed_by_candidate | Open duplicate issue is covered by merged candidate PR #72331. |
| #63120 | post_merge_close | planned | fixed_by_candidate | Open duplicate issue is covered by merged candidate PR #72331. |
| #64714 | post_merge_close | planned | fixed_by_candidate | Open duplicate issue is covered by merged candidate PR #72331. |
| #58686 | close_superseded | planned | superseded | Useful contributor PR is superseded by merged replacement; closeout comment preserves credit. |
| #72614 | close_superseded | planned | superseded | Redundant ProjectClownfish replacement after #72331 merged. |
| #63121 | route_security | planned | security_sensitive | Security-sensitive hydrated ref must be routed to central OpenClaw security handling. |
| #66720 | route_security | planned | security_sensitive | Security-sensitive hydrated ref must be routed to central OpenClaw security handling. |
| #59225 | keep_related | skipped | related | Related follow-up feature scope, not a duplicate closeout target. |
| #67276 | keep_independent | skipped | independent | Independent open PR outside this cluster root cause. |
| #40102 | keep_closed | skipped | superseded | Already closed historical PR. |
| #56342 | keep_closed | skipped | superseded | Already closed historical PR. |
| #64787 | keep_closed | skipped | superseded | Already closed historical PR. |
| #65282 | keep_closed | skipped | superseded | Already closed historical PR credited by merged fix. |
| #68397 | keep_closed | skipped | superseded | Original representative is obsolete and superseded by merged #72331. |
| #69170 | keep_closed | skipped | superseded | Already closed historical PR credited by merged fix. |
| #43556 | keep_closed | skipped | fixed_by_candidate | Already closed issue covered by merged #72331. |
| #53370 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate issue. |
| #56193 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate issue. |
| #59390 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate issue. |
| #60965 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate issue. |
| #66719 | keep_closed | skipped | related | Already closed related provider/schema issue; no mutation. |
| #66228 | keep_closed | skipped | independent | Already closed independent PR. |
| #67278 | keep_closed | skipped | independent | Already closed independent PR. |

## Needs Human

- none
