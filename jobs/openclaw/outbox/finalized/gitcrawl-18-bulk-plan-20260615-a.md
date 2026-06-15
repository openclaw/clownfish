---
repo: openclaw/openclaw
cluster_id: gitcrawl-18-bulk-plan-20260615-a
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
  - "#85251"
candidates:
  - "#49205"
  - "#76038"
  - "#76115"
  - "#77115"
  - "#79121"
  - "#79495"
  - "#83959"
  - "#84037"
  - "#84903"
  - "#85050"
  - "#85116"
  - "#85251"
  - "#85494"
  - "#85532"
  - "#85571"
  - "#85826"
  - "#86035"
  - "#86946"
  - "#86963"
  - "#87310"
  - "#87397"
  - "#87550"
  - "#88433"
  - "#89069"
  - "#89742"
  - "#90240"
  - "#90308"
  - "#90618"
  - "#90673"
  - "#90750"
  - "#90812"
  - "#91087"
cluster_refs:
  - "#49205"
  - "#76038"
  - "#76115"
  - "#77115"
  - "#79121"
  - "#79495"
  - "#83959"
  - "#84037"
  - "#84903"
  - "#85050"
  - "#85116"
  - "#85251"
  - "#85494"
  - "#85532"
  - "#85571"
  - "#85826"
  - "#86035"
  - "#86946"
  - "#86963"
  - "#87310"
  - "#87397"
  - "#87550"
  - "#88433"
  - "#89069"
  - "#89742"
  - "#90240"
  - "#90308"
  - "#90618"
  - "#90673"
  - "#90750"
  - "#90812"
  - "#91087"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42213"
  - "#54488"
  - "#56352"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#85494"
canonical_hint: "gitcrawl representative #85251 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 18 on 2026-06-15. Security-signal refs #85494 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #42213, #54488, #56352 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 18

Generated from local gitcrawl run cluster 18 for `openclaw/openclaw`.

Display title:

> Codex app-server emits notification:turn/started then goes silent; embedded run wedges for the full stuck-session recovery window

Cluster shape from gitcrawl:

- total members: 35
- issues: 24
- pull requests: 11
- open candidates in local store: 32
- excluded existing-overlap refs: #42213, #54488, #56352
- security-signal refs requiring route_security: #85494
- representative: #85251, currently open in local store
- latest member update: 2026-06-14T04:46:07.495304Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49205 [Bug]: Control UI messages can reach shared context but still not appear in Open WebUI visible chat history
- #76038 [Bug]: Stuck Session Recovery 机制双重失效 + Session 预处理每次耗时过长
- #76115 fix(diagnostics): experiment with stuck session aborts
- #77115 Stuck session ghost blocks event loop, causes CLI timeout and sustained high CPU (11.5hr+)
- #79121 [Bug]: voice-call stale reaper ends active Twilio conversation after ~120s
- #79495 Codex harness app-server shared client is evicted across agents because cache key includes agentDir
- #83959 Codex app-server startup retries can exhaust before replacement server is ready
- #84037 Improve Codex app-server steady-state CPU and helper process overhead
- #84903 A single stalled agent session blocks the entire Gateway event loop (isolation failure)
- #85050 Codex embedded agent: Cannot find module './codex-mcp-config-D66js4SP.js' on v2026.5.19
- #85116 Retry app-server bridge drops safely
- #85251 Codex app-server emits notification:turn/started then goes silent; embedded run wedges for the full stuck-session recovery window
- #85494 [security-signal] fix(plugins): memoize resolvePackageJsonPath to stop per-turn realpath storm
- #85532 Diagnostic recovery aborts active embedded runs after terminal-looking app-server progress
- #85571 fix(diagnostic): recover terminal-progress orphan embedded runs at 60s
- #85826 [Bug]: Agent stall detector hard-coded 120s threshold kills legitimate long model calls on local vLLM
- #86035 Bug: Control UI chat composer breaks CJK IME composition
- #86946 [Bug] WebChat: optimistic USER messages are lost (not just hidden) when chat.send returns before the durable transcript lands — full-replace history reconcile drops them
- #86963 [Bug] Orphaned/oversized native Codex thread wedges a session permanently — chat.send returns started but no run executes, silently dropping messages
- #87310 Stale diagnostic tool_call activity can survive recovery/reset and re-block sessions as blocked_tool_call
- #87397 Stall detector aborts long tool-call chains that are actively making progress (2026.5.26)
- #87550 fix(diagnostics): clear stale session activity
- #88433 fix(qqbot): clear response watchdog on all dispatch exit paths
- #89069 [Bug]: childless codex-native subagent stuck initializing can exhaust unified exec capacity
- #89742 [Bug]: Codex app-server session wedges indefinitely after a 429 rate-limit burst — terminal-idle watchdog still gated by `activeAppServerTurnRequests > 0` (regression/incomplete fix of #82681)
- #90240 [Bug]: Session embedded-run counter stays pinned after a single ~48k-output-token opus-4-7 turn; subsequent Slack DM inbound silently queued for ~30 min until manual gateway restart (2026.6.1)
- #90308 fix(diagnostics): reclaim zombie embedded-run counters left idle by handle-mismatch clears
- #90618 fix: recover stuck Control UI chat runs
- #90673 Codex app-server stalls after inter-session sessions_send timeout
- #90750 fix(diagnostics): evict orphaned tool/model activity on owner-less run end
- #90812 fix(voice-call): preserve live Twilio streams in stale reaper
- #91087 Fix Control UI CJK IME composition

Existing-overlap context refs:

- #42213 [Bug]: Control UI chat can stay stuck busy and stop flushing queued messages after a long run
- #54488 Session lane starvation: followup drain monopolizes session lane, blocks inbound dispatch for 20-30min
- #56352 [Bug]: Lane remains occupied after reply emitted during failover — blocks subsequent inbound messages
