---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-241
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
  - "#54900"
  - "#55001"
  - "#55487"
  - "#54647"
  - "#55018"
  - "#55742"
  - "#54838"
  - "#56116"
  - "#55548"
  - "#54934"
cluster_refs:
  - "#54900"
  - "#55001"
  - "#55487"
  - "#54647"
  - "#55018"
  - "#55742"
  - "#54838"
  - "#56116"
  - "#55548"
  - "#54934"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.682Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 241

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #54900 fix(delivery-queue): skip stale first-attempt entries during startup recovery

- bucket: needs_proof
- author: Drickon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the gateway restarts, the delivery queue replays pending entries from previous runs. This is the correct behavior for messages that genuinely failed to send (network errors, provider downtime, etc.). However, messages that were *enqueued but no

### #55001 Fix /queue steer directive

- bucket: needs_proof
- author: changergosum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The hasInlineDirective block unintentionally strips /queue steer and other directives that accompany a prompt. This preserves those directives. ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Sending to chat "/queue steer prompt" doesn't wor

### #55487 fix(gateway): survive transient network/TLS errors in uncaughtException handler

- bucket: needs_proof
- author: sfwn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `uncaughtException` handler exits unconditionally on any error, but transient network/TLS errors (e.g. `Client network socket disconnected before secure TLS connection was established`) are non-fatal I/O failures that should not crash the gatewa

### #54647 Fix ACP session model reporting in sessions list

- bucket: needs_proof
- author: cyan-ember
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-10T05:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - read the ACP runtime model from session entry ACP metadata when resolving session model identity - avoid falling back to the configured default model for ACP session rows when no explicit ACP model is known - add regression coverage for ACP sessio

### #55018 fix: avoid O(N²) shallow-copy in mapSensitivePaths schema traversal

- bucket: needs_proof
- author: xdhuangyandi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:03:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `mapSensitivePaths` performed `{ ...hints }` shallow copy on every recursive call while traversing the Zod schema tree, resulting in O(N²) allocation overhead. - **Why it matters:** For the full `OpenClawSchema` tree (hundreds of node

### #55742 feat(plugins): inject execute context (agentId) into plugin tool calls

- bucket: needs_proof
- author: justinjkline
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-10T05:03:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Author: 📐 Drew Prints** (`mcfiddles_architect_51132`) ## Problem Plugin tools that need the calling agent's identity (e.g. `platform_tasks_complete`, `platform_comms_inbox`) have no reliable way to resolve `agentId` at execute time. The plugin tool factory 

### #54838 Control UI: add toggle to expand tool call output by default in webchat (fixes #54478)

- bucket: needs_proof
- author: dingtao416
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:03:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** In the webchat (Control UI), tool call output is always collapsed by default. Users must manually click to expand each output, which is inconvenient when debugging or tracking agent workflows. - **Why it matters:** The TUI already sup

### #56116 Improve Feishu streaming visibility and filter scratchpad text

- bucket: needs_proof
- author: mattclawcn
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:04:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Upstream Draft: Feishu IM Long-Task Visibility ## Issue Draft ### Title Feishu IM long-task visibility: status footer, last activity, completion confirmation, and scratchpad suppression ### Summary When OpenClaw is used through Feishu IM, long-running agent 

### #55548 fix: include message_id in Telegram callback_query data (#55462)

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:04:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #55462 - Telegram callback_query handler now includes `callback_message_id` from the source message - Enables agents to use editMessage in response to inline button clicks ## Test plan - Send a message with inline buttons via Telegram bot - 

### #54934 Feishu: reject empty message cards

- bucket: needs_proof
- author: 08820048
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:04:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu message actions treated `card: {}` as a valid card-only payload, then forwarded it to Feishu and triggered a 400 API error. - Why it matters: proactive Feishu sends can fail when the model emits an empty card object, especially in 

