---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-239
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
  - "#55874"
  - "#54585"
  - "#55901"
  - "#55592"
  - "#55542"
  - "#55973"
  - "#55390"
  - "#54764"
  - "#55477"
  - "#55519"
cluster_refs:
  - "#55874"
  - "#54585"
  - "#55901"
  - "#55592"
  - "#55542"
  - "#55973"
  - "#55390"
  - "#54764"
  - "#55477"
  - "#55519"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.682Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 239

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #55874 feat(config): add safety posture presets for sandbox and session isolation

- bucket: needs_proof
- author: JasonOA888
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: moonshot, extensions: kilocode, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:01:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements #7827 Adds SafetyPostureConfig with development/balanced/strict presets, agent tool profiles (full/limited/public), and sandbox presets for secure-by-default installations. Extracted from #34185 (split into focused PRs).

### #54585 Agents: add compaction modes (warn, error, none) with proactive conte…

- bucket: needs_proof
- author: fierai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: Users often lose important conversation history due to aggressive auto-compaction, or they encounter cryptic provider-specific "context window exceeded" errors when the window is full. - Why it matters: Advanced users need explicit control o

### #55901 feat(irc): support markdown messages via draft/multiline

- bucket: needs_proof
- author: grepsuzette
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: irc, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for sending markdown-formatted messages over IRC using the `draft/multiline` CAP extension. This preserves newlines in bot responses, allowing IRC clients to properly render markdown content. ## Motivation OpenClaw bots typically genera

### #55592 fix(ui): sync message delete to session transcript backend

- bucket: needs_proof
- author: Hou-Yufan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, app: web-ui, gateway, scripts, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Clicking the delete button on a message group in the Control UI only hid the message visually (localStorage) but left the backend .jsonl transcript untouched. The AI could still see the "deleted" content on the next turn. - **Why it m

### #55542 chore: replace sharp with @napi-rs/image to simplify deps

- bucket: needs_proof
- author: Brooooooklyn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, agents, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-10T05:02:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #55973 feat: show Created and Last Used timestamps in devices list

- bucket: needs_proof
- author: shortstack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T05:02:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds **Created** and **Last Used** columns to the `openclaw devices list` paired table - Uses `formatRelativeTimestamp` with `dateFallback: true` — recent timestamps show as "5m ago" / "3d ago", older ones as "Mar 5" - "Last Used" derives the most

### #55390 WIP feat(cli): sync local schema artifacts on startup

- bucket: needs_proof
- author: kvokka
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:02:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: JSON schema for the config is should be manually set for new and existing configs and updated afterwards - Why it matters: It's inconvenient to bother about it - What changed: Added local json 

### #54764 sessions: recover orphaned subagent cleanup

- bucket: needs_proof
- author: CyberSpencer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:02:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route orphan-prune and kill cleanup through the same final cleanup bookkeeping - make delete-mode terminated runs idempotent and remove stale registry entries reliably - keep deferred cleanup retries alive after orphan pruning instead of silently 

### #55477 feat: stamp session_key, message_channel, context_limit into LiteLLM request metadata

- bucket: needs_proof
- author: Kyzcreig
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem OpenClaw tracks session context internally (session key, channel, context token budget) but doesn't forward it to outbound LiteLLM requests. This forces downstream tooling — spend alerting, channel attribution — to correlate calls via fragile timest

### #55519 Fix Feishu group session orchestration fallbacks

- bucket: needs_proof
- author: aaaw10055-pixel
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `sessions_send` to target an `agentId` by resolving the most recent visible session - ignore ACP-only `streamTo` when `sessions_spawn` is running with `runtime: "subagent"` - tighten the agent system prompt guidance for long-running work in 

