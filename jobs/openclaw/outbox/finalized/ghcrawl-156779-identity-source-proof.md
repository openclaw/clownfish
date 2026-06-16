---
repo: openclaw/openclaw
cluster_id: ghcrawl-156779-identity-source-proof
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
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
  - "#40768"
candidates:
  - "#40768"
  - "#40782"
cluster_refs:
  - "#40768"
  - "#40782"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Parked on 2026-06-14 after run 27485128688: current hydrated evidence cannot prove a safe Feishu fallback identity source, so #40782 is not repairable until maintainers identify/prove the identity invariant."
notes: "Split from ghcrawl-156779 after broad-fix guard on run 27483675257; scope limited and parked as needs-human on 2026-06-14."
---

# GHCrawl Cluster 156779: Identity Source Proof

This is the first narrow split of `ghcrawl-156779-autonomous-smoke`.

Display title:

> Feishu multi-bot @mention matching fails due to app-scoped open_id; prove fallback identity source before matcher/debounce work

## Goal

Run one live autonomous pass for the identity-source slice only. Verify live GitHub state for #40768 and #40782, then either:

- produce a narrow fix artifact proving the available Feishu bot identity source and invariant, or
- block with `needs_human` if the current API evidence cannot prove a safe identity source.

Do not implement the mention matcher or debounce handling in this job. Those are separate follow-up jobs after the identity source is proven.

## Intended Scope

Keep any fix artifact limited to the identity-source/probing surface:

- `probe.ts`
- `types.ts`
- `monitor.startup.ts`
- `monitor.state.ts`
- `monitor.bot-identity.ts`
- `probe.test.ts`
- `monitor.startup.test.ts`

If the required change expands into bot mention parsing, message debounce handling, docs, config, or unrelated monitor code, emit a blocked result and describe the split instead of building a broad artifact.

## Member Inventory

Open candidates:

- #40768 Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups

Closed context refs:

- #42410 [Feature]: Feishu: multi-bot @mention matching fails due to app-scoped open_id - need fallback identity resolution
