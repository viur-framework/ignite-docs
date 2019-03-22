/* start module: _random */
$pyjs['loaded_modules']['_random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['_random']['__was_initialized__']) return $pyjs['loaded_modules']['_random'];
	var $m = $pyjs['loaded_modules']['_random'];
	$m['__repr__'] = function() { return '<module: _random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '_random';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_32 = new $p['int'](32);
		var $constant_int_1 = new $p['int'](1);
		$m['one'] = $p['long']($constant_int_1);
		$m['Random'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = '_random';
			$cls_definition['__md5__'] = 'd20debacc78a00f4769259e09a6917f9';
			$cls_definition['seed'] = null;
			$method = $pyjs__bind_method2('getrandbits', function(k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					k = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,mask,rand;
				s = '';

        var table = new Array();
        for (var i = 0 ; i < k/32; i++) {
            table[i] = (Math['random']() * 4294967296)['toString'](32);
        }
        s = table['join']("");

				rand = $p['long'](s, $constant_int_32);
				mask = $m['one']['__lshift__'](k)['__sub__']($m['one']);
				return rand['__and__'](mask);
			}
	, 1, [null,null,['self'],['k']]);
			$cls_definition['getrandbits'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('getstate'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('jumpahead', function(n) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        for (var i = 0 ; i < n % 100; i++) Math['random']();

			}
	, 1, [null,null,['self'],['n']]);
			$cls_definition['jumpahead'] = $method;
			$method = $pyjs__bind_method2('random', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var seed;
				if ($p['bool']($p['op_is']($p['getattr'](self, 'seed'), null))) {
					return Math['random']();
				}
				seed = $p['getattr'](self, 'seed');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seed', null) : $p['setattr'](self, 'seed', null); 
				return Math['random'](seed);
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$method = $pyjs__bind_method2('seed', function(n) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('seed', n) : $p['setattr'](self, 'seed', n); 
				return null;
			}
	, 1, [null,null,['self'],['n', null]]);
			$cls_definition['seed'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd20debacc78a00f4769259e09a6917f9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				throw ($p['NotImplementedError']('setstate'));
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Random', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end _random */


/* end module: _random */


