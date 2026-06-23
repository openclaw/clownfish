---
repo: openclaw/openclaw
cluster_id: gitcrawl-166-autonomous-refresh-20260623a
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
  - "#85268"
cluster_refs:
  - "#85268"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#74378"
  - "#74425"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #74378 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 166 on 2026-06-23. Existing-overlap refs #74378, #74425 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 166

Generated from local gitcrawl run cluster 166 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #74378, #74425
- representative: #74378, currently open in local store
- latest member update: 2026-06-19T02:13:01.136378Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85268 [Bug]:  [Windows] exec spawn: all commands hang with no output (stdio pipe deadlock)

Existing-overlap context refs:

- #74378 [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows
- #74425 fix: ensure CLI processes exit after command completion on Windows
