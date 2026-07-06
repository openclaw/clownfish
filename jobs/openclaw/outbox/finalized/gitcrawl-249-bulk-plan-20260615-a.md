---
repo: openclaw/openclaw
cluster_id: gitcrawl-249-bulk-plan-20260615-a
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
  - "#64622"
candidates:
  - "#64622"
  - "#90231"
  - "#92505"
cluster_refs:
  - "#64622"
  - "#90231"
  - "#92505"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#64622"
  - "#90231"
canonical_hint: "gitcrawl representative #64622 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 249 on 2026-06-15. Security-signal refs #64622, #90231 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 249

Generated from local gitcrawl run cluster 249 for `openclaw/openclaw`.

Display title:

> fix(gateway): harden agent-to-agent routing, timeout handling, and main-session metadata sanitization

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- security-signal refs requiring route_security: #64622, #90231
- representative: #64622, currently open in local store
- latest member update: 2026-06-14T04:46:05.248469Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64622 [security-signal] fix(gateway): harden agent-to-agent routing, timeout handling, and main-session metadata sanitization
- #90231 [security-signal] fix #69443: [Bug] Subagent RPC callback to WeChat session key routed to main session instead
- #92505 fix(gateway): validate agent roster in resolveAgentIdForRequest (fixes #92504)
