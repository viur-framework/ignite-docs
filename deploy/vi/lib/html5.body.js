/* start module: html5.body */
$pyjs['loaded_modules']['html5.body'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.body']['__was_initialized__']) return $pyjs['loaded_modules']['html5.body'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.body'];
	$m['__repr__'] = function() { return '<module: html5.body>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.body';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['body'] = $pyjs['loaded_modules']['html5.body'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
		$m['document'] = $p['___import___']('html5.document', 'html5', null, false);
		$m['BodyCls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.body';
			$cls_definition['__md5__'] = '829cfae681d07564f98de6cded521d24';
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829cfae681d07564f98de6cded521d24') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
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
				elem = $m['document'];
				$pyjs_kwargs_call($p['$$super']($m['BodyCls'], self), '__init__', null, null, [{'_wrapElem':$m['document']['getElementsByTagName']('body')['__getitem__']($constant_int_0)}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAttached', true) : $p['setattr'](self, '_isAttached', true); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BodyCls', $p['tuple']($bases), $data);
		})();
		$m['_body'] = null;
		$m['Body'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			if ($p['bool']($p['op_is']($m['_body'], null))) {
				$m['_body'] = $m['BodyCls']();
			}
			return $m['_body'];
		};
		$m['Body']['__name__'] = 'Body';

		$m['Body']['__bind_type__'] = 0;
		$m['Body']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.body */


/* end module: html5.body */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.document']
*/
