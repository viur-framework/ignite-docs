/* start module: login */
$pyjs['loaded_modules']['login'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['login']['__was_initialized__']) return $pyjs['loaded_modules']['login'];
	var $m = $pyjs['loaded_modules']['login'];
	$m['__repr__'] = function() { return '<module: login>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'login';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_13 = new $p['int'](13);
		$m['html5'] = $p['___import___']('html5', null);
		$m['re'] = $p['___import___']('re', null);
		$m['json'] = $p['___import___']('json', null);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', null, null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', null, null, false);
		$m['conf'] = $p['___import___']('config.conf', null, null, false);
		$m['loginHandlerSelector'] = $p['___import___']('priorityqueue.loginHandlerSelector', null, null, false);
		$m['Screen'] = $p['___import___']('screen.Screen', null, null, false);
		$m['InternalEdit'] = $p['___import___']('widgets.InternalEdit', null, null, false);
		$m['LoginInputField'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'login';
			$cls_definition['__md5__'] = '44ab4c44e9d5c663cf2b0a4e091dffa7';
			$method = $pyjs__bind_method2('__init__', function(notifier) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					notifier = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '44ab4c44e9d5c663cf2b0a4e091dffa7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof notifier != 'undefined') {
						if (notifier !== null && typeof notifier['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = notifier;
							notifier = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['LoginInputField'], self), '__init__', args, kwargs, [{}]);
				self['addClass']('vi-login-input');
				self['sinkEvent']('onKeyPress');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onKeyPressEvent', $m['EventDispatcher']('keyPress')) : $p['setattr'](self, 'onKeyPressEvent', $m['EventDispatcher']('keyPress')); 
				self['onKeyPressEvent']['register'](notifier);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['notifier']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(event) {
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
					if (self.prototype['__md5__'] !== '44ab4c44e9d5c663cf2b0a4e091dffa7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onKeyPressEvent']['fire'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyPress'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Input'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LoginInputField', $p['tuple']($bases), $data);
		})();
		$m['BaseLoginHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'login';
			$cls_definition['__md5__'] = '02fa23f124297ebcd3f5aa5c39119e97';
			$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					loginScreen = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof loginScreen != 'undefined') {
						if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = loginScreen;
							loginScreen = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				if (!( $p['isinstance'](loginScreen, (typeof LoginScreen == "undefined"?$m['LoginScreen']:LoginScreen)) )) {
				   throw $p['AssertionError']();
				 }
				$pyjs_kwargs_call($p['$$super']($m['BaseLoginHandler'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginScreen', loginScreen) : $p['setattr'](self, 'loginScreen', loginScreen); 
				if ($p['bool'](!$p['bool']($p['dir'](self)['__contains__']('cssname')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cssname', self['__class__']['__name__']['lower']()) : $p['setattr'](self, 'cssname', self['__class__']['__name__']['lower']()); 
				}
				self['addClass']('vi-login-handler');
				self['addClass']($p['sprintf']('vi-login-handler-%s', $p['getattr'](self, 'cssname')));
				self['sinkEvent']('onClick');
				self['loginScreen']['loginMethodSelector']['appendChild'](self);
				self['appendChild']($m['html5']['TextNode']($m['translate']($p['sprintf']('vi.login.handler.%s', $p['getattr'](self, 'cssname')))));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mask', $m['html5']['Div']()) : $p['setattr'](self, 'mask', $m['html5']['Div']()); 
				self['mask']['addClass']('vi-login-mask');
				self['mask']['addClass']($p['sprintf']('vi-login-mask-%s', $p['getattr'](self, 'cssname')));
				loginScreen['dialog']['appendChild']($p['getattr'](self, 'mask'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
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
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['loginScreen']['selectHandler'](self);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('enable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['addClass']('is-active');
				self['mask']['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['enable'] = $method;
			$method = $pyjs__bind_method2('disable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeClass']('is-active');
				self['mask']['hide']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['disable'] = $method;
			$method = $pyjs__bind_method2('lock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['loginScreen']['lock']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['lock'] = $method;
			$method = $pyjs__bind_method2('unlock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['loginScreen']['unlock']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['unlock'] = $method;
			$method = $pyjs__bind_method2('login', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['reset']();
				self['loginScreen']['invoke']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['login'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('parseAnswer', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '02fa23f124297ebcd3f5aa5c39119e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res,answ;
				res = $m['re']['search']('JSON\\(\\((.*)\\)\\)', $p['getattr'](req, 'result'));
				if ($p['bool'](res)) {
					answ = $m['json']['loads'](res['group']($constant_int_1));
				}
				else {
					answ = $m['NetworkService']['decode'](req);
				}
				return answ;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['parseAnswer'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BaseLoginHandler', $p['tuple']($bases), $data);
		})();
		$m['UserPasswordLoginHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'login';
			$cls_definition['__md5__'] = 'a7e5b062a82e96b6ea7509b9d1611fad';
			$cls_definition['cssname'] = 'userpassword';
			$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					loginScreen = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof loginScreen != 'undefined') {
						if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = loginScreen;
							loginScreen = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $assign1;
				$pyjs_kwargs_call($p['$$super']($m['UserPasswordLoginHandler'], self), '__init__', args, kwargs, [{}, loginScreen]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pwform', $m['html5']['Form']()) : $p['setattr'](self, 'pwform', $m['html5']['Form']()); 
				self['mask']['appendChild']($p['getattr'](self, 'pwform'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('username', $m['LoginInputField'](self)) : $p['setattr'](self, 'username', $m['LoginInputField'](self)); 
				$p['getattr'](self, 'username')['__setitem__']('name', 'username');
				$p['getattr'](self, 'username')['__setitem__']('placeholder', $m['translate']('Username'));
				self['pwform']['appendChild']($p['getattr'](self, 'username'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('password', $m['LoginInputField'](self)) : $p['setattr'](self, 'password', $m['LoginInputField'](self)); 
				$p['getattr'](self, 'password')['__setitem__']('type', 'password');
				$p['getattr'](self, 'password')['__setitem__']('name', 'password');
				$p['getattr'](self, 'password')['__setitem__']('placeholder', $m['translate']('Password'));
				self['pwform']['appendChild']($p['getattr'](self, 'password'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, $m['translate']('Login')])) : $p['setattr'](self, 'loginBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, $m['translate']('Login')])); 
				self['loginBtn']['addClass']('vi-login-btn');
				self['pwform']['appendChild']($p['getattr'](self, 'loginBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otpform', $m['html5']['Form']()) : $p['setattr'](self, 'otpform', $m['html5']['Form']()); 
				self['otpform']['hide']();
				self['mask']['appendChild']($p['getattr'](self, 'otpform'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('otp', $m['LoginInputField'](self)) : $p['setattr'](self, 'otp', $m['LoginInputField'](self)); 
				$p['getattr'](self, 'otp')['__setitem__']('name', 'otp');
				$p['getattr'](self, 'otp')['__setitem__']('placeholder', $m['translate']('One Time Password'));
				self['otpform']['appendChild']($p['getattr'](self, 'otp'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('verifyBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onVerifyClick')}, $m['translate']('Verify')])) : $p['setattr'](self, 'verifyBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onVerifyClick')}, $m['translate']('Verify')])); 
				self['otpform']['appendChild']($p['getattr'](self, 'verifyBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editform', $m['html5']['Div']()) : $p['setattr'](self, 'editform', $m['html5']['Div']()); 
				self['editform']['hide']();
				self['mask']['appendChild']($p['getattr'](self, 'editform'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('edit', $m['html5']['Div']()) : $p['setattr'](self, 'edit', $m['html5']['Div']()); 
				self['editform']['appendChild']($p['getattr'](self, 'edit'));
				$assign1 = null;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editskey', $assign1) : $p['setattr'](self, 'editskey', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editaction', $assign1) : $p['setattr'](self, 'editaction', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editwidget', $assign1) : $p['setattr'](self, 'editwidget', $assign1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sendBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onSendClick')}, $m['translate']('Send')])) : $p['setattr'](self, 'sendBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onSendClick')}, $m['translate']('Send')])); 
				self['editform']['appendChild']($p['getattr'](self, 'sendBtn'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onKeyPress', function(event) {
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2;
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'keyCode'), $constant_int_13))) {
					if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'username')))) {
						if ($p['bool']($p['getattr'](self, 'username')['__getitem__']('value'))) {
							self['password']['element']['focus']();
						}
					}
					else if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'password')))) {
						if ($p['bool'](($p['bool']($and1=$p['getattr'](self, 'username')['__getitem__']('value'))?$p['getattr'](self, 'password')['__getitem__']('value'):$and1))) {
							self['onLoginClick']();
						}
					}
					else if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'otp')))) {
						if ($p['bool']($p['getattr'](self, 'otp')['__getitem__']('value'))) {
							self['onVerifyClick']();
						}
					}
					event['stopPropagation']();
					event['preventDefault']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyPress'] = $method;
			$method = $pyjs__bind_method2('onLoginClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $and3,$and4;
				if ($p['bool'](!$p['bool'](($p['bool']($and3=$p['getattr'](self, 'username')['__getitem__']('value'))?$p['getattr'](self, 'password')['__getitem__']('value'):$and3)))) {
					return null;
				}
				$p['getattr'](self, 'loginBtn')['__setitem__']('disabled', true);
				self['lock']();
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':$p['dict']([['name', $p['getattr'](self, 'username')['__getitem__']('value')], ['password', $p['getattr'](self, 'password')['__getitem__']('value')]]), 'secure':true, 'successHandler':$p['getattr'](self, 'doLoginSuccess'), 'failureHandler':$p['getattr'](self, 'doLoginFailure')}, 'user', 'auth_userpassword/login']);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onLoginClick'] = $method;
			$method = $pyjs__bind_method2('doLoginSuccess', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and5,$and6,answ;
				self['unlock']();
				$p['getattr'](self, 'loginBtn')['__setitem__']('disabled', false);
				$p['getattr'](self, 'sendBtn')['__setitem__']('disabled', false);
				answ = self['parseAnswer'](req);
				$p['printFunc']([$p['tuple'](['doLoginSuccess', answ])], 1);
				if ($p['bool']($p['op_eq'](answ, 'OKAY'))) {
					self['login']();
				}
				else if ($p['bool'](($p['bool']($and5=$p['isinstance'](answ, $p['dict']))?answ['__contains__']('action'):$and5))) {
					if ($p['bool']($p['op_eq'](answ['__getitem__']('action'), 'otp'))) {
						self['pwform']['hide']();
						self['editform']['hide']();
						self['otpform']['show']();
						self['otp']['focus']();
					}
					else {
						self['pwform']['hide']();
						self['otpform']['hide']();
						self['edit']['removeAllChildren']();
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editaction', $p['sprintf']('auth_userpassword/%s', answ['__getitem__']('action'))) : $p['setattr'](self, 'editaction', $p['sprintf']('auth_userpassword/%s', answ['__getitem__']('action'))); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editwidget', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'defaultCat':null}, answ['__getitem__']('structure'), answ['__getitem__']('values')])) : $p['setattr'](self, 'editwidget', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'defaultCat':null}, answ['__getitem__']('structure'), answ['__getitem__']('values')])); 
						self['edit']['appendChild']($p['getattr'](self, 'editwidget'));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editskey', answ['__getitem__']('params')['get']('skey')) : $p['setattr'](self, 'editskey', answ['__getitem__']('params')['get']('skey')); 
						self['editform']['show']();
					}
				}
				else {
					self['password']['focus']();
				}
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['doLoginSuccess'] = $method;
			$method = $pyjs__bind_method2('doLoginFailure', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof code != 'undefined') {
						if (code !== null && typeof code['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = code;
							code = arguments[3];
						}
					} else 					if (typeof req != 'undefined') {
						if (req !== null && typeof req['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = req;
							req = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}

				(typeof alert == "undefined"?$m['alert']:alert)($p['sprintf']('Failure %d', $p['int'](code)));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['req'],['code']]);
			$cls_definition['doLoginFailure'] = $method;
			$method = $pyjs__bind_method2('onVerifyClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				if ($p['bool'](!$p['bool']($p['getattr'](self, 'otp')['__getitem__']('value')))) {
					return null;
				}
				$p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', true);
				self['lock']();
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':$p['dict']([['otptoken', $p['getattr'](self, 'otp')['__getitem__']('value')]]), 'secure':true, 'successHandler':$p['getattr'](self, 'doVerifySuccess'), 'failureHandler':$p['getattr'](self, 'doVerifyFailure')}, 'user', 'f2_timebasedotp/otp']);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onVerifyClick'] = $method;
			$method = $pyjs__bind_method2('doVerifySuccess', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var answ;
				self['unlock']();
				$p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', false);
				answ = self['parseAnswer'](req);
				$p['printFunc']([$p['tuple'](['doVerifySuccess', answ])], 1);
				if ($p['bool']($p['op_eq'](answ, 'OKAY'))) {
					self['login']();
					return null;
				}
				$p['getattr'](self, 'otp')['__setitem__']('value', '');
				self['otp']['focus']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['doVerifySuccess'] = $method;
			$method = $pyjs__bind_method2('doVerifyFailure', function() {
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
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

				self['reset']();
				self['enable']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doVerifyFailure'] = $method;
			$method = $pyjs__bind_method2('onSendClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $and8,params,$and7;
				if (!( ($p['bool']($and7=$p['getattr'](self, 'editwidget'))?$p['getattr'](self, 'editaction'):$and7) )) {
				   throw $p['AssertionError']();
				 }
				self['lock']();
				$p['getattr'](self, 'sendBtn')['__setitem__']('disabled', true);
				params = self['editwidget']['doSave']();
				if ($p['bool']($p['getattr'](self, 'editskey'))) {
					params['__setitem__']('skey', $p['getattr'](self, 'editskey'));
				}
				$p['printFunc']([params], 1);
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':params, 'secure':!$p['bool']($p['getattr'](self, 'editskey')), 'successHandler':$p['getattr'](self, 'doLoginSuccess'), 'failureHandler':$p['getattr'](self, 'doLoginFailure')}, 'user', $p['getattr'](self, 'editaction')]);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onSendClick'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign2;
				$p['getattr'](self, 'loginBtn')['__setitem__']('disabled', false);
				$p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', false);
				$p['getattr'](self, 'otp')['__setitem__']('value', '');
				$p['getattr'](self, 'username')['__setitem__']('value', '');
				$p['getattr'](self, 'password')['__setitem__']('value', '');
				self['edit']['removeAllChildren']();
				$assign2 = null;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editskey', $assign2) : $p['setattr'](self, 'editskey', $assign2); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editwidget', $assign2) : $p['setattr'](self, 'editwidget', $assign2); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editaction', $assign2) : $p['setattr'](self, 'editaction', $assign2); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('enable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pwform']['show']();
				self['otpform']['hide']();
				self['editform']['hide']();
				$p['$$super']($m['UserPasswordLoginHandler'], self)['enable']();
				$m['DeferredCall']($p['getattr'](self, 'focusLaterIdiot'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['enable'] = $method;
			$method = $pyjs__bind_method2('focusLaterIdiot', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a7e5b062a82e96b6ea7509b9d1611fad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['username']['focus']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['focusLaterIdiot'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(method, secondFactor) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				return $p['op_eq'](method, 'X-VIUR-AUTH-User-Password');
			}
	, 3, [null,null,['method'],['secondFactor']]);
			$cls_definition['canHandle'] = $method;
			var $bases = new Array($m['BaseLoginHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserPasswordLoginHandler', $p['tuple']($bases), $data);
		})();
		$m['loginHandlerSelector']['insert']($constant_int_0, $p['getattr']($m['UserPasswordLoginHandler'], 'canHandle'), $m['UserPasswordLoginHandler']);
		$m['GoogleAccountLoginHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'login';
			$cls_definition['__md5__'] = 'ae2071397c7091790c47bd06cf4ae9f6';
			$cls_definition['cssname'] = 'googleaccount';
			$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					loginScreen = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae2071397c7091790c47bd06cf4ae9f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof loginScreen != 'undefined') {
						if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = loginScreen;
							loginScreen = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['GoogleAccountLoginHandler'], self), '__init__', args, kwargs, [{}, loginScreen]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, $m['translate']('Login with Google')])) : $p['setattr'](self, 'loginBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, $m['translate']('Login with Google')])); 
				self['loginBtn']['addClass']('vi-login-btn');
				self['mask']['appendChild']($p['getattr'](self, 'loginBtn'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onLoginClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'ae2071397c7091790c47bd06cf4ae9f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['lock']();
				(typeof eval == "undefined"?$m['eval']:eval)('window.top.location = "/vi/user/auth_googleaccount/login"');
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onLoginClick'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(method, secondFactor) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				return $p['op_eq'](method, 'X-VIUR-AUTH-Google-Account');
			}
	, 3, [null,null,['method'],['secondFactor']]);
			$cls_definition['canHandle'] = $method;
			var $bases = new Array($m['BaseLoginHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GoogleAccountLoginHandler', $p['tuple']($bases), $data);
		})();
		$m['loginHandlerSelector']['insert']($constant_int_0, $p['getattr']($m['GoogleAccountLoginHandler'], 'canHandle'), $m['GoogleAccountLoginHandler']);
		$m['LoginScreen'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'login';
			$cls_definition['__md5__'] = 'c06b65b8536600bad05215eb29f4932f';
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
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
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
				var img,h1,header;
				$pyjs_kwargs_call($p['$$super']($m['LoginScreen'], self), '__init__', args, kwargs, [{}]);
				self['addClass']('vi-login');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dialog', $m['html5']['Div']()) : $p['setattr'](self, 'dialog', $m['html5']['Div']()); 
				self['dialog']['addClass']('vi-login-dialog');
				self['appendChild']($p['getattr'](self, 'dialog'));
				header = $m['html5']['Div']();
				header['addClass']('vi-login-header');
				self['dialog']['appendChild'](header);
				h1 = $m['html5']['H1']();
				h1['addClass']('vi-login-headline');
				h1['appendChild']($m['html5']['TextNode']($m['translate']('vi.login.title')));
				header['appendChild'](h1);
				img = $m['html5']['Img']();
				img['addClass']('vi-login-logo');
				img['__setitem__']('src', 'login-logo.png');
				header['appendChild'](img);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginMethodSelector', $m['html5']['Ul']()) : $p['setattr'](self, 'loginMethodSelector', $m['html5']['Ul']()); 
				self['loginMethodSelector']['addClass']('vi-login-method');
				self['dialog']['appendChild']($p['getattr'](self, 'loginMethodSelector'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('haveLoginHandlers', false) : $p['setattr'](self, 'haveLoginHandlers', false); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('invoke', function(logout) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					logout = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof logout == 'undefined') logout=arguments['callee']['__args__'][3][1];

				self['show']();
				self['lock']();
				if ($p['bool'](logout)) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onLogoutSuccess'), 'failureHandler':$p['getattr'](self, 'onLogoutSuccess'), 'secure':true}, 'user', 'logout']);
					return null;
				}
				$m['conf']['__setitem__']('currentUser', null);
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'haveLoginHandlers')))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onGetAuthMethodsSuccess'), 'failureHandler':$p['getattr'](self, 'onGetAuthMethodsFailure')}, 'user', 'getAuthMethods']);
					return null;
				}
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'doSkipLogin'), 'failureHandler':$p['getattr'](self, 'doShowLogin')}, 'user', 'view/self']);
				return null;
			}
	, 1, [null,null,['self'],['logout', false]]);
			$cls_definition['invoke'] = $method;
			$method = $pyjs__bind_method2('onLogoutSuccess', function() {
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
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
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

				$m['conf']['__setitem__']('currentUser', null);
				self['invoke']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onLogoutSuccess'] = $method;
			$method = $pyjs__bind_method2('doShowLogin', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof code != 'undefined') {
						if (code !== null && typeof code['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = code;
							code = arguments[3];
						}
					} else 					if (typeof req != 'undefined') {
						if (req !== null && typeof req['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = req;
							req = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}

				self['unlock']();
				self['show']();
				self['selectHandler']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['req'],['code']]);
			$cls_definition['doShowLogin'] = $method;
			$method = $pyjs__bind_method2('insufficientRights', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				self['unlock']();
				self['hide']();
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $pyjs_kwargs_call(self, 'invoke', null, null, [{'logout':true}]);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				$pyjs_kwargs_call($m['html5']['ext'], 'Alert', null, null, [{'okLabel':$m['translate']('Login as different user'), 'okCallback':$lambda1}, $m['translate']('vi.login.insufficient-rights')]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['insufficientRights'] = $method;
			$method = $pyjs__bind_method2('doSkipLogin', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var answ;
				answ = $m['NetworkService']['decode'](req);
				if ($p['bool'](!$p['op_eq'](answ['get']('action'), 'view'))) {
					self['doShowLogin']();
					return null;
				}
				$m['conf']['__setitem__']('currentUser', answ['__getitem__']('values'));
				if ($p['bool']($m['conf']['__getitem__']('vi.access.rights'))) {
					if ($p['bool'](!$p['bool']($p['any'](function(){
						var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,x,$iter1_array;
	$collcomp1 = $p['list']();
					$iter1_iter = $m['conf']['__getitem__']('vi.access.rights');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						x = $iter1_nextval['$nextval'];
						$collcomp1['append']($m['conf']['__getitem__']('currentUser')['get']('access', $p['list']([]))['__contains__'](x));
					}

	return $collcomp1;}())))) {
						self['insufficientRights']();
						return null;
					}
				}
				$p['printFunc'](['User already logged in'], 1);
				$m['conf']['__getitem__']('theApp')['admin']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['doSkipLogin'] = $method;
			$method = $pyjs__bind_method2('onGetAuthMethodsSuccess', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,methods,$iter2_iter,answ,$iter2_idx,handler,method,$iter2_array;
				answ = $m['NetworkService']['decode'](req);
				methods = $p['list']([]);
				$iter2_iter = answ;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					method = $iter2_nextval['$nextval'];
					handler = $m['loginHandlerSelector']['select'](method['__getitem__']($constant_int_0), method['__getitem__']($constant_int_1));
					if ($p['bool'](!$p['bool'](handler))) {
						$p['printFunc']([$p['sprintf']('Warning: Login-Handler "%s" with second factor "%s" unknown', $p['tuple']([method['__getitem__']($constant_int_0), method['__getitem__']($constant_int_1)]))], 1);
						continue;
					}
					if ($p['bool'](!$p['bool']($p['any'](function(){
						var c,$iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
					$iter3_iter = $p['getattr']($p['getattr'](self, 'loginMethodSelector'), '_children');
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						c = $iter3_nextval['$nextval'];
						$collcomp2['append']($p['op_eq']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), $p['getattr'](handler, '__name__')));
					}

	return $collcomp2;}())))) {
						handler(self);
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('haveLoginHandlers', true) : $p['setattr'](self, 'haveLoginHandlers', true); 
				self['invoke']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onGetAuthMethodsSuccess'] = $method;
			$method = $pyjs__bind_method2('selectHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof handler == 'undefined') handler=arguments['callee']['__args__'][3][1];
				var $or1,$or2,$iter4_nextval,$iter4_idx,$iter4_type,h,$iter4_array,$iter4_iter;
				$iter4_iter = $p['getattr']($p['getattr'](self, 'loginMethodSelector'), '_children');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					h = $iter4_nextval['$nextval'];
					if ($p['bool'](($p['bool']($or1=$p['op_is'](handler, null))?$or1:$p['op_is'](h, handler)))) {
						h['enable']();
						handler = h;
					}
					else {
						h['disable']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['handler', null]]);
			$cls_definition['selectHandler'] = $method;
			$method = $pyjs__bind_method2('onGetAuthMethodsFailure', function() {
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
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
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

				(typeof alert == "undefined"?$m['alert']:alert)('Fail');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onGetAuthMethodsFailure'] = $method;
			$method = $pyjs__bind_method2('redirectNoAdmin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c06b65b8536600bad05215eb29f4932f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				(typeof eval == "undefined"?$m['eval']:eval)('window.top.location = "/"');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['redirectNoAdmin'] = $method;
			var $bases = new Array($m['Screen']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LoginScreen', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end login */


/* end module: login */


/*
PYJS_DEPS: ['html5', 're', 'json', 'network.NetworkService', 'network', 'network.DeferredCall', 'i18n.translate', 'i18n', 'event.EventDispatcher', 'event', 'config.conf', 'config', 'priorityqueue.loginHandlerSelector', 'priorityqueue', 'screen.Screen', 'screen', 'widgets.InternalEdit', 'widgets']
*/
