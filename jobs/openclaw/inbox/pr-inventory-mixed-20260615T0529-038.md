---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-038
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
  - "#80929"
  - "#80658"
  - "#80596"
  - "#80383"
  - "#79985"
  - "#79861"
  - "#79853"
  - "#79852"
  - "#79846"
  - "#79626"
cluster_refs:
  - "#80929"
  - "#80658"
  - "#80596"
  - "#80383"
  - "#79985"
  - "#79861"
  - "#79853"
  - "#79852"
  - "#79846"
  - "#79626"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 38

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #80929 fix(outbound): classify deterministic delivery errors

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- updated: 2026-05-29T06:30:14Z
- body excerpt: ## Summary - Classify deterministic outbound delivery failures for disallowed local media paths as permanent errors. - Classify overlong message failures as permanent errors. - Add regression coverage for both failure strings in the delivery queue policy tests

### #80658 docs: clarify backend client behavior with gateway.auth.mode 'none'

- bucket: needs_proof
- author: HouJian2020
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- updated: 2026-05-29T06:30:29Z
- body excerpt: ## Summary This PR clarifies an important behavior of `gateway.auth.mode: "none"` that is not currently documented. ## Problem When `gateway.auth.mode` is set to `"none"`, the gateway does not generate or provide a shared authentication token. This causes back

### #80596 Expose transcript update emitter to plugins

- bucket: ready_for_maintainer
- author: WangBRen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- updated: 2026-05-29T06:30:33Z
- body excerpt: ## Summary - expose emitSessionTranscriptUpdate on plugin runtime events - keep onSessionTranscriptUpdate listener support unchanged - cover the runtime event surface in tests ## Test - pnpm exec vitest run src/plugins/runtime/index.test.ts

### #80383 acp: cancel queued SessionActorQueue items on caller abort

- bucket: stale_unassigned
- author: helaskeutuja
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- updated: 2026-05-29T06:30:47Z
- body excerpt: This PR is narrower than #52747 and targets a different failure mode: it makes already-enqueued `SessionActorQueue` items cancellable on caller abort, so `pendingBySession` does not stay inflated when the predecessor tail never settles. Complementary to #52747

### #79985 docs+tests: clarify agents.list visibility scope across CLI and Gateway

- bucket: ready_for_maintainer
- author: Kansodata
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, proof: sufficient
- updated: 2026-05-29T06:30:58Z
- body excerpt: ## Summary - document the visibility-scope difference between `openclaw agents list` (config-scoped) and Gateway `agents.list` (runtime-scoped) - add a focused gateway test proving intentional divergence when `agents.list` is not explicitly configured - keep b

### #79861 fix(gateway): handle exec approvals persistence errors

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient
- updated: 2026-05-29T06:31:05Z
- body excerpt: ## What Wrap local `exec.approvals.get` and `exec.approvals.set` gateway handlers in structured unavailable-error handling. ## Why May gateway logs showed approval RPC traffic (`exec.approval.list`) but local approvals persistence paths could still throw throu

### #79853 test(model-usage): make helper tests runnable from repo root

- bucket: ready_for_maintainer
- author: suyua9
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient
- updated: 2026-05-29T06:31:06Z
- body excerpt: ## Summary - Add the model-usage script directory to `sys.path` before importing `model_usage` in its unittest file. - Keep the change scoped to the test harness so runtime script behavior is unchanged. ## Reproduction Before this change, running the checked-i

### #79852 fix(memory-core): apply temporal decay to session-reset archive paths

- bucket: ready_for_maintainer
- author: buyitsydney
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- updated: 2026-05-29T06:31:08Z
- body excerpt: ## Summary `memorySearch.query.hybrid.temporalDecay` is silently a no-op for session-reset archives in real deployments. Enabling it ends up *demoting* the curated `memory/YYYY-MM-DD.md` notes while leaving the much larger pool of stale session transcripts at 

### #79846 docs: add troubleshooting table to getting-started guide

- bucket: stale_unassigned
- author: RockENZO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied
- updated: 2026-05-29T06:31:10Z
- body excerpt: ## Summary - Adds a concise troubleshooting table to the [Getting Started](https://docs.openclaw.ai/start/getting-started) guide covering the four most common first-run blockers: missing command, gateway not starting, model auth errors, and outdated Node versi

### #79626 [codex] Fix image describe MIME detection

- bucket: ready_for_maintainer
- author: justinbao19
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: ⏳ waiting on author
- updated: 2026-05-29T06:31:23Z
- body excerpt: ## Summary Fixes `openclaw infer image describe` so local image files pass their detected MIME type into the media-understanding runtime. Previously the CLI resolved the file path but did not pass a MIME type to `describeImageFile` / `describeImageFileWithMode

