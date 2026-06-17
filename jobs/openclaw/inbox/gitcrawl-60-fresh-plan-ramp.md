---
repo: openclaw/openclaw
cluster_id: gitcrawl-60-fresh-plan-ramp
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
  - "#90866"
candidates:
  - "#84276"
  - "#87665"
  - "#90017"
  - "#90866"
cluster_refs:
  - "#84276"
  - "#87665"
  - "#90017"
  - "#90866"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#79104"
  - "#84288"
  - "#84300"
  - "#86149"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #90866 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 60 on 2026-06-17. Existing-overlap refs #79104, #84288, #84300, #86149 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 60

Generated from local gitcrawl run cluster 60 for `openclaw/openclaw`.

Display title:

> Discord: ship speculative "Thinking…" placeholder + typing heartbeat (parity with Slack #90017)

Cluster shape from gitcrawl:

- total members: 8
- issues: 6
- pull requests: 2
- open candidates in local store: 4
- excluded existing-overlap refs: #79104, #84288, #84300, #86149
- representative: #90866, currently open in local store
- latest member update: 2026-06-15T19:04:12.038792Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84276 Discord typing indicator lingers ~10s after reply delivery in message_tool_only source-reply path
- #87665 [discord] Discord-originated subagent tasks default to done_only, leaving channel stuck on typing indicator
- #90017 feat(slack): speculative "Thinking…" placeholder posted within the 3s ACK window
- #90866 Discord: ship speculative "Thinking…" placeholder + typing heartbeat (parity with Slack #90017)

Existing-overlap context refs:

- #79104 Discord guild channels delay typing despite typingMode=instant
- #84288 [security-signal] fix(discord): avoid duplicate typing keepalive for tool replies
- #84300 [security-signal] fix(discord): stop typing keepalive on message_tool_only delivery (#84276)
- #86149 Discord typing indicator is delayed despite typingMode=instant
