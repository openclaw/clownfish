---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-003
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
  - "#89912"
  - "#89924"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
  - "#89963"
  - "#85481"
  - "#16544"
  - "#72610"
  - "#84335"
  - "#78054"
  - "#78099"
  - "#78388"
  - "#78511"
  - "#78536"
  - "#64436"
  - "#77774"
  - "#89726"
  - "#89857"
  - "#89923"
  - "#89936"
  - "#28081"
  - "#90102"
  - "#90105"
cluster_refs:
  - "#89912"
  - "#89924"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
  - "#89963"
  - "#85481"
  - "#16544"
  - "#72610"
  - "#84335"
  - "#78054"
  - "#78099"
  - "#78388"
  - "#78511"
  - "#78536"
  - "#64436"
  - "#77774"
  - "#89726"
  - "#89857"
  - "#89923"
  - "#89936"
  - "#28081"
  - "#90102"
  - "#90105"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.786Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 3

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89912 refactor: add transcript update identity contract

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, extensions: memory-core, agents, maintainer, size: L, extensions: codex, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 🛠️ actively grinding, extensions: copilot
- gitcrawl snapshot updated: 2026-06-14T17:20:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds storage-neutral identity to `SessionTranscriptUpdate` delivery while keeping `sessionFile` as deprecated file-backed compatibility for existing path-based emitters and subscribers. ## Why Path 3 SQLite writer validation could not honestly route tr

### #89924 fix(plugins): guard effective channel owner metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:20:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable bundled channel-owner manifest metadata to the affected plugin row during effective plugin id resolution - keep healthy bundled channel owners eligible when a different manifest row throws while exposing `origin`, `channels`, or

### #89940 fix(models): guard manifest model id metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin records while collecting manifest model-id normalization policies. - Preserve policy collection from healthy records before and after a poisoned metadata row. - Add regression coverage for both throwing `modelIdNormalization

### #89945 fix(plugins): guard provider discovery metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest model-catalog metadata reads during provider discovery so one unreadable plugin row is skipped instead of aborting discovery. - Keep healthy manifest static catalog entries available before and after a bad row. - Add a poisoned meta

### #89946 fix(plugins): guard provider policy metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard bundled provider policy owner resolution against unreadable per-plugin metadata rows. - Continue resolving later valid bundled provider policy owners after a malformed row. - Add a regression covering poisoned `providers` and `providerAuthAl

### #89948 fix(plugins): guard plugin id alias metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin-registry config id alias collection against unreadable manifest metadata. - Skip only the malformed manifest alias row, while preserving healthy channel/provider aliases for config id normalization. - Add regression coverage for poiso

### #89963 fix(plugins): isolate bundled channel metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate malformed bundled channel manifest rows while building bundled channel runtime metadata - keep later healthy bundled channel metadata discoverable when another row throws during metadata conversion - add a regression test for an unreadable

### #85481 Fix Feishu card action mention gating

- bucket: maintainer_owned
- author: googlerest
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: channel: feishu, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:20:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85450. ## Summary - Mark Feishu synthetic group card-action callbacks with bot mention metadata when `botOpenId` is known. - Keep p2p card callbacks unchanged so direct-message callbacks do not gain synthetic mentions. - Add regression coverage for both

### #16544 refactor(test): structural MockFn for harness exports

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: imessage, channel: telegram, channel: whatsapp-web, maintainer, size: M, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:31:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Context: - Recent CI/tsgo failures (TS2742) were caused by exporting inferred vitest mock types from harness modules under `src/`. Change: - `src/test-utils/vitest-mock-fn.ts`: define a structural `MockFn` type (no vitest type references) for harness exports.

### #72610 feat(migrations): add Hermes import path

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review, rating: 🧂 unranked krab, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-14T18:45:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a generic migration framework and fresh-setup guard - add the built-in Hermes importer with memory/config/plugin/MCP/skill mappings - add `openclaw migrate` and onboarding import flags - document migration imports and i18n labels ## Tests - `O

### #84335 fix(slack): forward per-agent identity overlay on heartbeat and runtimeSend (#84297)

- bucket: maintainer_owned
- author: Rohang2005
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: channel: slack, cli, size: M, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:02:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Per-agent Slack identity (`agents.list[].identity`) doesn't survive the heartbeat / announce path. Two things go wrong: 1. The overlay gets dropped before it reaches the channel adapter — both in the heartbeat runner and in the legacy CLI `runtimeSe

