---
repo: openclaw/openclaw
cluster_id: gitcrawl-1214-autonomous-refresh-20260623a
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
  - "#73676"
cluster_refs:
  - "#73676"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93034"
  - "#93636"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#93034"
  - "#93636"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93034 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1214 on 2026-06-23. Existing-overlap refs #93034, #93636 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1214

Generated from local gitcrawl run cluster 1214 for `openclaw/openclaw`.

Display title:

> fix(cli): tolerate deleted startup cwd

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #93034, #93636
- security-signal refs requiring route_security: #93034, #93636
- representative: #93034, currently open in local store
- latest member update: 2026-06-19T02:13:00.660528Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73676 [Bug]: CLI crashes when current working directory is deleted (uv_cwd error not handled)

Existing-overlap context refs:

- #93034 [security-signal] fix(cli): tolerate deleted startup cwd
- #93636 [security-signal] fix(infra): tolerate deleted cwd across startup, PATH, home-dir, and TUI [AI-assisted]
