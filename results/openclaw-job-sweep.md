# OpenClaw Job Sweep

Mode: applied

| Metric | Count |
| --- | ---: |
| Jobs | 86 |
| Delete test jobs | 0 |
| Move to outbox | 4 |
| Move to stuck queue | 0 |
| Requeue candidates | 5 |
| Active | 1 |
| Security hold | 16 |
| Invalid | 0 |

## Delete Test Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |

## Move To Outbox

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/gitcrawl-2084-dedupe-only-20260429-remote.md | gitcrawl-2084-dedupe-only-20260429-remote | latest run is clean and no open clownfish PR remains |
| jobs/openclaw/inbox/gitcrawl-3324-dedupe-only-20260429-remote.md | gitcrawl-3324-dedupe-only-20260429-remote | latest run is clean and no open clownfish PR remains |
| jobs/openclaw/inbox/gitcrawl-6771-dedupe-only-20260429-remote.md | gitcrawl-6771-dedupe-only-20260429-remote | latest run is clean and no open clownfish PR remains |
| jobs/openclaw/inbox/gitcrawl-772-dedupe-only-20260429-remote.md | gitcrawl-772-dedupe-only-20260429-remote | latest run is clean and no open clownfish PR remains |

## Move To Stuck Queue

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |

## Requeue Candidates

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/gitcrawl-2203-dedupe-only-20260429-remote.md | gitcrawl-2203-dedupe-only-20260429-remote | latest result has blocked apply actions |
| jobs/openclaw/inbox/gitcrawl-238819-dedupe-only-20260429b.md | gitcrawl-238819-dedupe-only-20260429b | latest result has blocked apply actions |
| jobs/openclaw/inbox/gitcrawl-238861-dedupe-only-20260429c.md | gitcrawl-238861-dedupe-only-20260429c | latest result has blocked apply actions |
| jobs/openclaw/inbox/gitcrawl-2685-dedupe-only-20260429-remote.md | gitcrawl-2685-dedupe-only-20260429-remote | latest result has blocked apply actions |
| jobs/openclaw/inbox/gitcrawl-520-dedupe-only-20260429-remote.md | gitcrawl-520-dedupe-only-20260429-remote | latest workflow conclusion is failure |

## Active Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/ghcrawl-156978-autonomous-smoke.md | ghcrawl-156978-autonomous-smoke | open clownfish PR exists for this cluster |

## Security Hold Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| jobs/openclaw/inbox/gitcrawl-13584-dedupe-only-20260429-remote.md | gitcrawl-13584-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-13969-dedupe-only-20260429-remote.md | gitcrawl-13969-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-1908-dedupe-only-20260429-remote.md | gitcrawl-1908-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-1921-dedupe-only-20260429-remote.md | gitcrawl-1921-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-1932-dedupe-only-20260429-remote.md | gitcrawl-1932-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-1951-dedupe-only-20260429-remote.md | gitcrawl-1951-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-2015-dedupe-only-20260429-remote.md | gitcrawl-2015-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-2088-dedupe-only-20260429-remote.md | gitcrawl-2088-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-2317-dedupe-only-20260429-remote.md | gitcrawl-2317-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-2329-dedupe-only-20260429-remote.md | gitcrawl-2329-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-2477-dedupe-only-20260429-remote.md | gitcrawl-2477-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-8396-dedupe-only-20260429-remote.md | gitcrawl-8396-dedupe-only-20260429-remote | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/gitcrawl-8669-dedupe-only-20260429d.md | gitcrawl-8669-dedupe-only-20260429d | live target refs include security-sensitive open issue/PR |
| jobs/openclaw/inbox/pr-inventory-mixed-20260616T013940-018.md | pr-inventory-mixed-20260616T013940-018 | security-sensitive job stays out of automation cleanup |
| jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-005.md | pr-inventory-mixed-20260616T015330-005 | security-sensitive job stays out of automation cleanup |
| jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-025.md | pr-inventory-mixed-20260616T015330-025 | security-sensitive job stays out of automation cleanup |

## Invalid Jobs

| Job | Cluster | Reason |
| --- | --- | --- |
| _None_ |  |  |
