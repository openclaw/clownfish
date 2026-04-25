---
repo: openclaw/openclaw
cluster_id: ghcrawl-143807-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#48144"
candidates:
  - "#38709"
  - "#46895"
  - "#47069"
  - "#50871"
  - "#50970"
  - "#51027"
  - "#51051"
  - "#51053"
  - "#51270"
  - "#51536"
  - "#65772"
  - "#68557"
cluster_refs:
  - "#38709"
  - "#45335"
  - "#45913"
  - "#46620"
  - "#46766"
  - "#46895"
  - "#47069"
  - "#48144"
  - "#48268"
  - "#48827"
  - "#49113"
  - "#49917"
  - "#50871"
  - "#50970"
  - "#51027"
  - "#51051"
  - "#51053"
  - "#51270"
  - "#51536"
  - "#56936"
  - "#60649"
  - "#65772"
  - "#68557"
  - "#71462"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48144 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143807 on 2026-04-25."
---

# GHCrawl Cluster 143807

Generated from local ghcrawl run cluster 143807 for `openclaw/openclaw`.

Display title:

> fix(ui): show current context tokens instead of cumulative in Control UI

Cluster shape from ghcrawl:

- total members: 24
- issues: 0
- pull requests: 24
- open candidates in local store: 12
- representative: #48144, currently closed in local store
- latest member update: 2026-04-25T17:12:43.550Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45335 fix(control-ui): use fresh totals for context usage notice
- #45913 fix(control-ui): use actual context size instead of cumulative input …
- #46620 fix(ui): use totalTokens instead of inputTokens for context notice banner
- #46766 fix(ui): Chat UI shows correct token count instead of inflated cumulative value
- #48144 fix(ui): show current context tokens instead of cumulative in Control UI
- #48268 fix(ui): use current context usage in chat notice
- #48827 fix: include cached tokens in context window % calculation
- #49113 fix stale Control UI context warning math
- #49917 fix(ui): context % uses full token footprint instead of uncached input only
- #56936 tui: improve /sessions search coverage for named sessions
- #60649 fix: Control UI context % shows 100% when actual is ~56%
- #71462 fix(ui): use current context usage in Control UI

Open candidates:

- #38709 fix(ui): harden webchat input history behavior
- #46895 fix(slash): handle /model status locally[AI-assisted]#46894
- #47069 fix(ui): treat /model status|list|info as info queries, not model names
- #50871 CLI: include connected nodes in nodes list
- #50970 fix(cli): keep nodes list consistent with live paired nodes
- #51027 fix(gateway): reject list and status as invalid model refs (#51126)
- #51051 fix(cli): align nodes list with nodes status by using node.list as primary source
- #51053 fix(cli): align nodes list with node status
- #51270 fix(tui): handle /model list and /model status as commands
- #51536 fix(webchat): use totalTokens for context utilization display
- #65772 fix(cli): keep nodes list aligned with nodes status
- #68557 fix(ui): include cache tokens in ctx% badge and cache-hit-rate
