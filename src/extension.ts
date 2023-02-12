// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "go-profile-viewer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('go-profile-viewer.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Go Profile Viewer!');
	});

	context.subscriptions.push(disposable);

	//const place
	const cpuDecorationType = vscode.window.createTextEditorDecorationType(
		{}
	);

	let activeEditor = vscode.window.activeTextEditor;


	function paintCPUDecorations(){
		let fName : String = "hello.world";

		if (!activeEditor){
			return;
		}
		const cpuDecorationOptions : vscode.DecorationOptions[] =[];
	

		const text = activeEditor.document.getText();
		activeEditor.setDecorations(cpuDecorationType,cpuDecorationOptions);

	}



	vscode.window.onDidChangeActiveTextEditor(
		editor => {

		}, null, context.subscriptions);



	vscode.workspace.onDidChangeTextDocument(event => {

	}, null, context.subscriptions);



}

// This method is called when your extension is deactivated
export function deactivate() { }
