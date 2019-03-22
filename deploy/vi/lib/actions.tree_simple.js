/* start module: actions.tree_simple */
$pyjs['loaded_modules']['actions.tree_simple'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.tree_simple']['__was_initialized__']) return $pyjs['loaded_modules']['actions.tree_simple'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.tree_simple'];
	$m['__repr__'] = function() { return '<module: actions.tree_simple>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.tree_simple';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['actions']['tree_simple'] = $pyjs['loaded_modules']['actions.tree_simple'];
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
		$m['InputDialog'] = $p['___import___']('html5.ext.inputdialog.InputDialog', 'actions', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
		$m['AddNodeAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree_simple';
			$cls_definition['__md5__'] = '725ef48f7d5d04e259239b4f6dbcd5f2';
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
					if (self.prototype['__md5__'] !== '725ef48f7d5d04e259239b4f6dbcd5f2') {
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

				$pyjs_kwargs_call($p['$$super']($m['AddNodeAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Add Node')]);
				self['__setitem__']('class', 'icon mkdir');
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
				correctAction = $p['op_eq'](actionName, 'add.node');
				correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'tree.simple'))?$or3:handler['startswith']('tree.simple.'));
				hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
				isDisabled = ($p['bool']($and3=!$p['op_is'](module, null))?($p['bool']($and4=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add-node'):$and5):$and4):$and3);
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
					if (self.prototype['__md5__'] !== '725ef48f7d5d04e259239b4f6dbcd5f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var i;
				i = $pyjs_kwargs_call(null, $m['InputDialog'], null, null, [{'successHandler':$p['getattr'](self, 'createDir'), 'title':$m['translate']('Create directory'), 'successLbl':$m['translate']('Create')}, $m['translate']('Directory Name')]);
				i['__getitem__']('class')['append']('create');
				i['__getitem__']('class')['append']('directory');
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('createDir', function(dialog, dirName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					dialog = arguments[1];
					dirName = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '725ef48f7d5d04e259239b4f6dbcd5f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				if ($p['bool']($p['op_eq']($p['len'](dirName), $constant_int_0))) {
					return null;
				}
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true, 'successHandler':$p['getattr'](self, 'onMkDir')}, $p['getattr'](self['parent']()['parent'](), 'module'), 'add/node', $p['dict']([['node', $p['getattr'](self['parent']()['parent'](), 'node')], ['name', dirName]])]);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('dirName', dirName) : $p['setattr'](r, 'dirName', dirName); 
				return null;
			}
	, 1, [null,null,['self'],['dialog'],['dirName']]);
			$cls_definition['createDir'] = $method;
			$method = $pyjs__bind_method2('onMkDir', function(req) {
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
					if (self.prototype['__md5__'] !== '725ef48f7d5d04e259239b4f6dbcd5f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dirName;
				dirName = $p['getattr'](req, 'dirName');
				$m['conf']['__getitem__']('mainWindow')['log']('success', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'name':dirName}, 'Directory "{name}" created.']));
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onMkDir'] = $method;
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
					if (self.prototype['__md5__'] !== '725ef48f7d5d04e259239b4f6dbcd5f2') {
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
		$m['actionDelegateSelector']['insert']($constant_int_3, $p['getattr']($m['AddNodeAction'], 'isSuitableFor'), $m['AddNodeAction']);
		$m['EditAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.tree_simple';
			$cls_definition['__md5__'] = 'b80fb9b807a07eb9b52dd1e72b810c9d';
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var edwg,skelType,$and12,$and13,$and11,pane;
				if ($p['bool'](($p['bool']($and11=!$p['bool']($p['getattr'](self['parent']()['parent'](), 'isSelector')))?($p['bool']($and12=$p['op_eq']($p['len'](selection), $constant_int_1))?$p['isinstance'](selection['__getitem__']($constant_int_0), $p['getattr'](self['parent']()['parent'](), 'leafWidget')):$and12):$and11))) {
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_edit'])}, $m['translate']('Edit')]);
					$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
					skelType = 'leaf';
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
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
				var $and23,$and22,$and21,$and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
				if ($p['bool'](($p['bool']($or7=$p['op_is'](module, null))?$or7:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'edit');
				correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'tree.simple'))?$or9:handler['startswith']('tree.simple.'));
				hasAccess = ($p['bool']($and14=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-edit'))):$and14);
				isDisabled = ($p['bool']($and16=!$p['op_is'](module, null))?($p['bool']($and17=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and18=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and18):$and17):$and16);
				return ($p['bool']($and20=correctAction)?($p['bool']($and21=correctHandler)?($p['bool']($and22=hasAccess)?!$p['bool'](isDisabled):$and22):$and21):$and20);
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,skelType,selection,$iter1_nextval,$iter1_idx,i,$iter1_iter,s,$iter1_array,pane,$iter1_type;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					s = $iter1_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](s, $p['getattr'](self['parent']()['parent'](), 'nodeWidget')))) {
						i = $pyjs_kwargs_call(null, $m['InputDialog'], null, null, [{'successHandler':$p['getattr'](self, 'editDir'), 'value':$p['getattr'](s, 'data')['__getitem__']('name')}, $m['translate']('Directory Name')]);
						i['__is_instance__'] && typeof i['__setattr__'] == 'function' ? i['__setattr__']('dirKey', $p['getattr'](s, 'data')['__getitem__']('key')) : $p['setattr'](i, 'dirKey', $p['getattr'](s, 'data')['__getitem__']('key')); 
						return null;
					}
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_tree', 'action_edit'])}, 'Edit']);
					$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
					skelType = 'leaf';
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](s, 'data')['__getitem__']('key'), 'skelType':skelType}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
					pane['addWidget'](edwg);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('editDir', function(dialog, dirName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					dialog = arguments[1];
					dirName = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self['parent']()['parent'](), 'module'), 'edit/node', $p['dict']([['key', $p['getattr'](dialog, 'dirKey')], ['name', dirName]])]);
				return null;
			}
	, 1, [null,null,['self'],['dialog'],['dirName']]);
			$cls_definition['editDir'] = $method;
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
					if (self.prototype['__md5__'] !== 'b80fb9b807a07eb9b52dd1e72b810c9d') {
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
		$m['actionDelegateSelector']['insert']($constant_int_3, $p['getattr']($m['EditAction'], 'isSuitableFor'), $m['EditAction']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end actions.tree_simple */


/* end module: actions.tree_simple */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'html5.ext.inputdialog.InputDialog', 'html5.ext', 'html5.ext.inputdialog', 'i18n.translate', 'i18n']
*/
