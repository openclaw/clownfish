---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260615T1033-25"
mode: "plan"
run_id: "27540424895"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27540424895"
head_sha: "51197cadc27d6fbaf52d53f2f539b911f08d1209"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T10:40:04.892Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# low-signal-pr-sweep-20260615T1033-25

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27540424895](https://github.com/openclaw/clownfish/actions/runs/27540424895)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planned low-signal PR sweep actions from the hydrated cluster artifact only; no GitHub mutations are performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #80627 | needs_human | planned | needs_human | Focused CLI bug-fix PR with tests and review signal for maintainer review; closure would require technical/product judgment explicitly reserved for humans. |
| #82253 | needs_human | planned | needs_human | Focused Slack behavior/config PR with active author repair and ClawSweeper technical blockers; not boringly clear low-signal. |
| #91239 | needs_human | planned | needs_human | Plausible focused provider-catalog fix with unresolved compatibility/accounting questions; low-signal closure would require technical correctness judgment. |
| #91408 | needs_human | planned | needs_human | Focused feature/fix with proof, active author follow-up, and public compatibility implications; not eligible for low-signal close. |
| #88743 | close_low_signal | planned | low_signal | Boringly clear docs-only provider/carrier guidance with no maintainer signal and no concrete OpenClaw-owned bug fix in scope. |

## Needs Human

- #80627 requires maintainer review because it is a focused CLI bug fix with tests and ClawSweeper ready-for-maintainer signal, not low-signal cleanup.
- #82253 requires maintainer compatibility/proof judgment for Slack per-channel reply behavior after active author cleanup.
- #91239 requires maintainer technical judgment on OpenCode Go catalog/onboarding/tiered-pricing scope and correctness.
- #91408 requires maintainer compatibility judgment because it activates Telegram direct-message ACP bindings and adds a public plugin SDK subpath.
