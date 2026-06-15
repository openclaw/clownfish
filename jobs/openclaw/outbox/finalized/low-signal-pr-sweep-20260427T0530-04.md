---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260427T0530-04
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
  - "#62542"
  - "#64179"
  - "#63330"
  - "#61203"
  - "#65692"
cluster_refs:
  - "#62542"
  - "#64179"
  - "#63330"
  - "#61203"
  - "#65692"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-27T05:30:28.555Z."
---

# Low-Signal PR Sweep 4

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #62542 feat(models): add per-provider retry config with retryOnStatus

- author: cheapestinference
- updated: 2026-04-07T20:46:33Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 14
- body excerpt: ## Summary Adds support for configurable retry behavior in inference provider configurations (`openclaw.json`), allowing users to specify which HTTP status codes should trigger retries along with backoff parameters. ### Example configuratio
- changed files: docs/.generated/config-baseline.sha256, docs/.generated/plugin-sdk-api-baseline.sha256, extensions/discord/src/api.ts, extensions/discord/src/monitor/reply-delivery.ts, extensions/discord/src/retry.ts, src/agents/pi-embedded-runner/model.inline-provider.ts, src/agents/pi-embedded-runner/model.ts, src/agents/provider-request-config.ts, src/agents/provider-transport-fetch.ts, src/config/types.models.ts, src/config/zod-schema.core.ts, src/infra/retry-policy.ts, src/infra/retry.test.ts, src/infra/retry.ts

### #64179 Agents: add localized tool summaries

- author: hongzexin
- updated: 2026-04-10T14:39:29Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 14
- body excerpt: #### Summary Add configurable localization for inline tool summaries, plus an optional minimum interval between summary emissions. This keeps the default English behavior unchanged, while allowing operators to pick `zh-CN`, `ko`, or `ja` fo
- changed files: docs/.generated/config-baseline.sha256, docs/gateway/configuration-examples.md, docs/gateway/configuration-reference.md, src/agents/pi-embedded-runner/run/attempt.ts, src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.includes-canvas-action-metadata-tool-summaries.test.ts, src/agents/pi-embedded-subscribe.ts, src/agents/pi-embedded-subscribe.types.ts, src/auto-reply/reply/acp-projector.test.ts, src/auto-reply/reply/acp-projector.ts, src/auto-reply/tool-meta.test.ts, src/auto-reply/tool-meta.ts, src/config/schema.base.generated.ts, src/config/types.agent-defaults.ts, src/config/zod-schema.agent-defaults.ts

### #63330 feat(plugins): add session followup turn API and gateway-restart extension

- author: corbin-breton
- updated: 2026-04-12T14:25:34Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 15
- body excerpt: ## Summary Add a new `runtime.followup.enqueueFollowupTurn()` method to the plugin runtime, enabling plugins to schedule proactive agent turns for any session — including cold sessions with no active user interaction. > **Supersedes #60951*
- changed files: extensions/gateway-restart/index.test.ts, extensions/gateway-restart/index.ts, extensions/gateway-restart/openclaw.plugin.json, extensions/gateway-restart/package.json, extensions/qa-lab/src/multipass.runtime.ts, pnpm-lock.yaml, src/auto-reply/reply/queue/build-followup-run.test.ts, src/auto-reply/reply/queue/build-followup-run.ts, src/canvas-host/a2ui/.bundle.hash, src/plugins/runtime/index.ts, src/plugins/runtime/runtime-followup.test.ts, src/plugins/runtime/runtime-followup.ts, src/plugins/runtime/types-core.ts, src/utils/delivery-context.test.ts, test/helpers/plugins/plugin-runtime-mock.ts

### #61203 Docker: improve Mac Docker runtime on macOS

- author: ruslansv
- updated: 2026-04-12T20:07:43Z
- score: 2
- signals: risky_infra, dirty_branch
- files: 13
- body excerpt: ## What Improve the OpenClaw Docker runtime path on macOS. ## Why Running OpenClaw in Docker on macOS needs a few runtime-focused fixes to stay reliable: reproducible tool installs, safer privilege dropping, writable runtime paths, browser 
- changed files: Dockerfile, docker-compose.yml, docs/install/docker.md, docs/tools/browser.md, extensions/discord/src/monitor/native-command.model-picker.test.ts, scripts/docker/gateway-entrypoint.sh, scripts/docker/playwright-chromium.sh, scripts/docker/setup.sh, src/cli/plugin-registry.test.ts, src/docker-setup.e2e.test.ts, src/dockerfile.test.ts, src/gateway/server-startup-early.test.ts, src/plugins/channel-plugin-ids.test.ts

### #65692 tool result microcompress

- author: leochame
- updated: 2026-04-13T23:51:32Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 15
- body excerpt: Phase 1 of #65250. ## Summary - Problem: context pruning evaluated trim/clear thresholds against raw prunable tool-result text, so CRLF-heavy output, ANSI color codes, trailing whitespace, and repeated blank lines could inflate size and tri
- changed files: docs/concepts/session-pruning.md, docs/gateway/configuration-reference.md, src/agents/pi-hooks/context-pruning.test.ts, src/agents/pi-hooks/context-pruning/extension.ts, src/agents/pi-hooks/context-pruning/pruner.test.ts, src/agents/pi-hooks/context-pruning/pruner.ts, src/agents/pi-hooks/context-pruning/settings.ts, src/config/schema.base.generated.ts, src/config/schema.help.ts, src/config/schema.labels.ts, src/config/types.agent-defaults.ts, src/config/zod-schema.agent-defaults.test.ts, src/config/zod-schema.agent-defaults.ts, src/plugins/public-surface-loader.test.ts, src/plugins/public-surface-loader.ts

