---
repo: openclaw/openclaw
cluster_id: gitcrawl-89-bulk-plan-20260615-a
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
canonical: []
candidates:
  - "#77323"
  - "#86386"
  - "#90324"
cluster_refs:
  - "#77323"
  - "#86386"
  - "#90324"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#48949"
  - "#65799"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#77323"
  - "#86386"
canonical_hint: "gitcrawl representative #48949 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 89 on 2026-06-15. Security-signal refs #77323, #86386 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #48949, #65799 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 89

Generated from local gitcrawl run cluster 89 for `openclaw/openclaw`.

Display title:

> 🐛 Feishu channel fails with tenant_access_token error when HTTP proxy is configured

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 3
- excluded existing-overlap refs: #48949, #65799
- security-signal refs requiring route_security: #77323, #86386
- representative: #48949, currently open in local store
- latest member update: 2026-06-14T04:46:06.368161Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77323 [security-signal] Feishu channel: bot identity probe fails with ECONNRESET when proxy.enabled=true
- #86386 [security-signal] fix(feishu): route SDK HTTP through ambient proxy
- #90324 fix(feishu): disable ambient proxy inheritance for WebSocket by default

Existing-overlap context refs:

- #48949 🐛 Feishu channel fails with tenant_access_token error when HTTP proxy is configured
- #65799 Feishu WebSocket should not inherit ambient proxy env by default
