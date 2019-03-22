/* start module: event */
$pyjs['loaded_modules']['event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['event']['__was_initialized__']) return $pyjs['loaded_modules']['event'];
	var $m = $pyjs['loaded_modules']['event'];
	$m['__repr__'] = function() { return '<module: event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'event';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['EventDispatcher'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'event';
			$cls_definition['__md5__'] = 'f27e6170694432c8b86192e5c21f4ba0';
			$method = $pyjs__bind_method2('__init__', function(name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f27e6170694432c8b86192e5c21f4ba0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['EventDispatcher'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', name) : $p['setattr'](self, '$$name', name); 
				return null;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_genTargetFuncName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f27e6170694432c8b86192e5c21f4ba0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				return $p['sprintf']('on%s', $p['__op_add']($add1=$p['getattr'](self, '$$name')['__getitem__']($constant_int_0)['upper'](),$add2=$p['__getslice']($p['getattr'](self, '$$name'), $constant_int_1, null)));
			}
	, 1, [null,null,['self']]);
			$cls_definition['_genTargetFuncName'] = $method;
			$method = $pyjs__bind_method2('register', function(cb, reset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					reset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f27e6170694432c8b86192e5c21f4ba0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof reset == 'undefined') reset=arguments['callee']['__args__'][4][1];

				if (!( $p['dir'](cb)['__contains__'](self['_genTargetFuncName']()) )) {
				   throw $p['AssertionError']($p['sprintf']('cb must provide a %s method', self['_genTargetFuncName']()));
				 }
				if ($p['bool'](reset)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
				}
				if ($p['bool'](!$p['getattr'](self, 'queue')['__contains__'](cb))) {
					self['queue']['append'](cb);
				}
				return null;
			}
	, 1, [null,null,['self'],['cb'],['reset', false]]);
			$cls_definition['register'] = $method;
			$method = $pyjs__bind_method2('unregister', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f27e6170694432c8b86192e5c21f4ba0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'queue')['__contains__'](cb))) {
					self['queue']['remove'](cb);
				}
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['unregister'] = $method;
			$method = $pyjs__bind_method2('fire', function() {
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
					if (self.prototype['__md5__'] !== 'f27e6170694432c8b86192e5c21f4ba0') {
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
				var $iter1_nextval,$iter1_type,cb,$iter1_iter,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'queue');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					cb = $iter1_nextval['$nextval'];
					$pyjs_kwargs_call(null, $p['getattr'](cb, self['_genTargetFuncName']()), args, kwargs, [{}]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['fire'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventDispatcher', $p['tuple']($bases), $data);
		})();
		$m['viInitializedEvent'] = $m['EventDispatcher']('viInitialized');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end event */


/* end module: event */