### #78054 fix: clarify group mentions target other people

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:06:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - tighten group-chat prompt rules so agents mostly lurk and do not answer every message - clarify that @mentions of other people are addressed to that person, not the agent - allow exceptions only for direct asks or concise corrections that prevent

### #78099 chore(catalog): split Weixin entry from channel fix

- bucket: maintainer_owned
- author: odysseus0
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, commands, maintainer, size: S, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:08:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split the non-bug-fix Weixin official external catalog addition back out of #77269. - Keep the channel-catalog install-records fix and its regression coverage intact on main. - Restore stale-plugin doctor tests to use `openclaw-weixin` as missing

### #78388 fix(cli): reduce plugin hook fallback noise

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: cli, maintainer, size: XS, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:17:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - suppress the misleading `Also not a valid hook pack: package.json missing openclaw.hooks` suffix when plugin install fallback only proves a package lacks a hook-pack manifest - keep actionable hook-pack fallback details for real hook validation failu

### #78511 fix(gateway): skip health-monitor restart for terminal WhatsApp disconnects

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:23:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: On multi-tenant gateways running ≥1 WhatsApp account, any account that receives a terminal disconnect (`loggedOut` 401, `connectionReplaced` 440) enters a perpetual restart loop — the health monitor calls `startChannel()` on every ch

### #78536 fix(slack): preserve buffered thread stream replies

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Slack native streaming can keep short thread replies in the SDK buffer until finalization, and unexpected `chat.stopStream` failures before that flush can drop the generated reply. - Why it matters: #78061 reports Slack thread sessions ge

### #64436 feat: expose model pricing to plugins via runtime.usage API

- bucket: maintainer_owned
- author: dodge1218
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: docs, stale, size: XS, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:42:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `runtime.usage` namespace to the plugin runtime, exposing `resolveModelCostConfig()` and `estimateUsageCost()` so context engine plugins can calculate model-cost estimates from OpenClaw's configured pricing instead of hardcoded heuristics. ##

### #77774 feat: redesign control overview dashboard

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: L, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:42:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - adds a two-column overview dashboard layout with a sticky status rail - surfaces gateway health, channels, sessions, runs, skills, cron, hooks, and attention counts - keeps rail controls clickable so summary stats jump to the relevant Control sect

### #89726 fix(agents): guard deferred follow-up tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:50:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard deferred follow-up guidance setup against active tools whose `name` getter throws. - Preserve unreadable-name tools in the returned list while still updating healthy `exec`/`process` siblings. - Replace object-spread cloning with descriptor-

### #89857 fix(plugins): guard runtime lifecycle cleanup metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:51:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin runtime lifecycle cleanup metadata reads so a stale/unreadable registration is reported as a cleanup failure instead of crashing cleanup. - Preserve targeted cleanup filtering so unrelated stale lifecycle rows are ignored when cleanin

### #89923 fix(plugins): guard manifest command alias metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:51:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest command alias and tool-owner registry walks against unreadable plugin metadata rows. - Preserve healthy command aliases and tool owners after bad rows while keeping real plugin IDs from being shadowed by aliases. - Add regressions f

### #89936 fix(plugins): guard model suppression metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:51:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable manifest plugin rows while planning manifest-driven built-in model suppressions. - Build a narrow readable planner view after control-plane availability filtering, so one bad metadata row cannot prevent later valid suppressions fro

### #28081 doctor(config): auto-prune removed google-antigravity-auth entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:00:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: users can keep stale `plugins.entries["google-antigravity-auth"]` config after the plugin was removed, which keeps emitting warnings (`#27371`). - Why it matters: users must manually edit confi

### #90102 fix(plugin-sdk): guard qa runner manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:04:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden Plugin SDK QA runner discovery so malformed manifest rows are skipped instead of aborting CLI contribution listing. - Normalize the small metadata slice QA runner discovery needs before sorting or loading runtime surfaces. - Add regression

### #90105 fix(channels): guard read-only command metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:04:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard read-only channel command default resolution against unreadable plugin metadata rows. - Keep later healthy plugin command defaults resolvable when an earlier plugin row has throwing `channels` or `channelConfigs` accessors. - Add a regressio
