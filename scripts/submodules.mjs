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
	const updateExclusionList = await loadUpdateExclusionList();
	const ncuExclusionArgs = updateExclusionList.flatMap(exclusion => [
		'-x',
		normaliseExclusion(exclusion)
	]);
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
			await runShellCmd('npm', ['install'], submodule);
		} else if (command === 'format') {
			await runShellCmd('npm', ['run', 'format'], submodule);
		} else if (command === 'lint') {
			await runShellCmd('npx', ['--yes', 'rimraf', '.eslintcache'], submodule);
			await runShellCmd('npm', ['run', 'lint'], submodule);
		} else if (command === 'lint:code') {
			await runShellCmd('npx', ['--yes', 'rimraf', '.eslintcache'], submodule);
			await runShellCmd('npm', ['run', 'lint:code'], submodule);
		} else if (command === 'dist') {
			await runShellApp('node', ['./scripts/workspaces.mjs', 'dist'], submodule);
		} else if (command === 'dist-no-test') {
			await runShellApp('node', ['./scripts/workspaces.mjs', 'dist:no-test'], submodule);
		} else if (command === 'test') {
			await runShellApp('node', ['./scripts/workspaces.mjs', 'test'], submodule);
		} else if (command === 'docs') {
			await runShellApp('node', ['./scripts/workspaces.mjs', 'docs'], submodule);
		} else if (command === 'refresh-deps') {
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/node_modules'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/package-lock.json'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '.eslintcache'], submodule);
			await runShellCmd('npm', ['install'], submodule);
		} else if (command === 'refresh-deps-build') {
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/node_modules'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/package-lock.json'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '.eslintcache'], submodule);
			await runShellCmd('npm', ['install'], submodule);
			await runShellApp('node', ['./scripts/workspaces.mjs', 'dist:no-test'], submodule);
		} else if (command === 'update-deps-build') {
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/node_modules'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '--glob', '**/package-lock.json'], submodule);
			await runShellCmd('npx', ['--yes', 'rimraf', '.eslintcache'], submodule);
			await runShellCmd(
				'npx',
				['--yes', 'npm-check-updates', '--deep', '-u', ...ncuExclusionArgs],
				submodule
			);
			await runShellCmd('npm', ['install'], submodule);
			await runShellApp('node', ['./scripts/workspaces.mjs', 'format'], submodule);
			await runShellApp('node', ['./scripts/workspaces.mjs', 'lint'], submodule);
			await runShellApp('node', ['./scripts/workspaces.mjs', 'dist'], submodule);
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
 * Load update exclusions for npm-check-updates.
 * @returns The exclusions loaded from scripts/update-exclusion.json.
 */
async function loadUpdateExclusionList() {
	const exclusions = await loadJson('scripts/update-exclusion.json');

	if (!Array.isArray(exclusions) || exclusions.some(exclusion => typeof exclusion !== 'string')) {
		throw new Error('scripts/update-exclusion.json must contain an array of strings');
	}

	return exclusions;
}

/**
 * Normalise exclusion values so each value can be used with -x.
 * @param exclusion The exclusion entry.
 * @returns The normalised package name.
 */
function normaliseExclusion(exclusion) {
	return exclusion.replace(/^-x\s*/, '').trim();
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

/**
 * Run a shell app.
 * @param app The app to run in the shell.
 * @param args The args for the app.
 * @param cwd The working directory to execute the command in.
 * @returns Promise to wait for command execution to complete.
 */
async function runShellApp(app, args, cwd) {
	return new Promise((resolve, reject) => {
		process.stdout.write(`${app} ${args.join(' ')}\n`);

		const sp = spawn(app, args, {
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
