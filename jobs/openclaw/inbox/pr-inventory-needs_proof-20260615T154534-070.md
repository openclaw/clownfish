---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-070
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
  - "#74734"
  - "#74783"
  - "#74974"
  - "#74990"
  - "#75009"
  - "#75050"
  - "#75075"
  - "#75076"
  - "#93110"
  - "#75254"
  - "#75466"
  - "#75545"
  - "#75777"
  - "#77492"
  - "#82085"
  - "#83015"
  - "#83235"
  - "#92782"
  - "#44111"
  - "#49083"
  - "#58993"
  - "#63330"
  - "#65655"
  - "#65936"
  - "#68384"
cluster_refs:
  - "#74734"
  - "#74783"
  - "#74974"
  - "#74990"
  - "#75009"
  - "#75050"
  - "#75075"
  - "#75076"
  - "#93110"
  - "#75254"
  - "#75466"
  - "#75545"
  - "#75777"
  - "#77492"
  - "#82085"
  - "#83015"
  - "#83235"
  - "#92782"
  - "#44111"
  - "#49083"
  - "#58993"
  - "#63330"
  - "#65655"
  - "#65936"
  - "#68384"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.208Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 70

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74734 fix(config): migrate legacy ACP stream keys on load

- bucket: needs_proof
- author: BlueBirdBack
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:27:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #35957 by porting the stale ACP stream legacy-config migration into the current modular runtime migration registry. Migrated: - `acp.stream.maxTurnChars` → `acp.stream.maxOutputChars` - `acp.stream.maxToolSummaryChars` → `acp.stream.maxSession

### #74783 Add gateway health connection telemetry

- bucket: needs_proof
- author: trialanderrorstudios
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:27:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add per-client `connection` telemetry to authenticated WebSocket `health` responses. - Track WebSocket protocol ping/pong RTT on each gateway client without mutating the cached global health snapshot. - Document `health.connection` and add tests f

### #74974 fix(gateway): tolerate Paperclip metadata via adapterMeta namespace + paperclip alias on AgentParamsSchema

- bucket: needs_proof
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:27:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Closes #74635, #62102. Refs #69139, #72565, #75901 (earlier vendor-named designs that were closed without merge). Paperclip and other external agents inject a root-level metadata blob when invoking agents through the `openclaw_gateway` adapter, but

### #74990 feat(anthropic): surface Claude subscription path in onboard wizard

- bucket: needs_proof
- author: toto-elgringo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, extensions: anthropic, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:28:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Renames the `anthropic-cli` auth choice to **"Claude subscription (no API key needed)"** and bumps `assistantPriority` to `-50` so Pro/Max users see the headless `claude -p` flow ahead of API-key paths in `openclaw onboard`. - Adds `extensions/ant

### #75009 Add WhatsApp DM message-tool reply mode

- bucket: needs_proof
- author: asteinberger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, gateway, agents, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:28:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: WhatsApp DMs used automatic final-reply delivery while groups used `message_tool_only`, so DMs could not reliably show live `message(action=send)` updates. - Why it matters: Users who want What

### #75050 docs(feishu): add mixed proxy troubleshooting

- bucket: needs_proof
- author: kunpeng-ai-lab
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:28:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds Feishu/Lark troubleshooting guidance for mixed proxy environments. - Documents the case where model-provider traffic needs `HTTP_PROXY` / `HTTPS_PROXY`, but Feishu/Lark official endpoints should go direct via `NO_PROXY`. - Includes PowerShell

### #75075 feat(gateway): surface built-in tool calls as function_call output items on /v1/responses

- bucket: needs_proof
- author: glow1128
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:28:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds opt-in `gateway.http.endpoints.responses.exposeBuiltInToolCalls` flag. - When enabled, `/v1/responses` appends a `function_call` output item for every built-in tool the agent invokes (`bash`, `edit`, `find`, `grep`, `ls`, `read`, `write`, `ap

### #75076 Harden Control UI auth, status warnings, and build provenance

