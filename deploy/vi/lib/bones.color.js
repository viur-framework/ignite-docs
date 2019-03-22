/* start module: bones.color */
$pyjs['loaded_modules']['bones.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.color']['__was_initialized__']) return $pyjs['loaded_modules']['bones.color'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.color'];
	$m['__repr__'] = function() { return '<module: bones.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.color';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['color'] = $pyjs['loaded_modules']['bones.color'];
	try {

		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['ColorViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.color';
			$cls_definition['__md5__'] = '9365ad17f383c401ae9d37cbf92b331c';
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
					if (self.prototype['__md5__'] !== '9365ad17f383c401ae9d37cbf92b331c') {
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

				$p['$$super']($m['ColorViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== '9365ad17f383c401ae9d37cbf92b331c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var adiv,can,lbl;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					can = $m['html5']['Div']();
					can['__getitem__']('style')['__setitem__']('width', '60px');
					adiv = $m['html5']['Div']();
					adiv['__getitem__']('style')['__setitem__']('width', '10px');
					adiv['__getitem__']('style')['__setitem__']('height', '10px');
					adiv['__getitem__']('style')['__setitem__']('background-Color', $p['str'](data['__getitem__'](field)));
					adiv['__getitem__']('style')['__setitem__']('float', 'left');
					adiv['__getitem__']('style')['__setitem__']('margin-top', '6px');
					adiv['__getitem__']('style')['__setitem__']('margin-right', '3px');
					lbl = $m['html5']['Label']($p['str'](data['__getitem__'](field)));
					can['appendChild'](adiv);
					can['appendChild'](lbl);
					return can;
				}
				return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ColorViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['ColorEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.color';
			$cls_definition['__md5__'] = '4043836e22d182d3544ceeaec32dcc51';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly) {
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
					readOnly = arguments[3];
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
					if (self.prototype['__md5__'] !== '4043836e22d182d3544ceeaec32dcc51') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[4];
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

				$pyjs_kwargs_call($p['$$super']($m['ColorEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__setitem__']('type', 'color');
				if ($p['bool'](readOnly)) {
					self['__setitem__']('disabled', true);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
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
				var $and1,$and2,readOnly;
				readOnly = ($p['bool']($and1=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
				return $m['ColorEditBone'](moduleName, boneName, readOnly);
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
					if (self.prototype['__md5__'] !== '4043836e22d182d3544ceeaec32dcc51') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];

				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					self['_setValue'](data['__getitem__']($p['getattr'](self, 'boneName')));
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
					if (self.prototype['__md5__'] !== '4043836e22d182d3544ceeaec32dcc51') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['str'](self['_getValue']())]]);
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
					if (self.prototype['__md5__'] !== '4043836e22d182d3544ceeaec32dcc51') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['serializeForPost']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Input'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ColorEditBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForColorBone'] = function(moduleName, boneName, skelStucture) {
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

			return $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'color');
		};
		$m['CheckForColorBone']['__name__'] = 'CheckForColorBone';

		$m['CheckForColorBone']['__bind_type__'] = 0;
		$m['CheckForColorBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForColorBone'], $m['ColorEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForColorBone'], $m['ColorViewBoneDelegate']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.color */


/* end module: bones.color */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'config.conf', 'config']
*/
