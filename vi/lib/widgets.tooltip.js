/* start module: widgets.tooltip */
$pyjs['loaded_modules']['widgets.tooltip'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.tooltip']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.tooltip'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.tooltip'];
	$m['__repr__'] = function() { return '<module: widgets.tooltip>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.tooltip';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['tooltip'] = $pyjs['loaded_modules']['widgets.tooltip'];
	$m.__track_lines__[1] = 'widgets.tooltip.py, line 1:\n    import html5';
	$m.__track_lines__[3] = 'widgets.tooltip.py, line 3:\n    class ToolTip(html5.Div):';
	$m.__track_lines__[8] = 'widgets.tooltip.py, line 8:\n    def __init__(self, shortText="Tooltip", longText="", *args, **kwargs):';
	$m.__track_lines__[9] = 'widgets.tooltip.py, line 9:\n    super( ToolTip, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'widgets.tooltip.py, line 10:\n    self["class"] = "tooltip"';
	$m.__track_lines__[11] = 'widgets.tooltip.py, line 11:\n    a = html5.ext.Button(shortText, self.toggleMsgCenter )';
	$m.__track_lines__[12] = 'widgets.tooltip.py, line 12:\n    a.appendChild(html5.TextNode())';
	$m.__track_lines__[14] = 'widgets.tooltip.py, line 14:\n    self.appendChild(a)';
	$m.__track_lines__[15] = 'widgets.tooltip.py, line 15:\n    span = html5.Span()';
	$m.__track_lines__[16] = 'widgets.tooltip.py, line 16:\n    span.element.innerHTML = longText.replace( "\\n", "<br />" )';
	$m.__track_lines__[17] = 'widgets.tooltip.py, line 17:\n    self.appendChild( span )';
	$m.__track_lines__[19] = 'widgets.tooltip.py, line 19:\n    def toggleMsgCenter(self, *args, **kwargs):';
	$m.__track_lines__[20] = 'widgets.tooltip.py, line 20:\n    if "is_open" in self["class"]:';
	$m.__track_lines__[21] = 'widgets.tooltip.py, line 21:\n    self["class"].remove("is_open")';
	$m.__track_lines__[23] = 'widgets.tooltip.py, line 23:\n    self["class"].append("is_open")';


	$pyjs['track']['module']='widgets.tooltip';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['ToolTip'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.tooltip';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('__init__', function(shortText, longText) {
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
				shortText = arguments[1];
				longText = arguments[2];
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
				if (typeof longText != 'undefined') {
					if (longText !== null && typeof longText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = longText;
						longText = arguments[3];
					}
				} else 				if (typeof shortText != 'undefined') {
					if (shortText !== null && typeof shortText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = shortText;
						shortText = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof shortText == 'undefined') shortText=arguments['callee']['__args__'][3][1];
			if (typeof longText == 'undefined') longText=arguments['callee']['__args__'][4][1];
			var a,span;
			$pyjs['track']={'module':'widgets.tooltip', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tooltip';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ToolTip'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'tooltip');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=11;
			a = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button'](shortText, $p['getattr'](self, 'toggleMsgCenter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](a);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=15;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=16;
			$p['getattr'](span, 'element')['innerHTML'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return longText['$$replace']('\n', '<br />');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['shortText', 'Tooltip'],['longText', '']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('toggleMsgCenter', function() {
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

			$pyjs['track']={'module':'widgets.tooltip', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tooltip';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_open'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=23;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['toggleMsgCenter'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ToolTip', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.tooltip */


/* end module: widgets.tooltip */


/*
PYJS_DEPS: ['html5']
*/
