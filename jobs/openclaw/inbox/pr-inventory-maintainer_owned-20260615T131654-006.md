---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-006
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
  - "#89963"
  - "#89665"
  - "#90437"
  - "#14432"
  - "#85481"
  - "#16544"
  - "#76115"
  - "#18778"
  - "#76245"
  - "#76895"
  - "#76927"
  - "#89312"
  - "#89598"
  - "#89968"
  - "#89969"
  - "#72610"
  - "#89985"
  - "#89988"
  - "#89993"
  - "#90002"
  - "#90003"
  - "#90005"
  - "#90016"
  - "#89933"
  - "#74176"
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
cluster_refs:
  - "#89963"
  - "#89665"
  - "#90437"
  - "#14432"
  - "#85481"
  - "#16544"
  - "#76115"
  - "#18778"
  - "#76245"
  - "#76895"
  - "#76927"
  - "#89312"
  - "#89598"
  - "#89968"
  - "#89969"
  - "#72610"
  - "#89985"
  - "#89988"
  - "#89993"
  - "#90002"
  - "#90003"
  - "#90005"
  - "#90016"
  - "#89933"
  - "#74176"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.472Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 6

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89963 fix(plugins): isolate bundled channel metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate malformed bundled channel manifest rows while building bundled channel runtime metadata - keep later healthy bundled channel metadata discoverable when another row throws during metadata conversion - add a regression test for an unreadable

### #89665 fix(plugin-sdk): guard provider tool schema walks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:25:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider tool-schema compatibility walkers against unreadable plugin-owned schema objects and arrays. - Preserve schemas during OpenAI/DeepSeek normalization when containers cannot be read instead of throwing or silently widening unions. - R

### #90437 refactor: add SQLite transcript identity adapter

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:26:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds the SQLite-side transcript runtime identity/state adapter for the canonical transcript identity contract. This keeps the storage-neutral transcript runtime API shape while adding temp-DB backed SQLite coverage for the future storage flip. ## Why P

### #14432 System prompt: add guidance for spawning background sub-agents

- bucket: maintainer_owned
- author: vignesh07
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:19:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds concrete system-prompt guidance for when to use sessions_spawn (background sub-agents), plus a small unit test covering the new section. <!-- greptile_comment --> <h2>Greptile Overview</h2> <h3>Greptile Summary</h3> This PR updates the generated agent sys

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

### #76115 fix(diagnostics): experiment with stuck session aborts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: L, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:32:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds experimental `diagnostics.stuckSessionAbortMs` for a second-stage stalled/stuck recovery threshold. - Keeps warn-threshold recovery observe-only for active work, but lets the longer experimental threshold abort active embedded reply work or r

### #18778 Discord: Discord canvas!

- bucket: maintainer_owned
- author: thewilloftheshadow
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, gateway, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add support for canvas within Discord

### #76245 [codex] Fallback when Windows gateway task exits early

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Windows scheduled-task fallback for the failure shape from Brad's workshop log: `schtasks /Run` is accepted, but the task quickly reports `Last Run Result=0` / stopped and no gateway listener appears. Previously the fallback only handled the 

### #76895 perf(core): trim channel RTT hot paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: mattermost, channel: slack, channel: telegram, channel: voice-call, scripts, agents, maintainer, extensions: device-pair, size: XL, extensions: qa-lab, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:32:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Trims Telegram, Slack, Discord, Mattermost, agent-turn, plugin control-plane, channel snapshot, catalog, media, and model-catalog hot paths. - Adds Convex credential-source support to the Telegram RTT package harness. - Records the optimization inven

### #76927 [codex] Queue subagent completion announces

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: M, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:32:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route subagent completion announces through the requester session steer/announce queue before direct fallback. - Force completion handoffs onto an internal queue independent of channel queue mode, while preserving bound route delivery. - Keep dire

