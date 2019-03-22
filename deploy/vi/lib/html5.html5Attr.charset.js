/* start module: html5.html5Attr.charset */
$pyjs['loaded_modules']['html5.html5Attr.charset'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.charset']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.charset'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.charset'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.charset>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.charset';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5.html5Attr']['charset'] = $pyjs['loaded_modules']['html5.html5Attr.charset'];
	try {


		$m['Charset'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.html5Attr.charset';
			$cls_definition['__md5__'] = '92b5be3d1fde668825a6b242c47a9390';
			$method = $pyjs__bind_method2('_getCharset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '92b5be3d1fde668825a6b242c47a9390') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'element'), 'charset');
			}
	, 1, [null,null,['self']]);
			$cls_definition['_getCharset'] = $method;
			$method = $pyjs__bind_method2('_setCharset', function(val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					val = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '92b5be3d1fde668825a6b242c47a9390') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('charset', val) : $p['setattr']($p['getattr'](self, 'element'), 'charset', val); 
				return null;
			}
	, 1, [null,null,['self'],['val']]);
			$cls_definition['_setCharset'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Charset', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.html5Attr.charset */


/* end module: html5.html5Attr.charset */


