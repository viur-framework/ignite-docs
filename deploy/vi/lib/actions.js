/* start module: actions */
$pyjs['loaded_modules']['actions'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions']['__was_initialized__']) return $pyjs['loaded_modules']['actions'];
	var $m = $pyjs['loaded_modules']['actions'];
	$m['__repr__'] = function() { return '<module: actions>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions';
	$m['__name__'] = __mod_name__;
	try {


		$m['list'] = $p['___import___']('actions.list', 'actions', null, false);
		$m['list_order'] = $p['___import___']('actions.list_order', 'actions', null, false);
		$m['hierarchy'] = $p['___import___']('actions.hierarchy', 'actions', null, false);
		$m['tree'] = $p['___import___']('actions.tree', 'actions', null, false);
		$m['tree_simple'] = $p['___import___']('actions.tree_simple', 'actions', null, false);
		$m['file'] = $p['___import___']('actions.file', 'actions', null, false);
		$m['edit'] = $p['___import___']('actions.edit', 'actions', null, false);
		$m['context'] = $p['___import___']('actions.context', 'actions', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end actions */


/* end module: actions */


/*
PYJS_DEPS: ['actions.list', 'actions', 'actions.list_order', 'actions.hierarchy', 'actions.tree', 'actions.tree_simple', 'actions.file', 'actions.edit', 'actions.context']
*/
