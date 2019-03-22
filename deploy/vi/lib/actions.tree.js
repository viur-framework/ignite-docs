/* start module: actions.tree */
$pyjs['loaded_modules']['actions.tree'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.tree']['__was_initialized__']) return $pyjs['loaded_modules']['actions.tree'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.tree'];
	$m['__repr__'] = function() { return '<module: actions.tree>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.tree';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['actions']['tree'] = $pyjs['loaded_modules']['actions.tree'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'actions');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'actions', null, false);
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'actions', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'actions', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'actions', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'actions', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
		$m['AddLeafAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '5f30c53f498695395e87fb809ffca52c';
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
					if (self.prototype['__md5__'] !== '5f30c53f498695395e87fb809ffca52c') {
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

				$pyjs_kwargs_call($p['$$super']($m['AddLeafAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Add')]);
				self['__setitem__']('class', 'icon add leaf');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and8,$and9,correctHandler,isDisabled,$or2,$or5,$or4,$or6,$or1,$or3,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and10,correctAction,hasAccess,$add2,$add1;
				if ($p['bool'](($p['bool']($or1=$p['op_is'](module, null))?$or1:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'add.leaf');
				correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'tree'))?$or3:handler['startswith']('tree.'));
				hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
				isDisabled = ($p['bool']($and3=!$p['op_is'](module, null))?($p['bool']($and4=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add-leaf'):$and5):$and4):$and3);
				return ($p['bool']($and7=correctAction)?($p['bool']($and8=correctHandler)?($p['bool']($and9=hasAccess)?!$p['bool'](isDisabled):$and9):$and8):$and7);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '5f30c53f498695395e87fb809ffca52c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true}, 'Add']);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_add_leaf'])}, pane]);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr'](self['parent']()['parent'](), 'node'), 'skelType':'leaf'}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
				pane['addWidget'](edwg);
				pane['focus']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '5f30c53f498695395e87fb809ffca52c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AddLeafAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['AddLeafAction'], 'isSuitableFor'), $m['AddLeafAction']);
		$m['AddNodeAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = 'c311a73a433d00248e9364ca9bc0db36';
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
					if (self.prototype['__md5__'] !== 'c311a73a433d00248e9364ca9bc0db36') {
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

				$pyjs_kwargs_call($p['$$super']($m['AddNodeAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Add')]);
				self['__setitem__']('class', 'icon add node');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
				if ($p['bool'](($p['bool']($or7=$p['op_is'](module, null))?$or7:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'add.node');
				correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'tree'))?$or9:handler['startswith']('tree.'));
				hasAccess = ($p['bool']($and11=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-add'))):$and11);
				isDisabled = ($p['bool']($and13=!$p['op_is'](module, null))?($p['bool']($and14=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and15=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add-node'):$and15):$and14):$and13);
				return ($p['bool']($and17=correctAction)?($p['bool']($and18=correctHandler)?($p['bool']($and19=hasAccess)?!$p['bool'](isDisabled):$and19):$and18):$and17);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== 'c311a73a433d00248e9364ca9bc0db36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_add_node'])}, $m['translate']('Add')]);
				$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr'](self['parent']()['parent'](), 'node'), 'skelType':'node'}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
				pane['addWidget'](edwg);
				pane['focus']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== 'c311a73a433d00248e9364ca9bc0db36') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AddNodeAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['AddNodeAction'], 'isSuitableFor'), $m['AddNodeAction']);
		$m['EditAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '2bb6404be8cf56429073c20e94f9f367';
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
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

				$pyjs_kwargs_call($p['$$super']($m['EditAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Edit')]);
				self['__setitem__']('class', 'icon edit');
				self['__setitem__']('disabled', true);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', true) : $p['setattr'](self, 'isDisabled', true); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['EditAction'], self)['onAttach']();
				self['parent']()['parent']()['selectionChangedEvent']['register'](self);
				self['parent']()['parent']()['selectionActivatedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				self['parent']()['parent']()['selectionActivatedEvent']['unregister'](self);
				$p['$$super']($m['EditAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var edwg,skelType,pane,$and22,$and21;
				if ($p['bool'](($p['bool']($and21=!$p['bool']($p['getattr'](self['parent']()['parent'](), 'isSelector')))?$p['op_eq']($p['len'](selection), $constant_int_1):$and21))) {
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_edit'])}, $m['translate']('Edit')]);
					$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
					if ($p['bool']($p['isinstance'](selection['__getitem__']($constant_int_0), $p['getattr'](self['parent']()['parent'](), 'nodeWidget')))) {
						skelType = 'node';
					}
					else if ($p['bool']($p['isinstance'](selection['__getitem__']($constant_int_0), $p['getattr'](self['parent']()['parent'](), 'leafWidget')))) {
						skelType = 'leaf';
					}
					else {
						throw ($p['ValueError']($p['sprintf']('Unknown selection type: %s', $p['str']($p['type'](selection['__getitem__']($constant_int_0))))));
					}
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](selection['__getitem__']($constant_int_0), 'data')['__getitem__']('key'), 'skelType':skelType}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
					pane['addWidget'](edwg);
					pane['focus']();
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len'](selection), $constant_int_0) == 1))) {
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
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and29,$and28,$and23,$and27,$and26,$and25,$and24,correctHandler,isDisabled,correctAction,$and30,$and31,$and32,hasAccess,$or15,$or14,$or17,$or16,$add6,$or13,$add5,$or18;
				if ($p['bool'](($p['bool']($or13=$p['op_is'](module, null))?$or13:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'edit');
				correctHandler = ($p['bool']($or15=$p['op_eq'](handler, 'tree'))?$or15:handler['startswith']('tree.'));
				hasAccess = ($p['bool']($and23=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or17=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or17:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=module,$add6='-edit'))):$and23);
				isDisabled = ($p['bool']($and25=!$p['op_is'](module, null))?($p['bool']($and26=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and27=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and27):$and26):$and25);
				return ($p['bool']($and29=correctAction)?($p['bool']($and30=correctHandler)?($p['bool']($and31=hasAccess)?!$p['bool'](isDisabled):$and31):$and30):$and29);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,skelType,selection,$iter1_nextval,$iter1_idx,$iter1_iter,s,$iter1_array,pane,$iter1_type;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$p['printFunc']([selection], 1);
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					s = $iter1_nextval['$nextval'];
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true}, $m['translate']('Edit')]);
					$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
					if ($p['bool']($p['isinstance'](s, $p['getattr'](self['parent']()['parent'](), 'nodeWidget')))) {
						skelType = 'node';
					}
					else if ($p['bool']($p['isinstance'](s, $p['getattr'](self['parent']()['parent'](), 'leafWidget')))) {
						skelType = 'leaf';
					}
					else {
						throw ($p['ValueError']($p['sprintf']('Unknown selection type: %s', $p['str']($p['type'](s)))));
					}
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](s, 'data')['__getitem__']('key'), 'skelType':skelType, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_edit'])}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
					pane['addWidget'](edwg);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '2bb6404be8cf56429073c20e94f9f367') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EditAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['EditAction'], 'isSuitableFor'), $m['EditAction']);
		$m['DeleteAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '35c4c62046cb30937a73bf8821d073ac';
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
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

				$pyjs_kwargs_call($p['$$super']($m['DeleteAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Delete')]);
				self['__setitem__']('class', 'icon delete');
				self['__setitem__']('disabled', true);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', true) : $p['setattr'](self, 'isDisabled', true); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['DeleteAction'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['DeleteAction'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len'](selection), $constant_int_0) == 1))) {
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
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var correctHandler,isDisabled,$and41,$and40,$and42,$or24,$or20,$or21,$or22,$or23,$and38,$and39,$and34,$and35,$and36,$and37,$and33,correctAction,hasAccess,$add7,$add8,$or19;
				if ($p['bool'](($p['bool']($or19=$p['op_is'](module, null))?$or19:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'delete');
				correctHandler = ($p['bool']($or21=$p['op_eq'](handler, 'tree'))?$or21:handler['startswith']('tree.'));
				hasAccess = ($p['bool']($and33=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or23=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or23:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=module,$add8='-delete'))):$and33);
				isDisabled = ($p['bool']($and35=!$p['op_is'](module, null))?($p['bool']($and36=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and37=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('delete'):$and37):$and36):$and35);
				return ($p['bool']($and39=correctAction)?($p['bool']($and40=correctHandler)?($p['bool']($and41=hasAccess)?!$p['bool'](isDisabled):$and41):$and40):$and39);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var selection,d;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				d = $pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':$m['translate']('Delete them?'), 'yesCallback':$p['getattr'](self, 'doDelete'), 'yesLabel':$m['translate']('Delete'), 'noLabel':$m['translate']('Keep')}, $pyjs_kwargs_call(null, $m['translate'], null, null, [{'amt':$p['len'](selection)}, 'Delete {amt} Entries?'])]);
				d['__is_instance__'] && typeof d['__setattr__'] == 'function' ? d['__setattr__']('deleteList', selection) : $p['setattr'](d, 'deleteList', selection); 
				d['__getitem__']('class')['append']('delete');
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('doDelete', function(dialog) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dialog = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,deleteList,$iter2_idx,x,$iter2_array;
				deleteList = $p['getattr'](dialog, 'deleteList');
				$iter2_iter = deleteList;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](x, $p['getattr'](self['parent']()['parent'](), 'nodeWidget')))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self['parent']()['parent'](), 'module'), 'delete/node', $p['dict']([['key', $p['getattr'](x, 'data')['__getitem__']('key')]])]);
					}
					else if ($p['bool']($p['isinstance'](x, $p['getattr'](self['parent']()['parent'](), 'leafWidget')))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self['parent']()['parent'](), 'module'), 'delete/leaf', $p['dict']([['key', $p['getattr'](x, 'data')['__getitem__']('key')]])]);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['dialog']]);
			$cls_definition['doDelete'] = $method;
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
					if (self.prototype['__md5__'] !== '35c4c62046cb30937a73bf8821d073ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DeleteAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['DeleteAction'], 'isSuitableFor'), $m['DeleteAction']);
		$m['ReloadAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '24ff89c8561599a23feffeb99ac7f314';
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
					if (self.prototype['__md5__'] !== '24ff89c8561599a23feffeb99ac7f314') {
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

				$pyjs_kwargs_call($p['$$super']($m['ReloadAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Reload')]);
				self['__setitem__']('class', 'icon reload');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and44,$and43,$or25,$or26;
				return ($p['bool']($and43=$p['op_eq'](actionName, 'reload'))?($p['bool']($or25=$p['op_eq'](handler, 'tree'))?$or25:handler['startswith']('tree.')):$and43);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '24ff89c8561599a23feffeb99ac7f314') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['__getitem__']('class')['append']('is_loading');
				$m['NetworkService']['notifyChange']($p['getattr'](self['parent']()['parent'](), 'module'));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '24ff89c8561599a23feffeb99ac7f314') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](self['__getitem__']('class')['__contains__']('is_loading'))) {
					self['__getitem__']('class')['remove']('is_loading');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ReloadAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ReloadAction'], 'isSuitableFor'), $m['ReloadAction']);
		$m['SelectRootNode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '4c135fdfe2ff2dbd8733f81be5d5ef04';
			$method = $pyjs__bind_method2('__init__', function(module, handler, actionName) {
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
					module = arguments[1];
					handler = arguments[2];
					actionName = arguments[3];
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
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof actionName != 'undefined') {
						if (actionName !== null && typeof actionName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = actionName;
							actionName = arguments[4];
						}
					} else 					if (typeof handler != 'undefined') {
						if (handler !== null && typeof handler['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = handler;
							handler = arguments[4];
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

				$pyjs_kwargs_call($p['$$super']($m['SelectRootNode'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onChange');
				self['hide']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['handler'],['actionName']]);
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
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectRootNode'], self)['onAttach']();
				self['parent']()['parent']()['rootNodeChangedEvent']['register'](self);
				if ($p['bool']($p['op_is']($p['getattr'](self['parent']()['parent'](), 'rootNode'), null))) {
					self['update']();
				}
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
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['rootNodeChangedEvent']['unregister'](self);
				$p['$$super']($m['SelectRootNode'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['removeAllChildren']();
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRootNodesAvaiable'), 'cacheable':true}, $p['getattr'](self['parent']()['parent'](), 'module'), 'listRootNodes']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('onRootNodeChanged', function(newNode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					newNode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,option,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
				$iter3_iter = $p['getattr'](self, '_children');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					option = $iter3_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](option['__getitem__']('value'), newNode))) {
						option['__setitem__']('selected', true);
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['newNode']]);
			$cls_definition['onRootNodeChanged'] = $method;
			$method = $pyjs__bind_method2('onRootNodesAvaiable', function(req) {
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
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var node,option,res,$iter4_idx,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter;
				res = $m['NetworkService']['decode'](req);
				$iter4_iter = res;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					node = $iter4_nextval['$nextval'];
					option = $m['html5']['Option']();
					option['__setitem__']('value', node['__getitem__']('key'));
					option['appendChild']($m['html5']['TextNode'](node['__getitem__']('name')));
					if ($p['bool']($p['op_eq'](node['__getitem__']('key'), $p['getattr'](self['parent']()['parent'](), 'rootNode')))) {
						option['__setitem__']('selected', true);
					}
					self['appendChild'](option);
				}
				if ($p['bool'](($p['cmp']($p['len'](self['children']()), $constant_int_1) == 1))) {
					self['show']();
				}
				else {
					self['hide']();
				}
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onRootNodesAvaiable'] = $method;
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
					if (self.prototype['__md5__'] !== '4c135fdfe2ff2dbd8733f81be5d5ef04') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newRootNode;
				newRootNode = $p['getattr'](self['__getitem__']('options')['item'](self['__getitem__']('selectedIndex')), 'value');
				self['parent']()['parent']()['setRootNode'](newRootNode);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and45,$and46,$or28,$or27;
				return ($p['bool']($and45=$p['op_eq'](actionName, 'selectrootnode'))?($p['bool']($or27=$p['op_eq'](handler, 'tree'))?$or27:handler['startswith']('tree.')):$and45);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Select'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectRootNode', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['SelectRootNode'], 'isSuitableFor'), $m['SelectRootNode']);
		$m['ReturnSelectionAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree';
			$cls_definition['__md5__'] = '1b23bcf55ba44608b5033edfdd9ef80d';
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
					if (self.prototype['__md5__'] !== '1b23bcf55ba44608b5033edfdd9ef80d') {
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

				$pyjs_kwargs_call($p['$$super']($m['ReturnSelectionAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Select')]);
				self['__setitem__']('class', 'icon activateselection');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '1b23bcf55ba44608b5033edfdd9ef80d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['parent']()['parent']()['returnCurrentSelection']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var correctHandler,$and48,$or29,$and47,$or30;
				correctHandler = ($p['bool']($or29=$p['op_eq'](handler, 'tree'))?$or29:handler['startswith']('tree.'));
				return ($p['bool']($and47=$p['op_eq'](actionName, 'select'))?correctHandler:$and47);
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ReturnSelectionAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_3, $p['getattr']($m['ReturnSelectionAction'], 'isSuitableFor'), $m['ReturnSelectionAction']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end actions.tree */


/* end module: actions.tree */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'i18n.translate', 'i18n']
*/
