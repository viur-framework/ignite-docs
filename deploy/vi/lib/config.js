/* start module: config */
$pyjs['loaded_modules']['config'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['config']['__was_initialized__']) return $pyjs['loaded_modules']['config'];
	var $m = $pyjs['loaded_modules']['config'];
	$m['__repr__'] = function() { return '<module: config>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'config';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_5 = new $p['int'](5);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', null, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
		$m['Interpreter'] = $p['___import___']('logics.Interpreter', null, null, false);
		$m['conf'] = $p['dict']([['vi.version', $p['tuple']([$constant_int_2, $constant_int_3, $constant_int_0])], ['vi.version.appendix', ''], ['vi.viur', 'ViUR'], ['vi.name', 'ViUR Visual Interface'], ['vi.title.delimiter', ' - '], ['vi.access.rights', $p['list'](['admin', 'root'])], ['mainConfig', null], ['mainWindow', null], ['server', $p['dict']([])], ['server.version', null], ['startupHash', (typeof eval == "undefined"?$m['eval']:eval)('window.top.location.hash')], ['modules', $p['dict']([['_tasks', $p['dict']([['handler', 'singleton'], ['name', 'Tasks']])]])], ['tasks', $p['dict']([['server', $p['list']([])], ['client', $p['list']([])]])], ['currentlanguage', 'de'], ['currentUser', null], ['empty_value', $m['translate']('-')], ['initialHashEvent', $m['EventDispatcher']('initialHash')], ['toplevelactions', $p['list'](['tasks', 'userstate', 'logout'])], ['batchSize', $constant_int_20], ['showBoneNames', false], ['internalPreview', true], ['maxMultiBoneEntries', $constant_int_5], ['logics', $m['Interpreter']()]]);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end config */


/* end module: config */


/*
PYJS_DEPS: ['event.EventDispatcher', 'event', 'i18n.translate', 'i18n', 'logics.Interpreter', 'logics']
*/
