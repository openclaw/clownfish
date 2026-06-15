---
repo: openclaw/openclaw
cluster_id: gitcrawl-211-autonomous-issue-wave
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
  - "#90455"
candidates:
  - "#89315"
  - "#90455"
cluster_refs:
  - "#89315"
  - "#90455"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90628"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90455 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 211 on 2026-06-15. Existing-overlap refs #90628 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 211

Generated from local gitcrawl run cluster 211 for `openclaw/openclaw`.

Display title:

> [Bug]: Matrix E2EE heap grows unbounded → OOM — fake-indexeddb never clears finished transactions (@openclaw/matrix)

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #90628
- representative: #90455, currently open in local store
- latest member update: 2026-06-15T11:49:41.375215Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89315 [Bug]: gateway heap grows unbounded over time, gets killed by cgroup OOM on long-running Linux systemd --user deployments
- #90455 [Bug]: Matrix E2EE heap grows unbounded → OOM — fake-indexeddb never clears finished transactions (@openclaw/matrix)

Existing-overlap context refs:

- #90628 fix(matrix): prune finished fake-indexeddb transactions
