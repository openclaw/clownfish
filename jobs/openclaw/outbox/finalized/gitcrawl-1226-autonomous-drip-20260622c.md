---
repo: openclaw/openclaw
cluster_id: gitcrawl-1226-autonomous-drip-20260622c
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
  - "#93465"
candidates:
  - "#93465"
cluster_refs:
  - "#93465"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93551"
  - "#93990"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#93990"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93465 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1226 on 2026-06-22. Existing-overlap refs #93551, #93990 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1226

Generated from local gitcrawl run cluster 1226 for `openclaw/openclaw`.

Display title:

> bug(acpx): Windows embedded ACPX runtime fails with spawn EINVAL for claude adapter — runtime=acp unusable on Windows

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #93551, #93990
- security-signal refs requiring route_security: #93990
- representative: #93465, currently open in local store
- latest member update: 2026-06-19T02:13:00.600605Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93465 bug(acpx): Windows embedded ACPX runtime fails with spawn EINVAL for claude adapter — runtime=acp unusable on Windows

Existing-overlap context refs:

- #93551 fix(acpx): fail closed on Windows wrapper spawns
- #93990 [security-signal] fix(acpx): resolve Windows agent command to safe .exe to avoid spawn EINVAL
