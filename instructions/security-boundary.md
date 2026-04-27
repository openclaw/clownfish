# Security Boundary

ProjectClownfish does not triage true security reports or change OpenClaw's
documented security boundary.

Use OpenClaw `SECURITY.md` as the posture: a security report needs a real
boundary-bypass claim tied to auth, approvals, allowlists, sandboxing, shipped
dependency impact, OpenClaw-owned secrets, or another documented trust boundary.
Trusted-operator exec behavior, provider capability gaps, missing model support,
ordinary bugs, hardening-only parity gaps, and small fixes inside exec-adjacent
code are not automatically security work.

Security-sensitive means an item appears to involve vulnerabilities,
advisories, CVEs, GHSAs, exploitability, SSRF/XSS/CSRF/RCE,
security-class injection, leaked secrets, credentials, tokens, API keys, private
keys, plaintext credential storage, or exposure of sensitive data.

When security-sensitive evidence appears:

- quarantine only the affected issue/PR with a non-mutating `route_security`
  action;
- keep classifying unrelated non-security items in the same cluster;
- do not close, merge, label, comment on, or open a fix PR for the
  security-sensitive item;
- do not let a security-linked ref poison a narrow bug/provider/fix path unless
  the fix itself changes the security boundary or depends on that security ref;
- do not summarize exploit details beyond the minimum needed to say it is out of scope;
- route the item to central OpenClaw security handling instead of ProjectClownfish.

Use `needs_human` only when the unresolved decision is genuinely a maintainer
judgment call after quarantine. False positives are still cheaper than
accidentally routing security work through backlog-cleanup automation, but false
positives should be scoped to the item, not the whole cluster.

If a job explicitly lists `security_override_refs`, those exact refs have a
maintainer-approved false-positive override. Continue to require normal review,
validation, and merge gates for them, but do not route them solely because a
comment, bot review, file path, or label contains security-shaped words.
