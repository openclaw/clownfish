---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T131654-078
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
  - "#73989"
  - "#87394"
  - "#89040"
  - "#93269"
  - "#92411"
  - "#93268"
  - "#81108"
  - "#92898"
  - "#93180"
  - "#93275"
  - "#93276"
cluster_refs:
  - "#73989"
  - "#87394"
  - "#89040"
  - "#93269"
  - "#92411"
  - "#93268"
  - "#81108"
  - "#92898"
  - "#93180"
  - "#93275"
  - "#93276"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.490Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 78

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73989 fix(health-monitor): add reconnect grace for gateway reconnects

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T10:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Repairs the existing #45712 branch rather than replacing it. Summary: - add shared reconnectGraceMs/lastDisconnectAt handling so running-but-recently-disconnected channels are not restarted before provider reconnect grace expires - consume typed lastDisconnect

### #87394 docs(gateway): add optional caffeinate-wrapper note to macOS troubleshooting

- bucket: recent_active
- author: arunjeetsingh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:51:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a fourth "What to do" step in the macOS gateway troubleshooting section that just landed via 6727985365, documenting the well-established operator pattern of wrapping the gateway in `caffeinate(8)` to prevent macOS Maintenance Sleep entirely. T

### #89040 perf: avoid event-loop stall during embedded_run bootstrap-context

- bucket: recent_active
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T10:54:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix event-loop stalls during `embedded_run` bootstrap-context that block the event loop for 14-22 seconds, causing message loss. ### Root causes addressed 1. **Synchronous file I/O** — `readFileSync`/`closeSync` in workspace file loading blocks the 

### #93269 Fix tokenjuice bash results without details

- bucket: recent_active
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: tokenjuice, proof: supplied, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:42:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - compact bash/exec tool results when the tool result has command/content but missing or metadata-only details - synthesize minimal completed/failed details so the existing Tokenjuice reducer can run while preserving metadata such as truncation/full

### #92411 fix(tools): surface empty availability group diagnostics via onHiddenDiagnostic callback

- bucket: recent_active
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:42:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Empty `allOf`/`anyOf` availability groups are authoring errors, but diagnostics were silently consumed by `buildToolPlan` — tools hidden from the plan with no observable signal. - Adds `onHiddenDiagnostic` callback to `BuildToolPlanOptions`, wires

### #93268 fix(status): resolve "Vector store: unknown" on memory status fast path

- bucket: recent_active
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:43:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw memory status` without `--deep` always shows "Vector store: unknown" because the CLI fast path creates a fresh MemoryManager instance whose `vector.available` is `null` (lazy init), and the manager never calls `loadVectorExtension()` / `en

### #81108 fix(gateway): discover disk compaction checkpoints

- bucket: recent_active
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XL, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:44:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68864. - discover valid `{session}.checkpoint.<uuid>.jsonl` transcript files when `sessions.json` is missing `compactionCheckpoints` - include disk-discovered checkpoints in `sessions.list` row count/latest preview and `sessions.compaction.li

### #92898 skill_workshop: increase or make configurable the 160-byte description limit

- bucket: recent_active
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:46:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase the hardcoded `MAX_SKILL_PROPOSAL_DESCRIPTION_BYTES` constant from 160 to 500 bytes in `src/skills/workshop/service.ts` - Update the corresponding Type.String `maxLength` constraint in `src/agents/tools/skill-workshop-tool.ts` from 160 to

### #93180 fix(doctor): gate legacy Codex canonicalization on a migration plan

- bucket: recent_active
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: XL, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:46:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR replaces the closed legacy Codex/OpenAI doctor cleanup attempts with one shared migration-plan contract, and now threads that same contract through the auth repair surfaces ClawSweeper flagged. - Problem: `openclaw doctor --fix` had partiall

### #93275 #92776: fix(agents): prevent indefinite session model pinning from polluted fallback origin

- bucket: recent_active
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied
- gitcrawl snapshot updated: 2026-06-15T11:46:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix indefinite session model pinning caused by polluted `modelOverrideFallbackOrigin` fields. When the origin recorded the failing model instead of the configured primary, the snap-back probe (`resolveAutoFallbackPrimaryProbe`) returned undefined 

### #93276 fix(plugins): stop tool-discovery loads from clearing active providers

- bucket: recent_active
- author: medns
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied
- gitcrawl snapshot updated: 2026-06-15T11:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tool-discovery plugin loads run with `activate: false` and a tool-only plugin scope, so the registry they build omits provider-only plugins. - `installStandaloneRegistry` unconditionally called `setActivePluginRegistry`, so those loads replaced th

