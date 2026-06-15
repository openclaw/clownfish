---
repo: openclaw/openclaw
cluster_id: gitcrawl-870-bulk-plan-20260615-a
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
  - "#87918"
candidates:
  - "#87918"
  - "#89453"
cluster_refs:
  - "#87918"
  - "#89453"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89453"
canonical_hint: "gitcrawl representative #87918 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 870 on 2026-06-15. Security-signal refs #89453 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 870

Generated from local gitcrawl run cluster 870 for `openclaw/openclaw`.

Display title:

> Android: LLM thinking/reasoning blocks rendered as separate chat messages

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #89453
- representative: #87918, currently open in local store
- latest member update: 2026-06-14T04:46:06.671818Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87918 Android: LLM thinking/reasoning blocks rendered as separate chat messages
- #89453 [security-signal] fix(android): filter thinking and reasoning blocks from chat message display
