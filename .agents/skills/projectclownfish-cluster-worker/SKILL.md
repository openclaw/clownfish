---
name: projectclownfish-cluster-worker
description: Use when running or reviewing a projectclownfish cluster job that farms one GitHub issue/PR dedupe cluster to an isolated Codex worker for plan or execute mode.
---

# projectclownfish Cluster Worker

Use this skill for one cluster job at a time.

## Workflow

1. Read the job markdown frontmatter and body.
2. Confirm `repo`, `cluster_id`, `mode`, `allowed_actions`, and `candidates`.
3. Read the relevant policy files:
   - `instructions/dedupe.md`
   - `instructions/closure-policy.md`
   - `instructions/merge-policy.md`
4. Fetch live state with `gh` before making any recommendation.
5. In `plan` mode, do not mutate GitHub.
6. In `execute` mode, mutate only when the job allows it and evidence is clear.
7. Emit final JSON matching `schemas/codex-result.schema.json`.

## Safety Rails

- One cluster only.
- Stop on unclear canonical selection.
- Stop on failing checks unless the job explicitly allows that risk.
- Stop on broad code deltas or generated-file churn.
- Preserve contributor credit in comments and summaries.
- Record an idempotency key for every planned or executed mutation.

## Commands

Read state:

```bash
gh issue view NUMBER --repo OWNER/REPO --comments --json number,title,state,author,labels,body,comments,url,updatedAt,closedAt
gh pr view NUMBER --repo OWNER/REPO --json number,title,state,author,labels,body,comments,url,updatedAt,closedAt,mergeStateStatus,isDraft,files,additions,deletions
gh pr checks NUMBER --repo OWNER/REPO
gh pr diff NUMBER --repo OWNER/REPO
```

Mutate only in execute mode:

```bash
gh issue comment NUMBER --repo OWNER/REPO --body-file comment.md
gh issue close NUMBER --repo OWNER/REPO --reason "not planned"
gh issue edit NUMBER --repo OWNER/REPO --add-label duplicate
gh pr comment NUMBER --repo OWNER/REPO --body-file comment.md
gh pr close NUMBER --repo OWNER/REPO --comment "Superseded by #CANONICAL."
gh pr merge NUMBER --repo OWNER/REPO --squash --delete-branch
```
