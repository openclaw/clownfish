---
repo: openclaw/openclaw
cluster_id: gitcrawl-1221-autonomous-drip-20260622c
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
  - "#87441"
cluster_refs:
  - "#87441"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93817"
  - "#93910"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#93910"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93817 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1221 on 2026-06-22. Existing-overlap refs #93817, #93910 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1221

Generated from local gitcrawl run cluster 1221 for `openclaw/openclaw`.

Display title:

> feat(diagnostics): expose memory pressure thresholds via config

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #93817, #93910
- security-signal refs requiring route_security: #93910
- representative: #93817, currently open in local store
- latest member update: 2026-06-19T02:13:01.050662Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87441 diagnostics/memory: wire thresholds parameter to config (rssWarningBytes/rssCriticalBytes/heapUsedWarningBytes/heapUsedCriticalBytes)

Existing-overlap context refs:

- #93817 feat(diagnostics): expose memory pressure thresholds via config
- #93910 [security-signal] feat(diagnostics): expose memory pressure thresholds via config
