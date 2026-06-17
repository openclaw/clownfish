---
repo: openclaw/openclaw
cluster_id: gitcrawl-541-fresh-plan-ramp
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
  - "#90362"
cluster_refs:
  - "#90362"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#85264"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #85264 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 541 on 2026-06-17. Existing-overlap refs #85264 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 541

Generated from local gitcrawl run cluster 541 for `openclaw/openclaw`.

Display title:

> fix(infra): scope Windows path realpath caches

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #85264
- representative: #85264, currently open in local store
- latest member update: 2026-06-15T19:04:12.805685Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90362 perf: optimize manifest-registry-installed lstat hotspot on Windows

Existing-overlap context refs:

- #85264 [security-signal] fix(infra): scope Windows path realpath caches
