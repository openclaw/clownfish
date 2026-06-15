---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-042"
mode: "plan"
run_id: "27526379674"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526379674"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.409Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# pr-inventory-mixed-20260615T0529-042

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526379674](https://github.com/openclaw/clownfish/actions/runs/27526379674)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for mixed shard 42. No GitHub mutations are planned beyond non-mutating classifications because this is not a dedupe cluster, merge/fix actions are blocked by job frontmatter, and several open PRs still need maintainer review, proof, rebase, or technical judgment.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

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
| #72764 | keep_closed | skipped | fixed_by_candidate | Already closed; no action needed in this plan run. |
| #72351 | keep_related | planned | related | Related but not closable or mergeable from this plan because current main behavior and branch conflicts require maintainer/product judgment. |
| #72254 | keep_related | planned | related | Keep open as related useful work, but review-bot findings and missing proof block closeout or merge recommendation. |
| #71482 | keep_closed | skipped | superseded | Already closed and technically blocked by review findings; no mutation planned. |
| #70002 | needs_human | planned | needs_human | Small plausible infra fix, but automation workflow behavior and maintainer review are required by the job. |
| #68725 | keep_closed | skipped | superseded | Already closed; historical related/superseded context only. |
| #73649 | needs_human | planned | needs_human | Ready-looking template change, but maintainer review/rebase judgment is explicitly required and merge is blocked by job frontmatter. |
| #79273 | keep_related | planned | related | Keep tied to #78537; it is not a duplicate or closeout target and still needs maintainer review. |
| #84860 | needs_human | planned | needs_human | Maintainer/product judgment is needed for bundled skill policy wording; no low-signal closure is allowed by job frontmatter. |
| #86079 | needs_human | planned | needs_human | Distinct hardening PR with passing checks, but security-boundary-adjacent correctness and maintainer review are required before any merge recommendation. |
| #56898 | route_security | planned | security_sensitive | Security-sensitive linked issue is out of scope for Clownfish backlog cleanup. |

## Needs Human

- #70002 requires maintainer review for risky automation workflow behavior and stale proof/rebase state.
- #73649 requires maintainer review for issue-template behavior despite passing proof/checks.
- #84860 requires maintainer/product judgment on bundled skill approval wording and active re-review context.
- #86079 requires maintainer correctness judgment for Codex plugin elicitation source verification and related security-boundary-adjacent behavior.
