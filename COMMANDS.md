# Commands

## Cross module commands

The following commands are available across all the modules.

By default, commands run across all submodules. You can also:

- Start from a specific submodule by appending its name.
- Run against a single submodule by appending its name followed by `single`.

| Command                           | All submodules                       | From submodule                                   | Single submodule                                        |
| --------------------------------- | ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------- |
| [Install](#install)               | `pnpm run submodule:install`         | `pnpm run submodule:install twin-engine`         | `pnpm run submodule:install twin-engine single`         |
| [Format](#format)                 | `pnpm run submodule:format`          | `pnpm run submodule:format twin-engine`          | `pnpm run submodule:format twin-engine single`          |
| [Lint](#lint)                     | `pnpm run submodule:lint`            | `pnpm run submodule:lint twin-engine`            | `pnpm run submodule:lint twin-engine single`            |
| [Dist](#dist)                     | `pnpm run submodule:dist`            | `pnpm run submodule:dist twin-engine`            | `pnpm run submodule:dist twin-engine single`            |
| [Dist (no test)](#dist)           | `pnpm run submodule:dist-no-test`    | `pnpm run submodule:dist-no-test twin-engine`    | `pnpm run submodule:dist-no-test twin-engine single`    |
| [Docs](#docs)                     | `pnpm run submodule:docs`            | `pnpm run submodule:docs twin-engine`            | `pnpm run submodule:docs twin-engine single`            |
| [Quality](#quality)               | `pnpm run submodule:quality`         | `pnpm run submodule:quality twin-engine`         | `pnpm run submodule:quality twin-engine single`         |
| [Quality (no test)](#quality)     | `pnpm run submodule:quality-no-test` | `pnpm run submodule:quality-no-test twin-engine` | `pnpm run submodule:quality-no-test twin-engine single` |
| [Package update](#package-update) | `pnpm run submodule:package-update`  | `pnpm run submodule:package-update twin-engine`  | `pnpm run submodule:package-update twin-engine single`  |

### Operational notes

- Commands run in the order defined by the `submodules` array in `package.json`.
- Commands fail fast, so execution stops at the first submodule with an error.
- Without `single`, providing a module name starts from that module and continues to the end.

### Quick examples

```shell
# Format everything
pnpm run submodule:format

# Build everything without tests
pnpm run submodule:dist-no-test

# Build from a known failing point onward
pnpm run submodule:dist-no-test twin-engine

# Run one module only
pnpm run submodule:dist-no-test twin-engine single

# Update the dependencies of one module
pnpm run submodule:package-update twin-engine single
```

### Install

You can run the following command to perform a pnpm install across all the submodules:

```shell
pnpm run submodule:install
```

If you need to start the `install` process from a specific submodule just add that module name to the end of the command.

e.g. To start again from the `twin-engine` submodule.

```shell
pnpm run submodule:install twin-engine
```

To run install against a single submodule use:

```shell
pnpm run submodule:install twin-engine single
```

### Format

You can run the following command to perform formatting across all the submodules:

```shell
pnpm run submodule:format
```

To start formatting from a specific submodule use:

```shell
pnpm run submodule:format twin-engine
```

To run formatting against a single submodule use:

```shell
pnpm run submodule:format twin-engine single
```

### Lint

You can run the following command to perform linting across all the submodules:

```shell
pnpm run submodule:lint
```

To start linting from a specific submodule use:

```shell
pnpm run submodule:lint twin-engine
```

To run linting against a single submodule use:

```shell
pnpm run submodule:lint twin-engine single
```

### Dist

You can run the following command to perform the full distribution build across all the submodules:

```shell
pnpm run submodule:dist
```

> It should be noted that many of the tests require docker images running (details of how to run the docker images are provided in the repos for each package). Some of the other tests require environment variables for wallet seeds, these tests will fail with errors providing instructions on how to generate the seeds.

If you want to perform the dist operations without running tests you can use the following command:

```shell
pnpm run submodule:dist-no-test
```

If you need to start the `dist` or `dist-no-test` process from a specific submodule just add that module name to the end of the command.

e.g. To start again from the `twin-engine` submodule.

```shell
pnpm run submodule:dist twin-engine
```

To run dist against a single submodule use:

```shell
pnpm run submodule:dist twin-engine single
```

To run dist-no-test against a single submodule use:

```shell
pnpm run submodule:dist-no-test twin-engine single
```

### Docs

You can run the following command to generate docs across all the submodules:

```shell
pnpm run submodule:docs
```

To start docs generation from a specific submodule use:

```shell
pnpm run submodule:docs twin-engine
```

To run docs generation against a single submodule use:

```shell
pnpm run submodule:docs twin-engine single
```

### Quality

You can run the following command to perform the full quality pass across all the submodules, which formats, lints, compiles, validates the locales and runs the tests:

```shell
pnpm run submodule:quality
```

To start the quality pass from a specific submodule use:

```shell
pnpm run submodule:quality twin-engine
```

To run the quality pass against a single submodule use:

```shell
pnpm run submodule:quality twin-engine single
```

This is the same gate the repositories run in CI, so it is the broadest check available. The tests it runs have the same docker and environment requirements as [dist](#dist).

If you want the quality pass without running the tests you can use the following command, which formats, lints, compiles and validates the locales:

```shell
pnpm run submodule:quality-no-test
```

It takes the same module name and `single` arguments as the other commands:

```shell
pnpm run submodule:quality-no-test twin-engine single
```

### Package update

You can run the following command to move the dependencies on to their latest versions across all the submodules:

```shell
pnpm run submodule:package-update
```

To start the updates from a specific submodule use:

```shell
pnpm run submodule:package-update twin-engine
```

To run the updates against a single submodule use:

```shell
pnpm run submodule:package-update twin-engine single
```

This runs each submodule's own `package:update` script, which walks you through the available updates and then refreshes the `@twin.org` packages to the latest builds of their release tag. The packages a repository deliberately holds back are controlled by that repository through the `update.ignoreDeps` section of its `pnpm-workspace.yaml`.

This is useful because it lets you keep known-sensitive dependencies pinned while still updating everything else. In a multi-repo workspace, that helps you:

- Avoid repeated build/lint/test breakages from ecosystem-wide major version jumps.
- Keep shared tooling versions aligned until all repos are ready to migrate together.
- Reduce noisy update churn so dependency update runs stay focused and reliable.
