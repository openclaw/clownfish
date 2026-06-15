---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-008
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
  - "#83203"
  - "#83240"
  - "#83363"
  - "#83436"
  - "#83446"
  - "#83295"
  - "#83537"
  - "#83646"
  - "#83536"
  - "#83715"
cluster_refs:
  - "#83203"
  - "#83240"
  - "#83363"
  - "#83436"
  - "#83446"
  - "#83295"
  - "#83537"
  - "#83646"
  - "#83536"
  - "#83715"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 8

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83203 fix(gateway): separate finish_reason from content chunks in streaming

- bucket: needs_proof
- author: niuma996
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2
- gitcrawl snapshot updated: 2026-05-17T17:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split writeAssistantContentChunk (always finish_reason: null) from a new writeAssistantFinishChunk (empty delta, finish_reason: stop) - Emit the finish chunk from the lifecycle end handler, the error path, and the finally fallback path - Updated s

### #83240 Resolve model aliases for agent run overrides

- bucket: needs_proof
- author: brentdau
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, agents, size: S, triage: needs-real-behavior-proof, P2, impact:auth-provider
- gitcrawl snapshot updated: 2026-05-17T19:11:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - resolve explicit agent run model overrides through the configured model alias index before falling back to provider/model parsing - preserve provider+model override behavior when both fields are supplied - add a regression case for an alias-only r

### #83363 fix(outbound): log failDelivery rejection on bestEffort partial failure (#83113)

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, impact:message-loss, rating: 🧂 unranked krab
- gitcrawl snapshot updated: 2026-05-18T04:43:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83113 ## Problem In `src/infra/outbound/deliver.ts` (around line 1298), when best-effort partial delivery occurs the queue entry is marked failed via `failDelivery()` so the retry count is incremented. The previous code wrapped that call in `.catch(() 

### #83436 fix(agents): rethrow EmbeddedAttemptSessionTakeoverError before model fallback

- bucket: needs_proof
- author: cael-dandelion-cult
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, impact:session-state, impact:auth-provider, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-05-18T05:14:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `EmbeddedAttemptSessionTakeoverError` (the embedded-attempt fingerprint guard that fires when the session JSONL changes during the released-lock window) is currently routed through `runWithModelFallback` as an ordinary candidate failure. Every model

### #83446 feat(mattermost): thread follow-ups, threadId fallback, and root-post resolution

- bucket: needs_proof
- author: tread-guild
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, triage: needs-real-behavior-proof, P2, impact:message-loss, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-18T05:22:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Three Mattermost integration issues affecting thread-based conversations: 1. **Thread follow-ups:** The bot could not reply in a thread it already participated in without being @mentioned again. Every follow-up message required a new mention. 2. **T

### #83295 perf(agents): bootstrap context cache, PI model-discovery cache, auth-store option keys, tool-descriptor kill switch

- bucket: needs_proof
- author: atlaspetco
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, impact:session-state, impact:auth-provider, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-05-18T05:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Rebased follow-up to #76348. Since #76348 was filed, upstream landed the simpler half it proposed — the per-session bootstrap-files snapshot cache (`src/agents/bootstrap-cache.ts`'s `getOrLoadBootstrapFiles`). This PR isolates and re-bases the **still-relevant

### #83537 codex: log app-server startup close diagnostics

- bucket: needs_proof
- author: flashosophy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-18T09:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a structured diagnostic payload for Codex app-server startup-close retry/exhaustion logs. - Include run/session/model/auth/workspace/thread context so startup exits can be diagnosed without guessing which agent/model/session launched the app-s

### #83646 fix(gateway/boot): classify BOOT.md turns as boot-run sessions

- bucket: needs_proof
- author: happydog-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, extensions: memory-core, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-18T15:02:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Boot-check turns currently get written into agents' main session transcripts, which causes them to flow into dreaming session-corpus ingestion and short-term recall. The polluting effect compounds across gateway restarts: in a real openclaw install,

### #83536 test(qa-lab): trace Slack RTT ping pong

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: XL, extensions: qa-lab, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-18T15:51:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Switch the Slack live canary to a ping/pong marker and measure RTT from Slack accepted timestamps when available. - Record observer lag, poll counts, gateway RSS samples, gateway phase traces, and optional heap checkpoints for Slack live runs. - Add 

### #83715 [codex] Guard doctor repairs for newer configs

- bucket: needs_proof
- author: ejames-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-18T17:52:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Block `doctor --fix`, `--yes`, and gateway-token generation from applying repairs when the config was last written by a newer OpenClaw binary. - Downgrade the doctor prompter to read-only after that guard trips, so later health contributions do no

