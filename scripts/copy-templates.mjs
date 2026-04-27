// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { promises as fs } from 'fs';
import path from 'path';

// This script copies the PULL_REQUEST_TEMPLATE.md and all files in ISSUE_TEMPLATE
// from the root .github/.github directory to the .github folder of every repo in the workspace.

const root = path.resolve('.');

// Path to the central templates
const githubTemplateDir = path.join(root, '.github', '.github');
const prTemplate = path.join(githubTemplateDir, 'PULL_REQUEST_TEMPLATE.md');
const issueTemplateDir = path.join(githubTemplateDir, 'ISSUE_TEMPLATE');

// Folders to exclude from repo search
const exclude = new Set(['.github', 'node_modules', 'scripts', '.vscode', '.git', '.DS_Store']);

// Get all top-level repo directories, excluding system and meta folders
async function getRepoDirs() {
  const entries = await fs.readdir(root, { withFileTypes: true });
  return entries
    .filter(e => e.isDirectory() && !exclude.has(e.name))
    .map(e => path.join(root, e.name));
}

// Copy a single file to the .github folder of every repo
// file: source file path
// destSubPath: path inside .github (e.g., 'PULL_REQUEST_TEMPLATE.md' or 'ISSUE_TEMPLATE/bug_report.md')
async function copyFileToRepos(file, destSubPath) {
  const repos = await getRepoDirs();
  for (const repo of repos) {
    const destDir = path.join(repo, '.github');
    const dest = path.join(destDir, destSubPath);
    try {
      // Ensure the destination directory exists
      await fs.mkdir(path.dirname(dest), { recursive: true });
      // Copy the file
      await fs.copyFile(file, dest);
      console.log(`Copied ${file} to ${dest}`);
    } catch (err) {
      console.error(`Failed to copy ${file} to ${dest}:`, err.message);
    }
  }
}

// Recursively copy all files from a directory to the corresponding .github subfolder in every repo
// srcDir: source directory (e.g., ISSUE_TEMPLATE)
// destSubDir: subdirectory inside .github (e.g., 'ISSUE_TEMPLATE')
async function copyDirToRepos(srcDir, destSubDir) {
  const files = await fs.readdir(srcDir);
  for (const file of files) {
    const src = path.join(srcDir, file);
    const stat = await fs.stat(src);
    if (stat.isFile()) {
      // Copy each file to all repos
      await copyFileToRepos(src, path.join(destSubDir, file));
    } else if (stat.isDirectory()) {
      // Recursively copy subdirectories
      await copyDirToRepos(src, path.join(destSubDir, file));
    }
  }
}

// Main function: copy PR template and all issue templates to all repos
async function main() {
  await copyFileToRepos(prTemplate, 'PULL_REQUEST_TEMPLATE.md');
  await copyDirToRepos(issueTemplateDir, 'ISSUE_TEMPLATE');
}

// Run the script and handle errors
main().catch(e => {
  console.error(e);
  process.exit(1);
});
