/* start module: html5.img */
$pyjs['loaded_modules']['html5.img'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.img']['__was_initialized__']) return $pyjs['loaded_modules']['html5.img'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.img'];
	$m['__repr__'] = function() { return '<module: html5.img>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.img';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['img'] = $pyjs['loaded_modules']['html5.img'];
	$m.__track_lines__[1] = 'html5.img.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.img.py, line 2:\n    from html5.html5Attr.src import Src';
	$m.__track_lines__[3] = 'html5.img.py, line 3:\n    from html5.html5Attr.form import Alt';
	$m.__track_lines__[4] = 'html5.img.py, line 4:\n    from html5.html5Attr.media import Dimensions,Usemap';
	$m.__track_lines__[5] = 'html5.img.py, line 5:\n    class Img( Widget,Src,Dimensions,Usemap,Alt ):';
	$m.__track_lines__[6] = 'html5.img.py, line 6:\n    _baseClass = "img"';
	$m.__track_lines__[8] = 'html5.img.py, line 8:\n    def __init__(self, src=None, *args, **kwargs ):';
	$m.__track_lines__[9] = 'html5.img.py, line 9:\n    super( Img, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'html5.img.py, line 10:\n    if src is not None:';
	$m.__track_lines__[11] = 'html5.img.py, line 11:\n    self["src"] = src';
	$m.__track_lines__[13] = 'html5.img.py, line 13:\n    def _getCrossorigin(self):';
	$m.__track_lines__[14] = 'html5.img.py, line 14:\n    return self.element.crossorigin';
	$m.__track_lines__[15] = 'html5.img.py, line 15:\n    def _setCrossorigin(self,val):';
	$m.__track_lines__[16] = 'html5.img.py, line 16:\n    self.element.crossorigin=val';
	$m.__track_lines__[18] = 'html5.img.py, line 18:\n    def _getIsmap(self):';
	$m.__track_lines__[19] = 'html5.img.py, line 19:\n    return self.element.ismap';
	$m.__track_lines__[20] = 'html5.img.py, line 20:\n    def _setIsmap(self,val):';
	$m.__track_lines__[21] = 'html5.img.py, line 21:\n    self.element.ismap=val';


	$pyjs['track']['module']='html5.img';
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
	$m['Alt'] = $p['___import___']('html5.html5Attr.form.Alt', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Dimensions'] = $p['___import___']('html5.html5Attr.media.Dimensions', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Usemap'] = $p['___import___']('html5.html5Attr.media.Usemap', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['Img'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.img';
		$pyjs['track']['lineno']=6;
		$cls_definition['_baseClass'] = 'img';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('__init__', function(src) {
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
				src = arguments[1];
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
				if (typeof src != 'undefined') {
					if (src !== null && typeof src['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = src;
						src = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof src == 'undefined') src=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.img', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.img';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Img'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=10;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((src !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$pyjs['track']['lineno']=11;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('src', src);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['src', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_getCrossorigin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.img', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.img';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=14;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'crossorigin');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCrossorigin'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('_setCrossorigin', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.img', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.img';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			$p['getattr'](self, 'element')['crossorigin'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setCrossorigin'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('_getIsmap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.img', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.img';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=19;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'ismap');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getIsmap'] = $method;
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('_setIsmap', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.img', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.img';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			$p['getattr'](self, 'element')['ismap'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setIsmap'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Widget'],$m['Src'],$m['Dimensions'],$m['Usemap'],$m['Alt']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Img', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.img */


/* end module: html5.img */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.src.Src', 'html5.html5Attr', 'html5.html5Attr.src', 'html5.html5Attr.form.Alt', 'html5.html5Attr.form', 'html5.html5Attr.media.Dimensions', 'html5.html5Attr.media', 'html5.html5Attr.media.Usemap']
*/
