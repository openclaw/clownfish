---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238818-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102877107"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102877107"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:45:26.118Z"
canonical: "https://github.com/openclaw/openclaw/issues/55532"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55532"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238818-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102877107](https://github.com/openclaw/clownfish/actions/runs/25102877107)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/55532

## Summary

Representative PR #55619 is already closed. The best live canonical tracker for the remaining Feishu WebSocket reconnect/backoff work is open issue #55532, but the active PR path is ambiguous because #73945 and #73998 overlap, #73945 has failing checks and review blockers, and #73998 is dirty with an actionable PingTimeout review blocker. No close, merge, label, comment, or fix PR action is planned from this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #42354 | keep_related | planned | related | Keep open as related Feishu WebSocket work with unique reproduction detail. |
| #45674 | keep_closed | skipped | superseded | Historical closed source PR superseded by merged #72411. |
| #46472 | keep_closed | skipped | superseded | Historical closed heartbeat PR superseded by merged #72411. |
| #55532 | keep_canonical | planned | canonical | Best live issue canonical for the remaining reconnect/backoff/PingInterval guard work. |
| #55619 | keep_closed | skipped | superseded | Closed source PR remains superseded evidence, not a mutation target. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed by merged candidate #72411. |
| #68865 | keep_closed | skipped | superseded | Historical closed source PR superseded by merged #72411. |
| #72411 | keep_closed | skipped | fixed_by_candidate | Merged canonical fix for the earlier subfamily; no action needed. |
| #73945 | needs_human | planned | needs_human | Conflicting open PR path requires maintainer routing before any close, merge, or replacement decision. |
| #73998 | needs_human | planned | needs_human | Potential canonical repair, but conflict with #73945 plus dirty merge state and actionable review finding require maintainer decision. |

## Needs Human

- Choose the canonical open PR path for the remaining #55532 Feishu WebSocket reconnect/backoff repair: #73945 has failing checks and actionable review findings, while #73998 is narrower with passing checks but dirty and has an actionable PingTimeout review finding.
