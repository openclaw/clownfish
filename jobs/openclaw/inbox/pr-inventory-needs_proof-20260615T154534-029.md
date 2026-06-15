---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-029
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
  - "#91924"
  - "#88270"
  - "#91885"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#88584"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
  - "#88754"
  - "#88776"
  - "#92006"
  - "#40392"
  - "#49750"
  - "#43656"
  - "#43953"
  - "#92066"
  - "#92065"
  - "#46895"
  - "#92072"
  - "#92023"
  - "#92021"
cluster_refs:
  - "#91924"
  - "#88270"
  - "#91885"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#88584"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
  - "#88754"
  - "#88776"
  - "#92006"
  - "#40392"
  - "#49750"
  - "#43656"
  - "#43953"
  - "#92066"
  - "#92065"
  - "#46895"
  - "#92072"
  - "#92023"
  - "#92021"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.200Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 29

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91924 feat(macos): add Simplified Chinese (zh-Hans) localization for InfoPlist

- bucket: needs_proof
- author: Demon904050
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T11:26:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Simplified Chinese (`zh-Hans`) localization for the macOS app bundle, enabling native permission dialogs to display in Chinese when the system language is set to Chinese. ## Changes 1. **`Info.plist`** — add `CFBundleLocalizations = [en, zh-Hans

### #88270 fix: retry loopback probes without device identity after pairing repair

- bucket: needs_proof
- author: koatomic88
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:44:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a gateway probe edge case where a loopback probe with explicit gateway auth can get stuck in a pairing-repair path because the probe eagerly reuses cached device identity. The new behavior is narrow: - probe normally first, including cached devi

### #91885 fix(message): plumb maxLinesPerMessage from channel config into CLI send formatting

- bucket: needs_proof
- author: kagura-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T14:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91860 The `sendMessage` entrypoint (used by `openclaw message send` CLI) only forwarded `parseMode` into the formatting options passed to `sendDurableMessageBatch`. The channel-level `maxLinesPerMessage` config value was never included, so CL

### #88506 feat: add per-agent compaction overrides

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, extensions: memory-core, commands, agents, size: XL, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds per-agent `compaction` and `contextPruning` overrides so each configured agent can resolve maintenance/runtime behavior from its active agent scope instead of always inheriting every value from `agents.defaults`. This is for multi-agent install

### #88507 feat(plugins): accept slot owner records

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR implements the read-side normalization layer proposed in #70823: `plugins.slots.memory` and `plugins.slots.contextEngine` can now be read as either a bare plugin id string or an object-form ownership record with an `owner` field. What proble

### #88522 Fix Telegram active-run ingress sequencing

- bucket: needs_proof
- author: Hilo-Hilo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Let Telegram plain-text follow-ups enter an active-run ingress lane for the same account/chat/thread while an earlier handler is still running. - Keep media/media-group updates on the normal serialized lane. - Document the runtime behavior and add a

### #88531 Suggest closest edit match when oldText is missing

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P3, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add line-numbered closest-match hints when the edit tool cannot find an `oldText` block. - Reuse the edit diff failure path so execution and preview errors share the same hint wording. - Keep hint generation bounded for large files, oversized oldT

### #88584 Surface ACP reconcile errors in startup logs

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Problem: startup reconcile failures for individual ACP sessions were invisible at non-verbose log levels; operators only saw the aggregate failed count. Fix: add an additive warn log for each failed startup identity reconcile with sanitized `session

### #91994 Fix Docker setup repair before onboarding

- bucket: needs_proof
- author: j-sustr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-10T17:31:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Run `openclaw doctor --fix` during Docker setup after data-dir permissions are repaired and before onboarding/config writes. - Cover the setup-time command ordering in the Docker setup E2E harness. This preserves the release-branch Docker update p

### #88651 fix: add memory leak protection for steer rate limit map

- bucket: needs_proof
- author: jokemanfire
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:42:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Add size-based eviction (max 1024 entries) and periodic stale sweep (every 60s) to prevent unbounded growth of the steerRateLimit Map.** ## Summary **What problem does this PR solve?** `steerRateLimit` Map 会随着每次 steer 操作插入新条目而无限制增长，导致长期运行后内存泄漏。 **Why does th

### #88668 [codex] Add per-DM active directive prompt

- bucket: needs_proof
- author: molle-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a DM-scoped active directive path so deployments can steer direct-message behavior for a turn without folding that directive into ambient group/subagent context. The new `agents.defaults.dmDirective` setting is routed as `extraSystemPromptDirec

### #88684 Keep agent web_search on runtime provider resolution

