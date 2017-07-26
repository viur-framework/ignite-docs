/* start module: html5.details */
$pyjs['loaded_modules']['html5.details'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.details']['__was_initialized__']) return $pyjs['loaded_modules']['html5.details'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.details'];
	$m['__repr__'] = function() { return '<module: html5.details>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.details';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['details'] = $pyjs['loaded_modules']['html5.details'];
	$m.__track_lines__[1] = 'html5.details.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[3] = 'html5.details.py, line 3:\n    class Details( Widget):';
	$m.__track_lines__[4] = 'html5.details.py, line 4:\n    _baseClass = "details"';
	$m.__track_lines__[6] = 'html5.details.py, line 6:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[7] = 'html5.details.py, line 7:\n    super(Details,self).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'html5.details.py, line 10:\n    def _getOpen(self):';
	$m.__track_lines__[11] = 'html5.details.py, line 11:\n    return( True if self.element.hasAttribute("open") else False )';
	$m.__track_lines__[12] = 'html5.details.py, line 12:\n    def _setOpen(self,val):';
	$m.__track_lines__[13] = 'html5.details.py, line 13:\n    if val==True:';
	$m.__track_lines__[14] = 'html5.details.py, line 14:\n    self.element.setAttribute("open","")';
	$m.__track_lines__[16] = 'html5.details.py, line 16:\n    self.element.removeAttribute("open")';


	$pyjs['track']['module']='html5.details';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['Details'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.details';
		$pyjs['track']['lineno']=4;
		$cls_definition['_baseClass'] = 'details';
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

			$pyjs['track']={'module':'html5.details', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.details';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Details'], self);
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
		$method = $pyjs__bind_method2('_getOpen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.details', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.details';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=11;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getOpen'] = $method;
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('_setOpen', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.details', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.details';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=14;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('open', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=16;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setOpen'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Details', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.details */


/* end module: html5.details */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget']
*/
