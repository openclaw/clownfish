---
repo: openclaw/openclaw
cluster_id: example-cron-timeout
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#40868"
candidates:
  - "#40868"
  - "#41272"
notes: "Example only. Replace with a real cluster exported from ghcrawl or curated by hand."
---

# Cluster Task

Use the dedupe workflow to classify this cluster.

## Goal

Decide what should stay open, what should close as duplicate or superseded, and whether any PR should be merged, combined, or escalated.

## Context

Paste ghcrawl cluster summary, LLM key summaries, top touched files, and operator notes here.
