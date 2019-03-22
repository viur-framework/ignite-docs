/* start module: event */
$pyjs['loaded_modules']['event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['event']['__was_initialized__']) return $pyjs['loaded_modules']['event'];
	var $m = $pyjs['loaded_modules']['event'];
	$m['__repr__'] = function() { return '<module: event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'event';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'event.py, line 1:\n    ';
	$m.__track_lines__[2] = 'event.py, line 2:\n    class EventDispatcher(object):';
	$m.__track_lines__[35] = 'event.py, line 35:\n    if cb in self.queue:';
	$m.__track_lines__[36] = 'event.py, line 36:\n    self.queue.remove( cb )';
	$m.__track_lines__[38] = 'event.py, line 38:\n    def fire(self, *args, **kwargs):';
	$m.__track_lines__[6] = 'event.py, line 6:\n    def __init__(self, name):';
	$m.__track_lines__[7] = 'event.py, line 7:\n    super( EventDispatcher, self ).__init__()';
	$m.__track_lines__[8] = 'event.py, line 8:\n    self.queue = []';
	$m.__track_lines__[9] = 'event.py, line 9:\n    self.name = name';
	$m.__track_lines__[11] = 'event.py, line 11:\n    def _genTargetFuncName(self):';
	$m.__track_lines__[44] = 'event.py, line 44:\n    getattr( cb, self._genTargetFuncName() )( *args, **kwargs )';
	$m.__track_lines__[15] = 'event.py, line 15:\n    return( "on%s" % (self.name[0].upper()+self.name[1:]) )';
	$m.__track_lines__[48] = 'event.py, line 48:\n    viInitializedEvent = EventDispatcher("viInitialized")';
	$m.__track_lines__[17] = 'event.py, line 17:\n    def register(self, cb):';
	$m.__track_lines__[43] = 'event.py, line 43:\n    for cb in self.queue:';
	$m.__track_lines__[24] = 'event.py, line 24:\n    assert self._genTargetFuncName() in dir( cb ), "cb must provide a %s method" % self._genTargetFuncName()';
	$m.__track_lines__[25] = 'event.py, line 25:\n    if cb not in self.queue:';
	$m.__track_lines__[26] = 'event.py, line 26:\n    self.queue.append( cb )';
	$m.__track_lines__[28] = 'event.py, line 28:\n    def unregister(self, cb):';


	$pyjs['track']['module']='event';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$m['EventDispatcher'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'event';
		$pyjs['track']['lineno']=6;
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$pyjs['track']={'module':'event', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='event';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EventDispatcher'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=8;
			self['queue'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=9;
			self['$$name'] = name;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_genTargetFuncName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			$pyjs['track']={'module':'event', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='event';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=15;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('on%s', $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '$$name')['__getitem__'](0)['upper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(),$add2=$p['__getslice']($p['getattr'](self, '$$name'), 1, null)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_genTargetFuncName'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('register', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			$pyjs['track']={'module':'event', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='event';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=24;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](cb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_genTargetFuncName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('cb must provide a %s method', (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_genTargetFuncName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
			 }
			$pyjs['track']['lineno']=25;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['getattr'](self, 'queue')['__contains__'](cb));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=26;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['queue']['append'](cb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['register'] = $method;
		$pyjs['track']['lineno']=28;
		$method = $pyjs__bind_method2('unregister', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			$pyjs['track']={'module':'event', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='event';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=35;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'queue')['__contains__'](cb));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['queue']['remove'](cb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['unregister'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('fire', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter1_nextval,$iter1_type,cb,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs['track']={'module':'event', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='event';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=43;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'queue');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				cb = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=44;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](cb, (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_genTargetFuncName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='event';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['fire'] = $method;
		$pyjs['track']['lineno']=2;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EventDispatcher', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=48;
	$m['viInitializedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['EventDispatcher']('viInitialized');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
	return this;
}; /* end event */


/* end module: event */


