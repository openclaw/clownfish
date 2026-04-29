---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1972-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131315944"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131315944"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T20:21:20.867Z"
canonical: "https://github.com/openclaw/openclaw/pull/71409"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/71409"
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# gitcrawl-1972-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131315944](https://github.com/openclaw/clownfish/actions/runs/25131315944)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/71409

## Summary

Autonomous pass used the hydrated preflight artifact at main 60c2a9055037a31c43fc03392b2806031e574413. The obsolete representative #45892 is already closed as covered by merged #71409 for the original macOS launchd handoff family. No high-confidence duplicate/superseded close actions are planned: most open PRs are related but distinct follow-up candidates, several have failing checks or unresolved bot review findings, and three refs are quarantined for security-shaped evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

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
| #40958 | keep_related | planned | related | Related update restart-health work remains open; it is not safe to close as a duplicate and is not merge-ready. |
| #41332 | keep_related | planned | related | Related broad reliability work with unique scope; not a duplicate of the launchd handoff canonical. |
| #42544 | keep_related | planned | related | Related stale-process cleanup candidate; keep open for contributor/maintainer rework. |
| #43443 | needs_human | planned | needs_human | Maintainer judgment is needed on whether the launchd EIO/SIGKILL approach is acceptable or should be replaced with a narrower current-main patch. |
| #47776 | route_security | planned | security_sensitive | Quarantine this PR for central OpenClaw security-aware triage because the hydrated PR diff/review includes security-sensitive unrelated changes. |
| #48476 | needs_human | planned | needs_human | Maintainer decision is needed on accepting, splitting, or rejecting the legacy launchctl load fallback. |
| #49987 | keep_related | planned | related | Related restart UX follow-up; not a duplicate and not safe for automated closeout. |
| #50136 | keep_related | planned | related | Related Windows restart candidate; keep open for focused revision. |
| #54375 | needs_human | planned | needs_human | Maintainer judgment is needed on the systemd lifecycle contract change. |
| #54756 | keep_related | planned | related | Related stale-entrypoint/update work; keep open rather than close on incomplete canonical evidence. |
| #56258 | keep_related | planned | related | Related to merged #41296 but not a true duplicate; unique subsystem-timeout behavior and unresolved review findings remain. |
| #57276 | keep_related | planned | related | Related systemd service-management work; keep open for revision. |
| #57524 | route_security | planned | security_sensitive | Quarantine this exact PR for central security handling because the hydrated review describes a root/symlink boundary issue. |
| #57971 | route_security | planned | security_sensitive | Quarantine this exact PR because the hydrated evidence involves possible token/API-key exposure via world-readable local plist permissions. |
| #63593 | keep_related | planned | related | Independent/related update CLI bug candidate; keep open. |
| #63981 | keep_related | planned | related | Related gateway startup reliability work; not a duplicate and not closable while checks are failing. |
| #66502 | keep_related | planned | related | Related focused candidate; keep open for maintainer follow-up. |
| #66735 | keep_canonical | planned | canonical | Keep as the open canonical for the systemd self-restart subfamily; no merge action is allowed or safe in this job. |
| #67702 | keep_related | planned | related | Related update safety candidate; keep open. |
| #68909 | keep_related | planned | related | Related systemd diagnostic candidate; keep open for review-finding resolution. |
| #70056 | keep_related | planned | related | Related gateway stop-timeout follow-up; keep open for revision. |
| #70466 | keep_related | planned | related | Related systemd restart semantics candidate; keep open for maintainer follow-up. |
| #41296 | keep_closed | skipped | canonical | Already closed; included only to record live state for a job-listed candidate. |
| #58352 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #60170 | keep_closed | skipped | related | Already closed; no mutation planned. |

## Needs Human

- #43443: maintainer decision needed on launchd EIO retry plus SIGKILL/PID identity semantics before any automated replacement or rebase.
- #48476: maintainer decision needed on whether legacy launchctl load -w fallback is acceptable for headless/sudo launchd install resilience.
- #54375: maintainer decision needed on changing DBus-unavailable systemd status probes from errors to false results.
