---
repo: openclaw/openclaw
cluster_id: ghcrawl-157004-typing-target-retry
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#67783"
candidates:
  - "#67783"
cluster_refs:
  - "#67783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Live refresh on 2026-06-14 found #67783 open and conflicting. This retry intentionally isolates the typing-reaction target fix from the existing #73958 root_id routing branch."
notes: "Retry split from ghcrawl-157004-autonomous-smoke after the replacement branch reused #73958. Do not reuse or expand the existing clownfish/ghcrawl-157004-autonomous-smoke branch for this job."
---

# GHCrawl Cluster 157004 Typing Target Retry

Generated from local ghcrawl run cluster 157004 for `openclaw/openclaw`, then split on 2026-06-14 after the first retry reused an existing Clownfish replacement branch.

Display title:

> fix(feishu): target typing reaction on inbound

## Goal

Run one live autonomous classification and fix pass for #67783 only. Verify live GitHub state, preserve contributor credit, and if replacement is still the right path, raise a fresh ProjectClownfish PR from the unique `ghcrawl-157004-typing-target-retry` branch.

## Scope Notes

- #67783 is the only candidate for this retry.
- #40147 is closed historical context from the original ghcrawl cluster and must not be treated as an open candidate.
- #73958 is an existing ProjectClownfish PR on `clownfish/ghcrawl-157004-autonomous-smoke` for the related root_id routing scope. It must not be reused, expanded, or merged as the fix for #67783.

Open candidates:

- #67783 fix(feishu): target typing reaction on inbound
