import * as vscode from 'vscode';


const checkNativeBaseImported = () => {

	const currentFileText = vscode.window.activeTextEditor?.document.getText();
	const lineArray = currentFileText && currentFileText.split("\n");
	if (lineArray) {
		let importPresent = false;
		for (let i = 0; i < lineArray.length; i++) {
			if (lineArray[i].includes(`from 'native-base';`) || lineArray[i].includes(`from "native-base";`)) {
				return true;
			}
		}
		return false;
	}
	return false;
};

export default checkNativeBaseImported;