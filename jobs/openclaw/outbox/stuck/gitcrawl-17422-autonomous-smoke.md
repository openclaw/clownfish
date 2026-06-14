---
repo: openclaw/openclaw
cluster_id: gitcrawl-17422-autonomous-smoke
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
  - "#660"
candidates:
  - "#672"
cluster_refs:
  - "#633"
  - "#641"
  - "#643"
  - "#644"
  - "#648"
  - "#649"
  - "#660"
  - "#671"
  - "#672"
  - "#685"
  - "#693"
  - "#695"
  - "#724"
  - "#727"
  - "#736"
  - "#775"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #660 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17422 on 2026-06-14."
---

# Gitcrawl Cluster 17422

Generated from local gitcrawl run cluster 17422 for `openclaw/openclaw`.

Display title:

> clawhub publish fails: acceptLicenseTerms invalid value (CLI v0.7.0)

Cluster shape from gitcrawl:

- total members: 16
- issues: 14
- pull requests: 2
- open candidates in local store: 1
- representative: #660, currently closed in local store
- latest member update: 2026-04-30T10:08:30.22621469Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #633 Publish fails with "acceptLicenseTerms: invalid value"
- #641 clawhub publish fails with acceptLicenseTerms invalid value
- #643 CLI publish error: acceptLicenseTerms invalid value
- #644 CLI v0.7.0 publish broken: acceptLicenseTerms not included in payload
- #648 publish fails: acceptLicenseTerms: invalid value (v0.7.0)
- #649 Publish fails with acceptLicenseTerms invalid value despite successful login
- #660 clawhub publish fails: acceptLicenseTerms invalid value (CLI v0.7.0)
- #671 ClawHub CLI Publish Error: acceptLicenseTerms: invalid value
- #685 Issue #660 Add --accept-license-terms flag to publish and sync 
- #693 chore: bump version to 0.7.1 for npm release (fixes acceptLicenseTerms error)
- #695 clawhub publish fails with 'acceptLicenseTerms: invalid value' in CLI v0.7.0
- #724 clawhub publish: acceptLicenseTerms always fails with 'invalid value'
- #727 CLI publish fails with 'acceptLicenseTerms: invalid value'
- #736 publish fails: "acceptLicenseTerms: invalid value" on v0.7.0
- #775 publish command fails: acceptLicenseTerms validation error

Open candidates:

- #672 clawhub sync/publish fails with "acceptLicenseTerms: invalid value" because CLI does not send acceptLicenseTerms
