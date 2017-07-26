/* start module: html5.ext.button */
$pyjs['loaded_modules']['html5.ext.button'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.button']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.button'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.button'];
	$m['__repr__'] = function() { return '<module: html5.ext.button>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.button';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.ext']['button'] = $pyjs['loaded_modules']['html5.ext.button'];
	$m.__track_lines__[1] = 'html5.ext.button.py, line 1:\n    from html5.form import Button as fButton';
	$m.__track_lines__[3] = 'html5.ext.button.py, line 3:\n    class Button(fButton):';
	$m.__track_lines__[4] = 'html5.ext.button.py, line 4:\n    def __init__(self, txt=None, callback=None, *args, **kwargs):';
	$m.__track_lines__[5] = 'html5.ext.button.py, line 5:\n    super(Button,self).__init__(*args, **kwargs)';
	$m.__track_lines__[6] = 'html5.ext.button.py, line 6:\n    self["class"] = "button"';
	$m.__track_lines__[7] = 'html5.ext.button.py, line 7:\n    self["type"]="button"';
	$m.__track_lines__[9] = 'html5.ext.button.py, line 9:\n    if txt is not None:';
	$m.__track_lines__[10] = 'html5.ext.button.py, line 10:\n    self.setText(txt)';
	$m.__track_lines__[12] = 'html5.ext.button.py, line 12:\n    self.callback = callback';
	$m.__track_lines__[13] = 'html5.ext.button.py, line 13:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[15] = 'html5.ext.button.py, line 15:\n    def setText(self, txt):';
	$m.__track_lines__[16] = 'html5.ext.button.py, line 16:\n    if txt is not None:';
	$m.__track_lines__[17] = 'html5.ext.button.py, line 17:\n    self.element.innerHTML = txt';
	$m.__track_lines__[19] = 'html5.ext.button.py, line 19:\n    self.element.innerHTML = ""';
	$m.__track_lines__[21] = 'html5.ext.button.py, line 21:\n    def onClick(self, event):';
	$m.__track_lines__[22] = 'html5.ext.button.py, line 22:\n    event.stopPropagation()';
	$m.__track_lines__[23] = 'html5.ext.button.py, line 23:\n    event.preventDefault()';
	$m.__track_lines__[24] = 'html5.ext.button.py, line 24:\n    if self.callback is not None:';
	$m.__track_lines__[25] = 'html5.ext.button.py, line 25:\n    self.callback(self)';
	$m.__track_lines__[27] = 'html5.ext.button.py, line 27:\n    def onDetach(self):';
	$m.__track_lines__[28] = 'html5.ext.button.py, line 28:\n    super(Button,self)';
	$m.__track_lines__[29] = 'html5.ext.button.py, line 29:\n    self.callback = None';


	$pyjs['track']['module']='html5.ext.button';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['fButton'] = $p['___import___']('html5.form.Button', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['Button'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.button';
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('__init__', function(txt, callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				txt = arguments[1];
				callback = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof callback != 'undefined') {
					if (callback !== null && typeof callback['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = callback;
						callback = arguments[3];
					}
				} else 				if (typeof txt != 'undefined') {
					if (txt !== null && typeof txt['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txt;
						txt = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof txt == 'undefined') txt=arguments['callee']['__args__'][3][1];
			if (typeof callback == 'undefined') callback=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'html5.ext.button', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.button';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Button'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=6;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'button');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('type', 'button');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=9;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((txt !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=10;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setText'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			$pyjs['track']['lineno']=12;
			self['callback'] = callback;
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['txt', null],['callback', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('setText', function(txt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				txt = arguments[1];
			}

			$pyjs['track']={'module':'html5.ext.button', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.button';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((txt !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs['track']['lineno']=17;
				$p['getattr'](self, 'element')['innerHTML'] = txt;
			}
			else {
				$pyjs['track']['lineno']=19;
				$p['getattr'](self, 'element')['innerHTML'] = '';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['txt']]);
		$cls_definition['setText'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.ext.button', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.button';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=24;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'callback') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['callback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.ext.button', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.button';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Button'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=29;
			self['callback'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($m['fButton']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Button', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.ext.button */


/* end module: html5.ext.button */


/*
PYJS_DEPS: ['html5.form.Button', 'html5', 'html5.form']
*/
