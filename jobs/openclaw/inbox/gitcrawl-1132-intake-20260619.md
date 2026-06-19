---
repo: openclaw/openclaw
cluster_id: gitcrawl-1132-intake-20260619
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
  - "#81892"
cluster_refs:
  - "#81892"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93696"
  - "#93820"
  - "#93830"
  - "#93926"
  - "#94038"
  - "#94165"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #93926 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1132 on 2026-06-19. Existing-overlap refs #93696, #93820, #93830, #93926, #94038, #94165 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1132

Generated from local gitcrawl run cluster 1132 for `openclaw/openclaw`.

Display title:

> fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor suppression

Cluster shape from gitcrawl:

- total members: 7
- issues: 1
- pull requests: 6
- open candidates in local store: 1
- excluded existing-overlap refs: #93696, #93820, #93830, #93926, #94038, #94165
- representative: #93926, currently open in local store
- latest member update: 2026-06-18T16:17:08.331333Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81892 [Bug]: Reasoning not delivered on Matrix channel (/reasoning on has no effect)

Existing-overlap context refs:

- #93696 [security-signal] fix(matrix): deliver reasoning replies as m.notice instead of suppressing
- #93820 [security-signal] fix(imessage): recognize MiniMax mm: reasoning tags in reflection guard (completes #93767)
- #93830 [security-signal] fix(matrix): deliver reasoning blocks as m.notice when /reasoning on [AI-assisted]
- #93926 [security-signal] fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor suppression
- #94038 [security-signal] fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor replies
- #94165 fix(control-ui): recognize namespaced reasoning tags in thinking extraction
