---
repo: openclaw/openclaw
cluster_id: gitcrawl-1889-autonomous-bulk-20260622a
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
  - "#58648"
cluster_refs:
  - "#43732"
  - "#52824"
  - "#58648"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42549"
  - "#42764"
  - "#43808"
  - "#43848"
  - "#44325"
  - "#44351"
  - "#44412"
  - "#45878"
  - "#47515"
  - "#47549"
  - "#47971"
  - "#47977"
  - "#49704"
  - "#57918"
  - "#59069"
  - "#61620"
  - "#63424"
  - "#63519"
  - "#63576"
  - "#64708"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #64708 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1889 on 2026-06-22. Existing-overlap refs #42549, #42764, #43808, #43848, #44325, #44351, #44412, #45878, #47515, #47549, #47971, #47977, #49704, #57918, #59069, #61620, #63424, #63519, #63576, #64708 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1889

Generated from local gitcrawl run cluster 1889 for `openclaw/openclaw`.

Display title:

> fix: preserve Telegram topic thread IDs for cron delivery

Cluster shape from gitcrawl:

- total members: 23
- issues: 7
- pull requests: 16
- open candidates in local store: 1
- excluded existing-overlap refs: #42549, #42764, #43808, #43848, #44325, #44351, #44412, #45878, #47515, #47549, #47971, #47977, #49704, #57918, #59069, #61620, #63424, #63519, #63576, #64708
- representative: #64708, currently closed in local store
- latest member update: 2026-05-23T23:37:30.460878153Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43732 fix(agents): preserve threaded delivery route for subagent completion
- #52824 fix(announce): preserve threadId in subagent announce for Telegram DM topics

Open candidates:

- #58648 fix(agents): gate session-derived threadId on isThreadSessionKey in announce routing

Existing-overlap context refs:

- #42549 Telegram delivery fails with group: prefix in recipient ID
- #42764 fix: fallback announce target to spawnedBy parent
- #43808 cron: keep failure destination for threaded delivery
- #43848 [Bug]: sessions_send loses Telegram forum topic delivery and can pollute requester transcripts
- #44325 Cron: preserve Telegram DM topic delivery inference
- #44351 fix(cron): preserve telegram direct-thread context in inferred delivery targets
- #44412 fix(cron): harden telegram direct-thread delivery inference
- #45878 [Bug]: sessions_send announce delivery fails with "Telegram recipient must be a numeric chat ID" when target session key uses group:topic format
- #47515 sessions_send announce delivery drops threadId — breaks Telegram topic threads
- #47549 fix(sessions): preserve announce threadId for sessions_send
- #47971 resolveAnnounceTarget drops threadId for thread-based sessions (sessions_send announce fails)
- #47977 fix: resolveAnnounceTarget drops threadId for thread-based sessions
- #49704 fix(cron): announce delivery for Telegram forum topics
- #57918 [Bug]: Announce delivery constructs malformed recipient "group:<chatId>" for Telegram forum topic sessions
- #59069 Normalize telegram topic targets in delivery resolution
- #61620 fix(subagents): centralize announce target resolution for parent, fallback, and cron routing
- #63424 sessions_send announce loses threadId — messages land in General instead of target topic
- #63519 fix: preserve threadId in announce target sessions.list fallback
- #63576 fix(sessions): preserve threadId on announce target fallback
- #64708 fix: preserve Telegram topic thread IDs for cron delivery
