# Security Boundary

ProjectClownfish does not triage security-sensitive clusters.

Security-sensitive means any issue, PR, title, body, label, comment, or changed-file context that appears to involve vulnerabilities, advisories, CVEs, GHSAs, exploitability, SSRF/XSS/CSRF/RCE, security-class injection, leaked secrets, credentials, tokens, API keys, private keys, plaintext credential storage, or exposure of sensitive data.

When security-sensitive evidence appears:

- do not close, merge, label, comment, open a fix PR, or recommend broad cleanup;
- do not summarize exploit details beyond the minimum needed to say it is out of scope;
- return `needs_human` with the exact boundary reason;
- route the item to central OpenClaw security handling instead of ProjectClownfish.

This boundary is intentionally conservative. False positives are cheaper than accidentally routing security work through backlog-cleanup automation.
