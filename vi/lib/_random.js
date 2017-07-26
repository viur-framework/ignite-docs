/* start module: _random */
$pyjs['loaded_modules']['_random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['_random']['__was_initialized__']) return $pyjs['loaded_modules']['_random'];
	var $m = $pyjs['loaded_modules']['_random'];
	$m['__repr__'] = function() { return '<module: _random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '_random';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = '_random.py, line 1:\n    from __pyjamas__ import JS';
	$m.__track_lines__[3] = '_random.py, line 3:\n    one = long(1)';
	$m.__track_lines__[5] = '_random.py, line 5:\n    class Random(object):';
	$m.__track_lines__[6] = '_random.py, line 6:\n    seed = None';
	$m.__track_lines__[8] = '_random.py, line 8:\n    def getrandbits(self, k):';
	$m.__track_lines__[9] = '_random.py, line 9:\n    s = ""';
	$m.__track_lines__[10] = '_random.py, line 10:\n    JS("""';
	$m.__track_lines__[17] = '_random.py, line 17:\n    rand = long(s, 32)';
	$m.__track_lines__[18] = '_random.py, line 18:\n    mask = one.__lshift__(k).__sub__(one)';
	$m.__track_lines__[19] = '_random.py, line 19:\n    return rand.__and__(mask)';
	$m.__track_lines__[21] = '_random.py, line 21:\n    def getstate(self):';
	$m.__track_lines__[22] = '_random.py, line 22:\n    raise NotImplementedError("getstate")';
	$m.__track_lines__[24] = '_random.py, line 24:\n    def jumpahead(self, n):';
	$m.__track_lines__[25] = '_random.py, line 25:\n    JS("""';
	$m.__track_lines__[29] = '_random.py, line 29:\n    def random(self):';
	$m.__track_lines__[30] = '_random.py, line 30:\n    if self.seed is None:';
	$m.__track_lines__[31] = '_random.py, line 31:\n    return JS("Math[\'random\']()")';
	$m.__track_lines__[32] = '_random.py, line 32:\n    seed = self.seed';
	$m.__track_lines__[33] = '_random.py, line 33:\n    self.seed = None';
	$m.__track_lines__[34] = '_random.py, line 34:\n    return JS("Math[\'random\'](@{{seed}})")';
	$m.__track_lines__[36] = '_random.py, line 36:\n    def seed(self, n = None):';
	$m.__track_lines__[37] = '_random.py, line 37:\n    self.seed = n';
	$m.__track_lines__[39] = '_random.py, line 39:\n    def setstate(self, state):';
	$m.__track_lines__[40] = '_random.py, line 40:\n    raise NotImplementedError("setstate")';


	$pyjs['track']['module']='_random';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$m['one'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['float_int'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs['track']['lineno']=5;
	$m['Random'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = '_random';
		$pyjs['track']['lineno']=6;
		$cls_definition['seed'] = null;
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('getrandbits', function(k) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var s,mask,rand;
			$pyjs['track']={'module':'_random', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			s = '';
			$pyjs['track']['lineno']=10;

        var table = new Array();
        for (var i = 0 ; i < k/32; i++) {
            table[i] = (Math['random']() * 4294967296)['toString'](32);
        }
        s = table['join']("");

			$pyjs['track']['lineno']=17;
			rand = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int'](s, 32);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=18;
			mask = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['one']['__lshift__'](k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__sub__']($m['one']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=19;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return rand['__and__'](mask);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['getrandbits'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'_random', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('getstate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('jumpahead', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			$pyjs['track']={'module':'_random', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;

        for (var i = 0 ; i < n % 100; i++) Math['random']();

			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['jumpahead'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('random', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var seed;
			$pyjs['track']={'module':'_random', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			if ($p['bool'](($p['getattr'](self, 'seed') === null))) {
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=31;
				var $pyjs__ret = Math['random']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=32;
			seed = $p['getattr'](self, 'seed');
			$pyjs['track']['lineno']=33;
			self['seed'] = null;
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=34;
			var $pyjs__ret = Math['random'](seed);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['random'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('seed', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'_random', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			self['seed'] = n;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['n', null]]);
		$cls_definition['seed'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			$pyjs['track']={'module':'_random', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='_random';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('setstate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Random', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end _random */


/* end module: _random */


