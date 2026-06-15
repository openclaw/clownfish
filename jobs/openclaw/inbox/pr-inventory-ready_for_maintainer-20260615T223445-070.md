---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-070
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
  - "#79747"
  - "#80033"
  - "#81243"
  - "#89635"
  - "#81300"
  - "#81641"
  - "#81778"
  - "#90365"
  - "#90401"
  - "#89517"
  - "#81794"
  - "#81825"
  - "#81907"
  - "#81916"
  - "#82458"
  - "#82495"
  - "#82514"
  - "#82552"
  - "#82562"
  - "#78916"
  - "#82585"
  - "#79041"
  - "#82618"
  - "#79339"
  - "#79405"
cluster_refs:
  - "#79747"
  - "#80033"
  - "#81243"
  - "#89635"
  - "#81300"
  - "#81641"
  - "#81778"
  - "#90365"
  - "#90401"
  - "#89517"
  - "#81794"
  - "#81825"
  - "#81907"
  - "#81916"
  - "#82458"
  - "#82495"
  - "#82514"
  - "#82552"
  - "#82562"
  - "#78916"
  - "#82585"
  - "#79041"
  - "#82618"
  - "#79339"
  - "#79405"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.801Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 70

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #79747 feat(control-ui): add pinned chat slots

- bucket: ready_for_maintainer
- author: hekunwang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:09:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI sidebar pinned-chats strip with configurable slots, drag reorder, inline rename, unpin, and one-click parallel chat creation - persist pinned chat keys/slot count locally and sync them through `sessions.patch` so the preference fo

### #80033 fix(opencode-go): add supportedReasoningEfforts to DeepSeek V4 model entries

- bucket: ready_for_maintainer
- author: wrcno1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:10:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem DeepSeek V4 Flash and V4 Pro natively support reasoning_effort: "max" at the API level. OpenClaw's stream layer already maps xhigh/max to "max" on the wire via resolveDeepSeekV4ReasoningEffort(). However, the opencode-go provider did not expose thes

### #81243 feat(discord): add fetch action to retrieve a single message by ID or URL

- bucket: ready_for_maintainer
- author: yousan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:13:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR (30-second review) - **What:** Adds `action: "fetch"` to the Discord `message` tool — retrieve a single message by `channelId` + `messageId`, or by Discord message URL (`url`). - **Why:** The internal `fetchMessage` path already existed but wasn't on

### #89635 fix(security): cap state directory writes to 0700

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:13:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89589 ## Summary `writeTextAtomic` computes `dirMode` as `0o777 & ~process.umask()`, which yields `0o775` under the common `umask 0o002`. When the atomic replace helper ensures the parent directory exists, it sets that mode, relaxing a previously harden

### #81300 codex: plumb session reasoningLevel into codex model_reasoning_summary

- bucket: ready_for_maintainer
- author: iYoungblood
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:14:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The codex app-server defaults `model_reasoning_summary` to `"none"` when it isnt explicitly configured. As a result codex still produces reasoning items internally (visible in its rollout `.jsonl`) but never emits `item/reasoning/summaryTextDelta` n

### #81641 fix(cli): make `models aliases remove` honest about built-in aliases

- bucket: ready_for_maintainer
- author: ScientificProgrammer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:17:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `openclaw models aliases list` and `openclaw models aliases remove` disagree about whether built-in aliases (the `DEFAULT_MODEL_ALIASES` table — `opus`, `sonnet`, `gpt`, `gpt-mini`, `gpt-nano`, `gemini`, `gemini-flash`, `gemini-flash-lite`) exist.

### #81778 fix(status): detect shell-wrapped gateway services

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:19:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81751. - Teaches gateway service audit to inspect shell-wrapped LaunchAgent command strings such as `/bin/zsh -lc "... index.js gateway --port 18890"`. - Reuses the expanded command tokens for gateway port detection so shell-wrapped service

### #90365 test(browser): replace broad win32 skip with dynamic directory symlink check

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description Replaced the broad and unconditional `win32` platform check in `output-directories.test.ts` with a dynamic capability check for directory symlink support (`canCreateDirectorySymlinks`). If the capability is not present, the test skips gracefull

### #90401 docs(local-models): add Atomic Chat as an OpenAI-compatible local server

