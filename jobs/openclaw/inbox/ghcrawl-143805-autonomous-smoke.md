---
repo: openclaw/openclaw
cluster_id: ghcrawl-143805-autonomous-smoke
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#61782"
candidates:
  - "#44980"
  - "#45799"
  - "#58508"
  - "#60468"
  - "#60472"
  - "#60483"
  - "#62560"
  - "#65153"
cluster_refs:
  - "#41821"
  - "#44708"
  - "#44732"
  - "#44747"
  - "#44769"
  - "#44771"
  - "#44980"
  - "#45079"
  - "#45116"
  - "#45467"
  - "#45657"
  - "#45799"
  - "#45814"
  - "#46282"
  - "#58508"
  - "#60468"
  - "#60472"
  - "#60483"
  - "#61782"
  - "#62426"
  - "#62498"
  - "#62539"
  - "#62560"
  - "#64084"
  - "#65153"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #61782 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143805 on 2026-04-25."
---

# GHCrawl Cluster 143805

Generated from local ghcrawl run cluster 143805 for `openclaw/openclaw`.

Display title:

> Telegram media download fails: SSRF blocks 'api.telegram.org' when using proxy

Cluster shape from ghcrawl:

- total members: 25
- issues: 25
- pull requests: 0
- open candidates in local store: 8
- representative: #61782, currently closed in local store
- latest member update: 2026-04-25T17:12:54.250Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41821 [Bug]: Telegram photo download fails — single photo and media group both affected
- #44708 [Bug]: Telegram media download broken since 2026.3.11
- #44732 Telegram media download fails when behind HTTP proxy (SSRF guard DNS pinning bypasses proxy)
- #44747 [Bug]: Telegram Voice Memo Download Fails
- #44769 [Bug] Telegram插件下载媒体文件时没有使用代理配置
- #44771 [Bug] Telegram plugin fails to download media files when proxy is configured
- #45079 [Bug]: Regression: Telegram channel fails to fetch media when configured with proxy on 2026.3.12, worked on 2026.3.7
- #45116 [Bug] Telegram media files cannot be received after upgrading to 3.12
- #45467 Media download fails when Telegram proxy is configured (SSRF guard overrides proxy dispatcher)
- #45657 [Bug]: Telegram media download always fails - SSRF fetch guard ignores all IPv4/network configuration
- #45814 [Bug]: Telegram media download fails when proxy is configured - SSRF guard dispatcher overrides proxy dispatcher
- #46282 [Bug]: Telegram media download uses native fetch instead of proxy-aware fetch
- #61782 Telegram media download fails: SSRF blocks 'api.telegram.org' when using proxy
- #62426 Telegram file download blocked by SSRF policy when using Fake-IP proxy (172.19.0.1 treated as private IP)
- #62498 [Bug]: Media download failed in v2026.4.5 (Re-occurrence of #32326)
- #62539 [Bug] Telegram media download fails: proxy users api.telegram.org resolves to 127.0.0.1, SSRF blocks it
- #64084 [Bug]: Telegram media download still fails with localhost HTTP proxy on 2026.4.5 release; config has no durable workaround

Open candidates:

- #44980 Telegram media download fails when proxy is required - fetchRemoteMedia bypasses configured proxy
- #45799 [Bug]: Telegram media download fails silently when proxy unavailable (no retry)
- #58508 [Bug] url-fetch SSRF policy blocks api.telegram.org file CDN (private/internal IP classification)
- #60468 Telegram media download blocked by SSRF policy when using proxy
- #60472 [Bug]: Telegram media download fails when proxy is socks5
- #60483 [Bug]:
- #62560 Bug: SSRF guard blocks ALL external URLs when using local proxy (affects Telegram media/WeChat/web_fetch)
- #65153 [Bug] Telegram media download blocked - resolves to private IP
