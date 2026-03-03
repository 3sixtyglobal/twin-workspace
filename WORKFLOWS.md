# Workflow Guide

## Submodule CI workflows

### Workspace Submodule Build

The workspace repo has a central workflow at `.github/workflows/submodule-build.yaml` named **Workspace Submodule Build**.

It can run via:

- `workflow_dispatch` (manual run)
- `repository_dispatch` with event type `submodule-changed`
- `pull_request` to `next`
- `push` to `next`

The workflow reads the `submodules` array from `package.json` and runs a matrix build for each submodule in parallel.

#### Manual run options

`workflow_dispatch` exposes `runTesting` as a choice input:

- `⚡ no-test` (default)
- `🧪 test`

Behaviour:

- `⚡ no-test` runs `npm run dist:no-test` for each submodule.
- `🧪 test` runs setup/teardown composite actions plus `npm run dist`:
  - prepares and runs the submodule `setup-test-env` action
  - runs `npm run dist`
  - prepares and runs the submodule `teardown-test-env` action (with `always()` semantics)

For non-manual triggers (`push`, `pull_request`, `repository_dispatch`), the workflow defaults to no-test mode.

### How notifications are dispatched from other repos

Each submodule repo contains `.github/workflows/notify-workspace.yaml` (**Notify Workspace**).

That workflow triggers on:

- `workflow_dispatch`
- `push` to `next`
- merged `pull_request` events targeting `next`

It dispatches a repository event to `twinfoundation/workspace` using `gh api`:

- `event_type`: `submodule-changed`
- `client_payload`: includes `submodule`, `branch`, `sha`, and optional `pr`

This `repository_dispatch` is what triggers the workspace `Workspace Submodule Build` workflow.

### How release workflows trigger notifications

Submodule `publish-release.yaml` workflows include a `trigger-notify-workspace` job after release publishing.

That job calls:

- `repos/${{ github.repository }}/actions/workflows/notify-workspace.yaml/dispatches`

with `ref` set to the computed release branch. This explicitly runs each repo's **Notify Workspace** workflow, which then sends the `submodule-changed` repository dispatch to the workspace repo.
