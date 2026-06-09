---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260427T0530-01
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
  - "#53720"
  - "#50955"
  - "#48659"
  - "#55104"
  - "#53948"
cluster_refs:
  - "#53720"
  - "#50955"
  - "#48659"
  - "#55104"
  - "#53948"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-27T05:30:28.550Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #53720 feat(agents): add per-agent enabled/disabled flag for non-destructive suspension

- author: nabbilkhan
- updated: 2026-03-24T20:15:29Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 19
- body excerpt: ## Summary - Add optional `enabled?: boolean` field to `agents.list[]` entries. When `false`, the agent is fully suspended: no routing, cron, heartbeat, or channel polling. - Add `openclaw agents disable <id>` and `openclaw agents enable <i
- changed files: CHANGELOG.md, docs/.generated/config-baseline.json, docs/.generated/config-baseline.jsonl, docs/cli/agents.md, src/agents/agent-scope.ts, src/agents/subagent-spawn.workspace.test.ts, src/cli/program/register.agent.ts, src/commands/agents.commands.delete.ts, src/commands/agents.commands.disable.ts, src/commands/agents.commands.enable.ts, src/commands/agents.commands.list.ts, src/commands/agents.config.ts, src/commands/agents.enabled.test.ts, src/commands/agents.ts, src/config/schema.base.generated.ts, src/config/types.agents.ts, src/config/zod-schema.agent-runtime.ts, src/routing/resolve-route.enabled.test.ts

### #50955 fix(acp): unify thread-bound session binding and delivery routing

- author: TSHOGX
- updated: 2026-03-24T20:15:42Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 23
- body excerpt: ## Summary - Problem: native `sessions_spawn(runtime:"acp", thread:true, mode:"session")` used a different ACP thread-binding path than `/acp spawn`, hard-required `child` placement, and inferred bootstrap delivery targets from incomplete c
- changed files: docs/.generated/config-baseline.json, docs/.generated/config-baseline.jsonl, docs/.generated/plugin-sdk-api-baseline.json, docs/.generated/plugin-sdk-api-baseline.jsonl, extensions/discord/src/channel.ts, extensions/feishu/src/channel.ts, extensions/telegram/src/channel.ts, src/acp/conversation-id.ts, src/agents/acp-placement.ts, src/agents/acp-spawn-origin.ts, src/agents/acp-spawn.ts, src/agents/openclaw-tools.ts, src/agents/subagent-announce.ts, src/agents/tools/sessions-announce-target.ts, src/agents/tools/sessions-helpers.ts, src/agents/tools/sessions-send-helpers.ts, src/agents/tools/sessions-send-tool.a2a.ts, src/agents/tools/sessions-spawn-tool.ts

### #48659 MSTeams: harden channel integration and readable focus labels

- author: hddevteam
- updated: 2026-03-24T20:15:53Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 39
- body excerpt: ## Summary - Problem: MS Teams channel conversations still had rough edges around archive persistence, thread-default replies, JSON/media ingress handling, and DM follow-up context could only remember a raw recent channel target instead of 
- changed files: .github/labeler.yml, CHANGELOG.md, extensions/diffs/src/viewer-client.ts, extensions/msteams-channel-archive/index.test.ts, extensions/msteams-channel-archive/index.ts, extensions/msteams-channel-archive/openclaw.plugin.json, extensions/msteams-channel-archive/package.json, extensions/msteams-channel-archive/src/archive-store.test.ts, extensions/msteams-channel-archive/src/archive-store.ts, extensions/msteams-channel-archive/src/channel-cleanup.test.ts, extensions/msteams-channel-archive/src/channel-cleanup.ts, extensions/msteams-channel-archive/src/tools.ts, extensions/msteams-channel-archive/src/types.ts, extensions/msteams/src/__tests__/monitor-json-repair.test.ts, extensions/msteams/src/attachments.test.ts, extensions/msteams/src/attachments/graph.ts, extensions/msteams/src/attachments/html.ts, extensions/msteams/src/attachments/shared.ts

### #55104 feat: land harness engineering control plane

- author: forestsong
- updated: 2026-03-26T11:09:41Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 100
- body excerpt: ## Summary This PR lands the main harness engineering control-plane work from the last 3 days. It moves OpenClaw from a mostly opaque agent runtime toward a more legible, constrained, and verifiable harness by adding: - workspace policy dis
- changed files: OPENCLAW.md, docs/automation/hooks.md, docs/automation/standing-orders.md, docs/concepts/agent-workspace.md, docs/concepts/context.md, docs/concepts/docs-index.md, docs/concepts/harness-roadmap.md, docs/concepts/system-prompt.md, docs/exec-plans/README.md, docs/exec-plans/harness-agent-first-system.md, docs/exec-plans/role-scoped-build-loop-phase-1-backlog.md, docs/exec-plans/role-scoped-build-loop.md, docs/reference/token-use.md, docs/start/openclaw.md, docs/tech-debt/README.md, docs/tech-debt/harness-platform-gaps.md, docs/tools/subagents.md, docs/zh-CN/automation/hooks.md

### #53948 feat(local-models): standardize tool calling with ReAct fallback & th…

- author: karpizin
- updated: 2026-03-27T22:53:51Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 25
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Many open-source models (especially small or aggressively quantized ones) lack reliable native JSON tool-calling capabilities. Furthermore, reasoning models served via gener
- changed files: CHANGELOG.md, docs/.generated/config-baseline.json, docs/.generated/config-baseline.jsonl, docs/.generated/plugin-sdk-api-baseline.json, docs/.generated/plugin-sdk-api-baseline.jsonl, docs/gateway/local-models.md, docs/providers/ollama.md, docs/rfc/local-tools-standardization.md, src/agents/local/capabilities-cache.ts, src/agents/local/capabilities-discovery.test.ts, src/agents/local/capabilities-discovery.ts, src/agents/local/capability-prober.test.ts, src/agents/local/capability-prober.ts, src/agents/local/react-fallback-stream-integration.test.ts, src/agents/local/react-fallback-stream.test.ts, src/agents/local/react-fallback-stream.ts, src/agents/pi-embedded-runner/run/attempt.ts, src/config/schema.base.generated.ts

