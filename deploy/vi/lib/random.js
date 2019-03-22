/* start module: random */
$pyjs['loaded_modules']['random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['random']['__was_initialized__']) return $pyjs['loaded_modules']['random'];
	var $m = $pyjs['loaded_modules']['random'];
	$m['__repr__'] = function() { return '<module: random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'random';
	$m['__name__'] = __mod_name__;
	try {
		var $pow2,$pow1,$mul3,$add1,$mul4,$div2,$div1,$mul2,$mul1,$add2;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_170 = new $p['int'](170);
		var $constant_int_171 = new $p['int'](171);
		var $constant_int_172 = new $p['int'](172);
		var $constant_int_53 = new $p['int'](53);
		var $constant_int_30268 = new $p['int'](30268);
		var $constant_int_30269 = new $p['int'](30269);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_30306 = new $p['int'](30306);
		var $constant_int_30307 = new $p['int'](30307);
		var $constant_int_30322 = new $p['int'](30322);
		var $constant_int_30323 = new $p['int'](30323);
		var $constant_int_16777215 = new $p['int'](16777215);
		var $constant_long_1 = new $p['long'](1);
		$m['_log'] = $p['___import___']('math.log', null, null, false);
		$m['_exp'] = $p['___import___']('math.exp', null, null, false);
		$m['_pi'] = $p['___import___']('math.pi', null, null, false);
		$m['_e'] = $p['___import___']('math.e', null, null, false);
		$m['_ceil'] = $p['___import___']('math.ceil', null, null, false);
		$m['_sqrt'] = $p['___import___']('math.sqrt', null, null, false);
		$m['_acos'] = $p['___import___']('math.acos', null, null, false);
		$m['_cos'] = $p['___import___']('math.cos', null, null, false);
		$m['_sin'] = $p['___import___']('math.sin', null, null, false);
		$m['_urandom'] = $p['___import___']('os.urandom', null, null, false);
		$m['_hexlify'] = $p['___import___']('binascii.hexlify', null, null, false);
		$m['NV_MAGICCONST'] = (typeof ($div1=(typeof ($mul1=$constant_int_4)==typeof ($mul2=$m['_exp']((typeof ($usub1=0.5)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))==typeof ($div2=$m['_sqrt'](2.0)) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$m['TWOPI'] = (typeof ($mul3=2.0)==typeof ($mul4=$m['_pi']) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		$m['LOG4'] = $m['_log'](4.0);
		$m['SG_MAGICCONST'] = $p['__op_add']($add1=1.0,$add2=$m['_log'](4.5));
		$m['BPF'] = $constant_int_53;
		$m['RECIP_BPF'] = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($usub2=$m['BPF'])=='number'?
			-$usub2:
			$p['op_usub']($usub2))) && typeof $pow1=='number'?
			Math['pow']($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		$m['_random'] = $p['___import___']('_random', null);
		$m['Random'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = 'cbedf2a898d887ac63f7887a8023045f';
			$cls_definition['VERSION'] = $constant_int_3;
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];

				self['seed'](x);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				return null;
			}
	, 1, [null,null,['self'],['x', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $pyjs_try_err,time,$mul6,$mul5;
				if ($p['bool']($p['op_is'](a, null))) {
					try {
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							time = $p['___import___']('time', null);
							a = $p['long']((typeof ($mul5=time['time']())==typeof ($mul6=$constant_int_256) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$p['$$super']($m['Random'], self)['seed'](a);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['tuple']([$p['getattr'](self, 'VERSION'), $p['$$super']($m['Random'], self)['getstate'](), $p['getattr'](self, 'gauss_next')]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow3,$iter1_nextval,$iter1_type,$pow4,$pyjs_try_err,$iter1_iter,version,$mod1,$iter1_array,$mod2,x,internalstate,e,$iter1_idx;
				version = state['__getitem__']($constant_int_0);
				if ($p['bool']($p['op_eq'](version, $constant_int_3))) {
					var $tupleassign1 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign1[0];
					internalstate = $tupleassign1[1];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign1[2]) : $p['setattr'](self, 'gauss_next', $tupleassign1[2]); 
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else if ($p['bool']($p['op_eq'](version, $constant_int_2))) {
					var $tupleassign2 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign2[0];
					internalstate = $tupleassign2[1];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign2[2]) : $p['setattr'](self, 'gauss_next', $tupleassign2[2]); 
					try {
						internalstate = $p['tuple'](function(){
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
								$iter1_iter = internalstate;
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
										$yield_value = (typeof ($mod1=$p['long'](x))==typeof ($mod2=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$constant_int_32) && typeof $pow3=='number'?
											Math['pow']($pow3,$pow4):
											$p['op_pow']($pow3,$pow4))) && typeof $mod1=='number'?
											(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
											$p['op_mod']($mod1,$mod2));
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
);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							e = $pyjs_try_err;

							var $pyjs__raise_expr1 = $p['TypeError'];
							var $pyjs__raise_expr2 = e;
							if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
								throw $p['TypeError']('instance exception may not have a separate value');
							}
							if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
								throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
							} else {
								throw ($pyjs__raise_expr1($pyjs__raise_expr2));
							}

						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else {
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$method = $pyjs__bind_method2('__getstate__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getstate']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__getstate__'] = $method;
			$method = $pyjs__bind_method2('__setstate__', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setstate'](state);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['__setstate__'] = $method;
			$method = $pyjs__bind_method2('__reduce__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['tuple']([$p['getattr'](self, '__class__'), $p['tuple']([]), self['getstate']()]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['__reduce__'] = $method;
			$method = $pyjs__bind_method2('randrange', function(start, stop, step, fint, $$default, maxwidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					start = arguments[1];
					stop = arguments[2];
					step = arguments[3];
					fint = arguments[4];
					$$default = arguments[5];
					maxwidth = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][4][1];
				if (typeof step == 'undefined') step=arguments['callee']['__args__'][5][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][6][1];
				if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][7][1];
				if (typeof maxwidth == 'undefined') maxwidth=arguments['callee']['__args__'][8][1];
				var istep,$add13,$add12,istart,width,$floordiv4,istop,$sub3,$sub2,$sub1,$sub4,$floordiv1,$and1,$and2,$add14,$add15,$add10,$add11,$mul9,$mul8,$mul7,$mul12,$mul16,$mul15,$mul14,$mul13,$mul11,$floordiv3,$mul10,$$default,$add16,n,$add3,$floordiv2,$add6,$add7,$add4,$add5,$add8,$add9;
				istart = fint(start);
				if ($p['bool'](!$p['op_eq'](istart, start))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer arg 1 for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				if ($p['bool']($p['op_is'](stop, $$default))) {
					if ($p['bool'](($p['cmp'](istart, $constant_int_0) == 1))) {
						if ($p['bool'](((($p['cmp'](istart, maxwidth))|1) == 1))) {
							return self['_randbelow'](istart);
						}
						return fint((typeof ($mul7=self['random']())==typeof ($mul8=istart) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
					}

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				istop = fint(stop);
				if ($p['bool'](!$p['op_eq'](istop, stop))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer stop for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				width = $p['__op_sub']($sub1=istop,$sub2=istart);
				if ($p['bool'](($p['bool']($and1=$p['op_eq'](step, $constant_int_1))?($p['cmp'](width, $constant_int_0) == 1):$and1))) {
					if ($p['bool'](((($p['cmp'](width, maxwidth))|1) == 1))) {
						return fint($p['__op_add']($add3=istart,$add4=self['_randbelow'](width)));
					}
					return fint($p['__op_add']($add5=istart,$add6=fint((typeof ($mul9=self['random']())==typeof ($mul10=width) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))));
				}
				if ($p['bool']($p['op_eq'](step, $constant_int_1))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = $p['sprintf']('empty range for randrange() (%d,%d, %d)', $p['tuple']([istart, istop, width]));
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				istep = fint(step);
				if ($p['bool'](!$p['op_eq'](istep, step))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				if ($p['bool'](($p['cmp'](istep, $constant_int_0) == 1))) {
					n = (typeof ($floordiv1=$p['__op_sub']($sub3=$p['__op_add']($add7=width,$add8=istep),$sub4=$constant_int_1))==typeof ($floordiv2=istep) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2));
				}
				else if ($p['bool'](($p['cmp'](istep, $constant_int_0) == -1))) {
					n = (typeof ($floordiv3=$p['__op_add']($add11=$p['__op_add']($add9=width,$add10=istep),$add12=$constant_int_1))==typeof ($floordiv4=istep) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math['floor']($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4));
				}
				else {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'zero step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				if ($p['bool'](($p['cmp'](n, $constant_int_0) < 1))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				if ($p['bool'](((($p['cmp'](n, maxwidth))|1) == 1))) {
					return $p['__op_add']($add13=istart,$add14=(typeof ($mul11=istep)==typeof ($mul12=self['_randbelow'](n)) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
				}
				return $p['__op_add']($add15=istart,$add16=(typeof ($mul15=istep)==typeof ($mul16=fint((typeof ($mul13=self['random']())==typeof ($mul14=n) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
			}
	, 1, [null,null,['self'],['start'],['stop', null],['step', $constant_int_1],['fint', $p['int']],['$$default', null],['maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['randrange'] = $method;
			$method = $pyjs__bind_method2('randint', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add18,$add17;
				return self['randrange'](a, $p['__op_add']($add17=b,$add18=$constant_int_1));
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['randint'] = $method;
			$method = $pyjs__bind_method2('_randbelow', function(n, _log, fint, _maxwidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					_log = arguments[2];
					fint = arguments[3];
					_maxwidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof _log == 'undefined') _log=arguments['callee']['__args__'][4][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
				if (typeof _maxwidth == 'undefined') _maxwidth=arguments['callee']['__args__'][6][1];
				var $mul17,$pyjs_try_err,$add20,r,$add19,$sub5,k,$mul18,$sub6,getrandbits;
				try {
					getrandbits = $p['getattr'](self, 'getrandbits');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						if ($p['bool'](true)) {
							k = fint($p['__op_add']($add19=1.00001,$add20=_log($p['__op_sub']($sub5=n,$sub6=$constant_int_1), 2.0)));
							r = getrandbits(k);
							while ($p['bool'](((($p['cmp'](r, n))|1) == 1))) {
								r = getrandbits(k);
							}
							return $p['long'](r);
						}
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return fint((typeof ($mul17=self['random']())==typeof ($mul18=n) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
			}
	, 1, [null,null,['self'],['n'],['_log', $m['_log']],['fint', $p['int']],['_maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['_randbelow'] = $method;
			$method = $pyjs__bind_method2('choice', function(seq) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seq = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul20,$mul19;
				return seq['__getitem__']($p['int']((typeof ($mul19=self['random']())==typeof ($mul20=$p['len'](seq)) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))));
			}
	, 1, [null,null,['self'],['seq']]);
			$cls_definition['choice'] = $method;
			$method = $pyjs__bind_method2('shuffle', function(x, random, fint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					random = arguments[2];
					fint = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof random == 'undefined') random=arguments['callee']['__args__'][4][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
				var $iter2_nextval,$iter2_type,$iter2_iter,i,j,$add21,$iter2_idx,$mul22,$add22,$iter2_array,$mul21;
				if ($p['bool']($p['op_is'](random, null))) {
					random = $p['getattr'](self, 'random');
				}
				$iter2_iter = $p['reversed']($p['xrange']($constant_int_1, $p['len'](x)));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					j = fint((typeof ($mul21=random())==typeof ($mul22=$p['__op_add']($add21=i,$add22=$constant_int_1)) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22)));
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([x['__getitem__'](j), x['__getitem__'](i)]), 2, null);
					x['__setitem__'](i, $tupleassign3[0]);
					x['__setitem__'](j, $tupleassign3[1]);
				}
				return null;
			}
	, 1, [null,null,['self'],['x'],['random', null],['fint', $p['int']]]);
			$cls_definition['shuffle'] = $method;
			$method = $pyjs__bind_method2('sample', function(population, k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					population = arguments[1];
					k = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$mul30,result,$iter4_type,setsize,$add23,$pow6,$pow5,$iter3_idx,_int,$iter4_iter,selected,$add24,selected_add,$sub9,$sub8,$iter3_iter,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$sub7,$mul23,__random,$or1,$or2,$sub12,$sub11,$sub10,$iter3_type,pool,i,$iter4_nextval,j,$pyjs_try_err,n,$iter4_idx,$iter4_array,$mul31,$iter3_nextval,$mul32;
				n = $p['len'](population);
				if ($p['bool'](!$p['bool']((($p['cmp']($constant_int_0, ($compare1 = k)) < 1)&&($p['cmp']($compare1, ($compare2 = n)) < 1))))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'sample larger than population';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				__random = $p['getattr'](self, 'random');
				_int = $p['int'];
				result = (typeof ($mul23=$p['list']([null]))==typeof ($mul24=k) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
				setsize = $constant_int_21;
				if ($p['bool'](($p['cmp'](k, $constant_int_5) == 1))) {
					setsize = $p['__op_add']($add23=setsize,$add24=(typeof ($pow5=$constant_int_4)==typeof ($pow6=$m['_ceil']($m['_log']((typeof ($mul25=k)==typeof ($mul26=$constant_int_3) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)), $constant_int_4))) && typeof $pow5=='number'?
						Math['pow']($pow5,$pow6):
						$p['op_pow']($pow5,$pow6)));
				}
				if ($p['bool'](($p['bool']($or1=($p['cmp'](n, setsize) < 1))?$or1:$p['hasattr'](population, 'keys')))) {
					pool = $p['list'](population);
					$iter3_iter = $p['xrange'](k);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						i = $iter3_nextval['$nextval'];
						j = _int((typeof ($mul27=__random())==typeof ($mul28=$p['__op_sub']($sub7=n,$sub8=i)) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
						result['__setitem__'](i, pool['__getitem__'](j));
						pool['__setitem__'](j, pool['__getitem__']($p['__op_sub']($sub11=$p['__op_sub']($sub9=n,$sub10=i),$sub12=$constant_int_1)));
					}
				}
				else {
					try {
						selected = $p['set']();
						selected_add = $p['getattr'](selected, 'add');
						$iter4_iter = $p['xrange'](k);
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							i = $iter4_nextval['$nextval'];
							j = _int((typeof ($mul29=__random())==typeof ($mul30=n) && typeof $mul29=='number'?
								$mul29*$mul30:
								$p['op_mul']($mul29,$mul30)));
							while ($p['bool'](selected['__contains__'](j))) {
								j = _int((typeof ($mul31=__random())==typeof ($mul32=n) && typeof $mul31=='number'?
									$mul31*$mul32:
									$p['op_mul']($mul31,$mul32)));
							}
							selected_add(j);
							result['__setitem__'](i, population['__getitem__'](j));
						}
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError']))) {
							if ($p['bool']($p['isinstance'](population, $p['list']))) {
								throw ($pyjs['__last_exception__']?
									$pyjs['__last_exception__']['error']:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
							return self['sample']($p['tuple'](population), k);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['population'],['k']]);
			$cls_definition['sample'] = $method;
			$method = $pyjs__bind_method2('uniform', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$add25,$sub14,$mul34,$add26,$mul33;
				return $p['__op_add']($add25=a,$add26=(typeof ($mul33=$p['__op_sub']($sub13=b,$sub14=a))==typeof ($mul34=self['random']()) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)));
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['uniform'] = $method;
			$method = $pyjs__bind_method2('triangular', function(low, high, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					low = arguments[1];
					high = arguments[2];
					mode = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof low == 'undefined') low=arguments['callee']['__args__'][3][1];
				if (typeof high == 'undefined') high=arguments['callee']['__args__'][4][1];
				if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][5][1];
				var $sub22,$sub23,$sub20,$sub21,$sub24,$pow7,$add28,$add27,$pow8,$mul38,$sub19,$sub18,$sub17,$sub16,$sub15,$div3,$div4,c,u,$mul35,$mul37,$mul36;
				u = self['random']();
				c = ($p['bool']($p['op_is'](mode, null))? (0.5) : ((typeof ($div3=$p['__op_sub']($sub15=mode,$sub16=low))==typeof ($div4=$p['__op_sub']($sub17=high,$sub18=low)) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))));
				if ($p['bool'](($p['cmp'](u, c) == 1))) {
					u = $p['__op_sub']($sub19=1.0,$sub20=u);
					c = $p['__op_sub']($sub21=1.0,$sub22=c);
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([high, low]), 2, null);
					low = $tupleassign4[0];
					high = $tupleassign4[1];
				}
				return $p['__op_add']($add27=low,$add28=(typeof ($mul37=$p['__op_sub']($sub23=high,$sub24=low))==typeof ($mul38=(typeof ($pow7=(typeof ($mul35=u)==typeof ($mul36=c) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)))==typeof ($pow8=0.5) && typeof $pow7=='number'?
					Math['pow']($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)));
			}
	, 1, [null,null,['self'],['low', 0.0],['high', 1.0],['mode', null]]);
			$cls_definition['triangular'] = $method;
			$method = $pyjs__bind_method2('normalvariate', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub26,$sub27,$sub25,u1,$sub28,zz,u2,$add29,$mul44,$mul40,$mul41,$mul42,$mul43,__random,$div8,$div6,$div7,$div5,$add30,$mul39,z;
				__random = $p['getattr'](self, 'random');
				while ($p['bool']($constant_int_1)) {
					u1 = __random();
					u2 = $p['__op_sub']($sub25=1.0,$sub26=__random());
					z = (typeof ($div5=(typeof ($mul39=$m['NV_MAGICCONST'])==typeof ($mul40=$p['__op_sub']($sub27=u1,$sub28=0.5)) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40)))==typeof ($div6=u2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
					zz = (typeof ($div7=(typeof ($mul41=z)==typeof ($mul42=z) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($div8=4.0) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
					if ($p['bool'](($p['cmp'](zz, (typeof ($usub3=$m['_log'](u2))=='number'?
						-$usub3:
						$p['op_usub']($usub3))) < 1))) {
						break;
					}
				}
				return $p['__op_add']($add29=mu,$add30=(typeof ($mul43=z)==typeof ($mul44=sigma) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)));
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['normalvariate'] = $method;
			$method = $pyjs__bind_method2('lognormvariate', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['_exp'](self['normalvariate'](mu, sigma));
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['lognormvariate'] = $method;
			$method = $pyjs__bind_method2('expovariate', function(lambd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lambd = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var __random,$div10,$div9,u;
				__random = $p['getattr'](self, 'random');
				u = __random();
				while ($p['bool'](($p['cmp'](u, 1e-07) < 1))) {
					u = __random();
				}
				return (typeof ($div9=(typeof ($usub4=$m['_log'](u))=='number'?
					-$usub4:
					$p['op_usub']($usub4)))==typeof ($div10=lambd) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
			}
	, 1, [null,null,['self'],['lambd']]);
			$cls_definition['expovariate'] = $method;
			$method = $pyjs__bind_method2('vonmisesvariate', function(mu, kappa) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					kappa = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var u2,$mul50,$or4,$mul57,$sub29,$add37,$mod5,$add40,$sub32,$mul55,$mod3,$add35,$mul62,$mul63,$mul60,$mul61,$mul48,$mul49,$mul64,$mul65,$div14,$mul45,$mul47,u1,$div11,$div12,$div13,$div15,$mod4,theta,$add39,$sub31,$sub30,$sub33,__random,$sub35,$sub34,$or3,$sub36,$sub38,c,$add38,$add41,$mul58,$add42,$mul68,$mul66,$sub37,$div16,$mul67,a,$mul59,b,f,$add32,$mul52,$mul51,$add31,$add36,$mul56,$add34,$mul54,$mul53,r,$mod6,u3,$add33,z,$mul46;
				__random = $p['getattr'](self, 'random');
				if ($p['bool'](($p['cmp'](kappa, 1e-06) < 1))) {
					return (typeof ($mul45=$m['TWOPI'])==typeof ($mul46=__random()) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46));
				}
				a = $p['__op_add']($add33=1.0,$add34=$m['_sqrt']($p['__op_add']($add31=1.0,$add32=(typeof ($mul49=(typeof ($mul47=4.0)==typeof ($mul48=kappa) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)))==typeof ($mul50=kappa) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50)))));
				b = (typeof ($div11=$p['__op_sub']($sub29=a,$sub30=$m['_sqrt']((typeof ($mul51=2.0)==typeof ($mul52=a) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)))))==typeof ($div12=(typeof ($mul53=2.0)==typeof ($mul54=kappa) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54))) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
				r = (typeof ($div13=$p['__op_add']($add35=1.0,$add36=(typeof ($mul55=b)==typeof ($mul56=b) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56))))==typeof ($div14=(typeof ($mul57=2.0)==typeof ($mul58=b) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58))) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14));
				while ($p['bool']($constant_int_1)) {
					u1 = __random();
					z = $m['_cos']((typeof ($mul59=$m['_pi'])==typeof ($mul60=u1) && typeof $mul59=='number'?
						$mul59*$mul60:
						$p['op_mul']($mul59,$mul60)));
					f = (typeof ($div15=$p['__op_add']($add37=1.0,$add38=(typeof ($mul61=r)==typeof ($mul62=z) && typeof $mul61=='number'?
						$mul61*$mul62:
						$p['op_mul']($mul61,$mul62))))==typeof ($div16=$p['__op_add']($add39=r,$add40=z)) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16));
					c = (typeof ($mul63=kappa)==typeof ($mul64=$p['__op_sub']($sub31=r,$sub32=f)) && typeof $mul63=='number'?
						$mul63*$mul64:
						$p['op_mul']($mul63,$mul64));
					u2 = __random();
					if ($p['bool'](($p['bool']($or3=($p['cmp'](u2, (typeof ($mul65=c)==typeof ($mul66=$p['__op_sub']($sub33=2.0,$sub34=c)) && typeof $mul65=='number'?
						$mul65*$mul66:
						$p['op_mul']($mul65,$mul66))) == -1))?$or3:($p['cmp'](u2, (typeof ($mul67=c)==typeof ($mul68=$m['_exp']($p['__op_sub']($sub35=1.0,$sub36=c))) && typeof $mul67=='number'?
						$mul67*$mul68:
						$p['op_mul']($mul67,$mul68))) < 1)))) {
						break;
					}
				}
				u3 = __random();
				if ($p['bool'](($p['cmp'](u3, 0.5) == 1))) {
					theta = $p['__op_add']($add41=(typeof ($mod3=mu)==typeof ($mod4=$m['TWOPI']) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)),$add42=$m['_acos'](f));
				}
				else {
					theta = $p['__op_sub']($sub37=(typeof ($mod5=mu)==typeof ($mod6=$m['TWOPI']) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)),$sub38=$m['_acos'](f));
				}
				return theta;
			}
	, 1, [null,null,['self'],['mu'],['kappa']]);
			$cls_definition['vonmisesvariate'] = $method;
			$method = $pyjs__bind_method2('gammavariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul80,$add44,$mul86,$add43,$pow10,$mul82,$div23,$sub48,$sub49,__random,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47,ainv,$div18,$div19,$add49,$add48,$add47,$add46,$mul69,u1,bbb,$pow9,u2,$mul88,$pow11,$sub52,$sub51,$div17,$mul87,b,$add50,$or5,$mul81,$or7,$or6,$mul84,$mul85,$mul83,$div20,$sub39,$or8,$pow12,$div22,$div25,$sub50,$div21,$sub54,$div24,$mul71,$mul70,$mul73,$mul72,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,$div26,p,r,u,v,x,z,$sub53,$add45,ccc;
				if ($p['bool'](($p['bool']($or5=($p['cmp'](alpha, 0.0) < 1))?$or5:($p['cmp'](beta, 0.0) < 1)))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'gammavariate: alpha and beta must be > 0.0';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				__random = $p['getattr'](self, 'random');
				if ($p['bool'](($p['cmp'](alpha, 1.0) == 1))) {
					ainv = $m['_sqrt']($p['__op_sub']($sub39=(typeof ($mul69=2.0)==typeof ($mul70=alpha) && typeof $mul69=='number'?
						$mul69*$mul70:
						$p['op_mul']($mul69,$mul70)),$sub40=1.0));
					bbb = $p['__op_sub']($sub41=alpha,$sub42=$m['LOG4']);
					ccc = $p['__op_add']($add43=alpha,$add44=ainv);
					while ($p['bool']($constant_int_1)) {
						u1 = __random();
						if ($p['bool'](!$p['bool']((($p['cmp'](1e-07, ($compare3 = u1)) == -1)&&($p['cmp']($compare3, ($compare4 = 0.9999999)) == -1))))) {
							continue;
						}
						u2 = $p['__op_sub']($sub43=1.0,$sub44=__random());
						v = (typeof ($div19=$m['_log']((typeof ($div17=u1)==typeof ($div18=$p['__op_sub']($sub45=1.0,$sub46=u1)) && typeof $div17=='number' && $div18 !== 0?
							$div17/$div18:
							$p['op_div']($div17,$div18))))==typeof ($div20=ainv) && typeof $div19=='number' && $div20 !== 0?
							$div19/$div20:
							$p['op_div']($div19,$div20));
						x = (typeof ($mul71=alpha)==typeof ($mul72=$m['_exp'](v)) && typeof $mul71=='number'?
							$mul71*$mul72:
							$p['op_mul']($mul71,$mul72));
						z = (typeof ($mul75=(typeof ($mul73=u1)==typeof ($mul74=u1) && typeof $mul73=='number'?
							$mul73*$mul74:
							$p['op_mul']($mul73,$mul74)))==typeof ($mul76=u2) && typeof $mul75=='number'?
							$mul75*$mul76:
							$p['op_mul']($mul75,$mul76));
						r = $p['__op_sub']($sub47=$p['__op_add']($add45=bbb,$add46=(typeof ($mul77=ccc)==typeof ($mul78=v) && typeof $mul77=='number'?
							$mul77*$mul78:
							$p['op_mul']($mul77,$mul78))),$sub48=x);
						if ($p['bool'](($p['bool']($or7=((($p['cmp']($p['__op_sub']($sub49=$p['__op_add']($add47=r,$add48=$m['SG_MAGICCONST']),$sub50=(typeof ($mul79=4.5)==typeof ($mul80=z) && typeof $mul79=='number'?
							$mul79*$mul80:
							$p['op_mul']($mul79,$mul80))), 0.0))|1) == 1))?$or7:((($p['cmp'](r, $m['_log'](z)))|1) == 1)))) {
							return (typeof ($mul81=x)==typeof ($mul82=beta) && typeof $mul81=='number'?
								$mul81*$mul82:
								$p['op_mul']($mul81,$mul82));
						}
					}
				}
				else if ($p['bool']($p['op_eq'](alpha, 1.0))) {
					u = __random();
					while ($p['bool'](($p['cmp'](u, 1e-07) < 1))) {
						u = __random();
					}
					return (typeof ($mul83=(typeof ($usub5=$m['_log'](u))=='number'?
						-$usub5:
						$p['op_usub']($usub5)))==typeof ($mul84=beta) && typeof $mul83=='number'?
						$mul83*$mul84:
						$p['op_mul']($mul83,$mul84));
				}
				else {
					while ($p['bool']($constant_int_1)) {
						u = __random();
						b = (typeof ($div21=$p['__op_add']($add49=$m['_e'],$add50=alpha))==typeof ($div22=$m['_e']) && typeof $div21=='number' && $div22 !== 0?
							$div21/$div22:
							$p['op_div']($div21,$div22));
						p = (typeof ($mul85=b)==typeof ($mul86=u) && typeof $mul85=='number'?
							$mul85*$mul86:
							$p['op_mul']($mul85,$mul86));
						if ($p['bool'](($p['cmp'](p, 1.0) < 1))) {
							x = (typeof ($pow9=p)==typeof ($pow10=(typeof ($div23=1.0)==typeof ($div24=alpha) && typeof $div23=='number' && $div24 !== 0?
								$div23/$div24:
								$p['op_div']($div23,$div24))) && typeof $pow9=='number'?
								Math['pow']($pow9,$pow10):
								$p['op_pow']($pow9,$pow10));
						}
						else {
							x = (typeof ($usub6=$m['_log']((typeof ($div25=$p['__op_sub']($sub51=b,$sub52=p))==typeof ($div26=alpha) && typeof $div25=='number' && $div26 !== 0?
								$div25/$div26:
								$p['op_div']($div25,$div26))))=='number'?
								-$usub6:
								$p['op_usub']($usub6));
						}
						u1 = __random();
						if ($p['bool'](($p['cmp'](p, 1.0) == 1))) {
							if ($p['bool'](($p['cmp'](u1, (typeof ($pow11=x)==typeof ($pow12=$p['__op_sub']($sub53=alpha,$sub54=1.0)) && typeof $pow11=='number'?
								Math['pow']($pow11,$pow12):
								$p['op_pow']($pow11,$pow12))) < 1))) {
								break;
							}
						}
						else if ($p['bool'](($p['cmp'](u1, $m['_exp']((typeof ($usub7=x)=='number'?
							-$usub7:
							$p['op_usub']($usub7)))) < 1))) {
							break;
						}
					}
					return (typeof ($mul87=x)==typeof ($mul88=beta) && typeof $mul87=='number'?
						$mul87*$mul88:
						$p['op_mul']($mul87,$mul88));
				}
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['gammavariate'] = $method;
			$method = $pyjs__bind_method2('gauss', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub56,$sub55,__random,$mul95,$mul98,$mul96,$mul89,$mul94,$mul93,$mul92,$mul91,$mul90,$mul97,$add51,x2pi,$add52,z,g2rad;
				__random = $p['getattr'](self, 'random');
				z = $p['getattr'](self, 'gauss_next');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				if ($p['bool']($p['op_is'](z, null))) {
					x2pi = (typeof ($mul89=__random())==typeof ($mul90=$m['TWOPI']) && typeof $mul89=='number'?
						$mul89*$mul90:
						$p['op_mul']($mul89,$mul90));
					g2rad = $m['_sqrt']((typeof ($mul91=(typeof ($usub8=2.0)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))==typeof ($mul92=$m['_log']($p['__op_sub']($sub55=1.0,$sub56=__random()))) && typeof $mul91=='number'?
						$mul91*$mul92:
						$p['op_mul']($mul91,$mul92)));
					z = (typeof ($mul93=$m['_cos'](x2pi))==typeof ($mul94=g2rad) && typeof $mul93=='number'?
						$mul93*$mul94:
						$p['op_mul']($mul93,$mul94));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))) : $p['setattr'](self, 'gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))); 
				}
				return $p['__op_add']($add51=mu,$add52=(typeof ($mul97=z)==typeof ($mul98=sigma) && typeof $mul97=='number'?
					$mul97*$mul98:
					$p['op_mul']($mul97,$mul98)));
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['gauss'] = $method;
			$method = $pyjs__bind_method2('betavariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add53,$add54,$div27,$div28,y;
				y = self['gammavariate'](alpha, 1.0);
				if ($p['bool']($p['op_eq'](y, $constant_int_0))) {
					return 0.0;
				}
				else {
					return (typeof ($div27=y)==typeof ($div28=$p['__op_add']($add53=y,$add54=self['gammavariate'](beta, 1.0))) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28));
				}
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['betavariate'] = $method;
			$method = $pyjs__bind_method2('paretovariate', function(alpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub57,$div32,$div30,$div31,$div29,$sub58,u;
				u = $p['__op_sub']($sub57=1.0,$sub58=self['random']());
				return (typeof ($div31=1.0)==typeof ($div32=$p['pow'](u, (typeof ($div29=1.0)==typeof ($div30=alpha) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32));
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['paretovariate'] = $method;
			$method = $pyjs__bind_method2('weibullvariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div33,$mul100,$mul99,$div34,$sub59,u,$sub60;
				u = $p['__op_sub']($sub59=1.0,$sub60=self['random']());
				return (typeof ($mul99=alpha)==typeof ($mul100=$p['pow']((typeof ($usub9=$m['_log'](u))=='number'?
					-$usub9:
					$p['op_usub']($usub9)), (typeof ($div33=1.0)==typeof ($div34=beta) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34)))) && typeof $mul99=='number'?
					$mul99*$mul100:
					$p['op_mul']($mul99,$mul100));
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['weibullvariate'] = $method;
			var $bases = new Array($p['getattr']($m['_random'], 'Random'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Random', $p['tuple']($bases), $data);
		})();
		$m['WichmannHill'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = '3c4457779e36a98e6957a304fc6e4b5f';
			$cls_definition['VERSION'] = $constant_int_1;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $add55,$add56,$add57,$add58,$add59,$pyjs_try_err,$mul101,$mul102,time,y,x,z,$add60;
				if ($p['bool']($p['op_is'](a, null))) {
					try {
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							time = $p['___import___']('time', null);
							a = $p['long']((typeof ($mul101=time['time']())==typeof ($mul102=$constant_int_256) && typeof $mul101=='number'?
								$mul101*$mul102:
								$p['op_mul']($mul101,$mul102)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($p['bool'](!$p['bool']($p['isinstance'](a, $p['tuple']([$p['int'], $p['long']]))))) {
					a = $p['hash'](a);
				}
				var $tupleassign5 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30268), 2, null);
				a = $tupleassign5[0];
				x = $tupleassign5[1];
				var $tupleassign6 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30306), 2, null);
				a = $tupleassign6[0];
				y = $tupleassign6[1];
				var $tupleassign7 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30322), 2, null);
				a = $tupleassign7[0];
				z = $tupleassign7[1];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([$p['__op_add']($add55=$p['int'](x),$add56=$constant_int_1), $p['__op_add']($add57=$p['int'](y),$add58=$constant_int_1), $p['__op_add']($add59=$p['int'](z),$add60=$constant_int_1)])) : $p['setattr'](self, '_seed', $p['tuple']([$p['__op_add']($add55=$p['int'](x),$add56=$constant_int_1), $p['__op_add']($add57=$p['int'](y),$add58=$constant_int_1), $p['__op_add']($add59=$p['int'](z),$add60=$constant_int_1)])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$method = $pyjs__bind_method2('random', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod7,$mod9,$mod8,$add64,$add61,$div37,$add63,$add62,$div39,$mod14,$mod11,$mod10,$mod13,$mod12,$mul104,$mul105,$mul106,$mul107,$mul103,$div36,$mul108,$div40,$div35,y,x,z,$div38;
				var $tupleassign8 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign8[0];
				y = $tupleassign8[1];
				z = $tupleassign8[2];
				x = (typeof ($mod7=(typeof ($mul103=$constant_int_171)==typeof ($mul104=x) && typeof $mul103=='number'?
					$mul103*$mul104:
					$p['op_mul']($mul103,$mul104)))==typeof ($mod8=$constant_int_30269) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
				y = (typeof ($mod9=(typeof ($mul105=$constant_int_172)==typeof ($mul106=y) && typeof $mul105=='number'?
					$mul105*$mul106:
					$p['op_mul']($mul105,$mul106)))==typeof ($mod10=$constant_int_30307) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10));
				z = (typeof ($mod11=(typeof ($mul107=$constant_int_170)==typeof ($mul108=z) && typeof $mul107=='number'?
					$mul107*$mul108:
					$p['op_mul']($mul107,$mul108)))==typeof ($mod12=$constant_int_30323) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				return (typeof ($mod13=$p['__op_add']($add63=$p['__op_add']($add61=(typeof ($div35=x)==typeof ($div36=30269.0) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36)),$add62=(typeof ($div37=y)==typeof ($div38=30307.0) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38))),$add64=(typeof ($div39=z)==typeof ($div40=30323.0) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					$p['op_div']($div39,$div40))))==typeof ($mod14=1.0) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14));
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['tuple']([$p['getattr'](self, 'VERSION'), $p['getattr'](self, '_seed'), $p['getattr'](self, 'gauss_next')]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var version;
				version = state['__getitem__']($constant_int_0);
				if ($p['bool']($p['op_eq'](version, $constant_int_1))) {
					var $tupleassign9 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign9[0];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $tupleassign9[1]) : $p['setattr'](self, '_seed', $tupleassign9[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign9[2]) : $p['setattr'](self, 'gauss_next', $tupleassign9[2]); 
				}
				else {
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$method = $pyjs__bind_method2('jumpahead', function(n) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod15,$mod20,$mod17,$mod16,$mod19,$mod18,$mul114,$mul113,$mul112,$mul111,$mul110,y,x,z,$mul109;
				if ($p['bool'](!$p['bool'](((($p['cmp'](n, $constant_int_0))|1) == 1)))) {
					throw ($p['ValueError']('n must be >= 0'));
				}
				var $tupleassign10 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign10[0];
				y = $tupleassign10[1];
				z = $tupleassign10[2];
				x = (typeof ($mod15=$p['int']((typeof ($mul109=x)==typeof ($mul110=$p['pow']($constant_int_171, n, $constant_int_30269)) && typeof $mul109=='number'?
					$mul109*$mul110:
					$p['op_mul']($mul109,$mul110))))==typeof ($mod16=$constant_int_30269) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16));
				y = (typeof ($mod17=$p['int']((typeof ($mul111=y)==typeof ($mul112=$p['pow']($constant_int_172, n, $constant_int_30307)) && typeof $mul111=='number'?
					$mul111*$mul112:
					$p['op_mul']($mul111,$mul112))))==typeof ($mod18=$constant_int_30307) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18));
				z = (typeof ($mod19=$p['int']((typeof ($mul113=z)==typeof ($mul114=$p['pow']($constant_int_170, n, $constant_int_30323)) && typeof $mul113=='number'?
					$mul113*$mul114:
					$p['op_mul']($mul113,$mul114))))==typeof ($mod20=$constant_int_30323) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				return null;
			}
	, 1, [null,null,['self'],['n']]);
			$cls_definition['jumpahead'] = $method;
			$method = $pyjs__bind_method2('__whseed', function(x, y, z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];
				if (typeof y == 'undefined') y=arguments['callee']['__args__'][4][1];
				if (typeof z == 'undefined') z=arguments['callee']['__args__'][5][1];
				var $or14,$or9,$and3,$and4,$and5,$mul116,$mul115,$or12,$or11,t,$or13,time,$or10;
				if ($p['bool'](!$p['bool'](($p['op_eq']($p['type'](x), ($compare5 = $p['type'](y)))&&$p['op_eq']($compare5, ($compare6 = $p['type'](z)))&&$p['op_eq']($compare6, ($compare7 = $p['int'])))))) {
					throw ($p['TypeError']('seeds must be integers'));
				}
				if ($p['bool'](!$p['bool'](($p['bool']($and3=(($p['cmp']($constant_int_0, ($compare8 = x)) < 1)&&($p['cmp']($compare8, ($compare9 = $constant_int_256)) == -1)))?($p['bool']($and4=(($p['cmp']($constant_int_0, ($compare10 = y)) < 1)&&($p['cmp']($compare10, ($compare11 = $constant_int_256)) == -1)))?(($p['cmp']($constant_int_0, ($compare12 = z)) < 1)&&($p['cmp']($compare12, ($compare13 = $constant_int_256)) == -1)):$and4):$and3)))) {
					throw ($p['ValueError']('seeds must be in range(0, 256)'));
				}
				if ($p['bool'](($p['op_eq']($constant_int_0, ($compare14 = x))&&$p['op_eq']($compare14, ($compare15 = y))&&$p['op_eq']($compare15, ($compare16 = z))))) {
					time = $p['___import___']('time', null);
					t = $p['long']((typeof ($mul115=time['time']())==typeof ($mul116=$constant_int_256) && typeof $mul115=='number'?
						$mul115*$mul116:
						$p['op_mul']($mul115,$mul116)));
					t = $p['int']($p['op_bitxor2']($p['op_bitand2'](t, $constant_int_16777215), $p['op_bitshiftright'](t,$constant_int_24)));
					var $tupleassign11 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign11[0];
					x = $tupleassign11[1];
					var $tupleassign12 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign12[0];
					y = $tupleassign12[1];
					var $tupleassign13 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign13[0];
					z = $tupleassign13[1];
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([($p['bool']($or9=x)?$or9:$constant_int_1), ($p['bool']($or11=y)?$or11:$constant_int_1), ($p['bool']($or13=z)?$or13:$constant_int_1)])) : $p['setattr'](self, '_seed', $p['tuple']([($p['bool']($or9=x)?$or9:$constant_int_1), ($p['bool']($or11=y)?$or11:$constant_int_1), ($p['bool']($or13=z)?$or13:$constant_int_1)])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				return null;
			}
	, 1, [null,null,['self'],['x', $constant_int_0],['y', $constant_int_0],['z', $constant_int_0]]);
			$cls_definition['__whseed'] = $method;
			$method = $pyjs__bind_method2('whseed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$add65,$add67,$add66,$add69,$add68,$or20,$add70,$or15,$or17,$or16,y,x,z,$or19,$or18;
				if ($p['bool']($p['op_is'](a, null))) {
					self['__whseed']();
					return null;
				}
				a = $p['hash'](a);
				var $tupleassign14 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign14[0];
				x = $tupleassign14[1];
				var $tupleassign15 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign15[0];
				y = $tupleassign15[1];
				var $tupleassign16 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign16[0];
				z = $tupleassign16[1];
				x = ($p['bool']($or15=(typeof ($mod21=$p['__op_add']($add65=x,$add66=a))==typeof ($mod22=$constant_int_256) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22)))?$or15:$constant_int_1);
				y = ($p['bool']($or17=(typeof ($mod23=$p['__op_add']($add67=y,$add68=a))==typeof ($mod24=$constant_int_256) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24)))?$or17:$constant_int_1);
				z = ($p['bool']($or19=(typeof ($mod25=$p['__op_add']($add69=z,$add70=a))==typeof ($mod26=$constant_int_256) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26)))?$or19:$constant_int_1);
				self['__whseed'](x, y, z);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['whseed'] = $method;
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('WichmannHill', $p['tuple']($bases), $data);
		})();
		$m['SystemRandom'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = 'f19b5feec5915beed5b5881421edfea5';
			$method = $pyjs__bind_method2('random', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul117,$mul118;
				return (typeof ($mul117=$p['op_bitshiftright']($p['long']($m['_hexlify']($m['_urandom']($constant_int_7)), $constant_int_16),$constant_int_3))==typeof ($mul118=$m['RECIP_BPF']) && typeof $mul117=='number'?
					$mul117*$mul118:
					$p['op_mul']($mul117,$mul118));
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$method = $pyjs__bind_method2('getrandbits', function(k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					k = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add72,$add71,bytes,$floordiv6,$floordiv5,$mul120,x,$sub62,$mul119,$sub61;
				if ($p['bool'](($p['cmp'](k, $constant_int_0) < 1))) {
					throw ($p['ValueError']('number of bits must be greater than zero'));
				}
				if ($p['bool'](!$p['op_eq'](k, $p['int'](k)))) {
					throw ($p['TypeError']('number of bits should be an integer'));
				}
				bytes = (typeof ($floordiv5=$p['__op_add']($add71=k,$add72=$constant_int_7))==typeof ($floordiv6=$constant_int_8) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math['floor']($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6));
				x = $p['long']($m['_hexlify']($m['_urandom'](bytes)), $constant_int_16);
				return $p['op_bitshiftright'](x,$p['__op_sub']($sub61=(typeof ($mul119=bytes)==typeof ($mul120=$constant_int_8) && typeof $mul119=='number'?
					$mul119*$mul120:
					$p['op_mul']($mul119,$mul120)),$sub62=k));
			}
	, 1, [null,null,['self'],['k']]);
			$cls_definition['getrandbits'] = $method;
			$method = $pyjs__bind_method2('_stub', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						var kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				return null;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_stub'] = $method;
			$cls_definition['$assign1'] = $p['staticmethod']($cls_definition['_stub']);
			$cls_definition['seed'] = $cls_definition['$assign1'];
			$cls_definition['jumpahead'] = $cls_definition['$assign1'];
			$method = $pyjs__bind_method2('_notimplemented', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						var kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				throw ($p['NotImplementedError']('System entropy source does not have state.'));
				return null;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_notimplemented'] = $method;
			$cls_definition['$assign2'] = $p['staticmethod']($cls_definition['_notimplemented']);
			$cls_definition['getstate'] = $cls_definition['$assign2'];
			$cls_definition['setstate'] = $cls_definition['$assign2'];
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SystemRandom', $p['tuple']($bases), $data);
		})();
		$m['_test_generator'] = function(n, func, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter5_nextval,$iter5_array,$iter5_idx,t1,$iter5_iter,sqsum,$sub66,$iter5_type,$sub64,total,$sub63,avg,smallest,largest,$div42,$div44,$mul124,$mul122,$mul123,$mul121,$add76,$add74,$add75,$div43,$add73,$div41,i,t0,stddev,time,$sub65,x;
			time = $p['___import___']('time', null);
			$p['printFunc']([n, 'times', $p['getattr'](func, '__name__')], 1);
			total = 0.0;
			sqsum = 0.0;
			smallest = 10000000000.0;
			largest = (typeof ($usub10=10000000000.0)=='number'?
				-$usub10:
				$p['op_usub']($usub10));
			t0 = time['time']();
			$iter5_iter = $p['range'](n);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				x = $pyjs_kwargs_call(null, func, args, null, [{}]);
				total = $p['__op_add']($add73=total,$add74=x);
				sqsum = $p['__op_add']($add75=sqsum,$add76=(typeof ($mul121=x)==typeof ($mul122=x) && typeof $mul121=='number'?
					$mul121*$mul122:
					$p['op_mul']($mul121,$mul122)));
				smallest = $p['min'](x, smallest);
				largest = $p['max'](x, largest);
			}
			t1 = time['time']();
			$p['printFunc']([$p['round']($p['__op_sub']($sub63=t1,$sub64=t0), $constant_int_3), 'sec,'], 0);
			avg = (typeof ($div41=total)==typeof ($div42=n) && typeof $div41=='number' && $div42 !== 0?
				$div41/$div42:
				$p['op_div']($div41,$div42));
			stddev = $m['_sqrt']($p['__op_sub']($sub65=(typeof ($div43=sqsum)==typeof ($div44=n) && typeof $div43=='number' && $div44 !== 0?
				$div43/$div44:
				$p['op_div']($div43,$div44)),$sub66=(typeof ($mul123=avg)==typeof ($mul124=avg) && typeof $mul123=='number'?
				$mul123*$mul124:
				$p['op_mul']($mul123,$mul124))));
			$p['printFunc']([$p['sprintf']('avg %g, stddev %g, min %g, max %g', $p['tuple']([avg, stddev, smallest, largest]))], 1);
			return null;
		};
		$m['_test_generator']['__name__'] = '_test_generator';

		$m['_test_generator']['__bind_type__'] = 0;
		$m['_test_generator']['__args__'] = [null,null,['n'],['func'],['args']];
		$m['_test'] = function(N) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof N == 'undefined') N=arguments['callee']['__args__'][2][1];
			var $div46,$div45;
			$m['_test_generator'](N, (typeof random == "undefined"?$m['random']:random), $p['tuple']([]));
			$m['_test_generator'](N, (typeof normalvariate == "undefined"?$m['normalvariate']:normalvariate), $p['tuple']([0.0, 1.0]));
			$m['_test_generator'](N, (typeof lognormvariate == "undefined"?$m['lognormvariate']:lognormvariate), $p['tuple']([0.0, 1.0]));
			$m['_test_generator'](N, (typeof vonmisesvariate == "undefined"?$m['vonmisesvariate']:vonmisesvariate), $p['tuple']([0.0, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.01, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 2.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.5, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.9, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([1.0, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([2.0, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([20.0, 1.0]));
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([200.0, 1.0]));
			$m['_test_generator'](N, (typeof gauss == "undefined"?$m['gauss']:gauss), $p['tuple']([0.0, 1.0]));
			$m['_test_generator'](N, (typeof betavariate == "undefined"?$m['betavariate']:betavariate), $p['tuple']([3.0, 3.0]));
			$m['_test_generator'](N, (typeof triangular == "undefined"?$m['triangular']:triangular), $p['tuple']([0.0, 1.0, (typeof ($div45=1.0)==typeof ($div46=3.0) && typeof $div45=='number' && $div46 !== 0?
				$div45/$div46:
				$p['op_div']($div45,$div46))]));
			return null;
		};
		$m['_test']['__name__'] = '_test';

		$m['_test']['__bind_type__'] = 0;
		$m['_test']['__args__'] = [null,null,['N', $constant_int_2000]];
		$m['_inst'] = $m['Random']();
		$m['seed'] = $p['getattr']($m['_inst'], 'seed');
		$m['random'] = $p['getattr']($m['_inst'], 'random');
		$m['uniform'] = $p['getattr']($m['_inst'], 'uniform');
		$m['triangular'] = $p['getattr']($m['_inst'], 'triangular');
		$m['randint'] = $p['getattr']($m['_inst'], 'randint');
		$m['choice'] = $p['getattr']($m['_inst'], 'choice');
		$m['randrange'] = $p['getattr']($m['_inst'], 'randrange');
		$m['sample'] = $p['getattr']($m['_inst'], 'sample');
		$m['shuffle'] = $p['getattr']($m['_inst'], 'shuffle');
		$m['normalvariate'] = $p['getattr']($m['_inst'], 'normalvariate');
		$m['lognormvariate'] = $p['getattr']($m['_inst'], 'lognormvariate');
		$m['expovariate'] = $p['getattr']($m['_inst'], 'expovariate');
		$m['vonmisesvariate'] = $p['getattr']($m['_inst'], 'vonmisesvariate');
		$m['gammavariate'] = $p['getattr']($m['_inst'], 'gammavariate');
		$m['gauss'] = $p['getattr']($m['_inst'], 'gauss');
		$m['betavariate'] = $p['getattr']($m['_inst'], 'betavariate');
		$m['paretovariate'] = $p['getattr']($m['_inst'], 'paretovariate');
		$m['weibullvariate'] = $p['getattr']($m['_inst'], 'weibullvariate');
		$m['getstate'] = $p['getattr']($m['_inst'], 'getstate');
		$m['setstate'] = $p['getattr']($m['_inst'], 'setstate');
		$m['jumpahead'] = $p['getattr']($m['_inst'], 'jumpahead');
		$m['getrandbits'] = $p['getattr']($m['_inst'], 'getrandbits');
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$m['_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end random */


/* end module: random */


/*
PYJS_DEPS: ['math.log', 'math', 'math.exp', 'math.pi', 'math.e', 'math.ceil', 'math.sqrt', 'math.acos', 'math.cos', 'math.sin', 'os.urandom', 'os', 'binascii.hexlify', 'binascii', '_random', 'time']
*/
