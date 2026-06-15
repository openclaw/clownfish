---
repo: openclaw/openclaw
cluster_id: gitcrawl-154-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#84134"
cluster_refs:
  - "#84134"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#61151"
  - "#81397"
  - "#84708"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #81397 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 154 on 2026-06-15. Existing-overlap refs #61151, #81397, #84708 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 154

Generated from local gitcrawl run cluster 154 for `openclaw/openclaw`.

Display title:

> fix(agents): repair persisted tool result pairing

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #61151, #81397, #84708
- representative: #81397, currently open in local store
- latest member update: 2026-06-15T11:49:40.473048Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84134 [Bug]: Feishu channel: message tool triggers "missing tool result in session history" in v2026.5.16+

Existing-overlap context refs:

- #61151 [security-signal] fix(agents): drop partialJson streaming artifacts from session history repair
- #81397 [security-signal] fix(agents): repair persisted tool result pairing
- #84708 fix(agents): recover message-tool mirror replay poison
