---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-028
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
  - "#85359"
  - "#85507"
  - "#85522"
  - "#85716"
  - "#85747"
  - "#85746"
  - "#85828"
  - "#85866"
  - "#85151"
  - "#83292"
cluster_refs:
  - "#85359"
  - "#85507"
  - "#85522"
  - "#85716"
  - "#85747"
  - "#85746"
  - "#85828"
  - "#85866"
  - "#85151"
  - "#83292"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 28

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #85359 feat(agents): add local skill route tool

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, agents, maintainer, size: M, rating: 🧂 unranked krab, status: ⏳ waiting on author
- updated: 2026-05-28T09:51:24Z
- body excerpt: ## Summary - add `local_skill_route`, a read-only local tool that ranks available skills for the current user task and returns matched/ambiguous/nomatch guidance - wire the tool through `createOpenClawTools` from the per-run `skillsSnapshot`, and pass that sna

### #85507 fix(slack): include assistant loading messages

- bucket: needs_proof
- author: emergentash
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-05-28T09:51:33Z
- body excerpt: ## Summary - pass Slack assistant `loading_messages` into native `assistant.threads.setStatus` calls - cover loading messages in Slack monitor status tests and preview fallback dispatch tests - add a changelog entry for the native Slack thinking/status message

### #85522 Emit command output events for approved gateway execs

- bucket: ready_for_maintainer
- author: carlos-sarmiento
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-28T09:51:34Z
- body excerpt: ## Summary - Emit a `command_output` agent event when an async approved gateway exec finishes. - Add optional `command` and `approvalId` fields to command output event data. - Register follow-up run context so Control UI visibility follows the originating chan

### #85716 fix(agents,gateway): three subagent announce delivery failures in loopback token-auth setups

- bucket: needs_proof
- author: jailbirt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-28T09:51:43Z
- body excerpt: ## Summary Three related bugs that break subagent completion delivery when running OpenClaw with loopback token-auth (e.g. Google Chat channel, `sessions_spawn` orchestration pattern). All three were found and validated on a production Linux/GCP deployment: Op

### #85747 fix(agents): add worker thread pool for event-loop isolation of model calls

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-28T09:51:45Z
- body excerpt: ## Summary Offloads LLM API `fetch()` calls to a bounded `worker_threads` pool to prevent event-loop starvation on the main gateway thread during long-running streaming model responses. ## Root Cause Model API calls (Chat Completions, streaming LLM responses) 

### #85746 fix(gateway): add graduated force-close drain for gateway restart

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-28T09:51:45Z
- body excerpt: ## Summary Replaces the single-timeout `deferGatewayRestartUntilIdle` with a **ShutdownController** implementing a graduated 4-phase force-close cascade for gateway restart. Prevents zombie gateway processes from blocking graceful shutdown. ## Root Cause `defe

### #85828 [codex] web_search: add Perplexity model override

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, extensions: perplexity, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- updated: 2026-05-28T09:51:48Z
- body excerpt: ## Summary Perplexity web_search now accepts a per-call `model` override, but only allowlisted models from `plugins.entries.perplexity.config.webSearch.allowedModels` are honored. ## Verification - `node scripts/run-vitest.mjs src/agents/tools/web-search.test.

### #85866 [codex] Add WhatsApp phone-code login

- bucket: ready_for_maintainer
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, app: macos, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- updated: 2026-05-28T09:51:50Z
- body excerpt: ## Summary - add `openclaw channels login --phone-number <number>` to the generic channel auth adapter and CLI - implement WhatsApp phone-code pairing through Baileys as a headless/QR-free login fallback, including cleanup for stale partial phone-code credenti

### #85151 fix(status): detect system-level systemd units via INVOCATION_ID

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-05-28T12:04:43Z
- body excerpt: ## Summary When the gateway runs under a system-level systemd unit (not user-level), `systemctl --user` is unavailable and `openclaw status --deep` reports "systemd user services unavailable" as a false positive, even though the gateway is healthy. ## Fix Dete

### #83292 feat(gigachat): add provider integration

- bucket: needs_proof
- author: remdev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, cli, scripts, commands, docker, agents, size: XL, channel: qqbot, extensions: qa-lab, extensions: codex, extensions: diagnostics-prometheus, extensions: deepinfra, proof: supplied, extensions: diffs, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-28T13:35:29Z
- body excerpt: # feat(gigachat): add provider integration ## Summary - Problem: OpenClaw did not have a bundled GigaChat provider, and GigaChat cannot be represented as a plain static API-key provider because Sber requires OAuth token exchange from an Authorization key. - Wh

