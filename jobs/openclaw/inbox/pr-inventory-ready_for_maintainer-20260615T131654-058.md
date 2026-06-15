---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-058
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
  - "#78668"
  - "#78715"
  - "#78741"
  - "#78747"
  - "#78765"
  - "#78839"
  - "#78852"
  - "#42637"
  - "#78884"
  - "#78931"
  - "#78964"
  - "#78966"
  - "#59859"
  - "#93055"
  - "#79049"
  - "#90154"
  - "#90169"
  - "#90184"
  - "#77710"
  - "#90202"
  - "#77895"
  - "#90218"
  - "#89997"
  - "#77921"
  - "#78574"
  - "#79336"
  - "#79398"
  - "#79401"
  - "#79547"
  - "#79572"
  - "#79593"
  - "#79619"
  - "#79626"
  - "#79635"
  - "#79655"
  - "#79724"
  - "#79762"
  - "#79811"
  - "#79852"
  - "#79855"
cluster_refs:
  - "#78668"
  - "#78715"
  - "#78741"
  - "#78747"
  - "#78765"
  - "#78839"
  - "#78852"
  - "#42637"
  - "#78884"
  - "#78931"
  - "#78964"
  - "#78966"
  - "#59859"
  - "#93055"
  - "#79049"
  - "#90154"
  - "#90169"
  - "#90184"
  - "#77710"
  - "#90202"
  - "#77895"
  - "#90218"
  - "#89997"
  - "#77921"
  - "#78574"
  - "#79336"
  - "#79398"
  - "#79401"
  - "#79547"
  - "#79572"
  - "#79593"
  - "#79619"
  - "#79626"
  - "#79635"
  - "#79655"
  - "#79724"
  - "#79762"
  - "#79811"
  - "#79852"
  - "#79855"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.485Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 58

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #78668 feat(discord): add event-edit and event-delete actions

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, cli, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T20:23:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: agents could create Discord scheduled events through the message tool but had no way to update or cancel them, so descriptions, locations, times, and cover art went stale until a human edited them in Discord - Why it matters: rounds out t

### #78715 Fix minor grammar issue in plugin documentation (capabilities plural)

- bucket: ready_for_maintainer
- author: mehrazmorshed
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:24:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Documentation contained a minor grammatical inconsistency where singular "optional capability" was paired with plural "plugins" in the same sentence. - Why it matters: Consistency improves readability and professionalism of the documentat

### #78741 fix(ui): reset routed sessions to main on restore

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:25:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI could restore a persisted historical routed session key, such as direct, group, dm, per-peer, or threaded routed session forms, after a reload. - Why it matters: reopening Control UI could land the user in a stale routed sessio

### #78747 fix(cache): emit `tools` before `input` in OpenAI Responses request body for prefix-cache stability

- bucket: ready_for_maintainer
- author: ashvinnagarajan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:25:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `buildOpenAIResponsesParams` (`src/agents/openai-transport-stream.ts:979`) inserts the literal with `input: messages` first, then assigns `params.tools = convertResponsesTools(...)` later via a conditional block. JS property insertion

### #78765 fix(tui): avoid inserting spaces into long CJK text

- bucket: ready_for_maintainer
- author: hpt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T20:26:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Avoid inserting display spaces into long CJK text in TUI-rendered assistant output. `sanitizeRenderableText()` currently protects narrow terminals by splitting long unbroken tokens into 32-character chunks joined with spaces. That works for long Lat

### #78839 [codex] Add Teams member-info action gate

- bucket: ready_for_maintainer
- author: IKANISA1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:28:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds explicit config support for `channels.msteams.actions.memberInfo` and wires the Microsoft Teams `member-info` message action through the existing action-gate pattern. When disabled, the action is hidden from message-tool discovery and direct ca

