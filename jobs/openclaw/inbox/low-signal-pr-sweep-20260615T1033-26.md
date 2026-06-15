---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-26
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
  - "#85696"
  - "#90745"
  - "#92649"
  - "#92647"
  - "#92654"
cluster_refs:
  - "#85696"
  - "#90745"
  - "#92649"
  - "#92647"
  - "#92654"
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

# Low-Signal PR Sweep 26

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #85696 fix(agent): use static catalog for embedded model fast path

- author: leno23
- updated: 2026-06-13T09:38:53Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Closes #84783. - Lets the embedded agent runner use bundled static catalog rows during its skip-agent-discovery model-resolution fast path. - Resolves static catalog rows before provider dynamic hooks on that fast path, avoidin
- changed files: not hydrated in gitcrawl

### #90745 fix: carry reply metadata into runtime context

- author: clawSean
- updated: 2026-06-13T13:27:15Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds a first-class current-turn reply metadata payload to `CurrentInboundPromptContext` so Telegram/forum reply facts survive the reply prompt/runtime handoff as structured OpenClaw metadata. This is the Morty patch shape, polish
- changed files: not hydrated in gitcrawl

### #92649 feat(kimi): show code quota in usage status

- author: litang9
- updated: 2026-06-13T15:25:50Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds Kimi Code usage reporting to the existing provider usage pipeline. - Adds a Kimi usage fetcher for `GET https://api.kimi.com/coding/v1/usages`. - Parses Kimi Code `5h` and `7d` quota windows into the existing usage snapshot 
- changed files: not hydrated in gitcrawl

### #92647 fix(memory): attribute corpus=all timeouts to the slow branch instead of the provider

- author: Bartok9
- updated: 2026-06-13T16:35:49Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - `memory_search` with `corpus=all` could hit the 15s tool deadline and return a "Memory search is unavailable due to an embedding/provider error" warning even when the embedding provider probe and every individual corpus searche
- changed files: not hydrated in gitcrawl

### #92654 feat(control-ui): add right-click Reply in Dashboard webchat

- author: programmingWTF
- updated: 2026-06-13T17:30:55Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds right-click Reply to messages in the Dashboard / Control UI webchat - Right-click any chat bubble → "Reply" option → reply preview bar appears above the composer → type reply → message auto-prepended with Markdown blockquo
- changed files: not hydrated in gitcrawl

