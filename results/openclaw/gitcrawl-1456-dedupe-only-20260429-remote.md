---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1456-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130272602"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130272602"
head_sha: "d8402244adeff9d7d53d01dc45e960e2851caca3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.852Z"
canonical: "https://github.com/openclaw/openclaw/pull/73958"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73958"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1456-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130272602](https://github.com/openclaw/clownfish/actions/runs/25130272602)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73958

## Summary

Autonomous classification only. The original canonical hint #40147 is already closed; the closest live canonical replacement for the root_id/thread_id routing family is #73958. The cluster is over-broad, so P2P thread routing, topic-root resolution, slash-command handling, and typing/ack UX were split into related subfamilies. No close actions are safe in this pass because the useful contributor PRs are either not credited by a landed replacement, still need review/repair, or are waiting on open fix PRs. #74001 is quarantined because a hydrated security-review bot comment raises a DoS/CWE finding.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #40147 | keep_closed | skipped | superseded | Closed historical canonical hint; keep as evidence only. |
| #38808 | keep_closed | skipped | superseded | Closed source PR for the P2P subfamily; keep as evidence only. |
| #73958 | keep_canonical | planned | canonical | Best live canonical for the closed #40147 root_id/thread_id routing family; merge/fix actions are blocked by job policy and review preflight is not clean. |
| #39507 | keep_related | planned | related | Related to the #73958 semantics family, but not safe to close as superseded in this pass. |
| #38806 | keep_canonical | planned | canonical | Canonical open issue for the P2P direct-message thread regression. |
| #73972 | keep_canonical | planned | canonical | Best live canonical PR for #38806; keep open for the applicator/maintainer merge path. |
| #74001 | route_security | planned | security_sensitive | Security-review bot raised a vulnerability-shaped DoS finding; route only #74001 to central security handling. |
| #66631 | keep_canonical | planned | canonical | Canonical open issue for the Feishu topic-thread root-resolution subfamily. |
| #60848 | keep_related | planned | related | Useful related contributor PR for #66631, but not safe to merge or close around in this dedupe-only job. |
| #67069 | keep_related | planned | related | Related metadata PR in the #66631/#60848 subfamily; not closeable as a duplicate or fixed candidate. |
| #44118 | keep_independent | planned | independent | Different root cause and no safe credited close path in this cluster. |
| #47961 | keep_related | planned | related | Related Feishu UX work with unresolved review defects; keep open. |
| #55521 | keep_related | planned | related | Separate Feishu typing/ack subfamily with unresolved review blockers. |
| #67783 | keep_related | planned | related | Related but independent typing-reaction target fix; keep open. |
| #69572 | keep_related | planned | related | Related Feishu typing behavior issue; keep open for a separate maintainer decision. |

## Needs Human

- none
