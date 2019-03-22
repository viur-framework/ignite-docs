/* start module: sidebarwidgets */
$pyjs['loaded_modules']['sidebarwidgets'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets'];
	var $m = $pyjs['loaded_modules']['sidebarwidgets'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'sidebarwidgets.py, line 1:\n    import sidebarwidgets.internalpreview';
	$m.__track_lines__[2] = 'sidebarwidgets.py, line 2:\n    import sidebarwidgets.filterselector';


	$pyjs['track']['module']='sidebarwidgets';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['sidebarwidgets'] = $p['___import___']('sidebarwidgets.internalpreview', 'sidebarwidgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['sidebarwidgets'] = $p['___import___']('sidebarwidgets.filterselector', 'sidebarwidgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end sidebarwidgets */


/* end module: sidebarwidgets */


/*
PYJS_DEPS: ['sidebarwidgets.internalpreview', 'sidebarwidgets', 'sidebarwidgets.filterselector']
*/
