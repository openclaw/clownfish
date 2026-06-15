---
repo: openclaw/openclaw
cluster_id: gitcrawl-286-plan-wave-20260615-a
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
canonical:
  - "#77875"
candidates:
  - "#77875"
  - "#77877"
  - "#77912"
cluster_refs:
  - "#77875"
  - "#77877"
  - "#77912"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #77875 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 286 on 2026-06-15."
---

# Gitcrawl Cluster 286

Generated from local gitcrawl run cluster 286 for `openclaw/openclaw`.

Display title:

> fix(ui): add document MIME mappings (xlsx/docx/pptx/etc) for chat attachments — Bug #9

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #77875, currently open in local store
- latest member update: 2026-06-14T04:46:06.32249Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77875 fix(ui): add document MIME mappings (xlsx/docx/pptx/etc) for chat attachments — Bug #9
- #77877 feat(gateway): managed outgoing attachments for documents (xlsx/pdf/docx) — Bug #9
- #77912 fix(chat): MEDIA: binary file delivery — proper download for xlsx/csv/zip (Sandpaw Bug #9b)
