---
repo: openclaw/openclaw
cluster_id: gitcrawl-110-dedupe-cleanup-wave
mode: autonomous
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
  - "#74974"
  - "#80536"
  - "#91134"
cluster_refs:
  - "#63380"
  - "#74635"
  - "#74974"
  - "#80536"
  - "#91134"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #91134 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 110 on 2026-06-16."
---

# Gitcrawl Cluster 110

Generated from local gitcrawl run cluster 110 for `openclaw/openclaw`.

Display title:

> ci: check bundled channel config metadata

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 4
- representative: #91134, currently open in local store
- latest member update: 2026-06-15T19:04:12.195189Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #74635 [Bug]: openclaw_gateway rejects Paperclip agent heartbeats — "unexpected property 'paperclip'"

Open candidates:

- #63380 fix(telegram): allow agentId in account config for multi-account routing
- #74974 fix(gateway): tolerate Paperclip metadata via adapterMeta namespace + paperclip alias on AgentParamsSchema
- #80536 Channel config-schema additions in downstream patches not picked up by runtime validator (codegen-bundled JSON schema is checked-in, not regenerated at build)
- #91134 ci: check bundled channel config metadata
