# OpenClaw Job Sweep

Mode: applied

| Metric | Count |
| --- | ---: |
| Jobs | 32 |
| Delete test jobs | 0 |
| Move to outbox | 1 |
| Move to stuck queue | 0 |
| Requeue candidates | 9 |
| Active | 0 |
| Security hold | 1 |
| Invalid | 0 |

## Delete Test Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |

## Move To Outbox

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/gitcrawl-238884-dedupe-only-20260429c.md | gitcrawl-238884-dedupe-only-20260429c | latest run is clean and no open clownfish PR remains |

## Move To Stuck Queue

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |

## Requeue Candidates

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/ghcrawl-165996-agentic-merge.md | ghcrawl-165996-agentic-merge | latest result has blocked or failed fix actions |
| jobs/openclaw/inbox/ghcrawl-191453-agentic-merge.md | ghcrawl-191453-agentic-merge | latest result has blocked apply actions |
| jobs/openclaw/inbox/ghcrawl-191463-agentic-merge.md | ghcrawl-191463-agentic-merge | latest result has blocked apply actions |
| jobs/openclaw/inbox/ghcrawl-199230-agentic-merge.md | ghcrawl-199230-agentic-merge | latest result has blocked apply actions |
| jobs/openclaw/inbox/ghcrawl-199269-agentic-merge.md | ghcrawl-199269-agentic-merge | latest result has blocked apply actions |
| jobs/openclaw/inbox/ghcrawl-207037-agentic-merge.md | ghcrawl-207037-agentic-merge | latest result has blocked or failed fix actions |
| jobs/openclaw/inbox/gitcrawl-12851-dedupe-only-20260429-remote.md | gitcrawl-12851-dedupe-only-20260429-remote | latest workflow conclusion is failure |
| jobs/openclaw/inbox/gitcrawl-16529-dedupe-only-20260429-remote.md | gitcrawl-16529-dedupe-only-20260429-remote | latest result has blocked apply actions |
| jobs/openclaw/inbox/gitcrawl-2477-dedupe-only-20260429-remote.md | gitcrawl-2477-dedupe-only-20260429-remote | latest result has blocked apply actions |

## Active Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |

## Security Hold Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/ghcrawl-143801-autonomous-smoke.md | ghcrawl-143801-autonomous-smoke | security-sensitive job stays out of automation cleanup |

## Invalid Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |
