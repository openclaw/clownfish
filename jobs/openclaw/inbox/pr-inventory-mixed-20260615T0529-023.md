---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-023
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
  - "#85748"
  - "#56904"
  - "#86085"
  - "#79913"
  - "#55828"
  - "#59842"
  - "#59986"
  - "#58367"
  - "#58378"
  - "#59705"
cluster_refs:
  - "#85748"
  - "#56904"
  - "#86085"
  - "#79913"
  - "#55828"
  - "#59842"
  - "#59986"
  - "#58367"
  - "#58378"
  - "#59705"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 23

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #85748 feat(doctor): warn early when session store size will slow doctor

- bucket: ready_for_maintainer
- author: joeyfrasier
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- updated: 2026-05-24T14:54:37Z
- body excerpt: ## Symptom On installations whose per-agent session store has grown past `session.maintenance.maxEntries`, or whose sessions directory has accumulated thousands of transcript files, `openclaw doctor` spends most of its wall-clock inside `doctor:state-integrity

### #56904 feat(plugins): add guard delivery and subagent review hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-24T15:53:17Z
- body excerpt: ## Summary - Problem: the current hook surface can gate tool execution, but it cannot synchronously guard tool results before the agent sees them and it has no explicit pre-spawn / pre-return subagent review phases. - Why it matters: phase 1-3 guard work needs

### #86085 i18n(zh-TW): align Control UI locale with Taiwan-standard terminology

- bucket: ready_for_maintainer
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- updated: 2026-05-24T15:57:39Z
- body excerpt: ## Summary The `zh-TW` Control UI locale on `main` still uses a number of mainland-China terms that are not idiomatic Traditional Chinese (Taiwan). Key parity is already complete (1228/1228), so this is a focused **terminology** pass — no key additions, no str

### #79913 fix(config): apply SPAWN_ALLOWLIST env for sessions_spawn (#79490)

- bucket: ready_for_maintainer
- author: Jefsky
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-24T16:36:53Z
- body excerpt: ## Summary - Applies `OPENCLAW_SPAWN_ALLOWLIST` or `SPAWN_ALLOWLIST` during config load → `agents.defaults.subagents.allowAgents`. - Supports `*`, comma-separated ids, JSON string arrays. Env wins when set (Docker-focused). Fixes #79490 ## Test plan - [x] `pnp

### #55828 feat(msteams): add native plugin interactivity parity

- bucket: maintainer_owned
- author: Evizero
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: msteams, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-24T17:21:21Z
- body excerpt: ## Summary DO NOT MERGE YET -- for review - Problem: OpenClaw's Teams channel could send messages/cards, but the native plugin interactivity path still stopped short of Teams. The Codex app-server Teams work therefore had to rely on a command bridge instead of

### #59842 fix(gateway): cap authenticated websocket identities

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: jacobtomlinson
- labels: gateway, maintainer, size: M, rating: 🌊 off-meta tidepool
- updated: 2026-05-24T18:21:52Z
- body excerpt: ## Summary - Cap authenticated gateway websocket sessions per device identity instead of moving every successful handshake into an unbounded shared client set. - Keep device-less authenticated sessions inside the existing pre-auth budget so shared-auth clients

### #59986 refactor(plugins): add lane-oriented channel interface

- bucket: maintainer_owned
- author: huntharo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: msteams, channel: slack, channel: telegram, maintainer, channel: feishu, size: XL, rating: 🌊 off-meta tidepool
- updated: 2026-05-24T18:22:43Z
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: plugin-facing channel runtime and interactive APIs were still shaped around channel-specific surfaces, which pushed plugins toward Telegram/Discord/Slack-specific logic. - Why it matters: that 

### #58367 Gateway: preserve approved scope baseline during pairing

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-05-24T18:42:09Z
- body excerpt: ## Summary - preserves the approved operator scope baseline during silent pairing flows - requires explicit approval before a fresh shared-auth device gains newly requested operator scopes - adds regression coverage for fresh-device pairing and reconnect behav

### #58378 macOS: confirm discovered gateway trust

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: macos, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-24T18:42:15Z
- body excerpt: ## Summary - require an explicit trust step before the macOS app applies discovered remote gateway selections - pin discovered direct WSS endpoints and tighten SSH host key checks for remote macOS flows ## Changes - added a macOS discovery trust support path f

### #59705 [codex] improve parallels windows smoke logging

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: M, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- updated: 2026-05-24T19:10:39Z
- body excerpt: ## What changed - added explicit Windows update phase markers in the npm-update Parallels helper so outer progress output reflects guest work - added guarded Windows helper launch retries plus incremental guest-log draining for the npm-update wrapper - applied

