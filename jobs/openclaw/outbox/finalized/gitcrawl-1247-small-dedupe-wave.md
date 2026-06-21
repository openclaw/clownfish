---
repo: openclaw/openclaw
cluster_id: gitcrawl-1247-small-dedupe-wave
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
  - "#40945"
candidates:
  - "#40945"
  - "#94466"
cluster_refs:
  - "#40945"
  - "#94466"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #40945 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1247 on 2026-06-19."
---

# Gitcrawl Cluster 1247

Generated from local gitcrawl run cluster 1247 for `openclaw/openclaw`.

Display title:

> Control UI chat markdown only renders data URI images, not remote https image URLs

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #40945, currently open in local store
- latest member update: 2026-06-19T02:13:00.381805Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40945 Control UI chat markdown only renders data URI images, not remote https image URLs
- #94466 [Bug]: Native Mac App WebChat cannot open server-hosted images (Open/Download buttons unresponsive, browser Control UI works)
