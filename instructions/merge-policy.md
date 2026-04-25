# Merge And Fix Policy

Merging is higher risk than closure. Prefer `needs_human` unless the merge path is obvious.

Safe-ish merge candidate:

- tests pass or maintainer explicitly accepts risk;
- no conflicts;
- small focused diff;
- no broad setup, generated, lockfile, or unrelated churn;
- author credit is preserved;
- superseded PRs are acknowledged before closing.

For multiple PRs:

- keep the clearest passing PR as canonical;
- mark overlapping PRs as superseded or related;
- if two PRs each contain useful parts, emit `needs_human` with a combine plan instead of trying to freestyle a merge.

For fix work:

- only create a fix PR when the job allows `fix` or `raise_pr`;
- keep the patch tiny;
- run the repo's narrow tests;
- include links to the cluster and canonical issue.
