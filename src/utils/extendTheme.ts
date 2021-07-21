import * as vscode from 'vscode';
import * as jsonc from 'jsonc-parser';
import * as fs from 'fs';
import * as path from 'path';
var Hjson = require('hjson');

interface extendThemeObject {
  [key: string]: any;
}
let extendThemeObject: extendThemeObject = {};
const extendTheme = () => {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  let validWorkspaces: any = [];
  if (workspaceFolders) {
    workspaceFolders.map(async (workspaceFolder) => {
      //theme file path
      const themePath: string = path.join(
        workspaceFolder.uri.fsPath,
        'theme.js'
      );
      const fileContent = fs.readFileSync(themePath, 'utf8');
      const startIndex = fileContent.indexOf('extendTheme(');
      const objStart = startIndex + 'extendTheme('.length;
      const endIndex = fileContent.indexOf('});', objStart);
      const objectEnd = endIndex + 1;
      const extendThemeString = fileContent.substring(objStart, objectEnd);
      extendThemeObject = Hjson.parse(extendThemeString);
    });
  }
};
export { extendThemeObject };
export default extendTheme;
