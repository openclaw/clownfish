---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-017
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
  - "#67818"
  - "#92578"
  - "#70907"
  - "#88454"
  - "#88950"
  - "#89123"
  - "#89286"
  - "#89322"
  - "#89324"
  - "#89340"
  - "#89346"
  - "#89353"
  - "#89360"
  - "#89381"
  - "#89384"
  - "#89650"
  - "#90034"
  - "#90054"
  - "#90077"
  - "#90197"
  - "#90238"
  - "#90249"
  - "#91483"
  - "#91506"
  - "#91573"
cluster_refs:
  - "#67818"
  - "#92578"
  - "#70907"
  - "#88454"
  - "#88950"
  - "#89123"
  - "#89286"
  - "#89322"
  - "#89324"
  - "#89340"
  - "#89346"
  - "#89353"
  - "#89360"
  - "#89381"
  - "#89384"
  - "#89650"
  - "#90034"
  - "#90054"
  - "#90077"
  - "#90197"
  - "#90238"
  - "#90249"
  - "#91483"
  - "#91506"
  - "#91573"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.789Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 17

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #67818 fix(whatsapp): add QR login result codes and preflight hook

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:38:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: after #67815, WhatsApp still lacked a clean shared QR-login contract for machine-readable non-QR outcomes and a gateway preflight seam to return them before stop/start. - Why it matters: caller

### #92578 refactor(whatsapp): add inbound admission foundation

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, channel: whatsapp-web, maintainer, size: L, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:45:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a public-safe WhatsApp inbound `admission` envelope for accepted `WebInboundMessage` callbacks - build admission from the resolved ingress/access-control result and attach it in the real web inbox monitor path - keep blocked access-control res

### #70907 docs(codex): document native model lifecycle hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T15:45:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreModelRequest` / `PostModelResponse` hooks as Codex-owned command hooks - clarify that OpenClaw plugin `llm_input` / `llm_output` remain adapter-level compatibility events - call out that OpenClaw does not double-fire mode

### #88454 Store restart recovery delivery routes in SQLite

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:51:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move restart-recovery delivery route metadata into `openclaw-state` SQLite, keyed by session store path/session key with run + session ownership. - Keep runtime recovery SQLite-only; old `sessions.json` restart recovery fields are stripped from no

### #88950 fix(plugins): ignore throwing provider policy hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:51:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wraps bundled provider-policy public-artifact hooks so a throwing hook is ignored instead of poisoning provider/config resolution - logs the plugin id and hook name when a bundled policy hook fails - preserves existing no-op short-circuit semantic

### #89123 refactor: route transcript writers through session seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, scripts, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:51:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b transcript writers routes the core transcript writer/append/update helpers through the session accessor seam while preserving the current file-backed transcript behavior. Refs #88838. ## Why This keeps caller modernization separated fr

### #89286 fix(agents): guard CLI prompt tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:52:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route bundled MCP CLI prompt-tool metadata through the existing MCP loopback schema projection before hashing, system-prompt construction, and prompt-report generation. - Skip unreadable, blank, or invalid loopback prompt tool descriptors instead

### #89322 fix(ollama): skip unreadable tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: ollama, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:52:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Ollama tool name collection and tools payload projection against unreadable tool descriptors. - Preserve healthy sibling tools when a malformed descriptor is skipped. - Add focused regression coverage for unreadable descriptors in the Ollama pr

### #89324 fix(xai): skip unreadable tool payload entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, extensions: xai, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:52:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard xAI tool payload compatibility against unreadable tool/function/strict accessors. - Drop only unreadable tool payload entries while preserving healthy siblings. - Keep existing xAI `strict` stripping behavior for readable function tools. Verif

### #89340 fix(agents): guard bootstrap tool name lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard embedded-attempt workspace-bootstrap file-access detection against unreadable raw tool names - keep bootstrap routing able to see a healthy `read` sibling after a malformed descriptor is skipped later by schema projection ## Verification Beh

