/* start module: string */
$pyjs['loaded_modules']['string'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['string']['__was_initialized__']) return $pyjs['loaded_modules']['string'];
	var $m = $pyjs['loaded_modules']['string'];
	$m['__repr__'] = function() { return '<module: string>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'string';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'string.py, line 1:\n    """The code is taken from the python2.6 tring module.';
	$m.__track_lines__[20] = "string.py, line 20:\n    whitespace = ' \\t\\n\\r\\v\\f'";
	$m.__track_lines__[21] = "string.py, line 21:\n    lowercase = 'abcdefghijklmnopqrstuvwxyz'";
	$m.__track_lines__[22] = "string.py, line 22:\n    uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'";
	$m.__track_lines__[23] = 'string.py, line 23:\n    letters = lowercase + uppercase';
	$m.__track_lines__[24] = 'string.py, line 24:\n    ascii_lowercase = lowercase';
	$m.__track_lines__[25] = 'string.py, line 25:\n    ascii_uppercase = uppercase';
	$m.__track_lines__[26] = 'string.py, line 26:\n    ascii_letters = ascii_lowercase + ascii_uppercase';
	$m.__track_lines__[27] = "string.py, line 27:\n    digits = '0123456789'";
	$m.__track_lines__[28] = "string.py, line 28:\n    hexdigits = digits + 'abcdef' + 'ABCDEF'";
	$m.__track_lines__[29] = "string.py, line 29:\n    octdigits = '01234567'";
	$m.__track_lines__[30] = 'string.py, line 30:\n    punctuation = """!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"""';
	$m.__track_lines__[31] = 'string.py, line 31:\n    printable = digits + letters + punctuation + whitespace';
	$m.__track_lines__[35] = 'string.py, line 35:\n    l = map(chr, xrange(256))';
	$m.__track_lines__[36] = "string.py, line 36:\n    _idmap = str('').join(l)";
	$m.__track_lines__[37] = 'string.py, line 37:\n    del l';
	$m.__track_lines__[42] = 'string.py, line 42:\n    def capwords(s, sep=None):';
	$m.__track_lines__[53] = 'string.py, line 53:\n    if sep is None:';
	$m.__track_lines__[54] = "string.py, line 54:\n    sep = ' '";
	$m.__track_lines__[55] = 'string.py, line 55:\n    return sep.join(x.capitalize() for x in s.split(sep))';
	$m.__track_lines__[60] = 'string.py, line 60:\n    _idmapL = None';
	$m.__track_lines__[61] = 'string.py, line 61:\n    def maketrans(fromstr, tostr):';
	$m.__track_lines__[69] = 'string.py, line 69:\n    if len(fromstr) != len(tostr):';
	$m.__track_lines__[70] = 'string.py, line 70:\n    raise ValueError, "maketrans arguments must have same length"';
	$m.__track_lines__[71] = 'string.py, line 71:\n    global _idmapL';
	$m.__track_lines__[72] = 'string.py, line 72:\n    if not _idmapL:';
	$m.__track_lines__[73] = 'string.py, line 73:\n    _idmapL = list(_idmap)';
	$m.__track_lines__[74] = 'string.py, line 74:\n    L = _idmapL[:]';
	$m.__track_lines__[75] = 'string.py, line 75:\n    fromstr = map(ord, fromstr)';
	$m.__track_lines__[76] = 'string.py, line 76:\n    for i in range(len(fromstr)):';
	$m.__track_lines__[77] = 'string.py, line 77:\n    L[fromstr[i]] = tostr[i]';
	$m.__track_lines__[78] = "string.py, line 78:\n    return ''.join(L)";
	$m.__track_lines__[83] = 'string.py, line 83:\n    import re as _re';
	$m.__track_lines__[85] = 'string.py, line 85:\n    class _multimap:';
	$m.__track_lines__[91] = 'string.py, line 91:\n    def __init__(self, primary, secondary):';
	$m.__track_lines__[92] = 'string.py, line 92:\n    self._primary = primary';
	$m.__track_lines__[93] = 'string.py, line 93:\n    self._secondary = secondary';
	$m.__track_lines__[95] = 'string.py, line 95:\n    def __getitem__(self, key):';
	$m.__track_lines__[96] = 'string.py, line 96:\n    try:';
	$m.__track_lines__[97] = 'string.py, line 97:\n    return self._primary[key]';
	$m.__track_lines__[99] = 'string.py, line 99:\n    return self._secondary[key]';
	$m.__track_lines__[107] = 'string.py, line 107:\n    class Template:';
	$m.__track_lines__[110] = "string.py, line 110:\n    delimiter = r'$'    #!$%^*@#~?|+ all work, &=/ do not";
	$m.__track_lines__[111] = "string.py, line 111:\n    idpattern = r'[_a-z][_a-z0-9]*'";
	$m.__track_lines__[112] = "string.py, line 112:\n    regexp = r'%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())'";
	$m.__track_lines__[114] = 'string.py, line 114:\n    def __init__(self, template):';
	$m.__track_lines__[115] = 'string.py, line 115:\n    self._definePattern()';
	$m.__track_lines__[116] = 'string.py, line 116:\n    self.template = template';
	$m.__track_lines__[118] = 'string.py, line 118:\n    def _definePattern(self):';
	$m.__track_lines__[119] = 'string.py, line 119:\n    regexp = self.regexp % {';
	$m.__track_lines__[123] = 'string.py, line 123:\n    self.pattern = _re.compile(regexp, _re.IGNORECASE )';
	$m.__track_lines__[127] = 'string.py, line 127:\n    def _invalid(self, mo):';
	$m.__track_lines__[128] = 'string.py, line 128:\n    i = mo.start()';
	$m.__track_lines__[129] = 'string.py, line 129:\n    j = min(i+10,len(self.template))';
	$m.__track_lines__[130] = "string.py, line 130:\n    raise ValueError('Invalid placeholder in string: ' + self.template[i:j])";
	$m.__track_lines__[132] = 'string.py, line 132:\n    def substitute(self, *args, **kws):';
	$m.__track_lines__[133] = 'string.py, line 133:\n    if len(args) > 1:';
	$m.__track_lines__[134] = "string.py, line 134:\n    raise TypeError('Too many positional arguments')";
	$m.__track_lines__[135] = 'string.py, line 135:\n    if not args:';
	$m.__track_lines__[136] = 'string.py, line 136:\n    mapping = kws';
	$m.__track_lines__[138] = 'string.py, line 138:\n    mapping = _multimap(kws, args[0])';
	$m.__track_lines__[140] = 'string.py, line 140:\n    mapping = args[0]';
	$m.__track_lines__[142] = 'string.py, line 142:\n    def convert(mo):';
	$m.__track_lines__[145] = 'string.py, line 145:\n    named = mo.group(2) or mo.group(3)';
	$m.__track_lines__[146] = 'string.py, line 146:\n    if named is not None:';
	$m.__track_lines__[147] = 'string.py, line 147:\n    val = mapping[named]';
	$m.__track_lines__[150] = "string.py, line 150:\n    return '%s' % (val,)";
	$m.__track_lines__[151] = 'string.py, line 151:\n    if mo.group(1) is not None:';
	$m.__track_lines__[152] = 'string.py, line 152:\n    return self.delimiter';
	$m.__track_lines__[153] = 'string.py, line 153:\n    if mo.group(4) is not None:';
	$m.__track_lines__[154] = 'string.py, line 154:\n    self._invalid(mo)';
	$m.__track_lines__[155] = "string.py, line 155:\n    raise ValueError('Unrecognized named group in pattern',";
	$m.__track_lines__[157] = 'string.py, line 157:\n    return self.pattern.sub(convert, self.template)';
	$m.__track_lines__[159] = 'string.py, line 159:\n    def safe_substitute(self, *args, **kws):';
	$m.__track_lines__[160] = 'string.py, line 160:\n    if len(args) > 1:';
	$m.__track_lines__[161] = "string.py, line 161:\n    raise TypeError('Too many positional arguments')";
	$m.__track_lines__[162] = 'string.py, line 162:\n    if not args:';
	$m.__track_lines__[163] = 'string.py, line 163:\n    mapping = kws';
	$m.__track_lines__[165] = 'string.py, line 165:\n    mapping = _multimap(kws, args[0])';
	$m.__track_lines__[167] = 'string.py, line 167:\n    mapping = args[0]';
	$m.__track_lines__[169] = 'string.py, line 169:\n    def convert(mo):';
	$m.__track_lines__[170] = 'string.py, line 170:\n    named = mo.group(2)';
	$m.__track_lines__[171] = 'string.py, line 171:\n    if named is not None:';
	$m.__track_lines__[172] = 'string.py, line 172:\n    try:';
	$m.__track_lines__[175] = "string.py, line 175:\n    return '%s' % (mapping[named],)";
	$m.__track_lines__[177] = 'string.py, line 177:\n    return self.delimiter + named';
	$m.__track_lines__[178] = 'string.py, line 178:\n    braced = mo.group(3)';
	$m.__track_lines__[179] = 'string.py, line 179:\n    if braced is not None:';
	$m.__track_lines__[180] = 'string.py, line 180:\n    try:';
	$m.__track_lines__[181] = "string.py, line 181:\n    return '%s' % (mapping[braced],)";
	$m.__track_lines__[183] = "string.py, line 183:\n    return self.delimiter + '{' + braced + '}'";
	$m.__track_lines__[184] = 'string.py, line 184:\n    if mo.group(1) is not None:';
	$m.__track_lines__[185] = 'string.py, line 185:\n    return self.delimiter';
	$m.__track_lines__[186] = 'string.py, line 186:\n    if mo.group(4) is not None:';
	$m.__track_lines__[187] = 'string.py, line 187:\n    return self.delimiter';
	$m.__track_lines__[188] = "string.py, line 188:\n    raise ValueError('Unrecognized named group in pattern',";
	$m.__track_lines__[190] = 'string.py, line 190:\n    return self.pattern.sub(convert, self.template)';
	var $add14,$add11,$add12,$add13,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;

	$pyjs['track']['module']='string';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=20;
	$m['whitespace'] = ' \t\n\r\x0b\x0c';
	$pyjs['track']['lineno']=21;
	$m['lowercase'] = 'abcdefghijklmnopqrstuvwxyz';
	$pyjs['track']['lineno']=22;
	$m['uppercase'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$pyjs['track']['lineno']=23;
	$m['letters'] = $p['__op_add']($add1=$m['lowercase'],$add2=$m['uppercase']);
	$pyjs['track']['lineno']=24;
	$m['ascii_lowercase'] = $m['lowercase'];
	$pyjs['track']['lineno']=25;
	$m['ascii_uppercase'] = $m['uppercase'];
	$pyjs['track']['lineno']=26;
	$m['ascii_letters'] = $p['__op_add']($add3=$m['ascii_lowercase'],$add4=$m['ascii_uppercase']);
	$pyjs['track']['lineno']=27;
	$m['digits'] = '0123456789';
	$pyjs['track']['lineno']=28;
	$m['hexdigits'] = $p['__op_add']($add7=$p['__op_add']($add5=$m['digits'],$add6='abcdef'),$add8='ABCDEF');
	$pyjs['track']['lineno']=29;
	$m['octdigits'] = '01234567';
	$pyjs['track']['lineno']=30;
	$m['punctuation'] = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	$pyjs['track']['lineno']=31;
	$m['printable'] = $p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$m['digits'],$add10=$m['letters']),$add12=$m['punctuation']),$add14=$m['whitespace']);
	$pyjs['track']['lineno']=35;
	$m['l'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['map']($p['chr'], (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['xrange'](256);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs['track']['lineno']=36;
	$m['_idmap'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['str']('');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['join']($m['l']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs['track']['lineno']=37;
	delete $m['l'];
	$pyjs['track']['lineno']=42;
	$m['capwords'] = function(s, sep) {
		if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
		var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,x,$iter1_idx;
		$pyjs['track']={'module':'string','lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='string';
		$pyjs['track']['lineno']=42;
		$pyjs['track']['lineno']=53;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((sep === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
			$pyjs['track']['lineno']=54;
			sep = ' ';
		}
		$pyjs['track']['lineno']=55;
		$pyjs['track']['lineno']=55;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return sep['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$iter1_iter = s['$$split'](sep);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						x = $iter1_nextval['$nextval'];
						$yield_value = x['capitalize']();
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

				return;
			};
			return $generator;
		}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['capwords']['__name__'] = 'capwords';

	$m['capwords']['__bind_type__'] = 0;
	$m['capwords']['__args__'] = [null,null,['s'],['sep', null]];
	$pyjs['track']['lineno']=60;
	$m['_idmapL'] = null;
	$pyjs['track']['lineno']=61;
	$m['maketrans'] = function(fromstr, tostr) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,L,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs['track']={'module':'string','lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='string';
		$pyjs['track']['lineno']=61;
		$pyjs['track']['lineno']=69;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](fromstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](tostr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
			$pyjs['track']['lineno']=70;
			$pyjs['__active_exception_stack__'] = null;

			var $pyjs__raise_expr1 = $p['ValueError'];
			var $pyjs__raise_expr2 = 'maketrans arguments must have same length';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		$pyjs['track']['lineno']=71;
		$pyjs['track']['lineno']=72;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool']($m['_idmapL']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
			$pyjs['track']['lineno']=73;
			$m['_idmapL'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']($m['_idmap']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
		}
		$pyjs['track']['lineno']=74;
		L = $p['__getslice']($m['_idmapL'], 0, null);
		$pyjs['track']['lineno']=75;
		fromstr = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['map']($p['ord'], fromstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
		$pyjs['track']['lineno']=76;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['range']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](fromstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return L['__setitem__'](fromstr['__getitem__'](i), tostr['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='string';
		$pyjs['track']['lineno']=78;
		$pyjs['track']['lineno']=78;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](L);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['maketrans']['__name__'] = 'maketrans';

	$m['maketrans']['__bind_type__'] = 0;
	$m['maketrans']['__args__'] = [null,null,['fromstr'],['tostr']];
	$pyjs['track']['lineno']=83;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['_re'] = $p['___import___']('re', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=85;
	$m['_multimap'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'string';
		$pyjs['track']['lineno']=91;
		$method = $pyjs__bind_method2('__init__', function(primary, secondary) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				primary = arguments[1];
				secondary = arguments[2];
			}

			$pyjs['track']={'module':'string', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=92;
			self['_primary'] = primary;
			$pyjs['track']['lineno']=93;
			self['_secondary'] = secondary;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['primary'],['secondary']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=95;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $pyjs_try_err;
			$pyjs['track']={'module':'string', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=96;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=97;
					$pyjs['track']['lineno']=97;
					var $pyjs__ret = $p['getattr'](self, '_primary')['__getitem__'](key);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
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
				$pyjs['track']['module']='string';
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					$pyjs['track']['lineno']=99;
					$pyjs['track']['lineno']=99;
					var $pyjs__ret = $p['getattr'](self, '_secondary')['__getitem__'](key);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$pyjs['track']['lineno']=85;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_multimap', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=107;
	$m['Template'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'string';
		$pyjs['track']['lineno']=110;
		$cls_definition['delimiter'] = '$';
		$pyjs['track']['lineno']=111;
		$cls_definition['idpattern'] = '[_a-z][_a-z0-9]*';
		$pyjs['track']['lineno']=112;
		$cls_definition['regexp'] = '%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())';
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('__init__', function(template) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				template = arguments[1];
			}

			$pyjs['track']={'module':'string', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_definePattern']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=116;
			self['template'] = template;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['template']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=118;
		$method = $pyjs__bind_method2('_definePattern', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add15,$add16,$mod1,$mod2,regexp;
			$pyjs['track']={'module':'string', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=118;
			$pyjs['track']['lineno']=119;
			regexp = (typeof ($mod1=$p['getattr'](self, 'regexp'))==typeof ($mod2=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['delim', $p['__op_add']($add15='\\',$add16=$p['getattr'](self, 'delimiter'))], ['id', $p['getattr'](self, 'idpattern')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			$pyjs['track']['lineno']=123;
			self['pattern'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_definePattern'] = $method;
		$pyjs['track']['lineno']=127;
		$method = $pyjs__bind_method2('_invalid', function(mo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mo = arguments[1];
			}
			var i,$add20,j,$add19,$add17,$add18;
			$pyjs['track']={'module':'string', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			i = (function(){try{try{$pyjs['in_try_except'] += 1;
			return mo['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=129;
			j = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['min']($p['__op_add']($add17=i,$add18=10), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'template'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=130;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ValueError']($p['__op_add']($add19='Invalid placeholder in string: ',$add20=$p['__getslice']($p['getattr'](self, 'template'), i, j)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['mo']]);
		$cls_definition['_invalid'] = $method;
		$pyjs['track']['lineno']=132;
		$method = $pyjs__bind_method2('substitute', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					var kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			}
			if (typeof kws == 'undefined') {
				kws = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kws = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var convert,mapping;
			$pyjs['track']={'module':'string', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=132;
			$pyjs['track']['lineno']=133;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs['track']['lineno']=134;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('Too many positional arguments');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
			}
			$pyjs['track']['lineno']=135;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](args));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=136;
				mapping = kws;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](kws);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=138;
				mapping = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_multimap'](kws, args['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=140;
				mapping = args['__getitem__'](0);
			}
			$pyjs['track']['lineno']=142;
			convert = function(mo) {
				var $or1,named,val,$or2;
				$pyjs['track']={'module':'string','lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='string';
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=145;
				named = ($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})())?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
				$pyjs['track']['lineno']=146;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((named !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
					$pyjs['track']['lineno']=147;
					val = mapping['__getitem__'](named);
					$pyjs['track']['lineno']=150;
					$pyjs['track']['lineno']=150;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=151;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
					$pyjs['track']['lineno']=152;
					$pyjs['track']['lineno']=152;
					var $pyjs__ret = $p['getattr'](self, 'delimiter');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=153;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs['track']['lineno']=154;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_invalid'](mo);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				}
				$pyjs['track']['lineno']=155;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			};
			convert['__name__'] = 'convert';

			convert['__bind_type__'] = 0;
			convert['__args__'] = [null,null,['mo']];
			$pyjs['track']['lineno']=157;
			$pyjs['track']['lineno']=157;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, ['args',['kws'],['self']]);
		$cls_definition['substitute'] = $method;
		$pyjs['track']['lineno']=159;
		$method = $pyjs__bind_method2('safe_substitute', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					var kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			}
			if (typeof kws == 'undefined') {
				kws = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kws = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var convert,mapping;
			$pyjs['track']={'module':'string', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='string';
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=160;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=161;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('Too many positional arguments');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
			}
			$pyjs['track']['lineno']=162;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](args));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs['track']['lineno']=163;
				mapping = kws;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](kws);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
				$pyjs['track']['lineno']=165;
				mapping = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_multimap'](kws, args['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=167;
				mapping = args['__getitem__'](0);
			}
			$pyjs['track']['lineno']=169;
			convert = function(mo) {
				var $add28,named,$add21,braced,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$add23;
				$pyjs['track']={'module':'string','lineno':169};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='string';
				$pyjs['track']['lineno']=169;
				$pyjs['track']['lineno']=170;
				named = (function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['track']['lineno']=171;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((named !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs['track']['lineno']=172;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=175;
							$pyjs['track']['lineno']=175;
							var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['sprintf']('%s', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([mapping['__getitem__'](named)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
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
						$pyjs['track']['module']='string';
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							$pyjs['track']['lineno']=177;
							$pyjs['track']['lineno']=177;
							var $pyjs__ret = $p['__op_add']($add21=$p['getattr'](self, 'delimiter'),$add22=named);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=178;
				braced = (function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=179;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((braced !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
					$pyjs['track']['lineno']=180;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=181;
							$pyjs['track']['lineno']=181;
							var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['sprintf']('%s', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([mapping['__getitem__'](braced)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
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
						$pyjs['track']['module']='string';
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							$pyjs['track']['lineno']=183;
							$pyjs['track']['lineno']=183;
							var $pyjs__ret = $p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23=$p['getattr'](self, 'delimiter'),$add24='{'),$add26=braced),$add28='}');
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=184;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
					$pyjs['track']['lineno']=185;
					$pyjs['track']['lineno']=185;
					var $pyjs__ret = $p['getattr'](self, 'delimiter');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=186;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
				return mo['group'](4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
					$pyjs['track']['lineno']=187;
					$pyjs['track']['lineno']=187;
					var $pyjs__ret = $p['getattr'](self, 'delimiter');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=188;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			};
			convert['__name__'] = 'convert';

			convert['__bind_type__'] = 0;
			convert['__args__'] = [null,null,['mo']];
			$pyjs['track']['lineno']=190;
			$pyjs['track']['lineno']=190;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, ['args',['kws'],['self']]);
		$cls_definition['safe_substitute'] = $method;
		$pyjs['track']['lineno']=107;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Template', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end string */


/* end module: string */


/*
PYJS_DEPS: ['re']
*/
