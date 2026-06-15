---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-024
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
  - "#59835"
  - "#78521"
  - "#78392"
  - "#82880"
  - "#78334"
  - "#74302"
  - "#84853"
  - "#86078"
  - "#86168"
  - "#86175"
cluster_refs:
  - "#59835"
  - "#78521"
  - "#78392"
  - "#82880"
  - "#78334"
  - "#74302"
  - "#84853"
  - "#86078"
  - "#86168"
  - "#86175"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 24

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #59835 fix(cron): validate custom session ids

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-24T19:34:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject invalid `session:<id>` cron targets that contain path separator characters or NULs - Reuse the same validation when resolving the isolated cron run `sessionKey` ## Changes - Added a shared cron custom-session validator in `src/cron/normaliz

### #78521 security: wrap tool results at transport boundary

- bucket: needs_proof
- author: zeusbot-ron
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T00:29:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- wrap tool-result text at the generic transport boundary using existing external-content security markers\n- preserve already bounded tool results to avoid double-wrapping\n- add regression coverage for wrapped and already-wrapped tool results\n\n

### #78392 security: remediate workflow and core logic vulnerabilities (#68428)

- bucket: needs_proof
- author: voidsidd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, gateway, agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T00:31:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description Remediates the workflow template-injection findings reported in #68428 and hardens related input-validation paths in the Docker sandbox and thread-ownership gateway. This patch addresses critical input-handling flaws across workflow execution a

### #82880 security: harden ACPX command binding and pin Firecrawl DNS resolution

- bucket: needs_proof
- author: thesomewhatyou
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: acpx, triage: needs-real-behavior-proof, extensions: firecrawl, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T00:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Worthy Security Hardening & Proof (Addressing Clawsweeper Feedback) This update provides the "worthy proof" requested by the maintainers and addresses the gaps identified by Clawsweeper. ### 1. ACPX Proxy: Cryptographic Command Binding - **Improvement:** Up

### #78334 chore(ci): harden security ownership and workflow permissions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-25T00:32:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - broaden secops CODEOWNERS coverage for workflow, action, and release/security automation - keep release-manager ownership while preserving required secops review on release paths - default release and publish workflows to top-level permissions: {} Ve

### #74302 fix(security): block untrusted workspace providers in startup discovery

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, codex, aardvark, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-25T00:32:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Prevent untrusted workspace plugin discovery entries from being imported/executed during startup prewarm when `providerDiscoveryEntriesOnly` is enabled, closing a path that could run workspace code without explicit trust. ### Description - Whe

### #84853 fix(agents): drop throttled exec update events

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T14:29:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: exec live output throttling capped detailed payloads, but throttled `tool_execution_update` events still emitted generic tool/item updates with no new user-visible payload. - Solution: make throttled exec updates a true no-op until the ne

### #86078 Fix #85926: Dashboard bug - injected copies

- bucket: needs_proof
- author: Jefsky
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T18:08:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the dashboard bug where literal 'Copy' text was being injected into multiline shell/heredoc commands after message submission. ## Root Cause The `code-block-copy__idle` span containing the 'Copy' button label was being stripped by DOMPurify (b

### #86168 fix(edit): show best matching region on mismatch instead of raw file head

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T18:08:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `edit` oldText doesn't match the file contents exactly, the current error hint shows the **first 800 characters** of the file regardless of where the closest match might be. For large files this is rarely helpful — the model sees the file heade

### #86175 fix(auto-reply): turn-level NO_REPLY substrate-leak suppression (buffer-until-final)

- bucket: needs_proof
- author: todd-chisel
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-25T18:08:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes the substrate leak that delivers agent reasoning text to operator chats when a `NO_REPLY` final follows leading `block`-kind payloads in the same turn. ## The leak shape From the 2026-05-24 forensic (fleet-ops session `cf23b629`): ``` [block]

