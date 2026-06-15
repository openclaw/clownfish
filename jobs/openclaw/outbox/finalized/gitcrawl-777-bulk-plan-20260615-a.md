---
repo: openclaw/openclaw
cluster_id: gitcrawl-777-bulk-plan-20260615-a
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
  - "#88015"
candidates:
  - "#88015"
  - "#88885"
cluster_refs:
  - "#88015"
  - "#88885"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#88885"
canonical_hint: "gitcrawl representative #88015 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 777 on 2026-06-15. Security-signal refs #88885 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 777

Generated from local gitcrawl run cluster 777 for `openclaw/openclaw`.

Display title:

> [Bug]: session-delivery recovery blind-replays an unacked agent turn after a crash (duplicate turn re-run + duplicate reply)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #88885
- representative: #88015, currently open in local store
- latest member update: 2026-06-14T04:46:06.203005Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88015 [Bug]: session-delivery recovery blind-replays an unacked agent turn after a crash (duplicate turn re-run + duplicate reply)
- #88885 [security-signal] fix(infra): wire session-delivery drain recovery guard onto the shared SQLite recovery_state column
