/* start module: main */
$pyjs['loaded_modules']['main'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['main']['__was_initialized__']) return $pyjs['loaded_modules']['main'];
	var $m = $pyjs['loaded_modules']['main'];
	$m['__repr__'] = function() { return '<module: main>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main';
	$m['__name__'] = __mod_name__;
	try {
		var $pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_401 = new $p['int'](401);
		$m['html5'] = $p['___import___']('html5', null);
		$m['i18n'] = $p['___import___']('i18n', null);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['network'] = $p['___import___']('network', null);
		$m['LoginScreen'] = $p['___import___']('login.LoginScreen', null, null, false);
		$m['AdminScreen'] = $p['___import___']('admin.AdminScreen', null, null, false);
		$m['conf'] = $p['___import___']('config.conf', null, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
		try {
			$m['vi_plugins'] = $p['___import___']('vi_plugins', null);
		} catch($pyjs_try_err) {
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		$m['Application'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'main';
			$cls_definition['__md5__'] = '9c4dd157932b69e752412031bf1591fc';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['Application'], self)['__init__']();
				self['__getitem__']('class')['append']('vi-application');
				$m['conf']['__setitem__']('theApp', self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginScreen', null) : $p['setattr'](self, 'loginScreen', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('adminScreen', null) : $p['setattr'](self, 'adminScreen', null); 
				self['startup']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('startup', function() {
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
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
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

				if ($p['bool']($p['op_is']($m['conf']['__getitem__']('server.version'), null))) {
					$pyjs_kwargs_call($m['network']['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getVersionSuccess'), 'failureHandler':$p['getattr'](self, 'startupFailure'), 'cacheable':true}, null, '/vi/getVersion']);
				}
				else {
					$pyjs_kwargs_call($m['network']['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getConfigSuccess'), 'failureHandler':$p['getattr'](self, 'startupFailure'), 'cacheable':true}, null, '/vi/config']);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['startup'] = $method;
			$method = $pyjs__bind_method2('getVersionSuccess', function(req) {
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
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_iter,$iter2_type,$iter2_iter,params,$iter1_array,$or1,$or2,$and1,$and2,$iter2_idx,$iter2_nextval,$iter1_type,$add2,$add3,$add1,$iter1_idx,$add4,x,$iter2_array;
				$m['conf']['__setitem__']('server.version', $m['network']['NetworkService']['decode'](req));
				if ($p['bool'](($p['bool']($and1=((($p['cmp']($m['conf']['__getitem__']('server.version')['__getitem__']($constant_int_0), $constant_int_0))|1) == 1))?($p['bool']($or1=!$p['op_eq']($m['conf']['__getitem__']('server.version')['__getitem__']($constant_int_0), $m['conf']['__getitem__']('vi.version')['__getitem__']($constant_int_0)))?$or1:($p['cmp']($m['conf']['__getitem__']('server.version')['__getitem__']($constant_int_1), $m['conf']['__getitem__']('vi.version')['__getitem__']($constant_int_1)) == 1)):$and1))) {
					params = $p['dict']([['server.version', '.'['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
						var $generator = function () {};
						$generator['next'] = function (noStop) {
						
							var $res;
							$yield_value = $exc = null;
							try {
								$res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res == 'undefined') {
									if (noStop === true) {
										$generator_state[0] = -1;
										return;
									}
									throw $p['StopIteration']();
								}
							} catch (e) {
						
								$is_executing=false;
								$generator_state[0] = -1;
								if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
									return;
								}
								throw e;
							}
							return $res;
						};
						$generator['__iter__'] = function () {return $generator;};
						$generator['send'] = function ($val) {
						
							$yield_value = $val;
							$exc = null;
							try {
								var $res = $generator['$genfunc']();
								if (typeof $res == 'undefined') throw $p['StopIteration']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw e;
							}
							$is_executing=false;
							return $res;
						};
						$generator['$$throw'] = function ($exc_type, $exc_value) {
						
							$yield_value = null;
							$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																	($p['isinstance']($exc_value, $exc_type)
																	 ? $exc_value : $exc_type($exc_value)));
							try {
								var $res = $generator['$genfunc']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw (e);
							}
							$is_executing=false;
							return $res;
						};
						$generator['close'] = function () {
						
							$yield_value = null;
							$exc=$p['GeneratorExit']();
							try {
								var $res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
								throw (e);
							}
							return null;
						};
						$generator['$genfunc'] = function () {
							var $yielding = false;
							if ($is_executing) throw $p['ValueError']('generator already executing');
							$is_executing = true;
						
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$iter1_iter = $m['conf']['__getitem__']('server.version');
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									x = $iter1_nextval['$nextval'];
									$yield_value = $p['str'](x);
									$yielding = true;
									$generator_state[1] = 1;
									return $yield_value;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

							return;
						};
						return $generator;
					}()
)], ['vi.version', '.'['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
						var $generator = function () {};
						$generator['next'] = function (noStop) {
						
							var $res;
							$yield_value = $exc = null;
							try {
								$res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res == 'undefined') {
									if (noStop === true) {
										$generator_state[0] = -1;
										return;
									}
									throw $p['StopIteration']();
								}
							} catch (e) {
						
								$is_executing=false;
								$generator_state[0] = -1;
								if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
									return;
								}
								throw e;
							}
							return $res;
						};
						$generator['__iter__'] = function () {return $generator;};
						$generator['send'] = function ($val) {
						
							$yield_value = $val;
							$exc = null;
							try {
								var $res = $generator['$genfunc']();
								if (typeof $res == 'undefined') throw $p['StopIteration']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw e;
							}
							$is_executing=false;
							return $res;
						};
						$generator['$$throw'] = function ($exc_type, $exc_value) {
						
							$yield_value = null;
							$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																	($p['isinstance']($exc_value, $exc_type)
																	 ? $exc_value : $exc_type($exc_value)));
							try {
								var $res = $generator['$genfunc']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw (e);
							}
							$is_executing=false;
							return $res;
						};
						$generator['close'] = function () {
						
							$yield_value = null;
							$exc=$p['GeneratorExit']();
							try {
								var $res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
								throw (e);
							}
							return null;
						};
						$generator['$genfunc'] = function () {
							var $yielding = false;
							if ($is_executing) throw $p['ValueError']('generator already executing');
							$is_executing = true;
						
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$iter2_iter = $m['conf']['__getitem__']('vi.version');
							$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									x = $iter2_nextval['$nextval'];
									$yield_value = $p['str'](x);
									$yielding = true;
									$generator_state[1] = 1;
									return $yield_value;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

							return;
						};
						return $generator;
					}()
)]]);
					$m['conf']['__setitem__']('server.version', null);
					$pyjs_kwargs_call($m['html5']['ext'], 'Alert', null, null, [{'title':$m['translate']('Version mismatch'), 'okCallback':$p['getattr'](self, 'startup'), 'okLabel':$m['translate']('Retry')}, $p['__op_add']($add3=$p['__op_add']($add1=$pyjs_kwargs_call(null, $m['translate'], null, params, [{}, 'The ViUR server (v{server.version}) is incompatible to this Vi (v{vi.version}).']),$add2='\n'),$add4=$m['translate']('Please update either your server or Vi!'))]);
					return null;
				}
				self['startup']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['getVersionSuccess'] = $method;
			$method = $pyjs__bind_method2('getConfigSuccess', function(req) {
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
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['conf']['__setitem__']('mainConfig', $m['network']['NetworkService']['decode'](req));
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'adminScreen')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('adminScreen', $m['AdminScreen']()) : $p['setattr'](self, 'adminScreen', $m['AdminScreen']()); 
				}
				self['adminScreen']['invoke']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['getConfigSuccess'] = $method;
			$method = $pyjs__bind_method2('startupFailure', function(req, err) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					err = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['list']([$constant_int_403, $constant_int_401])['__contains__'](err))) {
					self['login']();
				}
				else {
					$pyjs_kwargs_call($m['html5']['ext'], 'Alert', null, null, [{'title':$m['translate']('Communication error'), 'okCallback':$p['getattr'](self, 'startup'), 'okLabel':$m['translate']('Retry')}, $m['translate']('The connection to the server could not be correctly established.')]);
				}
				return null;
			}
	, 1, [null,null,['self'],['req'],['err']]);
			$cls_definition['startupFailure'] = $method;
			$method = $pyjs__bind_method2('login', function(logout) {
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
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof logout == 'undefined') logout=arguments['callee']['__args__'][3][1];

				if ($p['bool'](!$p['bool']($p['getattr'](self, 'loginScreen')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loginScreen', $m['LoginScreen']()) : $p['setattr'](self, 'loginScreen', $m['LoginScreen']()); 
				}
				if ($p['bool']($p['getattr'](self, 'adminScreen'))) {
					self['adminScreen']['reset']();
					self['adminScreen']['hide']();
				}
				$pyjs_kwargs_call(self['loginScreen'], 'invoke', null, null, [{'logout':logout}]);
				return null;
			}
	, 1, [null,null,['self'],['logout', false]]);
			$cls_definition['login'] = $method;
			$method = $pyjs__bind_method2('admin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'loginScreen'))) {
					self['loginScreen']['hide']();
				}
				self['startup']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['admin'] = $method;
			$method = $pyjs__bind_method2('logout', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call(self, 'login', null, null, [{'logout':true}]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['logout'] = $method;
			$method = $pyjs__bind_method2('setTitle', function(title) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof title == 'undefined') title=arguments['callee']['__args__'][3][1];
				var document,addendum;
				document = (typeof eval == "undefined"?$m['eval']:eval)('top.document');
				if ($p['bool'](title)) {
					title = $p['list']([title]);
				}
				else {
					title = $p['list']([]);
				}
				addendum = $m['conf']['get']('vi.name');
				if ($p['bool'](addendum)) {
					title['append'](addendum);
				}
				document['__is_instance__'] && typeof document['__setattr__'] == 'function' ? document['__setattr__']('title', $m['conf']['__getitem__']('vi.title.delimiter')['join'](title)) : $p['setattr'](document, 'title', $m['conf']['__getitem__']('vi.title.delimiter')['join'](title)); 
				return null;
			}
	, 1, [null,null,['self'],['title', null]]);
			$cls_definition['setTitle'] = $method;
			$method = $pyjs__bind_method2('setPath', function(path) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					path = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c4dd157932b69e752412031bf1591fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof path == 'undefined') path=arguments['callee']['__args__'][3][1];
				var window;
				window = (typeof eval == "undefined"?$m['eval']:eval)('window');
				$p['getattr']($p['getattr'](window, 'top'), 'location')['__is_instance__'] && typeof $p['getattr']($p['getattr'](window, 'top'), 'location')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](window, 'top'), 'location')['__setattr__']('hash', path) : $p['setattr']($p['getattr']($p['getattr'](window, 'top'), 'location'), 'hash', path); 
				return null;
			}
	, 1, [null,null,['self'],['path', '']]);
			$cls_definition['setPath'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Application', $p['tuple']($bases), $data);
		})();
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$m['pyjd']['setup']('public/main.html');
			$p['getattr']($m['network'], 'NetworkService')['__is_instance__'] && typeof $p['getattr']($m['network'], 'NetworkService')['__setattr__'] == 'function' ? $p['getattr']($m['network'], 'NetworkService')['__setattr__']('prefix', '/vi') : $p['setattr']($p['getattr']($m['network'], 'NetworkService'), 'prefix', '/vi'); 
			$m['conf']['__setitem__']('currentlanguage', $m['i18n']['getLanguage']());
			$m['app'] = $m['Application']();
			$m['html5']['Body']()['appendChild']($m['app']);
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end main */


/* end module: main */


/*
PYJS_DEPS: ['html5', 'i18n', 'pyjd', 'network', 'login.LoginScreen', 'login', 'admin.AdminScreen', 'admin', 'config.conf', 'config', 'i18n.translate', 'vi_plugins']
*/
