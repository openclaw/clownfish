---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-112
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
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#91597"
  - "#81471"
  - "#83592"
  - "#83670"
  - "#84115"
  - "#85249"
  - "#71537"
  - "#72932"
  - "#75716"
  - "#84657"
  - "#85509"
  - "#85522"
  - "#85543"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#86526"
  - "#93183"
  - "#93206"
cluster_refs:
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#91597"
  - "#81471"
  - "#83592"
  - "#83670"
  - "#84115"
  - "#85249"
  - "#71537"
  - "#72932"
  - "#75716"
  - "#84657"
  - "#85509"
  - "#85522"
  - "#85543"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#86526"
  - "#93183"
  - "#93206"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.215Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 112

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #75371 Gateway: guard session-run cancel requester in minimal tests

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebased this replacement lane onto latest `origin/main` and kept the minimal-test-gateway requester guard from the prior patch. - Bounded sticky session-run cancel replay state with a 10 minute TTL plus a 1,000-entry cap, while preserving late-han

### #75662 fix(agents): pause yielded main-session runs

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, extensions: codex, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the subagent yield-pause fix from [6f3b5f86](https://github.com/openclaw/openclaw/commit/6f3b5f8666f3a3877b62d9019b8842455fdf62e1) to top-level (non-subagent) sessions. When a main session ends via the `sessions_yield` tool, the runner alread

### #78381 feat(embedded-runner): expose prep stage timings

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: M, extensions: memory-wiki, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:31:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Expose embedded runner prep stage snapshots on `EmbeddedRunAttemptResult`. - Include the same prep stage summary on the `agent_end` hook event for plugin observability. - Add focused coverage for attempt result and hook event prep stage propagatio

### #78664 perf(agents): cache provider tool schema normalization

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:32:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cache provider-normalized tool schema `parameters` for repeated embedded agent turns, but only when OpenClaw can identify one of its bundled SDK tool-compat normalizers. - Keep the cache internal and conservative: bundled DeepSeek, Gemini, and Ope

### #91597 [AI] fix(plugins): recognize document-extractors as a capability kind…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:32:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `PluginCapabilityKind` in `inspect-shape.ts` did not include `"document-extractors"`, so plugins declaring `contracts.documentExtractors` (like the bundled `document-extract` plugin) showed `capabilityCount: 0`, `tools: []`, and `shape: "non-capabil

### #81471 fix(line): load accounts.default and default-enable named accounts

- bucket: ready_for_maintainer
- author: edenfunf
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #47264. The LINE multi-account resolver had two bugs that prevented webhook routes from registering when `channels.line.accounts` was used: 1. **`accounts.default` was ignored.** `resolveLineAccount` short-circuited the account lookup when `ac

### #83592 fix(models): avoid persisting prompt-visible provider secrets

- bucket: ready_for_maintainer
- author: 1507819106zxzx-crypto
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop newly generated plaintext provider apiKey values from being written to models.json - avoid copying plaintext auth-profile keys into generated provider config, including merge-preserved rows - strip new plaintext sensitive provider headers suc

### #83670 fix: Preserve Telegram hooks when flushing buffered finals

- bucket: ready_for_maintainer
- author: bpconnor3-r2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:34:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - flush buffered Telegram final answers before returning from segmented final delivery - preserve the normal preview-finalized `message:sent` hook and transcript mirror when the buffered answer flushes - add a regression test covering skipped reason

### #84115 docs: resolve distorted and oversized avatars for contributors in README

- bucket: ready_for_maintainer
- author: alricium
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I noticed that the avatars for CHINMANSINO and M-HAJAZ were displaying significantly larger and distorted compared to the rest of the contributors grid in the README. I fixed the styling/dimensions for these specific avatars to ensure they render cleanly and m

### #85249 fix(cron): guard against undefined sourceDelivery in isolated executor

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:35:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard against `undefined` `sourceDelivery` in the isolated cron executor to prevent `TypeError: Cannot read properties of undefined (reading 'sourceReplyDeliveryMode')`, and unify the cron source-delivery planner into a single shared helper used by 

### #71537 Recover archived (.reset) session transcripts in memory hook + session-logs skill

- bucket: ready_for_maintainer
- author: injinj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:47:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session is reset (`/new` or `/reset`), the gateway renames its `<id>.jsonl` transcript to `<id>.jsonl.reset.<timestamp>Z`. After that rename, two surfaces silently lose the conversation: 1. **The session-memory hook**, which runs at reset tim

### #72932 fix(gateway): unblock startup and fresh agent sessions

- bucket: ready_for_maintainer
- author: gitchrisqueen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rebase the patch onto current `main` - allow `OPENCLAW_GATEWAY_FAST_CONFIG=1` to defer pre-ready channel startup maintenance and startup session migration - keep deferred failures visible by warning on rejected background startup tasks - add regre

### #75716 fix(googlechat): preserve unresolved service account refs

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:48:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve unresolved Google Chat `serviceAccountRef` as an error instead of silently falling back to legacy inline `serviceAccount` credentials. - Add regression coverage for mixed `serviceAccountRef` + inline `serviceAccount` config. ## Real behav

### #84657 [codex] Declare node-gyp for native package builds

- bucket: ready_for_maintainer
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:49:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `node-gyp` as a root dev dependency - update `pnpm-lock.yaml` with the resolved `node-gyp` dependency graph - add a changelog entry for the local install/bootstrap fix ## Why this is needed `sharp` can fall back to a source build during local 

### #85509 fix(openai): drop empty reasoning replay blocks

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:51:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Drop replayable OpenAI Responses reasoning blocks when their persisted `thinking` text is empty, whitespace-only, or non-string. - Preserve the rest of the assistant content, including tool calls and matching tool results. - Keep non-empty signed 

### #85522 Emit command output events for approved gateway execs

- bucket: ready_for_maintainer
- author: carlos-sarmiento
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:52:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit a `command_output` agent event when an async approved gateway exec finishes. - Add optional `command` and `approvalId` fields to command output event data. - Register follow-up run context so Control UI visibility follows the originating chan

### #85543 Retry node shell fallback on ENOENT

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:52:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Retry node-host `system.run` shell execution with trusted absolute `/usr/bin/sh` when the default `/bin/sh` spawn fails with ENOENT. - Keep PATH-resolved shell fallback out of the retry chain so execution does not switch to an inherited-PATH binar

### #85621 Clarify landable bug sweep skill credential boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies local bug sweep workflow wording to avoid implying browser, wallet, SSH, credential-store, or secret access. This targets a SafeOps reviewed-risk false positive in the landable bug sweep skill.

### #85628 Clarify small bugfix sweep skill tracking wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Renames the small bugfix sweep output ledger wording to tracking log to avoid SafeOps false-positive credential/wallet/ledger implications. This is a doc-only skill wording clarification.

### #85642 Clarify skill authentication and session boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:52:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Doc-only SafeOps reviewed-risk reduction pass for skill documentation. Changes: - Clarify Graincrawl encrypted source checks so they require explicit readiness checks and no unexpected OS approval prompts. - Clarify browser automation user-session g

### #85657 Clarify OpenClaw testing evidence wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies release evidence and protected-context wording in the OpenClaw testing skill to avoid SafeOps reviewed-risk false positives while preserving release validation instructions.

### #85663 Harden SafeOps final config risk defaults

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens the final SafeOps-reviewed config surfaces after the skill-doc risk cleanup pass. Changes: - GitHub CLI config discovery no longer guesses broad operator home paths such as root, sudo user, or login user homes by default. - Alternate GitHub 

### #86526 fix(openai): allow RFC 2544 fake-IP range for Realtime session requests

- bucket: ready_for_maintainer
- author: shushushv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 🛠️ actively grinding, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `fetchWithSsrFGuard` in `createOpenAIRealtimeSecret` was missing a fake-IP SSRF policy, causing the SSRF guard to block OpenAI Realtime session-secret requests when proxy stacks such as Clash, Surge, or sing-box in TUN/fake-IP mode resolve `api.op

### #93183 [codex] Fix /btw Codex runtime side-question routing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:55:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #88902. Resolves `/btw` to the canonical runtime model before committing to a side-question route, then reselects the harness with the canonical provider/model. This lets stale legacy `openai-codex` route state use the Codex side-question handling inste

### #93206 fix(minimax): wrap simple completion requests

- bucket: ready_for_maintainer
- author: extrasmall0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: minimax, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:55:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes the MiniMax direct `infer model run` path so it uses the same MiniMax thinking payload wrapper as the embedded-agent stream path. - Adds the MiniMax thinking wrapper to the provider simple-completion hook. - Exposes the wrapper through th

