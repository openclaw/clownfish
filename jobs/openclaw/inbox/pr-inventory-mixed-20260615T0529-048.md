---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-048
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
  - "#74231"
  - "#73919"
  - "#73247"
  - "#74940"
  - "#74990"
  - "#75018"
  - "#73159"
  - "#74083"
  - "#73884"
  - "#74719"
cluster_refs:
  - "#74231"
  - "#73919"
  - "#73247"
  - "#74940"
  - "#74990"
  - "#75018"
  - "#73159"
  - "#74083"
  - "#73884"
  - "#74719"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 48

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #74231 fix(media): include configured roots in path-not-allowed error hint

- bucket: needs_proof
- author: ebarkhordar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- updated: 2026-05-30T04:58:51Z
- body excerpt: ## Problem `assertLocalMediaAllowed` rejects out-of-tree paths with: ``` Local media path is not under an allowed directory: /tmp/file.png ``` This tells the operator their path was wrong but not what *was* allowed. In production the user just sees the rejecti

### #73919 fix(mcp): dispose bundled runtimes after one-shot runs

- bucket: stale_unassigned
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, clawsweeper, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- updated: 2026-05-30T04:59:04Z
- body excerpt: ## Summary - Replaces the broad source PR #68450 with a narrow MCP runtime cleanup patch. - Ensures isolated cron, heartbeat, and follow-up one-shot runs retire bundled MCP runtimes at the outer run boundary, including rotated session IDs. - Keeps cleanup fail

### #73247 feat(slack): run message_sending hook on agent replies + ship slack-addressee-guard plugin

- bucket: needs_proof
- author: milesprest0
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:11Z
- body excerpt: ## Summary Two-part fix to a long-standing Slack outbound coverage gap. ### 1. Wire `message_sending` hook into agent replies (`extensions/slack/src/monitor/replies.ts`) Before this PR, the `message_sending` plugin hook only fired for **proactive** `message`-t

### #74940 Fix legacy LLM timeout diagnostics

- bucket: stale_unassigned
- author: chiyouYCH
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:13Z
- body excerpt: ## Summary - Preserve the numeric `agents.defaults.llm.idleTimeoutSeconds` value in `doctor --fix` output instead of silently dropping it. - Add a one-shot config-load warning when `agents.defaults.llm` is still present, pointing users to `models.providers.<id

### #74990 feat(anthropic): surface Claude subscription path in onboard wizard

- bucket: needs_proof
- author: toto-elgringo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, extensions: anthropic, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:18Z
- body excerpt: ## Summary - Renames the `anthropic-cli` auth choice to **"Claude subscription (no API key needed)"** and bumps `assistantPriority` to `-50` so Pro/Max users see the headless `claude -p` flow ahead of API-key paths in `openclaw onboard`. - Adds `extensions/ant

### #75018 feat: add Gradium realtime speech-to-text provider

- bucket: needs_proof
- author: timpratim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: gradium, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:24Z
- body excerpt: ## Summary - **Problem:** PR #64958 added Gradium TTS but no matching STT, so Gradium-only voice deployments still had to bring in a second vendor for inbound transcription on Voice Call. - **Why it matters:** Lets operators run end-to-end speech (in and out) 

### #73159 Add tool-call failure guardrails

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-30T04:59:30Z
- body excerpt: Implements guardrails for recurring OpenClaw tool-call failure classes from task 7d0f53dc.\n\nChanges:\n- read tool adds actionable guidance for missing-file ENOENT/ENOTDIR path failures\n- message tool rejects unsupported channel actions before dispatch when 

### #74083 fix(sandbox): pass --init so tini reaps zombie processes

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:32Z
- body excerpt: ## Summary - Problem: What: Adding --init to the docker sandbox makes tini the PID 1 and reaps zombie processes. Why: Long-running sandboxes generate a large number of short-lived child processes (shell/browser helpers), and the entrypoint does not reap them →

### #73884 fix(telegram): avoid false polling stall restarts

- bucket: needs_proof
- author: chareice
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:46Z
- body excerpt: ## Summary - raise the minimum Telegram polling stall threshold to 60s so it stays above grammY's 30s long-poll window - reject unsafe low pollingStallThresholdMs values in config validation - update Telegram docs and generated config metadata ## Testing - nod

### #74719 fix: handle undefined message/text at runtime to prevent TypeError

- bucket: needs_proof
- author: kevinwanghd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:59:52Z
- body excerpt: ## Problem When `message` / `payload.text` is `undefined` at runtime (e.g., across RPC boundaries), the code crashes with: ``` TypeError: Cannot read properties of undefined (reading 'trim') ``` TypeScript type annotations only apply at compile time, but runti

