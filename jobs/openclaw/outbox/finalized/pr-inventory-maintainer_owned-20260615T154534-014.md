---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-014
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
  - "#90197"
  - "#18889"
  - "#79536"
  - "#80788"
  - "#81164"
  - "#81443"
  - "#81736"
  - "#83991"
  - "#91502"
  - "#84326"
  - "#84340"
  - "#84352"
  - "#38295"
  - "#80110"
  - "#84366"
  - "#84450"
  - "#84581"
  - "#84665"
  - "#84680"
  - "#90776"
  - "#88748"
  - "#73342"
  - "#81364"
  - "#81792"
  - "#84823"
cluster_refs:
  - "#90197"
  - "#18889"
  - "#79536"
  - "#80788"
  - "#81164"
  - "#81443"
  - "#81736"
  - "#83991"
  - "#91502"
  - "#84326"
  - "#84340"
  - "#84352"
  - "#38295"
  - "#80110"
  - "#84366"
  - "#84450"
  - "#84581"
  - "#84665"
  - "#84680"
  - "#90776"
  - "#88748"
  - "#73342"
  - "#81364"
  - "#81792"
  - "#84823"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.197Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 14

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90197 fix(agents): bound runtime tool list projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:34:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject invalid or excessive runtime tool-list lengths before schema projection iterates plugin-controlled array-likes. - Preserve the existing per-entry diagnostics path for normal lists, while reporting malformed list metadata as a bounded `tool[

### #18889 feat(hooks): add agent and tool lifecycle boundaries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:36:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why Agent execution lacked complete lifecycle boundaries around thinking, response generation, and tool execution, reducing traceability for observability and policy systems. This PR adds those boundaries and ensures tool lifecycle hooks carry `toolCallId` 

### #79536 fix(acp): honor tagVisibility.agent_thought_chunk for thought-stream events

- bucket: maintainer_owned
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: galiniliev
- labels: stale, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:37:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Honor the operator-tunable `tagVisibility.agent_thought_chunk` flag for ACP thought-stream `text_delta` events. Closes catalog finding #12. ## Bug detail Wire probe captured 2 `agent_thought_chunk` sessionUpdates per turn from copilot's ACP runtime.

### #80788 Fix Discord gzip response parsing

- bucket: maintainer_owned
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, stale, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:38:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Discord `message read` and `search` could receive raw gzip bytes and surface compressed binary instead of parsed JSON. - Why it matters: callers expect parsed Discord API data; compressed bytes break message read/search workflows before n

### #81164 feat(context-engine): add interceptCompaction contract for context-engine plugins

- bucket: maintainer_owned
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: jalehman
- labels: docs, agents, stale, size: XL, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:39:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: TLDR - lets other context systems turn off/replace codex compaction (when it calls to compact it uses them versus its native). ## Summary Adds an optional `interceptCompaction(request)` method to the `ContextEngine` plugin contract so engines can replace the r

### #81443 fix: resolve QMD Windows shims and guard image URL downloads

- bucket: maintainer_owned
- author: knightplat-blip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, extensions: memory-core, agents, stale, size: XL, extensions: openai, extensions: litellm, extensions: deepinfra, triage: needs-real-behavior-proof, extensions: xai, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:41:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Windows QMD shim path and narrows the image URL work into a guarded provider-download path. - Resolve Windows `.cmd` shims that point at quoted absolute JavaScript entrypoints. - Use the real QMD package name, `@tobilu/qmd`, for package-bi

### #81736 feat(catalog): add DingTalk to official external channel catalog

- bucket: maintainer_owned
- author: meng93
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: sliverp
- labels: scripts, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:44:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add DingTalk (钉钉) as an external channel entry in `official-external-channel-catalog.json`, so it appears in the `openclaw configure` channel selection wizard with install-on-demand support. - Follows the same pattern used by WeCom, Yuanbao, and W

### #83991 fix: sanitize Google thinking payloads for Vertex

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:49:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extends the Google thinking payload sanitizer to `google-vertex` and `google-gemini-cli` APIs in addition to `google-generative-ai`. - Preserves passthrough behavior for non-Google APIs through the closed Google API allowlist. - Adds focused SDK s

### #91502 Add Crabline channel-driver QA seam

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: qa-lab, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:51:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the OpenClaw QA Lab seam for `--channel-driver crabline --channel telegram`, matching the SDK-side driver shape from `openclaw/crabline#1`. - Records channel-driver selection in `qa-suite-summary.json` and emits `crabline-channel-capability-m

### #84326 Doctor: expose sandbox registry findings

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:56:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Exposes legacy sandbox registry files as structured doctor health findings. - Adds dry-run repair effects for migrate, remove-empty, and quarantine registry-file outcomes. - Keeps the existing `doctor:sandbox` legacy run path as the only real muta

