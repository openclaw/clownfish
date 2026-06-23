---
repo: openclaw/openclaw
cluster_id: gitcrawl-1156-autonomous-drip-20260622c
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
  - "#83143"
cluster_refs:
  - "#83143"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#14051"
  - "#46844"
  - "#85225"
  - "#94002"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#94002"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #94002 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1156 on 2026-06-22. Existing-overlap refs #14051, #46844, #85225, #94002 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1156

Generated from local gitcrawl run cluster 1156 for `openclaw/openclaw`.

Display title:

> fix(heartbeat): skip missing-file idle heartbeat

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #14051, #46844, #85225, #94002
- security-signal refs requiring route_security: #94002
- representative: #94002, currently open in local store
- latest member update: 2026-06-19T02:13:00.546382Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83143 [Feature]: If HEARTBEAT.md does not exist, do not prompt the model.

Existing-overlap context refs:

- #14051 Feature: Activity-based heartbeat with idle timeout
- #46844 Feature: Talk Mode Idle Timeout / Auto-Deactivation After Voice Wake
- #85225 fix: skip default idle heartbeat without HEARTBEAT.md
- #94002 [security-signal] fix(heartbeat): skip missing-file idle heartbeat
