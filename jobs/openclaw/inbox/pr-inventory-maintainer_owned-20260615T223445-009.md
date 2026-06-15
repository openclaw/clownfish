---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-009
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
  - "#40782"
  - "#85345"
  - "#85496"
  - "#86365"
  - "#86539"
  - "#86544"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#87572"
  - "#87617"
  - "#87888"
  - "#87955"
  - "#88084"
  - "#93143"
  - "#89068"
  - "#89082"
  - "#89121"
  - "#83497"
  - "#89203"
  - "#92398"
  - "#93207"
  - "#87587"
  - "#89006"
  - "#89404"
cluster_refs:
  - "#40782"
  - "#85345"
  - "#85496"
  - "#86365"
  - "#86539"
  - "#86544"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#87572"
  - "#87617"
  - "#87888"
  - "#87955"
  - "#88084"
  - "#93143"
  - "#89068"
  - "#89082"
  - "#89121"
  - "#83497"
  - "#89203"
  - "#92398"
  - "#93207"
  - "#87587"
  - "#89006"
  - "#89404"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.788Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 9

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups

- bucket: maintainer_owned
- author: alaleiwang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: feishu, stale, size: S, clawsweeper:automerge, clawsweeper:human-review, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T07:45:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Fixes #40768 When multiple Feishu bots share the same group, @mentioning a specific bot is not recognized. The bot logs `message in group ... did not mention bot` even though it's correctly mentioned. ## Root Cause Feishu `open_id` is **app-scoped**

### #85345 [codex] fix gateway derived plugin metadata reuse

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:51:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allows Gateway-owned derived plugin metadata snapshots to remain reusable for the Gateway process when the persisted registry is stale or missing. - Threads the prepared metadata snapshot into provider auth prewarm model catalog loading. - Keeps r

### #85496 fix(codex): unsubscribe bound threads after turns

- bucket: maintainer_owned
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: size: S, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:51:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #85458. - Adds best-effort `thread/unsubscribe` cleanup after Codex app-server bound turns finish or fail. - Reuses the canonical app-server cleanup helper and covers missing-thread recovery when the replacement thread retry fails, preservin

### #86365 fix(ui): dismiss stale approval prompts

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: app: web-ui, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:54:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Dismiss Control UI approval prompts when the Gateway says the approval was already resolved or expired. - Keep the prompt visible for non-terminal resolve failures, such as a disconnected Gateway. - Add jsdom coverage for expired, already-resolved

### #86539 fix: repair gateway stop hook runner alias

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: scripts, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs runtime postbuild so a missing nested `dist/plugins/hook-runner-global.js` alias is recreated from the hashed root hook-runner chunk when present. - Runs that nested alias repair before legacy root chunk compatibility aliases, so old shutd

### #86544 fix(cli): show Gemini CLI runtime auth status

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #79585. ## Summary - Teach `openclaw models status` to detect canonical text models such as `google/*` that are routed through a CLI runtime such as `google-gemini-cli`. - Show/check a separate runtime auth route for that split, so `GEMINI_API_KEY` can r

### #87111 fix(webchat): paginate tool-heavy chat history

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebuilt this PR onto current `origin/main` as one clean WebChat/Gateway pagination commit. - Adds additive `chat.history` cursor pagination with `beforeSeq`, `hasMore`, `nextBeforeSeq`, `oldestSeq`, and `newestSeq`. - Pages bounded, display-normal

### #87304 fix(update): fail closed on managed plugin pin conflicts

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc, steipete
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:00:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `openclaw update` could silently downgrade a user-pinned managed plugin direct dependency. After the maintainer policy note, this PR now implements the conflict/fail-closed behavior instead of preserving the newer pin automatically. Fixes #85184. ## Affected s

### #87434 [codex] Expire Telegram message-cache plugin state

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gives Telegram prompt-context message-cache plugin-state rows a seven-day TTL - normalizes existing no-expiry rows in a TTL-enabled namespace on the next write so upgraded `telegram.message-cache` rows can age out too - preserves sibling namespace

### #87572 fix(memory): increase QMD embedTimeoutMs default to 600s for local GG…

- bucket: maintainer_owned
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Local GGUF models (e.g., embeddinggemma-300m) take 3-4 minutes to embed a 30-50 file workspace on commodity hardware (4-core CPU), but `memory.qmd.update.embedTimeoutMs` default is only 120s, causing repeated timeout failures and effectiv

