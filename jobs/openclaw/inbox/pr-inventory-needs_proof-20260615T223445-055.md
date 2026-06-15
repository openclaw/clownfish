---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-055
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
  - "#93316"
  - "#69428"
  - "#69491"
  - "#69495"
  - "#69954"
  - "#69999"
  - "#70105"
  - "#70268"
  - "#70287"
  - "#70497"
  - "#70605"
  - "#71062"
  - "#71113"
  - "#71503"
  - "#71563"
  - "#72025"
  - "#72224"
  - "#72515"
  - "#73440"
  - "#86563"
  - "#86852"
  - "#87169"
  - "#88172"
  - "#88210"
  - "#93318"
cluster_refs:
  - "#93316"
  - "#69428"
  - "#69491"
  - "#69495"
  - "#69954"
  - "#69999"
  - "#70105"
  - "#70268"
  - "#70287"
  - "#70497"
  - "#70605"
  - "#71062"
  - "#71113"
  - "#71503"
  - "#71563"
  - "#72025"
  - "#72224"
  - "#72515"
  - "#73440"
  - "#86563"
  - "#86852"
  - "#87169"
  - "#88172"
  - "#88210"
  - "#93318"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.798Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 55

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93316 fix(whatsapp): recover quoted reply context when WhatsApp strips the payload

- bucket: needs_proof
- author: rushindrasinha
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What When WhatsApp delivers a reply where the `quotedMessage` payload is stripped (old messages, cross-device replies, forwarded content), `describeReplyContext` returned `null` and all reply context was silently lost — even though `contextInfo.stanzaId` an

### #69428 fix(msteams): paginate thread replies and keep recent context

- bucket: needs_proof
- author: hkalkoti1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: fix(msteams): paginate thread replies and keep recent context ## Summary - Problem: Teams thread context enrichment only used the first Graph replies page, so long threads could skew toward the oldest replies. - Why it matters: the bot could miss the ne

### #69491 feat(amazon-bedrock): forward default Anthropic betas through the bedrock-converse stream route

- bucket: needs_proof
- author: adhajar-amzn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds the anthropic default beta headers to the bedrock flow to allow openclaw deployed using claude models on bedrock the ability to get tool call streaming - Problem: - Why it matters: Using OC on Bedrock in time sensitive systems would lea

### #69495 feat(heartbeat): support model fallbacks via {primary,fallbacks} (#69434)

- bucket: needs_proof
- author: zote
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept `agents.*.heartbeat.model` as `{ primary, fallbacks }` in addition to the existing string form, mirroring `agents.defaults.model`. Closes #69434. - Heartbeat ticks now fail over to the next fallback on retriable provider errors (rate-limit/

### #69954 fix: fall back to canonical session transcripts during cleanup

- bucket: needs_proof
- author: Blahdude
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:42:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `sessions cleanup --fix-missing` can prune a live session when the persisted `sessionFile` path is stale even though the canonical `<sessionId>.jsonl` transcript still exists. - Why it matters: valid sessions can be incorrectly deleted du

### #69999 feat(macos): wallboard shell — fullscreen WKWebView on external display (REL-433)

- bucket: needs_proof
- author: moneypennyrasener
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:42:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** No native macOS shell exists for the wall dashboard MVP; REL-434 needs a fullscreen, chrome-free host before it can wire in the clock-only Concept A surface. - **Why it matters:** The wall dashboard requires a dedicated window that fi

### #70105 fix(ui): keep debug event log stable while viewing history

- bucket: needs_proof
- author: wfpaopao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T15:43:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prevent the Debug page event log from auto-jumping when users scroll up to inspect older entries - add sticky-at-bottom behavior for the debug event log, only auto-scrolling when the viewer is already near the bottom - keep event ordering consiste

### #70268 fix: route wake hooks to explicit sessions

- bucket: needs_proof
- author: howardclaw26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:43:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - let direct `/hooks/wake` payloads carry an optional `sessionKey` - honor `action: "wake"` mapping `sessionKey` / `agentId` routing instead of always waking `main` - extend wake-hook tests and config guards so templated wake session keys follow the

### #70287 fix(msteams): drop unsupported $search on msteams:search (AI-assisted)

- bucket: needs_proof
- author: gaurav0107
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:43:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `msteams:search` action hits `HTTP 400: Search is not supported` because Graph API blocks `$search` on `/chats/{id}/messages` and `/teams/*/channels/*/messages` when called with Application permissions (the default for bot auth). - **

### #70497 fix(agents): strip Gemini conditional schema keywords

- bucket: needs_proof
- author: yuaiccc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:44:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Re-opening of PR #69964. The previous PR was automatically closed when the fork was made private.

### #70605 BUG: Strip strikethrough text from context files before sending to model

- bucket: needs_proof
- author: DeeptimaanB
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:44:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses #47668 Struck-through text in context files was still being forwarded to the model as-is. This PR fixes that by stripping all strikethrough content in `sanitizeContextFileContentForPrompt()` before the context is embedded in the system prompt. It han

