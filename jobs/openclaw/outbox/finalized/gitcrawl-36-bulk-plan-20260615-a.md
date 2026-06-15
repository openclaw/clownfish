---
repo: openclaw/openclaw
cluster_id: gitcrawl-36-bulk-plan-20260615-a
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
  - "#89099"
candidates:
  - "#57326"
  - "#77720"
  - "#87994"
  - "#89087"
  - "#89088"
  - "#89095"
  - "#89099"
  - "#89367"
  - "#90178"
  - "#90944"
  - "#91370"
  - "#92204"
  - "#92405"
  - "#92412"
  - "#92431"
cluster_refs:
  - "#57326"
  - "#77720"
  - "#87994"
  - "#89087"
  - "#89088"
  - "#89095"
  - "#89099"
  - "#89367"
  - "#90178"
  - "#90944"
  - "#91370"
  - "#92204"
  - "#92405"
  - "#92412"
  - "#92431"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#60661"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89088"
  - "#89099"
canonical_hint: "gitcrawl representative #89099 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 36 on 2026-06-15. Security-signal refs #89088, #89099 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #60661 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 36

Generated from local gitcrawl run cluster 36 for `openclaw/openclaw`.

Display title:

> fix(gateway): preserve pending run timeouts

Cluster shape from gitcrawl:

- total members: 16
- issues: 9
- pull requests: 7
- open candidates in local store: 15
- excluded existing-overlap refs: #60661
- security-signal refs requiring route_security: #89088, #89099
- representative: #89099, currently open in local store
- latest member update: 2026-06-14T04:46:06.65842Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57326 CLI-backed helper paths still bypass CLI dispatch on latest main
- #77720 Bug: Subagent child sessions receive no termination signal when parent dies mid-run
- #87994 Telegram delivery-mirror duplicates every assistant text message (both openai-completions and delivery-mirror delivered to channel)
- #89087 Bug: Session model override lost on UTC midnight rollover
- #89088 [security-signal] test(gateway): cover rollover model override preservation
- #89095 Sub-agent run timeout does not notify parent session (completion event silently dropped)
- #89099 [security-signal] fix(gateway): preserve pending run timeouts
- #89367 fix: forward pending timeout snapshot in waitForAgentJob fallback timer
- #90178 Subagent announce give-up (retry-limit/expiry) does not wake parent waiting on sessions_yield → permanent deadlock
- #90944 [Bug]: sessions_yield resume reply recorded but not delivered; auto-announce direct-text mirror delivered instead → user gets child raw summary, not parent reply
- #91370 fix(agents): skip text-direct fallback for sessions_yield completions
- #92204 fix(gateway): notify parent session on sub-agent run timeout
- #92405 subagent spawn persists raw provider instead of CLI runtime — depth-2 cold spawns silently die with 'lost execution context' (two unpatched #57326 call sites, fix included)
- #92412 BUG: sessions_spawn silently half-fails when thinking level is unsupported — fan-out spawns produce non-deterministic survivors, no signal to orchestrator (fix: symmetrize CLI-launch fallback with embedded path)
- #92431 fix(agents): use thinking-level fallback for programmatic spawn instead of hard throw (fixes #92412)

Existing-overlap context refs:

- #60661 Keep gateway CLI timeout client-side after accepted runs
