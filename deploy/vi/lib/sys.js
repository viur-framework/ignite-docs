/* start module: sys */
$pyjs['loaded_modules']['sys'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sys']['__was_initialized__']) return $pyjs['loaded_modules']['sys'];
	var $m = sys = $pyjs['loaded_modules']['sys'];
	$m['__repr__'] = function() { return '<module: sys>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'sys.py, line 1:\n    from __pyjamas__ import JS';
	$m.__track_lines__[4] = 'sys.py, line 4:\n    overrides = None # to be updated by app, on compile';
	$m.__track_lines__[7] = 'sys.py, line 7:\n    loadpath = None';
	$m.__track_lines__[9] = 'sys.py, line 9:\n    stacktrace = None';
	$m.__track_lines__[11] = 'sys.py, line 11:\n    appname = None';
	$m.__track_lines__[13] = "sys.py, line 13:\n    version_info = (2, 7, 2, 'pyjamas', 0)";
	$m.__track_lines__[14] = "sys.py, line 14:\n    subversion = ('Pyjamas', '', '')";
	$m.__track_lines__[16] = 'sys.py, line 16:\n    path = []';
	$m.__track_lines__[17] = 'sys.py, line 17:\n    argv = []';
	$m.__track_lines__[19] = 'sys.py, line 19:\n    platform = JS(\'$pyjs["platform"]\')';
	$m.__track_lines__[20] = "sys.py, line 20:\n    byteorder = 'little' # Needed in struct.py, assume all systems are little endian and not big endian";
	$m.__track_lines__[21] = 'sys.py, line 21:\n    maxint = 2147483647  # javascript bit operations are on 32 bit signed numbers';
	$m.__track_lines__[24] = 'sys.py, line 24:\n    def setloadpath(lp):';
	$m.__track_lines__[25] = 'sys.py, line 25:\n    global loadpath';
	$m.__track_lines__[26] = 'sys.py, line 26:\n    loadpath = lp';
	$m.__track_lines__[28] = 'sys.py, line 28:\n    def setappname(an):';
	$m.__track_lines__[29] = 'sys.py, line 29:\n    global appname';
	$m.__track_lines__[30] = 'sys.py, line 30:\n    appname = an';
	$m.__track_lines__[32] = 'sys.py, line 32:\n    def getloadpath():';
	$m.__track_lines__[33] = 'sys.py, line 33:\n    return loadpath';
	$m.__track_lines__[35] = 'sys.py, line 35:\n    def addoverride(module_name, path):';
	$m.__track_lines__[36] = 'sys.py, line 36:\n    overrides[module_name] = path';
	$m.__track_lines__[38] = 'sys.py, line 38:\n    def exc_info():';
	$m.__track_lines__[39] = 'sys.py, line 39:\n    le = JS(\'$pyjs["__last_exception__"]\')';
	$m.__track_lines__[40] = 'sys.py, line 40:\n    if not le:';
	$m.__track_lines__[41] = 'sys.py, line 41:\n    return (None, None, None)';
	$m.__track_lines__[42] = "sys.py, line 42:\n    if not hasattr(le.error, '__class__'):";
	$m.__track_lines__[43] = 'sys.py, line 43:\n    cls = None';
	$m.__track_lines__[45] = 'sys.py, line 45:\n    cls = le.error.__class__';
	$m.__track_lines__[46] = 'sys.py, line 46:\n    tb = JS(\'$pyjs["__last_exception_stack__"]\')';
	$m.__track_lines__[47] = 'sys.py, line 47:\n    if tb:';
	$m.__track_lines__[48] = 'sys.py, line 48:\n    start = tb.start';
	$m.__track_lines__[49] = 'sys.py, line 49:\n    while tb and start > 0:';
	$m.__track_lines__[50] = 'sys.py, line 50:\n    tb = tb.tb_next';
	$m.__track_lines__[51] = 'sys.py, line 51:\n    start -= 1';
	$m.__track_lines__[52] = 'sys.py, line 52:\n    return (cls, le.error, tb)';
	$m.__track_lines__[54] = 'sys.py, line 54:\n    def exc_clear():';
	$m.__track_lines__[55] = 'sys.py, line 55:\n    JS(\'$pyjs["__last_exception_stack__"] = $pyjs["__last_exception__"] = null;\')';
	$m.__track_lines__[58] = 'sys.py, line 58:\n    JS("""@{{_exception_from_trackstack}} = function (trackstack, start) {';
	$m.__track_lines__[88] = 'sys.py, line 88:\n    JS("""@{{save_exception_stack}} = function (start) {';
	$m.__track_lines__[97] = 'sys.py, line 97:\n    def trackstacklist(stack=None, limit=None):';
	$m.__track_lines__[98] = 'sys.py, line 98:\n    if stack is None:';
	$m.__track_lines__[99] = 'sys.py, line 99:\n    stack = JS(\'$pyjs["__active_exception_stack__"]\')';
	$m.__track_lines__[101] = 'sys.py, line 101:\n    if JS("""@{{stack}} instanceof Array"""):';
	$m.__track_lines__[102] = 'sys.py, line 102:\n    stack = _exception_from_trackstack(stack)';
	$m.__track_lines__[103] = 'sys.py, line 103:\n    if stack is None:';
	$m.__track_lines__[104] = "sys.py, line 104:\n    return ''";
	$m.__track_lines__[105] = 'sys.py, line 105:\n    stackstrings = []';
	$m.__track_lines__[106] = "sys.py, line 106:\n    msg = ''";
	$m.__track_lines__[107] = 'sys.py, line 107:\n    if limit is None:';
	$m.__track_lines__[108] = 'sys.py, line 108:\n    limit = -1';
	$m.__track_lines__[109] = 'sys.py, line 109:\n    while stack and limit:';
	$m.__track_lines__[110] = 'sys.py, line 110:\n    JS("@{{msg}} = $pyjs[\'loaded_modules\'][@{{stack}}[\'module\']][\'__track_lines__\'][@{{stack}}[\'lineno\']];")';
	$m.__track_lines__[111] = 'sys.py, line 111:\n    JS("if (typeof @{{msg}} == \'undefined\') @{{msg}} = null;")';
	$m.__track_lines__[112] = 'sys.py, line 112:\n    if msg:';
	$m.__track_lines__[113] = "sys.py, line 113:\n    stackstrings.append(msg + '\\n')";
	$m.__track_lines__[115] = "sys.py, line 115:\n    stackstrings.append('%s.py, line %d\\n' % (stack.module, stack.lineno))";
	$m.__track_lines__[116] = 'sys.py, line 116:\n    stack = stack.tb_next';
	$m.__track_lines__[117] = 'sys.py, line 117:\n    limit -= 1';
	$m.__track_lines__[118] = 'sys.py, line 118:\n    return stackstrings';
	$m.__track_lines__[120] = 'sys.py, line 120:\n    def trackstackstr(stack=None, limit=None):';
	$m.__track_lines__[121] = 'sys.py, line 121:\n    stackstrings = trackstacklist(stack, limit=limit)';
	$m.__track_lines__[122] = "sys.py, line 122:\n    return ''.join(stackstrings)";
	$m.__track_lines__[124] = 'sys.py, line 124:\n    def _get_traceback_list(err, tb=None, limit=None):';
	$m.__track_lines__[125] = "sys.py, line 125:\n    name = getattr(getattr(err, '__class__', None), '__name__', 'Unknown exception')";
	$m.__track_lines__[126] = "sys.py, line 126:\n    msg = ['%s: %s\\n' % (name, err), 'Traceback:\\n']";
	$m.__track_lines__[127] = 'sys.py, line 127:\n    try:';
	$m.__track_lines__[128] = 'sys.py, line 128:\n    msg.extend(trackstacklist(tb, limit=limit))';
	$m.__track_lines__[130] = 'sys.py, line 130:\n    pass';
	$m.__track_lines__[131] = 'sys.py, line 131:\n    return msg';
	$m.__track_lines__[133] = 'sys.py, line 133:\n    def _get_traceback(err, tb=None, limit=None):';
	$m.__track_lines__[134] = "sys.py, line 134:\n    return ''.join(_get_traceback_list(err, tb, limit=limit))";
	$m.__track_lines__[136] = 'sys.py, line 136:\n    def exit(val=None):';
	$m.__track_lines__[137] = 'sys.py, line 137:\n    raise SystemExit(val)';
	$m.__track_lines__[139] = 'sys.py, line 139:\n    class _StdStream(object):';
	$m.__track_lines__[140] = 'sys.py, line 140:\n    def __init__(self):';
	$m.__track_lines__[141] = "sys.py, line 141:\n    self.content = ''";
	$m.__track_lines__[143] = 'sys.py, line 143:\n    def flush(self):';
	$m.__track_lines__[144] = 'sys.py, line 144:\n    content = self.content';
	$m.__track_lines__[145] = 'sys.py, line 145:\n    JS("$p[\'_print_to_console\'](@{{content}})")';
	$m.__track_lines__[146] = "sys.py, line 146:\n    self.content = ''";
	$m.__track_lines__[148] = 'sys.py, line 148:\n    def write(self, output):';
	$m.__track_lines__[149] = 'sys.py, line 149:\n    self.content += output';
	$m.__track_lines__[150] = "sys.py, line 150:\n    if self.content.endswith('\\n'):";
	$m.__track_lines__[151] = 'sys.py, line 151:\n    self.flush()';
	$m.__track_lines__[153] = 'sys.py, line 153:\n    stdin  = None';
	$m.__track_lines__[154] = 'sys.py, line 154:\n    stdout = None';
	$m.__track_lines__[155] = 'sys.py, line 155:\n    stderr = None';
	$m.__track_lines__[157] = 'sys.py, line 157:\n    def sys_init():';
	$m.__track_lines__[158] = 'sys.py, line 158:\n    global stdout';
	$m.__track_lines__[159] = 'sys.py, line 159:\n    stdout = _StdStream()';
	$m.__track_lines__[161] = 'sys.py, line 161:\n    global stderr';
	$m.__track_lines__[162] = 'sys.py, line 162:\n    stderr = _StdStream()';
	$m.__track_lines__[164] = 'sys.py, line 164:\n    sys_init()';


	$pyjs['track']['module']='sys';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=4;
	$m['overrides'] = null;
	$pyjs['track']['lineno']=7;
	$m['loadpath'] = null;
	$pyjs['track']['lineno']=9;
	$m['stacktrace'] = null;
	$pyjs['track']['lineno']=11;
	$m['appname'] = null;
	$pyjs['track']['lineno']=13;
	$m['version_info'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['tuple']([2, 7, 2, 'pyjamas', 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs['track']['lineno']=14;
	$m['subversion'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['tuple'](['Pyjamas', '', '']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs['track']['lineno']=16;
	$m['path'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs['track']['lineno']=17;
	$m['argv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs['track']['lineno']=19;
	$m['platform'] = $pyjs["platform"];
	$pyjs['track']['lineno']=20;
	$m['byteorder'] = 'little';
	$pyjs['track']['lineno']=21;
	$m['maxint'] = 2147483647;
	$pyjs['track']['lineno']=24;
	$m['setloadpath'] = function(lp) {

		$pyjs['track']={'module':'sys','lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=25;
		$pyjs['track']['lineno']=26;
		$m['loadpath'] = lp;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['setloadpath']['__name__'] = 'setloadpath';

	$m['setloadpath']['__bind_type__'] = 0;
	$m['setloadpath']['__args__'] = [null,null,['lp']];
	$pyjs['track']['lineno']=28;
	$m['setappname'] = function(an) {

		$pyjs['track']={'module':'sys','lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=28;
		$pyjs['track']['lineno']=29;
		$pyjs['track']['lineno']=30;
		$m['appname'] = an;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['setappname']['__name__'] = 'setappname';

	$m['setappname']['__bind_type__'] = 0;
	$m['setappname']['__args__'] = [null,null,['an']];
	$pyjs['track']['lineno']=32;
	$m['getloadpath'] = function() {

		$pyjs['track']={'module':'sys','lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=32;
		$pyjs['track']['lineno']=33;
		$pyjs['track']['lineno']=33;
		var $pyjs__ret = $m['loadpath'];
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getloadpath']['__name__'] = 'getloadpath';

	$m['getloadpath']['__bind_type__'] = 0;
	$m['getloadpath']['__args__'] = [null,null];
	$pyjs['track']['lineno']=35;
	$m['addoverride'] = function(module_name, path) {

		$pyjs['track']={'module':'sys','lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=35;
		$pyjs['track']['lineno']=36;
		$m['overrides']['__setitem__'](module_name, path);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['addoverride']['__name__'] = 'addoverride';

	$m['addoverride']['__bind_type__'] = 0;
	$m['addoverride']['__args__'] = [null,null,['module_name'],['path']];
	$pyjs['track']['lineno']=38;
	$m['exc_info'] = function() {
		var le,$and1,$and2,start,$sub2,$sub1,tb,cls;
		$pyjs['track']={'module':'sys','lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=38;
		$pyjs['track']['lineno']=39;
		le = $pyjs["__last_exception__"];
		$pyjs['track']['lineno']=40;
		if ($p['bool'](!$p['bool'](le))) {
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=41;
			var $pyjs__ret = $p['tuple']([null, null, null]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=42;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['hasattr']($p['getattr'](le, 'error'), '__class__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
			$pyjs['track']['lineno']=43;
			cls = null;
		}
		else {
			$pyjs['track']['lineno']=45;
			cls = $p['getattr']($p['getattr'](le, 'error'), '__class__');
		}
		$pyjs['track']['lineno']=46;
		tb = $pyjs["__last_exception_stack__"];
		$pyjs['track']['lineno']=47;
		if ($p['bool'](tb)) {
			$pyjs['track']['lineno']=48;
			start = $p['getattr'](tb, 'start');
			$pyjs['track']['lineno']=49;
			while ($p['bool'](($p['bool']($and1=tb)?($p['cmp'](start, 0) == 1):$and1))) {
				$pyjs['track']['lineno']=50;
				tb = $p['getattr'](tb, 'tb_next');
				$pyjs['track']['lineno']=51;
				start = $p['__op_sub']($sub1=start,$sub2=1);
			}
		}
		$pyjs['track']['lineno']=52;
		$pyjs['track']['lineno']=52;
		var $pyjs__ret = $p['tuple']([cls, $p['getattr'](le, 'error'), tb]);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['exc_info']['__name__'] = 'exc_info';

	$m['exc_info']['__bind_type__'] = 0;
	$m['exc_info']['__args__'] = [null,null];
	$pyjs['track']['lineno']=54;
	$m['exc_clear'] = function() {

		$pyjs['track']={'module':'sys','lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=54;
		$pyjs['track']['lineno']=55;
$pyjs["__last_exception_stack__"] = $pyjs["__last_exception__"] = null;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	};
	$m['exc_clear']['__name__'] = 'exc_clear';

	$m['exc_clear']['__bind_type__'] = 0;
	$m['exc_clear']['__args__'] = [null,null];
	$pyjs['track']['lineno']=58;
$m['_exception_from_trackstack'] = function (trackstack, start) {
    if (typeof start == 'undefined') {
      start = 0;
    }
    var exception_stack = null;
    var top = null;
    for (var needle=0; needle < $pyjs['trackstack']['length']; needle++) {
        var t = new Object();
        for (var p in $pyjs['trackstack'][needle]) {
            t[p] = $pyjs['trackstack'][needle][p];
        }
        if (typeof $pyjs['loaded_modules'][t['module']]['__track_lines__'] != 'undefined') {
          var f_globals = $p['dict']();
          for (var name in $pyjs['loaded_modules'][t['module']]) {
            f_globals['__setitem__'](name, $pyjs['loaded_modules'][t['module']][name]);
          }
          t['tb_frame'] = {'f_globals': f_globals};
        }
        if (exception_stack == null) {
            exception_stack = top = t;
        } else {
          top['tb_next'] = t;
        }
        top = t;
    }
    top['tb_next'] = null;
    exception_stack['start'] = start;
    return exception_stack;
};
	$pyjs['track']['lineno']=88;
$m['save_exception_stack'] = function (start) {
    if ($pyjs['__active_exception_stack__']) {
        $pyjs['__active_exception_stack__']['start'] = start;
        return $pyjs['__active_exception_stack__'];
    }
    $pyjs['__active_exception_stack__'] = $m['_exception_from_trackstack']($pyjs['trackstack'], start);
    return $pyjs['__active_exception_stack__'];
};
	$pyjs['track']['lineno']=97;
	$m['trackstacklist'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments['callee']['__args__'][2][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][3][1];
		var $and3,$and4,stackstrings,$add2,$sub3,$add1,msg,$sub4;
		$pyjs['track']={'module':'sys','lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=97;
		$pyjs['track']['lineno']=98;
		if ($p['bool']((stack === null))) {
			$pyjs['track']['lineno']=99;
			stack = $pyjs["__active_exception_stack__"];
		}
		else {
			$pyjs['track']['lineno']=101;
			if ($p['bool'](stack instanceof Array)) {
				$pyjs['track']['lineno']=102;
				stack = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof _exception_from_trackstack == "undefined"?$m['_exception_from_trackstack']:_exception_from_trackstack)(stack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
		}
		$pyjs['track']['lineno']=103;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((stack === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
			$pyjs['track']['lineno']=104;
			$pyjs['track']['lineno']=104;
			var $pyjs__ret = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=105;
		stackstrings = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs['track']['lineno']=106;
		msg = '';
		$pyjs['track']['lineno']=107;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((limit === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
			$pyjs['track']['lineno']=108;
			limit = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		$pyjs['track']['lineno']=109;
		while ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($and3=stack)?limit:$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
			$pyjs['track']['lineno']=110;
msg = $pyjs['loaded_modules'][stack['module']]['__track_lines__'][stack['lineno']];
			$pyjs['track']['lineno']=111;
if (typeof msg == 'undefined') msg = null;
			$pyjs['track']['lineno']=112;
			if ($p['bool'](msg)) {
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return stackstrings['append']($p['__op_add']($add1=msg,$add2='\n'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=115;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return stackstrings['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s.py, line %d\n', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](stack, 'module'), $p['getattr'](stack, 'lineno')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			$pyjs['track']['lineno']=116;
			stack = $p['getattr'](stack, 'tb_next');
			$pyjs['track']['lineno']=117;
			limit = $p['__op_sub']($sub3=limit,$sub4=1);
		}
		$pyjs['track']['lineno']=118;
		$pyjs['track']['lineno']=118;
		var $pyjs__ret = stackstrings;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['trackstacklist']['__name__'] = 'trackstacklist';

	$m['trackstacklist']['__bind_type__'] = 0;
	$m['trackstacklist']['__args__'] = [null,null,['stack', null],['limit', null]];
	$pyjs['track']['lineno']=120;
	$m['trackstackstr'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments['callee']['__args__'][2][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][3][1];
		var stackstrings;
		$pyjs['track']={'module':'sys','lineno':120};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=120;
		$pyjs['track']['lineno']=121;
		stackstrings = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{'limit':limit}, stack]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		$pyjs['track']['lineno']=122;
		$pyjs['track']['lineno']=122;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](stackstrings);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['trackstackstr']['__name__'] = 'trackstackstr';

	$m['trackstackstr']['__bind_type__'] = 0;
	$m['trackstackstr']['__args__'] = [null,null,['stack', null],['limit', null]];
	$pyjs['track']['lineno']=124;
	$m['_get_traceback_list'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments['callee']['__args__'][3][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][4][1];
		var name,$pyjs_try_err,msg;
		$pyjs['track']={'module':'sys','lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=124;
		$pyjs['track']['lineno']=125;
		name = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['getattr'](err, '__class__', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), '__name__', 'Unknown exception');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
		$pyjs['track']['lineno']=126;
		msg = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['sprintf']('%s: %s\n', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([name, err]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 'Traceback:\n']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs['track']['lineno']=127;
		var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
		try {
			try {
				$pyjs['in_try_except'] += 1;
				$pyjs['track']['lineno']=128;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return msg['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{'limit':limit}, tb]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			} finally { $pyjs['in_try_except'] -= 1; }
		} catch($pyjs_try_err) {
			$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
			$pyjs['__active_exception_stack__'] = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sys';
			if (true) {
				$pyjs['track']['lineno']=130;
			}
		}
		$pyjs['track']['lineno']=131;
		$pyjs['track']['lineno']=131;
		var $pyjs__ret = msg;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['_get_traceback_list']['__name__'] = '_get_traceback_list';

	$m['_get_traceback_list']['__bind_type__'] = 0;
	$m['_get_traceback_list']['__args__'] = [null,null,['err'],['tb', null],['limit', null]];
	$pyjs['track']['lineno']=133;
	$m['_get_traceback'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments['callee']['__args__'][3][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'sys','lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=133;
		$pyjs['track']['lineno']=134;
		$pyjs['track']['lineno']=134;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $pyjs_kwargs_call(null, $m['_get_traceback_list'], null, null, [{'limit':limit}, err, tb]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['_get_traceback']['__name__'] = '_get_traceback';

	$m['_get_traceback']['__bind_type__'] = 0;
	$m['_get_traceback']['__args__'] = [null,null,['err'],['tb', null],['limit', null]];
	$pyjs['track']['lineno']=136;
	$m['exit'] = function(val) {
		if (typeof val == 'undefined') val=arguments['callee']['__args__'][2][1];

		$pyjs['track']={'module':'sys','lineno':136};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=136;
		$pyjs['track']['lineno']=137;
		$pyjs['__active_exception_stack__'] = null;
		throw ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['SystemExit'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['exit']['__name__'] = 'exit';

	$m['exit']['__bind_type__'] = 0;
	$m['exit']['__args__'] = [null,null,['val', null]];
	$pyjs['track']['lineno']=139;
	$m['_StdStream'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'sys';
		$pyjs['track']['lineno']=140;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'sys', 'lineno':140};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sys';
			$pyjs['track']['lineno']=140;
			$pyjs['track']['lineno']=141;
			self['content'] = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=143;
		$method = $pyjs__bind_method2('flush', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var content;
			$pyjs['track']={'module':'sys', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sys';
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=144;
			content = $p['getattr'](self, 'content');
			$pyjs['track']['lineno']=145;
$p['_print_to_console'](content)
			$pyjs['track']['lineno']=146;
			self['content'] = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$pyjs['track']['lineno']=148;
		$method = $pyjs__bind_method2('write', function(output) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				output = arguments[1];
			}
			var $add4,$add3;
			$pyjs['track']={'module':'sys', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sys';
			$pyjs['track']['lineno']=148;
			$pyjs['track']['lineno']=149;
			self['content'] = $p['__op_add']($add3=$p['getattr'](self, 'content'),$add4=output);
			$pyjs['track']['lineno']=150;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['content']['endswith']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=151;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['flush']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['output']]);
		$cls_definition['write'] = $method;
		$pyjs['track']['lineno']=139;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_StdStream', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=153;
	$m['stdin'] = null;
	$pyjs['track']['lineno']=154;
	$m['stdout'] = null;
	$pyjs['track']['lineno']=155;
	$m['stderr'] = null;
	$pyjs['track']['lineno']=157;
	$m['sys_init'] = function() {

		$pyjs['track']={'module':'sys','lineno':157};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='sys';
		$pyjs['track']['lineno']=157;
		$pyjs['track']['lineno']=158;
		$pyjs['track']['lineno']=159;
		$m['stdout'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_StdStream']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs['track']['lineno']=161;
		$pyjs['track']['lineno']=162;
		$m['stderr'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_StdStream']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['sys_init']['__name__'] = 'sys_init';

	$m['sys_init']['__bind_type__'] = 0;
	$m['sys_init']['__args__'] = [null,null];
	$pyjs['track']['lineno']=164;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['sys_init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
	return this;
}; /* end sys */


/* end module: sys */


