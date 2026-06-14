---
repo: openclaw/openclaw
cluster_id: gitcrawl-17429-autonomous-smoke
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
  - "#1244"
candidates:
  - "#367"
  - "#504"
  - "#647"
  - "#900"
  - "#906"
  - "#1116"
  - "#1244"
  - "#1267"
cluster_refs:
  - "#367"
  - "#504"
  - "#647"
  - "#900"
  - "#906"
  - "#1116"
  - "#1244"
  - "#1267"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #1244 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17429 on 2026-06-14."
---

# Gitcrawl Cluster 17429

Generated from local gitcrawl run cluster 17429 for `openclaw/openclaw`.

Display title:

> ClawdHub login loop after account deletion — OAuth completes but no redirect

Cluster shape from gitcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 8
- representative: #1244, currently open in local store
- latest member update: 2026-04-30T10:08:29.690959101Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #367 Can't login to ClawHub or manage skills
- #504 Can’t log into Clawhub with GitHub after deleting my Clawhub account (OAuth loop / sign-in button stays active)
- #647 GitHub OAuth Login Redirect Fails - Authorization Succeeds but Session State Not Updated
- #900 deleted account → can’t re-login / button stays live
- #906 GitHub OAuth Login fails — Authorization succeeds but redirects back to login page (Chrome)
- #1116 Bug: Account stuck in infinite loading loop after deletion and re-authorization (Soft-delete issue)
- #1244 ClawdHub login loop after account deletion — OAuth completes but no redirect
- #1267 ClawHub login refresh loop after account deletion + GitHub account change
