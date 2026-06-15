---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-085
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
  - "#89894"
  - "#89897"
  - "#89900"
  - "#84897"
  - "#89932"
  - "#89944"
  - "#89949"
  - "#89962"
  - "#89967"
  - "#89981"
  - "#89992"
  - "#81108"
  - "#93269"
  - "#93180"
  - "#90019"
  - "#90030"
  - "#90033"
  - "#90060"
  - "#90063"
  - "#90089"
  - "#90122"
  - "#90142"
  - "#90169"
  - "#90217"
  - "#90218"
cluster_refs:
  - "#89894"
  - "#89897"
  - "#89900"
  - "#84897"
  - "#89932"
  - "#89944"
  - "#89949"
  - "#89962"
  - "#89967"
  - "#89981"
  - "#89992"
  - "#81108"
  - "#93269"
  - "#93180"
  - "#90019"
  - "#90030"
  - "#90033"
  - "#90060"
  - "#90063"
  - "#90089"
  - "#90122"
  - "#90142"
  - "#90169"
  - "#90217"
  - "#90218"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.804Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 85

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89894 fix(docs): reorder AGENTS.md template to protect critical rules from truncation

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:46:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(docs): reorder AGENTS.md template to protect critical rules from truncation ## Summary **Problem:** The auto-generated `AGENTS.md` template puts personality/onboarding guidance (First Run, Session Startup, Memory) at the top and safety-critical rules (Red

### #89897 fix(cli): replace hardcoded "--" with FLAG_TERMINATOR constant in getCommandPathInternal

- bucket: ready_for_maintainer
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:46:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace the sole remaining hardcoded `"--"` literal in `getCommandPathInternal` with the `FLAG_TERMINATOR` constant already imported and used by every other function in `argv.ts`. Prevents silent subcommand-routing divergence if `FLAG_TERMINATOR` is

### #89900 [codex] Skip Skill Research auto-capture for Active Memory helpers

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip Skill Research auto-capture for Active Memory helper sessions by recognizing `active-memory-` session ids and `:active-memory:` session-key segments. - Share the guard between the direct auto-capture service and the agent-end side-effect wrap

### #84897 Use configured reasoning default in session_status

- bucket: ready_for_maintainer
- author: zhulijin1991
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:47:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Resolve `session_status` reasoning display from the active session override first. - Fall back to the configured per-agent `reasoningDefault`, then global `agents.defaults.reasoningDefault`, then `off`. - Add focused coverage for inherited default

### #89932 docs: document Skill Workshop tool visibility rules

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, docker, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:47:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Clarify that `skill_workshop` is already included in `tools.profile: "coding"`. - Document the correct fixes for restrictive profiles, provider-scoped profiles, exact allowlists, and sandboxed runs. - Update the tool profile/group reference so `co

### #89944 Idr msteams adaptive card tables

- bucket: ready_for_maintainer
- author: rrajp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:48:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** Microsoft Teams renders markdown tables as plain-text code blocks (```` ``` ````-wrapped ASCII tables), which are hard to read on mobile, lose column alignment in narrow viewports, and cannot be scrolled horizont

### #89949 fix(announce-delivery): backfill effectiveDirectOrigin.to from requester session entry

- bucket: ready_for_maintainer
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:48:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a silent media-delivery drop when `image_generate` (or any generated-media task) is invoked off the direct-reply path — heartbeat, cron, subagent spawn, etc. — where `agentTo` is undefined. In that case the persisted `requesterOrigin` carries

### #89962 fix(discord): fall back to text when voice delivery fails

- bucket: ready_for_maintainer
- author: danhayman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:49:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a Discord final-reply failure mode I hit locally: when an `audioAsVoice` reply failed during voice-note delivery, the reply could disappear completely instead of falling back to visible text. - Try Discord voice-note delivery first, as be

### #89967 fix #87199: [Bug]: macOS LaunchAgent generated by 2026.5.22 uses env-wrapper and missing gateway run, causing EX_CONFIG / Permission denied on external home volumes

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:49:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87199 ## Summary - Problem: macOS LaunchAgent plists with service environment entries made the generated env-wrapper script the executable that launchd spawned; on permission-constrained home/state volumes that can fail at `posix_spawn` before the gatew

### #89981 fix(diagnostics-otel): keep full model id on spans instead of collapsing to "unknown"

- bucket: ready_for_maintainer
- author: mycarrysun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: diagnostics-otel, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:50:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `assignGenAiSpanIdentityAttrs` sets the span attribute `gen_ai.request.model` via `lowCardinalityAttr(input.model)`. `lowCardinalityAttr` validates against `LOW_CARDINALITY_VALUE_RE = /^[A-Za-z0-9_.:-]{1,120}$/`, which does **not** include `/`. So p

### #89992 feat(config): write local editor schema

