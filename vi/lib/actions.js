/* start module: actions */
$pyjs['loaded_modules']['actions'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions']['__was_initialized__']) return $pyjs['loaded_modules']['actions'];
	var $m = $pyjs['loaded_modules']['actions'];
	$m['__repr__'] = function() { return '<module: actions>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'actions.py, line 1:\n    from actions import list, list_order';
	$m.__track_lines__[2] = 'actions.py, line 2:\n    from actions import hierarchy';
	$m.__track_lines__[3] = 'actions.py, line 3:\n    from actions import tree';
	$m.__track_lines__[4] = 'actions.py, line 4:\n    from actions import tree_simple';
	$m.__track_lines__[5] = 'actions.py, line 5:\n    from actions import file';
	$m.__track_lines__[6] = 'actions.py, line 6:\n    from actions import edit';


	$pyjs['track']['module']='actions';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['list'] = $p['___import___']('actions.list', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['list_order'] = $p['___import___']('actions.list_order', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['hierarchy'] = $p['___import___']('actions.hierarchy', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['tree'] = $p['___import___']('actions.tree', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['tree_simple'] = $p['___import___']('actions.tree_simple', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['file'] = $p['___import___']('actions.file', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['edit'] = $p['___import___']('actions.edit', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end actions */


/* end module: actions */


/*
PYJS_DEPS: ['actions.list', 'actions', 'actions.list_order', 'actions.hierarchy', 'actions.tree', 'actions.tree_simple', 'actions.file', 'actions.edit']
*/
