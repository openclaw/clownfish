---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143816-autonomous-smoke"
mode: "autonomous"
run_id: "24947176458"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24947176458"
head_sha: "cc7e2b9deb213893d18c0bcca95afccd476be4c1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T03:35:16.833Z"
canonical: "https://github.com/openclaw/openclaw/issues/33185"
canonical_issue: "https://github.com/openclaw/openclaw/issues/33185"
canonical_pr: null
actions_total: 7
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-143816-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24947176458](https://github.com/openclaw/projectclownfish/actions/runs/24947176458)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/33185

## Summary

Historical refs #488 and #65283 are marked security-sensitive in the hydrated artifact and are excluded from ProjectClownfish mutation. Live state makes #70180 obsolete: it is already closed as a duplicate of #33185, and #33185 is the historical canonical issue for the custom-provider `Unknown model` regression before the landed main follow-ups referenced in the artifact (#71500/#71806). The remaining open items split into separate follow-ups rather than one clean closeout set: #38816 and #48234 stay open as related-but-distinct bugs, while #64111 and the MiniMax M2.7 items (#65431/#69648) need human judgment before any auditable close action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #33185 | keep_closed | skipped | canonical | Historical canonical issue for the custom-provider `Unknown model` regression; already closed after the landed main fix path. |
| #70180 | keep_closed | skipped | duplicate | Representative issue is obsolete; live state already routes this report to #33185. |
| #38816 | keep_related | planned | related | Same image-model routing family, but this is the bare/unprefixed-provider fallback bug, not the landed custom-provider registry regression. |
| #48234 | keep_related | planned | related | Related MiniMax image-routing report, but it appears to be a separate provider-endpoint/configuration bug and should remain open outside the custom-provider `Unknown model` closeout path. |
| #64111 | needs_human | blocked | needs_human | This likely qualifies for post-merge close, but the hydrated artifact does not expose a single landed Ollama-specific PR/commit ref for an audit-safe close action. |
| #65431 | needs_human | blocked | needs_human | Maintainer judgment is required on whether current VL-01-only routing is the intended product behavior or whether direct MiniMax-M2.7 image support should stay open as a bug. |
| #69648 | needs_human | blocked | needs_human | This is no longer a pure dedupe/cleanup decision; it needs maintainer judgment on MiniMax direct-image support versus the intentional VL-01 fallback behavior now documented elsewhere. |

## Needs Human

- #64111 likely qualifies for post-merge close, but the hydrated artifact does not include a single landed Ollama-specific fix ref for an audit-safe close action.
- #65431 and #69648 require maintainer judgment on whether direct MiniMax-M2.7 image support should remain open or whether the current VL-01-only routing is the intended product behavior.
