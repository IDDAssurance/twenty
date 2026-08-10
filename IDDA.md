# IDDA CRM — Fork Notes

This is a fork of [Twenty](https://github.com/twentyhq/twenty) maintained on branch `idda/main`.

## What IDDA Changes

Only two files in the Twenty codebase are modified:

| File | Change |
|---|---|
| `packages/twenty-server/src/engine/core-modules/core-engine.module.ts` | One import + registration: `IddaModule` |
| `packages/twenty-server/src/engine/core-modules/idda/idda.module.ts` | New file — aggregates IDDA-specific modules |

Everything else that IDDA needs lives in `idda-services/` (outside this repo).

## Commit Structure

```
[A] chore(twenty): remove upstream CI and contributor files
[B] feat(idda/twenty): IDDA frontend branding and assets  
[C] feat(idda/twenty): add IddaModule with visit verification
```

## Resyncing with Upstream

```bash
cd twenty
git fetch upstream
git rebase upstream/main

# Conflicts will only appear in:
#   - packages/twenty-server/src/engine/core-modules/core-engine.module.ts (the IddaModule line)
#   - packages/twenty-server/src/engine/core-modules/idda/  (only if upstream restructures core-modules)

git push --force-with-lease origin idda/main

# Update the submodule pointer in idda-tools
cd ..
git add twenty
git commit -m "chore(twenty): sync with upstream vX.Y.Z"
```

## Adding New IDDA Features

| Feature type | Where to add it |
|---|---|
| Needs workspace CRM data (lead records, visits, etc.) | Add inside `src/modules/idda-*` in Twenty, register in `IddaModule` |
| Standalone (own DB tables, no workspace schema access) | Add to `idda-services/` |

## IDDA Modules in This Fork

Only `IddaVisitVerificationModule` remains in Twenty (it needs `GlobalWorkspaceDataSourceModule` to access workspace-scoped visit records).

All other IDDA modules (decision-register, business-calendar, mobile-device, push-subscription, workspace-join-request) live in `idda-tools/idda-services/`.
