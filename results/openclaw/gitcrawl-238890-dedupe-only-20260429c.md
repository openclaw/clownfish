---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238890-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108027189"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108027189"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.681Z"
canonical: "https://github.com/openclaw/openclaw/pull/45912"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/45912"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238890-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108027189](https://github.com/openclaw/clownfish/actions/runs/25108027189)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45912

## Summary

Classified #45912 as the current canonical PR for the configured-root skill symlink family. No close/comment/label mutation is planned: #45912 is useful but not merge-ready because of an unresolved Codex bundled-skill allowlist finding, #59688 overlaps but has failing/cancelled checks, and #63312 is related but covers a distinct user-managed .agents/skills symlink policy question. Linked #44051 stays open as the source bug, #46690 is independent product follow-up, and closed #61585 remains historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #45912 | keep_canonical | planned | canonical | Best live canonical for the configured-root symlink gap, but this dedupe-only job cannot merge or repair it and the unresolved bot finding blocks any merge recommendation. |
| #59688 | keep_related | planned | related | Related overlapping PR that should remain open for consolidation or credit; not a high-confidence close target. |
| #63312 | keep_related | planned | related | Related but distinct PR; keep open rather than closing or treating it as covered by #45912. |
| #44051 | keep_related | planned | related | Source issue for the same family; keep open until a canonical fix lands and post-merge closeout is allowed. |
| #46690 | keep_independent | planned | independent | Independent follow-up outside this dedupe cluster; leave open. |
| #61585 | keep_closed | skipped | related | Already closed related context; no action. |

## Needs Human

- none
