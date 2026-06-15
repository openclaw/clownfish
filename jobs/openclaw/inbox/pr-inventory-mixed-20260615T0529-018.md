---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-018
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
  - "#72215"
  - "#72285"
  - "#72129"
  - "#72352"
  - "#72358"
  - "#72404"
  - "#72428"
  - "#85368"
  - "#72495"
  - "#72690"
cluster_refs:
  - "#72215"
  - "#72285"
  - "#72129"
  - "#72352"
  - "#72358"
  - "#72404"
  - "#72428"
  - "#85368"
  - "#72495"
  - "#72690"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 18

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #72215 Gateway: allow cron.enabled and compaction mode config paths

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-22T21:05:59Z
- body excerpt: ## Summary - Add `cron.enabled` to the gateway tool config mutation allowlist so owner automation can toggle cron through `config.patch`. - Add `agents.defaults.compaction.mode` to the same allowlist so compaction mode can be updated via API-driven gateway edi

### #72285 Status: show post-compaction context tokens when totals are stale

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-05-22T21:06:36Z
- body excerpt: ## Summary - Fix status context reporting to prefer fresh totals and fall back to the latest compaction checkpoint `tokensAfter` when session totals are marked stale. - Keep context usage output aligned with post-compaction state so users do not see pre-compac

### #72129 feat(huggingface): add text-to-image generation via hf-inference Inference Providers route

- bucket: ready_for_maintainer
- author: lyfuci
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: huggingface, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-22T21:36:56Z
- body excerpt: ## Summary Re-opens #63487 in a much smaller, focused form per @steipete's review feedback. Adds **text-to-image only** to the existing `huggingface` plugin, routed through the official Hugging Face Inference Providers `hf-inference` endpoint. No new credentia

### #72352 fix(agents): scope provider discovery from configured models

- bucket: needs_proof
- author: Stedyclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-05-22T21:38:52Z
- body excerpt: ## Summary Reduces unnecessary provider/plugin discovery work by scoping non-live provider discovery to the plugins implied by configured models and providers. While profiling slow OpenClaw startup, the hot path was broad plugin manifest/provider discovery eve

### #72358 chore(ci): harden package-manager resolution

- bucket: needs_proof
- author: mcgrew-oai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-22T21:38:57Z
- body excerpt: ## Summary - Problem: CI and repo scripts had several package-resolution escape hatches: `pnpm dlx`, docs publish `npm install --no-save --package-lock=false`, non-hash-pinned pre-commit hook refs, stale pnpm pins, and Python CI installs that only implicitly r

### #72404 fix(models): default input=[text,image] for vision-capable explicit-only models

- bucket: ready_for_maintainer
- author: aaronedell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-22T21:39:26Z
- body excerpt: ## Summary Fixes #71921. When a user's `openclaw.json` contains a static model catalog for a provider (e.g. `amazon-bedrock`) and an entry omits the `input` field, `mergeProviderModels` previously returned that entry unchanged whenever discovery had no matchin

### #72428 fix(auto-reply): surface progress for long reply runs

- bucket: needs_proof
- author: alexlomt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-22T21:39:35Z
- body excerpt: ## Summary - add a deterministic reply-run progress watchdog for long user-triggered runs - reset the watchdog whenever a visible reply/progress callback fires - add an empty-final fallback so user-triggered runs that complete without visible output surface a 

### #85368 fix(media): avoid eager provider startup for audio listing

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, extensions: senseaudio, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- updated: 2026-05-22T21:45:15Z
- body excerpt: ## Summary - list audio transcription providers from manifest metadata instead of constructing the runtime media-understanding registry - add missing bundled SenseAudio provider metadata so `capability audio providers` can report it without loading runtime cod

### #72495 fix(agents): harden workspace bootstrap cache identity

- bucket: needs_proof
- author: aimqwest
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-05-22T22:03:17Z
- body excerpt: Objective Harden the guarded workspace bootstrap file cache identity so an equal-size in-place edit with restored `mtime` cannot keep stale bootstrap instructions cached. This is the narrow cache-identity follow-up to the security tradeoff surfaced on #72406 a

### #72690 Feature/issue: 71428 manifest conversation access

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, triage: needs-real-behavior-proof, extensions: oc-path, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-22T22:05:33Z
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

