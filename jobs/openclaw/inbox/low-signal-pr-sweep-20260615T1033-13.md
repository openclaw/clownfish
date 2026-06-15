---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-13
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
  - "#89966"
  - "#90063"
  - "#89816"
  - "#90069"
  - "#89783"
cluster_refs:
  - "#89966"
  - "#90063"
  - "#89816"
  - "#90069"
  - "#89783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.322Z."
---

# Low-Signal PR Sweep 13

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #89966 docs: add firecrawl.dev links on the Firecrawl tool page

- author: rakshith48
- updated: 2026-06-03T18:35:43Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: The Firecrawl tool page mentioned Firecrawl only as plain text (the only URLs were `api.firecrawl.dev` API endpoints inside code blocks). This adds two links to `docs/tools/firecrawl.md`: - the first **Firecrawl** brand mention in the intro
- changed files: not hydrated in gitcrawl

### #90063 fix(channels): clarify message receipt delivery evidence

- author: pdurlej
- updated: 2026-06-04T00:54:19Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add `createMessageReceiptDeliveryEvidence(...)` for turning a `MessageReceipt` into explicit operator-facing delivery evidence. - Re-export the helper through `openclaw/plugin-sdk/channel-outbound` for channel plugins/status su
- changed files: not hydrated in gitcrawl

### #89816 docs(gateway): add launchd supervisor loop troubleshooting

- author: Pick-cat
- updated: 2026-06-04T01:14:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a macOS launchd troubleshooting section for the duplicate `ai.openclaw.gateway` / `ai.openclaw.node` supervisor loop reported in #89791 - document the correct env-wrapper `unset` ordering, a dry-run verification command, th
- changed files: not hydrated in gitcrawl

### #90069 docs: explain message tool turn termination

- author: ffluk3
- updated: 2026-06-04T02:07:59Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Summary: - Document that `visibleReplies: "message_tool"` maps to message-tool-only delivery. - Explain that successful implicit current-source `message(action="send")` calls terminate the turn. - Add sub-agent guidance to use explicit rout
- changed files: not hydrated in gitcrawl

### #89783 feat(feishu): bot-to-bot conversation support with @mention handling

- author: GeekyMax
- updated: 2026-06-05T03:56:20Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Makes Feishu bot-to-bot conversations actually work. Bot-authored messages already reach dispatch on `main` (nothing gates them out), so bots could already "talk" — but the experience was broken: replies frequently never reached 
- changed files: not hydrated in gitcrawl

