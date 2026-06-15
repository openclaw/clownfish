---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-044
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
  - "#76094"
  - "#76298"
  - "#72267"
  - "#80388"
  - "#78139"
  - "#80779"
  - "#78765"
  - "#85225"
  - "#86146"
  - "#72807"
cluster_refs:
  - "#76094"
  - "#76298"
  - "#72267"
  - "#80388"
  - "#78139"
  - "#80779"
  - "#78765"
  - "#85225"
  - "#86146"
  - "#72807"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 44

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76094 docs: add missing breakPreference field to blockStreamingChunk config example

- bucket: ready_for_maintainer
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T13:29:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `breakPreference` field exists in `BlockStreamingChunkConfig` (types.base.ts line 34) but is missing from the docs example - **Why it matters:** Users only see `minChars` and `maxChars` — `breakPreference` is invisible despite being a

### #76298 feat(cli): add openclaw experimental for toggling experimental config flags

- bucket: needs_proof
- author: rendrag-git
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-05-29T15:01:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted. Tested on pushed branch `115daf62fe`: focused Vitest coverage for config/CLI/chat/TUI passed, config schema check passed, the real `pnpm openclaw experimental --help` entrypoint resolved, the interactive CLI picker wrote a throwaway config with 

### #72267 fix: zsh compdef directive on first line

- bucket: needs_proof
- author: gigamonster256
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T15:46:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: zsh completions do not work when auto loaded - Why it matters: zsh completions must have the #compdef directive on the first line to work properly (works fine when sourced but not loaded automatically from fpath) - What changed: zsh compl

### #80388 feat(plugins): add Control UI entry points

- bucket: stale_unassigned
- author: Ittiz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, app: web-ui, gateway, size: XL, extensions: codex, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-05-29T16:33:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugins can expose gateway-authenticated HTTP routes, but there is no generic way for a plugin to register a first-class Control UI navigation entry. - Why it matters: Plugin UIs currently require bespoke Control UI wiring, which makes re

### #78139 fix(cron): hint after disable about list filtering disabled jobs

- bucket: ready_for_maintainer
- author: kate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T16:48:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw cron disable <id>` appears to delete recurring cron jobs because `openclaw cron list` hides disabled jobs by default. Users see a successful disable response, then `cron list` shows the job is gone, and reasonably conclude the j

### #80779 fix(devices): always route stale-approve operator to openclaw devices list

- bucket: ready_for_maintainer
- author: luijoc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-29T18:35:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted: drafted with Claude (Opus 4.7). Bug surfaced by the agent > while operating an OpenClaw 2026.5.7 ECS Fargate deployment in production; > full transcript available on request. > **Update (rebased 2026-05-14):** Post-refactor in `fe25ed214e` ("ref

### #78765 fix(tui): avoid inserting spaces into long CJK text

- bucket: ready_for_maintainer
- author: hpt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-29T22:57:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Avoid inserting display spaces into long CJK text in TUI-rendered assistant output. `sanitizeRenderableText()` currently protects narrow terminals by splitting long unbroken tokens into 32-character chunks joined with spaces. That works for long Lat

### #85225 fix: skip default idle heartbeat without HEARTBEAT.md

- bucket: needs_proof
- author: ANONYMOUSZED-beep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T03:40:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Skip default, unconfigured idle heartbeat runs when the agent workspace has no HEARTBEAT.md, no due commitments, and no event wake payload. - Preserve existing behavior for explicit heartbeat configuration and wake/cron/exec-triggered runs. - Add a r

### #86146 fix(feishu): clear client cache when replacing test SDK runtime

- bucket: needs_proof
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T04:46:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83911. `setFeishuClientRuntimeForTest` replaced the module SDK (`feishuClientSdk`) but did not evict `clientCache`. A later `createFeishuClient` call with the same `accountId` and identical credentials hit the cache and returned the client co

### #72807 feat(agents): allow opting out of git init on agents.create

- bucket: needs_proof
- author: yoanndefay
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:53:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `ensureAgentWorkspace()` unconditionally runs `git init` for brand-new workspaces. This PR adds an opt-out: a new `gitInit` boolean parameter on both the `agents.create` RPC and `ensureAgentWorkspace()`. Default behavior is unchanged. ## Why Hosts t

