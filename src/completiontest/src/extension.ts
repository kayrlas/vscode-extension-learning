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
			// = (          Module,               @,   Kuin library,       'Press `@` to get `except@`',)
			// = (           Class,               .,     Kuin class,   'Press `.` to get `kuin@Class.`',)
			// = (         Keyword,                ,   Kuin keyword,                             [Name], [Name]+[Space])

			// let a: [] = [new vscode.CompletionItem('except', vscode.CompletionItemKind.Module);,
			//              new vscode.CompletionItem('lib', vscode.CompletionItemKind.Module);]

			// Kuin modules
			const constantCompletion01 = new vscode.CompletionItem('except', vscode.CompletionItemKind.Module);
			constantCompletion01.commitCharacters = ['@'];
			constantCompletion01.detail = 'Kuin library';
			constantCompletion01.documentation = new vscode.MarkdownString('Press `@` to get `except@`');
			const constantCompletion02 = new vscode.CompletionItem('lib', vscode.CompletionItemKind.Module);
			constantCompletion02.commitCharacters = ['@'];
			constantCompletion02.detail = 'Kuin library';
			constantCompletion02.documentation = new vscode.MarkdownString('Press `@` to get `lib@`');

			// Kuin class
			const classCompletion = new vscode.CompletionItem('kuin@Class', vscode.CompletionItemKind.Class);
			classCompletion.commitCharacters = ['.'];
			classCompletion.detail = 'Kuin class';
			classCompletion.documentation = new vscode.MarkdownString('Press `.` to get `kuin@Class.`');

			// Kuin keywords
			const keywordCompletion01 = new vscode.CompletionItem('alias', vscode.CompletionItemKind.Keyword);
			keywordCompletion01.detail = 'Kuin keyword';
			keywordCompletion01.documentation = new vscode.MarkdownString('alias');
			keywordCompletion01.insertText = 'alias ';
			const keywordCompletion02 = new vscode.CompletionItem('assert', vscode.CompletionItemKind.Keyword);
			keywordCompletion02.detail = 'Kuin keyword';
			keywordCompletion02.documentation = new vscode.MarkdownString('assert');
			keywordCompletion02.insertText = 'assert ';

			const keywordCompletion03 = new vscode.CompletionItem('bit16', vscode.CompletionItemKind.Keyword);
			keywordCompletion03.detail = 'Kuin keyword';
			keywordCompletion03.documentation = new vscode.MarkdownString('bit16');
			keywordCompletion03.insertText = 'bit16 ';
			const keywordCompletion04 = new vscode.CompletionItem('bit32', vscode.CompletionItemKind.Keyword);
			keywordCompletion04.detail = 'Kuin keyword';
			keywordCompletion04.documentation = new vscode.MarkdownString('bit32');
			keywordCompletion04.insertText = 'bit32 ';
			const keywordCompletion05 = new vscode.CompletionItem('bit64', vscode.CompletionItemKind.Keyword);
			keywordCompletion05.detail = 'Kuin keyword';
			keywordCompletion05.documentation = new vscode.MarkdownString('bit64');
			keywordCompletion05.insertText = 'bit64 ';
			const keywordCompletion06 = new vscode.CompletionItem('bit8', vscode.CompletionItemKind.Keyword);
			keywordCompletion06.detail = 'Kuin keyword';
			keywordCompletion06.documentation = new vscode.MarkdownString('bit8');
			keywordCompletion06.insertText = 'bit8 ';
			const keywordCompletion07 = new vscode.CompletionItem('block', vscode.CompletionItemKind.Keyword);
			keywordCompletion07.detail = 'Kuin keyword';
			keywordCompletion07.documentation = new vscode.MarkdownString('block');
			keywordCompletion07.insertText = 'block ';
			const keywordCompletion08 = new vscode.CompletionItem('bool', vscode.CompletionItemKind.Keyword);
			keywordCompletion08.detail = 'Kuin keyword';
			keywordCompletion08.documentation = new vscode.MarkdownString('bool');
			keywordCompletion08.insertText = 'bool ';
			const keywordCompletion09 = new vscode.CompletionItem('break', vscode.CompletionItemKind.Keyword);
			keywordCompletion09.detail = 'Kuin keyword';
			keywordCompletion09.documentation = new vscode.MarkdownString('break');
			keywordCompletion09.insertText = 'break ';

			const keywordCompletion10 = new vscode.CompletionItem('case', vscode.CompletionItemKind.Keyword);
			keywordCompletion10.detail = 'Kuin keyword';
			keywordCompletion10.documentation = new vscode.MarkdownString('case');
			keywordCompletion10.insertText = 'case ';
			const keywordCompletion11 = new vscode.CompletionItem('catch', vscode.CompletionItemKind.Keyword);
			keywordCompletion11.detail = 'Kuin keyword';
			keywordCompletion11.documentation = new vscode.MarkdownString('catch');
			keywordCompletion11.insertText = 'catch ';
			const keywordCompletion12 = new vscode.CompletionItem('char', vscode.CompletionItemKind.Keyword);
			keywordCompletion12.detail = 'Kuin keyword';
			keywordCompletion12.documentation = new vscode.MarkdownString('char');
			keywordCompletion12.insertText = 'char ';
			const keywordCompletion13 = new vscode.CompletionItem('class', vscode.CompletionItemKind.Keyword);
			keywordCompletion13.detail = 'Kuin keyword';
			keywordCompletion13.documentation = new vscode.MarkdownString('class');
			keywordCompletion13.insertText = 'class ';
			const keywordCompletion14 = new vscode.CompletionItem('const', vscode.CompletionItemKind.Keyword);
			keywordCompletion14.detail = 'Kuin keyword';
			keywordCompletion14.documentation = new vscode.MarkdownString('const');
			keywordCompletion14.insertText = 'const ';

			const keywordCompletion15 = new vscode.CompletionItem('dbg', vscode.CompletionItemKind.Keyword);
			keywordCompletion15.detail = 'Kuin keyword';
			keywordCompletion15.documentation = new vscode.MarkdownString('dbg');
			keywordCompletion15.insertText = 'dbg ';
			const keywordCompletion16 = new vscode.CompletionItem('default', vscode.CompletionItemKind.Keyword);
			keywordCompletion16.detail = 'Kuin keyword';
			keywordCompletion16.documentation = new vscode.MarkdownString('default');
			keywordCompletion16.insertText = 'default ';
			const keywordCompletion17 = new vscode.CompletionItem('dict', vscode.CompletionItemKind.Keyword);
			keywordCompletion17.detail = 'Kuin keyword';
			keywordCompletion17.documentation = new vscode.MarkdownString('dict');
			keywordCompletion17.insertText = 'dict ';
			const keywordCompletion18 = new vscode.CompletionItem('do', vscode.CompletionItemKind.Keyword);
			keywordCompletion18.detail = 'Kuin keyword';
			keywordCompletion18.documentation = new vscode.MarkdownString('do');
			keywordCompletion18.insertText = 'do ';

			const keywordCompletion19 = new vscode.CompletionItem('elif', vscode.CompletionItemKind.Keyword);
			keywordCompletion19.detail = 'Kuin keyword';
			keywordCompletion19.documentation = new vscode.MarkdownString('elif');
			keywordCompletion19.insertText = 'elif ';
			const keywordCompletion20 = new vscode.CompletionItem('else', vscode.CompletionItemKind.Keyword);
			keywordCompletion20.detail = 'Kuin keyword';
			keywordCompletion20.documentation = new vscode.MarkdownString('else');
			keywordCompletion20.insertText = 'else ';
			const keywordCompletion21 = new vscode.CompletionItem('end', vscode.CompletionItemKind.Keyword);
			keywordCompletion21.detail = 'Kuin keyword';
			keywordCompletion21.documentation = new vscode.MarkdownString('end');
			keywordCompletion21.insertText = 'end ';
			const keywordCompletion22 = new vscode.CompletionItem('enum', vscode.CompletionItemKind.Keyword);
			keywordCompletion22.detail = 'Kuin keyword';
			keywordCompletion22.documentation = new vscode.MarkdownString('enum');
			keywordCompletion22.insertText = 'enum ';

			const keywordCompletion23 = new vscode.CompletionItem('false', vscode.CompletionItemKind.Keyword);
			keywordCompletion23.detail = 'Kuin keyword';
			keywordCompletion23.documentation = new vscode.MarkdownString('false');
			keywordCompletion23.insertText = 'false ';
			const keywordCompletion24 = new vscode.CompletionItem('finally', vscode.CompletionItemKind.Keyword);
			keywordCompletion24.detail = 'Kuin keyword';
			keywordCompletion24.documentation = new vscode.MarkdownString('finally');
			keywordCompletion24.insertText = 'finally ';
			const keywordCompletion25 = new vscode.CompletionItem('float', vscode.CompletionItemKind.Keyword);
			keywordCompletion25.detail = 'Kuin keyword';
			keywordCompletion25.documentation = new vscode.MarkdownString('float');
			keywordCompletion25.insertText = 'float ';
			const keywordCompletion26 = new vscode.CompletionItem('for', vscode.CompletionItemKind.Keyword);
			keywordCompletion26.detail = 'Kuin keyword';
			keywordCompletion26.documentation = new vscode.MarkdownString('for');
			keywordCompletion26.insertText = 'for ';
			const keywordCompletion27 = new vscode.CompletionItem('func', vscode.CompletionItemKind.Keyword);
			keywordCompletion27.detail = 'Kuin keyword';
			keywordCompletion27.documentation = new vscode.MarkdownString('func');
			keywordCompletion27.insertText = 'func ';

			const keywordCompletion28 = new vscode.CompletionItem('if', vscode.CompletionItemKind.Keyword);
			keywordCompletion28.detail = 'Kuin keyword';
			keywordCompletion28.documentation = new vscode.MarkdownString('if');
			keywordCompletion28.insertText = 'if ';
			const keywordCompletion29 = new vscode.CompletionItem('include', vscode.CompletionItemKind.Keyword);
			keywordCompletion29.detail = 'Kuin keyword';
			keywordCompletion29.documentation = new vscode.MarkdownString('include');
			keywordCompletion29.insertText = 'include ';
			const keywordCompletion30 = new vscode.CompletionItem('inf', vscode.CompletionItemKind.Keyword);
			keywordCompletion30.detail = 'Kuin keyword';
			keywordCompletion30.documentation = new vscode.MarkdownString('inf');
			keywordCompletion30.insertText = 'inf ';
			const keywordCompletion31 = new vscode.CompletionItem('int', vscode.CompletionItemKind.Keyword);
			keywordCompletion31.detail = 'Kuin keyword';
			keywordCompletion31.documentation = new vscode.MarkdownString('int');
			keywordCompletion31.insertText = 'int ';

			const keywordCompletion32 = new vscode.CompletionItem('list', vscode.CompletionItemKind.Keyword);
			keywordCompletion32.detail = 'Kuin keyword';
			keywordCompletion32.documentation = new vscode.MarkdownString('list');
			keywordCompletion32.insertText = 'list ';

			const keywordCompletion33 = new vscode.CompletionItem('me', vscode.CompletionItemKind.Keyword);
			keywordCompletion33.detail = 'Kuin keyword';
			keywordCompletion33.documentation = new vscode.MarkdownString('me');
			keywordCompletion33.insertText = 'me ';

			const keywordCompletion34 = new vscode.CompletionItem('null', vscode.CompletionItemKind.Keyword);
			keywordCompletion34.detail = 'Kuin keyword';
			keywordCompletion34.documentation = new vscode.MarkdownString('null');
			keywordCompletion34.insertText = 'null ';

			const keywordCompletion35 = new vscode.CompletionItem('queue', vscode.CompletionItemKind.Keyword);
			keywordCompletion35.detail = 'Kuin keyword';
			keywordCompletion35.documentation = new vscode.MarkdownString('queue');
			keywordCompletion35.insertText = 'queue ';

			const keywordCompletion36 = new vscode.CompletionItem('ret', vscode.CompletionItemKind.Keyword);
			keywordCompletion36.detail = 'Kuin keyword';
			keywordCompletion36.documentation = new vscode.MarkdownString('ret');
			keywordCompletion36.insertText = 'ret ';

			const keywordCompletion37 = new vscode.CompletionItem('skip', vscode.CompletionItemKind.Keyword);
			keywordCompletion37.detail = 'Kuin keyword';
			keywordCompletion37.documentation = new vscode.MarkdownString('skip');
			keywordCompletion37.insertText = 'skip ';
			const keywordCompletion38 = new vscode.CompletionItem('stack', vscode.CompletionItemKind.Keyword);
			keywordCompletion38.detail = 'Kuin keyword';
			keywordCompletion38.documentation = new vscode.MarkdownString('stack');
			keywordCompletion38.insertText = 'stack ';
			const keywordCompletion39 = new vscode.CompletionItem('super', vscode.CompletionItemKind.Keyword);
			keywordCompletion39.detail = 'Kuin keyword';
			keywordCompletion39.documentation = new vscode.MarkdownString('super');
			keywordCompletion39.insertText = 'super ';
			const keywordCompletion40 = new vscode.CompletionItem('switch', vscode.CompletionItemKind.Keyword);
			keywordCompletion40.detail = 'Kuin keyword';
			keywordCompletion40.documentation = new vscode.MarkdownString('switch');
			keywordCompletion40.insertText = 'switch ';

			const keywordCompletion41 = new vscode.CompletionItem('throw', vscode.CompletionItemKind.Keyword);
			keywordCompletion41.detail = 'Kuin keyword';
			keywordCompletion41.documentation = new vscode.MarkdownString('throw');
			keywordCompletion41.insertText = 'throw ';
			const keywordCompletion42 = new vscode.CompletionItem('to', vscode.CompletionItemKind.Keyword);
			keywordCompletion42.detail = 'Kuin keyword';
			keywordCompletion42.documentation = new vscode.MarkdownString('to');
			keywordCompletion42.insertText = 'to ';
			const keywordCompletion43 = new vscode.CompletionItem('true', vscode.CompletionItemKind.Keyword);
			keywordCompletion43.detail = 'Kuin keyword';
			keywordCompletion43.documentation = new vscode.MarkdownString('true');
			keywordCompletion43.insertText = 'true ';
			const keywordCompletion44 = new vscode.CompletionItem('try', vscode.CompletionItemKind.Keyword);
			keywordCompletion44.detail = 'Kuin keyword';
			keywordCompletion44.documentation = new vscode.MarkdownString('try');
			keywordCompletion44.insertText = 'try ';

			const keywordCompletion45 = new vscode.CompletionItem('var', vscode.CompletionItemKind.Keyword);
			keywordCompletion45.detail = 'Kuin keyword';
			keywordCompletion45.documentation = new vscode.MarkdownString('var');
			keywordCompletion45.insertText = 'var ';

			const keywordCompletion46 = new vscode.CompletionItem('while', vscode.CompletionItemKind.Keyword);
			keywordCompletion46.detail = 'Kuin keyword';
			keywordCompletion46.documentation = new vscode.MarkdownString('while');
			keywordCompletion46.insertText = 'while ';

			// return all completion items as array
			return [
				classCompletion,
				constantCompletion01,
				constantCompletion02,
				keywordCompletion01,
				keywordCompletion02,
				keywordCompletion03,
				keywordCompletion04,
				keywordCompletion05,
				keywordCompletion06,
				keywordCompletion07,
				keywordCompletion08,
				keywordCompletion09,
				keywordCompletion10,
				keywordCompletion11,
				keywordCompletion12,
				keywordCompletion13,
				keywordCompletion14,
				keywordCompletion15,
				keywordCompletion16,
				keywordCompletion17,
				keywordCompletion18,
				keywordCompletion19,
				keywordCompletion20,
				keywordCompletion21,
				keywordCompletion22,
				keywordCompletion23,
				keywordCompletion24,
				keywordCompletion25,
				keywordCompletion26,
				keywordCompletion27,
				keywordCompletion28,
				keywordCompletion29,
				keywordCompletion30,
				keywordCompletion31,
				keywordCompletion32,
				keywordCompletion33,
				keywordCompletion34,
				keywordCompletion35,
				keywordCompletion36,
				keywordCompletion37,
				keywordCompletion38,
				keywordCompletion39,
				keywordCompletion40,
				keywordCompletion41,
				keywordCompletion42,
				keywordCompletion43,
				keywordCompletion44,
				keywordCompletion45,
				keywordCompletion46
			];
		}
	});

	const providerAt = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'kuin' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

			// get all text until the `position` and check if it reads `except@`
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (linePrefix.endsWith('except@')) {
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
