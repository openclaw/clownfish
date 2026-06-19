---
repo: openclaw/openclaw
cluster_id: gitcrawl-1113-intake-20260619
mode: plan
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
canonical: []
candidates:
  - "#78493"
cluster_refs:
  - "#78493"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#54634"
  - "#63561"
  - "#79375"
  - "#79488"
  - "#79490"
  - "#79515"
  - "#79538"
  - "#79913"
  - "#81410"
  - "#89858"
  - "#90113"
  - "#91221"
  - "#93302"
  - "#93304"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #81410 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1113 on 2026-06-19. Existing-overlap refs #54634, #63561, #79375, #79488, #79490, #79515, #79538, #79913, #81410, #89858, #90113, #91221, #93302, #93304 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1113

Generated from local gitcrawl run cluster 1113 for `openclaw/openclaw`.

Display title:

> Gateway lifecycle commands target stale SUDO_USER scope from root shell instead of root systemd user service

Cluster shape from gitcrawl:

- total members: 15
- issues: 9
- pull requests: 6
- open candidates in local store: 1
- excluded existing-overlap refs: #54634, #63561, #79375, #79488, #79490, #79515, #79538, #79913, #81410, #89858, #90113, #91221, #93302, #93304
- representative: #81410, currently open in local store
- latest member update: 2026-06-18T16:17:08.44005Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78493 sudo openclaw update can create mixed ownership, then doctor overwrites config after EACCES/read failure

Existing-overlap context refs:

- #54634 Update 2026.3.24 silently drops config when HOME changes
- #63561 [Bug]: `openclaw gateway status` and `openclaw gateway install` falsely report user systemd unavailable while the user service is enabled and active
- #79375 Upgrade leaves stale user-level systemd unit, dueling services kill each other on Linux
- #79488 Skill config requirements with object format show "[object Object]" instead of proper values
- #79490 [Bug]: SPAWN_ALLOWLIST environment variable is ignored, preventing agent spawning
- #79515 openclaw status reports gateway service as failed while systemd user unit is active
- #79538 [security-signal] Fix skill config requirements, spawn allowlists, chat stop lifecycle, and systemd status
- #79913 [security-signal] fix(config): apply SPAWN_ALLOWLIST env for sessions_spawn (#79490)
- #81410 Gateway lifecycle commands target stale SUDO_USER scope from root shell instead of root systemd user service
- #89858 [security-signal] Fix systemd gateway unit scope conflicts
- #90113 [security-signal] Regression: OpenClaw 2026.6.1 misdetects root systemd user gateway service after update/doctor
- #91221 fix(daemon): detect and resolve dueling user+system systemd gateway units (#79375)
- #93302 fix(daemon): avoid stale SUDO_USER redirecting systemctl away from root's user scope (fixes #81410)
- #93304 fix(systemd): verify SUDO_USER unit file exists before targeting its scope (fixes #81410)
