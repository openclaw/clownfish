---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-075
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
  - "#85296"
  - "#85308"
  - "#85316"
  - "#85368"
  - "#85396"
  - "#85400"
  - "#90412"
  - "#90870"
  - "#90876"
  - "#90882"
  - "#90924"
  - "#90942"
  - "#90946"
  - "#85464"
  - "#85466"
  - "#85616"
  - "#85710"
  - "#85748"
  - "#85770"
  - "#85104"
  - "#85793"
  - "#85828"
  - "#85866"
  - "#85899"
  - "#86062"
cluster_refs:
  - "#85296"
  - "#85308"
  - "#85316"
  - "#85368"
  - "#85396"
  - "#85400"
  - "#90412"
  - "#90870"
  - "#90876"
  - "#90882"
  - "#90924"
  - "#90942"
  - "#90946"
  - "#85464"
  - "#85466"
  - "#85616"
  - "#85710"
  - "#85748"
  - "#85770"
  - "#85104"
  - "#85793"
  - "#85828"
  - "#85866"
  - "#85899"
  - "#86062"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.802Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 75

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85296 fix(codex): derive terminal-idle watchdog from effective run timeout

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #85242. Derives the Codex app-server terminal-idle watchdog from the effective run timeout instead of a hardcoded 30-minute default. This addresses the early-abort half of #85242 as a focused runtime fix. The diagnostic-wording half (naming the

### #85308 fix(subagents): preserve requester wake on visible delivery failure

- bucket: ready_for_maintainer
- author: DolencLuka
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - split requester wake success from visible message-tool delivery status for subagent completions - preserve requester/parent wake when required group/channel visible delivery fails to produce message-tool evidence - persist visible delivery failure

### #85316 fix(auth): keep alias-compatible auth-profile overrides instead of clearing them

- bucket: ready_for_maintainer
- author: SkyWolfDreamer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** A claude-cli session's stored `authProfileOverride` was cleared whenever the profile's raw credential `provider` string was not literally in the accepted-providers list — for example an `anthropic`-provider credential serving a `claud

### #85368 fix(media): avoid eager provider startup for audio listing

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, extensions: senseaudio, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:16:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - list audio transcription providers from manifest metadata instead of constructing the runtime media-understanding registry - add missing bundled SenseAudio provider metadata so `capability audio providers` can report it without loading runtime cod

### #85396 perf(cli): skip config load for default root help

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:17:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - avoid importing the full config/validation stack for `openclaw --help` when there is no config file, no OpenClaw dotenv file, and no plugin-help-affecting env override - keep the existing live-config path for configured/plugin-sensitive help, inva

### #85400 test(perf): compare saved CLI startup benchmarks

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:17:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add saved-report comparison mode to `scripts/bench-cli-startup.ts` - emit duration and RSS deltas as either terminal text or JSON - keep the existing entry-vs-entry comparison path for same-run experiments - refresh shrinkwrap snapshots so `check-

### #90412 fix(sessions): cache warm transcript reads to avoid per-turn re-parse

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:20:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83943. The session resource loader re-parsed the entire transcript on every warm turn. `loadEntriesFromFile` ran `readFileSync` + line-by-line `JSON.parse` over the whole JSONL each time `SessionManager.open` was called, so the per-warm-turn

### #90870 [AI] fix(memory-wiki): index wiki pages in query-dir subfolders

- bucket: ready_for_maintainer
- author: Agent-Aurelius
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:32:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- PR TITLE: [AI] fix(memory-wiki): index wiki pages in query-dir subfolders --> ## Summary What problem does this PR solve? - `wiki_search` (and the compiled search digest + `status` counts) silently drop any wiki page stored in a **subfolder** of the fixed

### #90876 docs: add ForAI provider setup guide

- bucket: ready_for_maintainer
- author: qianwu007
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T02:32:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds documentation for configuring ForAI as an OpenAI-compatible provider. ## What is included - Provider setup instructions - Base URL configuration examples - API key setup guidance - OpenAI-compatible endpoint examples ## Why Many OpenCla

### #90882 fix: add self-knowledge docs rule to system prompt

- bucket: ready_for_maintainer
- author: SutraHsing
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:32:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Refines the generated Documentation self-knowledge rule so docs are authoritative before the model understands how OpenClaw works. - Keeps the docs-first behavior strong for memory/daily notes, sessions, tools, Gateway, config, commands, and proje

### #90924 fix(gateway): sanitize assistant reasoning before history truncation

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:34:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes WebChat/history projection leaking raw assistant reasoning scaffolding when a stored assistant message contains malformed or unclosed thinking tags and is reloaded/truncated. - Routes assistant display text t

