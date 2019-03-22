/* start module: html5.html5Attr.rel */
$pyjs['loaded_modules']['html5.html5Attr.rel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.rel']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.rel'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.rel'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.rel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.rel';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['rel'] = $pyjs['loaded_modules']['html5.html5Attr.rel'];
	$m.__track_lines__[1] = 'html5.html5Attr.rel.py, line 1:\n    class Rel(object):';
	$m.__track_lines__[2] = 'html5.html5Attr.rel.py, line 2:\n    def _getRel(self):';
	$m.__track_lines__[3] = 'html5.html5Attr.rel.py, line 3:\n    return self.element.rel';
	$m.__track_lines__[4] = 'html5.html5Attr.rel.py, line 4:\n    def _setRel(self,val):';
	$m.__track_lines__[5] = 'html5.html5Attr.rel.py, line 5:\n    self.element.rel=val';


	$pyjs['track']['module']='html5.html5Attr.rel';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['Rel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.rel';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getRel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.rel', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.rel';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=3;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'rel');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRel'] = $method;
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_setRel', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.rel', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.rel';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$p['getattr'](self, 'element')['rel'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRel'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Rel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.rel */


/* end module: html5.html5Attr.rel */


