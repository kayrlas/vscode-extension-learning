// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "completiontest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

	let provider1 = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'kuin' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// Reference
			// https://code.visualstudio.com/api/references/vscode-api#CompletionContext
			// https://code.visualstudio.com/api/references/vscode-api#languages

			// Completion Item: new CompletionItem(label: string, kind?: CompletionItemKind): CompletionItem
			// additionalTextEdits
			// command
			// commitCharacters
			// detail
			// documentation
			// filterText
			// insertText
			// keepWhitespace
			// kind
			// label
			// preselect
			// range
			// sortText
			// textEdit

			// Kuin snippet,
			// const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			// snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
			// snippetCompletion.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

			// Name : ItemKind
			// (CompletionItemKind,commitCharacters,         detail,                      documentation,     insertText)
			// = (          Module,               @,   Kuin library,       'Press `@` to get `excpt@`',)
			// = (           Class,               .,     Kuin class,   'Press `.` to get `kuin@Class.`',)
			// = (         Keyword,                ,   Kuin keyword,                             [Name], [Name]+[Space])

			// let a: [] = [new vscode.CompletionItem('excpt', vscode.CompletionItemKind.Module);,
			//              new vscode.CompletionItem('lib', vscode.CompletionItemKind.Module);]

			const returnList: vscode.CompletionItem[] = [
				// Kuin modules
				new vscode.CompletionItem('excpt', vscode.CompletionItemKind.Module),
				new vscode.CompletionItem('lib', vscode.CompletionItemKind.Module),

				// Kuin classes
				new vscode.CompletionItem('kuin@Class', vscode.CompletionItemKind.Class),

				// Kuin keyword
				new vscode.CompletionItem('alias', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('assert', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('bit16', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('bit32', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('bit64', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('bit8', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('block', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('bool', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('break', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('case', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('catch', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('char', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('class', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('const', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('dbg', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('default', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('dict', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('do', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('elif', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('else', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('end', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('enum', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('false', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('finally', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('float', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('for', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('func', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('if', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('include', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('inf', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('int', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('list', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('me', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('null', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('queue', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('ret', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('skip', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('stack', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('super', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('switch', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('throw', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('to', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('true', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('try', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('var', vscode.CompletionItemKind.Keyword),
				new vscode.CompletionItem('while', vscode.CompletionItemKind.Keyword)
			]

			for (let i = 0; i < returnList.length; i++) {
				switch (returnList[i].kind) {
					case vscode.CompletionItemKind.Module:
						returnList[i].commitCharacters = ['@']
						returnList[i].detail = 'Kuin library'
						returnList[i].documentation = new vscode.MarkdownString('Press `@` to get ...');
						break;
					case vscode.CompletionItemKind.Class:
						returnList[i].commitCharacters = ['.']
						returnList[i].detail = 'Kuin class'
						returnList[i].documentation = new vscode.MarkdownString('Press `.` to get `kuin@Class.`');
						break;

					case vscode.CompletionItemKind.Keyword:
						returnList[i].detail = 'Kuin keyword'
						returnList[i].insertText = returnList[i].label + ' ';
						break;
					default:
						break;
				}
			}

			// return all completion items
			return returnList
		}
	});

	const providerAt = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'kuin' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

			// get all text until the `position` and check if it reads `excpt@`
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (linePrefix.endsWith('excpt@')) {
				return [
					new vscode.CompletionItem('accessViolation', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('classCastFailed', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('ctrlCExit', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('dbgArgOutDomain', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('dbgArrayIdxOutOfRange', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('dbgAssertFailed', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('dbgInoperableState', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('dbgIntOverflow', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('deviceInitFailed', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('fileReadFailed', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('floatInvalidOperation', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('intDivideByZero', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('invalidCmp', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('noMem', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('stackOverflow', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('userMax', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('userMin', vscode.CompletionItemKind.Constant)
				];
			}
			else if (linePrefix.endsWith('lib@')) {
				return [
					new vscode.CompletionItem('BmSearch', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Bool', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Char', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Float', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Int', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Rnd', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Str', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('acos', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('acosh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('asin', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('asinh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('atan', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('atanh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('ceil', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cerp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('chase', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cmdLine', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cmp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cmpEx', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cos', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('cosh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('countUp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('dateToInt', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('decrypt', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('dist', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('e', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('encrypt', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('exitCode', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('exp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('floor', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('hash', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('hermite', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('intMax', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('intMin', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('intToDate', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('intToLocalDate', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('invRot', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('lerp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('levenshtein', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('ln', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('localDateToInt', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('makeBmSearch', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('makeRnd', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('max', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('maxFloat', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('min', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('minFloat', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('now', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('pi', vscode.CompletionItemKind.Constant),
					new vscode.CompletionItem('qerp', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('rnd', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('rndBit64', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('rndFloat', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('rndUuid', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('rot', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('round', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('same', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('sin', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('sinh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('sleep', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('sqrt', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('sysTime', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('tan', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('tanh', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('toDegree', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('toRad', vscode.CompletionItemKind.Function),
				];
			}
			else { return undefined; }
		}
	},
		'@' // triggered whenever a '.' is being typed
	);

	const providerDot = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'kuin' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

			// get all text until the `position` and check if it reads `kuin@Class.`
			// and iff so then complete if `cmp`, `ctor`, and `toStr`
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (linePrefix.endsWith('kuin@Class.')) {
				return [
					new vscode.CompletionItem('cmp', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('ctor', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('toStr', vscode.CompletionItemKind.Method),
				];
			}
			else if (linePrefix.endsWith('lib@BmSearch.')) {
				return [new vscode.CompletionItem('find', vscode.CompletionItemKind.Method)];
			}
			else if (linePrefix.endsWith('lib@Bool.')) {
				return [new vscode.CompletionItem('value', vscode.CompletionItemKind.Property)];
			}
			else if (linePrefix.endsWith('lib@Char.')) {
				return [new vscode.CompletionItem('value', vscode.CompletionItemKind.Property)];
			}
			else if (linePrefix.endsWith('lib@Float.')) {
				return [new vscode.CompletionItem('value', vscode.CompletionItemKind.Property)];
			}
			else if (linePrefix.endsWith('lib@Int.')) {
				return [new vscode.CompletionItem('value', vscode.CompletionItemKind.Property)];
			}
			else if (linePrefix.endsWith('lib@Rnd.')) {
				return [
					new vscode.CompletionItem('rnd', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('rndBit64', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('rndFloat', vscode.CompletionItemKind.Method)
				];
			}
			else if (linePrefix.endsWith('lib@Str.')) {
				return [new vscode.CompletionItem('value', vscode.CompletionItemKind.Property)];
			}
			else { return undefined; }
		}
	},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider1, providerAt, providerDot);
}

// this method is called when your extension is deactivated
export function deactivate() { }
