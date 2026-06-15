---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523189213"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523189213"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:10:12.108Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 41
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 6
---

# gitcrawl-7-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523189213](https://github.com/openclaw/clownfish/actions/runs/27523189213)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan using the cluster preflight artifact as live state. The representative #89829 is open but is a job-declared security-signal ref, so it is routed out of Clownfish scope rather than kept as canonical. The remaining open PRs are mostly useful but distinct plugin/gateway malformed-metadata hardening drafts, with several overlapping subfamilies that need maintainer canonical selection before any close or merge recommendation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 41 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 6 |

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
| #78225 | route_security | planned | security_sensitive | Security-sensitive linked issue must be quarantined to central OpenClaw security handling. |
| #88835 | keep_related | planned | related | Useful exec-approval hardening PR; not a duplicate of the plugin metadata family and not mergeable in this plan job. |
| #88936 | keep_related | planned | related | Related to merged #88807 but not safe to close as a pure duplicate because the review calls out distinct fallback semantics. |
| #88950 | keep_related | planned | related | Distinct provider-policy hook behavior; keep as related rather than duplicate. |
| #88959 | keep_related | planned | related | Distinct provider runtime hook hardening; no close or merge action is safe in plan mode. |
| #89098 | keep_related | planned | related | Real related hardening PR, but unresolved review findings block merge and fixed-by closure. |
| #89753 | keep_related | planned | related | Plausible canonical for command-spec subfamily, but not a cluster-wide canonical and merge is blocked by plan job. |
| #89755 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central OpenClaw security handling. |
| #89757 | keep_related | planned | related | Related node policy metadata hardening; not safe to dedupe while security-signal sibling #89829 is quarantined. |
| #89759 | route_security | planned | security_sensitive | Job-declared security-signal PR must be quarantined even though the compact artifact does not mark security_sensitive=true. |
| #89763 | needs_human | planned | needs_human | Maintainer must choose or combine the session-action hardening path before any closure/merge recommendation. |
| #89794 | keep_related | planned | related | Distinct Control UI descriptor projection hardening; keep as related. |
| #89795 | keep_related | planned | related | Related cleanup metadata hardening; not duplicate of runtime lifecycle cleanup without maintainer selection. |
| #89798 | needs_human | planned | needs_human | Classification is blocked on rerunning/repairing the failed review for this specific PR. |
| #89805 | keep_related | planned | related | Distinct typed-hook metadata hardening; keep as related. |
| #89810 | needs_human | planned | needs_human | Maintainer canonical choice is needed for overlapping plugin service metadata drafts. |
| #89819 | keep_related | planned | related | Related node-host metadata surface; no duplicate or closure evidence is clear from hydrated state. |
| #89824 | keep_related | planned | related | Related reload metadata hardening; #90168 is security-signal routed, so no canonical closeout is safe. |
| #89829 | route_security | planned | security_sensitive | The representative is open but security-signal route-only, so it cannot be the live Clownfish canonical. |
| #89836 | keep_related | planned | related | Security-adjacent hardening only; keep related rather than route unless maintainers classify it as security-sensitive. |
| #89852 | needs_human | planned | needs_human | Maintainer must pick or combine the session-action canonical branch. |
| #89857 | keep_related | planned | related | Related cleanup hardening with unresolved review findings; no closure or merge recommendation. |
| #89898 | keep_related | planned | related | Likely better service-metadata candidate, but canonical choice remains a maintainer decision. |
| #89979 | keep_related | planned | related | Distinct provider auto-enable metadata hardening; keep related. |
| #89983 | keep_related | planned | related | Related provider attribution hardening; not a duplicate of provider runtime/capability rows. |
| #89988 | keep_related | planned | related | Keep related pending maintainer choice on UI descriptor projection scope. |
| #89990 | keep_related | planned | related | Related narrower gateway descriptor PR; #90054 looks like the broader candidate, but closure should wait for maintainer selection. |
| #89991 | keep_related | planned | related | Related narrower gateway method-list branch; keep pending canonical choice. |
| #89993 | keep_related | planned | related | Related inspect/status descriptor projection, not fully covered by gateway runtime descriptor branches in hydrated evidence. |
| #89999 | keep_related | planned | related | Distinct CLI descriptor row hardening; keep related. |
| #90002 | keep_related | planned | related | Related but distinct CLI metadata normalization path. |
| #90005 | keep_related | planned | related | Related captured-registration CLI metadata hardening; keep related. |
| #90026 | keep_related | planned | related | Likely narrower than #90054; keep related pending canonical branch decision. |
| #90034 | needs_human | planned | needs_human | Session-action subcluster needs maintainer selection/combination after review blockers are addressed. |
| #90039 | keep_related | planned | related | Related narrower command-spec projection branch; do not close without maintainer canonical choice. |
| #90048 | keep_related | planned | related | Related provider runtime row hardening with unresolved review findings. |
| #90052 | keep_related | planned | related | Related capability provider hardening with unresolved review findings. |
| #90054 | keep_related | planned | related | Best hydrated candidate for the gateway method-descriptor subfamily, but merge/close actions are blocked by missing broad CI and plan-mode scope. |
| #90168 | route_security | planned | security_sensitive | Job-declared security-signal PR must be routed to central handling. |
| #90182 | keep_related | planned | related | Distinct plugin definition metadata failure isolation; keep related. |
| #92358 | keep_independent | planned | independent | Same file area as method-scope metadata guards but a different root cause: channel-pinned registry selection, not malformed metadata isolation. |

## Needs Human

- Representative #89829 is open but job-declared route_security, so there is no single safe live canonical for the whole cluster.
- Choose or combine the overlapping session-action hardening PRs #89763, #89852, and #90034 before any close/merge plan.
- Choose the command-spec canonical between broader #89753 and narrower #90039 before superseding either.
- Choose the gateway method descriptor canonical, likely #90054, before closing/rebasing narrower #89990, #89991, and #90026.
- Choose the plugin service metadata canonical between #89810 and #89898.
- Retry/repair review for #89798 before classification beyond needs_human.
