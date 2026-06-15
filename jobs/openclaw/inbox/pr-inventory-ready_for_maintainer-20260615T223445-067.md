---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-067
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
  - "#89816"
  - "#84794"
  - "#75961"
  - "#76811"
  - "#77127"
  - "#77875"
  - "#77904"
  - "#78606"
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
  - "#93055"
  - "#79049"
  - "#90154"
  - "#77710"
  - "#90202"
  - "#77895"
cluster_refs:
  - "#89816"
  - "#84794"
  - "#75961"
  - "#76811"
  - "#77127"
  - "#77875"
  - "#77904"
  - "#78606"
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
  - "#93055"
  - "#79049"
  - "#90154"
  - "#77710"
  - "#90202"
  - "#77895"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.800Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 67

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89816 docs(gateway): add launchd supervisor loop troubleshooting

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a macOS launchd troubleshooting section for the duplicate `ai.openclaw.gateway` / `ai.openclaw.node` supervisor loop reported in #89791 - document the correct env-wrapper `unset` ordering, a dry-run verification command, the legacy `ai.opencla

### #84794 Clean up isolated cron sessions after runs

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:08:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84707. ## Summary - move isolated cron delete-after-run cleanup into a shared helper - call delete-after-run cleanup from the isolated runner `finally` block, so delivery mode `none`, runner errors, and other terminal paths also delete run sessions - ke

### #75961 Feat/discord slash command deploy 75888

- bucket: ready_for_maintainer
- author: ZakAnun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:14:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #76811 fix(plugins): supplement ClawHub artifact metadata

- bucket: ready_for_maintainer
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:14:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept current ClawHub artifact resolver responses where `artifact` is the package artifact summary shape. - When the resolver response has a legacy zip artifact but no archive verification metadata, load the version metadata and use its `sha256ha

### #77127 feat(tools/write): add append mode for agent writes

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:15:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Revives and rebases the closed append-mode work from #75549 for the canonical data-loss issue #40001. The `write` tool currently overwrites existing files. OpenClaw has an append-only wrapper for memory-flush runs, but ordinary agent turns, cron ski

### #77875 fix(ui): add document MIME mappings (xlsx/docx/pptx/etc) for chat attachments — Bug #9

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T20:18:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Sandpaw Bug #9 — Todd Bolyard's `go-yard` instance produced an Excel pricing analysis with his AI assistant ("Muffin"), but the browser only offered "Webpage Complete" as the Save As format for the `.xlsx`. The file was served with the wrong `Conten

### #77904 fix(cli): exit after model inspection output

- bucket: ready_for_maintainer
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:19:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small one-shot CLI exit helper for default-runtime inspection commands - call it after successful `models list` and `models status` output paths - keep embedded/custom runtime callers untouched so capability probes and tests can keep control

### #78606 fix: keep origin-only approval delivery out of DMs

- bucket: ready_for_maintainer
- author: jar-vision-ai
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:21:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep native approval delivery in origin-only mode from falling back to approver DMs when the origin target cannot be resolved - preserve approver-DM delivery for DM-preferred/native DM modes - update approval delivery tests, Discord docs, and chan

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