### #78852 perf(agents): reuse media tool availability during tool prep

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:29:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the optional media tool factory plan for image, video, and music generation tool registration. - Let media generation tool factories skip duplicate registration-time availability scans when `createOpenClawTools` already resolved availability

### #42637 fix(skills): list omitted skill names when prompt is truncated

- bucket: ready_for_maintainer
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:30:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When many skills are installed (e.g. 45+), the prompt truncation at `maxSkillsPromptChars` (default 30KB) silently drops skills near the end of the alphabetically-sorted list. The agent sees only a generic `⚠️ Skills truncated: included N of M` mess

### #78884 docs: document local avatar file size limit

- bucket: ready_for_maintainer
- author: wangjieweb3-design
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:30:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document the 2 MB limit for local workspace-relative agent avatar files in the CLI agent identity docs - add the same scope note to the gateway agent config reference - clarify that HTTP(S) URLs and `data:` URI avatars are not checked with the loc

### #78931 test: verify Gemini replay drops runtime-context and errored turns

- bucket: ready_for_maintainer
- author: GONZO304
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:32:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Bug Description Gemini replay payload construction could include stale/non-user-visible message artifacts in the replay history shape under some prior-turn conditions. ## Root Cause Replay history needs to exclude: - `openclaw.runtime-context` custom entrie

### #78964 fix(feishu): preserve topic reply anchors

- bucket: ready_for_maintainer
- author: zqchris
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:34:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Feishu/Lark topic reply anchors across normal assistant replies, message-tool sends, media/cards, typing reactions, emoji reactions, and subagent completion notices. - Keep topic-pane direct-message events threaded when Feishu/Lark delive

### #78966 docs(memory): align memorySearch.cache.enabled default with runtime

- bucket: ready_for_maintainer
- author: coketaste
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:34:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `docs/reference/memory-config.md` documented `agents.defaults.memorySearch.cache.enabled` as defaulting to `false`, but the runtime, the type doc-comment, and the schema help text all use `true`. This PR updates the docs table so the documented defa

### #59859 feat: cute GTK-native Linux App (#75)

- bucket: ready_for_maintainer
- author: tiagonix
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T20:35:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: - OpenClaw did not have an in-repo native Linux companion app, so Linux users were missing a first-class desktop surface for gateway lifecycle, diagnostics, tray/status behavior, onboarding, an

### #93055 fix(ui): restore provider usage pill in desktop chat composer [AI]

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, clawsweeper:automerge, clawsweeper:human-review, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 🚀 automerge armed, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T20:36:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After 2026.6.6 the provider usage/quota pill (5h + weekly limits) disappeared from the desktop Control UI chat. The composer refactors (`feat: calm composer controls #88772`, `feat(webui): add session workspace rail #92856`) moved the desktop chat c

### #79049 fix(ui): localize chat metadata labels

- bucket: ready_for_maintainer
- author: praneethhere
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:36:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI chat metadata labels were rendered with hard-coded English strings in the chat/tool-card surface. - Why it matters: Non-English users could still see English technical UI labels even when the Control UI locale was changed. - Wh

### #90154 fix(gateway): restrict backend self-pairing shared auth

- bucket: ready_for_maintainer
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:45:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #72418 by removing shared gateway `token` / `password` auth from the direct-local backend self-pairing exception. - Keeps the existing dedicated backend paths intact: `device-token` and explicit `auth.mode = "none"` local backend connects ca

### #90169 fix(telegram): clear generic callback buttons after click

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T20:45:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Clear Telegram inline keyboards before routing generic presentation callback values through the synthetic message fallback. - Leave specialized callback handlers unchanged: plugin/opaque callbacks, managed selects, approvals, command pagination, and 

### #90184 fix(ui): rename chat sessions from the picker

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 🔁 re-review loop, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T20:46:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add inline session-title rename controls to the chat session picker/sidebar using the existing `sessions.patch` label contract - preserve picker state around rename by blocking conflicting actions during save, keeping close behavior predictable, a