### #84340 Doctor: expose extra gateway service findings

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:57:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Exposes the extra gateway service doctor checks as structured health findings. - Adds dry-run repair effects for restart/retry actions that doctor already knows how to describe. - Keeps the existing `doctor:gateway-services` legacy run path author

### #84352 Fix WebChat dispatch failure session status

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T00:57:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist a terminal failed session lifecycle event when WebChat dispatch rejects before an assistant reply. - Preserve terminal lifecycle errors from embedded-agent/provider failures when model fallback is exhausted, so fallback assistant text no l

### #38295 fix(config): dedupe warning spam and slow restart storms

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:18:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - dedupe repeated config warning/error payloads until the config content changes again - dedupe invalid config reload warnings so unchanged broken snapshots stop spamming logs - slow unhealthy supervised restart storms and document the difference be

### #80110 fix(agents): suppress raw subagent tool output

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: S, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T01:23:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #79986 - Replaces #80049 with the maintainer patch for the same reported behavior - [x] This PR fixes a bug or regression This keeps the correct core fix from #80049: `selectSubagentOutputText()` must not fall through to `snapshot.latestRaw

### #84366 Doctor: expose session lock findings

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:26:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Exposes stale session write locks as structured doctor health findings. - Adds dry-run repair effects for stale lock removal. - Keeps the existing session-lock note/repair function authoritative for real normal `doctor` / `doctor --fix` behavior. 

### #84450 Doctor: expose config audit scrub findings

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:27:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Exposes config audit scrub needs as structured doctor health findings. - Adds dry-run repair effects for rewriting historical `config-audit.jsonl` argv/execArgv records through the current redactor. - Keeps the existing `maybeScrubConfigAuditLog` 

### #84581 fix(agents): strip plaintext model provider keys

- bucket: maintainer_owned
- author: pcdqc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: docs, agents, size: XL, triage: blank-template, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:30:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - strip plaintext provider `apiKey` values after merge-mode preservation, source-managed enforcement, and provider compatibility transforms so old `models.json` keys cannot be reintroduced into the final prompt-facing catalog - clean legacy catalog-

### #84665 fix: bump baileys

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, scripts, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:32:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Routine dependency bump for the WhatsApp extension. Changes: - Bump `baileys` to `7.0.0-rc12` - Refresh the existing pnpm patch metadata for the new version - Keep the postinstall hotfix detector compatible with the updated upstream media code Validation: - `p

### #84680 fix(codex): read listed skill files directly

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: codex, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:32:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add Codex app-server guidance to read listed `SKILL.md` paths directly instead of searching parent directories. - Cover the prompt guidance in the Codex app-server thread lifecycle tests. - Update Codex runtime prompt snapshots for the new developer

### #90776 feat: add plugin sdk deprecation baseline metadata

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:39:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Adds machine-readable deprecation metadata to the generated Plugin SDK API baseline. - Captures deprecated SDK modules/subpaths, named exports, alias re-exports, and nested public members from existing `@deprecated

### #88748 fix(gemini): bridge OAuth profiles into CLI runtime

- bucket: maintainer_owned
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: shakkernerd
- labels: agents, size: L, proof: supplied, extensions: google, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:40:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR makes the bundled `google-gemini-cli` backend use the selected OpenClaw auth profile explicitly instead of relying on ambient Gemini CLI state from the operator's machine. It adds a private Gemini CLI auth bridge that: - selects the `google-

### #73342 refactor(memory-host): replace core runtime bridge with services

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, extensions: qa-lab, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:57:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `packages/memory-host-sdk` still reached into core through private `openclaw-runtime*` bridge files. - Why it matters: the package boundary was package-shaped but not actually core-independent. - What changed: added package-local `MemoryH

### #81364 Check ClawHub trust before plugin installs

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: docs, cli, scripts, commands, maintainer, size: XL, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:58:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Reapplies the ClawHub plugin-install trust check from #81307 after the revert in #81363. This PR keeps the original trust-check scope: - check ClawHub exact-release trust before ClawHub plugin downloads - require interactive acknowledgement, or `--a

### #81792 feat: add gateway token scopes

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Adds gateway.auth.tokenScopes for device-less shared-token WebSocket clients, with read-only/non-loopback rules and privileged opt-in. - Applies configured scopes during WebSocket connect, rejects unsafe privileged grants on non-loopback binds, rotat

### #84823 fix(gateway): dedupe live tool event mirrors

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: gateway, maintainer, size: XS, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:02:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: live tool events are broadcast both as run-scoped `agent` events and session-scoped `session.tool` mirrors, so overlapping Control UI subscriptions can receive duplicate websocket frames for the same tool activity. - Solution: exclude run

