---
repo: openclaw/openclaw
cluster_id: gitcrawl-145-bulk-plan-20260615-a
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
  - "#89059"
candidates:
  - "#89059"
  - "#89074"
  - "#89078"
  - "#90012"
cluster_refs:
  - "#89059"
  - "#89074"
  - "#89078"
  - "#90012"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89074"
canonical_hint: "gitcrawl representative #89059 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 145 on 2026-06-15. Security-signal refs #89074 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 145

Generated from local gitcrawl run cluster 145 for `openclaw/openclaw`.

Display title:

> TUI sendMessage blocks messages with 'agent is busy' regardless of /queue mode setting

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #89074
- representative: #89059, currently open in local store
- latest member update: 2026-06-14T04:46:05.706567Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89059 TUI sendMessage blocks messages with 'agent is busy' regardless of /queue mode setting
- #89074 [security-signal] fix(tui): let gateway queue active-run sends
- #89078 fix(tui): respect queue mode in sendMessage busy guard
- #90012 TUI sendMessage busy guard ignores queue mode setting
