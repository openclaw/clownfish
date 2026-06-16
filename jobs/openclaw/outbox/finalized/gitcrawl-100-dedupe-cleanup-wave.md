---
repo: openclaw/openclaw
cluster_id: gitcrawl-100-dedupe-cleanup-wave
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
  - "#88506"
candidates:
  - "#30452"
  - "#52732"
  - "#57901"
  - "#73704"
  - "#88506"
cluster_refs:
  - "#30452"
  - "#52732"
  - "#57901"
  - "#73704"
  - "#88506"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #88506 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 100 on 2026-06-16."
---

# Gitcrawl Cluster 100

Generated from local gitcrawl run cluster 100 for `openclaw/openclaw`.

Display title:

> feat: add per-agent compaction overrides

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 5
- representative: #88506, currently open in local store
- latest member update: 2026-06-15T19:04:12.782271Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #30452 [Feature]: Compaction: configurable model override + flush-then-reset mode
- #52732 Per-agent compaction and contextPruning overrides in agents.list
- #57901 Safeguard compaction ignores compaction.model config — uses session model instead
- #73704 fix(safeguard): resolve compaction provider/model before registering runtime
- #88506 feat: add per-agent compaction overrides
