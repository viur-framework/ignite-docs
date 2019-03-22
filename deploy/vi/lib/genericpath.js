/* start module: genericpath */
$pyjs['loaded_modules']['genericpath'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['genericpath']['__was_initialized__']) return $pyjs['loaded_modules']['genericpath'];
	var $m = $pyjs['loaded_modules']['genericpath'];
	$m['__repr__'] = function() { return '<module: genericpath>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'genericpath';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		$m['os'] = $p['___import___']('os', null);
		$m['stat'] = $p['___import___']('stat', null);
		$m['__all__'] = $p['list'](['commonprefix', 'exists', 'getatime', 'getctime', 'getmtime', 'getsize', 'isdir', 'isfile']);
		$m['exists'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $pyjs_try_err;
			try {
				$m['os']['stat'](path);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return true;
		};
		$m['exists']['__name__'] = 'exists';

		$m['exists']['__bind_type__'] = 0;
		$m['exists']['__args__'] = [null,null,['path']];
		$m['isfile'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $pyjs_try_err,st;
			try {
				st = $m['os']['stat'](path);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return $m['stat']['S_ISREG']($p['getattr'](st, 'st_mode'));
		};
		$m['isfile']['__name__'] = 'isfile';

		$m['isfile']['__bind_type__'] = 0;
		$m['isfile']['__args__'] = [null,null,['path']];
		$m['isdir'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $pyjs_try_err,st;
			try {
				st = $m['os']['stat'](s);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return $m['stat']['S_ISDIR']($p['getattr'](st, 'st_mode'));
		};
		$m['isdir']['__name__'] = 'isdir';

		$m['isdir']['__bind_type__'] = 0;
		$m['isdir']['__args__'] = [null,null,['s']];
		$m['getsize'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']($m['os']['stat'](filename), 'st_size');
		};
		$m['getsize']['__name__'] = 'getsize';

		$m['getsize']['__bind_type__'] = 0;
		$m['getsize']['__args__'] = [null,null,['filename']];
		$m['getmtime'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']($m['os']['stat'](filename), 'st_mtime');
		};
		$m['getmtime']['__name__'] = 'getmtime';

		$m['getmtime']['__bind_type__'] = 0;
		$m['getmtime']['__args__'] = [null,null,['filename']];
		$m['getatime'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']($m['os']['stat'](filename), 'st_atime');
		};
		$m['getatime']['__name__'] = 'getatime';

		$m['getatime']['__bind_type__'] = 0;
		$m['getatime']['__args__'] = [null,null,['filename']];
		$m['getctime'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['getattr']($m['os']['stat'](filename), 'st_ctime');
		};
		$m['getctime']['__name__'] = 'getctime';

		$m['getctime']['__bind_type__'] = 0;
		$m['getctime']['__args__'] = [null,null,['filename']];
		$m['commonprefix'] = function(m) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var c,$iter1_nextval,$iter1_type,i,s2,s1,$iter1_iter,$iter1_array,$iter1_idx;
			if ($p['bool'](!$p['bool'](m))) {
				return '';
			}
			s1 = $p['min'](m);
			s2 = $p['max'](m);
			$iter1_iter = $p['enumerate'](s1);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				c = $tupleassign1[1];
				if ($p['bool'](!$p['op_eq'](c, s2['__getitem__'](i)))) {
					return $p['__getslice'](s1, 0, i);
				}
			}
			return s1;
		};
		$m['commonprefix']['__name__'] = 'commonprefix';

		$m['commonprefix']['__bind_type__'] = 0;
		$m['commonprefix']['__args__'] = [null,null,['m']];
		$m['_splitext'] = function(p, sep, altsep, extsep) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var sepIndex,filenameIndex,$add2,altsepIndex,$add1,$add4,dotIndex,$add3;
			sepIndex = p['rfind'](sep);
			if ($p['bool'](altsep)) {
				altsepIndex = p['rfind'](altsep);
				sepIndex = $p['max'](sepIndex, altsepIndex);
			}
			dotIndex = p['rfind'](extsep);
			if ($p['bool'](($p['cmp'](dotIndex, sepIndex) == 1))) {
				filenameIndex = $p['__op_add']($add1=sepIndex,$add2=$constant_int_1);
				while ($p['bool'](($p['cmp'](filenameIndex, dotIndex) == -1))) {
					if ($p['bool'](!$p['op_eq'](p['__getitem__'](filenameIndex), extsep))) {
						return $p['tuple']([$p['__getslice'](p, 0, dotIndex), $p['__getslice'](p, dotIndex, null)]);
					}
					filenameIndex = $p['__op_add']($add3=filenameIndex,$add4=$constant_int_1);
				}
			}
			return $p['tuple']([p, '']);
		};
		$m['_splitext']['__name__'] = '_splitext';

		$m['_splitext']['__bind_type__'] = 0;
		$m['_splitext']['__args__'] = [null,null,['p'],['sep'],['altsep'],['extsep']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end genericpath */


/* end module: genericpath */


/*
PYJS_DEPS: ['os', 'stat']
*/
