---
repo: openclaw/openclaw
cluster_id: gitcrawl-13992-autonomous-bulk-20260622a
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
  - "#53486"
candidates:
  - "#53486"
cluster_refs:
  - "#40531"
  - "#44368"
  - "#48549"
  - "#48933"
  - "#50716"
  - "#52375"
  - "#53295"
  - "#53318"
  - "#53486"
  - "#53656"
  - "#54216"
  - "#54312"
  - "#54430"
  - "#54432"
  - "#54771"
  - "#55009"
  - "#55091"
  - "#57384"
  - "#57396"
  - "#58119"
  - "#59430"
  - "#61029"
  - "#61241"
  - "#61748"
  - "#61859"
  - "#64039"
  - "#66215"
  - "#66459"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#40991"
  - "#41779"
  - "#42257"
  - "#42902"
  - "#43633"
  - "#44778"
  - "#44792"
  - "#45158"
  - "#47396"
  - "#48686"
  - "#48857"
  - "#48979"
  - "#50127"
  - "#50735"
  - "#52587"
  - "#53309"
  - "#53310"
  - "#53879"
  - "#53949"
  - "#54303"
  - "#54609"
  - "#55604"
  - "#55903"
  - "#55917"
  - "#56306"
  - "#56312"
  - "#56478"
  - "#57619"
  - "#61174"
  - "#63137"
  - "#63674"
  - "#64082"
  - "#65297"
  - "#68540"
  - "#68805"
  - "#69622"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#45158"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #53486 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13992 on 2026-06-22. Existing-overlap refs #40991, #41779, #42257, #42902, #43633, #44778, #44792, #45158, #47396, #48686, #48857, #48979, #50127, #50735, #52587, #53309, #53310, #53879, #53949, #54303, #54609, #55604, #55903, #55917, #56306, #56312, #56478, #57619, #61174, #63137, #63674, #64082, #65297, #68540, #68805, #69622 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 13992

Generated from local gitcrawl run cluster 13992 for `openclaw/openclaw`.

Display title:

> [Bug] Feishu: message(action=send) renders card JSON as plain text instead of interactive card (regression)

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #40991, #41779, #42257, #42902, #43633, #44778, #44792, #45158, #47396, #48686, #48857, #48979, #50127, #50735, #52587, #53309, #53310, #53879, #53949, #54303, #54609, #55604, #55903, #55917, #56306, #56312, #56478, #57619, #61174, #63137, #63674, #64082, #65297, #68540, #68805, #69622
- security-signal refs requiring route_security: #45158
- representative: #53486, currently open in local store
- latest member update: 2026-06-18T09:04:19.560045129Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40531 [Bug]: Cron announce delivery to Feishu fails with "Action send requires a target"
- #44368 BUG: Large media message silently kills Telegram inbound polling
- #48549 Telegram replies not delivered - only message tool content arrives
- #48933 [Bug]: Why does the conversation always route to the Main Agent when connecting a specific agent via Feishu?
- #50716 [Bug]: Telegram can show typing and complete generation but still drop the final outbound reply with no clear delivery log
- #52375 openclaw-weixin: Wenmobai media replies lose accountId/contextToken in auto-reply delivery
- #53295 [Bug] Feishu channel: message tool requires 'card' parameter for text-only send, breaking proactive messaging
- #53318 [Bug]: Feishu message tool - card parameter required by schema but incompatible with media/filepath sends
- #53656 [Bug]: Feishu 通道 card 字段被错误标记为必填，无法发送纯媒体消息
- #54216 @openclaw/feishu: message tool schema missing `text` param causes LLM to always attempt `card` construction
- #54312 [Bug]: message tool schema: 'card' required param conflicts with media/filePath on Feishu
- #54430 [Bug]: Feishu message tool accepts empty card ({}) causing 400 API error - blocks proactive message sending
- #54432 [Bug] Feishu: card and image cannot be sent together (schema conflict)
- #54771 [Feishu] Message sending anomaly: thinking content leaked + text incorrectly sent as card
- #55009 [Bug]: [Feishu] 定时任务触发消息发送失败 - 卡片格式错误 & 目标缺失
- #55091 [Feishu] image file cannot be sent via message tool - card/media conflict
- #57384 [Bug]: openclaw-weixin may lose the final reply after multi-tool agent turns
- #57396 [Bug]: image_generate tool-result auto delivery may miss local media roots for channels that require local file allowlists
- #58119 [Bug]: 微信通道每天 contextToken 过期断连，需手动重连
- #59430 [Bug]: Image Tool Fails
- #61029 Image generation delivery fails: path mismatch between image_generate output and Telegram media delivery (LocalMediaAccessError)
- #61241 [Bug]: Telegram replies can disappear after switching a direct session to xiaomi/mimo-v2-pro (reply generated, no sendMessage log)
- #61748 Telegram Responses Generated But Not Delivered - Silent Message Loss
- #61859 [Bug] 飞书图片与消息错配 - 图片路由错误
- #64039 Telegram: some normal final replies disappear while explicit message sends persist
- #66215 Telegram image delivery race condition: tool-images resizes file but LocalMediaAccessError on send
- #66459 [Bug]: Telegram transcript contains final reply but no outbound send occurs for [thinking,text] turn on 2026.4.11

