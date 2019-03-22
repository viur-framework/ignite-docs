/* start module: html5.ext.button */
$pyjs['loaded_modules']['html5.ext.button'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.button']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.button'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.button'];
	$m['__repr__'] = function() { return '<module: html5.ext.button>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.button';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5.ext']['button'] = $pyjs['loaded_modules']['html5.ext.button'];
	try {


		$m['fButton'] = $p['___import___']('html5.form.Button', 'html5.ext', null, false);
		$m['Button'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.button';
			$cls_definition['__md5__'] = 'eec7df861e7b436ee7240ba835528c93';
			$method = $pyjs__bind_method2('__init__', function(txt, callback) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					txt = arguments[1];
					callback = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'eec7df861e7b436ee7240ba835528c93') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof callback != 'undefined') {
						if (callback !== null && typeof callback['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = callback;
							callback = arguments[3];
						}
					} else 					if (typeof txt != 'undefined') {
						if (txt !== null && typeof txt['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = txt;
							txt = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof txt == 'undefined') txt=arguments['callee']['__args__'][3][1];
				if (typeof callback == 'undefined') callback=arguments['callee']['__args__'][4][1];

				$pyjs_kwargs_call($p['$$super']($m['Button'], self), '__init__', args, kwargs, [{}]);
				self['__setitem__']('class', 'button');
				self['__setitem__']('type', 'button');
				if ($p['bool'](!$p['op_is'](txt, null))) {
					self['setText'](txt);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', callback) : $p['setattr'](self, 'callback', callback); 
				self['sinkEvent']('onClick');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['txt', null],['callback', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setText', function(txt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					txt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eec7df861e7b436ee7240ba835528c93') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_is'](txt, null))) {
					$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('innerHTML', txt) : $p['setattr']($p['getattr'](self, 'element'), 'innerHTML', txt); 
				}
				else {
					$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('innerHTML', '') : $p['setattr']($p['getattr'](self, 'element'), 'innerHTML', ''); 
				}
				return null;
			}
	, 1, [null,null,['self'],['txt']]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eec7df861e7b436ee7240ba835528c93') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['stopPropagation']();
				event['preventDefault']();
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'callback'), null))) {
					self['callback'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['fButton']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Button', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.ext.button */


/* end module: html5.ext.button */


/*
PYJS_DEPS: ['html5.form.Button', 'html5', 'html5.form']
*/
