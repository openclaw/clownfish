---
repo: openclaw/openclaw
cluster_id: gitcrawl-110-plan-ramp
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
  - "#91134"
candidates:
  - "#63380"
  - "#74635"
  - "#74974"
  - "#80536"
  - "#91134"
cluster_refs:
  - "#63380"
  - "#74635"
  - "#74974"
  - "#80536"
  - "#91134"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91134 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 110 on 2026-06-14."
---

# Gitcrawl Cluster 110

Generated from local gitcrawl run cluster 110 for `openclaw/openclaw`.

Display title:

> ci: check bundled channel config metadata

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #91134, currently open in local store
- latest member update: 2026-06-14T04:46:06.569795Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63380 fix(telegram): allow agentId in account config for multi-account routing
- #74635 [Bug]: openclaw_gateway rejects Paperclip agent heartbeats — "unexpected property 'paperclip'"
- #74974 fix(gateway): tolerate Paperclip metadata via adapterMeta namespace + paperclip alias on AgentParamsSchema
- #80536 Channel config-schema additions in downstream patches not picked up by runtime validator (codegen-bundled JSON schema is checked-in, not regenerated at build)
- #91134 ci: check bundled channel config metadata
