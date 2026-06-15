---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-021
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
  - "#83612"
  - "#83633"
  - "#83760"
  - "#84161"
  - "#85598"
  - "#85136"
  - "#85055"
  - "#85751"
  - "#74068"
  - "#77325"
cluster_refs:
  - "#83612"
  - "#83633"
  - "#83760"
  - "#84161"
  - "#85598"
  - "#85136"
  - "#85055"
  - "#85751"
  - "#74068"
  - "#77325"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 21

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #83612 [codex] make workspace prompt routing selectable

- bucket: ready_for_maintainer
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XL, extensions: codex, proof: supplied, proof: sufficient, extensions: openrouter, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 🔁 re-review loop
- updated: 2026-05-23T03:23:30Z
- body excerpt: ## Summary This rebuild turns the Codex workspace prompt routing from a forced token-efficiency change into an explicit, user-selectable prompt-surface policy. - Adds `plugins.entries.codex.config.workspacePromptSurface`: - `per_turn_context` (default): qualit

### #83633 fix/telegram-context-controls

- bucket: ready_for_maintainer
- author: MetaRed0401
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, proof: 📸 screenshot
- updated: 2026-05-23T03:23:45Z
- body excerpt: ## Summary - Problem: Telegram DM context assembly used a hardcoded recent history limit of 10, and the `Conversation Context` block was injected without a config-level control. - Why it matters: Telegram DM could include prior user messages in the current age

### #83760 feat(comfy): dynamic aspect ratio → width/height injection

- bucket: ready_for_maintainer
- author: sola-ryu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: L, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- updated: 2026-05-23T04:39:49Z
- body excerpt: ## What Make the Comfy image generation tool respect `aspectRatio` and `size` parameters instead of ignoring them due to hard-coded dimensions in the workflow JSON. **This change also makes the `capabilities` config on all image providers dynamic**, not just C

### #84161 fix(voice-call): persist assistant transcript on call.speaking events

- bucket: needs_proof
- author: happydog-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, gateway, extensions: memory-core, size: L, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- updated: 2026-05-23T04:43:43Z
- body excerpt: ## Summary `onTranscript(role, text, isFinal)` in the realtime bridge fires `call.speaking` events with the assistant's finalized utterance in `event.text`, but the manager's `call.speaking` handler only transitions state and drops the text. That means realtim

### #85598 fix(memory-core): preserve dreaming private workspace boundary[AI-assisted]

- bucket: ready_for_maintainer
- author: LLagoon3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- updated: 2026-05-23T05:50:52Z
- body excerpt: ## Summary - Replace workspace-rooted dreaming private JSON writes with a memory-core helper that uses `fs-safe`'s workspace-root `root()` API for read/write containment. - Keep dreaming artifacts under `memory/.dreams` private without chmodding the user-facin

### #85136 feat(crabbox): add PR desktop lease workflow

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, scripts, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-23T05:57:08Z
- body excerpt: ## Summary - add a generic Crabbox PR desktop lease workflow for maintainer-triggered Linux and macOS inspection leases - install a pinned Crabbox CLI from `openclaw/crabbox` before leasing - post ready/status/failure handoff comments back to the target PR wit

### #85055 Memory wiki cache manifest and claim supersession

- bucket: ready_for_maintainer
- author: Artifact-LV
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- updated: 2026-05-23T06:01:40Z
- body excerpt: ## Summary - separate `wiki.status` read purity from write-scoped `wiki.refresh` - emit strict `wiki-cache-manifest.json` atomically from wiki refresh/compile - add deterministic claim-key normalization and claim reconciliation with schema coverage - allow the

### #85751 chore: add docs link validation CI workflow

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof
- updated: 2026-05-23T15:08:22Z
- body excerpt: ## Summary - Added `.github/workflows/docs-link-check.yml` for automated link validation - Workflow triggers on push/PR changes to docs/ directory - Checks for common link issues and reports broken links ## Problem No automated check existed for broken links i

### #74068 fix(cron): keep recurring backoff stable after reload

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS
- updated: 2026-05-23T18:10:37Z
- body excerpt: ## Summary - keep recurring cron error backoff on the fixed recurring schedule during reload/recompute - stop applying one-shot `cron.retry.backoffMs` to recurring jobs after reload - add regression coverage for an errored recurring job with custom one-shot re

### #77325 fix(auto-reply): deliver text-prefix slash command replies visibly in groups (#77260)

- bucket: ready_for_maintainer
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, proof: sufficient
- updated: 2026-05-23T18:11:47Z
- body excerpt: ### Summary Reported by @awayspam in #77260: in v2026.5.3-1, slash commands like `/new` and `/status` sent in Matrix groups (and other surfaces that emit `CommandSource: "text"`) silently process the action but never deliver the canned confirmation reply when 

