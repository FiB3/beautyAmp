// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const beautifier = require("./src/beautifier");

// const prettier = require("prettier");

/*
	TODO:
	[ ] beautify of AMPscript
	[ ] run HTML beautify as well (disable via settings?)
*/

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // https://stackoverflow.com/questions/49428648/multiple-formatters-in-visual-studio-code

  // formatter implemented using API
  vscode.languages.registerDocumentFormattingEditProvider("AMPscript", {
    /**
     * Provide formatting edits for a whole document.
     *
     * @param document The document in which the command was invoked.
     * @param options Options controlling formatting.
     * @param token A cancellation token.
     * @return A set of text edits or a thenable that resolves to such. The lack of a result can be
     * signaled by returning `undefined`, `null`, or an empty array.
     */
    provideDocumentFormattingEdits(document) {
      // 	console.log('HTML Beautifying running.');
      // 	const htmlFormatting = commands.executeCommand('editor.action.formatDocument');
      console.log("AMPscript Beautifying running.");
      const setup = vscode.workspace.getConfiguration("beautyAmp");
      const vsCodeEditorSetup = vscode.workspace.getConfiguration("editor");
      // console.log(vsCodeEditorSetup);
      const editorSetup = {
        tabSize: vsCodeEditorSetup.tabSize,
        insertSpaces: vsCodeEditorSetup.insertSpaces
      };
      console.log('SETUP:', setup, editorSetup);

      // get document as an array of strings:
      let lines = getLinesAsText(document);
      // cut blank lines from beginning and end of the text:
      console.log("cutBlanksAtStartEnd");
      lines = beautifier.cutBlanksAtStartEnd(lines);
      // get code blocks:
      console.log("getCodeBlocks");
      const blocks = beautifier.getCodeBlocks(lines, undefined, setup, editorSetup);
      // process nesting of the blocks:
      console.log("processNesting");
      beautifier.processNesting(blocks);
      console.log("returnAsLines");
      const newLines = beautifier.returnAsLines(blocks);
      console.log("rewriteDocument");
      return rewriteDocument(vscode, document, newLines);
    },
  });

  let disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    function () {
      prettier.formatWithCursor(" 1", { cursorOffset: 2, parser: "html" });
      // vscode.window.showInformationMessage("Hello World!");
      // try {
      //   vscode.languages.setTextDocumentLanguage(document, "html");
      // } catch (err) {
      //   console.log(err);
      // }
      console.log('test');
    }
  );
  context.subscriptions.push(disposable);

  console.log('Congratulations, your extension "beautyAmp" is now active!');
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function getLinesAsText(doc) {
  console.log("Getting lines.");
  const lines = [];
  for (let i = 0; i < doc.lineCount; i++) {
    lines.push(doc.lineAt(i).text);
  }
  return lines;
}

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
