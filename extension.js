// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require('fs');
const beautifier = require("beauty-amp-core2");

const loggerOn = false;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // formatter implemented using API
  vscode.languages.registerDocumentFormattingEditProvider("AMPscript", ampLanguageFormatter);
  vscode.languages.registerDocumentFormattingEditProvider('ampscript', ampLanguageFormatter);

  console.log(`beautyAmp@${getExtensionVersion()} is active!`);
}
exports.activate = activate;

var ampLanguageFormatter = {
  /**
   * Provide formatting edits for a whole document.
   *
   * @param document The document in which the command was invoked.
   * @param options Options controlling formatting.
   * @param token A cancellation token.
   * @return A set of text edits or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined`, `null`, or an empty array.
   */
  async provideDocumentFormattingEdits(document, formattingOptions) {
    // 	console.log('HTML Beautifying running.');
    // 	const htmlFormatting = commands.executeCommand('editor.action.formatDocument');
    console.log(`AMPscript Beautifying running for ${document.languageId}.`);
    const setup = vscode.workspace.getConfiguration("beautyAmp");
    
    const editorSetup = {
      tabSize: formattingOptions.tabSize,
      insertSpaces: formattingOptions.insertSpaces
    };
    console.log('SETUP:', setup, editorSetup);

    beautifier.setup(setup, editorSetup, { loggerOn: loggerOn });

    // get document as an array of strings:
    let lines = getLinesAsText(document);

    // run the beautify:
    let newLines;
    try {
      try {
        // including HTML formatting
        newLines = await beautifier.beautify(lines);
      } catch(htmlError) {
        if (htmlError.name == 'SyntaxError' && typeof(htmlError.message) == 'string') {
          let errLine = htmlError.message.split('\n')?.[0] ? htmlError.message.split('\n')?.[0] : htmlError.message;
          vscode.window.showErrorMessage(`Error on HTML formatting, Probably malformed HTML:\n\t` + errLine);
          newLines = await beautifier.beautify(lines, false);
          vscode.window.showInformationMessage(`Formatting without HTML finished.`);
        }
      } 
    } catch(err) {
      console.log(`Error on Beautify:`, err);
      vscode.window.showErrorMessage(`Error on formatting. Please, let us know in our GitHub issues.`);
    }
    console.log('Lines Beautified.');
    return rewriteDocument(vscode, document, newLines);
  },
};

// this method is called when your extension is deactivated
function deactivate() {}

/**
 * Get lines from the document (editor window).
 * @param {} doc 
 * @returns {Array}
 */
function getLinesAsText(doc) {
  console.log("Getting lines.");
  const lines = [];
  for (let i = 0; i < doc.lineCount; i++) {
    lines.push(doc.lineAt(i).text);
  }
  console.log("Got Lines");
  return lines;
}

/**
 * Rewrite the whole active document (active window).
 * @param {} vscode 
 * @param {} doc 
 * @param {Array} lines lines to input.
 * @returns 
 */
function rewriteDocument(vscode, doc, lines) {
  console.log("Rewriting lines.");
  const startAtPosition = new vscode.Position(0, 0);
  const endAtPosition = new vscode.Position(doc.lineCount, 0);
  const oldRange = new vscode.Range(startAtPosition, endAtPosition);

  return [vscode.TextEdit.replace(oldRange, lines.join("\n"))];
}

function getExtensionVersion() {
  try {
    let fPath = __dirname.endsWith(`/dist`) ? __dirname + '/../package.json' : __dirname + '/package.json';
    const packageJson = JSON.parse(fs.readFileSync(fPath, 'utf8'));
    return packageJson.version;
  } catch (err) {
    console.log('Error on getExtensionVersion:', err);
    return 'v0.?.?';
  }
}

module.exports = {
  activate,
  deactivate,
};