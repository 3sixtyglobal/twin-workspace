// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * This script is used to perform actions across the whole workspace.
 * It performs the operations on all submodules.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';

/**
 * Execute the process.
 */
async function run() {
	process.stdout.write('Submodules\n');
	process.stdout.write('==========\n');
	process.stdout.write('\n');
	process.stdout.write(`Platform: ${process.platform}\n`);

	if (process.argv.length <= 2) {
		throw new Error('No command specified');
	}

	const command = process.argv[2];
	const args = process.argv.slice(3);
	const single = args.includes('single');
	const module = args.find(arg => !arg.startsWith('-'));
	process.stdout.write(`Command: ${command}\n`);
	if (single) {
		process.stdout.write(`Single: ${single}\n`);
	}
	process.stdout.write(`\n`);

	if (module) {
		process.stdout.write(`${single ? 'Module' : 'Start Module'}: ${module}\n`);
		process.stdout.write(`\n`);
	}

	const packageJson = await loadJson('package.json');
	let submodules = packageJson.submodules;

	if (module) {
		const index = submodules.indexOf(module);
		if (index === -1) {
			throw new Error(`Module ${module} not found`);
		} else if (single) {
			submodules = [module];
		} else {
			submodules = submodules.slice(index);
		}
	}

	for (const submodule of submodules) {
		process.stdout.write(`Submodule: ${submodule}\n`);
		if (command === 'install') {
			await runShellCmd('pnpm', ['install'], submodule);
		} else if (command === 'format') {
			await runShellCmd('pnpm', ['run', 'format'], submodule);
		} else if (command === 'lint') {
			await removeCaches(submodule);
			await runShellCmd('pnpm', ['run', 'lint'], submodule);
		} else if (command === 'lint:code') {
			await removeCaches(submodule);
			await runShellCmd('pnpm', ['run', 'lint:code'], submodule);
		} else if (command === 'dist') {
			await runShellCmd('pnpm', ['run', 'dist'], submodule);
		} else if (command === 'format-lint-dist-docs') {
			await removeCaches(submodule);
			await runShellCmd('pnpm', ['run', 'format'], submodule);
			await runShellCmd('pnpm', ['run', 'lint:code'], submodule);
			await runShellCmd('pnpm', ['run', 'dist'], submodule);
			await runShellCmd('pnpm', ['run', 'docs'], submodule);
		} else if (command === 'dist-no-test') {
			await runShellCmd('pnpm', ['run', 'dist:no-test'], submodule);
		} else if (command === 'test') {
			await runShellCmd('pnpm', ['run', 'test'], submodule);
		} else if (command === 'docs') {
			await runShellCmd('pnpm', ['run', 'docs'], submodule);
		} else if (command === 'quality') {
			await removeCaches(submodule);
			await runShellCmd('pnpm', ['run', 'quality'], submodule);
		} else if (command === 'quality-no-test') {
			await removeCaches(submodule);
			await runShellCmd('pnpm', ['run', 'quality:no-test'], submodule);
		} else if (command === 'package-update') {
			await runShellCmd('pnpm', ['run', 'package:update'], submodule);
		} else {
			throw new Error(`Unknown command ${command}`);
		}
		process.stdout.write(`\n`);
	}
}

/**
 * Load a JSON file.
 * @param filePath The path th load as JSON.
 * @returns The loaded JSON.
 */
async function loadJson(filePath) {
	const content = await fs.readFile(filePath, 'utf8');

	return JSON.parse(content);
}

/**
 * Remove the lint caches from a submodule.
 * @param submodule The submodule to remove the caches from.
 * @returns Promise to wait for the removal to complete.
 */
async function removeCaches(submodule) {
	await runShellCmd('pnpm', ['dlx', 'rimraf', '--glob', '.eslintcache'], submodule);
}

/**
 * Run a shell app.
 * @param app The app to run in the shell.
 * @param args The args for the app.
 * @param cwd The working directory to execute the command in.
 * @returns Promise to wait for command execution to complete.
 */
async function runShellCmd(app, args, cwd) {
	return new Promise((resolve, reject) => {
		process.stdout.write(`${app} ${args.join(' ')}\n`);

		const osCommand = process.platform.startsWith('win') ? `${app}.cmd` : app;

		const sp = spawn(osCommand, args, {
			stdio: 'inherit',
			shell: true,
			cwd
		});

		sp.on('exit', (exitCode, signals) => {
			if (Number.parseInt(exitCode, 10) !== 0 || signals?.length) {
				reject(new Error('Run failed'));
			} else {
				resolve();
			}
		});
	});
}

run().catch(err => {
	process.stderr.write(`${err}\n`);
	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(1);
});
