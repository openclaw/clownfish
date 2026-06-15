---
repo: openclaw/openclaw
cluster_id: gitcrawl-304-autonomous-issue-wave
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
  - "#87312"
candidates:
  - "#87312"
cluster_refs:
  - "#87312"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87344"
  - "#87937"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #87312 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 304 on 2026-06-15. Existing-overlap refs #87344, #87937 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 304

Generated from local gitcrawl run cluster 304 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw doctor reports "Could not determine the installed Chrome version" despite Chrome 148 installed at expected path

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #87344, #87937
- representative: #87312, currently open in local store
- latest member update: 2026-06-15T11:49:40.079128Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87312 [Bug]: openclaw doctor reports "Could not determine the installed Chrome version" despite Chrome 148 installed at expected path

Existing-overlap context refs:

- #87344 fix(browser): read Chrome version from PE metadata on Windows
- #87937 fix(browser): read Windows Chrome version from build dir in doctor
