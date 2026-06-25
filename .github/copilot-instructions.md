# Copilot Instructions for TWIN Workspace

This repository is an orchestration workspace for TWIN submodules. It keeps many repositories together and provides root-level scripts for broad cross-repository tasks. It is not the primary place for day-to-day feature implementation inside packages or applications.

## Core Operating Model

- Treat the workspace root as orchestration-only unless the task is clearly about workspace scripts, root documentation, submodule coordination, or submodule SHA updates.
- For feature work, bug fixes, tests, package APIs, or application behaviour, identify the target submodule first and work in that repository.
- Do not assume all submodules share identical structure or scripts. Inspect the target repository before changing package code.

## What Belongs in This Repo

Typical root-level changes are limited to:

- `scripts/` automation for submodule orchestration
- root documentation such as `README.md`, `DEVELOPMENT.md`, `NPM_COMMANDS.md`, `SUBMODULES.md`, and `WORKFLOWS.md`
- `.gitmodules`, workspace metadata, and submodule pointer updates
- cross-repo maintenance commands that intentionally operate across many submodules

If a request is really about one submodule, say so briefly and move to that repository rather than forcing the change into the workspace root.

## Validation Strategy

- Prefer the narrowest validation that matches the files you changed.
- For root documentation-only changes, run formatting only if needed.
- For root script changes, run the smallest relevant script or check before widening to broader workspace commands.
- Use workspace-wide commands such as `npm run submodule:lint`, `npm run submodule:test`, or `npm run submodule:dist` only when the change genuinely affects multiple submodules or orchestration behaviour.
- Do not run expensive cross-workspace commands by default for a single-repo or documentation-only task.

## Submodule-Aware Workflow

- Confirm whether the task targets the workspace repo or a specific submodule.
- Preserve unrelated submodule SHA changes. Never reset or rewrite submodule pointers you did not intend to change.
- When a task spans multiple repositories, state which repositories are involved and keep the edits scoped to the requested surface.
- For cross-repo local integration, prefer the documented local-link workflow in the affected submodule rather than inventing workspace-level coupling.

## Documentation and Writing

- Use UK English.
- Write concise, explanatory documentation rather than keyword lists.
- Avoid bare URLs when editing documentation.
- Keep guidance concrete and operational for engineers working across submodules.

## Practical Defaults for Copilot

- Start by deciding whether the owning code lives in the workspace root or in a submodule.
- If the request mentions package logic, connectors, tests, or runtime behaviour, inspect the relevant submodule rather than the workspace root.
- If the request mentions orchestration, dependency refresh, submodule management, or root-level docs, stay in this repository.
- When unsure, prefer one quick read of the relevant root guide or target submodule before editing.

## Reference Files

Use these root documents as the source of truth for workflow expectations in this repo:

- `DEVELOPMENT.md`
- `NPM_COMMANDS.md`
- `SUBMODULES.md`
- `WORKFLOWS.md`

Keep this file focused on workspace-level behaviour. Package architecture, connector rules, and package-specific coding conventions belong in the relevant submodule, not here.
