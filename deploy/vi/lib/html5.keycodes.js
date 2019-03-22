/* start module: html5.keycodes */
$pyjs['loaded_modules']['html5.keycodes'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.keycodes']['__was_initialized__']) return $pyjs['loaded_modules']['html5.keycodes'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.keycodes'];
	$m['__repr__'] = function() { return '<module: html5.keycodes>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.keycodes';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['keycodes'] = $pyjs['loaded_modules']['html5.keycodes'];
	$m.__track_lines__[1] = 'html5.keycodes.py, line 1:\n    ';
	$m.__track_lines__[2] = 'html5.keycodes.py, line 2:\n    def isSingleSelectionKey(keyCode):';
	$m.__track_lines__[6] = 'html5.keycodes.py, line 6:\n    if keyCode == 17: # "ctrl" on all major platforms';
	$m.__track_lines__[7] = 'html5.keycodes.py, line 7:\n    return True';
	$m.__track_lines__[10] = 'html5.keycodes.py, line 10:\n    if keyCode in [224, 17, 91, 93]:';
	$m.__track_lines__[11] = 'html5.keycodes.py, line 11:\n    return True';
	$m.__track_lines__[13] = 'html5.keycodes.py, line 13:\n    return False';
	$m.__track_lines__[15] = 'html5.keycodes.py, line 15:\n    def isArrowLeft(keyCode):';
	$m.__track_lines__[16] = 'html5.keycodes.py, line 16:\n    return keyCode == 37';
	$m.__track_lines__[18] = 'html5.keycodes.py, line 18:\n    def isArrowUp(keyCode):';
	$m.__track_lines__[19] = 'html5.keycodes.py, line 19:\n    return keyCode == 38';
	$m.__track_lines__[21] = 'html5.keycodes.py, line 21:\n    def isArrowRight(keyCode):';
	$m.__track_lines__[22] = 'html5.keycodes.py, line 22:\n    return keyCode == 39';
	$m.__track_lines__[24] = 'html5.keycodes.py, line 24:\n    def isArrowDown(keyCode):';
	$m.__track_lines__[25] = 'html5.keycodes.py, line 25:\n    return keyCode == 40';
	$m.__track_lines__[27] = 'html5.keycodes.py, line 27:\n    def isReturn(keyCode):';
	$m.__track_lines__[28] = 'html5.keycodes.py, line 28:\n    return keyCode == 13';


	$pyjs['track']['module']='html5.keycodes';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$m['isSingleSelectionKey'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=2;
		$pyjs['track']['lineno']=6;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](keyCode, 17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=7;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)('navigator.appVersion.indexOf("Mac") != -1');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
			$pyjs['track']['lineno']=10;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([224, 17, 91, 93]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()['__contains__'](keyCode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=11;
				$pyjs['track']['lineno']=11;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
		}
		$pyjs['track']['lineno']=13;
		$pyjs['track']['lineno']=13;
		var $pyjs__ret = false;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isSingleSelectionKey']['__name__'] = 'isSingleSelectionKey';

	$m['isSingleSelectionKey']['__bind_type__'] = 0;
	$m['isSingleSelectionKey']['__args__'] = [null,null,['keyCode']];
	$pyjs['track']['lineno']=15;
	$m['isArrowLeft'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=15;
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=16;
		var $pyjs__ret = $p['op_eq'](keyCode, 37);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isArrowLeft']['__name__'] = 'isArrowLeft';

	$m['isArrowLeft']['__bind_type__'] = 0;
	$m['isArrowLeft']['__args__'] = [null,null,['keyCode']];
	$pyjs['track']['lineno']=18;
	$m['isArrowUp'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=18;
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=19;
		var $pyjs__ret = $p['op_eq'](keyCode, 38);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isArrowUp']['__name__'] = 'isArrowUp';

	$m['isArrowUp']['__bind_type__'] = 0;
	$m['isArrowUp']['__args__'] = [null,null,['keyCode']];
	$pyjs['track']['lineno']=21;
	$m['isArrowRight'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=21;
		$pyjs['track']['lineno']=22;
		$pyjs['track']['lineno']=22;
		var $pyjs__ret = $p['op_eq'](keyCode, 39);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isArrowRight']['__name__'] = 'isArrowRight';

	$m['isArrowRight']['__bind_type__'] = 0;
	$m['isArrowRight']['__args__'] = [null,null,['keyCode']];
	$pyjs['track']['lineno']=24;
	$m['isArrowDown'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=25;
		$pyjs['track']['lineno']=25;
		var $pyjs__ret = $p['op_eq'](keyCode, 40);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isArrowDown']['__name__'] = 'isArrowDown';

	$m['isArrowDown']['__bind_type__'] = 0;
	$m['isArrowDown']['__args__'] = [null,null,['keyCode']];
	$pyjs['track']['lineno']=27;
	$m['isReturn'] = function(keyCode) {

		$pyjs['track']={'module':'html5.keycodes','lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.keycodes';
		$pyjs['track']['lineno']=27;
		$pyjs['track']['lineno']=28;
		$pyjs['track']['lineno']=28;
		var $pyjs__ret = $p['op_eq'](keyCode, 13);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['isReturn']['__name__'] = 'isReturn';

	$m['isReturn']['__bind_type__'] = 0;
	$m['isReturn']['__args__'] = [null,null,['keyCode']];
	return this;
}; /* end html5.keycodes */


/* end module: html5.keycodes */


