/* start module: widgets.search */
$pyjs['loaded_modules']['widgets.search'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.search']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.search'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.search'];
	$m['__repr__'] = function() { return '<module: widgets.search>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.search';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['search'] = $pyjs['loaded_modules']['widgets.search'];
	try {


		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['isReturn'] = $p['___import___']('html5.keycodes.isReturn', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['Search'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.search';
			$cls_definition['__md5__'] = '6b65231b52e95a8c727a029ec27f9c26';
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
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
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
				var lblSearch;
				$pyjs_kwargs_call($p['$$super']($m['Search'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startSearchEvent', $m['EventDispatcher']('startSearch')) : $p['setattr'](self, 'startSearchEvent', $m['EventDispatcher']('startSearch')); 
				self['__getitem__']('class')['append']('search');
				lblSearch = $m['html5']['H2']();
				lblSearch['appendChild']($m['html5']['TextNode']($m['translate']('Fulltext search')));
				self['appendChild'](lblSearch);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('searchInput', $m['html5']['Input']()) : $p['setattr'](self, 'searchInput', $m['html5']['Input']()); 
				$p['getattr'](self, 'searchInput')['__setitem__']('type', 'text');
				self['appendChild']($p['getattr'](self, 'searchInput'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('btn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSearch')}, $m['translate']('Search')])) : $p['setattr'](self, 'btn', $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSearch')}, $m['translate']('Search')])); 
				self['appendChild']($p['getattr'](self, 'btn'));
				self['sinkEvent']('onKeyDown');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_search', '') : $p['setattr'](self, 'last_search', ''); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('doSearch', function() {
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
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
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

				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'searchInput')['__getitem__']('value'), $p['getattr'](self, 'last_search')))) {
					if ($p['bool']($p['len']($p['getattr'](self, 'searchInput')['__getitem__']('value')))) {
						self['startSearchEvent']['fire']($p['getattr'](self, 'searchInput')['__getitem__']('value'));
					}
					else {
						self['resetSearch']();
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_search', $p['getattr'](self, 'searchInput')['__getitem__']('value')) : $p['setattr'](self, 'last_search', $p['getattr'](self, 'searchInput')['__getitem__']('value')); 
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['doSearch'] = $method;
			$method = $pyjs__bind_method2('resetSearch', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['startSearchEvent']['fire'](null);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetSearch'] = $method;
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
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($m['isReturn']($p['getattr'](event, 'keyCode')))) {
					self['doSearch']();
					event['preventDefault']();
					event['stopPropagation']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyDown'] = $method;
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
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'btn')['__getitem__']('class')['__contains__']('is_loading'))) {
					$p['getattr'](self, 'btn')['__getitem__']('class')['remove']('is_loading');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetLoadingState'] = $method;
			$method = $pyjs__bind_method2('reevaluate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['doSearch']();
				return null;
			}
	, 1, [null,null,['self']]);
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
					if (self.prototype['__md5__'] !== '6b65231b52e95a8c727a029ec27f9c26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['searchInput']['focus']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['focus'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Search', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.search */


/* end module: widgets.search */


/*
PYJS_DEPS: ['html5', 'html5.keycodes.isReturn', 'html5.keycodes', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n']
*/
