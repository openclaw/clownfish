---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T154534-001"
mode: "plan"
run_id: "27560323972-1-1"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-07-06T21:38:06.038Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 25
---

# pr-inventory-maintainer_owned-20260615T154534-001

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Classified the maintainer-owned PR inventory shard using the provided preflight artifact as live state. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. No close, merge, fix, or security-route actions are planned; low-signal closeout, merges, and fix PRs are disabled or blocked by the job frontmatter. PRs that are draft, dirty, failing proof, waiting on author, very broad, or requiring maintainer/product judgment are retained for maintainer review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 25 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46793 | needs_human | planned | needs_human | Needs maintainer/author follow-up before any close or merge classification is safe. |
| #55997 | needs_human | planned | needs_human | Needs maintainer/author follow-up; no close or merge action is permitted. |
| #84472 | needs_human | planned | needs_human | Broad feature/config/docs implementation needs maintainer review; merge and fix actions are blocked. |
| #58367 | needs_human | planned | needs_human | Needs proof and maintainer technical judgment before any mutation. |
| #58378 | needs_human | planned | needs_human | Needs proof and maintainer review for broad macOS trust-flow changes. |
| #59705 | needs_human | planned | needs_human | Needs proof/author follow-up; no low-signal closeout is allowed by job permissions. |
| #85878 | needs_human | planned | needs_human | Looks like a focused candidate but needs maintainer merge review; merge is blocked in this plan job. |
| #85311 | needs_human | planned | needs_human | Needs proof and maintainer technical judgment. |
| #88487 | needs_human | planned | needs_human | Needs maintainer review and branch repair outside this plan-only job. |
| #88497 | needs_human | planned | needs_human | Needs maintainer review and branch repair; merge is blocked. |
| #88639 | needs_human | planned | needs_human | Broad documentation/comment PR needs maintainer judgment; not eligible for automated close or merge. |
| #89970 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; no mutation planned. |
| #89973 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; merge is blocked. |
| #89977 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; no mutation planned. |
| #89980 | needs_human | planned | needs_human | Needs author/maintainer follow-up before any mutation. |
| #89979 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; merge is blocked. |
| #90034 | needs_human | planned | needs_human | Needs author follow-up and branch repair; no close or merge action planned. |
| #90107 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; no mutation planned. |
| #90085 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; no mutation planned. |
| #90130 | needs_human | planned | needs_human | Needs maintainer technical review; merge is blocked. |
| #90265 | needs_human | planned | needs_human | Needs maintainer review or draft finalization; no mutation planned. |
| #90256 | needs_human | planned | needs_human | Needs author/maintainer follow-up; no mutation planned. |
| #90311 | needs_human | planned | needs_human | Needs maintainer technical review; no mutation planned. |
| #90195 | needs_human | planned | needs_human | Needs maintainer technical review; no mutation planned. |
| #90308 | needs_human | planned | needs_human | Looks like a candidate for maintainer review, but merge/fix actions are unavailable in this plan job. |

## Needs Human

- #46793: dirty branch, failed proof, waiting on author.
- #55997: dirty branch, failed proof, waiting on author.
- #84472: broad XL draft doctor preview feature needs maintainer judgment.
- #58367: draft gateway/auth-provider change needs proof.
- #58378: broad draft macOS trust-flow change needs proof.
- #59705: draft automation-script PR needs proof.
- #85878: clean focused Telegram PR needs maintainer merge review, but merge is blocked.
- #85311: unstable auth/session PR lacks required behavior proof.
- #88487: draft/dirty build PR needs maintainer review or branch repair.
- #88497: draft/dirty gateway startup PR needs maintainer review or branch repair.
- #88639: broad dirty docs/comment sweep needs maintainer judgment.
- #89970: clean draft plugin guard PR needs maintainer review/finalization.
- #89973: clean draft plugin guard PR needs maintainer review/finalization.
- #89977: clean draft plugin guard PR needs maintainer review/finalization.
- #89980: clean draft trajectory PR is waiting on author.
- #89979: clean draft config guard PR needs maintainer review/finalization.
- #90034: dirty draft gateway scope PR is waiting on author.
- #90107: clean draft command/provider alias PR needs maintainer review/finalization.
- #90085: clean draft gateway pricing PR needs maintainer review/finalization.
- #90130: clean draft auth-provider PR needs maintainer technical review.
- #90265: draft agents schema-stats PR needs maintainer review/finalization.
- #90256: draft llm-core schema-validation PR is waiting on author.
- #90311: draft MCP schema quarantine PR needs maintainer technical review.
- #90195: draft plugin descriptor guard PR needs maintainer technical review.
- #90308: open diagnostics PR appears ready for maintainer look, but merge is blocked and no merge preflight is present.
