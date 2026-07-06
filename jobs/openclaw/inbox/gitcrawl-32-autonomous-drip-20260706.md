---
repo: openclaw/openclaw
cluster_id: gitcrawl-32-autonomous-drip-20260706
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
  - "#92015"
cluster_refs:
  - "#92015"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#22438"
  - "#22439"
  - "#39120"
  - "#67419"
  - "#72495"
  - "#73401"
  - "#74735"
  - "#75184"
  - "#75217"
  - "#77801"
  - "#78031"
  - "#78093"
  - "#78113"
  - "#80289"
  - "#86819"
  - "#88935"
  - "#88961"
  - "#92521"
  - "#92939"
  - "#93697"
  - "#94172"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73401"
  - "#74735"
  - "#75217"
  - "#78113"
  - "#88935"
  - "#92521"
  - "#93697"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #74735 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 32 on 2026-07-06. Existing-overlap refs #22438, #22439, #39120, #67419, #72495, #73401, #74735, #75184, #75217, #77801, #78031, #78093, #78113, #80289, #86819, #88935, #88961, #92521, #92939, #93697, #94172 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 32

Generated from local gitcrawl run cluster 32 for `openclaw/openclaw`.

Display title:

> feat(bootstrap): support session-scoped extra files

Cluster shape from gitcrawl:

- total members: 22
- issues: 9
- pull requests: 13
- open candidates in local store: 1
- excluded existing-overlap refs: #22438, #22439, #39120, #67419, #72495, #73401, #74735, #75184, #75217, #77801, #78031, #78093, #78113, #80289, #86819, #88935, #88961, #92521, #92939, #93697, #94172
- security-signal refs requiring route_security: #73401, #74735, #75217, #78113, #88935, #92521, #93697
- representative: #74735, currently open in local store
- latest member update: 2026-06-19T02:13:01.075055Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92015 Hardening: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents

Existing-overlap context refs:

- #22438 feat: Tiered bootstrap file loading for progressive context control
- #22439 feat(workspace): add tiered bootstrap loading with configurable bootstrapTier
- #39120 [Feature]: Support arbitrary workspace files in bootstrap context injection
- #67419 Session context bloat: bootstrap files re-injected every turn, wasting 20-30% tokens
- #72495 fix(agents): harden workspace bootstrap cache identity
- #73401 [security-signal] fix(agents): load symlinked workspace bootstrap files
- #74735 [security-signal] feat(bootstrap): support session-scoped extra files
- #75184 [Bug]: `agents.defaults.skipBootstrap: true` is a no-op for workspace bootstrap files
- #75217 [security-signal] fix(agents): honor skipBootstrap at runtime injection path (#75184)
- #77801 Tool policy pipeline falsely warns about plugin tools in alsoAllow
- #78031 feat(bootstrap): teach compact writing style for workspace templates
- #78093 [Bug]: agents add default workspace now nests bot inside main workspace, causing TUI routing ambiguity
- #78113 [security-signal] fix(agents): restore workspace-<id> sibling layout for non-default agents
- #80289 Performance: Telegram skill invocations (e.g. /weather) pay full workspace bootstrap cost on every turn — 30s+ on Haiku 4.5
- #86819 [Bug]: /context detail shows ~62k untracked provider/runtime overhead on fresh OpenAI Codex gpt-5.5 session
- #88935 [security-signal] fix(agent): load shared tools bootstrap instructions
- #88961 fix(agents): suppress enabled plugin tool allowlist warnings
- #92521 [security-signal] fix(agents): preserve runtime tool inheritance tokens
- #92939 #92015: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents
- #93697 [security-signal] fix/sandbox tool exposure
- #94172 fix(agents): expose fs discovery tools to codex
