---
repo: openclaw/openclaw
cluster_id: gitcrawl-1202-fresh-plan-20260618t161946z
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
  - "#89606"
cluster_refs:
  - "#89606"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#89882"
  - "#93357"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #89882 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1202 on 2026-06-18. Existing-overlap refs #89882, #93357 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1202

Generated from local gitcrawl run cluster 1202 for `openclaw/openclaw`.

Display title:

> fix(plugins): rebuild missing installs on policy refresh

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #89882, #93357
- representative: #89882, currently open in local store
- latest member update: 2026-06-18T16:17:07.880473Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89606 plugins registry --refresh (refreshReason: policy-changed) drops path/npm-origin plugins from plugins[]

Existing-overlap context refs:

- #89882 fix(plugins): rebuild missing installs on policy refresh
- #93357 [security-signal] fix(plugins): enforce install policy in wrappers
