/* start module: i18n */
$pyjs['loaded_modules']['i18n'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['i18n']['__was_initialized__']) return $pyjs['loaded_modules']['i18n'];
	var $m = $pyjs['loaded_modules']['i18n'];
	$m['__repr__'] = function() { return '<module: i18n>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'i18n';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'i18n.py, line 1:\n    import translations';
	$m.__track_lines__[3] = 'i18n.py, line 3:\n    _currentLanguage = eval("navigator.language")';
	$m.__track_lines__[5] = 'i18n.py, line 5:\n    if not _currentLanguage:';
	$m.__track_lines__[6] = 'i18n.py, line 6:\n    _currentLanguage = eval("navigator.browserLanguage")';
	$m.__track_lines__[8] = 'i18n.py, line 8:\n    if not _currentLanguage:';
	$m.__track_lines__[9] = 'i18n.py, line 9:\n    _currentLanguage = "en"';
	$m.__track_lines__[11] = 'i18n.py, line 11:\n    if len(_currentLanguage) > 2:';
	$m.__track_lines__[12] = 'i18n.py, line 12:\n    _currentLanguage = _currentLanguage[:2]';
	$m.__track_lines__[14] = 'i18n.py, line 14:\n    print("Configured for language: %s" % _currentLanguage)';
	$m.__track_lines__[16] = 'i18n.py, line 16:\n    _runtimeTranslations = {}';
	$m.__track_lines__[17] = 'i18n.py, line 17:\n    _lngMap = {}';
	$m.__track_lines__[20] = 'i18n.py, line 20:\n    for key in dir( translations ):';
	$m.__track_lines__[21] = 'i18n.py, line 21:\n    if key.startswith("lng"):';
	$m.__track_lines__[22] = 'i18n.py, line 22:\n    _lngMap[ key[3:].lower() ] = { k.lower(): v for k,v in getattr( translations, key ).items() }';
	$m.__track_lines__[25] = 'i18n.py, line 25:\n    def translate( key, **kwargs ):';
	$m.__track_lines__[34] = 'i18n.py, line 34:\n    def processTr( inStr, **kwargs ):';
	$m.__track_lines__[35] = 'i18n.py, line 35:\n    for k,v in kwargs.items():';
	$m.__track_lines__[36] = 'i18n.py, line 36:\n    inStr = inStr.replace("{%s}" % k, str(v))';
	$m.__track_lines__[38] = 'i18n.py, line 38:\n    return inStr';
	$m.__track_lines__[40] = 'i18n.py, line 40:\n    if _currentLanguage in _runtimeTranslations.keys():';
	$m.__track_lines__[41] = 'i18n.py, line 41:\n    if key.lower() in _runtimeTranslations[_currentLanguage].keys():';
	$m.__track_lines__[42] = 'i18n.py, line 42:\n    return processTr(_runtimeTranslations[_currentLanguage][key.lower()], **kwargs)';
	$m.__track_lines__[44] = 'i18n.py, line 44:\n    if _currentLanguage in _lngMap.keys():';
	$m.__track_lines__[45] = 'i18n.py, line 45:\n    if key.lower() in _lngMap[_currentLanguage].keys():';
	$m.__track_lines__[46] = 'i18n.py, line 46:\n    return processTr(_lngMap[ _currentLanguage][key.lower()], **kwargs)';
	$m.__track_lines__[48] = 'i18n.py, line 48:\n    return processTr(key, **kwargs).upper() #FIXME!';
	$m.__track_lines__[51] = 'i18n.py, line 51:\n    def addTranslation( lang, a, b=None ):';
	$m.__track_lines__[55] = 'i18n.py, line 55:\n    if not lang in _runtimeTranslations.keys():';
	$m.__track_lines__[56] = 'i18n.py, line 56:\n    _runtimeTranslations[ lang ] = {}';
	$m.__track_lines__[57] = 'i18n.py, line 57:\n    if isinstance(a,str) and b is not None:';
	$m.__track_lines__[58] = 'i18n.py, line 58:\n    updateDict = { a.lower() : b }';
	$m.__track_lines__[60] = 'i18n.py, line 60:\n    updateDict = { k.lower(): v for k,v in a.items() }';
	$m.__track_lines__[62] = 'i18n.py, line 62:\n    raise ValueError("Invalid call to addTranslation")';
	$m.__track_lines__[63] = 'i18n.py, line 63:\n    _runtimeTranslations[ lang ].update( updateDict )';
	$m.__track_lines__[65] = 'i18n.py, line 65:\n    def setLanguage( lang ):';
	$m.__track_lines__[69] = 'i18n.py, line 69:\n    global _currentLanguage';
	$m.__track_lines__[70] = 'i18n.py, line 70:\n    _currentLanguage = lang';
	$m.__track_lines__[72] = 'i18n.py, line 72:\n    def getLanguage():';
	$m.__track_lines__[76] = 'i18n.py, line 76:\n    global _currentLanguage';
	$m.__track_lines__[77] = 'i18n.py, line 77:\n    return _currentLanguage';
	var $iter1_array,$iter1_nextval,$iter1_idx,$iter1_iter,$pyjs__trackstack_size_1,$iter1_type;

	$pyjs['track']['module']='i18n';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translations'] = $p['___import___']('translations', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['_currentLanguage'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return (typeof eval == "undefined"?$m['eval']:eval)('navigator.language');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs['track']['lineno']=5;
	if ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['bool'](!$p['bool']($m['_currentLanguage']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
		$pyjs['track']['lineno']=6;
		$m['_currentLanguage'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)('navigator.browserLanguage');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
		$pyjs['track']['lineno']=8;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool']($m['_currentLanguage']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
			$pyjs['track']['lineno']=9;
			$m['_currentLanguage'] = 'en';
		}
	}
	$pyjs['track']['lineno']=11;
	if ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['len']($m['_currentLanguage']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), 2) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
		$pyjs['track']['lineno']=12;
		$m['_currentLanguage'] = $p['__getslice']($m['_currentLanguage'], 0, 2);
	}
	$pyjs['track']['lineno']=14;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['sprintf']('Configured for language: %s', $m['_currentLanguage']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
	$pyjs['track']['lineno']=16;
	$m['_runtimeTranslations'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
	$pyjs['track']['lineno']=17;
	$m['_lngMap'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
	$pyjs['track']['lineno']=20;
	$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
	$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
	return (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dir']($m['translations']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
	$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
	while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
		$m['key'] = $iter1_nextval['$nextval'];
		$pyjs['track']['lineno']=21;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['key']['startswith']('lng');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_lngMap']['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($m['key'], 3, null)['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_2,$iter2_array;
	$collcomp1 = $p['dict']();
			$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($m['translations'], $m['key']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$m['k'] = $tupleassign1[0];
				$m['v'] = $tupleassign1[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['k']['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), $m['v']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='i18n';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		}
	}
	if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
		$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
		$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
	}
	$pyjs['track']['module']='i18n';
	$pyjs['track']['lineno']=25;
	$m['translate'] = function(key) {
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
		$pyjs['track']={'module':'i18n','lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='i18n';
		$pyjs['track']['lineno']=25;
		$pyjs['track']['lineno']=34;
		processTr = function(inStr) {
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
			var $iter3_idx,$iter3_type,$iter3_nextval,v,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,k;
			$pyjs['track']={'module':'i18n','lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='i18n';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return kwargs['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				k = $tupleassign2[0];
				v = $tupleassign2[1];
				$pyjs['track']['lineno']=36;
				inStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return inStr['$$replace']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('{%s}', k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='i18n';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=38;
			var $pyjs__ret = inStr;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		processTr['__name__'] = 'processTr';

		processTr['__bind_type__'] = 0;
		processTr['__args__'] = [null,['kwargs'],['inStr']];
		$pyjs['track']['lineno']=40;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_runtimeTranslations']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['__contains__']($m['_currentLanguage']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
			$pyjs['track']['lineno']=41;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_runtimeTranslations']['__getitem__']($m['_currentLanguage'])['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return key['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, $m['_runtimeTranslations']['__getitem__']($m['_currentLanguage'])['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return key['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})())]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
		}
		$pyjs['track']['lineno']=44;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_lngMap']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['__contains__']($m['_currentLanguage']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
			$pyjs['track']['lineno']=45;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_lngMap']['__getitem__']($m['_currentLanguage'])['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return key['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=46;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, $m['_lngMap']['__getitem__']($m['_currentLanguage'])['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return key['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})())]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
		}
		$pyjs['track']['lineno']=48;
		$pyjs['track']['lineno']=48;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $pyjs_kwargs_call(null, processTr, null, kwargs, [{}, key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()['upper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['translate']['__name__'] = 'translate';

	$m['translate']['__bind_type__'] = 0;
	$m['translate']['__args__'] = [null,['kwargs'],['key']];
	$pyjs['track']['lineno']=51;
	$m['addTranslation'] = function(lang, a, b) {
		if (typeof b == 'undefined') b=arguments['callee']['__args__'][4][1];
		var $and1,$and2,updateDict;
		$pyjs['track']={'module':'i18n','lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='i18n';
		$pyjs['track']['lineno']=51;
		$pyjs['track']['lineno']=55;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_runtimeTranslations']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()['__contains__'](lang)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_runtimeTranslations']['__setitem__'](lang, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
		}
		$pyjs['track']['lineno']=57;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](a, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})())?(b !== null):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
			$pyjs['track']['lineno']=58;
			updateDict = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), b]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](a, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
			$pyjs['track']['lineno']=60;
			updateDict = function(){
				var $iter4_nextval,k,$pyjs__trackstack_size_1,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return a['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				k = $tupleassign3[0];
				v = $tupleassign3[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return k['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})(), v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='i18n';

	return $collcomp2;}();
		}
		else {
			$pyjs['track']['lineno']=62;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ValueError']('Invalid call to addTranslation');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
		}
		$pyjs['track']['lineno']=63;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_runtimeTranslations']['__getitem__'](lang)['update'](updateDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['addTranslation']['__name__'] = 'addTranslation';

	$m['addTranslation']['__bind_type__'] = 0;
	$m['addTranslation']['__args__'] = [null,null,['lang'],['a'],['b', null]];
	$pyjs['track']['lineno']=65;
	$m['setLanguage'] = function(lang) {

		$pyjs['track']={'module':'i18n','lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='i18n';
		$pyjs['track']['lineno']=65;
		$pyjs['track']['lineno']=69;
		$pyjs['track']['lineno']=70;
		$m['_currentLanguage'] = lang;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['setLanguage']['__name__'] = 'setLanguage';

	$m['setLanguage']['__bind_type__'] = 0;
	$m['setLanguage']['__args__'] = [null,null,['lang']];
	$pyjs['track']['lineno']=72;
	$m['getLanguage'] = function() {

		$pyjs['track']={'module':'i18n','lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='i18n';
		$pyjs['track']['lineno']=72;
		$pyjs['track']['lineno']=76;
		$pyjs['track']['lineno']=77;
		$pyjs['track']['lineno']=77;
		var $pyjs__ret = $m['_currentLanguage'];
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getLanguage']['__name__'] = 'getLanguage';

	$m['getLanguage']['__bind_type__'] = 0;
	$m['getLanguage']['__args__'] = [null,null];
	return this;
}; /* end i18n */


/* end module: i18n */


/*
PYJS_DEPS: ['translations']
*/
