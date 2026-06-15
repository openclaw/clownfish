---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-040
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
  - "#77843"
  - "#77774"
  - "#77313"
  - "#77290"
  - "#76666"
  - "#76631"
  - "#76618"
  - "#76617"
  - "#76479"
  - "#75679"
cluster_refs:
  - "#77843"
  - "#77774"
  - "#77313"
  - "#77290"
  - "#76666"
  - "#76631"
  - "#76618"
  - "#76617"
  - "#76479"
  - "#75679"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 40

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77843 fix: gracefully handle broken provider modules in media understanding registry

- bucket: needs_proof
- author: Clausinho
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:32:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a bundled provider module (e.g. codex) has unresolved imports in Nix builds — specifically `Cannot find package 'openclaw'` imported from `codex/provider.js` — the call to `resolvePluginCapabilityProviders()` in `buildMediaUnderstandingRegistry

### #77774 feat: redesign control overview dashboard

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-29T06:32:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - adds a two-column overview dashboard layout with a sticky status rail - surfaces gateway health, channels, sessions, runs, skills, cron, hooks, and attention counts - keeps rail controls clickable so summary stats jump to the relevant Control sect

### #77313 Fix/nodes paired token row responsive

- bucket: stale_unassigned
- author: galuis116
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S
- gitcrawl snapshot updated: 2026-05-29T06:32:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #77290 docs(plugins): add module-level documentation for plugin registry and API builder

- bucket: stale_unassigned
- author: 34262315716
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S
- gitcrawl snapshot updated: 2026-05-29T06:32:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds meaningful JSDoc annotations to two core plugin system files that currently have almost no comments despite being critical infrastructure: ### Changes **`src/plugins/api-builder.ts`** (+50 lines) - Module-level doc explaining the "parti

### #76666 fix(memory, builtin backend): eagerly preload session transcript listeners at gateway startup

- bucket: needs_proof
- author: buyitsydney
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:32:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary (scope narrowed to builtin backend per Codex review) Eagerly preload `MemoryIndexManager` at gateway startup for every agent whose `agents.defaults.memorySearch.sources` (or per-agent overlay) includes `"sessions"`, **when using the builtin session-

### #76631 docs(prometheus): warn that plugins.allow is strict-mode

- bucket: stale_unassigned
- author: RayWoo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS
- gitcrawl snapshot updated: 2026-05-29T06:33:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `<Warning>` callout to the Prometheus Quick Start clarifying that `plugins.allow` is **strict-mode** — when set, only listed plugins are eligible to load. The current Quick Start example shows `allow: ["diagnostics-prometheus"]` without warni

### #76618 fix(comfy): match Comfy Cloud API completion status values

- bucket: stale_unassigned
- author: 547895019
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS
- gitcrawl snapshot updated: 2026-05-29T06:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Comfy Cloud API returns `"success"` for completed workflows, but OpenClaw only checked for `"completed"`. This caused workflows that succeeded on Comfy Cloud to time out after 300s in OpenClaw. Additionally, Comfy Cloud uses `"error"` as a terminal 

### #76617 fix(zalouser): split messages at line boundaries instead of mid-word

- bucket: stale_unassigned
- author: vinhnguyenthanhdn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: XS
- gitcrawl snapshot updated: 2026-05-29T06:33:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Long bot responses were split mid-word because the default chunk mode cut at exactly 2000 characters with no regard for word or sentence boundaries. --- ## Problem `DEFAULT_TEXT_CHUNK_MODE = "length"` cuts the outgoing message at exactly the 2000-char

### #76479 docs: add macOS setup notes and common setup troubleshooting

- bucket: stale_unassigned
- author: Sujabaral
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: docs-discoverability, triage: refactor-only
- gitcrawl snapshot updated: 2026-05-29T06:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Added macOS setup notes and a common troubleshooting section to improve onboarding for new contributors. ## Changes - Added macOS setup instructions (Xcode tools, Node, Homebrew) - Added common setup errors section - Improved clarity for new develop

### #75679 fix(agents): canonicalize subagent list requester keys

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof
- gitcrawl snapshot updated: 2026-05-29T06:33:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

