---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-043
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
  - "#72267"
  - "#72495"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73746"
  - "#73897"
  - "#74083"
  - "#74274"
  - "#87968"
  - "#74734"
  - "#74783"
  - "#74974"
  - "#75009"
  - "#75050"
  - "#75254"
  - "#75466"
  - "#75545"
  - "#75777"
  - "#82085"
  - "#83015"
  - "#83235"
  - "#92782"
cluster_refs:
  - "#72267"
  - "#72495"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73746"
  - "#73897"
  - "#74083"
  - "#74274"
  - "#87968"
  - "#74734"
  - "#74783"
  - "#74974"
  - "#75009"
  - "#75050"
  - "#75254"
  - "#75466"
  - "#75545"
  - "#75777"
  - "#82085"
  - "#83015"
  - "#83235"
  - "#92782"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.795Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 43

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72267 fix: zsh compdef directive on first line

- bucket: needs_proof
- author: gigamonster256
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: zsh completions do not work when auto loaded - Why it matters: zsh completions must have the #compdef directive on the first line to work properly (works fine when sourced but not loaded automatically from fpath) - What changed: zsh compl

### #72495 fix(agents): harden workspace bootstrap cache identity

- bucket: needs_proof
- author: aimqwest
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Objective Harden the guarded workspace bootstrap file cache identity so an equal-size in-place edit with restored `mtime` cannot keep stale bootstrap instructions cached. This is the narrow cache-identity follow-up to the security tradeoff surfaced on #72406 a

### #72843 fix(agents): warm context-window cache for the gateway daemon

- bucket: needs_proof
- author: jakepresent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The long-running gateway daemon never warms the context-window cache, so synchronous lookups on the status path return `DEFAULT_CONTEXT_TOKENS = 200_000` until the first agent run completes. That value then gets persisted onto the session record and ra

### #73122 test claude-cli backend registration guardrails

- bucket: needs_proof
- author: szupzj18
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: anthropic, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a bundled Anthropic loader guardrail proving `claude-cli` is registered and resolvable as a CLI backend. - Assert the same test does not register `claude-cli` as an embedded agent harness, matching the current runtime-family split. - Add a leg

### #73171 Add bounded status gateway auth fallback

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded fallback when resolving gateway auth for deep/status scans - preserve existing status behavior while avoiding hangs when auth lookup stalls - keep promised Discord decision digest artifact path present for tool-call audit output ## V

### #73311 Add Control UI session kind filter

- bucket: needs_proof
- author: Shawn-Kim96
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Control UI chat-header session kind filter for main/direct, group, subagent, dreaming, cron, and other sessions. - Keeps filtering UI-local so `sessions.list` params and gateway protocol stay unchanged. - Preserves the selected session in t

### #73355 fix(cron): add .catch() re-arm and watchdog to prevent runtime timer chain death

- bucket: needs_proof
- author: SkywingsWang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:22:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the cron `setTimeout` chain breaks at runtime, the scheduler silently stops firing and never recovers until a gateway restart. This was observed after ~2.5 days of continuous gateway uptime on macOS (Apple Silicon) with no errors logged. **Root

### #73746 feat(tasks): improve task state transitions and lifecycle formatting

- bucket: needs_proof
- author: neofdezf-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XL, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add explicit intermediate active task states for approval waits and external waits - propagate those active-state semantics across registry maintenance, flow guards, CLI views, and auto-reply task rendering - add compressed operational summaries p

### #73897 Fix Android node system.run shell wrapper

- bucket: needs_proof
- author: alixchow
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: Fix Android node system.run shell wrapper Summary: - Use Termux's shell path for Android node system.run wrappers. - Keep Windows and other POSIX platforms unchanged. - Document the Android/Termux node-host shell behavior. Problem: Android/Termux does n

### #74083 fix(sandbox): pass --init so tini reaps zombie processes

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: What: Adding --init to the docker sandbox makes tini the PID 1 and reaps zombie processes. Why: Long-running sandboxes generate a large number of short-lived child processes (shell/browser helpers), and the entrypoint does not reap them →

### #74274 fix(control-ui): download assistant markdown attachments

- bucket: needs_proof
- author: Neomail2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:26:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - render assistant `mediaUrl` / `mediaUrls` payload fields as attachment cards in the Control UI - add download links for non-image assistant attachments instead of opening them inline - force `Content-Disposition: attachment` for local markdown fil

### #87968 fix(ui): treat started managed-service handoff as pending update instead of skipped

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:26:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87889. When a user clicks "Update now" in the Dashboard on a global install with a managed-service supervisor, the Gateway starts a managed-service handoff and returns `ok=true` with `result.status="skipped"` and `reason="managed-service-hand

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
