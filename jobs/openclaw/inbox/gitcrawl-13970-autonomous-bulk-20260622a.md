---
repo: openclaw/openclaw
cluster_id: gitcrawl-13970-autonomous-bulk-20260622a
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
  - "#13620"
  - "#47856"
cluster_refs:
  - "#8843"
  - "#13620"
  - "#42437"
  - "#42735"
  - "#47856"
  - "#49729"
  - "#50312"
  - "#51050"
  - "#51773"
  - "#51785"
  - "#53652"
  - "#54484"
  - "#56027"
  - "#56638"
  - "#56839"
  - "#57254"
  - "#62698"
  - "#63053"
  - "#63866"
  - "#65289"
  - "#66053"
  - "#66549"
  - "#68016"
  - "#68536"
  - "#68998"
  - "#69034"
  - "#70977"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#39506"
  - "#42538"
  - "#44078"
  - "#51347"
  - "#52167"
  - "#53917"
  - "#54131"
  - "#55098"
  - "#55114"
  - "#55364"
  - "#56444"
  - "#57156"
  - "#59174"
  - "#60315"
  - "#60993"
  - "#61970"
  - "#62669"
  - "#62770"
  - "#63169"
  - "#63314"
  - "#63461"
  - "#63493"
  - "#63720"
  - "#63816"
  - "#64132"
  - "#64226"
  - "#64665"
  - "#64750"
  - "#65002"
  - "#65117"
  - "#65426"
  - "#65451"
  - "#66020"
  - "#66090"
  - "#69183"
  - "#69435"
  - "#71138"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#47856"
  - "#50312"
  - "#51347"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #63169 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 13970 on 2026-06-22. Security-signal refs #47856, #50312 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #39506, #42538, #44078, #51347, #52167, #53917, #54131, #55098, #55114, #55364, #56444, #57156, #59174, #60315, #60993, #61970, #62669, #62770, #63169, #63314, #63461, #63493, #63720, #63816, #64132, #64226, #64665, #64750, #65002, #65117, #65426, #65451, #66020, #66090, #69183, #69435, #71138 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 13970

Generated from local gitcrawl run cluster 13970 for `openclaw/openclaw`.

Display title:

> WhatsApp media send reports success but attachment is never delivered (2026.4.8)

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 2
- excluded existing-overlap refs: #39506, #42538, #44078, #51347, #52167, #53917, #54131, #55098, #55114, #55364, #56444, #57156, #59174, #60315, #60993, #61970, #62669, #62770, #63169, #63314, #63461, #63493, #63720, #63816, #64132, #64226, #64665, #64750, #65002, #65117, #65426, #65451, #66020, #66090, #69183, #69435, #71138
- security-signal refs requiring route_security: #47856, #50312, #51347
- representative: #63169, currently closed in local store
- latest member update: 2026-06-18T07:21:49.118635429Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #8843 Feature: Expose Telegram file_id for audio/document attachments (enable download)
- #42437 [Feature]: add configurable media.allowedRoots for message tool --media parameter
- #42735 WhatsApp: message.send rejects valid E.164 target while auto-reply to same contact succeeds
- #49729 Feature: Telegram sendPhoto support for agent responses
- #50312 [security-signal] Allow configurable mediaLocalRoots for outbound media sends
- #51050 Slack channel: support mediaLocalRoots config for outbound local file sends
- #51773 [Bug]: Slack inbound attachments blocked by path security policy — image analysis fails
- #51785 WhatsApp outbound send to new contact fails despite linked session
- #53652 WhatsApp: HTML files silently fail to attach as documents
- #54484 Telegram inbound image messages should expose local media paths
- #56027 Plugin hot-reload clobbers tool send channel registry ("unsupported channel: whatsapp")
- #56638 Agent tool surface missing media/audio delivery tool since 2026.3.x
- #56839 [Bug]: WhatsApp gateway sends message to Telegram user ID interpreted as phone number during config recovery
- #57254 Telegram outbound media exists internally, but agents cannot send files/documents because no public media/message tool is exposed
- #62698 Feature: Send audio/media files from agent to Telegram channel
- #63053 [Feature]: Expose outbound media/attachment pipeline to assistant tool surface
- #63866 message tool filePath rejected for agent workspace dir on Slack channel
- #65289 WhatsApp: support PTT (push-to-talk) flag for sending voice notes via message send
- #66053 WhatsApp: [[audio_as_voice]] / PTT voice-note delivery not working
- #66549 [Bug]: openclaw message send --dry-run still delivers the message via gateway
- #68016 QQ Bot cannot send images saved to media/outbound (Media path must be inside QQ Bot media storage)
- #68536 [Bug]: WhatsApp reply-media staging drops original document filenames before delivery
- #68998 Telegram outbound media: plain assistant MEDIA lines can fall back to text-only sends; explicit message-tool media path works
- #69034 Telegram adapter does not upload MEDIA: file attachments from final assistant response
- #70977 message send returns exit 0 even on failure; --dry-run silently ignored

