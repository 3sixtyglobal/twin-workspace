// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * This script switches all submodules to the specified branch and pulls the latest changes.
 * Usage: node ./scripts/align.mjs <main|next>
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';

/**
 * Execute the process.
 */
async function run() {
	process.stdout.write('Align Submodules\n');
	process.stdout.write('================\n');
	process.stdout.write('\n');

	const branch = process.argv[2];
	if (branch !== 'main' && branch !== 'next') {
		throw new Error('Branch must be "main" or "next"');
	}

	process.stdout.write(`Branch: ${branch}\n`);
	process.stdout.write('\n');

	const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));
	const submodules = packageJson.submodules;

	let succeeded = 0;
	let failed = 0;
	const failures = [];

	for (const submodule of submodules) {
		process.stdout.write(`Processing: ${submodule}\n`);

		try {
			await execCommand('git', ['checkout', branch], submodule);
			await execCommand('git', ['pull', 'origin', branch], submodule);
			process.stdout.write(`  Done\n`);
			succeeded++;
		} catch (err) {
			process.stdout.write(`  Failed: ${err.message}\n`);
			failures.push({ submodule, error: err.message });
			failed++;
		}
	}

	process.stdout.write('\n');
	process.stdout.write('Results\n');
	process.stdout.write('=======\n');
	process.stdout.write(`Succeeded: ${succeeded}\n`);
	process.stdout.write(`Failed:    ${failed}\n`);

	if (failures.length > 0) {
		process.stdout.write('\nFailures:\n');
		for (const { submodule, error } of failures) {
			process.stdout.write(`  ${submodule}: ${error}\n`);
		}
		process.exit(1);
	}
}

/**
 * Execute a command in a submodule directory.
 * @param cmd The command to run.
 * @param args The arguments for the command.
 * @param cwd The working directory.
 * @returns A promise that resolves when the command completes.
 */
async function execCommand(cmd, args, cwd) {
	return new Promise((resolve, reject) => {
		const proc = spawn(cmd, args, {
			cwd,
			stdio: ['ignore', 'pipe', 'pipe'],
			shell: process.platform === 'win32'
		});

		const lines = [];
		proc.stdout.on('data', data => lines.push(data.toString().trim()));
		proc.stderr.on('data', data => lines.push(data.toString().trim()));

		proc.on('close', code => {
			const output = lines.filter(Boolean).join('\n');
			if (code === 0) {
				if (output) {
					for (const line of output.split('\n')) {
						process.stdout.write(`  ${line}\n`);
					}
				}
				resolve();
			} else {
				reject(new Error(output || `exit code ${code}`));
			}
		});

		proc.on('error', err => reject(new Error(err.message)));
	});
}

run().catch(err => {
	process.stderr.write(`\nError: ${err.message}\n`);
	process.exit(1);
});
