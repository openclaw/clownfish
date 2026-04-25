---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260425T2355-04
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
  - "#55713"
  - "#55085"
  - "#50793"
  - "#53580"
  - "#57468"
cluster_refs:
  - "#55713"
  - "#55085"
  - "#50793"
  - "#53580"
  - "#57468"
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-25T23:55:27.812Z."
---

# Low-Signal PR Sweep 4

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #55713 docs: add Mattermost to reaction-capable platforms

- author: dlindegaard
- updated: 2026-03-27T10:06:13Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 2
- body excerpt: ## Summary - Add Mattermost to the list of reaction-capable platforms in the `AGENTS.md` workspace template - Add Mattermost accordion section to `docs/tools/reactions.md` channel behavior docs The Mattermost plugin fully supports emoji rea
- changed files: docs/reference/templates/AGENTS.md, docs/tools/reactions.md

### #55085 CLI: add stable setup surface export for dynamic provider/channel configuration UIs

- author: cgf120
- updated: 2026-03-27T14:08:14Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 13
- body excerpt: # CLI: add a stable setup surface export for dynamic provider/channel configuration UIs ## Summary This PR adds a stable, machine-readable setup surface export for OpenClaw so external UIs can render provider and channel configuration dynam
- changed files: docs/.generated/plugin-sdk-api-baseline.json, docs/.generated/plugin-sdk-api-baseline.jsonl, src/cli/program/command-registry.ts, src/cli/program/core-command-descriptors.ts, src/cli/program/register.configure.test.ts, src/cli/program/register.configure.ts, src/commands/configure-surface.test.ts, src/commands/configure-surface.ts, src/plugins/provider-api-key-auth.ts, src/plugins/types.ts, src/setup/surface-export.test.ts, src/setup/surface-export.ts, src/setup/surface-types.ts

### #50793 fix(cron): resolve false-positive delivery failures in isolated agent runs

- author: ench0812
- updated: 2026-03-29T15:23:31Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 100
- body excerpt: ## Summary - **fix(message):** Promote `channel` to `target` when LLM omits the `target` param — LLMs (especially gpt-5-mini in cron/isolated contexts) sometimes pass `channel: "channel:123456"` instead of `target: "channel:123456"`. Withou
- changed files: .github/labeler.yml, .gitignore, AGENTS.md, docs/gateway/configuration-reference.md, docs/help/faq.md, docs/help/testing.md, docs/tools/pdf.md, docs/zh-CN/gateway/configuration.md, docs/zh-CN/help/faq.md, docs/zh-CN/help/testing.md, extensions/copilot-proxy/index.ts, extensions/jarvis/CHANGELOG.md, extensions/jarvis/index.ts, extensions/jarvis/openclaw.plugin.json, extensions/jarvis/package.json, extensions/jarvis/src/mcp-client.test.ts, extensions/jarvis/src/mcp-client.ts, extensions/jarvis/src/python-check.test.ts

### #53580 WIP: feat: add acp provider plugin — use acp agent as llm providers

- author: yaonyan
- updated: 2026-03-30T02:52:56Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 15
- body excerpt: use acp agent as llm providers ## changes - \`extensions/acp-provider/\` — new plugin w/ stream bridging, provider catalog, onboard helpers, and tests - \`src/plugins/contracts/registry.ts\` — register the new plugin - \`src/plugins/manifes
- changed files: extensions/acp-provider/acp-stream-bridge.ts, extensions/acp-provider/index.test.ts, extensions/acp-provider/index.ts, extensions/acp-provider/onboard.ts, extensions/acp-provider/openclaw.plugin.json, extensions/acp-provider/package.json, extensions/acp-provider/provider-catalog.ts, pnpm-lock.yaml, src/agents/pi-embedded-runner/extra-params.ts, src/agents/pi-embedded-runner/run/attempt.ts, src/plugins/bundled-plugin-metadata.generated.ts, src/plugins/bundled-provider-auth-env-vars.generated.ts, src/plugins/contracts/registry.ts, src/plugins/manifest-registry.ts, src/plugins/types.ts

### #57468 refactor(models): centralize model metadata and provider-aware resolution

- author: paul-tian
- updated: 2026-03-30T04:38:07Z
- score: 2
- signals: refactor_or_cleanup, third_party_or_external_capability
- files: 26
- body excerpt: ## Summary - add a shared configured model metadata layer for durable provider/model traits like context window, max tokens, reasoning, and modality - route model catalog, model selection, context-window resolution, and status-summary runti
- changed files: docs/cli/models.md, docs/concepts/models.md, docs/gateway/configuration-reference.md, extensions/openai/openai-codex-provider.ts, src/agents/context-window-guard.ts, src/agents/context.test.ts, src/agents/context.ts, src/agents/model-catalog.test.ts, src/agents/model-catalog.ts, src/agents/model-metadata.test.ts, src/agents/model-metadata.ts, src/agents/model-selection.ts, src/agents/pi-embedded-runner/extra-params.ts, src/auto-reply/reply/agent-runner.ts, src/auto-reply/reply/directive-handling.persist.ts, src/auto-reply/reply/followup-runner.ts, src/commands/sessions.ts, src/commands/status.format.ts