### #89346 fix(agents): guard compact reserved tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - collect compact bundled-runtime reserved tool names through a guarded helper so unreadable tool-name accessors cannot abort setup - keep readable sibling names reserved for MCP/LSP collision avoidance while leaving malformed descriptors for the ex

### #89353 fix(plugin-sdk): guard provider schema inspection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:53:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a provider schema inspection crash when a nested tool-parameter schema property is unreadable. - Converts throwing child schema getters into stable unsupported-schema diagnostics. - Keeps sibling schema traversal intact for Gemini/DeepSeek p

### #89360 refactor: add QMD session artifact identity mapping

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:53:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an internal QMD session artifact identity mapping so generated QMD Markdown session artifacts resolve back to stable transcript memory/session identity before deprecated filename fallback. ## Why Path 3 needs QMD search hits to stop treating gener

### #89381 fix(plugin-sdk): guard provider tool schema traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Provider tool-schema compatibility hooks could throw while walking plugin-provided schemas with hostile accessors or proxy arrays. - A single malformed schema could abort provider normalization/inspection before di

### #89384 fix(plugins): isolate unreadable plugin tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Plugin tool descriptor capture and callback wrapping could read plugin-owned tool fields before malformed-tool isolation ran. - A tool with a throwing `parameters`, `description`, `execute`, `label`, or `displaySum

### #89650 fix(plugins): guard startup provider contracts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:54:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guards startup provider contract reads so an unreadable manifest `contracts` property cannot abort provider startup planning - reuses the installed-index contract snapshot when a healthy configured web search provider is selected - adds regression

### #90034 fix(gateway): isolate session action scope lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a guarded session-action registration lookup helper for gateway authorization and dispatch. - Skip unreadable plugin session-action rows while preserving the default write-scope behavior for missing, empty, or sparse `requiredScopes`. - Cover

### #90054 fix(gateway): isolate method descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:54:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin/channel gateway method descriptor reads before listing method names or scopes - skip malformed descriptor rows while preserving healthy method discovery and QR-login provider resolution - keep plugin descriptor registry construction r

### #90077 fix(plugins): guard provider discovery credential metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:55:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider-discovery credential probing so a malformed plugin row with unreadable `setup` or `providerAuthEnvVars` metadata is treated as having no env credential evidence. - Add a provider-discovery regression covering poisoned credential met

### #90197 fix(agents): bound runtime tool list projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:55:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject invalid or excessive runtime tool-list lengths before schema projection iterates plugin-controlled array-likes. - Preserve the existing per-entry diagnostics path for normal lists, while reporting malformed list metadata as a bounded `tool[

### #90238 fix(plugins): skip unreadable tool descriptor cache entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:56:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make plugin tool descriptor-cache capture best-effort when plugin-controlled descriptor fields throw - keep live plugin tools available even when their cache descriptor cannot be captured safely - add regression coverage for direct descriptor capt

### #90249 fix(providers): skip unreadable Google tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, extensions: google, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:56:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable, cyclic, or traversal-budget-exceeding Google tool schemas before building Google function declarations. - Snapshot readable schemas before returning declarations so accessor/proxy-backed schemas cannot mutate or throw later during

### #91483 docs: add maturity test skeleton

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, maintainer, size: XS, extensions: qa-lab, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:59:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a short `docs/reference/maturity-tests.md` page for maturity scorecard coverage - describe the current source files, scenario coverage IDs, and `qa coverage` workflow - link the page from QA/testing docs, docs navigation, labeler metadata, and

### #91506 Preserve shared QA suite flags across runners

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:59:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stacked on #91502. - Preserves shared QA suite selections across both built-in suite runners by forwarding `--channel-driver crabline --channel telegram` and `--enable-plugin` into the existing isolated runner wrapper. - Keeps the channel driver m

### #91573 fix(gateway): hide stream-error sentinel from chat history

- bucket: maintainer_owned
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:00:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Chat history could display the canonical stream-error sentinel `[assistant turn failed before producing content]` as a visible assistant row before the real assistant response. - **Solution:** Treat a pure sentinel assistant message a
