SyntaxHighlighter.defaults['gutter'] = false;
SyntaxHighlighter.highlight()

$(function() {
	$.fn.outerHTML = function(s) {
		return (s)
			? this.before(s).remove()
			: $('<p>').append(this.eq(0).clone()).html();
	}

	$('.js-codeMe').each(function() {
		var html = $(this).outerHTML().replace(' js-codeMe', '').replace('js-codeMe', '').replace(' class=""', '').replace('class=""', '');
		var escaped = $("<div>").text(html).html();

		if($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else  {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">'+escaped+'</pre>');

		SyntaxHighlighter.highlight()
	})

	$('.js-codeChild').each(function() {
		var html = $(this).html();
		var escaped = $("<div>").text(html).html();

		if($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else  {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">'+escaped+'</pre>');

		SyntaxHighlighter.highlight()
	})
})
