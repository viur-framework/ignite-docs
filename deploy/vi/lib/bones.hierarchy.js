/* start module: bones.hierarchy */
$pyjs['loaded_modules']['bones.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['bones.hierarchy'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.hierarchy'];
	$m['__repr__'] = function() { return '<module: bones.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.hierarchy';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['hierarchy'] = $pyjs['loaded_modules']['bones.hierarchy'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_5 = new $p['int'](5);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['HierarchyWidget'] = $p['___import___']('widgets.hierarchy.HierarchyWidget', 'bones', null, false);
		$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
		$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
		$m['RelationalViewBoneDelegate'] = $p['___import___']('bones.relational.RelationalViewBoneDelegate', 'bones', null, false);
		$m['RelationalBoneExtractor'] = $p['___import___']('bones.relational.RelationalBoneExtractor', 'bones', null, false);
		$m['HierarchyMultiSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.hierarchy';
			$cls_definition['__md5__'] = '57d1a783a0c83c07cd93a7897300c4cc';
			$method = $pyjs__bind_method2('onShowSelector', function() {
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
					if (self.prototype['__md5__'] !== '57d1a783a0c83c07cd93a7897300c4cc') {
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
				var currentSelector;
				currentSelector = $pyjs_kwargs_call(null, $m['HierarchyWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '57d1a783a0c83c07cd93a7897300c4cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setSelection'](function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,x,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					x = $iter1_nextval['$nextval'];
					$collcomp1['append']($p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', $p['dict']([])]]));
				}

	return $collcomp1;}());
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			var $bases = new Array($m['RelationalMultiSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HierarchyMultiSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['HierarchySingleSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.hierarchy';
			$cls_definition['__md5__'] = 'f9ec5e1539d40bc2e9e4fa47cd69a2e1';
			$method = $pyjs__bind_method2('onShowSelector', function() {
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
					if (self.prototype['__md5__'] !== 'f9ec5e1539d40bc2e9e4fa47cd69a2e1') {
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
				var currentSelector;
				currentSelector = $pyjs_kwargs_call(null, $m['HierarchyWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f9ec5e1539d40bc2e9e4fa47cd69a2e1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setSelection'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,x,$iter2_array;
	$collcomp2 = $p['list']();
				$iter2_iter = selection;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					$collcomp2['append']($p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', $p['dict']([])]]));
				}

	return $collcomp2;}()['__getitem__']($constant_int_0));
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			var $bases = new Array($m['RelationalSingleSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HierarchySingleSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForHierarchyBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
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
			var $and1,$and2,$and4,$and3,isMultiple;
			isMultiple = ($p['bool']($and1=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and1);
			return ($p['bool']($and3=(typeof CheckForHierarchyBone == "undefined"?$m['CheckForHierarchyBone']:CheckForHierarchyBone)(moduleName, boneName, skelStructure))?!$p['bool'](isMultiple):$and3);
		};
		$m['CheckForHierarchyBoneSingleSelection']['__name__'] = 'CheckForHierarchyBoneSingleSelection';

		$m['CheckForHierarchyBoneSingleSelection']['__bind_type__'] = 0;
		$m['CheckForHierarchyBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForHierarchyBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
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
			var $and8,$and5,$and6,$and7,isMultiple;
			isMultiple = ($p['bool']($and5=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and5);
			return ($p['bool']($and7=(typeof CheckForHierarchyBone == "undefined"?$m['CheckForHierarchyBone']:CheckForHierarchyBone)(moduleName, boneName, skelStructure))?isMultiple:$and7);
		};
		$m['CheckForHierarchyBoneMultiSelection']['__name__'] = 'CheckForHierarchyBoneMultiSelection';

		$m['CheckForHierarchyBoneMultiSelection']['__bind_type__'] = 0;
		$m['CheckForHierarchyBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForHierarchyBone'] = function(moduleName, boneName, skelStucture) {
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

			return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('hierarchy.');
		};
		$m['CheckForHierarchyBone']['__name__'] = 'CheckForHierarchyBone';

		$m['CheckForHierarchyBone']['__bind_type__'] = 0;
		$m['CheckForHierarchyBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForHierarchyBoneSingleSelection'], $m['HierarchySingleSelectionBone']);
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForHierarchyBoneMultiSelection'], $m['HierarchyMultiSelectionBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForHierarchyBone'], $m['RelationalViewBoneDelegate']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForHierarchyBone'], $m['RelationalBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.hierarchy */


/* end module: bones.hierarchy */


/*
PYJS_DEPS: ['config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'widgets.hierarchy.HierarchyWidget', 'widgets', 'widgets.hierarchy', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalViewBoneDelegate', 'bones.relational.RelationalBoneExtractor']
*/
