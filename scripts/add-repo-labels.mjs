import { Octokit } from '@octokit/rest';
import { readFileSync } from 'fs';

const workspacePackage = JSON.parse(
	readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);
const SUBMODULES = ['twin-workspace', ...workspacePackage.submodules];

const octokit = new Octokit({
	auth: 'github_pat_...'
});

const ORG = 'iotaledger';
const LABELS = [
	{
		name: 'autorelease: pending',
		color: 'ededed',
		description: 'This issue is pending an autorelease'
	},
	{
		name: 'autorelease: tagged',
		color: '74C7AC',
		description: 'This issue has been tagged by the autorelease'
	},
	{
		name: 'needs-triage',
		color: 'f0650b',
		description: 'Issues that need triage'
	},
	{
		name: 'information-needed',
		color: '7ecd6e',
		description: 'More information is needed from the issue reporter'
	},
	{
		name: 'blocked',
		color: 'b03b06',
		description: 'This issue is blocked by another issue'
	},
	{
		name: 'changes-requested',
		color: 'e7e26f',
		description: 'Changes have been requested for this issue'
	},
	{
		name: 'chore',
		color: '3eba9c',
		description: 'A task that needs to be done but does not add any new features or fix any bugs'
	}
];

async function addLabelToAllRepos() {
	for (const repoName of SUBMODULES) {
		await addLabelToRepo(repoName);
	}
}

async function addLabelToRepo(repoName) {
	for (const label of LABELS) {
		try {
			await octokit.issues.createLabel({
				owner: ORG,
				repo: repoName,
				...label
			});
			console.log(`✅ Label ${label.name} added to ${repoName}`);
		} catch (err) {
			if (err.status === 422) {
				console.log(`⚠️ Label ${label.name} already exists in ${repoName}`);
			} else {
				console.error(`❌ Error in ${repoName}:`, err.message);
			}
		}

		// To avoid hitting rate limits
		await new Promise(resolve => setTimeout(resolve, 1000));
	}
}

addLabelToAllRepos();
// addLabelToRepo("automation");
