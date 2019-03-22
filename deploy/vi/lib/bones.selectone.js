/* start module: bones.selectone */
$pyjs['loaded_modules']['bones.selectone'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.selectone']['__was_initialized__']) return $pyjs['loaded_modules']['bones.selectone'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.selectone'];
	$m['__repr__'] = function() { return '<module: bones.selectone>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.selectone';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['selectone'] = $pyjs['loaded_modules']['bones.selectone'];
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['SelectOneBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectone';
			$cls_definition['__md5__'] = 'da2914308c67524d720f09681c572d99';
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
					if (self.prototype['__md5__'] !== 'da2914308c67524d720f09681c572d99') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2,options;
				if ($p['bool'](($p['bool']($and1=data['__contains__'](field))?$p['getattr'](self, 'skelStructure')['__contains__'](field):$and1))) {
					options = function(){
						var $iter1_nextval,$iter1_type,k,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
					$iter1_iter = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						$collcomp1['__setitem__'](k, v);
					}

	return $collcomp1;}();
					return options['get'](data['__getitem__'](field), $m['conf']['__getitem__']('empty_value'));
				}
				return $m['conf']['__getitem__']('empty_value');
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectOneBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['SelectOneViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectone';
			$cls_definition['__md5__'] = '8b57dff7ee6373a97174491803e2dfec';
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
					if (self.prototype['__md5__'] !== '8b57dff7ee6373a97174491803e2dfec') {
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

				$p['$$super']($m['SelectOneViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== '8b57dff7ee6373a97174491803e2dfec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aspan,$and3,$and4,$and5,options;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					if ($p['bool'](($p['bool']($and3=data)?($p['bool']($and4=field)?$p['getattr'](self, 'skelStructure')['__contains__'](field):$and4):$and3))) {
						options = function(){
							var $iter2_nextval,$iter2_type,$iter2_iter,k,$collcomp2,$iter2_idx,v,$iter2_array;
	$collcomp2 = $p['dict']();
						$iter2_iter = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values');
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
							var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
							k = $tupleassign2[0];
							v = $tupleassign2[1];
							$collcomp2['__setitem__'](k, v);
						}

	return $collcomp2;}();
						aspan = $m['html5']['Span']();
						aspan['appendChild']($m['html5']['TextNode'](options['get'](data['__getitem__'](field), data['__getitem__'](field))));
						aspan['__setitem__']('Title', data['__getitem__'](field));
						return aspan;
					}
				}
				return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectOneViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['SelectOneEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectone';
			$cls_definition['__md5__'] = 'd10dad81c6d7522e4071fa46b7010a35';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, values) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					moduleName = arguments[1];
					boneName = arguments[2];
					readOnly = arguments[3];
					values = arguments[4];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd10dad81c6d7522e4071fa46b7010a35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof values != 'undefined') {
						if (values !== null && typeof values['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = values;
							values = arguments[5];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[5];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[5];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				var opt,key,$iter4_nextval,value,$iter4_idx,$iter4_type,$iter4_array,$assign1,$iter4_iter;
				$pyjs_kwargs_call($p['$$super']($m['SelectOneEditBone'], self), '__init__', args, kwargs, [{}]);
				$assign1 = boneName;
				self['__setitem__']('name', $assign1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', $assign1) : $p['setattr'](self, 'boneName', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				if ($p['bool']($p['isinstance'](values, $p['dict']))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', function(){
						var $iter3_idx,v,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,k;
	$collcomp3 = $p['list']();
					$iter3_iter = values['items']();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						$collcomp3['append']($p['tuple']([k, v]));
					}

	return $collcomp3;}()) : $p['setattr'](self, 'values', function(){
						var $iter3_idx,v,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,k;
	$collcomp3 = $p['list']();
					$iter3_iter = values['items']();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						$collcomp3['append']($p['tuple']([k, v]));
					}

	return $collcomp3;}()); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', values) : $p['setattr'](self, 'values', values); 
				}
				$iter4_iter = $p['getattr'](self, 'values');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
					key = $tupleassign4[0];
					value = $tupleassign4[1];
					opt = $m['html5']['Option']();
					opt['__setitem__']('value', key);
					$p['getattr'](opt, 'element')['__is_instance__'] && typeof $p['getattr'](opt, 'element')['__setattr__'] == 'function' ? $p['getattr'](opt, 'element')['__setattr__']('innerHTML', value) : $p['setattr']($p['getattr'](opt, 'element'), 'innerHTML', value); 
					self['appendChild'](opt);
				}
				if ($p['bool']($p['getattr'](self, 'readOnly'))) {
					self['__setitem__']('disabled', true);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['values']]);
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

				return $m['SelectOneEditBone'](moduleName, boneName, skelStructure['__getitem__'](boneName)['get']('readonly', false), skelStructure['__getitem__'](boneName)['get']('values', $p['dict']([])));
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
					if (self.prototype['__md5__'] !== 'd10dad81c6d7522e4071fa46b7010a35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$iter5_iter,$iter5_idx,$iter5_type,aoption;
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('val', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : (''))) : $p['setattr'](self, 'val', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : (''))); 
					$iter5_iter = $p['getattr'](self, '_children');
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						aoption = $iter5_nextval['$nextval'];
						if ($p['bool']($p['op_eq'](aoption['__getitem__']('value'), $p['getattr'](self, 'val')))) {
							aoption['__setitem__']('selected', true);
						}
					}
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
					if (self.prototype['__md5__'] !== 'd10dad81c6d7522e4071fa46b7010a35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var opt,$iter6_idx,$iter6_type,$iter6_array,$iter6_iter,$iter6_nextval;
				$iter6_iter = self['children']();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					opt = $iter6_nextval['$nextval'];
					if ($p['bool'](opt['__getitem__']('selected'))) {
						return $p['dict']([[$p['getattr'](self, 'boneName'), opt['__getitem__']('value')]]);
					}
				}
				return $p['dict']([]);
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
					if (self.prototype['__md5__'] !== 'd10dad81c6d7522e4071fa46b7010a35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['serializeForPost']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Select'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectOneEditBone', $p['tuple']($bases), $data);
		})();
		$m['ExtendedSelectOneSearch'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectone';
			$cls_definition['__md5__'] = '25d4f78cbeb81747193c34a60a77db8f';
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
					if (self.prototype['__md5__'] !== '25d4f78cbeb81747193c34a60a77db8f') {
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
				var $iter7_array,$iter7_nextval,$iter7_iter,v,o,$iter7_idx,k,$iter7_type;
				$pyjs_kwargs_call($p['$$super']($m['ExtendedSelectOneSearch'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extension', extension) : $p['setattr'](self, 'extension', extension); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterChangedEvent', $m['EventDispatcher']('filterChanged')) : $p['setattr'](self, 'filterChangedEvent', $m['EventDispatcher']('filterChanged')); 
				self['appendChild']($m['html5']['TextNode'](extension['__getitem__']('name')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionCb', $m['html5']['Select']()) : $p['setattr'](self, 'selectionCb', $m['html5']['Select']()); 
				self['appendChild']($p['getattr'](self, 'selectionCb'));
				o = $m['html5']['Option']();
				o['__setitem__']('value', '');
				o['appendChild']($m['html5']['TextNode']($m['translate']('Ignore')));
				self['selectionCb']['appendChild'](o);
				$iter7_iter = extension['__getitem__']('values')['items']();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
					k = $tupleassign5[0];
					v = $tupleassign5[1];
					o = $m['html5']['Option']();
					o['__setitem__']('value', k);
					o['appendChild']($m['html5']['TextNode'](v));
					self['selectionCb']['appendChild'](o);
				}
				self['sinkEvent']('onChange');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onChange', function(event) {
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
					if (self.prototype['__md5__'] !== '25d4f78cbeb81747193c34a60a77db8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['stopPropagation']();
				self['filterChangedEvent']['fire']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
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
					if (self.prototype['__md5__'] !== '25d4f78cbeb81747193c34a60a77db8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val;
				val = $p['getattr']($p['getattr'](self, 'selectionCb')['__getitem__']('options')['item']($p['getattr'](self, 'selectionCb')['__getitem__']('selectedIndex')), 'value');
				if ($p['bool'](!$p['bool'](val))) {
					if ($p['bool'](filter['keys']()['__contains__']($p['getattr'](self, 'extension')['__getitem__']('target')))) {
						filter['__delitem__']($p['getattr'](self, 'extension')['__getitem__']('target'));
					}
				}
				else {
					filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), val);
				}
				return filter;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['updateFilter'] = $method;
			$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and8,$and9,$or4,$or6,$or1,$or3,$or2,$and6,$and7,$and10,$or5;
				return ($p['bool']($and6=$p['isinstance'](extension, $p['dict']))?($p['bool']($and7=extension['keys']()['__contains__']('type'))?($p['bool']($or3=($p['bool']($and9=($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'select'))?$or1:extension['__getitem__']('type')['startswith']('select.')))?!$p['bool'](extension['get']('multiple', false)):$and9))?$or3:($p['bool']($or5=$p['op_eq'](extension['__getitem__']('type'), 'selectone'))?$or5:extension['__getitem__']('type')['startswith']('selectone.'))):$and7):$and6);
			}
	, 3, [null,null,['extension'],['view'],['modul']]);
			$cls_definition['canHandleExtension'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExtendedSelectOneSearch', $p['tuple']($bases), $data);
		})();
		$m['CheckForSelectOneBone'] = function(moduleName, boneName, skelStructure) {
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
			var $or7,$or9,$or8,$or12,$and12,$and11,$or11,$or10;
			return ($p['bool']($or9=($p['bool']($and11=($p['bool']($or7=$p['op_eq'](skelStructure['__getitem__'](boneName)['__getitem__']('type'), 'select'))?$or7:skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('select.')))?!$p['bool'](skelStructure['__getitem__'](boneName)['get']('multiple', false)):$and11))?$or9:($p['bool']($or11=$p['op_eq'](skelStructure['__getitem__'](boneName)['__getitem__']('type'), 'selectone'))?$or11:skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('selectone.')));
		};
		$m['CheckForSelectOneBone']['__name__'] = 'CheckForSelectOneBone';

		$m['CheckForSelectOneBone']['__bind_type__'] = 0;
		$m['CheckForSelectOneBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForSelectOneBone'], $m['SelectOneEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForSelectOneBone'], $m['SelectOneViewBoneDelegate']);
		$m['extendedSearchWidgetSelector']['insert']($constant_int_1, $p['getattr']($m['ExtendedSelectOneSearch'], 'canHandleExtension'), $m['ExtendedSelectOneSearch']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForSelectOneBone'], $m['SelectOneBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.selectone */


/* end module: bones.selectone */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
