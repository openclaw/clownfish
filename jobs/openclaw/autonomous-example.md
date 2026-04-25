---
repo: openclaw/openclaw
cluster_id: example-autonomous-cron-timeout
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
  - missing_target_checkout
canonical:
  - "#40868"
candidates:
  - "#40868"
  - "#41272"
cluster_refs:
  - "#40868"
  - "#41272"
allow_instant_close: true
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: true
canonical_hint: "#40868 is the likely canonical report; verify live state."
notes: "Example only. Replace with a real cluster exported from ghcrawl or curated by hand."
---

# Autonomous Cluster Task

Use the dedupe autonomous workflow to classify the cluster, close boring covered duplicates through structured actions, and build a fix artifact if the canonical issue still needs code work.

## Goal

Find the canonical fix path, preserve contributor credit, and leave an auditable artifact that can be replayed or escalated.

## Context

Paste ghcrawl cluster summary, LLM key summaries, top touched files, reproduction notes, candidate PRs, and operator notes here.
