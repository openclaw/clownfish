---
repo: openclaw/openclaw
cluster_id: gitcrawl-11-bulk-plan-20260615-a
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#89105"
candidates:
  - "#86632"
  - "#87587"
  - "#87617"
  - "#87850"
  - "#87955"
  - "#88181"
  - "#88212"
  - "#88789"
  - "#88881"
  - "#88884"
  - "#88931"
  - "#89061"
  - "#89071"
  - "#89079"
  - "#89081"
  - "#89105"
  - "#89132"
  - "#89136"
  - "#89171"
  - "#89213"
  - "#89286"
  - "#89327"
  - "#89340"
  - "#89346"
  - "#89529"
  - "#89543"
  - "#89571"
  - "#89583"
  - "#89587"
  - "#89634"
  - "#89665"
  - "#89725"
  - "#89726"
  - "#89730"
  - "#90061"
  - "#90156"
  - "#90200"
  - "#90232"
  - "#90256"
  - "#91291"
cluster_refs:
  - "#86632"
  - "#87587"
  - "#87617"
  - "#87850"
  - "#87955"
  - "#88181"
  - "#88212"
  - "#88789"
  - "#88881"
  - "#88884"
  - "#88931"
  - "#89061"
  - "#89071"
  - "#89079"
  - "#89081"
  - "#89105"
  - "#89132"
  - "#89136"
  - "#89171"
  - "#89213"
  - "#89286"
  - "#89327"
  - "#89340"
  - "#89346"
  - "#89529"
  - "#89543"
  - "#89571"
  - "#89583"
  - "#89587"
  - "#89634"
  - "#89665"
  - "#89725"
  - "#89726"
  - "#89730"
  - "#90061"
  - "#90156"
  - "#90200"
  - "#90232"
  - "#90256"
  - "#91291"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90061"
  - "#90156"
canonical_hint: "gitcrawl representative #89105 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 11 on 2026-06-15. Security-signal refs #90061, #90156 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 11

Generated from local gitcrawl run cluster 11 for `openclaw/openclaw`.

Display title:

> fix(agent-core): guard tool-call validation lookup

Cluster shape from gitcrawl:

- total members: 40
- issues: 1
- pull requests: 39
- open candidates in local store: 40
- security-signal refs requiring route_security: #90061, #90156
- representative: #89105, currently open in local store
- latest member update: 2026-06-14T04:46:06.629273Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86632 OpenClaw local embedded Ollama/Qwen session fails live-data request that Pi coding agent handles via shell/curl
- #87587 fix(agents): keep exec visible for lean local models
- #87617 fix(agents): broaden local model lean profile
- #87850 fix(agents): avoid constructing lean local model tools
- #87955 fix(agents): keep lean tools behind catalog controls
- #88181 feat(agents): add strict local model lean profile
- #88212 feat(agents): auto-trim lean local model tools
- #88789 feat(agents): auto-trim lean local tools
- #88881 fix(agents): trim media tools in lean mode
- #88884 fix(agents): trim web tools in lean mode
- #88931 fix(agents): cap tool search fanout in lean mode
- #89061 fix(agent-core): skip unreadable tool names
- #89071 fix(agent-tools): skip unreadable tool names in policy
- #89079 fix(agent-runtime): skip unreadable allowlist tool names
- #89081 fix(agent-runtime): skip unreadable construction tool names
- #89105 fix(agent-core): guard tool-call validation lookup
- #89132 fix(agent-core): guard tool lookup descriptors
- #89136 fix(agent-core): guard harness tool registry
- #89171 fix(agent-core): validate harness tool names
- #89213 fix(agents): guard CLI loopback prompt tools
- #89286 fix(agents): guard CLI prompt tool names
- #89327 fix(sessions): guard agent tool definition mirroring
- #89340 fix(agents): guard bootstrap tool name lookup
- #89346 fix(agents): guard compact reserved tool names
- #89529 fix(provider): harden unsupported schema keyword stripping
- #89543 fix(agents): harden OpenAI strict schema inspection
- #89571 fix(provider): harden provider tool schema hooks
- #89583 fix(llm-core): wrap unreadable tool schemas
- #89587 fix(plugins): wrap unreadable config schemas
- #89634 fix(llm): guard unreadable tool schemas
- #89665 fix(plugin-sdk): guard provider tool schema walks
- #89725 fix(agents): guard code mode catalog tool names
- #89726 fix(agents): guard deferred follow-up tool descriptors
- #89730 fix(agents): guard lean tool name reads
- #90061 [security-signal] fix(agent-runtime): guard prompt cache tool names
- #90156 [security-signal] fix(agent-runtime): guard prompt cache tool names
- #90200 fix(agents): guard OpenAI strict tool diagnostics
- #90232 fix(plugin-sdk): guard provider tool schema helpers
- #90256 fix(llm-core): guard tool argument schema validation
- #91291 fix(plugins): stabilize plugin tool schemas
