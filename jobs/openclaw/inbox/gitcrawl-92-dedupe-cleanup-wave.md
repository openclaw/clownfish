---
repo: openclaw/openclaw
cluster_id: gitcrawl-92-dedupe-cleanup-wave
mode: autonomous
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
  - "#70903"
candidates:
  - "#39807"
  - "#70903"
  - "#87694"
  - "#87697"
  - "#88709"
cluster_refs:
  - "#39807"
  - "#70903"
  - "#87694"
  - "#87697"
  - "#88709"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70903 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 92 on 2026-06-16."
---

# Gitcrawl Cluster 92

Generated from local gitcrawl run cluster 92 for `openclaw/openclaw`.

Display title:

> Persistent file-based provider cooldown blocks user for hours after billing recovery

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #70903, currently open in local store
- latest member update: 2026-06-15T19:04:12.778015Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39807 Bug: Billing error (402) causes infinite retry death spiral for inline-apiKey providers (no backoff)
- #70903 Persistent file-based provider cooldown blocks user for hours after billing recovery
- #87694 fix(auth): tighten billing cooldown defaults to recover from multi-hour lockouts (#70903)
- #87697 fix(auth): clear stale provider cooldowns after reauth
- #88709 fix(auth): cooldown inline api key billing failures
