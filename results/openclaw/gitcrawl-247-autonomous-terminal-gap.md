---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27666808036"
workflow_run_id: "27666808036"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27666808036"
head_sha: "1cfa357bb6e2e0dc9f37fd20ef7f7b69b41271f5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T05:01:31.003Z"
canonical: "https://github.com/openclaw/openclaw/issues/90941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90941"
canonical_pr: "https://github.com/openclaw/openclaw/pull/90942"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-247-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27666808036](https://github.com/openclaw/clownfish/actions/runs/27666808036)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90941

## Summary

Classified the symlinked-bin doctor failure as the canonical lane with #90941 and its already-hydrated linked PR #90942. No close or merge is planned because #90942 is an existing-overlap context PR and no merge preflight/Codex review is available in this worker result. #90951 is related but not a duplicate; it needs a maintainer product decision about npm package contents and doctor sandbox-image repair UX.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #90941 | keep_canonical | planned | canonical | Canonical issue remains open; the linked fix candidate is not merged and is excluded from this cluster's actionable refs by overlap policy. |
| #90942 | keep_related | skipped | related | Context-only existing-overlap PR; preserve it as evidence for the canonical path without mutating it in this cluster. |
| #90951 | needs_human | planned | needs_human | Related follow-up with a different root cause and a product/release packaging decision; not a duplicate of #90941 and not safe for an autonomous narrow fix artifact. |

## Needs Human

- Decision needed for #90951: choose whether npm-package installs should ship sandbox setup scripts, offer a different package-safe doctor repair path, or keep sandbox image auto-build source-checkout only.
