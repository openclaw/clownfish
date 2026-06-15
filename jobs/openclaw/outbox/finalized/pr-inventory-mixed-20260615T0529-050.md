---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-050
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
  - "#74733"
  - "#74799"
  - "#75141"
  - "#73888"
  - "#74734"
  - "#73989"
  - "#75050"
  - "#72987"
  - "#54831"
  - "#85478"
cluster_refs:
  - "#74733"
  - "#74799"
  - "#75141"
  - "#73888"
  - "#74734"
  - "#73989"
  - "#75050"
  - "#72987"
  - "#54831"
  - "#85478"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 50

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74733 fix(ui): stabilize WebChat message ordering

- bucket: stale_unassigned
- author: VladyslavLevchuk
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T05:03:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebased PR #74733 onto current `origin/main` and replaced the old XL patch with a focused WebChat reliability fix. - Keep optimistic user messages visible when a stale in-flight `chat.history` response resolves after a local send. - Avoid clearing

### #74799 Add per-session runtime envelopes

- bucket: needs_proof
- author: trialanderrorstudios
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, scripts, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T05:04:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #74632 ## Summary - add an optional `envelope` object to `sessions.create` and `sessions.patch` - persist the envelope on `SessionEntry`, with `sessions.patch` replacing it and `envelope: null` clearing it - enforce the persisted envelope before tool exec

### #75141 fix(gateway): silence mcp loopback conflict warn for typed unions

- bucket: stale_unassigned
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T05:04:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MCP loopback flattens TypeBox union schemas into a single object so each tool publishes one parameter shape. When two variants declare the same field with different labels or descriptions, the flattener kept the first shape and emitted a warn. W

### #73888 fix(daemon): recover systemctl user bus env for gateway commands

- bucket: needs_proof
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, clawsweeper, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T05:04:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - derive missing Linux XDG_RUNTIME_DIR and DBUS_SESSION_BUS_ADDRESS for systemctl --user spawns used by gateway status/install - preserve the intended user scope when synthesizing env so sudo/root wrappers do not accidentally operate on the wrong ac

### #74734 fix(config): migrate legacy ACP stream keys on load

- bucket: needs_proof
- author: BlueBirdBack
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T05:05:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #35957 by porting the stale ACP stream legacy-config migration into the current modular runtime migration registry. Migrated: - `acp.stream.maxTurnChars` → `acp.stream.maxOutputChars` - `acp.stream.maxToolSummaryChars` → `acp.stream.maxSession

### #73989 fix(health-monitor): add reconnect grace for gateway reconnects

- bucket: stale_unassigned
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, rating: 🌊 off-meta tidepool, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-05-30T06:03:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Repairs the existing #45712 branch rather than replacing it. Summary: - add shared reconnectGraceMs/lastDisconnectAt handling so running-but-recently-disconnected channels are not restarted before provider reconnect grace expires - consume typed lastDisconnect

### #75050 docs(feishu): add mixed proxy troubleshooting

- bucket: needs_proof
- author: kunpeng-ai-lab
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-30T06:08:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds Feishu/Lark troubleshooting guidance for mixed proxy environments. - Documents the case where model-provider traffic needs `HTTP_PROXY` / `HTTPS_PROXY`, but Feishu/Lark official endpoints should go direct via `NO_PROXY`. - Includes PowerShell

### #72987 docs(compaction): document reserveTokensFloor default (20,000 tokens)

- bucket: needs_proof
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-30T11:57:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `reserveTokensFloor` under `agents.defaults.compaction` is used in `src/auto-reply/reply/agent-runner-memory.ts` (lines 393–395) with a fallback default of 20 000 tokens, but the configuration reference gave no indication of this default 

### #54831 fix: validate hooks.token requirement at config.patch time

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T12:16:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `hooks.enabled: true` is set via `config.patch` without `hooks.token`, the gateway fails on startup with an unclear error message (`hooks.enabled requires hooks.token`). Users have no guidance on how to fix it. ## Fix 1. **Config-time validatio

### #85478 fix(slack): soften benign search no-result progress

- bucket: maintainer_owned
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: matrix, channel: msteams, channel: slack, channel: telegram, agents, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-30T16:35:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Slack progress for optional local context searches no longer presents clean `rg` no-match results as scary exit-code failures. Direct `rg` exit 1 and `find ... | xargs rg ...` exit 123 now carry a narrow `benign_no_result` classification through exec c

