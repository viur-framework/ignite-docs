/* start module: translations */
$pyjs['loaded_modules']['translations'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['translations']['__was_initialized__']) return $pyjs['loaded_modules']['translations'];
	var $m = $pyjs['loaded_modules']['translations'];
	$m['__repr__'] = function() { return '<module: translations>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'translations';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'translations.py, line 1:\n    from translations.de import lngDe';
	$m.__track_lines__[2] = 'translations.py, line 2:\n    from translations.en import lngEn';


	$pyjs['track']['module']='translations';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['lngDe'] = $p['___import___']('translations.de.lngDe', 'translations', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['lngEn'] = $p['___import___']('translations.en.lngEn', 'translations', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end translations */


/* end module: translations */


/*
PYJS_DEPS: ['translations.de.lngDe', 'translations', 'translations.de', 'translations.en.lngEn', 'translations.en']
*/