- bucket: ready_for_maintainer
- author: danhayman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:51:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I don’t seem to be able to touch my `openclaw.json` without breaking something, and it’s hard to discover all the available options. This PR adds a small breadcrumb for humans and our agents: when OpenClaw writes config, it also leaves behind the local schema

### #81108 fix(gateway): discover disk compaction checkpoints

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:52:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68864. - discover valid `{session}.checkpoint.<uuid>.jsonl` transcript files when `sessions.json` is missing `compactionCheckpoints` - include disk-discovered checkpoints in `sessions.list` row count/latest preview and `sessions.compaction.li

### #93269 Fix tokenjuice bash results without details

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: tokenjuice, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:52:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - compact bash/exec tool results when the tool result has command/content but missing or metadata-only details - synthesize minimal completed/failed details so the existing Tokenjuice reducer can run while preserving metadata such as truncation/full

### #93180 fix(doctor): gate legacy Codex canonicalization on a migration plan

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:09:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR replaces the closed legacy Codex/OpenAI doctor cleanup attempts with one shared migration-plan contract, and now threads that same contract through the auth repair surfaces ClawSweeper flagged. - Problem: `openclaw doctor --fix` had partiall

### #90019 fix(memory-search): default periodic sync fallback

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:24:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Default `memorySearch.sync.intervalMinutes` to `30` when neither agent overrides nor defaults configure it. - Preserve explicit `intervalMinutes` values from agent overrides or defaults, including `intervalMinutes: 0` as the opt-out. - Make t

### #90030 fix(memory-core): skip qmd zero-hit search sync

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed Fixes #90023. `memory_search` no longer runs the synchronous zero-hit forced sync path when the active memory backend is `qmd`. Non-QMD backends keep the existing zero-hit repair behavior. ## Real behavior proof Behavior or issue addressed: QMD

### #90033 fix(llm): apply model.compat.sendSessionAffinityHeaders at openai-tra…

- bucket: ready_for_maintainer
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:24:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Fix a regression where [model.compat.sendSessionAffinityHeaders](https://github.com/openclaw/openclaw/blob/main/packages/llm-core/src/types.ts#L403-L404) stopped being honored after the major inference “gate” moved from `src/llm/providers/openai-c

### #90060 fix(edit): preserve unrelated lines during fuzzy text matching

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P0, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T12:26:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89994 ## Summary When `applyEditsToNormalizedContent` needed fuzzy matching for any edit, it normalized the **entire file** via `normalizeForFuzzyMatch` and used that as the base for all splicing. This silently rewrote every line: stripping trailing whi

### #90063 fix(channels): clarify message receipt delivery evidence

- bucket: ready_for_maintainer
- author: pdurlej
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:26:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `createMessageReceiptDeliveryEvidence(...)` for turning a `MessageReceipt` into explicit operator-facing delivery evidence. - Re-export the helper through `openclaw/plugin-sdk/channel-outbound` for channel plugins/status surfaces. - Document t

### #90089 fix(sandbox): use config-resolved workspace for skill sync fallback

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:27:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When sandbox skill sync runs and no explicit `workspaceDir` is provided, `ensureSandboxWorkspaceLayout` was falling back to the hardcoded `DEFAULT_AGENT_WORKSPACE_DIR` (which only checks the `OPENCLAW_WORKSPACE_DIR` environment variable) instead of

### #90122 fix(ui): collapse non-terminal internal tool errors

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:29:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89683. In Control UI / WebChat, a failed **internal** tool call was promoted to a prominent red **"Tool error"** banner in the chat timeline even when the turn produced a clean final assistant reply, for example a hidden shell search that exi

### #90142 fix(crestodian): retry local gateway startup probe

- bucket: ready_for_maintainer
- author: yyzquwu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:29:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - retry local-loopback Crestodian Gateway startup probes once after a short delay - keep remote Gateway probes single-shot, and keep probing `/healthz` - cover retry/no-retry behavior for loopback, IPv4-mapped loopback, and remote URLs Fixes #88254

### #90169 fix(telegram): clear generic callback buttons after click

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T12:30:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Clear Telegram inline keyboards before routing generic presentation callback values through the synthetic message fallback. - Leave specialized callback handlers unchanged: plugin/opaque callbacks, managed selects, approvals, command pagination, and

### #90217 test: make doctor state integrity symlink test robust on Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:33:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip with a dynamic directory symlink capability check. If directory symlinks are supported (either on POSIX or Windows with junctions), the test runs. This enables test execution on Windows when permissions are available. ### Ve

### #90218 Fix Mission Control docs markdown links

- bucket: ready_for_maintainer
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:33:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89465. ## Summary - Rewrite root-relative OpenClaw docs markdown links to `https://docs.openclaw.ai` in Mission Control markdown surfaces. - Preserve Control UI routes such as `/cron`, `/channels`, `/nodes`, and `/skills/workshop` when rendering arbitra
