---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-081
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
  - "#74398"
  - "#74990"
  - "#74686"
  - "#75018"
  - "#73159"
  - "#74083"
  - "#72983"
  - "#74038"
  - "#75093"
  - "#73203"
cluster_refs:
  - "#74398"
  - "#74990"
  - "#74686"
  - "#75018"
  - "#73159"
  - "#74083"
  - "#72983"
  - "#74038"
  - "#75093"
  - "#73203"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.667Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 81

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74398 fix(control-ui): honor verbose level for tool expansion

- bucket: needs_proof
- author: samrusani
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #49944. ## Summary - Preserve the effective `chat.history.verboseLevel` returned by the gateway in Control UI state. - Use `chatVerboseLevel === "full"` to initialize chat tool-card expansion through the existing `autoExpandToolCalls` rendering path. - C

### #74990 feat(anthropic): surface Claude subscription path in onboard wizard

- bucket: needs_proof
- author: toto-elgringo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, extensions: anthropic, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Renames the `anthropic-cli` auth choice to **"Claude subscription (no API key needed)"** and bumps `assistantPriority` to `-50` so Pro/Max users see the headless `claude -p` flow ahead of API-key paths in `openclaw onboard`. - Adds `extensions/ant

### #74686 fix(gateway): add cron-list transport timing diagnostics

- bucket: needs_proof
- author: up2itnow0822
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds **default-off** Gateway client transport timing diagnostics to help explain latency between fast in-handler `cron.list` stages and slower end-to-end WebSocket timing (audit context: handler ~23 ms vs ~638 ms WS line in isolated runs). ## How to

### #75018 feat: add Gradium realtime speech-to-text provider

- bucket: needs_proof
- author: timpratim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: gradium, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** PR #64958 added Gradium TTS but no matching STT, so Gradium-only voice deployments still had to bring in a second vendor for inbound transcription on Voice Call. - **Why it matters:** Lets operators run end-to-end speech (in and out) 

### #73159 Add tool-call failure guardrails

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T04:59:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements guardrails for recurring OpenClaw tool-call failure classes from task 7d0f53dc.\n\nChanges:\n- read tool adds actionable guidance for missing-file ENOENT/ENOTDIR path failures\n- message tool rejects unsupported channel actions before dispatch when 

### #74083 fix(sandbox): pass --init so tini reaps zombie processes

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: What: Adding --init to the docker sandbox makes tini the PID 1 and reaps zombie processes. Why: Long-running sandboxes generate a large number of short-lived child processes (shell/browser helpers), and the entrypoint does not reap them →

### #72983 fix(web-ui): eliminate streaming markdown flicker — avoid full DOM replacement during token updates

- bucket: needs_proof
- author: michaelatamuk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T04:59:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** During streaming, every coalesced token update triggers a full DOM replacement because `unsafeHTML(toSanitizedMarkdownHtml(markdown))` re-renders the entire subtree. This causes visible flicker: paragraphs blink, code fences disappear

### #74038 fix(gateway): skip pricing bootstrap in replace mode

- bucket: needs_proof
- author: chen-zhang-cs-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `models.mode: "replace"` is configured, Gateway startup still bootstraps remote OpenRouter/LiteLLM pricing metadata by default. That surprises users who intentionally replaced the model catalog and can add avoidable network work during startup.

### #75093 fix(agents): preserve exact paths during compaction

- bucket: needs_proof
- author: samrusani
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:59:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75058. ## Summary - Collect path-like literals from model-facing compaction input, previous summary, and file-operation metadata without serializing hidden tool-result details. - Append a bounded deterministic `<exact-path-literals>` suffix so slash-sep

### #73203 fix(feishu): support text tag and nested arrays in interactive card parsing

- bucket: needs_proof
- author: taozengabc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T04:59:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `parseInteractiveCardContent` only recognizes `div`, `markdown`, `lark_md`, and `plain_text` element tags. Two common card formats fall through to the `[Interactive Card]` placeholder: 1. **`text` tag elements** — used by custom cards (e.g. monitori

