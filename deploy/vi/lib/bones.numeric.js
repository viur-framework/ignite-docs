/* start module: bones.numeric */
$pyjs['loaded_modules']['bones.numeric'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.numeric']['__was_initialized__']) return $pyjs['loaded_modules']['bones.numeric'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.numeric'];
	$m['__repr__'] = function() { return '<module: bones.numeric>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.numeric';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['numeric'] = $pyjs['loaded_modules']['bones.numeric'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_10 = new $p['int'](10);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
		$p['__import_all__']('html5.keycodes', 'bones', $m, null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['NumericBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.numeric';
			$cls_definition['__md5__'] = 'f6be2e1a7fb43151bfdae2a476257998';
			$method = $pyjs__bind_method2('render', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6be2e1a7fb43151bfdae2a476257998') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['str'](self['raw'](data, field))['$$replace']('.', ',');
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			$method = $pyjs__bind_method2('raw', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6be2e1a7fb43151bfdae2a476257998') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					value = data['__getitem__'](field);
					if ($p['bool']($p['isinstance'](value, $p['int']))) {
						return value;
					}
					else if ($p['bool']($p['isinstance'](value, $p['float']))) {
						return $p['round'](value, $p['getattr'](self, 'skelStructure')['__getitem__'](field)['get']('precision', $constant_int_2));
					}
				}
				return $constant_int_0;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['raw'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NumericBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['NumericViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.numeric';
			$cls_definition['__md5__'] = 'd92c2cda35e76b3deda6d44ca2086f1e';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, skelStructure) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					moduleName = arguments[1];
					boneName = arguments[2];
					skelStructure = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd92c2cda35e76b3deda6d44ca2086f1e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof skelStructure != 'undefined') {
						if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = skelStructure;
							skelStructure = arguments[4];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[4];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$p['$$super']($m['NumericViewBoneDelegate'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('skelStructure', skelStructure) : $p['setattr'](self, 'skelStructure', skelStructure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', moduleName) : $p['setattr'](self, 'moduleName', moduleName); 
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('render', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd92c2cda35e76b3deda6d44ca2086f1e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$and1,$pyjs_try_err,prec,$add2,s,$add1,$mod1,$add4,$mod2,$and2;
				s = $m['conf']['__getitem__']('empty_value');
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					try {
						prec = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['get']('precision');
						if ($p['bool'](($p['bool']($and1=prec)?!$p['op_is'](data['__getitem__'](field), null):$and1))) {
							s = (typeof ($mod1=$p['__op_add']($add3=$p['__op_add']($add1='%.',$add2=$p['str'](prec)),$add4='f'))==typeof ($mod2=data['__getitem__'](field)) && typeof $mod1=='number'?
								(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
								$p['op_mod']($mod1,$mod2));
						}
						else {
							s = $p['str'](data['__getitem__'](field));
						}
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							s = $p['str'](data['__getitem__'](field));
						}
					}
				}
				return $m['html5']['Label'](s);
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NumericViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['NumericEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.numeric';
			$cls_definition['__md5__'] = 'aebaaa3fe7253fea01bfcf313299937a';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, _min, _max, precision, currency) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					moduleName = arguments[1];
					boneName = arguments[2];
					readOnly = arguments[3];
					_min = arguments[4];
					_max = arguments[5];
					precision = arguments[6];
					currency = arguments[7];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,8,arguments['length']-1));

					var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'aebaaa3fe7253fea01bfcf313299937a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof currency != 'undefined') {
						if (currency !== null && typeof currency['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = currency;
							currency = arguments[8];
						}
					} else 					if (typeof precision != 'undefined') {
						if (precision !== null && typeof precision['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = precision;
							precision = arguments[8];
						}
					} else 					if (typeof _max != 'undefined') {
						if (_max !== null && typeof _max['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = _max;
							_max = arguments[8];
						}
					} else 					if (typeof _min != 'undefined') {
						if (_min !== null && typeof _min['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = _min;
							_min = arguments[8];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[8];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[8];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[8];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[8];
						}
					} else {
					}
				}
				if (typeof _min == 'undefined') _min=arguments['callee']['__args__'][6][1];
				if (typeof _max == 'undefined') _max=arguments['callee']['__args__'][7][1];
				if (typeof precision == 'undefined') precision=arguments['callee']['__args__'][8][1];
				if (typeof currency == 'undefined') currency=arguments['callee']['__args__'][9][1];

				$pyjs_kwargs_call($p['$$super']($m['NumericEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Input']()) : $p['setattr'](self, 'input', $m['html5']['Input']()); 
				self['appendChild']($p['getattr'](self, 'input'));
				if ($p['bool'](currency)) {
					self['appendChild']($m['html5']['Span'](currency));
				}
				$p['getattr'](self, 'input')['__setitem__']('type', 'number');
				if ($p['bool'](_min)) {
					$p['getattr'](self, 'input')['__setitem__']('min', _min);
				}
				if ($p['bool'](_max)) {
					$p['getattr'](self, 'input')['__setitem__']('max', _max);
				}
				if ($p['bool'](precision)) {
					$p['getattr'](self, 'input')['__setitem__']('step', $p['pow']($constant_int_10, (typeof ($usub1=precision)=='number'?
						-$usub1:
						$p['op_usub']($usub1))));
				}
				else {
					$p['getattr'](self, 'input')['__setitem__']('step', $constant_int_1);
				}
				if ($p['bool']($p['getattr'](self, 'readOnly'))) {
					$p['getattr'](self, 'input')['__setitem__']('readonly', true);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['_min', false],['_max', false],['precision', false],['currency', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
				if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof skelStructure != 'undefined') {
						if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = skelStructure;
							skelStructure = arguments[3];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[3];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[3];
						}
					} else {
					}
				}
				var style,$iter1_nextval,$iter1_type,$and3,$and4,s,$iter1_iter,currency,readOnly,params,$iter1_array,$iter1_idx;
				params = skelStructure['__getitem__'](boneName)['get']('params');
				readOnly = skelStructure['__getitem__'](boneName)['get']('readonly', false);
				currency = null;
				if ($p['bool'](($p['bool']($and3=!$p['bool'](readOnly))?params:$and3))) {
					style = params['get']('style', '')['lower']();
					$iter1_iter = style['$$split'](' ');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						s = $iter1_nextval['$nextval'];
						if ($p['bool']($p['op_eq'](s, 'readonly'))) {
							readOnly = true;
						}
						else if ($p['bool'](s['startswith']('amount.'))) {
							currency = s['$$split']('.', $constant_int_1)['__getitem__']($constant_int_1);
							currency = $p['dict']([['euro', '\u20ac'], ['dollar', '$'], ['yen', '\xa5'], ['pound', '\xa3'], ['baht', '\u0e3f'], ['bitcoin', '\u0e3f']])['get'](currency, currency);
						}
					}
				}
				return $pyjs_kwargs_call(null, $m['NumericEditBone'], null, null, [{'currency':currency}, moduleName, boneName, readOnly, skelStructure['__getitem__'](boneName)['get']('min', false), skelStructure['__getitem__'](boneName)['get']('max', false), skelStructure['__getitem__'](boneName)['get']('precision', false)]);
			}
	, 3, ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['fromSkelStructure'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data) {
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
					if (self.prototype['__md5__'] !== 'aebaaa3fe7253fea01bfcf313299937a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'input')['__setitem__']('value', data['get']($p['getattr'](self, 'boneName'), ''));
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['unserialize'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'aebaaa3fe7253fea01bfcf313299937a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value')]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForPost'] = $method;
			$method = $pyjs__bind_method2('serializeForDocument', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'aebaaa3fe7253fea01bfcf313299937a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['serializeForPost']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errorInfo = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'aebaaa3fe7253fea01bfcf313299937a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['errorInfo']]);
			$cls_definition['setExtendedErrorInformation'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Span'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NumericEditBone', $p['tuple']($bases), $data);
		})();
		$m['ExtendedNumericSearch'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.numeric';
			$cls_definition['__md5__'] = 'ff7c801b68fd671e979d8ee02a7c3bb8';
			$method = $pyjs__bind_method2('__init__', function(extension, view, modul) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					extension = arguments[1];
					view = arguments[2];
					modul = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff7c801b68fd671e979d8ee02a7c3bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[4];
						}
					} else 					if (typeof view != 'undefined') {
						if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = view;
							view = arguments[4];
						}
					} else 					if (typeof extension != 'undefined') {
						if (extension !== null && typeof extension['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = extension;
							extension = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['ExtendedNumericSearch'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extension', extension) : $p['setattr'](self, 'extension', extension); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('opMode', extension['__getitem__']('mode')) : $p['setattr'](self, 'opMode', extension['__getitem__']('mode')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterChangedEvent', $m['EventDispatcher']('filterChanged')) : $p['setattr'](self, 'filterChangedEvent', $m['EventDispatcher']('filterChanged')); 
				if (!( $p['list'](['equals', 'from', 'to', 'range'])['__contains__']($p['getattr'](self, 'opMode')) )) {
				   throw $p['AssertionError']();
				 }
				self['appendChild']($m['html5']['TextNode'](extension['__getitem__']('name')));
				self['sinkEvent']('onKeyDown');
				if ($p['bool']($p['list'](['equals', 'from', 'to'])['__contains__']($p['getattr'](self, 'opMode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Input']()) : $p['setattr'](self, 'input', $m['html5']['Input']()); 
					$p['getattr'](self, 'input')['__setitem__']('type', 'number');
					self['appendChild']($p['getattr'](self, 'input'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input1', $m['html5']['Input']()) : $p['setattr'](self, 'input1', $m['html5']['Input']()); 
					$p['getattr'](self, 'input1')['__setitem__']('type', 'number');
					self['appendChild']($p['getattr'](self, 'input1'));
					self['appendChild']($m['html5']['TextNode']('to'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input2', $m['html5']['Input']()) : $p['setattr'](self, 'input2', $m['html5']['Input']()); 
					$p['getattr'](self, 'input2')['__setitem__']('type', 'number');
					self['appendChild']($p['getattr'](self, 'input2'));
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(event) {
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
					if (self.prototype['__md5__'] !== 'ff7c801b68fd671e979d8ee02a7c3bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']((typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode')))) {
					self['filterChangedEvent']['fire']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('updateFilter', function(filter) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff7c801b68fd671e979d8ee02a7c3bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13,$add6,$add7,$add12,$add5,$add10,$add8,$add9,$add11;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'equals'))) {
					filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'from'))) {
					filter['__setitem__']($p['__op_add']($add5=$p['getattr'](self, 'extension')['__getitem__']('target'),$add6='$gt'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'to'))) {
					filter['__setitem__']($p['__op_add']($add7=$p['getattr'](self, 'extension')['__getitem__']('target'),$add8='$lt'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'prefix'))) {
					filter['__setitem__']($p['__op_add']($add9=$p['getattr'](self, 'extension')['__getitem__']('target'),$add10='$lk'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'))) {
					filter['__setitem__']($p['__op_add']($add11=$p['getattr'](self, 'extension')['__getitem__']('target'),$add12='$gt'), $p['getattr'](self, 'input1')['__getitem__']('value'));
					filter['__setitem__']($p['__op_add']($add13=$p['getattr'](self, 'extension')['__getitem__']('target'),$add14='$lt'), $p['getattr'](self, 'input2')['__getitem__']('value'));
				}
				return filter;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['updateFilter'] = $method;
			$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, module) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $or1,$or2,$and5,$and6,$and7;
				return ($p['bool']($and5=$p['isinstance'](extension, $p['dict']))?($p['bool']($and6=extension['keys']()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'numeric'))?$or1:extension['__getitem__']('type')['startswith']('numeric.')):$and6):$and5);
			}
	, 3, [null,null,['extension'],['view'],['module']]);
			$cls_definition['canHandleExtension'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExtendedNumericSearch', $p['tuple']($bases), $data);
		})();
		$m['CheckForNumericBone'] = function(moduleName, boneName, skelStucture) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof skelStucture != 'undefined') {
					if (skelStucture !== null && typeof skelStucture['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStucture;
						skelStucture = arguments[3];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[3];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[3];
					}
				} else {
				}
			}

			return $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'numeric');
		};
		$m['CheckForNumericBone']['__name__'] = 'CheckForNumericBone';

		$m['CheckForNumericBone']['__bind_type__'] = 0;
		$m['CheckForNumericBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForNumericBone'], $m['NumericEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForNumericBone'], $m['NumericViewBoneDelegate']);
		$m['extendedSearchWidgetSelector']['insert']($constant_int_1, $p['getattr']($m['ExtendedNumericSearch'], 'canHandleExtension'), $m['ExtendedNumericSearch']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForNumericBone'], $m['NumericBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.numeric */


/* end module: bones.numeric */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'html5.keycodes', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
