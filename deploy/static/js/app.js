SyntaxHighlighter.defaults['gutter'] = false;
SyntaxHighlighter.highlight();

$(function () {
	$.fn.outerHTML = function (s) {
		return (s)
			? this.before(s).remove()
			: $('<p>').append(this.eq(0).clone()).html();
	};


	$('.js-gist').each(function () {
		$this = $(this);

		$(this)
			.addClass("is-busy")
			.append(
				'<div class="spinner-overlay">'+
					'<div class="spinner">'+
						'<div class="spinner-square"></div>'+
						'<div class="spinner-square"></div>'+
						'<div class="spinner-square"></div>'+
						'<div class="spinner-square"></div>'+
						'<div class="spinner-square"></div>'+
					'</div>'+
				'</div>'
			);

		var key = $this.data('key');
		var file = $this.data('file');

		var url = 'https://gist.github.com/' + key + '.json';

		if (file && typeof file !== undefined && file !== "") {
			url += '?file=' + file;
		}

		$.ajax({
			url: url,
          	dataType: 'jsonp',
			success: function (response) {

				$('<link>')
					.attr('rel', 'stylesheet')
					.attr('href', response.stylesheet)
					.appendTo('head');

				$($this)
					.append(response.div)
					.trigger('gistloaded')
					.addClass('gistloaded')
					.removeClass('is-busy');
			}
		});
	});


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
