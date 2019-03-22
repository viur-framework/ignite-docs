/* start module: handler */
$pyjs['loaded_modules']['handler'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler']['__was_initialized__']) return $pyjs['loaded_modules']['handler'];
	var $m = $pyjs['loaded_modules']['handler'];
	$m['__repr__'] = function() { return '<module: handler>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler';
	$m['__name__'] = __mod_name__;
	try {


		$m['handler'] = $p['___import___']('handler.list', 'handler');
		$m['handler'] = $p['___import___']('handler.tree', 'handler');
		$m['handler'] = $p['___import___']('handler.hierarchy', 'handler');
		$m['handler'] = $p['___import___']('handler.singleton', 'handler');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end handler */


/* end module: handler */


/*
PYJS_DEPS: ['handler.list', 'handler', 'handler.tree', 'handler.hierarchy', 'handler.singleton']
*/
