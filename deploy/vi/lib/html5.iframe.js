/* start module: html5.iframe */
$pyjs['loaded_modules']['html5.iframe'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.iframe']['__was_initialized__']) return $pyjs['loaded_modules']['html5.iframe'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.iframe'];
	$m['__repr__'] = function() { return '<module: html5.iframe>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.iframe';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['iframe'] = $pyjs['loaded_modules']['html5.iframe'];
	$m.__track_lines__[1] = 'html5.iframe.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.iframe.py, line 2:\n    from html5.html5Attr.src import Src';
	$m.__track_lines__[3] = 'html5.iframe.py, line 3:\n    from html5.html5Attr.form import Name';
	$m.__track_lines__[4] = 'html5.iframe.py, line 4:\n    from html5.html5Attr.media import Dimensions';
	$m.__track_lines__[5] = 'html5.iframe.py, line 5:\n    class Iframe( Widget,Src,Name,Dimensions):';
	$m.__track_lines__[6] = 'html5.iframe.py, line 6:\n    _baseClass = "iframe"';
	$m.__track_lines__[8] = 'html5.iframe.py, line 8:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[9] = 'html5.iframe.py, line 9:\n    super(Iframe,self).__init__( *args, **kwargs )';
	$m.__track_lines__[11] = 'html5.iframe.py, line 11:\n    def _getSandbox(self):';
	$m.__track_lines__[12] = 'html5.iframe.py, line 12:\n    return self.element.sandbox';
	$m.__track_lines__[14] = 'html5.iframe.py, line 14:\n    def _setSandbox(self,val):';
	$m.__track_lines__[15] = 'html5.iframe.py, line 15:\n    self.element.sandbox=val';
	$m.__track_lines__[17] = 'html5.iframe.py, line 17:\n    def _getSrcdoc(self):';
	$m.__track_lines__[18] = 'html5.iframe.py, line 18:\n    return self.element.src';
	$m.__track_lines__[19] = 'html5.iframe.py, line 19:\n    def _setSrcdoc(self,val):';
	$m.__track_lines__[20] = 'html5.iframe.py, line 20:\n    self.element.src=val';
	$m.__track_lines__[22] = 'html5.iframe.py, line 22:\n    def _getSeamless(self):';
	$m.__track_lines__[23] = 'html5.iframe.py, line 23:\n    return( True if self.element.hasAttribute("seamless") else False )';
	$m.__track_lines__[24] = 'html5.iframe.py, line 24:\n    def _setSeamless(self,val):';
	$m.__track_lines__[25] = 'html5.iframe.py, line 25:\n    if val==True:';
	$m.__track_lines__[26] = 'html5.iframe.py, line 26:\n    self.element.setAttribute("seamless","")';
	$m.__track_lines__[28] = 'html5.iframe.py, line 28:\n    self.element.removeAttribute("seamless")';


	$pyjs['track']['module']='html5.iframe';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Src'] = $p['___import___']('html5.html5Attr.src.Src', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Dimensions'] = $p['___import___']('html5.html5Attr.media.Dimensions', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['Iframe'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.iframe';
		$pyjs['track']['lineno']=6;
		$cls_definition['_baseClass'] = 'iframe';
		$pyjs['track']['lineno']=8;
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

			$pyjs['track']={'module':'html5.iframe', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Iframe'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_getSandbox', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=12;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'sandbox');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSandbox'] = $method;
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('_setSandbox', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			$p['getattr'](self, 'element')['sandbox'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSandbox'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('_getSrcdoc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=18;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'src');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSrcdoc'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('_setSrcdoc', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			$p['getattr'](self, 'element')['src'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSrcdoc'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('_getSeamless', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=23;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('seamless');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSeamless'] = $method;
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('_setSeamless', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.iframe', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.iframe';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=26;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('seamless', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=28;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('seamless');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSeamless'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Widget'],$m['Src'],$m['Name'],$m['Dimensions']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Iframe', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.iframe */


/* end module: html5.iframe */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.src.Src', 'html5.html5Attr', 'html5.html5Attr.src', 'html5.html5Attr.form.Name', 'html5.html5Attr.form', 'html5.html5Attr.media.Dimensions', 'html5.html5Attr.media']
*/
