---
repo: openclaw/openclaw
cluster_id: gitcrawl-1058-fresh-plan-20260618t161946z
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
  - "#87322"
candidates:
  - "#71569"
  - "#87322"
cluster_refs:
  - "#71569"
  - "#87322"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87449"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #87322 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1058 on 2026-06-18. Existing-overlap refs #87449 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1058

Generated from local gitcrawl run cluster 1058 for `openclaw/openclaw`.

Display title:

> Mattermost: block streaming edits single post instead of creating separate messages per text block

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #87449
- representative: #87322, currently open in local store
- latest member update: 2026-06-18T16:17:08.032926Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71569 Mattermost streaming config: documented but not implemented + notification UX bug
- #87322 Mattermost: block streaming edits single post instead of creating separate messages per text block

Existing-overlap context refs:

- #87449 [security-signal] fix(mattermost): preserve text-block boundaries in draft preview (#87322)
