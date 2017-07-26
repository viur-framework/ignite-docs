/* start module: handler */
$pyjs['loaded_modules']['handler'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler']['__was_initialized__']) return $pyjs['loaded_modules']['handler'];
	var $m = $pyjs['loaded_modules']['handler'];
	$m['__repr__'] = function() { return '<module: handler>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'handler.py, line 1:\n    import handler.list';
	$m.__track_lines__[2] = 'handler.py, line 2:\n    import handler.tree';
	$m.__track_lines__[3] = 'handler.py, line 3:\n    import handler.hierarchy';
	$m.__track_lines__[4] = 'handler.py, line 4:\n    import handler.singleton';


	$pyjs['track']['module']='handler';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['handler'] = $p['___import___']('handler.list', 'handler');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['handler'] = $p['___import___']('handler.tree', 'handler');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['handler'] = $p['___import___']('handler.hierarchy', 'handler');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['handler'] = $p['___import___']('handler.singleton', 'handler');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end handler */


/* end module: handler */


/*
PYJS_DEPS: ['handler.list', 'handler', 'handler.tree', 'handler.hierarchy', 'handler.singleton']
*/
