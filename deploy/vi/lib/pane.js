/* start module: pane */
$pyjs['loaded_modules']['pane'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pane']['__was_initialized__']) return $pyjs['loaded_modules']['pane'];
	var $m = $pyjs['loaded_modules']['pane'];
	$m['__repr__'] = function() { return '<module: pane>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pane';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', null);
		$m['conf'] = $p['___import___']('config.conf', null, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
		$m['Pane'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pane';
			$cls_definition['__md5__'] = '9bba367b09f771b1a13a305ead988bc8';
			$method = $pyjs__bind_method2('__init__', function(descr, iconURL, iconClasses, closeable, collapseable, focusable) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					descr = arguments[1];
					iconURL = arguments[2];
					iconClasses = arguments[3];
					closeable = arguments[4];
					collapseable = arguments[5];
					focusable = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof descr == 'undefined') descr=arguments['callee']['__args__'][3][1];
				if (typeof iconURL == 'undefined') iconURL=arguments['callee']['__args__'][4][1];
				if (typeof iconClasses == 'undefined') iconClasses=arguments['callee']['__args__'][5][1];
				if (typeof closeable == 'undefined') closeable=arguments['callee']['__args__'][6][1];
				if (typeof collapseable == 'undefined') collapseable=arguments['callee']['__args__'][7][1];
				if (typeof focusable == 'undefined') focusable=arguments['callee']['__args__'][8][1];

				$p['$$super']($m['Pane'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentPane', null) : $p['setattr'](self, 'parentPane', null); 
				self['sinkEvent']('onClick');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('descr', descr) : $p['setattr'](self, 'descr', descr); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iconURL', iconURL) : $p['setattr'](self, 'iconURL', iconURL); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iconClasses', iconClasses) : $p['setattr'](self, 'iconClasses', iconClasses); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('collapseable', collapseable) : $p['setattr'](self, 'collapseable', collapseable); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('focusable', focusable) : $p['setattr'](self, 'focusable', focusable); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('childPanes', $p['list']([])) : $p['setattr'](self, 'childPanes', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgetsDomElm', $m['html5']['Div']()) : $p['setattr'](self, 'widgetsDomElm', $m['html5']['Div']()); 
				$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_no_child');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('childDomElem', null) : $p['setattr'](self, 'childDomElem', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$label', $m['html5']['A']()) : $p['setattr'](self, '$$label', $m['html5']['A']()); 
				$p['getattr'](self, '$$label')['__getitem__']('class')['append']('button');
				self['appendChild']($p['getattr'](self, '$$label'));
				self['setText'](descr, iconURL);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeBtn', $m['html5']['ext']['Button']($m['translate']('Close'), $p['getattr'](self, 'onBtnCloseReleased'))) : $p['setattr'](self, 'closeBtn', $m['html5']['ext']['Button']($m['translate']('Close'), $p['getattr'](self, 'onBtnCloseReleased'))); 
				self['closeBtn']['addClass']('closebtn');
				self['appendChild']($p['getattr'](self, 'closeBtn'));
				if ($p['bool'](!$p['bool'](closeable))) {
					self['closeBtn']['hide']();
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeable', closeable) : $p['setattr'](self, 'closeable', closeable); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isExpanded', false) : $p['setattr'](self, 'isExpanded', false); 
				return null;
			}
	, 1, [null,null,['self'],['descr', null],['iconURL', null],['iconClasses', null],['closeable', false],['collapseable', true],['focusable', true]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__setattr__', function(key, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['Pane'], self)['__setattr__'](key, value);
				if ($p['bool']($p['op_eq'](key, 'closeable'))) {
					if ($p['bool'](value)) {
						self['closeBtn']['show']();
					}
					else {
						self['closeBtn']['hide']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['key'],['value']]);
			$cls_definition['__setattr__'] = $method;
			$method = $pyjs__bind_method2('setText', function(descr, iconURL) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					descr = arguments[1];
					iconURL = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof descr == 'undefined') descr=arguments['callee']['__args__'][3][1];
				if (typeof iconURL == 'undefined') iconURL=arguments['callee']['__args__'][4][1];
				var $iter1_nextval,img,$iter1_idx,h,$iter1_iter,$iter1_array,cls,$iter1_type;
				self['$$label']['removeAllChildren']();
				if ($p['bool']($p['op_is'](iconURL, null))) {
					iconURL = $p['getattr'](self, 'iconURL');
				}
				if ($p['bool'](!$p['op_is'](iconURL, null))) {
					img = $m['html5']['Img']();
					img['__setitem__']('src', iconURL);
					self['$$label']['appendChild'](img);
				}
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'iconClasses'), null))) {
					$iter1_iter = $p['getattr'](self, 'iconClasses');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						cls = $iter1_nextval['$nextval'];
						self['$$label']['addClass'](cls);
					}
				}
				if ($p['bool']($p['op_is'](descr, null))) {
					descr = $p['getattr'](self, 'descr');
				}
				if ($p['bool'](!$p['op_is'](descr, null))) {
					h = $m['html5']['H3']();
					h['appendChild'](descr);
					self['$$label']['appendChild'](h);
				}
				return null;
			}
	, 1, [null,null,['self'],['descr', null],['iconURL', null]]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('onBtnCloseReleased', function() {
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
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

				$m['conf']['__getitem__']('mainWindow')['removePane'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onBtnCloseReleased'] = $method;
			$method = $pyjs__bind_method2('addChildPane', function(pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and3,$and4,$and5,$and2;
				if (!( !$p['op_eq'](pane, self) )) {
				   throw $p['AssertionError']('A pane cannot be a child of itself');
				 }
				self['childPanes']['append'](pane);
				pane['__is_instance__'] && typeof pane['__setattr__'] == 'function' ? pane['__setattr__']('parentPane', self) : $p['setattr'](pane, 'parentPane', self); 
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'childDomElem')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('childDomElem', $m['html5']['Ul']()) : $p['setattr'](self, 'childDomElem', $m['html5']['Ul']()); 
					if ($p['bool'](($p['bool']($and1=$p['getattr'](self, 'collapseable'))?!$p['bool']($p['getattr'](pane, 'closeable')):$and1))) {
						$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
					}
					else {
						$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'initial');
					}
					self['appendChild']($p['getattr'](self, 'childDomElem'));
					if ($p['bool']($p['getattr'](self, 'closeable'))) {
						self['closeBtn']['hide']();
					}
				}
				if ($p['bool'](($p['bool']($and3=$p['getattr'](pane, 'closeable'))?($p['bool']($and4=$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__contains__']('display'))?$p['op_eq']($p['getattr'](self, 'childDomElem')['__getitem__']('style')['__getitem__']('display'), 'none'):$and4):$and3))) {
					$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'initial');
				}
				self['childDomElem']['appendChild'](pane);
				return null;
			}
	, 1, [null,null,['self'],['pane']]);
			$cls_definition['addChildPane'] = $method;
			$method = $pyjs__bind_method2('removeChildPane', function(pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( $p['getattr'](self, 'childPanes')['__contains__'](pane) )) {
				   throw $p['AssertionError']($p['sprintf']('Cannot remove unknown child-pane %s from %s', $p['tuple']([$p['str'](pane), $p['str'](self)])));
				 }
				self['childPanes']['remove'](pane);
				self['childDomElem']['removeChild'](pane);
				pane['__is_instance__'] && typeof pane['__setattr__'] == 'function' ? pane['__setattr__']('parentPane', null) : $p['setattr'](pane, 'parentPane', null); 
				if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'childPanes')), $constant_int_0))) {
					self['removeChild']($p['getattr'](self, 'childDomElem'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('childDomElem', null) : $p['setattr'](self, 'childDomElem', null); 
					if ($p['bool']($p['getattr'](self, 'closeable'))) {
						self['closeBtn']['show']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['pane']]);
			$cls_definition['removeChildPane'] = $method;
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var widget,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$iter2_array;
				$iter2_iter = self['widgetsDomElm']['children']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					widget = $iter2_nextval['$nextval'];
					self['widgetsDomElm']['removeChild'](widget);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeBtn', null) : $p['setattr'](self, 'closeBtn', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$label', null) : $p['setattr'](self, '$$label', null); 
				$p['$$super']($m['Pane'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('addWidget', function(widget) {
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter3_array,$iter3_iter,w,$iter3_type,div,$iter3_nextval;
				div = $m['html5']['Div']();
				div['__getitem__']('class')['append']('vi_operator');
				div['appendChild'](widget);
				$iter3_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'), 0, null);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					w = $iter3_nextval['$nextval'];
					w['__setitem__']('disabled', true);
				}
				self['widgetsDomElm']['appendChild'](div);
				self['rebuildChildrenClassInfo']();
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['addWidget'] = $method;
			$method = $pyjs__bind_method2('rebuildChildrenClassInfo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_no_child'))) {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_no_child');
				}
				if ($p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_single_child'))) {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_single_child');
				}
				if ($p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_multiple_children'))) {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_multiple_children');
				}
				if ($p['bool']($p['op_eq']($p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children')), $constant_int_0))) {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_no_child');
				}
				else if ($p['bool']($p['op_eq']($p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children')), $constant_int_1))) {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_single_child');
				}
				else {
					$p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_multiple_children');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rebuildChildrenClassInfo'] = $method;
			$method = $pyjs__bind_method2('removeWidget', function(widget) {
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_idx,w,$iter4_nextval,c,$and6,$and7,$iter4_idx,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter;
				$iter4_iter = $p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					if ($p['bool']($p['getattr'](c, '_children')['__contains__'](widget))) {
						self['widgetsDomElm']['removeChild'](c);
						if ($p['bool'](($p['bool']($and6=$p['getattr'](self, 'closeable'))?$p['op_eq']($p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children')), $constant_int_0):$and6))) {
							$m['conf']['__getitem__']('mainWindow')['removePane'](self);
						}
						$iter5_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'), 0, null);
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							w = $iter5_nextval['$nextval'];
							w['__setitem__']('disabled', false);
						}
						self['rebuildChildrenClassInfo']();
						return null;
					}
				}
				throw ($p['ValueError']($p['sprintf']('Cannot remove unknown widget %s', $p['str'](widget))));
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['removeWidget'] = $method;
			$method = $pyjs__bind_method2('containsWidget', function(widget) {
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,c,$iter6_array,$iter6_iter,$iter6_nextval;
				$iter6_iter = $p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					c = $iter6_nextval['$nextval'];
					if ($p['bool']($p['getattr'](c, '_children')['__contains__'](widget))) {
						return true;
					}
				}
				return false;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['containsWidget'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof event != 'undefined') {
						if (event !== null && typeof event['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = event;
							event = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof event == 'undefined') event=arguments['callee']['__args__'][3][1];

				self['focus']();
				if ($p['bool'](event)) {
					event['stopPropagation']();
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['event', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('expand', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and9,$and10;
				if ($p['bool'](($p['bool']($and8=$p['getattr'](self, 'childDomElem'))?($p['bool']($and9=$p['getattr'](self, 'collapseable'))?!$p['bool']($p['getattr'](self, 'isExpanded')):$and9):$and8))) {
					$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'initial');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isExpanded', true) : $p['setattr'](self, 'isExpanded', true); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['expand'] = $method;
			$method = $pyjs__bind_method2('collapse', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and12,$and13,$and11;
				if ($p['bool'](($p['bool']($and11=$p['getattr'](self, 'childDomElem'))?($p['bool']($and12=$p['getattr'](self, 'collapseable'))?$p['getattr'](self, 'isExpanded'):$and12):$and11))) {
					$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isExpanded', false) : $p['setattr'](self, 'isExpanded', false); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['collapse'] = $method;
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
					if (self.prototype['__md5__'] !== '9bba367b09f771b1a13a305ead988bc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['conf']['__getitem__']('mainWindow')['focusPane'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['focus'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Pane', $p['tuple']($bases), $data);
		})();
		$m['GroupPane'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pane';
			$cls_definition['__md5__'] = '0d55108d270de900c45f33dab443be8d';
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
					if (self.prototype['__md5__'] !== '0d55108d270de900c45f33dab443be8d') {
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

				$pyjs_kwargs_call($p['$$super']($m['GroupPane'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('childDomElem', $m['html5']['Ul']()) : $p['setattr'](self, 'childDomElem', $m['html5']['Ul']()); 
				$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
				self['appendChild']($p['getattr'](self, 'childDomElem'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '0d55108d270de900c45f33dab443be8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof event != 'undefined') {
						if (event !== null && typeof event['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = event;
							event = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof event == 'undefined') event=arguments['callee']['__args__'][3][1];

				if ($p['bool']($p['getattr'](self, 'isExpanded'))) {
					self['collapse']();
				}
				else {
					self['expand']();
				}
				if ($p['bool'](event)) {
					event['stopPropagation']();
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['event', null]]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onFocus', function(event) {
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
					if (self.prototype['__md5__'] !== '0d55108d270de900c45f33dab443be8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'childPanes')), $constant_int_0) == 1))) {
					$m['conf']['__getitem__']('mainWindow')['focusPane']($p['getattr'](self, 'childPanes')['__getitem__']($constant_int_0));
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onFocus'] = $method;
			var $bases = new Array($m['Pane']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GroupPane', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pane */


/* end module: pane */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
