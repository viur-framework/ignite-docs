/* start module: widgets.list */
$pyjs['loaded_modules']['widgets.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.list']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.list'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.list'];
	$m['__repr__'] = function() { return '<module: widgets.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.list';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['list'] = $pyjs['loaded_modules']['widgets.list'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_401 = new $p['int'](401);
		$m['pyjd'] = $p['___import___']('pyjd', 'widgets');
		$m['json'] = $p['___import___']('json', 'widgets');
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'widgets', null, false);
		$m['moduleHandlerSelector'] = $p['___import___']('priorityqueue.moduleHandlerSelector', 'widgets', null, false);
		$m['DataTable'] = $p['___import___']('widgets.table.DataTable', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['SideBar'] = $p['___import___']('widgets.sidebar.SideBar', 'widgets', null, false);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['CompoundFilter'] = $p['___import___']('sidebarwidgets.filterselector.CompoundFilter', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['ListWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.list';
			$cls_definition['__md5__'] = '4df6880f5a9316061abe95f0893a197e';
			$method = $pyjs__bind_method2('__init__', function(module, filter, columns, isSelector, filterID, filterDescr, batchSize, context, autoload) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,9,arguments['length']-1));

					var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					filter = arguments[2];
					columns = arguments[3];
					isSelector = arguments[4];
					filterID = arguments[5];
					filterDescr = arguments[6];
					batchSize = arguments[7];
					context = arguments[8];
					autoload = arguments[9];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,10,arguments['length']-1));

					var kwargs = arguments['length'] >= 11 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof autoload != 'undefined') {
						if (autoload !== null && typeof autoload['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = autoload;
							autoload = arguments[10];
						}
					} else 					if (typeof context != 'undefined') {
						if (context !== null && typeof context['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = context;
							context = arguments[10];
						}
					} else 					if (typeof batchSize != 'undefined') {
						if (batchSize !== null && typeof batchSize['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = batchSize;
							batchSize = arguments[10];
						}
					} else 					if (typeof filterDescr != 'undefined') {
						if (filterDescr !== null && typeof filterDescr['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = filterDescr;
							filterDescr = arguments[10];
						}
					} else 					if (typeof filterID != 'undefined') {
						if (filterID !== null && typeof filterID['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = filterID;
							filterID = arguments[10];
						}
					} else 					if (typeof isSelector != 'undefined') {
						if (isSelector !== null && typeof isSelector['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isSelector;
							isSelector = arguments[10];
						}
					} else 					if (typeof columns != 'undefined') {
						if (columns !== null && typeof columns['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = columns;
							columns = arguments[10];
						}
					} else 					if (typeof filter != 'undefined') {
						if (filter !== null && typeof filter['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = filter;
							filter = arguments[10];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[10];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[10];
						}
					} else {
					}
				}
				if (typeof filter == 'undefined') filter=arguments['callee']['__args__'][4][1];
				if (typeof columns == 'undefined') columns=arguments['callee']['__args__'][5][1];
				if (typeof isSelector == 'undefined') isSelector=arguments['callee']['__args__'][6][1];
				if (typeof filterID == 'undefined') filterID=arguments['callee']['__args__'][7][1];
				if (typeof filterDescr == 'undefined') filterDescr=arguments['callee']['__args__'][8][1];
				if (typeof batchSize == 'undefined') batchSize=arguments['callee']['__args__'][9][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][10][1];
				if (typeof autoload == 'undefined') autoload=arguments['callee']['__args__'][11][1];
				var $and15,$iter1_iter,$iter1_nextval,$and20,$and19,$iter2_iter,$iter2_type,indexes,tmpData,$iter1_array,checkboxes,$and8,$and9,$or1,$or2,$and1,$and2,$and3,$and4,$and5,$and6,$and12,$and13,$and10,$and11,$and16,$and17,$and14,myView,$and18,$and7,$iter2_nextval,$iter1_type,f,$iter2_idx,$iter1_idx,v,$iter2_array;
				if ($p['bool'](!$p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__'](module)))) {
					$m['conf']['__getitem__']('mainWindow')['log']('error', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'module':module}, "The module '{module}' does not exist."]));
					if (!( $m['conf']['__getitem__']('modules')['keys']()['__contains__'](module) )) {
					   throw $p['AssertionError']();
					 }
				}
				$p['$$super']($m['ListWidget'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_batchSize', ($p['bool']($or1=batchSize)?$or1:$m['conf']['__getitem__']('batchSize'))) : $p['setattr'](self, '_batchSize', ($p['bool']($or1=batchSize)?$or1:$m['conf']['__getitem__']('batchSize'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDetaching', false) : $p['setattr'](self, 'isDetaching', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionBar', $pyjs_kwargs_call(null, $m['ActionBar'], null, null, [{'currentAction':'list'}, module, 'list'])) : $p['setattr'](self, 'actionBar', $pyjs_kwargs_call(null, $m['ActionBar'], null, null, [{'currentAction':'list'}, module, 'list'])); 
				self['appendChild']($p['getattr'](self, 'actionBar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sideBar', $m['SideBar']()) : $p['setattr'](self, 'sideBar', $m['SideBar']()); 
				self['appendChild']($p['getattr'](self, 'sideBar'));
				myView = null;
				if ($p['bool'](filterID)) {
					if ($p['bool'](($p['bool']($and1=$m['conf']['__getitem__']('modules'))?$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module):$and1))) {
						if ($p['bool'](($p['bool']($and3=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('views'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views'):$and3))) {
							$iter1_iter = $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views');
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								v = $iter1_nextval['$nextval'];
								if ($p['bool']($p['op_eq'](v['__getitem__']('__id'), filterID))) {
									myView = v;
									break;
								}
							}
						}
					}
					if ($p['bool'](($p['bool']($and5=myView)?($p['bool']($and6=myView['keys']()['__contains__']('extendedFilters'))?myView['__getitem__']('extendedFilters'):$and6):$and5))) {
						self['appendChild']($pyjs_kwargs_call(null, $m['CompoundFilter'], null, null, [{'embed':true}, myView, module]));
					}
				}
				checkboxes = ($p['bool']($and8=$m['conf']['__getitem__']('modules'))?($p['bool']($and9=$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module))?($p['bool']($and10=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('checkboxSelection'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('checkboxSelection'):$and10):$and9):$and8);
				indexes = ($p['bool']($and12=$m['conf']['__getitem__']('modules'))?($p['bool']($and13=$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module))?($p['bool']($and14=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('indexes'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('indexes'):$and14):$and13):$and12);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', $pyjs_kwargs_call(null, $m['DataTable'], args, kwargs, [{'checkboxes':checkboxes, 'indexes':indexes}])) : $p['setattr'](self, 'table', $pyjs_kwargs_call(null, $m['DataTable'], args, kwargs, [{'checkboxes':checkboxes, 'indexes':indexes}])); 
				self['appendChild']($p['getattr'](self, 'table'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', null) : $p['setattr'](self, '_currentCursor', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_structure', null) : $p['setattr'](self, '_structure', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('columns', $p['list']([])) : $p['setattr'](self, 'columns', $p['list']([])); 
				if ($p['bool'](($p['bool']($and16=isSelector)?($p['bool']($and17=$p['op_is'](filter, null))?$p['op_is'](columns, null):$and17):$and16))) {
					if ($p['bool'](($p['bool']($and19=$m['conf']['__getitem__']('modules'))?$m['conf']['__getitem__']('modules')['keys']()['__contains__'](module):$and19))) {
						tmpData = $m['conf']['__getitem__']('modules')['__getitem__'](module);
						if ($p['bool'](tmpData['keys']()['__contains__']('columns'))) {
							columns = tmpData['__getitem__']('columns');
						}
						if ($p['bool'](tmpData['keys']()['__contains__']('filter'))) {
							filter = tmpData['__getitem__']('filter');
						}
					}
				}
				self['table']['setDataProvider'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filter', ($p['bool']($p['isinstance'](filter, $p['dict']))? (filter['copy']()) : ($p['dict']([])))) : $p['setattr'](self, 'filter', ($p['bool']($p['isinstance'](filter, $p['dict']))? (filter['copy']()) : ($p['dict']([])))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('columns', ($p['bool']($p['isinstance'](columns, $p['list']))? ($p['__getslice'](columns, 0, null)) : ($p['list']([])))) : $p['setattr'](self, 'columns', ($p['bool']($p['isinstance'](columns, $p['list']))? ($p['__getslice'](columns, 0, null)) : ($p['list']([])))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterID', filterID) : $p['setattr'](self, 'filterID', filterID); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterDescr', filterDescr) : $p['setattr'](self, 'filterDescr', filterDescr); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tableHeaderIsValid', false) : $p['setattr'](self, '_tableHeaderIsValid', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isSelector', isSelector) : $p['setattr'](self, 'isSelector', isSelector); 
				$iter2_iter = $p['list'](['selectionChangedEvent', 'selectionActivatedEvent', 'cursorMovedEvent', 'tableChangedEvent', 'getCurrentSelection']);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					f = $iter2_nextval['$nextval'];
					$p['setattr'](self, f, $p['getattr']($p['getattr'](self, 'table'), f));
				}
				self['actionBar']['setActions'](self['getDefaultActions'](myView));
				if ($p['bool'](isSelector)) {
					self['selectionActivatedEvent']['register'](self);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('emptyNotificationDiv', $m['html5']['Div']()) : $p['setattr'](self, 'emptyNotificationDiv', $m['html5']['Div']()); 
				self['emptyNotificationDiv']['appendChild']($m['html5']['TextNode']($m['translate']('Currently no entries')));
				$p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('class')['append']('emptynotification');
				self['appendChild']($p['getattr'](self, 'emptyNotificationDiv'));
				$p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', 'none');
				$p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterDescriptionSpan', $m['html5']['Span']()) : $p['setattr'](self, 'filterDescriptionSpan', $m['html5']['Span']()); 
				self['appendChild']($p['getattr'](self, 'filterDescriptionSpan'));
				$p['getattr'](self, 'filterDescriptionSpan')['__getitem__']('class')['append']('filterdescription');
				self['updateFilterDescription']();
				if ($p['bool'](autoload)) {
					self['reloadData']();
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['filter', null],['columns', null],['isSelector', false],['filterID', null],['filterDescr', null],['batchSize', null],['context', null],['autoload', true]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('updateFilterDescription', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['filterDescriptionSpan']['removeAllChildren']();
				if ($p['bool']($p['getattr'](self, 'filterDescr'))) {
					self['filterDescriptionSpan']['appendChild']($m['html5']['TextNode']($m['html5']['utils']['unescape']($p['getattr'](self, 'filterDescr'))));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['updateFilterDescription'] = $method;
			$method = $pyjs__bind_method2('getDefaultActions', function(view) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					view = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof view == 'undefined') view=arguments['callee']['__args__'][3][1];
				var $or4,$or3,cfg,$and26,$add2,$add3,$add1,$add4,$and23,$and22,$and21,$and24,defaultActions,$and25;
				defaultActions = $p['__op_add']($add3=$p['__op_add']($add1=$p['list'](['add', 'edit', 'clone', 'delete', '|', 'preview', 'selectfields']),$add2=($p['bool']($p['getattr'](self, 'isSelector'))? ($p['list'](['|', 'select', 'close'])) : ($p['list']([])))),$add4=$p['list'](['|', 'reload', 'selectfilter']));
				if ($p['bool'](($p['bool']($and21=view)?view['keys']()['__contains__']('actions'):$and21))) {
					if ($p['bool'](!$p['op_eq'](defaultActions['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))), '|'))) {
						defaultActions['append']('|');
					}
					defaultActions['extend'](($p['bool']($or3=view['__getitem__']('actions'))?$or3:$p['list']([])));
				}
				else if ($p['bool'](($p['bool']($and23=$m['conf']['__getitem__']('modules'))?$m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')):$and23))) {
					cfg = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
					if ($p['bool'](($p['bool']($and25=cfg['keys']()['__contains__']('actions'))?cfg['__getitem__']('actions'):$and25))) {
						if ($p['bool'](!$p['op_eq'](defaultActions['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))), '|'))) {
							defaultActions['append']('|');
						}
						defaultActions['extend'](cfg['__getitem__']('actions'));
					}
				}
				return defaultActions;
			}
	, 1, [null,null,['self'],['view', null]]);
			$cls_definition['getDefaultActions'] = $method;
			$method = $pyjs__bind_method2('showErrorMsg', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
				if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
				var $or5,$or7,$or8,errorDiv,$and28,txt,$and27,$or6;
				$p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
				$p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
				errorDiv = $m['html5']['Div']();
				errorDiv['__getitem__']('class')['append']('error_msg');
				if ($p['bool'](($p['bool']($and27=code)?($p['bool']($or5=$p['op_eq'](code, $constant_int_401))?$or5:$p['op_eq'](code, $constant_int_403)):$and27))) {
					txt = $m['translate']('Access denied!');
				}
				else {
					txt = $m['translate']('An unknown error occurred!');
				}
				errorDiv['__getitem__']('class')['append']($p['sprintf']('error_code_%s', ($p['bool']($or7=code)?$or7:$constant_int_0)));
				errorDiv['appendChild']($m['html5']['TextNode'](txt));
				self['appendChild'](errorDiv);
				return null;
			}
	, 1, [null,null,['self'],['req', null],['code', null]]);
			$cls_definition['showErrorMsg'] = $method;
			$method = $pyjs__bind_method2('onNextBatchNeeded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var filter,$and30,$and29;
				if ($p['bool'](($p['bool']($and29=$p['getattr'](self, '_currentCursor'))?!$p['bool']($p['getattr'](self, 'isDetaching')):$and29))) {
					filter = $p['dict']([]);
					if ($p['bool']($p['getattr'](self, 'context'))) {
						filter['update']($p['getattr'](self, 'context'));
					}
					filter['update']($p['getattr'](self, 'filter'));
					filter['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
					filter['__setitem__']('cursor', $p['getattr'](self, '_currentCursor'));
					self['_currentRequests']['append']($pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCompletion'), 'failureHandler':$p['getattr'](self, 'showErrorMsg'), 'cacheable':true}, $p['getattr'](self, 'module'), 'list', filter]));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', null) : $p['setattr'](self, '_currentCursor', null); 
				}
				else {
					self['table']['setDataProvider'](null);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onNextBatchNeeded'] = $method;
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
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['ListWidget'], self)['onAttach']();
				$m['NetworkService']['registerChangeListener'](self);
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
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isDetaching', true) : $p['setattr'](self, 'isDetaching', true); 
				$p['$$super']($m['ListWidget'], self)['onDetach']();
				$m['NetworkService']['removeChangeListener'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onDataChanged', function(module) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $and32,$and31;
				if ($p['bool'](($p['bool']($and31=module)?!$p['op_eq'](module, $p['getattr'](self, 'module')):$and31))) {
					return null;
				}
				self['reloadData']();
				return null;
			}
	, 1, [null,['kwargs'],['self'],['module']]);
			$cls_definition['onDataChanged'] = $method;
			$method = $pyjs__bind_method2('reloadData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var filter;
				self['table']['clear']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', null) : $p['setattr'](self, '_currentCursor', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				filter = $p['dict']([]);
				if ($p['bool']($p['getattr'](self, 'context'))) {
					filter['update']($p['getattr'](self, 'context'));
				}
				filter['update']($p['getattr'](self, 'filter'));
				filter['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
				self['_currentRequests']['append']($pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCompletion'), 'failureHandler':$p['getattr'](self, 'showErrorMsg'), 'cacheable':true}, $p['getattr'](self, 'module'), 'list', filter]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reloadData'] = $method;
			$method = $pyjs__bind_method2('setFilter', function(filter, filterID, filterDescr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					filterID = arguments[2];
					filterDescr = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof filterID == 'undefined') filterID=arguments['callee']['__args__'][4][1];
				if (typeof filterDescr == 'undefined') filterDescr=arguments['callee']['__args__'][5][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filter', filter) : $p['setattr'](self, 'filter', filter); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterID', filterID) : $p['setattr'](self, 'filterID', filterID); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterDescr', filterDescr) : $p['setattr'](self, 'filterDescr', filterDescr); 
				self['updateFilterDescription']();
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['filter'],['filterID', null],['filterDescr', null]]);
			$cls_definition['setFilter'] = $method;
			$method = $pyjs__bind_method2('setContext', function(context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					context = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['context']]);
			$cls_definition['setContext'] = $method;
			$method = $pyjs__bind_method2('getFilter', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'filter'))) {
					return function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,v,$collcomp1,$iter3_iter,$iter3_array,k;
	$collcomp1 = $p['dict']();
					$iter3_iter = self['filter']['items']();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						$collcomp1['__setitem__'](k, v);
					}

	return $collcomp1;}();
				}
				return $p['dict']([]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFilter'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(req) {
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
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var boneInfo,boneName,data,$iter4_idx,$and34,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,$and33;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)))) {
					return null;
				}
				self['_currentRequests']['remove'](req);
				self['actionBar']['resetLoadingState']();
				data = $m['NetworkService']['decode'](req);
				if ($p['bool']($p['op_is'](data['__getitem__']('structure'), null))) {
					if ($p['bool'](self['table']['getRowCount']())) {
						self['table']['setDataProvider'](null);
					}
					else {
						$p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
						$p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', '');
					}
					return null;
				}
				$p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', '');
				$p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_structure', data['__getitem__']('structure')) : $p['setattr'](self, '_structure', data['__getitem__']('structure')); 
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_tableHeaderIsValid')))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'columns')))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('columns', $p['list']([])) : $p['setattr'](self, 'columns', $p['list']([])); 
						$iter4_iter = data['__getitem__']('structure');
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							var $tupleassign2 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
							boneName = $tupleassign2[0];
							boneInfo = $tupleassign2[1];
							if ($p['bool'](boneInfo['__getitem__']('visible'))) {
								self['columns']['append'](boneName);
							}
						}
					}
					self['setFields']($p['getattr'](self, 'columns'));
				}
				if ($p['bool'](($p['bool']($and33=data['__getitem__']('skellist'))?data['keys']()['__contains__']('cursor'):$and33))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', data['__getitem__']('cursor')) : $p['setattr'](self, '_currentCursor', data['__getitem__']('cursor')); 
					self['table']['setDataProvider'](self);
				}
				else {
					self['table']['setDataProvider'](null);
				}
				self['table']['extend'](data['__getitem__']('skellist'));
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('setFields', function(fields) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fields = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var boneInfo,$iter7_nextval,boneName,tmpDict,$iter7_array,$iter9_nextval,$iter9_idx,$iter9_array,$iter9_iter,boneInfoList,rendersDict,$iter7_idx,$iter7_iter,$iter7_type,$iter9_type,delegateFactory;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_structure')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tableHeaderIsValid', false) : $p['setattr'](self, '_tableHeaderIsValid', false); 
					return null;
				}
				boneInfoList = $p['list']([]);
				tmpDict = function(){
					var $iter5_nextval,$iter5_idx,$collcomp2,$iter5_iter,key,$iter5_array,$iter5_type,bone;
	$collcomp2 = $p['dict']();
				$iter5_iter = $p['getattr'](self, '_structure');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					key = $tupleassign3[0];
					bone = $tupleassign3[1];
					$collcomp2['__setitem__'](key, bone);
				}

	return $collcomp2;}();
				fields = function(){
					var $iter6_idx,$iter6_type,$collcomp3,$iter6_array,x,$iter6_iter,$iter6_nextval;
	$collcomp3 = $p['list']();
				$iter6_iter = fields;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					x = $iter6_nextval['$nextval'];
					if ($p['bool'](tmpDict['keys']()['__contains__'](x))) {
						$collcomp3['append'](x);
					}
				}

	return $collcomp3;}();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('columns', fields) : $p['setattr'](self, 'columns', fields); 
				$iter7_iter = fields;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					boneName = $iter7_nextval['$nextval'];
					boneInfo = tmpDict['__getitem__'](boneName);
					delegateFactory = $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, tmpDict)($p['getattr'](self, 'module'), boneName, tmpDict);
					self['table']['setCellRender'](boneName, delegateFactory);
					boneInfoList['append'](boneInfo);
				}
				if ($p['bool']($m['conf']['__getitem__']('showBoneNames'))) {
					self['table']['setHeader'](fields);
				}
				else {
					self['table']['setHeader'](function(){
						var $iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval,x;
	$collcomp4 = $p['list']();
					$iter8_iter = boneInfoList;
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						x = $iter8_nextval['$nextval'];
						$collcomp4['append'](x['get']('descr', ''));
					}

	return $collcomp4;}());
				}
				self['table']['setShownFields'](fields);
				rendersDict = $p['dict']([]);
				$iter9_iter = fields;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					boneName = $iter9_nextval['$nextval'];
					boneInfo = tmpDict['__getitem__'](boneName);
					delegateFactory = $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, tmpDict)($p['getattr'](self, 'module'), boneName, tmpDict);
					rendersDict['__setitem__'](boneName, delegateFactory);
					boneInfoList['append'](boneInfo);
				}
				self['table']['setCellRenders'](rendersDict);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_tableHeaderIsValid', true) : $p['setattr'](self, '_tableHeaderIsValid', true); 
				return null;
			}
	, 1, [null,null,['self'],['fields']]);
			$cls_definition['setFields'] = $method;
			$method = $pyjs__bind_method2('getFields', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['__getslice']($p['getattr'](self, 'columns'), 0, null);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFields'] = $method;
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
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('activateCurrentSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6880f5a9316061abe95f0893a197e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['table']['activateCurrentSelection']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activateCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $or9,$or10;
				return ($p['bool']($or9=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'list'))?$or9:moduleInfo['__getitem__']('handler')['startswith']('list.'));
			}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
			$cls_definition['canHandle'] = $method;
			$method = $pyjs__bind_method2('render', function(moduleName, adminInfo, context) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var filter,columns;
				filter = adminInfo['get']('filter');
				columns = adminInfo['get']('columns');
				return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'module':moduleName, 'filter':filter, 'columns':columns, 'context':context}]);
			}
	, 3, [null,null,['moduleName'],['adminInfo'],['context']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListWidget', $p['tuple']($bases), $data);
		})();
		$m['moduleHandlerSelector']['insert']($constant_int_1, $p['getattr']($m['ListWidget'], 'canHandle'), $p['getattr']($m['ListWidget'], 'render'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.list */


/* end module: widgets.list */


/*
PYJS_DEPS: ['pyjd', 'json', 'config.conf', 'config', 'network.NetworkService', 'network', 'priorityqueue.viewDelegateSelector', 'priorityqueue', 'priorityqueue.moduleHandlerSelector', 'widgets.table.DataTable', 'widgets', 'widgets.table', 'widgets.actionbar.ActionBar', 'widgets.actionbar', 'widgets.sidebar.SideBar', 'widgets.sidebar', 'html5', 'sidebarwidgets.filterselector.CompoundFilter', 'sidebarwidgets', 'sidebarwidgets.filterselector', 'i18n.translate', 'i18n']
*/
