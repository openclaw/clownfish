---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-029
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
  - "#78124"
  - "#78129"
  - "#78130"
  - "#78154"
  - "#78226"
  - "#78229"
  - "#78253"
  - "#78277"
  - "#78303"
  - "#78342"
  - "#78392"
  - "#78410"
  - "#78440"
  - "#78453"
  - "#78459"
  - "#78486"
  - "#78507"
  - "#78521"
  - "#90038"
  - "#42908"
  - "#92135"
  - "#67331"
  - "#93059"
  - "#43951"
  - "#56785"
  - "#58732"
  - "#59821"
  - "#60445"
  - "#60922"
  - "#77256"
  - "#64301"
  - "#64503"
  - "#64800"
  - "#78036"
  - "#78544"
  - "#65886"
  - "#78556"
  - "#66067"
  - "#66098"
  - "#67376"
cluster_refs:
  - "#78124"
  - "#78129"
  - "#78130"
  - "#78154"
  - "#78226"
  - "#78229"
  - "#78253"
  - "#78277"
  - "#78303"
  - "#78342"
  - "#78392"
  - "#78410"
  - "#78440"
  - "#78453"
  - "#78459"
  - "#78486"
  - "#78507"
  - "#78521"
  - "#90038"
  - "#42908"
  - "#92135"
  - "#67331"
  - "#93059"
  - "#43951"
  - "#56785"
  - "#58732"
  - "#59821"
  - "#60445"
  - "#60922"
  - "#77256"
  - "#64301"
  - "#64503"
  - "#64800"
  - "#78036"
  - "#78544"
  - "#65886"
  - "#78556"
  - "#66067"
  - "#66098"
  - "#67376"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.478Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 29

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #78124 fix(openai-compat): derive stable session from X-Chat-Id / X-Thread-Id headers (#78091)

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:09:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Each request to the OpenAI-compat `/v1/chat/completions` endpoint generated a random-UUID session key when the `user` field was absent, causing Open-WebUI (and similar frontends) to create a new isolated session per message instead of reusing one 

### #78129 fix: preserve final replies without block streaming

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:09:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #78123. ## Summary - always preserve the final assistant text when block replies are disabled, even if preview/partial callbacks were active - keeps Feishu-style preview/card streaming from being treated as final delivery when no streaming lane/card was 

### #78130 fix(memory-core): exclude session-corpus files from short-term promotion (#77831)

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:09:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Dreaming writes session transcripts to `memory/.dreams/session-corpus/` inside the memory tree. The short-term promotion system tracked these paths in the recall store correctly (so dreaming phases can measure organic recall frequency), but also a

### #78154 fix: codex prerelease suffix + clear plugin cache after gateway rebuild

- bucket: needs_proof
- author: LuoXinData
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, size: XS, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:10:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Two small fixes: ### 1. fix(codex): remove prerelease suffix from minHostVersion `semver` floor comparison does not support prerelease tags in `minHostVersion`. This removes the prerelease suffix so version checking works correctly. ### 2. feat(upda

### #78226 fix: Node allowlist writeback can restore revoked exec approvals

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:12:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a race where execution-side allowlist metadata writeback could save a stale `exec-approvals.json` snapshot after an admin revoked or changed policy. - Adds a hash/CAS guard plus a file-lock-backed write path for exec approval updates that ca

### #78229 fix(plugins): start explicit non-bundled hook plugins lacking onCapabilities

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:12:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #78196. ## Root cause v5.3 tightened `hasHookRuntimeStartupIntent` to require either a manifest `activation.onCapabilities: [\"hook\"]` declaration or explicit `hooks.*` policy keys. Pre-v5.3 external extensions (`claw-guard`, `approval-formatter`, …) sh

### #78253 fix(qqbot): support QQBOT_DATA_DIR environment variable

- bucket: needs_proof
- author: Phymath
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Allow users to customize QQBot data directory by setting QQBOT_DATA_DIR environment variable. Falls back to ~/.openclaw/qqbot when not set. ## Change Type (select all) - [x] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [ ] Docs - [ ] 

### #78277 fix: Setup-code races can revive consumed bootstrap tokens

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:13:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a cross-process lost-update race in `devices/bootstrap.json` where concurrent setup-code issuance and bootstrap verification could resurrect a consumed setup code. - Adds cross-process file locking around bootstrap token issuance, verificati

### #78303 feat(mcp): channel-mediated approval for MCP tool calls (consent envelope)

- bucket: needs_proof
- author: oalterg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T19:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #78308 ## Summary Today, when a bundle-MCP tool returns to the agent, OpenClaw passes the result straight through to the model — there's no approval gate analogous to the one [`exec-approvals`](../tools/exec-approvals.md) provides for shell commands. Fo

### #78342 fix: scope agent admin gateway calls

- bucket: needs_proof
- author: auto-devrath
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:15:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #78392 security: remediate workflow and core logic vulnerabilities (#68428)

