---
repo: openclaw/openclaw
cluster_id: gitcrawl-143-autonomous-issue-wave
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
  - "#63106"
cluster_refs:
  - "#63106"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#63107"
  - "#63112"
  - "#72677"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #63112 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 143 on 2026-06-15. Existing-overlap refs #63107, #63112, #72677 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 143

Generated from local gitcrawl run cluster 143 for `openclaw/openclaw`.

Display title:

> fix(cron): warn when --system-event on main session contains shell commands

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #63107, #63112, #72677
- representative: #63112, currently open in local store
- latest member update: 2026-06-15T11:49:41.046708Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63106 cron: ghost runs recorded as ok when gateway is down (durationMs < 50ms)

Existing-overlap context refs:

- #63107 cron: systemEvent on main session silently ignores shell commands in payload text
- #63112 fix(cron): warn when --system-event on main session contains shell commands
- #72677 fix(cron): warn on main heartbeat handoff ghost runs
