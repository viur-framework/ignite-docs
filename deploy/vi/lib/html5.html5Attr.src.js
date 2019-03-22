/* start module: html5.html5Attr.src */
$pyjs['loaded_modules']['html5.html5Attr.src'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.src']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.src'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.src'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.src>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.src';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['src'] = $pyjs['loaded_modules']['html5.html5Attr.src'];
	$m.__track_lines__[1] = 'html5.html5Attr.src.py, line 1:\n    class Src(object):';
	$m.__track_lines__[2] = 'html5.html5Attr.src.py, line 2:\n    def _getSrc(self):';
	$m.__track_lines__[3] = 'html5.html5Attr.src.py, line 3:\n    return self.element.src';
	$m.__track_lines__[4] = 'html5.html5Attr.src.py, line 4:\n    def _setSrc(self,val):';
	$m.__track_lines__[5] = 'html5.html5Attr.src.py, line 5:\n    self.element.src=val';


	$pyjs['track']['module']='html5.html5Attr.src';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['Src'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.src';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getSrc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.src', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.src';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=3;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'src');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSrc'] = $method;
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_setSrc', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.src', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.src';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$p['getattr'](self, 'element')['src'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSrc'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Src', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.src */


/* end module: html5.html5Attr.src */


