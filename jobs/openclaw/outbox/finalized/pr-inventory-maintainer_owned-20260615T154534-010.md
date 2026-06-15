---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-010
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
  - "#84335"
  - "#78054"
  - "#78099"
  - "#78164"
  - "#78334"
  - "#78388"
  - "#78511"
  - "#78536"
  - "#90032"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90059"
  - "#90064"
  - "#90068"
  - "#90073"
  - "#64436"
  - "#77774"
  - "#89725"
  - "#89726"
  - "#89857"
  - "#89923"
  - "#89936"
  - "#28081"
  - "#90090"
cluster_refs:
  - "#84335"
  - "#78054"
  - "#78099"
  - "#78164"
  - "#78334"
  - "#78388"
  - "#78511"
  - "#78536"
  - "#90032"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90059"
  - "#90064"
  - "#90068"
  - "#90073"
  - "#64436"
  - "#77774"
  - "#89725"
  - "#89726"
  - "#89857"
  - "#89923"
  - "#89936"
  - "#28081"
  - "#90090"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.196Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 10

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #78164 Experiment with agent worker runtime isolation

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:10:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an experimental Node worker runtime path for Pi agent attempts, enabled through `agents.defaults.experimental.runtimeIsolation.mode: "worker"` or `OPENCLAW_AGENT_RUNTIME_WORKER=1` - move attempt execution into a worker entrypoint with filesyst

### #78334 chore(ci): harden security ownership and workflow permissions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:15:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - broaden secops CODEOWNERS coverage for workflow, action, and release/security automation - keep release-manager ownership while preserving required secops review on release paths - default release and publish workflows to top-level permissions: {} Ve

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

### #90032 fix(plugins): isolate tool metadata projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:28:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a guarded plugin tool metadata projection helper that snapshots readable metadata rows. - Use the helper from both `tools.catalog` and effective tool inventory so malformed registry rows cannot crash either view. - Cover poisoned plugin metada

### #90039 fix(plugins): isolate command spec projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:28:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Isolate plugin command spec projection so malformed runtime command rows are skipped instead of crashing command listing or native command discovery. - Preserve existing provider-native command naming/filtering behavior for healthy command registr

### #90048 fix(plugins): isolate provider runtime rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:29:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Isolate provider runtime row projection so malformed provider registrations are skipped instead of crashing provider resolution. - Preserve resolved plugin scoping when reusing a wider active runtime registry. - Add a regression test covering both

### #90052 fix(plugins): isolate capability provider rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:29:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard capability provider registry rows before reading provider ids or aliases - skip malformed provider rows while preserving direct lookup for providers whose aliases are unreadable - apply the same boundary behavior to the shared capability pro

### #90059 fix(plugins): isolate tool metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:29:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - centralize plugin tool metadata map construction behind a guarded row reader - keep effective inventory and Control UI catalog metadata scoped by owning plugin plus tool name - skip malformed metadata rows and unreadable metadata fields instead of

### #90064 fix(plugins): isolate unreadable tool registrations

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:29:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR keeps plugin registration resilient when one direct tool object exposes an unreadable `name`. - Convert a throwing direct tool-name getter into a plugin diagnostic. - Skip only the malformed tool registration so later healthy registrations f

### #90068 fix(plugins): isolate bundled capability capture fields

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:30:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens bundled capability runtime capture so malformed captured provider/backend/harness `id` fields or tool `name` fields are diagnosed and skipped per row. - Preserves healthy sibling captured registrations instead of failing the whole bundled 

### #90073 fix(plugins): guard metadata snapshot owner rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:30:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin metadata snapshot freezing, owner-map construction, and registry id normalization against unreadable manifest metadata fields. - Preserve healthy owner aliases/providers/channels/CLI/setup/model-catalog rows when sibling metadata fiel

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

### #89725 fix(agents): guard code mode catalog tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:50:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard Code Mode catalog filtering against tools whose `name` getter throws before the shared Tool Search catalog compaction path runs. - Keep marked Code Mode control tools visible, drop unreadable/empty candidate names, and preserve existing lega

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

### #90090 fix(plugins): guard runtime boundary manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:04:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden runtime plugin boundary lookup so malformed manifest rows are skipped per row instead of aborting healthy runtime resolution. - Add focused regression coverage for poisoned manifest accessors in both plugin-id lookup and runtime entry-base-

