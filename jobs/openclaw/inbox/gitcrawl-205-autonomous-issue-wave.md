---
repo: openclaw/openclaw
cluster_id: gitcrawl-205-autonomous-issue-wave
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
  - "#63392"
  - "#86382"
cluster_refs:
  - "#63392"
  - "#86382"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#13616"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #13616 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 205 on 2026-06-15. Existing-overlap refs #13616 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 205

Generated from local gitcrawl run cluster 205 for `openclaw/openclaw`.

Display title:

> Add backup/restore utility for config, cron jobs, and session history

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- excluded existing-overlap refs: #13616
- representative: #13616, currently open in local store
- latest member update: 2026-06-15T11:49:41.353155Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63392 [Feature]: Per-agent backup, restore, and clone
- #86382 [Backup] Preserve or explicitly support session transcript JSONL for chat history restore

Existing-overlap context refs:

- #13616 [security-signal] Add backup/restore utility for config, cron jobs, and session history
