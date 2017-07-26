/* start module: html5.textnode */
$pyjs['loaded_modules']['html5.textnode'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.textnode']['__was_initialized__']) return $pyjs['loaded_modules']['html5.textnode'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.textnode'];
	$m['__repr__'] = function() { return '<module: html5.textnode>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.textnode';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['textnode'] = $pyjs['loaded_modules']['html5.textnode'];
	$m.__track_lines__[1] = 'html5.textnode.py, line 1:\n    class TextNode( object ):';
	$m.__track_lines__[8] = 'html5.textnode.py, line 8:\n    def __init__(self, txt=None, *args, **kwargs ):';
	$m.__track_lines__[9] = 'html5.textnode.py, line 9:\n    super( TextNode, self ).__init__()';
	$m.__track_lines__[10] = 'html5.textnode.py, line 10:\n    self._parent = None';
	$m.__track_lines__[11] = 'html5.textnode.py, line 11:\n    self._children = []';
	$m.__track_lines__[12] = 'html5.textnode.py, line 12:\n    self.element = eval("document.createTextNode(\'\')")';
	$m.__track_lines__[13] = 'html5.textnode.py, line 13:\n    self._isAttached = False';
	$m.__track_lines__[14] = 'html5.textnode.py, line 14:\n    if txt is not None:';
	$m.__track_lines__[15] = 'html5.textnode.py, line 15:\n    self.element.data = txt';
	$m.__track_lines__[17] = 'html5.textnode.py, line 17:\n    """';
	$m.__track_lines__[26] = 'html5.textnode.py, line 26:\n    def _setText(self,txt):';
	$m.__track_lines__[27] = 'html5.textnode.py, line 27:\n    self.element.data = txt';
	$m.__track_lines__[29] = 'html5.textnode.py, line 29:\n    def _getText(self):';
	$m.__track_lines__[30] = 'html5.textnode.py, line 30:\n    return( self.element.data )';
	$m.__track_lines__[32] = 'html5.textnode.py, line 32:\n    def __str__(self):';
	$m.__track_lines__[33] = 'html5.textnode.py, line 33:\n    return( self.element.data )';
	$m.__track_lines__[35] = 'html5.textnode.py, line 35:\n    def onAttach(self):';
	$m.__track_lines__[36] = 'html5.textnode.py, line 36:\n    self._isAttached = True';
	$m.__track_lines__[38] = 'html5.textnode.py, line 38:\n    def onDetach(self):';
	$m.__track_lines__[39] = 'html5.textnode.py, line 39:\n    self._isAttached = False';
	$m.__track_lines__[41] = 'html5.textnode.py, line 41:\n    def _setDisabled(self, disabled):';
	$m.__track_lines__[42] = 'html5.textnode.py, line 42:\n    return';
	$m.__track_lines__[44] = 'html5.textnode.py, line 44:\n    def _getDisabled(self):';
	$m.__track_lines__[45] = 'html5.textnode.py, line 45:\n    return( False )';


	$pyjs['track']['module']='html5.textnode';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['TextNode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.textnode';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('__init__', function(txt) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				txt = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof txt != 'undefined') {
					if (txt !== null && typeof txt['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txt;
						txt = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof txt == 'undefined') txt=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.textnode', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=10;
			self['_parent'] = null;
			$pyjs['track']['lineno']=11;
			self['_children'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=12;
			self['element'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)("document.createTextNode('')");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=13;
			self['_isAttached'] = false;
			$pyjs['track']['lineno']=14;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((txt !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=15;
				$p['getattr'](self, 'element')['data'] = txt;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['txt', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=17;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('_setText', function(txt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				txt = arguments[1];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			$p['getattr'](self, 'element')['data'] = txt;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['txt']]);
		$cls_definition['_setText'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('_getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=30;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'data');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getText'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=33;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'data');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$pyjs['track']['lineno']=35;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=36;
			self['_isAttached'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			self['_isAttached'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('_setDisabled', function(disabled) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				disabled = arguments[1];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=42;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['disabled']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('_getDisabled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.textnode', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.textnode';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=45;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDisabled'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextNode', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.textnode */


/* end module: html5.textnode */


