---
repo: openclaw/openclaw
cluster_id: gitcrawl-1130-autonomous-drip-20260622c
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
  - "#88836"
candidates:
  - "#88836"
  - "#93288"
cluster_refs:
  - "#88836"
  - "#93288"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93292"
  - "#93837"
  - "#93846"
  - "#94348"
  - "#94522"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #88836 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1130 on 2026-06-22. Existing-overlap refs #93292, #93837, #93846, #94348, #94522 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1130

Generated from local gitcrawl run cluster 1130 for `openclaw/openclaw`.

Display title:

> [Bug]: msteams messages with attachments misthreaded

Cluster shape from gitcrawl:

- total members: 7
- issues: 2
- pull requests: 5
- open candidates in local store: 2
- excluded existing-overlap refs: #93292, #93837, #93846, #94348, #94522
- representative: #88836, currently open in local store
- latest member update: 2026-06-19T02:13:01.224481Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88836 [Bug]: msteams messages with attachments misthreaded
- #93288 feat(msteams): per-call topLevel override on send action for proactive new channel threads

Existing-overlap context refs:

- #93292 feat(msteams): per-call topLevel override on send action for proactive new channel threads
- #93837 fix(msteams): pass threadActivityId to attachment sends for threaded replies
- #93846 fix(msteams): add per-call topLevel override on send action (fixes #93288)
- #94348 fix(msteams): keep attachment replies in channel threads
- #94522 fix(msteams): route attachment proactive sends through channel threads (fixes #88836)
