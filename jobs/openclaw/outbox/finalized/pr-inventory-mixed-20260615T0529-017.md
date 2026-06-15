---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-017
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
  - "#71953"
  - "#72005"
  - "#72009"
  - "#85353"
  - "#72055"
  - "#72115"
  - "#72128"
  - "#72178"
  - "#72187"
  - "#72209"
cluster_refs:
  - "#71953"
  - "#72005"
  - "#72009"
  - "#85353"
  - "#72055"
  - "#72115"
  - "#72128"
  - "#72178"
  - "#72187"
  - "#72209"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 17

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #71953 fix(build): copy bundled hook HOOK.md manifests in runtime postbuild

- bucket: needs_proof
- author: jtatum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T20:30:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `pnpm gateway:watch` does not copy built-in hooks to the `dist/` directory. This makes built-in hooks silently fail when running the dev gateway. ## Change Type (select all) - [x] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [ ] Docs 

### #72005 feat: server-rendered status footer and context threshold warnings

- bucket: needs_proof
- author: wearegoodthanks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T20:30:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Server-rendered status footer and one-shot context-usage warnings for outbound chat messages. Fixes the "model lies about its own runtime state" failure mode in #71984 by moving footer authorship below the LLM. ## Why Asking a model to append a stat

### #72009 Make typing indicator TTL configurable

- bucket: ready_for_maintainer
- author: suntp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T20:30:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase the default typing indicator TTL from 2 minutes to 5 minutes. - Add configurable `typingTtlSeconds` support via session config and agent defaults. - Document the new setting and regenerate the base config schema. Closes #71999 ## Tests - 

### #85353 fix(plugin-loader): prefer native loading for compiled SDK imports

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T20:30:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This changes the plugin module loader to try native loading before forcing `jiti` source transformation for compiled JavaScript files that import `openclaw/plugin-sdk/*`. The loader still preserves the existing safety fallback: if native loading dec

### #72055 feat(bonjour): add instanceName plugin config to override mDNS service name [AI-assisted]

- bucket: ready_for_maintainer
- author: jeffjhunter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, plugin: bonjour, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T20:30:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54467. ## Summary Adds a `plugins.entries.bonjour.config.instanceName` plugin config key so each gateway can advertise a distinct mDNS service instance name, instead of all gateways on the same host sharing `<machine display name> (OpenClaw)` and getti

### #72115 [EV-002B] Skill Workshop parity: path, TOCTOU, prompt-budget hardening

- bucket: needs_proof
- author: nefainl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, channel: telegram, channel: voice-call, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, commands, agents, channel: feishu, size: XL, extensions: deepseek, channel: qa-channel, extensions: qa-lab, extensions: codex, triage: dirty-candidate, triage: needs-real-behavior-proof, extensions: oc-path, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T20:31:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements **EV-002B** (Skill Workshop defense-in-depth) per Evolves plan: gated procedural writer stays **only** in `extensions/skill-workshop`; no core `skills_manage` tool. ### Changes - **G2 path:** `isPathInside` / `isPathInsideWithRealpath` fr

### #72128 feat: implemented configurable label templates for spawned agent sess…

- bucket: needs_proof
- author: geethsowri
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T20:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: sessions_spawn accepted a plain label param with no convention or auto-prefix mechanism; in multi-agent pipelines (Manager / Extractor / Scorer / Reporter), the sessions list shows raw user-supplied labels with no way to filter or identify w

### #72178 feat: cursor-based pagination for chat.history + fix partial NO_REPLY…

- bucket: needs_proof
- author: MohitVachhani
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T21:05:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Implements cursor-based pagination for `chat.history` so external consumers (e.g. webchat) can load older messages page by page using a `before` index parameter. Closes #19060. - Fixes partial `NO_REPLY` stream deltas (`"NO_"`, `"NO_REPL"`, etc.) 

### #72187 feat(plugin-sdk): add service lifecycle test harness

- bucket: needs_proof
- author: JB357345688
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T21:05:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a generic plugin-SDK service lifecycle test harness for finite plugin service/hook tests. This gives plugin authors a supported test helper for exercising registered plugin services with a usable `stateDir`, optional `workspaceDir`, finite serv

### #72209 Add passive session recovery checkpoints

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T21:05:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds passive session recovery checkpoints so automatically recreated sessions can recover task context without pretending to remember, inheriting old approvals, or auto-executing recovered steps. ## What changed - Add session recovery prompt discipl

