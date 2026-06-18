---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27766580564"
workflow_run_id: "27766580564"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27766580564"
head_sha: "683035536724c9cd15f9f5fa432ac4355d75f5db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T15:06:05.998Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27766580564](https://github.com/openclaw/clownfish/actions/runs/27766580564)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

Prepared a scoped local repair for canonical PR #93869 on `clownfish/repair-51868-qr-rendering`. The patch marks only block-art copy payloads with `data-code-encoding="block-art-json"`, decodes only those marked payloads in the chat copy handler, keeps normal and legacy raw `data-code` payloads raw, and adds focused DOM/copy coverage for normal and truncated QR art. No GitHub comments, labels, closes, merges, pushes, or new PRs were performed. The #93869 item action was downgraded to non-mutating `needs_human` because deterministic validation reported it as security-sensitive even though the hydrated preflight artifact explicitly marks #93869 `security_sensitive: false`, so `route_security` is not permitted by the repair rules.

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
  "summary": "Repair PR #93869 in place so QR/block-art copy payloads preserve leading quiet-zone spaces without broadening normal code-block copy serialization. Block-art code buttons get an explicit `data-code-encoding=\"block-art-json\"` marker and encoded payload; normal code buttons keep raw `data-code`; the chat copy handler decodes only marked payloads and preserves unmarked legacy raw payloads.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch so block-art copy payloads preserve leading QR quiet-zone spaces after DOM parsing.\n- Encodes only block-art `data-code` payloads and marks them with `data-code-encoding=\"block-art-json\"`; normal code-block copy payloads remain raw.\n- Decodes only marked block-art payloads in the chat copy handler while keeping existing unmarked raw payloads copyable.\n- Adds focused coverage for normal code, normal QR block-art copy, truncated QR block-art copy, and raw payload collision behavior.\n\n## Credit\nThis continues to carry forward the fix idea and reproduction from @emg110 in https://github.com/openclaw/openclaw/pull/51868. Thanks @emg110 for the original report, implementation direction, and proof.\n\n## Verification\n- `node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts` passed: 2 shards, 264 tests.\n- `git diff --check` passed.\n- `corepack pnpm exec oxfmt --check --threads=1 ui/src/ui/markdown.ts ui/src/ui/markdown.test.ts ui/src/ui/views/chat.ts ui/src/ui/views/chat.test.ts` passed.\n- `.agents/skills/autoreview/scripts/autoreview --mode local` passed with no accepted/actionable findings after addressing the raw/encoded payload ambiguity.\n- `corepack pnpm check:changed` was attempted after restoring the shallow merge base; it failed on out-of-diff `src/mcp/channel-shared.ts(131,6)` unused type `ClaudePermissionRequest`, unrelated to this repair.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.test.ts"
  ],
  "validation_commands": [
    "pnpm test ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts",
    "pnpm exec oxfmt --check --threads=1 ui/src/ui/markdown.ts ui/src/ui/markdown.test.ts ui/src/ui/views/chat.ts ui/src/ui/views/chat.test.ts",
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve #93869 as the current Clownfish replacement PR and keep the source credit trail visible.",
    "Credit @emg110 and https://github.com/openclaw/openclaw/pull/51868 for the original QR half-block rendering report, implementation direction, and proof.",
    "Do not comment on, close, label, or otherwise alter #51868 in this repair job."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [
    "Resolve validator conflict for #93869: deterministic validation reported a security-sensitive target, but the hydrated preflight artifact explicitly marks #93869 `security_sensitive: false`, which forbids `route_security` under the repair rules."
  ],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89914ms remains, 90000ms reserved for report upload |
| execute_fix | blocked |  |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89914ms remains, 90000ms reserved for report upload |

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
| #93869 | needs_human | blocked | needs_human | Conflicting validator/security inputs require maintainer or planner reconciliation before any PR-targeted mutation for #93869; `route_security` is disallowed by the hydrated preflight artifact. |
| #51868 | keep_related | planned | superseded | Source PR is related/superseded evidence and credit context only; no closure or mutation is allowed in this job. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | A complete executable repair exists for the canonical PR branch; GitHub mutation is reserved for the applicator after the exact #93869 validator conflict is cleared. |

## Needs Human

- Resolve validator conflict for #93869: deterministic validation reported a security-sensitive target, but the hydrated preflight artifact explicitly marks #93869 `security_sensitive: false`, which forbids `route_security` under the repair rules.
