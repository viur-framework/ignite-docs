/* start module: bones.selectmulti */
$pyjs['loaded_modules']['bones.selectmulti'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.selectmulti']['__was_initialized__']) return $pyjs['loaded_modules']['bones.selectmulti'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.selectmulti'];
	$m['__repr__'] = function() { return '<module: bones.selectmulti>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.selectmulti';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['selectmulti'] = $pyjs['loaded_modules']['bones.selectmulti'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['utils'] = $p['___import___']('utils', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['SelectMultiBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectmulti';
			$cls_definition['__md5__'] = 'e974957febe201aa5c092e6cf4466204';
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
					if (self.prototype['__md5__'] !== 'e974957febe201aa5c092e6cf4466204') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,value,$iter1_iter,fieldKey,result,$iter1_array;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					result = $p['list']();
					$iter1_iter = data['__getitem__'](field);
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						fieldKey = $iter1_nextval['$nextval'];
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['keys']()['__contains__'](fieldKey)))) {
							result['append'](fieldKey);
						}
						else {
							value = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['__getitem__'](fieldKey);
							if ($p['bool'](value)) {
								result['append'](value);
							}
						}
					}
					return ','['join'](result);
				}
				return $m['conf']['__getitem__']('empty_value');
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectMultiBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['SelectMultiViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectmulti';
			$cls_definition['__md5__'] = 'd92ce953e0a77ab4c85ba8775940232a';
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
					if (self.prototype['__md5__'] !== 'd92ce953e0a77ab4c85ba8775940232a') {
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

				$p['$$super']($m['SelectMultiViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== 'd92ce953e0a77ab4c85ba8775940232a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,fieldKey,i,$and1,$iter3_array,$add2,$add1,$and2,result,$iter3_type,ali,$sub2,$sub1,$iter3_nextval,options,$iter3_iter;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					result = $m['html5']['Ul']();
					options = function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,k,$collcomp1,$iter2_idx,v,$iter2_array;
	$collcomp1 = $p['dict']();
					$iter2_iter = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						$collcomp1['__setitem__'](k, v);
					}

	return $collcomp1;}();
					$iter3_iter = $p['enumerate'](data['__getitem__'](field));
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
						i = $tupleassign2[0];
						fieldKey = $tupleassign2[1];
						if ($p['bool'](($p['bool']($and1=$m['conf']['__getitem__']('maxMultiBoneEntries'))?($p['cmp']($p['__op_add']($add1=i,$add2=$constant_int_1), $m['conf']['__getitem__']('maxMultiBoneEntries')) == 1):$and1))) {
							ali = $m['html5']['Li']();
							ali['appendChild']($m['html5']['TextNode']($pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['__op_sub']($sub1=$p['len'](data['__getitem__'](field)),$sub2=$m['conf']['__getitem__']('maxMultiBoneEntries'))}, 'and {count} more'])));
							ali['__getitem__']('class')['append']('selectmulti_more_li');
							result['appendChild'](ali);
							break;
						}
						ali = $m['html5']['Li']();
						ali['appendChild']($m['html5']['TextNode'](options['get'](fieldKey, fieldKey)));
						ali['__setitem__']('Title', fieldKey);
						result['appendChild'](ali);
					}
					return result;
				}
				return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectMultiViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['SelectMultiEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectmulti';
			$cls_definition['__md5__'] = '9fa35b08307a8e786b6190442f525ce3';
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
					if (self.prototype['__md5__'] !== '9fa35b08307a8e786b6190442f525ce3') {
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
				var $iter5_nextval,$iter5_idx,aspan,$iter5_array,value,alabel,$iter5_iter,key,$iter5_type,acheckbox;
				$pyjs_kwargs_call($p['$$super']($m['SelectMultiEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				if ($p['bool']($p['isinstance'](values, $p['dict']))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', function(){
						var $iter4_nextval,k,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
					$iter4_iter = values['items']();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						$collcomp2['append']($p['tuple']([k, v]));
					}

	return $collcomp2;}()) : $p['setattr'](self, 'values', function(){
						var $iter4_nextval,k,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
					$iter4_iter = values['items']();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						$collcomp2['append']($p['tuple']([k, v]));
					}

	return $collcomp2;}()); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', values) : $p['setattr'](self, 'values', values); 
				}
				$iter5_iter = $p['getattr'](self, 'values');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					key = $tupleassign4[0];
					value = $tupleassign4[1];
					alabel = $m['html5']['Label']();
					acheckbox = $m['html5']['Input']();
					acheckbox['__setitem__']('type', 'checkbox');
					acheckbox['__setitem__']('name', key);
					alabel['appendChild'](acheckbox);
					aspan = $m['html5']['Span']();
					$p['getattr'](aspan, 'element')['__is_instance__'] && typeof $p['getattr'](aspan, 'element')['__setattr__'] == 'function' ? $p['getattr'](aspan, 'element')['__setattr__']('innerHTML', value) : $p['setattr']($p['getattr'](aspan, 'element'), 'innerHTML', value); 
					alabel['appendChild'](aspan);
					self['appendChild'](alabel);
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

				return $m['SelectMultiEditBone'](moduleName, boneName, skelStructure['__getitem__'](boneName)['get']('readonly', false), skelStructure['__getitem__'](boneName)['get']('values', $p['dict']([])));
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
					if (self.prototype['__md5__'] !== '9fa35b08307a8e786b6190442f525ce3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,alabel,$iter6_array,$iter6_iter,$iter6_nextval;
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('val', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ($p['list']([])))) : $p['setattr'](self, 'val', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ($p['list']([])))); 
					$iter6_iter = $p['getattr'](self, '_children');
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						alabel = $iter6_nextval['$nextval'];
						if ($p['bool']($p['getattr'](self, 'val')['__contains__']($p['getattr'](alabel, '_children')['__getitem__']($constant_int_0)['__getitem__']('name')))) {
							$p['getattr'](alabel, '_children')['__getitem__']($constant_int_0)['__setitem__']('checked', true);
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
					if (self.prototype['__md5__'] !== '9fa35b08307a8e786b6190442f525ce3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_nextval,$iter7_iter,$iter7_array,value,alabel,$iter7_idx,$iter7_type;
				value = $p['list']([]);
				$iter7_iter = $p['getattr'](self, '_children');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					alabel = $iter7_nextval['$nextval'];
					if ($p['bool']($p['getattr'](alabel, '_children')['__getitem__']($constant_int_0)['__getitem__']('checked'))) {
						value['append']($p['getattr'](alabel, '_children')['__getitem__']($constant_int_0)['__getitem__']('name'));
					}
				}
				return $p['dict']([[$p['getattr'](self, 'boneName'), value]]);
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
					if (self.prototype['__md5__'] !== '9fa35b08307a8e786b6190442f525ce3') {
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
					if (self.prototype['__md5__'] !== '9fa35b08307a8e786b6190442f525ce3') {
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
			return $p['_create_class']('SelectMultiEditBone', $p['tuple']($bases), $data);
		})();
		$m['ExtendedSelectMultiSearch'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectmulti';
			$cls_definition['__md5__'] = 'fd3367473301cdd11d3ea72aa81ad22e';
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
					if (self.prototype['__md5__'] !== 'fd3367473301cdd11d3ea72aa81ad22e') {
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
				var v,$iter8_idx,$iter8_array,o,$iter8_iter,$iter8_nextval,$iter8_type,k;
				$pyjs_kwargs_call($p['$$super']($m['ExtendedSelectMultiSearch'], self), '__init__', args, kwargs, [{}]);
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
				$iter8_iter = extension['__getitem__']('values')['items']();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
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
					if (self.prototype['__md5__'] !== 'fd3367473301cdd11d3ea72aa81ad22e') {
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
					if (self.prototype['__md5__'] !== 'fd3367473301cdd11d3ea72aa81ad22e') {
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
				var $or5,$or4,$or6,$or1,$or3,$or2,$and3,$and4,$and5,$and6,$and7;
				return ($p['bool']($and3=$p['isinstance'](extension, $p['dict']))?($p['bool']($and4=extension['keys']()['__contains__']('type'))?($p['bool']($or3=($p['bool']($and6=($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'select'))?$or1:extension['__getitem__']('type')['startswith']('select.')))?extension['get']('multiple', false):$and6))?$or3:($p['bool']($or5=$p['op_eq'](extension['__getitem__']('type'), 'selectmulti'))?$or5:extension['__getitem__']('type')['startswith']('selectmulti.'))):$and4):$and3);
			}
	, 3, [null,null,['extension'],['view'],['modul']]);
			$cls_definition['canHandleExtension'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExtendedSelectMultiSearch', $p['tuple']($bases), $data);
		})();
		$m['CheckForSelectMultiBone'] = function(moduleName, boneName, skelStructure) {
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
			var $and8,$or7,$and9,$or9,$or8,$or12,$or11,$or10;
			return ($p['bool']($or9=($p['bool']($and8=($p['bool']($or7=$p['op_eq'](skelStructure['__getitem__'](boneName)['__getitem__']('type'), 'select'))?$or7:skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('select.')))?skelStructure['__getitem__'](boneName)['get']('multiple', false):$and8))?$or9:($p['bool']($or11=$p['op_eq'](skelStructure['__getitem__'](boneName)['__getitem__']('type'), 'selectmulti'))?$or11:skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('selectmulti.')));
		};
		$m['CheckForSelectMultiBone']['__name__'] = 'CheckForSelectMultiBone';

		$m['CheckForSelectMultiBone']['__bind_type__'] = 0;
		$m['CheckForSelectMultiBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForSelectMultiBone'], $m['SelectMultiEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForSelectMultiBone'], $m['SelectMultiViewBoneDelegate']);
		$m['extendedSearchWidgetSelector']['insert']($constant_int_1, $p['getattr']($m['ExtendedSelectMultiSearch'], 'canHandleExtension'), $m['ExtendedSelectMultiSearch']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForSelectMultiBone'], $m['SelectMultiBoneExtractor']);
		$m['AccessMultiSelectBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.selectmulti';
			$cls_definition['__md5__'] = 'bb8e36c75efdf75319bbbb941410f658';
			$cls_definition['states'] = $p['list'](['view', 'edit', 'add', 'delete']);
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
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
				var checkbox,module,$iter10_nextval,value,$iter10_iter,li,$iter13_array,span,$$label,state,$iter11_idx,$iter13_type,$iter13_iter,$iter11_iter,$iter12_array,flag,$iter11_array,$iter11_nextval,$iter13_nextval,$iter12_type,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,ul,$iter10_type,$iter12_idx,$iter10_idx,$iter13_idx;
				$pyjs_kwargs_call($p['$$super']($m['AccessMultiSelectBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', moduleName) : $p['setattr'](self, 'moduleName', moduleName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				$p['printFunc']([values], 1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', function(){
					var $iter9_iter,$collcomp3,k,$iter9_nextval,$iter9_idx,$iter9_type,v,$iter9_array;
	$collcomp3 = $p['dict']();
				$iter9_iter = values;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
					k = $tupleassign6[0];
					v = $tupleassign6[1];
					$collcomp3['__setitem__'](k, v);
				}

	return $collcomp3;}()) : $p['setattr'](self, 'values', function(){
					var $iter9_iter,$collcomp3,k,$iter9_nextval,$iter9_idx,$iter9_type,v,$iter9_array;
	$collcomp3 = $p['dict']();
				$iter9_iter = values;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
					k = $tupleassign6[0];
					v = $tupleassign6[1];
					$collcomp3['__setitem__'](k, v);
				}

	return $collcomp3;}()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modules', $p['dict']([])) : $p['setattr'](self, 'modules', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modulesbox', $p['dict']([])) : $p['setattr'](self, 'modulesbox', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flags', $p['dict']([])) : $p['setattr'](self, 'flags', $p['dict']([])); 
				self['sinkEvent']('onClick');
				$iter10_iter = $p['getattr'](self, 'values');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					value = $iter10_nextval['$nextval'];
					module = self['parseskelaccess'](value);
					if ($p['bool'](!$p['bool'](module))) {
						$p['getattr'](self, 'flags')['__setitem__'](value, null);
					}
					else if ($p['bool'](!$p['bool'](self['modules']['keys']()['__contains__'](module['__getitem__']($constant_int_0))))) {
						$p['getattr'](self, 'modules')['__setitem__'](module['__getitem__']($constant_int_0), $p['dict']([]));
					}
				}
				$iter11_iter = $p['sorted'](self['flags']['keys']());
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					flag = $iter11_nextval['$nextval'];
					$$label = $m['html5']['Label']();
					checkbox = $m['html5']['Input']();
					checkbox['__setitem__']('type', 'checkbox');
					checkbox['__setitem__']('name', flag);
					$$label['appendChild'](checkbox);
					$p['getattr'](self, 'flags')['__setitem__'](flag, checkbox);
					span = $m['html5']['Span']();
					span['appendChild']($m['html5']['TextNode'](flag));
					$$label['appendChild'](span);
					self['appendChild']($$label);
				}
				$iter12_iter = $p['sorted'](self['modules']['keys']());
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					module = $iter12_nextval['$nextval'];
					$$label = $m['html5']['Label']();
					span = $m['html5']['Span']();
					span['appendChild']($m['html5']['TextNode'](module));
					$$label['appendChild'](span);
					ul = $m['html5']['Ul']();
					checkbox = $m['html5']['Input']();
					checkbox['__setitem__']('type', 'checkbox');
					checkbox['__setitem__']('name', module);
					$p['getattr'](self, 'modulesbox')['__setitem__'](module, checkbox);
					li = $m['html5']['Li']();
					li['appendChild'](checkbox);
					ul['appendChild'](li);
					$iter13_iter = $p['getattr'](self, 'states');
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						state = $iter13_nextval['$nextval'];
						li = $m['html5']['Li']();
						li['__setitem__']('class', $p['list'](['access-state', state]));
						if ($p['bool'](!$p['getattr'](self, 'values')['__contains__']($p['sprintf']('%s-%s', $p['tuple']([module, state]))))) {
							li['__getitem__']('class')['append']('disabled');
						}
						ul['appendChild'](li);
						$p['getattr'](self, 'modules')['__getitem__'](module)['__setitem__'](state, li);
					}
					$$label['appendChild'](ul);
					self['appendChild']($$label);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['values']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('parseskelaccess', function(value) {
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,$add4,$add3,state,$add6,$iter14_iter,$add5,$iter14_idx,$iter14_nextval;
				$iter14_iter = $p['getattr'](self, 'states');
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					state = $iter14_nextval['$nextval'];
					if ($p['bool'](value['endswith']($p['__op_add']($add3='-',$add4=state)))) {
						return $p['tuple']([$p['__getslice'](value, $constant_int_0, (typeof ($usub1=$p['__op_add']($add5=$p['len'](state),$add6=$constant_int_1))=='number'?
							-$usub1:
							$p['op_usub']($usub1))), state]);
					}
				}
				return false;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['parseskelaccess'] = $method;
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,module,$iter16_idx,toggle,$iter17_type,$iter16_iter,$iter17_iter,$iter15_iter,$iter16_type,$iter18_idx,rm,$iter18_nextval,$iter17_nextval,$iter18_iter,toggles,$iter15_array,$iter17_array,$iter16_nextval,$iter16_array,$iter18_array,$iter15_idx,$iter15_nextval,$iter15_type,$iter17_idx;
				$iter15_iter = self['modules']['items']();
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter15_nextval['$nextval'], 2, null);
					module = $tupleassign7[0];
					toggles = $tupleassign7[1];
					$iter16_iter = toggles['values']();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						toggle = $iter16_nextval['$nextval'];
						if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, toggle))) {
							if ($p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('disabled')))) {
								if ($p['bool'](toggle['__getitem__']('class')['__contains__']('active'))) {
									toggle['__getitem__']('class')['remove']('active');
									if ($p['bool'](toggle['__getitem__']('class')['__contains__']('view'))) {
										$iter17_iter = $p['list'](['add', 'delete', 'edit']);
										$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
										while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
											rm = $iter17_nextval['$nextval'];
											$p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](rm)['__getitem__']('class')['remove']('active');
										}
									}
								}
								else {
									toggle['__getitem__']('class')['append']('active');
								}
							}
							self['checkmodulesbox'](module);
							event['preventDefault']();
							return null;
						}
					}
					if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'modulesbox')['__getitem__'](module)))) {
						$p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']()['__getitem__']('class')['remove']('partly');
						$iter18_iter = toggles['values']();
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							toggle = $iter18_nextval['$nextval'];
							if ($p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('disabled')))) {
								if ($p['bool']($p['getattr'](self, 'modulesbox')['__getitem__'](module)['__getitem__']('checked'))) {
									if ($p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('active')))) {
										toggle['__getitem__']('class')['append']('active');
									}
								}
								else {
									toggle['__getitem__']('class')['remove']('active');
								}
							}
						}
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('checkmodulesbox', function(module) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var on,all,$iter19_idx,item,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$add10,$add7,$or13,$add8,$add9,$or14;
				on = $constant_int_0;
				all = $constant_int_0;
				$iter19_iter = $p['getattr'](self, 'modules')['__getitem__'](module)['values']();
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					item = $iter19_nextval['$nextval'];
					if ($p['bool'](!$p['bool'](item['__getitem__']('class')['__contains__']('disabled')))) {
						all = $p['__op_add']($add7=all,$add8=$constant_int_1);
					}
					if ($p['bool'](item['__getitem__']('class')['__contains__']('active'))) {
						on = $p['__op_add']($add9=on,$add10=$constant_int_1);
					}
				}
				if ($p['bool'](($p['bool']($or13=$p['op_eq'](on, $constant_int_0))?$or13:$p['op_eq'](on, all)))) {
					$p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']()['__getitem__']('class')['remove']('partly');
					$p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('indeterminate', false);
					$p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('checked', $p['op_eq'](on, all));
				}
				else {
					$p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('checked', false);
					$p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('indeterminate', true);
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']()['__getitem__']('class')['__contains__']('partly')))) {
						$p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']()['__getitem__']('class')['append']('partly');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['module']]);
			$cls_definition['checkmodulesbox'] = $method;
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

				return $m['AccessMultiSelectBone'](moduleName, boneName, skelStructure['__getitem__'](boneName)['get']('readonly', false), skelStructure['__getitem__'](boneName)['get']('values', $p['list']([])));
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_nextval,$iter22_array,module,$iter22_idx,$iter22_type,$iter20_array,state,$iter22_iter,$iter20_iter,$iter21_idx,$iter21_nextval,$iter22_nextval,$iter21_iter,$iter20_type,name,elem,$iter21_type,$iter20_idx,values,$iter21_array;
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					values = ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ($p['list']([])));
					$iter20_iter = self['flags']['items']();
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						var $tupleassign8 = $p['__ass_unpack']($iter20_nextval['$nextval'], 2, null);
						name = $tupleassign8[0];
						elem = $tupleassign8[1];
						if ($p['bool'](values['__contains__'](name))) {
							elem['__setitem__']('checked', true);
						}
					}
					$iter21_iter = $p['getattr'](self, 'modules');
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						module = $iter21_nextval['$nextval'];
						$iter22_iter = $p['getattr'](self, 'states');
						$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
						while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
							state = $iter22_nextval['$nextval'];
							if ($p['bool'](values['__contains__']($p['sprintf']('%s-%s', $p['tuple']([module, state]))))) {
								if ($p['bool'](!$p['bool']($p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['__contains__']('active')))) {
									$p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['append']('active');
								}
							}
						}
						self['checkmodulesbox'](module);
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter23_nextval,$iter24_idx,$iter23_iter,$iter25_array,$iter25_iter,$iter25_nextval,elem,ret,$iter24_type,state,$iter24_array,$iter23_array,module,$iter25_idx,$iter23_idx,$iter25_type,$iter24_iter,$iter24_nextval,name;
				ret = $p['list']([]);
				$iter23_iter = self['flags']['items']();
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
					var $tupleassign9 = $p['__ass_unpack']($iter23_nextval['$nextval'], 2, null);
					name = $tupleassign9[0];
					elem = $tupleassign9[1];
					if ($p['bool'](elem['__getitem__']('checked'))) {
						ret['append'](name);
					}
				}
				$iter24_iter = $p['getattr'](self, 'modules');
				$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
				while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
					module = $iter24_nextval['$nextval'];
					$iter25_iter = $p['getattr'](self, 'states');
					$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
					while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
						state = $iter25_nextval['$nextval'];
						if ($p['bool']($p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['__contains__']('active'))) {
							ret['append']($p['sprintf']('%s-%s', $p['tuple']([module, state])));
						}
					}
				}
				return $p['dict']([[$p['getattr'](self, 'boneName'), ret]]);
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
					if (self.prototype['__md5__'] !== 'bb8e36c75efdf75319bbbb941410f658') {
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
			return $p['_create_class']('AccessMultiSelectBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForAccessMultiSelectBone'] = function(moduleName, boneName, skelStructure) {
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

			$p['printFunc']([$p['tuple']([moduleName, boneName, skelStructure['__getitem__'](boneName)['__getitem__']('type'), $p['list'](['select.access', 'selectmulti.access'])['__contains__'](skelStructure['__getitem__'](boneName)['__getitem__']('type'))])], 1);
			return $p['list'](['select.access', 'selectmulti.access'])['__contains__'](skelStructure['__getitem__'](boneName)['__getitem__']('type'));
		};
		$m['CheckForAccessMultiSelectBone']['__name__'] = 'CheckForAccessMultiSelectBone';

		$m['CheckForAccessMultiSelectBone']['__bind_type__'] = 0;
		$m['CheckForAccessMultiSelectBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['editBoneSelector']['insert']($constant_int_4, $m['CheckForAccessMultiSelectBone'], $m['AccessMultiSelectBone']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.selectmulti */


/* end module: bones.selectmulti */


/*
PYJS_DEPS: ['html5', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
