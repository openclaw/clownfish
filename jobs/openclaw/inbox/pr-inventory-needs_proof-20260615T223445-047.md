---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-047
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
  - "#75270"
  - "#76332"
  - "#84666"
  - "#85696"
  - "#93184"
  - "#88738"
  - "#88961"
  - "#88962"
  - "#89014"
  - "#89083"
  - "#93256"
  - "#89099"
  - "#89117"
  - "#89190"
  - "#89209"
  - "#89211"
  - "#89214"
  - "#89236"
  - "#93264"
  - "#89074"
  - "#93226"
  - "#92700"
  - "#91943"
  - "#54585"
  - "#55927"
cluster_refs:
  - "#75270"
  - "#76332"
  - "#84666"
  - "#85696"
  - "#93184"
  - "#88738"
  - "#88961"
  - "#88962"
  - "#89014"
  - "#89083"
  - "#93256"
  - "#89099"
  - "#89117"
  - "#89190"
  - "#89209"
  - "#89211"
  - "#89214"
  - "#89236"
  - "#93264"
  - "#89074"
  - "#93226"
  - "#92700"
  - "#91943"
  - "#54585"
  - "#55927"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.796Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 47

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #75270 fix(agent): prevent sticky model fallback

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - roll back temporary auto fallback model overrides after successful fallback attempts - keep session routing pointed at the selected model while still recording usage/cost for the actual fallback model used - update runner/session accounting covera

### #76332 fix: harden subagent completion announce cleanup races

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a set of subagent completion lifecycle races that can leave completed child runs stuck behind cleanup/announce sequencing or overwrite a terminal error with a later success signal. The patch makes three related changes: - Do not block completi

### #84666 fix(diagnostic): avoid aborting queued embedded work

- bucket: needs_proof
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Diagnostic stuck-session recovery could actively abort an embedded run even when the session was still processing and had queued work remaining behind the active item. - Solution: Gate the acti

### #85696 fix(agent): use static catalog for embedded model fast path

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:50:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #84783. - Lets the embedded agent runner use bundled static catalog rows during its skip-agent-discovery model-resolution fast path. - Resolves static catalog rows before provider dynamic hooks on that fast path, avoiding Moonshot runtime/p

### #93184 fix(ui): preserve live tool stream order

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:50:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes live WebChat ordering when a tool event timestamp is older than the assistant stream segment that introduced that tool call. - Threads optional `toolCallId` metadata through chat stream segment types so the renderer can keep the matching too

### #88738 docs: document wacli message verification

- bucket: needs_proof
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the exact `wacli messages show --chat <jid> --id <message_id>` verification syntax to the bundled wacli skill. - Clarify that `messages show` does not accept the message ID as a positional argument. - Recommend verifying stored messages when e

### #88961 fix(agents): suppress enabled plugin tool allowlist warnings

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Treat enabled plugin ids as known when analyzing tool allowlists before plugin tools are registered. - Suppress the misleading unknown-entry warning for enabled plugin-only allowlist entries while preserving warning

### #88962 fix: complete preserveKeys implementation for session maintenance

- bucket: needs_proof
- author: AllynSheep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem PR #81303 was closed but the preserveKeys implementation was incomplete. The ClawSweeper review identified that while the preserveKeys field was added to types and Zod schema, it was not being used by the actual maintenance callers. ## Root Cause Th

### #89014 fix(feishu): preserve first streaming final card

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:53:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Feishu streaming-card ordering bug from #89009 where a later final-shaped tool diagnostic can overwrite the first real final answer before the card is closed. - Tracks when a streaming final has claimed the active card, ignores later blo

### #89083 fix(feishu): prevent later final-shaped diagnostics from overwriting streaming card answer

- bucket: needs_proof
- author: luoxiao6645
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:56:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In Feishu with `renderMode=auto` and streaming enabled, when two `final`-shaped payloads arrive before `onIdle` closes the streaming card, the second one (e.g. a tool-error diagnostic) overwrites `streamText`. The visible card ends up showing the di

### #93256 fix(plugins): start explicitly enabled external channel plugins at gateway boot (#93219)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:57:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After the runtime/layout migration, the gateway loaded only the bundled stock plugins and never any externally-installed npm plugin (e.g. a third-party WeChat channel plugin enabled via `plugins.entries.openclaw-weixin.enabled=true`). The channel ne

