/* start module: html5.meta */
$pyjs['loaded_modules']['html5.meta'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.meta']['__was_initialized__']) return $pyjs['loaded_modules']['html5.meta'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.meta'];
	$m['__repr__'] = function() { return '<module: html5.meta>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.meta';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['meta'] = $pyjs['loaded_modules']['html5.meta'];
	$m.__track_lines__[1] = 'html5.meta.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.meta.py, line 2:\n    from html5.html5Attr.form import Name';
	$m.__track_lines__[3] = 'html5.meta.py, line 3:\n    from html5.html5Attr.charset import Charset';
	$m.__track_lines__[5] = 'html5.meta.py, line 5:\n    class Meta( Widget,Name,Charset ):';
	$m.__track_lines__[6] = 'html5.meta.py, line 6:\n    _baseClass = "meta"';
	$m.__track_lines__[8] = 'html5.meta.py, line 8:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[9] = 'html5.meta.py, line 9:\n    super(Meta,self).__init__( *args, **kwargs )';
	$m.__track_lines__[11] = 'html5.meta.py, line 11:\n    def _getContent(self):';
	$m.__track_lines__[12] = 'html5.meta.py, line 12:\n    return self.element.content';
	$m.__track_lines__[13] = 'html5.meta.py, line 13:\n    def _setContent(self,val):';
	$m.__track_lines__[14] = 'html5.meta.py, line 14:\n    self.element.content=val';
	$m.__track_lines__[16] = "html5.meta.py, line 16:\n    '''";


	$pyjs['track']['module']='html5.meta';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Charset'] = $p['___import___']('html5.html5Attr.charset.Charset', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['Meta'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.meta';
		$pyjs['track']['lineno']=6;
		$cls_definition['_baseClass'] = 'meta';
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

			$pyjs['track']={'module':'html5.meta', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meta';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Meta'], self);
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
		$method = $pyjs__bind_method2('_getContent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meta', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meta';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=12;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'content');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getContent'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_setContent', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meta', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meta';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$p['getattr'](self, 'element')['content'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setContent'] = $method;
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Widget'],$m['Name'],$m['Charset']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Meta', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.meta */


/* end module: html5.meta */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.form.Name', 'html5.html5Attr', 'html5.html5Attr.form', 'html5.html5Attr.charset.Charset', 'html5.html5Attr.charset']
*/
