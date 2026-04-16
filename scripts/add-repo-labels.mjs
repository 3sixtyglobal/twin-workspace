import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	auth: "github_pat_......"
});

const ORG = "twinfoundation";
const LABELS = [
	{
		name: "autorelease: pending",
		color: "ededed",
		description: "This issue is pending an autorelease",
	},
	{
		name: "autorelease: tagged",
		color: "74C7AC",
		description: "This issue has been tagged by the autorelease",
	},
	{
		name: "needs-triage",
		color: "f0650b",
		description: "Issues that need triage",
	},
	{
		name: "information-needed",
		color: "7ecd6e",
		description: "More information is needed from the issue reporter",
	}
];

async function addLabelToAllRepos() {
	try {
		const repos = await octokit.paginate(octokit.repos.listForOrg, {
			org: ORG,
			type: "all",
			per_page: 100,
		});

		// To avoid hitting rate limits
		await new Promise(resolve => setTimeout(resolve, 1000));
		for (const repo of repos) {
			await addLabelToRepo(repo.name);
		}
	} catch (err) {
		console.error("Failed to fetch repositories:", err.message);
	}
}

async function addLabelToRepo(repoName) {
	for (const label of LABELS) {
		try {
			await octokit.issues.createLabel({
				owner: ORG,
				repo: repoName,
				...label,
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

// addLabelToAllRepos();
// addLabelToRepo("notarization");