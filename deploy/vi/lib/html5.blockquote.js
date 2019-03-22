/* start module: html5.blockquote */
$pyjs['loaded_modules']['html5.blockquote'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.blockquote']['__was_initialized__']) return $pyjs['loaded_modules']['html5.blockquote'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.blockquote'];
	$m['__repr__'] = function() { return '<module: html5.blockquote>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.blockquote';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['blockquote'] = $pyjs['loaded_modules']['html5.blockquote'];
	$m.__track_lines__[1] = 'html5.blockquote.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[3] = 'html5.blockquote.py, line 3:\n    class Blockquote( Widget):';
	$m.__track_lines__[4] = 'html5.blockquote.py, line 4:\n    _baseClass = "blockquote"';
	$m.__track_lines__[6] = 'html5.blockquote.py, line 6:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[7] = 'html5.blockquote.py, line 7:\n    super(Blockquote,self).__init__( *args, **kwargs )';
	$m.__track_lines__[9] = 'html5.blockquote.py, line 9:\n    def _getBlockquote(self):';
	$m.__track_lines__[10] = 'html5.blockquote.py, line 10:\n    return self.element.blockquote';
	$m.__track_lines__[11] = 'html5.blockquote.py, line 11:\n    def _setBlockquote(self,val):';
	$m.__track_lines__[12] = 'html5.blockquote.py, line 12:\n    self.element.blockquote=val';


	$pyjs['track']['module']='html5.blockquote';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['Blockquote'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.blockquote';
		$pyjs['track']['lineno']=4;
		$cls_definition['_baseClass'] = 'blockquote';
		$pyjs['track']['lineno']=6;
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

			$pyjs['track']={'module':'html5.blockquote', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.blockquote';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Blockquote'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('_getBlockquote', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.blockquote', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.blockquote';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=10;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'blockquote');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getBlockquote'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_setBlockquote', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.blockquote', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.blockquote';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$p['getattr'](self, 'element')['blockquote'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setBlockquote'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Blockquote', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.blockquote */


/* end module: html5.blockquote */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget']
*/
