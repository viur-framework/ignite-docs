/* start module: html5.param */
$pyjs['loaded_modules']['html5.param'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.param']['__was_initialized__']) return $pyjs['loaded_modules']['html5.param'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.param'];
	$m['__repr__'] = function() { return '<module: html5.param>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.param';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['param'] = $pyjs['loaded_modules']['html5.param'];
	try {


		$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
		$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
		$m['Value'] = $p['___import___']('html5.html5Attr.form.Value', 'html5', null, false);
		$m['Param'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.param';
			$cls_definition['__md5__'] = 'ac4562617dc88c8cf4f732d536400174';
			$cls_definition['_baseClass'] = 'param';
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
					if (self.prototype['__md5__'] !== 'ac4562617dc88c8cf4f732d536400174') {
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

				$pyjs_kwargs_call($p['$$super']($m['Param'], self), '__init__', args, kwargs, [{}]);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Widget'],$m['Name'],$m['Value']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Param', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.param */


/* end module: html5.param */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.form.Name', 'html5.html5Attr', 'html5.html5Attr.form', 'html5.html5Attr.form.Value']
*/
