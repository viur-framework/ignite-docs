/* start module: widgets.preview */
$pyjs['loaded_modules']['widgets.preview'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.preview']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.preview'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.preview'];
	$m['__repr__'] = function() { return '<module: widgets.preview>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.preview';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['preview'] = $pyjs['loaded_modules']['widgets.preview'];
	try {


		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['Preview'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.preview';
			$cls_definition['__md5__'] = 'f05879fab22b9165a0074b84a885d166';
			$method = $pyjs__bind_method2('__init__', function(urls, entry, modul) {
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
					urls = arguments[1];
					entry = arguments[2];
					modul = arguments[3];
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
					if (self.prototype['__md5__'] !== 'f05879fab22b9165a0074b84a885d166') {
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
							modul = arguments[4];
						}
					} else 					if (typeof entry != 'undefined') {
						if (entry !== null && typeof entry['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = entry;
							entry = arguments[4];
						}
					} else 					if (typeof urls != 'undefined') {
						if (urls !== null && typeof urls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = urls;
							urls = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				var currentUrl,$iter1_nextval,$iter1_type,name,url,btnClose,o,$iter1_iter,$iter1_array,containerDiv,$iter1_idx;
				$pyjs_kwargs_call($p['$$super']($m['Preview'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urls', urls) : $p['setattr'](self, 'urls', urls); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('entry', entry) : $p['setattr'](self, 'entry', entry); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				containerDiv = $m['html5']['Div']();
				containerDiv['__getitem__']('class')['append']('actionbar');
				self['appendChild'](containerDiv);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('urlCb', $m['html5']['Select']()) : $p['setattr'](self, 'urlCb', $m['html5']['Select']()); 
				containerDiv['appendChild']($p['getattr'](self, 'urlCb'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previewFrame', $m['html5']['Iframe']()) : $p['setattr'](self, 'previewFrame', $m['html5']['Iframe']()); 
				self['appendChild']($p['getattr'](self, 'previewFrame'));
				btnClose = $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doClose')}, 'Close']);
				btnClose['__getitem__']('class')['append']('icon close');
				containerDiv['appendChild'](btnClose);
				currentUrl = null;
				$iter1_iter = urls['items']();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					name = $tupleassign1[0];
					url = $tupleassign1[1];
					o = $m['html5']['Option']();
					o['__setitem__']('value', url);
					o['appendChild']($m['html5']['TextNode'](name));
					self['urlCb']['appendChild'](o);
					if ($p['bool']($p['op_is'](currentUrl, null))) {
						currentUrl = url;
					}
				}
				self['setUrl'](currentUrl);
				self['sinkEvent']('onChange');
				self['__getitem__']('class')['append']('preview');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['urls'],['entry'],['modul']]);
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
					if (self.prototype['__md5__'] !== 'f05879fab22b9165a0074b84a885d166') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newUrl;
				event['stopPropagation']();
				newUrl = $p['getattr']($p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex')), 'value');
				self['setUrl'](newUrl);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('setUrl', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f05879fab22b9165a0074b84a885d166') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				url = url['$$replace']('{{id}}', $p['getattr'](self, 'entry')['__getitem__']('id'))['$$replace']('{{modul}}', $p['getattr'](self, 'module'));
				$p['getattr'](self, 'previewFrame')['__setitem__']('src', url);
				return null;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['setUrl'] = $method;
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
					if (self.prototype['__md5__'] !== 'f05879fab22b9165a0074b84a885d166') {
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

				$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doClose'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Preview', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.preview */


/* end module: widgets.preview */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config']
*/
