---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5707-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136426946"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136426946"
head_sha: "648e71ed1e7bd7c58c0085195d8e3302fdbfa10f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T22:15:57.579Z"
canonical: "https://github.com/openclaw/openclaw/pull/44348"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44348"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-5707-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136426946](https://github.com/openclaw/clownfish/actions/runs/25136426946)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/44348

## Summary

Classified the hydrated open hook/session-context cluster. #44348 remains the best focused canonical PR for exposing sessionKey and agentId in before_agent_start and agent_end hook events. No high-confidence duplicate or superseded closeout is planned: the other open PRs/issues are related but cover distinct hook surfaces, require maintainer product/API choice, have merge blockers, or are security-routed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #44348 | keep_canonical | planned | canonical | Best surviving canonical path for the representative hook-context bug, but this autonomous dedupe-only job must not merge or repair it. |
| #18889 | keep_related | planned | related | Related lifecycle-hook work, not a true duplicate of the canonical #44348 payload-context fix. |
| #44011 | keep_related | planned | related | Related message-hook context fix with useful independent code; do not close as duplicate. |
| #47491 | keep_related | planned | related | Related plugin-hook context work with a distinct remaining scope. |
| #54725 | keep_related | planned | related | Related session-context propagation, not duplicate coverage of #44348. |
| #55742 | keep_related | planned | related | Related but independent plugin-tool context work; keep open. |
| #56036 | keep_related | planned | related | Related fallback tool-hook context fix; not a duplicate of #44348. |
| #56672 | keep_related | planned | related | Related session lifecycle hook work with unresolved review findings. |
| #59312 | route_security | planned | security_sensitive | Security-sensitive review signal on the PR itself; quarantine only #59312 and continue ordinary classification for unrelated refs. |
| #40044 | needs_human | planned | needs_human | Maintainer product/API decision needed between #40044 sessionId and #66312 sessionKey Runtime-line proposals before closure or landing. |
| #66312 | needs_human | planned | needs_human | Maintainer must choose sessionId, sessionKey, both, or neither for prompt-visible Runtime metadata. |
| #10142 | keep_related | planned | related | Related session-end subcluster tracker; leave open. |
| #13364 | keep_related | planned | related | Related internal-hooks design tracker; not a duplicate closeout target. |
| #41403 | keep_related | planned | related | Related docs follow-up, not a duplicate or superseded implementation candidate. |

## Needs Human

- #40044 and #66312 need maintainer product/API direction on the prompt-visible Runtime session identifier before either PR can be treated as canonical, duplicate, or superseded.
- #59312 is security-routed because hydrated review reports a tool policy/approval bypass concern in executeTool; central OpenClaw security should triage that PR.
