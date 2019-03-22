/* start module: html5.ext.inputdialog */
$pyjs['loaded_modules']['html5.ext.inputdialog'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.inputdialog']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.inputdialog'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.inputdialog'];
	$m['__repr__'] = function() { return '<module: html5.ext.inputdialog>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.inputdialog';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5.ext']['inputdialog'] = $pyjs['loaded_modules']['html5.ext.inputdialog'];
	try {


		$m['html5'] = $p['___import___']('html5', 'html5.ext');
		$m['Popup'] = $p['___import___']('html5.ext.popup.Popup', 'html5.ext', null, false);
		$m['Button'] = $p['___import___']('html5.ext.button.Button', 'html5.ext', null, false);
		$m['InputDialog'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'html5.ext.inputdialog';
			$cls_definition['__md5__'] = 'ca405e553f44a32fb731560ba5cd302d';
			$method = $pyjs__bind_method2('__init__', function(text, value, successHandler, abortHandler, successLbl, abortLbl) {
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
					text = arguments[1];
					value = arguments[2];
					successHandler = arguments[3];
					abortHandler = arguments[4];
					successLbl = arguments[5];
					abortLbl = arguments[6];
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
					if (self.prototype['__md5__'] !== 'ca405e553f44a32fb731560ba5cd302d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof abortLbl != 'undefined') {
						if (abortLbl !== null && typeof abortLbl['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = abortLbl;
							abortLbl = arguments[7];
						}
					} else 					if (typeof successLbl != 'undefined') {
						if (successLbl !== null && typeof successLbl['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = successLbl;
							successLbl = arguments[7];
						}
					} else 					if (typeof abortHandler != 'undefined') {
						if (abortHandler !== null && typeof abortHandler['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = abortHandler;
							abortHandler = arguments[7];
						}
					} else 					if (typeof successHandler != 'undefined') {
						if (successHandler !== null && typeof successHandler['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = successHandler;
							successHandler = arguments[7];
						}
					} else 					if (typeof value != 'undefined') {
						if (value !== null && typeof value['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = value;
							value = arguments[7];
						}
					} else 					if (typeof text != 'undefined') {
						if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = text;
							text = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
				if (typeof successHandler == 'undefined') successHandler=arguments['callee']['__args__'][5][1];
				if (typeof abortHandler == 'undefined') abortHandler=arguments['callee']['__args__'][6][1];
				if (typeof successLbl == 'undefined') successLbl=arguments['callee']['__args__'][7][1];
				if (typeof abortLbl == 'undefined') abortLbl=arguments['callee']['__args__'][8][1];
				var span,cancelBtn,okayBtn;
				$pyjs_kwargs_call($p['$$super']($m['InputDialog'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('inputdialog');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('successHandler', successHandler) : $p['setattr'](self, 'successHandler', successHandler); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('abortHandler', abortHandler) : $p['setattr'](self, 'abortHandler', abortHandler); 
				span = $m['html5']['Span']();
				$p['getattr'](span, 'element')['__is_instance__'] && typeof $p['getattr'](span, 'element')['__setattr__'] == 'function' ? $p['getattr'](span, 'element')['__setattr__']('innerHTML', text) : $p['setattr']($p['getattr'](span, 'element'), 'innerHTML', text); 
				self['appendChild'](span);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('inputElem', $m['html5']['Input']()) : $p['setattr'](self, 'inputElem', $m['html5']['Input']()); 
				$p['getattr'](self, 'inputElem')['__setitem__']('type', 'text');
				$p['getattr'](self, 'inputElem')['__setitem__']('value', value);
				self['appendChild']($p['getattr'](self, 'inputElem'));
				okayBtn = $m['Button'](successLbl, $p['getattr'](self, 'onOkay'));
				okayBtn['__getitem__']('class')['append']('btn_okay');
				self['appendChild'](okayBtn);
				cancelBtn = $m['Button'](abortLbl, $p['getattr'](self, 'onCancel'));
				cancelBtn['__getitem__']('class')['append']('btn_cancel');
				self['appendChild'](cancelBtn);
				self['sinkEvent']('onkeydown');
				self['inputElem']['focus']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['text'],['value', ''],['successHandler', null],['abortHandler', null],['successLbl', 'OK'],['abortLbl', 'Cancel']]);
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
					if (self.prototype['__md5__'] !== 'ca405e553f44a32fb731560ba5cd302d') {
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
				if ($p['bool']($p['op_eq']('Enter', key))) {
					event['stopPropagation']();
					event['preventDefault']();
					self['onOkay']();
				}
				else if ($p['bool']($p['op_eq']('Escape', key))) {
					event['stopPropagation']();
					event['preventDefault']();
					self['onCancel']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onkeydown'] = $method;
			$method = $pyjs__bind_method2('onOkay', function() {
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
					if (self.prototype['__md5__'] !== 'ca405e553f44a32fb731560ba5cd302d') {
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

				if ($p['bool']($p['getattr'](self, 'successHandler'))) {
					self['successHandler'](self, $p['getattr'](self, 'inputElem')['__getitem__']('value'));
				}
				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onOkay'] = $method;
			$method = $pyjs__bind_method2('onCancel', function() {
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
					if (self.prototype['__md5__'] !== 'ca405e553f44a32fb731560ba5cd302d') {
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

				if ($p['bool']($p['getattr'](self, 'abortHandler'))) {
					self['abortHandler'](self, $p['getattr'](self, 'inputElem')['__getitem__']('value'));
				}
				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onCancel'] = $method;
			var $bases = new Array($m['Popup']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('InputDialog', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.ext.inputdialog */


/* end module: html5.ext.inputdialog */


/*
PYJS_DEPS: ['html5', 'html5.ext.popup.Popup', 'html5.ext', 'html5.ext.popup', 'html5.ext.button.Button', 'html5.ext.button']
*/
