---
repo: openclaw/openclaw
cluster_id: gitcrawl-91-bulk-plan-20260615-a
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
  - "#92664"
candidates:
  - "#92664"
  - "#92680"
  - "#92682"
  - "#92700"
  - "#92756"
cluster_refs:
  - "#92664"
  - "#92680"
  - "#92682"
  - "#92700"
  - "#92756"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92680"
canonical_hint: "gitcrawl representative #92664 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 91 on 2026-06-15. Security-signal refs #92680 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 91

Generated from local gitcrawl run cluster 91 for `openclaw/openclaw`.

Display title:

> [Bug]: read tool fails to read GBK-encoded text files on Chinese Windows (displays garbled text)

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- security-signal refs requiring route_security: #92680
- representative: #92664, currently open in local store
- latest member update: 2026-06-14T04:46:03.87284Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92664 [Bug]: read tool fails to read GBK-encoded text files on Chinese Windows (displays garbled text)
- #92680 [security-signal] feat(read): add encoding parameter for GBK and non-UTF-8 text files (#92664)
- #92682 fix(read): use system encoding fallback for non-UTF-8 text files on Windows
- #92700 #92664: [Bug]: read tool fails to read GBK-encoded text files on Chinese Windows (displays garbled text)
- #92756 fix(read): decode GBK-encoded files on Windows via existing codepage fallback
