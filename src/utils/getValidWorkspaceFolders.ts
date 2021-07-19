import * as vscode from 'vscode';
import * as jsonc from 'jsonc-parser';
import * as fs from 'fs';
import * as path from 'path';




const getValidWorkspaceFolders = () => {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	let validWorkspaces: any = [];
	if (workspaceFolders) {
		workspaceFolders.map(async (workspaceFolder) => {


			//package.json path
			const packageJsonPath: string = path.join(
				workspaceFolder.uri.fsPath,
				'package.json'
			);

			//node_modules path
			const nodeModulesPath: string = path.join(
				workspaceFolder.uri.fsPath,
				'node_modules'
			);

			//check native-base is there in node_modules
			const nodeModules = fs.readdirSync(nodeModulesPath);
			if (!nodeModules.includes("native-base")) {
				return [];
			}

			//check nb version is >=3.0 in package.json
			const fileContent = fs.readFileSync(packageJsonPath, 'utf8');
			let parsedFileContent: any;
			parsedFileContent = jsonc.parse(fileContent);
			if (
				parsedFileContent.dependencies['native-base'] &&
				parsedFileContent.dependencies['native-base'].localeCompare(
					'^3.0.0'
				) >= 0
			) {
				validWorkspaces.push(workspaceFolder.uri.fsPath);
			}
		});

	}
	return validWorkspaces;
};

export default getValidWorkspaceFolders;
