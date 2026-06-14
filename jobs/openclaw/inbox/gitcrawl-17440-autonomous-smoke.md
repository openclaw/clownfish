---
repo: openclaw/openclaw
cluster_id: gitcrawl-17440-autonomous-smoke
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
  - "#169"
candidates:
  - "#169"
  - "#178"
  - "#937"
cluster_refs:
  - "#169"
  - "#178"
  - "#416"
  - "#937"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #169 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17440 on 2026-06-14."
---

# Gitcrawl Cluster 17440

Generated from local gitcrawl run cluster 17440 for `openclaw/openclaw`.

Display title:

> clawhub update always reports 'local changes (no match)' even on freshly installed skills

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 3
- representative: #169, currently open in local store
- latest member update: 2026-04-30T10:08:30.305018698Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #416 clawhub update always reports 'local changes' even immediately after --force update

Open candidates:

- #169 clawhub update always reports 'local changes (no match)' even on freshly installed skills
- #178 [Bug] clawhub update: fingerprint match always fails (false 'local changes' warning)
- #937 [Bug] clawhub update --all always reports 'local changes (no match)' after v0.8.0 — persists immediately after force-update