### #89312 fix(agents): guard client tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:39:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - snapshot client tool descriptors through guarded reads before conflict checks, Tool Search allowlist planning, bundle MCP/LSP reservation, and client tool-definition conversion - skip unreadable required client `function`/`name` descriptors while 

### #89598 fix(gateway): ignore unreadable MCP union schema variants

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:40:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard MCP loopback union schema flattening against unreadable nested variant fields - ignore unreadable union variants while preserving usable sibling schema variants for `tools/list` - add a regression for a throwing `properties` getter under an 

### #89968 fix(config): isolate channel metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:44:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable plugin manifest rows while collecting plugin/channel schema metadata - preserve existing origin-rank dedupe and channel config merge behavior for healthy rows - add focused regressions for poisoned plugin-level and channel-level

### #89969 fix(plugins): isolate setup manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:44:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable setup manifest rows while collecting setup providers, CLI backends, migrations, and auto-enable probes - keep setup owner lookup from crashing when an unrelated plugin row has a bad setup descriptor - add focused regressions for

### #72610 feat(migrations): add Hermes import path

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review, rating: 🧂 unranked krab, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-14T18:45:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a generic migration framework and fresh-setup guard - add the built-in Hermes importer with memory/config/plugin/MCP/skill mappings - add `openclaw migrate` and onboarding import flags - document migration imports and i18n labels ## Tests - `O

### #89985 fix(update): preserve local package overrides

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, cli, scripts, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T18:45:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves local package overrides during package update flows, including standalone added `dist` files, and reports the recovery bundle when overrides are not reapplied. - Keeps content-inventory validation strict for new tarballs while allowing a

### #89988 fix(gateway): isolate control UI descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:45:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `plugins.uiDescriptors` projection so one unreadable plugin-owned Control UI descriptor row cannot abort the whole Gateway response. - Preserve healthy Control UI descriptor rows in the same response. - Add a contract regression for a poison

### #89993 fix(plugins): isolate inspect gateway descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:45:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned gateway method descriptors used by plugin inspect/status reporting - share the guarded descriptor projection between shape classification and inspect output - add a regression for unreadable descriptor rows and descriptor owne

### #90002 fix(plugins): isolate CLI metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:46:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned CLI metadata rows during `api.registerCli()` normalization - preserve healthy descriptor-backed CLI commands when sibling descriptor rows or fields throw - reject unreadable CLI parent paths instead of registering commands und

### #90003 feat(policy): cover exec approvals artifact

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 🛠️ actively grinding, extensions: policy
- gitcrawl snapshot updated: 2026-06-14T18:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add redacted policy evidence for the named runtime `exec-approvals.json` artifact - add `execApprovals` policy rules for required file presence, default security, scoped per-agent effective security, `autoAllowSkills` posture, and allowlist patter

### #90005 fix(plugins): isolate captured CLI metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:46:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate captured plugin CLI metadata rows from poisoned descriptor arrays and fields - keep healthy captured CLI descriptors available for bundled capability planning - reject unreadable captured CLI parent paths instead of shortening nested comma

### #90016 fix(plugins): isolate cached tool descriptor names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:46:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate cached plugin tool descriptor name reads from poisoned accessors - preserve healthy cached plugin tools when sibling cached descriptors are malformed - add focused regression coverage for cached descriptor recovery without runtime reload #

### #89933 fix(plugins): guard synthetic auth metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:47:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin metadata rows when resolving synthetic auth provider refs. - Apply the same guard to `contracts.externalAuthProviders` resolution for persisted manifest metadata and the active runtime registry. - Add regression coverage for

### #74176 feat(telegram): support mini app URL buttons

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: obviyus
- labels: docs, channel: telegram, maintainer, size: M, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T18:59:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse shared presentation URL buttons in Telegram inline keyboards. - Render direct-chat HTTPS presentation buttons as Telegram Mini App web_app buttons. - Document the Telegram HTTPS, private-chat, and initData constraints. ## Validation - pnpm t

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

