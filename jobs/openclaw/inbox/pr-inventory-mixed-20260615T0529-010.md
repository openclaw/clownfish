---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-010
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
  - "#83489"
  - "#84206"
  - "#80394"
  - "#84275"
  - "#84334"
  - "#80924"
  - "#81378"
  - "#81724"
  - "#80955"
  - "#84424"
cluster_refs:
  - "#83489"
  - "#84206"
  - "#80394"
  - "#84275"
  - "#84334"
  - "#80924"
  - "#81378"
  - "#81724"
  - "#80955"
  - "#84424"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 10

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #83489 Fix gateway service startup race

- bucket: ready_for_maintainer
- author: ThiagoCAltoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: refactor-only, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- updated: 2026-05-19T13:35:53Z
- body excerpt: ## Summary - Fix a gateway service startup race where one service-mode gateway can kill another healthy gateway listener before the normal gateway lock/startup path runs. - Move service-mode stale listener cleanup behind bind resolution and a `/healthz` probe 

### #84206 fix(agents): cleanup parent agent directory during deletion

- bucket: stale_unassigned
- author: akang1798
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: line, channel: matrix, channel: mattermost, channel: msteams, channel: nextcloud-talk, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, app: ios, app: macos, gateway, extensions: copilot-proxy, extensions: diagnostics-otel, extensions: llm-task, extensions: lobster, extensions: memory-core, extensions: memory-lancedb, extensions: open-prose, commands, channel: feishu, channel: twitch, channel: irc, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: duckduckgo, extensions: deepseek, channel: qqbot, extensions: stepfun, channel: qa-channel, extensions: qa-lab, extensions: memory-wiki, extensions: webhooks, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: bonjour, plugin: google-meet, extensions: senseaudio, extensions: tts-local-cli, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, extensions: diagnostics-prometheus, plugin: migrate-hermes, channel: synology-chat, plugin: migrate-claude, extensions: cerebras, extensions: deepinfra, plugin: file-transfer, extensions: oc-path, extensions: amazon-bedrock, extensions: anthropic-vertex, extensions: brave, extensions: chutes, extensions: diffs, extensions: elevenlabs, extensions: firecrawl, extensions: github-copilot, extensions: google, extensions: microsoft, extensions: mistral, extensions: ollama, extensions: opencode, extensions: opencode-go, extensions: openrouter, extensions: openshell, extensions: perplexity, dependencies-changed, extensions: admin-http-rpc
- updated: 2026-05-19T15:33:41Z
- body excerpt: ### Description Currently, deleting an agent only trashes the leaf subdirectories (`agentDir` and `sessionsDir`). In the default hierarchical structure (`agents/{id}/agent`), this leaves behind an empty parent directory (`agents/{id}/`). This PR updates both t

### #80394 feat(agents): per-agent model allowlist (with fallback to global)

- bucket: needs_proof
- author: pleyvah
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, scripts, commands, agents, size: L, extensions: kimi-coding, extensions: qa-lab, extensions: memory-wiki, extensions: deepinfra, proof: supplied, extensions: google, extensions: openrouter, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-05-19T16:47:00Z
- body excerpt: When `agents.list[<agentId>].models` is defined and non-empty, scope the visibility allowlist (used by the Control UI model picker, `/model`, and the gateway `models.list` catalog view) to that agent. Otherwise fall back to `agents.defaults.models` exactly as 

### #84275 fix(codex): add openclaw runtime dependency

- bucket: ready_for_maintainer
- author: PollyBot13
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, proof: sufficient, dependencies-changed, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- updated: 2026-05-19T19:51:18Z
- body excerpt: ## Summary - add the host `openclaw` package as a concrete runtime dependency for `@openclaw/codex` - keep the change scoped to `extensions/codex/package.json` ## Why `@openclaw/codex` imports `openclaw/plugin-sdk/...` from its published runtime bundle. When t

### #84334 fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart

- bucket: needs_proof
- author: 6a6f686e6e79
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-20T00:43:58Z
- body excerpt: ## Summary `update.run` from the control UI downloads the new package but the gateway never restarts to pick it up. Every attempt logs `restart coalesced (already in-flight)` and is silently dropped for the lifetime of the process. ### Root cause Two bugs comb

### #80924 feat(i18n): translate dreaming module UI strings to Simplified Chinese

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- updated: 2026-05-20T02:03:16Z
- body excerpt: ## Summary - Problem: Dreaming module diary UI had hardcoded English strings and incomplete Chinese translations (restartConfirmation was still in English). - Why it matters: Non-English users see mixed-language UI in the Dreaming tab. - What changed: Extracte

### #81378 feat(i18n): translate cron page UI strings to Simplified Chinese

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- updated: 2026-05-20T02:12:35Z
- body excerpt: ## Summary - Problem: Cron page had hardcoded English strings when using Simplified Chinese locale, including job list chips (session target, wake mode, delivery mode), schedule labels, form fields (session key, account ID, light context, failure alerts), and 

### #81724 ui(i18n): localize overview, sessions, and channels pages for zh-CN

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-20T02:12:52Z
- body excerpt: ## Summary - Problem: Overview, sessions, and channels pages had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, filters, table headers, and pagination controls. - What changed: Extracted 

### #80955 ui(i18n): localize chat page slash commands and composer for zh-CN

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, proof: 📸 screenshot
- updated: 2026-05-20T02:14:06Z
- body excerpt: ## Summary - Problem: Chat page slash command palette and composer had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, descriptions, and hints in the chat command menu, footer shortcuts, T

### #84424 fix(doctor): honor per-agent bootstrap profile in size check

- bucket: needs_proof
- author: kasangyong
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- updated: 2026-05-20T04:22:56Z
- body excerpt: > AI-assisted: drafted with Claude Code. Bug discovery, fix, regression test, and behavior-proof reproducer all verified by the author on Windows 11 + Node 24. ## Summary - Problem: `openclaw doctor` reports bootstrap-file-size warnings against the global `age

