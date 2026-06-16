---
repo: openclaw/openclaw
cluster_id: gitcrawl-479-dedupe-cleanup-wave-3
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#92183"
candidates:
  - "#92183"
cluster_refs:
  - "#92183"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92660"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #92183 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 479 on 2026-06-16. Existing-overlap refs #92660 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 479

Generated from local gitcrawl run cluster 479 for `openclaw/openclaw`.

Display title:

> [Bug]: plugins update --dryrun reports "up to date" while npm dist-tags.latest is newer

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92660
- representative: #92183, currently open in local store
- latest member update: 2026-06-15T19:04:11.016988Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92183 [Bug]: plugins update --dryrun reports "up to date" while npm dist-tags.latest is newer

Existing-overlap context refs:

- #92660 [security-signal] fix(plugins): strip exact-version pin from install spec during dry-run update check (#92183)
