---
repo: openclaw/openclaw
cluster_id: gitcrawl-609-fresh-plan-ramp
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
  - "#90869"
candidates:
  - "#90869"
cluster_refs:
  - "#90869"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90870"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #90869 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 609 on 2026-06-17. Existing-overlap refs #90870 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 609

Generated from local gitcrawl run cluster 609 for `openclaw/openclaw`.

Display title:

> wiki_search silently drops pages in subfolders of the wiki query dirs (data loss)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #90870
- representative: #90869, currently open in local store
- latest member update: 2026-06-15T19:04:12.804668Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90869 wiki_search silently drops pages in subfolders of the wiki query dirs (data loss)

Existing-overlap context refs:

- #90870 [security-signal] [AI] fix(memory-wiki): index wiki pages in query-dir subfolders
