---
repo: openclaw/openclaw
cluster_id: gitcrawl-67-bulk-plan-20260615-a
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
  - "#92263"
candidates:
  - "#73149"
  - "#73785"
  - "#75469"
  - "#79504"
  - "#92260"
  - "#92263"
  - "#92356"
cluster_refs:
  - "#73149"
  - "#73785"
  - "#75469"
  - "#79504"
  - "#92260"
  - "#92263"
  - "#92356"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92356"
canonical_hint: "gitcrawl representative #92263 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 67 on 2026-06-15. Security-signal refs #92356 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 67

Generated from local gitcrawl run cluster 67 for `openclaw/openclaw`.

Display title:

> Fix heartbeat reasoning payload selection

Cluster shape from gitcrawl:

- total members: 7
- issues: 2
- pull requests: 5
- open candidates in local store: 7
- security-signal refs requiring route_security: #92356
- representative: #92263, currently open in local store
- latest member update: 2026-06-14T04:46:06.683546Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73149 Cron/heartbeat no-op runs can leak visible messages despite silence/no-op semantics
- #73785 fix(heartbeat): suppress no-op system event replies
- #75469 fix: same-session inferred commitments can be starved indefinitely when a normal HEARTBEAT.md...
- #79504 fix(heartbeat): harden commitment check-in delivery
- #92260 [Bug]: Heartbeat delivers reasoning payload as main reply when includeReasoning is false (resolveHeartbeatReplyPayload ignores isReasoning)
- #92263 Fix heartbeat reasoning payload selection
- #92356 [security-signal] fix(heartbeat): skip reasoning payloads when selecting heartbeat reply
