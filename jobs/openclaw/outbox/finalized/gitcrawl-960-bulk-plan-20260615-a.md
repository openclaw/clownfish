---
repo: openclaw/openclaw
cluster_id: gitcrawl-960-bulk-plan-20260615-a
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
  - "#84297"
candidates:
  - "#84297"
  - "#84335"
cluster_refs:
  - "#84297"
  - "#84335"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84335"
canonical_hint: "gitcrawl representative #84297 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 960 on 2026-06-15. Security-signal refs #84335 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 960

Generated from local gitcrawl run cluster 960 for `openclaw/openclaw`.

Display title:

> [Bug]: Per-agent identity overlay dropped on cron --announce and heartbeat target-channel Slack pushes (announce path; reply path was fixed in #38235)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #84335
- representative: #84297, currently open in local store
- latest member update: 2026-06-14T04:46:07.285691Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84297 [Bug]: Per-agent identity overlay dropped on cron --announce and heartbeat target-channel Slack pushes (announce path; reply path was fixed in #38235)
- #84335 [security-signal] fix(slack): forward per-agent identity overlay on heartbeat and runtimeSend (#84297)
