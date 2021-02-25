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
        menuBtn.classList.toggle('burger--to-cross');
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
