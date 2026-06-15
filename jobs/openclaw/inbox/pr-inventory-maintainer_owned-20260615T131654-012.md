---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-012
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
  - "#86365"
  - "#86539"
  - "#86544"
  - "#86627"
  - "#87081"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#93179"
  - "#87572"
  - "#87617"
  - "#87888"
  - "#87955"
  - "#88084"
  - "#90219"
  - "#90249"
  - "#93143"
  - "#91091"
  - "#87166"
  - "#80656"
  - "#89067"
  - "#89068"
  - "#89082"
  - "#89119"
  - "#89121"
  - "#89132"
  - "#89178"
  - "#89255"
  - "#89286"
  - "#89296"
  - "#89301"
  - "#89348"
  - "#89383"
  - "#83497"
  - "#89203"
  - "#92398"
  - "#51206"
  - "#93207"
  - "#87587"
  - "#88977"
cluster_refs:
  - "#86365"
  - "#86539"
  - "#86544"
  - "#86627"
  - "#87081"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#93179"
  - "#87572"
  - "#87617"
  - "#87888"
  - "#87955"
  - "#88084"
  - "#90219"
  - "#90249"
  - "#93143"
  - "#91091"
  - "#87166"
  - "#80656"
  - "#89067"
  - "#89068"
  - "#89082"
  - "#89119"
  - "#89121"
  - "#89132"
  - "#89178"
  - "#89255"
  - "#89286"
  - "#89296"
  - "#89301"
  - "#89348"
  - "#89383"
  - "#83497"
  - "#89203"
  - "#92398"
  - "#51206"
  - "#93207"
  - "#87587"
  - "#88977"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.473Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 12

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #86365 fix(ui): dismiss stale approval prompts

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: app: web-ui, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:54:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Dismiss Control UI approval prompts when the Gateway says the approval was already resolved or expired. - Keep the prompt visible for non-terminal resolve failures, such as a disconnected Gateway. - Add jsdom coverage for expired, already-resolved

### #86539 fix: repair gateway stop hook runner alias

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: scripts, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs runtime postbuild so a missing nested `dist/plugins/hook-runner-global.js` alias is recreated from the hashed root hook-runner chunk when present. - Runs that nested alias repair before legacy root chunk compatibility aliases, so old shutd

### #86544 fix(cli): show Gemini CLI runtime auth status

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #79585. ## Summary - Teach `openclaw models status` to detect canonical text models such as `google/*` that are routed through a CLI runtime such as `google-gemini-cli`. - Show/check a separate runtime auth route for that split, so `GEMINI_API_KEY` can r

### #86627 Keep core doctor health in contribution order

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:56:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR integrates structured health checks with the ordered core doctor checks. The goal is to make it cheap and safe to add structured findings, dry-run previews, and diff/effect reporting to existing doctor rules without moving those rules out of

### #87081 test(policy): add config coverage report

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: scripts, maintainer, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:58:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the final policy-series maintainer follow-up. It adds an internal, report-only coverage inventory for the OpenClaw config fields that Policy currently watches for conformance or attestation drift. - adds `pnpm policy:config-coverage` - keeps

### #87111 fix(webchat): paginate tool-heavy chat history

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebuilt this PR onto current `origin/main` as one clean WebChat/Gateway pagination commit. - Adds additive `chat.history` cursor pagination with `beforeSeq`, `hasMore`, `nextBeforeSeq`, `oldestSeq`, and `newestSeq`. - Pages bounded, display-normal

### #87304 fix(update): fail closed on managed plugin pin conflicts

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc, steipete
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:00:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `openclaw update` could silently downgrade a user-pinned managed plugin direct dependency. After the maintainer policy note, this PR now implements the conflict/fail-closed behavior instead of preserving the newer pin automatically. Fixes #85184. ## Affected s

### #87434 [codex] Expire Telegram message-cache plugin state

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gives Telegram prompt-context message-cache plugin-state rows a seven-day TTL - normalizes existing no-expiry rows in a TTL-enabled namespace on the next write so upgraded `telegram.message-cache` rows can age out too - preserves sibling namespace

