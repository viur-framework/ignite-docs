/* start module: bones.string */
$pyjs['loaded_modules']['bones.string'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.string']['__was_initialized__']) return $pyjs['loaded_modules']['bones.string'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.string'];
	$m['__repr__'] = function() { return '<module: bones.string>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.string';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['string'] = $pyjs['loaded_modules']['bones.string'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
		$p['__import_all__']('html5.keycodes', 'bones', $m, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['StringBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.string';
			$cls_definition['__md5__'] = '4533965c70c0d72288ad67daa0cf4cd1';
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
					if (self.prototype['__md5__'] !== '4533965c70c0d72288ad67daa0cf4cd1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var resstr;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					if ($p['bool']($p['isinstance'](data['__getitem__'](field), $p['dict']))) {
						resstr = '';
						if ($p['bool']($m['conf']['keys']()['__contains__']('currentlanguage'))) {
							if ($p['bool'](data['__getitem__'](field)['keys']()['__contains__']($m['conf']['__getitem__']('currentlanguage')))) {
								resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'))['$$replace']('&quot;', "'")['$$replace'](';', ' ')['$$replace']('"', "'");
							}
							else {
								if ($p['bool'](($p['cmp']($p['len'](data['__getitem__'](field)['keys']()), $constant_int_0) == 1))) {
									resstr = data['__getitem__'](field)['__getitem__'](data['__getitem__'](field)['keys']()['__getitem__']($constant_int_0))['$$replace']('&quot;', "'")['$$replace'](';', ' ')['$$replace']('"', "'");
								}
							}
						}
						return $p['sprintf']('"%s"', resstr);
					}
					else if ($p['bool']($p['isinstance'](data['__getitem__'](field), $p['list']))) {
						return ', '['join'](function(){
							var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,item,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = data['__getitem__'](field);
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							item = $iter1_nextval['$nextval'];
							$collcomp1['append'](item['$$replace']('&quot;', '')['$$replace'](';', ' ')['$$replace']('"', "'"));
						}

	return $collcomp1;}());
					}
					else if ($p['bool'](!$p['op_is'](data['__getitem__'](field), null))) {
						return $p['str']($p['sprintf']('"%s"', $p['str'](data['__getitem__'](field))['$$replace']('&quot;', '')['$$replace'](';', ' ')['$$replace']('"', "'")));
					}
				}
				return $m['conf']['__getitem__']('empty_value');
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StringBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['StringViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.string';
			$cls_definition['__md5__'] = '0b7728482964c1262d7a069d5df98a42';
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
					if (self.prototype['__md5__'] !== '0b7728482964c1262d7a069d5df98a42') {
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

				$p['$$super']($m['StringViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== '0b7728482964c1262d7a069d5df98a42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var resstr,output;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					if ($p['bool']($p['isinstance'](data['__getitem__'](field), $p['dict']))) {
						resstr = '';
						if ($p['bool']($m['conf']['keys']()['__contains__']('currentlanguage'))) {
							if ($p['bool'](data['__getitem__'](field)['keys']()['__contains__']($m['conf']['__getitem__']('currentlanguage')))) {
								resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
							}
							else {
								if ($p['bool'](($p['cmp']($p['len'](data['__getitem__'](field)['keys']()), $constant_int_0) == 1))) {
									resstr = data['__getitem__'](field)['__getitem__'](data['__getitem__'](field)['keys']()['__getitem__']($constant_int_0));
								}
							}
						}
						return self['getViewElement'](resstr, data['__getitem__'](field));
					}
					else {
						if ($p['bool']($p['isinstance'](data['__getitem__'](field), $p['list']))) {
							output = ', '['join'](data['__getitem__'](field));
						}
						else {
							output = $p['str'](data['__getitem__'](field));
						}
						return self['getViewElement'](output, false);
					}
				}
				return self['getViewElement']($m['conf']['__getitem__']('empty_value'), false);
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			$method = $pyjs__bind_method2('getViewElement', function(labelstr, datafield) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					labelstr = arguments[1];
					datafield = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0b7728482964c1262d7a069d5df98a42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aspan;
				labelstr = $m['html5']['utils']['unescape'](labelstr);
				if ($p['bool'](!$p['bool'](datafield))) {
					return $m['html5']['Label'](labelstr);
				}
				else {
					aspan = $m['html5']['Span']();
					aspan['appendChild']($m['html5']['TextNode'](labelstr));
					aspan['__setitem__']('title', $p['str'](datafield));
					return aspan;
				}
				return null;
			}
	, 1, [null,null,['self'],['labelstr'],['datafield']]);
			$cls_definition['getViewElement'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StringViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['Tag'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.string';
			$cls_definition['__md5__'] = '5e8992ade01a0184b42969b8a61d5543';
			$method = $pyjs__bind_method2('__init__', function(parentBone, tag, isEditMode, readonly, multiLine) {
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
					parentBone = arguments[1];
					tag = arguments[2];
					isEditMode = arguments[3];
					readonly = arguments[4];
					multiLine = arguments[5];
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof multiLine != 'undefined') {
						if (multiLine !== null && typeof multiLine['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = multiLine;
							multiLine = arguments[6];
						}
					} else 					if (typeof readonly != 'undefined') {
						if (readonly !== null && typeof readonly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readonly;
							readonly = arguments[6];
						}
					} else 					if (typeof isEditMode != 'undefined') {
						if (isEditMode !== null && typeof isEditMode['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isEditMode;
							isEditMode = arguments[6];
						}
					} else 					if (typeof tag != 'undefined') {
						if (tag !== null && typeof tag['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = tag;
							tag = arguments[6];
						}
					} else 					if (typeof parentBone != 'undefined') {
						if (parentBone !== null && typeof parentBone['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = parentBone;
							parentBone = arguments[6];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[6];
						}
					} else {
					}
				}
				if (typeof readonly == 'undefined') readonly=arguments['callee']['__args__'][6][1];
				if (typeof multiLine == 'undefined') multiLine=arguments['callee']['__args__'][7][1];
				var delBtn;
				$pyjs_kwargs_call($p['$$super']($m['Tag'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('tag');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentBone', parentBone) : $p['setattr'](self, 'parentBone', parentBone); 
				if ($p['bool'](multiLine)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Textarea']()) : $p['setattr'](self, 'input', $m['html5']['Textarea']()); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Input']()) : $p['setattr'](self, 'input', $m['html5']['Input']()); 
					$p['getattr'](self, 'input')['__setitem__']('type', 'text');
				}
				$p['getattr'](self, 'input')['__setitem__']('value', tag);
				self['appendChild']($p['getattr'](self, 'input'));
				if ($p['bool'](readonly)) {
					$p['getattr'](self, 'input')['__setitem__']('readonly', true);
				}
				else {
					self['__setitem__']('draggable', true);
					self['sinkEvent']('onDrop', 'onDragOver', 'onDragStart', 'onDragEnd');
					delBtn = $m['html5']['ext']['Button']($m['translate']('Delete'), $p['getattr'](self, 'onDelBtnClick'));
					delBtn['__getitem__']('class')['append']('icon delete tag');
					self['appendChild'](delBtn);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['parentBone'],['tag'],['isEditMode'],['readonly', false],['multiLine', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onDelBtnClick', function() {
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
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

				self['parent']()['removeChild'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onDelBtnClick'] = $method;
			$method = $pyjs__bind_method2('focus', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['input']['focus']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['focus'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'parentBone')['__is_instance__'] && typeof $p['getattr'](self, 'parentBone')['__setattr__'] == 'function' ? $p['getattr'](self, 'parentBone')['__setattr__']('currentTagToDrag', self) : $p['setattr']($p['getattr'](self, 'parentBone'), 'currentTagToDrag', self); 
				event['dataTransfer']['setData']('text', $p['getattr'](self, 'input')['__getitem__']('value'));
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['preventDefault']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'parentBone')['__is_instance__'] && typeof $p['getattr'](self, 'parentBone')['__setattr__'] == 'function' ? $p['getattr'](self, 'parentBone')['__setattr__']('currentTagToDrag', null) : $p['setattr']($p['getattr'](self, 'parentBone'), 'currentTagToDrag', null); 
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
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
					if (self.prototype['__md5__'] !== '5e8992ade01a0184b42969b8a61d5543') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tagToDrop,$add2,$add1,$and1,parentChilds,$and2;
				event['preventDefault']();
				event['stopPropagation']();
				tagToDrop = $p['getattr']($p['getattr'](self, 'parentBone'), 'currentTagToDrag');
				if ($p['bool'](($p['bool']($and1=tagToDrop)?!$p['op_eq'](tagToDrop, self):$and1))) {
					if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'offsetTop'), $p['getattr']($p['getattr'](tagToDrop, 'element'), 'offsetTop')) == 1))) {
						parentChilds = self['parent']()['children']();
						if ($p['bool']($p['op_is'](parentChilds['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))), self))) {
							self['parent']()['appendChild'](tagToDrop);
						}
						else {
							self['parent']()['insertBefore'](tagToDrop, parentChilds['__getitem__']($p['__op_add']($add1=parentChilds['index'](self),$add2=$constant_int_1)));
						}
					}
					else {
						self['parent']()['insertBefore'](tagToDrop, self);
					}
				}
				$p['getattr'](self, 'parentBone')['__is_instance__'] && typeof $p['getattr'](self, 'parentBone')['__setattr__'] == 'function' ? $p['getattr'](self, 'parentBone')['__setattr__']('currentTagToDrag', null) : $p['setattr']($p['getattr'](self, 'parentBone'), 'currentTagToDrag', null); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Span'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Tag', $p['tuple']($bases), $data);
		})();
		$m['StringEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.string';
			$cls_definition['__md5__'] = 'd1a7080200cc26ed0917bff1b38fac9e';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, multiple, languages, multiLine) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					multiple = arguments[4];
					languages = arguments[5];
					multiLine = arguments[6];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof multiLine != 'undefined') {
						if (multiLine !== null && typeof multiLine['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = multiLine;
							multiLine = arguments[7];
						}
					} else 					if (typeof languages != 'undefined') {
						if (languages !== null && typeof languages['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = languages;
							languages = arguments[7];
						}
					} else 					if (typeof multiple != 'undefined') {
						if (multiple !== null && typeof multiple['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = multiple;
							multiple = arguments[7];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[7];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[7];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof multiple == 'undefined') multiple=arguments['callee']['__args__'][6][1];
				if (typeof languages == 'undefined') languages=arguments['callee']['__args__'][7][1];
				if (typeof multiLine == 'undefined') multiLine=arguments['callee']['__args__'][8][1];
				var inputField,$iter3_array,$iter2_type,$iter3_idx,$iter2_iter,tagContainer,$iter3_iter,addBtn,$and8,$and3,$and4,$and5,$and6,$and7,$iter2_idx,$iter2_nextval,$iter3_type,lang,langBtn,$iter3_nextval,$iter2_array;
				$pyjs_kwargs_call($p['$$super']($m['StringEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', moduleName) : $p['setattr'](self, 'moduleName', moduleName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('multiple', multiple) : $p['setattr'](self, 'multiple', multiple); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('languages', languages) : $p['setattr'](self, 'languages', languages); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentTagToDrag', null) : $p['setattr'](self, 'currentTagToDrag', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentLanguage', null) : $p['setattr'](self, 'currentLanguage', null); 
				if ($p['bool'](($p['bool']($and3=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and3))) {
					self['__getitem__']('class')['append']('is_translated');
					self['__getitem__']('class')['append']('is_multiple');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('languagesContainer', $m['html5']['Div']()) : $p['setattr'](self, 'languagesContainer', $m['html5']['Div']()); 
					self['appendChild']($p['getattr'](self, 'languagesContainer'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buttonContainer', $m['html5']['Div']()) : $p['setattr'](self, 'buttonContainer', $m['html5']['Div']()); 
					$p['getattr'](self, 'buttonContainer')['__setitem__']('class', 'languagebuttons');
					self['appendChild']($p['getattr'](self, 'buttonContainer'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langEdits', $p['dict']([])) : $p['setattr'](self, 'langEdits', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langBtns', $p['dict']([])) : $p['setattr'](self, 'langBtns', $p['dict']([])); 
					$iter2_iter = $p['getattr'](self, 'languages');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						lang = $iter2_nextval['$nextval'];
						tagContainer = $m['html5']['Div']();
						tagContainer['__getitem__']('class')['append']($p['sprintf']('lang_%s', lang));
						tagContainer['__getitem__']('class')['append']('tagcontainer');
						tagContainer['__getitem__']('style')['__setitem__']('display', 'none');
						langBtn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLangBtnClicked')}, lang]);
						langBtn['__is_instance__'] && typeof langBtn['__setattr__'] == 'function' ? langBtn['__setattr__']('lang', lang) : $p['setattr'](langBtn, 'lang', lang); 
						self['buttonContainer']['appendChild'](langBtn);
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')))) {
							addBtn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onBtnGenTag')}, $m['translate']('New')]);
							addBtn['__getitem__']('class')['append']('icon new tag');
							addBtn['__is_instance__'] && typeof addBtn['__setattr__'] == 'function' ? addBtn['__setattr__']('lang', lang) : $p['setattr'](addBtn, 'lang', lang); 
							tagContainer['appendChild'](addBtn);
						}
						self['languagesContainer']['appendChild'](tagContainer);
						$p['getattr'](self, 'langEdits')['__setitem__'](lang, tagContainer);
						$p['getattr'](self, 'langBtns')['__setitem__'](lang, langBtn);
					}
					self['setLang']($p['getattr'](self, 'languages')['__getitem__']($constant_int_0));
				}
				else if ($p['bool'](($p['bool']($and5=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and5))) {
					self['__getitem__']('class')['append']('is_translated');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('languagesContainer', $m['html5']['Div']()) : $p['setattr'](self, 'languagesContainer', $m['html5']['Div']()); 
					self['appendChild']($p['getattr'](self, 'languagesContainer'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buttonContainer', $m['html5']['Div']()) : $p['setattr'](self, 'buttonContainer', $m['html5']['Div']()); 
					$p['getattr'](self, 'buttonContainer')['__setitem__']('class', 'languagebuttons');
					self['appendChild']($p['getattr'](self, 'buttonContainer'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langEdits', $p['dict']([])) : $p['setattr'](self, 'langEdits', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langBtns', $p['dict']([])) : $p['setattr'](self, 'langBtns', $p['dict']([])); 
					$iter3_iter = $p['getattr'](self, 'languages');
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						lang = $iter3_nextval['$nextval'];
						langBtn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLangBtnClicked')}, lang]);
						langBtn['__is_instance__'] && typeof langBtn['__setattr__'] == 'function' ? langBtn['__setattr__']('lang', lang) : $p['setattr'](langBtn, 'lang', lang); 
						self['buttonContainer']['appendChild'](langBtn);
						if ($p['bool'](multiLine)) {
							inputField = $m['html5']['Textarea']();
						}
						else {
							inputField = $m['html5']['Input']();
							inputField['__setitem__']('type', 'text');
						}
						inputField['__getitem__']('style')['__setitem__']('display', 'none');
						inputField['__getitem__']('class')['append']($p['sprintf']('lang_%s', lang));
						if ($p['bool']($p['getattr'](self, 'readOnly'))) {
							inputField['__setitem__']('readonly', true);
						}
						self['languagesContainer']['appendChild'](inputField);
						$p['getattr'](self, 'langEdits')['__setitem__'](lang, inputField);
						$p['getattr'](self, 'langBtns')['__setitem__'](lang, langBtn);
					}
					self['setLang']($p['getattr'](self, 'languages')['__getitem__']($constant_int_0));
				}
				else if ($p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and7))) {
					self['__getitem__']('class')['append']('is_multiple');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tagContainer', $m['html5']['Div']()) : $p['setattr'](self, 'tagContainer', $m['html5']['Div']()); 
					$p['getattr'](self, 'tagContainer')['__getitem__']('class')['append']('tagcontainer');
					self['appendChild']($p['getattr'](self, 'tagContainer'));
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')))) {
						addBtn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onBtnGenTag')}, $m['translate']('New')]);
						addBtn['__is_instance__'] && typeof addBtn['__setattr__'] == 'function' ? addBtn['__setattr__']('lang', null) : $p['setattr'](addBtn, 'lang', null); 
						addBtn['__getitem__']('class')['append']('icon new tag');
						self['tagContainer']['appendChild'](addBtn);
					}
				}
				else {
					if ($p['bool'](multiLine)) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Textarea']()) : $p['setattr'](self, 'input', $m['html5']['Textarea']()); 
					}
					else {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Input']()) : $p['setattr'](self, 'input', $m['html5']['Input']()); 
						$p['getattr'](self, 'input')['__setitem__']('type', 'text');
					}
					self['appendChild']($p['getattr'](self, 'input'));
					if ($p['bool']($p['getattr'](self, 'readOnly'))) {
						$p['getattr'](self, 'input')['__setitem__']('readonly', true);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['multiple', false],['languages', null],['multiLine', false]]);
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
				var multiple,$and9,readOnly,languages,$and10,multiLine;
				readOnly = ($p['bool']($and9=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and9);
				if ($p['bool'](skelStructure['keys']()['__contains__'](boneName))) {
					multiple = skelStructure['__getitem__'](boneName)['get']('multiple', false);
					languages = skelStructure['__getitem__'](boneName)['get']('languages');
					multiLine = $p['op_eq'](skelStructure['__getitem__'](boneName)['get']('type'), 'str.markdown');
				}
				return $pyjs_kwargs_call(null, $m['StringEditBone'], null, null, [{'multiple':multiple, 'languages':languages, 'multiLine':multiLine}, moduleName, boneName, readOnly]);
			}
	, 3, ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['fromSkelStructure'] = $method;
			$method = $pyjs__bind_method2('onLangBtnClicked', function(btn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					btn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setLang']($p['getattr'](btn, 'lang'));
				return null;
			}
	, 1, [null,null,['self'],['btn']]);
			$cls_definition['onLangBtnClicked'] = $method;
			$method = $pyjs__bind_method2('isFilled', function(lang) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lang = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][3][1];
				var $and12,$iter5_idx,$iter5_iter,$and14,$and13,$iter4_nextval,$iter4_idx,item,$iter5_nextval,$and11,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter;
				if ($p['bool']($p['getattr'](self, 'languages'))) {
					if ($p['bool']($p['op_is'](lang, null))) {
						lang = $p['getattr'](self, 'languages')['__getitem__']($constant_int_0);
					}
					if ($p['bool']($p['getattr'](self, 'multiple'))) {
						$iter4_iter = $p['getattr']($p['getattr'](self, 'langEdits')['__getitem__'](lang), '_children');
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							item = $iter4_nextval['$nextval'];
							if ($p['bool'](($p['bool']($and11=$p['isinstance'](item, $m['Tag']))?$p['getattr'](item, 'input')['__getitem__']('value'):$and11))) {
								return true;
							}
						}
						return false;
					}
					else {
						return $p['bool']($p['len']($p['getattr'](self, 'langEdits')['__getitem__'](lang)['__getitem__']('value')));
					}
				}
				else if ($p['bool']($p['getattr'](self, 'multiple'))) {
					$iter5_iter = $p['getattr']($p['getattr'](self, 'tagContainer'), '_children');
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						item = $iter5_nextval['$nextval'];
						if ($p['bool'](($p['bool']($and13=$p['isinstance'](item, $m['Tag']))?$p['getattr'](item, 'input')['__getitem__']('value'):$and13))) {
							return true;
						}
					}
					return false;
				}
				return $p['bool']($p['len']($p['getattr'](self, 'input')['__getitem__']('value')));
			}
	, 1, [null,null,['self'],['lang', null]]);
			$cls_definition['isFilled'] = $method;
			$method = $pyjs__bind_method2('_updateLanguageButtons', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var lang,$iter6_idx,$iter6_type,$iter6_array,$iter6_iter,$iter6_nextval;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'languages')))) {
					return null;
				}
				$iter6_iter = $p['getattr'](self, 'languages');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					lang = $iter6_nextval['$nextval'];
					if ($p['bool'](self['isFilled'](lang))) {
						$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_unfilled');
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_filled')))) {
							$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_filled');
						}
					}
					else {
						$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_filled');
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_unfilled')))) {
							$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_unfilled');
						}
					}
					if ($p['bool']($p['op_eq'](lang, $p['getattr'](self, 'currentLanguage')))) {
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_active')))) {
							$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_active');
						}
					}
					else {
						$p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_active');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_updateLanguageButtons'] = $method;
			$method = $pyjs__bind_method2('setLang', function(lang) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lang = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var btn,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
				if ($p['bool']($p['getattr'](self, 'currentLanguage'))) {
					$p['getattr'](self, 'langEdits')['__getitem__']($p['getattr'](self, 'currentLanguage'))['__getitem__']('style')['__setitem__']('display', 'none');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentLanguage', lang) : $p['setattr'](self, 'currentLanguage', lang); 
				$p['getattr'](self, 'langEdits')['__getitem__']($p['getattr'](self, 'currentLanguage'))['__getitem__']('style')['__setitem__']('display', '');
				self['_updateLanguageButtons']();
				$iter7_iter = $p['getattr']($p['getattr'](self, 'buttonContainer'), '_children');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					btn = $iter7_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](btn, 'lang'), lang))) {
						if ($p['bool'](!btn['__getitem__']('class')['__contains__']('is_active'))) {
							btn['__getitem__']('class')['append']('is_active');
						}
					}
					else {
						btn['__getitem__']('class')['remove']('is_active');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['lang']]);
			$cls_definition['setLang'] = $method;
			$method = $pyjs__bind_method2('onBtnGenTag', function(btn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					btn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tag;
				tag = $pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':$p['getattr'](btn, 'lang')}, '']);
				tag['focus']();
				return null;
			}
	, 1, [null,null,['self'],['btn']]);
			$cls_definition['onBtnGenTag'] = $method;
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
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];
				var $iter11_nextval,$iter10_nextval,$iter11_array,$iter8_iter,$and22,$iter10_iter,$and20,$and21,val,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,$iter8_idx,$iter11_iter,$iter8_type,$iter10_idx,$and16,$iter8_nextval,$and15,$and18,$and19,lang,tagStr,$iter11_type,$iter8_array,$iter10_array,v,$iter10_type,$iter9_array,$and17;
				if ($p['bool'](!$p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName'))))) {
					return null;
				}
				data = data['__getitem__']($p['getattr'](self, 'boneName'));
				if ($p['bool'](!$p['bool'](data))) {
					return null;
				}
				if ($p['bool'](($p['bool']($and15=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and15))) {
					if (!( $p['isinstance'](data, $p['dict']) )) {
					   throw $p['AssertionError']();
					 }
					$iter8_iter = $p['getattr'](self, 'languages');
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						lang = $iter8_nextval['$nextval'];
						if ($p['bool'](data['keys']()['__contains__'](lang))) {
							val = data['__getitem__'](lang);
							if ($p['bool']($p['isinstance'](val, $p['str']))) {
								$pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':lang}, $m['html5']['utils']['unescape'](val)]);
							}
							else if ($p['bool']($p['isinstance'](val, $p['list']))) {
								$iter9_iter = val;
								$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
								while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
									v = $iter9_nextval['$nextval'];
									$pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':lang}, $m['html5']['utils']['unescape'](v)]);
								}
							}
						}
					}
				}
				else if ($p['bool'](($p['bool']($and17=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and17))) {
					if (!( $p['isinstance'](data, $p['dict']) )) {
					   throw $p['AssertionError']();
					 }
					$iter10_iter = $p['getattr'](self, 'languages');
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						lang = $iter10_nextval['$nextval'];
						if ($p['bool'](($p['bool']($and19=data['keys']()['__contains__'](lang))?data['__getitem__'](lang):$and19))) {
							$p['getattr'](self, 'langEdits')['__getitem__'](lang)['__setitem__']('value', $m['html5']['utils']['unescape']($p['str'](data['__getitem__'](lang))));
						}
						else {
							$p['getattr'](self, 'langEdits')['__getitem__'](lang)['__setitem__']('value', '');
						}
					}
				}
				else if ($p['bool'](($p['bool']($and21=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and21))) {
					if ($p['bool']($p['isinstance'](data, $p['list']))) {
						$iter11_iter = data;
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							tagStr = $iter11_nextval['$nextval'];
							self['genTag']($m['html5']['utils']['unescape'](tagStr));
						}
					}
					else {
						self['genTag']($m['html5']['utils']['unescape'](data));
					}
				}
				else {
					$p['getattr'](self, 'input')['__setitem__']('value', $m['html5']['utils']['unescape']($p['str'](data)));
				}
				self['_updateLanguageButtons']();
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
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and29,$and28,$iter13_idx,$and23,txt,$and27,$and26,$and25,$and24,$iter15_iter,res,$iter13_type,$iter14_array,$iter14_type,$iter15_array,$iter12_array,$iter14_iter,child,$and30,$iter14_idx,$iter14_nextval,lang,$iter13_nextval,$iter13_iter,$iter12_type,$iter15_idx,$iter13_array,$iter12_iter,$iter15_nextval,$iter15_type,$iter12_idx,$iter12_nextval;
				res = $p['dict']([]);
				if ($p['bool'](($p['bool']($and23=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and23))) {
					$iter12_iter = $p['getattr'](self, 'languages');
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						lang = $iter12_nextval['$nextval'];
						res['__setitem__']($p['sprintf']('%s.%s', $p['tuple']([$p['getattr'](self, 'boneName'), lang])), $p['list']([]));
						$iter13_iter = $p['getattr']($p['getattr'](self, 'langEdits')['__getitem__'](lang), '_children');
						$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
						while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
							child = $iter13_nextval['$nextval'];
							if ($p['bool']($p['isinstance'](child, $m['Tag']))) {
								res['__getitem__']($p['sprintf']('%s.%s', $p['tuple']([$p['getattr'](self, 'boneName'), lang])))['append']($p['getattr'](child, 'input')['__getitem__']('value'));
							}
						}
					}
				}
				else if ($p['bool'](($p['bool']($and25=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and25))) {
					$iter14_iter = $p['getattr'](self, 'languages');
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						lang = $iter14_nextval['$nextval'];
						txt = $p['getattr'](self, 'langEdits')['__getitem__'](lang)['__getitem__']('value');
						if ($p['bool'](txt)) {
							res['__setitem__']($p['sprintf']('%s.%s', $p['tuple']([$p['getattr'](self, 'boneName'), lang])), txt);
						}
					}
				}
				else if ($p['bool'](($p['bool']($and27=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and27))) {
					res['__setitem__']($p['getattr'](self, 'boneName'), $p['list']([]));
					$iter15_iter = $p['getattr']($p['getattr'](self, 'tagContainer'), '_children');
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						child = $iter15_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](child, $m['Tag']))) {
							res['__getitem__']($p['getattr'](self, 'boneName'))['append']($p['getattr'](child, 'input')['__getitem__']('value'));
						}
					}
				}
				else if ($p['bool'](($p['bool']($and29=!$p['bool']($p['getattr'](self, 'languages')))?!$p['bool']($p['getattr'](self, 'multiple')):$and29))) {
					res['__setitem__']($p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				return res;
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
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter16_idx,$iter17_type,txt,$iter16_iter,$iter17_iter,$iter16_type,res,$iter19_nextval,$iter19_iter,$iter18_idx,$iter16_nextval,$iter18_nextval,$iter17_nextval,lang,$iter18_iter,$iter19_array,$iter17_array,$and38,child,$and34,$and35,$and36,$and37,$and31,$and32,$and33,$iter16_array,$iter19_idx,$iter18_array,$iter19_type,$iter17_idx;
				if ($p['bool'](($p['bool']($and31=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and31))) {
					res = $p['dict']([]);
					$iter16_iter = $p['getattr'](self, 'languages');
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						lang = $iter16_nextval['$nextval'];
						res['__setitem__'](lang, $p['list']([]));
						$iter17_iter = $p['getattr'](self, 'langEdits')['__getitem__'](lang)['children']();
						$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
						while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
							child = $iter17_nextval['$nextval'];
							if ($p['bool']($p['isinstance'](child, $m['Tag']))) {
								res['__getitem__'](lang)['append']($p['getattr'](child, 'input')['__getitem__']('value'));
							}
						}
					}
				}
				else if ($p['bool'](($p['bool']($and33=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and33))) {
					res = $p['dict']([]);
					$iter18_iter = $p['getattr'](self, 'languages');
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						lang = $iter18_nextval['$nextval'];
						txt = $p['getattr'](self, 'langEdits')['__getitem__'](lang)['__getitem__']('value');
						if ($p['bool'](txt)) {
							res['__setitem__'](lang, txt);
						}
					}
				}
				else if ($p['bool'](($p['bool']($and35=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and35))) {
					res = $p['list']([]);
					$iter19_iter = self['tagContainer']['children']();
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						child = $iter19_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](child, $m['Tag']))) {
							res['append']($p['getattr'](child, 'input')['__getitem__']('value'));
						}
					}
				}
				else if ($p['bool'](($p['bool']($and37=!$p['bool']($p['getattr'](self, 'languages')))?!$p['bool']($p['getattr'](self, 'multiple')):$and37))) {
					res = $p['getattr'](self, 'input')['__getitem__']('value');
				}
				return $p['dict']([[$p['getattr'](self, 'boneName'), res]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('genTag', function(tag, editMode, lang) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					tag = arguments[1];
					editMode = arguments[2];
					lang = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd1a7080200cc26ed0917bff1b38fac9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof editMode == 'undefined') editMode=arguments['callee']['__args__'][4][1];
				if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];

				tag = $pyjs_kwargs_call(null, $m['Tag'], null, null, [{'readonly':$p['getattr'](self, 'readOnly')}, self, tag, editMode]);
				if ($p['bool'](!$p['op_is'](lang, null))) {
					$p['getattr'](self, 'langEdits')['__getitem__'](lang)['appendChild'](tag);
				}
				else {
					self['tagContainer']['appendChild'](tag);
				}
				return tag;
			}
	, 1, [null,null,['self'],['tag'],['editMode', false],['lang', null]]);
			$cls_definition['genTag'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StringEditBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForStringBone'] = function(moduleName, boneName, skelStucture) {
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

			return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'))['startswith']('str');
		};
		$m['CheckForStringBone']['__name__'] = 'CheckForStringBone';

		$m['CheckForStringBone']['__bind_type__'] = 0;
		$m['CheckForStringBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['ExtendedStringSearch'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.string';
			$cls_definition['__md5__'] = 'e82452a1b401728dcd1ec1063e4c0756';
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
					if (self.prototype['__md5__'] !== 'e82452a1b401728dcd1ec1063e4c0756') {
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

				$pyjs_kwargs_call($p['$$super']($m['ExtendedStringSearch'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extension', extension) : $p['setattr'](self, 'extension', extension); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('opMode', extension['__getitem__']('mode')) : $p['setattr'](self, 'opMode', extension['__getitem__']('mode')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterChangedEvent', $m['EventDispatcher']('filterChanged')) : $p['setattr'](self, 'filterChangedEvent', $m['EventDispatcher']('filterChanged')); 
				if (!( $p['list'](['equals', 'from', 'to', 'prefix', 'range'])['__contains__']($p['getattr'](self, 'opMode')) )) {
				   throw $p['AssertionError']();
				 }
				self['appendChild']($m['html5']['TextNode'](extension['__getitem__']('name')));
				self['sinkEvent']('onKeyDown');
				if ($p['bool']($p['list'](['equals', 'from', 'to', 'prefix'])['__contains__']($p['getattr'](self, 'opMode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Input']()) : $p['setattr'](self, 'input', $m['html5']['Input']()); 
					$p['getattr'](self, 'input')['__setitem__']('type', 'text');
					self['appendChild']($p['getattr'](self, 'input'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input1', $m['html5']['Input']()) : $p['setattr'](self, 'input1', $m['html5']['Input']()); 
					$p['getattr'](self, 'input1')['__setitem__']('type', 'text');
					self['appendChild']($p['getattr'](self, 'input1'));
					self['appendChild']($m['html5']['TextNode']('to'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input2', $m['html5']['Input']()) : $p['setattr'](self, 'input2', $m['html5']['Input']()); 
					$p['getattr'](self, 'input2')['__setitem__']('type', 'text');
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
					if (self.prototype['__md5__'] !== 'e82452a1b401728dcd1ec1063e4c0756') {
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
					if (self.prototype['__md5__'] !== 'e82452a1b401728dcd1ec1063e4c0756') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add3,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$add11;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'equals'))) {
					filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'from'))) {
					filter['__setitem__']($p['__op_add']($add3=$p['getattr'](self, 'extension')['__getitem__']('target'),$add4='$gt'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'to'))) {
					filter['__setitem__']($p['__op_add']($add5=$p['getattr'](self, 'extension')['__getitem__']('target'),$add6='$lt'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'prefix'))) {
					filter['__setitem__']($p['__op_add']($add7=$p['getattr'](self, 'extension')['__getitem__']('target'),$add8='$lk'), $p['getattr'](self, 'input')['__getitem__']('value'));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'))) {
					filter['__setitem__']($p['__op_add']($add9=$p['getattr'](self, 'extension')['__getitem__']('target'),$add10='$gt'), $p['getattr'](self, 'input1')['__getitem__']('value'));
					filter['__setitem__']($p['__op_add']($add11=$p['getattr'](self, 'extension')['__getitem__']('target'),$add12='$lt'), $p['getattr'](self, 'input2')['__getitem__']('value'));
				}
				return filter;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['updateFilter'] = $method;
			$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $or1,$or2,$and41,$and40,$and39;
				return ($p['bool']($and39=$p['isinstance'](extension, $p['dict']))?($p['bool']($and40=extension['keys']()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'string'))?$or1:extension['__getitem__']('type')['startswith']('string.')):$and40):$and39);
			}
	, 3, [null,null,['extension'],['view'],['modul']]);
			$cls_definition['canHandleExtension'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExtendedStringSearch', $p['tuple']($bases), $data);
		})();
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForStringBone'], $m['StringEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForStringBone'], $m['StringViewBoneDelegate']);
		$m['extendedSearchWidgetSelector']['insert']($constant_int_1, $p['getattr']($m['ExtendedStringSearch'], 'canHandleExtension'), $m['ExtendedStringSearch']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForStringBone'], $m['StringBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.string */


/* end module: bones.string */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'config.conf', 'config', 'event.EventDispatcher', 'event', 'html5.keycodes', 'i18n.translate', 'i18n', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
