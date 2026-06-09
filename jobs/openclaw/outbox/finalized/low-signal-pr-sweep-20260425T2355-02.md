---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260425T2355-02
mode: autonomous
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
  - "#47878"
  - "#46552"
  - "#43214"
  - "#43190"
  - "#43170"
cluster_refs:
  - "#47878"
  - "#46552"
  - "#43214"
  - "#43190"
  - "#43170"
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-25T23:55:27.810Z."
---

# Low-Signal PR Sweep 2

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #47878 docs: add read, write, edit tool documentation

- author: JFWaskin
- updated: 2026-03-24T20:15:57Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: Document the core file operation tools (read, write, edit) in the tool inventory. These tools are part of group:fs but lacked individual documentation entries. This follows the pattern of recent docs PRs for memory tools (#45816). **Changes
- changed files: docs/tools/index.md

### #46552 docs(queue): clarify steer behavior with partial streaming and tool boundaries

- author: xenouzik
- updated: 2026-03-24T20:16:01Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## What Adds a new **Steer and partial streaming** section to `docs/concepts/queue.md` and expands the Troubleshooting section. ## Why Users on streaming surfaces (e.g. Discord with `streaming: partial`) can observe what looks like steer no
- changed files: docs/concepts/queue.md

### #43214 docs: add ClawAid community tool to troubleshooting pages

- author: jjj5666
- updated: 2026-03-24T20:16:15Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 2
- body excerpt: ## Summary Adds a **Community tools** section to the troubleshooting docs (English + Chinese), mentioning [ClawAid](https://github.com/jjj5666/clawaid) as an AI-powered auto-diagnosis option. ## What is ClawAid? ClawAid is a community-built
- changed files: docs/help/troubleshooting.md, docs/zh-CN/help/troubleshooting.md

### #43190 MS Teams: add channel archive persistence and deleted-channel cleanup

- author: hddevteam
- updated: 2026-03-24T20:16:16Z
- score: 3
- signals: refactor_or_cleanup, third_party_or_external_capability, dirty_branch
- files: 28
- body excerpt: ## Summary - add a new `extensions/msteams-channel-archive` plugin for persistent Teams channel archiving - persist channel messages plus archived attachments, and expose archive query tools - add deleted-channel cleanup, including a `chann
- changed files: .github/labeler.yml, extensions/msteams-channel-archive/index.test.ts, extensions/msteams-channel-archive/index.ts, extensions/msteams-channel-archive/openclaw.plugin.json, extensions/msteams-channel-archive/package.json, extensions/msteams-channel-archive/src/archive-store.test.ts, extensions/msteams-channel-archive/src/archive-store.ts, extensions/msteams-channel-archive/src/channel-cleanup.test.ts, extensions/msteams-channel-archive/src/channel-cleanup.ts, extensions/msteams-channel-archive/src/tools.ts, extensions/msteams-channel-archive/src/types.ts, extensions/msteams/src/attachments.test.ts, extensions/msteams/src/attachments/html.ts, extensions/msteams/src/attachments/shared.ts, extensions/msteams/src/monitor-handler.file-consent.test.ts, extensions/msteams/src/monitor-handler.ts, extensions/msteams/src/monitor-handler/message-handler.ts, extensions/msteams/src/monitor.ts

### #43170 feat(acp): extend persistent bindings to feishu and qqbot channels

- author: CrazyBoyM
- updated: 2026-03-24T20:16:16Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 16
- body excerpt: ## Summary Extend ACP persistent bindings to Feishu and QQ bot channels, and add `acp.defaultChannels` for implicit catch-all ACP binding synthesis. This lets users route all messages on a channel through an external agent CLI (Claude Code,
- changed files: README.md, docs/tools/acp-agents.md, extensions/feishu/src/bot.ts, src/acp/persistent-bindings.resolve.ts, src/acp/persistent-bindings.test.ts, src/acp/persistent-bindings.types.ts, src/auto-reply/reply/commands-subagents/action-agents.ts, src/config/plugin-auto-enable.test.ts, src/config/plugin-auto-enable.ts, src/config/schema.help.ts, src/config/schema.labels.ts, src/config/types.acp.ts, src/config/zod-schema.agents.ts, src/config/zod-schema.ts, src/plugin-sdk/feishu.ts, src/plugin-sdk/index.ts

