---
repo: openclaw/openclaw
cluster_id: gitcrawl-100-autonomous-issue-wave
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
canonical: []
candidates:
  - "#57901"
cluster_refs:
  - "#57901"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#30452"
  - "#52732"
  - "#73704"
  - "#88506"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #88506 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 100 on 2026-06-15. Existing-overlap refs #30452, #52732, #73704, #88506 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 100

Generated from local gitcrawl run cluster 100 for `openclaw/openclaw`.

Display title:

> feat: add per-agent compaction overrides

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #30452, #52732, #73704, #88506
- representative: #88506, currently open in local store
- latest member update: 2026-06-15T11:49:41.416779Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57901 Safeguard compaction ignores compaction.model config — uses session model instead

Existing-overlap context refs:

- #30452 [Feature]: Compaction: configurable model override + flush-then-reset mode
- #52732 Per-agent compaction and contextPruning overrides in agents.list
- #73704 fix(safeguard): resolve compaction provider/model before registering runtime
- #88506 feat: add per-agent compaction overrides