- bucket: needs_proof
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87347 ## User-facing bug Agent-side `web_search` could report `web_search is disabled or no provider is available` even when the configured search provider was already loaded in the runtime and worked through other runtime-backed paths. The agent tool w

### #88754 fix(text): normalize CJK/fullwidth quotes in reasoning tag delimiters

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:44:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Models that emit inline thinking content at stream boundaries may insert CJK fullwidth quotation marks (U+300C-U+300F: 「」❲❳) in place of ASCII angle brackets around reasoning tag names. The pattern matcher uses ASCII brackets, so fullwidth-delimited

### #88776 fix: normalise wiki lint targets

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-10T17:45:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw wiki lint` can report valid imported wiki links as `broken-wikilink` when they use page titles, slug variants, fragments, or imported source-path suffixes. - Why it matters: imported evidence should not need provenance-damaging 

### #92006 build: add tsdown DTS diagnostics controls

- bucket: needs_proof
- author: ld99ba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-10T18:49:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add tsdown wrapper diagnostics for selecting a single config shard with `--config-index <number>` - add a diagnostics-only `--allow-ineffective-dynamic-import` escape hatch for known tsdown warning behavior - keep the root unified DTS graph opt-in

### #40392 config: use datetime suffix for config backup files instead of numeric rotation

- bucket: needs_proof
- author: davidxcli
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T20:20:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #39923 ## Summary Replaces the numeric rotation ring (`openclaw.json.bak.1`–`.bak.4`) with datetime-stamped backup files (`openclaw.json.bak.YYYYMMDD-HHmmssSSS`, UTC). This makes it immediately clear *when* each backup was taken without needing to inspe

### #49750 fix(sessions): preserve slack thread routing for A2A sessions

- bucket: needs_proof
- author: qqchang2nd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T21:28:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes a related A2A routing regression for Slack thread sessions. Two issues were contributing to the failure mode: 1. `resolveGroupSessionKey()` could normalize agent-prefixed Slack thread keys such as `agent:builder:slack:channel:C123:thre

### #43656 feat: cross-gateway sessions_send and sessions_spawn via gateway.peers

- bucket: needs_proof
- author: SPFAdvisors
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T00:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `sessions_send` and `sessions_spawn` only work within a single gateway. In multi-machine setups (agents split across MacBook, iMac, Mac Studio — each running their own OpenClaw gateway), there's no native way for agents to communicate cross-gateway.

### #43953 feat(feishu): pass through form_value, input_value, option(s) from card actions

- bucket: needs_proof
- author: Edison94hu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T00:48:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Feishu card action callbacks include more than just `action.value` (button values). They also carry `form_value`, `input_value`, `name`, `option`, and `options` fields for form submissions, input components, and select menus. Currently, `handleFeish

### #92066 fix(workboard): let gateway resolve dispatch scopes

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, plugin: workboard
- gitcrawl snapshot updated: 2026-06-11T01:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- stop hardcoding workboard dispatch CLI scopes to write/read\n- let the gateway CLI runtime choose scopes for plugin methods it cannot classify locally\n- add coverage that dispatch forwards scope selection to the gateway runtime\n\n## Testing\n- 

### #92065 fix(memory): honor configured qmd search timeouts

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-11T01:52:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- derive the memory_search tool deadline from the configured QMD timeout when the qmd backend is active\n- keep a bounded wrapper overhead so hung searches still fail cleanly\n- add regression coverage for slow successful QMD searches and timeout b

### #46895 fix(slash): handle /model status locally[AI-assisted]#46894

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T02:51:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: - Why it matters: - What changed: - What did NOT change (scope boundary): ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor - [ ] Docs - [ ] Security hardening - [ ] Chore/

### #92072 fix(gateway): treat `google-gemini-cli` Gemini models as image-capable

- bucket: needs_proof
- author: HaozheZhang6
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-11T03:17:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `google-gemini-cli` models (e.g. `google/gemini-3.5-flash`) were rejected at the Gateway attachment gate with `UnsupportedAttachmentError: active model does not accept image inputs` before the Gemini CLI was ever invoked — even though the CLI acce

### #92023 test(secrets,routing): cover sensitive-header, exec-ref, and binding-scope policies

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: mock-only-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T03:41:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds unit coverage for three security-sensitive policy modules that lacked direct tests: sensitive model-provider header classification (credential-leak guard), exec secret-ref resolution gating (dry-run execution gate), and route binding-scope + ro

### #92021 fix(agents): drop body/method on cross-origin MCP HTTP redirects

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T03:42:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MCP HTTP transport passed `allowCrossOriginUnsafeRedirectReplay: true`, so a cross-origin 30x redirect replayed the original POST body/method — an SSRF / credential-exfil vector. Set it to `false` to match the secure default already used by `pro