- bucket: ready_for_maintainer
- author: danyurkin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:26:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds Atomic Chat to the local-models guide as another OpenAI-compatible local server, alongside the existing LM Studio / Ollama / MLX / custom-proxy guidance. [Atomic Chat](https://atomic.chat/) is a desktop app that runs open-weight models locally and exposes

### #89517 [codex] fix gateway hot-mode restart reloads

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:26:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes the silent-staleness hole in `gateway.reload.mode: "hot"` without changing the shipped default contract. Hot mode keeps warn-and-keep for routine restart-required config edits; two scoped behaviors layer on top: - **`gateway.reload.autoRestar

### #81794 feat(control-ui): compress static assets

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:45:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81754. ## Summary - add Accept-Encoding negotiation for Control UI static assets - serve gzip or brotli for compressible text assets while leaving images raw - advertise negotiated encoding on HEAD requests ## Real behavior proof Behavior or issue addre

### #81825 fix(skills/1password): stop forcing tmux for desktop app auth (#52540)

- bucket: ready_for_maintainer
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:46:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The bundled `1password` skill instructed agents to wrap every `op` invocation in a tmux session. That blanket requirement breaks the **desktop app** integration path: the 1Password CLI desktop-app integration uses a per-user IPC channel (XPC on macO

### #81907 fix(webchat): preserve code block whitespace

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:48:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81339 ## Summary - stop trimming normal WebChat send payloads before `chat.send` - keep slash/local command matching, dedup, and history on the trimmed text while preserving the user-authored chat text on the wire - preserve queued and steered queued me

### #81916 fix(compaction): bound stale transcript usage

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:48:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81178 ## Summary - bound stale raw transcript prompt-usage snapshots against the recent active replay estimate - keep post-usage tail pressure additive for fresh usage records so interrupted tool output after the latest usage record remains conservative

### #82458 fix(infra): drop duplicated "restart" word in restart-sentinel summary

- bucket: ready_for_maintainer
- author: jameswniu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:01:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Restart-event chat messages emit the word `restart` twice when `payload.kind === "restart"`, producing strings like `Gateway restart restart ok (gateway.restart)`. This is the most common `kind` value (every `/restart` from a chat cli

### #82495 fix(doctor): scope state dir scan to current home

- bucket: ready_for_maintainer
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw doctor` state-integrity checks enumerated sibling account homes under `/home` or `/Users` while looking for extra `.openclaw` state dirs. - Why it matters: the warning can disclose other users' OpenClaw state paths and can flag

### #82514 feat(ui-i18n): localize Settings toolbar chrome strings (#46217 partial)

- bucket: ready_for_maintainer
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T23:03:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Phase 1 of #46217: replaces 20 hardcoded English strings in the Settings view toolbar with `t()` calls under a new `settings.*` namespace in `ui/src/i18n/locales/en.ts`. Runs `pnpm ui:i18n:sync` to regenerate all 18 locale bundles. `zh-CN` and `zh-T

### #82552 fix(doctor): migrate legacy dreaming.storage string config (#70407)

- bucket: ready_for_maintainer
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary v2026.4.21 changed `plugins.entries.memory-core.config.dreaming.storage` from a string (`"both" | "inline" | "separate"`) to an object (`{ mode, separateReports }`). Configs persisted before the upgrade fail schema validation on the next `openclaw s

### #82562 fix(plugins): retain plugin tool registry after replacement

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:05:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: cached descriptor-backed plugin tools can lose their runtime registry after the active registry is replaced, then fail with `plugin tool runtime missing`. - Why it matters: #80847 reports contracted plugin tools becoming unavailable in su

### #78916 fix(qqbot): normalize cron delivery targets

- bucket: ready_for_maintainer
- author: jialudev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize QQBot explicit cron delivery targets through the channel-owned parser so `qqbot:c2c:...` becomes channel-local `c2c:...` once the channel is already known. - Reject repeated QQBot provider prefixes during QQBot target parsing instead of

### #82585 feat(synology-chat): add configurable triggerWord to replace payload-based stripping

- bucket: ready_for_maintainer
- author: iA2HVjA7ghZWWl2q9aoZ53f
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, channel: synology-chat, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The channel currently strips `payload.trigger_word` (the field Synology Chat populates on each webhook delivery) from the message text. This field is not user-controlled and its value depends on the Synology Chat configuration in unpredictable ways:

### #79041 fix(webhooks): scope child task sessions

- bucket: ready_for_maintainer
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: webhooks, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #79038 by rejecting Webhooks plugin `run_task.childSessionKey` values unless they identify the route's bound session or a session already recorded as spawned or parented by that route session. - Wires the registered plugin route to the exist

### #82618 feat(edit): populate details.diff so HTML export renders edit changes (#82015)

- bucket: ready_for_maintainer
- author: therahul-yo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82015. The export-html template at `src/auto-reply/reply/export-html/template.js` already knows how to render `result.details.diff` as a coloured diff block (case `"edit"` around L1143-L1162 — added/removed/context lines styled separately),

### #79339 fix: preserve final media reply directives

- bucket: ready_for_maintainer
- author: TnzGit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Flush the streaming reply directive accumulator on final empty block chunks so trailing `MEDIA:/path` lines held in `pendingTail` are not dropped. - Parse phase-aware final-answer text at `text_end` so providers that only surface final text in the

### #79405 fix: harden subagent completion fallback delivery

- bucket: ready_for_maintainer
- author: bingo30008196
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:06:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden subagent completion delivery fallback around task-aware give-up paths. - Preserve taskId in pending delivery context and separate child run id from task id for idempotency. - Avoid persisting a transient primary announce failure as terminal
