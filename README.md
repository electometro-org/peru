# Peru
Stack for decide.pe

## Deploy workflows (`.github/workflows/`)

| Workflow | Inputs |
| --- | --- |
| `deploy-app.yml` | `environment` (qa/prod), `election_id` (dropdown → `VITE_ELECTION_ID`: `peru_2026` or `peru_regional_2026`), `app_branch`, `cf_workers_branch` (free text; empty = default branch) |
| `release-qa.yml` / `release-prod.yml` | `upload_data`, plus the same `election_id`, `app_branch` and `cf_workers_branch`, forwarded to `deploy-app.yml` |

- GitHub cannot build a dropdown of branches, so branch inputs are typed. "Use workflow from" selects the
  branch of *this* repo (workflow file, `public/`, `i18n/`). The release workflows trigger
  `deploy-app.yml` without `--ref`, so it runs on this repo's default branch.
- **Build settings:** the `.env` for the build comes from the `APP_ENV_FILE` secret, followed by the
  non-secret file `app/env/<environment>.env` (`qa.env` / `prod.env`), which is appended last and so
  overrides the same keys. Public values such as the analytics host and site id live there, so they can
  be changed by a commit instead of by editing the secret. QA analytics is off until it has its own
  Rybbit site id.
- Before deploying a regional build: upload `combined_votes_peru_regions_2026_compact.json` to the data
  bucket, run `db/regional.sql` (app repo) on the target Supabase, and push the `cf-workers` commits the
  build depends on (the workflow clones them from GitHub).

## Translations (`app/i18n/`)

- New keys are added to `es-qa.json` and reach Tolgee through *Release QA*; *Release PROD* promotes them
  into `es.json`. The "update PROD translations from Tolgee" bot overwrites `es.json`, so keys added only
  there disappear until they are promoted.
- Keys used by the regional election: `elections.peruRegional2026`, `elections.peruRegional2026Short`,
  `elections.peru2026Short`, `welcome.peru_regional_2026.*`, `regions.*`, `nav.learnMore`. Quechua and
  Aymara are not translated yet and fall back to Spanish.

## Party logos and candidate photos (data bucket)

The app looks up `<assetsPath>party_logos/<slug>.{png,jpg,jpeg,svg}` (and `candidate_photos/` with
`jpg|jpeg|png`), where `slug` is the lowercased, accent-free, hyphenated party/candidate name **exactly as
written in the votes file**. Spelling variants of one party (e.g. "APRA" / "Partido Aprista Peruano")
each need their own file.
