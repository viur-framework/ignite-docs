/* start module: utils */
$pyjs['loaded_modules']['utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['utils']['__was_initialized__']) return $pyjs['loaded_modules']['utils'];
	var $m = $pyjs['loaded_modules']['utils'];
	$m['__repr__'] = function() { return '<module: utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'utils';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'utils.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[3] = 'utils.py, line 3:\n    def formatString(format, data, structure = None, prefix = None, language = None, _rec = 0):';
	$m.__track_lines__[31] = 'utils.py, line 31:\n    if structure and isinstance(structure, list):';
	$m.__track_lines__[32] = 'utils.py, line 32:\n    structure = {k:v for k, v in structure}';
	$m.__track_lines__[34] = 'utils.py, line 34:\n    prefix = prefix or []';
	$m.__track_lines__[35] = 'utils.py, line 35:\n    res = format';
	$m.__track_lines__[37] = 'utils.py, line 37:\n    if isinstance(data,  list):';
	$m.__track_lines__[38] = 'utils.py, line 38:\n    return ", ".join([formatString(format, x, structure, prefix, language, _rec = _rec + 1) for x in data])';
	$m.__track_lines__[41] = 'utils.py, line 41:\n    return data';
	$m.__track_lines__[44] = 'utils.py, line 44:\n    return res';
	$m.__track_lines__[46] = 'utils.py, line 46:\n    for key in data.keys():';
	$m.__track_lines__[47] = 'utils.py, line 47:\n    val = data[key]';
	$m.__track_lines__[48] = 'utils.py, line 48:\n    struct = structure.get(key) if structure else None';
	$m.__track_lines__[53] = 'utils.py, line 53:\n    if isinstance(val, dict):';
	$m.__track_lines__[54] = 'utils.py, line 54:\n    if struct and ("$(%s)" % ".".join(prefix + [key])) in res:';
	$m.__track_lines__[55] = 'utils.py, line 55:\n    langs = struct.get("languages")';
	$m.__track_lines__[56] = 'utils.py, line 56:\n    if langs:';
	$m.__track_lines__[57] = 'utils.py, line 57:\n    if language and language in langs and language in val.keys():';
	$m.__track_lines__[58] = 'utils.py, line 58:\n    val = val[language]';
	$m.__track_lines__[60] = 'utils.py, line 60:\n    val = ", ".join(val.values())';
	$m.__track_lines__[63] = 'utils.py, line 63:\n    continue';
	$m.__track_lines__[66] = 'utils.py, line 66:\n    res = formatString(res, val, structure, prefix + [key], language, _rec = _rec + 1)';
	$m.__track_lines__[69] = 'utils.py, line 69:\n    res = formatString(res, val[0], structure, prefix + [key], language, _rec = _rec + 1)';
	$m.__track_lines__[71] = 'utils.py, line 71:\n    val = ", ".join(val)';
	$m.__track_lines__[73] = 'utils.py, line 73:\n    res = res.replace("$(%s)" % (".".join(prefix + [key])), str(val))';
	$m.__track_lines__[75] = 'utils.py, line 75:\n    return res';
	$m.__track_lines__[77] = 'utils.py, line 77:\n    def getImagePreview(data):';
	$m.__track_lines__[78] = 'utils.py, line 78:\n    if "mimetype" in data.keys() and isinstance(data["mimetype"], str) and data["mimetype"].startswith("image/svg"):';
	$m.__track_lines__[79] = 'utils.py, line 79:\n    return "/file/download/%s" % data["dlkey"]';
	$m.__track_lines__[81] = 'utils.py, line 81:\n    if data["servingurl"]:';
	$m.__track_lines__[82] = 'utils.py, line 82:\n    return data["servingurl"] + "=s150-c"';
	$m.__track_lines__[84] = 'utils.py, line 84:\n    return ""';
	$m.__track_lines__[86] = 'utils.py, line 86:\n    return None';
	$m.__track_lines__[88] = 'utils.py, line 88:\n    def setPreventUnloading(mode = True):';
	$m.__track_lines__[89] = 'utils.py, line 89:\n    count = eval("window.top.preventViUnloading")';
	$m.__track_lines__[91] = 'utils.py, line 91:\n    print("setPreventUnloading", count, mode)';
	$m.__track_lines__[93] = 'utils.py, line 93:\n    if not mode:';
	$m.__track_lines__[94] = 'utils.py, line 94:\n    if count == 0:';
	$m.__track_lines__[95] = 'utils.py, line 95:\n    return';
	$m.__track_lines__[97] = 'utils.py, line 97:\n    count += (1 if mode else -1)';
	$m.__track_lines__[99] = 'utils.py, line 99:\n    eval("window.top.preventViUnloading = %d;" % count)';
	$m.__track_lines__[100] = 'utils.py, line 100:\n    return count';


	$pyjs['track']['module']='utils';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$m['formatString'] = function(format, data, structure, prefix, language, _rec) {
		if (typeof structure == 'undefined') structure=arguments['callee']['__args__'][4][1];
		if (typeof prefix == 'undefined') prefix=arguments['callee']['__args__'][5][1];
		if (typeof language == 'undefined') language=arguments['callee']['__args__'][6][1];
		if (typeof _rec == 'undefined') _rec=arguments['callee']['__args__'][7][1];
		var $add12,$iter3_type,$iter3_idx,struct,val,res,$iter3_nextval,$or2,$iter3_iter,$and8,$and9,$or1,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$add13,$and10,$add10,$add11,key,$iter3_array,langs,$add14,$add3,$add5,$add6,$add7,$add4,$pyjs__trackstack_size_1,$add8,$add9;
		$pyjs['track']={'module':'utils','lineno':3};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='utils';
		$pyjs['track']['lineno']=3;
		$pyjs['track']['lineno']=31;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($and1=structure)?(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](structure, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
			$pyjs['track']['lineno']=32;
			structure = function(){
				var $iter1_nextval,$iter1_type,k,$pyjs__trackstack_size_1,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return structure;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='utils';

	return $collcomp1;}();
		}
		$pyjs['track']['lineno']=34;
		prefix = ($p['bool']($or1=prefix)?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
		$pyjs['track']['lineno']=35;
		res = format;
		$pyjs['track']['lineno']=37;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](data, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=38;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return ', '['join'](function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$add2,$iter2_idx,$add1,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add1=_rec,$add2=1)}, format, x, structure, prefix, language]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='utils';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](data, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=41;
			var $pyjs__ret = data;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool'](data));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=44;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=46;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			key = $iter3_nextval['$nextval'];
			$pyjs['track']['lineno']=47;
			val = data['__getitem__'](key);
			$pyjs['track']['lineno']=48;
			struct = ($p['bool'](structure)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return structure['get'](key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) : (null));
			$pyjs['track']['lineno']=53;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
				$pyjs['track']['lineno']=54;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and3=struct)?res['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('$(%s)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return '.'['join']($p['__op_add']($add3=prefix,$add4=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs['track']['lineno']=55;
					langs = (function(){try{try{$pyjs['in_try_except'] += 1;
					return struct['get']('languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					$pyjs['track']['lineno']=56;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](langs);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
						$pyjs['track']['lineno']=57;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and5=language)?($p['bool']($and6=langs['__contains__'](language))?(function(){try{try{$pyjs['in_try_except'] += 1;
						return val['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__contains__'](language):$and6):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
							$pyjs['track']['lineno']=58;
							val = val['__getitem__'](language);
						}
						else {
							$pyjs['track']['lineno']=60;
							val = (function(){try{try{$pyjs['in_try_except'] += 1;
							return ', '['join']((function(){try{try{$pyjs['in_try_except'] += 1;
							return val['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
						}
					}
					else {
						$pyjs['track']['lineno']=63;
						continue;
					}
				}
				else {
					$pyjs['track']['lineno']=66;
					res = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add7=_rec,$add8=1)}, res, val, structure, $p['__op_add']($add5=prefix,$add6=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()), language]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and8=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})())?($p['bool']($and9=($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), 0) == 1))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val['__getitem__'](0), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})():$and9):$and8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=69;
				res = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add11=_rec,$add12=1)}, res, val['__getitem__'](0), structure, $p['__op_add']($add9=prefix,$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()), language]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=71;
				val = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ', '['join'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			}
			$pyjs['track']['lineno']=73;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return res['$$replace']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('$(%s)', (function(){try{try{$pyjs['in_try_except'] += 1;
			return '.'['join']($p['__op_add']($add13=prefix,$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='utils';
		$pyjs['track']['lineno']=75;
		$pyjs['track']['lineno']=75;
		var $pyjs__ret = res;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['formatString']['__name__'] = 'formatString';

	$m['formatString']['__bind_type__'] = 0;
	$m['formatString']['__args__'] = [null,null,['format'],['data'],['structure', null],['prefix', null],['language', null],['_rec', 0]];
	$pyjs['track']['lineno']=77;
	$m['getImagePreview'] = function(data) {
		var $add15,$and12,$and13,$add16,$and11;
		$pyjs['track']={'module':'utils','lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='utils';
		$pyjs['track']['lineno']=77;
		$pyjs['track']['lineno']=78;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($and11=(function(){try{try{$pyjs['in_try_except'] += 1;
		return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()['__contains__']('mimetype'))?($p['bool']($and12=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](data['__getitem__']('mimetype'), $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
		return data['__getitem__']('mimetype')['startswith']('image/svg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})():$and12):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=79;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('/file/download/%s', data['__getitem__']('dlkey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()['__contains__']('servingurl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
			$pyjs['track']['lineno']=81;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](data['__getitem__']('servingurl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=82;
				var $pyjs__ret = $p['__op_add']($add15=data['__getitem__']('servingurl'),$add16='=s150-c');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=84;
			$pyjs['track']['lineno']=84;
			var $pyjs__ret = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=86;
		$pyjs['track']['lineno']=86;
		var $pyjs__ret = null;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getImagePreview']['__name__'] = 'getImagePreview';

	$m['getImagePreview']['__bind_type__'] = 0;
	$m['getImagePreview']['__args__'] = [null,null,['data']];
	$pyjs['track']['lineno']=88;
	$m['setPreventUnloading'] = function(mode) {
		if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][2][1];
		var count,$add17,$add18;
		$pyjs['track']={'module':'utils','lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='utils';
		$pyjs['track']['lineno']=88;
		$pyjs['track']['lineno']=89;
		count = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)('window.top.preventViUnloading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
		$pyjs['track']['lineno']=91;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple'](['setPreventUnloading', count, mode]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
		$pyjs['track']['lineno']=93;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool'](mode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
			$pyjs['track']['lineno']=94;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](count, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
				$pyjs['track']['lineno']=95;
				$pyjs['track']['lineno']=95;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
		}
		$pyjs['track']['lineno']=97;
		count = $p['__op_add']($add17=count,$add18=($p['bool'](mode)? (1) : ((typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))));
		$pyjs['track']['lineno']=99;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['sprintf']('window.top.preventViUnloading = %d;', count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
		$pyjs['track']['lineno']=100;
		$pyjs['track']['lineno']=100;
		var $pyjs__ret = count;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['setPreventUnloading']['__name__'] = 'setPreventUnloading';

	$m['setPreventUnloading']['__bind_type__'] = 0;
	$m['setPreventUnloading']['__args__'] = [null,null,['mode', true]];
	return this;
}; /* end utils */


/* end module: utils */


