---
repo: openclaw/openclaw
cluster_id: gitcrawl-17427-autonomous-smoke
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
canonical:
  - "#1037"
candidates:
  - "#1016"
  - "#1037"
  - "#1039"
  - "#1040"
  - "#1041"
  - "#1043"
  - "#1044"
  - "#1045"
cluster_refs:
  - "#1016"
  - "#1037"
  - "#1039"
  - "#1040"
  - "#1041"
  - "#1043"
  - "#1044"
  - "#1045"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #1037 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17427 on 2026-06-14."
---

# Gitcrawl Cluster 17427

Generated from local gitcrawl run cluster 17427 for `openclaw/openclaw`.

Display title:

> False Positive: ifly-image-understanding is 100% safe, flagged incorrectly

Cluster shape from gitcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 8
- representative: #1037, currently open in local store
- latest member update: 2026-04-30T10:08:29.479034278Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #1016 xfei-invoice Flagged suspicious
- #1037 False Positive: ifly-image-understanding is 100% safe, flagged incorrectly
- #1039 False Positive: ifly-text-proofread is safe, official iFlytek text proofreading tool
- #1040 False Positive: ifly-voiceclone-tts is  safe, official iFlytek voice clone tool
- #1041 False Positive: ifly-pdf-image-ocr is  safe, official iFlytek OCR tool
- #1043 False Positive: ifly-translate is  safe, official iFlytek machine translation tool
- #1044 False Positive: ifly-speed-transcription is  safe, official iFlytek transcription tool
- #1045 False Positive: ifly-ocr-invoice is safe, official iFlytek invoice OCR tool