- bucket: needs_proof
- author: voidsidd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, gateway, agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:18:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description Remediates the workflow template-injection findings reported in #68428 and hardens related input-validation paths in the Docker sandbox and thread-ownership gateway. This patch addresses critical input-handling flaws across workflow execution a

### #78410 fix(agents): normalize null tool params for loop detection

- bucket: needs_proof
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:19:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize non-object tool params once before loop detection and hook policy processing - Keep `detectToolCallLoop`, `recordToolCall`, and tool outcome tracking on the same normalized param shape for null-param calls - Add e2e coverage that repeate

### #78440 fix(memory-core): make dream narrative timeout configurable

- bucket: needs_proof
- author: jeehou
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:21:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `dreaming.execution.defaults.timeoutMs` and per-phase `phases.<phase>.execution.timeoutMs` schema support for memory-core Dream Diary narrative runs. - Propagate the resolved timeout into detached and inline narrative subagent waits while pres

### #78453 fix: heartbeat transcript uses effectiveBaseBody and metadata-aware filter

- bucket: needs_proof
- author: baiquan8
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:21:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix heartbeat mechanism bug causing runtime-context drift and delayed responses. ### Issue 1: Metadata-prefixed heartbeat prompts not filtered - heartbeat-filter.ts: strip inbound metadata before checking patterns - heartbeat-filter.test.ts: add tes

### #78459 fix(commitments): stop hardcoding fastMode in extraction (#78451)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, clawsweeper:human-review, clawsweeper:autofix, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:22:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary MiniMax Coding Plan operators whose plan owns `MiniMax-M2.7` but not the `-highspeed` variant hit `HTTP 500: your current token plan not support model, MiniMax-M2.7-highspeed (2061)` on every commitment extraction pass, because the commitments extra

### #78486 feat(sessions): auto-revert to primary model after image analysis

- bucket: needs_proof
- author: zhanggttry
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:22:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session has an auto model override (from media generation fallback) and `revertAfterImageModel` is enabled in config, automatically revert the session model back to the default primary model after image or PDF analysis completes. This prevent

### #78507 Add agent no-fallback diagnostic mode

- bucket: needs_proof
- author: gmann14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:23:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `openclaw agent --no-fallback` for gateway-only diagnostic probes - add `OPENCLAW_AGENT_NO_FALLBACK=1` for CI/scripted hard-fail mode - document the flag/env var and cover both closed-transport and timeout gateway failures Refs #76492. ## Test

### #78521 security: wrap tool results at transport boundary

- bucket: needs_proof
- author: zeusbot-ron
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:23:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- wrap tool-result text at the generic transport boundary using existing external-content security markers\n- preserve already bounded tool results to avoid double-wrapping\n- add regression coverage for wrapped and already-wrapped tool results\n\n

### #90038 fix(discord): surface failed bulk reaction removals instead of false success

