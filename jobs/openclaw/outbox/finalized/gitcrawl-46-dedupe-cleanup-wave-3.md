---
repo: openclaw/openclaw
cluster_id: gitcrawl-46-dedupe-cleanup-wave-3
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
canonical: []
candidates:
  - "#71569"
  - "#87322"
cluster_refs:
  - "#71569"
  - "#87322"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#75252"
  - "#75256"
  - "#87449"
  - "#88766"
  - "#88901"
  - "#89761"
  - "#89768"
  - "#90129"
  - "#91331"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #89761 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 46 on 2026-06-16. Existing-overlap refs #75252, #75256, #87449, #88766, #88901, #89761, #89768, #90129, #91331 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 46

Generated from local gitcrawl run cluster 46 for `openclaw/openclaw`.

Display title:

> Mattermost: progress preview overwrites the whole draft per frame instead of merging by line identity (only channel not using mergeChannelProgressDraftLine)

Cluster shape from gitcrawl:

- total members: 11
- issues: 5
- pull requests: 6
- open candidates in local store: 2
- excluded existing-overlap refs: #75252, #75256, #87449, #88766, #88901, #89761, #89768, #90129, #91331
- representative: #89761, currently closed in local store
- latest member update: 2026-06-15T19:04:12.749825Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71569 Mattermost streaming config: documented but not implemented + notification UX bug
- #87322 Mattermost: block streaming edits single post instead of creating separate messages per text block

Existing-overlap context refs:

- #75252 fix(mattermost): draft preview overwrites previous content at every transition (data loss)
- #75256 [security-signal] fix(mattermost): add streaming.mode='block' to split draft preview at turn boundaries
- #87449 [security-signal] fix(mattermost): preserve text-block boundaries in draft preview (#87322)
- #88766 [Feature]: Support Mattermost progress-preview streaming under the Codex harness without forcing visibleReplies: "automatic"
- #88901 fix(mattermost): preserve Codex progress drafts
- #89761 Mattermost: progress preview overwrites the whole draft per frame instead of merging by line identity (only channel not using mergeChannelProgressDraftLine)
- #89768 fix(mattermost): merge progress preview lines by identity instead of full overwrite
- #90129 fix(mattermost): merge streaming progress lines by identity instead of overwriting (#89761)
- #91331 fix(mattermost): merge progress preview lines by identity
