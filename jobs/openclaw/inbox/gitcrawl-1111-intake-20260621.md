---
repo: openclaw/openclaw
cluster_id: gitcrawl-1111-intake-20260621
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
canonical: []
candidates:
  - "#93205"
cluster_refs:
  - "#93205"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45082"
  - "#52120"
  - "#52236"
  - "#69010"
  - "#71930"
  - "#72513"
  - "#77378"
  - "#77442"
  - "#93203"
  - "#93204"
  - "#93232"
  - "#93234"
  - "#93242"
  - "#93243"
  - "#93264"
  - "#93692"
  - "#93865"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #93264 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1111 on 2026-06-21. Existing-overlap refs #45082, #52120, #52236, #69010, #71930, #72513, #77378, #77442, #93203, #93204, #93232, #93234, #93242, #93243, #93264, #93692, #93865 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1111

Generated from local gitcrawl run cluster 1111 for `openclaw/openclaw`.

Display title:

> fix(mattermost): wake agent on bare @bot mention [AI]

Cluster shape from gitcrawl:

- total members: 18
- issues: 6
- pull requests: 12
- open candidates in local store: 1
- excluded existing-overlap refs: #45082, #52120, #52236, #69010, #71930, #72513, #77378, #77442, #93203, #93204, #93232, #93234, #93242, #93243, #93264, #93692, #93865
- representative: #93264, currently open in local store
- latest member update: 2026-06-19T02:13:01.010151Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93205 Mattermost: bare @mention with no body text is dropped instead of waking the agent (split from #65729)

Existing-overlap context refs:

- #45082 fix(mattermost): proactive message tool sends ignore thread context
- #52120 fix(mattermost): inherit thread context in message tool send action
- #52236 fix(mattermost): persist threadId in delivery context for all session types
- #69010 [security-signal] fix(gateway): prefer current route delivery context
- #71930 Mattermost plugin drops post_edited events — @mentions added via edit do not trigger agent wake
- #72513 fix(mattermost): handle post_edited websocket events (#71930)
- #77378 [Bug]: Session rotation creates duplicate sessions with broken delivery context
- #77442 fix(session): persist delivery context for inbound non-direct sessions
- #93203 Mattermost: make DM threading configurable (dmReplyToMode) — split from #65729
- #93204 Mattermost: thread context lost after restart/session-clear — no server-side backfill (split from #65729)
- #93232 fix(mattermost): allow bare @mention with empty body to wake the agent (fixes #93205)
- #93234 fix(mattermost): backfill thread history only on first-sighting recovery
- #93242 fix(mattermost): keep bare @mention with empty body instead of dropping it
- #93243 fix(mattermost): backfill thread history from server when in-memory window is empty
- #93264 [security-signal] fix(mattermost): wake agent on bare @bot mention [AI]
- #93692 fix(mattermost): backfill thread history from server when in-memory window is empty (fixes #93204)
- #93865 [security-signal] fix(mattermost): backfill thread history from server when in-memory window is empty
