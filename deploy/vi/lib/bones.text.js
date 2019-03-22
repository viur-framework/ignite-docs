/* start module: bones.text */
$pyjs['loaded_modules']['bones.text'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.text']['__was_initialized__']) return $pyjs['loaded_modules']['bones.text'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.text'];
	$m['__repr__'] = function() { return '<module: bones.text>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.text';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['text'] = $pyjs['loaded_modules']['bones.text'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['Wysiwyg'] = $p['___import___']('widgets.wysiwyg.Wysiwyg', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['TextBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.text';
			$cls_definition['__md5__'] = '14e06a96e12604f24d2e2d4ea02e2d06';
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
					if (self.prototype['__md5__'] !== '14e06a96e12604f24d2e2d4ea02e2d06') {
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
								resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'))['$$replace']('&quot;', '')['$$replace'](';', ' ')['$$replace']('"', "'");
							}
							else {
								if ($p['bool'](($p['cmp']($p['getattr'](data['__getitem__'](field)['keys'](), 'length'), $constant_int_0) == 1))) {
									resstr = data['__getitem__'](field)['__getitem__'](data['__getitem__'](field)['keys']()['__getitem__']($constant_int_0))['$$replace']('&quot;', '')['$$replace'](';', ' ')['$$replace']('"', "'");
								}
							}
						}
						return $p['sprintf']('"%s"', resstr);
					}
					else {
						return $p['str']($p['sprintf']('"%s"', data['__getitem__'](field)['$$replace']('&quot;', '')['$$replace'](';', ' ')['$$replace']('"', "'")));
					}
				}
				return $m['conf']['__getitem__']('empty_value');
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['TextViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.text';
			$cls_definition['__md5__'] = 'a4649036a3765d486967586164a9d981';
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
					if (self.prototype['__md5__'] !== 'a4649036a3765d486967586164a9d981') {
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

				$p['$$super']($m['TextViewBoneDelegate'], self)['__init__']();
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
					if (self.prototype['__md5__'] !== 'a4649036a3765d486967586164a9d981') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aspan,resstr;
				if ($p['bool'](data['keys']()['__contains__'](field))) {
					if ($p['bool']($p['isinstance'](data['__getitem__'](field), $p['dict']))) {
						resstr = '';
						if ($p['bool']($m['conf']['keys']()['__contains__']('currentlanguage'))) {
							if ($p['bool'](data['__getitem__'](field)['keys']()['__contains__']($m['conf']['__getitem__']('currentlanguage')))) {
								resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
							}
							else {
								if ($p['bool'](($p['cmp']($p['getattr'](data['__getitem__'](field)['keys'](), 'length'), $constant_int_0) == 1))) {
									resstr = data['__getitem__'](field)['__getitem__'](data['__getitem__'](field)['keys']()['__getitem__']($constant_int_0));
								}
							}
						}
						aspan = $m['html5']['Span']();
						aspan['appendChild']($m['html5']['TextNode'](resstr));
						aspan['__setitem__']('Title', $p['str'](data['__getitem__'](field)));
						return aspan;
					}
					else {
						return $m['html5']['Label']($p['str'](data['__getitem__'](field)));
					}
				}
				return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['TextEditBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.text';
			$cls_definition['__md5__'] = '9a6bda16eccb361b1f2d03ca4a7645d7';
			$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, isPlainText, languages, descrHint) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					moduleName = arguments[1];
					boneName = arguments[2];
					readOnly = arguments[3];
					isPlainText = arguments[4];
					languages = arguments[5];
					descrHint = arguments[6];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof descrHint != 'undefined') {
						if (descrHint !== null && typeof descrHint['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = descrHint;
							descrHint = arguments[7];
						}
					} else 					if (typeof languages != 'undefined') {
						if (languages !== null && typeof languages['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = languages;
							languages = arguments[7];
						}
					} else 					if (typeof isPlainText != 'undefined') {
						if (isPlainText !== null && typeof isPlainText['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isPlainText;
							isPlainText = arguments[7];
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
				if (typeof languages == 'undefined') languages=arguments['callee']['__args__'][7][1];
				if (typeof descrHint == 'undefined') descrHint=arguments['callee']['__args__'][8][1];
				var lang,abut,$iter1_nextval,$iter1_type,$and3,$and1,$and4,openEditorBtn,$iter1_array,$iter1_iter,$and2,$iter1_idx;
				$pyjs_kwargs_call($p['$$super']($m['TextEditBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedLang', false) : $p['setattr'](self, 'selectedLang', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isPlainText', isPlainText) : $p['setattr'](self, 'isPlainText', isPlainText); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('languages', languages) : $p['setattr'](self, 'languages', languages); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('descrHint', descrHint) : $p['setattr'](self, 'descrHint', descrHint); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentEditor', null) : $p['setattr'](self, 'currentEditor', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('valuesdict', $p['dict']()) : $p['setattr'](self, 'valuesdict', $p['dict']()); 
				if ($p['bool']($p['getattr'](self, 'languages'))) {
					if ($p['bool'](($p['bool']($and1=$m['conf']['__contains__']('currentlanguage'))?$p['getattr'](self, 'languages')['__contains__']($m['conf']['__getitem__']('currentlanguage')):$and1))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedLang', $m['conf']['__getitem__']('currentlanguage')) : $p['setattr'](self, 'selectedLang', $m['conf']['__getitem__']('currentlanguage')); 
					}
					else if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'languages')), $constant_int_0) == 1))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedLang', $p['getattr'](self, 'languages')['__getitem__']($constant_int_0)) : $p['setattr'](self, 'selectedLang', $p['getattr'](self, 'languages')['__getitem__']($constant_int_0)); 
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langButContainer', $m['html5']['Div']()) : $p['setattr'](self, 'langButContainer', $m['html5']['Div']()); 
					$p['getattr'](self, 'langButContainer')['__getitem__']('class')['append']('languagebuttons');
					$iter1_iter = $p['getattr'](self, 'languages');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						lang = $iter1_nextval['$nextval'];
						abut = $m['html5']['ext']['Button'](lang, $p['getattr'](self, 'changeLang'));
						abut['__setitem__']('value', lang);
						self['langButContainer']['appendChild'](abut);
					}
					self['appendChild']($p['getattr'](self, 'langButContainer'));
					self['refreshLangButContainer']();
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('input', $m['html5']['Textarea']()) : $p['setattr'](self, 'input', $m['html5']['Textarea']()); 
				self['appendChild']($p['getattr'](self, 'input'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previewDiv', $m['html5']['Div']()) : $p['setattr'](self, 'previewDiv', $m['html5']['Div']()); 
				$p['getattr'](self, 'previewDiv')['__getitem__']('class')['append']('preview');
				self['appendChild']($p['getattr'](self, 'previewDiv'));
				if ($p['bool']($p['getattr'](self, 'isPlainText'))) {
					$p['getattr'](self, 'previewDiv')['__getitem__']('style')['__setitem__']('display', 'none');
				}
				else {
					$p['getattr'](self, 'input')['__getitem__']('style')['__setitem__']('display', 'none');
				}
				if ($p['bool'](readOnly)) {
					$p['getattr'](self, 'input')['__setitem__']('readonly', true);
				}
				else if ($p['bool'](($p['bool']($and3=!$p['bool'](readOnly))?!$p['bool']($p['getattr'](self, 'isPlainText')):$and3))) {
					openEditorBtn = $m['html5']['ext']['Button']($m['translate']('Edit Text'), $p['getattr'](self, 'openTxt'));
					openEditorBtn['__getitem__']('class')['append']('textedit');
					openEditorBtn['__getitem__']('class')['append']('icon');
					self['appendChild'](openEditorBtn);
				}
				self['sinkEvent']('onClick');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['isPlainText'],['languages', null],['descrHint', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_setDisabled', function(disable) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					disable = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and5,$and6,$and7;
				$p['$$super']($m['TextEditBone'], self)['_setDisabled'](disable);
				if ($p['bool'](($p['bool']($and5=!$p['bool'](disable))?($p['bool']($and6=!$p['bool']($p['getattr'](self, '_disabledState')))?self['parent']()['__getitem__']('class')['__contains__']('is_active'):$and6):$and5))) {
					self['parent']()['__getitem__']('class')['remove']('is_active');
				}
				return null;
			}
	, 1, [null,null,['self'],['disable']]);
			$cls_definition['_setDisabled'] = $method;
			$method = $pyjs__bind_method2('openTxt', function() {
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
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
				var actionBarHint;
				if (!( $p['op_is']($p['getattr'](self, 'currentEditor'), null) )) {
				   throw $p['AssertionError']();
				 }
				actionBarHint = $p['getattr'](self, 'boneName');
				if ($p['bool']($p['getattr'](self, 'descrHint'))) {
					actionBarHint = $p['getattr'](self, 'descrHint');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentEditor', $pyjs_kwargs_call(null, $m['Wysiwyg'], null, null, [{'actionBarHint':actionBarHint}, $p['getattr'](self, 'input')['__getitem__']('value')])) : $p['setattr'](self, 'currentEditor', $pyjs_kwargs_call(null, $m['Wysiwyg'], null, null, [{'actionBarHint':actionBarHint}, $p['getattr'](self, 'input')['__getitem__']('value')])); 
				self['currentEditor']['saveTextEvent']['register'](self);
				self['currentEditor']['abortTextEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget']($p['getattr'](self, 'currentEditor'));
				self['parent']()['__getitem__']('class')['append']('is_active');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['openTxt'] = $method;
			$method = $pyjs__bind_method2('closeEditor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['bool']($p['getattr'](self, 'currentEditor')))) {
					return null;
				}
				$m['conf']['__getitem__']('mainWindow')['removeWidget']($p['getattr'](self, 'currentEditor'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentEditor', null) : $p['setattr'](self, 'currentEditor', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closeEditor'] = $method;
			$method = $pyjs__bind_method2('onSaveText', function(editor, txt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					editor = arguments[1];
					txt = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['op_is']($p['getattr'](self, 'currentEditor'), null) )) {
				   throw $p['AssertionError']();
				 }
				$p['getattr'](self, 'input')['__setitem__']('value', txt);
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')))) {
					$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__']('innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')) : $p['setattr']($p['getattr']($p['getattr'](self, 'previewDiv'), 'element'), 'innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')); 
				}
				self['closeEditor']();
				return null;
			}
	, 1, [null,null,['self'],['editor'],['txt']]);
			$cls_definition['onSaveText'] = $method;
			$method = $pyjs__bind_method2('onAbortText', function(editor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					editor = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['op_is']($p['getattr'](self, 'currentEditor'), null) )) {
				   throw $p['AssertionError']();
				 }
				self['closeEditor']();
				return null;
			}
	, 1, [null,null,['self'],['editor']]);
			$cls_definition['onAbortText'] = $method;
			$method = $pyjs__bind_method2('changeLang', function(btn) {
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'valuesdict')['__setitem__']($p['getattr'](self, 'selectedLang'), $p['getattr'](self, 'input')['__getitem__']('value'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedLang', btn['__getitem__']('value')) : $p['setattr'](self, 'selectedLang', btn['__getitem__']('value')); 
				if ($p['bool'](self['valuesdict']['keys']()['__contains__']($p['getattr'](self, 'selectedLang')))) {
					$p['getattr'](self, 'input')['__setitem__']('value', $p['getattr'](self, 'valuesdict')['__getitem__']($p['getattr'](self, 'selectedLang')));
				}
				else {
					$p['getattr'](self, 'input')['__setitem__']('value', '');
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')))) {
					$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__']('innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')) : $p['setattr']($p['getattr']($p['getattr'](self, 'previewDiv'), 'element'), 'innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')); 
				}
				self['refreshLangButContainer']();
				return null;
			}
	, 1, [null,null,['self'],['btn']]);
			$cls_definition['changeLang'] = $method;
			$method = $pyjs__bind_method2('refreshLangButContainer', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and9,$iter2_nextval,$iter2_type,$iter2_iter,abut,$iter2_idx,$iter2_array;
				$iter2_iter = $p['getattr']($p['getattr'](self, 'langButContainer'), '_children');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					abut = $iter2_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and8=$p['getattr'](self, 'valuesdict')['__contains__'](abut['__getitem__']('value')))?$p['getattr'](self, 'valuesdict')['__getitem__'](abut['__getitem__']('value')):$and8))) {
						if ($p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_filled')))) {
							abut['__getitem__']('class')['append']('is_filled');
						}
					}
					else {
						if ($p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_unfilled')))) {
							abut['__getitem__']('class')['append']('is_unfilled');
						}
					}
					if ($p['bool']($p['op_eq'](abut['__getitem__']('value'), $p['getattr'](self, 'selectedLang')))) {
						if ($p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_active')))) {
							abut['__getitem__']('class')['append']('is_active');
						}
					}
					else {
						abut['__getitem__']('class')['remove']('is_active');
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['refreshLangButContainer'] = $method;
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
				var $and15,descr,readOnly,$and12,$and13,$and10,$and11,$and14,langs,isPlainText;
				readOnly = ($p['bool']($and10=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and10);
				isPlainText = ($p['bool']($and12=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('validHtml'))?!$p['bool'](skelStructure['__getitem__'](boneName)['__getitem__']('validHtml')):$and12);
				langs = ($p['bool'](($p['bool']($and14=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('languages'))?skelStructure['__getitem__'](boneName)['__getitem__']('languages'):$and14))? (skelStructure['__getitem__'](boneName)['__getitem__']('languages')) : (null));
				descr = ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('descr'))? (skelStructure['__getitem__'](boneName)['__getitem__']('descr')) : (null));
				return $pyjs_kwargs_call(null, $m['TextEditBone'], null, null, [{'descrHint':descr}, moduleName, boneName, readOnly, isPlainText, langs]);
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var lang,$iter3_idx,$iter3_type,$and16,$iter3_iter,$iter3_array,$and18,$iter3_nextval,$and17;
				self['valuesdict']['clear']();
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					if ($p['bool']($p['getattr'](self, 'languages'))) {
						$iter3_iter = $p['getattr'](self, 'languages');
						$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
						while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
							lang = $iter3_nextval['$nextval'];
							if ($p['bool'](($p['bool']($and16=data['keys']()['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and17=$p['isinstance'](data['__getitem__']($p['getattr'](self, 'boneName')), $p['dict']))?data['__getitem__']($p['getattr'](self, 'boneName'))['keys']()['__contains__'](lang):$and17):$and16))) {
								$p['getattr'](self, 'valuesdict')['__setitem__'](lang, data['__getitem__']($p['getattr'](self, 'boneName'))['__getitem__'](lang));
							}
							else {
								$p['getattr'](self, 'valuesdict')['__setitem__'](lang, '');
							}
						}
						$p['getattr'](self, 'input')['__setitem__']('value', $p['getattr'](self, 'valuesdict')['__getitem__']($p['getattr'](self, 'selectedLang')));
					}
					else {
						$p['getattr'](self, 'input')['__setitem__']('value', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ('')));
					}
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')))) {
					$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['__setattr__']('innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')) : $p['setattr']($p['getattr']($p['getattr'](self, 'previewDiv'), 'element'), 'innerHTML', $p['getattr'](self, 'input')['__getitem__']('value')); 
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'selectedLang'))) {
					$p['getattr'](self, 'valuesdict')['__setitem__']($p['getattr'](self, 'selectedLang'), $p['getattr'](self, 'input')['__getitem__']('value'));
					return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'valuesdict')]]);
				}
				else {
					return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value')]]);
				}
				return null;
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['serializeForPost']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'previewDiv')))) {
					event['stopPropagation']();
					event['preventDefault']();
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')))) {
						self['openTxt']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '9a6bda16eccb361b1f2d03ca4a7645d7') {
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
			return $p['_create_class']('TextEditBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForTextBone'] = function(moduleName, boneName, skelStucture) {
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

			return $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'text');
		};
		$m['CheckForTextBone']['__name__'] = 'CheckForTextBone';

		$m['CheckForTextBone']['__bind_type__'] = 0;
		$m['CheckForTextBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_3, $m['CheckForTextBone'], $m['TextEditBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForTextBone'], $m['TextViewBoneDelegate']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForTextBone'], $m['TextBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.text */


/* end module: bones.text */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'config.conf', 'config', 'widgets.wysiwyg.Wysiwyg', 'widgets', 'widgets.wysiwyg', 'i18n.translate', 'i18n', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