- bucket: needs_proof
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:28:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `removeOwnReactionsDiscord` reported success even when Discord reaction deletions failed. It pushed every reaction identifier into `removed` before the `deleteOwnMessageReaction` promise settled, ran the deletes with `Promise.allSettled` (which neve

### #42908 feat(feishu): extract option, options, form_value from card action callbacks

- bucket: needs_proof
- author: littleWalikrence
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:29:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When users interact with Feishu interactive card components like `select_static` (dropdowns), `checkbox` (multi-select), or `form` (form submissions), the selected values are lost because `handleFeishuCardAction` only extracts data from `action.valu

### #92135 fix(openai-embedding): preserve openai/ prefix for non-native base URLs

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: openai, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:33:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve `openai/` model prefix for non-native OpenAI embedding base URLs - When `agents.defaults.memorySearch.provider` is `openai` but `remote.baseUrl` points to a non-native OpenAI router (e.g. Requesty), OpenClaw was stripping the `openai/` pr

### #67331 agents: standardize fs permission_denied and harden file mutations

- bucket: needs_proof
- author: zeng269
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:36:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- standardize fs permission_denied handling for parity with claw-code\n- harden file mutation paths and error mapping\n\n## Validation\n- lint:parity:claw-code\n- key test suite: 10 files / 55 tests

### #93059 [codex] Fix Telegram rich parse fallback text loss

- bucket: needs_proof
- author: Premsenareddy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:39:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91383. ## What changed - Retry normal Telegram rich text sends as plain text when Telegram rejects rich parsing. - Use the exact original source chunk for the plain retry instead of rendered HTML or separately derived fallback chunks. - Preserve reply/t

### #43951 Fix/hooks agent accountid normalization

- bucket: needs_proof
- author: pauldesmondparker
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:41:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `POST /hooks/agent` silently drops `accountId` from incoming payloads because `HookAgentPayload` lacks the field, `normalizeAgentPayload()` never extracts it, and `dispatchAgentHook()` hand-bui

### #56785 Sandbox: add actionable guidance when python3 is missing

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:41:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: when sandbox mutation helpers fail with `python3: not found`, users only see a raw shell error and cannot quickly recover. - Why it matters: write/edit flows fail with opaque errors, which look

### #58732 utils: add AbortSignal support to runTasksWithConcurrency

- bucket: needs_proof
- author: chineping
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:41:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `runTasksWithConcurrency` lacks external cancellation support, making it impossible for callers to abort pending tasks when an operation is no longer needed. - Why it matters: The codebase already uses `AbortSignal` in `fetch-timeout.ts` 

### #59821 fix: empty allowBundled array should block all bundled skills

- bucket: needs_proof
- author: thomas-corcoran
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:41:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `allowBundled: []` in `openclaw.json` is documented to block all bundled skills, but instead allows all of them - `normalizeAllowlist()` converts `[]` to `undefined`, erasing the user's intent - `isBundledSkillAllowed()` treats both `undefined` an

### #60445 fix(agents): add channelData marker to exec-approval-unavailable payloads

- bucket: needs_proof
- author: qualiobra
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:41:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `buildExecApprovalUnavailableReplyPayload` returns `{ text: "..." }` with no `channelData` marker, making exec-approval-unavailable payloads indistinguishable from regular assistant text at delivery gates. - **Why it matters:** In flo

### #60922 feat(agents): derive fallbacks from configured model catalog

- bucket: needs_proof
- author: 08820048
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, stale, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:42:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw only derives failover candidates from `agents.defaults.model.fallbacks`, so operators who keep multiple models in `agents.defaults.models` still have to duplicate that ordered list manually. - Why it matters: if the configured pr

### #77256 feat(plugins): add before_model_call preflight hook

- bucket: needs_proof
- author: m888m
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, extensions: codex, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:42:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a typed, fail-closed `before_model_call` hook at Pi, CLI, and Codex app-server model submission boundaries. - Gates non-bundled plugin conversation access behind `plugins.entries.<id>.hooks.allowConversationAccess`. - Aligns CLI preflight and

### #64301  fix: improve tool name normalization for malformed LLM outputs

- bucket: needs_proof
- author: hy1933
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:42:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - **Problem:** Certain LLMs occasionally emit malformed tool names during streaming, appending structural prefixes (e.g., `functions`), stripping underscores, dropping leading characters, and appending ra

### #64503 fix(msteams): forward messageBack card actions (Action.Submit) to agent (#60952)

- bucket: needs_proof
- author: ndholakia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Forward `Action.Submit` messageBack activities to the agent instead of dropping them as empty messages. Closes #60952. When a user clicks an `Action.Submit` button on an Adaptive Card in Teams, the click is sent as a messageBack activity (`type="mes

### #64800 fix(plugins): iterate all providers in wrapProviderStreamFn

- bucket: needs_proof
- author: klin3867
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `wrapProviderStreamFn()` only checked a single provider via `resolveProviderHookPlugin()`. When a built-in provider (e.g. Anthropic) owned the provider ID, external plugins with matching `hookAliases` could never contribute their own 

### #78036 Drop stale conversation session bindings

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #77871. ## Summary - validate runtime conversation binding targets before touching or rewriting routes - unbind stale runtime targets and fall back to the original route - unbind conversation bindings for session keys removed by applied session cleanup -

### #78544 fix(gateway): fail hot reload when channel stop times out

- bucket: needs_proof
- author: pronzcw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a `failOnTimeout` stop option for channel shutdowns - make gateway hot reload fail fast when a channel does not stop within the abort timeout - leave timed-out channel runtime marked as not running instead of preserving a false running state -

### #65886 feat(tui): add configurable status line command rendering

- bucket: needs_proof
- author: nanami-he
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: OpenClaw's TUI has no user-extensible display area — users who want persistent status info (git branch, system metrics, MCP tool output) must rely on external tools like tmux. - **Why it matters**: A general-purpose status line create

### #78556 fix(memory-wiki): resolve bridge-relative lint links

- bucket: needs_proof
- author: greyschen76
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: memory-wiki, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Memory Wiki `wiki lint` false-positive `broken-wikilink` warnings for bridge-imported memory sources. Bridge-imported source pages preserve original relative Markdown links via `bridgeRelativePath`, while generated wiki source pages use saniti

### #66067 fix(tui): preserve spaces between thinking fragments

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: streamed thinking fragments were joined with single newlines, and the TUI markdown renderer collapsed those boundaries so adjacent sentences appeared smushed together - Why it matters: reasoning output in the terminal became hard to read 

### #66098 fix(web-ui): respect effective chat defaults

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Web UI only looked at persisted session overrides, so a new session could already be running with effective thinking/reasoning defaults while the chat header still rendered the fallback model label or hid reasoning incorrectly - Why i

### #67376 fix(gateway): bind loopback MCP scope to per-backend bearer token (#64993)

- bucket: needs_proof
- author: parasol-aser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes loopback MCP scope spoofing (issue #64993, CWE-285/639/807/345, OWASP A01:2021). The loopback MCP HTTP server (`/mcp`) authenticated each request with a 32-byte bearer token but then read per-request **scope** (`sessionKey`, `accountId`, `mess

