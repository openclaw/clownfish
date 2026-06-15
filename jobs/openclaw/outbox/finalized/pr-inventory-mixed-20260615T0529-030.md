---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-030
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
  - "#87831"
  - "#87764"
  - "#87530"
  - "#87434"
  - "#87601"
  - "#87578"
  - "#87635"
  - "#87592"
  - "#87437"
  - "#87526"
cluster_refs:
  - "#87831"
  - "#87764"
  - "#87530"
  - "#87434"
  - "#87601"
  - "#87578"
  - "#87635"
  - "#87592"
  - "#87437"
  - "#87526"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 30

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87831 perf: skip manifest normalization in status summary

- bucket: stale_unassigned
- author: ACSKamloops
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-29T05:09:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `status`/`status --json` builds model labels for configured and persisted session rows in a shallow read-only path. - That path already avoids plugin/runtime model normalization, but it still let manifest model-id 

### #87764 feat: support owner-scoped ClawHub skill refs

- bucket: maintainer_owned
- author: Patrick-Erichsen
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, maintainer, size: L, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:09:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Support owner-qualified ClawHub skill refs such as `@openclaw/demo` across OpenClaw skill install/update/verify flows. - Pass `ownerHandle` through ClawHub detail, download, resolve, and install calls when the user or stored origin metadata provid

### #87530 fix(discord): account-scoped voice groups + delayed autoJoin safety net

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-05-29T05:10:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Scopes `@discordjs/voice` connections by account ID (`group: "openclaw:<accountId>"`) to prevent multi-bot connection collisions - Delays initial autoJoin by 6s so voice gateway state settles after READY/RESUMED before joining - Adds 8s and 75s de

### #87434 [codex] Expire Telegram message-cache plugin state

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: S, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-05-29T05:10:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gives Telegram prompt-context message-cache plugin-state rows a seven-day TTL - normalizes existing no-expiry rows in a TTL-enabled namespace on the next write so upgraded `telegram.message-cache` rows can age out too - preserves sibling namespace

### #87601 fix(docs): render onboarding CLI info callout

- bucket: stale_unassigned
- author: Muggle-akko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-29T05:10:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the onboarding docs page renders the CLI step `<Info>` callout with garbled text on `/start/onboarding`. - Why it matters: readers can see mojibake instead of the optional-step note during onboarding. - What changed: rewrote the inline `<

### #87578 skills: add cerver — sandboxed compute, cross-device memory, vaulted secrets

- bucket: needs_proof
- author: eyal-gor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:10:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `cerver` skill: a thin wrapper that lets a local OpenClaw delegate work to [cerver](https://cerver.ai) — one API for sandboxed compute (e2b / vercel / cloudflare / a registered local relay), persistent cross-device transcript memory, and prov

### #87635 fix: forward quiet channel-owned progress callbacks in group chats

- bucket: needs_proof
- author: GarlicGo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:10:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #87612 by forwarding channel-owned progress callbacks in group and group-channel sessions even when `/verbose off` suppresses default tool-progress text. This keeps native channel progress surfaces working for group chats while preserving the ex

### #87592 feat(sidebar): add Session Reset button alongside New Session

- bucket: needs_proof
- author: apoapostolov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-05-29T05:11:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a **Reset session** button in the sidebar directly below the existing **New session** button. Unlike "New session" which creates a new session key, this button reuses the current session key by calling `sessions.reset` — clearing chat history w

### #87437 draft: trusted Mantis proof head for #87425

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:12:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Temporary trusted same-repo PR head for running secret-bearing Mantis Telegram Live proof for #87425. Do not merge. Evidence should be posted to #87425; this draft can be closed after the proof workflow has validated the candidate ref.

### #87526 feat(volcengine): add allowPrivateNetwork option for TTS behind TUN proxy

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: volcengine, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:12:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `allowPrivateNetwork` boolean option to Volcengine TTS provider to support TUN proxy stacks that use RFC 2544 fake-IP ranges for DNS resolution. **Security approach (revised from original PR):** Instead of passing the broad `allowPrivateNetwork