- bucket: needs_proof
- author: Shadow-3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, app: web-ui, gateway, scripts, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:28:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden Control UI serving with security headers/CSP and authenticated bootstrap config. - Prefer fragment-token handoff, strip URL token material after bootstrap, and document the `?token=<redacted> deprecation plan. - Render assistant media through authen

### #93110 fix(cron): add delivery route lease store for isolated cron announce context

- bucket: needs_proof
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:29:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92460. Replaces the previously rejected approach from PR #92580. Instead of persisting the resolved delivery target onto the isolated cron session entry (which created a lifecycle leak — route data accumulated with no retirement hook), this P

### #75254 Bound webchat chat.send terminal timeouts

- bucket: needs_proof
- author: ihnotic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:29:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a webchat chat.send terminal backstop that emits a chat error when an embedded run does not produce a terminal event before the requested/default gateway timeout - initialize missing transcript files before emitting eager user transcript updat

### #75466 feat(ui): replace textarea with CodeMirror 6 JSON editor in raw config view

- bucket: needs_proof
- author: Tardisyuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:30:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace the plain `<textarea>` for raw config editing with a proper CodeMirror 6 JSON5 editor component. ### Changes **New file: `ui/src/ui/views/config-editor.ts`** - CodeMirror 6 editor with JSON5 language mode (handles comments, unquoted keys, tr

### #75545 fix(gateway): make `gateway start` idempotent when already running

- bucket: needs_proof
- author: PfanP
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, extensions: memory-core, cli, commands, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:30:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #60087. ## Summary If you have `openclaw gateway start` in your `~/.profile` (the setup hint adds it), every exec tool call ends up SIGTERM'ing the running gateway and dropping your WebSocket session. The chain: ``` exec tool → bash -l -c "env -0" (PATH 

### #75777 docs(skills/coding-agent): worktree-isolate long spawns + watchdog-trap mitigations

- bucket: needs_proof
- author: clank-ecorp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:30:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds operator-facing guidance to defuse a recurring failure mode in multi-agent orchestration: a watchdog-reported "terminated" spawn that actually kept running and silently raced the parent agent on a shared working tree. We hit this in real downst

### #77492 security fix(gateway): defend pre-auth device-signature verify against CPU DoS

- bucket: needs_proof
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, size: L, triage: dirty-candidate, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:31:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77979 ## Summary - Pre-auth WS handshakes that include a `device` block ran `crypto.createPublicKey` plus a v3-then-v2 `crypto.verify` per request, gated only by frame-size limits. An unauthenticated remote attacker could pin a single Gateway core: PoC

### #82085 fix: skip timeout-triggered compaction when run was aborted by user

- bucket: needs_proof
- author: lykeion-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:32:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: When a user presses the Stop button to abort a run, the timeout-triggered compaction still fires if context usage exceeds 65%. This causes unnecessary compaction at an inappropriate time. - Why it matters: User-initiated aborts should not

### #83015 fix(memory): resolve memoryFlush 0/0 guard blocking flush on never-flushed sessions (#47143)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:33:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #47143 — `memoryFlush` never triggers for sessions where both `compactionCount` and `memoryFlushCompactionCount` are `0` but no flush has actually run. ## Root cause `hasAlreadyFlushedForCurrentCompaction` uses a simple equality guard: ```ts r

### #83235 fix(control-ui): avoid protected local avatar image URLs

- bucket: needs_proof
- author: ninaopenclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:33:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop passing protected same-origin /avatar routes directly into Quick Settings image tags for local assistant avatars - use the authenticated blob URL when the avatar fetch has completed, and fall back while it is still loading - add UI regression

### #92782 fix #92688: [Bug]: Qwen vision models fail with 400 "Unexpected item type in content" on DashScope

- bucket: needs_proof
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:35:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Root cause: OpenClaw's media-understanding resolver trusted user/catalog `input: ["text", "image"]` metadata as the final image-capability source of truth. That allowed a known text-only Qwen Cloud chat model such as

### #44111 Backup: add encrypted snapshot backup flow

- bucket: needs_proof
- author: shichangs
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:45:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw had local backup export/verify, but no low-friction folder-backed snapshot flow for encrypted backups plus workspace mirroring. - Why it matters: users need a simple `backup setup/run/status/list/restore` flow for day-to-day prot

### #49083 fix(security): use constant-time comparison for TLS fingerprint verification

- bucket: needs_proof
- author: haoyu-haoyu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary TLS certificate fingerprint verification in `src/gateway/client.ts` uses `!==` (standard JavaScript string equality), which is vulnerable to **timing side-channel attacks** (CWE-208). An attacker on the network path can measure response time differe

### #58993 fix(googlechat): support spaceType field for DM vs Space detection

- bucket: needs_proof
- author: Starhappysh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `spaceType` and `singleUserBotDm` fields to the `GoogleChatSpace` type - Update DM detection logic to check all three API fields: legacy `type`, modern `spaceType`, and `singleUserBotDm` ## Details Google Chat API deprecated the `space.type` f

### #63330 feat(plugins): add session followup turn API and gateway-restart extension

- bucket: needs_proof
- author: corbin-breton
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, extensions: qa-lab, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a new `runtime.followup.enqueueFollowupTurn()` method to the plugin runtime, enabling plugins to schedule proactive agent turns for any session — including cold sessions with no active user interaction. > **Supersedes #60951** — rebased onto lat

### #65655 fix: harden Mattermost slash callback auth

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fix Summary Mattermost native slash commands were insecure in two ways: when `commands.callbackUrl` was omitted, OpenClaw auto-derived a plain-HTTP callback URL; and once commands were registered, any valid callback token for the account could be replayed a

### #65936 feat: add Asia/Shanghai to cron timezone suggestions

- bucket: needs_proof
- author: finallylly
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds \`Asia/Shanghai\` to the \`CRON_TIMEZONE_SUGGESTIONS\` list in ui/src/ui/app-render.ts - Useful for users in the Asia region who want to use their local timezone in cron schedules ## Test plan - [x] Lint passes - [x] Type check passes

### #68384 fix(secrets): reject noisy plain exec stdout

- bucket: needs_proof
- author: bluesky6868
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the exec secret resolver accepted any non-JSON single-value stdout verbatim when `jsonOnly: false`, including plugin/log noise followed by the intended scalar. - Why it matters: if an exec-backed resolver emits machine output plus inciden

