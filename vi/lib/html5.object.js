/* start module: html5.object */
$pyjs['loaded_modules']['html5.object'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.object']['__was_initialized__']) return $pyjs['loaded_modules']['html5.object'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.object'];
	$m['__repr__'] = function() { return '<module: html5.object>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.object';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['object'] = $pyjs['loaded_modules']['html5.object'];
	$m.__track_lines__[1] = 'html5.object.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.object.py, line 2:\n    from html5.html5Attr.media import Type,Dimensions,Usemap';
	$m.__track_lines__[3] = 'html5.object.py, line 3:\n    from html5.html5Attr.form import _Form as Form,Name';
	$m.__track_lines__[4] = 'html5.object.py, line 4:\n    class Object( Widget,Type,Form,Name,Dimensions,Usemap ):';
	$m.__track_lines__[5] = 'html5.object.py, line 5:\n    _baseClass = "object"';
	$m.__track_lines__[7] = 'html5.object.py, line 7:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[8] = 'html5.object.py, line 8:\n    super(Object,self).__init__( *args, **kwargs )';


	$pyjs['track']['module']='html5.object';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Type'] = $p['___import___']('html5.html5Attr.media.Type', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Dimensions'] = $p['___import___']('html5.html5Attr.media.Dimensions', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Usemap'] = $p['___import___']('html5.html5Attr.media.Usemap', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Form'] = $p['___import___']('html5.html5Attr.form._Form', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['Object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.object';
		$pyjs['track']['lineno']=5;
		$cls_definition['_baseClass'] = 'object';
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

			$pyjs['track']={'module':'html5.object', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.object';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Object'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($m['Widget'],$m['Type'],$m['Form'],$m['Name'],$m['Dimensions'],$m['Usemap']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Object', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.object */


/* end module: html5.object */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.media.Type', 'html5.html5Attr', 'html5.html5Attr.media', 'html5.html5Attr.media.Dimensions', 'html5.html5Attr.media.Usemap', 'html5.html5Attr.form._Form', 'html5.html5Attr.form', 'html5.html5Attr.form.Name']
*/
