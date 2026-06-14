# Manual Stuck Job Clear - 2026-06-14

Mode: manual live-state clear

These jobs were moved from `jobs/openclaw/outbox/stuck/` to `jobs/openclaw/outbox/finalized/` without rerunning ProjectClownfish because their live GitHub refs no longer had actionable open data.

| GHCrawl | Decision | Evidence |
| --- | --- | --- |
| 156662 | clear | #41172 closed, #41803 closed, #49550 missing, #59118 merged, #61349 closed |
| 156686 | clear | original refs closed; prior derived fix PR #92911 closed |
| 156708 | clear | #41546 closed, #41552 closed, #41718 closed, #42001 closed |
| 156721 | clear | #45550 closed, #45592 closed, #45613 merged, #57187 closed |
| 156734 | clear | #53682 closed, #68754 closed, #68824 closed, #68854 closed |
| 156740 | clear | #58259 closed, #58772 closed, #58858 closed, #59510 closed |
| 156744 | clear | #61233 closed, #61647 closed, #61653 closed, #61667 closed |
| 156746 | clear | #63045 closed, #63072 closed, #63078 closed, #63081 closed |
| 156762 | clear | #35241 closed, #60621 closed, #69108 closed |
| 156771 | clear | #39631 closed, #51065 closed, #66161 closed |
| 156913 | clear | #64384 closed, #67297 closed, #69379 closed |

Not cleared:

| GHCrawl | Reason |
| --- | --- |
| 156813 | security-shaped cluster around `x-openclaw-session-key`; leave for security/manual routing instead of autonomous dispatch |
