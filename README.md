# TWIN Workspace

This repo contains all the other relevant repos as submodules.

To clone the repo and all it's submodules use the following command:

```shell
git clone --recursive https://github.com/twinfoundation/workspace.git
```

It should be noted the submodules will not be linked to one another, and will all have their own independent dependencies.

## Submodules

You can update all the submodules using the following command:

```shell
git submodule update --recursive
```

If you want to pull all the latest changes for the submodules use the following command:

```shell
git pull --recurse-submodules
```

To add a new module to the repository use the following command:

```shell
git submodule add https://github.com/twinfoundation/<name>.git
```

You must also add the name of the module in `package.json` in the `submodules` array, so that it will be processed by the other scripts in the correct chronological build order.

## Cross module commands

The following commands are available across all the modules.

### Install

You can run the following command to perform an npm install across all the submodules:

```shell
npm run submodule:install
```

If you need to start the `install` process from a specific submodule just add that module name to the end of the command.

e.g. To start again from the `engine` submodule.

```shell
npm run submodule:install engine
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

e.g. To start again from the `engine` submodule.

```shell
npm run submodule:dist engine
```

## Development

To work on specific repos it is recommended to open that repo separately in VS Code and use the package scripts etc within that repo.

> The workspace repository does not directly consume source code from sibling repositories during development. Instead, it resolves dependencies via published npm packages. To propagate local modifications from one repository into another without waiting for a package release, developers must invoke the `npm run local-link` script within the target repository. This script establishes a symlink to the locally built package, ensuring that inter-repo changes are immediately available for testing and integration.
