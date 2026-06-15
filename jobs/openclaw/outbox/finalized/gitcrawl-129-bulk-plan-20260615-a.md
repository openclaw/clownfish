---
repo: openclaw/openclaw
cluster_id: gitcrawl-129-bulk-plan-20260615-a
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
  - "#90977"
  - "#90986"
cluster_refs:
  - "#90977"
  - "#90986"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#38622"
  - "#64472"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90986"
canonical_hint: "gitcrawl representative #38622 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 129 on 2026-06-15. Security-signal refs #90986 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #38622, #64472 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 129

Generated from local gitcrawl run cluster 129 for `openclaw/openclaw`.

Display title:

> Workspace file injector does not follow symlinks

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #38622, #64472
- security-signal refs requiring route_security: #90986
- representative: #38622, currently open in local store
- latest member update: 2026-06-14T04:46:05.053176Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90977 [Feature]: Support safe workspace aliases for memory/file writes
- #90986 [security-signal] feat(fs): allow configured workspace aliases

Existing-overlap context refs:

- #38622 Workspace file injector does not follow symlinks
- #64472 Workspace symlinks to ~/.openclaw subdirectories are rejected by boundary path check
