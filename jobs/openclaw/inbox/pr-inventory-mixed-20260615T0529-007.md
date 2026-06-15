---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-007
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
  - "#82691"
  - "#82165"
  - "#82718"
  - "#82734"
  - "#81364"
  - "#82822"
  - "#82856"
  - "#82971"
  - "#82870"
  - "#83097"
cluster_refs:
  - "#82691"
  - "#82165"
  - "#82718"
  - "#82734"
  - "#81364"
  - "#82822"
  - "#82856"
  - "#82971"
  - "#82870"
  - "#83097"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 7

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #82691 feat(messages): add toolMessageLogging override

- bucket: needs_proof
- author: laorient
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2
- updated: 2026-05-16T18:16:08Z
- body excerpt: ## Summary - add a `messages.toolMessageLogging` configuration override to control tool-message logging behavior - wire the setting through schema labels/help/types and session zod schema - cover config dispatch behavior with auto-reply tests ## Test - `pnpm e

### #82165 feat(agents): add opt-in identityLine + identityMode config knobs

- bucket: ready_for_maintainer
- author: cael-dandelion-cult
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: M, proof: supplied, proof: sufficient, P2
- updated: 2026-05-16T19:07:55Z
- body excerpt: ## Summary OpenClaw hard-codes the system-prompt opening line to: > "You are a personal assistant running inside OpenClaw." There's an existing `systemPromptOverride` knob, but it requires authoring the entire prompt from scratch — losing all tooling/skills/me

### #82718 docs(telegram): clarify account-local group config

- bucket: ready_for_maintainer
- author: hyjkimbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, size: M, proof: supplied, proof: sufficient
- updated: 2026-05-16T19:53:47Z
- body excerpt: ## Summary - Problem: Telegram docs pointed group setup at root \`channels.telegram.groups\`, which is easy to misread in multi-account configs. - Why it matters: a bot account can receive a group message from Telegram but still drop it during OpenClaw group p

### #82734 Bound tool transcript payloads

- bucket: needs_proof
- author: TheeMoneyTree
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2
- updated: 2026-05-16T20:45:37Z
- body excerpt: ## Summary - bound oversized tool argument strings before they enter transcript events - apply the same bounded truncation to deeply nested tool result strings while preserving visible leading context and metadata - add focused tests for apply-patch-style args

### #81364 Check ClawHub trust before plugin installs

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: docs, cli, scripts, commands, maintainer, size: XL, P1
- updated: 2026-05-17T00:07:54Z
- body excerpt: ## Summary Reapplies the ClawHub plugin-install trust check from #81307 after the revert in #81363. This PR keeps the original trust-check scope: - check ClawHub exact-release trust before ClawHub plugin downloads - require interactive acknowledgement, or `--a

### #82822 fix: cap isolated telegram ingress long poll timeout

- bucket: ready_for_maintainer
- author: GONZO304
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, P2
- updated: 2026-05-17T01:35:38Z
- body excerpt: ## Summary - cap isolated ingress long-poll timeout to the regular 30s polling ceiling - log configured timeout, effective poll timeout, and request timeout for startup diagnostics - add tests covering the timeout cap and diagnostic logging ## Why The isolated

### #82856 fix(codex): rotate transcript after harness compaction

- bucket: ready_for_maintainer
- author: hansolo949
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, impact:session-state
- updated: 2026-05-17T03:28:43Z
- body excerpt: ## Summary - Rotate the active transcript after a successful agent-harness compaction when the harness did not already return a successor transcript. - Add an opt-in synthetic compaction boundary for external harness compaction that does not write an OpenClaw 

### #82971 [codex] Guard Control UI protocol in npm release check

- bucket: needs_proof
- author: lamkan0210
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P1, impact:crash-loop
- updated: 2026-05-17T06:45:08Z
- body excerpt: ## Summary - add an npm release-package guard that scans packed Control UI JS assets for advertised Gateway protocol levels - compare those advertised `minProtocol` / `maxProtocol` values against `src/gateway/protocol/version.ts` - cover stale and current Cont

### #82870 fix(agent): keep tool media authoritative in replies

- bucket: ready_for_maintainer
- author: Merlinzy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, impact:message-loss
- updated: 2026-05-17T07:39:38Z
- body excerpt: ## Summary - Keep tool-produced media authoritative when an assistant reply also contains `MEDIA:` directives, so stale or invented assistant paths cannot override real tool artifacts. - Preserve attempt-level tool media after pending media is consumed by stre

### #83097 fix(slack): normalize trust metadata for external system events

- bucket: ready_for_maintainer
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, proof: supplied, proof: sufficient
- updated: 2026-05-17T13:10:42Z
- body excerpt: ## Summary - Problem: several Slack event-family handlers enqueue external workspace events without the same explicit non-owner trust metadata used by adjacent Slack handlers. - Why it matters: member, pin, message subtype, and modal lifecycle events originate

