---
repo: openclaw/openclaw
cluster_id: gitcrawl-125-fresh-plan-ramp
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
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92688 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 125 on 2026-06-17. Existing-overlap refs #92704, #92770, #92782 were excluded from actionable refs and kept as context only."
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

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92688 [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope

Existing-overlap context refs:

- #92704 #92688: fix(qwen): use DashScope native image format for Qwen vision models
- #92770 fix(media-understanding): place Qwen/DashScope image prompts in user content (#92688)
- #92782 [security-signal] fix #92688: [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope
