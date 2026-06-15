---
repo: openclaw/openclaw
cluster_id: gitcrawl-19-autonomous-issue-wave
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
  - "#88838"
candidates:
  - "#51386"
  - "#54524"
  - "#79902"
  - "#79903"
  - "#79904"
  - "#79905"
  - "#88838"
cluster_refs:
  - "#51386"
  - "#54524"
  - "#79902"
  - "#79903"
  - "#79904"
  - "#79905"
  - "#82013"
  - "#88838"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#53550"
  - "#89121"
  - "#89122"
  - "#89123"
  - "#89124"
  - "#89129"
  - "#89178"
  - "#89201"
  - "#89203"
  - "#89204"
  - "#89261"
  - "#89262"
  - "#89348"
  - "#89360"
  - "#89518"
  - "#89519"
  - "#89581"
  - "#89904"
  - "#89911"
  - "#89912"
  - "#90437"
  - "#90438"
  - "#90439"
  - "#90463"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #88838 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 19 on 2026-06-15. Existing-overlap refs #53550, #89121, #89122, #89123, #89124, #89129, #89178, #89201, #89203, #89204, #89261, #89262, #89348, #89360, #89518, #89519, #89581, #89904, #89911, #89912, #90437, #90438, #90439, #90463 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 19

Generated from local gitcrawl run cluster 19 for `openclaw/openclaw`.

Display title:

> Track core session/transcript SQLite migration via accessor seam

Cluster shape from gitcrawl:

- total members: 32
- issues: 9
- pull requests: 23
- open candidates in local store: 7
- excluded existing-overlap refs: #53550, #89121, #89122, #89123, #89124, #89129, #89178, #89201, #89203, #89204, #89261, #89262, #89348, #89360, #89518, #89519, #89581, #89904, #89911, #89912, #90437, #90438, #90439, #90463
- representative: #88838, currently open in local store
- latest member update: 2026-06-15T11:49:41.135305Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #82013 [Feature]: Nudge agents to flush memory before session.ended when significant work occurred (per-turn sessionId rotation breaks continuity for in-flight tasks)

Open candidates:

- #51386 feat(memory): graduate sessionMemory from experimental — solve the multi-session continuity problem
- #54524 [Docs/Design]: session-memory hook + memorySearch.sources["sessions"] causes duplicate indexing of same conversation
- #79902 [Feature]: Add companion-friendly SQLite transcript/session seams on top of database-first runtime
- #79903 [Feature]: Expose durable session lineage and sessionId discovery across rotations
- #79904 [Feature]: Add cursored SQLite transcript read API for companion consumers
- #79905 [Feature]: Add typed transcript projections and a documented companion rebuild contract
- #88838 Track core session/transcript SQLite migration via accessor seam

Existing-overlap context refs:

- #53550 experimental.sessionMemory does not surface gateway-dispatched sessions in memory_search
- #89121 refactor: add transcript reader seam
- #89122 refactor: route command session reads through seam
- #89123 refactor: route transcript writers through session seam
- #89124 refactor: route auto-reply sessions through session seam
- #89129 refactor: route bundled plugin session callers through seam
- #89178 [security-signal] refactor: add SQLite session store foundation
- #89201 refactor: add transcript runtime identity contract
- #89203 refactor: route SDK session compatibility through seam
- #89204 refactor: route plugin SDK session entries through seam
- #89261 refactor: add public transcript identity API
- #89262 refactor: add scoped transcript target writers
- #89348 refactor: add memory session sync identity API
- #89360 refactor: add QMD session artifact identity mapping
- #89518 refactor: migrate plugin transcript mirrors
- #89519 refactor: add session entry lifecycle seam
- #89581 refactor: use canonical transcript reader identity
- #89904 [security-signal] refactor: route bundled session helpers through accessor
- #89911 refactor: migrate bundled transcript target lookups
- #89912 refactor: add transcript update identity contract
- #90437 [security-signal] refactor: add SQLite transcript identity adapter
- #90438 refactor: add SQLite embedded run target adapter
- #90439 refactor: add embedded run session target seam
- #90463 refactor: add session accessor seam with gateway consumer
