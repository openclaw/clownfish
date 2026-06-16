---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2796-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300853"
workflow_run_id: "27599300853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300853"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:48:18.537Z"
canonical: "https://github.com/openclaw/openclaw/pull/82253"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/82253"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2796-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300853](https://github.com/openclaw/clownfish/actions/runs/27599300853)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/82253

## Summary

Autonomous classification only. The original Feishu representative #42322 is now closed, current main at 999d44340fa5436b5f8305e0df4dc537b74df83b still has no Feishu replyToMode/read-only surface, and this job forbids fix or merge work. The only open hydrated non-security candidate is Slack PR #82253, which is a related Slack subfamily rather than a Feishu canonical replacement. Security-sensitive #39905 is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| cluster:gitcrawl-2796-dedupe-only-20260429-remote | needs_human | blocked | needs_human | The Feishu subfamily has no open hydrated canonical after representative drift, and selecting a new tracking path requires maintainer direction or a separate fix-enabled job. |
| #82253 | keep_canonical | planned | canonical | Keep #82253 as the live Slack subfamily canonical; it is not a Feishu replacement and merge is not allowed by this job. |
| #39905 | route_security | planned | security_sensitive | Route only #39905 to central OpenClaw security handling; do not mutate, close, merge, or fix it through Clownfish. |
| #39762 | keep_closed | skipped | related | Closed historical Feishu context; no close action is valid. |
| #42322 | keep_closed | skipped | related | Closed original representative; it cannot be the live canonical for a closure or merge path. |
| #47990 | keep_closed | skipped | related | Closed context ref; no mutation is valid. |
| #51848 | keep_closed | skipped | superseded | Closed superseded Slack context; #82253 is the live Slack path. |
| #57309 | keep_closed | skipped | superseded | Closed superseded Slack context; #82253 is the live Slack path. |
| #70579 | keep_closed | skipped | related | Closed Telegram context; no mutation is valid. |
| #32980 | keep_closed | skipped | related | Closed linked context issue; no mutation is valid. |
| #39880 | keep_closed | skipped | related | Closed linked context PR; no mutation is valid. |
| #51836 | keep_closed | skipped | independent | Closed independent context; no mutation is valid. |
| #71696 | keep_closed | skipped | related | Closed Telegram context; no mutation is valid. |

## Needs Human

- Feishu replyToMode/read-only follow-up needs maintainer direction or a separate fix-enabled job because all hydrated Feishu PRs are closed and current main still lacks those Feishu-specific surfaces.
