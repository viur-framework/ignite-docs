/* start module: bones.spatial */
$pyjs['loaded_modules']['bones.spatial'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.spatial']['__was_initialized__']) return $pyjs['loaded_modules']['bones.spatial'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.spatial'];
	$m['__repr__'] = function() { return '<module: bones.spatial>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.spatial';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['spatial'] = $pyjs['loaded_modules']['bones.spatial'];
	try {

		var $constant_int_5 = new $p['int'](5);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['SpatialBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.spatial';
			$cls_definition['__md5__'] = '30a24316cfa009c38cf8e5dabb1dc116';
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
					if (self.prototype['__md5__'] !== '30a24316cfa009c38cf8e5dabb1dc116') {
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
				var $add12,$add5,$add2,$add3,$add1,$add6,$add7,$add4,$add10,$add8,$add9,lbl,$add11;
				$pyjs_kwargs_call($p['$$super']($m['SpatialBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('latitude', $m['html5']['Input']()) : $p['setattr'](self, 'latitude', $m['html5']['Input']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('longitude', $m['html5']['Input']()) : $p['setattr'](self, 'longitude', $m['html5']['Input']()); 
				$p['getattr'](self, 'latitude')['__setitem__']('type', 'number');
				$p['getattr'](self, 'longitude')['__setitem__']('type', 'number');
				self['appendChild']($p['getattr'](self, 'latitude'));
				lbl = $m['html5']['Label']($m['translate']('longitude'));
				$p['op_eq'](lbl['__getitem__']('for'), $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=moduleName,$add2='_'),$add4=boneName),$add6='_longitude'));
				self['appendChild'](lbl);
				$p['getattr'](self, 'longitude')['__setitem__']('name', $p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=moduleName,$add8='_'),$add10=boneName),$add12='_longitude'));
				self['appendChild']($p['getattr'](self, 'longitude'));
				if ($p['bool']($p['getattr'](self, 'readOnly'))) {
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
				return $m['SpatialBone'](moduleName, boneName, readOnly);
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
					if (self.prototype['__md5__'] !== '30a24316cfa009c38cf8e5dabb1dc116') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					var $tupleassign1 = $p['__ass_unpack'](data['__getitem__']($p['getattr'](self, 'boneName')), 2, null);
					$p['getattr'](self, 'latitude')['__setitem__']('value', $tupleassign1[0]);
					$p['getattr'](self, 'longitude')['__setitem__']('value', $tupleassign1[1]);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
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
					if (self.prototype['__md5__'] !== '30a24316cfa009c38cf8e5dabb1dc116') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['dict']([['{0}.lat'['format']($p['getattr'](self, 'boneName')), $p['getattr'](self, 'latitude')['__getitem__']('value')], ['{0}.lng'['format']($p['getattr'](self, 'boneName')), $p['getattr'](self, 'longitude')['__getitem__']('value')]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForPost'] = $method;
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
					if (self.prototype['__md5__'] !== '30a24316cfa009c38cf8e5dabb1dc116') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['errorInfo']]);
			$cls_definition['setExtendedErrorInformation'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SpatialBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForSpatialBone'] = function(moduleName, boneName, skelStucture) {
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
			var tmp;
			tmp = $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'))['startswith']('spatial');
			return tmp;
		};
		$m['CheckForSpatialBone']['__name__'] = 'CheckForSpatialBone';

		$m['CheckForSpatialBone']['__bind_type__'] = 0;
		$m['CheckForSpatialBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForSpatialBone'], $m['SpatialBone']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.spatial */


/* end module: bones.spatial */


/*
PYJS_DEPS: ['html5', 'i18n.translate', 'i18n', 'priorityqueue.editBoneSelector', 'priorityqueue']
*/
