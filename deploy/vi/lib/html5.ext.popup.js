/* start module: html5.ext.popup */
$pyjs['loaded_modules']['html5.ext.popup'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.popup']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.popup'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.popup'];
	$m['__repr__'] = function() { return '<module: html5.ext.popup>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.popup';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5.ext']['popup'] = $pyjs['loaded_modules']['html5.ext.popup'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		$m['html5'] = $p['___import___']('html5', 'html5.ext');
		$m['Popup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.popup';
			$cls_definition['__md5__'] = 'f9ac8327e39ab50cc64fb947f2ba3f9b';
			$method = $pyjs__bind_method2('__init__', function(title, id, className) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					id = arguments[2];
					className = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'f9ac8327e39ab50cc64fb947f2ba3f9b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof className != 'undefined') {
						if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = className;
							className = arguments[4];
						}
					} else 					if (typeof id != 'undefined') {
						if (id !== null && typeof id['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = id;
							id = arguments[4];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof title == 'undefined') title=arguments['callee']['__args__'][3][1];
				if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
				if (typeof className == 'undefined') className=arguments['callee']['__args__'][5][1];
				var $and1,lbl,$and2;
				$pyjs_kwargs_call($p['$$super']($m['Popup'], self), '__init__', args, kwargs, [{}]);
				self['__setitem__']('class', 'alertbox');
				if ($p['bool'](($p['bool']($and1=!$p['op_is'](className, null))?$p['len'](className):$and1))) {
					self['__getitem__']('class')['append'](className);
				}
				if ($p['bool'](title)) {
					lbl = $m['html5']['Span']();
					lbl['__getitem__']('class')['append']('title');
					lbl['appendChild']($m['html5']['TextNode'](title));
					self['appendChild'](lbl);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', id) : $p['setattr'](self, 'id', id); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('frameDiv', $m['html5']['Div']()) : $p['setattr'](self, 'frameDiv', $m['html5']['Div']()); 
				$p['getattr'](self, 'frameDiv')['__setitem__']('class', 'popup');
				self['frameDiv']['appendChild'](self);
				$m['html5']['Body']()['appendChild']($p['getattr'](self, 'frameDiv'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['title', null],['id', null],['className', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('close', function() {
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
					if (self.prototype['__md5__'] !== 'f9ac8327e39ab50cc64fb947f2ba3f9b') {
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

				$m['html5']['Body']()['removeChild']($p['getattr'](self, 'frameDiv'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('frameDiv', null) : $p['setattr'](self, 'frameDiv', null); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['close'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Popup', $p['tuple']($bases), $data);
		})();
		$m['Alert'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.popup';
			$cls_definition['__md5__'] = '0a9f16af7f8e164fd3ba8134ce3e67fa';
			$method = $pyjs__bind_method2('__init__', function(msg, title, okCallback, okLabel) {
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
					msg = arguments[1];
					title = arguments[2];
					okCallback = arguments[3];
					okLabel = arguments[4];
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
					if (self.prototype['__md5__'] !== '0a9f16af7f8e164fd3ba8134ce3e67fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof okLabel != 'undefined') {
						if (okLabel !== null && typeof okLabel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = okLabel;
							okLabel = arguments[5];
						}
					} else 					if (typeof okCallback != 'undefined') {
						if (okCallback !== null && typeof okCallback['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = okCallback;
							okCallback = arguments[5];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[5];
						}
					} else 					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof title == 'undefined') title=arguments['callee']['__args__'][4][1];
				if (typeof okCallback == 'undefined') okCallback=arguments['callee']['__args__'][5][1];
				if (typeof okLabel == 'undefined') okLabel=arguments['callee']['__args__'][6][1];
				var okBtn,message;
				$pyjs_kwargs_call($p['$$super']($m['Alert'], self), '__init__', args, kwargs, [{}, title]);
				self['addClass']('alert');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('okCallback', okCallback) : $p['setattr'](self, 'okCallback', okCallback); 
				message = $m['html5']['Span']();
				message['addClass']('alert-msg');
				self['appendChild'](message);
				if ($p['bool']($p['isinstance'](msg, $p['getattr']($m['html5'], 'Widget')))) {
					message['appendChild'](msg);
				}
				else {
					$m['html5']['utils']['textToHtml'](message, msg);
				}
				okBtn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onOkBtnClick')}, okLabel]);
				okBtn['addClass']('alert-btn-ok');
				self['appendChild'](okBtn);
				self['sinkEvent']('onKeyDown');
				okBtn['focus']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg'],['title', null],['okCallback', null],['okLabel', 'OK']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('drop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0a9f16af7f8e164fd3ba8134ce3e67fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('okCallback', null) : $p['setattr'](self, 'okCallback', null); 
				self['close']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drop'] = $method;
			$method = $pyjs__bind_method2('onOkBtnClick', function(sender) {
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
					if (self.prototype['__md5__'] !== '0a9f16af7f8e164fd3ba8134ce3e67fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				if ($p['bool']($p['getattr'](self, 'okCallback'))) {
					self['okCallback'](self);
				}
				self['drop']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onOkBtnClick'] = $method;
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
					if (self.prototype['__md5__'] !== '0a9f16af7f8e164fd3ba8134ce3e67fa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var key;
				if ($p['bool']($p['hasattr'](event, 'key'))) {
					key = $p['getattr'](event, 'key');
				}
				else if ($p['bool']($p['hasattr'](event, 'keyIdentifier'))) {
					key = $p['getattr'](event, 'keyIdentifier');
				}
				else {
					key = null;
				}
				if ($p['bool']($p['op_eq'](key, 'Enter'))) {
					event['stopPropagation']();
					event['preventDefault']();
					self['onOkBtnClick']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyDown'] = $method;
			var $bases = new Array($m['Popup']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Alert', $p['tuple']($bases), $data);
		})();
		$m['YesNoDialog'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.popup';
			$cls_definition['__md5__'] = '9070f3fcaceb581199711a4fbaa70a2f';
			$method = $pyjs__bind_method2('__init__', function(question, title, yesCallback, noCallback, yesLabel, noLabel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					question = arguments[1];
					title = arguments[2];
					yesCallback = arguments[3];
					noCallback = arguments[4];
					yesLabel = arguments[5];
					noLabel = arguments[6];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '9070f3fcaceb581199711a4fbaa70a2f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof noLabel != 'undefined') {
						if (noLabel !== null && typeof noLabel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = noLabel;
							noLabel = arguments[7];
						}
					} else 					if (typeof yesLabel != 'undefined') {
						if (yesLabel !== null && typeof yesLabel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = yesLabel;
							yesLabel = arguments[7];
						}
					} else 					if (typeof noCallback != 'undefined') {
						if (noCallback !== null && typeof noCallback['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = noCallback;
							noCallback = arguments[7];
						}
					} else 					if (typeof yesCallback != 'undefined') {
						if (yesCallback !== null && typeof yesCallback['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = yesCallback;
							yesCallback = arguments[7];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[7];
						}
					} else 					if (typeof question != 'undefined') {
						if (question !== null && typeof question['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = question;
							question = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof title == 'undefined') title=arguments['callee']['__args__'][4][1];
				if (typeof yesCallback == 'undefined') yesCallback=arguments['callee']['__args__'][5][1];
				if (typeof noCallback == 'undefined') noCallback=arguments['callee']['__args__'][6][1];
				if (typeof yesLabel == 'undefined') yesLabel=arguments['callee']['__args__'][7][1];
				if (typeof noLabel == 'undefined') noLabel=arguments['callee']['__args__'][8][1];
				var lbl,btnYes,btnNo;
				$pyjs_kwargs_call($p['$$super']($m['YesNoDialog'], self), '__init__', args, kwargs, [{}, title]);
				self['__getitem__']('class')['append']('yesnodialog');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yesCallback', yesCallback) : $p['setattr'](self, 'yesCallback', yesCallback); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('noCallback', noCallback) : $p['setattr'](self, 'noCallback', noCallback); 
				lbl = $m['html5']['Span']();
				lbl['__getitem__']('class')['append']('question');
				self['appendChild'](lbl);
				if ($p['bool']($p['isinstance'](question, $p['getattr']($m['html5'], 'Widget')))) {
					lbl['appendChild'](question);
				}
				else {
					$m['html5']['utils']['textToHtml'](lbl, question);
				}
				btnYes = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onYesClicked')}, yesLabel]);
				btnYes['__getitem__']('class')['append']('btn_yes');
				self['appendChild'](btnYes);
				if ($p['bool']($p['len'](noLabel))) {
					btnNo = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onNoClicked')}, noLabel]);
					btnNo['__getitem__']('class')['append']('btn_no');
					self['appendChild'](btnNo);
				}
				self['sinkEvent']('onkeydown');
				btnYes['focus']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['question'],['title', null],['yesCallback', null],['noCallback', null],['yesLabel', 'Yes'],['noLabel', 'No']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onkeydown', function(event) {
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
					if (self.prototype['__md5__'] !== '9070f3fcaceb581199711a4fbaa70a2f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var key;
				if ($p['bool']($p['hasattr'](event, 'key'))) {
					key = $p['getattr'](event, 'key');
				}
				else if ($p['bool']($p['hasattr'](event, 'keyIdentifier'))) {
					if ($p['bool']($p['list'](['Esc', 'U+001B'])['__contains__']($p['getattr'](event, 'keyIdentifier')))) {
						key = 'Escape';
					}
					else {
						key = $p['getattr'](event, 'keyIdentifier');
					}
				}
				else {
					key = null;
				}
				if ($p['bool']($p['op_eq']('Enter', key))) {
					event['stopPropagation']();
					event['preventDefault']();
					self['onYesClicked']();
				}
				else if ($p['bool']($p['op_eq']('Escape', key))) {
					event['stopPropagation']();
					event['preventDefault']();
					self['onNoClicked']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onkeydown'] = $method;
			$method = $pyjs__bind_method2('drop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9070f3fcaceb581199711a4fbaa70a2f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yesCallback', null) : $p['setattr'](self, 'yesCallback', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('noCallback', null) : $p['setattr'](self, 'noCallback', null); 
				self['close']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drop'] = $method;
			$method = $pyjs__bind_method2('onYesClicked', function() {
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
					if (self.prototype['__md5__'] !== '9070f3fcaceb581199711a4fbaa70a2f') {
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

				if ($p['bool']($p['getattr'](self, 'yesCallback'))) {
					self['yesCallback'](self);
				}
				self['drop']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onYesClicked'] = $method;
			$method = $pyjs__bind_method2('onNoClicked', function() {
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
					if (self.prototype['__md5__'] !== '9070f3fcaceb581199711a4fbaa70a2f') {
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

				if ($p['bool']($p['getattr'](self, 'noCallback'))) {
					self['noCallback'](self);
				}
				self['drop']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onNoClicked'] = $method;
			var $bases = new Array($m['Popup']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('YesNoDialog', $p['tuple']($bases), $data);
		})();
		$m['SelectDialog'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.popup';
			$cls_definition['__md5__'] = 'fa0814188f83914dc4b10efd99ab1e1a';
			$method = $pyjs__bind_method2('__init__', function(prompt, items, title, okBtn, cancelBtn, forceSelect, callback) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					prompt = arguments[1];
					items = arguments[2];
					title = arguments[3];
					okBtn = arguments[4];
					cancelBtn = arguments[5];
					forceSelect = arguments[6];
					callback = arguments[7];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,8,arguments['length']-1));

					var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'fa0814188f83914dc4b10efd99ab1e1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof callback != 'undefined') {
						if (callback !== null && typeof callback['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = callback;
							callback = arguments[8];
						}
					} else 					if (typeof forceSelect != 'undefined') {
						if (forceSelect !== null && typeof forceSelect['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = forceSelect;
							forceSelect = arguments[8];
						}
					} else 					if (typeof cancelBtn != 'undefined') {
						if (cancelBtn !== null && typeof cancelBtn['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cancelBtn;
							cancelBtn = arguments[8];
						}
					} else 					if (typeof okBtn != 'undefined') {
						if (okBtn !== null && typeof okBtn['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = okBtn;
							okBtn = arguments[8];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[8];
						}
					} else 					if (typeof items != 'undefined') {
						if (items !== null && typeof items['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = items;
							items = arguments[8];
						}
					} else 					if (typeof prompt != 'undefined') {
						if (prompt !== null && typeof prompt['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = prompt;
							prompt = arguments[8];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[8];
						}
					} else {
					}
				}
				if (typeof items == 'undefined') items=arguments['callee']['__args__'][4][1];
				if (typeof title == 'undefined') title=arguments['callee']['__args__'][5][1];
				if (typeof okBtn == 'undefined') okBtn=arguments['callee']['__args__'][6][1];
				if (typeof cancelBtn == 'undefined') cancelBtn=arguments['callee']['__args__'][7][1];
				if (typeof forceSelect == 'undefined') forceSelect=arguments['callee']['__args__'][8][1];
				if (typeof callback == 'undefined') callback=arguments['callee']['__args__'][9][1];
				var $iter1_iter,cssc,$iter2_type,btn,lbl,$iter2_iter,$iter1_array,opt,$and3,$iter1_nextval,$and4,$iter2_idx,$iter2_nextval,$iter1_type,idx,$iter1_idx,item,$iter2_array;
				$pyjs_kwargs_call($p['$$super']($m['SelectDialog'], self), '__init__', args, kwargs, [{}, title]);
				self['__getitem__']('class')['append']('selectdialog');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', callback) : $p['setattr'](self, 'callback', callback); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('items', items) : $p['setattr'](self, 'items', items); 
				if (!( $p['isinstance']($p['getattr'](self, 'items'), $p['list']) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](prompt)) {
					lbl = $m['html5']['Span']();
					lbl['__getitem__']('class')['append']('prompt');
					if ($p['bool']($p['isinstance'](prompt, $p['getattr']($m['html5'], 'Widget')))) {
						lbl['appendChild'](prompt);
					}
					else {
						$m['html5']['utils']['textToHtml'](lbl, prompt);
					}
					self['appendChild'](lbl);
				}
				if ($p['bool'](($p['bool']($and3=!$p['bool'](forceSelect))?($p['cmp']($p['len'](items), $constant_int_3) < 1):$and3))) {
					$iter1_iter = $p['enumerate'](items);
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
						idx = $tupleassign1[0];
						item = $tupleassign1[1];
						if ($p['bool']($p['isinstance'](item, $p['dict']))) {
							title = item['get']('title');
							cssc = item['get']('class');
						}
						else if ($p['bool']($p['isinstance'](item, $p['tuple']))) {
							title = item['__getitem__']($constant_int_1);
							cssc = null;
						}
						else {
							title = item;
						}
						btn = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onAnyBtnClick')}, title]);
						btn['__is_instance__'] && typeof btn['__setattr__'] == 'function' ? btn['__setattr__']('idx', idx) : $p['setattr'](btn, 'idx', idx); 
						if ($p['bool'](cssc)) {
							btn['addClass'](cssc);
						}
						self['appendChild'](btn);
					}
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('select', $m['html5']['Select']()) : $p['setattr'](self, 'select', $m['html5']['Select']()); 
					self['appendChild']($p['getattr'](self, 'select'));
					$iter2_iter = $p['enumerate'](items);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
						idx = $tupleassign2[0];
						item = $tupleassign2[1];
						if ($p['bool']($p['isinstance'](item, $p['dict']))) {
							title = item['get']('title');
						}
						else if ($p['bool']($p['isinstance'](item, $p['tuple']))) {
							title = item['__getitem__']($constant_int_1);
						}
						else {
							title = item;
						}
						opt = $m['html5']['Option'](title);
						opt['__setitem__']('value', $p['str'](idx));
						self['select']['appendChild'](opt);
					}
					if ($p['bool'](okBtn)) {
						self['appendChild']($pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onOkClick')}, okBtn]));
					}
					if ($p['bool'](cancelBtn)) {
						self['appendChild']($pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onCancelClick')}, cancelBtn]));
					}
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['prompt'],['items', null],['title', null],['okBtn', 'OK'],['cancelBtn', 'Cancel'],['forceSelect', false],['callback', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onAnyBtnClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa0814188f83914dc4b10efd99ab1e1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and5,$and6,$and7,item;
				item = $p['getattr'](self, 'items')['__getitem__']($p['getattr'](sender, 'idx'));
				if ($p['bool'](($p['bool']($and5=$p['isinstance'](item, $p['dict']))?($p['bool']($and6=item['get']('callback'))?$p['callable'](item['__getitem__']('callback')):$and6):$and5))) {
					item['__getitem__']('callback')(item);
				}
				if ($p['bool']($p['getattr'](self, 'callback'))) {
					self['callback'](item);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('items', null) : $p['setattr'](self, 'items', null); 
				self['close']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onAnyBtnClick'] = $method;
			$method = $pyjs__bind_method2('onCancelClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'fa0814188f83914dc4b10efd99ab1e1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['close']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onCancelClick'] = $method;
			$method = $pyjs__bind_method2('onOkClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'fa0814188f83914dc4b10efd99ab1e1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $and8,$and9,item,$and10;
				if (!( ((($p['cmp']($p['getattr'](self, 'select')['__getitem__']('selectedIndex'), $constant_int_0))|1) == 1) )) {
				   throw $p['AssertionError']();
				 }
				item = $p['getattr'](self, 'items')['__getitem__']($p['int'](self['select']['children']($p['getattr'](self, 'select')['__getitem__']('selectedIndex'))['__getitem__']('value')));
				if ($p['bool'](($p['bool']($and8=$p['isinstance'](item, $p['dict']))?($p['bool']($and9=item['get']('callback'))?$p['callable'](item['__getitem__']('callback')):$and9):$and8))) {
					item['__getitem__']('callback')(item);
				}
				if ($p['bool']($p['getattr'](self, 'callback'))) {
					self['callback'](item);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('items', null) : $p['setattr'](self, 'items', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('select', null) : $p['setattr'](self, 'select', null); 
				self['close']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onOkClick'] = $method;
			var $bases = new Array($m['Popup']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectDialog', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.ext.popup */


/* end module: html5.ext.popup */


/*
PYJS_DEPS: ['html5']
*/
