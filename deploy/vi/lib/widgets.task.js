/* start module: widgets.task */
$pyjs['loaded_modules']['widgets.task'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.task']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.task'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.task'];
	$m['__repr__'] = function() { return '<module: widgets.task>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.task';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['task'] = $pyjs['loaded_modules']['widgets.task'];
	try {


		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'widgets', null, false);
		$m['TaskWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.task';
			$cls_definition['__md5__'] = '03994cb46c38fca1e130f5f96bd68bac';
			$method = $pyjs__bind_method2('__init__', function(title) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '03994cb46c38fca1e130f5f96bd68bac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['TaskWidget'], self), '__init__', null, null, [{'title':title}]);
				self['__getitem__']('class')['append']('task');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('title', title) : $p['setattr'](self, 'title', title); 
				return null;
			}
	, 1, [null,null,['self'],['title']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TaskWidget', $p['tuple']($bases), $data);
		})();
		$m['ServerTaskWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.task';
			$cls_definition['__md5__'] = 'dd6d336f26646454d29a9d982ea8e783';
			$method = $pyjs__bind_method2('__init__', function(title, key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					key = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dd6d336f26646454d29a9d982ea8e783') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['ServerTaskWidget'], self), '__init__', null, null, [{'title':title}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'logaction':'Task started!'}, '_tasks', $p['getattr']($m['EditWidget'], 'appSingleton'), key])) : $p['setattr'](self, 'widget', $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'logaction':'Task started!'}, '_tasks', $p['getattr']($m['EditWidget'], 'appSingleton'), key])); 
				self['appendChild']($p['getattr'](self, 'widget'));
				self['appendChild']($m['html5']['ext']['Button']($m['translate']('Cancel'), $p['getattr'](self, 'close')));
				return null;
			}
	, 1, [null,null,['self'],['title'],['key']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['TaskWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ServerTaskWidget', $p['tuple']($bases), $data);
		})();
		$m['TaskSelectWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.task';
			$cls_definition['__md5__'] = '2355d3d52008775f996992ee4038ce13';
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
					if (self.prototype['__md5__'] !== '2355d3d52008775f996992ee4038ce13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var opt,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,$iter1_iter,$iter2_idx,task,$iter1_array,$iter2_type,div,type,$iter2_array,$iter1_idx;
				$pyjs_kwargs_call($p['$$super']($m['TaskSelectWidget'], self), '__init__', null, null, [{'title':$m['translate']('Select a task')}]);
				self['sinkEvent']('onChange');
				div = $m['html5']['Div']();
				div['__setitem__']('class', $p['list'](['task-selector']));
				self['appendChild'](div);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('select', $m['html5']['Select']()) : $p['setattr'](self, 'select', $m['html5']['Select']()); 
				div['appendChild']($p['getattr'](self, 'select'));
				$iter1_iter = $p['list'](['server', 'client']);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					type = $iter1_nextval['$nextval'];
					$iter2_iter = $p['enumerate']($m['conf']['__getitem__']('tasks')['__getitem__'](type));
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
						i = $tupleassign1[0];
						task = $tupleassign1[1];
						if ($p['bool']($p['op_eq'](type, 'client'))) {
							if (!( task['__getitem__']('task') )) {
							   throw $p['AssertionError']('task-Attribute must be set for client-side tasks');
							 }
						}
						if ($p['bool'](!$p['bool'](task['keys']()['__contains__']('type')))) {
							task['__setitem__']('type', type);
						}
						opt = $m['html5']['Option']();
						opt['__is_instance__'] && typeof opt['__setattr__'] == 'function' ? opt['__setattr__']('task', task) : $p['setattr'](opt, 'task', task); 
						opt['appendChild']($m['html5']['TextNode'](task['__getitem__']('name')));
						if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'select'), '_children')))) {
							opt['_setSelected'](true);
						}
						self['select']['appendChild'](opt);
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('descr', $m['html5']['Div']()) : $p['setattr'](self, 'descr', $m['html5']['Div']()); 
				$p['getattr'](self, 'descr')['__setitem__']('class', $p['list'](['task-description']));
				self['appendChild']($p['getattr'](self, 'descr'));
				self['appendChild']($m['html5']['ext']['Button']($m['translate']('Cancel'), $p['getattr'](self, 'close')));
				self['appendChild']($m['html5']['ext']['Button']($m['translate']('Run'), $p['getattr'](self, 'invokeTask')));
				self['setActiveTask']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getSelectedTask', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2355d3d52008775f996992ee4038ce13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr']($p['getattr'](self, 'select'), '_children')['__getitem__']($p['getattr'](self, 'select')['__getitem__']('selectedIndex')), 'task');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSelectedTask'] = $method;
			$method = $pyjs__bind_method2('setActiveTask', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2355d3d52008775f996992ee4038ce13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var task,$or1,$or2;
				task = self['getSelectedTask']();
				self['descr']['removeAllChildren']();
				self['descr']['appendChild']($m['html5']['TextNode'](($p['bool']($or1=task['get']('descr'))?$or1:$m['translate']('No description provided.'))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setActiveTask'] = $method;
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
					if (self.prototype['__md5__'] !== '2355d3d52008775f996992ee4038ce13') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'select')))) {
					self['setActiveTask']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('invokeTask', function() {
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
					if (self.prototype['__md5__'] !== '2355d3d52008775f996992ee4038ce13') {
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
				var task;
				task = self['getSelectedTask']();
				self['close']();
				if ($p['bool']($p['op_eq'](task['__getitem__']('type'), 'server'))) {
					$m['ServerTaskWidget'](task['__getitem__']('name'), task['__getitem__']('key'));
				}
				else if ($p['bool']($p['op_eq'](task['__getitem__']('type'), 'client'))) {
					if ($p['bool'](!$p['bool'](task['keys']()['__contains__']('task')))) {
						return null;
					}
					task['__getitem__']('task')(task['__getitem__']('name'));
				}
				else {
					throw ($p['NotImplementedError']());
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['invokeTask'] = $method;
			var $bases = new Array($m['TaskWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TaskSelectWidget', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.task */


/* end module: widgets.task */


/*
PYJS_DEPS: ['html5', 'utils', 'config.conf', 'config', 'i18n.translate', 'i18n', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit']
*/
