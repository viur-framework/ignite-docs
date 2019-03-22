/* start module: priorityqueue */
$pyjs['loaded_modules']['priorityqueue'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['priorityqueue']['__was_initialized__']) return $pyjs['loaded_modules']['priorityqueue'];
	var $m = $pyjs['loaded_modules']['priorityqueue'];
	$m['__repr__'] = function() { return '<module: priorityqueue>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'priorityqueue';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		$m['StartupQueue'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'priorityqueue';
			$cls_definition['__md5__'] = 'afe8c8777df20cfcb34201eb708a1a95';
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
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['StartupQueue'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('q', $p['list']([])) : $p['setattr'](self, 'q', $p['list']([])); 
				self['reset']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isRunning', false) : $p['setattr'](self, 'isRunning', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'currentElem', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('finalElem', null) : $p['setattr'](self, 'finalElem', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('setFinalElem', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( $p['op_is']($p['getattr'](self, 'finalElem'), null) )) {
				   throw $p['AssertionError']();
				 }
				if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
				   throw $p['AssertionError']();
				 }
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('finalElem', elem) : $p['setattr'](self, 'finalElem', elem); 
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['setFinalElem'] = $method;
			$method = $pyjs__bind_method2('insertElem', function(priority, elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					priority = arguments[1];
					elem = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
				   throw $p['AssertionError']();
				 }
				self['q']['append']($p['tuple']([priority, elem]));
				return null;
			}
	, 1, [null,null,['self'],['priority'],['elem']]);
			$cls_definition['insertElem'] = $method;
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
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
				   throw $p['AssertionError']();
				 }
				if (!( !$p['op_is']($p['getattr'](self, 'finalElem'), null) )) {
				   throw $p['AssertionError']();
				 }
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isRunning', true) : $p['setattr'](self, 'isRunning', true); 
				self['next']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afe8c8777df20cfcb34201eb708a1a95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,cb,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', $p['__op_add']($add1=$p['getattr'](self, 'currentElem'),$add2=$constant_int_1)) : $p['setattr'](self, 'currentElem', $p['__op_add']($add1=$p['getattr'](self, 'currentElem'),$add2=$constant_int_1)); 
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'currentElem'), $p['len']($p['getattr'](self, 'q'))) == -1))) {
					cb = $p['getattr'](self, 'q')['__getitem__']($p['getattr'](self, 'currentElem'))['__getitem__']($constant_int_1);
					$p['printFunc']([$p['sprintf']('Running startup callback #%s', $p['str']($p['getattr'](self, 'currentElem')))], 1);
					cb();
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'currentElem'), $p['len']($p['getattr'](self, 'q'))))) {
					self['finalElem']();
					self['reset']();
				}
				else {
					throw ($p['RuntimeError']('StartupQueue has no more elements to call. Someone called next() twice!'));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StartupQueue', $p['tuple']($bases), $data);
		})();
		$m['startupQueue'] = $m['StartupQueue']();
		$m['PriorityQueue'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'priorityqueue';
			$cls_definition['__md5__'] = '265f1384859cbf76e50a808d44f5c669';
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
					if (self.prototype['__md5__'] !== '265f1384859cbf76e50a808d44f5c669') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['PriorityQueue'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_q', $p['dict']([])) : $p['setattr'](self, '_q', $p['dict']([])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('insert', function(priority, validateFunc, generator) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					priority = arguments[1];
					validateFunc = arguments[2];
					generator = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '265f1384859cbf76e50a808d44f5c669') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				priority = $p['int'](priority);
				if ($p['bool'](!$p['bool'](self['_q']['keys']()['__contains__'](priority)))) {
					$p['getattr'](self, '_q')['__setitem__'](priority, $p['list']([]));
				}
				$p['getattr'](self, '_q')['__getitem__'](priority)['append']($p['tuple']([validateFunc, generator]));
				return null;
			}
	, 1, [null,null,['self'],['priority'],['validateFunc'],['generator']]);
			$cls_definition['insert'] = $method;
			$method = $pyjs__bind_method2('select', function() {
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
					if (self.prototype['__md5__'] !== '265f1384859cbf76e50a808d44f5c669') {
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
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,validateFunc,$iter1_iter,prios,p,$iter2_idx,$iter1_array,$iter2_type,generator,$iter2_array,$iter1_idx;
				prios = $p['list'](self['_q']['keys']());
				$pyjs_kwargs_call(prios, 'sort', null, null, [{'reverse':true}]);
				$iter1_iter = prios;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					p = $iter1_nextval['$nextval'];
					$iter2_iter = $p['getattr'](self, '_q')['__getitem__'](p);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
						validateFunc = $tupleassign1[0];
						generator = $tupleassign1[1];
						if ($p['bool']($pyjs_kwargs_call(null, validateFunc, args, kwargs, [{}]))) {
							return generator;
						}
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['select'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PriorityQueue', $p['tuple']($bases), $data);
		})();
		$m['HandlerClassSelector'] = $m['PriorityQueue']();
		$m['moduleHandlerSelector'] = $m['PriorityQueue']();
		$m['editBoneSelector'] = $m['PriorityQueue']();
		$m['actionDelegateSelector'] = $m['PriorityQueue']();
		$m['displayDelegateSelector'] = $m['PriorityQueue']();
		$m['initialHashHandler'] = $m['PriorityQueue']();
		$m['extendedSearchWidgetSelector'] = $m['PriorityQueue']();
		$m['extractorDelegateSelector'] = $m['PriorityQueue']();
		$m['toplevelActionSelector'] = $m['PriorityQueue']();
		$m['loginHandlerSelector'] = $m['PriorityQueue']();
		$m['viewDelegateSelector'] = $m['PriorityQueue']();
		$m['protocolWrapperClassSelector'] = $m['PriorityQueue']();
		$m['protocolWrapperInstanceSelector'] = $m['PriorityQueue']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end priorityqueue */


/* end module: priorityqueue */


