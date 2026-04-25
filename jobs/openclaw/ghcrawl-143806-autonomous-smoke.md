---
repo: openclaw/openclaw
cluster_id: ghcrawl-143806-autonomous-smoke
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
  - "#48605"
candidates:
  - "#38437"
  - "#42099"
  - "#45603"
  - "#45776"
  - "#47429"
  - "#49412"
  - "#53938"
  - "#60620"
cluster_refs:
  - "#38437"
  - "#42099"
  - "#44848"
  - "#45154"
  - "#45603"
  - "#45776"
  - "#45805"
  - "#45881"
  - "#45951"
  - "#47429"
  - "#48605"
  - "#49412"
  - "#53938"
  - "#54189"
  - "#54806"
  - "#54949"
  - "#55429"
  - "#55530"
  - "#56095"
  - "#56494"
  - "#56522"
  - "#56695"
  - "#60620"
  - "#61920"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48605 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143806 on 2026-04-25."
---

# GHCrawl Cluster 143806

Generated from local ghcrawl run cluster 143806 for `openclaw/openclaw`.

Display title:

> [Bug]: Duplicate plugin id warning for npm-installed feishu plugin on every startup

Cluster shape from ghcrawl:

- total members: 24
- issues: 24
- pull requests: 0
- open candidates in local store: 8
- representative: #48605, currently closed in local store
- latest member update: 2026-04-25T17:12:54.243Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44848 [Bug] Feishu Plugin Registered Multiple Times in CLI Output (2026.3.12)
- #45154 Feishu Plugin Duplicate Warning (v2026.3.12)
- #45805 🐛 False Positive: "duplicate plugin id detected" warning for Feishu channel plugin
- #45881 [Bug] Plugin ID mismatch warning: "feishu1" vs "feishu"
- #45951 Bug: feishu plugin duplicate plugin id detected from same file
- #48605 [Bug]: Duplicate plugin id warning for npm-installed feishu plugin on every startup
- #54189 Feishu plugin repeatedly re-registers every 5 seconds (continuous loop)
- #54806 Bug: memory-lancedb plugin registered 8 times on every CLI command
- #54949 Duplicate Feishu plugin registration logs in 2026.3.24
- #55429 [Bug] Feishu plugin registers tools multiple times on gateway startup
- #55530 [Bug]: Repeated Feishu tool registration logs and slower Feishu responses during a single startup
- #56095 [Bug] feishu plugin registered 4 times on every Gateway startup
- #56494 [Bug]: Feishu plugin registers repeatedly because multiple plugin registry cache keys trigger repeated full loads during gateway startup/runtime
- #56522 Plugin register() called multiple times per gateway startup (v2026.3.24)
- #56695 Feishu plugin tools re-register on every agent dispatch, producing excessive log noise
- #61920 [Bug] Plugin register function called multiple times during startup (50+ times)

Open candidates:

- #38437 [Bug]: Duplicate plugin ID warning
- #42099 fix(plugins): false-positive duplicate plugin ID warning on gateway start (msteams)
- #45603 [Bug]: fro feishu plugin, always print the "duplicate" message, and no method to fix this issue by talk with OpenClaw itself
- #45776 [Bug]: Feishu plugin registers multiple times on every CLI command execution
- #47429 Bug: CLI plugins loaded twice (all plugins registered 2x)
- #49412 [Bug]: Feishu plugin - duplicate plugin id warning on startup
- #53938 [Bug]: Plugin duplication (Feishu) + gateway restart instability — root cause analysis & proposed fix
- #60620 Plugins initialized twice per gateway restart (duplicate register/load cycle)