### #87617 fix(agents): broaden local model lean profile

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:05:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Broaden `localModelLean` so small/local models avoid heavyweight web, media, session orchestration, node, channel, and subagent tool families. - Keep core coding/status tools available in lean mode and cover the retained/trimmed surface with focus

### #87888 fix(agents): skip tool prep when models disable tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip core/plugin tool construction when the active model declares `compat.supportsTools: false`. - Keep existing raw-model and explicit no-tools behavior, while making the documented no-tools small-model fallback avoid tool-prep overhead too. - Ad

### #87955 fix(agents): keep lean tools behind catalog controls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Keep `localModelLean` from removing heavyweight tools before Code Mode or Tool Search can place them behind compact catalog controls. - Defer the construction-time lean filter only for catalog-enabled runs, then keep the final visible lean filter so

### #88084 fix: let approval commands bypass active reply lane

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:08:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Let authorized `/approve` commands bypass active reply-operation admission so they can resolve the approval currently holding the lane. - Run authorized text `/approve` through the native slash fast path for SMS-style channels that do not provide

### #93143 fix(imessage): remove client-side split-send coalescing (imsg coalesces upstream)

- bucket: maintainer_owned
- author: omarshahine
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: imessage, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:20:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #91243. imsg `>= 0.11.1` coalesces Apple's URL-preview split-sends upstream (openclaw/imsg#141, shipped in v0.11.1), so OpenClaw now receives a single logical message for `summarize https://example.com/article` and no longer needs to debounce

### #89068 fix(codex): guard dynamic tool name filters

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:22:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Codex dynamic-tool filters against name getters that become unreadable after schema projection - drop unreadable entries from Codex-specific filtering and allowlist paths while preserving healthy siblings - keep vision filtering from crashin

### #89082 fix(agent-runtime): guard tool definition descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:24:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard SDK tool-definition projection against unreadable `name`, `label`, `description`, and `parameters` descriptors. - Fall back optional descriptor fields while dropping tools whose required name/schema fields cannot be read. - Add focused cover

### #89121 refactor: add transcript reader seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, agents, maintainer, size: XL, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:26:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b transcript readers: add a storage-agnostic transcript reader facade and route storage-neutral transcript read/tail/stats/message lookup/projection callers through it. Refs #88838. ## Why The session accessor seam from PR 3.1a gives the

### #83497 fix(control-ui): project message tool sends as chat bubbles

- bucket: maintainer_owned
- author: Neomail2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: app: web-ui, stale, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:39:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI history renders visible replies sent through `message(action="send")` only as tool call/tool result blocks. - Why it matters: in WebChat direct conversations that require visible delivery through the `message` tool, the user se

### #89203 refactor: route SDK session compatibility through seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, plugin: file-transfer, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:40:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Routes the public plugin SDK and plugin runtime session-entry helpers through the file-backed session accessor seam while keeping legacy whole-store and session-file helpers as explicit deprecated compatibility exports. ## Why Path 3 needs SDK-facing s

### #92398 fix(cron): stop replaying missed slots that predate the last definition write [AI-assisted]

- bucket: maintainer_owned
- author: amersheeny
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:49:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91944 — after a `cron.update` schedule change, a gateway restart (e.g. during `openclaw update`) could fire the job at the wrong time. The startup catch-up heuristic (`isRunnableJob` with `allowCronMissedRunByLastRun`) classified a cron job a

### #93207 fix(cron): suppress unavailable-tool self-debug replies

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:57:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - thread unknown-tool loop guard exhaustion out of the embedded attempt result and into cron failure metadata - add a fatal `tool_unavailable_exhausted` signal with `bypassCronDelivery: true` for cron runs - make isolated cron delivery skip dispatch

### #87587 fix(agents): keep exec visible for lean local models

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #86632. ## Summary Lean local-model mode now keeps `exec` directly visible when Tool Search compacts the rest of the tool catalog. This gives small coding-tuned local models an obvious shell fallback for simple live-data or workspace probes instead of for

### #89006 fix(agents): quarantine invalid session custom tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantines SDK and extension-registered custom tools whose definitions cannot be read safely or whose parameter schemas are unsupported by the runtime projection. - Materializes session custom tool definitions before registry activation so hostil

### #89404 fix(agents): snapshot SDK custom tools safely

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:04:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot SDK custom tool definitions before session startup and registry refresh code reads caller-owned fields. - Drop unreadable custom tool descriptors so one hostile getter cannot crash `createAgentSession` or block healthy sibling tools. - Pr