### #93179 excludeTestExecution option for more compact QA profile evidence

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: qa-lab, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add taxonomy profile support for `excludeTestExecution` and set it on `smoke-ci` - make QA evidence entry `execution` optional and omit it when the profile/default or CLI override requests compact evidence - add `qa run --exclude-test-execution-ev

### #87572 fix(memory): increase QMD embedTimeoutMs default to 600s for local GG…

- bucket: maintainer_owned
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Local GGUF models (e.g., embeddinggemma-300m) take 3-4 minutes to embed a 30-50 file workspace on commodity hardware (4-core CPU), but `memory.qmd.update.embedTimeoutMs` default is only 120s, causing repeated timeout failures and effectiv

### #87617 fix(agents): broaden local model lean profile

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:05:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Broaden `localModelLean` so small/local models avoid heavyweight web, media, session orchestration, node, channel, and subagent tool families. - Keep core coding/status tools available in lean mode and cover the retained/trimmed surface with focus

### #87888 fix(agents): skip tool prep when models disable tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip core/plugin tool construction when the active model declares `compat.supportsTools: false`. - Keep existing raw-model and explicit no-tools behavior, while making the documented no-tools small-model fallback avoid tool-prep overhead too. - Ad

### #87955 fix(agents): keep lean tools behind catalog controls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Keep `localModelLean` from removing heavyweight tools before Code Mode or Tool Search can place them behind compact catalog controls. - Defer the construction-time lean filter only for catalog-enabled runs, then keep the final visible lean filter so

### #88084 fix: let approval commands bypass active reply lane

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:08:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Let authorized `/approve` commands bypass active reply-operation admission so they can resolve the approval currently holding the lane. - Run authorized text `/approve` through the native slash fast path for SMS-style channels that do not provide 

### #90219 fix(agents): preserve unreadable tool schemas through wrapping

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:13:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Leave unreadable tool `parameters` descriptors intact during schema normalization so runtime projection can quarantine/report bad plugin tools instead of crashing early. - Replace object-spread tool wrapping in before-tool-call and abort-signal wr

### #90249 fix(providers): skip unreadable Google tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, extensions: google, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:13:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable, cyclic, or traversal-budget-exceeding Google tool schemas before building Google function declarations. - Snapshot readable schemas before returning declarations so accessor/proxy-backed schemas cannot mutate or throw later during

### #93143 fix(imessage): remove client-side split-send coalescing (imsg coalesces upstream)

- bucket: maintainer_owned
- author: omarshahine
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: imessage, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:20:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #91243. imsg `>= 0.11.1` coalesces Apple's URL-preview split-sends upstream (openclaw/imsg#141, shipped in v0.11.1), so OpenClaw now receives a single logical message for `summarize https://example.com/article` and no longer needs to debounce

### #91091 fix(memory): do not prune session index from a failed directory scan

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: amknight
- labels: extensions: memory-core, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:27:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A full memory sync treats source enumerations as the source of truth for **destructive** maintenance: stale-row pruning of the session and memory-file indexes (`files` + `chunks` + vectors + FTS), full reindex rebuilds, and exported-session reconcil

### #87166 fix(models): strip plaintext api keys from models json

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:44:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Part of #11829. Replaces #83294; the contributor branch cannot be updated because maintainer edits are disabled. This keeps the contributor commits and adds maintainer fixups. Summary: - Strip newly generated plaintext provider `apiKey` values from `models.jso

### #80656 fix(swift): keep device auth compatible with v2 gateways

- bucket: maintainer_owned
- author: samuelalake
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: BunsDev
- labels: app: macos, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:06:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Swift OpenClawKit v2 device-auth payload builder alongside the existing v3 builder. - Sign gateway connect requests with the v2 canonical payload for compatibility with deployed gateways that have not yet upgraded to v3 verification. - Add r

### #89067 fix(codex): harden diagnostic tool capture

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:22:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Codex model-call diagnostic tool-definition capture from throwing on unreadable tool `name`, `description`, `inputSchema`, or `parameters` accessors - sanitize captured diagnostic schema payloads before private diagnostic dispatch, including 

### #89068 fix(codex): guard dynamic tool name filters

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:22:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Codex dynamic-tool filters against name getters that become unreadable after schema projection - drop unreadable entries from Codex-specific filtering and allowlist paths while preserving healthy siblings - keep vision filtering from crashin

### #89082 fix(agent-runtime): guard tool definition descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:24:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard SDK tool-definition projection against unreadable `name`, `label`, `description`, and `parameters` descriptors. - Fall back optional descriptor fields while dropping tools whose required name/schema fields cannot be read. - Add focused cover

### #89119 fix(agent-runtime): guard provider tool diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:26:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard provider tool-schema diagnostics logging against unreadable source tool names - normalize provider diagnostic descriptors before summary/log payload construction - catch provider inspection failures so non-critical diagnostics cannot abort t

### #89121 refactor: add transcript reader seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, agents, maintainer, size: XL, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:26:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b transcript readers: add a storage-agnostic transcript reader facade and route storage-neutral transcript read/tail/stats/message lookup/projection callers through it. Refs #88838. ## Why The session accessor seam from PR 3.1a gives the

