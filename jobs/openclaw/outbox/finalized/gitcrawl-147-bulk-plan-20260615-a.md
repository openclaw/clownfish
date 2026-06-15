---
repo: openclaw/openclaw
cluster_id: gitcrawl-147-bulk-plan-20260615-a
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#90982"
candidates:
  - "#62956"
  - "#90982"
  - "#91002"
  - "#91701"
cluster_refs:
  - "#62956"
  - "#90982"
  - "#91002"
  - "#91701"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#62956"
  - "#91002"
canonical_hint: "gitcrawl representative #90982 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 147 on 2026-06-15. Security-signal refs #62956, #91002 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 147

Generated from local gitcrawl run cluster 147 for `openclaw/openclaw`.

Display title:

> [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #62956, #91002
- representative: #90982, currently open in local store
- latest member update: 2026-06-14T04:46:05.258142Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62956 [security-signal] fix(tui): surface error details and elapsed time in status bar on agent failures
- #90982 [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log
- #91002 [security-signal] fix(tui): show last tool-error summary on aborted runs
- #91701 fix(tui): surface error detail in abort notification (fixes #90982)
