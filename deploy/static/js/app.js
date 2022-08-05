// Adds a page load event that replaces "img.js-svg"-tags by an embedded version of the scalable vector graphic.
window.addEventListener(
	"load",
	() => {
		let domParser = new DOMParser();  // Will be used later.
		let embedSvgs = document.querySelectorAll("img.js-svg"); // Select all img-elements with 'js-svg'-class

		for (let embedSvg of embedSvgs) {
			fetch(embedSvg["src"])  // Fetch the src of the img-element. This should hit the cache after first page load.
				.then(response => response.text())
				.then(svg => {
					if (!svg) // Skip empty content
						return;

					// Turn fetched svg code into a dom...
					var svgElement = domParser.parseFromString(svg, "image/svg+xml");

					// ...and ensure to find the svgs's root node, which will be inserted into the main DOM
					if (svgElement && (svgElement = svgElement.querySelector("svg"))) {
						svgElement.classList = embedSvg.classList;  // Take all classes from the img-element
						embedSvg.replaceWith(svgElement); // Embed the SVG in place of the img-element
					}
				});
		}
	}
);

"use strict";
function minIndent(str) {
    var match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) {
        return 0;
    }
    return match.reduce(function (r, a) { return Math.min(r, a.length); }, Infinity);
}
function unIndent(str) {
    var indent = minIndent(str);
    if (indent === 0) {
        return str;
    }
    var regex = new RegExp("^[ \\t]{" + indent + "}", 'gm');
    return str.replace(regex, '');
}
function escapeHtml(html) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(html));
    return div.innerHTML;
}
document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.js-menu');
    var menuBtn = document.querySelector('.js-menu-btn');
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuBtn.classList.toggle('is-active');
    });
    document.querySelectorAll('.js-code-me').forEach(function (block) {
        block.innerHTML = unIndent(block.innerHTML).trim();
        hljs.highlightBlock(block);
        hljs.lineNumbersBlock(block);
    });
    document.querySelectorAll('.js-code-child').forEach(function (item) {
        var escapedHtml = escapeHtml(unIndent(item.innerHTML).trim());
        var codeNode = document.createElement('code');
        codeNode.classList.add('hljs', 'language-html', 'syntaxhighlighter');
        codeNode.innerHTML = escapedHtml;
        item.parentElement.insertBefore(codeNode, item.nextSibling);
        hljs.highlightBlock(codeNode);
        hljs.lineNumbersBlock(codeNode);
    });
});

// Burger Menu Mobile
$('.js_burger').click(function() {
	$('.mainmenu').toggleClass("is-open");
	$('.burger').toggleClass("");
	$('html').toggleClass("no-scroll");
});
