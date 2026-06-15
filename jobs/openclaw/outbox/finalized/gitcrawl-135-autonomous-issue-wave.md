---
repo: openclaw/openclaw
cluster_id: gitcrawl-135-autonomous-issue-wave
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
  - "#91489"
  - "#92054"
cluster_refs:
  - "#91489"
  - "#92054"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#91490"
  - "#92119"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #92119 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 135 on 2026-06-15. Existing-overlap refs #91490, #92119 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 135

Generated from local gitcrawl run cluster 135 for `openclaw/openclaw`.

Display title:

> fix(supervisor): resolve Claude/Gemini CLI .cmd shims on Windows [AI-assisted] (alternative to #91490)

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #91490, #92119
- representative: #92119, currently open in local store
- latest member update: 2026-06-15T11:49:41.460549Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91489 Windows: spawning claude via child_process fails (ENOENT/EINVAL) due to missing .cmd handling
- #92054 [Bug]: Windows 11 - Claude CLI provider fails with spawn claude ENOENT

Existing-overlap context refs:

- #91490 [security-signal] fix(supervisor): spawn claude .cmd shim correctly on Windows
- #92119 [security-signal] fix(supervisor): resolve Claude/Gemini CLI .cmd shims on Windows [AI-assisted] (alternative to #91490)
