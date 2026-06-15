---
repo: openclaw/openclaw
cluster_id: gitcrawl-71-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#72031"
  - "#90179"
cluster_refs:
  - "#72031"
  - "#90179"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#64891"
  - "#72092"
  - "#90187"
  - "#90206"
  - "#90694"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90206 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 71 on 2026-06-15. Existing-overlap refs #64891, #72092, #90187, #90206, #90694 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 71

Generated from local gitcrawl run cluster 71 for `openclaw/openclaw`.

Display title:

> Fix Bedrock aws-sdk compaction auth

Cluster shape from gitcrawl:

- total members: 7
- issues: 3
- pull requests: 4
- open candidates in local store: 2
- excluded existing-overlap refs: #64891, #72092, #90187, #90206, #90694
- representative: #90206, currently open in local store
- latest member update: 2026-06-15T11:49:41.518947Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72031 [Bug]: `image` tool fails for Bedrock with `auth mode: aws-sdk` — `requireApiKey` throws even when AWS SDK creds are available
- #90179 [Bug]: Compaction fails with session-based AWS credentials (AWS_PROFILE / temporary credentials)

Existing-overlap context refs:

- #64891 [Bug]: Hundreds of repeated HTTP requests to 169.254.169.254:80 for the first 10 minutes after the startup
- #72092 [security-signal] fix(media): allow aws-sdk auth mode for image and audio/video paths
- #90187 fix: compaction safeguard should not reject Bedrock aws-sdk auth
- #90206 Fix Bedrock aws-sdk compaction auth
- #90694 fix(amazon-bedrock): skip IMDS during credential auto-detection (#64891)
