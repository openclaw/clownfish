---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260616T015330-043
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
  - "#90077"
  - "#90054"
  - "#90034"
  - "#89650"
  - "#89384"
  - "#89381"
  - "#89360"
  - "#89353"
  - "#89346"
  - "#89340"
cluster_refs:
  - "#90077"
  - "#90054"
  - "#90034"
  - "#89650"
  - "#89384"
  - "#89381"
  - "#89360"
  - "#89353"
  - "#89346"
  - "#89340"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-16T01:53:30.346Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 43

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90077 fix(plugins): guard provider discovery credential metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:55:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider-discovery credential probing so a malformed plugin row with unreadable `setup` or `providerAuthEnvVars` metadata is treated as having no env credential evidence. - Add a provider-discovery regression covering poisoned credential met

### #90054 fix(gateway): isolate method descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin/channel gateway method descriptor reads before listing method names or scopes - skip malformed descriptor rows while preserving healthy method discovery and QR-login provider resolution - keep plugin descriptor registry construction r

### #90034 fix(gateway): isolate session action scope lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a guarded session-action registration lookup helper for gateway authorization and dispatch. - Skip unreadable plugin session-action rows while preserving the default write-scope behavior for missing, empty, or sparse `requiredScopes`. - Cover

### #89650 fix(plugins): guard startup provider contracts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:54:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guards startup provider contract reads so an unreadable manifest `contracts` property cannot abort provider startup planning - reuses the installed-index contract snapshot when a healthy configured web search provider is selected - adds regression

### #89384 fix(plugins): isolate unreadable plugin tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Plugin tool descriptor capture and callback wrapping could read plugin-owned tool fields before malformed-tool isolation ran. - A tool with a throwing `parameters`, `description`, `execute`, `label`, or `displaySum

### #89381 fix(plugin-sdk): guard provider tool schema traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Provider tool-schema compatibility hooks could throw while walking plugin-provided schemas with hostile accessors or proxy arrays. - A single malformed schema could abort provider normalization/inspection before di

### #89360 refactor: add QMD session artifact identity mapping

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:53:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an internal QMD session artifact identity mapping so generated QMD Markdown session artifacts resolve back to stable transcript memory/session identity before deprecated filename fallback. ## Why Path 3 needs QMD search hits to stop treating gener

### #89353 fix(plugin-sdk): guard provider schema inspection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a provider schema inspection crash when a nested tool-parameter schema property is unreadable. - Converts throwing child schema getters into stable unsupported-schema diagnostics. - Keeps sibling schema traversal intact for Gemini/DeepSeek p

### #89346 fix(agents): guard compact reserved tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - collect compact bundled-runtime reserved tool names through a guarded helper so unreadable tool-name accessors cannot abort setup - keep readable sibling names reserved for MCP/LSP collision avoidance while leaving malformed descriptors for the ex

### #89340 fix(agents): guard bootstrap tool name lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard embedded-attempt workspace-bootstrap file-access detection against unreadable raw tool names - keep bootstrap routing able to see a healthy `read` sibling after a malformed descriptor is skipped later by schema projection ## Verification Beh
