---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-034
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
  - "#86561"
  - "#86749"
  - "#86554"
  - "#86873"
  - "#86608"
  - "#86062"
  - "#85878"
  - "#85793"
  - "#85745"
  - "#85727"
cluster_refs:
  - "#86561"
  - "#86749"
  - "#86554"
  - "#86873"
  - "#86608"
  - "#86062"
  - "#85878"
  - "#85793"
  - "#85745"
  - "#85727"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 34

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #86561 feat(zalouser): add groupLink action to fetch a group's invite link

- bucket: ready_for_maintainer
- author: JOY
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-29T05:19:24Z
- body excerpt: ## What Adds a `groupLink` action to the zalouser tool that returns a group's shareable invite link. The tool can already `groups` (list) and `link` (send a URL as a message), but there was no way to read a group's invite link. ## Changes - `zca-client.ts`: ad

### #86749 fix: install gogcli and add linuxbrew to global PATH

- bucket: needs_proof
- author: jarvis-ai-gregmoser
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-29T05:20:01Z
- body excerpt: Fixes missing gogcli and PATH issues for sandbox image.

### #86554 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set

- bucket: needs_proof
- author: liaoyl830
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-29T05:20:17Z
- body excerpt: ## Summary - proxy providers like OpenCode Zen can expose DeepSeek V4 models through `opencode-native`, so endpoint-class detection alone does not preserve `reasoning_content` replay - add `deepseek-v4-flash-free` and `big-pickle` to the replay model allowlist

### #86873 fix(line): add chunk-idle timeout to inbound media download

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- updated: 2026-05-29T05:58:03Z
- body excerpt: ## Summary `downloadLineMedia` in `extensions/line/src/download.ts` wraps the LINE Messaging API `getMessageContent` response in a `for-await` loop with no read deadline. When the LINE CDN returns HTTP headers but then stalls the body stream, the function bloc

### #86608 docs: add existing-solutions preflight guardrail

- bucket: ready_for_maintainer
- author: cablackmon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- updated: 2026-05-29T06:23:03Z
- body excerpt: ## Summary - add a repo-root AGENTS.md rule requiring a lightweight existing-solutions check before custom builds - add the same reusable guardrail to default workspace AGENTS templates and the Kubernetes starter AGENTS config - keep wording scoped to open-sou

### #86062 feat(ui): timestamp unnamed dashboard sessions

- bucket: ready_for_maintainer
- author: davidmosiah
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- updated: 2026-05-29T06:23:34Z
- body excerpt: ## Summary - Problem: new Control UI dashboard sessions without a label/displayName fall back to raw session keys, making multiple new chats hard to distinguish. - Solution: add a Control UI fallback that renders unnamed dashboard sessions as their local creat

### #85878 fix(telegram): retain superseded draft previews

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: XS, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-29T06:23:53Z
- body excerpt: Summary: - Preserve Telegram draft previews that were superseded after a new generation already forced a new message. - Recreates #85825 on a maintainer branch because the original contributor branch no longer allows maintainer updates. Behavior addressed: Tel

### #85793 docs(github): make post-install restart explicit

- bucket: needs_proof
- author: nielskaspers
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- updated: 2026-05-29T06:23:57Z
- body excerpt: ## Summary - Problem: GitHub skill restart requirement after installing `gh` is easy to miss. - Solution: Make the restart guidance explicit and add the canonical restart command. - What changed: Expanded `skills/github/SKILL.md` Auth section with restart + HO

### #85745 fix(discord): add configurable REST API timeout via channels.discord.apiTimeoutMs

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: needs-real-behavior-proof
- updated: 2026-05-29T06:24:00Z
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config schema (max 120000ms). Threads it through to `RequestClient` where the REST timeout was previously hardcoded at 15s. ## Root Cause Large guild operations (ban lists, channel enumerat

### #85727 docs: add first run setup steps to CONTRIBUTING.md

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof
- updated: 2026-05-29T06:24:03Z
- body excerpt: ## Summary - Added "First Run Setup" section to CONTRIBUTING.md with step-by-step instructions - Covers API key setup, doctor verification, gateway startup, and quick test - Added links to full config and provider docs ## Problem New contributors didn't have c

