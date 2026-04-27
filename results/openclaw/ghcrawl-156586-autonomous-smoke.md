---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156586-autonomous-smoke"
mode: "autonomous"
run_id: "24981380433"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24981380433"
head_sha: "e0fb289dbbb528ad94fac3d2036800e925923c24"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:11:38.677Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 19
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24981380433](https://github.com/openclaw/clownfish/actions/runs/24981380433)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Live preflight shows the original representative #47362 is already closed and the cluster is over-broad across several independent system-prompt/slack/skills/context subfamilies. No GitHub mutation or merge is safe from this worker: security-sensitive open refs are routed to central security, closed refs are kept closed, useful open PRs remain open for their own review/merge paths, and non-security issues remain open until a non-quarantined fix lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
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
| #8813 | route_security | planned | security_sensitive | Security-sensitive linked issue must be quarantined to central OpenClaw security handling. |
| #10841 | keep_closed | skipped | security_sensitive | Already closed; no close/comment/label action is valid. |
| #14310 | keep_closed | skipped | superseded | Already closed historical context; no action needed. |
| #14432 | keep_canonical | planned | canonical | Best live canonical for the background sub-agent prompt-guidance subfamily, but not merge-ready under ProjectClownfish merge policy. |
| #32466 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #45062 | route_security | planned | security_sensitive | Open security-sensitive PR must be quarantined; do not merge, close, or repair via ProjectClownfish. |
| #46647 | keep_related | planned | related | Real Slack bug report remains open until a non-quarantined fix is merged or central security clears the replacement path. |
| #47362 | keep_closed | skipped | superseded | Original representative is obsolete and already closed; no close action is valid. |
| #47668 | keep_related | planned | related | Related to #70605 but not a pure duplicate or closeout target. |
| #52727 | keep_independent | planned | independent | Separate skill-precedence feature; not part of the Slack canonical path. |
| #56951 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no mutation is valid. |
| #56955 | keep_closed | skipped | superseded | Already closed/superseded historical contributor PR; no close action is valid. |
| #57247 | keep_independent | planned | independent | Separate prompt feature with unresolved checks/review findings; keep open outside this cluster. |
| #60017 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #62953 | keep_closed | skipped | security_sensitive | Closed security-sensitive historical PR; no ProjectClownfish mutation is valid. |
| #63940 | route_security | planned | security_sensitive | Open security-sensitive PR must be routed to central security handling. |
| #65777 | keep_canonical | planned | canonical | Best live canonical for the IDENTITY-defaults prompt subfamily, but merge policy still requires mergeability and /review proof. |
| #70605 | keep_canonical | planned | canonical | Best live canonical for the strikethrough sanitization subfamily, but not merge-ready under merge policy. |
| #72626 | route_security | planned | security_sensitive | Security-sensitive replacement PR must be quarantined to central security handling before any Slack closeout or merge. |

## Needs Human

- none
