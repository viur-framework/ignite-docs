/* start module: network */
$pyjs['loaded_modules']['network'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['network']['__was_initialized__']) return $pyjs['loaded_modules']['network'];
	var $m = $pyjs['loaded_modules']['network'];
	$m['__repr__'] = function() { return '<module: network>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'network';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_5000 = new $p['int'](5000);
		var $constant_int_500 = new $p['int'](500);
		var $constant_int_502 = new $p['int'](502);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_2500 = new $p['int'](2500);
		$m['os'] = $p['___import___']('os', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['json'] = $p['___import___']('json', null);
		$m['string'] = $p['___import___']('string', null);
		$m['random'] = $p['___import___']('random', null);
		$m['time'] = $p['___import___']('time', null);
		$m['DeferredCall'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'network';
			$cls_definition['__md5__'] = '865561a11798d500c7bd7ed87c90be19';
			$method = $pyjs__bind_method2('__init__', function(func) {
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
					func = arguments[1];
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
					if (self.prototype['__md5__'] !== '865561a11798d500c7bd7ed87c90be19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof func != 'undefined') {
						if (func !== null && typeof func['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = func;
							func = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var delay,w;
				$p['$$super']($m['DeferredCall'], self)['__init__']();
				delay = $constant_int_25;
				if ($p['bool'](kwargs['keys']()['__contains__']('_delay'))) {
					delay = kwargs['__getitem__']('_delay');
					kwargs['__delitem__']('_delay');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tFunc', func) : $p['setattr'](self, '_tFunc', func); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tArgs', args) : $p['setattr'](self, '_tArgs', args); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tKwArgs', kwargs) : $p['setattr'](self, '_tKwArgs', kwargs); 
				w = (typeof eval == "undefined"?$m['eval']:eval)('window');
				w['setTimeout']($p['getattr'](self, 'run'), delay);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['func']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '865561a11798d500c7bd7ed87c90be19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call(self, '_tFunc', $p['getattr'](self, '_tArgs'), $p['getattr'](self, '_tKwArgs'), [{}]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DeferredCall', $p['tuple']($bases), $data);
		})();
		$m['HTTPRequest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'network';
			$cls_definition['__md5__'] = '754201a655579d1933b5b3ffd45f0e6d';
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
					if (self.prototype['__md5__'] !== '754201a655579d1933b5b3ffd45f0e6d') {
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

				$pyjs_kwargs_call($p['$$super']($m['HTTPRequest'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('req', (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()')) : $p['setattr'](self, 'req', (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()')); 
				$p['getattr'](self, 'req')['__is_instance__'] && typeof $p['getattr'](self, 'req')['__setattr__'] == 'function' ? $p['getattr'](self, 'req')['__setattr__']('onreadystatechange', $p['getattr'](self, 'onReadyStateChange')) : $p['setattr']($p['getattr'](self, 'req'), 'onreadystatechange', $p['getattr'](self, 'onReadyStateChange')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cb', null) : $p['setattr'](self, 'cb', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hasBeenSent', false) : $p['setattr'](self, 'hasBeenSent', false); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('asyncGet', function(url, cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					cb = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '754201a655579d1933b5b3ffd45f0e6d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cb', cb) : $p['setattr'](self, 'cb', cb); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', 'GET') : $p['setattr'](self, 'type', 'GET'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('payload', null) : $p['setattr'](self, 'payload', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('content_type', null) : $p['setattr'](self, 'content_type', null); 
				self['req']['open']('GET', url, true);
				return null;
			}
	, 1, [null,null,['self'],['url'],['cb']]);
			$cls_definition['asyncGet'] = $method;
			$method = $pyjs__bind_method2('asyncPost', function(url, payload, cb, content_type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					payload = arguments[2];
					cb = arguments[3];
					content_type = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '754201a655579d1933b5b3ffd45f0e6d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][6][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cb', cb) : $p['setattr'](self, 'cb', cb); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', 'POST') : $p['setattr'](self, 'type', 'POST'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('payload', payload) : $p['setattr'](self, 'payload', payload); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('content_type', content_type) : $p['setattr'](self, 'content_type', content_type); 
				self['req']['open']('POST', url, true);
				return null;
			}
	, 1, [null,null,['self'],['url'],['payload'],['cb'],['content_type', null]]);
			$cls_definition['asyncPost'] = $method;
			$method = $pyjs__bind_method2('onReadyStateChange', function() {
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
					if (self.prototype['__md5__'] !== '754201a655579d1933b5b3ffd45f0e6d') {
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
				var $and1,$and3,$and4,$and5,$and6,$and2;
				if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr']($p['getattr'](self, 'req'), 'readyState'), $constant_int_1))?!$p['bool']($p['getattr'](self, 'hasBeenSent')):$and1))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('hasBeenSent', true) : $p['setattr'](self, 'hasBeenSent', true); 
					if ($p['bool'](($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'type'), 'POST'))?!$p['op_is']($p['getattr'](self, 'content_type'), null):$and3))) {
						self['req']['setRequestHeader']('Content-Type', $p['getattr'](self, 'content_type'));
					}
					self['req']['send']($p['getattr'](self, 'payload'));
				}
				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'req'), 'readyState'), $constant_int_4))) {
					if ($p['bool'](($p['bool']($and5=((($p['cmp']($p['getattr']($p['getattr'](self, 'req'), 'status'), $constant_int_200))|1) == 1))?($p['cmp']($p['getattr']($p['getattr'](self, 'req'), 'status'), $constant_int_300) == -1):$and5))) {
						self['cb']['onCompletion']($p['getattr']($p['getattr'](self, 'req'), 'responseText'));
					}
					else {
						self['cb']['onError']($p['getattr']($p['getattr'](self, 'req'), 'responseText'), $p['getattr']($p['getattr'](self, 'req'), 'status'));
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onReadyStateChange'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
		})();
		$m['NetworkService'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'network';
			$cls_definition['__md5__'] = '3ef228765cca9c79fad75d8472d96c91';
			$cls_definition['changeListeners'] = $p['list']([]);
			$cls_definition['_cache'] = $p['dict']([]);
			$cls_definition['host'] = '';
			$cls_definition['prefix'] = '/json';
			$cls_definition['defaultFailureHandler'] = null;
			$cls_definition['retryCodes'] = $p['list']([$constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), $constant_int_500, $constant_int_502]);
			$cls_definition['retryMax'] = $constant_int_3;
			$cls_definition['retryDelay'] = $constant_int_5000;
			$method = $pyjs__bind_method2('notifyChange', function(module) {
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[1];
						}
					} else {
					}
				}
				var $augexpr1,c,$iter1_nextval,$iter1_type,$iter1_idx,$augsub1,$iter1_iter,$add2,$add1,$iter1_array;
				if ($p['bool']($m['NetworkService']['_cache']['keys']()['__contains__'](module))) {
					var $augsub1 = module;
					var $augexpr1 = $p['getattr']($m['NetworkService'], '_cache');
					$augexpr1['__setitem__']($augsub1, $p['__op_add']($add1=$augexpr1['__getitem__']($augsub1),$add2=$constant_int_1));
				}
				$iter1_iter = $p['getattr']($m['NetworkService'], 'changeListeners');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					c = $iter1_nextval['$nextval'];
					$pyjs_kwargs_call(c, 'onDataChanged', null, kwargs, [{}, module]);
				}
				return null;
			}
	, 3, [null,['kwargs'],['module']]);
			$cls_definition['notifyChange'] = $method;
			$method = $pyjs__bind_method2('registerChangeListener', function(listener) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				if ($p['bool']($p['getattr']($m['NetworkService'], 'changeListeners')['__contains__'](listener))) {
					return null;
				}
				$m['NetworkService']['changeListeners']['append'](listener);
				return null;
			}
	, 3, [null,null,['listener']]);
			$cls_definition['registerChangeListener'] = $method;
			$method = $pyjs__bind_method2('removeChangeListener', function(listener) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				if (!( $p['getattr']($m['NetworkService'], 'changeListeners')['__contains__'](listener) )) {
				   throw $p['AssertionError']($p['sprintf']('Attempt to remove unregistered listener %s', $p['str'](listener)));
				 }
				$m['NetworkService']['changeListeners']['remove'](listener);
				return null;
			}
	, 3, [null,null,['listener']]);
			$cls_definition['removeChangeListener'] = $method;
			$method = $pyjs__bind_method2('genReqStr', function(params) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $iter5_idx,$iter3_iter,$iter6_array,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$iter5_nextval,$add49,$iter5_array,value,$iter6_iter,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,res,$add69,$add68,boundary,$iter6_idx,key,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,k,$add45,encoding,$iter6_type,$iter3_array,$iter5_type,boundary_str,val,$add48,$add47,$add46,$iter3_nextval,$add44,$add43,$add42,$add41,$add40,type,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add7,$add13,v,$add8,$add9,$iter5_iter,$iter6_nextval,$add29,$add28,$iter3_idx,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$or1,$or2,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19;
				boundary_str = $p['__op_add']($add7='---',$add8=''['join'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$add3,$iter2_idx,$add6,$add4,$add5,x,$iter2_array;
	$collcomp1 = $p['list']();
				$iter2_iter = $p['range']($constant_int_13);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					$collcomp1['append']($m['random']['choice']($p['__op_add']($add5=$p['__op_add']($add3=$p['getattr']($m['string'], 'ascii_lowercase'),$add4=$p['getattr']($m['string'], 'ascii_uppercase')),$add6=$p['getattr']($m['string'], 'digits'))));
				}

	return $collcomp1;}()));
				boundary = boundary_str;
				res = $p['__op_add']($add11=$p['__op_add']($add9='Content-Type: multipart/mixed; boundary="',$add10=boundary),$add12='"\r\nMIME-Version: 1.0\r\n');
				res = $p['__op_add']($add15=res,$add16=$p['__op_add']($add13='\r\n--',$add14=boundary));
				$iter3_iter = $p['list'](params['items']());
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					key = $tupleassign1[0];
					value = $tupleassign1[1];
					if ($p['bool']($p['all'](function(){
						var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp2 = $p['list']();
					$iter4_iter = $p['list'](['name', 'read']);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x = $iter4_nextval['$nextval'];
						$collcomp2['append']($p['dir'](value)['__contains__'](x));
					}

	return $collcomp2;}()))) {
						try {
							var $tupleassign2 = $p['__ass_unpack']($pyjs_kwargs_call($m['mimetypes'], 'guess_type', null, null, [{'strict':false}, value['$$name']['decode']($m['sys']['getfilesystemencoding']())]), 2, null);
							type = $tupleassign2[0];
							encoding = $tupleassign2[1];
							type = ($p['bool']($or1=type)?$or1:'application/octet-stream');
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (true) {
								type = 'application/octet-stream';
							}
						}
						res = $p['__op_add']($add29=res,$add30=$p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17='\r\nContent-Type: ',$add18=type),$add20='\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="'),$add22=key),$add24='"; filename="'),$add26=$m['os']['path']['basename']($p['getattr'](value, '$$name'))['decode']($m['sys']['getfilesystemencoding']())),$add28='"\r\n\r\n'));
						res = $p['__op_add']($add31=res,$add32=$p['str'](value['read']()));
						res = $p['__op_add']($add35=res,$add36=$p['__op_add']($add33='\r\n--',$add34=boundary));
					}
					else if ($p['bool']($p['isinstance'](value, $p['list']))) {
						$iter5_iter = value;
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							val = $iter5_nextval['$nextval'];
							res = $p['__op_add']($add41=res,$add42=$p['__op_add']($add39=$p['__op_add']($add37='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add38=key),$add40='"\r\n\r\n'));
							res = $p['__op_add']($add43=res,$add44=$p['str'](val));
							res = $p['__op_add']($add47=res,$add48=$p['__op_add']($add45='\r\n--',$add46=boundary));
						}
					}
					else if ($p['bool']($p['isinstance'](value, $p['dict']))) {
						$iter6_iter = value['items']();
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							var $tupleassign3 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
							k = $tupleassign3[0];
							v = $tupleassign3[1];
							res = $p['__op_add']($add57=res,$add58=$p['__op_add']($add55=$p['__op_add']($add53=$p['__op_add']($add51=$p['__op_add']($add49='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add50=key),$add52='.'),$add54=k),$add56='"\r\n\r\n'));
							res = $p['__op_add']($add59=res,$add60=$p['str'](v));
							res = $p['__op_add']($add63=res,$add64=$p['__op_add']($add61='\r\n--',$add62=boundary));
						}
					}
					else {
						res = $p['__op_add']($add69=res,$add70=$p['__op_add']($add67=$p['__op_add']($add65='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add66=key),$add68='"\r\n\r\n'));
						res = $p['__op_add']($add71=res,$add72=$p['str'](value));
						res = $p['__op_add']($add75=res,$add76=$p['__op_add']($add73='\r\n--',$add74=boundary));
					}
				}
				res = $p['__op_add']($add77=res,$add78='--\r\n');
				return $p['tuple']([res, boundary]);
			}
	, 3, [null,null,['params']]);
			$cls_definition['genReqStr'] = $method;
			$method = $pyjs__bind_method2('decode', function(req) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $m['json']['loads']($p['getattr'](req, 'result'));
			}
	, 3, [null,null,['req']]);
			$cls_definition['decode'] = $method;
			$method = $pyjs__bind_method2('isOkay', function(req) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $and8,$and7,answ;
				answ = $m['NetworkService']['decode'](req);
				return ($p['bool']($and7=$p['isinstance'](answ, $p['str']))?$p['op_eq'](answ, 'OKAY'):$and7);
			}
	, 3, [null,null,['req']]);
			$cls_definition['isOkay'] = $method;
			$method = $pyjs__bind_method2('urlForArgs', function(module, path, cacheable) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and9,$and10,cacheKey;
				cacheKey = $m['time']['time']();
				if ($p['bool'](($p['bool']($and9=cacheable)?module:$and9))) {
					if ($p['bool'](!$p['bool']($m['NetworkService']['_cache']['keys']()['__contains__'](module)))) {
						$p['getattr']($m['NetworkService'], '_cache')['__setitem__'](module, $constant_int_1);
					}
					cacheKey = $p['sprintf']('c%s', $p['getattr']($m['NetworkService'], '_cache')['__getitem__'](module));
				}
				if ($p['bool'](module)) {
					return $p['sprintf']('%s%s/%s/%s?_unused_time_stamp=%s', $p['tuple']([$p['getattr']($m['NetworkService'], 'host'), $p['getattr']($m['NetworkService'], 'prefix'), module, path, cacheKey]));
				}
				return $p['sprintf']('%s%s_unused_time_stamp=%s', $p['tuple']([path, ($p['bool'](path['__contains__']('?'))? ('&') : ('?')), cacheKey]));
			}
	, 3, [null,null,['module'],['path'],['cacheable']]);
			$cls_definition['urlForArgs'] = $method;
			$method = $pyjs__bind_method2('__init__', function(module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure, kickoff) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 10) $pyjs__exception_func_param(arguments['callee']['__name__'], 11, 11, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					url = arguments[2];
					params = arguments[3];
					successHandler = arguments[4];
					failureHandler = arguments[5];
					finishedHandler = arguments[6];
					modifies = arguments[7];
					cacheable = arguments[8];
					secure = arguments[9];
					kickoff = arguments[10];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 11) $pyjs__exception_func_param(arguments['callee']['__name__'], 11, 11, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['NetworkService'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('result', null) : $p['setattr'](self, 'result', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('status', null) : $p['setattr'](self, 'status', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('waitingForSkey', false) : $p['setattr'](self, 'waitingForSkey', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('url', url) : $p['setattr'](self, 'url', url); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('params', params) : $p['setattr'](self, 'params', params); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('successHandler', ($p['bool'](successHandler)? ($p['list']([successHandler])) : ($p['list']([])))) : $p['setattr'](self, 'successHandler', ($p['bool'](successHandler)? ($p['list']([successHandler])) : ($p['list']([])))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('failureHandler', ($p['bool'](failureHandler)? ($p['list']([failureHandler])) : ($p['list']([])))) : $p['setattr'](self, 'failureHandler', ($p['bool'](failureHandler)? ($p['list']([failureHandler])) : ($p['list']([])))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('finishedHandler', ($p['bool'](finishedHandler)? ($p['list']([finishedHandler])) : ($p['list']([])))) : $p['setattr'](self, 'finishedHandler', ($p['bool'](finishedHandler)? ($p['list']([finishedHandler])) : ($p['list']([])))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modifies', modifies) : $p['setattr'](self, 'modifies', modifies); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cacheable', cacheable) : $p['setattr'](self, 'cacheable', cacheable); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('secure', secure) : $p['setattr'](self, 'secure', secure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('kickoffs', $constant_int_0) : $p['setattr'](self, 'kickoffs', $constant_int_0); 
				if ($p['bool'](kickoff)) {
					self['kickoff']();
				}
				return null;
			}
	, 1, [null,null,['self'],['module'],['url'],['params'],['successHandler'],['failureHandler'],['finishedHandler'],['modifies'],['cacheable'],['secure'],['kickoff']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('kickoff', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add80,$add79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('status', 'running') : $p['setattr'](self, 'status', 'running'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('kickoffs', $p['__op_add']($add79=$p['getattr'](self, 'kickoffs'),$add80=$constant_int_1)) : $p['setattr'](self, 'kickoffs', $p['__op_add']($add79=$p['getattr'](self, 'kickoffs'),$add80=$constant_int_1)); 
				if ($p['bool']($p['getattr'](self, 'secure'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('waitingForSkey', true) : $p['setattr'](self, 'waitingForSkey', true); 
					self['doFetch']($p['sprintf']('%s%s/skey', $p['tuple']([$p['getattr']($m['NetworkService'], 'host'), $p['getattr']($m['NetworkService'], 'prefix')])), null, null);
				}
				else {
					self['doFetch']($m['NetworkService']['urlForArgs']($p['getattr'](self, 'module'), $p['getattr'](self, 'url'), $p['getattr'](self, 'cacheable')), $p['getattr'](self, 'params'), null);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['kickoff'] = $method;
			$method = $pyjs__bind_method2('request', function(module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure, kickoff) {
				if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 10, arguments['length']);
				if (typeof params == 'undefined') params=arguments['callee']['__args__'][4][1];
				if (typeof successHandler == 'undefined') successHandler=arguments['callee']['__args__'][5][1];
				if (typeof failureHandler == 'undefined') failureHandler=arguments['callee']['__args__'][6][1];
				if (typeof finishedHandler == 'undefined') finishedHandler=arguments['callee']['__args__'][7][1];
				if (typeof modifies == 'undefined') modifies=arguments['callee']['__args__'][8][1];
				if (typeof cacheable == 'undefined') cacheable=arguments['callee']['__args__'][9][1];
				if (typeof secure == 'undefined') secure=arguments['callee']['__args__'][10][1];
				if (typeof kickoff == 'undefined') kickoff=arguments['callee']['__args__'][11][1];
				var $and12,$and11;
				$p['printFunc']([$p['tuple'](['NS REQUEST', module, url, params])], 1);
				if (!( !$p['bool'](($p['bool']($and11=cacheable)?modifies:$and11)) )) {
				   throw $p['AssertionError']('Cannot cache a request modifying data!');
				 }
				return $m['NetworkService'](module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure, kickoff);
			}
	, 3, [null,null,['module'],['url'],['params', null],['successHandler', null],['failureHandler', null],['finishedHandler', null],['modifies', false],['cacheable', false],['secure', false],['kickoff', true]]);
			$cls_definition['request'] = $method;
			$method = $pyjs__bind_method2('doFetch', function(url, params, skey) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					params = arguments[2];
					skey = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add88,$add82,$add87,$add86,$add85,$add84,$add83,multipart,contentType,boundary,$add81;
				if ($p['bool'](params)) {
					if ($p['bool'](skey)) {
						params['__setitem__']('skey', skey);
					}
					contentType = null;
					if ($p['bool']($p['isinstance'](params, $p['dict']))) {
						var $tupleassign4 = $p['__ass_unpack']($m['NetworkService']['genReqStr'](params), 2, null);
						multipart = $tupleassign4[0];
						boundary = $tupleassign4[1];
						contentType = $p['__op_add']($add83=$p['__op_add']($add81='multipart/form-data; boundary=',$add82=boundary),$add84='; charset=utf-8');
					}
					else if ($p['bool']($p['isinstance'](params, (typeof bytes == "undefined"?$m['bytes']:bytes)))) {
						contentType = 'application/x-www-form-urlencoded';
						multipart = params;
					}
					else {
						$p['printFunc']([params], 1);
						$p['printFunc']([$p['type'](params)], 1);
						multipart = params;
					}
					$pyjs_kwargs_call($m['HTTPRequest'](), 'asyncPost', null, null, [{'content_type':contentType}, url, multipart, self]);
				}
				else {
					if ($p['bool'](skey)) {
						if ($p['bool'](url['__contains__']('?'))) {
							url = $p['__op_add']($add85=url,$add86=$p['sprintf']('&skey=%s', skey));
						}
						else {
							url = $p['__op_add']($add87=url,$add88=$p['sprintf']('?skey=%s', skey));
						}
					}
					$m['HTTPRequest']()['asyncGet'](url, self);
				}
				return null;
			}
	, 1, [null,null,['self'],['url'],['params'],['skey']]);
			$cls_definition['doFetch'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter7_nextval,$iter7_array,$iter8_array,$iter8_iter,s,$pyjs_try_err,$iter8_nextval,$iter7_idx,$iter7_iter,$iter7_type,$iter8_type;
				if ($p['bool']($p['getattr'](self, 'waitingForSkey'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('waitingForSkey', false) : $p['setattr'](self, 'waitingForSkey', false); 
					self['doFetch']($m['NetworkService']['urlForArgs']($p['getattr'](self, 'module'), $p['getattr'](self, 'url'), $p['getattr'](self, 'cacheable')), $p['getattr'](self, 'params'), $m['json']['loads'](text));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('result', text) : $p['setattr'](self, 'result', text); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('status', 'succeeded') : $p['setattr'](self, 'status', 'succeeded'); 
					try {
						$iter7_iter = $p['getattr'](self, 'successHandler');
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							s = $iter7_nextval['$nextval'];
							s(self);
						}
						$iter8_iter = $p['getattr'](self, 'finishedHandler');
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							s = $iter8_nextval['$nextval'];
							s(self);
						}
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							if ($p['bool']($p['getattr'](self, 'modifies'))) {
								$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'key':($p['bool']($p['getattr'](self, 'params'))? (self['params']['get']('key')) : (null)), 'action':$p['getattr'](self, 'url'), '_delay':$constant_int_2500}, $p['getattr']($m['NetworkService'], 'notifyChange'), $p['getattr'](self, 'module')]);
							}
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					}
					if ($p['bool']($p['getattr'](self, 'modifies'))) {
						$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'key':($p['bool']($p['getattr'](self, 'params'))? (self['params']['get']('key')) : (null)), 'action':$p['getattr'](self, 'url'), '_delay':$constant_int_2500}, $p['getattr']($m['NetworkService'], 'notifyChange'), $p['getattr'](self, 'module')]);
					}
					self['clear']();
				}
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$iter10_iter,logError,$iter9_iter,$iter9_nextval,$iter9_idx,$sub2,$sub1,$iter9_type,$iter10_idx,$and13,$and16,$and17,$and14,$and15,$and18,$iter10_array,s,$iter10_type,$iter9_array;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('status', 'failed') : $p['setattr'](self, 'status', 'failed'); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('result', text) : $p['setattr'](self, 'result', text); 
				$p['printFunc']([$p['tuple'](['onError', $p['getattr'](self, 'kickoffs'), $p['getattr'](self, 'retryMax'), $p['int'](code), $p['getattr'](self, 'retryCodes')])], 1);
				if ($p['bool'](($p['bool']($and13=($p['cmp']($p['getattr'](self, 'kickoffs'), $p['getattr'](self, 'retryMax')) == -1))?$p['getattr'](self, 'retryCodes')['__contains__']($p['int'](code)):$and13))) {
					logError = (typeof eval == "undefined"?$m['eval']:eval)('window.top.logError');
					if ($p['bool'](($p['bool']($and15=logError)?$p['op_eq']($p['getattr'](self, 'kickoffs'), $p['__op_sub']($sub1=$p['getattr'](self, 'retryMax'),$sub2=$constant_int_1)):$and15))) {
						logError($p['sprintf']('NetworkService.onError code:%s module:%s url:%s params:%s', $p['tuple']([code, $p['getattr'](self, 'module'), $p['getattr'](self, 'url'), $p['getattr'](self, 'params')])));
					}
					$p['printFunc']([$p['sprintf']('error %d, kickoff %d, will retry now', $p['tuple']([$p['int'](code), $p['getattr'](self, 'kickoffs')]))], 1);
					$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':$p['getattr'](self, 'retryDelay')}, $p['getattr'](self, 'kickoff')]);
					return null;
				}
				$iter9_iter = $p['getattr'](self, 'failureHandler');
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					s = $iter9_nextval['$nextval'];
					s(self, code);
				}
				if ($p['bool'](($p['bool']($and17=!$p['bool']($p['getattr'](self, 'failureHandler')))?$p['getattr'](self, 'defaultFailureHandler'):$and17))) {
					self['defaultFailureHandler'](self, code);
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'defaultFailureHandler')))) {
					self['clear']();
				}
				$iter10_iter = $p['getattr'](self, 'finishedHandler');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					s = $iter10_nextval['$nextval'];
					s(self);
				}
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onTimeout', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onError'](text, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onTimeout'] = $method;
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
					if (self.prototype['__md5__'] !== '3ef228765cca9c79fad75d8472d96c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('successHandler', $p['list']([])) : $p['setattr'](self, 'successHandler', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('finishedHandler', $p['list']([])) : $p['setattr'](self, 'finishedHandler', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('failureHandler', $p['list']([])) : $p['setattr'](self, 'failureHandler', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('params', null) : $p['setattr'](self, 'params', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NetworkService', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end network */


/* end module: network */


/*
PYJS_DEPS: ['os', 'sys', 'json', 'string', 'random', 'time']
*/
