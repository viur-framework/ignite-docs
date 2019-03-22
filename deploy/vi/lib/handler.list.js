/* start module: handler.list */
$pyjs['loaded_modules']['handler.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.list']['__was_initialized__']) return $pyjs['loaded_modules']['handler.list'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.list'];
	$m['__repr__'] = function() { return '<module: handler.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.list';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['handler']['list'] = $pyjs['loaded_modules']['handler.list'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'handler', null, false);
		$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', 'handler', null, false);
		$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', 'handler', null, false);
		$m['ListWidget'] = $p['___import___']('widgets.ListWidget', 'handler', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'handler', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'handler', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'handler', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'handler', null, false);
		$m['ListHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'handler.list';
			$cls_definition['__md5__'] = 'eb1ddbc11cadc0e16404a24231059668';
			$method = $pyjs__bind_method2('__init__', function(moduleName, moduleInfo, isView) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					moduleName = arguments[1];
					moduleInfo = arguments[2];
					isView = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof isView != 'undefined') {
						if (isView !== null && typeof isView['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isView;
							isView = arguments[4];
						}
					} else 					if (typeof moduleInfo != 'undefined') {
						if (moduleInfo !== null && typeof moduleInfo['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleInfo;
							moduleInfo = arguments[4];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof isView == 'undefined') isView=arguments['callee']['__args__'][5][1];
				var $or1,$or2,icon;
				icon = 'icons/modules/list.svg';
				if ($p['bool'](moduleInfo['keys']()['__contains__']('icon'))) {
					icon = moduleInfo['__getitem__']('icon');
				}
				$p['$$super']($m['ListHandler'], self)['__init__'](moduleInfo['get']('visibleName', moduleInfo['__getitem__']('name')), icon);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', moduleName) : $p['setattr'](self, 'moduleName', moduleName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleInfo', moduleInfo) : $p['setattr'](self, 'moduleInfo', moduleInfo); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', moduleInfo['get']('mode', 'normal')) : $p['setattr'](self, 'mode', moduleInfo['get']('mode', 'normal')); 
				if (!( $p['list'](['normal', 'hidden', 'group'])['__contains__']($p['getattr'](self, 'mode')) )) {
				   throw $p['AssertionError']();
				 }
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('requestedViews', null) : $p['setattr'](self, 'requestedViews', null); 
				if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](self, 'mode'), 'hidden'))?$or1:moduleInfo['get']('hideInMainBar', false)))) {
					self['hide']();
				}
				else {
					if ($p['bool'](moduleInfo['__contains__']('views'))) {
						self['_buildViewPanes'](moduleInfo['__getitem__']('views'));
					}
				}
				if ($p['bool'](!$p['bool'](isView))) {
					$m['initialHashHandler']['insert']($constant_int_1, $p['getattr'](self, 'canHandleInitialHash'), $p['getattr'](self, 'handleInitialHash'));
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['moduleInfo'],['isView', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_buildViewPanes', function(views, register) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					views = arguments[1];
					register = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof register == 'undefined') register=arguments['callee']['__args__'][4][1];
				var $iter3_type,$iter1_iter,pane,$iter2_type,$iter3_idx,$iter2_iter,$iter3_iter,$iter1_array,$iter3_array,$iter1_idx,$iter1_nextval,$and1,$and2,$add14,$add15,$iter2_idx,$add10,$add11,$add12,$add13,$iter2_nextval,$iter1_type,$add16,inherit,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$iter3_nextval,$iter2_array,view;
				$iter1_iter = views;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					view = $iter1_nextval['$nextval'];
					$iter2_iter = $p['list'](['+name', '+columns', '+filter', '+context', '+actions']);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						inherit = $iter2_nextval['$nextval'];
						if ($p['bool'](view['__contains__'](inherit))) {
							inherit = $p['__getslice'](inherit, $constant_int_1, null);
							if ($p['bool']($p['getattr'](self, 'moduleInfo')['__contains__'](inherit))) {
								if ($p['bool']($p['isinstance']($p['getattr'](self, 'moduleInfo')['__getitem__'](inherit), $p['list']))) {
									if (!( $p['isinstance'](view['__getitem__']($p['__op_add']($add1='+',$add2=inherit)), $p['list']) )) {
									   throw $p['AssertionError']();
									 }
									if ($p['bool'](!view['__contains__'](inherit))) {
										view['__setitem__'](inherit, $p['__getslice']($p['getattr'](self, 'moduleInfo')['__getitem__'](inherit), 0, null));
									}
									view['__getitem__'](inherit)['extend'](view['__getitem__']($p['__op_add']($add3='+',$add4=inherit)));
								}
								else if ($p['bool']($p['isinstance']($p['getattr'](self, 'moduleInfo')['__getitem__'](inherit), $p['dict']))) {
									if (!( $p['isinstance'](view['__getitem__']($p['__op_add']($add5='+',$add6=inherit)), $p['dict']) )) {
									   throw $p['AssertionError']();
									 }
									if ($p['bool'](!view['__contains__'](inherit))) {
										view['__setitem__'](inherit, $p['getattr'](self, 'moduleInfo')['__getitem__'](inherit)['copy']());
									}
									view['__getitem__'](inherit)['update'](view['__getitem__']($p['__op_add']($add7='+',$add8=inherit)));
								}
								else {
									view['__setitem__'](inherit, $p['__op_add']($add11=$p['getattr'](self, 'moduleInfo')['__getitem__'](inherit),$add12=view['__getitem__']($p['__op_add']($add9='+',$add10=inherit))));
								}
							}
							else {
								view['__setitem__'](inherit, view['__getitem__']($p['__op_add']($add13='+',$add14=inherit)));
							}
							view['__delitem__']($p['__op_add']($add15='+',$add16=inherit));
						}
					}
					$iter3_iter = $p['list'](['icon', 'columns', 'filter', 'context']);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						inherit = $iter3_nextval['$nextval'];
						if ($p['bool'](($p['bool']($and1=!view['__contains__'](inherit))?$p['getattr'](self, 'moduleInfo')['__contains__'](inherit):$and1))) {
							view['__setitem__'](inherit, $p['getattr'](self, 'moduleInfo')['__getitem__'](inherit));
						}
					}
					pane = $pyjs_kwargs_call(null, $m['ListHandler'], null, null, [{'isView':true}, $p['getattr'](self, 'moduleName'), view]);
					if ($p['bool'](!$p['bool'](register))) {
						self['addChildPane'](pane);
					}
					else {
						$m['conf']['__getitem__']('mainWindow')['addPane'](pane, self);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['views'],['register', false]]);
			$cls_definition['_buildViewPanes'] = $method;
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
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3,$and3,$and4;
				if ($p['bool'](($p['cmp']($p['len'](pathList), $constant_int_1) == 1))) {
					if ($p['bool']($p['op_eq'](pathList['__getitem__']($constant_int_0), $p['getattr'](self, 'moduleName')))) {
						if ($p['bool'](($p['bool']($or3=$p['list'](['add', 'list'])['__contains__'](pathList['__getitem__']($constant_int_1)))?$or3:($p['bool']($and3=$p['list'](['edit', 'clone'])['__contains__'](pathList['__getitem__']($constant_int_1)))?($p['cmp']($p['len'](pathList), $constant_int_2) == 1):$and3)))) {
							return true;
						}
					}
				}
				return false;
			}
	, 1, [null,null,['self'],['pathList'],['params']]);
			$cls_definition['canHandleInitialHash'] = $method;
			$method = $pyjs__bind_method2('_createWidget', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'filter':self['moduleInfo']['get']('filter'), 'columns':self['moduleInfo']['get']('columns'), 'context':self['moduleInfo']['get']('context'), 'filterID':self['moduleInfo']['get']('__id'), 'filterDescr':self['moduleInfo']['get']('visibleName', ''), 'autoload':self['moduleInfo']['get']('autoload', true)}, $p['getattr'](self, 'moduleName')]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_createWidget'] = $method;
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
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,edwg,$or7,$or6,$and6,$and5,pane,$or8;
				if (!( self['canHandleInitialHash'](pathList, params) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool']($p['op_eq'](pathList['__getitem__']($constant_int_1), 'list'))) {
					self['addWidget'](self['_createWidget']());
					self['focus']();
				}
				else if ($p['bool']($p['op_eq'](pathList['__getitem__']($constant_int_1), 'add'))) {
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('module_%s', $p['getattr'](self, 'moduleName')), 'apptype_list', 'action_add'])}, $m['translate']('Add')]);
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'hashArgs':($p['bool']($or5=params)?$or5:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appList')]);
					pane['addWidget'](edwg);
					$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
					pane['focus']();
				}
				else if ($p['bool'](($p['bool']($and5=$p['list'](['edit', 'clone'])['__contains__'](pathList['__getitem__']($constant_int_1)))?($p['cmp']($p['len'](pathList), $constant_int_2) == 1):$and5))) {
					pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('module_%s', $p['getattr'](self, 'moduleName')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':pathList['__getitem__']($constant_int_2), 'hashArgs':($p['bool']($or7=params)?$or7:null), 'clone':$p['op_eq'](pathList['__getitem__']($constant_int_1), 'clone')}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appList')]);
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
				var $or9,$or10;
				return ($p['bool']($or9=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'list'))?$or9:moduleInfo['__getitem__']('handler')['startswith']('list.'));
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
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
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
				var $and8,$and9,$and7,$and10,$add17,$add18;
				$m['conf']['__getitem__']('theApp')['setPath']($p['__op_add']($add17=$p['getattr'](self, 'moduleName'),$add18='/list'));
				if ($p['bool'](($p['bool']($and7=$p['op_eq']($p['getattr'](self, 'mode'), 'normal'))?!$p['bool'](self['widgetsDomElm']['children']()):$and7))) {
					self['addWidget'](self['_createWidget']());
				}
				if ($p['bool'](($p['bool']($and9=$p['op_is']($p['getattr'](self, 'requestedViews'), null))?$p['getattr'](self, 'moduleInfo')['__contains__']('views.request'):$and9))) {
					$m['conf']['__getitem__']('mainWindow')['lock']();
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, '_onRequestViewsAvailable')}, $p['getattr'](self, 'moduleName'), $p['getattr'](self, 'moduleInfo')['__getitem__']('views.request')]);
				}
				$pyjs_kwargs_call($p['$$super']($m['ListHandler'], self), 'onClick', args, kwargs, [{}]);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('_onRequestViewsAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== 'eb1ddbc11cadc0e16404a24231059668') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('requestedViews', $m['NetworkService']['decode'](req)) : $p['setattr'](self, 'requestedViews', $m['NetworkService']['decode'](req)); 
				$pyjs_kwargs_call(self, '_buildViewPanes', null, null, [{'register':true}, $p['getattr'](self, 'requestedViews')]);
				$m['conf']['__getitem__']('mainWindow')['unlock']();
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'isExpanded')))) {
					$p['$$super']($m['ListHandler'], self)['onClick']();
				}
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['_onRequestViewsAvailable'] = $method;
			var $bases = new Array($m['Pane']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListHandler', $p['tuple']($bases), $data);
		})();
		$m['HandlerClassSelector']['insert']($constant_int_1, $p['getattr']($m['ListHandler'], 'canHandle'), $m['ListHandler']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end handler.list */


/* end module: handler.list */


/*
PYJS_DEPS: ['network.NetworkService', 'network', 'priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'widgets.ListWidget', 'widgets', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.edit.EditWidget', 'widgets.edit', 'i18n.translate', 'i18n']
*/
