/* start module: actions.list_order */
$pyjs['loaded_modules']['actions.list_order'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.list_order']['__was_initialized__']) return $pyjs['loaded_modules']['actions.list_order'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.list_order'];
	$m['__repr__'] = function() { return '<module: actions.list_order>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.list_order';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['actions']['list_order'] = $pyjs['loaded_modules']['actions.list_order'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', 'actions');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'actions', null, false);
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'actions', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'actions', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
		$m['ShopMarkAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list_order';
			$cls_definition['__md5__'] = '1f9d624e5a06ad838e608e3e3c0146df';
			$method = $pyjs__bind_method2('__init__', function(action, title, cls, txtQuestion, txtSuccess, txtFailure) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					action = arguments[1];
					title = arguments[2];
					cls = arguments[3];
					txtQuestion = arguments[4];
					txtSuccess = arguments[5];
					txtFailure = arguments[6];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof txtFailure != 'undefined') {
						if (txtFailure !== null && typeof txtFailure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = txtFailure;
							txtFailure = arguments[7];
						}
					} else 					if (typeof txtSuccess != 'undefined') {
						if (txtSuccess !== null && typeof txtSuccess['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = txtSuccess;
							txtSuccess = arguments[7];
						}
					} else 					if (typeof txtQuestion != 'undefined') {
						if (txtQuestion !== null && typeof txtQuestion['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = txtQuestion;
							txtQuestion = arguments[7];
						}
					} else 					if (typeof cls != 'undefined') {
						if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cls;
							cls = arguments[7];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[7];
						}
					} else 					if (typeof action != 'undefined') {
						if (action !== null && typeof action['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = action;
							action = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof cls == 'undefined') cls=arguments['callee']['__args__'][5][1];
				if (typeof txtQuestion == 'undefined') txtQuestion=arguments['callee']['__args__'][6][1];
				if (typeof txtSuccess == 'undefined') txtSuccess=arguments['callee']['__args__'][7][1];
				if (typeof txtFailure == 'undefined') txtFailure=arguments['callee']['__args__'][8][1];

				$pyjs_kwargs_call($p['$$super']($m['ShopMarkAction'], self), '__init__', args, kwargs, [{}, $m['translate'](title)]);
				self['__setitem__']('disabled', true);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', true) : $p['setattr'](self, 'isDisabled', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('action', action) : $p['setattr'](self, 'action', action); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txtQuestion', txtQuestion) : $p['setattr'](self, 'txtQuestion', txtQuestion); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txtSuccess', txtSuccess) : $p['setattr'](self, 'txtSuccess', txtSuccess); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txtFailure', txtFailure) : $p['setattr'](self, 'txtFailure', txtFailure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('done', $constant_int_0) : $p['setattr'](self, 'done', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('failed', $constant_int_0) : $p['setattr'](self, 'failed', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('total', $constant_int_0) : $p['setattr'](self, 'total', $constant_int_0); 
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['action'],['title'],['cls', ''],['txtQuestion', null],['txtSuccess', null],['txtFailure', null]]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['ShopMarkAction'], self)['onAttach']();
				self['parent']()['parent']()['selectionChangedEvent']['register'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['ShopMarkAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['len'](selection))) {
					if ($p['bool']($p['getattr'](self, 'isDisabled'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', false) : $p['setattr'](self, 'isDisabled', false); 
					}
					self['__setitem__']('disabled', false);
				}
				else {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')))) {
						self['__setitem__']('disabled', true);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', true) : $p['setattr'](self, 'isDisabled', true); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionChanged'] = $method;
			$method = $pyjs__bind_method2('setPayed', function(order) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					order = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'setPayedSucceeded'), 'failureHandler':$p['getattr'](self, 'setPayedFailed')}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr'](self, 'action'), $p['dict']([['key', order['__getitem__']('key')]])]);
				return null;
			}
	, 1, [null,null,['self'],['order']]);
			$cls_definition['setPayed'] = $method;
			$method = $pyjs__bind_method2('setPayedSucceeded', function(response) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					response = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('done', $p['__op_add']($add1=$p['getattr'](self, 'done'),$add2=$constant_int_1)) : $p['setattr'](self, 'done', $p['__op_add']($add1=$p['getattr'](self, 'done'),$add2=$constant_int_1)); 
				if ($p['bool']($p['op_eq']($p['__op_add']($add3=$p['getattr'](self, 'done'),$add4=$p['getattr'](self, 'failed')), $p['getattr'](self, 'total')))) {
					$m['conf']['__getitem__']('mainWindow')['log']('success', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['getattr'](self, 'done')}, $p['getattr'](self, 'txtSuccess')]));
					$m['NetworkService']['notifyChange']($p['getattr'](self['parent']()['parent'](), 'module'));
				}
				return null;
			}
	, 1, [null,null,['self'],['response']]);
			$cls_definition['setPayedSucceeded'] = $method;
			$method = $pyjs__bind_method2('setPayedFailed', function(response) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					response = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add5;
				$m['conf']['__getitem__']('mainWindow')['log']('error', $m['translate']($p['getattr'](self, 'txtFailure')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('failed', $p['__op_add']($add5=$p['getattr'](self, 'failed'),$add6=$constant_int_1)) : $p['setattr'](self, 'failed', $p['__op_add']($add5=$p['getattr'](self, 'failed'),$add6=$constant_int_1)); 
				return null;
			}
	, 1, [null,null,['self'],['response']]);
			$cls_definition['setPayedFailed'] = $method;
			$method = $pyjs__bind_method2('doMarkPayed', function() {
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
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
				var selection,$iter1_nextval,$iter1_type,$iter1_iter,item,$iter1_array,$iter1_idx;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('done', $constant_int_0) : $p['setattr'](self, 'done', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('total', $p['len'](selection)) : $p['setattr'](self, 'total', $p['len'](selection)); 
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					item = $iter1_nextval['$nextval'];
					self['setPayed'](item);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doMarkPayed'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
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
					if (self.prototype['__md5__'] !== '1f9d624e5a06ad838e608e3e3c0146df') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var selection;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':$m['translate']('Mark payed'), 'yesCallback':$p['getattr'](self, 'doMarkPayed')}, $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['len'](selection)}, $p['getattr'](self, 'txtQuestion')])]);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ShopMarkAction', $p['tuple']($bases), $data);
		})();
		$m['ShopMarkPayedAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list_order';
			$cls_definition['__md5__'] = '955634eb6b67fd084e829dc4866db135';
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
					if (self.prototype['__md5__'] !== '955634eb6b67fd084e829dc4866db135') {
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

				$pyjs_kwargs_call($p['$$super']($m['ShopMarkPayedAction'], self), '__init__', null, null, [{'cls':'order_markpayed', 'txtQuestion':'Do you really want to mark {count} orders as payed?', 'txtSuccess':'{count} orders had been successfully set as payed.', 'txtFailure':'Failed to mark order payed'}, 'markPayed', 'Mark payed']);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and2,$and1;
				return ($p['bool']($and1=$p['op_eq'](actionName, 'markpayed'))?$p['op_eq'](handler, 'list.order'):$and1);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($m['ShopMarkAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ShopMarkPayedAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ShopMarkPayedAction'], 'isSuitableFor'), $m['ShopMarkPayedAction']);
		$m['ShopMarkSentAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list_order';
			$cls_definition['__md5__'] = '915f07edc253b1f19917d426d71941d2';
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
					if (self.prototype['__md5__'] !== '915f07edc253b1f19917d426d71941d2') {
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

				$pyjs_kwargs_call($p['$$super']($m['ShopMarkSentAction'], self), '__init__', null, null, [{'cls':'order_marksent', 'txtQuestion':'Do you really want to mark {count} orders as sent?', 'txtSuccess':'{count} orders had been successfully set as sent.', 'txtFailure':'Failed to mark order sent'}, 'markSend', 'Mark sent']);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and3,$and4;
				return ($p['bool']($and3=$p['op_eq'](actionName, 'marksent'))?$p['op_eq'](handler, 'list.order'):$and3);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($m['ShopMarkAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ShopMarkSentAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ShopMarkSentAction'], 'isSuitableFor'), $m['ShopMarkSentAction']);
		$m['ShopMarkCanceledAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list_order';
			$cls_definition['__md5__'] = 'f0d6273512086cea5a42854aeff0ae97';
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
					if (self.prototype['__md5__'] !== 'f0d6273512086cea5a42854aeff0ae97') {
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

				$pyjs_kwargs_call($p['$$super']($m['ShopMarkCanceledAction'], self), '__init__', null, null, [{'cls':'order_markcanceled', 'txtQuestion':'Do you really want to cancel {count} orders?', 'txtSuccess':'{count} orders had been successfully canceled.', 'txtFailure':'Failed to cancel order'}, 'markCanceled', 'Mark canceled']);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and6,$and5;
				return ($p['bool']($and5=$p['op_eq'](actionName, 'markcanceled'))?$p['op_eq'](handler, 'list.order'):$and5);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($m['ShopMarkAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ShopMarkCanceledAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ShopMarkCanceledAction'], 'isSuitableFor'), $m['ShopMarkCanceledAction']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end actions.list_order */


/* end module: actions.list_order */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
