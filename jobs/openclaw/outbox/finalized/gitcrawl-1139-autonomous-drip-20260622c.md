---
repo: openclaw/openclaw
cluster_id: gitcrawl-1139-autonomous-drip-20260622c
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
  - "#93905"
candidates:
  - "#93905"
cluster_refs:
  - "#93905"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92877"
  - "#93937"
  - "#93986"
  - "#93991"
  - "#94041"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#93937"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93905 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1139 on 2026-06-22. Existing-overlap refs #92877, #93937, #93986, #93991, #94041 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1139

Generated from local gitcrawl run cluster 1139 for `openclaw/openclaw`.

Display title:

> [Bug]: /usage no longer works in Telegram

Cluster shape from gitcrawl:

- total members: 6
- issues: 1
- pull requests: 5
- open candidates in local store: 1
- excluded existing-overlap refs: #92877, #93937, #93986, #93991, #94041
- security-signal refs requiring route_security: #93937
- representative: #93905, currently open in local store
- latest member update: 2026-06-19T02:13:00.673446Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93905 [Bug]: /usage no longer works in Telegram

Existing-overlap context refs:

- #92877 fix(usage): make built-in footer easier to wrap on Telegram
- #93937 [security-signal] fix(usage): handle total-only usage in response usage line format
- #93986 fix(usage): read responseUsage from run session as third fallback
- #93991 fix: remove nativeName from /usage command to fix Telegram usage footer
- #94041 fix(usage): improve footer fallback resilience and add Telegram surface
