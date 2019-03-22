/* start module: widgets.tree */
$pyjs['loaded_modules']['widgets.tree'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.tree']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.tree'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.tree'];
	$m['__repr__'] = function() { return '<module: widgets.tree>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.tree';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['tree'] = $pyjs['loaded_modules']['widgets.tree'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_99 = new $p['int'](99);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_401 = new $p['int'](401);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['pyjd'] = $p['___import___']('pyjd', 'widgets');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['Search'] = $p['___import___']('widgets.search.Search', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['displayDelegateSelector'] = $p['___import___']('priorityqueue.displayDelegateSelector', 'widgets', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'widgets', null, false);
		$m['moduleHandlerSelector'] = $p['___import___']('priorityqueue.moduleHandlerSelector', 'widgets', null, false);
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$p['__import_all__']('html5.keycodes', 'widgets', $m, null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['NodeWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.tree';
			$cls_definition['__md5__'] = '042a6808c631a900906a59330314ef62';
			$method = $pyjs__bind_method2('__init__', function(modul, data, structure) {
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
					modul = arguments[1];
					data = arguments[2];
					structure = arguments[3];
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
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof structure != 'undefined') {
						if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = structure;
							structure = arguments[4];
						}
					} else 					if (typeof data != 'undefined') {
						if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = data;
							data = arguments[4];
						}
					} else 					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['NodeWidget'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', structure) : $p['setattr'](self, 'structure', structure); 
				self['buildDescription']();
				self['__setitem__']('class', 'treeitem node supports_drag supports_drop');
				self['__setitem__']('draggable', true);
				self['sinkEvent']('onDragOver', 'onDrop', 'onDragStart', 'onDragLeave');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('buildDescription', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var boneInfo,hasDescr,$iter1_nextval,$iter1_type,boneName,$and1,$and3,$and4,$iter1_iter,params,$iter1_array,wdg,$and2,structure,$iter1_idx;
				hasDescr = false;
				$iter1_iter = $p['getattr'](self, 'structure');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					boneName = $tupleassign1[0];
					boneInfo = $tupleassign1[1];
					if ($p['bool'](($p['bool']($and1=boneInfo['keys']()['__contains__']('params'))?$p['isinstance'](boneInfo['__getitem__']('params'), $p['dict']):$and1))) {
						params = boneInfo['__getitem__']('params');
						if ($p['bool'](($p['bool']($and3=params['keys']()['__contains__']('frontend_default_visible'))?params['__getitem__']('frontend_default_visible'):$and3))) {
							structure = function(){
								var $iter2_nextval,$iter2_type,$iter2_iter,k,$collcomp1,$iter2_idx,v,$iter2_array;
	$collcomp1 = $p['dict']();
							$iter2_iter = $p['getattr'](self, 'structure');
							$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
							while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
								var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
								k = $tupleassign2[0];
								v = $tupleassign2[1];
								$collcomp1['__setitem__'](k, v);
							}

	return $collcomp1;}();
							wdg = $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, structure);
							if ($p['bool'](!$p['op_is'](wdg, null))) {
								self['appendChild'](wdg($p['getattr'](self, 'module'), boneName, structure)['render']($p['getattr'](self, 'data'), boneName));
								hasDescr = true;
							}
						}
					}
				}
				if ($p['bool'](!$p['bool'](hasDescr))) {
					self['appendChild']($m['html5']['TextNode']($p['getattr'](self, 'data')['__getitem__']('name')));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['buildDescription'] = $method;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
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
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var srcKey,$pyjs_try_err,nodeType;
				if ($p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('insert_here')))) {
					self['__getitem__']('class')['append']('insert_here');
				}
				try {
					var $tupleassign3 = $p['__ass_unpack'](event['dataTransfer']['getData']('Text')['$$split']('/'), 2, null);
					nodeType = $tupleassign3[0];
					srcKey = $tupleassign3[1];
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						return $p['$$super']($m['NodeWidget'], self)['onDragOver'](event);
					}
				}
				event['preventDefault']();
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
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
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](self['__getitem__']('class')['__contains__']('insert_here'))) {
					self['__getitem__']('class')['remove']('insert_here');
				}
				return $p['$$super']($m['NodeWidget'], self)['onDragLeave'](event);
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
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
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				event['dataTransfer']['setData']('Text', $p['__op_add']($add1='node/',$add2=$p['getattr'](self, 'data')['__getitem__']('key')));
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$method = $pyjs__bind_method2('onDrop', function(event) {
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
					if (self.prototype['__md5__'] !== '042a6808c631a900906a59330314ef62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var srcKey,$pyjs_try_err,nodeType;
				try {
					var $tupleassign4 = $p['__ass_unpack'](event['dataTransfer']['getData']('Text')['$$split']('/'), 2, null);
					nodeType = $tupleassign4[0];
					srcKey = $tupleassign4[1];
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						return null;
					}
				}
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'modifies':true, 'secure':true}, $p['getattr'](self, 'module'), 'move', $p['dict']([['skelType', nodeType], ['key', srcKey], ['destNode', $p['getattr'](self, 'data')['__getitem__']('key')]])]);
				event['preventDefault']();
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NodeWidget', $p['tuple']($bases), $data);
		})();
		$m['LeafWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.tree';
			$cls_definition['__md5__'] = 'f740152dc21d138c444984769ebdab48';
			$method = $pyjs__bind_method2('__init__', function(module, data, structure) {
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
					data = arguments[2];
					structure = arguments[3];
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
					if (self.prototype['__md5__'] !== 'f740152dc21d138c444984769ebdab48') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof structure != 'undefined') {
						if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = structure;
							structure = arguments[4];
						}
					} else 					if (typeof data != 'undefined') {
						if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = data;
							data = arguments[4];
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

				$pyjs_kwargs_call($p['$$super']($m['LeafWidget'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', structure) : $p['setattr'](self, 'structure', structure); 
				self['buildDescription']();
				self['__setitem__']('class', 'treeitem leaf supports_drag');
				self['__setitem__']('draggable', true);
				self['sinkEvent']('onDragStart');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['data'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('buildDescription', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f740152dc21d138c444984769ebdab48') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,boneInfo,hasDescr,boneName,$iter3_type,$and5,$and6,$and7,$iter3_idx,params,$iter3_iter,$iter3_array,$iter3_nextval,structure,wdg;
				hasDescr = false;
				$iter3_iter = $p['getattr'](self, 'structure');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					boneName = $tupleassign5[0];
					boneInfo = $tupleassign5[1];
					if ($p['bool'](($p['bool']($and5=boneInfo['keys']()['__contains__']('params'))?$p['isinstance'](boneInfo['__getitem__']('params'), $p['dict']):$and5))) {
						params = boneInfo['__getitem__']('params');
						if ($p['bool'](($p['bool']($and7=params['keys']()['__contains__']('frontend_default_visible'))?params['__getitem__']('frontend_default_visible'):$and7))) {
							structure = function(){
								var $iter4_nextval,k,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['dict']();
							$iter4_iter = $p['getattr'](self, 'structure');
							$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
							while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
								var $tupleassign6 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
								k = $tupleassign6[0];
								v = $tupleassign6[1];
								$collcomp2['__setitem__'](k, v);
							}

	return $collcomp2;}();
							wdg = $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, structure);
							if ($p['bool'](!$p['op_is'](wdg, null))) {
								self['appendChild'](wdg($p['getattr'](self, 'module'), boneName, structure)['render']($p['getattr'](self, 'data'), boneName));
								hasDescr = true;
							}
						}
					}
				}
				if ($p['bool'](!$p['bool'](hasDescr))) {
					self['appendChild']($m['html5']['TextNode']($p['getattr'](self, 'data')['__getitem__']('name')));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['buildDescription'] = $method;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
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
					if (self.prototype['__md5__'] !== 'f740152dc21d138c444984769ebdab48') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				event['dataTransfer']['setData']('Text', $p['__op_add']($add3='leaf/',$add4=$p['getattr'](self, 'data')['__getitem__']('key')));
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LeafWidget', $p['tuple']($bases), $data);
		})();
		$m['SelectableDiv'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.tree';
			$cls_definition['__md5__'] = '2bcfc31506625c47ec322086b7de1467';
			$method = $pyjs__bind_method2('__init__', function(nodeWidget, leafWidget, selectionType, multiSelection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					nodeWidget = arguments[1];
					leafWidget = arguments[2];
					selectionType = arguments[3];
					multiSelection = arguments[4];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof multiSelection != 'undefined') {
						if (multiSelection !== null && typeof multiSelection['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = multiSelection;
							multiSelection = arguments[5];
						}
					} else 					if (typeof selectionType != 'undefined') {
						if (selectionType !== null && typeof selectionType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = selectionType;
							selectionType = arguments[5];
						}
					} else 					if (typeof leafWidget != 'undefined') {
						if (leafWidget !== null && typeof leafWidget['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = leafWidget;
							leafWidget = arguments[5];
						}
					} else 					if (typeof nodeWidget != 'undefined') {
						if (nodeWidget !== null && typeof nodeWidget['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = nodeWidget;
							nodeWidget = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof selectionType == 'undefined') selectionType=arguments['callee']['__args__'][5][1];
				if (typeof multiSelection == 'undefined') multiSelection=arguments['callee']['__args__'][6][1];

				$pyjs_kwargs_call($p['$$super']($m['SelectableDiv'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('selectioncontainer');
				self['__setitem__']('tabindex', $constant_int_1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionType', selectionType) : $p['setattr'](self, 'selectionType', selectionType); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('multiSelection', multiSelection) : $p['setattr'](self, 'multiSelection', multiSelection); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nodeWidget', nodeWidget) : $p['setattr'](self, 'nodeWidget', nodeWidget); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('leafWidget', leafWidget) : $p['setattr'](self, 'leafWidget', leafWidget); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionChangedEvent', $m['EventDispatcher']('selectionChanged')) : $p['setattr'](self, 'selectionChangedEvent', $m['EventDispatcher']('selectionChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')) : $p['setattr'](self, 'selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionReturnEvent', $m['EventDispatcher']('selectionReturn')) : $p['setattr'](self, 'selectionReturnEvent', $m['EventDispatcher']('selectionReturn')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorMovedEvent', $m['EventDispatcher']('cursorMoved')) : $p['setattr'](self, 'cursorMovedEvent', $m['EventDispatcher']('cursorMoved')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedItems', $p['list']([])) : $p['setattr'](self, '_selectedItems', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentItem', null) : $p['setattr'](self, '_currentItem', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isMouseDown', false) : $p['setattr'](self, '_isMouseDown', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', false) : $p['setattr'](self, '_isCtlPressed', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ctlStartRow', null) : $p['setattr'](self, '_ctlStartRow', null); 
				self['sinkEvent']('onClick', 'onDblClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onKeyDown', 'onKeyUp');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['nodeWidget'],['leafWidget'],['selectionType', 'both'],['multiSelection', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setCurrentItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, '_currentItem'))) {
					$p['getattr'](self, '_currentItem')['__getitem__']('class')['remove']('cursor');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentItem', item) : $p['setattr'](self, '_currentItem', item); 
				if ($p['bool'](item)) {
					item['__getitem__']('class')['append']('cursor');
				}
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['setCurrentItem'] = $method;
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,child,$iter5_iter,$iter5_idx,$iter5_type;
				self['focus']();
				$iter5_iter = $p['getattr'](self, '_children');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					child = $iter5_nextval['$nextval'];
					if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, child))) {
						self['setCurrentItem'](child);
						if ($p['bool']($p['getattr'](self, '_isCtlPressed'))) {
							self['addSelectedItem'](child);
						}
					}
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_isCtlPressed')))) {
					self['clearSelection']();
				}
				if ($p['bool']($p['getattr'](self, '_selectedItems'))) {
					self['selectionChangedEvent']['fire'](self, $p['__getslice']($p['getattr'](self, '_selectedItems'), 0, null));
				}
				else if ($p['bool']($p['getattr'](self, '_currentItem'))) {
					self['selectionChangedEvent']['fire'](self, $p['list']([$p['getattr'](self, '_currentItem')]));
				}
				else {
					self['selectionChangedEvent']['fire'](self, $p['list']([]));
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onDblClick', function(event) {
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and9,$or1,$or3,$iter6_idx,$or2,$iter6_type,$and10,$and12,$iter6_array,$and11,child,$iter6_iter,$iter6_nextval;
				$iter6_iter = $p['getattr'](self, '_children');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					child = $iter6_nextval['$nextval'];
					if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, child))) {
						if ($p['bool'](($p['bool']($or1=($p['bool']($and9=$p['op_eq']($p['getattr'](self, 'selectionType'), 'node'))?$p['isinstance'](child, $p['getattr'](self, 'nodeWidget')):$and9))?$or1:($p['bool']($or2=($p['bool']($and11=$p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'))?$p['isinstance'](child, $p['getattr'](self, 'leafWidget')):$and11))?$or2:$p['op_eq']($p['getattr'](self, 'selectionType'), 'both'))))) {
							self['selectionActivatedEvent']['fire'](self, $p['list']([child]));
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDblClick'] = $method;
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_selectedItems')), $constant_int_0) == 1))) {
					self['selectionActivatedEvent']['fire'](self, $p['getattr'](self, '_selectedItems'));
				}
				else if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentItem'), null))) {
					self['selectionActivatedEvent']['fire'](self, $p['list']([$p['getattr'](self, '_currentItem')]));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activateCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('returnCurrentSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var selection;
				selection = $p['list']([]);
				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_selectedItems')), $constant_int_0) == 1))) {
					selection = $p['getattr'](self, '_selectedItems');
				}
				else if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentItem'), null))) {
					selection = $p['list']([$p['getattr'](self, '_currentItem')]);
				}
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'selectionType'), 'node'))) {
					selection = function(){
						var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type;
	$collcomp3 = $p['list']();
					$iter7_iter = selection;
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						x = $iter7_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](x, $p['getattr'](self, 'nodeWidget')))) {
							$collcomp3['append'](x);
						}
					}

	return $collcomp3;}();
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'))) {
					selection = function(){
						var $iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval,x;
	$collcomp4 = $p['list']();
					$iter8_iter = selection;
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						x = $iter8_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](x, $p['getattr'](self, 'leafWidget')))) {
							$collcomp4['append'](x);
						}
					}

	return $collcomp4;}();
				}
				self['selectionReturnEvent']['fire'](self, selection);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['returnCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('onKeyDown', function(event) {
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']((typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode')))) {
					self['activateCurrentSelection']();
					event['preventDefault']();
					return null;
				}
				else if ($p['bool']((typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', true) : $p['setattr'](self, '_isCtlPressed', true); 
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyDown'] = $method;
			$method = $pyjs__bind_method2('onKeyUp', function(event) {
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']((typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', false) : $p['setattr'](self, '_isCtlPressed', false); 
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyUp'] = $method;
			$method = $pyjs__bind_method2('clearSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,child,$iter9_array;
				$iter9_iter = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					child = $iter9_nextval['$nextval'];
					self['removeSelectedItem'](child);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearSelection'] = $method;
			$method = $pyjs__bind_method2('addSelectedItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or4,$or6,$and13,$and16,$and14,$and15;
				if ($p['bool'](($p['bool']($or4=($p['bool']($and13=$p['op_eq']($p['getattr'](self, 'selectionType'), 'node'))?$p['isinstance'](item, $p['getattr'](self, 'nodeWidget')):$and13))?$or4:($p['bool']($or5=($p['bool']($and15=$p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'))?$p['isinstance'](item, $p['getattr'](self, 'leafWidget')):$and15))?$or5:$p['op_eq']($p['getattr'](self, 'selectionType'), 'both'))))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, '_selectedItems')['__contains__'](item)))) {
						self['_selectedItems']['append'](item);
						item['__getitem__']('class')['append']('selected');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['addSelectedItem'] = $method;
			$method = $pyjs__bind_method2('removeSelectedItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['bool']($p['getattr'](self, '_selectedItems')['__contains__'](item)))) {
					return null;
				}
				self['_selectedItems']['remove'](item);
				item['__getitem__']('class')['remove']('selected');
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['removeSelectedItem'] = $method;
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
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$iter10_array,child,$iter10_type,$iter10_iter,$iter10_idx;
				self['clearSelection']();
				$iter10_iter = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					child = $iter10_nextval['$nextval'];
					self['removeChild'](child);
				}
				self['selectionChangedEvent']['fire'](self, $p['list']([]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('getCurrentSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfc31506625c47ec322086b7de1467') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_selectedItems')), $constant_int_0) == 1))) {
					return $p['__getslice']($p['getattr'](self, '_selectedItems'), 0, null);
				}
				if ($p['bool']($p['getattr'](self, '_currentItem'))) {
					return $p['list']([$p['getattr'](self, '_currentItem')]);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentSelection'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectableDiv', $p['tuple']($bases), $data);
		})();
		$m['TreeWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.tree';
			$cls_definition['__md5__'] = '824aba490d452d8e66094de892314e08';
			$cls_definition['nodeWidget'] = $m['NodeWidget'];
			$cls_definition['leafWidget'] = $m['LeafWidget'];
			$cls_definition['defaultActions'] = $p['list'](['add.node', 'add.leaf', 'selectrootnode', 'edit', 'delete', 'reload']);
			$method = $pyjs__bind_method2('__init__', function(module, rootNode, node, isSelector) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					rootNode = arguments[2];
					node = arguments[3];
					isSelector = arguments[4];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof isSelector != 'undefined') {
						if (isSelector !== null && typeof isSelector['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isSelector;
							isSelector = arguments[5];
						}
					} else 					if (typeof node != 'undefined') {
						if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = node;
							node = arguments[5];
						}
					} else 					if (typeof rootNode != 'undefined') {
						if (rootNode !== null && typeof rootNode['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rootNode;
							rootNode = arguments[5];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof rootNode == 'undefined') rootNode=arguments['callee']['__args__'][4][1];
				if (typeof node == 'undefined') node=arguments['callee']['__args__'][5][1];
				if (typeof isSelector == 'undefined') isSelector=arguments['callee']['__args__'][6][1];
				var $or7,$iter11_type,f,$iter11_iter,$or8,$iter11_array,$add5,$add6,$iter11_nextval,$iter11_idx;
				$p['$$super']($m['TreeWidget'], self)['__init__']();
				self['__getitem__']('class')['append']('tree');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNode', rootNode) : $p['setattr'](self, 'rootNode', rootNode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('node', ($p['bool']($or7=node)?$or7:rootNode)) : $p['setattr'](self, 'node', ($p['bool']($or7=node)?$or7:rootNode)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionBar', $m['ActionBar'](module, 'tree')) : $p['setattr'](self, 'actionBar', $m['ActionBar'](module, 'tree')); 
				self['appendChild']($p['getattr'](self, 'actionBar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pathList', $m['html5']['Div']()) : $p['setattr'](self, 'pathList', $m['html5']['Div']()); 
				$p['getattr'](self, 'pathList')['__getitem__']('class')['append']('breadcrumb');
				self['appendChild']($p['getattr'](self, 'pathList'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('entryFrame', $m['SelectableDiv']($p['getattr'](self, 'nodeWidget'), $p['getattr'](self, 'leafWidget'))) : $p['setattr'](self, 'entryFrame', $m['SelectableDiv']($p['getattr'](self, 'nodeWidget'), $p['getattr'](self, 'leafWidget'))); 
				self['appendChild']($p['getattr'](self, 'entryFrame'));
				self['entryFrame']['selectionActivatedEvent']['register'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_batchSize', $constant_int_99) : $p['setattr'](self, '_batchSize', $constant_int_99); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', $p['dict']([['node', null], ['leaf', null]])) : $p['setattr'](self, '_currentCursor', $p['dict']([['node', null], ['leaf', null]])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNodeChangedEvent', $m['EventDispatcher']('rootNodeChanged')) : $p['setattr'](self, 'rootNodeChangedEvent', $m['EventDispatcher']('rootNodeChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nodeChangedEvent', $m['EventDispatcher']('nodeChanged')) : $p['setattr'](self, 'nodeChangedEvent', $m['EventDispatcher']('nodeChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isSelector', isSelector) : $p['setattr'](self, 'isSelector', isSelector); 
				if ($p['bool']($p['getattr'](self, 'rootNode'))) {
					self['reloadData']();
				}
				else {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSetDefaultRootNode')}, $p['getattr'](self, 'module'), 'listRootNodes']);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path', $p['list']([])) : $p['setattr'](self, 'path', $p['list']([])); 
				self['sinkEvent']('onClick');
				$iter11_iter = $p['list'](['selectionChangedEvent', 'selectionActivatedEvent', 'cursorMovedEvent', 'getCurrentSelection', 'selectionReturnEvent']);
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					f = $iter11_nextval['$nextval'];
					$p['setattr'](self, f, $p['getattr']($p['getattr'](self, 'entryFrame'), f));
				}
				self['actionBar']['setActions']($p['__op_add']($add5=$p['getattr'](self, 'defaultActions'),$add6=($p['bool'](isSelector)? ($p['list'](['select', 'close'])) : ($p['list']([])))));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['rootNode', null],['node', null],['isSelector', false]]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
				if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
				var $or9,errorDiv,$or11,$and17,$or12,$and18,txt,$or10;
				$p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
				$p['getattr'](self, 'entryFrame')['__getitem__']('style')['__setitem__']('display', 'none');
				errorDiv = $m['html5']['Div']();
				errorDiv['__getitem__']('class')['append']('error_msg');
				if ($p['bool'](($p['bool']($and17=code)?($p['bool']($or9=$p['op_eq'](code, $constant_int_401))?$or9:$p['op_eq'](code, $constant_int_403)):$and17))) {
					txt = 'Access denied!';
				}
				else {
					txt = 'An unknown error occurred!';
				}
				errorDiv['__getitem__']('class')['append']($p['sprintf']('error_code_%s', ($p['bool']($or11=code)?$or11:$constant_int_0)));
				errorDiv['appendChild']($m['html5']['TextNode'](txt));
				self['appendChild'](errorDiv);
				return null;
			}
	, 1, [null,null,['self'],['req', null],['code', null]]);
			$cls_definition['showErrorMsg'] = $method;
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['TreeWidget'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['TreeWidget'], self)['onDetach']();
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
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
				var $iter12_type,$and20,v,$iter12_array,isRootNode,$iter12_iter,k,$and21,$and19,$iter12_idx,$iter12_nextval;
				if ($p['bool'](!$p['op_eq'](module, $p['getattr'](self, 'module')))) {
					isRootNode = false;
					$iter12_iter = $m['conf']['__getitem__']('modules')['items']();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						var $tupleassign7 = $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
						k = $tupleassign7[0];
						v = $tupleassign7[1];
						if ($p['bool'](($p['bool']($and19=$p['op_eq'](k, module))?($p['bool']($and20=$p['op_eq'](v['get']('handler'), 'list'))?$p['op_eq'](v['get']('rootNodeOf'), $p['getattr'](self, 'module')):$and20):$and19))) {
							isRootNode = true;
							break;
						}
					}
					if ($p['bool'](!$p['bool'](isRootNode))) {
						return null;
					}
				}
				if ($p['bool'](self['actionBar']['widgets']['keys']()['__contains__']('selectrootnode'))) {
					$p['getattr']($p['getattr'](self, 'actionBar'), 'widgets')['__getitem__']('selectrootnode')['update']();
				}
				self['reloadData']();
				return null;
			}
	, 1, [null,['kwargs'],['self'],['module']]);
			$cls_definition['onDataChanged'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(div, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					div = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var item,$and23,$and22;
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				item = selection['__getitem__']($constant_int_0);
				if ($p['bool']($p['isinstance'](item, $p['getattr'](self, 'nodeWidget')))) {
					self['path']['append']($p['getattr'](item, 'data'));
					self['rebuildPath']();
					self['setNode']($p['getattr'](item, 'data')['__getitem__']('key'));
				}
				else if ($p['bool'](($p['bool']($and22=$p['isinstance'](item, $p['getattr'](self, 'leafWidget')))?$p['op_eq']($p['getattr'](self, 'isSelector'), 'leaf'):$and22))) {
					self['returnCurrentSelection']();
				}
				return null;
			}
	, 1, [null,null,['self'],['div'],['selection']]);
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['entryFrame']['activateCurrentSelection']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['activateCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('returnCurrentSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				return self['entryFrame']['returnCurrentSelection']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['returnCurrentSelection'] = $method;
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,$iter13_array;
				$p['$$super']($m['TreeWidget'], self)['onClick'](event);
				$iter13_iter = $p['getattr']($p['getattr'](self, 'pathList'), '_children');
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					c = $iter13_nextval['$nextval'];
					if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrParents'](event, c))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path', $p['__getslice']($p['getattr'](self, 'path'), 0, self['pathList']['_children']['index'](c))) : $p['setattr'](self, 'path', $p['__getslice']($p['getattr'](self, 'path'), 0, self['pathList']['_children']['index'](c))); 
						self['rebuildPath']();
						self['setNode']($p['getattr'](c, 'data')['__getitem__']('key'));
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onSetDefaultRootNode', function(req) {
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = $m['NetworkService']['decode'](req);
				if ($p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))) {
					self['setRootNode'](data['__getitem__']($constant_int_0)['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onSetDefaultRootNode'] = $method;
			$method = $pyjs__bind_method2('setRootNode', function(rootNode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rootNode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNode', rootNode) : $p['setattr'](self, 'rootNode', rootNode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('node', rootNode) : $p['setattr'](self, 'node', rootNode); 
				self['rootNodeChangedEvent']['fire'](rootNode);
				self['rebuildPath']();
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['rootNode']]);
			$cls_definition['setRootNode'] = $method;
			$method = $pyjs__bind_method2('setNode', function(node) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					node = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('node', node) : $p['setattr'](self, 'node', node); 
				self['nodeChangedEvent']['fire'](node);
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['node']]);
			$cls_definition['setNode'] = $method;
			$method = $pyjs__bind_method2('rebuildPath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,$iter15_iter,$iter15_array,c,$iter15_idx,p,$add7,$iter14_iter,$iter15_type,$iter15_nextval,$add8,$iter14_idx,$iter14_nextval;
				$iter14_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'pathList'), '_children'), 0, null);
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					c = $iter14_nextval['$nextval'];
					self['pathList']['removeChild'](c);
				}
				$iter15_iter = $p['__op_add']($add7=$p['list']([null]),$add8=$p['getattr'](self, 'path'));
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					p = $iter15_nextval['$nextval'];
					if ($p['bool']($p['op_is'](p, null))) {
						c = $m['NodeWidget']($p['getattr'](self, 'module'), $p['dict']([['key', $p['getattr'](self, 'rootNode')], ['name', 'root']]), $p['list']([]));
						c['__getitem__']('class')['append']('is_rootnode');
					}
					else {
						c = $m['NodeWidget']($p['getattr'](self, 'module'), p, $p['list']([]));
					}
					self['pathList']['appendChild'](c);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rebuildPath'] = $method;
			$method = $pyjs__bind_method2('reloadData', function(paramsOverride) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					paramsOverride = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof paramsOverride == 'undefined') paramsOverride=arguments['callee']['__args__'][3][1];
				var params,r;
				if (!( !$p['op_is']($p['getattr'](self, 'node'), null) )) {
				   throw $p['AssertionError']('reloadData called while self.node is None');
				 }
				self['entryFrame']['clear']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				if ($p['bool'](paramsOverride)) {
					params = paramsOverride['copy']();
				}
				else {
					params = $p['dict']([['node', $p['getattr'](self, 'node')]]);
				}
				if ($p['bool'](!params['__contains__']('amount'))) {
					params['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
				}
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list/node', params]);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('reqType', 'node') : $p['setattr'](r, 'reqType', 'node'); 
				self['_currentRequests']['append'](r);
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list/leaf', params]);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('reqType', 'leaf') : $p['setattr'](r, 'reqType', 'leaf'); 
				self['_currentRequests']['append'](r);
				return null;
			}
	, 1, [null,null,['self'],['paramsOverride', null]]);
			$cls_definition['reloadData'] = $method;
			$method = $pyjs__bind_method2('onRequestSucceded', function(req) {
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
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,$iter16_type,data,n,$iter16_idx,skel,r,$iter16_nextval,$iter16_iter,$and25,$and24;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)))) {
					return null;
				}
				self['_currentRequests']['remove'](req);
				data = $m['NetworkService']['decode'](req);
				$iter16_iter = data['__getitem__']('skellist');
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					skel = $iter16_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](req, 'reqType'), 'node'))) {
						n = self['nodeWidget']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
					}
					else {
						n = self['leafWidget']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
					}
					self['entryFrame']['appendChild'](n);
					self['entryFrame']['sortChildren']($p['getattr'](self, 'getChildKey'));
				}
				if ($p['bool'](($p['bool']($and24=data['keys']()['__contains__']('cursor'))?$p['op_eq']($p['len'](data['__getitem__']('skellist')), $p['getattr'](req, 'params')['__getitem__']('amount')):$and24))) {
					$p['getattr'](self, '_currentCursor')['__setitem__']($p['getattr'](req, 'reqType'), data['__getitem__']('cursor'));
					$p['getattr'](req, 'params')['__setitem__']('cursor', data['__getitem__']('cursor'));
					r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('list/%s', $p['getattr'](req, 'reqType')), $p['getattr'](req, 'params')]);
					r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('reqType', $p['getattr'](req, 'reqType')) : $p['setattr'](r, 'reqType', $p['getattr'](req, 'reqType')); 
					self['_currentRequests']['append'](r);
				}
				else {
					$p['getattr'](self, '_currentCursor')['__setitem__']($p['getattr'](req, 'reqType'), null);
				}
				self['actionBar']['resetLoadingState']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onRequestSucceded'] = $method;
			$method = $pyjs__bind_method2('getChildKey', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '824aba490d452d8e66094de892314e08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or14,$or13,name;
				name = ($p['bool']($or13=widget['data']['get']('name'))?$or13:'')['lower']();
				if ($p['bool']($p['isinstance'](widget, $p['getattr'](self, 'nodeWidget')))) {
					return $p['sprintf']('0-%s', name);
				}
				else if ($p['bool']($p['isinstance'](widget, $p['getattr'](self, 'leafWidget')))) {
					return $p['sprintf']('1-%s', name);
				}
				else {
					return '2-';
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getChildKey'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				return moduleInfo['__getitem__']('handler')['startswith']('tree.');
			}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
			$cls_definition['canHandle'] = $method;
			$method = $pyjs__bind_method2('render', function(moduleName, adminInfo, context) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var rootNode;
				rootNode = ($p['bool'](context)? (context['get']('rootNode')) : (null));
				return $pyjs_kwargs_call(null, $m['TreeWidget'], null, null, [{'module':moduleName, 'rootNode':rootNode, 'context':context}]);
			}
	, 3, [null,null,['moduleName'],['adminInfo'],['context']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TreeWidget', $p['tuple']($bases), $data);
		})();
		$m['displayDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TreeWidget'], 'canHandle'), $m['TreeWidget']);
		$m['moduleHandlerSelector']['insert']($constant_int_1, $p['getattr']($m['TreeWidget'], 'canHandle'), $p['getattr']($m['TreeWidget'], 'render'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.tree */


/* end module: widgets.tree */


/*
PYJS_DEPS: ['html5', 'pyjd', 'network.NetworkService', 'network', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'widgets.search.Search', 'widgets.search', 'event.EventDispatcher', 'event', 'priorityqueue.displayDelegateSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.moduleHandlerSelector', 'utils', 'html5.keycodes', 'config.conf', 'config']
*/
