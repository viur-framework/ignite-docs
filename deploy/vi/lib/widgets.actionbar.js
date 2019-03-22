/* start module: widgets.actionbar */
$pyjs['loaded_modules']['widgets.actionbar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.actionbar']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.actionbar'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.actionbar'];
	$m['__repr__'] = function() { return '<module: widgets.actionbar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.actionbar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['actionbar'] = $pyjs['loaded_modules']['widgets.actionbar'];
	try {


		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['ActionBar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.actionbar';
			$cls_definition['__md5__'] = '2bbd272a405d7bed4775b32af15a154a';
			$method = $pyjs__bind_method2('__init__', function(module, appType, currentAction) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					appType = arguments[2];
					currentAction = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '2bbd272a405d7bed4775b32af15a154a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof currentAction != 'undefined') {
						if (currentAction !== null && typeof currentAction['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = currentAction;
							currentAction = arguments[4];
						}
					} else 					if (typeof appType != 'undefined') {
						if (appType !== null && typeof appType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = appType;
							appType = arguments[4];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof module == 'undefined') module=arguments['callee']['__args__'][3][1];
				if (typeof appType == 'undefined') appType=arguments['callee']['__args__'][4][1];
				if (typeof currentAction == 'undefined') currentAction=arguments['callee']['__args__'][5][1];

				$p['$$super']($m['ActionBar'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actions', $p['list']([])) : $p['setattr'](self, 'actions', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets', $p['dict']([])) : $p['setattr'](self, 'widgets', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('appType', appType) : $p['setattr'](self, 'appType', appType); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentAction', currentAction) : $p['setattr'](self, 'currentAction', currentAction); 
				self['__getitem__']('class')['append']('actionbar');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module', null],['appType', null],['currentAction', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setActions', function(actions) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					actions = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bbd272a405d7bed4775b32af15a154a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,actionWdg,h3,$pyjs_try_err,$iter1_iter,$iter2_idx,handler,$iter1_array,$and1,span,action,$iter2_type,$and2,$iter2_array,$iter1_idx;
				$iter1_iter = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					c = $iter1_nextval['$nextval'];
					self['removeChild'](c);
				}
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'currentAction'), null))) {
					h3 = $m['html5']['H3']();
					h3['__getitem__']('class')['append']($p['sprintf']('modul_%s', $p['getattr'](self, 'module')));
					h3['__getitem__']('class')['append']($p['sprintf']('apptype_%s', $p['getattr'](self, 'appType')));
					h3['__getitem__']('class')['append']($p['sprintf']('action_%s', $p['getattr'](self, 'currentAction')));
					h3['appendChild']($m['html5']['TextNode']($m['translate']($p['getattr'](self, 'currentAction'))));
					self['appendChild'](h3);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets', $p['dict']([])) : $p['setattr'](self, 'widgets', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actions', actions) : $p['setattr'](self, 'actions', actions); 
				$iter2_iter = actions;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					action = $iter2_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](action, '|'))) {
						span = $m['html5']['Span']();
						span['__getitem__']('class')['append']('spacer');
						self['appendChild'](span);
					}
					else {
						if ($p['bool'](($p['bool']($and1=!$p['op_is']($p['getattr'](self, 'module'), null))?$m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')):$and1))) {
							handler = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('handler');
						}
						else {
							handler = '';
						}
						actionWdg = $m['actionDelegateSelector']['select']($p['getattr'](self, 'module'), handler, action);
						if ($p['bool'](!$p['op_is'](actionWdg, null))) {
							try {
								actionWdg = actionWdg($p['getattr'](self, 'module'), handler, action);
							} catch($pyjs_try_err) {
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (true) {
									actionWdg = actionWdg();
								}
							}
							self['appendChild'](actionWdg);
							$p['getattr'](self, 'widgets')['__setitem__'](action, actionWdg);
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['actions']]);
			$cls_definition['setActions'] = $method;
			$method = $pyjs__bind_method2('getActions', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bbd272a405d7bed4775b32af15a154a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'actions');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getActions'] = $method;
			$method = $pyjs__bind_method2('resetLoadingState', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bbd272a405d7bed4775b32af15a154a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter3_idx,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
				$iter3_iter = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					c = $iter3_nextval['$nextval'];
					if ($p['bool']($p['dir'](c)['__contains__']('resetLoadingState'))) {
						c['resetLoadingState']();
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ActionBar', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.actionbar */


/* end module: widgets.actionbar */


/*
PYJS_DEPS: ['html5', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
