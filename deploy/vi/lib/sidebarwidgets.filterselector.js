/* start module: sidebarwidgets.filterselector */
$pyjs['loaded_modules']['sidebarwidgets.filterselector'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets.filterselector']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	if(typeof $pyjs['loaded_modules']['sidebarwidgets'] == 'undefined' || !$pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) $p['___import___']('sidebarwidgets', null);
	var $m = $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets.filterselector>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets.filterselector';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sidebarwidgets']['filterselector'] = $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	try {

		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', 'sidebarwidgets');
		$m['conf'] = $p['___import___']('config.conf', 'sidebarwidgets', null, false);
		$m['Search'] = $p['___import___']('widgets.search.Search', 'sidebarwidgets', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'sidebarwidgets', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'sidebarwidgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'sidebarwidgets', null, false);
		$m['utils'] = $p['___import___']('utils', 'sidebarwidgets');
		$m['CompoundFilter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sidebarwidgets.filterselector';
			$cls_definition['__md5__'] = 'ec3ad5aa45068b8246ca0ffc82ce900e';
			$method = $pyjs__bind_method2('__init__', function(view, modul, embed) {
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
					view = arguments[1];
					modul = arguments[2];
					embed = arguments[3];
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
					if (self.prototype['__md5__'] !== 'ec3ad5aa45068b8246ca0ffc82ce900e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof embed != 'undefined') {
						if (embed !== null && typeof embed['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = embed;
							embed = arguments[4];
						}
					} else 					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[4];
						}
					} else 					if (typeof view != 'undefined') {
						if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = view;
							view = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof embed == 'undefined') embed=arguments['callee']['__args__'][5][1];
				var $iter1_nextval,$iter1_type,extension,$iter1_idx,h2,$iter1_iter,wdg,$iter1_array,container;
				$pyjs_kwargs_call($p['$$super']($m['CompoundFilter'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('compoundfilter');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('embed', embed) : $p['setattr'](self, 'embed', embed); 
				if ($p['bool'](embed)) {
					self['__getitem__']('class')['append']('embed');
					self['__getitem__']('class')['append']('expanded');
				}
				else {
					self['__getitem__']('class')['append']('standalone');
					self['__getitem__']('class')['append']('collapsed');
				}
				if ($p['bool'](view['keys']()['__contains__']('name'))) {
					h2 = $m['html5']['H2']();
					h2['appendChild']($m['html5']['TextNode'](view['__getitem__']('name')));
					self['appendChild'](h2);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extendedFilters', $p['list']([])) : $p['setattr'](self, 'extendedFilters', $p['list']([])); 
				$iter1_iter = ($p['bool'](view['keys']()['__contains__']('extendedFilters'))? (view['__getitem__']('extendedFilters')) : ($p['list']([])));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					extension = $iter1_nextval['$nextval'];
					wdg = $m['extendedSearchWidgetSelector']['select'](extension, view, modul);
					if ($p['bool'](!$p['op_is'](wdg, null))) {
						container = $m['html5']['Div']();
						container['__getitem__']('class')['append']('extendedfilter');
						wdg = wdg(extension, view, modul);
						container['appendChild'](wdg);
						self['appendChild'](container);
						self['extendedFilters']['append'](wdg);
						wdg['filterChangedEvent']['register'](self);
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['view'],['modul'],['embed', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onFilterChanged', function() {
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
					if (self.prototype['__md5__'] !== 'ec3ad5aa45068b8246ca0ffc82ce900e') {
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

				self['reevaluate']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onFilterChanged'] = $method;
			$method = $pyjs__bind_method2('reevaluate', function() {
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
					if (self.prototype['__md5__'] !== 'ec3ad5aa45068b8246ca0ffc82ce900e') {
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
				var $iter2_nextval,$iter2_type,extension,$iter2_iter,filter,$iter2_idx,$iter2_array;
				if ($p['bool'](self['view']['keys']()['__contains__']('filter'))) {
					filter = $p['getattr'](self, 'view')['__getitem__']('filter')['copy']();
				}
				else {
					filter = $p['dict']([]);
				}
				$iter2_iter = $p['getattr'](self, 'extendedFilters');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					extension = $iter2_nextval['$nextval'];
					filter = extension['updateFilter'](filter);
				}
				if ($p['bool']($p['getattr'](self, 'embed'))) {
					self['parent']()['setFilter'](filter, (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)), '');
				}
				else {
					self['parent']()['applyFilter'](filter, (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), $m['translate']('Extended Search'));
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['reevaluate'] = $method;
			$method = $pyjs__bind_method2('focus', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ec3ad5aa45068b8246ca0ffc82ce900e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,extension,$and1,$iter3_type,$and2,$iter3_iter,$iter3_array,$iter3_nextval;
				$iter3_iter = $p['getattr'](self, 'extendedFilters');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					extension = $iter3_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and1=$p['dir'](extension)['__contains__']('focus'))?$p['callable']($p['getattr'](extension, 'focus')):$and1))) {
						extension['focus']();
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['focus'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CompoundFilter', $p['tuple']($bases), $data);
		})();
		$m['FilterSelector'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sidebarwidgets.filterselector';
			$cls_definition['__md5__'] = 'a1735c7154c3589ebc0521e593b1427f';
			$method = $pyjs__bind_method2('__init__', function(modul) {
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
					modul = arguments[1];
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
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['FilterSelector'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentTarget', null) : $p['setattr'](self, 'currentTarget', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultFilter', true) : $p['setattr'](self, 'defaultFilter', true); 
				self['sinkEvent']('onClick');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['modul']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
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
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,c,nextTarget,$iter4_nextval,$and3,$and4,$and5,$and6,$and7,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
				nextTarget = $p['getattr'](self, 'currentTarget');
				$iter4_iter = $p['getattr'](self, '_children');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and3=$p['op_eq'](c, $p['getattr'](self, 'currentTarget')))?!$p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, c)):$and3))) {
						c['__getitem__']('class')['append']('collapsed');
						c['__getitem__']('class')['remove']('expanded');
						if ($p['bool']($p['op_eq'](nextTarget, $p['getattr'](self, 'currentTarget')))) {
							nextTarget = null;
						}
					}
					else if ($p['bool'](($p['bool']($and5=!$p['op_eq'](c, $p['getattr'](self, 'currentTarget')))?$m['html5']['utils']['doesEventHitWidgetOrChildren'](event, c):$and5))) {
						c['__getitem__']('class')['remove']('collapsed');
						c['__getitem__']('class')['append']('expanded');
						nextTarget = c;
					}
				}
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'currentTarget'), nextTarget))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultFilter', false) : $p['setattr'](self, 'defaultFilter', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentTarget', nextTarget) : $p['setattr'](self, 'currentTarget', nextTarget); 
					if ($p['bool']($p['dir'](nextTarget)['__contains__']('reevaluate'))) {
						nextTarget['reevaluate']();
					}
				}
				if ($p['bool'](($p['bool']($and7=$p['dir']($p['getattr'](self, 'currentTarget'))['__contains__']('focus'))?$p['callable']($p['getattr']($p['getattr'](self, 'currentTarget'), 'focus')):$and7))) {
					self['currentTarget']['focus']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
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
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var activeFilter,$and9,isSearchDisabled,$iter5_nextval,$iter5_array,$and12,$and13,$and10,$iter5_iter,$and11,$iter5_idx,$iter5_type,modulConfig,view;
				$p['$$super']($m['FilterSelector'], self)['onAttach']();
				activeFilter = $p['getattr'](self['parent']()['parent'](), 'filterID');
				isSearchDisabled = false;
				if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')))) {
					modulConfig = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
					if ($p['bool'](($p['bool']($and9=modulConfig['keys']()['__contains__']('views'))?modulConfig['__getitem__']('views'):$and9))) {
						$iter5_iter = modulConfig['__getitem__']('views');
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							view = $iter5_nextval['$nextval'];
							self['appendChild']($m['CompoundFilter'](view, $p['getattr'](self, 'module')));
						}
					}
					if ($p['bool'](($p['bool']($and11=modulConfig['keys']()['__contains__']('disabledFunctions'))?($p['bool']($and12=modulConfig['__getitem__']('disabledFunctions'))?modulConfig['__getitem__']('disabledFunctions')['__contains__']('fulltext-search'):$and12):$and11))) {
						isSearchDisabled = true;
					}
				}
				if ($p['bool'](!$p['bool'](isSearchDisabled))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('search', $m['Search']()) : $p['setattr'](self, 'search', $m['Search']()); 
					$p['getattr'](self, 'search')['__getitem__']('class')['append']('collapsed');
					self['appendChild']($p['getattr'](self, 'search'));
					self['search']['startSearchEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['bool']($p['getattr'](self, 'defaultFilter')))) {
					self['onStartSearch']();
				}
				$p['$$super']($m['FilterSelector'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onStartSearch', function(searchTxt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					searchTxt = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof searchTxt == 'undefined') searchTxt=arguments['callee']['__args__'][3][1];
				var filter,modulConfig;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defaultFilter', !$p['bool'](searchTxt)) : $p['setattr'](self, 'defaultFilter', !$p['bool'](searchTxt)); 
				if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')))) {
					modulConfig = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
					if ($p['bool'](modulConfig['keys']()['__contains__']('filter'))) {
						filter = modulConfig['__getitem__']('filter');
					}
					else {
						filter = $p['dict']([]);
					}
					if ($p['bool'](searchTxt)) {
						filter['__setitem__']('search', searchTxt);
						self['applyFilter'](filter, (typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3)), $pyjs_kwargs_call(null, $m['translate'], null, null, [{'token':searchTxt}, 'Fulltext search: {token}']));
					}
					else {
						if ($p['bool'](filter['keys']()['__contains__']('search'))) {
							filter['pop']('search', null);
						}
						self['applyFilter'](filter, (typeof ($usub4=$constant_int_1)=='number'?
							-$usub4:
							$p['op_usub']($usub4)), '');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['searchTxt', null]]);
			$cls_definition['onStartSearch'] = $method;
			$method = $pyjs__bind_method2('setView', function(btn) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					btn = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['applyFilter']($p['getattr'](btn, 'destView')['__getitem__']('filter'), $p['getattr'](btn, 'destView')['__getitem__']('__id'), $p['getattr'](btn, 'destView')['__getitem__']('name'));
				return null;
			}
	, 1, [null,null,['self'],['btn']]);
			$cls_definition['setView'] = $method;
			$method = $pyjs__bind_method2('applyFilter', function(filter, filterID, filterName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					filterID = arguments[2];
					filterName = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a1735c7154c3589ebc0521e593b1427f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['setFilter'](filter, filterID, filterName);
				return null;
			}
	, 1, [null,null,['self'],['filter'],['filterID'],['filterName']]);
			$cls_definition['applyFilter'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FilterSelector', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sidebarwidgets.filterselector */


/* end module: sidebarwidgets.filterselector */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'widgets.search.Search', 'widgets', 'widgets.search', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue', 'pane.Pane', 'pane', 'i18n.translate', 'i18n', 'utils']
*/
