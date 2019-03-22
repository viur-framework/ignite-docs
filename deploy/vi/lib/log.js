/* start module: log */
$pyjs['loaded_modules']['log'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['log']['__was_initialized__']) return $pyjs['loaded_modules']['log'];
	var $m = $pyjs['loaded_modules']['log'];
	$m['__repr__'] = function() { return '<module: log>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'log';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2500 = new $p['int'](2500);
		$m['html5'] = $p['___import___']('html5', null);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
		$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
		$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
		$m['conf'] = $p['___import___']('config.conf', null, null, false);
		$m['Log'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'log';
			$cls_definition['__md5__'] = '1e3cb33f9d85710c163842b7f2a36d66';
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
					if (self.prototype['__md5__'] !== '1e3cb33f9d85710c163842b7f2a36d66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var openLink,name,versionspan,datespan,builddate,$pyjs_try_err,revspan,versionDiv,revision;
				$p['$$super']($m['Log'], self)['__init__']();
				self['__getitem__']('class')['append']('vi_messenger');
				openLink = $m['html5']['ext']['Button']($m['translate']('Open message center'), $p['getattr'](self, 'toggleMsgCenter'));
				self['appendChild'](openLink);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('logUL', $m['html5']['Ul']()) : $p['setattr'](self, 'logUL', $m['html5']['Ul']()); 
				$p['getattr'](self, 'logUL')['__setitem__']('id', 'statuslist');
				$p['getattr'](self, 'logUL')['__getitem__']('class')['append']('statuslist');
				self['appendChild']($p['getattr'](self, 'logUL'));
				versionDiv = $m['html5']['Div']();
				versionDiv['__getitem__']('class')['append']('versiondiv');
				name = $m['conf']['__getitem__']('vi.viur');
				if ($p['bool'](name)) {
					versionspan = $m['html5']['Span']();
					versionspan['appendChild']($p['sprintf']('%s v%s', $p['tuple']([name, '.'['join'](function(){
						var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,x,$iter1_array;
	$collcomp1 = $p['list']();
					$iter1_iter = $m['conf']['__getitem__']('server.version');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						x = $iter1_nextval['$nextval'];
						$collcomp1['append']($p['str'](x));
					}

	return $collcomp1;}())])));
					versionspan['__getitem__']('class')['append']('serverspan');
					versionDiv['appendChild'](versionspan);
				}
				name = $m['conf']['__getitem__']('vi.name');
				if ($p['bool'](name)) {
					versionspan = $m['html5']['Span']();
					versionspan['appendChild']($p['sprintf']('%s v%s%s', $p['tuple']([name, '.'['join'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,x,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = $m['conf']['__getitem__']('vi.version');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						x = $iter2_nextval['$nextval'];
						$collcomp2['append']($p['str'](x));
					}

	return $collcomp2;}()), $m['conf']['__getitem__']('vi.version.appendix')])));
					versionspan['__getitem__']('class')['append']('versionspan');
					versionDiv['appendChild'](versionspan);
					try {
						builddate = $p['___import___']('version.builddate', null, null, false);
						revision = $p['___import___']('version.revision', null, null, false);
						revspan = $m['html5']['Span']();
						revspan['appendChild']($m['html5']['TextNode']($p['sprintf']('Rev %s', revision)));
						revspan['__getitem__']('class')['append']('revisionspan');
						datespan = $m['html5']['Span']();
						datespan['appendChild']($m['html5']['TextNode']($p['sprintf']('Built %s', builddate)));
						datespan['__getitem__']('class')['append']('datespan');
						versionDiv['appendChild'](revspan);
						versionDiv['appendChild'](datespan);
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
				}
				if ($p['bool'](versionDiv['children']())) {
					self['appendChild'](versionDiv);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('toggleMsgCenter', function() {
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
					if (self.prototype['__md5__'] !== '1e3cb33f9d85710c163842b7f2a36d66') {
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

				if ($p['bool'](self['__getitem__']('class')['__contains__']('is_open'))) {
					self['__getitem__']('class')['remove']('is_open');
				}
				else {
					self['__getitem__']('class')['append']('is_open');
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['toggleMsgCenter'] = $method;
			$method = $pyjs__bind_method2('log', function(type, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					msg = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1e3cb33f9d85710c163842b7f2a36d66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var liwrap,spanMsg,$add2,$add1,spanDate;
				if (!( $p['list'](['success', 'error', 'warning', 'info', 'progress'])['__contains__'](type) )) {
				   throw $p['AssertionError']();
				 }
				liwrap = $m['html5']['Li']();
				liwrap['__getitem__']('class')['append']($p['__op_add']($add1='log_',$add2=type));
				liwrap['__getitem__']('class')['append']('is_new');
				spanDate = $m['html5']['Span']();
				spanDate['appendChild']($m['html5']['TextNode']($m['datetime']['now']()['strftime']('%H:%M:%S')));
				spanDate['__getitem__']('class')['append']('date');
				liwrap['appendChild'](spanDate);
				if ($p['bool']($p['isinstance'](msg, $p['getattr']($m['html5'], 'Widget')))) {
					liwrap['appendChild'](msg);
				}
				else {
					spanMsg = $m['html5']['Span']();
					spanMsg['appendChild']($m['html5']['TextNode']($m['html5']['utils']['unescape'](msg)));
					spanMsg['__getitem__']('class')['append']('msg');
					liwrap['appendChild'](spanMsg);
				}
				$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':$constant_int_2500}, $p['getattr'](self, 'removeNewCls'), liwrap]);
				self['logUL']['appendChild'](liwrap);
				if ($p['bool'](($p['cmp']($p['len']($p['getattr']($p['getattr'](self, 'logUL'), '_children')), $constant_int_1) == 1))) {
					self['logUL']['element']['removeChild']($p['getattr'](liwrap, 'element'));
					self['logUL']['element']['insertBefore']($p['getattr'](liwrap, 'element'), self['logUL']['element']['children']['item']($constant_int_0));
				}
				return null;
			}
	, 1, [null,null,['self'],['type'],['msg']]);
			$cls_definition['log'] = $method;
			$method = $pyjs__bind_method2('removeNewCls', function(span) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					span = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1e3cb33f9d85710c163842b7f2a36d66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				span['__getitem__']('class')['remove']('is_new');
				return null;
			}
	, 1, [null,null,['self'],['span']]);
			$cls_definition['removeNewCls'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1e3cb33f9d85710c163842b7f2a36d66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['logUL']['removeAllChildren']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Log', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end log */


/* end module: log */


/*
PYJS_DEPS: ['html5', 'network.DeferredCall', 'network', 'datetime.datetime', 'datetime', 'i18n.translate', 'i18n', 'config.conf', 'config', 'version.builddate', 'version', 'version.revision']
*/