### #77710 docs: clarify `/reset` is not an alias for `/new`

- bucket: ready_for_maintainer
- author: wangjieweb3-design
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:46:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #76592. This updates the slash command docs and native command summaries so `/new` and `/reset` are no longer presented as interchangeable aliases. - `/new [model]` starts a new session. - `/reset` resets the current session in place. The old wording cal

### #90202 feat(memory-wiki): add managed local source imports

- bucket: ready_for_maintainer
- author: Sunjae-k
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:46:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a managed `localImports` config path for memory-wiki. - Adds `openclaw wiki local-import import` to sync explicitly configured local text files/directories into source pages. - Integrates local imports with imported-source sync state so enabl

### #77895 fix(memory-core): clean stale short-term temp files

- bucket: ready_for_maintainer
- author: Alex-Alaniz
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:46:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - clean stale orphaned `short-term-recall.json.*.tmp` and `phase-signals.json.*.tmp` files during short-term promotion repair - preserve fresh temp files and unrelated temp-looking files so active or manual files are not swept - surface `removedTemp

### #90218 Fix Mission Control docs markdown links

- bucket: ready_for_maintainer
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:47:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89465. ## Summary - Rewrite root-relative OpenClaw docs markdown links to `https://docs.openclaw.ai` in Mission Control markdown surfaces. - Preserve Control UI routes such as `/cron`, `/channels`, `/nodes`, and `/skills/workshop` when rendering arbitra

### #89997 fix(cli): suppress mcp serve startup stdout

- bucket: ready_for_maintainer
- author: kenners22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T20:49:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat `openclaw mcp serve` as a stdio protocol mode for startup policy purposes. - Suppress doctor/config diagnostic notes from stdout for MCP serve so stdout remains JSON-RPC only. - Add a startup-policy regression test and changelog entry. ## Te

### #77921 feat(inworld): default to inworld-tts-2 (Realtime TTS-2)

- bucket: ready_for_maintainer
- author: cshape
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, extensions: tts-local-cli, extensions: inworld, plugin: azure-speech, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T20:53:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `inworld-tts-2` to the bundled Inworld TTS provider as the new default, while keeping `inworld-tts-1.5-max` and `inworld-tts-1.5-mini` as valid options. Updates types, the plugin manifest, and docs accordingly. ## Changes - `extensions/inworld/

### #78574 feat(github-copilot): add native web search for Copilot GPT models

- bucket: ready_for_maintainer
- author: Marvae
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, extensions: github-copilot, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:53:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Copilot GPT models support native web search via OpenAI Responses API but OpenClaw doesn't inject the `web_search` tool for the `github-copilot` provider - **Why it matters:** Users need external search API config (SearXNG/Brave) even

### #79336 fix(voice-call): auto-respond on the webhook event transcript path

- bucket: ready_for_maintainer
- author: dvy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:58:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #79118. ## Summary - Wire `processParsedEvents` (the generic webhook event path used by providers without OpenClaw streaming integration — Telnyx and Plivo today) to fire `handleInboundResponse` after a final `call.speech` event for inbound or conversat

### #79398 Add context compaction quality probes

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:59:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a deterministic context-compaction quality probe harness - add three representative synthetic long-session scenarios - expose `npm run test:context-compaction-probes` for rollover/compaction canaries ## Real behavior proof - Behavior or issue 

### #79401 feat(reply): emit structured runtime incidents

- bucket: ready_for_maintainer
- author: TnzGit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:59:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a typed `incident` agent event for runtime fallback failures - classify reply-runner fallbacks into command lane timeouts, response-generation timeouts, session-history desync, or generic runner failures - keep the existing user-visible fallba

### #79547 fix(memory): skip runtime cron promotion

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip the internal runtime-only event prompt and its immediate assistant response when exporting session JSONL for memory ingestion - persist an internal `__openclaw.runtimeOnlyEvent` marker on runtime-only user prompts so user-typed marker text ca

