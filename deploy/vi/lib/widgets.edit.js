/* start module: widgets.edit */
$pyjs['loaded_modules']['widgets.edit'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.edit']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.edit'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.edit'];
	$m['__repr__'] = function() { return '<module: widgets.edit>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.edit';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['edit'] = $pyjs['loaded_modules']['widgets.edit'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_401 = new $p['int'](401);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['A'] = $p['___import___']('html5.a.A', 'widgets', null, false);
		$m['Fieldset'] = $p['___import___']('html5.form.Fieldset', 'widgets', null, false);
		$m['YesNoDialog'] = $p['___import___']('html5.ext.YesNoDialog', 'widgets', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'widgets', null, false);
		$m['ToolTip'] = $p['___import___']('widgets.tooltip.ToolTip', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['ListWidget'] = $p['___import___']('widgets.list.ListWidget', 'widgets', null, false);
		$m['InvalidBoneValueException'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.edit';
			$cls_definition['__md5__'] = '7b0abb3d9aa29f9486d97b0bfd7a8054';
			var $bases = new Array($p['ValueError']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('InvalidBoneValueException', $p['tuple']($bases), $data);
		})();
		$m['InternalEdit'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.edit';
			$cls_definition['__md5__'] = '4a9fd22b26cf321350a24e912fc43f78';
			$method = $pyjs__bind_method2('__init__', function(skelStructure, values, errorInformation, readOnly, context, defaultCat, module) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					skelStructure = arguments[1];
					values = arguments[2];
					errorInformation = arguments[3];
					readOnly = arguments[4];
					context = arguments[5];
					defaultCat = arguments[6];
					module = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof values == 'undefined') values=arguments['callee']['__args__'][4][1];
				if (typeof errorInformation == 'undefined') errorInformation=arguments['callee']['__args__'][5][1];
				if (typeof readOnly == 'undefined') readOnly=arguments['callee']['__args__'][6][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][7][1];
				if (typeof defaultCat == 'undefined') defaultCat=arguments['callee']['__args__'][8][1];
				if (typeof module == 'undefined') module=arguments['callee']['__args__'][9][1];

				$p['$$super']($m['InternalEdit'], self)['__init__']();
				self['sinkEvent']('onChange', 'onKeyDown');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editIdx', $constant_int_1) : $p['setattr'](self, 'editIdx', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('skelStructure', skelStructure) : $p['setattr'](self, 'skelStructure', skelStructure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('values', values) : $p['setattr'](self, 'values', values); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('errorInformation', errorInformation) : $p['setattr'](self, 'errorInformation', errorInformation); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultCat', defaultCat) : $p['setattr'](self, 'defaultCat', defaultCat); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('form', self) : $p['setattr'](self, 'form', self); 
				$pyjs_kwargs_call(self, 'renderStructure', null, null, [{'readOnly':readOnly}]);
				self['unserialize'](values);
				return null;
			}
	, 1, [null,null,['self'],['skelStructure'],['values', null],['errorInformation', null],['readOnly', false],['context', null],['defaultCat', ''],['module', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('renderStructure', function(readOnly) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					readOnly = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof readOnly == 'undefined') readOnly=arguments['callee']['__args__'][3][1];
				var $and10,$and8,descrLbl,$iter6_array,$and14,$lambda1,$and9,$iter6_type,$iter3_type,$or9,$or7,firstCat,tmpList,$or6,fshref,$iter4_type,$or1,$iter6_iter,$iter4_iter,defaultCat,tmp,$iter4_idx,$iter3_idx,$or8,$iter6_idx,$iter2_iter,t,$iter3_iter,fieldSets,$iter6_nextval,wdgGen,$iter3_array,$or10,$or5,$or4,widget,fs,$iter2_type,$or3,$or2,tmpDict,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$iter2_idx,$and11,$and16,$and17,key,$and15,$and18,$iter3_nextval,legend,$iter2_nextval,$iter4_nextval,k,cat,$add2,$add1,bone,v,$iter4_array,currRow,section,$iter2_array;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bones', $p['dict']([])) : $p['setattr'](self, 'bones', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('containers', $p['dict']([])) : $p['setattr'](self, 'containers', $p['dict']([])); 
				tmpDict = function(){
					var $iter1_nextval,$iter1_type,k,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
				$iter1_iter = $p['getattr'](self, 'skelStructure');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					$collcomp1['__setitem__'](k, v);
				}

	return $collcomp1;}();
				fieldSets = $p['dict']([]);
				currRow = $constant_int_0;
				defaultCat = $p['getattr'](self, 'defaultCat');
				firstCat = true;
				$iter2_iter = $p['getattr'](self, 'skelStructure');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					key = $tupleassign2[0];
					bone = $tupleassign2[1];
					if ($p['bool'](readOnly)) {
						tmpDict['__getitem__'](key)['__setitem__']('readonly', true);
					}
					cat = defaultCat;
					if ($p['bool'](($p['bool']($and1=bone['keys']()['__contains__']('params'))?($p['bool']($and2=$p['isinstance'](bone['__getitem__']('params'), $p['dict']))?bone['__getitem__']('params')['keys']()['__contains__']('category'):$and2):$and1))) {
						cat = bone['__getitem__']('params')['__getitem__']('category');
					}
					if ($p['bool'](($p['bool']($and4=!$p['op_is'](cat, null))?!$p['bool'](fieldSets['keys']()['__contains__'](cat)):$and4))) {
						fs = $m['html5']['Fieldset']();
						fs['__setitem__']('class', cat);
						if ($p['bool'](firstCat)) {
							fs['__getitem__']('class')['append']('active');
							firstCat = false;
							if ($p['bool']($p['op_is']($p['getattr'](self, 'form'), self))) {
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('form', $m['html5']['Form']()) : $p['setattr'](self, 'form', $m['html5']['Form']()); 
								self['appendChild']($p['getattr'](self, 'form'));
							}
						}
						fs['__setitem__']('name', ($p['bool']($or1=cat)?$or1:'empty'));
						legend = $m['html5']['Legend']();
						fshref = (typeof fieldset_A == "undefined"?$m['fieldset_A']:fieldset_A)();
						fshref['appendChild']($m['html5']['TextNode'](cat));
						legend['appendChild'](fshref);
						fs['appendChild'](legend);
						section = $m['html5']['Section']();
						fs['appendChild'](section);
						fs['__is_instance__'] && typeof fs['__setattr__'] == 'function' ? fs['__setattr__']('_section', section) : $p['setattr'](fs, '_section', section); 
						fieldSets['__setitem__'](cat, fs);
					}
					wdgGen = $m['editBoneSelector']['select']($p['getattr'](self, 'module'), key, tmpDict);
					widget = wdgGen['fromSkelStructure']($p['getattr'](self, 'module'), key, tmpDict);
					widget['__setitem__']('id', $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), null, 'internal', ($p['bool']($or3=cat)?$or3:'empty'), key])));
					descrLbl = $m['html5']['Label'](bone['__getitem__']('descr'));
					descrLbl['__getitem__']('class')['append'](key);
					descrLbl['__getitem__']('class')['append'](bone['__getitem__']('type')['$$replace']('.', '_'));
					descrLbl['__setitem__']('for', $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), null, 'internal', ($p['bool']($or5=cat)?$or5:'empty'), key])));
					if ($p['bool'](bone['__getitem__']('required'))) {
						descrLbl['__getitem__']('class')['append']('is_required');
					}
					if ($p['bool'](($p['bool']($and6=bone['__getitem__']('required'))?($p['bool']($or7=!$p['op_is'](bone['__getitem__']('error'), null))?$or7:($p['bool']($and8=$p['getattr'](self, 'errorInformation'))?self['errorInformation']['keys']()['__contains__'](key):$and8)):$and6))) {
						descrLbl['__getitem__']('class')['append']('is_invalid');
						if ($p['bool'](bone['__getitem__']('error'))) {
							descrLbl['__setitem__']('title', bone['__getitem__']('error'));
						}
						else {
							descrLbl['__setitem__']('title', $p['getattr'](self, 'errorInformation')['__getitem__'](key));
						}
						if ($p['bool'](($p['bool']($and10=fieldSets)?fieldSets['__contains__'](cat):$and10))) {
							fieldSets['__getitem__'](cat)['__getitem__']('class')['append']('is_incomplete');
						}
					}
					if ($p['bool'](($p['bool']($and12=bone['__getitem__']('required'))?!$p['bool'](($p['bool']($or9=!$p['op_is'](bone['__getitem__']('error'), null))?$or9:($p['bool']($and14=$p['getattr'](self, 'errorInformation'))?self['errorInformation']['keys']()['__contains__'](key):$and14))):$and12))) {
						descrLbl['__getitem__']('class')['append']('is_valid');
					}
					if ($p['bool'](($p['bool']($and16=bone['keys']()['__contains__']('params'))?($p['bool']($and17=$p['isinstance'](bone['__getitem__']('params'), $p['dict']))?bone['__getitem__']('params')['keys']()['__contains__']('tooltip'):$and17):$and16))) {
						tmp = $m['html5']['Span']();
						tmp['appendChild'](descrLbl);
						tmp['appendChild']($pyjs_kwargs_call(null, $m['ToolTip'], null, null, [{'longText':bone['__getitem__']('params')['__getitem__']('tooltip')}]));
						descrLbl = tmp;
					}
					$p['getattr'](self, 'containers')['__setitem__'](key, $m['html5']['Div']());
					$p['getattr'](self, 'containers')['__getitem__'](key)['appendChild'](descrLbl);
					$p['getattr'](self, 'containers')['__getitem__'](key)['appendChild'](widget);
					$p['getattr'](self, 'containers')['__getitem__'](key)['addClass']('bone', $p['sprintf']('bone_%s', key), bone['__getitem__']('type')['$$replace']('.', '_'));
					if ($p['bool'](bone['__getitem__']('type')['__contains__']('.'))) {
						$iter3_iter = bone['__getitem__']('type')['$$split']('.');
						$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
						while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
							t = $iter3_nextval['$nextval'];
							$p['getattr'](self, 'containers')['__getitem__'](key)['addClass'](t);
						}
					}
					if ($p['bool'](!$p['op_is'](cat, null))) {
						fieldSets['__getitem__'](cat)['_section']['appendChild']($p['getattr'](self, 'containers')['__getitem__'](key));
					}
					else {
						self['form']['appendChild']($p['getattr'](self, 'containers')['__getitem__'](key));
					}
					currRow = $p['__op_add']($add1=currRow,$add2=$constant_int_1);
					$p['getattr'](self, 'bones')['__setitem__'](key, widget);
					if ($p['bool'](!$p['bool'](bone['__getitem__']('visible')))) {
						$p['getattr'](self, 'containers')['__getitem__'](key)['hide']();
					}
				}
				if ($p['bool']($p['op_eq']($p['len'](fieldSets), $constant_int_1))) {
					$iter4_iter = fieldSets['items']();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						if ($p['bool'](!$p['bool'](v['__getitem__']('class')['__contains__']('active')))) {
							v['__getitem__']('class')['append']('active');
						}
					}
				}
				tmpList = function(){
					var $iter5_nextval,$iter5_idx,k,v,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['list']();
				$iter5_iter = fieldSets['items']();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					k = $tupleassign4[0];
					v = $tupleassign4[1];
					$collcomp2['append']($p['tuple']([k, v]));
				}

	return $collcomp2;}();
				var 				$lambda1 = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x['__getitem__']($constant_int_0);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['x']];
				$pyjs_kwargs_call(tmpList, 'sort', null, null, [{'key':$lambda1}]);
				$iter6_iter = tmpList;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
					k = $tupleassign5[0];
					v = $tupleassign5[1];
					self['form']['appendChild'](v);
					v['__is_instance__'] && typeof v['__setattr__'] == 'function' ? v['__setattr__']('_section', null) : $p['setattr'](v, '_section', null); 
				}
				return null;
			}
	, 1, [null,null,['self'],['readOnly', false]]);
			$cls_definition['renderStructure'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function(validityCheck) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					validityCheck = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof validityCheck == 'undefined') validityCheck=arguments['callee']['__args__'][3][1];
				var key,$iter7_nextval,res,$iter7_array,$pyjs_try_err,$iter7_idx,$iter7_iter,$iter7_type,lbl,bone;
				res = $p['dict']([]);
				$iter7_iter = self['bones']['items']();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
					key = $tupleassign6[0];
					bone = $tupleassign6[1];
					try {
						res['update'](bone['serializeForPost']());
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
							if ($p['bool'](validityCheck)) {
								lbl = $p['getattr'](bone['parent'](), '_children')['__getitem__']($constant_int_0);
								if ($p['bool'](lbl['__getitem__']('class')['__contains__']('is_valid'))) {
									lbl['__getitem__']('class')['remove']('is_valid');
								}
								lbl['__getitem__']('class')['append']('is_invalid');
								self['actionbar']['resetLoadingState']();
								return null;
							}
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return res;
			}
	, 1, [null,null,['self'],['validityCheck', false]]);
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
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,res,$iter8_array,$iter8_iter,$pyjs_try_err,$iter8_nextval,key,e,$iter8_type,bone;
				res = $p['dict']([]);
				$iter8_iter = self['bones']['items']();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
					key = $tupleassign7[0];
					bone = $tupleassign7[1];
					try {
						res['update'](bone['serializeForDocument']());
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
							e = $pyjs_try_err;
							res['__setitem__'](key, $p['str'](e));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return res;
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('doSave', function(closeOnSuccess) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					closeOnSuccess = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof closeOnSuccess != 'undefined') {
						if (closeOnSuccess !== null && typeof closeOnSuccess['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = closeOnSuccess;
							closeOnSuccess = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof closeOnSuccess == 'undefined') closeOnSuccess=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeOnSuccess', closeOnSuccess) : $p['setattr'](self, 'closeOnSuccess', closeOnSuccess); 
				return self['serializeForPost'](true);
			}
	, 1, ['args',['kwargs'],['self'],['closeOnSuccess', false]]);
			$cls_definition['doSave'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data) {
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
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				var $and20,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$and19,$iter9_array,bone;
				$iter9_iter = self['bones']['values']();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					bone = $iter9_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and19=$p['dir'](bone)['__contains__']('setContext'))?$p['callable']($p['getattr'](bone, 'setContext')):$and19))) {
						bone['setContext']($p['getattr'](self, 'context'));
					}
					if ($p['bool'](!$p['op_is'](data, null))) {
						bone['unserialize'](data);
					}
				}
				$m['DeferredCall']($p['getattr'](self, 'performLogics'));
				return null;
			}
	, 1, [null,null,['self'],['data', null]]);
			$cls_definition['unserialize'] = $method;
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
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DeferredCall']($p['getattr'](self, 'performLogics'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
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
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('performLogics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a9fd22b26cf321350a24e912fc43f78') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_nextval,$iter10_nextval,res,$and21,fields,$iter11_type,event,$iter10_array,$iter11_array,key,$iter11_iter,$iter10_type,$and22,$iter10_iter,$iter11_idx,$iter10_idx,logic,desc;
				fields = self['serializeForDocument']();
				$iter10_iter = $p['getattr'](self, 'skelStructure');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					var $tupleassign8 = $p['__ass_unpack']($iter10_nextval['$nextval'], 2, null);
					key = $tupleassign8[0];
					desc = $tupleassign8[1];
					if ($p['bool'](($p['bool']($and21=desc['get']('params'))?desc['__getitem__']('params'):$and21))) {
						$iter11_iter = $p['list'](['logic.visibleIf', 'logic.readonlyIf', 'logic.evaluate']);
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							event = $iter11_nextval['$nextval'];
							logic = desc['__getitem__']('params')['get'](event);
							if ($p['bool'](!$p['bool'](logic))) {
								continue;
							}
							if ($p['bool']($p['isinstance'](logic, $p['str']))) {
								desc['__getitem__']('params')['__setitem__'](event, $m['conf']['__getitem__']('logics')['compile'](logic));
								if ($p['bool']($p['op_is'](desc['__getitem__']('params')['__getitem__'](event), null))) {
									(typeof alert == "undefined"?$m['alert']:alert)($p['sprintf']('ViUR logics: Parse error in >%s<', logic));
									continue;
								}
								logic = desc['__getitem__']('params')['__getitem__'](event);
							}
							res = $m['conf']['__getitem__']('logics')['execute'](logic, fields);
							if ($p['bool']($p['op_eq'](event, 'logic.evaluate'))) {
								$p['getattr'](self, 'bones')['__getitem__'](key)['unserialize']($p['dict']([[key, res]]));
							}
							else if ($p['bool'](res)) {
								if ($p['bool']($p['op_eq'](event, 'logic.visibleIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['show']();
								}
								else if ($p['bool']($p['op_eq'](event, 'logic.readonlyIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['disable']();
								}
							}
							else {
								if ($p['bool']($p['op_eq'](event, 'logic.visibleIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['hide']();
								}
								else if ($p['bool']($p['op_eq'](event, 'logic.readonlyIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['enable']();
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['performLogics'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('InternalEdit', $p['tuple']($bases), $data);
		})();
		$m['parseHashParameters'] = function(src, prefix) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof prefix == 'undefined') prefix=arguments['callee']['__args__'][3][1];
			var $iter15_array,$iter15_iter,newRes,keys,res,$iter12_type,$iter15_type,$iter12_array,processedPrefixes,$iter12_iter,$iter15_idx,$iter15_nextval,v,$and23,k,newPrefix,$iter12_idx,$iter12_nextval,$and24;
			res = $p['dict']([]);
			processedPrefixes = $p['list']([]);
			$iter12_iter = src['items']();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				var $tupleassign9 = $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
				k = $tupleassign9[0];
				v = $tupleassign9[1];
				if ($p['bool'](($p['bool']($and23=prefix)?!$p['bool'](k['startswith'](prefix)):$and23))) {
					continue;
				}
				if ($p['bool'](prefix)) {
					k = k['$$replace'](prefix, '');
				}
				if ($p['bool'](!$p['bool'](k['__contains__']('.')))) {
					if ($p['bool'](res['keys']()['__contains__'](k))) {
						if ($p['bool'](!$p['bool']($p['isinstance'](res['__getitem__'](k), $p['list'])))) {
							res['__setitem__'](k, $p['list']([res['__getitem__'](k)]));
						}
						res['__getitem__'](k)['append'](v);
					}
					else {
						res['__setitem__'](k, v);
					}
				}
				else {
					newPrefix = $p['__getslice'](k, 0, k['find']('.'));
					if ($p['bool'](processedPrefixes['__contains__'](newPrefix))) {
						continue;
					}
					processedPrefixes['append'](newPrefix);
					if ($p['bool'](res['keys']()['__contains__'](newPrefix))) {
						if ($p['bool'](!$p['bool']($p['isinstance'](res['__getitem__'](newPrefix), $p['list'])))) {
							res['__setitem__'](newPrefix, $p['list']([res['__getitem__'](newPrefix)]));
						}
						res['__getitem__'](newPrefix)['append']($pyjs_kwargs_call(null, $m['parseHashParameters'], null, null, [{'prefix':$p['sprintf']('%s%s.', $p['tuple']([prefix, newPrefix]))}, src]));
					}
					else {
						res['__setitem__'](newPrefix, $pyjs_kwargs_call(null, $m['parseHashParameters'], null, null, [{'prefix':$p['sprintf']('%s%s.', $p['tuple']([prefix, newPrefix]))}, src]));
					}
				}
			}
			if ($p['bool']($p['all'](function(){
				var $iter13_nextval,$iter13_iter,$collcomp3,$iter13_type,$iter13_idx,x,$iter13_array;
	$collcomp3 = $p['list']();
			$iter13_iter = res['keys']();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				x = $iter13_nextval['$nextval'];
				$collcomp3['append'](x['isdigit']());
			}

	return $collcomp3;}()))) {
				newRes = $p['list']([]);
				keys = function(){
					var $iter14_array,$iter14_type,$collcomp4,$iter14_iter,x,$iter14_idx,$iter14_nextval;
	$collcomp4 = $p['list']();
				$iter14_iter = res['keys']();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					x = $iter14_nextval['$nextval'];
					$collcomp4['append']($p['int'](x));
				}

	return $collcomp4;}();
				keys['sort']();
				$iter15_iter = keys;
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					k = $iter15_nextval['$nextval'];
					newRes['append'](res['__getitem__']($p['str'](k)));
				}
				return newRes;
			}
			return res;
		};
		$m['parseHashParameters']['__name__'] = 'parseHashParameters';

		$m['parseHashParameters']['__bind_type__'] = 0;
		$m['parseHashParameters']['__args__'] = [null,null,['src'],['prefix', '']];
		$m['EditWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.edit';
			$cls_definition['__md5__'] = '36294df4c9524f7e47909b3632c28119';
			$cls_definition['appList'] = 'list';
			$cls_definition['appHierarchy'] = 'hierarchy';
			$cls_definition['appTree'] = 'tree';
			$cls_definition['appSingleton'] = 'singleton';
			$cls_definition['__editIdx_'] = $constant_int_0;
			$method = $pyjs__bind_method2('__init__', function(module, applicationType, key, node, skelType, clone, hashArgs, context, logaction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,9,arguments['length']-1));

					var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					applicationType = arguments[2];
					key = arguments[3];
					node = arguments[4];
					skelType = arguments[5];
					clone = arguments[6];
					hashArgs = arguments[7];
					context = arguments[8];
					logaction = arguments[9];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,10,arguments['length']-1));

					var kwargs = arguments['length'] >= 11 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof logaction != 'undefined') {
						if (logaction !== null && typeof logaction['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = logaction;
							logaction = arguments[10];
						}
					} else 					if (typeof context != 'undefined') {
						if (context !== null && typeof context['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = context;
							context = arguments[10];
						}
					} else 					if (typeof hashArgs != 'undefined') {
						if (hashArgs !== null && typeof hashArgs['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = hashArgs;
							hashArgs = arguments[10];
						}
					} else 					if (typeof clone != 'undefined') {
						if (clone !== null && typeof clone['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = clone;
							clone = arguments[10];
						}
					} else 					if (typeof skelType != 'undefined') {
						if (skelType !== null && typeof skelType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = skelType;
							skelType = arguments[10];
						}
					} else 					if (typeof node != 'undefined') {
						if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = node;
							node = arguments[10];
						}
					} else 					if (typeof key != 'undefined') {
						if (key !== null && typeof key['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = key;
							key = arguments[10];
						}
					} else 					if (typeof applicationType != 'undefined') {
						if (applicationType !== null && typeof applicationType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = applicationType;
							applicationType = arguments[10];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[10];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[10];
						}
					} else {
					}
				}
				if (typeof key == 'undefined') key=arguments['callee']['__args__'][5][1];
				if (typeof node == 'undefined') node=arguments['callee']['__args__'][6][1];
				if (typeof skelType == 'undefined') skelType=arguments['callee']['__args__'][7][1];
				if (typeof clone == 'undefined') clone=arguments['callee']['__args__'][8][1];
				if (typeof hashArgs == 'undefined') hashArgs=arguments['callee']['__args__'][9][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][10][1];
				if (typeof logaction == 'undefined') logaction=arguments['callee']['__args__'][11][1];
				var $add12,$add5,$and26,$and25,$add23,$add3,$add21,$add20,$add22,$add24,$or13,$add6,$add7,$add14,$add15,$add16,$add17,$add10,$add4,$add13,$add18,$add19,editActions,$or15,$or14,$or17,$or16,$or11,$or12,$add8,$add9,$or18,$add11;
				if ($p['bool'](!$p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					$m['conf']['__getitem__']('mainWindow')['log']('error', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'module':module}, "The module '{module}' does not exist."]));
					if (!( $m['conf']['__getitem__']('modules')['keys']()['__contains__'](module) )) {
					   throw $p['AssertionError']();
					 }
				}
				$pyjs_kwargs_call($p['$$super']($m['EditWidget'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				if (!( $p['list']([$p['getattr']($m['EditWidget'], 'appList'), $p['getattr']($m['EditWidget'], 'appHierarchy'), $p['getattr']($m['EditWidget'], 'appTree'), $p['getattr']($m['EditWidget'], 'appSingleton')])['__contains__'](applicationType) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](($p['bool']($or11=$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appHierarchy')))?$or11:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree'))))) {
					if (!( ($p['bool']($or13=!$p['op_is'](key, null))?$or13:!$p['op_is'](node, null)) )) {
					   throw $p['AssertionError']();
					 }
				}
				if ($p['bool'](clone)) {
					if (!( !$p['op_is'](key, null) )) {
					   throw $p['AssertionError']();
					 }
					if (!( !$p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton'))) )) {
					   throw $p['AssertionError']();
					 }
					if ($p['bool'](($p['bool']($or15=$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appHierarchy')))?$or15:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree'))))) {
						if (!( !$p['op_is'](node, null) )) {
						   throw $p['AssertionError']();
						 }
					}
					if ($p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree')))) {
						if (!( !$p['op_is'](node, null) )) {
						   throw $p['AssertionError']();
						 }
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clone_of', key) : $p['setattr'](self, 'clone_of', key); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clone_of', null) : $p['setattr'](self, 'clone_of', null); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editIdx', $p['getattr']($m['EditWidget'], '__editIdx_')) : $p['setattr'](self, 'editIdx', $p['getattr']($m['EditWidget'], '__editIdx_')); 
				$m['EditWidget']['__is_instance__'] && typeof $m['EditWidget']['__setattr__'] == 'function' ? $m['EditWidget']['__setattr__']('__editIdx_', $p['__op_add']($add3=$p['getattr']($m['EditWidget'], '__editIdx_'),$add4=$constant_int_1)) : $p['setattr']($m['EditWidget'], '__editIdx_', $p['__op_add']($add3=$p['getattr']($m['EditWidget'], '__editIdx_'),$add4=$constant_int_1)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('applicationType', applicationType) : $p['setattr'](self, 'applicationType', applicationType); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', key) : $p['setattr'](self, 'key', key); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', ($p['bool'](($p['bool']($or17=$p['getattr'](self, 'key'))?$or17:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton'))))? ('edit') : ('add'))) : $p['setattr'](self, 'mode', ($p['bool'](($p['bool']($or17=$p['getattr'](self, 'key'))?$or17:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton'))))? ('edit') : ('add'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modified', false) : $p['setattr'](self, 'modified', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('node', node) : $p['setattr'](self, 'node', node); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('skelType', skelType) : $p['setattr'](self, 'skelType', skelType); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clone', clone) : $p['setattr'](self, 'clone', clone); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bones', $p['dict']([])) : $p['setattr'](self, 'bones', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeOnSuccess', false) : $p['setattr'](self, 'closeOnSuccess', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('logaction', logaction) : $p['setattr'](self, 'logaction', logaction); 
				self['sinkEvent']('onChange');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('views', $p['dict']([])) : $p['setattr'](self, 'views', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lastData', $p['dict']([])) : $p['setattr'](self, '_lastData', $p['dict']([])); 
				if ($p['bool'](hashArgs)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_hashArgs', $m['parseHashParameters'](hashArgs)) : $p['setattr'](self, '_hashArgs', $m['parseHashParameters'](hashArgs)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_hashArgs', null) : $p['setattr'](self, '_hashArgs', null); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editTaskID', null) : $p['setattr'](self, 'editTaskID', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasInitialRequest', true) : $p['setattr'](self, 'wasInitialRequest', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionbar', $m['ActionBar']($p['getattr'](self, 'module'), $p['getattr'](self, 'applicationType'), ($p['bool'](!$p['bool'](clone))? ($p['getattr'](self, 'mode')) : ('clone')))) : $p['setattr'](self, 'actionbar', $m['ActionBar']($p['getattr'](self, 'module'), $p['getattr'](self, 'applicationType'), ($p['bool'](!$p['bool'](clone))? ($p['getattr'](self, 'mode')) : ('clone')))); 
				self['appendChild']($p['getattr'](self, 'actionbar'));
				editActions = $p['list']([]);
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'edit'))) {
					editActions['append']('refresh');
				}
				if ($p['bool'](($p['bool']($and25=$m['conf']['__getitem__']('modules')['__contains__'](module))?$m['conf']['__getitem__']('modules')['__getitem__'](module):$and25))) {
					editActions['extend']($m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('editActions', $p['list']([])));
				}
				if ($p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton')))) {
					self['actionbar']['setActions']($p['__op_add']($add5=$p['list'](['save.singleton']),$add6=editActions));
				}
				else {
					self['actionbar']['setActions']($p['__op_add']($add7=$p['list'](['save.close', 'save.continue']),$add8=editActions));
				}
				if ($p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton')))) {
					$m['conf']['__getitem__']('theApp')['setPath']($p['__op_add']($add11=$p['__op_add']($add9=module,$add10='/'),$add12=$p['getattr'](self, 'mode')));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'edit'))) {
					$m['conf']['__getitem__']('theApp')['setPath']($p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=module,$add14='/'),$add16=($p['bool'](!$p['bool'](clone))? ($p['getattr'](self, 'mode')) : ('clone'))),$add18='/'),$add20=$p['getattr'](self, 'key')));
				}
				else {
					$m['conf']['__getitem__']('theApp')['setPath']($p['__op_add']($add23=$p['__op_add']($add21=module,$add22='/'),$add24=$p['getattr'](self, 'mode')));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('form', $m['html5']['Form']()) : $p['setattr'](self, 'form', $m['html5']['Form']()); 
				self['appendChild']($p['getattr'](self, 'form'));
				self['reloadData']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['applicationType'],['key', $constant_int_0],['node', null],['skelType', null],['clone', false],['hashArgs', null],['context', null],['logaction', 'Entry saved!']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onDetach', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['utils']['setPreventUnloading'](false);
				$p['$$super']($m['EditWidget'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onAttach', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['EditWidget'], self)['onAttach']();
				$m['utils']['setPreventUnloading'](true);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
			$method = $pyjs__bind_method2('performLogics', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,$iter17_nextval,$and27,$iter17_iter,res,$iter16_type,fields,logic,$iter16_idx,$iter17_array,$and28,$iter17_idx,key,$iter17_type,$iter16_nextval,$iter16_iter,event,desc;
				fields = self['serializeForDocument']();
				$iter16_iter = $p['getattr'](self, 'dataCache')['__getitem__']('structure');
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					var $tupleassign10 = $p['__ass_unpack']($iter16_nextval['$nextval'], 2, null);
					key = $tupleassign10[0];
					desc = $tupleassign10[1];
					if ($p['bool'](($p['bool']($and27=desc['get']('params'))?desc['__getitem__']('params'):$and27))) {
						$iter17_iter = $p['list'](['logic.visibleIf', 'logic.readonlyIf', 'logic.evaluate']);
						$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
						while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
							event = $iter17_nextval['$nextval'];
							logic = desc['__getitem__']('params')['get'](event);
							if ($p['bool'](!$p['bool'](logic))) {
								continue;
							}
							if ($p['bool']($p['isinstance'](logic, $p['str']))) {
								desc['__getitem__']('params')['__setitem__'](event, $m['conf']['__getitem__']('logics')['compile'](logic));
								if ($p['bool']($p['op_is'](desc['__getitem__']('params')['__getitem__'](event), null))) {
									(typeof alert == "undefined"?$m['alert']:alert)($p['sprintf']('ViUR logics: Parse error in >%s<', logic));
									continue;
								}
								logic = desc['__getitem__']('params')['__getitem__'](event);
							}
							res = $m['conf']['__getitem__']('logics')['execute'](logic, fields);
							if ($p['bool']($p['op_eq'](event, 'logic.evaluate'))) {
								$p['getattr'](self, 'bones')['__getitem__'](key)['unserialize']($p['dict']([[key, res]]));
							}
							else if ($p['bool'](res)) {
								if ($p['bool']($p['op_eq'](event, 'logic.visibleIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['show']();
								}
								else if ($p['bool']($p['op_eq'](event, 'logic.readonlyIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['disable']();
								}
							}
							else {
								if ($p['bool']($p['op_eq'](event, 'logic.visibleIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['hide']();
								}
								else if ($p['bool']($p['op_eq'](event, 'logic.readonlyIf'))) {
									$p['getattr'](self, 'containers')['__getitem__'](key)['enable']();
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['performLogics'] = $method;
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modified', true) : $p['setattr'](self, 'modified', true); 
				$m['DeferredCall']($p['getattr'](self, 'performLogics'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('onBoneChange', function(bone) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bone = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modified', true) : $p['setattr'](self, 'modified', true); 
				$m['DeferredCall']($p['getattr'](self, 'performLogics'));
				return null;
			}
	, 1, [null,null,['self'],['bone']]);
			$cls_definition['onBoneChange'] = $method;
			$method = $pyjs__bind_method2('showErrorMsg', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
				if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
				var $or19,$and29,$pyjs_try_err,txt,$and30,$or21,$or22,$or20;
				try {
					$p['printFunc']([$p['getattr'](req, 'result')], 1);
					$p['printFunc']([$m['NetworkService']['decode'](req)], 1);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				if ($p['bool'](($p['bool']($and29=code)?($p['bool']($or19=$p['op_eq'](code, $constant_int_401))?$or19:$p['op_eq'](code, $constant_int_403)):$and29))) {
					txt = $m['translate']('Access denied!');
				}
				else {
					txt = $pyjs_kwargs_call(null, $m['translate'], null, null, [{'code':($p['bool']($or21=code)?$or21:$constant_int_0)}, 'An error occurred: {code}']);
				}
				$m['conf']['__getitem__']('mainWindow')['log']('error', txt);
				if ($p['bool']($p['getattr'](self, 'wasInitialRequest'))) {
					$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['req', null],['code', null]]);
			$cls_definition['showErrorMsg'] = $method;
			$method = $pyjs__bind_method2('reloadData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['save']($p['dict']([]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reloadData'] = $method;
			$method = $pyjs__bind_method2('save', function(data) {
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and34,$and33,$and36,$and35,$or24,$or25,$or26,ndata,$and31,$and32,$or23;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasInitialRequest', !$p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))) : $p['setattr'](self, 'wasInitialRequest', !$p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))); 
				if ($p['bool']($p['getattr'](self, 'context'))) {
					ndata = self['context']['copy']();
					ndata['update'](data['copy']());
					data = ndata;
				}
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'module'), '_tasks'))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, null, $p['sprintf']('/vi/%s/execute/%s', $p['tuple']([$p['getattr'](self, 'module'), $p['getattr'](self, 'key')])), data]);
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appList')))) {
					if ($p['bool'](($p['bool']($and31=$p['getattr'](self, 'key'))?($p['bool']($or23=!$p['bool']($p['getattr'](self, 'clone')))?$or23:$p['getattr'](self, 'wasInitialRequest')):$and31))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('edit/%s', $p['getattr'](self, 'key')), data]);
					}
					else {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'add', data]);
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')))) {
					if ($p['bool'](($p['bool']($and33=$p['getattr'](self, 'key'))?($p['bool']($or25=!$p['bool']($p['getattr'](self, 'clone')))?$or25:$p['getattr'](self, 'wasInitialRequest')):$and33))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('edit/%s', $p['getattr'](self, 'key')), data]);
					}
					else {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('add/%s', $p['getattr'](self, 'node')), data]);
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appTree')))) {
					if ($p['bool'](($p['bool']($and35=$p['getattr'](self, 'key'))?!$p['bool']($p['getattr'](self, 'clone')):$and35))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('edit/%s/%s', $p['tuple']([$p['getattr'](self, 'skelType'), $p['getattr'](self, 'key')])), data]);
					}
					else {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('add/%s/%s', $p['tuple']([$p['getattr'](self, 'skelType'), $p['getattr'](self, 'node')])), data]);
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appSingleton')))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':!$p['bool']($p['getattr'](self, 'wasInitialRequest')), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'edit', data]);
				}
				else {
					throw ($p['NotImplementedError']());
				}
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['save'] = $method;
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter18_array,c,$iter18_idx,$iter18_nextval;
				$iter18_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'form'), '_children'), 0, null);
				$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
				while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
					c = $iter18_nextval['$nextval'];
					self['form']['removeChild'](c);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('closeOrContinue', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$pyjs_kwargs_call($m['NetworkService'], 'notifyChange', null, null, [{'key':$p['getattr'](self, 'key'), 'action':$p['getattr'](self, 'mode')}, $p['getattr'](self, 'module')]);
				if ($p['bool']($p['getattr'](self, 'closeOnSuccess'))) {
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'module'), '_tasks'))) {
						self['parent']()['close']();
						return null;
					}
					$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
					return null;
				}
				self['clear']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bones', $p['dict']([])) : $p['setattr'](self, 'bones', $p['dict']([])); 
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'add'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $constant_int_0) : $p['setattr'](self, 'key', $constant_int_0); 
				}
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['closeOrContinue'] = $method;
			$method = $pyjs__bind_method2('doCloneHierarchy', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'cloneComplete')}, $p['getattr'](self, 'module'), 'clone', $p['dict']([['fromRepo', $p['getattr'](self, 'node')], ['toRepo', $p['getattr'](self, 'node')], ['fromParent', $p['getattr'](self, 'clone_of')], ['toParent', $p['getattr'](self, 'key')]])]);
				}
				else {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'cloneComplete')}, $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('rootNodeOf'), 'clone', $p['dict']([['fromRepo', $p['getattr'](self, 'clone_of')], ['toRepo', $p['getattr'](self, 'key')]])]);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['doCloneHierarchy'] = $method;
			$method = $pyjs__bind_method2('cloneComplete', function(request) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					request = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var spanMsg,logDiv;
				logDiv = $m['html5']['Div']();
				logDiv['__getitem__']('class')['append']('msg');
				spanMsg = $m['html5']['Span']();
				spanMsg['appendChild']($m['html5']['TextNode']($m['translate']('The hierarchy will be cloned in the background.')));
				spanMsg['__getitem__']('class')['append']('msgspan');
				logDiv['appendChild'](spanMsg);
				$m['conf']['__getitem__']('mainWindow')['log']('success', logDiv);
				self['closeOrContinue']();
				return null;
			}
	, 1, [null,null,['self'],['request']]);
			$cls_definition['cloneComplete'] = $method;
			$method = $pyjs__bind_method2('setData', function(request, data, ignoreMissing, askHierarchyCloning) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					request = arguments[1];
					data = arguments[2];
					ignoreMissing = arguments[3];
					askHierarchyCloning = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof request == 'undefined') request=arguments['callee']['__args__'][3][1];
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][4][1];
				if (typeof ignoreMissing == 'undefined') ignoreMissing=arguments['callee']['__args__'][5][1];
				if (typeof askHierarchyCloning == 'undefined') askHierarchyCloning=arguments['callee']['__args__'][6][1];
				var contextVariable,$iter24_type,$iter20_array,$or28,$or29,$or27,$iter24_iter,$iter20_iter,views,tmpDict,logDiv,$and38,$and39,$and37,$or40,name,$iter21_type,$iter20_idx,t,currRow,bone,view,$iter23_type,descrLbl,hasMissing,fshref,containerDiv,defaultCat,section,$or42,vtitle,$or41,widget,$iter21_iter,key,legend,$iter20_type,$iter23_nextval,$and58,$and59,$and56,$and57,k,$and55,$and52,$and53,$and50,$and51,contextKey,context,vvariable,tmpList,$and49,$and48,$and45,$and44,$and47,$and46,$and41,$and40,$and43,$and42,vfilter,$iter21_nextval,vclass,$iter23_array,$iter24_idx,cat,$iter24_array,v,$and63,spanMsg,$and54,$iter20_nextval,$lambda2,vdescr,$and66,$and65,$and64,$iter23_idx,$and62,$and61,$and60,$iter23_iter,$add25,$add26,$pyjs_try_err,$iter24_nextval,$iter21_idx,fs,wdgGen,$iter21_array,vmodule,vcolumns,$or33,$or32,$or31,$or30,$or37,$or36,$or35,$or34,$or39,$or38,fieldSets;
				if (!( ($p['bool']($or27=request)?$or27:data) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](request)) {
					data = $m['NetworkService']['decode'](request);
				}
				if ($p['bool'](($p['bool']($and37=data['__contains__']('action'))?($p['bool']($or29=$p['op_eq'](data['__getitem__']('action'), 'addSuccess'))?$or29:$p['op_eq'](data['__getitem__']('action'), 'editSuccess')):$and37))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modified', false) : $p['setattr'](self, 'modified', false); 
					logDiv = $m['html5']['Div']();
					logDiv['__getitem__']('class')['append']('msg');
					spanMsg = $m['html5']['Span']();
					spanMsg['appendChild']($m['html5']['TextNode']($m['translate']($p['getattr'](self, 'logaction'))));
					spanMsg['__getitem__']('class')['append']('msgspan');
					logDiv['appendChild'](spanMsg);
					if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')))) {
						spanMsg = $m['html5']['Span']();
						if ($p['bool'](self['module']['startswith']('_'))) {
							spanMsg['appendChild']($m['html5']['TextNode']($p['getattr'](self, 'key')));
						}
						else {
							spanMsg['appendChild']($m['html5']['TextNode']($m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('name')));
						}
						spanMsg['__getitem__']('class')['append']('modulespan');
						logDiv['appendChild'](spanMsg);
					}
					if ($p['bool'](($p['bool']($and39=data['keys']()['__contains__']('values'))?data['__getitem__']('values')['keys']()['__contains__']('name'):$and39))) {
						spanMsg = $m['html5']['Span']();
						name = ($p['bool']($or31=data['__getitem__']('values')['get']('name'))?$or31:data['__getitem__']('values')['get']('key', ''));
						if ($p['bool']($p['isinstance'](name, $p['dict']))) {
							if ($p['bool'](name['keys']()['__contains__']($m['conf']['__getitem__']('currentlanguage')))) {
								name = name['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
							}
							else {
								name = name['values']();
							}
						}
						if ($p['bool']($p['isinstance'](name, $p['list']))) {
							name = ', '['join'](name);
						}
						spanMsg['appendChild']($m['html5']['TextNode']($p['str']($m['html5']['utils']['unescape'](name))));
						spanMsg['__getitem__']('class')['append']('namespan');
						logDiv['appendChild'](spanMsg);
					}
					try {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', data['__getitem__']('values')['__getitem__']('key')) : $p['setattr'](self, 'key', data['__getitem__']('values')['__getitem__']('key')); 
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', null) : $p['setattr'](self, 'key', null); 
						}
					}
					$m['conf']['__getitem__']('mainWindow')['log']('success', logDiv);
					if ($p['bool'](($p['bool']($and41=askHierarchyCloning)?$p['getattr'](self, 'clone'):$and41))) {
						if ($p['bool'](($p['bool']($and43=$p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appList')))?$m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__contains__']('rootNodeOf'):$and43))) {
							$pyjs_kwargs_call(null, $m['YesNoDialog'], null, null, [{'yesCallback':$p['getattr'](self, 'doCloneHierarchy'), 'noCallback':$p['getattr'](self, 'closeOrContinue')}, $m['translate']('Do you want to clone the entire hierarchy?')]);
							return null;
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')))) {
							$pyjs_kwargs_call(null, $m['YesNoDialog'], null, null, [{'yesCallback':$p['getattr'](self, 'doCloneHierarchy'), 'noCallback':$p['getattr'](self, 'closeOrContinue')}, $m['translate']('Do you want to clone all subentries of this item?')]);
							return null;
						}
					}
					self['closeOrContinue']();
					return null;
				}
				self['clear']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bones', $p['dict']([])) : $p['setattr'](self, 'bones', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('views', $p['dict']([])) : $p['setattr'](self, 'views', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('containers', $p['dict']([])) : $p['setattr'](self, 'containers', $p['dict']([])); 
				self['actionbar']['resetLoadingState']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dataCache', data) : $p['setattr'](self, 'dataCache', data); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modified', false) : $p['setattr'](self, 'modified', false); 
				tmpDict = function(){
					var $iter19_idx,$collcomp5,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,v,k;
	$collcomp5 = $p['dict']();
				$iter19_iter = data['__getitem__']('structure');
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					var $tupleassign11 = $p['__ass_unpack']($iter19_nextval['$nextval'], 2, null);
					k = $tupleassign11[0];
					v = $tupleassign11[1];
					$collcomp5['__setitem__'](k, v);
				}

	return $collcomp5;}();
				fieldSets = $p['dict']([]);
				currRow = $constant_int_0;
				hasMissing = false;
				defaultCat = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['get']('visibleName', $p['getattr'](self, 'module'));
				contextVariable = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['get']('editContext');
				if ($p['bool'](($p['bool']($and45=$p['op_eq']($p['getattr'](self, 'mode'), 'edit'))?contextVariable:$and45))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'context')))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', $p['dict']([])) : $p['setattr'](self, 'context', $p['dict']([])); 
					}
					if ($p['bool'](contextVariable['__contains__']('='))) {
						var $tupleassign12 = $p['__ass_unpack'](contextVariable['$$split']('=', $constant_int_1), 2, null);
						contextVariable = $tupleassign12[0];
						contextKey = $tupleassign12[1];
					}
					else {
						contextKey = 'key';
					}
					self['context']['update']($p['dict']([[contextVariable, data['__getitem__']('values')['get'](contextKey)]]));
				}
				$iter20_iter = data['__getitem__']('structure');
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					var $tupleassign13 = $p['__ass_unpack']($iter20_nextval['$nextval'], 2, null);
					key = $tupleassign13[0];
					bone = $tupleassign13[1];
					cat = defaultCat;
					if ($p['bool'](($p['bool']($and47=bone['keys']()['__contains__']('params'))?($p['bool']($and48=$p['isinstance'](bone['__getitem__']('params'), $p['dict']))?bone['__getitem__']('params')['keys']()['__contains__']('category'):$and48):$and47))) {
						cat = bone['__getitem__']('params')['__getitem__']('category');
					}
					if ($p['bool'](!$p['bool'](fieldSets['keys']()['__contains__'](cat)))) {
						fs = $m['html5']['Fieldset']();
						fs['addClass'](($p['bool'](!$p['bool'](fieldSets))? ('active') : ('inactive')));
						fs['__setitem__']('name', cat);
						legend = $m['html5']['Legend']();
						fshref = (typeof fieldset_A == "undefined"?$m['fieldset_A']:fieldset_A)();
						fshref['appendChild']($m['html5']['TextNode'](cat));
						legend['appendChild'](fshref);
						fs['appendChild'](legend);
						section = $m['html5']['Section']();
						fs['appendChild'](section);
						fs['__is_instance__'] && typeof fs['__setattr__'] == 'function' ? fs['__setattr__']('_section', section) : $p['setattr'](fs, '_section', section); 
						fieldSets['__setitem__'](cat, fs);
					}
					wdgGen = $m['editBoneSelector']['select']($p['getattr'](self, 'module'), key, tmpDict);
					widget = wdgGen['fromSkelStructure']($p['getattr'](self, 'module'), key, tmpDict);
					widget['__setitem__']('id', $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), $p['getattr'](self, 'mode'), cat, key])));
					if ($p['bool'](($p['bool']($and50=$p['dir'](widget)['__contains__']('setContext'))?$p['callable']($p['getattr'](widget, 'setContext')):$and50))) {
						widget['setContext']($p['getattr'](self, 'context'));
					}
					if ($p['bool']($p['dir'](widget)['__contains__']('changeEvent'))) {
						widget['changeEvent']['register'](self);
					}
					descrLbl = $m['html5']['Label'](($p['bool']($m['conf']['__getitem__']('showBoneNames'))? (key) : (bone['get']('descr', key))));
					descrLbl['__getitem__']('class')['append'](key);
					descrLbl['__getitem__']('class')['append'](bone['__getitem__']('type')['$$replace']('.', '_'));
					descrLbl['__setitem__']('for', $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), $p['getattr'](self, 'mode'), cat, key])));
					if ($p['bool'](($p['bool']($or33=bone['__getitem__']('required'))?$or33:($p['bool']($and52=bone['get']('unique'))?bone['__getitem__']('error'):$and52)))) {
						descrLbl['__getitem__']('class')['append']('is_required');
						if ($p['bool'](!$p['op_is'](bone['__getitem__']('error'), null))) {
							descrLbl['__getitem__']('class')['append']('is_invalid');
							descrLbl['__setitem__']('title', bone['__getitem__']('error'));
							fieldSets['__getitem__'](cat)['__getitem__']('class')['append']('is_incomplete');
							hasMissing = true;
						}
						else if ($p['bool'](($p['bool']($and54=$p['op_is'](bone['__getitem__']('error'), null))?!$p['bool']($p['getattr'](self, 'wasInitialRequest')):$and54))) {
							descrLbl['__getitem__']('class')['append']('is_valid');
						}
					}
					if ($p['bool']($p['isinstance'](bone['__getitem__']('error'), $p['dict']))) {
						widget['setExtendedErrorInformation'](bone['__getitem__']('error'));
					}
					containerDiv = $m['html5']['Div']();
					containerDiv['appendChild'](descrLbl);
					containerDiv['appendChild'](widget);
					if ($p['bool'](($p['bool']($and56=bone['keys']()['__contains__']('params'))?($p['bool']($and57=$p['isinstance'](bone['__getitem__']('params'), $p['dict']))?bone['__getitem__']('params')['keys']()['__contains__']('tooltip'):$and57):$and56))) {
						containerDiv['appendChild']($pyjs_kwargs_call(null, $m['ToolTip'], null, null, [{'longText':bone['__getitem__']('params')['__getitem__']('tooltip')}]));
					}
					fieldSets['__getitem__'](cat)['_section']['appendChild'](containerDiv);
					containerDiv['addClass']('bone', $p['sprintf']('bone_%s', key), bone['__getitem__']('type')['$$replace']('.', '_'));
					if ($p['bool'](bone['__getitem__']('type')['__contains__']('.'))) {
						$iter21_iter = bone['__getitem__']('type')['$$split']('.');
						$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
						while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
							t = $iter21_nextval['$nextval'];
							containerDiv['__getitem__']('class')['append'](t);
						}
					}
					currRow = $p['__op_add']($add25=currRow,$add26=$constant_int_1);
					$p['getattr'](self, 'bones')['__setitem__'](key, widget);
					$p['getattr'](self, 'containers')['__setitem__'](key, containerDiv);
					if ($p['bool'](($p['bool']($or35=!$p['bool'](bone['__getitem__']('visible')))?$or35:($p['bool']($and59=bone['__getitem__']('params'))?bone['__getitem__']('params')['get']('logic.visibleIf'):$and59)))) {
						$p['getattr'](self, 'containers')['__getitem__'](key)['hide']();
					}
					if ($p['bool'](($p['bool']($and61=bone['__getitem__']('params'))?bone['__getitem__']('params')['get']('logic.readonlyIf'):$and61))) {
						$p['getattr'](self, 'containers')['__getitem__'](key)['disable']();
					}
				}
				tmpList = function(){
					var $iter22_array,$collcomp6,k,$iter22_nextval,$iter22_idx,$iter22_type,v,$iter22_iter;
	$collcomp6 = $p['list']();
				$iter22_iter = fieldSets['items']();
				$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
				while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
					var $tupleassign14 = $p['__ass_unpack']($iter22_nextval['$nextval'], 2, null);
					k = $tupleassign14[0];
					v = $tupleassign14[1];
					$collcomp6['append']($p['tuple']([k, v]));
				}

	return $collcomp6;}();
				var 				$lambda2 = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x['__getitem__']($constant_int_0);
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null,['x']];
				$pyjs_kwargs_call(tmpList, 'sort', null, null, [{'key':$lambda2}]);
				$iter23_iter = tmpList;
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
					var $tupleassign15 = $p['__ass_unpack']($iter23_nextval['$nextval'], 2, null);
					k = $tupleassign15[0];
					v = $tupleassign15[1];
					self['form']['appendChild'](v);
					v['__is_instance__'] && typeof v['__setattr__'] == 'function' ? v['__setattr__']('_section', null) : $p['setattr'](v, '_section', null); 
				}
				views = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['get']('editViews');
				if ($p['bool'](($p['bool']($and63=$p['op_eq']($p['getattr'](self, 'mode'), 'edit'))?$p['isinstance'](views, $p['list']):$and63))) {
					$iter24_iter = views;
					$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
					while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
						view = $iter24_nextval['$nextval'];
						vmodule = view['get']('module');
						vvariable = view['get']('context');
						vclass = view['get']('class');
						vtitle = view['get']('title');
						vcolumns = view['get']('columns');
						vfilter = view['get']('filter');
						if ($p['bool'](!$p['bool'](vmodule))) {
							$p['printFunc']([$p['sprintf']('Misconfiured view: %s', view)], 1);
							continue;
						}
						if ($p['bool'](!$m['conf']['__getitem__']('modules')['__contains__'](vmodule))) {
							$p['printFunc']([$p['sprintf']("Module '%s' is not described.", vmodule)], 1);
							continue;
						}
						vdescr = $m['conf']['__getitem__']('modules')['__getitem__'](vmodule);
						fs = $m['html5']['Fieldset']();
						fs['addClass']('editview', 'inactive');
						if ($p['bool'](vclass)) {
							$pyjs_kwargs_call(fs, 'addClass', vclass, null, [{}]);
						}
						fs['__setitem__']('name', vmodule);
						legend = $m['html5']['Legend']();
						fshref = (typeof fieldset_A == "undefined"?$m['fieldset_A']:fieldset_A)();
						fshref['appendChild']($m['html5']['TextNode'](($p['bool']($or37=vtitle)?$or37:vdescr['get']('name', vmodule))));
						legend['appendChild'](fshref);
						fs['appendChild'](legend);
						section = $m['html5']['Section']();
						fs['appendChild'](section);
						fs['__is_instance__'] && typeof fs['__setattr__'] == 'function' ? fs['__setattr__']('_section', section) : $p['setattr'](fs, '_section', section); 
						fieldSets['__setitem__'](vmodule, fs);
						if ($p['bool'](vvariable)) {
							context = ($p['bool']($p['getattr'](self, 'context'))? (self['context']['copy']()) : ($p['dict']([])));
							context['__setitem__'](vvariable, data['__getitem__']('values')['__getitem__']('key'));
						}
						else {
							context = $p['getattr'](self, 'context');
						}
						$p['getattr'](self, 'views')['__setitem__'](vmodule, $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'filter':($p['bool']($or39=vfilter)?$or39:vdescr['get']('filter', $p['dict']([]))), 'columns':($p['bool']($or41=vcolumns)?$or41:vdescr['get']('columns')), 'context':context}, vmodule]));
						fs['_section']['appendChild']($p['getattr'](self, 'views')['__getitem__'](vmodule));
						self['form']['appendChild'](fs);
					}
				}
				self['unserialize'](data['__getitem__']('values'));
				if ($p['bool']($p['getattr'](self, '_hashArgs'))) {
					self['unserialize']($p['getattr'](self, '_hashArgs'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_hashArgs', null) : $p['setattr'](self, '_hashArgs', null); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lastData', data) : $p['setattr'](self, '_lastData', data); 
				if ($p['bool'](($p['bool']($and65=hasMissing)?!$p['bool']($p['getattr'](self, 'wasInitialRequest')):$and65))) {
					$m['conf']['__getitem__']('mainWindow')['log']('warning', $m['translate']('Could not save entry!'));
				}
				$m['DeferredCall']($p['getattr'](self, 'performLogics'));
				return null;
			}
	, 1, [null,null,['self'],['request', null],['data', null],['ignoreMissing', false],['askHierarchyCloning', true]]);
			$cls_definition['setData'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data) {
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				var $iter25_nextval,$iter25_iter,$and67,$iter25_idx,$iter25_type,$iter25_array,bone,$and68;
				$iter25_iter = self['bones']['values']();
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					bone = $iter25_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and67=$p['dir'](bone)['__contains__']('setContext'))?$p['callable']($p['getattr'](bone, 'setContext')):$and67))) {
						bone['setContext']($p['getattr'](self, 'context'));
					}
					if ($p['bool'](!$p['op_is'](data, null))) {
						bone['unserialize'](data);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data', null]]);
			$cls_definition['unserialize'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function(validityCheck) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					validityCheck = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof validityCheck == 'undefined') validityCheck=arguments['callee']['__args__'][3][1];
				var $iter26_iter,$iter26_idx,$iter26_nextval,res,$iter26_type,$pyjs_try_err,key,$iter26_array,lbl,bone;
				res = $p['dict']([]);
				$iter26_iter = self['bones']['items']();
				$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
				while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
					var $tupleassign16 = $p['__ass_unpack']($iter26_nextval['$nextval'], 2, null);
					key = $tupleassign16[0];
					bone = $tupleassign16[1];
					if ($p['bool']($p['op_eq'](key, 'key'))) {
						continue;
					}
					try {
						res['update'](bone['serializeForPost']());
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
							if ($p['bool'](validityCheck)) {
								lbl = $p['getattr'](bone['parent'](), '_children')['__getitem__']($constant_int_0);
								if ($p['bool'](lbl['__getitem__']('class')['__contains__']('is_valid'))) {
									lbl['__getitem__']('class')['remove']('is_valid');
								}
								lbl['__getitem__']('class')['append']('is_invalid');
								self['actionbar']['resetLoadingState']();
								return null;
							}
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return res;
			}
	, 1, [null,null,['self'],['validityCheck', false]]);
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter27_nextval,e,$iter27_array,res,$iter27_idx,$pyjs_try_err,$iter27_iter,bone,key,$iter27_type;
				res = self['_lastData']['get']('values', $p['dict']([]));
				$iter27_iter = self['bones']['items']();
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					var $tupleassign17 = $p['__ass_unpack']($iter27_nextval['$nextval'], 2, null);
					key = $tupleassign17[0];
					bone = $tupleassign17[1];
					try {
						res['update'](bone['serializeForDocument']());
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
							e = $pyjs_try_err;
							res['__setitem__'](key, $p['str'](e));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return res;
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('doSave', function(closeOnSuccess) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					closeOnSuccess = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '36294df4c9524f7e47909b3632c28119') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof closeOnSuccess != 'undefined') {
						if (closeOnSuccess !== null && typeof closeOnSuccess['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = closeOnSuccess;
							closeOnSuccess = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof closeOnSuccess == 'undefined') closeOnSuccess=arguments['callee']['__args__'][3][1];
				var res;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeOnSuccess', closeOnSuccess) : $p['setattr'](self, 'closeOnSuccess', closeOnSuccess); 
				res = self['serializeForPost'](true);
				if ($p['bool']($p['op_is'](res, null))) {
					return null;
				}
				self['save'](res);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['closeOnSuccess', false]]);
			$cls_definition['doSave'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EditWidget', $p['tuple']($bases), $data);
		})();
		$m['fieldset_A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.edit';
			$cls_definition['__md5__'] = '74b087c95e188b9cde73bee6c94b8e91';
			$cls_definition['_baseClass'] = 'a';
			$method = $pyjs__bind_method2('__init__', function() {
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
					if (self.prototype['__md5__'] !== '74b087c95e188b9cde73bee6c94b8e91') {
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

				$pyjs_kwargs_call($p['$$super']($m['fieldset_A'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onClick');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '74b087c95e188b9cde73bee6c94b8e91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter29_iter,$and73,$iter28_nextval,$iter28_array,$and70,$and71,$iter28_idx,$and72,element,$iter29_type,$iter29_nextval,$iter29_array,sube,$iter28_iter,$iter29_idx,$iter28_type,$and69;
				$iter28_iter = $p['getattr'](self['parent']()['parent']()['parent'](), '_children');
				$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
				while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
					element = $iter28_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](element, $m['Fieldset']))) {
						if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, element))) {
							if ($p['bool'](!$p['bool'](element['__getitem__']('class')['__contains__']('active')))) {
								element['__getitem__']('class')['append']('active');
								element['__getitem__']('class')['remove']('inactive');
							}
							else {
								if ($p['bool'](!$p['bool'](element['__getitem__']('class')['__contains__']('inactive')))) {
									element['__getitem__']('class')['append']('inactive');
								}
								element['__getitem__']('class')['remove']('active');
							}
						}
						else {
							if ($p['bool'](($p['bool']($and69=!$p['bool'](element['__getitem__']('class')['__contains__']('inactive')))?$p['isinstance'](element, $m['fieldset_A']):$and69))) {
								element['__getitem__']('class')['append']('inactive');
							}
							element['__getitem__']('class')['remove']('active');
							if ($p['bool'](($p['bool']($and71=($p['cmp']($p['len']($p['getattr'](element, '_children')), $constant_int_0) == 1))?($p['bool']($and72=$p['isinstance'](element, $m['fieldset_A']))?$p['hasattr']($p['getattr'](element, '_children')['__getitem__']($constant_int_1), '_children'):$and72):$and71))) {
								$iter29_iter = $p['getattr']($p['getattr'](element, '_children')['__getitem__']($constant_int_1), '_children');
								$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
								while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
									sube = $iter29_nextval['$nextval'];
									if ($p['bool']($p['isinstance'](sube, $m['fieldset_A']))) {
										if ($p['bool'](!$p['bool'](sube['__getitem__']('class')['__contains__']('inactive')))) {
											$p['getattr'](sube, 'parent')['__getitem__']('class')['append']('inactive');
										}
										sube['__getitem__']('class')['remove']('active');
									}
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['A']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('fieldset_A', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.edit */


/* end module: widgets.edit */


/*
PYJS_DEPS: ['html5', 'utils', 'html5.a.A', 'html5.a', 'html5.form.Fieldset', 'html5.form', 'html5.ext.YesNoDialog', 'html5.ext', 'network.NetworkService', 'network', 'network.DeferredCall', 'config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'widgets.tooltip.ToolTip', 'widgets', 'widgets.tooltip', 'widgets.actionbar.ActionBar', 'widgets.actionbar', 'i18n.translate', 'i18n', 'widgets.list.ListWidget', 'widgets.list']
*/
