/* start module: pyjslib */
$pyjs['loaded_modules']['pyjslib'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjslib']['__was_initialized__']) return $pyjs['loaded_modules']['pyjslib'];
	var $m = pyjslib = $pyjs['loaded_modules']['pyjslib'];
	$m['__repr__'] = function() { return '<module: pyjslib>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m['__name__'] = __mod_name__;
	var $add3,$add2,$add6,$add4,$add5,$add1;
	;
	$m['platform'] = $pyjs['platform'];
	$m['sys'] = null;
	$m['dynamic'] = null;
	$m['Ellipsis'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs['loaded_modules']['sys']['save_exception_stack']();

    if (!$pyjs['in_try_except']) {
        var $pyjs_msg = $pyjs['loaded_modules']['sys']['_get_traceback'](err);
        $pyjs['__active_exception_stack__'] = null;
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
		if (typeof bases == 'undefined') bases=arguments['callee']['__args__'][3][1];
		if (typeof methods == 'undefined') methods=arguments['callee']['__args__'][4][1];
		var $and1,$and2,$and3,main_base;
		if ($p['bool'](($p['bool']($and1=bases)?($p['bool']($and2=$p['hasattr'](bases['__getitem__']($constant_int_0), '__class__'))?$p['hasattr'](bases['__getitem__']($constant_int_0), '__new__'):$and2):$and1))) {
			main_base = bases['__getitem__']($constant_int_0);
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class']['__name__'] = '_create_class';

	$m['_create_class']['__bind_type__'] = 0;
	$m['_create_class']['__args__'] = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
		if (typeof bases == 'undefined') bases=arguments['callee']['__args__'][3][1];
		if (typeof methods == 'undefined') methods=arguments['callee']['__args__'][4][1];
		var $iter1_nextval,$iter1_idx,$attr1,k,$attr2,$and4,$and5,$iter1_iter,mth,$iter1_array,$iter1_type;
		if ($p['bool'](($p['bool']($and4=$p['op_is'](bases, null))?$p['op_is'](methods, null):$and4))) {
			if ($p['bool']($p['isinstance'](clsname, $p['str']))) {
				return $p['str'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['bool']))) {
				return $p['bool'];
			}
			if ($p['bool']($p['hasattr'](clsname, '__class__'))) {
				return clsname['__class__'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['int']))) {
				return $p['int'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float']))) {
				return $p['float'];
			}
			if ($p['bool'](typeof clsname == 'number')) {
				return $p['float'];
			}
			if ($p['bool'](clsname == null)) {
				return (typeof NoneType == "undefined"?$m['NoneType']:NoneType);
			}
			if ($p['bool'](typeof clsname == 'function')) {
				return (typeof FunctionType == "undefined"?$m['FunctionType']:FunctionType);
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ($p['bool'](methods)) {
			$iter1_iter = methods['keys']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				k = $iter1_nextval['$nextval'];
				mth = methods['__getitem__'](k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ($p['bool'](bases)) {
bss = bases['__array'];
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type']['__name__'] = 'type';

	$m['type']['__bind_type__'] = 0;
	$m['type']['__args__'] = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'cb8623ec7ab16ef108a15335051acf66';
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'cb8623ec7ab16ef108a15335051acf66') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap['indexOf'](name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self['__is_instance__']
            && self[name] !== null
            && typeof self[name]['__set__'] == 'function') {
            self[name]['__set__'](self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['object']['__str__'] = function (self) {
    if (typeof self == 'undefined') {
        self = this;
    }
    var s;
    if (self['__is_instance__'] === true) {
        s = "instance of ";
    } else if (self['__is_instance__'] === false) {
        s = "class ";
    } else {
        s = "javascript " + typeof self + " ";
    }
    if (self['__module__']) {
        s += self['__module__'] + ".";
    }
    if (typeof self['__name__'] != 'undefined') {
        return s + self['__name__'];
    }
    return s + "<unknown>";
};
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'd18c09c07974ad0482e58163c0d89f91';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['TypeClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'e8d06874b7a525e88b4475846b899d0b';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var cls = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var cls = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (cls.prototype['__md5__'] !== 'e8d06874b7a525e88b4475846b899d0b') {
					if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
					}
				}
			}
			var $attr3,$attr4;
			return $p['sprintf']("<type '%s'>", cls['__name__']);
		}
	, 1, [null,null,['cls']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('TypeClass', $bases, $cls_definition);
	})();
	$m['NoneType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '45239554bbf34972bc1d0080ede86ba3';
		$method = $pyjs__bind_method2('__hash__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '45239554bbf34972bc1d0080ede86ba3') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return $constant_int_0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__hash__'] = $method;
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('NoneType', $bases, $cls_definition);
	})();
	$m['ModuleType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '79ee3c2fd612e2ab1e7db1def95adc79';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('ModuleType', $bases, $cls_definition);
	})();
	$m['FunctionType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '965313ac0804d1881f8be69fe60579b3';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FunctionType', $bases, $cls_definition);
	})();
	$m['CodeType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '290520e20b2c45aca4e97e80f366e459';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('CodeType', $bases, $cls_definition);
	})();
	$m['TracebackType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '1794f032b13fccf67f48decac07fa068';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('TracebackType', $bases, $cls_definition);
	})();
	$m['FrameType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '236da74fb1d61df0d3e753ef69a323d6';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FrameType', $bases, $cls_definition);
	})();
	$m['EllipsisType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '42c81936a7d384a2b0c729c3d9807841';
		$method = $pyjs__bind_method2('__new__', function(cls) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			if ($p['bool']($p['op_is']($m['Ellipsis'], null))) {
				return $m['object']['__new__'](cls);
			}
			else {
				return $m['Ellipsis'];
			}
			return null;
		}
	, 3, [null,null,['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '42c81936a7d384a2b0c729c3d9807841') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '42c81936a7d384a2b0c729c3d9807841') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('EllipsisType', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a['__number__'] << 8) | b['__number__']) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a['__v'] == b['__v'];
            case 0x0404:
                return a['__cmp__'](b) == 0;
        }
    }
    return false;

	};
	$m['op_is']['__name__'] = 'op_is';

	$m['op_is']['__bind_type__'] = 0;
	$m['op_is']['__args__'] = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a['__is_instance__'] === false &&
            b['__is_instance__'] === false) {
            return true;
        }
    }
    switch ((a['__number__'] << 8) | b['__number__']) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b['__v'];
        case 0x0201:
            return a['__v'] == b;
        case 0x0202:
            return a['__v'] == b['__v'];
        case 0x0104:
        case 0x0204:
            a = new $p['long'](a['valueOf']());
        case 0x0404:
            return a['__cmp__'](b) == 0;
        case 0x0402:
            return a['__cmp__'](new $p['long'](b['valueOf']())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a['__eq__'] == 'function') {
            if (typeof b['__eq__'] != 'function') {
                return false;
            }
            if (a['__eq__'] === b['__eq__']) {
                return a['__eq__'](b);
            }
            if ($p['_isinstance'](a, b)) {
                return a['__eq__'](b);
            }
            return false;
        }
        if (typeof a['__cmp__'] == 'function') {
            if (typeof b['__cmp__'] != 'function') {
                return false;
            }
            if (a['__cmp__'] === b['__cmp__']) {
                return a['__cmp__'](b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a['__cmp__'](b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b['__eq__'] == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b['__eq__'](a);
            }
            return false;
        }
        if (typeof b['__cmp__'] == 'function') {
            // typeof bXXX['__cmp__'] != 'function'
            // aXXX['__cmp__'] !== bXXX['__cmp__']
            if ($p['_isinstance'](a, b)) {
                return b['__cmp__'](a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq']['__name__'] = 'op_eq';

	$m['op_eq']['__bind_type__'] = 0;
	$m['op_eq']['__args__'] = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    switch (v['__number__']) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v['__pos__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary +: '%r'", v)));
		return null;
	};
	$m['op_uadd']['__name__'] = 'op_uadd';

	$m['op_uadd']['__bind_type__'] = 0;
	$m['op_uadd']['__args__'] = [null,null,['v']];
	$m['op_usub'] = function(v) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    switch (v['__number__']) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v['__neg__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_usub']['__name__'] = 'op_usub';

	$m['op_usub']['__bind_type__'] = 0;
	$m['op_usub']['__args__'] = [null,null,['v']];
	$m['__op_add'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add']['__name__'] = '__op_add';

	$m['__op_add']['__bind_type__'] = 0;
	$m['__op_add']['__args__'] = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x!== null && y!== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y['__v'];
            case 0x0201:
                return x['__v'] + y;
            case 0x0202:
                return new $p['int'](x['__v'] + y['__v']);
            case 0x0204:
                return (new $p['long'](x['__v']))['__add'](y);
            case 0x0402:
                return x['__add'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__add'](y);
        }
        if (!x['__number__']) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y['__add__'](x);
            if (typeof x['__add__'] == 'function') return x['__add__'](y);
        }
        if (!y['__number__'] && typeof y['__radd__'] == 'function') return y['__radd__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add']['__name__'] = 'op_add';

	$m['op_add']['__bind_type__'] = 0;
	$m['op_add']['__args__'] = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub']['__name__'] = '__op_sub';

	$m['__op_sub']['__bind_type__'] = 0;
	$m['__op_sub']['__args__'] = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x!== null && y!== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y['__v'];
            case 0x0201:
                return x['__v'] - y;
            case 0x0202:
                return new $p['int'](x['__v'] - y['__v']);
            case 0x0204:
                return (new $p['long'](x['__v']))['__sub'](y);
            case 0x0402:
                return x['__sub'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__sub'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y['__sub__'](x);
            if (typeof x['__sub__'] == 'function') return x['__sub__'](y);
        }
        if (!y['__number__'] && typeof y['__rsub__'] == 'function') return y['__rsub__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for -: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub']['__name__'] = 'op_sub';

	$m['op_sub']['__bind_type__'] = 0;
	$m['op_sub']['__args__'] = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x / y);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x / y['__v']);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x['__v'] / y);
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['int'](Math['floor'](x['__v'] / y['__v']));
            case 0x0204:
                return (new $p['long'](x['__v']))['__floordiv'](y);
            case 0x0402:
                return x['__floordiv'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__floordiv'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y['__floordiv__'](x);
            if (typeof x['__floordiv__'] == 'function') return x['__floordiv__'](y);
        }
        if (!y['__number__'] && typeof y['__rfloordiv__'] == 'function') return y['__rfloordiv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for //: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv']['__name__'] = 'op_floordiv';

	$m['op_floordiv']['__bind_type__'] = 0;
	$m['op_floordiv']['__args__'] = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y['__v'];
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y;
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['int'](x['__v'] / y['__v']);
            case 0x0204:
                return (new $p['long'](x['__v']))['__div'](y);
            case 0x0402:
                return x['__div'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__div'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y['__div__'](x);
            if (typeof x['__div__'] == 'function') return x['__div__'](y);
        }
        if (!y['__number__'] && typeof y['__rdiv__'] == 'function') return y['__rdiv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div']['__name__'] = 'op_div';

	$m['op_div']['__bind_type__'] = 0;
	$m['op_div']['__args__'] = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y['__v'];
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y;
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y['__v'];
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y['__truediv__'](x);
            if (typeof x['__truediv__'] == 'function') return x['__truediv__'](y);
        }
        if (!y['__number__'] && typeof y['__rtruediv__'] == 'function') return y['__rtruediv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv']['__name__'] = 'op_truediv';

	$m['op_truediv']['__bind_type__'] = 0;
	$m['op_truediv']['__args__'] = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y['__v'];
            case 0x0201:
                return x['__v'] * y;
            case 0x0202:
                return new $p['int'](x['__v'] * y['__v']);
            case 0x0204:
                return (new $p['long'](x['__v']))['__mul'](y);
            case 0x0402:
                return x['__mul'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__mul'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y['__mul__'](x);
            if (typeof x['__mul__'] == 'function') return x['__mul__'](y);
        }
        if (!y['__number__'] && typeof y['__rmul__'] == 'function') return y['__rmul__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for *: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul']['__name__'] = 'op_mul';

	$m['op_mul']['__bind_type__'] = 0;
	$m['op_mul']['__args__'] = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y['__v'];
                return (v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x['__v'] % y;
                return (v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x['__v'] % y['__v'];
                return new $p['int'](v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0204:
                return (new $p['long'](x['__v']))['__mod'](y);
            case 0x0402:
                return x['__mod'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__mod'](y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y['__mod__'](x);
            if (typeof x['__mod__'] == 'function') return x['__mod__'](y);
        }
        if (!y['__number__'] && typeof y['__rmod__'] == 'function') return y['__rmod__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod']['__name__'] = 'op_mod';

	$m['op_mod']['__bind_type__'] = 0;
	$m['op_mod']['__args__'] = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x, y);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x,y['__v']);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x['__v'],y);
            case 0x0202:
                return x['__pow__'](y);
            case 0x0204:
                return (new $p['long'](x['__v']))['__pow'](y);
            case 0x0402:
                return x['__pow'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__pow'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y['__pow__'](x);
            if (typeof x['__pow__'] == 'function') return x['__pow__'](y);
        }
        if (!y['__number__'] && typeof y['__rpow__'] == 'function') return y['__rpow__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow']['__name__'] = 'op_pow';

	$m['op_pow']['__bind_type__'] = 0;
	$m['op_pow']['__args__'] = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v['__invert__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_invert']['__name__'] = 'op_invert';

	$m['op_invert']['__bind_type__'] = 0;
	$m['op_invert']['__args__'] = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__lshift__'](y);
            case 0x0204:
                return y['__rlshift__'](x);
            case 0x0402:
                return x['__lshift'](y['__v']);
            case 0x0404:
                return x['__lshift'](y['valueOf']());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x['__lshift__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y['__rlshift__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for <<: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft']['__name__'] = 'op_bitshiftleft';

	$m['op_bitshiftleft']['__bind_type__'] = 0;
	$m['op_bitshiftleft']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__rshift__'](y);
            case 0x0204:
                return y['__rrshift__'](x);
            case 0x0402:
                return x['__rshift'](y['__v']);
            case 0x0404:
                return x['__rshift'](y['valueOf']());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x['__rshift__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y['__rrshift__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for >>: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright']['__name__'] = 'op_bitshiftright';

	$m['op_bitshiftright']['__bind_type__'] = 0;
	$m['op_bitshiftright']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__and__'](y);
            case 0x0204:
                return y['__and'](new $p['long'](x));
            case 0x0402:
                return x['__and'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__and'](y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x['__and__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y['__rand__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for &: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2']['__name__'] = 'op_bitand2';

	$m['op_bitand2']['__bind_type__'] = 0;
	$m['op_bitand2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res['__and__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i]['__rand__'](r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i]['__rand__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add1='unsupported operand type(s) for &: ',$add2=', '['join'](function(){
		var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m['args']:args));
	$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
	while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter2_nextval['$nextval'];
		$collcomp1['append']($p['repr']($m['a']));
	}

	return $collcomp1;}()))));

};

	$m['op_bitxor2'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__xor__'](y);
            case 0x0204:
                return y['__xor'](new $p['long'](x));
            case 0x0402:
                return x['__xor'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__xor'](y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x['__xor__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y['__rxor__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for ^: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2']['__name__'] = 'op_bitxor2';

	$m['op_bitxor2']['__bind_type__'] = 0;
	$m['op_bitxor2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res['__xor__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i]['__rxor__'](r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i]['__rxor__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add3='unsupported operand type(s) for ^: ',$add4=', '['join'](function(){
		var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
	$iter3_iter = $m['args'];
	$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
	while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter3_nextval['$nextval'];
		$collcomp2['append']($p['repr']($m['a']));
	}

	return $collcomp2;}()))));

};

	$m['op_bitor2'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__or__'](y);
            case 0x0204:
                return y['__or'](new $p['long'](x));
            case 0x0402:
                return x['__or'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__or'](y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x['__or__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y['__ror__'](x);
        }
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for |: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2']['__name__'] = 'op_bitor2';

	$m['op_bitor2']['__bind_type__'] = 0;
	$m['op_bitor2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res['__or__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i]['__ror__'](r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i]['__ror__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add5='unsupported operand type(s) for |: ',$add6=', '['join'](function(){
		var $iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
	$iter4_iter = $m['args'];
	$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
	while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter4_nextval['$nextval'];
		$collcomp3['append']($p['repr']($m['a']));
	}

	return $collcomp3;}()))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
		if (typeof module_name == 'undefined') module_name=arguments['callee']['__args__'][4][1];
		if (typeof get_base == 'undefined') get_base=arguments['callee']['__args__'][5][1];
		var $and8,$and14,$and9,$and13,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,$attr25,$and15,is_module_object,$attr28,$attr18,in_context,$and11,$attr27,$attr16,$attr26,$attr11,$and6,$attr22,objName,$sub2,$sub1,$and16,$attr9,$attr8,contextTopName,$attr5,$attr7,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,pyjslib,path_parts,topName,inContextTopName,$and10,$and12,depth,inContextImportName,inContextParentName,$add7,$and17,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs['track']['module'];
		sys = $pyjs['loaded_modules']['sys'];
		pyjslib = $pyjs['loaded_modules']['pyjslib'];
		if ($p['bool'](sys['__was_initialized__'] != true)) {
			module = $pyjs['loaded_modules'][path];
			module();
$pyjs['track']['module'] = save_track_module;
			if ($p['bool']($m['op_eq'](path, 'sys'))) {
				module['modules'] = $p['dict']($p['dict']([['pyjslib', pyjslib], ['__builtin__', pyjslib], ['builtins', pyjslib], ['sys', module]]));
$pyjs['loaded_modules']['__builtin__'] = pyjslib;
$pyjs['loaded_modules']['builtins'] = pyjslib;
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts['length']-1];
		parentName = path_parts['slice']($constant_int_0, $m['__op_sub']($sub1=path_parts['length'],$sub2=$constant_int_1))['join']('.');
		if ($p['bool']($m['op_is'](context, null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = $m['__op_add']($add9=$m['__op_add']($add7=context,$add8='.'),$add10=importName);
			if ($p['bool'](!$p['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = $m['__op_add']($add13=$m['__op_add']($add11=context,$add12='.'),$add14=parentName);
			}
			inContextTopName = $m['__op_add']($add17=$m['__op_add']($add15=context,$add16='.'),$add18=topName);
			contextTopName = context['__split']('.')[0];
			if ($p['bool'](($p['bool']($and6=($p['cmp'](depth, $constant_int_1) == 1))?sys['modules']['has_key'](inContextParentName):$and6))) {
				module = sys['modules']['__getitem__'](inContextParentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][inContextTopName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return sys['modules']['__getitem__'](inContextImportName);
			}
			else if ($p['bool'](($p['bool']($and8=($p['cmp'](depth, $constant_int_1) == 1))?typeof (module = $pyjs['loaded_modules'][inContextParentName]) != 'undefined':$and8))) {
				sys['modules']['__setitem__'](inContextParentName, module);
module['__was_initialized__'] = false;
				module(null);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][inContextTopName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return sys['modules']['__getitem__'](inContextImportName);
			}
			if ($p['bool'](typeof (module = $pyjs['loaded_modules'][inContextImportName]) != 'undefined')) {
				sys['modules']['__setitem__'](inContextImportName, module);
module['__was_initialized__'] = false;
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return module;
			}
			if ($p['bool'](!$p['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if ($p['bool'](typeof (module = $pyjs['loaded_modules'][inContextTopName]) != 'function')) {
					in_context = false;
					if ($p['bool']($pyjs['options']['dynamic_loading'])) {
						module = (typeof __dynamic_load__ == "undefined"?$m['__dynamic_load__']:__dynamic_load__)(inContextTopName);
						if ($p['bool'](typeof module == 'function')) {
							in_context = true;
							if ($p['bool']($m['op_eq'](depth, $constant_int_1))) {
								module(module_name);
$pyjs['track']['module'] = save_track_module;
								return module;
							}
							else {
								module(null);
								if ($p['bool'](($p['bool']($and10=$m['op_eq'](depth, $constant_int_2))?typeof module[objName] != 'undefined':$and10))) {
									if ($p['bool'](get_base)) {
										return $pyjs['loaded_modules'][inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ($p['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ($p['bool'](!$p['bool'](in_context))) {
			if ($p['bool'](($p['bool']($and12=parentName)?sys['modules']['has_key'](parentName):$and12))) {
				module = sys['modules']['__getitem__'](parentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][topName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return sys['modules']['__getitem__'](importName);
			}
			else if ($p['bool'](($p['bool']($and14=parentName)?typeof (module = $pyjs['loaded_modules'][parentName]) != 'undefined':$and14))) {
				sys['modules']['__setitem__'](parentName, module);
module['__was_initialized__'] = false;
				module(null);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][topName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return sys['modules']['__getitem__'](importName);
			}
			if ($p['bool'](typeof (module = $pyjs['loaded_modules'][importName]) != 'undefined')) {
				sys['modules']['__setitem__'](importName, module);
				if ($p['bool'](($p['bool']($and16=!$m['op_eq'](importName, 'pyjslib'))?!$m['op_eq'](importName, 'sys'):$and16))) {
module['__was_initialized__'] = false;
				}
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return module;
			}
		}
		if ($p['bool']($pyjs['options']['dynamic_loading'])) {
			module = (typeof __dynamic_load__ == "undefined"?$m['__dynamic_load__']:__dynamic_load__)(importName);
			if ($p['bool'](typeof module== 'function')) {
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___']['__name__'] = '___import___';

	$m['___import___']['__bind_type__'] = 0;
	$m['___import___']['__args__'] = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $add28,$add30,$or1,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs['loaded_modules'][importName];
		if ($p['bool'](($p['bool']($or1=$m['op_is']($m['sys'], null))?$or1:($p['bool']($or2=$m['op_is']($m['dynamic'], null))?$or2:$m['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add25=$m['__op_add']($add23=$m['__op_add']($add21=$m['__op_add']($add19='lib/',$add20=importName),$add22='.__'),$add24=$m['platform']),$add26='__.js'));
				module = $pyjs['loaded_modules'][importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add29=$m['__op_add']($add27='lib/',$add28=importName),$add30='.js'));
				module = $pyjs['loaded_modules'][importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			if ($p['bool'](typeof module== 'undefined')) {
				$m['__nondynamic_modules__']['__setitem__'](importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__']['__name__'] = '__dynamic_load__';

	$m['__dynamic_load__']['__bind_type__'] = 0;
	$m['__dynamic_load__']['__args__'] = [null,null,['importName']];
	$m['__import_all__'] = function(path, context, namespace, module_name, get_base) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
		if (typeof module_name == 'undefined') module_name=arguments['callee']['__args__'][5][1];
		if (typeof get_base == 'undefined') get_base=arguments['callee']['__args__'][6][1];
		var $iter5_nextval,$iter5_idx,name,$iter6_idx,$iter6_type,$iter5_array,module,$iter6_array,$iter5_iter,$iter6_iter,$iter5_type,$iter6_nextval;
		module = $m['___import___'](path, context, module_name, get_base);
		if ($p['bool'](typeof module['__all__'] == 'undefined')) {
			$iter5_iter = $p['dir'](module);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				name = $iter5_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](name['startswith']('_')))) {
namespace[name] = module[name];
				}
			}
		}
		else {
			$iter6_iter = module['__all__'];
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				name = $iter6_nextval['$nextval'];
namespace[name] = module[name];
			}
		}
		return null;
	};
	$m['__import_all__']['__name__'] = '__import_all__';

	$m['__import_all__']['__bind_type__'] = 0;
	$m['__import_all__']['__args__'] = [null,null,['path'],['context'],['namespace'],['module_name', null],['get_base', true]];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'b85ed1ae30f12d496b01fe7803b763cc';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

				if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'b85ed1ae30f12d496b01fe7803b763cc') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['args'] = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				index = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'b85ed1ae30f12d496b01fe7803b763cc') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'b85ed1ae30f12d496b01fe7803b763cc') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add32,$add33,$add31,$add34,$attr30,$attr29;
			return $m['__op_add']($add33=$m['__op_add']($add31=self['__name__'],$add32=': '),$add34=self['__str__']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'b85ed1ae30f12d496b01fe7803b763cc') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr33,$attr32,$attr31,$attr37,$attr36,$attr35,$attr34,$attr38;
			if ($p['bool']($m['op_is']($p['len'](self['args']), $constant_int_0))) {
				return '';
			}
			else if ($p['bool']($m['op_is']($p['len'](self['args']), $constant_int_1))) {
				return $p['str'](self['args']['__getitem__']($constant_int_0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'b85ed1ae30f12d496b01fe7803b763cc') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add36,$add35,$attr44,$attr42,$attr43,$attr40,$attr41,$attr39;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}
			return $m['__op_add']($add35=self['__name__'],$add36=$p['repr'](self['args']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7da51445799e53803ff525f7592982e7';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'a866afd136ea0dd3f83d039eb61e4ae8';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['SystemExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '90a3e71a4086a3ec447c7b9c80dbc6d9';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('SystemExit', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '59035f36ef6aad3fccf62e16d0226b63';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ba493465645bb7cf09974df33ccf3ed5';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7f79e4f81b20ab36c5efab83a1fe7429';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['StopIteration'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ab42528cd88a12f87f1eeef2724a1da0';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StopIteration', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '55f6328fb7df91e9a620cc42673df1c2';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '339ebd84114a6e4879449f817e765877';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '648ad33c654cb1361801512e356f39ab';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '438e1e22d039d6a44b400a214e772006';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ffe06cade236826d655e9b768139dfd0';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '448e3410aae2c5c53ac32b860b0274d2';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '90d2cdba8ff5958f09585ffbce94e4aa';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '1cf76b9006b2565aa2ccc721e715dc95';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4aa3bdd38ea7028f26080f8d33ae26d1';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['SystemError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'b0118e0834fff3212c3ec6a6c4159770';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('SystemError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '61fca1de1a4c3689bc91aa186599fa54';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '61fca1de1a4c3689bc91aa186599fa54') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr51,$attr50,$attr52,$attr46,$attr47,$attr45,$attr48,$attr49;
			if ($p['bool']($m['op_is']($p['len'](self['args']), $constant_int_0))) {
				return '';
			}
			else if ($p['bool']($m['op_is']($p['len'](self['args']), $constant_int_1))) {
				return $p['repr'](self['args']['__getitem__']($constant_int_0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4fbd47351162409f2606b2f6c45525f8';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '735ee27d74b21742a0387a82104289f3';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'f86b9be0dec16ecdba1f7e2fdedc6e83';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'a62115387b74dfa3ef2a72680419e336';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4e5258c530abe4ba6d474bffd34a70fd';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err['message'];
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse']['prototype'] = new Error();
$p['TryElse']['__name__'] = 'TryElse';


String['prototype']['rfind'] = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this['substring'](start)['lastIndexOf'](sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this['lastIndexOf'](sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub['length']>end) return -1;
    return pos;
};

String['prototype']['find'] = function(sub, start, end) {
    var pos=this['indexOf'](sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub['length']>end) return -1;
    return pos;
};
String['prototype']['index'] = function(sub, start, end) {
    var pos = this['find'](sub, start, end);
    if (pos < 0)
        throw $m['ValueError']('substring not found');
    return pos;
}
String['prototype']['count'] = function(sub, start, end) {
    var pos, count = 0, n = sub['length'];
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];
    while (start < end) {
        pos = this['find'](sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String['prototype']['format'] = function() {
    var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

    var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
    if (typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
        if (typeof kw != 'undefined') args['__array']['push'](kw);
        kw = arguments[arguments['length']+1];
    } else {
        delete kw['$pyjs_is_kwarg'];
    }
    if (typeof kw == 'undefined') {
        kw = $p['__empty_dict']();
    }
    return $p['_string_format'](this, args, kw);
}
String['prototype']['format']['__args__'] = ['args', ['kw']];

String['prototype']['join'] = function(data) {
    var text="";

    if (data['constructor'] === Array) {
        return data['join'](this);
    } else if (typeof data['__iter__'] == 'function') {
        if (typeof data['__array'] == 'object') {
            return data['__array']['join'](this);
        }
        var iter=data['__iter__']();
        if (typeof iter['__array'] == 'object') {
            return iter['__array']['join'](this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter['$genfunc'] == 'function') {
            while (typeof (item=iter['next'](true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter['next']();
                }
            }
            catch (e) {
                if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
            }
        }
        return data['join'](this);
    }

    return text;
};

String['prototype']['isdigit'] = function() {
    return (this['match'](/^\d+$/g) !== null);
};

String['prototype']['isalnum'] = function() {
    return (this['match'](/^[a-zA-Z\d]+$/g) !== null);
};

String['prototype']['isalpha'] = function() {
    return (this['match'](/^[a-zA-Z]+$/g) !== null);
};

String['prototype']['isupper'] = function() {
    return (this['match'](/[a-z]/g) === null);
};

String['prototype']['islower'] = function() {
    return (this['match'](/[A-Z]/g) === null);
};

String['prototype']['isspace'] = function() {
    return (this.match(/^\s+$/g) !== null);
};

String['prototype']['__replace']=String['prototype']['replace'];

String['prototype']['$$replace'] = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this['__replace'](old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this['length']) {
        if (do_max && !count--) break;

        pos=this['indexOf'](old, start);
        if (pos<0) break;

        new_str+=this['substring'](start, pos) + replace;
        start=pos+old['length'];
    }
    if (start<this['length']) new_str+=this['substring'](start);

    return new_str;
};

String['prototype']['__contains__'] = function(s){
    return this['indexOf'](s)>=0;
};

String['prototype']['__split'] = String['prototype']['split'];

String['prototype']['$$split'] = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject['length'] == 0) {
            return items;
        }
        subject=subject['strip']();
        subject=subject['$$replace'](/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject['length'] == 0) {
        items['__array']['push']('');
        return items;
    }

    while (start<subject['length']) {
        if (do_max && !maxsplit--) break;

        pos=subject['indexOf'](sep, start);
        if (pos<0) break;

        items['__array']['push'](subject['substring'](start, pos));
        start=pos+sep['length'];
    }
    if (start<=subject['length']) items['__array']['push'](subject['substring'](start));

    return items;
};

String['prototype']['rsplit'] = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject['length'] == 0) {
            return items;
        }
        subject=subject['strip']();
        subject=subject['$$replace'](/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject['length'] == 0) {
        items['__array']['push']('');
        return items;
    }

    while (subject['length'] > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject['lastIndexOf'](sep);
        if (pos<0) break;

        items['__array']['push'](subject['substr'](pos+sep['length']));
        subject = subject['substr'](0, pos);
    }
    if (subject['length'] > 0) items['__array']['push'](subject);
    items['__array']['reverse']()

    return items;
};
String['prototype']['splitlines'] = function(keepends) {
    var items = this['$$split']("\n");
    if (typeof keepends != 'undefined' && keepends)
    {
        for (var i=0; i<items['__array']['length']; i++)
        {
            items['__array'][i] = items['__array'][i] + "\n";
        }
    }
    return items;
}
if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String['prototype']['__iter__'] = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s['length']) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s['charAt'](i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String['prototype']['__iter__'] = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s['length']) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s['charAt'](i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String['prototype']['strip'] = function(chars) {
    return this['lstrip'](chars)['rstrip'](chars);
};

String['prototype']['lstrip'] = function(chars) {
    if (typeof chars == 'undefined') return this['$$replace'](/^\s+/, "");
    if (chars['length'] == 0) return this;
    return this['$$replace'](new RegExp("^[" + chars + "]+"), "");
};

String['prototype']['rstrip'] = function(chars) {
    if (typeof chars == 'undefined') return this['$$replace'](/\s+$/, "");
    if (chars['length'] == 0) return this;
    return this['$$replace'](new RegExp("[" + chars + "]+$"), "");
};

String['prototype']['startswith'] = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];

    if ((end - start) < prefix['length']) return false;
    if (this['substr'](start, prefix['length']) == prefix) return true;
    return false;
};

String['prototype']['endswith'] = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];

    if ((end - start) < suffix['length']) return false;
    if (this['substr'](end - suffix['length'], suffix['length']) == suffix) return true;
    return false;
};

String['prototype']['ljust'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    return this + new Array(width+1 - this['length'])['join'](fillchar);
};

String['prototype']['rjust'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    return new Array(width + 1 - this['length'])['join'](fillchar) + this;
};

String['prototype']['center'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    var padlen = width - this['length'];
    var right = Math['ceil'](padlen / 2);
    var left = padlen - right;
    return new Array(left+1)['join'](fillchar) + this + new Array(right+1)['join'](fillchar);
};

String['prototype']['__getslice__'] = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this['length'] + lower;
    }
    if (upper === null) {
        upper=this['length'];
    } else if (upper < 0) {
       upper = this['length'] + upper;
    }
    return this['substring'](lower, upper);
};

String['prototype']['__getitem__'] = function(idx) {
    if (idx < 0) idx += this['length'];
    if (idx < 0 || idx > this['length']) {
        throw $m['IndexError']("string index out of range");
    }
    return this['charAt'](idx);
};

String['prototype']['__setitem__'] = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String['prototype']['upper'] = String['prototype']['toUpperCase'];
String['prototype']['lower'] = String['prototype']['toLowerCase'];

String['prototype']['capitalize'] = function() {
    return this['charAt'](0)['toUpperCase']() + this['substring'](1);
};

String['prototype']['zfill'] = function(width) {
    return this['rjust'](width, '0');
};

String['prototype']['__add__'] = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String['prototype']['__mul__'] = function(y) {
    switch (y['__number__']) {
        case 0x02:
        case 0x04:
            y = y['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String['prototype']['__rmul__'] = String['prototype']['__mul__'];
String['prototype']['__number__'] = null;
String['prototype']['__name__'] = 'str';
String['prototype']['__class__'] = String['prototype'];
String['prototype']['__is_instance__'] = null;
String['prototype']['__str__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};
String['prototype']['__repr__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return "'" + this['toString']() + "'";
};
String['prototype']['__mro__'] = [$m['basestring']];


Boolean['prototype']['__number__'] = 0x01;
Boolean['prototype']['__name__'] = 'bool';
Boolean['prototype']['__class__'] = Boolean['prototype'];
Boolean['prototype']['__is_instance__'] = null;
Boolean['prototype']['__str__']= function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean['prototype']['__repr__'] = Boolean['prototype']['__str__'];
Boolean['prototype']['__and__'] = function (y) {
    return this & y['valueOf']();
};
Boolean['prototype']['__or__'] = function (y) {
    return this | y['valueOf']();
};
Boolean['prototype']['__xor__'] = function (y) {
    return this ^ y['valueOf']();
};


if (typeof Array['prototype']['indexOf'] != 'function') {
    Array['prototype']['indexOf'] = function(elt /*, from*/) {
        var len = this['length'] >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math['ceil'](from)
                : Math['floor'](from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp['prototype']['Exec'] = function(pat) {
    var m = this['exec'](pat);
    if (m !== null) {
        var len = m['length'] >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math['abs'];

	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7888674594d3d29a56aa65002b902620';
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
				if (self.prototype['__md5__'] !== '7888674594d3d29a56aa65002b902620') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['$$name'] = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '7888674594d3d29a56aa65002b902620') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr53,$attr54;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open']['__name__'] = 'open';

	$m['open']['__bind_type__'] = 0;
	$m['open']['__args__'] = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a['__number__'] << 8)|b['__number__']) {
        case 0x0202:
            a = a['__v'];
            b = b['__v'];
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b['__cmp__'] == 'function') {
                return -b['__cmp__'](a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a['__cmp__'] == 'function') {
                return a['__cmp__'](b);
            }
            return 1;
        case 0x0102:
            return -b['__cmp__'](new $p['int'](a));
        case 0x0104:
            return -b['__cmp__'](new $p['long'](a));
        case 0x0201:
            return a['__cmp__'](new $p['int'](b));
        case 0x0401:
            return a['__cmp__'](new $p['long'](b));
        case 0x0204:
            return -b['__cmp__'](new $p['long'](a));
        case 0x0402:
            return a['__cmp__'](new $p['long'](b));
        case 0x0404:
            return a['__cmp__'](b);
    }

    if (typeof a['__class__'] == typeof b['__class__'] && typeof a['__class__'] == 'function') {
        if (a['__class__']['__name__'] < b['__class__']['__name__']) {
            return -1;
        }
        if (a['__class__']['__name__'] > b['__class__']['__name__']) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a['__cmp__'] == 'function') {
        return a['__cmp__'](b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b['__cmp__'] == 'function') {
        return -b['__cmp__'](a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v['__nonzero__'] == 'function'){
            return v['__nonzero__']();
        } else if (typeof v['__len__'] == 'function'){
            return v['__len__']() > 0;
        }
    }
    return true;
    
	};
	$m['bool']['__name__'] = 'bool';

	$m['bool']['__bind_type__'] = 0;
	$m['bool']['__args__'] = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '9b8de80f12ec869e3f4f5f7acc990d6e';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


        if (typeof num == 'string') {
            num = num['lstrip']();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number['prototype']['__number__'] = 0x01;
Number['prototype']['__name__'] = 'float';
Number['prototype']['__init__'] = function (value, radix) {
    return null;
};

Number['prototype']['__str__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};

Number['prototype']['__repr__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};

Number['prototype']['__nonzero__'] = function () {
    return this != 0;
};

Number['prototype']['__cmp__'] = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number['prototype']['__hash__'] = function () {
    return this;
};

Number['prototype']['__oct__'] = function () {
    return '0'+this['toString'](8);
};

Number['prototype']['__hex__'] = function () {
    return '0x'+this['toString'](16);
};

Number['prototype']['__pos__'] = function () {
    return this;
};

Number['prototype']['__neg__'] = function () {
    return -this;
};

Number['prototype']['__abs__'] = function () {
    if (this >= 0) return this;
    return -this;
};

Number['prototype']['__add__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this + y;
};

Number['prototype']['__radd__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y + this;
};

Number['prototype']['__sub__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this - y;
};

Number['prototype']['__rsub__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y - this;
};

Number['prototype']['__floordiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math['floor'](this / y);
};

Number['prototype']['__rfloordiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math['floor'](y / this);
};

Number['prototype']['__div__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number['prototype']['__rdiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number['prototype']['__mul__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this * y;
};

Number['prototype']['__rmul__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y * this;
};

Number['prototype']['__mod__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number['prototype']['__rmod__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number['prototype']['__pow__'] = function (y, z) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math['pow'](this, y);
    }
    if (!z['__number__'] || isNaN(z = z['valueOf']())) return $p['NotImplemented'];
    return Math['pow'](this, y) % z;
};

	$m['float_js'] = $m['float'];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2f9835c34956d3d701ff49e481121953';
		$method = $pyjs__bind_method2('__init__', function(num) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				num = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['__v'] = $m['float_js'](num);
			return null;
		}
	, 1, [null,null,['self'],['num']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__nonzero__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__cmp__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__hash__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__oct__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__oct__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__oct__'] = $method;
		$method = $pyjs__bind_method2('__hex__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__hex__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hex__'] = $method;
		$method = $pyjs__bind_method2('__pos__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__pos__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__pos__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__neg__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('__abs__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__abs__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__abs__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__add__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__radd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__radd__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__radd__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__sub__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__rsub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__rsub__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rsub__'] = $method;
		$method = $pyjs__bind_method2('__floordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__floordiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__floordiv__'] = $method;
		$method = $pyjs__bind_method2('__rfloordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__rfloordiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rfloordiv__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__div__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('__rdiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__rdiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rdiv__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__mul__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__rmul__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmul__'] = $method;
		$method = $pyjs__bind_method2('__mod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__mod__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mod__'] = $method;
		$method = $pyjs__bind_method2('__rmod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__rmod__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmod__'] = $method;
		$method = $pyjs__bind_method2('__pow__', function(y, z) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				y = arguments[1];
				z = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2f9835c34956d3d701ff49e481121953') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__v']['__pow__'](y, z);
		}
	, 1, [null,null,['self'],['y'],['z']]);
		$cls_definition['__pow__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('float', $bases, $cls_definition);
	})();
	$m['float_py'] = $m['float'];
	$m['float'] = $m['float_js'];
	$m['float_int'] = function(value, radix) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof radix == 'undefined') radix=arguments['callee']['__args__'][3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value['__number__']) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value['valueOf']();
        if (v > 0) {
            v = Math['floor'](v);
        } else {
            v = Math['ceil'](v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value['lstrip']();
        switch (value[value['length']-1]) {
            case 'l':
            case 'L':
                v = value['slice'](0, value['length']-2);
                break;
            default:
                v = value;
        }
        if (v['match']($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = v['$$replace'](' ', '');
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int']['__name__'] = 'float_int';

	$m['float_int']['__bind_type__'] = 0;
	$m['float_int']['__args__'] = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *-? *[01]+ *$/i,     //  2
    /^ *-? *[0-2]+ *$/i,    //  3
    /^ *-? *[0-3]+ *$/i,    //  4
    /^ *-? *[0-4]+ *$/i,    //  5
    /^ *-? *[0-5]+ *$/i,    //  6
    /^ *-? *[0-6]+ *$/i,    //  7
    /^ *-? *[0-7]+ *$/i,    //  8
    /^ *-? *[0-8]+ *$/i,    //  9
    /^ *-? *[0-9]+ *$/i,    // 10
    /^ *-? *[0-9a]+ *$/i,   // 11
    /^ *-? *[0-9ab]+ *$/i,  // 12
    /^ *-? *[0-9a-c]+ *$/i, // 13
    /^ *-? *[0-9a-d]+ *$/i, // 14
    /^ *-? *[0-9a-e]+ *$/i, // 15
    /^ *-? *[0-9a-f]+ *$/i, // 16
    /^ *-? *[0-9a-g]+ *$/i, // 17
    /^ *-? *[0-9a-h]+ *$/i, // 18
    /^ *-? *[0-9a-i]+ *$/i, // 19
    /^ *-? *[0-9a-j]+ *$/i, // 20
    /^ *-? *[0-9a-k]+ *$/i, // 21
    /^ *-? *[0-9a-l]+ *$/i, // 22
    /^ *-? *[0-9a-m]+ *$/i, // 23
    /^ *-? *[0-9a-n]+ *$/i, // 24
    /^ *-? *[0-9a-o]+ *$/i, // 25
    /^ *-? *[0-9a-p]+ *$/i, // 26
    /^ *-? *[0-9a-q]+ *$/i, // 27
    /^ *-? *[0-9a-r]+ *$/i, // 28
    /^ *-? *[0-9a-s]+ *$/i, // 29
    /^ *-? *[0-9a-t]+ *$/i, // 30
    /^ *-? *[0-9a-u]+ *$/i, // 31
    /^ *-? *[0-9a-v]+ *$/i, // 32
    /^ *-? *[0-9a-w]+ *$/i, // 33
    /^ *-? *[0-9a-x]+ *$/i, // 34
    /^ *-? *[0-9a-y]+ *$/i, // 35
    /^ *-? *[0-9a-z]+ *$/i  // 36
];

(function(){
    /* XXX do not convert to $p['int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value['__number__']) {
                case 0x01:
                    value = value > 0 ? Math['floor'](value) : Math['ceil'](value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value['valueOf']();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this['__number__'] != 0x02) {
            // Some statement seems to be needed for chromium
            // for windows...
            // LOOK HERE
            // Remove do/while statement and get 'Maximum call stack size exceeded'
            do { return new $int(value, radix); } while (0);
            //return new $int(value, radix);
        }
        if (value['__number__']) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value['valueOf']();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value['match']($radix_regex[radix]) === null) {
                value = value['lstrip']();
                v = NaN;
            } else {
                value = value['$$replace'](' ', '');
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this['__v'] = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int['__init__'] = function () {};
    $int['__number__'] = 0x02;
    $int['__v'] = 0;
    $int['__name__'] = 'int';
    $int['prototype'] = $int;
    $int['__class__'] = $int;

    $int['toExponential'] = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this['__v']['toExponential']() : this['__v']['toExponential'](fractionDigits);
    };

    $int['toFixed'] = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this['__v']['toFixed']() : this['__v']['toFixed'](digits);
    };

    $int['toLocaleString'] = function () {
        return this['__v']['toLocaleString']();
    };

    $int['toPrecision'] = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this['__v']['toPrecision']() : this['__v']['toPrecision'](precision);
    };

    $int['toString'] = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this['__v']['toString']() : this['__v']['toString'](radix);
    };

    $int['valueOf'] = function () {
        return this['__v']['valueOf']();
    };

    $int['__str__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        if (this['__number__'] == 0x02) return this['__v']['toString']();
        return this['toString']();
    };

    $int['__repr__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        if (this['__number__'] == 0x02) return this['__v']['toString']();
        return this['toString']();
    };

    $int['__nonzero__'] = function () {
        return this['__v'] != 0;
    };

    $int['__cmp__'] = function (y) {
        return this['__v'] < y? -1 : (this['__v'] == y ? 0 : 1);
    };

    $int['__hash__'] = function () {
        return this['__v'];
    };

    $int['__invert__'] = function () {
        return new $int(~this['__v']);
    };

    $int['__lshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y < 32) {
            var v = this['__v'] << y;
            if (v > this['__v']) {
                return new $int(v);
            }
        }
        return new $p['long'](this['__v'])['__lshift__'](y);
    };

    $int['__rlshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] < 32) {
            var v = y << this['__v'];
            if (v > this['__v']) {
                return new $int(v);
            }
        }
        return new $p['long'](y)['__lshift__'](this['__v']);
    };

    $int['__rshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] >> y);
    };

    $int['__rrshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y >> this['__v']);
    };

    $int['__and__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] & y);
    };

    $int['__rand__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y & this['__v']);
    };

    $int['__xor__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] ^ y);
    };

    $int['__rxor__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y ^ this['__v']);
    };

    $int['__or__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] | y);
    };

    $int['__ror__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y | this['__v']);
    };

    $int['__oct__'] = function () {
        return '0x'+this['__v']['toString'](8);
    };

    $int['__hex__'] = function () {
        return '0x'+this['__v']['toString'](16);
    };

    $int['__pos__'] = function () {
        return this;
    };

    $int['__neg__'] = function () {
        return new $int(-this['__v']);
    };

    $int['__abs__'] = function () {
        if (this['__v'] >= 0) return this;
        return new $int(-this['__v']);
    };

    $int['__add__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['long'](v);
        }
        return new $p['long'](this['__v'])['__add__'](new $p['long'](y));
    };

    $int['__radd__'] = $int['__add__'];

    $int['__sub__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['long'](v);
        }
        return new $p['long'](this['__v'])['__sub__'](new $p['long'](y));
    };

    $int['__rsub__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = y -this['__v'];
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['long'](v);
        }
        return new $p['long'](y)['__sub__'](new $p['long'](this['__v']));
    };

    $int['__floordiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math['floor'](this['__v'] / y));
    };

    $int['__rfloordiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math['floor'](y / this['__v']));
    };

    $int['__div__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this['__v'] / y);
    };

    $int['__rdiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this['__v']);
    };

    $int['__mul__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['long'](v);
        }
        return new $p['long'](this['__v'])['__mul__'](new $p['long'](y));
    };

    $int['__rmul__'] = $int['__mul__'];

    $int['__mod__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this['__v'] % y);
    };

    $int['__rmod__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this['__v']);
    };

    $int['__pow__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = Math['pow'](this['__v'], y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['long'](v);
        }
        return new $p['long'](this['__v'])['__pow__'](new $p['long'](y));
    };
})();


(function(){

    var $log2 = Math['log'](2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v['ob_size'] < 0 ? -v['ob_size']:v['ob_size'];
        var i = j;
        while (i > 0 && v['ob_digit'][i-1] == 0) {
            i--;
        }
        if (i != j) {
            v['ob_size'] = v['ob_size'] < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv['ob_size'] < 0) {
            i = -vv['ob_size'];
            neg = true;
        } else if (vv['ob_size'] > 0) {
            i = vv['ob_size'];
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv['ob_digit'][i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv['ob_digit'][i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a['ob_digit'][i] * n;
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z['ob_digit'][i] = carry;
        z['ob_size'] = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin['length']) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math['floor'](rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var z = new $long(0);

        prem[0] = inplace_divrem1(z['ob_digit'], a['ob_digit'], 0, 0, size, n)[0];
        z['ob_size'] = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0"['charCodeAt'](0);
        var c_a = "a"['charCodeAt'](0);
        base = base['valueOf']();

        if (aa['ob_size'] == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa['ob_size'] < 0) {
                sign = '-';
                size_a = -aa['ob_size'];
            } else {
                size_a = aa['ob_size'];
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math['floor'](i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa['ob_digit'][i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit['charAt'](cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str['join']("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;

                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa['ob_digit']['slice'](0);
                pin = aa['ob_digit'];
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math['floor'](rem / base);
                            str[--p] = $cdigit['charAt'](rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str['slice'](p)['join']("");
            }
            text = text['lstrip']('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa['ob_size'] ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a['ob_digit'][size_a-1] < b['ob_digit'][size_b-1])) {
                // |a| < |b|
                pdiv['ob_size'] = 0;
                prem['ob_digit'] = a['ob_digit']['slice'](0);
                prem['ob_size'] = a['ob_size'];
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem['ob_digit'] = [0];
                prem['ob_size'] = 1;
                z = divrem1(a, b['ob_digit'][0], prem['ob_digit']);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv['ob_size'] = 0;
        } else {
            pdiv['ob_digit'] = z['ob_digit']['slice'](0);
            pdiv['ob_size'] = z['ob_size'];
        }
        if ((a['ob_size'] < 0) != (b['ob_size'] < 0))
                pdiv['ob_size'] = -(pdiv['ob_size']);
        if (a['ob_size'] < 0 && prem['ob_size'] != 0)
                prem['ob_size'] = -prem['ob_size'];
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1['ob_size'] < 0 ? -w1['ob_size'] : w1['ob_size'];
        var d = Math['floor'](PyLong_BASE / (w1['ob_digit'][size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v['ob_size'] < 0 ? -v['ob_size'] : v['ob_size'];
        k = size_v - size_w;
        a = new $long(0);
        a['ob_size'] = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v['ob_digit'][j];
            var carry = 0;
            var q, i;

            if (vj == w['ob_digit'][size_w-1])
                q = PyLong_MASK;
            else
                q = Math['floor'](((vj << PyLong_SHIFT) + v['ob_digit'][j-1]) /
                        w['ob_digit'][size_w-1]);

            while (w['ob_digit'][size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v['ob_digit'][j-1]
                        - q*w['ob_digit'][size_w-1]
                                                ) << PyLong_SHIFT)
                    + v['ob_digit'][j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w['ob_digit'][i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v['ob_digit'][i+k] - z
                        + (zz << PyLong_SHIFT);
                v['ob_digit'][i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v['ob_digit'][i+k];
                v['ob_digit'][i+k] = 0;
            }

            if (carry == 0)
                a['ob_digit'][k] = q;
            else {
                a['ob_digit'][k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v['ob_digit'][i+k] + w['ob_digit'][i];
                    v['ob_digit'][i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem['ob_digit'] = i['ob_digit']['slice'](0);
        prem['ob_size'] = i['ob_size'];
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a['ob_digit'][i] + b['ob_digit'][i];
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a['ob_digit'][i];
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z['ob_digit'][i] = carry;
        z['ob_size'] = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a['ob_digit'][i] == b['ob_digit'][i])
                ;
            if (i < 0)
                return z;
            if (a['ob_digit'][i] < b['ob_digit'][i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a['ob_digit'][i] - b['ob_digit'][i] - borrow;
                z['ob_digit'][i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a['ob_digit'][i] - borrow;
                z['ob_digit'][i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z['ob_size'] = i;
        if (sign < 0)
            z['ob_size'] = -(z['ob_size']);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i, s;

        z['ob_size'] = size_a + size_b;
        for (i = 0; i < z['ob_size']; i++) {
            z['ob_digit'][i] = 0;
        }
        if (size_a == size_b && array_eq(a['ob_digit'], b['ob_digit'], size_a)) {
            // Efficient squaring per HAC, Algorithm 14['16']:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a['ob_digit'][i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z['ob_digit'][pz] + f * f;
                z['ob_digit'][pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z['ob_digit'][pz] + a['ob_digit'][pa++] * f;
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z['ob_digit'][pz];
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z['ob_digit'][pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a['ob_digit'][i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z['ob_digit'][pz] + b['ob_digit'][pb++] * f;
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z['ob_digit'][pz] += carry & PyLong_MASK;
                }
            }
        }
        z['ob_size'] = z['ob_digit']['length'];
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div,
            mod = $l_divmod_mod;

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod['ob_size'] < 0 && w['ob_size'] > 0) ||
            (mod['ob_size'] > 0 && w['ob_size'] < 0)) {
                mod = mod['__add__'](w);
                div = div['__sub__']($const_long_1);
        }
        if (pdiv !== null) {
            pdiv['ob_digit'] = div['ob_digit']['slice'](0);
            pdiv['ob_size'] = div['ob_size'];
        }
        if (pmod !== null) {
            pmod['ob_digit'] = mod['ob_digit']['slice'](0);
            pmod['ob_size'] = mod['ob_size'];
        }
        return 0;
    }



    /* XXX do not convert to $p['long'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix['valueOf']() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value['__number__']) {
                case 0x01:
                    value = value > 0 ? Math['floor'](value) : Math['ceil'](value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this['__number__'] != 0x04) return new $long(value, radix);

        v = value;
        this['ob_size'] = 0;
        this['ob_digit'] = new Array();
        if (v['__number__']) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v['__number__'] == 0x04) {
                var size = v['ob_size'] < 0 ? -v['ob_size']:v['ob_size'];
                for (var i = 0; i < size; i++) {
                    this['ob_digit'][i] = v['ob_digit'][i];
                }
                this['ob_size'] = v['ob_size'];
                return this;
            }
            if (v['__number__'] == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v['valueOf']();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this['ob_digit'][ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this['ob_size'] = neg ? -ndig : ndig;
                return this;
            }
            if (v['__number__'] == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this['ob_digit'][0] = 0;
                    this['ob_size'] = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math['log'](v)/$log2;
                    expo = (expo < 0 ? Math['ceil'](expo):Math['floor'](expo)) + 1;
                    frac = v / Math['pow'](2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math['floor']((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math['pow'](2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math['floor'](frac);
                    this['ob_digit'][i] = bits;
                    frac -= bits;
                    frac = frac * Math['pow'](2.0, PyLong_SHIFT);
                }
                this['ob_size'] = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m['value']) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value['lstrip']();
            var i = 0;
            var neg = false;

            switch (text['charAt'](0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text['slice'](1)['lstrip']();
            }

            if (!radix) {
                if (text == '0' || text['charAt'](0) != '0') {
                    radix = 10;
                } else {
                    switch (text['charAt'](1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text['charAt'](0) == '0' && text['length'] > 1) {
                switch (text['charAt'](1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text['slice'](2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text['slice'](2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text['slice'](2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text['charCodeAt'](p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this['ob_size'] = n = Math['floor'](n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this['ob_digit'][i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text['charCodeAt'](p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this['ob_digit'][pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this['ob_digit'][pdigit++] = accum;
                }
                while (pdigit < n) {
                    this['ob_digit'][pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math['log'](radix) / Math['log'](PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text['charCodeAt'](scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this['ob_digit'][i] = 0;
                }
                this['ob_size'] = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text['charCodeAt'](str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text['charCodeAt'](str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this['ob_size'];
                    for (; pz < pzstop; ++pz) {
                        c += this['ob_digit'][pz] * convmult;
                        this['ob_digit'][pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this['ob_size'] < size_z) {
                            this['ob_digit'][pz] = c;
                            this['ob_size']++;
                        } else {
                            this['ob_digit'][this['ob_size']] = c;
                        }
                    }
                }
            }
            text = text['slice'](nchars);
            if (neg) this['ob_size'] = -this['ob_size'];
            if (text['charAt'](0) == 'l' || text['charAt'](0) == 'L') text = text['slice'](1);
            text = text['lstrip']();
            if (text['length'] === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long['__init__'] = function () {};
    $long['__number__'] = 0x04;
    $long['__name__'] = 'long';
    $long['prototype'] = $long;
    $long['__class__'] = $long;
    $long['ob_size'] = 0;

    $long['toExponential'] = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this['__v']['toExponential']() : this['__v']['toExponential'](fractionDigits);
    };

    $long['toFixed'] = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this['__v']['toFixed']() : this['__v']['toFixed'](digits);
    };

    $long['toLocaleString'] = function () {
        return this['__v']['toLocaleString']();
    };

    $long['toPrecision'] = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this['__v']['toPrecision']() : this['__v']['toPrecision'](precision);
    };

    $long['toString'] = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long['valueOf'] = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math['pow'](2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long['__str__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        return Format(this, 10, false, false);
    };

    $long['__repr__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        return Format(this, 10, true, false);
    };

    $long['__nonzero__'] = function () {
        return this['ob_size'] != 0;
    };

    $long['__cmp__'] = function (b) {
        var sign;

        if (this['ob_size'] != b['ob_size']) {
            if (this['ob_size'] < b['ob_size']) return -1;
            return 1;
        }
        var i = this['ob_size'] < 0 ? - this['ob_size'] : this['ob_size'];
        while (--i >= 0 && this['ob_digit'][i] == b['ob_digit'][i])
            ;
        if (i < 0) return 0;
        if (this['ob_digit'][i] < b['ob_digit'][i]) {
            if (this['ob_size'] < 0) return 1;
            return -1;
        }
        if (this['ob_size'] < 0) return -1;
        return 1;
    };

    $long['__hash__'] = function () {
        var s = this['__str__']();
        var v = this['valueOf']();
        if (v['toString']() == s) {
            return v;
        }
        return s;
    };

    $long['__invert__'] = function () {
        var x = this['__add__']($const_long_1);
        x['ob_size'] = -x['ob_size'];
        return x;
    };

    $long['__neg__'] = function () {
        var x = new $long(0);
        x['ob_digit'] = this['ob_digit']['slice'](0);
        x['ob_size'] = -this['ob_size'];
        return x;
    };

    $long['__abs__'] = function () {
        if (this['ob_size'] >= 0) return this;
        var x = new $long(0);
        x['ob_digit'] = this['ob_digit']['slice'](0);
        x['ob_size'] = -x['ob_size'];
        return x;
    };

    $long['__lshift'] = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize,
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math['floor'](y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z['ob_size'] = a['ob_size'] < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z['ob_digit'][i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a['ob_digit'][j] << remshift;
            z['ob_digit'][i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z['ob_digit'][newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long['__lshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__lshift'](y);
                break;
            case 0x02:
                return this['__lshift'](y['__v']);
            case 0x04:
                y = y['valueOf']();
                return this['__lshift'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rlshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__lshift'](this['valueOf']());
            case 0x04:
                return y['__lshift'](this['valueOf']());
        }
        return $p['NotImplemented'];
    };

    $long['__rshift'] = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y['__number__'] != 0x01) {
            y = y['valueOf']();
        } else {
            if (y != Math['floor'](y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this['ob_size'];
        if (this['ob_size'] < 0) {
            size = -size;
            a = this['__add__']($const_long_1);
            a['ob_size'] = -a['ob_size'];
        }

        wordshift = Math['floor'](y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z['ob_size'] = a['ob_size'] < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z['ob_digit'][i] = (a['ob_digit'][j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z['ob_digit'][i] |=
                      (a['ob_digit'][j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this['ob_size'] < 0) {
            z = z['__add__']($const_long_1);
            z['ob_size'] = -z['ob_size'];
        }
        return z;
    };

    $long['__rshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__rshift'](y);
                break;
            case 0x02:
                return this['__rshift'](y['__v']);
            case 0x04:
                y = y['valueOf']();
                return this['__rshift'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rrshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__rshift'](this['valueOf']());
            case 0x04:
                return y['__rshift'](this['valueOf']());
        }
        return $p['NotImplemented'];
    };

    $long['__and'] = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__and__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__and'](new $long(y));
                break;
            case 0x02:
                return this['__and'](new $long(y['__v']));
            case 0x04:
                return this['__and'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rand__'] = $long['__and__'];

    $long['__xor'] = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__xor__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__xor'](new $long(y));
                break;
            case 0x02:
                return this['__xor'](new $long(y['__v']));
            case 0x04:
                return this['__xor'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rxor__'] = $long['__xor__'];

    $long['__or'] = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__or__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__or'](new $long(y));
                break;
            case 0x02:
                return this['__or'](new $long(y['__v']));
            case 0x04:
                return this['__or'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__ror__'] = $long['__or__'];

    $long['__oct__'] = function () {
        return Format(this, 8, true, false);
    };

    $long['__hex__'] = function () {
        return Format(this, 16, true, false);
    };

    $long['__add'] = function (b) {
        var a = this, z;
        if (a['ob_size'] < 0) {
            if (b['ob_size'] < 0) {
                z = x_add(a, b);
                z['ob_size'] = -(z['ob_size']);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b['ob_size'] < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long['__add__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__add'](new $long(y['__v']));
            case 0x04:
                return this['__add'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__radd__'] = $long['__add__'];

    $long['__sub'] = function (b) {
        var a = this, z;
        if (a['ob_size'] < 0) {
            z = b['ob_size'] < 0 ? x_sub(a, b) : x_add(a, b);
            z['ob_size'] = -(z['ob_size']);
        }
        else {
            z = b['ob_size'] < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long['__sub__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__sub'](new $long(y['__v']));
            case 0x04:
                return this['__sub'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rsub__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__sub'](this);
            case 0x04:
                return y['__sub'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__mul'] = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this['ob_size'] ^ b['ob_size']) < 0)
            z['ob_size'] = -(z['ob_size']);
        return z;
    };

    $long['__mul__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__mul'](new $long(y['__v']));
            case 0x04:
                return this['__mul'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rmul__'] = $long['__mul__'];

    $long['__div'] = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long['__div__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__sub'](new $long(y['__v']));
            case 0x04:
                return this['__sub'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rdiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__div'](this);
            case 0x04:
                return y['__div'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__mod'] = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long['__mod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__mod'](new $long(y['__v']));
            case 0x04:
                return this['__mod'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__mod'](this);
            case 0x04:
                return y['__mod'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__divmod'] = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long['__divmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__divmod'](new $long(y['__v']));
            case 0x04:
                return this['__divmod'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rdivmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__divmod'](this);
            case 0x04:
                return y['__divmod'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__floordiv'] = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long['__floordiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__floordiv'](new $long(y['__v']));
            case 0x04:
                return this['__floordiv'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rfloordiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__floordiv'](this);
            case 0x04:
                return y['__floordiv'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__pow'] = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w['__number__'] == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x['__number__'] == 0x04 ? x : new $long(x);
        }

        if (b['ob_size'] < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math['pow'](v['valueOf'](), w['valueOf']());
        }

        if (c !== null) {
            if (c['ob_size'] == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c['ob_size'] < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp['ob_digit'] = c['ob_digit']['slice'](0);
                temp['ob_size'] = -c['ob_size'];
                c = temp;
            }
            if (c['ob_size'] == 1 && c['ob_digit'][0] == 1) {
                return $const_long_0;
            }
            if (a['ob_size'] < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b['ob_size'] <= FIVEARY_CUTOFF) {
            for (i = b['ob_size'] - 1; i >= 0; --i) {
                bi = b['ob_digit'][i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z['__mul'](z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z['ob_digit'] = temp['ob_digit']['slice'](0);
                        z['ob_size'] = temp['ob_size'];
                    }
                    if (bi & j) {
                        z = z['__mul'](a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1]['__mul'](a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i]['ob_digit'] = temp['ob_digit']['slice'](0);
                    table[i]['ob_size'] = temp['ob_size'];
                }
            }
            for (i = b['ob_size'] - 1; i >= 0; --i) {
                bi = b['ob_digit'][i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z['__mul'](z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                    if (index) {
                        z = z['__mul'](table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput &&
            (z['ob_size'] != 0) && (c['ob_size'] != 0)) {
            z = z['__sub__'](c);
        }
        return z;
    };

    $long['__pow__'] = function (y, z) {
        switch (y['__number__']) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this['__pow'](new $long(y['__v']), null);
                switch (z['__number']) {
                    case 0x02:
                        return this['__pow'](new $long(y['__v']), new $long(z));
                    case 0x04:
                        return this['__pow'](new $long(y['__v']), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this['__pow'](y, null);
                switch (z['__number']) {
                    case 0x02:
                        return this['__pow'](y, new $long(z));
                    case 0x04:
                        return this['__pow'](y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m['attrib_remap'] = ['Function', 'apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'native', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m['var_remap'] = ['Function', 'arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'native', 'new', 'return', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var $constant_int_0 = new $p['int'](0);
	var $constant_int_1 = new $p['int'](1);
	var $constant_int_2 = new $p['int'](2);
	var $constant_int_3 = new $p['int'](3);
	var $constant_int_100 = new $p['int'](100);
	var $constant_int_6 = new $p['int'](6);
	var $constant_int_32 = new $p['int'](32);
	var $constant_int_8 = new $p['int'](8);
	var $constant_int_10 = new $p['int'](10);
	var $constant_int_12 = new $p['int'](12);
	var $constant_int_256 = new $p['int'](256);
	var $constant_int_16 = new $p['int'](16);
	var $constant_int_1000000000 = new $p['int'](1000000000);
	var $constant_int_4 = new $p['int'](4);
	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '54b59de8af01e70d56009c1081ba6f33';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
            self['__array'] = data['slice']();
            return null;
        }
        if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                self['__array'] = data['__array']['slice']();
                return null;
            }
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                self['__array'] = iter['__array']['slice']();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self['__array'] = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $iter7_nextval,i,h,$iter7_array,$iter7_idx,$iter7_iter,$iter7_type;
			h = $p['list'](['$tuple']);
			$iter7_iter = self;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				i = $iter7_nextval['$nextval'];
				h['append']($p['str']($p['hash'](i)));
			}
			return '$'['join'](h);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				l = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['tuple'])))) {
				return $constant_int_1;
			}

        var n1 = self['__array']['length'],
            n2 = l['__array']['length'],
            a1 = self['__array'],
            a2 = l['__array'],
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        if (upper==null) return $m['tuple'](self['__array']['slice'](lower));
        return $m['tuple'](self['__array']['slice'](lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_index = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var index = _index['valueOf']();
        if (typeof index == 'boolean') index = $p['int'](index);
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self['__array'][index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $p['int'](self['__array']['length']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof _start == 'undefined') _start=arguments['callee']['__args__'][4][1];


        var start = _start['valueOf']();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX['__array']['indexOf'](valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self['__array']['length'] >>> 0;

            start = (start < 0)
                    ? Math['ceil'](start)
                    : Math['floor'](start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX['__array'] && */
                    $m['cmp'](self['__array'][start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', $constant_int_0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $iter_array(self['__array']);

        var i = 0;
        var l = self['__array'];
        return {
            'next': function() {
                if (i >= l['length']) {
                    throw $m['StopIteration']();
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $enumerate_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr55,$attr56;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr58,$attr57;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self['__array']['length']; i++) {
            s += $p['repr'](self['__array'][i]);
            if (i < self['__array']['length'] - 1)
                s += ", ";
        }
        if (self['__array']['length'] == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				y = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr59,$attr60;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
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
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var a,$attr61,$attr62,$sub3,$sub4;
			if ($p['bool'](!$p['bool'](n !== null && n['__number__'] && (n['__number__'] != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub3=n,$sub4=$constant_int_1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
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
				if (self.prototype['__md5__'] !== '54b59de8af01e70d56009c1081ba6f33') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple']['__str__'] = $m['tuple']['__repr__'];
$m['tuple']['toString'] = $m['tuple']['__str__'];
	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '95839fbdc04d833dbde234a70f075efb';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '95839fbdc04d833dbde234a70f075efb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return "<type 'NotImplementedType'>";
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '95839fbdc04d833dbde234a70f075efb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '95839fbdc04d833dbde234a70f075efb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this['__array'] = l;
    this['i'] = -1;
};
$iter_array['prototype']['next'] = function (noStop) {
    if (++this['i'] == this['__array']['length']) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this['__array'][this['i']];
};
$iter_array['prototype']['__iter__'] = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this['___array'] = l;
    this['i'] = l['length'];
};
$reversed_iter_array['prototype']['next'] = function (noStop) {
    if (--this['i'] == -1) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this['___array'][this['i']];
};
$reversed_iter_array['prototype']['__iter__'] = function ( ) {
    return this;
};
//$reversed_iter_array['prototype']['$genfunc'] = $reversed_iter_array['prototype']['next'];
var $enumerate_array = function (l) {
    this['array'] = l;
    this['i'] = -1;
    this['tuple'] = 
	$m['tuple']($p['list']([$constant_int_0, '']));

    this['tl'] = this['tuple']['__array'];
};
$enumerate_array['prototype']['next'] = function (noStop, reuseTuple) {
    if (++this['i'] == this['array']['length']) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    this['tl'][1] = this['array'][this['i']];
    if (this['tl'][0]['__number__'] == 0x01) {
        this['tl'][0] = this['i'];
    } else {
        this['tl'][0] = new $p['int'](this['i']);
    }
    return reuseTuple === true ? this['tuple'] : $m['tuple'](this['tl']);
};
$enumerate_array['prototype']['__iter__'] = function ( ) {
    return this;
};
$enumerate_array['prototype']['$genfunc'] = $enumerate_array['prototype']['next'];

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'afd4f857132fd951d288a165e24f34e5';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
            self['__array'] = data['slice']();
            return null;
        }
        if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                self['__array'] = data['__array']['slice']();
                return null;
            }
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                self['__array'] = iter['__array']['slice']();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self['__array'] = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				item = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

self['__array'][self['__array']['length']] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
        } else if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
            } else {
                var iter = data['__iter__']();
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                data = [];
                var item, i = 0;
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self['__array'];
        var j = self['__array']['length'];
        var n = data['length'], i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var index=self['index'](value);
        if (index<0) {
            throw $m['ValueError']("list['remove'](x): x not in list");
        }
        self['__array']['splice'](index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof _start == 'undefined') _start=arguments['callee']['__args__'][4][1];


        var start = _start['valueOf']();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX['__array']['indexOf'](valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self['__array']['length'] >>> 0;

            start = (start < 0)
                    ? Math['ceil'](start)
                    : Math['floor'](start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX['__array'] && */
                    $m['cmp'](self['__array'][start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', $constant_int_0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

    var a = self['__array']; self['__array']=a['slice'](0, index)['concat'](value, a['slice'](index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_index = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof _index == 'undefined') _index=arguments['callee']['__args__'][3][1];


        var index = _index['valueOf']();
        if (index<0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            if (self['__array']['length'] == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self['__array'][index];
        self['__array']['splice'](index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				l = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['list'])))) {
				return (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self['__array']['length'],
            n2 = l['__array']['length'],
            a1 = self['__array'],
            a2 = l['__array'],
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        if (upper==null)
            return $m['list'](self['__array']['slice'](lower));
        return $m['list'](self['__array']['slice'](lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self['__array']['length'];
        }
        if (!lower) lower = 0;
        if (n > 0) self['__array']['splice'](lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_index = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var index = _index['valueOf']();
        if (typeof index == 'boolean') index = $p['int'](index);
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list index out of range");
        }
        return self['__array'][index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var index = _index['valueOf']();
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self['__array'][index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_index = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var index = _index['valueOf']();
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self['__array']['splice'](index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $p['int'](self['__array']['length']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $iter_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $reversed_iter_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return new $enumerate_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

    self['__array']['reverse']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof cmp == 'undefined') cmp=arguments['callee']['__args__'][3][1];
			if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
			if (typeof reverse == 'undefined') reverse=arguments['callee']['__args__'][5][1];
			var thisSort1,thisSort2,$and18,$and19,thisSort3;
			if ($p['bool']($m['op_is'](cmp, null))) {
				cmp = $m['__cmp'];
			}
			if ($p['bool'](($p['bool']($and18=key)?reverse:$and18))) {
				thisSort1 = function(a, b) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1['__name__'] = 'thisSort1';

				thisSort1['__bind_type__'] = 0;
				thisSort1['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ($p['bool'](key)) {
				thisSort2 = function(a, b) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

					return cmp(key(a), key(b));
				};
				thisSort2['__name__'] = 'thisSort2';

				thisSort2['__bind_type__'] = 0;
				thisSort2['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ($p['bool'](reverse)) {
				thisSort3 = function(a, b) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3['__name__'] = 'thisSort3';

				thisSort3['__bind_type__'] = 0;
				thisSort3['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr64,$attr63;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr65,$attr66;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self['__array']['length']; i++) {
            s += $p['repr'](self['__array'][i]);
            if (i < self['__array']['length'] - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				y = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr67,$attr68;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
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
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var a,$attr69,$attr70,$sub6,$sub5;
			if ($p['bool'](!$p['bool'](n !== null && n['__number__'] && (n['__number__'] != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub5=n,$sub6=$constant_int_1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
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
				if (self.prototype['__md5__'] !== 'afd4f857132fd951d288a165e24f34e5') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list']['__str__'] = $m['list']['__repr__'];
$m['list']['toString'] = $m['list']['__str__'];
	$m['slice'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '24e8c86df7ad558306c3a67bdb4942bb';
		$method = $pyjs__bind_method2('__init__', function(a1) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

				if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
			} else {
				var self = arguments[0];
				a1 = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '24e8c86df7ad558306c3a67bdb4942bb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](args)) {
				self['start'] = a1;
				self['stop'] = args['__getitem__']($constant_int_0);
				if ($p['bool'](($m['cmp']($p['len'](args), $constant_int_1) == 1))) {
					self['step'] = args['__getitem__']($constant_int_1);
				}
				else {
					self['step'] = null;
				}
			}
			else {
				self['stop'] = a1;
				self['start'] = null;
				self['step'] = null;
			}
			return null;
		}
	, 1, ['args',null,['self'],['a1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(x) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				x = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '24e8c86df7ad558306c3a67bdb4942bb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr82,$attr80,$attr81,$attr79,$attr78,$attr77,$attr76,$attr74,$attr73,$attr72,$attr71,r,$attr75;
			r = $m['cmp'](self['start'], x['start']);
			if ($p['bool'](!$m['op_eq'](r, $constant_int_0))) {
				return r;
			}
			r = $m['cmp'](self['stop'], x['stop']);
			if ($p['bool'](!$m['op_eq'](r, $constant_int_0))) {
				return r;
			}
			r = $m['cmp'](self['step'], x['step']);
			return r;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('indices', function(length) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				length = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '24e8c86df7ad558306c3a67bdb4942bb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add44,defstart,$sub16,$and23,$and22,$and21,$and20,$attr83,$attr86,$attr87,$attr84,$attr85,$add46,$attr89,$add43,$add42,$add41,$add40,start,$sub9,$sub8,$sub17,$sub7,$or5,$or4,$sub18,$sub13,$sub12,$sub11,$sub10,stop,$add38,$sub15,$sub14,step,$div2,$div3,$div1,$div4,$attr94,defstop,$add39,$attr91,$attr90,$attr93,$attr92,slicelength,$add37,$add45,$attr88;
			step = $constant_int_0;
			start = $constant_int_0;
			stop = $constant_int_0;
			if ($p['bool']($m['op_is'](self['step'], null))) {
				step = $constant_int_1;
			}
			else {
				step = self['step'];
				if ($p['bool']($m['op_eq'](step, $constant_int_0))) {
					throw ($m['ValueError']('slice step cannot be zero'));
				}
			}
			if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
				defstart = $m['__op_sub']($sub7=length,$sub8=$constant_int_1);
				defstop = (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$m['op_usub']($usub5));
			}
			else {
				defstart = $constant_int_0;
				defstop = length;
			}
			if ($p['bool']($m['op_is'](self['start'], null))) {
				start = defstart;
			}
			else {
				start = self['start'];
				if ($p['bool'](($m['cmp'](start, $constant_int_0) == -1))) {
					start = $m['__op_add']($add37=start,$add38=length);
				}
				if ($p['bool'](($m['cmp'](start, $constant_int_0) == -1))) {
					if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
						start = (typeof ($usub6=$constant_int_1)=='number'?
							-$usub6:
							$m['op_usub']($usub6));
					}
					else {
						start = $constant_int_0;
					}
				}
				if ($p['bool'](((($m['cmp'](start, length))|1) == 1))) {
					if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
						start = $m['__op_sub']($sub9=length,$sub10=$constant_int_1);
					}
					else {
						start = length;
					}
				}
			}
			if ($p['bool']($m['op_is'](self['stop'], null))) {
				stop = defstop;
			}
			else {
				stop = self['stop'];
				if ($p['bool'](($m['cmp'](stop, $constant_int_0) == -1))) {
					stop = $m['__op_add']($add39=stop,$add40=length);
				}
				if ($p['bool'](($m['cmp'](stop, $constant_int_0) == -1))) {
					if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
						stop = (typeof ($usub7=$constant_int_1)=='number'?
							-$usub7:
							$m['op_usub']($usub7));
					}
					else {
						stop = $constant_int_0;
					}
				}
				if ($p['bool'](((($m['cmp'](stop, length))|1) == 1))) {
					if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
						stop = $m['__op_sub']($sub11=length,$sub12=$constant_int_1);
					}
					else {
						stop = length;
					}
				}
			}
			if ($p['bool'](($p['bool']($or4=($p['bool']($and20=($m['cmp'](step, $constant_int_0) == -1))?((($m['cmp'](stop, start))|1) == 1):$and20))?$or4:($p['bool']($and22=($m['cmp'](step, $constant_int_0) == 1))?((($m['cmp'](start, stop))|1) == 1):$and22)))) {
				slicelength = $constant_int_0;
			}
			else if ($p['bool'](($m['cmp'](step, $constant_int_0) == -1))) {
				slicelength = $m['__op_add']($add43=(typeof ($div1=$m['__op_add']($add41=$m['__op_sub']($sub13=stop,$sub14=start),$add42=$constant_int_1))==typeof ($div2=step) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$m['op_div']($div1,$div2)),$add44=$constant_int_1);
			}
			else {
				slicelength = $m['__op_add']($add45=(typeof ($div3=$m['__op_sub']($sub17=$m['__op_sub']($sub15=stop,$sub16=start),$sub18=$constant_int_1))==typeof ($div4=step) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$m['op_div']($div3,$div4)),$add46=$constant_int_1);
			}
			return $p['tuple']([start, stop, step]);
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['indices'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '24e8c86df7ad558306c3a67bdb4942bb') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr95,$attr97,$attr96,$attr99,$attr98,$attr100;
			return $p['sprintf']('slice(%s, %s, %s)', $p['tuple']([self['start'], self['stop'], self['step']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('slice', $bases, $cls_definition);
	})();
$m['slice']['__str__'] = $m['slice']['__repr__'];
$m['slice']['toString'] = $m['slice']['__str__'];
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'fe1d4ba078372f997b7ef4574acc48ef';
		$method = $pyjs__bind_method2('__init__', function(seq) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments['callee']['__args__'][3][1];
			var init;
			self['__object'] = {};
			init = function(_data) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


        var item, i, n, sKey;
        var data = _data;
        //selfXXX['__object'] = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
        } else if (typeof data['__object'] == 'object') {
            data = data['__object'];
            for (sKey in data) {
                self['__object'][sKey] = data[sKey]['slice']();
            }
            return null;
        } else if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
            } else {
                var iter = data['__iter__']();
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                data = [];
                var item, i = 0;
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key['substring'](0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key['substring'](2);
                    if (var_remap['indexOf'](_key) < 0) {
                        _key = key;
                    }
                }
                self['__object']['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data['length']) == 0) {
            return null;
        }
        i = 0;
        if (data[0]['constructor'] === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
                self['__object'][sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0]['__array'] != 'undefined') {
            while (i < n) {
                item = data[i++]['__array'];
                key = item[0];
                sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
                self['__object'][sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i]['__getitem__'](0);
            sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
            self['__object'][sKey] = [key, data[i]['__getitem__'](1)];
        }
        return null;
        
			};
			init['__name__'] = 'init';

			init['__bind_type__'] = 0;
			init['__args__'] = [null,null,['_data']];
			init(seq);
			if ($p['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        self['__object'][sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        var value=self['__object'][sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        for (var i in self['__object']){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](other, $m['dict'])))) {
				throw ($m['TypeError']("dict.__cmp__(x,y) requires y to be a 'dict'"));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys['sort']();
        other_sKeys['sort']();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var size;
			size = $constant_int_0;

        for (var i in self['__object']) size++;
        
			return new $p['int'](size);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        delete self['__object'][sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var keys=$m['list'](),
            selfObj = self['__object'],
            __array = keys['__array'],
            i = 0;
        for (var sKey in self['__object']) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof v == 'undefined') v=arguments['callee']['__args__'][3][1];
			var $iter8_idx,d,i,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;
			d = $p['dict']([]);
			$iter8_iter = iterable;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				i = $iter8_nextval['$nextval'];
				d['__setitem__'](i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self['__object']) {
            values['__array'][i++] = self['__object'][key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self['__object']) {
          var kv = self['__object'][key];
          items['__array'][i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var keys = new Array();
        var i = 0;
        for (var key in self['__object']) {
            keys[i++] = self['__object'][key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var keys = new Array();
        var i = 0;
        for (var key in self['__object']) {
            keys[i++] = self['__object'][key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? (self['__object'][sKey]=[key, default_value])[1] : self['__object'][sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof default_value == 'undefined') default_value=arguments['callee']['__args__'][4][1];


        var empty = true;
        for (var sKey in self['__object']) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? default_value : self['__object'][sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
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
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
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
			var $iter12_type,$iter10_nextval,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,$iter10_idx,$iter11_iter,$iter12_array,$iter11_array,$iter11_nextval,d,k,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,v,$iter10_type,$iter12_idx,$iter9_array;
			if ($p['bool'](args)) {
				if ($p['bool'](($m['cmp']($p['len'](args), $constant_int_1) == 1))) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', $p['len'](args))));
				}
				d = args['__getitem__']($constant_int_0);
				if ($p['bool']($p['hasattr'](d, 'iteritems'))) {
					$iter9_iter = d['iteritems']();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						self['__setitem__'](k, v);
					}
				}
				else if ($p['bool']($p['hasattr'](d, 'keys'))) {
					$iter10_iter = d;
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						k = $iter10_nextval['$nextval'];
						self['__setitem__'](k, d['__getitem__'](k));
					}
				}
				else {
					$iter11_iter = d;
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter11_nextval['$nextval'], 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						self['__setitem__'](k, v);
					}
				}
			}
			if ($p['bool'](kwargs)) {
				$iter12_iter = kwargs['iteritems']();
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					self['__setitem__'](k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

				if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add48,$add47,res,$pyjs_try_err;
			if ($p['bool'](($m['cmp']($p['len'](d), $constant_int_1) == 1))) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', $m['__op_add']($add47=$constant_int_1,$add48=$p['len'](d)))));
			}
			try {
				res = self['__getitem__'](k);
				self['__delitem__'](k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ($p['bool'](d)) {
						return d['__getitem__']($constant_int_0);
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,v,k,$iter13_array;
			$iter13_iter = self['iteritems']();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter13_nextval['$nextval'], 2, null);
				k = $tupleassign4[0];
				v = $tupleassign4[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr102,$attr101;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['__object'] = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr104,$attr103;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var keys = new Array();
        for (var key in self['__object'])
            keys['push'](key);

        var s = "{";
        for (var i=0; i<keys['length']; i++) {
            var v = self['__object'][keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys['length']-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'fe1d4ba078372f997b7ef4574acc48ef') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict']['has_key'] = $m['dict']['__contains__'];
$m['dict']['iterkeys'] = $m['dict']['__iter__'];
$m['dict']['__str__'] = $m['dict']['__repr__'];
	$m['__empty_dict'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    var dict__init__ = $m['dict']['__init__'];
    var d;
    $m['dict']['__init__'] = function() {
        this['__object'] = {};
    };
    d = $m['dict']();
    d['__init__'] = $m['dict']['__init__'] = dict__init__;
    return d;

	};
	$m['__empty_dict']['__name__'] = '__empty_dict';

	$m['__empty_dict']['__bind_type__'] = 0;
	$m['__empty_dict']['__args__'] = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5d0ade069ada2db5e825a6618d40edd8';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof _data == 'undefined') _data=arguments['callee']['__args__'][3][1];

			if ($p['bool']($m['op_is'](_data, null))) {
var data = [];
			}
			else {
var data = _data;
			}
			if ($p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(_data))) {

            self['__object'] = {};
            var selfObj = self['__object'],
                dataObj = data['__object'];
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item,
            i,
            n,
            selfObj = self['__object'] = {};

        if (data['constructor'] === Array) {
        // data is already an Array.
        // We deal with the Array of data after this if block.
          }

          // We may have some other set-like thing with __object
          else if (typeof data['__object'] == 'object') {
            var dataObj = data['__object'];
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          }

          // Something with an __iter__ method
          else if (typeof data['__iter__'] == 'function') {

            // It has an __array member to iterate over. Make that our data.
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
                }
            else {
                // Several ways to deal with the __iter__ method
                var iter = data['__iter__']();
                // iter has an __array member that's an array. Use that.
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                var data = [];
                var item, i = 0;
                // iter has a ['$genfunc']
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m['data'])) && $m['isIteratable']($m['data']))
            {
            for (var item in $m['data']) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data['length']) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $constant_int_2;
			}

        var selfObj = self['__object'],
            otherObj = other['__object'],
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), $constant_int_1))) {

            var hashes = new Array(),
                obj = self['__object'],
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes['sort']();
            var h = hashes['join']("|");
            return (h in obj);

			}
return $p['__hash'](value) in self['__object'];
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var items = new Array(),
            i = 0,
            obj = self['__object'];
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var size;
			size = 0.0;

        for (var i in self['__object']) size++;
        
			return new $p['int'](size);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr106,$attr105;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self['__object'],
            s = self['__name__'] + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values['join'](", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

self['__object'][$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

self['__object'] = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'];
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), $constant_int_1))) {
				value = $p['frozenset'](value);
			}
delete self['__object'][$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return self['__cmp__'](other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return (self['__cmp__'](other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        for (var sVal in self['__object']) {
            var value = self['__object'][sVal];
            delete self['__object'][sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var val;
			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), $constant_int_1))) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self['__object'])) {
            throw $m['KeyError'](value);
        }
        delete self['__object'][h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self['__object'] = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var new_set;
			new_set = $m['set']();
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5d0ade069ada2db5e825a6618d40edd8') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(data)))) {
				data = $p['frozenset'](data);
			}

        var selfObj = self['__object'],
            dataObj = data['__object'];
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5910a5cd7bacd5088201b54cec5bd418';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				_data = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof _data == 'undefined') _data=arguments['callee']['__args__'][3][1];

			if ($p['bool']((!('__object' in self)))) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}


        var hashes = new Array(), obj = self['__object'], i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes['sort']();
        return (self['$H'] = hashes['join']("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				value = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				other = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5910a5cd7bacd5088201b54cec5bd418') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'e8658b013cc299100bc07c2eb7e48d17';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof fget == 'undefined') fget=arguments['callee']['__args__'][3][1];
			if (typeof fset == 'undefined') fset=arguments['callee']['__args__'][4][1];
			if (typeof fdel == 'undefined') fdel=arguments['callee']['__args__'][5][1];
			if (typeof doc == 'undefined') doc=arguments['callee']['__args__'][6][1];
			var $or6,$or7,$attr107,$attr108;
			self['fget'] = fget;
			self['fset'] = fset;
			self['fdel'] = fdel;
			if ($p['bool'](($p['bool']($or6=!$p['bool']($m['op_is'](doc, null)))?$or6:!$p['bool']($p['hasattr'](fget, '__doc__'))))) {
				self['__doc__'] = doc;
			}
			else {
				self['__doc__'] = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof objtype == 'undefined') objtype=arguments['callee']['__args__'][4][1];
			var $attr110,$attr109;
			if ($p['bool']($m['op_is'](obj, null))) {
				return self;
			}
			if ($p['bool']($m['op_is'](self['fget'], null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr111,$attr112;
			if ($p['bool']($m['op_is'](self['fset'], null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't set attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				obj = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr113,$attr114;
			if ($p['bool']($m['op_is'](self['fdel'], null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't delete attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				fset = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['fset'] = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				fdel = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'e8658b013cc299100bc07c2eb7e48d17') {
					if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['fdel'] = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    var fnwrap = function() {
        return func['apply'](null,$pyjs_array_slice['call'](arguments));
    };
    fnwrap['__name__'] = func['__name__'];
    fnwrap['__args__'] = func['__args__'];
    fnwrap['__bind_type__'] = 3;
    return fnwrap;
    
	};
	$m['staticmethod']['__name__'] = 'staticmethod';

	$m['staticmethod']['__bind_type__'] = 0;
	$m['staticmethod']['__args__'] = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof object_or_type == 'undefined') object_or_type=arguments['callee']['__args__'][3][1];
		var i;
		if ($p['bool'](!$p['bool']((typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(object_or_type, typ)))) {
			i = (typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_['__mro__'] == 'undefined') {
        type_ = type_['__class__'];
    }
    var fn = $pyjs_type('super', type_['__mro__']['slice'](1), {});
    fn['__new__'] = fn['__mro__'][1]['__new__'];
    fn['__init__'] = fn['__mro__'][1]['__init__'];
    if (object_or_type['__is_instance__'] === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name]['apply'](object_or_type,
                                   $pyjs_array_slice['call'](arguments));
        };
        fnwrap['__name__'] = name;
        fnwrap['__args__'] = obj[name]['__args__'];
        fnwrap['__bind_type__'] = obj[name]['__bind_type__'];
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj['__is_instance__'] = object_or_type['__is_instance__'];
    return obj;
    
	};
	$m['$$super']['__name__'] = 'super';

	$m['$$super']['__bind_type__'] = 0;
	$m['$$super']['__args__'] = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
		if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][3][1];
		if (typeof step == 'undefined') step=arguments['callee']['__args__'][4][1];
		var $attr119,$attr118,rval,$attr115,$attr117,$attr116,$attr120,$assign1,nval;
		if ($p['bool']($m['op_is'](stop, null))) {
			stop = start;
			start = $constant_int_0;
		}
		if ($p['bool'](!$p['bool'](start!== null && start['__number__'] && (start['__number__'] != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop['__number__'] && (stop['__number__'] != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step['__number__'] && (step['__number__'] != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math['ceil'](nstep) : Math['floor'](nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $m['StopIteration']();
            }
            rval = nval;
            nval += step;

		return new $p['int'](rval);

        },
        '$genfunc': function() {
            return this['next'](true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this['toString']() + "'";
        }
    };
    x['__str__'] = x['toString'];
    return x;
    
	};
	$m['xrange']['__name__'] = 'xrange';

	$m['xrange']['__bind_type__'] = 0;
	$m['xrange']['__args__'] = [null,null,['start'],['stop', null],['step', $constant_int_1]];
	$m['get_len_of_range'] = function(lo, hi, step) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
		var n;
		n = $constant_int_0;

    var diff = hi - lo - 1;
    n = Math['floor'](diff / step) + 1;
    
		return n;
	};
	$m['get_len_of_range']['__name__'] = 'get_len_of_range';

	$m['get_len_of_range']['__bind_type__'] = 0;
	$m['get_len_of_range']['__args__'] = [null,null,['lo'],['hi'],['step']];
	$m['range'] = function(start, stop, step) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
		if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][3][1];
		if (typeof step == 'undefined') step=arguments['callee']['__args__'][4][1];
		var r,$attr121,items,$attr122,ilow,$attr123,$attr124,$attr125,$attr126,n;
		if ($p['bool']($m['op_is'](stop, null))) {
			stop = start;
			start = $constant_int_0;
		}
		ilow = start;
		if ($p['bool'](!$p['bool'](start!== null && start['__number__'] && (start['__number__'] != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop['__number__'] && (stop['__number__'] != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step['__number__'] && (step['__number__'] != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		if ($p['bool']($m['op_eq'](step, $constant_int_0))) {
			throw ($m['ValueError']('range() step argument must not be zero'));
		}
		if ($p['bool'](($m['cmp'](step, $constant_int_0) == 1))) {
			n = $m['get_len_of_range'](ilow, stop, step);
		}
		else {
			n = $m['get_len_of_range'](stop, ilow, (typeof ($usub8=step)=='number'?
				-$usub8:
				$m['op_usub']($usub8)));
		}
		r = null;
		items = new Array();

    for (var i = 0; i < n; i++) {
    
		items['push'](new $p['int'](ilow));

        ilow += step;
    }
    r = $m['list'](items);
    
		return r;
	};
	$m['range']['__name__'] = 'range';

	$m['range']['__bind_type__'] = 0;
	$m['range']['__args__'] = [null,null,['start'],['stop', null],['step', $constant_int_1]];
	$m['__getslice'] = function(object, lower, upper) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    if (object=== null) {
        return null;
    }
    if (typeof object['__getslice__'] == 'function') {
        return object['__getslice__'](lower, upper);
    }
    if (object['slice'] == 'function')
        return object['slice'](lower, upper);

    return null;
    
	};
	$m['__getslice']['__name__'] = '__getslice';

	$m['__getslice']['__bind_type__'] = 0;
	$m['__getslice']['__args__'] = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    if (typeof object['__delslice__'] == 'function') {
        return object['__delslice__'](lower, upper);
    }
    if (object['__getslice__'] == 'function'
      && object['__delitem__'] == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object['__delitem__'](i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice']['__name__'] = '__delslice';

	$m['__delslice']['__bind_type__'] = 0;
	$m['__delslice']['__args__'] = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);


    if (typeof object['__setslice__'] == 'function') {
        return object['__setslice__'](lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice']['__name__'] = '__setslice';

	$m['__setslice']['__bind_type__'] = 0;
	$m['__setslice']['__args__'] = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2c6b74ef2791d2d19a17da3ca230eb36';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if (text['__is_instance__'] === false) {
            return $m['object']['__str__'](text);
        }
        if ($p['hasattr'](text,'__str__')) {
            return text['__str__']();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $and25,$and24;
		if ($p['bool'](($p['bool']($and24=typeof x== 'string')?$m['op_is']($p['len'](x), $constant_int_1):$and24))) {
			return new $p['int'](x['charCodeAt']($constant_int_0));
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord']['__name__'] = 'ord';

	$m['ord']['__bind_type__'] = 0;
	$m['ord']['__args__'] = [null,null,['x']];
	$m['chr'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


        return String['fromCharCode'](x);
    
	};
	$m['chr']['__name__'] = 'chr';

	$m['chr']['__bind_type__'] = 0;
	$m['chr']['__args__'] = [null,null,['x']];
	$m['is_basetype'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype']['__name__'] = 'is_basetype';

	$m['is_basetype']['__bind_type__'] = 0;
	$m['is_basetype']['__args__'] = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


        if (x!== null && typeof x['__is_instance__'] == 'boolean') {
            var src = x['__name__'];
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype']['__name__'] = 'get_pyjs_classtype';

	$m['get_pyjs_classtype']['__bind_type__'] = 0;
	$m['get_pyjs_classtype']['__args__'] = [null,null,['x']];
	$m['repr'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x['toString']();

       if (t == "string") {
           if (x['indexOf']("'") == -1)
               return "'" + x+ "'";
           if (x['indexOf']('"') == -1)
               return '"' + x+ '"';
           var s = x['$$replace'](new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ($p['bool']($p['hasattr'](x, '__repr__'))) {
			if ($p['bool']($p['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x['toString']() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x['toString']() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor['$$replace'](new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr']['__name__'] = 'repr';

	$m['repr']['__bind_type__'] = 0;
	$m['repr']['__args__'] = [null,null,['x']];
	$m['len'] = function(object) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var v;
		v = $constant_int_0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null)
        return v;
    else if (typeof object['__array'] != 'undefined')
        v = object['__array']['length'];
    else if (typeof object['__len__'] == 'function')
        v = object['__len__']();
    else if (typeof object['length'] != 'undefined')
        v = object['length'];
    else throw $m['TypeError']("object has no len()");
    if (v['__number__'] & 0x06) return v;
    
		return new $p['int'](v);
	};
	$m['len']['__name__'] = 'len';

	$m['len']['__bind_type__'] = 0;
	$m['len']['__args__'] = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
		var $iter14_array,$iter14_type,ci,$iter14_iter,$iter14_idx,$iter14_nextval;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo['__name__']) {
        case 'float':
            return typeof object_== 'number' && object_['__number__'] == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_['__number__']) {
                if (object_['__number__'] == 0x02) {
                    return true;
                }
                if (isFinite(object_) &&
                    Math['ceil'](object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_['__number__'] == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ($p['bool']($p['_isinstance'](classinfo, $m['tuple']))) {
			if ($p['bool']($p['_isinstance'](object_, $m['tuple']))) {
				return true;
			}
			$iter14_iter = classinfo;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				ci = $iter14_nextval['$nextval'];
				if ($p['bool']($m['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance']['__name__'] = 'isinstance';

	$m['isinstance']['__bind_type__'] = 0;
	$m['isinstance']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (   object_['__is_instance__'] !== true
        || classinfo['__is_instance__'] === null) {
        return false;
    }
    var __mro__ = object_['__mro__'];
    var n = __mro__['length'];
    if (classinfo['__is_instance__'] === false) {
        while (--n >= 0) {
            if (object_['__mro__'][n] === classinfo['prototype']) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_['__mro__'][n] === classinfo['__class__']) return true;
    }
    return false;
    
	};
	$m['_isinstance']['__name__'] = '_isinstance';

	$m['_isinstance']['__bind_type__'] = 0;
	$m['_isinstance']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
		var ci,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,$iter15_iter;
		if ($p['bool']( typeof class_ == 'undefined' || class_ === null || class_['__is_instance__'] !== false )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ($p['bool']($m['isinstance'](classinfo, $m['tuple']))) {
			$iter15_iter = classinfo;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				ci = $iter15_nextval['$nextval'];
				if ($p['bool']($m['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if ($p['bool']( typeof classinfo == 'undefined' || classinfo['__is_instance__'] !== false )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass']['__name__'] = 'issubclass';

	$m['issubclass']['__bind_type__'] = 0;
	$m['issubclass']['__args__'] = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (   object_['__is_instance__'] === null
        || classinfo['__is_instance__'] === null) {
        return false;
    }
    var __mro__ = object_['__mro__'];
    var n = __mro__['length'];
    if (classinfo['__is_instance__'] === false) {
        while (--n >= 0) {
            if (object_['__mro__'][n] === classinfo['prototype']) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_['__mro__'][n] === classinfo['__class__']) return true;
    }
    return false;
    
	};
	$m['_issubtype']['__name__'] = '_issubtype';

	$m['_issubtype']['__bind_type__'] = 0;
	$m['_issubtype']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);

 		return null;
	};
	$m['__getattr_check']['__name__'] = '__getattr_check';

	$m['__getattr_check']['__bind_type__'] = 0;
	$m['__getattr_check']['__args__'] = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
		if (typeof default_value == 'undefined') default_value=arguments['callee']['__args__'][4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments['length'] != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = attrib_remap['indexOf'](name) < 0 ? name:
                        '$$'+name;
    if (typeof obj[mapped_name] == 'undefined') {
        if (arguments['length'] != 3) {
            if (obj['__is_instance__'] === true &&
                    typeof obj['__getattr__'] == 'function') {
                return obj['__getattr__'](name);
            }
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method['__get__'] == 'function') {
        if (obj['__is_instance__']) {
            return method['__get__'](obj, obj['__class__']);
        }
        return method['__get__'](null, obj['__class__']);
    }
    if (   typeof method != 'function'
        || typeof method['__is_instance__'] != 'undefined'
        || obj['__is_instance__'] !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method['apply'](obj,$pyjs_array_slice['call'](arguments));
    };
    fnwrap['__name__'] = name;
    fnwrap['__args__'] = obj[mapped_name]['__args__'];
    fnwrap['__class__'] = obj['__class__'];
    fnwrap['__doc__'] = method['__doc__'] || '';
    fnwrap['__bind_type__'] = obj[mapped_name]['__bind_type__'];
    if (typeof obj[mapped_name]['__is_instance__'] != 'undefined') {
        fnwrap['__is_instance__'] = obj[mapped_name]['__is_instance__'];
    } else {
        fnwrap['__is_instance__'] = false;
    }
    return fnwrap;
    
	};
	$m['getattr']['__name__'] = 'getattr';

	$m['getattr']['__bind_type__'] = 0;
	$m['getattr']['__args__'] = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (typeof obj['__delete__'] == 'function') {
        obj['__delete__'](obj);
    } else {
        delete obj;
    }
    
	};
	$m['_del']['__name__'] = '_del';

	$m['_del']['__bind_type__'] = 0;
	$m['_del']['__args__'] = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj['__is_instance__'] && typeof obj['__delattr__'] == 'function') {
        obj['__delattr__'](name);
        return;
    }
    var mapped_name = attrib_remap['indexOf'](name) < 0 ? name:
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined") ){
        if (obj['__is_instance__']
            && typeof obj[mapped_name]['__delete__'] == 'function') {
            obj[mapped_name]['__delete__'](obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj['__name__']+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr']['__name__'] = 'delattr';

	$m['delattr']['__bind_type__'] = 0;
	$m['delattr']['__args__'] = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj['__is_instance__'] && typeof obj['__setattr__'] == 'function') {
        obj['__setattr__'](name, value)
        return;
    }
    if (attrib_remap['indexOf'](name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj['__is_instance__']
        && obj[name] !== null
        && typeof obj[name]['__set__'] == 'function') {
        obj[name]['__set__'](obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr']['__name__'] = 'setattr';

	$m['setattr']['__bind_type__'] = 0;
	$m['setattr']['__args__'] = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (attrib_remap['indexOf'](name) > 0) {
        return typeof obj['$$'+name] != 'undefined';
    }
    return typeof obj[name] != 'undefined';
    
	};
	$m['hasattr']['__name__'] = 'hasattr';

	$m['hasattr']['__bind_type__'] = 0;
	$m['hasattr']['__args__'] = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) {
        if (property['substring'](0,2) == '$$') {
            // handle back mapping of name
            properties['append'](property['substring'](2));
        } else if (attrib_remap['indexOf'](property) < 0) {
            properties['append'](property);
        }
    }
    return properties;
    
	};
	$m['dir']['__name__'] = 'dir';

	$m['dir']['__bind_type__'] = 0;
	$m['dir']['__args__'] = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
		if (typeof sequence == 'undefined') sequence=arguments['callee']['__args__'][4][1];
		var $iter16_array,$iter17_nextval,$iter17_array,$iter17_iter,$iter16_type,items,$iter16_idx,item,$iter17_type,$iter16_nextval,$iter16_iter,$iter17_idx;
		items = $p['list']([]);
		if ($p['bool']($m['op_is'](sequence, null))) {
			sequence = method;
			method = obj;
			$iter16_iter = sequence;
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				item = $iter16_nextval['$nextval'];
				if ($p['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter17_iter = sequence;
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				item = $iter17_nextval['$nextval'];
				if ($p['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter']['__name__'] = 'filter';

	$m['filter']['__bind_type__'] = 0;
	$m['filter']['__args__'] = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
		if (typeof sequence == 'undefined') sequence=arguments['callee']['__args__'][4][1];
		var $iter18_type,$iter18_iter,$iter19_idx,$iter18_array,items,$iter19_nextval,$iter19_array,$iter19_iter,item,$iter18_idx,$iter19_type,$iter18_nextval;
		items = $p['list']([]);
		if ($p['bool']($m['op_is'](sequence, null))) {
			sequence = method;
			method = obj;
			$iter18_iter = sequence;
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				item = $iter18_nextval['$nextval'];
				items['append'](method(item));
			}
		}
		else {
			$iter19_iter = sequence;
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				item = $iter19_nextval['$nextval'];
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map']['__name__'] = 'map';

	$m['map']['__bind_type__'] = 0;
	$m['map']['__args__'] = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
		if (typeof initializer == 'undefined') initializer=arguments['callee']['__args__'][4][1];
		var $iter20_iter,$iter20_nextval,$iter20_type,$iter20_idx,emtpy,$pyjs_try_err,value,$iter20_array;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter20_iter = iterable;
		$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
		while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
			value = $iter20_nextval['$nextval'];
			emtpy = false;
			if ($p['bool'](typeof initializer== 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ($p['bool']((typeof empty == "undefined"?$m['empty']:empty))) {
			if ($p['bool'](typeof initializer== 'undefined')) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce']['__name__'] = 'reduce';

	$m['reduce']['__bind_type__'] = 0;
	$m['reduce']['__args__'] = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
		var iterables = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $add50,$add49,i,n,lst,$pyjs_try_err,t;
		n = $m['len'](iterables);
		if ($p['bool']($m['op_eq'](n, $constant_int_0))) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter21_idx,$iter21_nextval,i,$collcomp4,$iter21_type,$iter21_iter,$iter21_array;
	$collcomp4 = $p['list']();
		$iter21_iter = iterables;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
			i = $iter21_nextval['$nextval'];
			$collcomp4['append']($p['iter'](i));
		}

	return $collcomp4;}();
		try {
			while ($p['bool'](true)) {
				t = $p['list']([]);
				i = $constant_int_0;
				while ($p['bool'](($m['cmp'](i, n) == -1))) {
					t['append'](iterables['__getitem__'](i)['next']());
					i = $m['__op_add']($add49=i,$add50=$constant_int_1);
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $m['StopIteration']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['StopIteration'])) {
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip']['__name__'] = 'zip';

	$m['zip']['__bind_type__'] = 0;
	$m['zip']['__args__'] = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
		if (typeof cmp == 'undefined') cmp=arguments['callee']['__args__'][3][1];
		if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
		if (typeof reverse == 'undefined') reverse=arguments['callee']['__args__'][5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted']['__name__'] = 'sorted';

	$m['sorted']['__bind_type__'] = 0;
	$m['sorted']['__args__'] = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var l,$pyjs_try_err,v,$and27,$and26;
		if ($p['bool']($m['hasattr'](iterable, '__reversed__'))) {
			return iterable['__reversed__']();
		}
		if ($p['bool'](($p['bool']($and26=$m['hasattr'](iterable, '__len__'))?$m['hasattr'](iterable, '__getitem__'):$and26))) {
			if ($p['bool']($m['op_eq']($m['len'](iterable), $constant_int_0))) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable['__getitem__']($constant_int_0);
				return (typeof _reversed == "undefined"?$m['_reversed']:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed']['__name__'] = 'reversed';

	$m['reversed']['__bind_type__'] = 0;
	$m['reversed']['__args__'] = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $sub22,$sub19,$sub21,i,$sub20;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state['splice'](1, $generator_state['length']-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](($m['cmp'](i, $constant_int_0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						i = $m['__op_sub']($sub21=i,$sub22=$constant_int_1);
						$yield_value = iterable['__getitem__'](i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed']['__name__'] = '_reversed';

	$m['_reversed']['__bind_type__'] = 0;
	$m['_reversed']['__args__'] = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (typeof seq['__enumerate__'] == 'function') {
        return seq['__enumerate__']();
    }

		return (typeof _enumerate == "undefined"?$m['_enumerate']:_enumerate)(seq);
	};
	$m['enumerate']['__name__'] = 'enumerate';

	$m['enumerate']['__bind_type__'] = 0;
	$m['enumerate']['__args__'] = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $add51,$add52,$add53,$add54,$iter22_array,$iter23_iter,$iter23_idx,$iter22_nextval,$iter22_idx,item,$iter23_nextval,nextIndex,$iter22_type,$iter23_type,$iter23_array,$iter22_iter;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = $constant_int_0;
				$iter23_iter = sequence;
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						item = $iter23_nextval['$nextval'];
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = $m['__op_add']($add53=nextIndex,$add54=$constant_int_1);
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate']['__name__'] = '_enumerate';

	$m['_enumerate']['__bind_type__'] = 0;
	$m['_enumerate']['__args__'] = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof sentinel == 'undefined') sentinel=arguments['callee']['__args__'][3][1];

		if ($p['bool']($m['op_is'](sentinel, null))) {
			if ($p['bool']((typeof isIteratable == "undefined"?$m['isIteratable']:isIteratable)(iterable))) {
				return iterable['__iter__']();
			}
			if ($p['bool']($m['hasattr'](iterable, '__getitem__'))) {
				return (typeof _iter_getitem == "undefined"?$m['_iter_getitem']:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ($p['bool']((typeof isFunction == "undefined"?$m['isFunction']:isFunction)(iterable))) {
			return (typeof _iter_callable == "undefined"?$m['_iter_callable']:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter']['__name__'] = 'iter';

	$m['iter']['__bind_type__'] = 0;
	$m['iter']['__args__'] = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $add55,$add56,$add57,i,$add58,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $constant_int_0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state['splice'](2, $generator_state['length']-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||($p['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$yield_value = object['__getitem__'](i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = $m['__op_add']($add57=i,$add58=$constant_int_1);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['IndexError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem']['__name__'] = '_iter_getitem';

	$m['_iter_getitem']['__bind_type__'] = 0;
	$m['_iter_getitem']['__args__'] = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state['splice'](1, $generator_state['length']-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ($p['bool']($m['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable']['__name__'] = '_iter_callable';

	$m['_iter_callable']['__bind_type__'] = 0;
	$m['_iter_callable']['__args__'] = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
		var sequence = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $iter24_idx,minValue,item,$iter24_array,$iter24_type,$iter24_iter,$iter24_nextval;
		if ($p['bool']($m['op_eq']($m['len'](sequence), $constant_int_1))) {
			sequence = sequence['__getitem__']($constant_int_0);
		}
		minValue = null;
		$iter24_iter = sequence;
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
			item = $iter24_nextval['$nextval'];
			if ($p['bool']($m['op_is'](minValue, null))) {
				minValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, minValue), (typeof ($usub9=$constant_int_1)=='number'?
				-$usub9:
				$m['op_usub']($usub9))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min']['__name__'] = 'min';

	$m['min']['__bind_type__'] = 0;
	$m['min']['__args__'] = ['sequence',null];
	$m['max'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
		var sequence = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $iter25_nextval,$iter25_array,maxValue,$iter25_iter,item,$iter25_idx,$iter25_type;
		if ($p['bool']($m['op_eq']($m['len'](sequence), $constant_int_1))) {
			sequence = sequence['__getitem__']($constant_int_0);
		}
		maxValue = null;
		$iter25_iter = sequence;
		$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
		while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
			item = $iter25_nextval['$nextval'];
			if ($p['bool']($m['op_is'](maxValue, null))) {
				maxValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, maxValue), $constant_int_1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max']['__name__'] = 'max';

	$m['max']['__bind_type__'] = 0;
	$m['max']['__args__'] = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof start == 'undefined') start=arguments['callee']['__args__'][3][1];
		var i,$iter26_type,$iter26_nextval,$add59,$iter26_idx,$iter26_array,$iter26_iter,$add60;
		if ($p['bool']($m['op_is'](start, null))) {
			start = $constant_int_0;
		}
		$iter26_iter = iterable;
		$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
		while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
			i = $iter26_nextval['$nextval'];
			start = $m['__op_add']($add59=start,$add60=i);
		}
		return start;
	};
	$m['sum']['__name__'] = 'sum';

	$m['sum']['__bind_type__'] = 0;
	$m['sum']['__args__'] = [null,null,['iterable'],['start', null]];
	$m['complex'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'd20759f5cde02ecde599fb331b8cfe8a';
		$method = $pyjs__bind_method2('__init__', function(real, imag) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				real = arguments[1];
				imag = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'd20759f5cde02ecde599fb331b8cfe8a') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['real'] = $m['float'](real);
			self['imag'] = $m['float'](imag);
			return null;
		}
	, 1, [null,null,['self'],['real'],['imag']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'd20759f5cde02ecde599fb331b8cfe8a') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr134,$attr133,$attr132,$attr131,$attr130,$attr127,$attr128,$attr129;
			if ($p['bool'](self['real'])) {
				return $p['sprintf']('(%s+%sj)', $p['tuple']([self['real'], self['imag']]));
			}
			else {
				return $p['sprintf']('%sj', self['imag']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(b) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				b = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'd20759f5cde02ecde599fb331b8cfe8a') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr142,$add64,$attr140,$add61,$attr144,$add63,$add62,$add66,$add65,$attr145,$attr141,$attr137,$attr136,$attr135,$attr146,$attr139,$attr138,$attr143;
			if ($p['bool']($m['isinstance'](b, $m['complex']))) {
				return $m['complex']($m['__op_add']($add61=self['real'],$add62=b['real']), $m['__op_add']($add63=self['imag'],$add64=b['imag']));
			}
			else if ($p['bool'](typeof b['__number__'] != 'undefined')) {
				return $m['complex']($m['__op_add']($add65=self['real'],$add66=b), self['imag']);
			}
			else {
				throw ($m['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([self, b]))));
			}
			return null;
		}
	, 1, [null,null,['self'],['b']]);
		$cls_definition['__add__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('complex', $bases, $cls_definition);
	})();
$m['complex']['__radd__'] = $m['complex']['__add__'];
$m['complex']['__str__'] = $m['complex']['__repr__'];
$m['complex']['toString'] = $m['complex']['__repr__'];
$p['next_hash_id'] = 0;
	if ($p['bool'](typeof 'a'[0] == 'undefined')) {
$p['__hash'] = function(obj) {
        if (obj === null) return null;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        if (typeof obj['nodeType'] != 'number') {
            try {
            obj['$H'] = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj['$H'] = ++$p['next_hash_id'];
        }
        if (typeof obj['setAttribute'] == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj['getAttribute']('$H')) {
            return $H;
        }
        obj['setAttribute']('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj['$H'] != 'undefined' && obj['__class__']['$H'] !== obj['$H']) return obj['$H'];
        if (typeof obj == 'string' || obj['__number__']) return '$'+obj;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        if (typeof obj['nodeType'] != 'number') {
            try {
            obj['$H'] = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj['$H'] = ++$p['next_hash_id'];
        }
        if (typeof obj['setAttribute'] == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj['getAttribute']('$H')) {
            return $H;
        }
        obj['setAttribute']('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        if (obj === null) return null;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        obj['$H'] = ++$p['next_hash_id'];
        return obj['$H'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj['$H'] != 'undefined' && obj['__class__']['$H'] !== obj['$H']) return obj['$H'];
        if (typeof obj == 'string' || obj['__number__']) return '$'+obj;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        obj['$H'] = ++$p['next_hash_id'];
        return obj['$H'];
    };
        
	}
	$m['isObject'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject']['__name__'] = 'isObject';

	$m['isObject']['__bind_type__'] = 0;
	$m['isObject']['__args__'] = [null,null,['a']];
	$m['isFunction'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return typeof a== 'function';
    
	};
	$m['isFunction']['__name__'] = 'isFunction';

	$m['isFunction']['__bind_type__'] = 0;
	$m['isFunction']['__args__'] = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return typeof a== 'string';
    
	};
	$m['isString']['__name__'] = 'isString';

	$m['isString']['__bind_type__'] = 0;
	$m['isString']['__args__'] = [null,null,['a']];
	$m['isNull'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return typeof a== 'object' && !a;
    
	};
	$m['isNull']['__name__'] = 'isNull';

	$m['isNull']['__bind_type__'] = 0;
	$m['isNull']['__args__'] = [null,null,['a']];
	$m['isArray'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return $m['isObject'](a) && a['constructor'] === Array;
    
	};
	$m['isArray']['__name__'] = 'isArray';

	$m['isArray']['__bind_type__'] = 0;
	$m['isArray']['__args__'] = [null,null,['a']];
	$m['isUndefined'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return typeof a== 'undefined';
    
	};
	$m['isUndefined']['__name__'] = 'isUndefined';

	$m['isUndefined']['__bind_type__'] = 0;
	$m['isUndefined']['__args__'] = [null,null,['a']];
	$m['isIteratable'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (a=== null) return false;
    return typeof a['__iter__'] == 'function';
    
	};
	$m['isIteratable']['__name__'] = 'isIteratable';

	$m['isIteratable']['__bind_type__'] = 0;
	$m['isIteratable']['__args__'] = [null,null,['a']];
	$m['isNumber'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return a!== null && a['__number__'] &&
           (a['__number__'] != 0x01 || isFinite(a));
    
	};
	$m['isNumber']['__name__'] = 'isNumber';

	$m['isNumber']['__bind_type__'] = 0;
	$m['isNumber']['__args__'] = [null,null,['a']];
	$m['isInteger'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    switch (a['__number__']) {
        case 0x01:
            if (a != Math['floor'](a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger']['__name__'] = 'isInteger';

	$m['isInteger']['__bind_type__'] = 0;
	$m['isInteger']['__args__'] = [null,null,['a']];
	$m['isSet'] = function(a) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (a=== null) return false;
    if (typeof a['__object'] == 'undefined') return false;
    var a_mro = a['__mro__'];
    switch (a_mro[a_mro['length']-2]['__md5__']) {
        case $m['set']['__md5__']:
            return 1;
        case $m['frozenset']['__md5__']:
            return 2;
    }
    return false;

	};
	$m['isSet']['__name__'] = 'isSet';

	$m['isSet']['__bind_type__'] = 0;
	$m['isSet']['__args__'] = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $attr148,$attr147;
		if ($p['bool']($m['isArray'](x))) {

        var result = [];
        for(var k=0; k < x['length']; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result['push'](tv);
        }
        return result;
        
		}
		if ($p['bool']($m['isObject'](x))) {
			if ($p['bool']($m['getattr'](x, '__number__', null))) {
				return x['valueOf']();
			}
			else if ($p['bool']($m['isinstance'](x, $m['dict']))) {

            var o = x['getObject']();
            var result = {};
            for (var i in o) {
               result[o[i][0]['toString']()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ($p['bool']($m['isinstance'](x, $m['list']))) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ($p['bool']($m['hasattr'](x, '__class__'))) {
				return x;
			}
			else if ($p['bool']($m['isFunction'](x))) {
				return x;
			}
		}
		if ($p['bool']($m['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ($p['bool']($m['isString'](x))) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects']['__name__'] = 'toJSObjects';

	$m['toJSObjects']['__bind_type__'] = 0;
	$m['toJSObjects']['__args__'] = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var re_exp = /(.*)([+-])(.*)/;
    var re_fmt = /([^%]*)%([(][^)]*[)])?([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;
    var arg0;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision['substr'](1));
        }
        if (flags['indexOf']('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String['fromCharCode'](parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp['exec'](String(param['toExponential'](precision)));
                if (subst[3]['length'] == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp['exec'](String(param['toExponential'](precision))['toUpperCase']());
                if (subst[3]['length'] == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param)['toFixed'](precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param)['toFixed'](precision))['toUpperCase']();
                break;
            case 'g':
                // FIXME: Issue 672 should return double digit exponent
                // probably can remove code in formatd after that
                if (precision === null && flags['indexOf']('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param['toExponential']() : param['toExponential']()['toPrecision'](precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param)['toPrecision'](precision));
                }
                break;
            case 'G':
                if (precision === null && flags['indexOf']('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param['toExponential']() : param['toExponential']()['toPrecision'](precision))['toUpperCase']();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param)['toPrecision'](precision))['toUpperCase']()['toUpperCase']();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['int'](param);
                subst = param['toString'](8);
                if (subst != '0' && flags['indexOf']('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['int'](param);
                subst = param['toString'](16);
                if (flags['indexOf']('#') >= 0) {
                    if (left_padding) {
                        subst = subst['rjust'](minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['int'](param);
                subst = param['toString'](16)['toUpperCase']();
                if (flags['indexOf']('#') >= 0) {
                    if (left_padding) {
                        subst = subst['rjust'](minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion['charCodeAt'](0))+") at index " + (strng['length'] - remainder['length'] - 1));
        }
        if (minlen && subst['length'] < minlen) {
            if (numeric && left_padding && flags['indexOf']('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst['rjust'](minlen, padchar) : subst['ljust'](minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, key, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_fmt['exec'](remainder);
            if (a === null) {
                __array[__array['length']] = remainder;
                break;
            }
            left = a[1]; key = a[2], flags = a[3];
            minlen = a[4]; precision = a[6]; conversion = a[7];
            remainder = a[8];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array['length']] = left;
            if (minlen == '*') {
                if (argidx == ++nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args['__getitem__'](argidx++);
                switch (minlen['__number__']) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math['floor'](minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (!key) {
                    if (argidx == ++nargs || nargs > args['__array']['length']) {
                        throw $m['TypeError']("not enough arguments for format string");
                    }
                    param = args['__getitem__'](argidx++);
                } else {
                    if (args['__array']['length'] != 1) {
                        throw $m['TypeError']("format requires a mapping");
                    }
                    argidx = 1;
                    key = key.substr(1, key.length-2);
                    param = arg0['__getitem__'](key);
                }
            }
            __array[__array['length']] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args['__md5__'] == $m['tuple']['__md5__'] ? 'tuple': (args['__md5__'] == $m['dict']['__md5__'] ? 'dict': 'Other'));
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    arg0 = args['__array'][0];
    sprintf_list(strng, args);
    if (argidx != args['__array']['length']) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result['join']("");

	};
	$m['sprintf']['__name__'] = 'sprintf';

	$m['sprintf']['__bind_type__'] = 0;
	$m['sprintf']['__args__'] = [null,null,['strng'],['args']];
	$m['__module_internals'] = $m['set']($p['list'](['__track_lines__']));
	$m['_globals'] = function(module) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $iter27_nextval,d,$iter27_array,$iter27_idx,$iter27_iter,$iter27_type,name;
		d = $m['dict']();
		$iter27_iter = $m['dir'](module);
		$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
		while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
			name = $iter27_nextval['$nextval'];
			if ($p['bool'](!$p['bool']($m['__module_internals']['__contains__'](name)))) {
				d['__setitem__'](name, module[name]);
			}
		}
		return d;
	};
	$m['_globals']['__name__'] = '_globals';

	$m['_globals']['__bind_type__'] = 0;
	$m['_globals']['__args__'] = [null,null,['module']];
	$m['debugReport'] = function(msg) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    $p['printFunc']([msg], true);
    
	};
	$m['debugReport']['__name__'] = 'debugReport';

	$m['debugReport']['__bind_type__'] = 0;
	$m['debugReport']['__args__'] = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd['console'] != 'undefined'
    && typeof $wnd['console']['debug'] == 'function') {
    $printFunc = function(s) {
        $wnd['console']['debug'](s);
    };
} else if (   typeof $wnd['opera'] != 'undefined'
           && typeof $wnd['opera']['postError'] == 'function') {
    $printFunc = function(s) {
        $wnd['opera']['postError'](s);
    };
} else if ( typeof console != 'undefined') {
    if (   typeof console['log'] == 'function'
        || typeof console['log'] == 'object') {
        $printFunc = function(s){
            console['log'](s);
        };
    }
}

	$m['_print_to_console'] = function(s) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console']['__name__'] = '_print_to_console';

	$m['_print_to_console']['__bind_type__'] = 0;
	$m['_print_to_console']['__args__'] = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    var s = "";
    for(var i=0; i < objs['length']; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys']['stdout']['write'](s);
    
	};
	$m['printFunc']['__name__'] = 'printFunc';

	$m['printFunc']['__bind_type__'] = 0;
	$m['printFunc']['__args__'] = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
		if (typeof z == 'undefined') z=arguments['callee']['__args__'][4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math['pow'](x, y);
		if ($p['bool']($m['op_is'](z, null))) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow']['__name__'] = 'pow';

	$m['pow']['__bind_type__'] = 0;
	$m['pow']['__args__'] = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (typeof x == 'number') {
        if (Math['floor'](x) == x) {
            return '0x' + x['toString'](16);
        }
    } else {
        switch (x['__number__']) {
            case 0x02:
                return '0x' + x['__v']['toString'](16);
            case 0x04:
                return x['__hex__']();
        }
    }

		throw ($m['TypeError']("hex() argument can't be converted to hex"));
		return null;
	};
	$m['hex']['__name__'] = 'hex';

	$m['hex']['__bind_type__'] = 0;
	$m['hex']['__args__'] = [null,null,['x']];
	$m['oct'] = function(x) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    if (typeof x == 'number') {
        if (Math['floor'](x) == x) {
            return x == 0 ? '0': '0' + x['toString'](8);
        }
    } else {
        switch (x['__number__']) {
            case 0x02:
                return x['__v'] == 0 ? '0': '0' + x['__v']['toString'](8);
            case 0x04:
                return x['__oct__']();
        }
    }

		throw ($m['TypeError']("oct() argument can't be converted to oct"));
		return null;
	};
	$m['oct']['__name__'] = 'oct';

	$m['oct']['__bind_type__'] = 0;
	$m['oct']['__args__'] = [null,null,['x']];
	$m['round'] = function(x, n) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];
		var r;
		n = $m['pow']($constant_int_10, n);
		r = null;
r = Math['round'](n*x)/n;
		return $m['float'](r);
	};
	$m['round']['__name__'] = 'round';

	$m['round']['__bind_type__'] = 0;
	$m['round']['__args__'] = [null,null,['x'],['n', $constant_int_0]];
	$m['divmod'] = function(x, y) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y['__v'] == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x / y['__v']);
                return $m['tuple']([f, x - f * y['__v']]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x['__v'] / y);
                return $m['tuple']([f, x['__v'] - f * y]);
            case 0x0202:
                if (y['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math['floor'](x['__v'] / y['__v']);
                return $m['tuple']([new $p['int'](f), new $p['int'](x['__v'] - f * y['__v'])]);
            case 0x0204:
                return y['__rdivmod__'](new $p['long'](x['__v']));
            case 0x0402:
                return x['__divmod__'](new $p['long'](y['__v']));
            case 0x0404:
                return x['__divmod__'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y['__divmod__'](x);
            if (typeof x['__divmod__'] == 'function') return x['__divmod__'](y);
        }
        if (!y['__number__'] && typeof y['__rdivmod__'] == 'function') return y['__rdivmod__'](x);
    }

		throw ($m['TypeError']($m['sprintf']("unsupported operand type(s) for divmod(): '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod']['__name__'] = 'divmod';

	$m['divmod']['__bind_type__'] = 0;
	$m['divmod']['__args__'] = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $iter28_array,$iter28_nextval,$iter28_idx,element,$iter28_iter,$iter28_type;
		$iter28_iter = iterable;
		$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
		while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
			element = $iter28_nextval['$nextval'];
			if ($p['bool'](!$p['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	$m['all']['__name__'] = 'all';

	$m['all']['__bind_type__'] = 0;
	$m['all']['__args__'] = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
		var $iter29_type,$iter29_iter,element,$iter29_nextval,$iter29_idx,$iter29_array;
		$iter29_iter = iterable;
		$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
		while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
			element = $iter29_nextval['$nextval'];
			if ($p['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	$m['any']['__name__'] = 'any';

	$m['any']['__bind_type__'] = 0;
	$m['any']['__args__'] = [null,null,['iterable']];
	$m['StringBuilder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '620b5610687ac0254c025fd566da78e6';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '620b5610687ac0254c025fd566da78e6') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['l'] = $p['list']([]);
			self['tp'] = $m['str'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('append', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				s = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '620b5610687ac0254c025fd566da78e6') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['l']['append'](s);
			return null;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('append_slice', function(s, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
			} else {
				var self = arguments[0];
				s = arguments[1];
				start = arguments[2];
				end = arguments[3];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '620b5610687ac0254c025fd566da78e6') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['l']['append']($p['__getslice'](s, start, end));
			return null;
		}
	, 1, [null,null,['self'],['s'],['start'],['end']]);
		$cls_definition['append_slice'] = $method;
		$method = $pyjs__bind_method2('append_multiple_char', function(c, times) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				c = arguments[1];
				times = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '620b5610687ac0254c025fd566da78e6') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $mul2,$mul1;
			self['l']['append']((typeof ($mul1=c)==typeof ($mul2=times) && typeof $mul1=='number'?
				$mul1*$mul2:
				$m['op_mul']($mul1,$mul2)));
			return null;
		}
	, 1, [null,null,['self'],['c'],['times']]);
		$cls_definition['append_multiple_char'] = $method;
		$method = $pyjs__bind_method2('build', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '620b5610687ac0254c025fd566da78e6') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr149,$attr150;
			return self['tp']('')['join'](self['l']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['build'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringBuilder', $bases, $cls_definition);
	})();
	$m['_parse_int'] = function(s, start, end) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
		var $sub23,c,$add70,$sub24,i,$add69,$add67,$add68,$pyjs_try_err,result,msg,$mul4,$mul3;
		result = $constant_int_0;
		i = start;
		while ($p['bool'](($m['cmp'](i, end) == -1))) {
			c = $m['ord'](s['__getitem__'](i));
			if ($p['bool']((($m['cmp']($m['ord']('0'), ($compare1 = c)) < 1)&&($m['cmp']($compare1, ($compare2 = $m['ord']('9'))) < 1)))) {
				try {
					result = (typeof ($mul3=result)==typeof ($mul4=$constant_int_10) && typeof $mul3=='number'?
						$mul3*$mul4:
						$m['op_mul']($mul3,$mul4));
					if ($p['bool'](($m['cmp'](result, $constant_int_1000000000) == 1))) {
						throw ($m['OverflowError']);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['OverflowError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['OverflowError'])) {
						msg = 'too many decimal digits in format string';
						throw ($m['ValueError'](msg));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				result = $m['__op_add']($add67=result,$add68=$m['__op_sub']($sub23=c,$sub24=$m['ord']('0')));
			}
			else {
				break;
			}
			i = $m['__op_add']($add69=i,$add70=$constant_int_1);
		}
		if ($p['bool']($m['op_eq'](i, start))) {
			result = (typeof ($usub10=$constant_int_1)=='number'?
				-$usub10:
				$m['op_usub']($usub10));
		}
		return $p['tuple']([result, i]);
	};
	$m['_parse_int']['__name__'] = '_parse_int';

	$m['_parse_int']['__bind_type__'] = 0;
	$m['_parse_int']['__args__'] = [null,null,['s'],['start'],['end']];
	$m['TemplateFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '99d4cfa142843b6f836a504118f1e987';
		$cls_definition['ANS_INIT'] = $constant_int_1;
		$cls_definition['ANS_AUTO'] = $constant_int_2;
		$cls_definition['ANS_MANUAL'] = $constant_int_3;
		$method = $pyjs__bind_method2('__init__', function(space, template) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				space = arguments[1];
				template = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['space'] = space;
			self['empty'] = '';
			self['template'] = template;
			self['parser_list_w'] = null;
			return null;
		}
	, 1, [null,null,['self'],['space'],['template']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('build', function(args, kw) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				args = arguments[1];
				kw = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr154,$attr151,$attr153,$attr152;
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([args, kw]), 2, null);
			self['args'] = $tupleassign5[0];
			self['kwargs'] = $tupleassign5[1];
			self['auto_numbering'] = $constant_int_0;
			self['auto_numbering_state'] = self['ANS_INIT'];
			return self['_build_string']($constant_int_0, $m['len'](self['template']), $constant_int_2);
		}
	, 1, [null,null,['self'],['args'],['kw']]);
		$cls_definition['build'] = $method;
		$method = $pyjs__bind_method2('_build_string', function(start, end, level) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr155,$attr156,$sub25,s,$sub26,out;
			out = $m['StringBuilder']();
			if ($p['bool'](!$p['bool'](level))) {
				throw ($m['ValueError']('Recursion depth exceeded'));
			}
			level = $m['__op_sub']($sub25=level,$sub26=$constant_int_1);
			s = self['template'];
			return self['_do_build_string'](start, end, level, out, s);
		}
	, 1, [null,null,['self'],['start'],['end'],['level']]);
		$cls_definition['_build_string'] = $method;
		$method = $pyjs__bind_method2('_do_build_string', function(start, end, level, out, s) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
				out = arguments[4];
				s = arguments[5];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var field_start,rendered,$sub27,$add82,$sub28,$sub29,nested,$add79,recursive,last_literal,$add81,$sub30,$add80,$add77,$or9,$or8,$add74,$add76,markup_follows,c,$add75,$add72,$add73,i,$add71,$add78,at_end,$or11,$or10,$assign2;
			$assign2 = start;
			last_literal = $assign2;
			i = $assign2;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = s['__getitem__'](i);
				i = $m['__op_add']($add71=i,$add72=$constant_int_1);
				if ($p['bool'](($p['bool']($or8=$m['op_eq'](c, '{'))?$or8:$m['op_eq'](c, '}')))) {
					at_end = $m['op_eq'](i, end);
					markup_follows = true;
					if ($p['bool']($m['op_eq'](c, '}'))) {
						if ($p['bool'](($p['bool']($or10=at_end)?$or10:!$m['op_eq'](s['__getitem__'](i), '}')))) {
							throw ($m['ValueError']("Single '}'"));
						}
						i = $m['__op_add']($add73=i,$add74=$constant_int_1);
						markup_follows = false;
					}
					if ($p['bool']($m['op_eq'](c, '{'))) {
						if ($p['bool'](at_end)) {
							throw ($m['ValueError']("Single '{'"));
						}
						if ($p['bool']($m['op_eq'](s['__getitem__'](i), '{'))) {
							i = $m['__op_add']($add75=i,$add76=$constant_int_1);
							markup_follows = false;
						}
					}
					out['append_slice'](s, last_literal, $m['__op_sub']($sub27=i,$sub28=$constant_int_1));
					if ($p['bool'](!$p['bool'](markup_follows))) {
						last_literal = i;
						continue;
					}
					nested = $constant_int_1;
					field_start = i;
					recursive = false;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = s['__getitem__'](i);
						if ($p['bool']($m['op_eq'](c, '{'))) {
							recursive = true;
							nested = $m['__op_add']($add77=nested,$add78=$constant_int_1);
						}
						else if ($p['bool']($m['op_eq'](c, '}'))) {
							nested = $m['__op_sub']($sub29=nested,$sub30=$constant_int_1);
							if ($p['bool'](!$p['bool'](nested))) {
								break;
							}
						}
						i = $m['__op_add']($add79=i,$add80=$constant_int_1);
					}
					if ($p['bool'](nested)) {
						throw ($m['ValueError']("Unmatched '{'"));
					}
					rendered = self['_render_field'](field_start, i, recursive, level);
					out['append'](rendered);
					i = $m['__op_add']($add81=i,$add82=$constant_int_1);
					last_literal = i;
				}
			}
			out['append_slice'](s, last_literal, end);
			return out['build']();
		}
	, 1, [null,null,['self'],['start'],['end'],['level'],['out'],['s']]);
		$cls_definition['_do_build_string'] = $method;
		$method = $pyjs__bind_method2('_parse_field', function(start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add89,$add88,$add83,$add87,$add86,$add85,$add84,conversion,end_name,$add90,w_msg,c,$add92,$add91,$attr157,i,$attr158,s,$or13,$or12;
			s = self['template'];
			i = start;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = s['__getitem__'](i);
				if ($p['bool'](($p['bool']($or12=$m['op_eq'](c, ':'))?$or12:$m['op_eq'](c, '!')))) {
					end_name = i;
					if ($p['bool']($m['op_eq'](c, '!'))) {
						i = $m['__op_add']($add83=i,$add84=$constant_int_1);
						if ($p['bool']($m['op_eq'](i, end))) {
							w_msg = 'expected conversion';
							throw ($m['ValueError'](w_msg));
						}
						conversion = s['__getitem__'](i);
						i = $m['__op_add']($add85=i,$add86=$constant_int_1);
						if ($p['bool'](($m['cmp'](i, end) == -1))) {
							if ($p['bool'](!$m['op_eq'](s['__getitem__'](i), ':'))) {
								w_msg = "expected ':' after format specifier";
								throw ($m['ValueError'](w_msg));
							}
							i = $m['__op_add']($add87=i,$add88=$constant_int_1);
						}
					}
					else {
						conversion = null;
						i = $m['__op_add']($add89=i,$add90=$constant_int_1);
					}
					return $p['tuple']([$p['__getslice'](s, start, end_name), conversion, i]);
				}
				i = $m['__op_add']($add91=i,$add92=$constant_int_1);
			}
			return $p['tuple']([$p['__getslice'](s, start, end), null, end]);
		}
	, 1, [null,null,['self'],['start'],['end']]);
		$cls_definition['_parse_field'] = $method;
		$method = $pyjs__bind_method2('_get_argument', function(name) {
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
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr173,kwarg,$and29,$and28,arg_key,$attr177,index,end,$attr169,$attr164,$attr165,$attr167,$attr160,$attr161,$attr162,$attr163,$pyjs_try_err,use_numeric,msg,empty,w_msg,$add94,$add95,$add96,stop,$add93,$attr168,c,$attr178,i,$attr176,$attr175,$attr174,$attr159,$attr172,$attr171,$attr170,$or15,$or14,$or17,$or16,$attr166,w_arg;
			i = $constant_int_0;
			end = $m['len'](name);
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool'](($p['bool']($or14=$m['op_eq'](c, '['))?$or14:$m['op_eq'](c, '.')))) {
					break;
				}
				i = $m['__op_add']($add93=i,$add94=$constant_int_1);
			}
			empty = !$p['bool'](i);
			if ($p['bool'](empty)) {
				index = (typeof ($usub11=$constant_int_1)=='number'?
					-$usub11:
					$m['op_usub']($usub11));
			}
			else {
				var $tupleassign6 = $p['__ass_unpack']($m['_parse_int'](name, $constant_int_0, i), 2, null);
				index = $tupleassign6[0];
				stop = $tupleassign6[1];
				if ($p['bool'](!$m['op_eq'](stop, i))) {
					index = (typeof ($usub12=$constant_int_1)=='number'?
						-$usub12:
						$m['op_usub']($usub12));
				}
			}
			use_numeric = ($p['bool']($or16=empty)?$or16:!$m['op_eq'](index, (typeof ($usub13=$constant_int_1)=='number'?
				-$usub13:
				$m['op_usub']($usub13))));
			if ($p['bool'](($p['bool']($and28=$m['op_eq'](self['auto_numbering_state'], self['ANS_INIT']))?use_numeric:$and28))) {
				if ($p['bool'](empty)) {
					self['auto_numbering_state'] = self['ANS_AUTO'];
				}
				else {
					self['auto_numbering_state'] = self['ANS_MANUAL'];
				}
			}
			if ($p['bool'](use_numeric)) {
				if ($p['bool']($m['op_eq'](self['auto_numbering_state'], self['ANS_MANUAL']))) {
					if ($p['bool'](empty)) {
						msg = 'switching from manual to automatic numbering';
						throw ($m['ValueError'](msg));
					}
				}
				else if ($p['bool'](!$p['bool'](empty))) {
					msg = 'switching from automatic to manual numbering';
					throw ($m['ValueError'](msg));
				}
			}
			if ($p['bool'](empty)) {
				index = self['auto_numbering'];
				self['auto_numbering'] = $m['__op_add']($add95=self['auto_numbering'],$add96=$constant_int_1);
			}
			if ($p['bool']($m['op_eq'](index, (typeof ($usub14=$constant_int_1)=='number'?
				-$usub14:
				$m['op_usub']($usub14))))) {
				kwarg = $p['__getslice'](name, 0, i);
				arg_key = kwarg;
				try {
					w_arg = self['kwargs']['__getitem__'](arg_key);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['KeyError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['KeyError'])) {
						throw ($m['KeyError'](arg_key));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else {
				try {
					w_arg = self['args']['__getitem__'](index);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['IndexError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						w_msg = 'index out of range';
						throw ($m['IndexError'](w_msg));
					} else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
			return self['_resolve_lookups'](w_arg, name, i, end);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['_get_argument'] = $method;
		$method = $pyjs__bind_method2('_resolve_lookups', function(w_obj, name, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				name = arguments[2];
				start = arguments[3];
				end = arguments[4];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var got_bracket,$attr182,reached,$add99,index,w_attr,msg,w_item,$add101,$add100,$add103,$add102,$add98,$add104,$add106,$add97,w_msg,$attr180,$attr181,$and30,$and31,c,$attr179,i,$add105,$or19,$or18;
			i = start;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool']($m['op_eq'](c, '.'))) {
					i = $m['__op_add']($add97=i,$add98=$constant_int_1);
					start = i;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = name['__getitem__'](i);
						if ($p['bool'](($p['bool']($or18=$m['op_eq'](c, '['))?$or18:$m['op_eq'](c, '.')))) {
							break;
						}
						i = $m['__op_add']($add99=i,$add100=$constant_int_1);
					}
					if ($p['bool']($m['op_eq'](start, i))) {
						w_msg = 'Empty attribute in format string';
						throw ($m['ValueError'](w_msg));
					}
					w_attr = $p['__getslice'](name, start, i);
					if ($p['bool'](!$m['op_is'](w_obj, null))) {
						w_obj = $m['getattr'](w_obj, w_attr);
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_True'], w_attr])));
					}
				}
				else if ($p['bool']($m['op_eq'](c, '['))) {
					got_bracket = false;
					i = $m['__op_add']($add101=i,$add102=$constant_int_1);
					start = i;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = name['__getitem__'](i);
						if ($p['bool']($m['op_eq'](c, ']'))) {
							got_bracket = true;
							break;
						}
						i = $m['__op_add']($add103=i,$add104=$constant_int_1);
					}
					if ($p['bool'](!$p['bool'](got_bracket))) {
						throw ($m['ValueError']("Missing ']'"));
					}
					if ($p['bool']($m['op_eq'](name['__getitem__'](start), '{'))) {
						throw ($m['TypeError']('no replacement on fieldname'));
					}
					var $tupleassign7 = $p['__ass_unpack']($m['_parse_int'](name, start, i), 2, null);
					index = $tupleassign7[0];
					reached = $tupleassign7[1];
					if ($p['bool'](($p['bool']($and30=!$m['op_eq'](index, (typeof ($usub15=$constant_int_1)=='number'?
						-$usub15:
						$m['op_usub']($usub15))))?$m['op_eq'](reached, i):$and30))) {
						w_item = index;
					}
					else {
						w_item = $p['__getslice'](name, start, i);
					}
					i = $m['__op_add']($add105=i,$add106=$constant_int_1);
					if ($p['bool'](!$m['op_is'](w_obj, null))) {
						w_obj = w_obj['__getitem__'](w_item);
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_False'], w_item])));
					}
				}
				else {
					msg = "Only '[' and '.' may follow ']'";
					throw ($m['ValueError'](msg));
				}
			}
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['name'],['start'],['end']]);
		$cls_definition['_resolve_lookups'] = $method;
		$method = $pyjs__bind_method2('formatter_field_name_split', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var index,c,w_first,end,name,$add107,i,$add108,$attr184,$attr185,stop,$attr183,$or21,$attr186,$or20;
			name = self['template'];
			i = $constant_int_0;
			end = $m['len'](name);
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool'](($p['bool']($or20=$m['op_eq'](c, '['))?$or20:$m['op_eq'](c, '.')))) {
					break;
				}
				i = $m['__op_add']($add107=i,$add108=$constant_int_1);
			}
			if ($p['bool']($m['op_eq'](i, $constant_int_0))) {
				index = (typeof ($usub16=$constant_int_1)=='number'?
					-$usub16:
					$m['op_usub']($usub16));
			}
			else {
				var $tupleassign8 = $p['__ass_unpack']($m['_parse_int'](name, $constant_int_0, i), 2, null);
				index = $tupleassign8[0];
				stop = $tupleassign8[1];
				if ($p['bool'](!$m['op_eq'](stop, i))) {
					index = (typeof ($usub17=$constant_int_1)=='number'?
						-$usub17:
						$m['op_usub']($usub17));
				}
			}
			if ($p['bool'](((($m['cmp'](index, $constant_int_0))|1) == 1))) {
				w_first = index;
			}
			else {
				w_first = $p['__getslice'](name, 0, i);
			}
			self['parser_list_w'] = $p['list']([]);
			self['_resolve_lookups'](null, name, i, end);
			return self['space']['newtuple']($p['list']([w_first, self['space']['iter'](self['space']['newlist'](self['parser_list_w']))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_field_name_split'] = $method;
		$method = $pyjs__bind_method2('_convert', function(w_obj, conversion) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				conversion = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var conv;
			conv = conversion['__getitem__']($constant_int_0);
			if ($p['bool']($m['op_eq'](conv, 'r'))) {
				return $m['repr'](w_obj);
			}
			else if ($p['bool']($m['op_eq'](conv, 's'))) {
				return $m['str'](w_obj);
			}
			else {
				throw ($m['ValueError']('invalid conversion'));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_obj'],['conversion']]);
		$cls_definition['_convert'] = $method;
		$method = $pyjs__bind_method2('_render_field', function(start, end, recursive, level) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				recursive = arguments[3];
				level = arguments[4];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr198,$add110,conversion,spec,$sub31,$sub32,$attr188,$attr189,$add109,$attr187,w_obj,w_entry,startm1,name,w_rendered,spec_start;
			var $tupleassign9 = $p['__ass_unpack'](self['_parse_field'](start, end), 3, null);
			name = $tupleassign9[0];
			conversion = $tupleassign9[1];
			spec_start = $tupleassign9[2];
			spec = $p['__getslice'](self['template'], spec_start, end);
			if ($p['bool'](!$m['op_is'](self['parser_list_w'], null))) {
				if ($p['bool']($m['op_eq'](level, $constant_int_1))) {
					startm1 = $m['__op_sub']($sub31=start,$sub32=$constant_int_1);
					if (!( ((($m['cmp'](startm1, self['last_end']))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					w_entry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], startm1), name, spec, conversion]));
					self['parser_list_w']['append'](w_entry);
					self['last_end'] = $m['__op_add']($add109=end,$add110=$constant_int_1);
				}
				return self['empty'];
			}
			w_obj = self['_get_argument'](name);
			if ($p['bool'](!$m['op_is'](conversion, null))) {
				w_obj = self['_convert'](w_obj, conversion);
			}
			if ($p['bool'](recursive)) {
				spec = self['_build_string'](spec_start, end, level);
			}
			w_rendered = self['space']['format'](w_obj, spec);
			return $m['str'](w_rendered);
		}
	, 1, [null,null,['self'],['start'],['end'],['recursive'],['level']]);
		$cls_definition['_render_field'] = $method;
		$method = $pyjs__bind_method2('formatter_parser', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '99d4cfa142843b6f836a504118f1e987') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var w_lastentry,$attr215,$attr211,$attr210,$attr199,$attr216,$attr212,$attr214,$attr209,$attr208,$attr213,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202;
			self['parser_list_w'] = $p['list']([]);
			self['last_end'] = $constant_int_0;
			self['_build_string']($constant_int_0, $m['len'](self['template']), $constant_int_2);
			if ($p['bool'](($m['cmp'](self['last_end'], $m['len'](self['template'])) == -1))) {
				w_lastentry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], null), self['space']['w_None'], self['space']['w_None'], self['space']['w_None']]));
				self['parser_list_w']['append'](w_lastentry);
			}
			return self['space']['iter'](self['space']['newlist'](self['parser_list_w']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_parser'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('TemplateFormatter', $bases, $cls_definition);
	})();
	$m['NumberSpec'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7197252c31367ee5a539f268fa19f925';
		var $bases = new Array($m['object']);
		return $pyjs_type('NumberSpec', $bases, $cls_definition);
	})();
	$m['BaseFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2ef02f2050d704b3973cfbcfe119ce80';
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2ef02f2050d704b3973cfbcfe119ce80') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_num) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2ef02f2050d704b3973cfbcfe119ce80') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_num) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '2ef02f2050d704b3973cfbcfe119ce80') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('BaseFormatter', $bases, $cls_definition);
	})();
	$m['INT_KIND'] = $constant_int_1;
	$m['LONG_KIND'] = $constant_int_2;
	$m['NO_LOCALE'] = $constant_int_1;
	$m['DEFAULT_LOCALE'] = $constant_int_2;
	$m['CURRENT_LOCALE'] = $constant_int_3;
	$m['Formatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5fbc80712012f3edbe9afeb1dd63ab10';
		$cls_definition['_grouped_digits'] = null;
		$method = $pyjs__bind_method2('__init__', function(space, spec) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				space = arguments[1];
				spec = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			self['space'] = space;
			self['empty'] = '';
			self['spec'] = spec;
			return null;
		}
	, 1, [null,null,['self'],['space'],['spec']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_is_alignment', function(c) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				c = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $or24,$or25,$or22,$or23;
			return ($p['bool']($or22=$m['op_eq'](c, '<'))?$or22:($p['bool']($or23=$m['op_eq'](c, '>'))?$or23:($p['bool']($or24=$m['op_eq'](c, '='))?$or24:$m['op_eq'](c, '^'))));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_alignment'] = $method;
		$method = $pyjs__bind_method2('_is_sign', function(c) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				c = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $or27,$or26,$or28;
			return ($p['bool']($or26=$m['op_eq'](c, ' '))?$or26:($p['bool']($or27=$m['op_eq'](c, '+'))?$or27:$m['op_eq'](c, '-')));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_sign'] = $method;
		$method = $pyjs__bind_method2('_parse_spec', function(default_type, default_align) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				default_type = arguments[1];
				default_align = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $and46,$add129,$add118,$add119,$add116,$add117,$add114,$add115,$add112,$add113,$add111,$attr221,$attr224,tp,$sub40,$sub41,$sub42,$sub43,$add125,$sub45,$sub46,$add122,$add123,$add121,$or32,$and45,$and44,$add120,$and41,$attr218,$and43,$and42,got_align,$or30,the_type,$or29,$attr222,spec,$attr226,$or36,$add127,$add126,$sub33,$add124,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,$add128,$and38,$and39,$and34,$and35,$and36,$and37,$and32,$and33,$attr225,$or31,$attr223,start_i,i,$add130,$or35,$or33,presentation_type,length,$attr219,$or37,$and40,$attr220,$or34,$sub44,$attr217;
			self['_fill_char'] = self['_lit']('\x00')['__getitem__']($constant_int_0);
			self['_align'] = default_align;
			self['_alternate'] = false;
			self['_sign'] = '\x00';
			self['_thousands_sep'] = false;
			self['_precision'] = (typeof ($usub18=$constant_int_1)=='number'?
				-$usub18:
				$m['op_usub']($usub18));
			the_type = default_type;
			spec = self['spec'];
			if ($p['bool'](!$p['bool'](spec))) {
				return true;
			}
			length = $m['len'](spec);
			i = $constant_int_0;
			got_align = true;
			if ($p['bool'](($p['bool']($and32=((($m['cmp']($m['__op_sub']($sub33=length,$sub34=i), $constant_int_2))|1) == 1))?self['_is_alignment'](spec['__getitem__']($m['__op_add']($add111=i,$add112=$constant_int_1))):$and32))) {
				self['_align'] = spec['__getitem__']($m['__op_add']($add113=i,$add114=$constant_int_1));
				self['_fill_char'] = spec['__getitem__'](i);
				i = $m['__op_add']($add115=i,$add116=$constant_int_2);
			}
			else if ($p['bool'](($p['bool']($and34=((($m['cmp']($m['__op_sub']($sub35=length,$sub36=i), $constant_int_1))|1) == 1))?self['_is_alignment'](spec['__getitem__'](i)):$and34))) {
				self['_align'] = spec['__getitem__'](i);
				i = $m['__op_add']($add117=i,$add118=$constant_int_1);
			}
			else {
				got_align = false;
			}
			if ($p['bool'](($p['bool']($and36=((($m['cmp']($m['__op_sub']($sub37=length,$sub38=i), $constant_int_1))|1) == 1))?self['_is_sign'](spec['__getitem__'](i)):$and36))) {
				self['_sign'] = spec['__getitem__'](i);
				i = $m['__op_add']($add119=i,$add120=$constant_int_1);
			}
			if ($p['bool'](($p['bool']($and38=((($m['cmp']($m['__op_sub']($sub39=length,$sub40=i), $constant_int_1))|1) == 1))?$m['op_eq'](spec['__getitem__'](i), '#'):$and38))) {
				self['_alternate'] = true;
				i = $m['__op_add']($add121=i,$add122=$constant_int_1);
			}
			if ($p['bool'](($p['bool']($and40=$m['op_eq'](self['_fill_char'], '\x00'))?($p['bool']($and41=((($m['cmp']($m['__op_sub']($sub41=length,$sub42=i), $constant_int_1))|1) == 1))?$m['op_eq'](spec['__getitem__'](i), '0'):$and41):$and40))) {
				self['_fill_char'] = self['_lit']('0')['__getitem__']($constant_int_0);
				if ($p['bool'](!$p['bool'](got_align))) {
					self['_align'] = '=';
				}
				i = $m['__op_add']($add123=i,$add124=$constant_int_1);
			}
			start_i = i;
			var $tupleassign10 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
			self['_width'] = $tupleassign10[0];
			i = $tupleassign10[1];
			if ($p['bool'](($p['bool']($and43=!$m['op_eq'](length, i))?$m['op_eq'](spec['__getitem__'](i), ','):$and43))) {
				self['_thousands_sep'] = true;
				i = $m['__op_add']($add125=i,$add126=$constant_int_1);
			}
			if ($p['bool'](($p['bool']($and45=!$m['op_eq'](length, i))?$m['op_eq'](spec['__getitem__'](i), '.'):$and45))) {
				i = $m['__op_add']($add127=i,$add128=$constant_int_1);
				var $tupleassign11 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
				self['_precision'] = $tupleassign11[0];
				i = $tupleassign11[1];
				if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub19=$constant_int_1)=='number'?
					-$usub19:
					$m['op_usub']($usub19))))) {
					throw ($m['ValueError']('no precision given'));
				}
			}
			if ($p['bool'](($m['cmp']($m['__op_sub']($sub43=length,$sub44=i), $constant_int_1) == 1))) {
				throw ($m['ValueError']('invalid format spec'));
			}
			if ($p['bool']($m['op_eq']($m['__op_sub']($sub45=length,$sub46=i), $constant_int_1))) {
				presentation_type = spec['__getitem__'](i);
				the_type = presentation_type;
				i = $m['__op_add']($add129=i,$add130=$constant_int_1);
			}
			self['_type'] = the_type;
			if ($p['bool'](self['_thousands_sep'])) {
				tp = self['_type'];
				if ($p['bool'](($p['bool']($or29=$m['op_eq'](tp, 'd'))?$or29:($p['bool']($or30=$m['op_eq'](tp, 'e'))?$or30:($p['bool']($or31=$m['op_eq'](tp, 'f'))?$or31:($p['bool']($or32=$m['op_eq'](tp, 'g'))?$or32:($p['bool']($or33=$m['op_eq'](tp, 'E'))?$or33:($p['bool']($or34=$m['op_eq'](tp, 'G'))?$or34:($p['bool']($or35=$m['op_eq'](tp, '%'))?$or35:($p['bool']($or36=$m['op_eq'](tp, 'F'))?$or36:$m['op_eq'](tp, '\x00'))))))))))) {
				}
				else {
					throw ($m['ValueError']("invalid type with ','"));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['default_type'],['default_align']]);
		$cls_definition['_parse_spec'] = $method;
		$method = $pyjs__bind_method2('_calc_padding', function(string, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				string = arguments[1];
				length = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr234,right,$attr230,$attr231,$attr232,$attr233,$sub48,$sub49,$sub52,total,$sub47,$and48,$attr227,$sub54,$sub53,$sub51,$sub50,$attr229,$attr228,$div6,$div5,align,$or39,$or38,$and47,left;
			if ($p['bool'](($p['bool']($and47=!$m['op_eq'](self['_width'], (typeof ($usub20=$constant_int_1)=='number'?
				-$usub20:
				$m['op_usub']($usub20))))?($m['cmp'](length, self['_width']) == -1):$and47))) {
				total = self['_width'];
			}
			else {
				total = length;
			}
			align = self['_align'];
			if ($p['bool']($m['op_eq'](align, '>'))) {
				left = $m['__op_sub']($sub47=total,$sub48=length);
			}
			else if ($p['bool']($m['op_eq'](align, '^'))) {
				left = (typeof ($div5=$m['__op_sub']($sub49=total,$sub50=length))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$m['op_div']($div5,$div6));
			}
			else if ($p['bool'](($p['bool']($or38=$m['op_eq'](align, '<'))?$or38:$m['op_eq'](align, '=')))) {
				left = $constant_int_0;
			}
			else {
				throw ($m['AssertionError']("shouldn't be here"));
			}
			right = $m['__op_sub']($sub53=$m['__op_sub']($sub51=total,$sub52=length),$sub54=left);
			self['_left_pad'] = left;
			self['_right_pad'] = right;
			return total;
		}
	, 1, [null,null,['self'],['string'],['length']]);
		$cls_definition['_calc_padding'] = $method;
		$method = $pyjs__bind_method2('_lit', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				s = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return s;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_lit'] = $method;
		$method = $pyjs__bind_method2('_pad', function(string) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				string = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr241,$attr235,$attr236,$attr237,$attr240,builder,$attr238,$attr239,$attr242;
			builder = self['_builder']();
			builder['append_multiple_char'](self['_fill_char'], self['_left_pad']);
			builder['append'](string);
			builder['append_multiple_char'](self['_fill_char'], self['_right_pad']);
			return builder['build']();
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['_pad'] = $method;
		$method = $pyjs__bind_method2('_builder', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
			} else {
				var self = arguments[0];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}

			return $m['StringBuilder']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['_builder'] = $method;
		$method = $pyjs__bind_method2('_unknown_presentation', function(tp) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				tp = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr243,$attr244,w_msg,$mod4,$mod3,msg;
			msg = "unknown presentation for %s: '%s'";
			w_msg = (typeof ($mod3=msg)==typeof ($mod4=$p['tuple']([tp, self['_type']])) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$m['op_mod']($mod3,$mod4));
			throw ($m['ValueError'](w_msg));
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_unknown_presentation'] = $method;
		$method = $pyjs__bind_method2('format_string', function(string) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				string = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr245,$attr247,$attr246,$attr249,$attr248,$attr255,$attr252,$attr253,$attr250,$attr251,$attr256,length,$and50,precision,msg,$and49,$attr254;
			if ($p['bool'](self['_parse_spec']('s', '<'))) {
				return string;
			}
			if ($p['bool'](!$m['op_eq'](self['_type'], 's'))) {
				self['_unknown_presentation']('string');
			}
			if ($p['bool'](!$m['op_eq'](self['_sign'], '\x00'))) {
				msg = 'Sign not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool'](self['_alternate'])) {
				msg = 'Alternate form not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool']($m['op_eq'](self['_align'], '='))) {
				msg = "'=' alignment not allowed in string format specifier";
				throw ($m['ValueError'](msg));
			}
			length = $m['len'](string);
			precision = self['_precision'];
			if ($p['bool'](($p['bool']($and49=!$m['op_eq'](precision, (typeof ($usub21=$constant_int_1)=='number'?
				-$usub21:
				$m['op_usub']($usub21))))?((($m['cmp'](length, precision))|1) == 1):$and49))) {
				if (!( ((($m['cmp'](precision, $constant_int_0))|1) == 1) )) {
				   throw $m['AssertionError']();
				 }
				length = precision;
				string = $p['__getslice'](string, 0, precision);
			}
			if ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))) {
				self['_fill_char'] = self['_lit'](' ')['__getitem__']($constant_int_0);
			}
			self['_calc_padding'](string, length);
			return self['_pad'](string);
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['format_string'] = $method;
		$method = $pyjs__bind_method2('_get_locale', function(tp) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				tp = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr258,$attr257,dec,thousands,grouping;
			if ($p['bool']($m['op_eq'](tp, 'n'))) {
				var $tupleassign12 = $p['__ass_unpack']((typeof numeric_formatting == "undefined"?$m['numeric_formatting']:numeric_formatting)(), 3, null);
				dec = $tupleassign12[0];
				thousands = $tupleassign12[1];
				grouping = $tupleassign12[2];
			}
			else if ($p['bool'](self['_thousands_sep'])) {
				dec = '.';
				thousands = ',';
				grouping = '\x03\x00';
			}
			else {
				dec = '.';
				thousands = '';
				grouping = '\xae';
			}
			self['_loc_dec'] = dec;
			self['_loc_thousands'] = thousands;
			self['_loc_grouping'] = grouping;
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_get_locale'] = $method;
		$method = $pyjs__bind_method2('_calc_num_width', function(n_prefix, sign_char, to_number, n_number, n_remainder, has_dec, digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']+1);
			} else {
				var self = arguments[0];
				n_prefix = arguments[1];
				sign_char = arguments[2];
				to_number = arguments[3];
				n_number = arguments[4];
				n_remainder = arguments[5];
				has_dec = arguments[6];
				digits = arguments[7];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var extra_length,spec,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,n_grouped_digits,$attr278,$attr279,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,$attr285,$attr284,$attr287,$attr281,$attr280,$attr283,$attr282,$attr289,$attr288,$attr269,$attr268,$attr300,$attr263,$attr262,$attr261,$attr260,$attr267,$attr266,$attr265,$attr264,$and52,$and51,$floordiv2,$floordiv1,$attr259,$sub64,$sub62,$sub63,$sub60,$sub61,$add145,$add144,$add147,$add146,$add141,$add140,$add143,$add142,$add149,$add148,n_padding,sign,align,$add152,$add150,$add151,$add134,$add135,$add136,$add137,$add131,$add132,$add133,$add138,$add139,$sub57,$sub56,$sub55,$sub59,$sub58,$attr286;
			spec = $m['NumberSpec']();
			spec['n_digits'] = $m['__op_sub']($sub57=$m['__op_sub']($sub55=n_number,$sub56=n_remainder),$sub58=has_dec);
			spec['n_prefix'] = n_prefix;
			spec['n_lpadding'] = $constant_int_0;
			spec['n_decimal'] = $p['int'](has_dec);
			spec['n_remainder'] = n_remainder;
			spec['n_spadding'] = $constant_int_0;
			spec['n_rpadding'] = $constant_int_0;
			spec['n_min_width'] = $constant_int_0;
			spec['n_total'] = $constant_int_0;
			spec['sign'] = '\x00';
			spec['n_sign'] = $constant_int_0;
			sign = self['_sign'];
			if ($p['bool']($m['op_eq'](sign, '+'))) {
				spec['n_sign'] = $constant_int_1;
				spec['sign'] = ($p['bool']($m['op_eq'](sign_char, '-'))? ('-') : ('+'));
			}
			else if ($p['bool']($m['op_eq'](sign, ' '))) {
				spec['n_sign'] = $constant_int_1;
				spec['sign'] = ($p['bool']($m['op_eq'](sign_char, '-'))? ('-') : (' '));
			}
			else if ($p['bool']($m['op_eq'](sign_char, '-'))) {
				spec['n_sign'] = $constant_int_1;
				spec['sign'] = '-';
			}
			extra_length = $m['__op_add']($add135=$m['__op_add']($add133=$m['__op_add']($add131=spec['n_sign'],$add132=spec['n_prefix']),$add134=spec['n_decimal']),$add136=spec['n_remainder']);
			if ($p['bool'](($p['bool']($and51=$m['op_eq'](self['_fill_char'], '0'))?$m['op_eq'](self['_align'], '='):$and51))) {
				spec['n_min_width'] = $m['__op_sub']($sub59=self['_width'],$sub60=extra_length);
			}
			if ($p['bool'](self['_loc_thousands'])) {
				self['_group_digits'](spec, $p['__getslice'](digits, to_number, null));
				n_grouped_digits = $m['len'](self['_grouped_digits']);
			}
			else {
				n_grouped_digits = spec['n_digits'];
			}
			n_padding = $m['__op_sub']($sub61=self['_width'],$sub62=$m['__op_add']($add137=extra_length,$add138=n_grouped_digits));
			if ($p['bool'](($m['cmp'](n_padding, $constant_int_0) == 1))) {
				align = self['_align'];
				if ($p['bool']($m['op_eq'](align, '<'))) {
					spec['n_rpadding'] = n_padding;
				}
				else if ($p['bool']($m['op_eq'](align, '>'))) {
					spec['n_lpadding'] = n_padding;
				}
				else if ($p['bool']($m['op_eq'](align, '^'))) {
					spec['n_lpadding'] = (typeof ($floordiv1=n_padding)==typeof ($floordiv2=$constant_int_2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$m['op_floordiv']($floordiv1,$floordiv2));
					spec['n_rpadding'] = $m['__op_sub']($sub63=n_padding,$sub64=spec['n_lpadding']);
				}
				else if ($p['bool']($m['op_eq'](align, '='))) {
					spec['n_spadding'] = n_padding;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
			}
			spec['n_total'] = $m['__op_add']($add151=$m['__op_add']($add149=$m['__op_add']($add147=$m['__op_add']($add145=$m['__op_add']($add143=$m['__op_add']($add141=$m['__op_add']($add139=spec['n_lpadding'],$add140=spec['n_sign']),$add142=spec['n_prefix']),$add144=spec['n_spadding']),$add146=n_grouped_digits),$add148=spec['n_decimal']),$add150=spec['n_remainder']),$add152=spec['n_rpadding']);
			return spec;
		}
	, 1, [null,null,['self'],['n_prefix'],['sign_char'],['to_number'],['n_number'],['n_remainder'],['has_dec'],['digits']]);
		$cls_definition['_calc_num_width'] = $method;
		$method = $pyjs__bind_method2('_fill_digits', function(buf, digits, d_state, n_chars, n_zeros, thousands_sep) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
			} else {
				var self = arguments[0];
				buf = arguments[1];
				digits = arguments[2];
				d_state = arguments[3];
				n_chars = arguments[4];
				n_zeros = arguments[5];
				thousands_sep = arguments[6];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $iter32_idx,$iter32_nextval,$iter31_nextval,$iter32_iter,$iter30_array,$sub68,$sub69,$sub66,$sub67,$sub65,$iter30_nextval,$iter31_idx,$iter32_type,$iter32_array,$iter30_type,$iter31_array,$iter30_idx,$sub70,c,$iter30_iter,i,$iter31_iter,$iter31_type;
			if ($p['bool'](thousands_sep)) {
				$iter30_iter = thousands_sep;
				$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
				while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
					c = $iter30_nextval['$nextval'];
					buf['append'](c);
				}
			}
			$iter31_iter = $m['range']($m['__op_sub']($sub65=d_state,$sub66=$constant_int_1), $m['__op_sub']($sub69=$m['__op_sub']($sub67=d_state,$sub68=n_chars),$sub70=$constant_int_1), (typeof ($usub22=$constant_int_1)=='number'?
				-$usub22:
				$m['op_usub']($usub22)));
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
				i = $iter31_nextval['$nextval'];
				buf['append'](digits['__getitem__'](i));
			}
			$iter32_iter = $m['range'](n_zeros);
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
				i = $iter32_nextval['$nextval'];
				buf['append']('0');
			}
			return null;
		}
	, 1, [null,null,['self'],['buf'],['digits'],['d_state'],['n_chars'],['n_zeros'],['thousands_sep']]);
		$cls_definition['_fill_digits'] = $method;
		$method = $pyjs__bind_method2('_group_digits', function(spec, digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				spec = arguments[1];
				digits = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr312,$attr311,$attr305,done,n_ts,min_width,previous,group,$sub71,$attr310,ts,grouping_state,$add154,$sub72,$attr304,count,$attr306,$attr307,$attr301,$attr302,$attr303,$attr308,$attr309,n_chars,$sub79,n_zeros,$sub78,$sub75,$sub74,$sub77,$sub76,buf,$sub73,groupings,$and54,$and53,$add153,need_separator,$sub80,final_grouping,grouping,left;
			buf = $p['list']([]);
			grouping = self['_loc_grouping'];
			min_width = spec['n_min_width'];
			grouping_state = $constant_int_0;
			count = $constant_int_0;
			left = spec['n_digits'];
			n_ts = $m['len'](self['_loc_thousands']);
			need_separator = false;
			done = false;
			groupings = $m['len'](grouping);
			previous = $constant_int_0;
			while ($p['bool'](true)) {
				group = $m['ord'](grouping['__getitem__'](grouping_state));
				if ($p['bool'](($m['cmp'](group, $constant_int_0) == 1))) {
					if ($p['bool']($m['op_eq'](group, $constant_int_256))) {
						break;
					}
					grouping_state = $m['__op_add']($add153=grouping_state,$add154=$constant_int_1);
					previous = group;
				}
				else {
					group = previous;
				}
				final_grouping = $m['min'](group, $m['max'](left, $m['max'](min_width, $constant_int_1)));
				n_zeros = $m['max']($constant_int_0, $m['__op_sub']($sub71=final_grouping,$sub72=left));
				n_chars = $m['max']($constant_int_0, $m['min'](left, final_grouping));
				ts = ($p['bool'](need_separator)? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
				need_separator = true;
				left = $m['__op_sub']($sub73=left,$sub74=n_chars);
				min_width = $m['__op_sub']($sub75=min_width,$sub76=final_grouping);
				if ($p['bool'](($p['bool']($and53=($m['cmp'](left, $constant_int_0) < 1))?($m['cmp'](min_width, $constant_int_0) < 1):$and53))) {
					done = true;
					break;
				}
				min_width = $m['__op_sub']($sub77=min_width,$sub78=n_ts);
			}
			if ($p['bool'](!$p['bool'](done))) {
				group = $m['max']($m['max'](left, min_width), $constant_int_1);
				n_zeros = $m['max']($constant_int_0, $m['__op_sub']($sub79=group,$sub80=left));
				n_chars = $m['max']($constant_int_0, $m['min'](left, group));
				ts = ($p['bool'](need_separator)? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
			}
			buf['reverse']();
			self['_grouped_digits'] = self['empty']['join'](buf);
			return null;
		}
	, 1, [null,null,['self'],['spec'],['digits']]);
		$cls_definition['_group_digits'] = $method;
		$method = $pyjs__bind_method2('_upcase_string', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				s = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $iter33_iter,$iter33_nextval,$iter33_type,index,c,$iter33_idx,$sub81,$sub82,buf,$iter33_array;
			buf = $p['list']([]);
			$iter33_iter = s;
			$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
			while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
				c = $iter33_nextval['$nextval'];
				index = $m['ord'](c);
				if ($p['bool']((($m['cmp']($m['ord']('a'), ($compare3 = index)) < 1)&&($m['cmp']($compare3, ($compare4 = $m['ord']('z'))) < 1)))) {
					c = $m['chr']($m['__op_sub']($sub81=index,$sub82=$constant_int_32));
				}
				buf['append'](c);
			}
			return self['empty']['join'](buf);
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_upcase_string'] = $method;
		$method = $pyjs__bind_method2('_fill_number', function(spec, num, to_digits, to_prefix, fill_char, to_remainder, upper, grouped_digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 7 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 9, arguments['length']+1);
			} else {
				var self = arguments[0];
				spec = arguments[1];
				num = arguments[2];
				to_digits = arguments[3];
				to_prefix = arguments[4];
				fill_char = arguments[5];
				to_remainder = arguments[6];
				upper = arguments[7];
				grouped_digits = arguments[8];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 8 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 9, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			if (typeof grouped_digits == 'undefined') grouped_digits=arguments['callee']['__args__'][10][1];
			var $attr317,$attr315,$attr314,$attr313,$attr316,$attr319,sign,$add157,out,$attr327,pref,$attr339,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr324,$attr325,$attr343,$attr340,$attr341,$attr342,$attr338,stop,$attr318,$attr337,$attr344,digits,$add156,$add155,$attr335,$attr334,$add158,$attr336,$attr331,$attr330,$attr333,$attr332;
			out = self['_builder']();
			if ($p['bool'](spec['n_lpadding'])) {
				out['append_multiple_char'](fill_char['__getitem__']($constant_int_0), spec['n_lpadding']);
			}
			if ($p['bool'](spec['n_sign'])) {
				sign = spec['sign'];
				out['append'](sign);
			}
			if ($p['bool'](spec['n_prefix'])) {
				pref = $p['__getslice'](num, to_prefix, $m['__op_add']($add155=to_prefix,$add156=spec['n_prefix']));
				if ($p['bool'](upper)) {
					pref = self['_upcase_string'](pref);
				}
				out['append'](pref);
			}
			if ($p['bool'](spec['n_spadding'])) {
				out['append_multiple_char'](fill_char['__getitem__']($constant_int_0), spec['n_spadding']);
			}
			if ($p['bool'](!$m['op_eq'](spec['n_digits'], $constant_int_0))) {
				if ($p['bool'](self['_loc_thousands'])) {
					if ($p['bool'](!$m['op_is'](grouped_digits, null))) {
						digits = grouped_digits;
					}
					else {
						digits = self['_grouped_digits'];
						if (!( !$m['op_is'](digits, null) )) {
						   throw $m['AssertionError']();
						 }
					}
				}
				else {
					stop = $m['__op_add']($add157=to_digits,$add158=spec['n_digits']);
					if (!( ((($m['cmp'](stop, $constant_int_0))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					digits = $p['__getslice'](num, to_digits, stop);
				}
				if ($p['bool'](upper)) {
					digits = self['_upcase_string'](digits);
				}
				out['append'](digits);
			}
			if ($p['bool'](spec['n_decimal'])) {
				out['append']('.');
			}
			if ($p['bool'](spec['n_remainder'])) {
				out['append']($p['__getslice'](num, to_remainder, null));
			}
			if ($p['bool'](spec['n_rpadding'])) {
				out['append_multiple_char'](fill_char['__getitem__']($constant_int_0), spec['n_rpadding']);
			}
			return out['build']();
		}
	, 1, [null,null,['self'],['spec'],['num'],['to_digits'],['to_prefix'],['fill_char'],['to_remainder'],['upper'],['grouped_digits', null]]);
		$cls_definition['_fill_number'] = $method;
		$method = $pyjs__bind_method2('_format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var upper,$attr358,n_remainder,$attr353,$attr352,$attr351,$attr350,$attr357,$attr356,$attr355,$attr354,$sub84,n_digits,to_numeric,$sub83,fill,sign_char,tp,msg,$or43,$or40,to_prefix,spec,$attr348,$attr349,$add162,$add161,$add160,$attr345,$attr346,$attr347,$or42,base,$or41,value,to_remainder,n_prefix,$add159,skip_leading,result;
			if ($p['bool'](!$m['op_eq'](self['_precision'], (typeof ($usub23=$constant_int_1)=='number'?
				-$usub23:
				$m['op_usub']($usub23))))) {
				msg = 'precision not allowed in integer type';
				throw ($m['ValueError'](msg));
			}
			sign_char = '\x00';
			tp = self['_type'];
			if ($p['bool']($m['op_eq'](tp, 'c'))) {
				if ($p['bool'](!$m['op_eq'](self['_sign'], '\x00'))) {
					msg = "sign not allowed with 'c' presentation type";
					throw ($m['ValueError'](msg));
				}
				value = w_num;
				result = $m['chr'](value);
				n_digits = $constant_int_1;
				n_remainder = $constant_int_1;
				to_remainder = $constant_int_0;
				n_prefix = $constant_int_0;
				to_prefix = $constant_int_0;
				to_numeric = $constant_int_0;
			}
			else {
				if ($p['bool']($m['op_eq'](tp, 'b'))) {
					base = $constant_int_2;
					skip_leading = $constant_int_2;
				}
				else if ($p['bool']($m['op_eq'](tp, 'o'))) {
					base = $constant_int_8;
					skip_leading = $constant_int_2;
				}
				else if ($p['bool'](($p['bool']($or40=$m['op_eq'](tp, 'x'))?$or40:$m['op_eq'](tp, 'X')))) {
					base = $constant_int_16;
					skip_leading = $constant_int_2;
				}
				else if ($p['bool'](($p['bool']($or42=$m['op_eq'](tp, 'n'))?$or42:$m['op_eq'](tp, 'd')))) {
					base = $constant_int_10;
					skip_leading = $constant_int_0;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
				if ($p['bool']($m['op_eq'](kind, $m['INT_KIND']))) {
					result = self['_int_to_base'](base, w_num);
				}
				else {
					result = self['_int_to_base'](base, w_num);
				}
				n_prefix = ($p['bool'](self['_alternate'])? (skip_leading) : ($constant_int_0));
				to_prefix = $constant_int_0;
				if ($p['bool']($m['op_eq'](result['__getitem__']($constant_int_0), '-'))) {
					sign_char = '-';
					skip_leading = $m['__op_add']($add159=skip_leading,$add160=$constant_int_1);
					to_prefix = $m['__op_add']($add161=to_prefix,$add162=$constant_int_1);
				}
				n_digits = $m['__op_sub']($sub83=$m['len'](result),$sub84=skip_leading);
				n_remainder = $constant_int_0;
				to_remainder = $constant_int_0;
				to_numeric = skip_leading;
			}
			self['_get_locale'](tp);
			spec = self['_calc_num_width'](n_prefix, sign_char, to_numeric, n_digits, n_remainder, false, result);
			fill = ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))? (self['_lit'](' ')) : (self['_fill_char']));
			upper = $m['op_eq'](self['_type'], 'X');
			return self['_fill_number'](spec, result, to_numeric, to_prefix, fill, to_remainder, upper);
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['_format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_int_to_base', function(base, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				base = arguments[1];
				value = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $sub95,$add170,$mod6,$sub94,$add169,$mod5,$sub85,$sub86,$sub87,$sub104,$sub105,$sub106,$sub107,$sub108,$sub88,$sub89,negative,$sub99,$sub101,digit,$add168,$add163,$add167,$add166,$add165,$add164,$sub93,$sub92,$sub91,$sub97,$sub96,$mul9,$mul8,$mul7,$mul6,$mul5,$sub98,buf,mod,$sub100,$mul10,i,$sub102,$floordiv6,$floordiv5,$floordiv4,$floordiv3,$sub90,div,$sub103;
			if ($p['bool']($m['op_eq'](base, $constant_int_10))) {
				return $m['str'](value);
			}
			negative = ($m['cmp'](value, $constant_int_0) == -1);
			value = $p['abs'](value);
			buf = (typeof ($mul7=$p['list'](['\x00']))==typeof ($mul8=$m['__op_add']($add163=(typeof ($mul5=$constant_int_8)==typeof ($mul6=$constant_int_8) && typeof $mul5=='number'?
				$mul5*$mul6:
				$m['op_mul']($mul5,$mul6)),$add164=$constant_int_6)) && typeof $mul7=='number'?
				$mul7*$mul8:
				$m['op_mul']($mul7,$mul8));
			i = $m['__op_sub']($sub85=$m['len'](buf),$sub86=$constant_int_1);
			while ($p['bool'](true)) {
				div = (typeof ($floordiv3=value)==typeof ($floordiv4=base) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math['floor']($floordiv3/$floordiv4):
					$m['op_floordiv']($floordiv3,$floordiv4));
				mod = $m['__op_sub']($sub87=value,$sub88=(typeof ($mul9=div)==typeof ($mul10=base) && typeof $mul9=='number'?
					$mul9*$mul10:
					$m['op_mul']($mul9,$mul10)));
				digit = $p['abs'](mod);
				digit = $m['__op_add']($add165=digit,$add166=($p['bool'](($m['cmp'](digit, $constant_int_10) == -1))? ($m['ord']('0')) : ($m['__op_sub']($sub89=$m['ord']('a'),$sub90=$constant_int_10))));
				buf['__setitem__'](i, $m['chr'](digit));
				value = div;
				i = $m['__op_sub']($sub91=i,$sub92=$constant_int_1);
				if ($p['bool'](!$p['bool'](value))) {
					break;
				}
			}
			if ($p['bool']($m['op_eq'](base, $constant_int_2))) {
				buf['__setitem__'](i, 'b');
				buf['__setitem__']($m['__op_sub']($sub93=i,$sub94=$constant_int_1), '0');
			}
			else if ($p['bool']($m['op_eq'](base, $constant_int_8))) {
				buf['__setitem__'](i, 'o');
				buf['__setitem__']($m['__op_sub']($sub95=i,$sub96=$constant_int_1), '0');
			}
			else if ($p['bool']($m['op_eq'](base, $constant_int_16))) {
				buf['__setitem__'](i, 'x');
				buf['__setitem__']($m['__op_sub']($sub97=i,$sub98=$constant_int_1), '0');
			}
			else {
				buf['__setitem__'](i, '#');
				buf['__setitem__']($m['__op_sub']($sub99=i,$sub100=$constant_int_1), $m['chr']($m['__op_add']($add167=$m['ord']('0'),$add168=(typeof ($mod5=base)==typeof ($mod6=$constant_int_10) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$m['op_mod']($mod5,$mod6)))));
				if ($p['bool'](($m['cmp'](base, $constant_int_10) == 1))) {
					buf['__setitem__']($m['__op_sub']($sub101=i,$sub102=$constant_int_2), $m['chr']($m['__op_add']($add169=$m['ord']('0'),$add170=(typeof ($floordiv5=base)==typeof ($floordiv6=$constant_int_10) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math['floor']($floordiv5/$floordiv6):
						$m['op_floordiv']($floordiv5,$floordiv6)))));
					i = $m['__op_sub']($sub103=i,$sub104=$constant_int_1);
				}
			}
			i = $m['__op_sub']($sub105=i,$sub106=$constant_int_1);
			if ($p['bool'](negative)) {
				i = $m['__op_sub']($sub107=i,$sub108=$constant_int_1);
				buf['__setitem__'](i, '-');
			}
			if (!( ((($m['cmp'](i, $constant_int_0))|1) == 1) )) {
			   throw $m['AssertionError']();
			 }
			return self['empty']['join']($p['__getslice'](buf, i, null));
		}
	, 1, [null,null,['self'],['base'],['value']]);
		$cls_definition['_int_to_base'] = $method;
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr359,w_float,$or55,$or56,$or57,tp,$or54,$or48,$or49,$attr360,$or51,$or50,$or53,$or52,$or46,$or47,$or44,$or45;
			if ($p['bool'](self['_parse_spec']('d', '>'))) {
				return self['space']['str'](w_num);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or44=$m['op_eq'](tp, 'b'))?$or44:($p['bool']($or45=$m['op_eq'](tp, 'c'))?$or45:($p['bool']($or46=$m['op_eq'](tp, 'd'))?$or46:($p['bool']($or47=$m['op_eq'](tp, 'o'))?$or47:($p['bool']($or48=$m['op_eq'](tp, 'x'))?$or48:($p['bool']($or49=$m['op_eq'](tp, 'X'))?$or49:$m['op_eq'](tp, 'n'))))))))) {
				return self['_format_int_or_long'](w_num, kind);
			}
			else if ($p['bool'](($p['bool']($or51=$m['op_eq'](tp, 'e'))?$or51:($p['bool']($or52=$m['op_eq'](tp, 'E'))?$or52:($p['bool']($or53=$m['op_eq'](tp, 'f'))?$or53:($p['bool']($or54=$m['op_eq'](tp, 'F'))?$or54:($p['bool']($or55=$m['op_eq'](tp, 'g'))?$or55:($p['bool']($or56=$m['op_eq'](tp, 'G'))?$or56:$m['op_eq'](tp, '%'))))))))) {
				w_float = $m['float'](w_num);
				return self['_format_float'](w_float);
			}
			else {
				self['_unknown_presentation'](($p['bool']($m['op_eq'](kind, $m['INT_KIND']))? ('int') : ('long')));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_parse_number', function(s, i) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				s = arguments[1];
				i = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $add173,$and58,$add171,$and55,$add174,rest,dec_point,$and56,length,$and57,$add172;
			length = $m['len'](s);
			while ($p['bool'](($p['bool']($and55=($m['cmp'](i, length) == -1))?(($m['cmp']('0', ($compare5 = s['__getitem__'](i))) < 1)&&($m['cmp']($compare5, ($compare6 = '9')) < 1)):$and55))) {
				i = $m['__op_add']($add171=i,$add172=$constant_int_1);
			}
			rest = i;
			dec_point = ($p['bool']($and57=($m['cmp'](i, length) == -1))?$m['op_eq'](s['__getitem__'](i), '.'):$and57);
			if ($p['bool'](dec_point)) {
				rest = $m['__op_add']($add173=rest,$add174=$constant_int_1);
			}
			return $p['tuple']([dec_point, rest]);
		}
	, 1, [null,null,['self'],['s'],['i']]);
		$cls_definition['_parse_number'] = $method;
		$method = $pyjs__bind_method2('_format_float', function(w_float) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_float = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr371,$attr370,$attr372,n_remainder,$add175,$add176,sign,n_digits,result,$sub109,fill,add_pct,to_number,tp,default_precision,msg,have_dec_point,spec,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr361,$sub112,$sub111,$sub110,digits,$mul12,$mul11,value,to_remainder,flags;
			flags = $constant_int_0;
			default_precision = $constant_int_6;
			if ($p['bool'](self['_alternate'])) {
				msg = 'alternate form not allowed in float formats';
				throw ($m['ValueError'](msg));
			}
			tp = self['_type'];
			self['_get_locale'](tp);
			if ($p['bool']($m['op_eq'](tp, '\x00'))) {
				tp = 'g';
				default_precision = $constant_int_12;
				flags = $m['op_bitor2'](flags, (typeof DTSF_ADD_DOT_0 == "undefined"?$m['DTSF_ADD_DOT_0']:DTSF_ADD_DOT_0));
			}
			else if ($p['bool']($m['op_eq'](tp, 'n'))) {
				tp = 'g';
			}
			value = $m['float'](w_float);
			if ($p['bool']($m['op_eq'](tp, '%'))) {
				tp = 'f';
				value = (typeof ($mul11=value)==typeof ($mul12=$constant_int_100) && typeof $mul11=='number'?
					$mul11*$mul12:
					$m['op_mul']($mul11,$mul12));
				add_pct = true;
			}
			else {
				add_pct = false;
			}
			if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub24=$constant_int_1)=='number'?
				-$usub24:
				$m['op_usub']($usub24))))) {
				self['_precision'] = default_precision;
			}
			result = (typeof formatd == "undefined"?$m['formatd']:formatd)(value, tp, self['_precision'], flags);
			if ($p['bool'](add_pct)) {
				result = $m['__op_add']($add175=result,$add176='%');
			}
			n_digits = $m['len'](result);
			if ($p['bool']($m['op_eq'](result['__getitem__']($constant_int_0), '-'))) {
				sign = '-';
				to_number = $constant_int_1;
				n_digits = $m['__op_sub']($sub109=n_digits,$sub110=$constant_int_1);
			}
			else {
				sign = '\x00';
				to_number = $constant_int_0;
			}
			var $tupleassign13 = $p['__ass_unpack'](self['_parse_number'](result, to_number), 2, null);
			have_dec_point = $tupleassign13[0];
			to_remainder = $tupleassign13[1];
			n_remainder = $m['__op_sub']($sub111=$m['len'](result),$sub112=to_remainder);
			digits = result;
			spec = self['_calc_num_width']($constant_int_0, sign, to_number, n_digits, n_remainder, have_dec_point, digits);
			fill = ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))? (self['_lit'](' ')) : (self['_fill_char']));
			return self['_fill_number'](spec, digits, to_number, $constant_int_0, fill, to_remainder, false);
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['_format_float'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_float) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_float = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $or60,$or61,$attr373,$or63,$or64,$attr374,$or66,$or62,tp,$or59,$or58,$or65;
			if ($p['bool'](self['_parse_spec']('\x00', '>'))) {
				return self['space']['str'](w_float);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or58=$m['op_eq'](tp, '\x00'))?$or58:($p['bool']($or59=$m['op_eq'](tp, 'e'))?$or59:($p['bool']($or60=$m['op_eq'](tp, 'E'))?$or60:($p['bool']($or61=$m['op_eq'](tp, 'f'))?$or61:($p['bool']($or62=$m['op_eq'](tp, 'F'))?$or62:($p['bool']($or63=$m['op_eq'](tp, 'g'))?$or63:($p['bool']($or64=$m['op_eq'](tp, 'G'))?$or64:($p['bool']($or65=$m['op_eq'](tp, 'n'))?$or65:$m['op_eq'](tp, '%'))))))))))) {
				return self['_format_float'](w_float);
			}
			self['_unknown_presentation']('float');
			return null;
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('_format_complex', function(w_complex) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var re_grouped_digits,$sub120,n_im_digits,add_parens,im_have_dec,tp,re_num,im_n_remainder,$add181,$add180,$add182,re_remainder_ptr,skip_re,im_spec,$add178,$add179,$attr375,$attr377,$attr376,$attr379,$attr378,$add177,$mod7,$mod8,out,im_remainder_ptr,re_spec,tmp_align,re_n_remainder,$mul14,$mul13,$and59,tmp_fill_char,im_num,tmp_width,$attr418,$attr419,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,default_precision,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr380,$attr381,$attr382,$attr383,msg,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$sub113,$sub117,$sub116,$sub115,$sub114,$sub119,$sub118,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$assign3,to_real_number,to_imag_number,re_sign,re_have_dec,$and60,fill,im_grouped_digits,n_re_digits,$attr420,im_sign;
			tp = self['_type'];
			self['_get_locale'](tp);
			default_precision = $constant_int_6;
			if ($p['bool']($m['op_eq'](self['_align'], '='))) {
				msg = "'=' alignment flag is not allowed in complex format specifier";
				throw ($m['ValueError'](msg));
			}
			if ($p['bool']($m['op_eq'](self['_fill_char'], '0'))) {
				msg = 'Zero padding is not allowed in complex format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool'](self['_alternate'])) {
				msg = 'Alternate form %s not allowed in complex format specifier';
				throw ($m['ValueError']((typeof ($mod7=msg)==typeof ($mod8=self['_alternate']) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$m['op_mod']($mod7,$mod8))));
			}
			skip_re = $constant_int_0;
			add_parens = $constant_int_0;
			if ($p['bool']($m['op_eq'](tp, '\x00'))) {
				tp = 'g';
				default_precision = $constant_int_12;
				if ($p['bool'](($p['bool']($and59=$m['op_eq'](w_complex['realval'], $constant_int_0))?$m['op_eq']((typeof copysign == "undefined"?$m['copysign']:copysign)(1.0, w_complex['realval']), 1.0):$and59))) {
					skip_re = $constant_int_1;
				}
				else {
					add_parens = $constant_int_1;
				}
			}
			if ($p['bool']($m['op_eq'](tp, 'n'))) {
				tp = 'g';
			}
			if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub25=$constant_int_1)=='number'?
				-$usub25:
				$m['op_usub']($usub25))))) {
				self['_precision'] = default_precision;
			}
			re_num = (typeof formatd == "undefined"?$m['formatd']:formatd)(w_complex['realval'], tp, self['_precision']);
			im_num = (typeof formatd == "undefined"?$m['formatd']:formatd)(w_complex['imagval'], tp, self['_precision']);
			n_re_digits = $m['len'](re_num);
			n_im_digits = $m['len'](im_num);
			to_real_number = $constant_int_0;
			to_imag_number = $constant_int_0;
			$assign3 = '';
			re_sign = $assign3;
			im_sign = $assign3;
			if ($p['bool']($m['op_eq'](re_num['__getitem__']($constant_int_0), '-'))) {
				re_sign = '-';
				to_real_number = $constant_int_1;
				n_re_digits = $m['__op_sub']($sub113=n_re_digits,$sub114=$constant_int_1);
			}
			if ($p['bool']($m['op_eq'](im_num['__getitem__']($constant_int_0), '-'))) {
				im_sign = '-';
				to_imag_number = $constant_int_1;
				n_im_digits = $m['__op_sub']($sub115=n_im_digits,$sub116=$constant_int_1);
			}
			tmp_fill_char = self['_fill_char'];
			tmp_align = self['_align'];
			tmp_width = self['_width'];
			self['_fill_char'] = '\x00';
			self['_align'] = '<';
			self['_width'] = (typeof ($usub26=$constant_int_1)=='number'?
				-$usub26:
				$m['op_usub']($usub26));
			var $tupleassign14 = $p['__ass_unpack'](self['_parse_number'](re_num, to_real_number), 2, null);
			re_have_dec = $tupleassign14[0];
			re_remainder_ptr = $tupleassign14[1];
			var $tupleassign15 = $p['__ass_unpack'](self['_parse_number'](im_num, to_imag_number), 2, null);
			im_have_dec = $tupleassign15[0];
			im_remainder_ptr = $tupleassign15[1];
			re_n_remainder = $m['__op_sub']($sub117=$m['len'](re_num),$sub118=re_remainder_ptr);
			im_n_remainder = $m['__op_sub']($sub119=$m['len'](im_num),$sub120=im_remainder_ptr);
			re_spec = self['_calc_num_width']($constant_int_0, re_sign, to_real_number, n_re_digits, re_n_remainder, re_have_dec, re_num);
			re_grouped_digits = self['_grouped_digits'];
			if ($p['bool'](!$p['bool'](skip_re))) {
				self['_sign'] = '+';
			}
			im_spec = self['_calc_num_width']($constant_int_0, im_sign, to_imag_number, n_im_digits, im_n_remainder, im_have_dec, im_num);
			im_grouped_digits = self['_grouped_digits'];
			if ($p['bool'](skip_re)) {
				re_spec['n_total'] = $constant_int_0;
			}
			self['_align'] = tmp_align;
			self['_width'] = tmp_width;
			self['_fill_char'] = tmp_fill_char;
			self['_calc_padding'](self['empty'], $m['__op_add']($add181=$m['__op_add']($add179=$m['__op_add']($add177=re_spec['n_total'],$add178=im_spec['n_total']),$add180=$constant_int_1),$add182=(typeof ($mul13=add_parens)==typeof ($mul14=$constant_int_2) && typeof $mul13=='number'?
				$mul13*$mul14:
				$m['op_mul']($mul13,$mul14))));
			out = self['_builder']();
			fill = self['_fill_char'];
			if ($p['bool']($m['op_eq'](fill, '\x00'))) {
				fill = self['_lit'](' ')['__getitem__']($constant_int_0);
			}
			out['append_multiple_char'](fill, self['_left_pad']);
			if ($p['bool'](add_parens)) {
				out['append'](self['_lit']('(')['__getitem__']($constant_int_0));
			}
			if ($p['bool'](!$p['bool'](skip_re))) {
				out['append'](self['_fill_number'](re_spec, re_num, to_real_number, $constant_int_0, fill, re_remainder_ptr, false, re_grouped_digits));
			}
			out['append'](self['_fill_number'](im_spec, im_num, to_imag_number, $constant_int_0, fill, im_remainder_ptr, false, im_grouped_digits));
			out['append'](self['_lit']('j')['__getitem__']($constant_int_0));
			if ($p['bool'](add_parens)) {
				out['append'](self['_lit'](')')['__getitem__']($constant_int_0));
			}
			out['append_multiple_char'](fill, self['_right_pad']);
			return out['build']();
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['_format_complex'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_complex) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== '5fbc80712012f3edbe9afeb1dd63ab10') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $attr421,$or73,$or72,$or71,$or67,$or68,$or69,$or70,tp,$attr422,$or74;
			if ($p['bool'](self['_parse_spec']('\x00', '>'))) {
				return self['space']['str'](w_complex);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or67=$m['op_eq'](tp, '\x00'))?$or67:($p['bool']($or68=$m['op_eq'](tp, 'e'))?$or68:($p['bool']($or69=$m['op_eq'](tp, 'E'))?$or69:($p['bool']($or70=$m['op_eq'](tp, 'f'))?$or70:($p['bool']($or71=$m['op_eq'](tp, 'F'))?$or71:($p['bool']($or72=$m['op_eq'](tp, 'g'))?$or72:($p['bool']($or73=$m['op_eq'](tp, 'G'))?$or73:$m['op_eq'](tp, 'n')))))))))) {
				return self['_format_complex'](w_complex);
			}
			self['_unknown_presentation']('complex');
			return null;
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['BaseFormatter']);
		return $pyjs_type('Formatter', $bases, $cls_definition);
	})();
	$m['StringFormatSpace'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'c6ae281a312f180b86a04084ad76eafd';
		$method = $pyjs__bind_method2('format', function(w_obj, spec) {
			if (this['__is_instance__'] === true) {
				var self = this;
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				spec = arguments[2];
				if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			}
			if ($pyjs['options']['arg_instance_type']) {
				if (self.prototype['__md5__'] !== 'c6ae281a312f180b86a04084ad76eafd') {
					if (!$m['_isinstance'](self, arguments['callee']['__class__'])) {
						$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					}
				}
			}
			var $and62,$and61,fmt;
			if ($p['bool'](($p['bool']($and61=$m['isinstance'](w_obj, $m['object']))?!$p['bool']($m['isinstance'](w_obj, $p['tuple']([$p['int'], $m['float'], $m['basestring']]))):$and61))) {
				if ($p['bool']($m['hasattr'](w_obj, '__format__'))) {
					return w_obj['__format__'](spec);
				}
			}
			if ($p['bool'](!$p['bool'](spec))) {
				return w_obj;
			}
			fmt = $m['Formatter'](self, spec);
			if ($p['bool']($m['isinstance'](w_obj, $m['basestring']))) {
				return fmt['format_string'](w_obj);
			}
			else if ($p['bool']($m['isinstance'](w_obj, $p['int']))) {
				return fmt['format_int_or_long'](w_obj, spec);
			}
			else if ($p['bool']($m['isinstance'](w_obj, $m['float']))) {
				return fmt['format_float'](w_obj);
			}
			if ($p['bool']($m['isinstance'](w_obj, $m['object']))) {
				if ($p['bool']($m['hasattr'](w_obj, '__str__'))) {
					return fmt['format_string'](w_obj['__str__']());
				}
			}
			$m['printFunc'](['type not implemented'], 1);
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['spec']]);
		$cls_definition['format'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringFormatSpace', $bases, $cls_definition);
	})();
	$m['DTSF_STR_PRECISION'] = $constant_int_12;
	$m['DTSF_SIGN'] = $constant_int_1;
	$m['DTSF_ADD_DOT_0'] = $constant_int_2;
	$m['DTSF_ALT'] = $constant_int_4;
	$m['DIST_FINITE'] = $constant_int_1;
	$m['DIST_NAN'] = $constant_int_2;
	$m['DIST_INFINITY'] = $constant_int_3;
	$m['formatd'] = function(x, code, precision, flags) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][5][1];
		var sign,$and64,$and63,$sub122,$sub123,alt,$sub121,$mod9,$sub124,fmt,$add188,$add183,$add185,$add184,$add187,$add186,$mod10,$iter34_nextval,c,$iter34_test,idx,$iter34_array,$iter34_idx,s,$iter34_iter,$iter34_type;
		if ($p['bool']($m['op_bitand2'](flags, $m['DTSF_ALT']))) {
			alt = '#';
		}
		else {
			alt = '';
		}
		if ($p['bool']($m['op_eq'](code, 'r'))) {
			fmt = '%r';
		}
		else {
			fmt = $m['sprintf']('%%%s.%d%s', $p['tuple']([alt, precision, code]));
		}
		s = (typeof ($mod9=fmt)==typeof ($mod10=$p['tuple']([x])) && typeof $mod9=='number'?
			(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
			$m['op_mod']($mod9,$mod10));
		if ($p['bool']($m['op_bitand2'](flags, $m['DTSF_ADD_DOT_0']))) {
			idx = $m['len'](s);
			$iter34_iter = $m['range']($m['len'](s), $constant_int_0, (typeof ($usub27=$constant_int_1)=='number'?
				-$usub27:
				$m['op_usub']($usub27)));
			$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
			while ($iter34_test = typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
				idx = $iter34_nextval['$nextval'];
				c = s['__getitem__']($m['__op_sub']($sub121=idx,$sub122=$constant_int_1));
				if ($p['bool']('eE'['__contains__'](c))) {
					if ($p['bool']('+-'['__contains__'](s['__getitem__'](idx)))) {
						idx = $m['__op_add']($add183=idx,$add184=$constant_int_1);
					}
					s = $m['__op_add']($add185=$p['__getslice'](s, 0, idx),$add186=$m['sprintf']('%02d', $p['int']($p['__getslice'](s, idx, null))));
					break;
				}
				if ($p['bool']('.eE'['__contains__'](c))) {
					break;
				}
			}
			if (!$iter34_test) {
				if ($p['bool'](($m['cmp']($m['len'](s), precision) == -1))) {
					s = $m['__op_add']($add187=s,$add188='.0');
				}
				else {
					sign = '+';
					if ($p['bool'](($m['cmp'](x, $constant_int_1) == -1))) {
						sign = '-';
					}
					s = $m['sprintf']('%s.%se%s%02d', $p['tuple']([s['__getitem__']($constant_int_0), $p['__getslice'](s, $constant_int_1, null), sign, $m['__op_sub']($sub123=$m['len'](s),$sub124=$constant_int_1)]));
				}
			}
		}
		else if ($p['bool'](($p['bool']($and63=$m['op_eq'](code, 'r'))?s['endswith']('.0'):$and63))) {
			s = $p['__getslice'](s, 0, (typeof ($usub28=$constant_int_2)=='number'?
				-$usub28:
				$m['op_usub']($usub28)));
		}
		return s;
	};
	$m['formatd']['__name__'] = 'formatd';

	$m['formatd']['__bind_type__'] = 0;
	$m['formatd']['__args__'] = [null,null,['x'],['code'],['precision'],['flags', $constant_int_0]];
	$m['numeric_formatting'] = function() {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

		return $p['tuple'](['.', ',', '\x03\x00']);
	};
	$m['numeric_formatting']['__name__'] = 'numeric_formatting';

	$m['numeric_formatting']['__bind_type__'] = 0;
	$m['numeric_formatting']['__args__'] = [null,null];
	$m['_string_format'] = function(s, args, kw) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
		if (typeof args == 'undefined') args=arguments['callee']['__args__'][3][1];
		if (typeof kw == 'undefined') kw=arguments['callee']['__args__'][4][1];
		var space,res,fm;
		space = $m['StringFormatSpace']();
		fm = $m['TemplateFormatter'](space, s);
		res = fm['build'](args, kw);
		return res;
	};
	$m['_string_format']['__name__'] = '_string_format';

	$m['_string_format']['__bind_type__'] = 0;
	$m['_string_format']['__args__'] = [null,null,['s'],['args', $p['list']([])],['kw', $p['dict']([])]];
	$m['format'] = function(val, spec) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
		if (typeof spec == 'undefined') spec=arguments['callee']['__args__'][3][1];
		var args,space;
		args = $p['list']([val]);
		space = $m['StringFormatSpace']();
		return $m['str'](space['format'](val, spec));
	};
	$m['format']['__name__'] = 'format';

	$m['format']['__bind_type__'] = 0;
	$m['format']['__args__'] = [null,null,['val'],['spec', '']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {

    if (typeof iter == 'undefined') {
        throw $m['TypeError']("iter is undefined");
    }
    var it = {};
    it['$iter'] = iter;
    it['$loopvar'] = 0;
    it['$reuse_tuple'] = reuse_tuple;
    if (typeof (it['$arr'] = iter['__array']) != 'undefined') {
        it['$gentype'] = 0;
    } else {
        it['$iter'] = iter['__iter__']();
        it['$gentype'] = typeof (it['$arr'] = iter['__array']) != 'undefined'? 0 : (typeof iter['$genfunc'] == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it['$iter'];
    it['$nextval'] = it['$gentype']?(it['$gentype'] > 0?
        iterator['next'](true,it['$reuse_tuple']):$p['wrapped_next'](iterator)
                              ) : it['$arr'][it['$loopvar']++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter['next']();
    } catch (e) {
        if ($m['isinstance'](e, $m['StopIteration'])) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['__ass_unpack'] = function (data, count, extended) {
    if (data === null) {
        throw $m['TypeError']("'NoneType' is not iterable");
    }
    if (data['constructor'] === Array) {
    } else if (typeof data['__iter__'] == 'function') {
        if (typeof data['__array'] == 'object') {
            data = data['__array'];
        } else {
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                data = iter['__array'];
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (e['__name__'] != 'StopIteration') throw e;
                }
            }
        }
    } else {
        throw $m['TypeError']("'" + $m['repr'](data) + "' is not iterable");
    }
    var res = new Array();
    if (typeof extended == 'undefined' || extended === null)
    {
        if (data['length'] != count)
        if (data['length'] > count)
            throw $m['ValueError']("too many values to unpack");
        else
            throw $m['ValueError']("need more than "+data['length']+" values to unpack");
        return data;
    }
    else
    {
        throw $m['NotImplemented']("Extended unpacking is not implemented");
    }
};
	$m['__with'] = function(mgr, func) {
		if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
		var $attr423,$attr424,value,$pyjs_try_err,exit,exc;
		exit = $m['type'](mgr)['__exit__'];
		value = $m['type'](mgr)['__enter__'](mgr);
		exc = true;
		try {
			try {
				func(value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					exc = false;
					if ($p['bool'](!$p['bool']($pyjs_kwargs_call(null, exit, $m['sys']['exc_info'](), null, [{}, mgr])))) {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		} finally {
			if ($p['bool'](exc)) {
				exit(mgr, null, null, null);
			}
		}
		return null;
	};
	$m['__with']['__name__'] = '__with';

	$m['__with']['__bind_type__'] = 0;
	$m['__with']['__args__'] = [null,null,['mgr'],['func']];
	$m['init']();
	$m['Ellipsis'] = $m['EllipsisType']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
		if (typeof globals == 'undefined') globals=arguments['callee']['__args__'][3][1];
		if (typeof locals == 'undefined') locals=arguments['callee']['__args__'][4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments['callee']['__args__'][5][1];
		if (typeof level == 'undefined') level=arguments['callee']['__args__'][6][1];
		var $add190,module,$add189,$and66,$and65;
		module = $m['___import___'](name, null);
		if ($p['bool'](($p['bool']($and65=!$p['bool']($m['op_is'](module, null)))?$m['hasattr'](module, '__was_initialized__'):$and65))) {
			return module;
		}
		throw ($m['ImportError']($m['__op_add']($add189='No module named ',$add190=name)));
		return null;
	};
	$m['__import__']['__name__'] = '__import__';

	$m['__import__']['__bind_type__'] = 0;
	$m['__import__']['__args__'] = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub29=$constant_int_1)=='number'?
		-$usub29:
		$m['op_usub']($usub29))]];
	$m['sys'] = $m['___import___']('sys', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys']
*/
