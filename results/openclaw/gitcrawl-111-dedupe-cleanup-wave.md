---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-111-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608147853"
workflow_run_id: "27608147853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608147853"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.364Z"
canonical: "https://github.com/openclaw/openclaw/pull/89846"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89625"
canonical_pr: "https://github.com/openclaw/openclaw/pull/89846"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-111-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608147853](https://github.com/openclaw/clownfish/actions/runs/27608147853)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/89846

## Summary

Canonical path is the open Slack ignoreOtherMentions PR #89846, with #89625 as the tracked feature issue. No GitHub mutations were performed. The cluster contains one overlapping older Slack ignoreOtherMentions PR, one separate Slack replyToMode PR, one separate Discord mass-mention feature request, one related threading feature request, and two closed historical refs. Because merge, fix, and raise_pr are blocked by job frontmatter, this result emits non-mutating classifications only and no fix artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89846 | keep_canonical | planned | canonical | Best surviving canonical implementation path for the Slack ignoreOtherMentions feature, but merge/fix/raise_pr are not allowed in this job. |
| #89625 | keep_related | planned | fixed_by_candidate | Covered by #89846, but not closed before the canonical PR lands or maintainers finish product/merge review. |
| #53467 | keep_related | planned | superseded | Same feature as #89846 but less suitable as canonical for this run; kept open rather than closed because it is useful contributor code and no credited replacement/fix action is allowed. |
| #82253 | keep_related | planned | related | Related Slack per-channel config/message-delivery work, but a different root feature from ignoreOtherMentions; no close or merge action is safe in this cluster. |
| #91415 | keep_related | planned | related | Related mention-gating feature request, but different platform and behavior; keep open for its own product decision. |
| #89871 | keep_related | planned | related | Related channel-config/threading follow-up, but independent from the canonical ignoreOtherMentions path. |
| #58588 | keep_closed | skipped | independent | Already closed unrelated context ref; no action required. |
| #90943 | keep_closed | skipped | related | Already closed related context ref; no mutation required. |

## Needs Human

- none
