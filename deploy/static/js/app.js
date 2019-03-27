SyntaxHighlighter.defaults['gutter'] = false;
SyntaxHighlighter.highlight();

$(function () {
	$.fn.outerHTML = function (s) {
		return (s)
			? this.before(s).remove()
			: $('<p>').append(this.eq(0).clone()).html();
	};

	$('.js-code-self').each(function () {
		var html = $(this).outerHTML()
			.replace(' js-code-self', '')
			.replace('js-code-self', '')
			.replace(' class=""', '')
			.replace('class=""', '');
		var escaped = $('<div>').text(html).html();

		if ($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">' + escaped + '</pre>');

		SyntaxHighlighter.highlight()
	});

	$('.js-code-child').each(function () {
		var html = $(this).html();
		var escaped = $('<div>').text(html).html();

		if ($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">' + escaped + '</pre>');

		SyntaxHighlighter.highlight()
	})
});
