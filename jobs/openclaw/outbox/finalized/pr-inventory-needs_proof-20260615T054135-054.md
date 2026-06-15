---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-054
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
  - "#68860"
  - "#66414"
  - "#68307"
  - "#66067"
  - "#66415"
  - "#67788"
  - "#67669"
  - "#67103"
  - "#67432"
  - "#67444"
cluster_refs:
  - "#68860"
  - "#66414"
  - "#68307"
  - "#66067"
  - "#66415"
  - "#67788"
  - "#67669"
  - "#67103"
  - "#67432"
  - "#67444"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.455Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 54

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68860 Agents: emit turn events from embedded sessions

- bucket: needs_proof
- author: 404notfoundhh
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:04:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Emit embedded Pi `turn_start` / `turn_end` events through OpenClaw's agent event pipeline so external observers can detect stable loop boundaries. ## Changes - handle `turn_start` and `turn_end` in `src/agents/pi-embedded-subscribe.handlers.ts` - ad

### #66414 Fix image attachment handling in Control UI chat

- bucket: needs_proof
- author: pandaAIGC
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes two issues that can cause image attachments from Control UI chat to be lost before they reach the model: 1. `resolveGatewayModelSupportsImages()` could miss image-capable models when the runtime reported a bare model name (for example `gp

### #68307 fix(commands): emit WARN when bootstrap files are truncated

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `resolveCommandsSystemPromptBundle` was calling `resolveBootstrapContextForRun` without a `warn` callback - Bootstrap file truncation warnings were silently discarded in the commands / system-prompt path - Wires up `makeBootstrapWarn` backed by a 

### #66067 fix(tui): preserve spaces between thinking fragments

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:04:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: streamed thinking fragments were joined with single newlines, and the TUI markdown renderer collapsed those boundaries so adjacent sentences appeared smushed together - Why it matters: reasoning output in the terminal became hard to read 

### #66415 fix(custom-provider): add empty required arrays for non-strict OpenAI tool schemas

- bucket: needs_proof
- author: LiuYihey
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:04:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `required: []` for object schemas on the non-strict OpenAI tool path - limit the recursive rewrite to schema-bearing keywords so literal objects under `enum`, `const`, `default`, and `examples` are left unchanged - update regression coverage a

### #67788 fix: improve cli help and gateway guidance

- bucket: needs_proof
- author: Dodo1021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expand nested help more reliably for deeper `--help` invocations - clarify gateway foreground runtime vs supervised service commands - improve gateway status/auth/help output and models auth guidance ## Testing - corepack pnpm install --frozen-loc

### #67669 Add custom-test sub command to verify configured custom providers

- bucket: needs_proof
- author: qidu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:04:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: It is easy to make errors when user configuring custom provider models by themselves. - Why it matters: verify custom llm models to make user understand why openclaw works or not. - What change

### #67103 feat: Add LaTeX math rendering via KaTeX in Control UI chat

- bucket: needs_proof
- author: ImortalMask
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # feat: Add LaTeX math rendering via KaTeX in Control UI chat ## Summary Adds native LaTeX math rendering to the Control UI chat using [KaTeX](https://katex.org/). Users can now write `$...$` for inline math and `$$...$$` for display math in chat messages, and

### #67432 fix(ui): add aria-label to pinned message Unpin button

- bucket: needs_proof
- author: akinshaywai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The icon-only Unpin button in the pinned messages section had a `title="Unpin"` tooltip but no `aria-label`, so screen readers announced it as plain "button" with no context. **Fix:** Add `aria-label="Unpin"` to match the existing `title`. ## Files 

### #67444 fix(inter-session-completion-delivery): ensure completion delivery on ANNOUNCE_SKIP

- bucket: needs_proof
- author: duqaXxX
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:05:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Inter-session completion delivery could become unreliable when the announce path produced `ANNOUNCE_SKIP`. In that path, the announce result could suppress the visible completion flow too early, which meant the completion toward `REPLY_TO_SESSION` w

