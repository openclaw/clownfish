---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-104
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
  - "#85112"
  - "#85155"
  - "#85166"
  - "#93006"
  - "#85238"
  - "#85292"
  - "#85296"
  - "#85308"
  - "#85316"
  - "#85368"
  - "#85381"
  - "#85394"
  - "#85396"
  - "#85400"
  - "#90412"
  - "#90870"
  - "#90876"
  - "#90882"
  - "#90893"
  - "#90924"
  - "#90933"
  - "#90942"
  - "#90946"
  - "#85464"
  - "#85466"
cluster_refs:
  - "#85112"
  - "#85155"
  - "#85166"
  - "#93006"
  - "#85238"
  - "#85292"
  - "#85296"
  - "#85308"
  - "#85316"
  - "#85368"
  - "#85381"
  - "#85394"
  - "#85396"
  - "#85400"
  - "#90412"
  - "#90870"
  - "#90876"
  - "#90882"
  - "#90893"
  - "#90924"
  - "#90933"
  - "#90942"
  - "#90946"
  - "#85464"
  - "#85466"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.214Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 104

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85112 feat(matrix): opt-in mention bypass for in-thread replies (threadBindings.bypassMentionInBoundThreads)

- bucket: ready_for_maintainer
- author: paulmeier
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:11:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85111. ## Summary Adds an opt-in `channels.matrix.threadBindings.bypassMentionInBoundThreads` (boolean, default false). When true, the matrix inbound handler skips the room-level `requireMention` gate for events that are replying inside a thread the bot

### #85155 fix(agents): avoid inviting provider swaps in model alias guidance

- bucket: ready_for_maintainer
- author: extrasmall0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:12:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop telling the model to prefer aliases when a full provider/model override is already present - clarify that aliases are only shortcuts for unqualified model requests - update the prompt test to lock in the exact-ref guidance ## Real behavior pr

### #85166 fix(sandbox): reduce base64 env warning false positives

- bucket: ready_for_maintainer
- author: ThiagoCAltoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:12:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tighten sandbox env value warnings so long base64-like values only warn when the env var name also looks credential-related. - Reuse the sanitizer credential-name contract for that warning gate, so explicit sandbox/skill env paths still warn for n

### #93006 fix(tui): keep stderr visible when local shell stdout fills the output cap

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:13:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The TUI local shell (`!`-prefixed, operator-only, behind an explicit in-session approval) caps command output at `maxOutputChars`. While streaming it keeps the **tail** (`appendWithCap` → `slice(-maxChars)`), but on `close` it built `(stdout + "\n" 

### #85238 fix: include pnpm 11 bins in gateway PATH

- bucket: ready_for_maintainer
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:14:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include pnpm 11's `PNPM_HOME/bin` layout in managed gateway service PATH generation - keep pnpm 10-style `PNPM_HOME` paths for compatibility - add npm-global and package-manager env bin fallbacks to runtime PATH bootstrap while keeping user-writab

### #85292 fix(config): scope dry-run bundled channel validation

- bucket: ready_for_maintainer
- author: zarapharr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow empty/no-op `config patch --dry-run` payloads without writing config. - Preserve dry-run touched paths and only force bundled-channel validation when a touched path is under `channels.<id>`. - Forward `touchedPaths` / `validateBundledChannel

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
- author association: FIRST_TIME_CONTRIBUTOR
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

### #85381 feat(cli-output): emit thinking_delta events; handle redacted single-block shape

- bucket: ready_for_maintainer
- author: adele-with-a-b
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:17:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Mirrors the `onAssistantDelta` surface for thinking events on the claude-cli stream-json parser in `src/agents/cli-output.ts`. Adds an `onThinkingDelta` callback to `createCliJsonlStreamingParser` and a public `CliThinkingDelta` type that two downst

### #85394 refactor(cron-tool): decompose into per-action tools (WOR-317)

- bucket: ready_for_maintainer
- author: joeyfrasier
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:17:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The single `cron` agent tool exposed a flat union of all action params as 14 keys on one OpenAI-functions schema. Frontier models (`gpt-5.5` and others) decoded that into "every key required," emitted the whole shape with default valu

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

### #90893 fix(models): mask paste-token input in CLI auth prompt

- bucket: ready_for_maintainer
- author: anurag-bg-neu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:32:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? `openclaw models auth paste-token --provider <p>` echoes the pasted bearer/setup token in cleartext at the TTY prompt, exposing the secret to anyone who can see the screen. Why does this matter now? This is the third

### #90924 fix(gateway): sanitize assistant reasoning before history truncation

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:34:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes WebChat/history projection leaking raw assistant reasoning scaffolding when a stored assistant message contains malformed or unclosed thinking tags and is reloaded/truncated. - Routes assistant display text t

### #90933 [AI-assisted] fix(cli): surface session lane busy exits

- bucket: ready_for_maintainer
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:34:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A same-session `openclaw agent` CLI dispatch can wait behind an active session lane, exit with code 1, and print no actionable error even though the Gateway already logs the lane-wait facts. - Solution: Propagate lane-wait facts from the 

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

