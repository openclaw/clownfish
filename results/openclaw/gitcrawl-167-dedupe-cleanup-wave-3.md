---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-167-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220053"
workflow_run_id: "27610220053"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220053"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.409Z"
canonical: "https://github.com/openclaw/openclaw/issues/77702"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77702"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-167-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220053](https://github.com/openclaw/clownfish/actions/runs/27610220053)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77702

## Summary

Classified the hydrated open refs without GitHub mutation. #77702 is the best live canonical for the MEDIA-directive attachment-loss subfamily in this cluster; #91383 remains a separate canonical issue for ordinary direct-reply Markdown-link/rich-parse text loss. Linked PRs #92946 and #93059 are not merge or close candidates here because the job blocks merge/fix actions and their hydrated reviews/checks show unresolved proof or CI blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #77702 | keep_canonical | planned | canonical | #77702 is the clearest hydrated open canonical for the MEDIA attachment-loss root cause; no duplicate closeout is safe against excluded/unhydrated overlap refs. |
| #91383 | keep_related | planned | related | Related Telegram message-loss area, but not the same root cause as the MEDIA directive attachment-loss canonical; keep it open rather than closing as a duplicate. |
| #92946 | keep_related | planned | related | Keep open as related Telegram delivery work; failing checks and review blockers prevent merge or fixed-by-candidate closeout, and it is not a duplicate of the cluster canonical. |
| #93059 | keep_related | planned | related | #93059 is a linked candidate for #91383, but it is draft with failed proof and an unresolved path-coverage review blocker; keep it open as related work. |

## Needs Human

- none
