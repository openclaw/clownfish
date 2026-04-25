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
7. Dispatch execute jobs for reviewed clusters only. Execute workers still return JSON; `apply-result` performs the GitHub mutations afterward.
8. Reset `CLOWNFISH_ALLOW_EXECUTE=0`.

## Auto-Closure

`npm run apply-result -- <job.md> --latest` is the deterministic mutation path.

It only applies closure actions when all of these are true:

- the job and result are both `mode: execute`;
- `CLOWNFISH_ALLOW_EXECUTE=1`;
- the job allows both `comment` and `close`;
- the action is `close_duplicate`, `close_superseded`, or `close_fixed_by_candidate`;
- the action includes a canonical/candidate fix ref and live `target_updated_at`;
- GitHub still reports the same `updated_at`;
- the target is open and not maintainer-authored.

The applicator writes an idempotency marker into the close comment before closing. Re-runs skip already-applied comments/closures instead of posting twice.

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
- `target_updated_at` was fetched from live GitHub state;
- high-risk work is marked `needs_human`.
