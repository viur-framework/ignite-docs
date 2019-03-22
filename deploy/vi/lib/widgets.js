/* start module: widgets */
$pyjs['loaded_modules']['widgets'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets']['__was_initialized__']) return $pyjs['loaded_modules']['widgets'];
	var $m = $pyjs['loaded_modules']['widgets'];
	$m['__repr__'] = function() { return '<module: widgets>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets';
	$m['__name__'] = __mod_name__;
	try {


		$m['TopBarWidget'] = $p['___import___']('topbar.TopBarWidget', 'widgets', null, false);
		$m['ListWidget'] = $p['___import___']('list.ListWidget', 'widgets', null, false);
		$m['EditWidget'] = $p['___import___']('edit.EditWidget', 'widgets', null, false);
		$m['InternalEdit'] = $p['___import___']('edit.InternalEdit', 'widgets', null, false);
		$m['DataTable'] = $p['___import___']('table.DataTable', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('actionbar.ActionBar', 'widgets', null, false);
		$m['TreeWidget'] = $p['___import___']('tree.TreeWidget', 'widgets', null, false);
		$m['HierarchyWidget'] = $p['___import___']('hierarchy.HierarchyWidget', 'widgets', null, false);
		$m['FileWidget'] = $p['___import___']('file.FileWidget', 'widgets', null, false);
		$m['Preview'] = $p['___import___']('preview.Preview', 'widgets', null, false);
		$m['Search'] = $p['___import___']('search.Search', 'widgets', null, false);
		$m['SideBar'] = $p['___import___']('sidebar.SideBar', 'widgets', null, false);
		$m['UserLogoutMsg'] = $p['___import___']('userlogoutmsg.UserLogoutMsg', 'widgets', null, false);
		$m['TaskWidget'] = $p['___import___']('task.TaskWidget', 'widgets', null, false);
		$m['TaskSelectWidget'] = $p['___import___']('task.TaskSelectWidget', 'widgets', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets */


/* end module: widgets */


/*
PYJS_DEPS: ['topbar.TopBarWidget', 'topbar', 'list.ListWidget', 'list', 'edit.EditWidget', 'edit', 'edit.InternalEdit', 'table.DataTable', 'table', 'actionbar.ActionBar', 'actionbar', 'tree.TreeWidget', 'tree', 'hierarchy.HierarchyWidget', 'hierarchy', 'file.FileWidget', 'file', 'preview.Preview', 'preview', 'search.Search', 'search', 'sidebar.SideBar', 'sidebar', 'userlogoutmsg.UserLogoutMsg', 'userlogoutmsg', 'task.TaskWidget', 'task', 'task.TaskSelectWidget']
*/