Open candidates:

- #13620 Feature: Support Telegram media groups (albums) in message tool
- #47856 [security-signal] Feature: configurable mediaLocalRoots for image tool

Existing-overlap context refs:

- #39506 [Bug]:   LocalMediaAccessError: path-not-allowed
- #42538 Bug: health endpoint returns incorrect running=false for WhatsApp
- #44078 [Bug]: Telegram local image sends fail when CLI media path is outside OpenClaw-managed directories
- #51347 [security-signal] Bug:  ignores  config and returns success on media failure
- #52167 [Bug]: WhatsApp media sends fail on old-style group JIDs — message tool bypassed on new-style JIDs
- #53917 Feishu: mediaLocalRoots not passed to sendMediaFeishu, blocking local image sends
- #54131 Bug: WhatsApp outbound media (MEDIA: token) fails silently — workaround: openclaw message send --media
- #55098 [Bug]:  INVALID_REQUEST: unsupported channel: whatsapp
- #55114 [Bug]: WhatsApp outbound sends fail with 'unsupported channel: whatsapp' in multi-channel setup
- #55364 [Bug]: WhatsApp message send sends MP3 audio as PTT voice note, breaking Android playback
- #56444 message tool: WhatsApp media sends return 'unsupported channel' error
- #57156 Feature Request: Add mediaLocalRoots support to Feishu/Lark Plugin
- #59174 [Bug]: Openclaw cant view referenced whatsapp image
- #60315 Agent replies in WhatsApp do not deliver image attachments, while 'message send --media' works
- #60993 WhatsApp TTS OpenAI delivers MP3 instead of OGG Opus — voice messages unreadable
- #61970 Bug: WhatsApp outbound video sends succeed but media never appears in chat
- #62669 WhatsApp outbound media sends with hasMedia: false — images never attached
- #62770 [Bug]:  the audio file is being dropped silently before it reaches WhatsApp
- #63169 WhatsApp media send reports success but attachment is never delivered (2026.4.8)
- #63314 [Bug]: WhatsApp media send fails silently in v2026.4.8 — `hasMedia: false` despite `--media` flag (related to #23140, #54131)
- #63461 [Bug]: openclaw message send --media not working from CLI (WhatsApp)
- #63493 message tool silently drops local file paths and external URLs in the media field
- #63720 WhatsApp media silently dropped: hasMedia=False on all outbound messages (2026.4.9)
- #63816 [Bug]: WhatsApp outbound media reports success but no file is delivered
- #64132 WhatsApp --media not sending audio/image files since 2026.4.9
- #64226 WhatsApp media send silently fails in 2026.4.5+
- #64665 [Bug]: WhatsApp outbound media silently dropped — hasMedia: false — CLI and model-initiated sends affected (v2026.4.8–4.9)
- #64750 WhatsApp message.send returns success but drops attachments and delivers text only
- #65002 [Bug]: WhatsApp: mediaUrl silently dropped in outbound delivery pipeline (hasMedia: false)
- #65117 WhatsApp: message tool (web-outbound) drops media silently — hasMedia:false on all outbound image sends
- #65426 [Bug]: Telegram outbound MEDIA:./artifacts/... fails on stock gateway (workspace-relative path rejected)
- #65451 Bug: WhatsApp outbound media (images) not attaching — hasMedia false on sendMessageWhatsApp
- #66020 QQ Bot should auto-mirror local <qqmedia> files into ~/.openclaw/media/qqbot instead of failing
- #66090 sending media on whatsapp
- #69183 [Bug]: Local outbound media allowlist/staging regression breaks attachments and screenshots across channels
- #69435 TTS auto-reply generates MP3 only — WhatsApp cannot play as voice note (needs OGG/Opus)
- #71138 [Bug]: Telegram media attachments silently dropped — "Path escapes sandbox root" blocks ~/.openclaw/media/outbound/
