---
repo: openclaw/openclaw
cluster_id: gitcrawl-147-autonomous-refresh-20260623a
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
  - "#90982"
candidates:
  - "#90982"
cluster_refs:
  - "#90982"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#91002"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91002"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90982 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 147 on 2026-06-23. Existing-overlap refs #91002 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 147

Generated from local gitcrawl run cluster 147 for `openclaw/openclaw`.

Display title:

> [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #91002
- security-signal refs requiring route_security: #91002
- representative: #90982, currently open in local store
- latest member update: 2026-06-19T02:13:01.218717Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90982 [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log

Existing-overlap context refs:

- #91002 [security-signal] fix(tui): show last tool-error summary on aborted runs
