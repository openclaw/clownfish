---
repo: openclaw/openclaw
cluster_id: ghcrawl-143795-autonomous-smoke
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
  - "#46954"
candidates:
  - "#41955"
  - "#43211"
  - "#48666"
  - "#48671"
  - "#48714"
  - "#50141"
  - "#50193"
  - "#50767"
  - "#51737"
  - "#54101"
  - "#54105"
  - "#59681"
  - "#59932"
  - "#62100"
  - "#66655"
  - "#68927"
  - "#69029"
cluster_refs:
  - "#41955"
  - "#43211"
  - "#45842"
  - "#45864"
  - "#46936"
  - "#46954"
  - "#47295"
  - "#47822"
  - "#48261"
  - "#48263"
  - "#48376"
  - "#48448"
  - "#48666"
  - "#48671"
  - "#48714"
  - "#48816"
  - "#48818"
  - "#48821"
  - "#49656"
  - "#49856"
  - "#50141"
  - "#50193"
  - "#50216"
  - "#50375"
  - "#50456"
  - "#50767"
  - "#50993"
  - "#51405"
  - "#51737"
  - "#51846"
  - "#54101"
  - "#54105"
  - "#54532"
  - "#59681"
  - "#59932"
  - "#62025"
  - "#62100"
  - "#66655"
  - "#68927"
  - "#69029"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46954 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143795 on 2026-04-25."
---

# GHCrawl Cluster 143795

Generated from local ghcrawl run cluster 143795 for `openclaw/openclaw`.

Display title:

> fix(ui): keep provider in chat model picker values

Cluster shape from ghcrawl:

- total members: 40
- issues: 1
- pull requests: 39
- open candidates in local store: 17
- representative: #46954, currently closed in local store
- latest member update: 2026-04-25T17:12:54.242Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45842 fix(ui): use full provider/model path in model select dropdown
- #45864 fix(ui): show session label instead of id in session selector dropdown
- #46936 fix(models): resolve bare model id across providers in sessions.patch
- #46954 fix(ui): keep provider in chat model picker values
- #47295 fix(webchat): include provider prefix in model dropdown values (closes #47192)
- #47822 fix(ui): show agent name in session dropdown for multi-agent setups (#47744)
- #48261 fix(ui): preserve qualified model ids in chat picker
- #48263 fix(ui): preserve qualified model ids in chat selector
- #48376 Fixing model selection problem
- #48448 fix(ui): show provider name for qualified model ids
- #48816 fix: prevent double provider prefix for already-qualified model IDs
- #48818 fix: show cross-agent global sessions in chat session dropdown
- #48821 fix(model-selection): infer provider from configured models when mode…
- #49656 fix(ui): use selected model's provider prefix in webchat model switcher
- #49856 fix: web UI chat model dropdown desync and wrong provider prefix
- #50216 fix: keep control ui model refs canonical
- #50375 feat(control-ui): display session label in chat header
- #50456 fix(ui): disambiguate chat model picker model refs
- #50993 fix(ui): preserve model provider switches in chat picker
- #51405 fix(ui): resolve bare model alias to full key in buildModelOptions
- #51846 fix(ui): resolve model alias in qualified refs for Control UI model picker
- #54532 Fix OpenRouter model switching for slash-containing model IDs
- #62025 fix: qualify provider-scoped chat model values

Open candidates:

- #41955 fix(control-ui): show all configured agents in webchat session dropdown
- #43211 fix: accept hyphen-stripped provider variants in model allowlist
- #48666 fix: restore full agent list in webchat dropdown after session switch
- #48671 fix(ui): include all known agents in webchat session dropdown
- #48714 fix(gateway): check configured models before DEFAULT_PROVIDER in resolveSessionModelRef
- #50141 fix(ui): preserve provider prefix in model toggle for non-Anthropic models
- #50193 feat(ui): group model selector by provider in tree structure
- #50767 fix: use correct defaultProvider in buildAllowedModelSet for /model command
- #51737 fix(ui): keep provider-qualified model picker refs intact
- #54101 [Feature]: Add cron sessions filter to mobile WebUI settings dropdown
- #54105 feat(ui): add cron sessions filter to mobile WebUI settings dropdown
- #59681 fix(agents): resolve model aliases in sessions_spawn
- #59932 fix: protect active subagent sessions from maintenance pruning
- #62100 fix: resolve OpenRouter native slash model refs
- #66655 fix(control-ui): show configured thinkingDefault in dropdown
- #68927 ui(chat): show explicit qualified model refs
- #69029 fix: resolve model alias P1/P2 review feedback
