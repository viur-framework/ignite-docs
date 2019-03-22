/* start module: html5.html5Attr._label */
$pyjs['loaded_modules']['html5.html5Attr._label'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr._label']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr._label'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr._label'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr._label>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr._label';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['_label'] = $pyjs['loaded_modules']['html5.html5Attr._label'];
	$m.__track_lines__[1] = 'html5.html5Attr._label.py, line 1:\n    class _Label(object):';
	$m.__track_lines__[2] = 'html5.html5Attr._label.py, line 2:\n    def _getLabel(self):';
	$m.__track_lines__[3] = 'html5.html5Attr._label.py, line 3:\n    return self.element.label';
	$m.__track_lines__[4] = 'html5.html5Attr._label.py, line 4:\n    def _setLabel(self,val):';
	$m.__track_lines__[5] = 'html5.html5Attr._label.py, line 5:\n    self.element.label=val';


	$pyjs['track']['module']='html5.html5Attr._label';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['_Label'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr._label';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getLabel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr._label', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr._label';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=3;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), '$$label');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getLabel'] = $method;
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_setLabel', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr._label', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr._label';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$p['getattr'](self, 'element')['$$label'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setLabel'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_Label', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr._label */


/* end module: html5.html5Attr._label */


