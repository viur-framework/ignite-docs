/* start module: html5.html5Attr.href */
$pyjs['loaded_modules']['html5.html5Attr.href'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.href']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.href'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.href'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.href>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.href';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['href'] = $pyjs['loaded_modules']['html5.html5Attr.href'];
	$m.__track_lines__[1] = 'html5.html5Attr.href.py, line 1:\n    class Href(object):';
	$m.__track_lines__[2] = 'html5.html5Attr.href.py, line 2:\n    def _getHref(self):';
	$m.__track_lines__[7] = 'html5.html5Attr.href.py, line 7:\n    return self.element.href';
	$m.__track_lines__[9] = 'html5.html5Attr.href.py, line 9:\n    def _setHref(self, val):';
	$m.__track_lines__[14] = 'html5.html5Attr.href.py, line 14:\n    self.element.href=val';
	$m.__track_lines__[16] = 'html5.html5Attr.href.py, line 16:\n    def _getHreflang(self):';
	$m.__track_lines__[17] = 'html5.html5Attr.href.py, line 17:\n    return self.element.hreflang';
	$m.__track_lines__[18] = 'html5.html5Attr.href.py, line 18:\n    def _setHreflang(self,val):';
	$m.__track_lines__[19] = 'html5.html5Attr.href.py, line 19:\n    self.element.hreflang=val';
	$m.__track_lines__[21] = 'html5.html5Attr.href.py, line 21:\n    class Target(object):';
	$m.__track_lines__[22] = 'html5.html5Attr.href.py, line 22:\n    def _getTarget(self):';
	$m.__track_lines__[23] = 'html5.html5Attr.href.py, line 23:\n    return self.element.target';
	$m.__track_lines__[24] = 'html5.html5Attr.href.py, line 24:\n    def _setTarget(self,val):';
	$m.__track_lines__[25] = 'html5.html5Attr.href.py, line 25:\n    self.element.target=val';


	$pyjs['track']['module']='html5.html5Attr.href';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['Href'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.href';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getHref', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=7;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'href');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHref'] = $method;
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('_setHref', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=14;
			$p['getattr'](self, 'element')['href'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHref'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('_getHreflang', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=17;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'hreflang');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHreflang'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('_setHreflang', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			$p['getattr'](self, 'element')['hreflang'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHreflang'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Href', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=21;
	$m['Target'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.href';
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('_getTarget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=23;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'target');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTarget'] = $method;
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('_setTarget', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.href', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.href';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			$p['getattr'](self, 'element')['target'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTarget'] = $method;
		$pyjs['track']['lineno']=21;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Target', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.href */


/* end module: html5.html5Attr.href */


