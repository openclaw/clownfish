---
repo: openclaw/openclaw
cluster_id: gitcrawl-711-bulk-plan-20260615-a
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
  - "#89473"
candidates:
  - "#89473"
  - "#90139"
cluster_refs:
  - "#89473"
  - "#90139"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89473"
canonical_hint: "gitcrawl representative #89473 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 711 on 2026-06-15. Security-signal refs #89473 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 711

Generated from local gitcrawl run cluster 711 for `openclaw/openclaw`.

Display title:

> [Bug]: Reasoning tokens leak to chat channels when models stream interleaved text/thinking blocks

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #89473
- representative: #89473, currently open in local store
- latest member update: 2026-06-14T04:46:05.785753Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89473 [security-signal] [Bug]: Reasoning tokens leak to chat channels when models stream interleaved text/thinking blocks
- #90139 dropThinkingBlocks sanitizer: short text replies shown as [assistant reasoning omitted] in TUI/webchat/WeChat
