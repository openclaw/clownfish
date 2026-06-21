---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-077"
mode: "plan"
run_id: "27560323972-1-80"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-21T09:07:22.314Z"
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
needs_human_count: 6
---

# pr-inventory-needs_proof-20260615T154534-077

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification. The hydrated preflight artifact covers 20 of 25 listed PRs; those are classified conservatively as independent keep-open items except #91237, which has sufficient proof and is ready for maintainer judgment. Five listed refs were not hydrated in the preflight artifact, so no close-style action is planned for them.

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
| Needs human | 6 |

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
| #89209 | keep_independent | planned | independent | Open focused PR remains independent and needs proof; no duplicate, superseding, low-signal, or security route evidence in artifact. |
| #89211 | keep_independent | planned | independent | Open focused PR remains independent and needs proof. |
| #89214 | keep_independent | planned | independent | Feature/config PR needs real behavior proof and should remain open independently. |
| #89234 | keep_independent | planned | independent | Not a dedupe/closure candidate; keep as independent feature/security-boundary-adjacent PR pending proof and maintainer review. |
| #89236 | keep_independent | planned | independent | Draft PR explicitly awaits proof; keep open independently. |
| #89239 | keep_independent | planned | independent | Draft PR remains independent and proof-gated. |
| #57889 | keep_independent | planned | independent | Auth-provider-adjacent PR is not safe to close or merge in this shard; keep independent. |
| #59285 | keep_independent | planned | independent | Low-signal closeout is disabled by job permissions; keep open independently. |
| #93264 | needs_human | blocked | needs_human | Missing hydrated live state for this listed PR. |
| #91222 | keep_independent | planned | independent | Provider reliability PR needs proof and technical review; keep independent. |
| #91229 | keep_independent | planned | independent | Auth-provider-adjacent UI feature needs proof and maintainer review; keep independent. |
| #91237 | needs_human | blocked | needs_human | Ready-for-maintainer-look signal requires human maintainer judgment in this plan-mode shard. |
| #91239 | keep_independent | planned | independent | Substantial provider catalog PR remains an independent maintainer-review item, not a closure candidate. |
| #87589 | keep_independent | planned | independent | Small independent PR remains proof-gated. |
| #91249 | keep_independent | planned | independent | Windows compatibility PR remains independent pending proof/maintainer review. |
| #91250 | keep_independent | planned | independent | Focused docs/prompt PR remains independent pending proof or maintainer decision. |
| #89074 | keep_independent | planned | independent | Message-delivery PR remains independent and proof-gated. |
| #91271 | keep_independent | planned | independent | Conflict/proof-gated PR is independent; no close or merge action is safe. |
| #91273 | keep_independent | planned | independent | Small Windows availability PR remains independent pending proof. |
| #91276 | keep_independent | planned | independent | Focused PR remains independent; no duplicate or closure evidence. |
| #91279 | keep_independent | planned | independent | UI enhancement remains independent pending real behavior proof. |
| #91280 | needs_human | blocked | needs_human | Missing hydrated live state for this listed PR. |
| #91286 | needs_human | blocked | needs_human | Missing hydrated live state for this listed PR. |
| #91288 | needs_human | blocked | needs_human | Missing hydrated live state for this listed PR. |
| #93226 | needs_human | blocked | needs_human | Missing hydrated live state for this listed PR. |

## Needs Human

- #91237 is ready for maintainer look but merge is blocked by job frontmatter and merge_preflight is unavailable.
- #93264 is listed in the job but missing from the hydrated preflight artifact.
- #91280 is listed in the job but missing from the hydrated preflight artifact.
- #91286 is listed in the job but missing from the hydrated preflight artifact.
- #91288 is listed in the job but missing from the hydrated preflight artifact.
- #93226 is listed in the job but missing from the hydrated preflight artifact.
