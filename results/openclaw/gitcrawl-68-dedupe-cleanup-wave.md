---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-68-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608148864"
workflow_run_id: "27608148864"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608148864"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.381Z"
canonical: "https://github.com/openclaw/openclaw/pull/88713"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/88713"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-68-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608148864](https://github.com/openclaw/clownfish/actions/runs/27608148864)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/88713

## Summary

Classified seven open PRs from the hydrated preflight artifact. No close/comment/label mutations are planned: the open PRs are not high-confidence duplicates of #88713, several have distinct scopes or unresolved review/check blockers, and the job does not allow merge or fix PR actions. #88713 remains the representative canonical PR for this cluster only. Validator security findings for #88875 and #89157 are repaired by routing those exact PR refs to central security handling without using a cluster-scoped security action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #88713 | keep_canonical | planned | canonical | Best live representative for the cluster, but no merge action is allowed. |
| #81786 | keep_independent | planned | independent | Distinct code/guardrail work with unresolved review state, not a duplicate of the helper-comment docs PR. |
| #83874 | keep_independent | planned | independent | Distinct feature/runtime-contract work with failing check-docs; no high-confidence duplicate closeout is available. |
| #88639 | keep_related | planned | related | Related documentation follow-up in the same post-#88554 family, but not a true duplicate of #88713. |
| #88875 | route_security | planned | security_sensitive | Security-sensitive validator finding must be routed for the exact PR ref and kept out of dedupe cleanup automation. |
| #89157 | route_security | planned | security_sensitive | Security-sensitive validator finding must be routed for the exact PR ref and kept out of dedupe cleanup automation. |
| #89295 | keep_related | planned | related | Related documentation PR with unique scope and unresolved bot review comments; not safe to close as duplicate. |

## Needs Human

- none
