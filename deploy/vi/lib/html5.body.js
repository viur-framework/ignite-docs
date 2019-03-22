/* start module: html5.body */
$pyjs['loaded_modules']['html5.body'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.body']['__was_initialized__']) return $pyjs['loaded_modules']['html5.body'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.body'];
	$m['__repr__'] = function() { return '<module: html5.body>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.body';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['body'] = $pyjs['loaded_modules']['html5.body'];
	$m.__track_lines__[1] = 'html5.body.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.body.py, line 2:\n    from html5 import document';
	$m.__track_lines__[4] = 'html5.body.py, line 4:\n    class BodyCls( Widget ):';
	$m.__track_lines__[6] = 'html5.body.py, line 6:\n    def __init__( self, *args, **kwargs ):';
	$m.__track_lines__[7] = 'html5.body.py, line 7:\n    elem = document';
	$m.__track_lines__[8] = 'html5.body.py, line 8:\n    super( BodyCls, self ).__init__( _wrapElem=document.getElementsByTagName("body")[0] )';
	$m.__track_lines__[9] = 'html5.body.py, line 9:\n    self._isAttached = True';
	$m.__track_lines__[11] = 'html5.body.py, line 11:\n    _body = None';
	$m.__track_lines__[12] = 'html5.body.py, line 12:\n    def Body():';
	$m.__track_lines__[13] = 'html5.body.py, line 13:\n    global _body';
	$m.__track_lines__[14] = 'html5.body.py, line 14:\n    if _body is None:';
	$m.__track_lines__[15] = 'html5.body.py, line 15:\n    _body = BodyCls()';
	$m.__track_lines__[16] = 'html5.body.py, line 16:\n    return( _body )';


	$pyjs['track']['module']='html5.body';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['document'] = $p['___import___']('html5.document', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['BodyCls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.body';
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
			var elem;
			$pyjs['track']={'module':'html5.body', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.body';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			elem = $m['document'];
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BodyCls'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', null, null, [{'_wrapElem':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['document']['getElementsByTagName']('body');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()['__getitem__'](0)}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=9;
			self['_isAttached'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BodyCls', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=11;
	$m['_body'] = null;
	$pyjs['track']['lineno']=12;
	$m['Body'] = function() {

		$pyjs['track']={'module':'html5.body','lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.body';
		$pyjs['track']['lineno']=12;
		$pyjs['track']['lineno']=13;
		$pyjs['track']['lineno']=14;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($m['_body'] === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
			$pyjs['track']['lineno']=15;
			$m['_body'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['BodyCls']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
		}
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=16;
		var $pyjs__ret = $m['_body'];
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['Body']['__name__'] = 'Body';

	$m['Body']['__bind_type__'] = 0;
	$m['Body']['__args__'] = [null,null];
	return this;
}; /* end html5.body */


/* end module: html5.body */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.document']
*/
