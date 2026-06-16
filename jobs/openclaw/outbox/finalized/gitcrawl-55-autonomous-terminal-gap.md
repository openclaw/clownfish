---
repo: openclaw/openclaw
cluster_id: gitcrawl-55-autonomous-terminal-gap
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
  - "#63561"
candidates:
  - "#63561"
  - "#79488"
  - "#79515"
  - "#81410"
cluster_refs:
  - "#63561"
  - "#79488"
  - "#79515"
  - "#81410"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#73888"
  - "#79490"
  - "#79538"
  - "#79913"
  - "#90113"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #63561 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 55 on 2026-06-16. Existing-overlap refs #73888, #79490, #79538, #79913, #90113 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 55

Generated from local gitcrawl run cluster 55 for `openclaw/openclaw`.

Display title:

> [Bug]: `openclaw gateway status` and `openclaw gateway install` falsely report user systemd unavailable while the user service is enabled and active

Cluster shape from gitcrawl:

- total members: 9
- issues: 6
- pull requests: 3
- open candidates in local store: 4
- excluded existing-overlap refs: #73888, #79490, #79538, #79913, #90113
- representative: #63561, currently open in local store
- latest member update: 2026-06-15T19:04:12.478944Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63561 [Bug]: `openclaw gateway status` and `openclaw gateway install` falsely report user systemd unavailable while the user service is enabled and active
- #79488 Skill config requirements with object format show "[object Object]" instead of proper values
- #79515 openclaw status reports gateway service as failed while systemd user unit is active
- #81410 Gateway lifecycle commands target stale SUDO_USER scope from root shell instead of root systemd user service

Existing-overlap context refs:

- #73888 fix(daemon): recover systemctl user bus env for gateway commands
- #79490 [Bug]: SPAWN_ALLOWLIST environment variable is ignored, preventing agent spawning
- #79538 [security-signal] Fix skill config requirements, spawn allowlists, chat stop lifecycle, and systemd status
- #79913 [security-signal] fix(config): apply SPAWN_ALLOWLIST env for sessions_spawn (#79490)
- #90113 [security-signal] Regression: OpenClaw 2026.6.1 misdetects root systemd user gateway service after update/doctor
