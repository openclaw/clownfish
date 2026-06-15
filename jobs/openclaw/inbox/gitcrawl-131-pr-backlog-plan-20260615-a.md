---
repo: openclaw/openclaw
cluster_id: gitcrawl-131-pr-backlog-plan-20260615-a
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
  - "#15073"
  - "#56781"
  - "#82754"
cluster_refs:
  - "#15073"
  - "#56781"
  - "#82754"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#9986"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #9986 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 131 on 2026-06-15. Existing-overlap refs #9986 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 131

Generated from local gitcrawl run cluster 131 for `openclaw/openclaw`.

Display title:

> Feature: Trigger model fallback on context length exceeded

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 3
- excluded existing-overlap refs: #9986
- representative: #9986, currently open in local store
- latest member update: 2026-06-14T04:46:07.057825Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #15073 Feature Request: Per-agent context/workspace on model fallback
- #56781 Feature request: fallback model chain for compaction and LCM summaryModel
- #82754 Fix context overflow fallback to larger models

Existing-overlap context refs:

- #9986 Feature: Trigger model fallback on context length exceeded
