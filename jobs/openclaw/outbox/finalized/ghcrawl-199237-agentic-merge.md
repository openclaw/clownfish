---
repo: openclaw/openclaw
cluster_id: ghcrawl-199237-agentic-merge
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
  - "#60063"
candidates:
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#60063"
  - "#63994"
  - "#65457"
cluster_refs:
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#60063"
  - "#63994"
  - "#65457"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
allow_unmerged_fix_close: true
canonical_hint: "Live refresh on 2026-06-11 found #60063 as the only open hydrated candidate; worker must still verify current GitHub state before action."
notes: "Generated from ghcrawl run cluster 199237 on 2026-04-26; live refreshed on 2026-06-11."
---

# GHCrawl Cluster 199237

Generated from local ghcrawl run cluster 199237 for `openclaw/openclaw`.

Display title:

> fix(gateway): avoid duplicate pre-tool text in streaming chat deltas

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #54374, currently open in local store
- latest member update: 2026-04-25T07:30:11.291Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Live Operator Notes

Live refresh on 2026-06-11 found #60063 open; #46985 is missing/not hydratable; #47377, #47399, #54374, #63994, and #65457 are closed context only.

If #60063 is repaired or replaced, do not carry its `CHANGELOG.md` edit forward. OpenClaw changelog updates are release-owned and should be omitted from ProjectClownfish replacement branches.

Maintainer explicitly allows `close_fixed_by_candidate` without a merged Clownfish fix PR only if fresh worker evidence again verifies #60063 is already covered by current `main`. Prior run 27345868950 found current main `9a6c71a47d9526c677a325531dfc44adc054d9bb` already contains the narrow gateway streaming merge/replace support and focused regression coverage.

Finalized on 2026-06-11 after run 27346967226 verified current main `68ec783e74b59b672dbe14585e892d887adb2bfb` contains the gateway streaming merge/replace behavior and focused regression coverage. Clownfish commented and closed #60063 at 2026-06-11T12:38:25Z/12:38:26Z; #74498 remains a separate related UI follow-up, #47399 remains routed to central security, and the remaining cluster refs are closed context.

## Member Inventory

Closed context refs:

- #46985 fix(ui): dedupe cumulative streaming text around tool interruptions (missing/not hydratable)
- #47377 fix(ui): deduplicate cumulative streaming text in webchat segments
- #47399 fix(ui): deduplicate streaming chat segments to prevent growing duplicate bubbles
- #54374 fix(gateway): avoid duplicate pre-tool text in streaming chat deltas
- #63994 fix(gateway): avoid collapsing repeated chars when merging assistant chat deltas
- #65457 fix(gateway): stop dropping repeated markdown tokens in chat stream merge

Open candidates:

- #60063 fix(streaming): resolve overlapping chunk duplication in chat stream assembler
