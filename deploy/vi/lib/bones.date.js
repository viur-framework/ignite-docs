/* start module: bones.date */
$pyjs['loaded_modules']['bones.date'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.date']['__was_initialized__']) return $pyjs['loaded_modules']['bones.date'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.date'];
	$m['__repr__'] = function() { return '<module: bones.date>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.date';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['date'] = $pyjs['loaded_modules']['bones.date'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['datetime'] = $p['___import___']('datetime.datetime', 'bones', null, false);
		$m['re'] = $p['___import___']('re', 'bones');
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['DateBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.date';
			$cls_definition['__md5__'] = 'd21a9f9f209aa00f5b7d5b8114f86d81';
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
					if (self.prototype['__md5__'] !== 'd21a9f9f209aa00f5b7d5b8114f86d81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and9,val,$and1,$and3,$and4,$and5,$and6,$and7,$pyjs_try_err,dt,$and2,structure;
				if ($p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](self, 'skelStructure')['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and2=data)?data['get'](field):$and2):$and1)))) {
					return $m['conf']['__getitem__']('empty_value');
				}
				structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
				val = data['__getitem__'](field);
				try {
					if ($p['bool'](($p['bool']($and4=structure['__getitem__']('date'))?structure['__getitem__']('time'):$and4))) {
						try {
							dt = $m['datetime']['strptime'](val, '%d.%m.%Y %H:%M:%S');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return 'Error parsing Date';
							}
						}
						return dt['strftime']('%d.%m.%Y %H:%M:%S');
					}
					else if ($p['bool'](($p['bool']($and6=structure['__getitem__']('date'))?!$p['bool'](structure['__getitem__']('time')):$and6))) {
						try {
							dt = $m['datetime']['strptime'](val, '%d.%m.%Y');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return 'Error parsing Date';
							}
						}
						return dt['strftime']('%d.%m.%Y');
					}
					else if ($p['bool'](($p['bool']($and8=!$p['bool'](structure['__getitem__']('date')))?structure['__getitem__']('time'):$and8))) {
						try {
							dt = $m['datetime']['strptime'](val, '%H:%M:%S');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return 'Error parsing time';
							}
						}
						return dt['strftime']('%H:%M:%S');
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						return $p['str'](val);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DateBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['DateViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.date';
			$cls_definition['__md5__'] = 'ac3bda65be272eb558de9ba0841ebf6f';
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
					if (self.prototype['__md5__'] !== 'ac3bda65be272eb558de9ba0841ebf6f') {
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

				$p['$$super']($m['DateViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== 'ac3bda65be272eb558de9ba0841ebf6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var span,val,$and13,timeSpan,dateSpan,$pyjs_try_err,$and12,$and10,$and11,$and16,$and17,$and14,$and15,dt,$and18,structure;
				if ($p['bool'](!$p['bool'](($p['bool']($and10=$p['getattr'](self, 'skelStructure')['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and11=data)?data['get'](field):$and11):$and10)))) {
					return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
				}
				structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
				val = data['__getitem__'](field);
				try {
					if ($p['bool'](($p['bool']($and13=structure['__getitem__']('date'))?structure['__getitem__']('time'):$and13))) {
						try {
							dt = $m['datetime']['strptime'](val, '%d.%m.%Y %H:%M:%S');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return $m['html5']['TextNode']($m['translate']('Error parsing Date'));
							}
						}
						span = $m['html5']['Span']();
						span['__getitem__']('class')['append']('datetime');
						dateSpan = $m['html5']['Span']();
						dateSpan['__getitem__']('class')['append']('date');
						dateSpan['appendChild']($m['html5']['TextNode'](dt['strftime']('%d.%m.%Y')));
						timeSpan = $m['html5']['Span']();
						timeSpan['__getitem__']('class')['append']('time');
						timeSpan['appendChild']($m['html5']['TextNode'](dt['strftime']('%H:%M:%S')));
						span['appendChild'](dateSpan);
						span['appendChild'](timeSpan);
						return span;
					}
					else if ($p['bool'](($p['bool']($and15=structure['__getitem__']('date'))?!$p['bool'](structure['__getitem__']('time')):$and15))) {
						try {
							dt = $m['datetime']['strptime'](val, '%d.%m.%Y');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return $m['html5']['TextNode']($m['translate']('Error parsing Date'));
							}
						}
						dateSpan = $m['html5']['Span']();
						dateSpan['__getitem__']('class')['append']('date');
						dateSpan['appendChild']($m['html5']['TextNode'](dt['strftime']('%d.%m.%Y')));
						return dateSpan;
					}
					else if ($p['bool'](($p['bool']($and17=!$p['bool'](structure['__getitem__']('date')))?structure['__getitem__']('time'):$and17))) {
						try {
							dt = $m['datetime']['strptime'](val, '%H:%M:%S');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								return $m['html5']['TextNode']($m['translate']('Error parsing Date'));
							}
						}
						timeSpan = $m['html5']['Span']();
						timeSpan['__getitem__']('class')['append']('time');
						timeSpan['appendChild']($m['html5']['TextNode'](dt['strftime']('%H:%M:%S')));
						return timeSpan;
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						return $m['html5']['Label']($p['str'](val));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DateViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['DateEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.date';
			$cls_definition['__md5__'] = 'e5a17919d54d6f1b5dcfbb42023bba7a';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, date, time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					date = arguments[4];
					time = arguments[5];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'e5a17919d54d6f1b5dcfbb42023bba7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof time != 'undefined') {
						if (time !== null && typeof time['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = time;
							time = arguments[6];
						}
					} else 					if (typeof date != 'undefined') {
						if (date !== null && typeof date['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = date;
							date = arguments[6];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[6];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[6];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[6];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[6];
						}
					} else {
					}
				}
				if (typeof date == 'undefined') date=arguments['callee']['__args__'][6][1];
				if (typeof time == 'undefined') time=arguments['callee']['__args__'][7][1];
				var $pyjs_try_err;
				$pyjs_kwargs_call($p['$$super']($m['DateEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hasdate', date) : $p['setattr'](self, 'hasdate', date); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hastime', time) : $p['setattr'](self, 'hastime', time); 
				if ($p['bool'](date)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dateinput', $m['html5']['Input']()) : $p['setattr'](self, 'dateinput', $m['html5']['Input']()); 
					try {
						$p['getattr'](self, 'dateinput')['__setitem__']('type', 'date');
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
					$p['getattr'](self, 'dateinput')['__getitem__']('style')['__setitem__']('float', 'left');
					self['appendChild']($p['getattr'](self, 'dateinput'));
					if ($p['bool']($p['getattr'](self, 'readOnly'))) {
						$p['getattr'](self, 'dateinput')['__setitem__']('readonly', true);
					}
				}
				if ($p['bool'](time)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timeinput', $m['html5']['Input']()) : $p['setattr'](self, 'timeinput', $m['html5']['Input']()); 
					try {
						$p['getattr'](self, 'timeinput')['__setitem__']('type', 'time');
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
					$p['getattr'](self, 'timeinput')['__getitem__']('style')['__setitem__']('float', 'left');
					$p['getattr'](self, 'timeinput')['__getitem__']('style')['__setitem__']('width', '70px');
					self['appendChild']($p['getattr'](self, 'timeinput'));
					if ($p['bool']($p['getattr'](self, 'readOnly'))) {
						$p['getattr'](self, 'timeinput')['__setitem__']('readonly', true);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['date', true],['time', true]]);
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
				var $and20,readOnly,time,date,$and19;
				readOnly = ($p['bool']($and19=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and19);
				date = ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('date'))? (skelStructure['__getitem__'](boneName)['__getitem__']('date')) : (true));
				time = ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('time'))? (skelStructure['__getitem__'](boneName)['__getitem__']('time')) : (true));
				return $m['DateEditBone'](moduleName, boneName, readOnly, date, time);
			}
	, 3, ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['fromSkelStructure'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					extendedErrorInformation = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5a17919d54d6f1b5dcfbb42023bba7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];
				var $pyjs_try_err,dateobj,$and23,$and22,$and21,$and24,$and26,$and25;
				if ($p['bool'](data['get']($p['getattr'](self, 'boneName')))) {
					if ($p['bool'](($p['bool']($and21=$p['getattr'](self, 'hastime'))?!$p['bool']($p['getattr'](self, 'hasdate')):$and21))) {
						$p['getattr'](self, 'timeinput')['__setitem__']('value', data['__getitem__']($p['getattr'](self, 'boneName')));
					}
					if ($p['bool'](($p['bool']($and23=$p['getattr'](self, 'hasdate'))?!$p['bool']($p['getattr'](self, 'hastime')):$and23))) {
						dateobj = $m['datetime']['strptime'](data['__getitem__']($p['getattr'](self, 'boneName')), '%d.%m.%Y');
						$p['getattr'](self, 'dateinput')['__setitem__']('value', dateobj['strftime']('%Y-%m-%d'));
					}
					if ($p['bool'](($p['bool']($and25=$p['getattr'](self, 'hasdate'))?$p['getattr'](self, 'hastime'):$and25))) {
						try {
							dateobj = $m['datetime']['strptime'](data['__getitem__']($p['getattr'](self, 'boneName')), '%d.%m.%Y %H:%M:%S');
							$p['getattr'](self, 'dateinput')['__setitem__']('value', dateobj['strftime']('%Y-%m-%d'));
							$p['getattr'](self, 'timeinput')['__setitem__']('value', dateobj['strftime']('%H:%M:%S'));
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
								$p['getattr'](self, 'dateinput')['__setitem__']('value', '-');
								$p['getattr'](self, 'timeinput')['__setitem__']('value', '-');
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
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
					if (self.prototype['__md5__'] !== 'e5a17919d54d6f1b5dcfbb42023bba7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add22,result,$add21,$add20,adatetime,$add25,$add24,$add26,returnvalue,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$add23;
				adatetime = $p['list'](['00', '00', '0000', '00', '00', '00']);
				if ($p['bool']($p['hasattr'](self, 'timeinput'))) {
					result = $m['re']['match']('(\\d+):(\\d+)(:(\\d+))?', $p['getattr'](self, 'timeinput')['__getitem__']('value'));
					if ($p['bool'](result)) {
						adatetime['__setitem__']($constant_int_3, result['group']($constant_int_1));
						adatetime['__setitem__']($constant_int_4, result['group']($constant_int_2));
						if ($p['bool'](result['group']($constant_int_4))) {
							adatetime['__setitem__']($constant_int_5, result['group']($constant_int_4));
						}
					}
				}
				if ($p['bool']($p['hasattr'](self, 'dateinput'))) {
					result = $m['re']['match']('(\\d+).(\\d+).(\\d+)', $p['getattr'](self, 'dateinput')['__getitem__']('value'));
					if ($p['bool'](result)) {
						adatetime['__setitem__']($constant_int_0, result['group']($constant_int_3));
						adatetime['__setitem__']($constant_int_1, result['group']($constant_int_2));
						adatetime['__setitem__']($constant_int_2, result['group']($constant_int_1));
					}
				}
				if ($p['bool']($p['op_eq'](adatetime['__getitem__']($constant_int_2), '0000'))) {
					return $p['dict']([[$p['getattr'](self, 'boneName'), $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=adatetime['__getitem__']($constant_int_3),$add2=':'),$add4=adatetime['__getitem__']($constant_int_4)),$add6=':00')]]);
				}
				returnvalue = $p['__op_add']($add25=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=adatetime['__getitem__']($constant_int_0),$add8='.'),$add10=adatetime['__getitem__']($constant_int_1)),$add12='.'),$add14=adatetime['__getitem__']($constant_int_2)),$add16=' '),$add18=adatetime['__getitem__']($constant_int_3)),$add20=':'),$add22=adatetime['__getitem__']($constant_int_4)),$add24=':'),$add26=adatetime['__getitem__']($constant_int_5));
				return $p['dict']([[$p['getattr'](self, 'boneName'), returnvalue]]);
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
					if (self.prototype['__md5__'] !== 'e5a17919d54d6f1b5dcfbb42023bba7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['serializeForPost']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DateEditBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForDateBone'] = function(moduleName, boneName, skelStucture) {
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

			return $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'date');
		};
		$m['CheckForDateBone']['__name__'] = 'CheckForDateBone';

		$m['CheckForDateBone']['__bind_type__'] = 0;
		$m['CheckForDateBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForDateBone'], $m['DateEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForDateBone'], $m['DateViewBoneDelegate']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForDateBone'], $m['DateBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.date */


/* end module: bones.date */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'datetime.datetime', 'datetime', 're', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
