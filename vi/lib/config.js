/* start module: config */
$pyjs['loaded_modules']['config'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['config']['__was_initialized__']) return $pyjs['loaded_modules']['config'];
	var $m = $pyjs['loaded_modules']['config'];
	$m['__repr__'] = function() { return '<module: config>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'config';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'config.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'config.py, line 2:\n    from event import EventDispatcher';
	$m.__track_lines__[3] = 'config.py, line 3:\n    from i18n import translate';
	$m.__track_lines__[5] = 'config.py, line 5:\n    conf = {';


	$pyjs['track']['module']='config';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['conf'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['vi.version', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['tuple']([2, 0, 1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()], ['vi.version.appendix', ''], ['mainConfig', null], ['mainWindow', null], ['server', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()], ['server.version', null], ['modules', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['_tasks', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['handler', 'singleton'], ['name', 'Tasks']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()], ['tasks', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['server', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()], ['client', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()], ['currentlanguage', 'de'], ['currentUser', null], ['empty_value', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['translate']('-');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()], ['initialHashEvent', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['EventDispatcher']('initialHash');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()], ['toplevelactions', (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list'](['tasks', 'userstate', 'logout']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()], ['batchSize', 20], ['showBoneNames', false], ['internalPreview', true], ['maxMultiBoneEntries', 5]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
	return this;
}; /* end config */


/* end module: config */


/*
PYJS_DEPS: ['event.EventDispatcher', 'event', 'i18n.translate', 'i18n']
*/
