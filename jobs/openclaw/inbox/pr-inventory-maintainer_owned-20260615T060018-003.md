---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-003
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#72409"
  - "#72610"
  - "#73342"
  - "#73365"
  - "#73374"
  - "#73385"
  - "#73390"
  - "#73399"
  - "#73401"
  - "#73402"
cluster_refs:
  - "#72409"
  - "#72610"
  - "#73342"
  - "#73365"
  - "#73374"
  - "#73385"
  - "#73390"
  - "#73399"
  - "#73401"
  - "#73402"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.659Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 3

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72409 fix(plugins): suppress false duplicate-id warnings across origins

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Carry forward the narrow #42192 fix for false duplicate plugin-id warnings across expected plugin discovery origins. - Preserve genuine duplicate diagnostics by updating origin-bucket tracking when a same-root candidate is promoted to a higher-pre

### #72610 feat(migrations): add Hermes import path

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a generic migration framework and fresh-setup guard - add the built-in Hermes importer with memory/config/plugin/MCP/skill mappings - add `openclaw migrate` and onboarding import flags - document migration imports and i18n labels ## Tests - `O

### #73342 refactor(memory-host): replace core runtime bridge with services

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:23:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `packages/memory-host-sdk` still reached into core through private `openclaw-runtime*` bridge files. - Why it matters: the package boundary was package-shaped but not actually core-independent. - What changed: added package-local `MemoryH

### #73365 fix: allow steer messages during active non-streaming runs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the isStreaming-only steer/interrupt injection gate with lifecycle-aware active/stopped handling for embedded and reply runs. - Preserve the old conservative streaming fallback for handles that do not expose isStopped, addressing the lates

### #73374 fix: gate same-model retries to idempotent calls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: L, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrow ProjectClownfish replacement for the same-model transient retry behavior proposed in #44385. It preserves attribution to @nicolasgrasset and source PR https://github.com/openclaw/openclaw/pull/44385 while excluding unrelated outboun

### #73385 fix: gate sandbox write tools on writable workspace access

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #65316. This narrows sandboxed coding-tool availability so write, edit, and apply_patch are exposed only when the sandbox has an effective writable workspace target. The prior path/media issues tracked in #57230 and #59063 are already closed as implement

### #73390 Add configurable WebChat send shortcut

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/8147. This adds a narrow WebChat/Control UI send-shortcut preference so users can avoid accidental sends while composing with IME or multi-line text. The implementation should update the composer keydown behavi

### #73399 fix(feishu): carry forward DM fallback and topic labels

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, channel: feishu, size: L, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Carry forward the remaining Feishu display-name behavior from #38958 after #51032 already landed the group-name session label fix. This replacement should stay narrow: - keep #51032's group-name implementation as the baseline - add/repair DM display

### #73401 fix(agents): load symlinked workspace bootstrap files

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Load explicit fixed workspace bootstrap files such as AGENTS.md, SOUL.md, USER.md, and MEMORY.md when they are symlinks to readable regular files outside the workspace. - Keep the fallback scoped to fixed bootstrap files and preserve existing prot

### #73402 fix(tui): subscribe to live session transcript updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #38829 by making the bundled TUI subscribe to live transcript updates for the active session. - Covers the duplicate reproduction in #43341 without widening the gateway hidden-run chat fanout boundary discussed on #41964. - Keeps #51691 as b

