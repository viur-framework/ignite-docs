/* start module: widgets.wysiwyg */
$pyjs['loaded_modules']['widgets.wysiwyg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.wysiwyg']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.wysiwyg'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.wysiwyg'];
	$m['__repr__'] = function() { return '<module: widgets.wysiwyg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.wysiwyg';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['wysiwyg'] = $pyjs['loaded_modules']['widgets.wysiwyg'];
	try {
		var $lambda6,$lambda5,$lambda4,$lambda2,$lambda1,$lambda9,$lambda8,$lambda12,$lambda11,$lambda10,$lambda17,$lambda14,$lambda15,$lambda18,$lambda19,$lambda3,$lambda7,$lambda16,$lambda13;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['time'] = $p['___import___']('time.time', 'widgets', null, false);
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
		$m['re'] = $p['___import___']('re', 'widgets');
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['BasicEditorAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '7e792a22e77b1e56eb5b76d50e035d10';
			$method = $pyjs__bind_method2('execCommand', function() {
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
					if (self.prototype['__md5__'] !== '7e792a22e77b1e56eb5b76d50e035d10') {
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

				return $pyjs_kwargs_call(self['parent']()['parent']()['editor'], 'execCommand', args, kwargs, [{}]);
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['execCommand'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BasicEditorAction', $p['tuple']($bases), $data);
		})();
		$m['BasicTextAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '18e66fd147d7ea6d8bc5d0c3d1b62d00';
			$cls_definition['cmd'] = null;
			$cls_definition['isActiveTag'] = null;
			$cls_definition['title'] = null;
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
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
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

				if (!( !$p['op_is']($p['getattr'](self, 'cmd'), null) )) {
				   throw $p['AssertionError']();
				 }
				$pyjs_kwargs_call($p['$$super']($m['BasicTextAction'], self), '__init__', args, kwargs, [{}, $p['getattr'](self, 'cmd')]);
				self['__setitem__']('class', 'icon text style');
				self['__getitem__']('class')['append']($p['getattr'](self, 'cmd'));
				if ($p['bool']($p['getattr'](self, 'title'))) {
					self['__setitem__']('title', $p['getattr'](self, 'title'));
				}
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
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['BasicTextAction'], self)['onAttach']();
				if ($p['bool']($p['getattr'](self, 'isActiveTag'))) {
					self['parent']()['parent']()['cursorMovedEvent']['register'](self);
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
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['BasicTextAction'], self)['onDetach']();
				if ($p['bool']($p['getattr'](self, 'isActiveTag'))) {
					self['parent']()['parent']()['cursorMovedEvent']['unregister'](self);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onCursorMoved', function(nodeStack) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					nodeStack = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,x,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = nodeStack;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					x = $iter1_nextval['$nextval'];
					$collcomp1['append'](($p['bool']($p['dir'](x)['__contains__']('tagName'))? ($p['getattr'](x, 'tagName')) : ('')));
				}

	return $collcomp1;}()['__contains__']($p['getattr'](self, 'isActiveTag')))) {
					if ($p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('isactive')))) {
						self['__getitem__']('class')['append']('isactive');
					}
				}
				else {
					if ($p['bool'](self['__getitem__']('class')['__contains__']('isactive'))) {
						self['__getitem__']('class')['remove']('isactive');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['nodeStack']]);
			$cls_definition['onCursorMoved'] = $method;
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
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['execCommand']($p['getattr'](self, 'cmd'));
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
					if (self.prototype['__md5__'] !== '18e66fd147d7ea6d8bc5d0c3d1b62d00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($m['BasicEditorAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BasicTextAction', $p['tuple']($bases), $data);
		})();
		$m['TextStyleBold'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'cc297f903f8e7229988f55546cc27c89';
			$cls_definition['cmd'] = 'bold';
			$cls_definition['isActiveTag'] = 'B';
			$cls_definition['title'] = $m['translate']('Bold');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleBold', $p['tuple']($bases), $data);
		})();
		var 		$lambda1 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.bold');
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda1, $m['TextStyleBold']);
		$m['TextStyleItalic'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '2ca4f9894915438bcf44c1045163d34e';
			$cls_definition['cmd'] = 'italic';
			$cls_definition['isActiveTag'] = 'I';
			$cls_definition['title'] = $m['translate']('Italic');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleItalic', $p['tuple']($bases), $data);
		})();
		var 		$lambda2 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.italic');
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda2, $m['TextStyleItalic']);
		$m['BasicFormatBlockAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '7d2a43ea229fa8b68cdaa15119d9dcb1';
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
					if (self.prototype['__md5__'] !== '7d2a43ea229fa8b68cdaa15119d9dcb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['execCommand']('formatBlock', $p['getattr'](self, 'cmd'));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BasicFormatBlockAction', $p['tuple']($bases), $data);
		})();
		$m['TextStyleH1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '8bb5a3ba4b5d125647dbe03369aa316c';
			$cls_definition['cmd'] = 'H1';
			$cls_definition['title'] = $m['translate']('H1');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH1', $p['tuple']($bases), $data);
		})();
		var 		$lambda3 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h1');
		};
		$lambda3['__name__'] = '$lambda3';

		$lambda3['__bind_type__'] = 0;
		$lambda3['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda3, $m['TextStyleH1']);
		$m['TextStyleH2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '5aedec535596fb16078ab15dd1f95f04';
			$cls_definition['cmd'] = 'H2';
			$cls_definition['title'] = $m['translate']('H2');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH2', $p['tuple']($bases), $data);
		})();
		var 		$lambda4 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h2');
		};
		$lambda4['__name__'] = '$lambda4';

		$lambda4['__bind_type__'] = 0;
		$lambda4['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda4, $m['TextStyleH2']);
		$m['TextStyleH3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'e2cff1fc1abbaabf28702817e2a7292a';
			$cls_definition['cmd'] = 'H3';
			$cls_definition['title'] = $m['translate']('H3');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH3', $p['tuple']($bases), $data);
		})();
		var 		$lambda5 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h3');
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda5, $m['TextStyleH3']);
		$m['TextStyleH4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '87df471b272fcf8e9a3f5999a9bb5dbe';
			$cls_definition['cmd'] = 'H4';
			$cls_definition['title'] = $m['translate']('H4');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH4', $p['tuple']($bases), $data);
		})();
		var 		$lambda6 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h4');
		};
		$lambda6['__name__'] = '$lambda6';

		$lambda6['__bind_type__'] = 0;
		$lambda6['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda6, $m['TextStyleH4']);
		$m['TextStyleH5'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'a4e358fb06862ab0468ba0f82a98b13f';
			$cls_definition['cmd'] = 'H5';
			$cls_definition['title'] = $m['translate']('H5');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH5', $p['tuple']($bases), $data);
		})();
		var 		$lambda7 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h5');
		};
		$lambda7['__name__'] = '$lambda7';

		$lambda7['__bind_type__'] = 0;
		$lambda7['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda7, $m['TextStyleH5']);
		$m['TextStyleH6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '15534e3175ef0642ff887af485baad2f';
			$cls_definition['cmd'] = 'H6';
			$cls_definition['title'] = $m['translate']('H6');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleH6', $p['tuple']($bases), $data);
		})();
		var 		$lambda8 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.h6');
		};
		$lambda8['__name__'] = '$lambda8';

		$lambda8['__bind_type__'] = 0;
		$lambda8['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda8, $m['TextStyleH6']);
		$m['TextStyleBlockQuote'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'f66a42a0b834a2fc51ae735d35f745f0';
			$cls_definition['cmd'] = 'BLOCKQUOTE';
			$cls_definition['title'] = $m['translate']('Blockqoute');
			var $bases = new Array($m['BasicFormatBlockAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleBlockQuote', $p['tuple']($bases), $data);
		})();
		$m['TextStyleJustifyCenter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'fe088088fae1a05cbb1a674b6be0ea39';
			$cls_definition['cmd'] = 'justifyCenter';
			$cls_definition['title'] = $m['translate']('Justifiy Center');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleJustifyCenter', $p['tuple']($bases), $data);
		})();
		var 		$lambda9 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.justifyCenter');
		};
		$lambda9['__name__'] = '$lambda9';

		$lambda9['__bind_type__'] = 0;
		$lambda9['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda9, $m['TextStyleJustifyCenter']);
		$m['TextStyleJustifyLeft'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'b42bceac0637ac215dc566f60866fae0';
			$cls_definition['cmd'] = 'justifyLeft';
			$cls_definition['title'] = $m['translate']('Justifiy Left');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleJustifyLeft', $p['tuple']($bases), $data);
		})();
		var 		$lambda10 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.justifyLeft');
		};
		$lambda10['__name__'] = '$lambda10';

		$lambda10['__bind_type__'] = 0;
		$lambda10['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda10, $m['TextStyleJustifyLeft']);
		$m['TextStyleJustifyRight'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '35cc8ddd6b8d1b28d6dba49d250aee7e';
			$cls_definition['cmd'] = 'justifyRight';
			$cls_definition['title'] = $m['translate']('Justifiy Right');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextStyleJustifyRight', $p['tuple']($bases), $data);
		})();
		var 		$lambda11 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'style.text.justifyRight');
		};
		$lambda11['__name__'] = '$lambda11';

		$lambda11['__bind_type__'] = 0;
		$lambda11['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda11, $m['TextStyleJustifyRight']);
		$m['TextInsertOrderedList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'a4c59d35cdc31f81e9621990eeeb30f0';
			$cls_definition['cmd'] = 'insertOrderedList';
			$cls_definition['title'] = $m['translate']('Insert an ordered List');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextInsertOrderedList', $p['tuple']($bases), $data);
		})();
		var 		$lambda12 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.orderedList');
		};
		$lambda12['__name__'] = '$lambda12';

		$lambda12['__bind_type__'] = 0;
		$lambda12['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda12, $m['TextInsertOrderedList']);
		$m['TextInsertUnorderedList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '2e37433549a91de797372ba5a5b9fd0f';
			$cls_definition['cmd'] = 'insertUnorderedList';
			$cls_definition['title'] = $m['translate']('Insert an unordered List');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextInsertUnorderedList', $p['tuple']($bases), $data);
		})();
		var 		$lambda13 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.unorderedList');
		};
		$lambda13['__name__'] = '$lambda13';

		$lambda13['__bind_type__'] = 0;
		$lambda13['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda13, $m['TextInsertUnorderedList']);
		$m['TextIndent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '5243f91ce4610bb20493c70a42429af3';
			$cls_definition['cmd'] = 'indent';
			$cls_definition['title'] = $m['translate']('Indent more');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextIndent', $p['tuple']($bases), $data);
		})();
		var 		$lambda14 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.indent');
		};
		$lambda14['__name__'] = '$lambda14';

		$lambda14['__bind_type__'] = 0;
		$lambda14['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda14, $m['TextIndent']);
		$m['TextOutdent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '52921c4a855022b605b074064197a292';
			$cls_definition['cmd'] = 'outdent';
			$cls_definition['title'] = $m['translate']('Indent less');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextOutdent', $p['tuple']($bases), $data);
		})();
		var 		$lambda15 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.outdent');
		};
		$lambda15['__name__'] = '$lambda15';

		$lambda15['__bind_type__'] = 0;
		$lambda15['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda15, $m['TextOutdent']);
		$m['TextRemoveFormat'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '806cc36bb4915d592de68eff6463dbff';
			$cls_definition['cmd'] = 'removeformat';
			$cls_definition['title'] = $m['translate']('Remove all formatting');
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
					if (self.prototype['__md5__'] !== '806cc36bb4915d592de68eff6463dbff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var node,i,$and1,$and3,$sub2,$sub1,$and2;
				self['execCommand']($p['getattr'](self, 'cmd'));
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and1=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and2=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and2):$and1))) {
					i = $p['__op_sub']($sub1=i,$sub2=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,x,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = $p['range']($constant_int_0, $constant_int_6);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						x = $iter2_nextval['$nextval'];
						$collcomp2['append']($p['sprintf']('H%s', x));
					}

	return $collcomp2;}()['__contains__']($p['getattr'](node, 'tagName')))) {
						self['execCommand']('formatBlock', 'div');
						return null;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextRemoveFormat', $p['tuple']($bases), $data);
		})();
		var 		$lambda16 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.removeformat');
		};
		$lambda16['__name__'] = '$lambda16';

		$lambda16['__bind_type__'] = 0;
		$lambda16['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda16, $m['TextRemoveFormat']);
		$m['TextInsertImageAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '7569b6ccc62b08649fbb500d9139e1ea';
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
					if (self.prototype['__md5__'] !== '7569b6ccc62b08649fbb500d9139e1ea') {
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

				$pyjs_kwargs_call($p['$$super']($m['TextInsertImageAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Image')]);
				self['__setitem__']('class', 'icon text image');
				self['__setitem__']('title', $m['translate']('Insert Image'));
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
					if (self.prototype['__md5__'] !== '7569b6ccc62b08649fbb500d9139e1ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var currentSelector;
				currentSelector = $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':true}, 'file']);
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(selectWdg, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					selectWdg = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7569b6ccc62b08649fbb500d9139e1ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dataUrl,$iter3_array,$and4,$and5,$add2,item,$iter3_idx,$iter3_iter,$iter3_type,$add1,$iter3_nextval;
				$p['printFunc'](['onSelectionActivated'], 1);
				if ($p['bool'](!$p['bool'](selection))) {
					return null;
				}
				$p['printFunc']([selection], 1);
				$iter3_iter = selection;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					item = $iter3_nextval['$nextval'];
					dataUrl = $p['sprintf']('/file/download/%s/%s', $p['tuple']([$p['getattr'](item, 'data')['__getitem__']('dlkey'), $p['getattr'](item, 'data')['__getitem__']('name')['$$replace']('"', '')]));
					if ($p['bool'](($p['bool']($and4=item['data']['keys']()['__contains__']('mimetype'))?$p['getattr'](item, 'data')['__getitem__']('mimetype')['startswith']('image/'):$and4))) {
						self['execCommand']('insertImage', dataUrl);
					}
					else {
						self['execCommand']('createLink', $p['__op_add']($add1=dataUrl,$add2='?download=1'));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['selectWdg'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.image');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '7569b6ccc62b08649fbb500d9139e1ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($m['BasicEditorAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextInsertImageAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TextInsertImageAction'], 'isSuitableFor'), $m['TextInsertImageAction']);
		$m['TextInsertLinkAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '2a32865cc409eda1bf86d09c2fd02cd4';
			$cls_definition['newLinkIdx'] = $constant_int_0;
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
					if (self.prototype['__md5__'] !== '2a32865cc409eda1bf86d09c2fd02cd4') {
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

				$pyjs_kwargs_call($p['$$super']($m['TextInsertLinkAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Link')]);
				self['__setitem__']('class', 'icon text link');
				self['__setitem__']('title', $m['translate']('Insert Link'));
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
					if (self.prototype['__md5__'] !== '2a32865cc409eda1bf86d09c2fd02cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var newLinkTarget;
				newLinkTarget = $p['sprintf']('#linkidx-%s-%s', $p['tuple']([$p['getattr']($m['TextInsertLinkAction'], 'newLinkIdx'), $m['time']()]));
				self['execCommand']('createLink', $p['sprintf']('#%s', newLinkTarget));
				self['parent']()['parent']()['linkEditor']['openLink'](newLinkTarget);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('createLink', function(dialog, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					dialog = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2a32865cc409eda1bf86d09c2fd02cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](value)) {
					self['parent']()['parent']()['editor']['focus']();
				}
				return null;
			}
	, 1, [null,null,['self'],['dialog'],['value']]);
			$cls_definition['createLink'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.link');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '2a32865cc409eda1bf86d09c2fd02cd4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			var $bases = new Array($m['BasicEditorAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextInsertLinkAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TextInsertLinkAction'], 'isSuitableFor'), $m['TextInsertLinkAction']);
		$m['CreateTablePopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '57563d6597493259313ea07f1cbd83ac';
			$method = $pyjs__bind_method2('__init__', function(targetNode) {
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
					targetNode = arguments[1];
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
					if (self.prototype['__md5__'] !== '57563d6597493259313ea07f1cbd83ac') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof targetNode != 'undefined') {
						if (targetNode !== null && typeof targetNode['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = targetNode;
							targetNode = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var l;
				$pyjs_kwargs_call($p['$$super']($m['CreateTablePopup'], self), '__init__', args, kwargs, [{}]);
				if (!( targetNode )) {
				   throw $p['AssertionError']();
				 }
				while ($p['bool'](!$p['bool']($p['dir'](targetNode)['__contains__']('innerHTML')))) {
					targetNode = $p['getattr'](targetNode, 'parentNode');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('targetNode', targetNode) : $p['setattr'](self, 'targetNode', targetNode); 
				self['__getitem__']('class')['append']('createtable');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rowInput', $m['html5']['Input']()) : $p['setattr'](self, 'rowInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'rowInput')['__setitem__']('type', 'number');
				$p['getattr'](self, 'rowInput')['__setitem__']('value', $constant_int_3);
				self['appendChild']($p['getattr'](self, 'rowInput'));
				l = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'rowInput')}, $m['translate']('Rows')]);
				l['__getitem__']('class')['append']('rowlbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colInput', $m['html5']['Input']()) : $p['setattr'](self, 'colInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'colInput')['__setitem__']('type', 'number');
				$p['getattr'](self, 'colInput')['__setitem__']('value', $constant_int_4);
				self['appendChild']($p['getattr'](self, 'colInput'));
				l = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'colInput')}, $m['translate']('Cols')]);
				l['__getitem__']('class')['append']('collbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('insertHeader', $m['html5']['Input']()) : $p['setattr'](self, 'insertHeader', $m['html5']['Input']()); 
				$p['getattr'](self, 'insertHeader')['__setitem__']('type', 'checkbox');
				self['appendChild']($p['getattr'](self, 'insertHeader'));
				l = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'insertHeader')}, $m['translate']('Insert Table Header')]);
				l['__getitem__']('class')['append']('headerlbl');
				self['appendChild'](l);
				self['appendChild']($pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doClose')}, 'Cancel']));
				self['appendChild']($pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'createTable')}, 'Create']));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['targetNode']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('doClose', function() {
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
					if (self.prototype['__md5__'] !== '57563d6597493259313ea07f1cbd83ac') {
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

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('targetNode', null) : $p['setattr'](self, 'targetNode', null); 
				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doClose'] = $method;
			$method = $pyjs__bind_method2('createTable', function() {
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
					if (self.prototype['__md5__'] !== '57563d6597493259313ea07f1cbd83ac') {
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
				var $iter5_nextval,$iter6_type,$iter5_array,cols,$iter5_iter,$iter4_type,$iter5_type,$iter6_iter,$iter4_iter,$iter6_nextval,rows,insertHeader,$iter5_idx,$iter6_idx,$add14,y,$iter6_array,$add17,$add10,$add11,$add12,$add13,$add18,c,$add15,$iter4_nextval,$add16,innerHtml,$iter4_idx,$add3,$add6,$add7,$add4,$add5,$iter4_array,x,$add8,$add9;
				rows = $p['int']($p['getattr'](self, 'rowInput')['__getitem__']('value'));
				cols = $p['int']($p['getattr'](self, 'colInput')['__getitem__']('value'));
				insertHeader = $p['getattr'](self, 'insertHeader')['__getitem__']('checked');
				innerHtml = '<table>';
				if ($p['bool'](insertHeader)) {
					innerHtml = $p['__op_add']($add3=innerHtml,$add4='<thead>');
					$iter4_iter = $p['range']($constant_int_0, cols);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						c = $iter4_nextval['$nextval'];
						innerHtml = $p['__op_add']($add5=innerHtml,$add6='<th>&nbsp;</th>');
					}
					innerHtml = $p['__op_add']($add7=innerHtml,$add8='</thead>');
				}
				$iter5_iter = $p['range']($constant_int_0, rows);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					x = $iter5_nextval['$nextval'];
					innerHtml = $p['__op_add']($add9=innerHtml,$add10='<tr>');
					$iter6_iter = $p['range']($constant_int_0, cols);
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						y = $iter6_nextval['$nextval'];
						innerHtml = $p['__op_add']($add11=innerHtml,$add12=$p['sprintf']('<td>%s - %s</td>', $p['tuple']([x, y])));
					}
					innerHtml = $p['__op_add']($add13=innerHtml,$add14='</tr>');
				}
				innerHtml = $p['__op_add']($add15=innerHtml,$add16='</table>');
				$p['getattr'](self, 'targetNode')['__is_instance__'] && typeof $p['getattr'](self, 'targetNode')['__setattr__'] == 'function' ? $p['getattr'](self, 'targetNode')['__setattr__']('innerHTML', $p['__op_add']($add17=$p['getattr']($p['getattr'](self, 'targetNode'), 'innerHTML'),$add18=innerHtml)) : $p['setattr']($p['getattr'](self, 'targetNode'), 'innerHTML', $p['__op_add']($add17=$p['getattr']($p['getattr'](self, 'targetNode'), 'innerHTML'),$add18=innerHtml)); 
				self['doClose']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['createTable'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CreateTablePopup', $p['tuple']($bases), $data);
		})();
		$m['TextInsertTableAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'bdcd36aa23cf591a88a67e27bbedea31';
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
					if (self.prototype['__md5__'] !== 'bdcd36aa23cf591a88a67e27bbedea31') {
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

				$pyjs_kwargs_call($p['$$super']($m['TextInsertTableAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Table')]);
				self['__setitem__']('class', 'icon text table');
				self['__setitem__']('title', $m['translate']('Insert Table'));
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
					if (self.prototype['__md5__'] !== 'bdcd36aa23cf591a88a67e27bbedea31') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var node;
				self['parent']()['parent']()['editor']['focus']();
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				if ($p['bool'](node)) {
					$m['CreateTablePopup'](node);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== 'bdcd36aa23cf591a88a67e27bbedea31') {
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
			return $p['_create_class']('TextInsertTableAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TextInsertTableAction'], 'isSuitableFor'), $m['TextInsertTableAction']);
		$m['TableInsertRowBeforeAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'ebb6b1fad514a51f0ba0acf488d6b398';
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
					if (self.prototype['__md5__'] !== 'ebb6b1fad514a51f0ba0acf488d6b398') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableInsertRowBeforeAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Table Row before')]);
				self['__setitem__']('class', 'icon text table newrow before');
				self['__setitem__']('title', $m['translate']('Insert Table Row before'));
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
					if (self.prototype['__md5__'] !== 'ebb6b1fad514a51f0ba0acf488d6b398') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var node,$and8,c,$iter7_nextval,i,$iter7_iter,$iter7_array,tr,$and6,$and7,$iter7_idx,$sub3,td,$iter7_type,$sub4;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and6=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and7=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and7):$and6))) {
					i = $p['__op_sub']($sub3=i,$sub4=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						tr = $m['html5']['document']['createElement']('tr');
						$iter7_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](node, 'children'), 'length'));
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							c = $iter7_nextval['$nextval'];
							td = $m['html5']['document']['createElement']('td');
							tr['appendChild'](td);
						}
						node['parentNode']['insertBefore'](tr, node);
						return null;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.newrow.before');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== 'ebb6b1fad514a51f0ba0acf488d6b398') {
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
			return $p['_create_class']('TableInsertRowBeforeAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableInsertRowBeforeAction'], 'isSuitableFor'), $m['TableInsertRowBeforeAction']);
		$m['TableInsertRowAfterAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '56cd024018c9a391e50b90c9df013cb9';
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
					if (self.prototype['__md5__'] !== '56cd024018c9a391e50b90c9df013cb9') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableInsertRowAfterAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Table Row after')]);
				self['__setitem__']('class', 'icon text table newrow after');
				self['__setitem__']('title', $m['translate']('Insert Table Row after'));
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
					if (self.prototype['__md5__'] !== '56cd024018c9a391e50b90c9df013cb9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var node,$and9,c,$iter8_idx,i,$iter8_array,tr,$iter8_iter,$and10,$and11,$iter8_nextval,$iter8_type,td,$sub6,$sub5;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and9=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and10=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and10):$and9))) {
					i = $p['__op_sub']($sub5=i,$sub6=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						tr = $m['html5']['document']['createElement']('tr');
						$iter8_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](node, 'children'), 'length'));
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							c = $iter8_nextval['$nextval'];
							td = $m['html5']['document']['createElement']('td');
							tr['appendChild'](td);
						}
						if ($p['bool']($p['getattr'](node, 'nextSibling'))) {
							node['parentNode']['insertBefore'](tr, $p['getattr'](node, 'nextSibling'));
						}
						else {
							node['parentNode']['appendChild'](tr);
						}
						return null;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.newrow.after');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '56cd024018c9a391e50b90c9df013cb9') {
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
			return $p['_create_class']('TableInsertRowAfterAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableInsertRowAfterAction'], 'isSuitableFor'), $m['TableInsertRowAfterAction']);
		$m['TableInsertColBeforeAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'a1daa1cc639737cf1630677d779876b7';
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
					if (self.prototype['__md5__'] !== 'a1daa1cc639737cf1630677d779876b7') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableInsertColBeforeAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Table Col before')]);
				self['__setitem__']('class', 'icon text table newcol before');
				self['__setitem__']('title', $m['translate']('Insert Table Col before'));
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
					if (self.prototype['__md5__'] !== 'a1daa1cc639737cf1630677d779876b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $iter10_nextval,tr,trChild,newTd,table,$iter10_iter,trChildIdx,$iter9_iter,$add20,$iter9_nextval,$iter9_idx,cellIdx,$sub8,td,$iter11_idx,$sub7,$iter9_type,node,$iter11_iter,$iter11_array,$iter10_idx,$iter12_array,$and12,$and13,$and16,$and17,$and14,$and15,$iter11_nextval,$add19,child,i,$iter12_type,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,$iter10_type,x,childIdx,$iter12_idx,$iter9_array;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				td = null;
				tr = null;
				table = null;
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and12=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and13=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and13):$and12))) {
					i = $p['__op_sub']($sub7=i,$sub8=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'))) {
						td = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						tr = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'))) {
						table = node;
						break;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				if ($p['bool'](($p['bool']($and15=td)?($p['bool']($and16=tr)?table:$and16):$and15))) {
					cellIdx = $constant_int_0;
					$iter9_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						x = $iter9_nextval['$nextval'];
						if ($p['bool']($p['op_eq'](td, tr['children']['item'](x)))) {
							break;
						}
						cellIdx = $p['__op_add']($add19=cellIdx,$add20=$constant_int_1);
					}
					$iter10_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						trChildIdx = $iter10_nextval['$nextval'];
						trChild = table['children']['item'](trChildIdx);
						if ($p['bool'](!$p['bool']($p['dir'](trChild)['__contains__']('tagName')))) {
							continue;
						}
						if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'))) {
							$iter11_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
							while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter11_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									newTd = $m['html5']['document']['createElement']('th');
									child['insertBefore'](newTd, child['children']['item'](cellIdx));
								}
							}
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'))) {
							$iter12_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
							while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter12_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									newTd = $m['html5']['document']['createElement']('td');
									child['insertBefore'](newTd, child['children']['item'](cellIdx));
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.newcol.before');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== 'a1daa1cc639737cf1630677d779876b7') {
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
			return $p['_create_class']('TableInsertColBeforeAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableInsertColBeforeAction'], 'isSuitableFor'), $m['TableInsertColBeforeAction']);
		$m['TableInsertColAfterAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '4b3a0051bc468e58ee234d716758e439';
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
					if (self.prototype['__md5__'] !== '4b3a0051bc468e58ee234d716758e439') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableInsertColAfterAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Insert Table Col after')]);
				self['__setitem__']('class', 'icon text table newcol after');
				self['__setitem__']('title', $m['translate']('Insert Table Col after'));
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
					if (self.prototype['__md5__'] !== '4b3a0051bc468e58ee234d716758e439') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $add25,child,newTd,$iter16_idx,$iter13_idx,table,$and23,$and22,$and21,$and20,$iter16_iter,trChildIdx,$add29,$add28,$iter15_iter,$iter16_type,$add21,$add22,tr,$add24,cellIdx,$add26,$sub9,$iter16_nextval,td,$iter13_type,node,$iter14_array,$iter15_array,$iter14_type,$sub10,$iter14_iter,trChild,$and18,$and19,$iter14_idx,$iter14_nextval,$iter16_array,$iter13_nextval,$iter13_iter,i,$add30,$iter15_idx,$add27,$iter13_array,$iter15_nextval,$iter15_type,x,childIdx,$add23;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				td = null;
				tr = null;
				table = null;
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and18=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and19=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and19):$and18))) {
					i = $p['__op_sub']($sub9=i,$sub10=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'))) {
						td = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						tr = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'))) {
						table = node;
						break;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				if ($p['bool'](($p['bool']($and21=td)?($p['bool']($and22=tr)?table:$and22):$and21))) {
					cellIdx = $constant_int_0;
					$iter13_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						x = $iter13_nextval['$nextval'];
						if ($p['bool']($p['op_eq'](td, tr['children']['item'](x)))) {
							break;
						}
						cellIdx = $p['__op_add']($add21=cellIdx,$add22=$constant_int_1);
					}
					$iter14_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						trChildIdx = $iter14_nextval['$nextval'];
						trChild = table['children']['item'](trChildIdx);
						if ($p['bool'](!$p['bool']($p['dir'](trChild)['__contains__']('tagName')))) {
							continue;
						}
						if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'))) {
							$iter15_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
							while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter15_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									newTd = $m['html5']['document']['createElement']('th');
									if ($p['bool'](($p['cmp']($p['__op_add']($add23=cellIdx,$add24=$constant_int_1), $p['getattr']($p['getattr'](child, 'children'), 'length')) == -1))) {
										child['insertBefore'](newTd, child['children']['item']($p['__op_add']($add25=cellIdx,$add26=$constant_int_1)));
									}
									else {
										child['appendChild'](newTd);
									}
								}
							}
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'))) {
							$iter16_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
							while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter16_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									newTd = $m['html5']['document']['createElement']('td');
									if ($p['bool'](($p['cmp']($p['__op_add']($add27=cellIdx,$add28=$constant_int_1), $p['getattr']($p['getattr'](child, 'children'), 'length')) == -1))) {
										child['insertBefore'](newTd, child['children']['item']($p['__op_add']($add29=cellIdx,$add30=$constant_int_1)));
									}
									else {
										child['appendChild'](newTd);
									}
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.newcol.after');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '4b3a0051bc468e58ee234d716758e439') {
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
			return $p['_create_class']('TableInsertColAfterAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableInsertColAfterAction'], 'isSuitableFor'), $m['TableInsertColAfterAction']);
		$m['TableRemoveRowAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '0e5a88467c0bfc7233aa5b1500c31e75';
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
					if (self.prototype['__md5__'] !== '0e5a88467c0bfc7233aa5b1500c31e75') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableRemoveRowAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Remove Table Row')]);
				self['__setitem__']('class', 'icon text table remove row');
				self['__setitem__']('title', $m['translate']('Remove Table Row'));
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
					if (self.prototype['__md5__'] !== '0e5a88467c0bfc7233aa5b1500c31e75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var node,i,$sub12,$sub11,$and26,$and25,$and24;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and24=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and25=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and25):$and24))) {
					i = $p['__op_sub']($sub11=i,$sub12=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						node['parentNode']['removeChild'](node);
						return null;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.remove.row');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '0e5a88467c0bfc7233aa5b1500c31e75') {
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
			return $p['_create_class']('TableRemoveRowAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableRemoveRowAction'], 'isSuitableFor'), $m['TableRemoveRowAction']);
		$m['TableRemoveColAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '8b9f962175643c6eb63dd9b28a68a767';
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
					if (self.prototype['__md5__'] !== '8b9f962175643c6eb63dd9b28a68a767') {
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

				$pyjs_kwargs_call($p['$$super']($m['TableRemoveColAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Remove Table Col')]);
				self['__setitem__']('class', 'icon text table remove col');
				self['__setitem__']('title', $m['translate']('Remove Table Col'));
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
					if (self.prototype['__md5__'] !== '8b9f962175643c6eb63dd9b28a68a767') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $iter17_nextval,$iter20_nextval,trChild,$iter20_array,$and29,$and28,table,$iter17_type,$and27,trChildIdx,$iter17_iter,tr,$iter19_nextval,cellIdx,$iter19_iter,$iter18_idx,$iter20_idx,td,$iter18_nextval,node,$iter20_iter,$iter18_iter,$sub13,$sub14,$iter18_type,$iter17_array,$iter20_type,$iter17_idx,$iter19_array,$and30,$and31,$and32,child,$iter19_idx,$iter18_array,i,$add31,$add32,$iter19_type,x,childIdx;
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				td = null;
				tr = null;
				table = null;
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and27=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and28=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self['parent']()['parent'](), 'editor'), 'element')):$and28):$and27))) {
					i = $p['__op_sub']($sub13=i,$sub14=$constant_int_1);
					if ($p['bool'](!$p['bool']($p['dir'](node)['__contains__']('tagName')))) {
						node = $p['getattr'](node, 'parentNode');
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'))) {
						td = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'))) {
						tr = node;
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'))) {
						table = node;
						break;
					}
					node = $p['getattr'](node, 'parentNode');
				}
				if ($p['bool'](($p['bool']($and30=td)?($p['bool']($and31=tr)?table:$and31):$and30))) {
					cellIdx = $constant_int_0;
					$iter17_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
						x = $iter17_nextval['$nextval'];
						if ($p['bool']($p['op_eq'](td, tr['children']['item'](x)))) {
							break;
						}
						cellIdx = $p['__op_add']($add31=cellIdx,$add32=$constant_int_1);
					}
					$iter18_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						trChildIdx = $iter18_nextval['$nextval'];
						trChild = table['children']['item'](trChildIdx);
						if ($p['bool'](!$p['bool']($p['dir'](trChild)['__contains__']('tagName')))) {
							continue;
						}
						if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'))) {
							$iter19_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
							while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter19_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									child['removeChild'](child['children']['item'](cellIdx));
								}
							}
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'))) {
							$iter20_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
							$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
							while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
								childIdx = $iter20_nextval['$nextval'];
								child = trChild['children']['item'](childIdx);
								if ($p['bool'](!$p['bool']($p['dir'](child)['__contains__']('tagName')))) {
									continue;
								}
								if ($p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'))) {
									child['removeChild'](child['children']['item'](cellIdx));
								}
							}
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.table.remove.col');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
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
					if (self.prototype['__md5__'] !== '8b9f962175643c6eb63dd9b28a68a767') {
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
			return $p['_create_class']('TableRemoveColAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TableRemoveColAction'], 'isSuitableFor'), $m['TableRemoveColAction']);
		$m['TextSaveAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'bda3f754141ffac2fdf26638ddd13293';
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
					if (self.prototype['__md5__'] !== 'bda3f754141ffac2fdf26638ddd13293') {
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

				$pyjs_kwargs_call($p['$$super']($m['TextSaveAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Save')]);
				self['__setitem__']('class', 'icon text save');
				self['__setitem__']('title', $m['translate']('Save'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
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
					if (self.prototype['__md5__'] !== 'bda3f754141ffac2fdf26638ddd13293') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parent']()['parent']()['saveText']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.save');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextSaveAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TextSaveAction'], 'isSuitableFor'), $m['TextSaveAction']);
		$m['TextAbortAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '032b193548c2f0f31809203e85bda3ce';
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
					if (self.prototype['__md5__'] !== '032b193548c2f0f31809203e85bda3ce') {
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

				$pyjs_kwargs_call($p['$$super']($m['TextAbortAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Abort')]);
				self['__setitem__']('class', 'icon text abort');
				self['__setitem__']('title', $m['translate']('Abort'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
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
					if (self.prototype['__md5__'] !== '032b193548c2f0f31809203e85bda3ce') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](self['parent']()['parent']()['editor']['changed']())) {
					$pyjs_kwargs_call($m['html5']['ext']['popup'], 'YesNoDialog', null, null, [{'yesCallback':$p['getattr'](self, 'doAbort')}, $m['translate']('Any changes will be lost. Do you really want to abort?')]);
				}
				else {
					self['doAbort']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('doAbort', function() {
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
					if (self.prototype['__md5__'] !== '032b193548c2f0f31809203e85bda3ce') {
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

				self['parent']()['parent']()['abortText']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doAbort'] = $method;
			$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

				return $p['op_eq'](actionName, 'text.abort');
			}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
			$cls_definition['isSuitableFor'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextAbortAction', $p['tuple']($bases), $data);
		})();
		$m['actionDelegateSelector']['insert']($constant_int_1, $p['getattr']($m['TextAbortAction'], 'isSuitableFor'), $m['TextAbortAction']);
		$m['LinkEditor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'c737fcaf02ea30b2137ae30b6bd25122';
			$cls_definition['newLinkIdx'] = $constant_int_0;
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
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
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
				var l;
				$pyjs_kwargs_call($p['$$super']($m['LinkEditor'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('linkeditor');
				self['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linkTxt', $m['html5']['Input']()) : $p['setattr'](self, 'linkTxt', $m['html5']['Input']()); 
				$p['getattr'](self, 'linkTxt')['__setitem__']('type', 'text');
				self['appendChild']($p['getattr'](self, 'linkTxt'));
				l = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'linkTxt')}, $m['translate']('URL')]);
				l['__getitem__']('class')['append']('urllbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('newTab', $m['html5']['Input']()) : $p['setattr'](self, 'newTab', $m['html5']['Input']()); 
				$p['getattr'](self, 'newTab')['__setitem__']('type', 'checkbox');
				self['appendChild']($p['getattr'](self, 'newTab'));
				l = $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'newTab')}, $m['translate']('New window')]);
				l['__getitem__']('class')['append']('newwindowlbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', null) : $p['setattr'](self, 'currentElem', null); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getAFromTagStack', function(tagStack) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagStack = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter21_idx,$iter21_nextval,elem,$iter21_type,$iter21_iter,$iter21_array;
				$iter21_iter = tagStack;
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					elem = $iter21_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['dir'](elem)['__contains__']('tagName')))) {
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'A'))) {
						return elem;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['tagStack']]);
			$cls_definition['getAFromTagStack'] = $method;
			$method = $pyjs__bind_method2('onCursorMoved', function(tagStack) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagStack = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newElem,$and38,$and34,$and35,$and36,$and37,$and33;
				newElem = self['getAFromTagStack'](tagStack);
				if ($p['bool'](($p['bool']($and33=!$p['op_is'](newElem, null))?!$p['op_is']($p['getattr'](self, 'currentElem'), null):$and33))) {
					self['doClose']();
					self['doOpen'](newElem);
				}
				else if ($p['bool'](($p['bool']($and35=$p['op_is']($p['getattr'](self, 'currentElem'), null))?!$p['op_is'](newElem, null):$and35))) {
					self['doOpen'](newElem);
				}
				else if ($p['bool'](($p['bool']($and37=!$p['op_is']($p['getattr'](self, 'currentElem'), null))?$p['op_is'](newElem, null):$and37))) {
					self['doClose']();
				}
				return null;
			}
	, 1, [null,null,['self'],['tagStack']]);
			$cls_definition['onCursorMoved'] = $method;
			$method = $pyjs__bind_method2('doOpen', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', elem) : $p['setattr'](self, 'currentElem', elem); 
				$p['getattr'](self, 'linkTxt')['__setitem__']('value', $p['getattr']($p['getattr'](self, 'currentElem'), 'href'));
				$p['getattr'](self, 'newTab')['__setitem__']('checked', $p['op_eq']($p['getattr']($p['getattr'](self, 'currentElem'), 'target'), '_blank'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isOpen', true) : $p['setattr'](self, 'isOpen', true); 
				self['__getitem__']('style')['__setitem__']('display', 'block');
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['doOpen'] = $method;
			$method = $pyjs__bind_method2('doClose', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['op_is']($p['getattr'](self, 'currentElem'), null))) {
					return null;
				}
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('href', $p['getattr'](self, 'linkTxt')['__getitem__']('value')) : $p['setattr']($p['getattr'](self, 'currentElem'), 'href', $p['getattr'](self, 'linkTxt')['__getitem__']('value')); 
				if ($p['bool']($p['getattr'](self, 'newTab')['__getitem__']('checked'))) {
					$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('target', '_blank') : $p['setattr']($p['getattr'](self, 'currentElem'), 'target', '_blank'); 
				}
				else {
					$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('target', '_self') : $p['setattr']($p['getattr'](self, 'currentElem'), 'target', '_self'); 
				}
				self['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', null) : $p['setattr'](self, 'currentElem', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doClose'] = $method;
			$method = $pyjs__bind_method2('findHref', function(linkTarget, elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					linkTarget = arguments[1];
					elem = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$iter22_array,$or2,child,$iter22_nextval,$iter22_idx,r,$iter22_type,x,$iter22_iter;
				if ($p['bool']($p['dir'](elem)['__contains__']('tagName'))) {
					if ($p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'A'))) {
						if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](elem, 'href'), linkTarget))?$or1:elem['href']['endswith'](linkTarget)))) {
							return elem;
						}
					}
				}
				if ($p['bool']($p['dir'](elem)['__contains__']('children'))) {
					$iter22_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](elem, 'children'), 'length'));
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						x = $iter22_nextval['$nextval'];
						child = elem['children']['item'](x);
						r = self['findHref'](linkTarget, child);
						if ($p['bool'](!$p['op_is'](r, null))) {
							return r;
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['linkTarget'],['elem']]);
			$cls_definition['findHref'] = $method;
			$method = $pyjs__bind_method2('openLink', function(linkTarget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					linkTarget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c737fcaf02ea30b2137ae30b6bd25122') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['doOpen'](self['findHref'](linkTarget, $p['getattr']($p['getattr'](self['parent'](), 'editor'), 'element')));
				$p['getattr'](self, 'linkTxt')['__setitem__']('value', '');
				self['linkTxt']['focus']();
				return null;
			}
	, 1, [null,null,['self'],['linkTarget']]);
			$cls_definition['openLink'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LinkEditor', $p['tuple']($bases), $data);
		})();
		$m['ImageEditor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'e609ba212355753273da80c92b44ae18';
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
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
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
				var l;
				$pyjs_kwargs_call($p['$$super']($m['ImageEditor'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('imageeditor');
				self['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widthInput', $m['html5']['Input']()) : $p['setattr'](self, 'widthInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'widthInput')['__setitem__']('type', 'number');
				self['appendChild']($p['getattr'](self, 'widthInput'));
				l = $m['html5']['Label']($m['translate']('Width'), $p['getattr'](self, 'widthInput'));
				l['__getitem__']('class')['append']('widthlbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keepAspectRatio', $m['html5']['Input']()) : $p['setattr'](self, 'keepAspectRatio', $m['html5']['Input']()); 
				$p['getattr'](self, 'keepAspectRatio')['__setitem__']('type', 'checkbox');
				self['appendChild']($p['getattr'](self, 'keepAspectRatio'));
				l = $m['html5']['Label']($m['translate']('Keep aspect ratio'), $p['getattr'](self, 'keepAspectRatio'));
				l['__getitem__']('class')['append']('aspectlbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('heightInput', $m['html5']['Input']()) : $p['setattr'](self, 'heightInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'heightInput')['__setitem__']('type', 'number');
				self['appendChild']($p['getattr'](self, 'heightInput'));
				l = $m['html5']['Label']($m['translate']('Height'), $p['getattr'](self, 'heightInput'));
				l['__getitem__']('class')['append']('heightlbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('titleInput', $m['html5']['Input']()) : $p['setattr'](self, 'titleInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'titleInput')['__setitem__']('type', 'text');
				self['appendChild']($p['getattr'](self, 'titleInput'));
				l = $m['html5']['Label']($m['translate']('Title'), $p['getattr'](self, 'titleInput'));
				l['__getitem__']('class')['append']('titlelbl');
				self['appendChild'](l);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', null) : $p['setattr'](self, 'currentElem', null); 
				self['sinkEvent']('onChange');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
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
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul2,$mul1,aspect,$div2,$div3,$div1,$div4;
				$p['$$super']($m['ImageEditor'], self)['onChange'](event);
				aspect = (typeof ($div1=$p['getattr']($p['getattr'](self, 'currentElem'), 'naturalWidth'))==typeof ($div2=$p['getattr']($p['getattr'](self, 'currentElem'), 'naturalHeight')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr']($p['getattr'](self, 'widthInput'), 'element')))) {
					if ($p['bool']($p['getattr'](self, 'keepAspectRatio')['__getitem__']('checked'))) {
						$p['getattr'](self, 'heightInput')['__setitem__']('value', $p['int']((typeof ($div3=$p['float']($p['getattr'](self, 'widthInput')['__getitem__']('value')))==typeof ($div4=aspect) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4))));
					}
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr']($p['getattr'](self, 'heightInput'), 'element')))) {
					if ($p['bool']($p['getattr'](self, 'keepAspectRatio')['__getitem__']('checked'))) {
						$p['getattr'](self, 'widthInput')['__setitem__']('value', $p['int']((typeof ($mul1=$p['float']($p['getattr'](self, 'heightInput')['__getitem__']('value')))==typeof ($mul2=aspect) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2))));
					}
				}
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('width', $p['int']($p['getattr'](self, 'widthInput')['__getitem__']('value'))) : $p['setattr']($p['getattr'](self, 'currentElem'), 'width', $p['int']($p['getattr'](self, 'widthInput')['__getitem__']('value'))); 
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('height', $p['int']($p['getattr'](self, 'heightInput')['__getitem__']('value'))) : $p['setattr']($p['getattr'](self, 'currentElem'), 'height', $p['int']($p['getattr'](self, 'heightInput')['__getitem__']('value'))); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('getImgFromTagStack', function(tagStack) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagStack = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter23_nextval,$iter23_iter,elem,$iter23_array,$iter23_idx;
				$iter23_iter = tagStack;
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
					elem = $iter23_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['dir'](elem)['__contains__']('tagName')))) {
						continue;
					}
					if ($p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'IMG'))) {
						return elem;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['tagStack']]);
			$cls_definition['getImgFromTagStack'] = $method;
			$method = $pyjs__bind_method2('onCursorMoved', function(tagStack) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagStack = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newElem,$and41,$and40,$and43,$and42,$and39,$and44;
				newElem = self['getImgFromTagStack'](tagStack);
				if ($p['bool'](($p['bool']($and39=!$p['op_is'](newElem, null))?!$p['op_is']($p['getattr'](self, 'currentElem'), null):$and39))) {
					self['doClose']();
					self['doOpen'](newElem);
				}
				else if ($p['bool'](($p['bool']($and41=$p['op_is']($p['getattr'](self, 'currentElem'), null))?!$p['op_is'](newElem, null):$and41))) {
					self['doOpen'](newElem);
				}
				else if ($p['bool'](($p['bool']($and43=!$p['op_is']($p['getattr'](self, 'currentElem'), null))?$p['op_is'](newElem, null):$and43))) {
					self['doClose']();
				}
				return null;
			}
	, 1, [null,null,['self'],['tagStack']]);
			$cls_definition['onCursorMoved'] = $method;
			$method = $pyjs__bind_method2('doOpen', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', elem) : $p['setattr'](self, 'currentElem', elem); 
				self['__getitem__']('style')['__setitem__']('display', '');
				$p['getattr'](self, 'heightInput')['__setitem__']('value', $p['getattr'](elem, 'height'));
				$p['getattr'](self, 'widthInput')['__setitem__']('value', $p['getattr'](elem, 'width'));
				$p['getattr'](self, 'titleInput')['__setitem__']('value', $p['getattr'](elem, 'title'));
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['doOpen'] = $method;
			$method = $pyjs__bind_method2('doClose', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['op_is']($p['getattr'](self, 'currentElem'), null))) {
					return null;
				}
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('width', $p['int']($p['getattr'](self, 'widthInput')['__getitem__']('value'))) : $p['setattr']($p['getattr'](self, 'currentElem'), 'width', $p['int']($p['getattr'](self, 'widthInput')['__getitem__']('value'))); 
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('height', $p['int']($p['getattr'](self, 'heightInput')['__getitem__']('value'))) : $p['setattr']($p['getattr'](self, 'currentElem'), 'height', $p['int']($p['getattr'](self, 'heightInput')['__getitem__']('value'))); 
				$p['getattr'](self, 'currentElem')['__is_instance__'] && typeof $p['getattr'](self, 'currentElem')['__setattr__'] == 'function' ? $p['getattr'](self, 'currentElem')['__setattr__']('title', $p['getattr'](self, 'titleInput')['__getitem__']('value')) : $p['setattr']($p['getattr'](self, 'currentElem'), 'title', $p['getattr'](self, 'titleInput')['__getitem__']('value')); 
				self['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentElem', null) : $p['setattr'](self, 'currentElem', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doClose'] = $method;
			$method = $pyjs__bind_method2('findImg', function(linkTarget, elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					linkTarget = arguments[1];
					elem = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3,$iter24_idx,child,$iter24_type,$iter24_array,x,r,$iter24_iter,$iter24_nextval;
				if ($p['bool']($p['dir'](elem)['__contains__']('tagName'))) {
					if ($p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'IMG'))) {
						if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](elem, 'href'), linkTarget))?$or3:elem['href']['endswith'](linkTarget)))) {
							return elem;
						}
					}
				}
				if ($p['bool']($p['dir'](elem)['__contains__']('children'))) {
					$iter24_iter = $p['range']($constant_int_0, $p['getattr']($p['getattr'](elem, 'children'), 'length'));
					$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
					while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
						x = $iter24_nextval['$nextval'];
						child = elem['children']['item'](x);
						r = self['findImg'](linkTarget, child);
						if ($p['bool'](!$p['op_is'](r, null))) {
							return r;
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['linkTarget'],['elem']]);
			$cls_definition['findImg'] = $method;
			$method = $pyjs__bind_method2('openLink', function(linkTarget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					linkTarget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e609ba212355753273da80c92b44ae18') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['doOpen'](self['findHref'](linkTarget, $p['getattr']($p['getattr'](self['parent'](), 'editor'), 'element')));
				$p['getattr'](self, 'linkTxt')['__setitem__']('value', '');
				self['linkTxt']['focus']();
				return null;
			}
	, 1, [null,null,['self'],['linkTarget']]);
			$cls_definition['openLink'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageEditor', $p['tuple']($bases), $data);
		})();
		$m['TextUndoAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '16d3d545060bbc585e77a5cd8aabd6eb';
			$cls_definition['cmd'] = 'undo';
			$cls_definition['title'] = $m['translate']('Undo the last action');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextUndoAction', $p['tuple']($bases), $data);
		})();
		var 		$lambda17 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.undo');
		};
		$lambda17['__name__'] = '$lambda17';

		$lambda17['__bind_type__'] = 0;
		$lambda17['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda17, $m['TextUndoAction']);
		$m['TextRedoAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = '243cc1c0b9befc087722891a75a4be57';
			$cls_definition['cmd'] = 'redo';
			$cls_definition['title'] = $m['translate']('Redo the last undone action');
			var $bases = new Array($m['BasicTextAction']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextRedoAction', $p['tuple']($bases), $data);
		})();
		var 		$lambda18 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.redo');
		};
		$lambda18['__name__'] = '$lambda18';

		$lambda18['__bind_type__'] = 0;
		$lambda18['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda18, $m['TextRedoAction']);
		$m['FlipViewAction'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'bb8e2629f0c2b7b108f9ce9f64d6cf4c';
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
					if (self.prototype['__md5__'] !== 'bb8e2629f0c2b7b108f9ce9f64d6cf4c') {
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

				$pyjs_kwargs_call($p['$$super']($m['FlipViewAction'], self), '__init__', args, kwargs, [{}, $m['translate']('Flip View')]);
				self['__setitem__']('class', 'icon flipview');
				self['__setitem__']('title', $m['translate']('Flip View'));
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
					if (self.prototype['__md5__'] !== 'bb8e2629f0c2b7b108f9ce9f64d6cf4c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FlipViewAction'], self)['onAttach']();
				if ($p['bool']($p['getattr'](self['parent']()['parent'](), 'isWysiwygMode'))) {
					self['__getitem__']('class')['append']('is_wysiwyg');
				}
				else {
					self['__getitem__']('class')['append']('is_htmlview');
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
					if (self.prototype['__md5__'] !== 'bb8e2629f0c2b7b108f9ce9f64d6cf4c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				if ($p['bool'](self['__getitem__']('class')['__contains__']('is_wysiwyg'))) {
					self['__getitem__']('class')['remove']('is_wysiwyg');
				}
				if ($p['bool'](self['__getitem__']('class')['__contains__']('is_htmlview'))) {
					self['__getitem__']('class')['remove']('is_htmlview');
				}
				if ($p['bool'](self['parent']()['parent']()['flipView']())) {
					self['__getitem__']('class')['append']('is_wysiwyg');
				}
				else {
					self['__getitem__']('class')['append']('is_htmlview');
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
					if (self.prototype['__md5__'] !== 'bb8e2629f0c2b7b108f9ce9f64d6cf4c') {
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
			return $p['_create_class']('FlipViewAction', $p['tuple']($bases), $data);
		})();
		var 		$lambda19 = function(modul, handler, actionName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			return $p['op_eq'](actionName, 'text.flipView');
		};
		$lambda19['__name__'] = '$lambda19';

		$lambda19['__bind_type__'] = 0;
		$lambda19['__args__'] = [null,null,['modul'],['handler'],['actionName']];
		$m['actionDelegateSelector']['insert']($constant_int_1, $lambda19, $m['FlipViewAction']);
		$m['Editor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'e097ebe81e5808ce7f5daf61e100d70f';
			$method = $pyjs__bind_method2('__init__', function(html) {
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
					html = arguments[1];
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
					if (self.prototype['__md5__'] !== 'e097ebe81e5808ce7f5daf61e100d70f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = html;
							html = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $assign1;
				$pyjs_kwargs_call($p['$$super']($m['Editor'], self), '__init__', args, kwargs, [{}]);
				self['__setitem__']('contenteditable', true);
				self['addClass']('contentdiv');
				$assign1 = html;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initial_txt', $assign1) : $p['setattr'](self, 'initial_txt', $assign1); 
				$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('innerHTML', $assign1) : $p['setattr']($p['getattr'](self, 'element'), 'innerHTML', $assign1); 
				self['sinkEvent']('onBlur', 'onFocus', 'onKeyDown');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['html']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('changed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e097ebe81e5808ce7f5daf61e100d70f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return !$p['op_eq']($p['getattr'](self, 'initial_txt'), $p['getattr']($p['getattr'](self, 'element'), 'innerHTML'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['changed'] = $method;
			$method = $pyjs__bind_method2('toggleSelection', function(tagName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tagName = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e097ebe81e5808ce7f5daf61e100d70f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and49,$and48,$and45,$and46,current,range,$pyjs_try_err,$$new,sel,$and47;
				sel = (typeof eval == "undefined"?$m['eval']:eval)('window.top.document.getSelection()');
				range = sel['getRangeAt']($constant_int_0);
				current = range['extractContents']();
				try {
					$p['printFunc']([current], 1);
					$p['printFunc']([$p['getattr'](current, 'nodeType')], 1);
					$p['printFunc']([$p['getattr'](current, 'tagName')], 1);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				if ($p['bool'](($p['bool']($and45=$p['op_eq']($p['getattr'](current, 'nodeType'), $constant_int_11))?$p['getattr'](current, 'firstElementChild'):$and45))) {
					current = $p['getattr'](current, 'firstElementChild');
				}
				try {
					$p['printFunc']([current], 1);
					$p['printFunc']([$p['getattr'](current, 'nodeType')], 1);
					$p['printFunc']([$p['getattr'](current, 'tagName')], 1);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
				if ($p['bool'](($p['bool']($and47=current)?($p['bool']($and48=$p['op_eq']($p['getattr'](current, 'nodeType'), $constant_int_1))?$p['op_eq']($p['str']($p['getattr'](current, 'tagName'))['upper'](), tagName['upper']()):$and48):$and47))) {
					$p['printFunc'](['Toggle OFF'], 1);
					if ($p['bool'](current['hasChildNodes']())) {
						while ($p['bool']($p['getattr'](current, 'firstChild'))) {
							range['insertNode']($p['getattr'](current, 'firstChild'));
						}
					}
				}
				else {
					$p['printFunc'](['Toggle ON'], 1);
					$$new = (typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.top.document.createElement("%s")', tagName));
					$$new['appendChild'](current);
					range['insertNode']($$new);
				}
				$p['printFunc']([$p['sprintf']('%s done', tagName)], 1);
				return null;
			}
	, 1, [null,null,['self'],['tagName']]);
			$cls_definition['toggleSelection'] = $method;
			$method = $pyjs__bind_method2('execCommand', function(commandName, valueArgument) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					commandName = arguments[1];
					valueArgument = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e097ebe81e5808ce7f5daf61e100d70f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof valueArgument == 'undefined') valueArgument=arguments['callee']['__args__'][4][1];

				if ($p['bool']($p['op_is'](valueArgument, null))) {
					valueArgument = 'null';
				}
				else {
					valueArgument = $p['sprintf']('"%s"', $p['str'](valueArgument));
				}
				$p['printFunc']([$p['sprintf']('execCommand("%s", false, %s)', $p['tuple']([commandName, valueArgument]))], 1);
				return $p['bool']((typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.top.document.execCommand("%s", false, %s)', $p['tuple']([commandName, valueArgument]))));
			}
	, 1, [null,null,['self'],['commandName'],['valueArgument', null]]);
			$cls_definition['execCommand'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Editor', $p['tuple']($bases), $data);
		})();
		$m['Wysiwyg'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.wysiwyg';
			$cls_definition['__md5__'] = 'cffed2a0ab8c3426c390cd0e662e5b3f';
			$method = $pyjs__bind_method2('__init__', function(editHtml, actionBarHint) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					editHtml = arguments[1];
					actionBarHint = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof actionBarHint != 'undefined') {
						if (actionBarHint !== null && typeof actionBarHint['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = actionBarHint;
							actionBarHint = arguments[3];
						}
					} else 					if (typeof editHtml != 'undefined') {
						if (editHtml !== null && typeof editHtml['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = editHtml;
							editHtml = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof actionBarHint == 'undefined') actionBarHint=arguments['callee']['__args__'][4][1];
				var c,$iter26_idx,$iter26_nextval,$add33,$add36,$add34,$add35,$iter26_type,$iter26_array,$iter26_iter;
				$pyjs_kwargs_call($p['$$super']($m['Wysiwyg'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorMovedEvent', $m['EventDispatcher']('cursorMoved')) : $p['setattr'](self, 'cursorMovedEvent', $m['EventDispatcher']('cursorMoved')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('saveTextEvent', $m['EventDispatcher']('saveText')) : $p['setattr'](self, 'saveTextEvent', $m['EventDispatcher']('saveText')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('abortTextEvent', $m['EventDispatcher']('abortText')) : $p['setattr'](self, 'abortTextEvent', $m['EventDispatcher']('abortText')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textActions', $p['__op_add']($add35=$p['__op_add']($add33=$p['list'](['style.text.bold', 'style.text.italic']),$add34=function(){
					var $iter25_nextval,$iter25_array,$collcomp3,$iter25_iter,$iter25_idx,x,$iter25_type;
	$collcomp3 = $p['list']();
				$iter25_iter = $p['range']($constant_int_0, $constant_int_4);
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					x = $iter25_nextval['$nextval'];
					$collcomp3['append']($p['sprintf']('style.text.h%s', x));
				}

	return $collcomp3;}()),$add36=$p['list'](['text.removeformat', 'style.text.justifyCenter', 'style.text.justifyLeft', 'style.text.justifyRight', 'style.text.blockquote', 'text.orderedList', 'text.unorderedList', 'text.indent', 'text.outdent', 'text.image', 'text.link', 'text.table', 'text.flipView', 'text.undo', 'text.redo', 'text.abort', 'text.save']))) : $p['setattr'](self, 'textActions', $p['__op_add']($add35=$p['__op_add']($add33=$p['list'](['style.text.bold', 'style.text.italic']),$add34=function(){
					var $iter25_nextval,$iter25_array,$collcomp3,$iter25_iter,$iter25_idx,x,$iter25_type;
	$collcomp3 = $p['list']();
				$iter25_iter = $p['range']($constant_int_0, $constant_int_4);
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					x = $iter25_nextval['$nextval'];
					$collcomp3['append']($p['sprintf']('style.text.h%s', x));
				}

	return $collcomp3;}()),$add36=$p['list'](['text.removeformat', 'style.text.justifyCenter', 'style.text.justifyLeft', 'style.text.justifyRight', 'style.text.blockquote', 'text.orderedList', 'text.unorderedList', 'text.indent', 'text.outdent', 'text.image', 'text.link', 'text.table', 'text.flipView', 'text.undo', 'text.redo', 'text.abort', 'text.save']))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionbar', $m['ActionBar'](null, null, actionBarHint)) : $p['setattr'](self, 'actionbar', $m['ActionBar'](null, null, actionBarHint)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isWysiwygMode', true) : $p['setattr'](self, 'isWysiwygMode', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('discardNextClickEvent', false) : $p['setattr'](self, 'discardNextClickEvent', false); 
				self['appendChild']($p['getattr'](self, 'actionbar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tableDiv', $m['html5']['Div']()) : $p['setattr'](self, 'tableDiv', $m['html5']['Div']()); 
				$p['getattr'](self, 'tableDiv')['__getitem__']('class')['append']('tableeditor');
				self['appendChild']($p['getattr'](self, 'tableDiv'));
				$iter26_iter = $p['list']([$m['TableInsertRowBeforeAction'], $m['TableInsertRowAfterAction'], $m['TableInsertColBeforeAction'], $m['TableInsertColAfterAction'], $m['TableRemoveRowAction'], $m['TableRemoveColAction']]);
				$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
				while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
					c = $iter26_nextval['$nextval'];
					self['tableDiv']['appendChild'](c());
				}
				$p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', 'none');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('linkEditor', $m['LinkEditor']()) : $p['setattr'](self, 'linkEditor', $m['LinkEditor']()); 
				self['appendChild']($p['getattr'](self, 'linkEditor'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('imgEditor', $m['ImageEditor']()) : $p['setattr'](self, 'imgEditor', $m['ImageEditor']()); 
				self['appendChild']($p['getattr'](self, 'imgEditor'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editor', $m['Editor'](editHtml)) : $p['setattr'](self, 'editor', $m['Editor'](editHtml)); 
				self['appendChild']($p['getattr'](self, 'editor'));
				self['actionbar']['setActions']($p['getattr'](self, 'textActions'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentImage', null) : $p['setattr'](self, 'currentImage', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorImage', null) : $p['setattr'](self, 'cursorImage', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', null) : $p['setattr'](self, 'lastMousePos', null); 
				self['sinkEvent']('onMouseDown', 'onMouseUp', 'onMouseMove', 'onClick');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['editHtml'],['actionBarHint', $m['translate']('Text Editor')]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('flipView', function() {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
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
				var $sub22,$sub23,$sub20,$sub21,$sub24,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$add88,$mul6,$mul28,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$sub19,$sub18,$sub17,$sub16,$sub15,$mul17,$mul16,$mul15,$mul14,$add54,$mul12,$mul11,$add57,$add58,$add59,$add48,$mul19,$mul18,$add89,$add49,inStr,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$add50,$add51,$add52,$add53,$mul9,$mul8,$mul7,$mul13,$mul5,$mul4,$mul3,$add55,$add38,$add39,$add56,$mul10,$add37,htmlStr,indent,indestStr,$add100,$add98,$add99,$add94,$add95,$add96,$add97,$add90,$add91,$add92,$add93,outStr;
				htmlStr = $p['getattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML');
				if ($p['bool']($p['getattr'](self, 'isWysiwygMode'))) {
					self['imgEditor']['doClose']();
					self['linkEditor']['doClose']();
					$p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', null);
					outStr = '';
					indent = $constant_int_0;
					indestStr = '&nbsp;&nbsp;&nbsp;';
					inStr = htmlStr['$$replace']('&', '&amp;')['$$replace']('<', '&lt;')['$$replace']('>', '&gt;');
					while ($p['bool'](inStr)) {
						if ($p['bool'](inStr['startswith']('&lt;div&gt;'))) {
							outStr = $p['__op_add']($add37=outStr,$add38='<br>');
							outStr = $p['__op_add']($add39=outStr,$add40=(typeof ($mul3=indestStr)==typeof ($mul4=indent) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)));
							indent = $p['__op_add']($add41=indent,$add42=$constant_int_1);
						}
						else if ($p['bool'](inStr['startswith']('&lt;/div&gt;'))) {
							indent = $p['__op_sub']($sub15=indent,$sub16=$constant_int_1);
							outStr = $p['__op_add']($add43=outStr,$add44='<br>');
							outStr = $p['__op_add']($add45=outStr,$add46=(typeof ($mul5=indestStr)==typeof ($mul6=indent) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;br'))) {
							outStr = $p['__op_add']($add47=outStr,$add48='<br>');
							outStr = $p['__op_add']($add49=outStr,$add50=(typeof ($mul7=indestStr)==typeof ($mul8=indent) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;table'))) {
							outStr = $p['__op_add']($add51=outStr,$add52='<br>');
							outStr = $p['__op_add']($add53=outStr,$add54=(typeof ($mul9=indestStr)==typeof ($mul10=indent) && typeof $mul9=='number'?
								$mul9*$mul10:
								$p['op_mul']($mul9,$mul10)));
							indent = $p['__op_add']($add55=indent,$add56=$constant_int_1);
						}
						else if ($p['bool'](inStr['startswith']('&lt;/table'))) {
							indent = $p['__op_sub']($sub17=indent,$sub18=$constant_int_1);
							outStr = $p['__op_add']($add57=outStr,$add58='<br>');
							outStr = $p['__op_add']($add59=outStr,$add60=(typeof ($mul11=indestStr)==typeof ($mul12=indent) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;tr'))) {
							outStr = $p['__op_add']($add61=outStr,$add62='<br>');
							outStr = $p['__op_add']($add63=outStr,$add64=(typeof ($mul13=indestStr)==typeof ($mul14=indent) && typeof $mul13=='number'?
								$mul13*$mul14:
								$p['op_mul']($mul13,$mul14)));
							indent = $p['__op_add']($add65=indent,$add66=$constant_int_1);
						}
						else if ($p['bool'](inStr['startswith']('&lt;/tr'))) {
							indent = $p['__op_sub']($sub19=indent,$sub20=$constant_int_1);
							outStr = $p['__op_add']($add67=outStr,$add68='<br>');
							outStr = $p['__op_add']($add69=outStr,$add70=(typeof ($mul15=indestStr)==typeof ($mul16=indent) && typeof $mul15=='number'?
								$mul15*$mul16:
								$p['op_mul']($mul15,$mul16)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;td'))) {
							outStr = $p['__op_add']($add71=outStr,$add72='<br>');
							outStr = $p['__op_add']($add73=outStr,$add74=(typeof ($mul17=indestStr)==typeof ($mul18=indent) && typeof $mul17=='number'?
								$mul17*$mul18:
								$p['op_mul']($mul17,$mul18)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;th&gt;'))) {
							outStr = $p['__op_add']($add75=outStr,$add76='<br>');
							outStr = $p['__op_add']($add77=outStr,$add78=(typeof ($mul19=indestStr)==typeof ($mul20=indent) && typeof $mul19=='number'?
								$mul19*$mul20:
								$p['op_mul']($mul19,$mul20)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;thead&gt;'))) {
							outStr = $p['__op_add']($add79=outStr,$add80='<br>');
							outStr = $p['__op_add']($add81=outStr,$add82=(typeof ($mul21=indestStr)==typeof ($mul22=indent) && typeof $mul21=='number'?
								$mul21*$mul22:
								$p['op_mul']($mul21,$mul22)));
							indent = $p['__op_add']($add83=indent,$add84=$constant_int_1);
						}
						else if ($p['bool'](inStr['startswith']('&lt;/thead&gt;'))) {
							indent = $p['__op_sub']($sub21=indent,$sub22=$constant_int_1);
							outStr = $p['__op_add']($add85=outStr,$add86='<br>');
							outStr = $p['__op_add']($add87=outStr,$add88=(typeof ($mul23=indestStr)==typeof ($mul24=indent) && typeof $mul23=='number'?
								$mul23*$mul24:
								$p['op_mul']($mul23,$mul24)));
						}
						else if ($p['bool'](inStr['startswith']('&lt;tbody&gt;'))) {
							outStr = $p['__op_add']($add89=outStr,$add90='<br>');
							outStr = $p['__op_add']($add91=outStr,$add92=(typeof ($mul25=indestStr)==typeof ($mul26=indent) && typeof $mul25=='number'?
								$mul25*$mul26:
								$p['op_mul']($mul25,$mul26)));
							indent = $p['__op_add']($add93=indent,$add94=$constant_int_1);
						}
						else if ($p['bool'](inStr['startswith']('&lt;/tbody&gt;'))) {
							indent = $p['__op_sub']($sub23=indent,$sub24=$constant_int_1);
							outStr = $p['__op_add']($add95=outStr,$add96='<br>');
							outStr = $p['__op_add']($add97=outStr,$add98=(typeof ($mul27=indestStr)==typeof ($mul28=indent) && typeof $mul27=='number'?
								$mul27*$mul28:
								$p['op_mul']($mul27,$mul28)));
						}
						outStr = $p['__op_add']($add99=outStr,$add100=inStr['__getitem__']($constant_int_0));
						inStr = $p['__getslice'](inStr, $constant_int_1, null);
					}
					$p['getattr']($p['getattr'](self, 'editor'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'editor'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'editor'), 'element')['__setattr__']('innerHTML', outStr) : $p['setattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML', outStr); 
					self['actionbar']['setActions']($p['list'](['text.flipView']));
				}
				else {
					htmlStr = $m['re']['sub']('<[^>]*?>', '', htmlStr);
					htmlStr = htmlStr['$$replace']('&nbsp;', '')['$$replace']('&nbsp;', '');
					$p['getattr']($p['getattr'](self, 'editor'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'editor'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'editor'), 'element')['__setattr__']('innerHTML', htmlStr['$$replace']('&lt;', '<')['$$replace']('&gt;', '>')['$$replace']('&amp;', '&')) : $p['setattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML', htmlStr['$$replace']('&lt;', '<')['$$replace']('&gt;', '>')['$$replace']('&amp;', '&')); 
					self['actionbar']['setActions']($p['getattr'](self, 'textActions'));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isWysiwygMode', !$p['bool']($p['getattr'](self, 'isWysiwygMode'))) : $p['setattr'](self, 'isWysiwygMode', !$p['bool']($p['getattr'](self, 'isWysiwygMode'))); 
				return $p['getattr'](self, 'isWysiwygMode');
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['flipView'] = $method;
			$method = $pyjs__bind_method2('saveText', function() {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
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

				self['saveTextEvent']['fire'](self, $p['getattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['saveText'] = $method;
			$method = $pyjs__bind_method2('abortText', function() {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
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

				self['abortTextEvent']['fire'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['abortText'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(event) {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub31,$sub30,$sub28,$sub32,$sub26,$sub27,$sub25,$mul29,$sub29,$and52,node,$and50,$mul30,$and53,offsetLeft,offsetTop,$and51,$mul31,$mul32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', null) : $p['setattr'](self, 'lastMousePos', null); 
				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'))) {
					offsetLeft = $p['__op_sub']($sub25=$p['getattr'](event, 'pageX'),$sub26=$p['getattr']($p['getattr'](event, 'target'), 'offsetLeft'));
					offsetTop = $p['__op_sub']($sub27=$p['getattr'](event, 'pageY'),$sub28=$p['getattr']($p['getattr'](event, 'target'), 'offsetTop'));
					if ($p['bool'](!$p['op_is']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), null))) {
						offsetLeft = $p['__op_sub']($sub29=offsetLeft,$sub30=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetLeft'));
						offsetTop = $p['__op_sub']($sub31=offsetTop,$sub32=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetTop'));
					}
					if ($p['bool'](($p['bool']($and50=($p['cmp'](offsetLeft, (typeof ($mul29=0.8)==typeof ($mul30=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth')) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30))) == 1))?($p['cmp'](offsetTop, (typeof ($mul31=0.8)==typeof ($mul32=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight')) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32))) == 1):$and50))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentImage', $p['getattr'](event, 'target')) : $p['setattr'](self, 'currentImage', $p['getattr'](event, 'target')); 
					}
					self['imgEditor']['doOpen']($p['getattr'](event, 'target'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('discardNextClickEvent', true) : $p['setattr'](self, 'discardNextClickEvent', true); 
					event['preventDefault']();
					event['stopPropagation']();
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentImage', null) : $p['setattr'](self, 'currentImage', null); 
					$p['$$super']($m['Wysiwyg'], self)['onMouseDown'](event);
				}
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				while ($p['bool'](($p['bool']($and52=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self, 'editor'), 'element')):$and52))) {
					node = $p['getattr'](node, 'parentNode');
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(event) {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentImage', null) : $p['setattr'](self, 'currentImage', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', null) : $p['setattr'](self, 'lastMousePos', null); 
				$p['$$super']($m['Wysiwyg'], self)['onMouseUp'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onMouseMove', function(event) {
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub48,$sub40,$sub41,$sub42,$sub43,$sub44,$sub46,$sub47,$sub45,offsetLeft,offsetTop,$sub33,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,y,$mul34,$and58,$and56,$and57,$and54,$and55,$mul35,x,$mul36,$mul33;
				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'))) {
					offsetLeft = $p['__op_sub']($sub33=$p['getattr'](event, 'pageX'),$sub34=$p['getattr']($p['getattr'](event, 'target'), 'offsetLeft'));
					offsetTop = $p['__op_sub']($sub35=$p['getattr'](event, 'pageY'),$sub36=$p['getattr']($p['getattr'](event, 'target'), 'offsetTop'));
					if ($p['bool'](!$p['op_is']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), null))) {
						offsetLeft = $p['__op_sub']($sub37=offsetLeft,$sub38=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetLeft'));
						offsetTop = $p['__op_sub']($sub39=offsetTop,$sub40=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetTop'));
					}
					if ($p['bool'](($p['bool']($and54=($p['cmp'](offsetLeft, (typeof ($mul33=0.8)==typeof ($mul34=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth')) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34))) == 1))?($p['cmp'](offsetTop, (typeof ($mul35=0.8)==typeof ($mul36=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight')) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36))) == 1):$and54))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorImage', $p['getattr'](event, 'target')) : $p['setattr'](self, 'cursorImage', $p['getattr'](event, 'target')); 
						$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__']('cursor', 'se-resize') : $p['setattr']($p['getattr']($p['getattr'](self, 'cursorImage'), 'style'), 'cursor', 'se-resize'); 
					}
					else {
						if ($p['bool'](!$p['op_is']($p['getattr'](self, 'cursorImage'), null))) {
							$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__']('cursor', 'default') : $p['setattr']($p['getattr']($p['getattr'](self, 'cursorImage'), 'style'), 'cursor', 'default'); 
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorImage', null) : $p['setattr'](self, 'cursorImage', null); 
						}
					}
				}
				else if ($p['bool'](!$p['op_is']($p['getattr'](self, 'cursorImage'), null))) {
					$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['__setattr__']('cursor', 'default') : $p['setattr']($p['getattr']($p['getattr'](self, 'cursorImage'), 'style'), 'cursor', 'default'); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorImage', null) : $p['setattr'](self, 'cursorImage', null); 
				}
				if ($p['bool'](($p['bool']($and56=!$p['op_is']($p['getattr'](self, 'currentImage'), null))?($p['bool']($and57=$p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'))?$p['op_eq']($p['getattr'](self, 'currentImage'), $p['getattr'](event, 'target')):$and57):$and56))) {
					if ($p['bool']($p['op_is']($p['getattr'](self, 'lastMousePos'), null))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')])) : $p['setattr'](self, 'lastMousePos', $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')])); 
						return null;
					}
					var $tupleassign1 = $p['__ass_unpack']($p['getattr'](self, 'lastMousePos'), 2, null);
					x = $tupleassign1[0];
					y = $tupleassign1[1];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')])) : $p['setattr'](self, 'lastMousePos', $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')])); 
					$p['getattr'](event, 'target')['__is_instance__'] && typeof $p['getattr'](event, 'target')['__setattr__'] == 'function' ? $p['getattr'](event, 'target')['__setattr__']('width', $p['__op_sub']($sub43=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth'),$sub44=$p['__op_sub']($sub41=x,$sub42=$p['getattr'](event, 'x')))) : $p['setattr']($p['getattr'](event, 'target'), 'width', $p['__op_sub']($sub43=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth'),$sub44=$p['__op_sub']($sub41=x,$sub42=$p['getattr'](event, 'x')))); 
					$p['getattr'](event, 'target')['__is_instance__'] && typeof $p['getattr'](event, 'target')['__setattr__'] == 'function' ? $p['getattr'](event, 'target')['__setattr__']('height', $p['__op_sub']($sub47=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight'),$sub48=$p['__op_sub']($sub45=y,$sub46=$p['getattr'](event, 'y')))) : $p['setattr']($p['getattr'](event, 'target'), 'height', $p['__op_sub']($sub47=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight'),$sub48=$p['__op_sub']($sub45=y,$sub46=$p['getattr'](event, 'y')))); 
					event['preventDefault']();
					event['stopPropagation']();
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lastMousePos', null) : $p['setattr'](self, 'lastMousePos', null); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentImage', null) : $p['setattr'](self, 'currentImage', null); 
					$p['$$super']($m['Wysiwyg'], self)['onMouseMove'](event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseMove'] = $method;
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
					if (self.prototype['__md5__'] !== 'cffed2a0ab8c3426c390cd0e662e5b3f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var node,isEditorTarget,nodeStack,$and59,i,$sub50,$sub49,$and61,$and60,domWdg;
				if ($p['bool']($p['getattr'](self, 'discardNextClickEvent'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('discardNextClickEvent', false) : $p['setattr'](self, 'discardNextClickEvent', false); 
					return null;
				}
				$p['$$super']($m['Wysiwyg'], self)['onClick'](event);
				domWdg = $p['getattr'](event, 'target');
				isEditorTarget = false;
				while ($p['bool'](domWdg)) {
					if ($p['bool']($p['op_eq'](domWdg, $p['getattr']($p['getattr'](self, 'editor'), 'element')))) {
						isEditorTarget = true;
						break;
					}
					domWdg = $p['getattr'](domWdg, 'parentNode');
				}
				if ($p['bool'](!$p['bool'](isEditorTarget))) {
					return null;
				}
				node = (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
				nodeStack = $p['list']([]);
				i = $constant_int_10;
				while ($p['bool'](($p['bool']($and59=($p['cmp'](i, $constant_int_0) == 1))?($p['bool']($and60=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self, 'editor'), 'element')):$and60):$and59))) {
					i = $p['__op_sub']($sub49=i,$sub50=$constant_int_1);
					nodeStack['append'](node);
					node = $p['getattr'](node, 'parentNode');
				}
				if ($p['bool'](function(){
					var $iter27_nextval,$iter27_array,$collcomp4,$iter27_idx,$iter27_iter,x,$iter27_type;
	$collcomp4 = $p['list']();
				$iter27_iter = nodeStack;
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					x = $iter27_nextval['$nextval'];
					$collcomp4['append'](($p['bool']($p['dir'](x)['__contains__']('tagName'))? ($p['getattr'](x, 'tagName')) : ('')));
				}

	return $collcomp4;}()['__contains__']('TABLE'))) {
					$p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', '');
				}
				else {
					$p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', 'none');
				}
				self['linkEditor']['onCursorMoved'](nodeStack);
				self['imgEditor']['onCursorMoved'](nodeStack);
				self['cursorMovedEvent']['fire'](nodeStack);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Wysiwyg', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.wysiwyg */


/* end module: widgets.wysiwyg */


/*
PYJS_DEPS: ['html5', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'event.EventDispatcher', 'event', 'time.time', 'time', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 're', 'config.conf', 'config', 'widgets.file.FileWidget', 'widgets.file', 'i18n.translate', 'i18n']
*/
