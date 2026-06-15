---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-284-feature-clean-plan-20260615-a"
mode: "plan"
run_id: "27523898808"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523898808"
head_sha: "654d0f6d994e0cc77c0c4725aa1626ba02f19a57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:27:14.549Z"
canonical: "#79281"
canonical_issue: "#79281"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-284-feature-clean-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523898808](https://github.com/openclaw/clownfish/actions/runs/27523898808)

Workflow conclusion: success

Worker result: planned

Canonical: #79281

## Summary

Plan-only classification: keep #79281 as the open canonical for the SDK/default thread-binding preset request. Keep #42986 and #53548 open as related but distinct product scopes, quarantine the security-sensitive linked #60737, and avoid close/merge/fix recommendations because this job disallows merge, fix, raise_pr, and instant close.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #23414 | keep_closed | skipped | superseded | Already closed historical context; no action to apply. |
| #42986 | keep_related | planned | related | Same feature family, but Telegram-specific scope and active PR path make it related rather than a duplicate of #79281. |
| #49592 | keep_closed | skipped | fixed_by_candidate | Already closed historical context; no action to apply. |
| #53548 | keep_related | planned | related | Adjacent root cause family, but the requested product contract differs enough that closing as duplicate would lose scope. |
| #60737 | route_security | planned | security_sensitive | Security-sensitive linked context is out of ProjectClownfish cleanup scope. |
| #79281 | keep_canonical | planned | canonical | Best surviving canonical for this cluster's SDK/default thread-binding preset scope. |
| #82023 | keep_related | planned | related | Useful related candidate for the Telegram-specific issue #42986, not a mergeable or canonical fix in this plan-mode cluster. |
| #91093 | keep_related | planned | related | Related implementation path for part of #53548, but not a canonical fix for #79281 and not mergeable under this job. |

## Needs Human

- none
