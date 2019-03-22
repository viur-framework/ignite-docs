/* start module: os.path */
$pyjs['loaded_modules']['os.path'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['os.path']['__was_initialized__']) return $pyjs['loaded_modules']['os.path'];
	if(typeof $pyjs['loaded_modules']['os'] == 'undefined' || !$pyjs['loaded_modules']['os']['__was_initialized__']) $p['___import___']('os', null);
	var $m = $pyjs['loaded_modules']['os.path'];
	$m['__repr__'] = function() { return '<module: os.path>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'os.path';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['os']['path'] = $pyjs['loaded_modules']['os.path'];
	try {


		$p['__import_all__']('pyjspath', 'os', $m, null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end os.path */


/* end module: os.path */


/*
PYJS_DEPS: ['pyjspath']
*/
