---
repo: openclaw/openclaw
cluster_id: gitcrawl-80-bulk-plan-20260615-a
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
  - "#92220"
candidates:
  - "#90096"
  - "#90097"
  - "#90098"
  - "#90115"
  - "#92220"
  - "#92223"
cluster_refs:
  - "#90096"
  - "#90097"
  - "#90098"
  - "#90115"
  - "#92220"
  - "#92223"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90115"
canonical_hint: "gitcrawl representative #92220 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 80 on 2026-06-15. Security-signal refs #90115 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 80

Generated from local gitcrawl run cluster 80 for `openclaw/openclaw`.

Display title:

> fix(media): extract large managed inbound PDFs via media-understanding

Cluster shape from gitcrawl:

- total members: 6
- issues: 3
- pull requests: 3
- open candidates in local store: 6
- security-signal refs requiring route_security: #90115
- representative: #92220, currently open in local store
- latest member update: 2026-06-14T04:46:05.577208Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90096 Inject bounded text context for managed inbound PDFs
- #90097 Pass through already-managed inbound PDFs in chat.send
- #90098 Stack-safe large attachment handling for Control UI and gateway
- #90115 [security-signal] fix(gateway): pass managed inbound PDFs through chat.send
- #92220 fix(media): extract large managed inbound PDFs via media-understanding
- #92223 Fix stack-safe large attachment handling
