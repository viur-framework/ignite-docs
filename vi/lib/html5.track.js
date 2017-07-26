/* start module: html5.track */
$pyjs['loaded_modules']['html5.track'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.track']['__was_initialized__']) return $pyjs['loaded_modules']['html5.track'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.track'];
	$m['__repr__'] = function() { return '<module: html5.track>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.track';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['track'] = $pyjs['loaded_modules']['html5.track'];
	$m.__track_lines__[1] = 'html5.track.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.track.py, line 2:\n    from html5.html5Attr.src import Src';
	$m.__track_lines__[3] = 'html5.track.py, line 3:\n    from html5.html5Attr._label import _Label as Label';
	$m.__track_lines__[4] = 'html5.track.py, line 4:\n    class Track( Widget,Src,Label ):';
	$m.__track_lines__[5] = 'html5.track.py, line 5:\n    _baseClass = "track"';
	$m.__track_lines__[7] = 'html5.track.py, line 7:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[8] = 'html5.track.py, line 8:\n    super(Track,self).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'html5.track.py, line 10:\n    def _getKind(self):';
	$m.__track_lines__[11] = 'html5.track.py, line 11:\n    return self.element.kind';
	$m.__track_lines__[12] = 'html5.track.py, line 12:\n    def _setKind(self,val):';
	$m.__track_lines__[13] = 'html5.track.py, line 13:\n    self.element.kind=val';
	$m.__track_lines__[15] = 'html5.track.py, line 15:\n    def _getSrclang(self):';
	$m.__track_lines__[16] = 'html5.track.py, line 16:\n    return self.element.srclang';
	$m.__track_lines__[17] = 'html5.track.py, line 17:\n    def _setSrclang(self,val):';
	$m.__track_lines__[18] = 'html5.track.py, line 18:\n    self.element.srclang=val';
	$m.__track_lines__[20] = 'html5.track.py, line 20:\n    def _getDefault(self):';
	$m.__track_lines__[21] = 'html5.track.py, line 21:\n    return( True if self.element.hasAttribute("default") else False )';
	$m.__track_lines__[22] = 'html5.track.py, line 22:\n    def _setDefault(self,val):';
	$m.__track_lines__[23] = 'html5.track.py, line 23:\n    if val==True:';
	$m.__track_lines__[24] = 'html5.track.py, line 24:\n    self.element.setAttribute("default","")';
	$m.__track_lines__[26] = 'html5.track.py, line 26:\n    self.element.removeAttribute("default")';


	$pyjs['track']['module']='html5.track';
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
	$m['Label'] = $p['___import___']('html5.html5Attr._label._Label', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['Track'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.track';
		$pyjs['track']['lineno']=5;
		$cls_definition['_baseClass'] = 'track';
		$pyjs['track']['lineno']=7;
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

			$pyjs['track']={'module':'html5.track', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Track'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=10;
		$method = $pyjs__bind_method2('_getKind', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=11;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'kind');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getKind'] = $method;
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('_setKind', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			$p['getattr'](self, 'element')['kind'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setKind'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('_getSrclang', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=16;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'srclang');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSrclang'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('_setSrclang', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=18;
			$p['getattr'](self, 'element')['srclang'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSrclang'] = $method;
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('_getDefault', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=21;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('default');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDefault'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('_setDefault', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.track', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.track';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=24;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('default', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=26;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('default');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDefault'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($m['Widget'],$m['Src'],$m['Label']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Track', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.track */


/* end module: html5.track */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.src.Src', 'html5.html5Attr', 'html5.html5Attr.src', 'html5.html5Attr._label._Label', 'html5.html5Attr._label']
*/
