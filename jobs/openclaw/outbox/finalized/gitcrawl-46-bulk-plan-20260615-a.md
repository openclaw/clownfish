---
repo: openclaw/openclaw
cluster_id: gitcrawl-46-bulk-plan-20260615-a
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
  - "#89761"
candidates:
  - "#71569"
  - "#75252"
  - "#75256"
  - "#87322"
  - "#87449"
  - "#88766"
  - "#88901"
  - "#89761"
  - "#89768"
  - "#90129"
  - "#91331"
cluster_refs:
  - "#71569"
  - "#75252"
  - "#75256"
  - "#87322"
  - "#87449"
  - "#88766"
  - "#88901"
  - "#89761"
  - "#89768"
  - "#90129"
  - "#91331"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87449"
canonical_hint: "gitcrawl representative #89761 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 46 on 2026-06-15. Security-signal refs #87449 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 46

Generated from local gitcrawl run cluster 46 for `openclaw/openclaw`.

Display title:

> Mattermost: progress preview overwrites the whole draft per frame instead of merging by line identity (only channel not using mergeChannelProgressDraftLine)

Cluster shape from gitcrawl:

- total members: 11
- issues: 5
- pull requests: 6
- open candidates in local store: 11
- security-signal refs requiring route_security: #87449
- representative: #89761, currently open in local store
- latest member update: 2026-06-14T04:46:06.780916Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71569 Mattermost streaming config: documented but not implemented + notification UX bug
- #75252 fix(mattermost): draft preview overwrites previous content at every transition (data loss)
- #75256 fix(mattermost): add streaming.mode='block' to split draft preview at turn boundaries
- #87322 Mattermost: block streaming edits single post instead of creating separate messages per text block
- #87449 [security-signal] fix(mattermost): preserve text-block boundaries in draft preview (#87322)
- #88766 [Feature]: Support Mattermost progress-preview streaming under the Codex harness without forcing visibleReplies: "automatic"
- #88901 fix(mattermost): preserve Codex progress drafts
- #89761 Mattermost: progress preview overwrites the whole draft per frame instead of merging by line identity (only channel not using mergeChannelProgressDraftLine)
- #89768 fix(mattermost): merge progress preview lines by identity instead of full overwrite
- #90129 fix(mattermost): merge streaming progress lines by identity instead of overwriting (#89761)
- #91331 fix(mattermost): merge progress preview lines by identity
