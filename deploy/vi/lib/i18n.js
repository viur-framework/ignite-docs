/* start module: i18n */
$pyjs['loaded_modules']['i18n'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['i18n']['__was_initialized__']) return $pyjs['loaded_modules']['i18n'];
	var $m = $pyjs['loaded_modules']['i18n'];
	$m['__repr__'] = function() { return '<module: i18n>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'i18n';
	$m['__name__'] = __mod_name__;
	try {
		var $iter1_array,$iter1_nextval,$iter1_idx,$iter1_iter,$iter1_type;
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		$m['translations'] = $p['___import___']('translations', null);
		$m['_currentLanguage'] = (typeof eval == "undefined"?$m['eval']:eval)('navigator.language');
		if ($p['bool'](!$p['bool']($m['_currentLanguage']))) {
			$m['_currentLanguage'] = (typeof eval == "undefined"?$m['eval']:eval)('navigator.browserLanguage');
			if ($p['bool'](!$p['bool']($m['_currentLanguage']))) {
				$m['_currentLanguage'] = 'en';
			}
		}
		if ($p['bool'](($p['cmp']($p['len']($m['_currentLanguage']), $constant_int_2) == 1))) {
			$m['_currentLanguage'] = $p['__getslice']($m['_currentLanguage'], 0, $constant_int_2);
		}
		$p['printFunc']([$p['sprintf']('Configured for language: %s', $m['_currentLanguage'])], 1);
		$m['_runtimeTranslations'] = $p['dict']([]);
		$m['_lngMap'] = $p['dict']([]);
		$iter1_iter = $p['dir']($m['translations']);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			$m['key'] = $iter1_nextval['$nextval'];
			if ($p['bool']($m['key']['startswith']('lng'))) {
				$m['_lngMap']['__setitem__']($p['__getslice']($m['key'], $constant_int_3, null)['lower'](), function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['dict']();
				$iter2_iter = $p['getattr']($m['translations'], $m['key'])['items']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					$m['k'] = $tupleassign1[0];
					$m['v'] = $tupleassign1[1];
					$collcomp1['__setitem__']($m['k']['lower'](), $m['v']);
				}

	return $collcomp1;}());
			}
		}
		$m['translate'] = function(key) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof key != 'undefined') {
					if (key !== null && typeof key['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = key;
						key = arguments[1];
					}
				} else {
				}
			}
			var processTr;
			processTr = function(inStr) {
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof inStr != 'undefined') {
						if (inStr !== null && typeof inStr['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = inStr;
							inStr = arguments[1];
						}
					} else {
					}
				}
				var $iter3_idx,$iter3_type,$iter3_nextval,v,$iter3_iter,$iter3_array,k;
				$iter3_iter = kwargs['items']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					k = $tupleassign2[0];
					v = $tupleassign2[1];
					inStr = inStr['$$replace']($p['sprintf']('{%s}', k), $p['str'](v));
				}
				return inStr;
			};
			processTr['__name__'] = 'processTr';

			processTr['__bind_type__'] = 0;
			processTr['__args__'] = [null,['kwargs'],['inStr']];
			if ($p['bool']($m['_runtimeTranslations']['keys']()['__contains__']($m['_currentLanguage']))) {
				if ($p['bool']($m['_runtimeTranslations']['__getitem__']($m['_currentLanguage'])['keys']()['__contains__'](key['lower']()))) {
					return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, $m['_runtimeTranslations']['__getitem__']($m['_currentLanguage'])['__getitem__'](key['lower']())]);
				}
			}
			if ($p['bool']($m['_lngMap']['keys']()['__contains__']($m['_currentLanguage']))) {
				if ($p['bool']($m['_lngMap']['__getitem__']($m['_currentLanguage'])['keys']()['__contains__'](key['lower']()))) {
					return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, $m['_lngMap']['__getitem__']($m['_currentLanguage'])['__getitem__'](key['lower']())]);
				}
			}
			return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, key]);
		};
		$m['translate']['__name__'] = 'translate';

		$m['translate']['__bind_type__'] = 0;
		$m['translate']['__args__'] = [null,['kwargs'],['key']];
		$m['addTranslation'] = function(lang, a, b) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
			var $and1,$and2,updateDict;
			if ($p['bool'](!$p['bool']($m['_runtimeTranslations']['keys']()['__contains__'](lang)))) {
				$m['_runtimeTranslations']['__setitem__'](lang, $p['dict']([]));
			}
			if ($p['bool'](($p['bool']($and1=$p['isinstance'](a, $p['str']))?!$p['op_is'](b, null):$and1))) {
				updateDict = $p['dict']([[a['lower'](), b]]);
			}
			else if ($p['bool']($p['isinstance'](a, $p['dict']))) {
				updateDict = function(){
					var $iter4_nextval,k,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['dict']();
				$iter4_iter = a['items']();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					$collcomp2['__setitem__'](k['lower'](), v);
				}

	return $collcomp2;}();
			}
			else {
				throw ($p['ValueError']('Invalid call to addTranslation'));
			}
			$m['_runtimeTranslations']['__getitem__'](lang)['update'](updateDict);
			return null;
		};
		$m['addTranslation']['__name__'] = 'addTranslation';

		$m['addTranslation']['__bind_type__'] = 0;
		$m['addTranslation']['__args__'] = [null,null,['lang'],['a'],['b', null]];
		$m['setLanguage'] = function(lang) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['_currentLanguage'] = lang;
			return null;
		};
		$m['setLanguage']['__name__'] = 'setLanguage';

		$m['setLanguage']['__bind_type__'] = 0;
		$m['setLanguage']['__args__'] = [null,null,['lang']];
		$m['getLanguage'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['_currentLanguage'];
		};
		$m['getLanguage']['__name__'] = 'getLanguage';

		$m['getLanguage']['__bind_type__'] = 0;
		$m['getLanguage']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end i18n */


/* end module: i18n */


/*
PYJS_DEPS: ['translations']
*/
