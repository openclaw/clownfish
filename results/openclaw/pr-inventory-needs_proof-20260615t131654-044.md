---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-044"
mode: "plan"
run_id: "27549045338"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045338"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.668Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# pr-inventory-needs_proof-20260615T131654-044

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045338](https://github.com/openclaw/clownfish/actions/runs/27549045338)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No shared canonical was provided and the job explicitly says not to invent one. Merge, fix, raise_pr, and low-signal closeout are disabled; most open PRs are kept independently pending proof/review. Security-shaped PRs are quarantined with scoped route_security actions only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

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
| #74266 | keep_independent | planned | independent | Keep open as an independent docs PR pending proof/author follow-up; no close or merge path is available in plan mode. |
| #74274 | keep_independent | planned | independent | Keep independently; classification is clear but merge/fixed-by-candidate closeout is blocked by failed proof/checks and no canonical. |
| #74488 | keep_independent | planned | independent | Keep independently pending product/review proof; no close, merge, or fix action is permitted. |
| #74529 | keep_independent | planned | independent | Keep independently pending proof and maintainer review; no safe closure basis exists. |
| #87968 | keep_independent | planned | independent | Keep independently and avoid mutating action because live target_updated_at is unavailable from the artifact. |
| #74734 | keep_independent | planned | independent | Keep independently pending real behavior proof. |
| #74783 | keep_independent | planned | independent | Keep independently pending proof/review; broad telemetry behavior should not be closed as duplicate. |
| #74974 | keep_independent | planned | independent | Keep independently; it may be promising, but conflicts/dirty state and blocked merge prevent a merge recommendation. |
| #74990 | keep_independent | planned | independent | Keep independently; live state is unavailable for any mutating action. |
| #75009 | keep_independent | planned | independent | Keep independently; no hydrated proof supports closeout. |
| #75050 | keep_independent | planned | independent | Keep independently; waiting-on-author/docs PR should not be closed without live hydrated state and low-signal cleanup permission. |
| #75075 | keep_independent | planned | independent | Keep independently pending product/security-boundary review. |
| #75076 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling; continue classifying unrelated PRs. |
| #93110 | keep_independent | planned | independent | Keep independently; live hydrated state is unavailable for any stronger action. |
| #75254 | keep_independent | planned | independent | Keep independently pending proof/review. |
| #75466 | keep_independent | planned | independent | Keep independently; this is a feature/UI PR needing proof, not dedupe cleanup. |
| #75545 | keep_independent | planned | independent | Keep independently pending proof/review. |
| #75777 | keep_independent | planned | independent | Keep independently; no low-signal closeout permission is enabled. |
| #77492 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling; do not close, merge, or fix through Clownfish. |
| #82085 | keep_independent | planned | independent | Keep independently pending proof/review. |
| #83015 | keep_independent | planned | independent | Keep independently; no merge/fix action is permitted in this job. |
| #83235 | keep_independent | planned | independent | Keep independently pending proof/review. |
| #92782 | keep_independent | planned | independent | Keep independently pending compatibility review. |
| #44111 | keep_independent | planned | independent | Keep independently; broad feature/security-boundary-adjacent work needs proof and review, not inventory closeout. |
| #49083 | route_security | planned | security_sensitive | Quarantine this exact PR as security-sensitive despite small diff; do not mutate through Clownfish cleanup. |
| #58993 | keep_independent | planned | independent | Keep independently pending proof; failing proof blocks any stronger recommendation. |
| #63330 | keep_independent | planned | independent | Keep independently; broad runtime feature work is not closeable or mergeable from this inventory shard. |
| #65655 | route_security | planned | security_sensitive | Quarantine this exact PR for security handling; unrelated non-security PRs remain classified. |
| #65936 | keep_independent | planned | independent | Keep independently; do not close as low-signal without explicit permission. |
| #68384 | keep_independent | planned | independent | Keep independently pending proof/review under the provided security posture. |
| #72829 | keep_independent | planned | independent | Keep independently pending provider compatibility proof. |
| #72972 | keep_independent | planned | independent | Keep independently; dirty branch and failed proof block merge/fixed-by-candidate treatment. |
| #73168 | keep_independent | planned | independent | Keep independently pending Android/auth-provider review. |
| #73294 | keep_independent | planned | independent | Keep independently; failed checks block any merge/fixed-by-candidate path. |
| #74232 | keep_independent | planned | independent | Keep independently pending proof and review-bot resolution. |
| #74954 | keep_independent | planned | independent | Keep independently; broad provider behavior change needs proof/review. |
| #75066 | keep_independent | planned | independent | Keep independently; live hydrated state is unavailable for mutation. |
| #93202 | keep_independent | planned | independent | Keep independently pending hydrated proof/review. |
| #80599 | keep_independent | planned | independent | Keep independently pending hydrated proof/review. |
| #86338 | keep_independent | planned | independent | Keep independently pending hydrated provider compatibility review. |

## Needs Human

- #75076 routed to central OpenClaw security handling because it concerns Control UI auth/token hardening.
- #77492 routed to central OpenClaw security handling because it describes a pre-auth CPU DoS security fix.
- #49083 routed to central OpenClaw security handling because it alleges a TLS fingerprint timing side-channel.
- #65655 routed to central OpenClaw security handling because it concerns Mattermost callback auth/token replay behavior.
