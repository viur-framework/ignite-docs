/* start module: sidebarwidgets */
$pyjs['loaded_modules']['sidebarwidgets'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets'];
	var $m = $pyjs['loaded_modules']['sidebarwidgets'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets';
	$m['__name__'] = __mod_name__;
	try {


		$m['sidebarwidgets'] = $p['___import___']('sidebarwidgets.internalpreview', 'sidebarwidgets');
		$m['sidebarwidgets'] = $p['___import___']('sidebarwidgets.filterselector', 'sidebarwidgets');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sidebarwidgets */


/* end module: sidebarwidgets */


/*
PYJS_DEPS: ['sidebarwidgets.internalpreview', 'sidebarwidgets', 'sidebarwidgets.filterselector']
*/
