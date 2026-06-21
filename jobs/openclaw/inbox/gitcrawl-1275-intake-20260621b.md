---
repo: openclaw/openclaw
cluster_id: gitcrawl-1275-intake-20260621b
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
  - "#91243"
candidates:
  - "#91243"
cluster_refs:
  - "#91243"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93143"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #91243 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1275 on 2026-06-21. Existing-overlap refs #93143 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1275

Generated from local gitcrawl run cluster 1275 for `openclaw/openclaw`.

Display title:

> Remove client-side iMessage split-send coalescing once imsg coalesces upstream

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #93143
- representative: #91243, currently open in local store
- latest member update: 2026-06-19T02:13:01.141334Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91243 Remove client-side iMessage split-send coalescing once imsg coalesces upstream

Existing-overlap context refs:

- #93143 fix(imessage): keep split-send coalescing opt-in
