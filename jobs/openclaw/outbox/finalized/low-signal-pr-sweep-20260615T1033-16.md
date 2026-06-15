---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-16
mode: plan
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#62722"
  - "#62307"
  - "#90487"
  - "#90876"
  - "#90966"
cluster_refs:
  - "#62722"
  - "#62307"
  - "#90487"
  - "#90876"
  - "#90966"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.324Z."
---

# Low-Signal PR Sweep 16

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #62722 fix(gateway): use already-aborted signal in stopChannel fallback

- author: pruthvishetty
- updated: 2026-06-06T04:47:35Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - In `stopChannel`, when no `AbortController` exists for an account (i.e. no running task), the fallback `new AbortController().signal` creates a signal from an anonymous controller that **can never be aborted** - `stopAccount` i
- changed files: not hydrated in gitcrawl

### #62307 feat(whatsapp): handle message edits and revocations

- author: kencan666-ai
- updated: 2026-06-06T04:50:04Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary This PR adds support for WhatsApp's native message edit feature, which was introduced in 2023. Currently, if a user accidentally sends an incomplete message and then edits it in WhatsApp, the OpenClaw agent processes the original
- changed files: not hydrated in gitcrawl

### #90487 fix: harden ChatGPT Responses missing content-type streams

- author: anyech
- updated: 2026-06-06T07:41:38Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Builds on #90399 and narrows the missing-`Content-Type` workaround to the native ChatGPT/Codex Responses stream path. - send `Accept: text/event-stream` for native ChatGPT/Codex Responses SDK stream requests, including the transp
- changed files: not hydrated in gitcrawl

### #90876 docs: add ForAI provider setup guide

- author: qianwu007
- updated: 2026-06-06T07:42:39Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary This PR adds documentation for configuring ForAI as an OpenAI-compatible provider. ## What is included - Provider setup instructions - Base URL configuration examples - API key setup guidance - OpenAI-compatible endpoint examples
- changed files: not hydrated in gitcrawl

### #90966 fix(feishu): report transport activity (connected/lastEventAt) for health monitor

- author: Acache
- updated: 2026-06-06T16:45:19Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Description fix(feishu): report transport activity (connected/lastEventAt) for health monitor feishu channel never published transport-level status such as connected, lastConnectedAt, lastEventAt, or lastTransportActivityAt. This meant t
- changed files: not hydrated in gitcrawl

