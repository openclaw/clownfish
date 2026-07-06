---
repo: openclaw/openclaw
cluster_id: repair-openclaw-87205-20260706
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - merge
canonical:
  - #87205
candidates:
  - #87205
cluster_refs:
  - #87205
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: fix/doctor-repair-stale-gateway-service
source: planner_promotion
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should repair the existing contributor PR branch
`fix/doctor-repair-stale-gateway-service`.

## Operator Prompt

Repair the existing editable contributor PR #87205 against current main. Preserve contributor authorship. Drop the obsolete service-definition commit and rewrite only the still-missing protocol-mismatch daemon-repair guard: keep checkGatewayHealth authenticated semantics, add a typed protocolMismatch signal only for GatewayTransportError(kind=closed) with the matching close reason, propagate it through DoctorHealthFlowContext, run diagnostics first, then skip launchd bootstrap/install/start/restart mutations. Do not reuse obsolete service-start repair helpers. Run the three focused doctor tests, check:changed when available, autoreview, and produce N-1 gateway proof plus an unreachable-gateway negative control. Stop with needs_human if the transport contract changed or proof needs privileged state. Do not merge, close, label, or comment.

## Related Refs

- #87205

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; repair #87205 instead of opening a replacement when the contributor branch remains editable.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
