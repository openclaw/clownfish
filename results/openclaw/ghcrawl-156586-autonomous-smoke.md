---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156586-autonomous-smoke"
mode: "autonomous"
run_id: "24982955756"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982955756"
head_sha: "2e710fdd4b5a10429903316164f2cee17124da90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:53:01.819Z"
canonical: "https://github.com/openclaw/openclaw/issues/46647"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46647"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156586-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982955756](https://github.com/openclaw/clownfish/actions/runs/24982955756)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46647

## Summary

Representative #47362 is closed and obsolete. The live non-security Slack canonical is linked issue #46647, but its current replacement PR #72626 is security-sensitive and must be routed to central security before any merge or post-merge closeout. No close or merge action is safe in this pass; unrelated prompt PRs are classified independently and left open.

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
| #46647 | keep_canonical | planned | canonical | Keep the live Slack issue open as canonical until the security-routed replacement/fix path is cleared and landed. |
| #72626 | route_security | planned | security_sensitive | Quarantine exact security-sensitive PR #72626 to central OpenClaw security handling; do not merge, close, comment, or open a fix PR for this item from ProjectClownfish. |
| #45062 | route_security | planned | security_sensitive | Security-sensitive prompt-injection review finding must be handled by central security, not backlog dedupe automation. |
| #63940 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive prompt PR; failing checks also block any merge path. |
| #65777 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive PR to central security handling. |
| #8813 | route_security | planned | security_sensitive | Route the exact security-sensitive linked issue; do not let it block unrelated non-security classification. |
| #14432 | keep_independent | planned | independent | Distinct prompt-behavior work; leave open outside this Slack cluster. |
| #52727 | keep_independent | planned | independent | Independent skill-precedence PR with failing checks and review feedback; no close or merge action. |
| #57247 | keep_independent | planned | independent | Independent model-identity prompt work; unresolved bot finding and failing/cancelled checks block merge. |
| #70605 | keep_independent | planned | independent | Useful but independent contributor PR; leave open for branch repair/review outside this Slack cluster. |
| #47362 | keep_closed | skipped | superseded | Already closed; retain only as historical source-credit evidence. |
| #56951 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation allowed. |
| #60017 | keep_closed | skipped | independent | Already closed and independent. |
| cluster:ghcrawl-156586-autonomous-smoke | build_fix_artifact | blocked |  | Canonical fix path is blocked on central security triage of #72626 or a refreshed non-security replacement plan that addresses the Slack block-validation and duplicate-block review findings. |

## Needs Human

- none
