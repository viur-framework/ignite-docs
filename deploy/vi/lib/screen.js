/* start module: screen */
$pyjs['loaded_modules']['screen'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['screen']['__was_initialized__']) return $pyjs['loaded_modules']['screen'];
	var $m = $pyjs['loaded_modules']['screen'];
	$m['__repr__'] = function() { return '<module: screen>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'screen';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'screen.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'screen.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'screen.py, line 3:\n    from config import conf';
	$m.__track_lines__[5] = 'screen.py, line 5:\n    class Screen(html5.Div):';
	$m.__track_lines__[12] = 'screen.py, line 12:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[13] = 'screen.py, line 13:\n    super(Screen, self).__init__(*args, **kwargs)';
	$m.__track_lines__[14] = 'screen.py, line 14:\n    self.addClass("vi-screen")';
	$m.__track_lines__[16] = 'screen.py, line 16:\n    conf["theApp"].appendChild(self)';
	$m.__track_lines__[17] = 'screen.py, line 17:\n    self.hide()';
	$m.__track_lines__[19] = 'screen.py, line 19:\n    def lock(self):';
	$m.__track_lines__[20] = 'screen.py, line 20:\n    self.addClass("is_loading")';
	$m.__track_lines__[22] = 'screen.py, line 22:\n    def unlock(self):';
	$m.__track_lines__[23] = 'screen.py, line 23:\n    self.removeClass("is_loading")';
	$m.__track_lines__[25] = 'screen.py, line 25:\n    def invoke(self):';
	$m.__track_lines__[27] = 'screen.py, line 27:\n    print("Invoke: %s" % self.__class__.__name__)';
	$m.__track_lines__[29] = 'screen.py, line 29:\n    def remove(self):';
	$m.__track_lines__[31] = 'screen.py, line 31:\n    if self.parent():';
	$m.__track_lines__[32] = 'screen.py, line 32:\n    self.parent().removeChild(self)';
	$m.__track_lines__[34] = 'screen.py, line 34:\n    def setTitle(self, title = None):';
	$m.__track_lines__[35] = 'screen.py, line 35:\n    if title is None:';
	$m.__track_lines__[36] = 'screen.py, line 36:\n    title = self.__class__.__name__';
	$m.__track_lines__[38] = 'screen.py, line 38:\n    document = eval("top.document")';
	$m.__track_lines__[39] = 'screen.py, line 39:\n    document.title = "%s - ViUR Visual Interface" % title';


	$pyjs['track']['module']='screen';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['Screen'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'screen';
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('__init__', function() {
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

			$pyjs['track']={'module':'screen', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Screen'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('vi-screen');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('theApp')['appendChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('lock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'screen', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['lock'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('unlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'screen', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['removeClass']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unlock'] = $method;
		$pyjs['track']['lineno']=25;
		$method = $pyjs__bind_method2('invoke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'screen', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Invoke: %s', $p['getattr']($p['getattr'](self, '__class__'), '__name__'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invoke'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'screen', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=31;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=32;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['removeChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('setTitle', function(title) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][3][1];
			var document;
			$pyjs['track']={'module':'screen', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='screen';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((title === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs['track']['lineno']=36;
				title = $p['getattr']($p['getattr'](self, '__class__'), '__name__');
			}
			$pyjs['track']['lineno']=38;
			document = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('top.document');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=39;
			document['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s - ViUR Visual Interface', title);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['title', null]]);
		$cls_definition['setTitle'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Screen', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end screen */


/* end module: screen */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config']
*/