### #71062 fix(/v1/responses): drop the extra phantom assistant turn on client-tool calls

- bucket: needs_proof
- author: PopFlamingo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - **Problem:** Two issues affected `/v1/responses` client-tool calls (tools the API caller passes in `tools: [...]` for the agent to delegate back to them): - **Bug:** every client-tool call shipped an ex

### #71113 CI: add AGENTS.md size guard to check-additional

- bucket: needs_proof
- author: Yellowfish23
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `scripts/check-agents-md.ts` — caps every tracked `AGENTS.md` at 150 lines to stop any single guide from regrowing into a monolith. - Wires into the sharded `check-additional` layout via `BOUNDARY_CHECKS` in `scripts/run-additional-boundary-c

### #71503 fix(gateway): prefer physical LAN addresses before bridge interfaces

- bucket: needs_proof
- author: deepkilo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, extensions: device-pair, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71493. `gateway.bind=lan` address selection now prefers physical/default-looking LAN interfaces before Docker/bridge/container-style interfaces when advertising automatic LAN URLs. The change intentionally does **not** hard-ban Docker/bridge/

### #71563 fix(telegram): route /new, /reset to control lane to bypass queue

- bucket: needs_proof
- author: kiranvk-2011
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Session lifecycle commands (`/new`, `/reset`) were getting queued behind active agent runs in the Telegram sequential key system. When a user sent one of these commands while an agent was running, the command would be queued and never execute until

### #72025 fix(signal): enable inbound status reactions

- bucket: needs_proof
- author: Hua688
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: Signal has reaction send helpers, but inbound runs never wired `messages.statusReactions.enabled` into the shared status reaction lifecycle. - Why it matters: Signal users get no queued/thinkin

### #72224 fix gateway restart outside systemd

- bucket: needs_proof
- author: myagizmaktav
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:46:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #72223 ## Summary - detect Linux background gateway listeners via native `/proc` inspection before falling back to `lsof` and `ss` - treat bare `openclaw-gateway` process titles as verified gateway processes for unmanaged restart signaling - reuse resol

### #72515 fix(mcp): reject mixed command+url transport config (#72111)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:47:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #72111. ## Problem When an MCP server config carries **both** a non-empty `command` and a non-empty `url` (e.g. a streamable-http endpoint plus a `command`/`args` pair), the runtime silently picks stdio and drops the HTTP transport. The user sees: ``` M

### #73440 fix(gateway/command-auth): memoize ownerAllowFrom list per raw array (#50289)

- bucket: needs_proof
- author: eric-zachary077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:48:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What [`resolveOwnerAllowFromList`](src/auto-reply/command-auth.ts) walks `commands.ownerAllowFrom` linearly to: 1. Filter channel-scoped entries of the form `provider:value` (drop ones whose `provider` does not match the active `providerId`, strip the prefi

### #86563 fix(gateway): skip transcript resolution for missing files

- bucket: needs_proof
- author: wesleysimplicio
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:49:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: What does this PR do? - Avoids resolving a session key from a transcript path when the transcript file no longer exists. - Adds a regression test that verifies a missing transcript path does not reach the broadcast path. Root cause - The transcript broadcast p

### #86852 fix(ui): render direct tool-result image blocks inline in chat (#50779)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:50:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Tool results emitted by `imageResult()` / `imageResultFromFile()` in `src/agents/tools/common.ts` produce content blocks in the bare `{type: "image", data, mimeType}` shape — the same shape `normalizeReadImageResult()` in `src/agents/pi-tools.read.t

### #87169 Support separate Teams Graph tenant

- bucket: needs_proof
- author: DanBotero
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:50:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add optional `channels.msteams.graphTenantId` to the config schema and public Teams config type - use `graphTenantId` for Microsoft Graph token acquisition while leaving bot credentials on `tenantId` - document the split and regenerate bundled cha

### #88172 fix(mcp): kill orphaned stdio children on session teardown + auto-reconnect dead transports

- bucket: needs_proof
- author: promptclickrun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T15:51:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Two MCP stability issues causing cron failures and mid-turn `Not connected` errors: 1. **Orphaned MCP child processes:** When isolated cron sessions end, the CLI runner only closes the HTTP loopback server but leaves `SessionMcpRuntime` stdio childr

### #88210 Protect session store writes with a file lock

- bucket: needs_proof
- author: IYENTeam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:51:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap session store writes in the shared file-lock helper so concurrent OpenClaw processes serialize writes to the same sessions store - create the session-store parent directory before acquiring the advisory lock - add coverage that the session wr

### #93318 fix(imessage): honor configured send transport for attachment sends

- bucket: needs_proof
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: imessage, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:52:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary PR #91783 introduced `channels.imessage.sendTransport` (`auto` / `bridge` / `applescript`) and threaded it into the `imsg rpc send` text path. The symmetric `send-attachment` media path was missed: it still passed a hardcoded `--transport auto`. As
