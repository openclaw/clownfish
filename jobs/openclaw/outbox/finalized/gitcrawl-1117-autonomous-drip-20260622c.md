---
repo: openclaw/openclaw
cluster_id: gitcrawl-1117-autonomous-drip-20260622c
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
  - "#93936"
candidates:
  - "#93936"
cluster_refs:
  - "#93936"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42798"
  - "#91553"
  - "#93932"
  - "#93939"
  - "#93997"
  - "#94024"
  - "#94035"
  - "#94103"
  - "#94496"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#93997"
  - "#94496"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93936 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1117 on 2026-06-22. Existing-overlap refs #42798, #91553, #93932, #93939, #93997, #94024, #94035, #94103, #94496 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1117

Generated from local gitcrawl run cluster 1117 for `openclaw/openclaw`.

Display title:

> Tailscale serve creates redundant entries on gateway startup

Cluster shape from gitcrawl:

- total members: 10
- issues: 3
- pull requests: 7
- open candidates in local store: 1
- excluded existing-overlap refs: #42798, #91553, #93932, #93939, #93997, #94024, #94035, #94103, #94496
- security-signal refs requiring route_security: #93997, #94496
- representative: #93936, currently open in local store
- latest member update: 2026-06-19T02:13:00.769127Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93936 Tailscale serve creates redundant entries on gateway startup

Existing-overlap context refs:

- #42798 fix(tailscale): startup race condition causes transient 'Command failed: tailscale status --json' errors
- #91553 fix(tailscale): retry status json after serve startup
- #93932 [Bug]:
- #93939 fix: reset tailscale serve before reconfiguring to prevent redundant entries
- #93997 [security-signal] fix(tailscale): clear stale serve entries before adding to prevent duplicates on restart
- #94024 fix(gateway): clear stale tailscale serve entries before setting up new ones
- #94035 fix(tailscale): reset serve entries before setup to prevent duplicates on restart
- #94103 fix(tailscale): pre-clean stale serve entries on gateway startup
- #94496 [security-signal] fix: Tailscale serve creates redundant entries on gateway startup
