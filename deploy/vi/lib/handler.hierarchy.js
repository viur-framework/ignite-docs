/* start module: handler.hierarchy */
$pyjs['loaded_modules']['handler.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['handler.hierarchy'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.hierarchy'];
	$m['__repr__'] = function() { return '<module: handler.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.hierarchy';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['handler']['hierarchy'] = $pyjs['loaded_modules']['handler.hierarchy'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', 'handler', null, false);
		$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', 'handler', null, false);
		$m['HierarchyWidget'] = $p['___import___']('widgets.HierarchyWidget', 'handler', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'handler', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'handler', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'handler', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'handler', null, false);
		$m['HierarchyHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'handler.hierarchy';
			$cls_definition['__md5__'] = 'a80599001c30be6edeff5f69640351e5';
			$method = $pyjs__bind_method2('__init__', function(moduleName, moduleInfo) {
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
					moduleName = arguments[1];
					moduleInfo = arguments[2];
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
					if (self.prototype['__md5__'] !== 'a80599001c30be6edeff5f69640351e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof moduleInfo != 'undefined') {
						if (moduleInfo !== null && typeof moduleInfo['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleInfo;
							moduleInfo = arguments[3];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var $and1,$and2,icon;
				icon = 'icons/modules/hierarchy.svg';
				if ($p['bool'](moduleInfo['keys']()['__contains__']('icon'))) {
					icon = moduleInfo['__getitem__']('icon');
				}
				$p['$$super']($m['HierarchyHandler'], self)['__init__'](moduleInfo['__getitem__']('visibleName'), icon);
				if ($p['bool'](($p['bool']($and1=moduleInfo['keys']()['__contains__']('hideInMainBar'))?moduleInfo['__getitem__']('hideInMainBar'):$and1))) {
					self['__getitem__']('style')['__setitem__']('display', 'none');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', moduleName) : $p['setattr'](self, 'moduleName', moduleName); 
				$m['initialHashHandler']['insert']($constant_int_1, $p['getattr'](self, 'canHandleInitialHash'), $p['getattr'](self, 'handleInitialHash'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['moduleInfo']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('canHandleInitialHash', function(pathList, params) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pathList = arguments[1];
					params = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a80599001c30be6edeff5f69640351e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$and3,$and4;
				if ($p['bool'](($p['cmp']($p['len'](pathList), $constant_int_1) == 1))) {
					if ($p['bool']($p['op_eq'](pathList['__getitem__']($constant_int_0), $p['getattr'](self, 'moduleName')))) {
						if ($p['bool'](($p['bool']($or1=$p['list'](['list'])['__contains__'](pathList['__getitem__']($constant_int_1)))?$or1:($p['bool']($and3=$p['op_eq'](pathList['__getitem__']($constant_int_1), 'edit'))?($p['cmp']($p['len'](pathList), $constant_int_2) == 1):$and3)))) {
							return true;
						}
					}
				}
				return false;
			}
	, 1, [null,null,['self'],['pathList'],['params']]);
			$cls_definition['canHandleInitialHash'] = $method;
			$method = $pyjs__bind_method2('handleInitialHash', function(pathList, params) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pathList = arguments[1];
					params = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a80599001c30be6edeff5f69640351e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3,edwg,$and6,$and5,pane;
				if (!( self['canHandleInitialHash'](pathList, params) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool']($p['op_eq'](pathList['__getitem__']($constant_int_1), 'list'))) {
					self['addWidget']($m['HierarchyWidget']($p['getattr'](self, 'moduleName')));
					self['focus']();
				}
				else if ($p['bool'](($p['bool']($and5=$p['list'](['edit', 'clone'])['__contains__'](pathList['__getitem__']($constant_int_1)))?($p['cmp']($p['len'](pathList), $constant_int_2) == 1):$and5))) {
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('module_%s', $p['getattr'](self, 'moduleName')), 'apptype_hierarchy', 'action_edit'])}, $m['translate']('Edit')]);
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':pathList['__getitem__']($constant_int_2), 'hashArgs':($p['bool']($or3=params)?$or3:null), 'clone':$p['op_eq'](pathList['__getitem__']($constant_int_1), 'clone')}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appHierarchy')]);
					pane['addWidget'](edwg);
					$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
					pane['focus']();
				}
				return null;
			}
	, 1, [null,null,['self'],['pathList'],['params']]);
			$cls_definition['handleInitialHash'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $or5,$or6;
				return ($p['bool']($or5=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'hierarchy'))?$or5:moduleInfo['__getitem__']('handler')['startswith']('hierarchy.'));
			}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
			$cls_definition['canHandle'] = $method;
			$method = $pyjs__bind_method2('onClick', function() {
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
					if (self.prototype['__md5__'] !== 'a80599001c30be6edeff5f69640351e5') {
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
				var $add2,$add1;
				$m['conf']['__getitem__']('theApp')['setPath']($p['__op_add']($add1=$p['getattr'](self, 'moduleName'),$add2='/list'));
				if ($p['bool'](!$p['bool']($p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'))))) {
					self['addWidget']($m['HierarchyWidget']($p['getattr'](self, 'moduleName')));
				}
				$pyjs_kwargs_call($p['$$super']($m['HierarchyHandler'], self), 'onClick', args, kwargs, [{}]);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['Pane']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HierarchyHandler', $p['tuple']($bases), $data);
		})();
		$m['HandlerClassSelector']['insert']($constant_int_3, $p['getattr']($m['HierarchyHandler'], 'canHandle'), $m['HierarchyHandler']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end handler.hierarchy */


/* end module: handler.hierarchy */


/*
PYJS_DEPS: ['priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'widgets.HierarchyWidget', 'widgets', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.edit.EditWidget', 'widgets.edit', 'i18n.translate', 'i18n']
*/
