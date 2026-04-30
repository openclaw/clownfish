---
repo: openclaw/openclaw
cluster_id: gitcrawl-1945-dedupe-only-20260429d
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#44887"
candidates:
  - "#52191"
  - "#58034"
  - "#59443"
  - "#61518"
cluster_refs:
  - "#41770"
  - "#42199"
  - "#44887"
  - "#46350"
  - "#48225"
  - "#49093"
  - "#52191"
  - "#58034"
  - "#59443"
  - "#61518"
  - "#64095"
  - "#71056"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44887 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1945 on 2026-04-30."
---

# Gitcrawl Cluster 1945

Generated from local gitcrawl run cluster 1945 for `openclaw/openclaw`.

Display title:

> fix(memory): honor env proxy settings for embedding provider requests

Cluster shape from gitcrawl:

- total members: 12
- issues: 0
- pull requests: 12
- open candidates in local store: 4
- representative: #44887, currently closed in local store
- latest member update: 2026-04-28T18:51:14.909986072Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41770 fix(memory): honor env proxy for remote embedding fetch
- #42199 fix(net): honour HTTPS_PROXY in fetchWithSsrFGuard by routing through ProxyAgent
- #44887 fix(memory): honor env proxy settings for embedding provider requests
- #46350 fix: memory embedding requests honor HTTPS_PROXY
- #48225 fix(web-fetch): restore strict-first fetch with narrow env-proxy retry
- #49093 Fix memory fetches behind env proxies
- #64095 Fix proxy fetch propagation for Gemini memory embeddings
- #71056 feat(tools): support optional environment proxy for web_fetch

Open candidates:

- #52191 fix(memory): apply env proxy guard to withRemoteHttpResponse
- #58034 fix(net): harden trusted env proxy fetch guard and add explicit web_fetch opt-in
- #59443 fix(fetch-guard): skip DNS pre-flight in trusted-env-proxy mode when proxy is configured
- #61518 fix(web-fetch): honor HTTP proxy env
