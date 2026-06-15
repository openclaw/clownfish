---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-026
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
  - "#80710"
  - "#80670"
  - "#80632"
  - "#84908"
  - "#84140"
  - "#80965"
  - "#81045"
  - "#80985"
  - "#80982"
  - "#80957"
cluster_refs:
  - "#80710"
  - "#80670"
  - "#80632"
  - "#84908"
  - "#84140"
  - "#80965"
  - "#81045"
  - "#80985"
  - "#80982"
  - "#80957"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 26

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80710 fix: add @zed-industries/codex-acp to minimumReleaseAgeExclude

- bucket: needs_proof
- author: rickjan130
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-27T05:00:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `@zed-industries/codex-acp` and its platform-specific packages (`@zed-industries/codex-acp-darwin-arm64`, `-x64`, `-linux-arm64`, etc.) are transitive dependencies that release frequently. The `minimumReleaseAge: 2880` (48-hour) guard in `pnpm-works

### #80670 fix(gateway): reduce WebChat ingress latency

- bucket: ready_for_maintainer
- author: AndyTane
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-27T05:01:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist WebChat user turns to the active session JSONL immediately after `chat.send` ACK and before agent dispatch enters the serialized session lane. - Pass an entry-scoped suppression marker through reply options, queued followups, and the embed

### #80632 fix(slack): route mission replies to canonical threads

- bucket: ready_for_maintainer
- author: Chw5722
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-27T05:01:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root Cause Hermes carries Slack thread affinity as first-class routing state. OpenClaw only propagated Slack thread IDs through some paths. For mission messages in Slack channels, `replyToMode=off` could leave `MessageThreadId` unset, so final replies, stre

### #84908 feat(slack): support reply broadcast directive

- bucket: needs_proof
- author: guidsen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, agents, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-27T09:27:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - adds `[[slack_reply_broadcast]]` / `[[reply_broadcast]]` directive parsing and streaming propagation - forwards Slack thread replies with `reply_broadcast: true` through outbound send paths and Slack action handling - adds targeted tests for direc

### #84140 chore: format oxfmt-touched files

- bucket: ready_for_maintainer
- author: tw19880217-creator
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, scripts, commands, agents, size: M, extensions: kimi-coding, extensions: qa-lab, extensions: memory-wiki, triage: refactor-only, triage: dirty-candidate, extensions: deepinfra, proof: supplied, proof: sufficient, extensions: oc-path, extensions: google, extensions: openrouter, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-27T21:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Apply oxfmt formatting to files reported by the formatter - Add the bundled viewer runtime asset to oxfmt ignores to avoid generated diffs - Keep extensions/diffs/assets/viewer-runtime.js unchanged Verification: - pnpm format:check - pnpm check:chan

### #80965 fix(channels): keep groupPolicy=open loose when groups dict has per-group overrides

- bucket: ready_for_maintainer
- author: voicewitness
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-28T04:53:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `channels.<provider>.groupPolicy: "open"` is documented as *"Groups bypass allowlists; mention-gating still applies."* (see `docs/channels/groups.md`), but `resolveChannelGroupPolicy` flipped the channel into allowlist mode the moment `channels.<p

### #81045 chore(lint): enable no-zero-fractions

- bucket: ready_for_maintainer
- author: DragunovX16
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, extensions: memory-core, scripts, agents, size: S, extensions: minimax, extensions: huggingface, extensions: volcengine, extensions: kilocode, extensions: arcee, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-28T04:54:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: #80504 tracks enabling the remaining readability lint rules in cleanup batches; `unicorn/no-zero-fractions` still had 52 hits on current `main`. - Why it matters: enabling small zero-drift lint batches keeps readability policy moving with

### #80985 fix(cron): reject announce->webchat at create time and runtime

- bucket: ready_for_maintainer
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-28T04:54:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Reject `delivery.mode="announce"` + `delivery.channel="webchat"` cron configurations at three layers so the misconfiguration never reaches the runtime delivery path with the generic "Channel is required (no configured channels detected)" error. 1. **CL

### #80982 feat(plugin-sdk): registerChatStreamRenderer for plugin-owned inline UI

- bucket: needs_proof
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: L, triage: dirty-candidate, triage: external-plugin-candidate, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T04:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds a narrow SDK/Gateway seam for plugin-owned inline chat-stream UI without making plugins mutate core chat rendering directly. Reviewers can treat it as a descriptor/projection feature: plugins register chat-stream renderers, the Gateway projects or

### #80957 fix: refresh status context window after model switch

- bucket: ready_for_maintainer
- author: chenyanchen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-28T04:55:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Ignore stale persisted contextTokens when /status sees a selected/default model change that is not an active fallback. - Preserve equivalent runtime aliases while doing the stale-context check, so CLI runtime aliases keep their live context window

