---
repo: openclaw/openclaw
cluster_id: gitcrawl-106-bulk-plan-20260615-a
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
  - "#84674"
candidates:
  - "#84158"
  - "#84674"
  - "#84690"
  - "#90945"
  - "#90989"
cluster_refs:
  - "#84158"
  - "#84674"
  - "#84690"
  - "#90945"
  - "#90989"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84690"
canonical_hint: "gitcrawl representative #84674 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 106 on 2026-06-15. Security-signal refs #84690 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 106

Generated from local gitcrawl run cluster 106 for `openclaw/openclaw`.

Display title:

> Telegram isolated ingress spool can remain blocked by stale .processing claim after gateway recreate

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 5
- security-signal refs requiring route_security: #84690
- representative: #84674, currently open in local store
- latest member update: 2026-06-14T04:46:07.236854Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84158 Telegram isolated ingress timeout recovery misses lone active spooled handler without backlog
- #84674 Telegram isolated ingress spool can remain blocked by stale .processing claim after gateway recreate
- #84690 [security-signal] fix(telegram): recover stale ingress claims after restart
- #90945 channel_ingress_events (SQLite): stale claims never recovered after session crash — Telegram DM deadlocks
- #90989 fix(channels): recover stale ingress queue claims at gateway startup
