---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156597-autonomous-smoke"
mode: "autonomous"
run_id: "24978950754"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978950754"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:58:28.199Z"
canonical: "https://github.com/openclaw/openclaw/issues/39673"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39673"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156597-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978950754](https://github.com/openclaw/clownfish/actions/runs/24978950754)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39673

## Summary

Classified the hydrated cluster without GitHub mutation. #39673 remains the best open canonical for the remaining Linux gateway install user-systemd bus/unavailable failure. #52293 is quarantined as security-sensitive. Closed refs are evidence only. The remaining open non-security issues are related but not safe duplicate closeouts before the canonical fix path lands, so a narrow fix artifact is needed for the #39673 install-path remediation gap.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| execute_fix | skipped |  |  | fix artifact scope itself contains security-sensitive signals |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39673 | keep_canonical | planned | canonical | Best surviving open canonical for the remaining install-path systemd user-bus failure family. |
| #42025 | keep_closed | skipped | superseded | Already closed; retain as historical related/superseded context only. |
| #44070 | keep_closed | skipped | fixed_by_candidate | Already closed; the linked candidate is quarantined separately. |
| #44417 | keep_related | planned | related | Related systemd-user detection/install failure, but unique sudo/root/container scope details remain. |
| #52293 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling and not mutated by ProjectClownfish. |
| #54429 | keep_closed | skipped | duplicate | Already closed duplicate context; no mutation allowed. |
| #54517 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented/stale against current main. |
| #62764 | keep_related | planned | related | Related gateway/systemd work, but distinct doctor --fix/system-unit ownership root cause. |
| #63561 | keep_related | planned | related | Adjacent user-systemd detection failure; not a high-confidence duplicate or fixed-by-candidate closeout. |
| #65184 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; retain as narrower fixed context. |
| cluster:ghcrawl-156597-autonomous-smoke | fix_needed | planned |  | A narrow new fix path is needed for the Linux gateway install systemd-user unavailable remediation gap. |
| cluster:ghcrawl-156597-autonomous-smoke | build_fix_artifact | planned |  | Build a narrow credited fix artifact for executor-owned implementation. |

## Needs Human

- none
