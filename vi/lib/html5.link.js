/* start module: html5.link */
$pyjs['loaded_modules']['html5.link'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.link']['__was_initialized__']) return $pyjs['loaded_modules']['html5.link'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.link'];
	$m['__repr__'] = function() { return '<module: html5.link>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.link';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['link'] = $pyjs['loaded_modules']['html5.link'];
	$m.__track_lines__[1] = 'html5.link.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.link.py, line 2:\n    from html5.html5Attr.href import Href';
	$m.__track_lines__[3] = 'html5.link.py, line 3:\n    from html5.html5Attr.media import Media';
	$m.__track_lines__[4] = 'html5.link.py, line 4:\n    from html5.html5Attr.rel import Rel';
	$m.__track_lines__[6] = 'html5.link.py, line 6:\n    class Link( Widget,Href,Media,Rel ):';
	$m.__track_lines__[7] = 'html5.link.py, line 7:\n    _baseClass = "link"';
	$m.__track_lines__[9] = 'html5.link.py, line 9:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[10] = 'html5.link.py, line 10:\n    super(Link,self).__init__( *args, **kwargs )';
	$m.__track_lines__[12] = 'html5.link.py, line 12:\n    def _getSizes(self):';
	$m.__track_lines__[13] = 'html5.link.py, line 13:\n    return self.element.sizes';
	$m.__track_lines__[14] = 'html5.link.py, line 14:\n    def _setSizes(self,val):';
	$m.__track_lines__[15] = 'html5.link.py, line 15:\n    self.element.sizes=val';


	$pyjs['track']['module']='html5.link';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
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
	$pyjs['track']['lineno']=6;
	$m['Link'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.link';
		$pyjs['track']['lineno']=7;
		$cls_definition['_baseClass'] = 'link';
		$pyjs['track']['lineno']=9;
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

			$pyjs['track']={'module':'html5.link', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.link';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Link'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('_getSizes', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.link', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.link';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=13;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'sizes');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSizes'] = $method;
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('_setSizes', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.link', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.link';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			$p['getattr'](self, 'element')['sizes'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSizes'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($m['Widget'],$m['Href'],$m['Media'],$m['Rel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Link', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.link */


/* end module: html5.link */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.href.Href', 'html5.html5Attr', 'html5.html5Attr.href', 'html5.html5Attr.media.Media', 'html5.html5Attr.media', 'html5.html5Attr.rel.Rel', 'html5.html5Attr.rel']
*/
