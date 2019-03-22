/* start module: json */
$pyjs['loaded_modules']['json'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['json']['__was_initialized__']) return $pyjs['loaded_modules']['json'];
	var $m = $pyjs['loaded_modules']['json'];
	$m['__repr__'] = function() { return '<module: json>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'json';
	$m['__name__'] = __mod_name__;
	try {


		$m['JSONParser'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'json';
			$cls_definition['__md5__'] = '0de792bc98342f133ceb1465de7d4c67';
			$method = $pyjs__bind_method2('decode', function(s) {
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
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['jsObjectToPy'](self['parseJSON'](s));
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['decode'] = $method;
			$method = $pyjs__bind_method2('decodeAsObject', function(s, object_hook) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					object_hook = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof object_hook == 'undefined') object_hook=arguments['callee']['__args__'][4][1];

				return self['jsObjectToPyObject'](self['parseJSON'](s));
			}
	, 1, [null,null,['self'],['s'],['object_hook', null]]);
			$cls_definition['decodeAsObject'] = $method;
			$method = $pyjs__bind_method2('encode', function(obj) {
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
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['toJSONString'](obj);
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['encode'] = $method;
			$method = $pyjs__bind_method2('jsObjectToPy', function(obj) {
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
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        if (pyjslib['isArray'](obj)) {
            for (var i in obj)
                obj[i] = this['jsObjectToPy'](obj[i]);
            return new pyjslib['list'](obj);
            }
        else if (pyjslib['isObject'](obj)) {
            for (var i in obj)
                obj[i]=this['jsObjectToPy'](obj[i]);
            return new pyjslib['dict'](obj);
            }

        return obj;
        
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['jsObjectToPy'] = $method;
			$method = $pyjs__bind_method2('jsObjectToPyObject', function(obj) {
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
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        if (pyjslib['isArray'](obj)) {
            for (var i in obj)
                obj[i] = this['jsObjectToPyObject'](obj[i]);
            obj=new pyjslib['list'](obj);
            }
        else if (pyjslib['isObject'](obj)) {
            if (obj["__jsonclass__"]) {
                var class_name = obj["__jsonclass__"][0];
                delete obj["__jsonclass__"];
                var _obj = this['jsObjectToPyObject'](obj);

                return $pyjs_kwargs_call(
                    null, eval("$pyjs['loaded_modules']." + class_name),
                    null, _obj, [{}]
                );
                }
            else {
                for (var i in obj)
                    obj[i]=this['jsObjectToPyObject'](obj[i]);
                return new pyjslib['dict'](obj);
                }
            }

        return obj;
        
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['jsObjectToPyObject'] = $method;
			$method = $pyjs__bind_method2('toJSONString', function(obj) {
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
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


   var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        s = {
            'array': function (x) {
                var a = ['['], b, f, i, l = x['length'], v;
                for (i = 0; i < l; i += 1) {
                    v = x[i];
                    f = s[typeof v];
                    if (f) {
                        v = f(v);
                        if (typeof v == 'string') {
                            if (b) {
                                a[a['length']] = ',';
                            }
                            a[a['length']] = v;
                            b = true;
                        }
                    }
                }
                a[a['length']] = ']';
                return a['join']('');
            },
            'boolean': function (x) {
                return String(x);
            },
            'undefined':function (x) {
               return "null";
            },
            'null': function (x) {
                return "null";
            },
            'number': function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            'object': function (x) {
                if (x) {
                    if (x['__number__']) {
                        return String(x);
                    }
                    if (x instanceof Array) {
                        return s['array'](x);
                    }
                    if (x instanceof pyjslib['list']) {
                        return s['array'](x['__array']);
                    }
                    if (x instanceof pyjslib['tuple']) {
                        return s['array'](x['__array']);
                    }
                    if (x instanceof pyjslib['dict']) {
                        return s['object'](pyjslib['toJSObjects'](x));
                    }
                    var a = ['{'], b, f, i, v;
                    for (i in x) {
                        v = x[i];
                        f = s[typeof v];
                        if (f) {
                            v = f(v);
                            if (typeof v == 'string') {
                                if (b) {
                                    a[a['length']] = ',';
                                }
                                a['push'](s['string'](i), ':', v);
                                b = true;
                            }
                        }
                    }
                    a[a['length']] = '}';
                    return a['join']('');
                }
                return 'null';
            },
            'string': function (x) {
                if (/["\\\x00-\x1f]/.test(x)) {
                    x = x['replace'](/([\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b['charCodeAt']();
                        return '\\u00' +
                            Math['floor'](c / 16)['toString'](16) +
                            (c % 16)['toString'](16);
                    });
                }
                return '"' + x + '"';
            }
        };

        var typ = typeof obj;
        f=s[typ];
        return f(obj);
        
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['toJSONString'] = $method;
			$method = $pyjs__bind_method2('parseJSON', function(str) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					str = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0de792bc98342f133ceb1465de7d4c67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


        try {
              return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(str.replace(/"(\\.|[^"\\])*"/g, ''))) &&
                    eval('(' + str + ')');
        } catch (e) {
            return false;
        }
        
			}
	, 1, [null,null,['self'],['str']]);
			$cls_definition['parseJSON'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JSONParser', $p['tuple']($bases), $data);
		})();
		$m['parser'] = $m['JSONParser']();
		$m['dumps'] = $p['getattr']($m['parser'], 'encode');
		$m['loads'] = $p['getattr']($m['parser'], 'decodeAsObject');
		$m['JSONDecodeException'] = null;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end json */


/* end module: json */


