/* start module: translations */
$pyjs['loaded_modules']['translations'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['translations']['__was_initialized__']) return $pyjs['loaded_modules']['translations'];
	var $m = $pyjs['loaded_modules']['translations'];
	$m['__repr__'] = function() { return '<module: translations>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'translations';
	$m['__name__'] = __mod_name__;
	try {


		$m['lngDe'] = $p['___import___']('translations.de.lngDe', 'translations', null, false);
		$m['lngEn'] = $p['___import___']('translations.en.lngEn', 'translations', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end translations */


/* end module: translations */


/*
PYJS_DEPS: ['translations.de.lngDe', 'translations', 'translations.de', 'translations.en.lngEn', 'translations.en']
*/