### #89099 fix(gateway): preserve pending run timeouts

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:57:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves pending hard-timeout snapshots when `waitForAgentJob()` reaches its caller timeout before the timeout grace timer fires. - Keeps existing pending-error precedence, then falls back to `getPendingAgentRunTimeout(runId)` so timeout metadata

### #89117 Support Gemini Embedding 2 GA

- bucket: needs_proof
- author: abel-zer0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:58:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add support for the GA `gemini-embedding-2` Gemini API embedding model id - keep `gemini-embedding-2-preview` configs working by normalizing them to the GA id - allow Gemini Embedding 2 output dimensions across the documented 128-3072 range while

### #89190 feat(xai): add grok-composer-2.5-fast model

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: xai, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `grok-composer-2.5-fast` to xAI model catalog in `extensions/xai/model-definitions.ts` - Adds `grok-composer` prefix to modern model list in `extensions/xai/provider-models.ts` - Model is live on xAI `/v1/chat/completions` with `reasoning_con

### #89209 fix(sessions): remove trajectory files on delete

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Removes session trajectory runtime and pointer artifacts when `sessions.delete` deletes a session. - Reuses the existing trajectory cleanup helper already used by age/count pruning, keeping the delete path aligned with maintenance cleanup. - Keeps

### #89211 fix(sessions): rewrite first assistant flush

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the first-assistant flush path so a resumed no-assistant transcript is rewritten to the current in-memory buffer instead of appending that whole buffer onto existing disk contents. - This prevents duplicate session headers and duplicate pend

### #89214 whatsapp: expose connection watchdog tuning in account config

- bucket: needs_proof
- author: danashburn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `channels.whatsapp.watchdog.*` (and per-account override at `channels.whatsapp.accounts.<id>.watchdog.*`) to the WhatsApp channel config schema, plumbed through to the existing `WebMonitorTuning` parameter of `monitorWebChannel`. Fixes

### #89236 fix(slack): default member-info userId to inbound sender

- bucket: needs_proof
- author: stroupaloop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:01:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Draft:** code + unit/contract coverage are complete; holding for human-run real-behavior proof from a live Slack OpenClaw setup before marking ready (per CONTRIBUTING's external-PR proof gate). ## Summary The Slack `message` tool's `member-info` action req

### #93264 fix(mattermost): wake agent on bare @bot mention [AI]

- bucket: needs_proof
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:06:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Mattermost posts whose only content is a bare `@bot` mention were silently dropped after `normalizeMention` stripped the mention and left an empty body. Why does this matter now? - Issue #93205: users naturally sen

### #89074 fix(tui): let gateway queue active-run sends

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes TUI active-run sends being blocked before they reach the Gateway queue. - Allows normal gateway-mode prompts during an active run so /queue followup, /queue collect, /queue steer, and /queue interrupt can be handled by the backend policy ins

### #93226 fix(auth-health): prefer usable OAuth over expired inventory in provider status

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:10:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the Control UI auth badge showing "expired" when the provider has a healthy OAuth profile alongside stale expired profiles, by preferring usable credential status over expired inventory in the provider health aggregation. ## Root Cause `buildAut

### #92700 #92664: [Bug]: read tool fails to read GBK-encoded text files on Chinese Windows (displays garbled text)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:16:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix garbled text when reading non-UTF-8 files (GBK on Chinese Windows, Shift_JIS on Japanese Windows) by reusing the existing Windows active- codepage decoder (`decodeWindowsOutputBuffer`) in the read tool. - No new API parameter — read tool follo

### #91943 fix(feishu): coalesce streaming card updates

- bucket: needs_proof
- author: feie22
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep Feishu streaming cards on CardKit's documented full-content update contract. - Coalesce rapid token updates so long replies send fewer growing full-content payloads to Feishu. - Remove the previously proposed append-only streaming content mod

### #54585 Agents: add compaction modes (warn, error, none) with proactive conte…

- bucket: needs_proof
- author: fierai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:21:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: Users often lose important conversation history due to aggressive auto-compaction, or they encounter cryptic provider-specific "context window exceeded" errors when the window is full. - Why it matters: Advanced users need explicit control o

### #55927 feat(ui): visible room and channel context for sessions and chat

- bucket: needs_proof
- author: escalonalabs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, agents, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:28:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR ships the full Phase 0 + Phase 1 Control UI visibility work for sessions/chat. ### Phase 0 - Sync `GatewaySessionRow` with current gateway payload - Surface room/channel/title metadata in Sessions and Chat - Show Guardian badge when `sendPol
