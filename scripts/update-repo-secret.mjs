// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * Updates a GitHub Actions secret across all repos listed in the workspace.
 * Requires the gh CLI to be authenticated (gh auth login).
 */
import { readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';

const workspacePackage = JSON.parse(
	readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);

const ORG = '3sixtyglobal';
const SUBMODULES = ['workspace-core', ...workspacePackage.submodules];

/**
 * Set a secret on a single repo using the gh CLI.
 * @param {string} repo The repository name.
 * @param {string} secretName The secret name.
 * @param {string} secretValue The secret value.
 * @returns {Promise<void>} Resolves when the secret has been set.
 */
function setSecret(repo, secretName, secretValue) {
	return new Promise((resolve, reject) => {
		const fullRepo = `${ORG}/${repo}`;
		process.stdout.write(`${fullRepo}: setting ${secretName}...\n`);

		const sp = spawn(
			'gh',
			['secret', 'set', secretName, '--body', secretValue, '--repo', fullRepo],
			{
				stdio: ['ignore', 'inherit', 'pipe']
			}
		);

		let stderr = '';
		sp.stderr.on('data', chunk => {
			stderr += String(chunk);
		});

		sp.on('exit', code => {
			if (code === 0) {
				process.stdout.write(`${fullRepo}: OK\n`);
				resolve();
			} else {
				const msg = stderr.trim() || `exit code ${String(code)}`;
				process.stderr.write(`${fullRepo}: FAILED - ${msg}\n`);
				reject(new Error(msg));
			}
		});
	});
}

async function setSecretAllRepos(secretName, secretValue) {
	process.stdout.write(`Secret: ${secretName}\n`);
	process.stdout.write(`Repos:  ${String(SUBMODULES.length)}\n\n`);

	const failed = [];

	for (const submodule of SUBMODULES) {
		try {
			await setSecret(submodule, secretName, secretValue);
		} catch {
			failed.push(submodule);
		}
	}

	if (failed.length > 0) {
		process.stderr.write(`\nFailed on ${String(failed.length)} repo(s):\n`);
		for (const repo of failed) {
			process.stderr.write(`  ${repo}\n`);
		}
	} else {
		process.stdout.write('\nComplete.\n');
	}
}

const newValue = ``;

setSecretAllRepos('ORG_TEST_ENV_VARS', newValue);
