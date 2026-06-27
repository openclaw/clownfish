---
repo: openclaw/openclaw
cluster_id: gitcrawl-274-autonomous-refresh-20260623a
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
canonical:
  - "#80432"
candidates:
  - "#80432"
cluster_refs:
  - "#80432"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45184"
  - "#52146"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#52146"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #80432 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 274 on 2026-06-23. Existing-overlap refs #45184, #52146 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 274

Generated from local gitcrawl run cluster 274 for `openclaw/openclaw`.

Display title:

> [Bug]: Matrix outbound mention rendering — agent auto-reply ships @<name> without matrix.to pill or m.mentions when target is a sibling account

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #45184, #52146
- security-signal refs requiring route_security: #52146
- representative: #80432, currently open in local store
- latest member update: 2026-06-19T02:13:00.419152Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80432 [Bug]: Matrix outbound mention rendering — agent auto-reply ships @<name> without matrix.to pill or m.mentions when target is a sibling account

Existing-overlap context refs:

- #45184 [Feature]: Skip dispatch when message mentions a different account's bot
- #52146 [security-signal] Inject sibling agent list into session system prompt
