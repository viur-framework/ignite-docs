/**
 * Remove leading indent
 * Inspired by https://github.com/jamiebuilds/min-indent
 */
function minIndent(str: string): number {
	const match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return 0;
	}

	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
}

/**
 * Remove leading indent
 * Inspired by https://github.com/sindresorhus/strip-indent
 */
function unIndent(str: string): string {
	const indent: number = minIndent(str);

	if (indent === 0) {
		return str;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');
	return str.replace(regex, '');
}

function escapeHtml(html: string): string {
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(html));
	return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
	const menu: Element = document.querySelector('.js-menu')!;
	const menuBtn: Element = document.querySelector('.js-menu-btn')!;

	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('is-active');
		menuBtn.classList.toggle('burger--to-cross');
	});

	document.querySelectorAll<HTMLElement>('.js-code-me').forEach((block: HTMLElement) => {
		block.innerHTML = unIndent(block.innerHTML).trim();
		hljs.highlightBlock(block);
		// @ts-ignore
		hljs.lineNumbersBlock(block);
	});

	document.querySelectorAll<HTMLElement>('.js-code-child').forEach((item: HTMLElement) => {
		const escapedHtml = escapeHtml(unIndent(item.innerHTML).trim());

		const codeNode: HTMLElement = document.createElement('code');
		codeNode.classList.add('hljs', 'language-html', 'syntaxhighlighter');
		codeNode.innerHTML = escapedHtml;

		item.parentElement!.appendChild(codeNode);

		hljs.highlightBlock(codeNode);
		// @ts-ignore
		hljs.lineNumbersBlock(codeNode);
	});
});