### #79572 fix(google): use parameters not parametersJsonSchema in realtime FunctionDeclarations

- bucket: ready_for_maintainer
- author: happydog-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:07:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Switch the Gemini Live realtime voice provider's `FunctionDeclaration` from `parametersJsonSchema` to `parameters` so the preview audio models actually honor tool parameter schemas. ## The bug The Live API preview audio models (`gemini-2.5-flash-nat

### #79593 fix(message-format): honor caller --limit for read, pins and search

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:08:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `renderMessageList` in `src/commands/message-format.ts` truncated CLI output with a hardcoded `messages.slice(0, 25)`. The CLI exposed `--limit` for `message read`, `message pins`, and Discord `message search`, and providers honored the u

### #79619 docs(notion): make allowlist examples direct

- bucket: ready_for_maintainer
- author: qkal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:09:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the bundled Notion skill documented shell-local `NOTION_KEY=$(cat ...)` setup and multi-line `curl` examples that are hostile to strict exec allowlists. - Why it matters: users running `security=allowlist` with `ask=off` can follow the bu

### #79626 [codex] Fix image describe MIME detection

- bucket: ready_for_maintainer
- author: justinbao19
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:10:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw infer image describe` so local image files pass their detected MIME type into the media-understanding runtime. Previously the CLI resolved the file path but did not pass a MIME type to `describeImageFile` / `describeImageFileWithMode

### #79635 fix(sessions): drop dead-end orphan entries when retry forks parentId chain (#48810)

- bucket: ready_for_maintainer
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:10:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Reported by @taohaowei in #48810: when compaction retries against a session JSONL file, the original (failed) compaction event and the successful retry both get appended under the same `parentId`. One side becomes a dead-end (no descendants), the o

### #79655 Prune completed Codex Responses tool replay

- bucket: ready_for_maintainer
- author: fanfanliu964-web
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:11:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prune completed OpenAI Codex native Responses tool-call replay after a later assistant/user turn has consumed the tool output - keep active tail function call outputs so tool continuation still works - add synthetic regression coverage for complet

### #79724 fix(agent): detect CJK terminal continuation promises

- bucket: ready_for_maintainer
- author: boyzcl
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:12:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes terminal-turn holes in strict-agentic recovery for Chinese/CJK conversations. Today the planning-only guard recognizes English future-action promises such as `I'll ...`, `next I'll ...`, and `let me ...`, but it does not recognize comm

### #79762 feat: pass trusted sender metadata via systemInputProvenance for operator clients

- bucket: ready_for_maintainer
- author: hugin-vault
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:13:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When operator-authenticated gateway clients send chat messages via `chat.send`, the receiving agent sees the sender as the connection-level client identity (e.g. "gateway-client") even when richer per-message provenance is available. This PR allows 

### #79811 fix(cron): avoid delivered status for empty outbound receipts

- bucket: ready_for_maintainer
- author: indulgeback
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:13:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79753. Cron announce/direct delivery could still treat an outbound adapter result with no platform delivery identity as a successful send on text/media paths. That lets a run show `delivered: true` even though the channel adapter produced no 

### #79852 fix(memory-core): apply temporal decay to session-reset archive paths

- bucket: ready_for_maintainer
- author: buyitsydney
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:15:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `memorySearch.query.hybrid.temporalDecay` is silently a no-op for session-reset archives in real deployments. Enabling it ends up *demoting* the curated `memory/YYYY-MM-DD.md` notes while leaving the much larger pool of stale session transcripts at 

### #79855 plugin SDK: add inbound_activity hook + discord emit points

- bucket: ready_for_maintainer
- author: AriAriXO
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:15:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new plugin hook `inbound_activity` that lets a sibling plugin participate in per-channel inbound debouncing without owning the channel inbound flow. Currently `@openclaw/discord` owns its `createChannelInboundDebouncer` privately; `inbound_cl

