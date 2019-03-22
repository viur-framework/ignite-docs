/* start module: actions.list */
$pyjs['loaded_modules']['actions.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.list']['__was_initialized__']) return $pyjs['loaded_modules']['actions.list'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.list'];
	$m['__repr__'] = function() { return '<module: actions.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.list';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['actions']['list'] = $pyjs['loaded_modules']['actions.list'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['html5'] = $p['___import___']('html5', 'actions');
		$m['utils'] = $p['___import___']('utils', 'actions');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'actions', null, false);
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'actions', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'actions', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'actions', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'actions', null, false);
		$m['RepeatDatePopup'] = $p['___import___']('widgets.repeatdate.RepeatDatePopup', 'actions', null, false);
		$m['ExportCsvStarter'] = $p['___import___']('widgets.csvexport.ExportCsvStarter', 'actions', null, false);
		$m['DataTable'] = $p['___import___']('widgets.table.DataTable', 'actions', null, false);
		$m['Preview'] = $p['___import___']('widgets.preview.Preview', 'actions', null, false);
		$m['InternalPreview'] = $p['___import___']('sidebarwidgets.internalpreview.InternalPreview', 'actions', null, false);
		$m['FilterSelector'] = $p['___import___']('sidebarwidgets.filterselector.FilterSelector', 'actions', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
		$m['EditPane'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'a2900a4260b62cfdf048ff666c5dbc47';
			var $bases = new Array($m['Pane']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EditPane', $p['tuple']($bases), $data);
		})();
		$m['AddAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'd64a150ffd0cfc876c41cb9066d15d94';
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
					if (self.prototype['__md5__'] !== 'd64a150ffd0cfc876c41cb9066d15d94') {
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

				$pyjs_kwargs_call($p['$$super']($m['AddAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Add')]);
				self['__setitem__']('class', 'icon add list');
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
				correctAction = $p['op_eq'](actionName, 'add');
				correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'list'))?$or3:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
				isDisabled = ($p['bool']($and3=!$p['op_is'](module, null))?($p['bool']($and4=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add'):$and5):$and4):$and3);
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
					if (self.prototype['__md5__'] !== 'd64a150ffd0cfc876c41cb9066d15d94') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['EditPane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_list', 'action_add'])}, $m['translate']('Add')]);
				$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'context':$p['getattr'](self['parent']()['parent'](), 'context')}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appList')]);
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
					if (self.prototype['__md5__'] !== 'd64a150ffd0cfc876c41cb9066d15d94') {
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
			return $p['_create_class']('AddAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['AddAction'], 'isSuitableFor'), $m['AddAction']);
		$m['EditAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'cb9dbbf92a5fdfae3669ddd0133e46a2';
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and12,$and11;
				if ($p['bool'](($p['bool']($and11=!$p['bool']($p['getattr'](self['parent']()['parent'](), 'isSelector')))?$p['op_eq']($p['len'](selection), $constant_int_1):$and11))) {
					self['openEditor'](selection['__getitem__']($constant_int_0)['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and22,$and21,$and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and13,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
				if ($p['bool'](($p['bool']($or7=$p['op_is'](module, null))?$or7:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'edit');
				correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'list'))?$or9:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and13=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-edit'))):$and13);
				isDisabled = ($p['bool']($and15=!$p['op_is'](module, null))?($p['bool']($and16=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and17=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and17):$and16):$and15);
				return ($p['bool']($and19=correctAction)?($p['bool']($and20=correctHandler)?($p['bool']($and21=hasAccess)?!$p['bool'](isDisabled):$and21):$and20):$and19);
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var selection,$iter1_nextval,$iter1_idx,$iter1_iter,s,$iter1_array,$iter1_type;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					s = $iter1_nextval['$nextval'];
					self['openEditor'](s['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('openEditor', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':key, 'context':$p['getattr'](self['parent']()['parent'](), 'context')}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appList')]);
				pane['addWidget'](edwg);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['openEditor'] = $method;
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
					if (self.prototype['__md5__'] !== 'cb9dbbf92a5fdfae3669ddd0133e46a2') {
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
		$m['CloneAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '734d2fd01426db8f777f03cab9dda558';
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
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

				$pyjs_kwargs_call($p['$$super']($m['CloneAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Clone')]);
				self['__setitem__']('class', 'icon clone');
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['CloneAction'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['CloneAction'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
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
				correctAction = $p['op_eq'](actionName, 'clone');
				correctHandler = ($p['bool']($or15=$p['op_eq'](handler, 'list'))?$or15:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and23=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or17=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or17:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=module,$add6='-edit'))):$and23);
				isDisabled = ($p['bool']($and25=!$p['op_is'](module, null))?($p['bool']($and26=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and27=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('clone'):$and27):$and26):$and25);
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $iter2_nextval,$iter2_type,$iter2_iter,s,$iter2_idx,selection,$iter2_array;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$iter2_iter = selection;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					s = $iter2_nextval['$nextval'];
					self['openEditor'](s['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('openEditor', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_list', 'action_edit'])}, $m['translate']('Clone')]);
				$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':key, 'clone':true, 'context':$p['getattr'](self['parent']()['parent'](), 'context')}, $p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr']($m['EditWidget'], 'appList')]);
				pane['addWidget'](edwg);
				pane['focus']();
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['openEditor'] = $method;
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
					if (self.prototype['__md5__'] !== '734d2fd01426db8f777f03cab9dda558') {
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
			return $p['_create_class']('CloneAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['CloneAction'], 'isSuitableFor'), $m['CloneAction']);
		$m['DeleteAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'fad0d677b319543f230608e05c55fe28';
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
				correctHandler = ($p['bool']($or21=$p['op_eq'](handler, 'list'))?$or21:handler['startswith']('list.'));
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
				d['__is_instance__'] && typeof d['__setattr__'] == 'function' ? d['__setattr__']('deleteList', function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,x;
	$collcomp1 = $p['list']();
				$iter3_iter = selection;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					x = $iter3_nextval['$nextval'];
					$collcomp1['append'](x['__getitem__']('key'));
				}

	return $collcomp1;}()) : $p['setattr'](d, 'deleteList', function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,x;
	$collcomp1 = $p['list']();
				$iter3_iter = selection;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					x = $iter3_nextval['$nextval'];
					$collcomp1['append'](x['__getitem__']('key'));
				}

	return $collcomp1;}()); 
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,deleteList,$iter4_idx,$iter4_type,$iter4_array,x,$iter4_iter;
				deleteList = $p['getattr'](dialog, 'deleteList');
				$iter4_iter = deleteList;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self['parent']()['parent'](), 'module'), 'delete', $p['dict']([['key', x]])]);
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
					if (self.prototype['__md5__'] !== 'fad0d677b319543f230608e05c55fe28') {
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
		$m['ListPreviewAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '333989cf3a4352dc6f69f95c8f6004fd';
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
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
				var btn;
				$pyjs_kwargs_call($p['$$super']($m['ListPreviewAction'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urlCb', $m['html5']['Select']()) : $p['setattr'](self, 'urlCb', $m['html5']['Select']()); 
				self['appendChild']($p['getattr'](self, 'urlCb'));
				btn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onClick')}, $m['translate']('Preview')]);
				btn['__setitem__']('class', 'icon preview');
				self['appendChild'](btn);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', null) : $p['setattr'](self, 'urls', null); 
				self['__setitem__']('disabled', true);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', true) : $p['setattr'](self, 'isDisabled', true); 
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['handler'],['actionName']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newUrl;
				event['stopPropagation']();
				newUrl = $p['getattr']($p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex')), 'value');
				self['setUrl'](newUrl);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('rebuildCB', function() {
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
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
				var name,$iter6_idx,$iter6_type,o,url,$iter6_array,$or25,$or26,$iter6_iter,$iter6_nextval;
				self['urlCb']['removeAllChildren']();
				if ($p['bool']($p['isinstance']($p['getattr'](self, 'urls'), $p['list']))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', function(){
						var $iter5_nextval,x,$iter5_idx,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['dict']();
					$iter5_iter = $p['getattr'](self, 'urls');
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						x = $iter5_nextval['$nextval'];
						$collcomp2['__setitem__'](x, x);
					}

	return $collcomp2;}()) : $p['setattr'](self, 'urls', function(){
						var $iter5_nextval,x,$iter5_idx,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['dict']();
					$iter5_iter = $p['getattr'](self, 'urls');
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						x = $iter5_nextval['$nextval'];
						$collcomp2['__setitem__'](x, x);
					}

	return $collcomp2;}()); 
				}
				if ($p['bool'](($p['bool']($or25=!$p['bool']($p['isinstance']($p['getattr'](self, 'urls'), $p['dict'])))?$or25:$p['op_eq']($p['len'](self['urls']['keys']()), $constant_int_1)))) {
					$p['getattr'](self, 'urlCb')['__getitem__']('style')['__setitem__']('display', 'none');
					return null;
				}
				$iter6_iter = self['urls']['items']();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
					name = $tupleassign1[0];
					url = $tupleassign1[1];
					o = $m['html5']['Option']();
					o['__setitem__']('value', url);
					o['appendChild']($m['html5']['TextNode'](name));
					self['urlCb']['appendChild'](o);
				}
				$p['getattr'](self, 'urlCb')['__getitem__']('style')['__setitem__']('display', '');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['rebuildCB'] = $method;
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var moduleConfig,module;
				$p['$$super']($m['ListPreviewAction'], self)['onAttach']();
				self['parent']()['parent']()['selectionChangedEvent']['register'](self);
				module = $p['getattr'](self['parent']()['parent'](), 'module');
				if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__'](module))) {
					moduleConfig = $m['conf']['__getitem__']('modules')['__getitem__'](module);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', moduleConfig['get']('preview', moduleConfig['get']('previewurls'))) : $p['setattr'](self, 'urls', moduleConfig['get']('preview', moduleConfig['get']('previewurls'))); 
					if ($p['bool']($p['getattr'](self, 'urls'))) {
						self['rebuildCB']();
					}
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['ListPreviewAction'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len'](selection), $constant_int_0) == 1))) {
					if ($p['bool']($p['getattr'](self, 'isDisabled'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', false) : $p['setattr'](self, 'isDisabled', false); 
						self['__setitem__']('disabled', false);
					}
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
					if (self.prototype['__md5__'] !== '333989cf3a4352dc6f69f95c8f6004fd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var selection,$add13,$iter8_iter,$iter7_type,$iter8_idx,$iter7_iter,$iter8_type,$add14,$add15,$add16,$add10,$iter8_nextval,$add12,$iter7_idx,target,newUrl,$iter7_nextval,k,$iter7_array,$iter8_array,v,entry,$add9,$add11;
				if ($p['bool']($p['op_is']($p['getattr'](self, 'urls'), null))) {
					return null;
				}
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$iter7_iter = selection;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					entry = $iter7_nextval['$nextval'];
					if ($p['bool']($p['isinstance']($p['getattr'](self, 'urls'), $p['str']))) {
						newUrl = $p['getattr'](self, 'urls');
					}
					else if ($p['bool']($p['op_eq']($p['len'](self['urls']['keys']()), $constant_int_1))) {
						newUrl = self['urls']['values']()['__getitem__']($constant_int_0);
					}
					else {
						newUrl = $p['getattr']($p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex')), 'value');
					}
					newUrl = newUrl['$$replace']('{{modul}}', $p['getattr'](self['parent']()['parent'](), 'module'))['$$replace']('{{module}}', $p['getattr'](self['parent']()['parent'](), 'module'));
					$iter8_iter = entry['items']();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						newUrl = newUrl['$$replace']($p['sprintf']('{{%s}}', k), v);
					}
					newUrl = newUrl['$$replace']("'", "\\'");
					target = $p['sprintf']('%s-%s', $p['tuple']([$p['getattr'](self['parent']()['parent'](), 'module'), entry['get']('key')]));
					(typeof eval == "undefined"?$m['eval']:eval)($p['__op_add']($add15=$p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9="window.open('",$add10=newUrl),$add12="', '"),$add14=target),$add16="');"));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var correctHandler,$and48,$and45,$and44,$and47,$and46,$and43,$or28,$or29,$or27,correctAction,$add17,$and49,$add18,hasAccess,$and52,$and53,$and50,$and51,$or32,$or31,$or30,isAvailable,isDisabled;
				if ($p['bool'](($p['bool']($or27=$p['op_is'](module, null))?$or27:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'preview');
				correctHandler = ($p['bool']($or29=$p['op_eq'](handler, 'list'))?$or29:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and43=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or31=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or31:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add17=module,$add18='-view'))):$and43);
				isDisabled = ($p['bool']($and45=!$p['op_is'](module, null))?($p['bool']($and46=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and47=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and47):$and46):$and45);
				isAvailable = $m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('preview', $m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('previewurls'));
				return ($p['bool']($and49=correctAction)?($p['bool']($and50=correctHandler)?($p['bool']($and51=hasAccess)?($p['bool']($and52=!$p['bool'](isDisabled))?isAvailable:$and52):$and51):$and50):$and49);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Span'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListPreviewAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_2, $p['getattr']($m['ListPreviewAction'], 'isSuitableFor'), $m['ListPreviewAction']);
		$m['ListPreviewInlineAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '16c6d30c1cb4f6fda4ca5db8fbfa18aa';
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
					if (self.prototype['__md5__'] !== '16c6d30c1cb4f6fda4ca5db8fbfa18aa') {
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

				$pyjs_kwargs_call($p['$$super']($m['ListPreviewInlineAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Preview')]);
				self['__setitem__']('class', 'icon preview');
				self['__setitem__']('disabled', true);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', null) : $p['setattr'](self, 'urls', null); 
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
					if (self.prototype['__md5__'] !== '16c6d30c1cb4f6fda4ca5db8fbfa18aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['ListPreviewInlineAction'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '16c6d30c1cb4f6fda4ca5db8fbfa18aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['ListPreviewInlineAction'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '16c6d30c1cb4f6fda4ca5db8fbfa18aa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and55,module,preview,$and54;
				if ($p['bool']($p['getattr'](self['parent']()['parent'](), 'isSelector'))) {
					return null;
				}
				module = $p['getattr'](self['parent']()['parent'](), 'module');
				if ($p['bool']($m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('disableInternalPreview', !$p['bool']($m['conf']['__getitem__']('internalPreview'))))) {
					return null;
				}
				if ($p['bool'](($p['bool']($and54=self['parent']()['parent']()['sideBar']['getWidget']())?!$p['bool']($p['isinstance'](self['parent']()['parent']()['sideBar']['getWidget'](), $m['InternalPreview'])):$and54))) {
					return null;
				}
				if ($p['bool']($p['op_eq']($p['len'](selection), $constant_int_1))) {
					preview = $m['InternalPreview']($p['getattr'](self['parent']()['parent'](), 'module'), $p['getattr'](self['parent']()['parent'](), '_structure'), selection['__getitem__']($constant_int_0));
					self['parent']()['parent']()['sideBar']['setWidget'](preview);
				}
				else {
					if ($p['bool']($p['isinstance'](self['parent']()['parent']()['sideBar']['getWidget'](), $m['InternalPreview']))) {
						self['parent']()['parent']()['sideBar']['setWidget'](null);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionChanged'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and65,$and64,$and63,$and62,$and61,$and60,correctHandler,$add20,isDisabled,correctAction,$add19,$and58,hasAccess,$and56,$and57,$and59,$or33,$or37,$or36,$or35,$or34,$or38;
				if ($p['bool'](($p['bool']($or33=$p['op_is'](module, null))?$or33:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'preview');
				correctHandler = ($p['bool']($or35=$p['op_eq'](handler, 'list'))?$or35:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and56=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or37=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or37:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add19=module,$add20='-view'))):$and56);
				isDisabled = ($p['bool']($and58=!$p['op_is'](module, null))?($p['bool']($and59=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and60=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and60):$and59):$and58);
				return ($p['bool']($and62=correctAction)?($p['bool']($and63=correctHandler)?($p['bool']($and64=hasAccess)?!$p['bool'](isDisabled):$and64):$and63):$and62);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListPreviewInlineAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ListPreviewInlineAction'], 'isSuitableFor'), $m['ListPreviewInlineAction']);
		$m['CloseAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'cc67af8fd03f1039d77ed1bc28d2198f';
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
					if (self.prototype['__md5__'] !== 'cc67af8fd03f1039d77ed1bc28d2198f') {
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

				$pyjs_kwargs_call($p['$$super']($m['CloseAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Close')]);
				self['__setitem__']('class', 'icon close');
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
					if (self.prototype['__md5__'] !== 'cc67af8fd03f1039d77ed1bc28d2198f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$m['conf']['__getitem__']('mainWindow')['removeWidget'](self['parent']()['parent']());
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'close');
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CloseAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['CloseAction'], 'isSuitableFor'), $m['CloseAction']);
		$m['ActivateSelectionAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '9d894be42a0be5a796d47c3af40c53b1';
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
					if (self.prototype['__md5__'] !== '9d894be42a0be5a796d47c3af40c53b1') {
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

				$pyjs_kwargs_call($p['$$super']($m['ActivateSelectionAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Select')]);
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
					if (self.prototype['__md5__'] !== '9d894be42a0be5a796d47c3af40c53b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['parent']()['parent']()['activateCurrentSelection']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'select');
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ActivateSelectionAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ActivateSelectionAction'], 'isSuitableFor'), $m['ActivateSelectionAction']);
		$m['SelectFieldsPopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'e1609f4543440255ce2cc298e5d18cce';
			$method = $pyjs__bind_method2('__init__', function(listWdg) {
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
					listWdg = arguments[1];
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof listWdg != 'undefined') {
						if (listWdg !== null && typeof listWdg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = listWdg;
							listWdg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $iter9_iter,lbl,$iter9_nextval,$iter9_idx,chkBox,$iter9_array,ul,key,li,div,$iter9_type,bone;
				if ($p['bool'](!$p['bool']($p['getattr'](listWdg, '_structure')))) {
					return null;
				}
				$pyjs_kwargs_call($p['$$super']($m['SelectFieldsPopup'], self), '__init__', args, kwargs, [{'title':$m['translate']('Select fields')}]);
				self['__getitem__']('class')['append']('selectfields');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('listWdg', listWdg) : $p['setattr'](self, 'listWdg', listWdg); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('checkboxes', $p['list']([])) : $p['setattr'](self, 'checkboxes', $p['list']([])); 
				ul = $m['html5']['Ul']();
				self['appendChild'](ul);
				$iter9_iter = $p['getattr']($p['getattr'](self, 'listWdg'), '_structure');
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
					key = $tupleassign3[0];
					bone = $tupleassign3[1];
					li = $m['html5']['Li']();
					ul['appendChild'](li);
					chkBox = $m['html5']['Input']();
					chkBox['__setitem__']('type', 'checkbox');
					chkBox['__setitem__']('value', key);
					li['appendChild'](chkBox);
					self['checkboxes']['append'](chkBox);
					if ($p['bool'](self['listWdg']['getFields']()['__contains__'](key))) {
						chkBox['__setitem__']('checked', true);
					}
					lbl = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':chkBox}, bone['__getitem__']('descr')]);
					li['appendChild'](lbl);
				}
				div = $m['html5']['Div']();
				div['__getitem__']('class')['append']('selectiontools');
				self['appendChild'](div);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectAllBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSelectAll')}, $m['translate']('Select all')])) : $p['setattr'](self, 'selectAllBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSelectAll')}, $m['translate']('Select all')])); 
				$p['getattr'](self, 'selectAllBtn')['__getitem__']('class')['append']('icon');
				$p['getattr'](self, 'selectAllBtn')['__getitem__']('class')['append']('selectall');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('unselectAllBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doUnselectAll')}, $m['translate']('Unselect all')])) : $p['setattr'](self, 'unselectAllBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doUnselectAll')}, $m['translate']('Unselect all')])); 
				$p['getattr'](self, 'unselectAllBtn')['__getitem__']('class')['append']('icon');
				$p['getattr'](self, 'unselectAllBtn')['__getitem__']('class')['append']('unselectall');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('invertSelectionBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doInvertSelection')}, $m['translate']('Invert selection')])) : $p['setattr'](self, 'invertSelectionBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doInvertSelection')}, $m['translate']('Invert selection')])); 
				$p['getattr'](self, 'invertSelectionBtn')['__getitem__']('class')['append']('icon');
				$p['getattr'](self, 'invertSelectionBtn')['__getitem__']('class')['append']('selectinvert');
				div['appendChild']($p['getattr'](self, 'selectAllBtn'));
				div['appendChild']($p['getattr'](self, 'unselectAllBtn'));
				div['appendChild']($p['getattr'](self, 'invertSelectionBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cancelBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doCancel')}, $m['translate']('Cancel')])) : $p['setattr'](self, 'cancelBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doCancel')}, $m['translate']('Cancel')])); 
				$p['getattr'](self, 'cancelBtn')['__getitem__']('class')['append']('btn_no');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('applyBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doApply')}, $m['translate']('Apply')])) : $p['setattr'](self, 'applyBtn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doApply')}, $m['translate']('Apply')])); 
				$p['getattr'](self, 'applyBtn')['__getitem__']('class')['append']('btn_yes');
				self['appendChild']($p['getattr'](self, 'applyBtn'));
				self['appendChild']($p['getattr'](self, 'cancelBtn'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['listWdg']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('doApply', function() {
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
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
				var c,$iter10_nextval,res,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
				$p['getattr'](self, 'applyBtn')['__getitem__']('class')['append']('is_loading');
				$p['getattr'](self, 'applyBtn')['__setitem__']('disabled', true);
				res = $p['list']([]);
				$iter10_iter = $p['getattr'](self, 'checkboxes');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					c = $iter10_nextval['$nextval'];
					if ($p['bool'](c['__getitem__']('checked'))) {
						res['append'](c['__getitem__']('value'));
					}
				}
				self['listWdg']['setFields'](res);
				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doApply'] = $method;
			$method = $pyjs__bind_method2('doCancel', function() {
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
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

				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doCancel'] = $method;
			$method = $pyjs__bind_method2('doSelectAll', function() {
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
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
				var $iter11_type,$iter11_iter,$iter11_array,$iter11_nextval,$iter11_idx,cb;
				$iter11_iter = $p['getattr'](self, 'checkboxes');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					cb = $iter11_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](cb['__getitem__']('checked'), false))) {
						cb['__setitem__']('checked', true);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doSelectAll'] = $method;
			$method = $pyjs__bind_method2('doUnselectAll', function() {
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
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
				var cb,$iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,$iter12_idx;
				$iter12_iter = $p['getattr'](self, 'checkboxes');
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					cb = $iter12_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](cb['__getitem__']('checked'), true))) {
						cb['__setitem__']('checked', false);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doUnselectAll'] = $method;
			$method = $pyjs__bind_method2('doInvertSelection', function() {
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
					if (self.prototype['__md5__'] !== 'e1609f4543440255ce2cc298e5d18cce') {
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
				var $iter13_nextval,$iter13_iter,cb,$iter13_array,$iter13_idx,$iter13_type;
				$iter13_iter = $p['getattr'](self, 'checkboxes');
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					cb = $iter13_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](cb['__getitem__']('checked'), false))) {
						cb['__setitem__']('checked', true);
					}
					else {
						cb['__setitem__']('checked', false);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doInvertSelection'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectFieldsPopup', $p['tuple']($bases), $data);
		})();
		$m['SelectFieldsAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '3f5b9e00ba8f074aa078a081100b569d';
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
					if (self.prototype['__md5__'] !== '3f5b9e00ba8f074aa078a081100b569d') {
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
				var $assign1;
				$pyjs_kwargs_call($p['$$super']($m['SelectFieldsAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Select fields')]);
				self['__setitem__']('class', 'icon selectfields');
				$assign1 = true;
				self['__setitem__']('disabled', $assign1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign1) : $p['setattr'](self, 'isDisabled', $assign1); 
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
					if (self.prototype['__md5__'] !== '3f5b9e00ba8f074aa078a081100b569d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$m['SelectFieldsPopup'](self['parent']()['parent']());
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '3f5b9e00ba8f074aa078a081100b569d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectFieldsAction'], self)['onAttach']();
				self['parent']()['parent']()['tableChangedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== '3f5b9e00ba8f074aa078a081100b569d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['tableChangedEvent']['unregister'](self);
				$p['$$super']($m['SelectFieldsAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					count = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3f5b9e00ba8f074aa078a081100b569d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign3,$assign2;
				if ($p['bool'](($p['cmp'](count, $constant_int_0) == 1))) {
					$assign2 = false;
					self['__setitem__']('disabled', $assign2);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign2) : $p['setattr'](self, 'isDisabled', $assign2); 
				}
				else if ($p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')))) {
					$assign3 = true;
					self['__setitem__']('disabled', $assign3);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign3) : $p['setattr'](self, 'isDisabled', $assign3); 
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['count']]);
			$cls_definition['onTableChanged'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'selectfields');
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectFieldsAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['SelectFieldsAction'], 'isSuitableFor'), $m['SelectFieldsAction']);
		$m['ReloadAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '7d46ab4c6caad236bbf54403bf3efa59';
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
					if (self.prototype['__md5__'] !== '7d46ab4c6caad236bbf54403bf3efa59') {
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
				var correctHandler,correctAction,$and67,$and66,$or39,$or40;
				correctAction = $p['op_eq'](actionName, 'reload');
				correctHandler = ($p['bool']($or39=$p['op_eq'](handler, 'list'))?$or39:handler['startswith']('list.'));
				return ($p['bool']($and66=correctAction)?correctHandler:$and66);
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
					if (self.prototype['__md5__'] !== '7d46ab4c6caad236bbf54403bf3efa59') {
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
					if (self.prototype['__md5__'] !== '7d46ab4c6caad236bbf54403bf3efa59') {
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
		$m['ListSelectFilterAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '7d680e4f17bbc4c78ce3fcef452cd657';
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
					if (self.prototype['__md5__'] !== '7d680e4f17bbc4c78ce3fcef452cd657') {
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

				$pyjs_kwargs_call($p['$$super']($m['ListSelectFilterAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Select Filter')]);
				self['__setitem__']('class', 'icon selectfilter');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', null) : $p['setattr'](self, 'urls', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterSelector', null) : $p['setattr'](self, 'filterSelector', null); 
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
					if (self.prototype['__md5__'] !== '7d680e4f17bbc4c78ce3fcef452cd657') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and70,modulConfig,$or42,$or41,modul,$and69,$and68;
				$p['$$super']($m['ListSelectFilterAction'], self)['onAttach']();
				modul = $p['getattr'](self['parent']()['parent'](), 'module');
				if ($p['bool']($p['getattr'](self['parent']()['parent'](), 'filterID'))) {
					self['__setitem__']('disabled', true);
				}
				if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__'](modul))) {
					modulConfig = $m['conf']['__getitem__']('modules')['__getitem__'](modul);
					if ($p['bool'](($p['bool']($and68=modulConfig['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and69=modulConfig['__getitem__']('disabledFunctions'))?modulConfig['__getitem__']('disabledFunctions')['__contains__']('fulltext-search'):$and69):$and68))) {
						if ($p['bool'](($p['bool']($or41=!$p['bool'](modulConfig['keys']()['__contains__']('views')))?$or41:!$p['bool'](modulConfig['__getitem__']('views'))))) {
							self['__setitem__']('disabled', true);
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
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
					if (self.prototype['__md5__'] !== '7d680e4f17bbc4c78ce3fcef452cd657') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				if ($p['bool']($p['isinstance'](self['parent']()['parent']()['sideBar']['getWidget'](), $m['FilterSelector']))) {
					self['parent']()['parent']()['sideBar']['setWidget'](null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterSelector', null) : $p['setattr'](self, 'filterSelector', null); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterSelector', $m['FilterSelector']($p['getattr'](self['parent']()['parent'](), 'module'))) : $p['setattr'](self, 'filterSelector', $m['FilterSelector']($p['getattr'](self['parent']()['parent'](), 'module'))); 
					self['parent']()['parent']()['sideBar']['setWidget']($p['getattr'](self, 'filterSelector'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and79,correctHandler,$add21,isDisabled,$add22,$or48,$or43,$or46,$or47,$or44,$or45,correctAction,$and80,$and78,hasAccess,$and71,$and72,$and73,$and74,$and75,$and76,$and77;
				if ($p['bool'](($p['bool']($or43=$p['op_is'](module, null))?$or43:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'selectfilter');
				correctHandler = ($p['bool']($or45=$p['op_eq'](handler, 'list'))?$or45:handler['startswith']('list.'));
				hasAccess = ($p['bool']($and71=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or47=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or47:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add21=module,$add22='-view'))):$and71);
				isDisabled = ($p['bool']($and73=!$p['op_is'](module, null))?($p['bool']($and74=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and75=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and75):$and74):$and73);
				return ($p['bool']($and77=correctAction)?($p['bool']($and78=correctHandler)?($p['bool']($and79=hasAccess)?!$p['bool'](isDisabled):$and79):$and78):$and77);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListSelectFilterAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ListSelectFilterAction'], 'isSuitableFor'), $m['ListSelectFilterAction']);
		$m['RecurrentDateAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '88fc87f56e8506b81af2ccc00a798cd4';
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
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

				$pyjs_kwargs_call($p['$$super']($m['RecurrentDateAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Recurrent Events')]);
				self['__setitem__']('class', 'icon createrecurrent_small');
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RecurrentDateAction'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['selectionChangedEvent']['unregister'](self);
				$p['$$super']($m['RecurrentDateAction'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
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
				var correctHandler,isDisabled,$add24,$and89,$and88,$or49,$and81,$and83,$and82,$and85,$and84,$and87,$and86,correctAction,$and90,hasAccess,$or54,$or51,$or50,$or53,$or52,$add23;
				if ($p['bool'](($p['bool']($or49=$p['op_is'](module, null))?$or49:!$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					return false;
				}
				correctAction = $p['op_eq'](actionName, 'repeatdate');
				correctHandler = ($p['bool']($or51=$p['op_eq'](handler, 'list.calendar'))?$or51:handler['startswith']('list.calendar.'));
				hasAccess = ($p['bool']($and81=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or53=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or53:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add23=module,$add24='-edit'))):$and81);
				isDisabled = ($p['bool']($and83=!$p['op_is'](module, null))?($p['bool']($and84=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and85=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and85):$and84):$and83);
				return ($p['bool']($and87=correctAction)?($p['bool']($and88=correctHandler)?($p['bool']($and89=hasAccess)?!$p['bool'](isDisabled):$and89):$and88):$and87);
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $iter14_array,selection,$iter14_type,s,$iter14_iter,$iter14_idx,$iter14_nextval;
				selection = self['parent']()['parent']()['getCurrentSelection']();
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$iter14_iter = selection;
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					s = $iter14_nextval['$nextval'];
					self['openEditor'](s['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('openEditor', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self['parent']()['parent'](), 'module')), 'apptype_list', 'action_edit'])}, $m['translate']('Recurrent Events')]);
				$m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
				edwg = $pyjs_kwargs_call(null, $m['RepeatDatePopup'], null, null, [{'key':key}, $p['getattr'](self['parent']()['parent'](), 'module')]);
				pane['addWidget'](edwg);
				pane['focus']();
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['openEditor'] = $method;
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
					if (self.prototype['__md5__'] !== '88fc87f56e8506b81af2ccc00a798cd4') {
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
			return $p['_create_class']('RecurrentDateAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['RecurrentDateAction'], 'isSuitableFor'), $m['RecurrentDateAction']);
		$m['CreateRecurrentAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '9d4928657909018ee9eedc1eac66ae7e';
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
					if (self.prototype['__md5__'] !== '9d4928657909018ee9eedc1eac66ae7e') {
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

				$pyjs_kwargs_call($p['$$super']($m['CreateRecurrentAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Save-Close')]);
				self['__setitem__']('class', 'icon save close');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'create.recurrent');
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
					if (self.prototype['__md5__'] !== '9d4928657909018ee9eedc1eac66ae7e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['__getitem__']('class')['append']('is_loading');
				$pyjs_kwargs_call(self['parent']()['parent'](), 'doSave', null, null, [{'closeOnSuccess':true}]);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CreateRecurrentAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['CreateRecurrentAction'], 'isSuitableFor'), $m['CreateRecurrentAction']);
		$m['ExportCsvAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '6c156e2ec1c02f87b6315354b195294f';
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
					if (self.prototype['__md5__'] !== '6c156e2ec1c02f87b6315354b195294f') {
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

				$pyjs_kwargs_call($p['$$super']($m['ExportCsvAction'], self), '__init__', args, kwargs, [{}, $m['translate']('CSV Export')]);
				self['__setitem__']('class', 'icon download');
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
					if (self.prototype['__md5__'] !== '6c156e2ec1c02f87b6315354b195294f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$m['ExportCsvStarter'](self['parent']()['parent']());
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and92,$and91,$or55,$or56;
				return ($p['bool']($and91=$p['op_eq'](actionName, 'exportcsv'))?($p['bool']($or55=$p['op_eq'](handler, 'list'))?$or55:handler['startswith']('list.')):$and91);
			}
	, 3, [null,null,['module'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExportCsvAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['ExportCsvAction'], 'isSuitableFor'), $m['ExportCsvAction']);
		$m['SelectAllAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '05244cf9ee7f37f667a6c504779479e9';
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
					if (self.prototype['__md5__'] !== '05244cf9ee7f37f667a6c504779479e9') {
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
				var $assign4;
				$pyjs_kwargs_call($p['$$super']($m['SelectAllAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Select all')]);
				self['__setitem__']('class', 'icon selectall');
				$assign4 = true;
				self['__setitem__']('disabled', $assign4);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign4) : $p['setattr'](self, 'isDisabled', $assign4); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $or58,$and94,$and93,$or57;
				return ($p['bool']($and93=$p['op_eq'](actionName, 'selectall'))?($p['bool']($or57=$p['op_eq'](handler, 'list'))?$or57:handler['startswith']('list.')):$and93);
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
					if (self.prototype['__md5__'] !== '05244cf9ee7f37f667a6c504779479e9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var cnt;
				cnt = self['parent']()['parent']()['table']['table']['selectAll']();
				$m['conf']['__getitem__']('mainWindow')['log']('info', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':cnt}, '{items} items had been selected']));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '05244cf9ee7f37f667a6c504779479e9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectAllAction'], self)['onAttach']();
				self['parent']()['parent']()['tableChangedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== '05244cf9ee7f37f667a6c504779479e9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['tableChangedEvent']['unregister'](self);
				$p['$$super']($m['SelectAllAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					count = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '05244cf9ee7f37f667a6c504779479e9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign6,$assign5;
				if ($p['bool'](($p['cmp'](count, $constant_int_0) == 1))) {
					$assign5 = false;
					self['__setitem__']('disabled', $assign5);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign5) : $p['setattr'](self, 'isDisabled', $assign5); 
				}
				else if ($p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')))) {
					$assign6 = true;
					self['__setitem__']('disabled', $assign6);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign6) : $p['setattr'](self, 'isDisabled', $assign6); 
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['count']]);
			$cls_definition['onTableChanged'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectAllAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['SelectAllAction'], 'isSuitableFor'), $m['SelectAllAction']);
		$m['UnSelectAllAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = 'b78a59b028b0747434ea7f16ea563fec';
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
					if (self.prototype['__md5__'] !== 'b78a59b028b0747434ea7f16ea563fec') {
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
				var $assign7;
				$pyjs_kwargs_call($p['$$super']($m['UnSelectAllAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Unselect all')]);
				self['__setitem__']('class', 'icon unselectall');
				$assign7 = true;
				self['__setitem__']('disabled', $assign7);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign7) : $p['setattr'](self, 'isDisabled', $assign7); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $or60,$or59,$and96,$and95;
				return ($p['bool']($and95=$p['op_eq'](actionName, 'unselectall'))?($p['bool']($or59=$p['op_eq'](handler, 'list'))?$or59:handler['startswith']('list.')):$and95);
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
					if (self.prototype['__md5__'] !== 'b78a59b028b0747434ea7f16ea563fec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var cnt;
				cnt = self['parent']()['parent']()['table']['table']['unSelectAll']();
				$m['conf']['__getitem__']('mainWindow')['log']('info', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':cnt}, '{items} items had been unselected']));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== 'b78a59b028b0747434ea7f16ea563fec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['UnSelectAllAction'], self)['onAttach']();
				self['parent']()['parent']()['tableChangedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== 'b78a59b028b0747434ea7f16ea563fec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['tableChangedEvent']['unregister'](self);
				$p['$$super']($m['UnSelectAllAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					count = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b78a59b028b0747434ea7f16ea563fec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign9,$assign8;
				if ($p['bool'](($p['cmp'](count, $constant_int_0) == 1))) {
					$assign8 = false;
					self['__setitem__']('disabled', $assign8);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign8) : $p['setattr'](self, 'isDisabled', $assign8); 
				}
				else if ($p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')))) {
					$assign9 = true;
					self['__setitem__']('disabled', $assign9);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign9) : $p['setattr'](self, 'isDisabled', $assign9); 
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['count']]);
			$cls_definition['onTableChanged'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UnSelectAllAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['UnSelectAllAction'], 'isSuitableFor'), $m['UnSelectAllAction']);
		$m['SelectInvertAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'actions.list';
			$cls_definition['__md5__'] = '47e5a419971eedb7fbc54bee8b1ece15';
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
					if (self.prototype['__md5__'] !== '47e5a419971eedb7fbc54bee8b1ece15') {
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
				var $assign10;
				$pyjs_kwargs_call($p['$$super']($m['SelectInvertAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Invert selection')]);
				self['__setitem__']('class', 'icon selectinvert');
				$assign10 = true;
				self['__setitem__']('disabled', $assign10);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign10) : $p['setattr'](self, 'isDisabled', $assign10); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $or62,$or61,$and98,$and97;
				return ($p['bool']($and97=$p['op_eq'](actionName, 'selectinvert'))?($p['bool']($or61=$p['op_eq'](handler, 'list'))?$or61:handler['startswith']('list.')):$and97);
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
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
					if (self.prototype['__md5__'] !== '47e5a419971eedb7fbc54bee8b1ece15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var added,$and100,$and99,removed;
				var $tupleassign4 = $p['__ass_unpack'](self['parent']()['parent']()['table']['table']['invertSelection'](), 2, null);
				added = $tupleassign4[0];
				removed = $tupleassign4[1];
				if ($p['bool'](($p['bool']($and99=removed)?added:$and99))) {
					$m['conf']['__getitem__']('mainWindow')['log']('info', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'added':added, 'removed':removed}, '{added} items selected, {removed} items deselected']));
				}
				else if ($p['bool']($p['op_eq'](removed, $constant_int_0))) {
					$m['conf']['__getitem__']('mainWindow')['log']('info', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':added}, '{items} items had been selected']));
				}
				else if ($p['bool']($p['op_eq'](added, $constant_int_0))) {
					$m['conf']['__getitem__']('mainWindow')['log']('info', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':removed}, '{items} items had been unselected']));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== '47e5a419971eedb7fbc54bee8b1ece15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectInvertAction'], self)['onAttach']();
				self['parent']()['parent']()['tableChangedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== '47e5a419971eedb7fbc54bee8b1ece15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['tableChangedEvent']['unregister'](self);
				$p['$$super']($m['SelectInvertAction'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					count = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '47e5a419971eedb7fbc54bee8b1ece15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign11,$assign12;
				if ($p['bool'](($p['cmp'](count, $constant_int_0) == 1))) {
					$assign11 = false;
					self['__setitem__']('disabled', $assign11);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign11) : $p['setattr'](self, 'isDisabled', $assign11); 
				}
				else if ($p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')))) {
					$assign12 = true;
					self['__setitem__']('disabled', $assign12);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDisabled', $assign12) : $p['setattr'](self, 'isDisabled', $assign12); 
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['count']]);
			$cls_definition['onTableChanged'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectInvertAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['SelectInvertAction'], 'isSuitableFor'), $m['SelectInvertAction']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end actions.list */


/* end module: actions.list */


/*
PYJS_DEPS: ['html5', 'utils', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.repeatdate.RepeatDatePopup', 'widgets.repeatdate', 'widgets.csvexport.ExportCsvStarter', 'widgets.csvexport', 'widgets.table.DataTable', 'widgets.table', 'widgets.preview.Preview', 'widgets.preview', 'sidebarwidgets.internalpreview.InternalPreview', 'sidebarwidgets', 'sidebarwidgets.internalpreview', 'sidebarwidgets.filterselector.FilterSelector', 'sidebarwidgets.filterselector', 'i18n.translate', 'i18n']
*/
