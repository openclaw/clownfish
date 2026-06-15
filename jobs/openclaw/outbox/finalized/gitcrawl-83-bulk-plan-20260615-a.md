---
repo: openclaw/openclaw
cluster_id: gitcrawl-83-bulk-plan-20260615-a
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
  - "#47120"
  - "#75301"
  - "#77637"
  - "#77941"
cluster_refs:
  - "#47120"
  - "#75301"
  - "#77637"
  - "#77941"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#50248"
  - "#69954"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #50248 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 83 on 2026-06-15. Existing-overlap refs #50248, #69954 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 83

Generated from local gitcrawl run cluster 83 for `openclaw/openclaw`.

Display title:

> Bug: sessions cleanup --fix-missing can prune fresh cron sessions with valid transcripts

Cluster shape from gitcrawl:

- total members: 6
- issues: 5
- pull requests: 1
- open candidates in local store: 4
- excluded existing-overlap refs: #50248, #69954
- representative: #50248, currently open in local store
- latest member update: 2026-06-14T04:46:07.456858Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47120 [Feature Request] Session List: Show timestamp + last message preview
- #75301 [Feature]: `openclaw caches` command to inspect and prune unbounded `~/.openclaw/` cache dirs (plugin-runtime-deps, browser, tools, orphan transcripts)
- #77637 [Feature]: Control UI — Session transcript browser
- #77941 Add native sessions cleanup support for orphan/unindexed transcript archive/prune

Existing-overlap context refs:

- #50248 Bug: sessions cleanup --fix-missing can prune fresh cron sessions with valid transcripts
- #69954 [security-signal] fix: fall back to canonical session transcripts during cleanup
