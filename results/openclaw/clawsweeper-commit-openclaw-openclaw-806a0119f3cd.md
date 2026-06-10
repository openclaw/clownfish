---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-806a0119f3cd"
mode: "autonomous"
run_id: "27259600929"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27259600929"
head_sha: "b53cc678ce321243d48f88a3a8db54bd66e34c10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-10T07:29:56.401Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# clawsweeper-commit-openclaw-openclaw-806a0119f3cd

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27259600929](https://github.com/openclaw/clownfish/actions/runs/27259600929)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Verified the ClawSweeper finding against openclaw/openclaw main at a3d5e5bc7247427db222d57051f5cb28813d2f29. The original Codex-harness part is already mitigated on current main by forcing OPENCLAW_SKIP_DOCKER_BUILD=0 before that lane rebuilds with codex, but the ACP bind Docker live suite still appends acpx and then reuses a shared live-test image built with only matrix. No security-sensitive signal or canonical PR is present, so the planned path is a narrow new fix PR that adds acpx to the shared live-test image build arguments. No close or merge actions are allowed or planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/91879 | clownfish/clawsweeper-commit-openclaw-openclaw-806a0119f3cd |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91879 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:clawsweeper-commit-openclaw-openclaw-806a0119f3cd | fix_needed | planned |  | Current main still has the ACP bind portion of the reported shared live-test Docker image regression; allow_fix_pr is true and no viable canonical PR or hydrated issue/PR target exists. |
| cluster:clawsweeper-commit-openclaw-openclaw-806a0119f3cd | build_fix_artifact | planned |  | A one-file workflow fix can make the shared live-test image include the plugin dependency set required by the reused ACP bind Docker live suite. |

## Needs Human

- none
