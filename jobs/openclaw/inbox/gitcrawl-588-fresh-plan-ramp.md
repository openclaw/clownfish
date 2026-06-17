---
repo: openclaw/openclaw
cluster_id: gitcrawl-588-fresh-plan-ramp
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
  - "#91122"
candidates:
  - "#91122"
cluster_refs:
  - "#91122"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#91245"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #91122 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 588 on 2026-06-17. Existing-overlap refs #91245 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 588

Generated from local gitcrawl run cluster 588 for `openclaw/openclaw`.

Display title:

> [core/runtime] Backward-compat shim missing: core.channel.turn.* renamed to core.channel.inbound.* on 2026-06-03

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #91245
- representative: #91122, currently open in local store
- latest member update: 2026-06-15T19:04:12.798848Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91122 [core/runtime] Backward-compat shim missing: core.channel.turn.* renamed to core.channel.inbound.* on 2026-06-03

Existing-overlap context refs:

- #91245 [security-signal] fix(plugin-runtime): restore channel turn alias
