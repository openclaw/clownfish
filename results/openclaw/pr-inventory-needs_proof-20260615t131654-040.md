---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-040"
mode: "plan"
run_id: "27549045404"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045404"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.673Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T131654-040

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045404](https://github.com/openclaw/clownfish/actions/runs/27549045404)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 40 hydrated open pull requests. The job is not a dedupe cluster, no canonical was provided or selected, no security-sensitive item was detected in the preflight artifact, and merge/fix/raise_pr are blocked. One PR with explicit maintainer signal is routed to human review; the rest are kept independent as unique PRs that should not be closed or merged as part of this inventory shard.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #93039 | keep_independent | planned | independent | Unique open PR in a needs-proof inventory shard; no duplicate, superseding canonical, or closeout evidence is hydrated. |
| #93108 | keep_independent | planned | independent | Unique open PR in an inventory shard; keep out of dedupe/closure. |
| #87330 | keep_independent | planned | independent | Independent PR with unresolved proof/merge blockers; not closable from this inventory shard. |
| #87377 | keep_independent | planned | independent | Broad unique feature PR; keep independent rather than dedupe-close. |
| #93157 | keep_independent | planned | independent | Unique open UI fix with proof still needed. |
| #90966 | keep_independent | planned | independent | Independent channel health-monitor fix requiring proof. |
| #90969 | keep_independent | planned | independent | Unique open channel fix; keep independent. |
| #90990 | keep_independent | planned | independent | Small independent cleanup PR in proof inventory. |
| #90997 | keep_independent | planned | independent | Independent Telegram delivery fix awaiting proof. |
| #91002 | keep_independent | planned | independent | Unique open TUI fix; keep independent. |
| #91015 | keep_independent | planned | independent | Independent availability fix; proof and merge gates remain unresolved. |
| #91028 | keep_independent | planned | independent | Unique feature PR; keep independent and do not route security absent a boundary-bypass claim. |
| #91050 | keep_independent | planned | independent | Independent Active Memory/iMessage fix awaiting proof. |
| #91055 | keep_independent | planned | independent | Unique Codex context fix; keep independent. |
| #87480 | keep_independent | planned | independent | Independent provider fix with proof still needed. |
| #93160 | keep_independent | planned | independent | Potentially useful independent PR, not a dedupe closeout target. |
| #93161 | keep_independent | planned | independent | Independent performance fix; keep out of inventory cleanup mutations. |
| #49022 | needs_human | planned | needs_human | Specific maintainer judgment is required before any close/repair/merge path for this draft maintainer-signaled PR. |
| #43659 | keep_independent | planned | independent | Independent auth-provider-adjacent bug fix; keep non-mutating. |
| #60842 | keep_independent | planned | independent | Independent embedded-runner bug fix with unresolved proof/check blockers. |
| #75208 | keep_independent | planned | independent | Large independent feature PR; not safe for inventory closeout. |
| #87709 | keep_independent | planned | independent | Independent Feishu behavior fix awaiting proof. |
| #87777 | keep_independent | planned | independent | Useful independent feature PR; keep non-mutating in this inventory shard. |
| #87799 | keep_independent | planned | independent | Independent validated fix; do not close or merge from plan inventory. |
| #87863 | keep_independent | planned | independent | Independent QQBot fix awaiting real behavior proof. |
| #87900 | keep_independent | planned | independent | Broad draft feature PR should remain independent, not dedupe-closed. |
| #87941 | keep_independent | planned | independent | Independent UI feature PR with proof/dependency review still needed. |
| #88894 | keep_independent | planned | independent | Independent docs PR; no close-style action is allowed or proven. |
| #88013 | keep_independent | planned | independent | Independent useful fix; no dedupe/close action. |
| #88023 | keep_independent | planned | independent | Independent hooks feature/fix with proof still needed. |
| #88078 | keep_independent | planned | independent | Independent validated fix; keep open for normal review path. |
| #88082 | keep_independent | planned | independent | Independent draft provider update; keep open. |
| #88112 | keep_independent | planned | independent | Independent useful bug fix; keep non-mutating. |
| #88193 | keep_independent | planned | independent | Independent draft Telegram delivery fix; keep open. |
| #88224 | keep_independent | planned | independent | Independent gateway/update fix awaiting proof. |
| #88239 | keep_independent | planned | independent | Independent agents/message-delivery fix. |
| #88240 | keep_independent | planned | independent | Independent larger UI/gateway fix; keep open for normal review. |
| #88249 | keep_independent | planned | independent | Broad independent desktop feature PR; not inventory-closeable. |
| #88336 | keep_independent | planned | independent | Independent Codex native command behavior fix. |
| #88396 | keep_independent | planned | independent | Independent cron configurability feature/fix. |

## Needs Human

- #49022 requires maintainer judgment because it is draft, carries the maintainer label, has failed proof/checks, and has a human review concern; no fix/replacement path is allowed in this plan-mode job.
