# Development Guide

## Development model

This workspace is an orchestration repository for TWIN submodules. It keeps the repositories together and provides shared scripts to run install, format, lint, and build commands across them.

For day-to-day implementation work, open the specific submodule repository in VS Code and run that repository's package scripts directly.

## Prerequisites

- Node.js `>=20.0.0`
- Git with submodule support
- Access to the submodule repositories

## Typical local workflow

1. Clone the workspace with submodules:

```shell
git clone --recursive https://github.com/iotaledger/twin-workspace.git
```

1. Keep submodules current when switching context:

```shell
git submodule update --recursive
git pull --recurse-submodules
```

1. Run workspace-wide orchestration commands when needed (for example from [NPM_COMMANDS.md](./NPM_COMMANDS.md)):

```shell
npm run submodule:install
npm run submodule:lint
```

1. Open and work in the target submodule repo for actual feature development.

## Cross-repo local linking

The workspace does not directly consume sibling source code during development. Dependencies are resolved through published npm packages.

When you need to test local changes from one repository inside another before a release, run the target repository's local link script:

```shell
npm run local-link
```

This script creates a symlink to the locally built package so dependent repos can consume your local changes immediately.

## Practical guidance

- Build and validate the source repository before linking so consumers use the latest local output.
- Re-run `npm run local-link` after rebuilding if the linked package output changes.
- Keep your submodules on the intended branch (for most repos this is `next`) while integrating multi-repo changes.
- Use workspace orchestration commands for broad checks, then debug failures directly in the affected submodule.
