---
repo: openclaw/openclaw
cluster_id: gitcrawl-442-fresh-plan-ramp
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
  - "#92494"
candidates:
  - "#92494"
cluster_refs:
  - "#92494"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92623"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92494 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 442 on 2026-06-17. Existing-overlap refs #92623 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 442

Generated from local gitcrawl run cluster 442 for `openclaw/openclaw`.

Display title:

> Dreaming narrative timeout on ARM devices with many skills (600+)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92623
- representative: #92494, currently open in local store
- latest member update: 2026-06-15T19:04:12.716386Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92494 Dreaming narrative timeout on ARM devices with many skills (600+)

Existing-overlap context refs:

- #92623 fix(dreaming): increase narrative timeout from 60s to 120s for ARM devices (fixes #92494)