### #90942 fix(doctor): follow symlinked launcher when locating sandbox setup scripts

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:34:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `openclaw doctor` sandbox-image repair cannot locate `scripts/sandbox-setup.sh` when openclaw is launched through a **symlinked bin** (npm/pnpm global installs, `npm/pnpm link` dev setups, relocated/symlinked insta

### #90946 fix(infra): preserve inherited gateway PID across reparent during cleanup

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:34:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Resubmit of #90802 (which was closed because the source branch carried unrelated WIP commits). This PR is now a single commit on top of `main` touching exactly 3 files. `cleanStaleGatewayProcessesSync` already excludes the caller and its ancestor ch

### #85464 fix(status): show configured cost for aws-sdk models

- bucket: ready_for_maintainer
- author: ItsOtherMauridian
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:43:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the auth-mode gate from `/status` cost estimation so configured model pricing is used for `aws-sdk` providers too - Keep cost hidden when usage exists but no pricing is configured - Add regression coverage for an Amazon Bedrock `aws-sdk` pr

### #85466 Capture image-generation provider usage metadata

- bucket: ready_for_maintainer
- author: promptclickrun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: openai, extensions: fal, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:43:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Google Gemini image `usageMetadata` in image result metadata when returned - Preserve OpenAI/GPT Image 2 `usage` in direct and OpenAI-compatible image provider paths - Preserve factual fal/Flux response metadata fields when returned, with

### #85616 fix(auto-reply): fast path text control commands

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, channel: feishu, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:47:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a strict fast path for whole-message text control commands such as `/status`, `/thinking`, `/id`, `/usage`, `/send`, and `/activation`. - Mark Feishu/Lark whole-message text slash commands as structured text command turns so the core fast path

### #85710 fix: use FLAG_TERMINATOR constant in getCommandPathInternal

- bucket: ready_for_maintainer
- author: d3Lap1ace
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:52:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83902 `getCommandPathInternal` was the only function in `argv.ts` using a hardcoded `"--"` instead of the imported `FLAG_TERMINATOR` constant. Replaced the literal with the constant for consistency — if FLAG_TERMINATOR ever changes, command-path resolu

### #85748 feat(doctor): warn early when session store size will slow doctor

- bucket: ready_for_maintainer
- author: joeyfrasier
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:54:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Symptom On installations whose per-agent session store has grown past `session.maintenance.maxEntries`, or whose sessions directory has accumulated thousands of transcript files, `openclaw doctor` spends most of its wall-clock inside `doctor:state-integrity

### #85770 fix(heartbeat): bound pending final delivery replay

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: heartbeat replay kept re-sending orphaned `pendingFinalDeliveryText` forever because the replay branch had no terminal retry or age bound. - Solution: add a heartbeat-only replay give-up gate that clears stale pending final delivery after

### #85104 feat: fast talks auto mode

- bucket: ready_for_maintainer
- author: alexph-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, scripts, commands, agents, size: XL, extensions: anthropic, extensions: codex, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, extensions: xai, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T02:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85087 ## Summary - adds `fast: auto` alongside `fast: on/off`, with the default 60s cutoff and configurable `fast_seconds` - resolves effective fast mode dynamically so follow-up model calls after the cutoff can run without priority/fast tier where the

### #85793 docs(github): make post-install restart explicit

- bucket: ready_for_maintainer
- author: nielskaspers
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:55:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: GitHub skill restart requirement after installing `gh` is easy to miss. - Solution: Make the restart guidance explicit and add the canonical restart command. - What changed: Expanded `skills/github/SKILL.md` Auth section with restart + HO

### #85828 [codex] web_search: add Perplexity model override

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, extensions: perplexity, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:56:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Perplexity web_search now accepts a per-call `model` override, but only allowlisted models from `plugins.entries.perplexity.config.webSearch.allowedModels` are honored. ## Verification - `node scripts/run-vitest.mjs src/agents/tools/web-search.test.

### #85866 [codex] Add WhatsApp phone-code login

- bucket: ready_for_maintainer
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, app: macos, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:57:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `openclaw channels login --phone-number <number>` to the generic channel auth adapter and CLI - implement WhatsApp phone-code pairing through Baileys as a headless/QR-free login fallback, including cleanup for stale partial phone-code credenti

### #85899 docs(memory): align descriptors and docs with recursive memory/**/*.md

- bucket: ready_for_maintainer
- author: leafbird
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:58:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The runtime already walks `memory/` recursively via `collectMemoryFilesFromDir` (`packages/memory-host-sdk/src/host/internal.ts`), so nested files like `memory/YYYY-MM/YYYY-MM-DD.md` are indexed and searched. But several agent-facing descriptors a

### #86062 feat(ui): timestamp unnamed dashboard sessions

- bucket: ready_for_maintainer
- author: davidmosiah
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: new Control UI dashboard sessions without a label/displayName fall back to raw session keys, making multiple new chats hard to distinguish. - Solution: add a Control UI fallback that renders unnamed dashboard sessions as their local creat
