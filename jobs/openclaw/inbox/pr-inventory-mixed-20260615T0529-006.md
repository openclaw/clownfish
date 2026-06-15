---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-006
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
  - "#80967"
  - "#82435"
  - "#82349"
  - "#82520"
  - "#82536"
  - "#82561"
  - "#82577"
  - "#82530"
  - "#82505"
  - "#82373"
cluster_refs:
  - "#80967"
  - "#82435"
  - "#82349"
  - "#82520"
  - "#82536"
  - "#82561"
  - "#82577"
  - "#82530"
  - "#82505"
  - "#82373"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 6

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #80967 Plugin SDK: add host-owned structured runtime LLM

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: XL, plugin: file-transfer
- updated: 2026-05-16T03:40:57Z
- body excerpt: ## Summary - Rebase openclaw/openclaw#80203 onto current `main` after the plugin SDK/mainline drift. - Keep the host-owned `api.runtime.llm.completeStructured(...)` runtime lane with JSON/schema validation, optional image input, model/agent/profile trust gates

### #82435 fix: broadcast tool result transcript updates

- bucket: stale_unassigned
- author: papayachat
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied
- updated: 2026-05-16T06:54:47Z
- body excerpt: ## Summary - Problem: `toolResult` messages were persisted to session JSONL but did not emit transcript update events. - Why it matters: Realtime clients could see tool calls start, but miss completion updates until session history was reloaded. - What changed

### #82349 feat(skills-setup): add skill setup hook plugin

- bucket: stale_unassigned
- author: alexminza
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: mock-only-proof
- updated: 2026-05-16T07:30:18Z
- body excerpt: ## Summary - Problem: OpenClaw issue #80213 asks for skill author-defined setup hooks; this PR implements the behavior as a bundled plugin instead of adding setup execution directly to core. - Why it matters: skills that need local setup need a controlled, adm

### #82520 fix: inject compaction summary into post-compaction context for seamless task continuation

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof
- updated: 2026-05-16T09:22:17Z
- body excerpt: ## Problem After compaction, agents **lose task context and restart instead of continuing**. The post-compaction system message only injected AGENTS.md sections with instructions to "Run your Session Startup sequence", causing agents to reinitialize rather tha

### #82536 perf: skip packageManager.resolve() by loading extensionFactories directly

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof
- updated: 2026-05-16T10:38:22Z
- body excerpt: ## Summary This PR eliminates the 5-9 second `packageManager.resolve()` overhead on every embedded run by skipping `reload()` and loading inline `extensionFactories` directly. ## Problem The previous approach (PR #82523, now closed) attempted to cache `Default

### #82561 feat(commands): add /long to fork long-running tasks into a detached subagent

- bucket: stale_unassigned
- author: gado-ships-it
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: mock-only-proof
- updated: 2026-05-16T11:53:44Z
- body excerpt: ## Summary - **Problem:** Long-running tool calls (deploys, broad test runs, slow web-scraping, multi-file refactors) are easy to start without realizing they'll exceed the conversation turn's no-output watchdog and get killed mid-run, losing all progress and 

### #82577 feat: show user-installed channel plugins in openclaw configure

- bucket: needs_proof
- author: lukum21yandex-bit
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, size: XS, triage: external-plugin-candidate, triage: needs-real-behavior-proof
- updated: 2026-05-16T13:54:12Z
- body excerpt: ## Summary When a user installs a channel plugin (third-party, origin "global"), `openclaw configure` does not show it — it only displays channels from the bundled `channel-catalog.json` (17 built-in channels). This PR adds `listAllChatChannels()` which includ

### #82530 fix(feishu): restore visible replies for text commands in DMs

- bucket: ready_for_maintainer
- author: haonancool
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient
- updated: 2026-05-16T14:18:41Z
- body excerpt: ## Summary - Problem: Feishu DM text commands such as `/models` were processed after the upgrade but produced no visible reply. - Why it matters: command turns silently looked broken in Feishu even when the gateway received and handled them. - What changed: ma

### #82505 fix: Canvas WebSocket creation in browser context silently swallows...

- bucket: stale_unassigned
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2
- updated: 2026-05-16T16:38:01Z
- body excerpt: ## Summary - Problem: In `extensions/canvas/src/host/a2ui-shared.ts` (injected into HTML via `injectCanvasLiveReload()`), the WebSocket connection to the canvas host is created inside a `try {} catch {}` block (lines 54-62). If the WebSocket construction throw

### #82373 Feature/pr 21b normal mode startup channel backoff

- bucket: stale_unassigned
- author: software-dev12
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, scripts, size: XL, proof: supplied, dependencies-changed, P1
- updated: 2026-05-16T18:08:31Z
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: normal-mode gateway startup could appear opaque or indefinitely delayed when channel startup was slow, failed, or deferred behind sidecar startup work. - Why it matters: operators need startup-

