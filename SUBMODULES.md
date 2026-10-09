# Submodules Guide

## Overview

The workspace repository uses Git submodules to reference each repository at a specific commit.

Each submodule is registered in `.gitmodules` with `branch = next`, and is also listed in the root `package.json` `submodules` array. That array order defines execution order for workspace orchestration scripts and CI builds.

## Clone and initialise

Clone the workspace and all submodules:

```shell
git clone --recursive https://github.com/3sixtyglobal/workspace-core.git
```

If you cloned without `--recursive`, initialise and fetch submodules afterwards:

```shell
git submodule update --init --recursive
```

## Keeping submodules current

Update all submodules to the commits referenced by the workspace repository:

```shell
git submodule update --recursive
```

Pull the latest workspace changes and refresh submodules in one command:

```shell
git pull --recurse-submodules
```

Move every submodule to the head of its `next` or `main` branch, discarding any local changes in the submodules:

```shell
pnpm run submodule:align-next
pnpm run submodule:align-main
```

These are the same scripts the **Align Branches** workflow runs, see [Workflows](./WORKFLOWS.md).

Useful checks while working:

```shell
git submodule status
git submodule foreach "git status --short --branch"
```

## Adding a submodule

Add a new module:

```shell
git submodule add -b next https://github.com/3sixtyglobal/<name>.git
```

After adding the repository, also add its name to the root `package.json` `submodules` array so workspace scripts and the **Workspace Submodule Build** workflow can process it.

## Removing a submodule

Remove the submodule registration and its gitlink from the workspace:

```shell
git submodule deinit -f <name>
git rm -f <name>
```

Then remove its name from the root `package.json` `submodules` array.

## Ordering and execution

Workspace commands (install, format, lint, dist) run in the order declared in `package.json`.

- Place foundational/shared libraries earlier in the array.
- Place consumers later so dependency chains are built in a sensible sequence.
- Use `:single` script variants when validating one repository in isolation.

For the command details and examples, see [Commands](./COMMANDS.md).

## Branch and commit management

Submodules point to exact commits, not floating branches.

Typical update flow:

1. Make and commit changes inside the submodule repository.
1. Return to the workspace repository.
1. Commit the updated submodule pointer in the workspace repo.

This keeps workspace state reproducible across machines and CI runs.

## Troubleshooting

If submodule URLs or remotes change:

```shell
git submodule sync --recursive
git submodule update --init --recursive
```

If local state is inconsistent after interrupted operations, first inspect with `git submodule status` and `git status`, then re-run recursive update commands.
