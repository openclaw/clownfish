---
repo: openclaw/openclaw
cluster_id: gitcrawl-125-dedupe-cleanup-wave-3
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
  - "#92688"
candidates:
  - "#92688"
cluster_refs:
  - "#92688"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92704"
  - "#92770"
  - "#92782"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #92688 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 125 on 2026-06-16. Existing-overlap refs #92704, #92770, #92782 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 125

Generated from local gitcrawl run cluster 125 for `openclaw/openclaw`.

Display title:

> [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #92704, #92770, #92782
- representative: #92688, currently open in local store
- latest member update: 2026-06-15T19:04:12.666692Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92688 [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope

Existing-overlap context refs:

- #92704 #92688: fix(qwen): use DashScope native image format for Qwen vision models
- #92770 fix(media-understanding): place Qwen/DashScope image prompts in user content (#92688)
- #92782 [security-signal] fix #92688: [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope
