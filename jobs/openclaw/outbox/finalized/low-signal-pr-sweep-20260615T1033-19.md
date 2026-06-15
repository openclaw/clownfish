---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-19
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
  - "#86556"
  - "#54183"
  - "#59884"
  - "#78664"
  - "#75126"
cluster_refs:
  - "#86556"
  - "#54183"
  - "#59884"
  - "#78664"
  - "#75126"
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

# Low-Signal PR Sweep 19

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #86556 fix(codex): retire MCP app-server helpers

- author: emergentash
- updated: 2026-06-10T05:18:24Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Rebase onto current `origin/main` after the shared Codex app-server lease API landed upstream. - Retire stdio shared app-server clients after a completed turn that projected user MCP servers, using the existing `retireSharedCod
- changed files: not hydrated in gitcrawl

### #54183 WhatsApp: add configurable send retry for transient network errors

- author: hassansys2
- updated: 2026-06-10T06:08:43Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Closes #54103 ## Summary Adds configurable outbound send retry with exponential backoff for the WhatsApp channel, applied to all three send paths (text, media, poll). The retry is active by default with no config change needed. **What chang
- changed files: not hydrated in gitcrawl

### #59884 Fix compaction safeguard auth lookup for newer model registries [AI-assisted]

- author: SHAREN
- updated: 2026-06-10T06:13:33Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a compat request-auth resolver for compaction safeguard that tries `getApiKeyAndHeaders`, `getApiKeyForProvider`, and legacy `getApiKey` - use that resolver in the safeguard instead of assuming a single model-registry auth 
- changed files: not hydrated in gitcrawl

### #78664 perf(agents): cache provider tool schema normalization

- author: guanbear
- updated: 2026-06-10T06:47:11Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Cache provider-normalized tool schema `parameters` for repeated embedded agent turns, but only when OpenClaw can identify one of its bundled SDK tool-compat normalizers. - Keep the cache internal and conservative: bundled DeepS
- changed files: not hydrated in gitcrawl

### #75126 Add strict tool mode diagnostics and report contracts

- author: JasonZHANGTianrui
- updated: 2026-06-10T11:19:18Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Implements strict tool mode plumbing across embedded runs, transport streams, and OpenAI-compatible gateway responses. Changes include: Adds strict/warn/off tool strictness handling for tool argument repairs, alias repairs, and tool-name no
- changed files: not hydrated in gitcrawl

