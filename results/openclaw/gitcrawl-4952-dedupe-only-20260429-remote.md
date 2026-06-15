---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4952-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136018357"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136018357"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.259Z"
canonical: "https://github.com/openclaw/openclaw/issues/69422"
canonical_issue: "https://github.com/openclaw/openclaw/issues/69422"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-4952-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136018357](https://github.com/openclaw/clownfish/actions/runs/25136018357)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/69422

## Summary

Autonomous dedupe pass selected #69422 as the current open canonical for the streamed/block and queued Google Chat thread-routing subfamily. The closed representative #41788 stays historical evidence only. The open candidates are not safe duplicate closeouts: they split into related Google Chat threading, replyToMode, add-on payload, space routing, OAuth/non-mention delivery, and session-thread follow-up work. No security-sensitive hydrated refs were detected, and no merge or fix PR action is allowed by this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #58514 | close_fixed_by_candidate | skipped | fixed_by_candidate | Direct candidate fix exists, but closure is blocked until #58993's review/test gap is addressed or maintainer accepts the risk. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #69422 | keep_canonical | planned | canonical | Best current open canonical for the thread metadata leak subfamily after closed representative #41788 became historical context. |
| #39554 | keep_related | planned | related | Related Google Chat thread-resource bug, not a duplicate closeout. |
| #42510 | keep_related | planned | related | Related to the canonical thread-routing family, but the direct PR path is not merge-ready and the issue is not safe to close. |
| #44347 | keep_related | planned | related | Related mixed-scope Google Chat feature/bug report with unique remaining work. |
| #58514 | close_fixed_by_candidate | blocked | fixed_by_candidate | Direct candidate fix exists, but closure is blocked until #58993's review/test gap is addressed or maintainer accepts the risk. |
| #65007 | keep_related | planned | related | Related multi-topic Google Chat add-on/threading issue with unique remaining work. |
| #9764 | keep_related | planned | related | Related Google Chat provider capability follow-up, not part of this dedupe closeout. |
| #65326 | keep_related | planned | related | Related add-on compatibility issue that should remain open. |
| #58993 | keep_related | planned | related | Useful related contributor PR, but not a merge or closure candidate in this job. |
| #65058 | keep_related | planned | related | Useful partial PR for #65007/#65326, but not enough to close the broader issue. |
| #67055 | keep_related | planned | related | Useful related PR, but unresolved review findings block merge and fixed-by-candidate closeout. |
| #68967 | keep_related | planned | related | Related broader feature PR, not the canonical dedupe target and not merge-ready in this job. |

## Needs Human

- none
