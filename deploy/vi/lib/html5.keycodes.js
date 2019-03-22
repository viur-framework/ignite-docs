/* start module: html5.keycodes */
$pyjs['loaded_modules']['html5.keycodes'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.keycodes']['__was_initialized__']) return $pyjs['loaded_modules']['html5.keycodes'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.keycodes'];
	$m['__repr__'] = function() { return '<module: html5.keycodes>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.keycodes';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['keycodes'] = $pyjs['loaded_modules']['html5.keycodes'];
	try {

		var $constant_int_224 = new $p['int'](224);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_91 = new $p['int'](91);
		var $constant_int_93 = new $p['int'](93);
		$m['isSingleSelectionKey'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			if ($p['bool']($p['op_eq'](keyCode, $constant_int_17))) {
				return true;
			}
			else if ($p['bool']((typeof eval == "undefined"?$m['eval']:eval)('navigator.appVersion.indexOf("Mac") != -1'))) {
				if ($p['bool']($p['list']([$constant_int_224, $constant_int_17, $constant_int_91, $constant_int_93])['__contains__'](keyCode))) {
					return true;
				}
			}
			return false;
		};
		$m['isSingleSelectionKey']['__name__'] = 'isSingleSelectionKey';

		$m['isSingleSelectionKey']['__bind_type__'] = 0;
		$m['isSingleSelectionKey']['__args__'] = [null,null,['keyCode']];
		$m['isArrowLeft'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq'](keyCode, $constant_int_37);
		};
		$m['isArrowLeft']['__name__'] = 'isArrowLeft';

		$m['isArrowLeft']['__bind_type__'] = 0;
		$m['isArrowLeft']['__args__'] = [null,null,['keyCode']];
		$m['isArrowUp'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq'](keyCode, $constant_int_38);
		};
		$m['isArrowUp']['__name__'] = 'isArrowUp';

		$m['isArrowUp']['__bind_type__'] = 0;
		$m['isArrowUp']['__args__'] = [null,null,['keyCode']];
		$m['isArrowRight'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq'](keyCode, $constant_int_39);
		};
		$m['isArrowRight']['__name__'] = 'isArrowRight';

		$m['isArrowRight']['__bind_type__'] = 0;
		$m['isArrowRight']['__args__'] = [null,null,['keyCode']];
		$m['isArrowDown'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq'](keyCode, $constant_int_40);
		};
		$m['isArrowDown']['__name__'] = 'isArrowDown';

		$m['isArrowDown']['__bind_type__'] = 0;
		$m['isArrowDown']['__args__'] = [null,null,['keyCode']];
		$m['isReturn'] = function(keyCode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq'](keyCode, $constant_int_13);
		};
		$m['isReturn']['__name__'] = 'isReturn';

		$m['isReturn']['__bind_type__'] = 0;
		$m['isReturn']['__args__'] = [null,null,['keyCode']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.keycodes */


/* end module: html5.keycodes */


