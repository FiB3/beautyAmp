// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const beautifier = require("beauty-amp-core2");

const loggerOn = false;
// const prettier = require("prettier");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // https://stackoverflow.com/questions/49428648/multiple-formatters-in-visual-studio-code

  // formatter implemented using API
  vscode.languages.registerDocumentFormattingEditProvider("AMPscript", ampLanguageFormatter);
  vscode.languages.registerDocumentFormattingEditProvider('ampscript', ampLanguageFormatter);

  console.log(`"beautyAmp" is active!`);
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
  provideDocumentFormattingEdits(document, formattingOptions) {
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
      newLines = beautifier.beautify(lines);
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

module.exports = {
  activate,
  deactivate,
};
