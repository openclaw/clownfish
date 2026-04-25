# Operations

## Batch Flow

1. Create or export cluster job markdown files under `jobs/<repo>/`.
2. Run local validation:

   ```bash
   npm run validate
   ```

3. Dispatch plan jobs:

   ```bash
   npm run dispatch -- jobs/openclaw/cluster-001.md jobs/openclaw/cluster-002.md --mode plan
   ```

4. Review artifacts from GitHub Actions.
5. Change selected jobs to `mode: execute`.
6. Set repo variable `CLOWNFISH_ALLOW_EXECUTE=1` only for the execution window.
7. Dispatch execute jobs for reviewed clusters only.
8. Reset `CLOWNFISH_ALLOW_EXECUTE=0`.

## Runner Strategy

Use `ubuntu-latest` for correctness smoke tests.

Use Blacksmith labels for bulk planning/execution once the workflow is stable:

```bash
npm run dispatch -- jobs/openclaw/cluster-*.md --mode plan --runner blacksmith-4vcpu-ubuntu-2404
```

## Token Strategy

Prefer a fine-grained token or GitHub App token.

Minimum useful permissions depend on action tier:

- plan: metadata, issues read, pull requests read, contents read
- closure: issues write, pull requests write
- merge: contents write and pull requests write
- fix PRs: contents write

Do not put tokens in job files.

## Promotion Rules

Promote from `plan` to `execute` only when:

- the canonical item is clear;
- no unique reports are being closed;
- comments preserve contributor credit;
- idempotency keys are present;
- high-risk work is marked `needs_human`.