Open candidates:

- #53486 [Bug] Feishu: message(action=send) renders card JSON as plain text instead of interactive card (regression)

Existing-overlap context refs:

- #40991 Telegram inbound video can degrade to <media:video> placeholder with no attachment and no error when getFile() fails
- #41779 [Bug]: message action "send" silently ignores buffer/filename for Telegram attachments and returns ok=true
- #42257 [Bug] Feishu image analysis not working
- #42902 Feishu: message tool filePath parameter sends successfully but file not received
- #43633 [Bug] Feishu bindings with accountId or group peer.kind not working
- #44778 [Bug] Feishu image causes gateway crash - image path not passed to image tool
- #44792 [Bug] 飞书图片下载后文件名与传递给Agent的路径不匹配
- #45158 [security-signal] [Bug]: 飞书多 Agent 路由问题 - 所有消息都路由到同一个 agent
- #47396 [feishu-plugin] Bug: message tool media parameter sends images as file attachments
- #48686 [Bug] Feishu images not always attached to prompt - some images show as 'image data removed'
- #48857 [Feishu] message --action send --filePath fails to send file attachments, returns link instead of actual file
- #48979 Telegram channel cannot send images via read tool
- #50127 [Bug]: Binding 匹配在并发场景下错乱 - Feishu 多群消息路由失败
- #50735 [Bug]: wechat-access channel: Cron/announce notifications not delivered
- #52587 [Bug] Feishu channel fails to send images via read tool
- #53309 Bug: cron delivery 任务显示 Message failed 但实际已送达
- #53310 [Bug]: Feishu card delivery fails with error 230099 (parse card json err) in cron announcement
- #53879 message tool: filePath media upload fails with 'Channel is unavailable: telegram' in 2026.3.23-2
- #53949 Telegram images silently not downloaded — no file saved to media/inbound, no error logged
- #54303 [Bug]: 定时任务微信投递失败
- #54609 多飞书账号路由问题：所有消息都被发送到同一个 Agent
- #55604 [Bug] Feishu image media understanding not triggered - tools.media.image enabled but no MiniMax call
- #55903 [Bug] Telegram: message tool fails file attachment with incorrect 'buttons' validation error
- #55917 [Bug]: Telegram documents sometimes arrive only as <media:document> instead of a real attachment
- #56306 [Bug]:  Telegram: read tool for images succeeds internally but fails to deliver file to user.
- #56312 Telegram video files not being downloaded to media/inbound directory
- #56478 [Bug]: WeChat plugin fails to send messages from isolated cron sessions
- #57619 Bug: Subagent/cron messages not delivered to WeChat (openclaw-weixin)
- #61174 [Bug]: openclaw-weixin reply delivery fails after long agent turn — contextToken appears to expire
- #63137 [Bug]: Telegram outbound images sent via read tool render locally but never reach recipient's mobile client
- #63674 [Bug]: 飞书多机器人路由 Bug
- #64082 Bug: Feishu inbound images not visible to AI model (format mismatch in formatMediaAttachedLine)
- #65297 [Bug]: Telegram message.send returns ok for image buffer upload, but no media is delivered
- #68540 [Bug]: Feishu channel: Local image files sent as path text instead of uploaded image
- #68805 [Bug] openclaw-weixin: outbound push reports success but never delivers to personal WeChat accounts
- #69622 [Bug]: Feishu image: Media Understanding not triggered, model receives `[image data removed]` instead of image
