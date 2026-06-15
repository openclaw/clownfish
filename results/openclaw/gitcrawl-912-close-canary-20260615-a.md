---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-912-close-canary-20260615-a"
mode: "execute"
run_id: "27524392194"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27524392194"
head_sha: "4118ba9e761acc8ee31a1b4e0aaa8db96022d2fe"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:41:17.164Z"
canonical: "#86550"
canonical_issue: "#86550"
canonical_pr: "#89799"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-912-close-canary-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27524392194](https://github.com/openclaw/clownfish/actions/runs/27524392194)

Workflow conclusion: success

Worker result: planned

Canonical: #86550

## Summary

Classified the live hydrated cluster as one duplicate issue and one canonical issue with an active linked PR. #86550 is the better surviving canonical issue because it carries the same reporter, same Windows npm-global OpenClaw 2026.5.22 / Node 24.1.0 CLI startup hang reproduction, clearer regression framing, and the hydrated active fix path in #89799. #86546 can be closed as a duplicate of #86550. #89799 is related active fix work but is not mergeable by this job because merge and fix actions are blocked.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #86546 | close_duplicate | executed | duplicate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #86550 | keep_canonical | planned | canonical | Best surviving issue thread for this root cause; keep open for reproduction, validation, and linked fix follow-up. |
| #86546 | close_duplicate | planned | duplicate | True duplicate of #86550 with no unique remaining work in the hydrated body or comments. |
| #89799 | keep_related | planned | related | Active linked fix path for the canonical issue, but merge/fix actions are outside this execute job's allowed actions. |

## Needs Human

- none
