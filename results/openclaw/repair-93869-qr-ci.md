---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27769253515"
workflow_run_id: "27769253515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27769253515"
head_sha: "0b9185cdbc7d53fea267e254821989f90ada6ae7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T15:41:18.861Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27769253515](https://github.com/openclaw/clownfish/actions/runs/27769253515)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

The hydrated preflight artifact marks both #93869 and #51868 as non-security-sensitive, so the validator's security wording cannot be safely converted into route_security under the job's security repair rule. PR #93869 remains the canonical repair context, but the per-PR mutating fix action is downgraded to needs_human while preserving the complete non-mutating cluster-level fix artifact for the existing QR/block-art CI repair path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Repair Candidate

```json
{
  "target": "#93869",
  "source_refs": [
    "#93869",
    "#51868"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "build_fix_artifact"
  ],
  "summary": "Repair #93869 by using a deterministic marked copy-payload representation only for QR/block-art `data-code` values, then decoding that marked representation in the chat copy handler while preserving existing raw payloads for normal code blocks.",
  "pr_title": "UI: preserve QR block-art copy whitespace",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch for the QR/block-art copy regression.\n- Encodes only block-art `data-code` payloads with a deterministic marked representation that survives DOM parsing.\n- Decodes marked payloads before `copyToClipboard`, while leaving existing raw/non-art payloads copyable.\n- Adds focused coverage proving rendered DOM and clipboard copy preserve the two leading quiet-zone spaces for normal and truncated QR/block-art output.\n\n## Credit\nThis continues the replacement path for @emg110's original contribution and proof in https://github.com/openclaw/openclaw/pull/51868.\n\n## Validation\n- `node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts`\n- `pnpm check:changed`\n\n## Notes\nDo not edit prompt snapshots, ClawHub cleanup behavior, or unrelated checks in this repair.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/views/chat.test.ts",
    "ui/src/ui/chat/grouped-render.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve #93869 as the canonical replacement branch.",
    "Carry forward attribution to @emg110 and https://github.com/openclaw/openclaw/pull/51868 in the PR body/release-note context.",
    "Do not close, comment on, label, or otherwise alter #51868 in this repair run."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [
    "Resolve validator/preflight conflict for #93869: validator requires route_security, but hydrated preflight explicitly marks #93869 `security_sensitive: false`, which the security repair rule says cannot be overridden."
  ],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89899ms remains, 90000ms reserved for report upload |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/93869 |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89899ms remains, 90000ms reserved for report upload |

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
| #93869 | needs_human | blocked | needs_human | Blocked on deterministic validation/security-boundary conflict for the exact PR target; do not mutate or route #93869 until the preflight security classification or validator expectation is reconciled. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | A complete executable repair plan is available for the deterministic applicator/executor once the per-target validation conflict is resolved. |
| #51868 | keep_related | planned | superseded | Keep #51868 open and unchanged; credit is carried forward through #93869. |

## Needs Human

- Resolve validator/preflight conflict for #93869: validator requires route_security, but hydrated preflight explicitly marks #93869 `security_sensitive: false`, which the security repair rule says cannot be overridden.
