---
repo: openclaw/openclaw
cluster_id: gitcrawl-53-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#85030"
candidates:
  - "#77426"
  - "#85030"
  - "#85637"
cluster_refs:
  - "#77426"
  - "#85030"
  - "#85637"
  - "#92189"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#64993"
  - "#67376"
  - "#75201"
  - "#84017"
  - "#90861"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#85030"
  - "#92189"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #85030 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 53 on 2026-06-15. Security-signal refs #85030, #92189 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #64993, #67376, #75201, #84017, #90861 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 53

Generated from local gitcrawl run cluster 53 for `openclaw/openclaw`.

Display title:

> [Bug]: MCP tools not injected into subagent (sessions_spawn) sessions — `bundle-mcp` + per-tool subagent allowlist + per-agent allowlist all ignored, subagent system prompt and tool schema receive only built-ins

Cluster shape from gitcrawl:

- total members: 9
- issues: 5
- pull requests: 4
- open candidates in local store: 3
- excluded existing-overlap refs: #64993, #67376, #75201, #84017, #90861
- security-signal refs requiring route_security: #85030, #92189
- representative: #85030, currently open in local store
- latest member update: 2026-06-15T11:49:41.544937Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #92189 [security-signal] [Bug] sessions_spawn zeroes target agent tools by intersecting requester's effective deny (2026.6.5 regression)

Open candidates:

- #77426 [Bug]:sessions_yield: always returns "No session context" on MCP/claude-cli agent runtime path (gateway tool resolver missing sessionId + onYield)
- #85030 [security-signal] [Bug]: MCP tools not injected into subagent (sessions_spawn) sessions — `bundle-mcp` + per-tool subagent allowlist + per-agent allowlist all ignored, subagent system prompt and tool schema receive only built-ins
- #85637 bundle-mcp: remote streamable-http server connects but tools never materialize for a Pi agent (2026.5.7)

Existing-overlap context refs:

- #64993 [security-signal] [Security] High: MCP loopback scope spoofing via mutable request headers
- #67376 [security-signal] fix(gateway): bind loopback MCP scope to per-backend bearer token (#64993)
- #75201 [security-signal] fix(agent): keep cleanup hooks isolated
- #84017 [security-signal] fix(gateway): bind MCP loopback scope to tokens
- #90861 [security-signal] fix #77426: [Bug]:sessions_yield: always returns "No session context" on MCP/claude-cli agent runtime path (gateway tool resolver missing sessionId + onYield)