### #89132 fix(agent-core): guard tool lookup descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:27:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard low-level agent-core tool lookup against unreadable sibling tool names. - Fail closed to sequential batch execution when the matched tool's `executionMode` descriptor is unreadable. - Add regressions for both descriptor cases so a bad tool d

### #89178 refactor: add SQLite session store foundation

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:29:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.2 for #88838 adds the unused, additive SQLite session/transcript store foundation behind the 3.1a accessor seam. It introduces the per-agent SQLite schema, generated Kysely types, SQLite-backed session/transcript accessor helpers, and sha

### #89255 Add Vault SecretRef plugin

- bucket: maintainer_owned
- author: sallyom
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: XL, proof: sufficient, dependencies-changed, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:32:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a bundled `vault` plugin that provides a reference SecretRef exec provider for HashiCorp Vault KV. - Resolves SecretRefs through a Node-based resolver using `VAULT_ADDR`, `VAULT_TOKEN`, optional `VAULT_NAMESPACE`, and KV mount/version env var

### #89286 fix(agents): guard CLI prompt tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:33:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route bundled MCP CLI prompt-tool metadata through the existing MCP loopback schema projection before hashing, system-prompt construction, and prompt-report generation. - Skip unreadable, blank, or invalid loopback prompt tool descriptors instead 

### #89296 fix(copilot): quarantine malformed bridged tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T09:34:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - quarantine malformed Copilot bridge source tools before construction-plan filtering, duplicate detection, and SDK registration - reject unreadable tool names, unreadable execution-affecting descriptors, and unsupported runtime input schemas such a

### #89301 fix(trajectory): skip unreadable tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:34:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make shared trajectory tool-definition capture tolerate unreadable tool descriptors - skip tools with unreadable `name` or `parameters` while preserving healthy siblings - add regression coverage for hostile descriptor getters in trajectory runtim

### #89348 refactor: add memory session sync identity API

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:36:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds identity-based memory session sync targets so memory-core can sync runtime transcripts by storage-neutral session identity while keeping deprecated `sessionFiles` compatibility for canonical OpenClaw transcript paths. ## Why Path 3 needs memory sy

### #89383 docs: document gateway client API contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: L, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:37:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document gateway client reconnect-pause metadata, request-error wrapper, and close-code hint contracts. - Document timeout resolver behavior in both the reusable gateway-client package and OpenClaw runtime wrapper. - Document device-auth signing p

### #83497 fix(control-ui): project message tool sends as chat bubbles

- bucket: maintainer_owned
- author: Neomail2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: app: web-ui, stale, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:39:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI history renders visible replies sent through `message(action="send")` only as tool call/tool result blocks. - Why it matters: in WebChat direct conversations that require visible delivery through the `message` tool, the user se

### #89203 refactor: route SDK session compatibility through seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, plugin: file-transfer, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:40:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Routes the public plugin SDK and plugin runtime session-entry helpers through the file-backed session accessor seam while keeping legacy whole-store and session-file helpers as explicit deprecated compatibility exports. ## Why Path 3 needs SDK-facing s

### #92398 fix(cron): stop replaying missed slots that predate the last definition write [AI-assisted]

- bucket: maintainer_owned
- author: amersheeny
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:49:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91944 — after a `cron.update` schedule change, a gateway restart (e.g. during `openclaw update`) could fire the job at the wrong time. The startup catch-up heuristic (`isRunnableJob` with `allowCronMissedRunByLastRun`) classified a cron job a

### #51206 Plugins: enforce private import boundaries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:55:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugins could couple directly to private OpenClaw internals or escape their package root through imports, even though the intended contract is the plugin SDK seam. - Why it matters: That makes plugin behavior depend on unstable host inter

### #93207 fix(cron): suppress unavailable-tool self-debug replies

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:57:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - thread unknown-tool loop guard exhaustion out of the embedded attempt result and into cron failure metadata - add a fatal `tool_unavailable_exhausted` signal with `bypassCronDelivery: true` for cron runs - make isolated cron delivery skip dispatch

### #87587 fix(agents): keep exec visible for lean local models

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #86632. ## Summary Lean local-model mode now keeps `exec` directly visible when Tool Search compacts the rest of the tool catalog. This gives small coding-tuned local models an obvious shell fallback for simple live-data or workspace probes instead of for

### #88977 fix(agents): tolerate provider tool schema hook failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, extensions: codex, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep provider `normalizeToolSchemas` and `inspectToolSchemas` strict by default for doctor/check validation - pass assistant-only warn mode through embedded attempts, Codex dynamic tools, and compaction so hook failures log and keep current runtim

