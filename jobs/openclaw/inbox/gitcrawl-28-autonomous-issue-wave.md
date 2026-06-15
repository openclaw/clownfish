---
repo: openclaw/openclaw
cluster_id: gitcrawl-28-autonomous-issue-wave
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
canonical: []
candidates:
  - "#63664"
cluster_refs:
  - "#63664"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#38520"
  - "#45608"
  - "#47143"
  - "#54585"
  - "#58818"
  - "#63636"
  - "#64384"
  - "#66716"
  - "#81178"
  - "#81804"
  - "#81916"
  - "#83015"
  - "#84695"
  - "#84792"
  - "#85645"
  - "#86080"
  - "#86224"
  - "#87088"
  - "#88968"
  - "#90354"
  - "#91488"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #87088 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 28 on 2026-06-15. Existing-overlap refs #38520, #45608, #47143, #54585, #58818, #63636, #64384, #66716, #81178, #81804, #81916, #83015, #84695, #84792, #85645, #86080, #86224, #87088, #88968, #90354, #91488 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 28

Generated from local gitcrawl run cluster 28 for `openclaw/openclaw`.

Display title:

> fix(reply): flush memory for pending in-turn auto-compaction even when tokens drop below threshold

Cluster shape from gitcrawl:

- total members: 22
- issues: 11
- pull requests: 11
- open candidates in local store: 1
- excluded existing-overlap refs: #38520, #45608, #47143, #54585, #58818, #63636, #64384, #66716, #81178, #81804, #81916, #83015, #84695, #84792, #85645, #86080, #86224, #87088, #88968, #90354, #91488
- representative: #87088, currently open in local store
- latest member update: 2026-06-15T11:49:41.459764Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63664 [Bug] Session flush blocks write tool completely during compaction

Existing-overlap context refs:

- #38520 Feature: Pre-compaction agent notification, structured handoff window, and deferral mechanism
- #45608 [Feature]: Pre-reset agentic memory flush — /new and daily reset should get the same memory flush as compaction
- #47143 memoryFlush never triggers when compactionCount and memoryFlushCompactionCount are both 0
- #54585 [security-signal] Agents: add compaction modes (warn, error, none) with proactive conte…
- #58818 Feature: guarantee last N raw messages in agent context (survive compaction and session reset)
- #63636 [security-signal] fix(compaction): guard malformed token estimation
- #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)
- #66716 fix: auto-compaction fires on fresh cached token counts (#66520)
- #81178 [Bug]: repeated early preflight compactions after compaction due to stale transcript usage
- #81804 [Feature]: Pre-compaction memory flush for channel-driven sessions (googlechat / slack / discord / matrix) — opt-in, no external session state to invalidate
- #81916 fix(compaction): bound stale transcript usage
- #83015 fix(memory): resolve memoryFlush 0/0 guard blocking flush on never-flushed sessions (#47143)
- #84695 [Bug]: Compaction does not write summary to daily memory — regression of #79022
- #84792 Run memory flush before preflight compaction
- #85645 memoryFlush has no escalation when assistant process dies mid-flush — session permanently over threshold, every subsequent message wedges
- #86080 Memory appears inert by default when dreaming is disabled and compaction is not reached
- #86224 [AI-assisted] fix(agents): resolve CLI runtime in preflight + memory-flush gates
- #87088 fix(reply): flush memory for pending in-turn auto-compaction even when tokens drop below threshold
- #88968 fix: prevent memory flush failure from aborting user reply (#85645)
- #90354 [Feature]: Add bounded/validated append semantics for pre-compaction memory flush
- #91488 fix(reply): project preflight compaction gate by next-input size on fresh tokens
