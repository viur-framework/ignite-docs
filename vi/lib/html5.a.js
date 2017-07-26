/* start module: html5.a */
$pyjs['loaded_modules']['html5.a'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.a']['__was_initialized__']) return $pyjs['loaded_modules']['html5.a'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.a'];
	$m['__repr__'] = function() { return '<module: html5.a>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.a';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['a'] = $pyjs['loaded_modules']['html5.a'];
	$m.__track_lines__[1] = 'html5.a.py, line 1:\n    from html5.base import Base';
	$m.__track_lines__[2] = 'html5.a.py, line 2:\n    from html5.html5Attr.href import Href';
	$m.__track_lines__[3] = 'html5.a.py, line 3:\n    from html5.html5Attr.media import Media';
	$m.__track_lines__[4] = 'html5.a.py, line 4:\n    from html5.html5Attr.rel import Rel';
	$m.__track_lines__[5] = 'html5.a.py, line 5:\n    from html5.html5Attr.form import Name';
	$m.__track_lines__[7] = 'html5.a.py, line 7:\n    class A( Base, Href, Media, Rel, Name ):';
	$m.__track_lines__[8] = 'html5.a.py, line 8:\n    _baseClass = "a"';
	$m.__track_lines__[10] = 'html5.a.py, line 10:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[11] = 'html5.a.py, line 11:\n    super(A,self).__init__( *args, **kwargs )';
	$m.__track_lines__[13] = 'html5.a.py, line 13:\n    def _getDownload(self):';
	$m.__track_lines__[18] = 'html5.a.py, line 18:\n    return self.element.download';
	$m.__track_lines__[20] = 'html5.a.py, line 20:\n    def _setDownload(self,val):';
	$m.__track_lines__[25] = 'html5.a.py, line 25:\n    self.element.download = val';


	$pyjs['track']['module']='html5.a';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Base'] = $p['___import___']('html5.base.Base', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Href'] = $p['___import___']('html5.html5Attr.href.Href', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Media'] = $p['___import___']('html5.html5Attr.media.Media', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Rel'] = $p['___import___']('html5.html5Attr.rel.Rel', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$m['A'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.a';
		$pyjs['track']['lineno']=8;
		$cls_definition['_baseClass'] = 'a';
		$pyjs['track']['lineno']=10;
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

			$pyjs['track']={'module':'html5.a', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.a';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['A'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_getDownload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.a', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.a';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=18;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'download');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDownload'] = $method;
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('_setDownload', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.a', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.a';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=25;
			$p['getattr'](self, 'element')['download'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDownload'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($m['Base'],$m['Href'],$m['Media'],$m['Rel'],$m['Name']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('A', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.a */


/* end module: html5.a */


/*
PYJS_DEPS: ['html5.base.Base', 'html5', 'html5.base', 'html5.html5Attr.href.Href', 'html5.html5Attr', 'html5.html5Attr.href', 'html5.html5Attr.media.Media', 'html5.html5Attr.media', 'html5.html5Attr.rel.Rel', 'html5.html5Attr.rel', 'html5.html5Attr.form.Name', 'html5.html5Attr.form']
*/
