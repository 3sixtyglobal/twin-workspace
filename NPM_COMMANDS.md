# NPM Commands

## Cross module commands

The following commands are available across all the modules.

By default, commands run across all submodules. You can also:

- Start from a specific submodule by appending its name.
- Run against a single submodule by appending its name followed by `single`.

| Command                                                           | All submodules                         | From submodule                                     | Single submodule                                          |
| ----------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| [Install](#install)                                               | `npm run submodule:install`            | `npm run submodule:install twin-engine`            | `npm run submodule:install twin-engine single`            |
| [Format](#format)                                                 | `npm run submodule:format`             | `npm run submodule:format twin-engine`             | `npm run submodule:format twin-engine single`             |
| [Lint](#lint)                                                     | `npm run submodule:lint`               | `npm run submodule:lint twin-engine`               | `npm run submodule:lint twin-engine single`               |
| [Dist](#dist)                                                     | `npm run submodule:dist`               | `npm run submodule:dist twin-engine`               | `npm run submodule:dist twin-engine single`               |
| [Dist (no test)](#dist)                                           | `npm run submodule:dist-no-test`       | `npm run submodule:dist-no-test twin-engine`       | `npm run submodule:dist-no-test twin-engine single`       |
| [Docs](#docs)                                                     | `npm run submodule:docs`               | `npm run submodule:docs twin-engine`               | `npm run submodule:docs twin-engine single`               |
| [Refresh dependencies and build](#refresh-dependencies-and-build) | `npm run submodule:refresh-deps-build` | `npm run submodule:refresh-deps-build twin-engine` | `npm run submodule:refresh-deps-build twin-engine single` |

### Operational notes

- Commands run in the order defined by the `submodules` array in `package.json`.
- Commands fail fast, so execution stops at the first submodule with an error.
- Without `single`, providing a module name starts from that module and continues to the end.

### Quick examples

```shell
# Format everything
npm run submodule:format

# Build everything without tests
npm run submodule:dist-no-test

# Build from a known failing point onward
npm run submodule:dist-no-test twin-ui

# Run one module only
npm run submodule:dist-no-test twin-ui single

# Clean, update dependencies, install and build one module
npm run submodule:refresh-deps-build twin-ui single
```

### Install

You can run the following command to perform an npm install across all the submodules:

```shell
npm run submodule:install
```

If you need to start the `install` process from a specific submodule just add that module name to the end of the command.

e.g. To start again from the `twin-engine` submodule.

```shell
npm run submodule:install twin-engine
```

To run install against a single submodule use:

```shell
npm run submodule:install twin-engine single
```

### Format

You can run the following command to perform formatting across all the submodules:

```shell
npm run submodule:format
```

To start formatting from a specific submodule use:

```shell
npm run submodule:format twin-engine
```

To run formatting against a single submodule use:

```shell
npm run submodule:format twin-engine single
```

### Lint

You can run the following command to perform linting across all the submodules:

```shell
npm run submodule:lint
```

To start linting from a specific submodule use:

```shell
npm run submodule:lint twin-engine
```

To run linting against a single submodule use:

```shell
npm run submodule:lint twin-engine single
```

### Dist

You can run the following command to perform the full distribution build across all the submodules:

```shell
npm run submodule:dist
```

> It should be noted that many of the tests require docker images running (details of how to run the docker images are provided in the repos for each package). Some of the other tests require environment variables for wallet seeds, these tests will fail with errors providing instructions on how to generate the seeds.

If you want to perform the dist operations without running tests you can use the following command:

```shell
npm run submodule:dist-no-test
```

If you need to start the `dist` or `dist-no-test` process from a specific submodule just add that module name to the end of the command.

e.g. To start again from the `twin-engine` submodule.

```shell
npm run submodule:dist twin-engine
```

To run dist against a single submodule use:

```shell
npm run submodule:dist twin-engine single
```

To run dist-no-test against a single submodule use:

```shell
npm run submodule:dist-no-test twin-engine single
```

### Docs

You can run the following command to generate docs across all the submodules:

```shell
npm run submodule:docs
```

To start docs generation from a specific submodule use:

```shell
npm run submodule:docs twin-engine
```

To run docs generation against a single submodule use:

```shell
npm run submodule:docs twin-engine single
```

### Refresh dependencies and build

You can run the following command to clean dependencies, update packages, install and build (without tests) across all submodules:

```shell
npm run submodule:refresh-deps-build
```

To start from a specific submodule use:

```shell
npm run submodule:refresh-deps-build twin-engine
```

To run against a single submodule use:

```shell
npm run submodule:refresh-deps-build twin-engine single
```

`refresh-deps-build` uses `npm-check-updates` and reads package exclusions from [`scripts/update-exclusion.json`](./scripts/update-exclusion.json).

This is useful because it lets you keep known-sensitive dependencies pinned while still updating everything else automatically. In a multi-repo workspace, that helps you:

- Avoid repeated build/lint/test breakages from ecosystem-wide major version jumps.
- Keep shared tooling versions aligned until all repos are ready to migrate together.
- Reduce noisy update churn so dependency refresh runs stay focused and reliable.

The file must contain a JSON array of package names to exclude from updates, for example:

```json
["package-to-pin", "@scope/another-package"]
```
