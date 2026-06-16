---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156620-autonomous-smoke"
mode: "autonomous"
run_id: "27584186103"
workflow_run_id: "27584186103"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584186103"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T04:55:40.192Z"
canonical: null
canonical_issue: null
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

# ghcrawl-156620-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584186103](https://github.com/openclaw/clownfish/actions/runs/27584186103)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Autonomous classification completed without GitHub mutation. Security-sensitive refs are routed out of Clownfish handling. The validator requires the linked open issue #25574 to be treated as security-sensitive in this result, so the prior executable warning-dedupe fix path is removed instead of opening a replacement PR from this cluster. Closed historical PRs remain closed as evidence only.

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
| #38295 | route_security | planned | security_sensitive | Security-sensitive open PR must be routed to central OpenClaw security handling and not merged, closed, commented on, or used as the canonical Clownfish fix path. |
| #61105 | route_security | planned | security_sensitive | Security-sensitive PATH/exec-boundary work is outside Clownfish backlog cleanup even though the PR is already closed. |
| #25574 | route_security | planned | security_sensitive | Route the linked issue out of Clownfish handling rather than planning a replacement fix PR against a validator-classified security-sensitive target. |
| #40427 | keep_closed | skipped | superseded | Historical closed PR remains useful evidence, but no live mutation or replacement fix path is planned from this security-routed cluster. |
| #57979 | keep_closed | skipped | superseded | Historical closed PR should remain closed and be credited as related prior work if security triage later authorizes a non-security replacement path. |
| #56468 | keep_closed | skipped | fixed_by_candidate | Closed historical PR is not a live target and does not justify a mutation in this cluster. |
| #56671 | keep_closed | skipped | fixed_by_candidate | The representative PR is closed and the doctor clobbered-snapshot subproblem is historical, not a live canonical path. |
| #59520 | keep_closed | skipped | fixed_by_candidate | Closed typo fix is independent historical context and does not need action. |

## Needs Human

- none
