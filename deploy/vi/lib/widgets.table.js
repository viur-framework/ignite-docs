/* start module: widgets.table */
$pyjs['loaded_modules']['widgets.table'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.table']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.table'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.table'];
	$m['__repr__'] = function() { return '<module: widgets.table>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.table';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['table'] = $pyjs['loaded_modules']['widgets.table'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_280 = new $p['int'](280);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$p['__import_all__']('html5.keycodes', 'widgets', $m, null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
		$m['SelectTable'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.table';
			$cls_definition['__md5__'] = 'c913091005eb090d5fa389f3c4795457';
			$method = $pyjs__bind_method2('__init__', function(checkboxes, indexes) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					checkboxes = arguments[1];
					indexes = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof indexes != 'undefined') {
						if (indexes !== null && typeof indexes['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = indexes;
							indexes = arguments[3];
						}
					} else 					if (typeof checkboxes != 'undefined') {
						if (checkboxes !== null && typeof checkboxes['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = checkboxes;
							checkboxes = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof checkboxes == 'undefined') checkboxes=arguments['callee']['__args__'][3][1];
				if (typeof indexes == 'undefined') indexes=arguments['callee']['__args__'][4][1];
				var $add2,$add1;
				$pyjs_kwargs_call($p['$$super']($m['SelectTable'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionChangedEvent', $m['EventDispatcher']('selectionChanged')) : $p['setattr'](self, 'selectionChangedEvent', $m['EventDispatcher']('selectionChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')) : $p['setattr'](self, 'selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cursorMovedEvent', $m['EventDispatcher']('cursorMoved')) : $p['setattr'](self, 'cursorMovedEvent', $m['EventDispatcher']('cursorMoved')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tableChangedEvent', $m['EventDispatcher']('tableChanged')) : $p['setattr'](self, 'tableChangedEvent', $m['EventDispatcher']('tableChanged')); 
				self['sinkEvent']('onDblClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onKeyDown', 'onKeyUp', 'onMouseOut', 'onChange');
				self['__setitem__']('tabindex', $constant_int_1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedRows', $p['list']([])) : $p['setattr'](self, '_selectedRows', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRow', null) : $p['setattr'](self, '_currentRow', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isMouseDown', false) : $p['setattr'](self, '_isMouseDown', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', false) : $p['setattr'](self, '_isCtlPressed', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ctlStartRow', null) : $p['setattr'](self, '_ctlStartRow', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectionChangedListener', $p['list']([])) : $p['setattr'](self, '_selectionChangedListener', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectionActivatedListeners', $p['list']([])) : $p['setattr'](self, '_selectionActivatedListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursorMovedListeners', $p['list']([])) : $p['setattr'](self, '_cursorMovedListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexes', indexes) : $p['setattr'](self, 'indexes', indexes); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexes_col', ($p['bool'](indexes)? ($constant_int_0) : ((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))) : $p['setattr'](self, 'indexes_col', ($p['bool'](indexes)? ($constant_int_0) : ((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_checkboxes', $p['dict']([])) : $p['setattr'](self, '_checkboxes', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('checkboxes', checkboxes) : $p['setattr'](self, 'checkboxes', checkboxes); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('checkboxes_col', ($p['bool'](checkboxes)? ($p['__op_add']($add1=$p['getattr'](self, 'indexes_col'),$add2=$constant_int_1)) : ((typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))) : $p['setattr'](self, 'checkboxes_col', ($p['bool'](checkboxes)? ($p['__op_add']($add1=$p['getattr'](self, 'indexes_col'),$add2=$constant_int_1)) : ((typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))); 
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['checkboxes', false],['indexes', false]]);
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectTable'], self)['onAttach']();
				self['focus']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
			$method = $pyjs__bind_method2('setHeader', function(headers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					headers = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var head,$iter1_nextval,$iter1_type,tr,$iter1_iter,$iter1_array,th,$iter1_idx;
				tr = $m['html5']['Tr']();
				if ($p['bool']($p['getattr'](self, 'indexes'))) {
					th = $m['html5']['Th']();
					th['__setitem__']('class', 'index');
					tr['appendChild'](th);
				}
				if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
					th = $m['html5']['Th']();
					th['__setitem__']('class', 'check');
					tr['appendChild'](th);
				}
				$iter1_iter = headers;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					head = $iter1_nextval['$nextval'];
					th = $m['html5']['Th']();
					th['appendChild']($m['html5']['TextNode'](head));
					tr['appendChild'](th);
				}
				self['head']['removeAllChildren']();
				self['head']['appendChild'](tr);
				return null;
			}
	, 1, [null,null,['self'],['headers']]);
			$cls_definition['setHeader'] = $method;
			$method = $pyjs__bind_method2('getTrByIndex', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$sub2,$sub1,$iter2_array;
				$iter2_iter = $p['getattr']($p['getattr'](self, 'body'), '_children');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					c = $iter2_nextval['$nextval'];
					if ($p['bool'](($p['cmp'](idx, $constant_int_0) < 1))) {
						return c;
					}
					idx = $p['__op_sub']($sub1=idx,$sub2=c['__getitem__']('rowspan'));
				}
				return null;
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['getTrByIndex'] = $method;
			$method = $pyjs__bind_method2('getIndexByTr', function(tr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter3_idx,idx,$iter3_array,$add3,$iter3_iter,$add4,$iter3_type,$iter3_nextval;
				idx = $constant_int_0;
				$iter3_iter = $p['getattr']($p['getattr'](self, 'body'), '_children');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					c = $iter3_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](c, 'element'), tr))) {
						return idx;
					}
					idx = $p['__op_add']($add3=idx,$add4=c['__getitem__']('rowspan'));
				}
				return idx;
			}
	, 1, [null,null,['self'],['tr']]);
			$cls_definition['getIndexByTr'] = $method;
			$method = $pyjs__bind_method2('_rowForEvent', function(event) {
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,tr,tc;
				try {
					tc = $p['getattr'](event, 'srcElement');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						tc = $p['getattr'](event, 'target');
					}
				}
				if ($p['bool']($p['op_is'](tc, null))) {
					return null;
				}
				tr = $p['getattr'](tc, 'parentElement');
				while ($p['bool'](!$p['op_is']($p['getattr'](tr, 'parentElement'), null))) {
					if ($p['bool']($p['op_eq']($p['getattr'](tr, 'parentElement'), $p['getattr']($p['getattr'](self, 'body'), 'element')))) {
						return tr;
					}
					tr = $p['getattr'](tr, 'parentElement');
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_rowForEvent'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,tr,$and2,row;
				tr = self['_rowForEvent'](event);
				if ($p['bool']($p['op_is'](tr, null))) {
					return null;
				}
				row = self['getIndexByTr'](tr);
				if ($p['bool'](($p['bool']($and1=$p['getattr'](self, 'checkboxes'))?$m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, '_checkboxes')['__getitem__'](row)):$and1))) {
					$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', $p['getattr'](self, '_selectedRows')['__contains__'](row));
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr,$and3,$and4,row;
				tr = self['_rowForEvent'](event);
				if ($p['bool']($p['op_is'](tr, null))) {
					return null;
				}
				row = self['getIndexByTr'](tr);
				if ($p['bool']($p['getattr'](self, '_isCtlPressed'))) {
					if ($p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row))) {
						self['removeSelectedRow'](row);
					}
					else {
						self['addSelectedRow'](row);
					}
				}
				else if ($p['bool'](($p['bool']($and3=$p['getattr'](self, 'checkboxes'))?$m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, '_checkboxes')['__getitem__'](row)):$and3))) {
					if ($p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row))) {
						self['removeSelectedRow'](row);
					}
					else {
						self['addSelectedRow'](row);
					}
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isMouseDown', true) : $p['setattr'](self, '_isMouseDown', true); 
					if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
						if ($p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row))) {
							self['removeSelectedRow'](row);
						}
						else {
							self['addSelectedRow'](row);
						}
					}
					$pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, 'checkboxes'))}, self['getIndexByTr'](tr)]);
				}
				event['preventDefault']();
				self['focus']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseOut', function(event) {
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isMouseDown', false) : $p['setattr'](self, '_isMouseDown', false); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseOut'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isMouseDown', false) : $p['setattr'](self, '_isMouseDown', false); 
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr;
				if ($p['bool']($p['getattr'](self, '_isMouseDown'))) {
					tr = self['_rowForEvent'](event);
					if ($p['bool']($p['op_is'](tr, null))) {
						return null;
					}
					self['addSelectedRow'](self['getIndexByTr'](tr));
					event['preventDefault']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onMouseMove'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$sub4,$or2,$and5,$and6,$sub6,$add6,$add7,$add12,$add5,$sub3,$add10,$add8,$add9,$sub5,$add11;
				if ($p['bool']((typeof isArrowDown == "undefined"?$m['isArrowDown']:isArrowDown)($p['getattr'](event, 'keyCode')))) {
					if ($p['bool']($p['op_is']($p['getattr'](self, '_currentRow'), null))) {
						self['setCursorRow']($constant_int_0);
					}
					else {
						if ($p['bool']($p['getattr'](self, '_isCtlPressed'))) {
							if ($p['bool'](($p['cmp']($p['getattr'](self, '_ctlStartRow'), $p['getattr'](self, '_currentRow')) == 1))) {
								self['removeSelectedRow']($p['getattr'](self, '_currentRow'));
							}
							else {
								self['addSelectedRow']($p['getattr'](self, '_currentRow'));
								if ($p['bool'](($p['cmp']($p['__op_add']($add5=$p['getattr'](self, '_currentRow'),$add6=$constant_int_1), self['getRowCount']()) == -1))) {
									self['addSelectedRow']($p['__op_add']($add7=$p['getattr'](self, '_currentRow'),$add8=$constant_int_1));
								}
							}
						}
						if ($p['bool'](($p['cmp']($p['__op_add']($add9=$p['getattr'](self, '_currentRow'),$add10=$constant_int_1), self['getRowCount']()) == -1))) {
							$pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, '_isCtlPressed'))}, $p['__op_add']($add11=$p['getattr'](self, '_currentRow'),$add12=$constant_int_1)]);
						}
					}
					event['preventDefault']();
				}
				else if ($p['bool']((typeof isArrowUp == "undefined"?$m['isArrowUp']:isArrowUp)($p['getattr'](event, 'keyCode')))) {
					if ($p['bool']($p['op_is']($p['getattr'](self, '_currentRow'), null))) {
						self['setCursorRow']($constant_int_0);
					}
					else {
						if ($p['bool']($p['getattr'](self, '_isCtlPressed'))) {
							if ($p['bool'](($p['cmp']($p['getattr'](self, '_ctlStartRow'), $p['getattr'](self, '_currentRow')) == -1))) {
								self['removeSelectedRow']($p['getattr'](self, '_currentRow'));
							}
							else {
								self['addSelectedRow']($p['getattr'](self, '_currentRow'));
								if ($p['bool'](($p['cmp']($p['getattr'](self, '_currentRow'), $constant_int_0) == 1))) {
									self['addSelectedRow']($p['__op_sub']($sub3=$p['getattr'](self, '_currentRow'),$sub4=$constant_int_1));
								}
							}
						}
						if ($p['bool'](($p['cmp']($p['getattr'](self, '_currentRow'), $constant_int_0) == 1))) {
							$pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, '_isCtlPressed'))}, $p['__op_sub']($sub5=$p['getattr'](self, '_currentRow'),$sub6=$constant_int_1)]);
						}
					}
					event['preventDefault']();
				}
				else if ($p['bool']((typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode')))) {
					if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_selectedRows')), $constant_int_0) == 1))) {
						self['selectionActivatedEvent']['fire'](self, $p['getattr'](self, '_selectedRows'));
						event['preventDefault']();
						return null;
					}
					if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentRow'), null))) {
						self['selectionActivatedEvent']['fire'](self, $p['list']([$p['getattr'](self, '_currentRow')]));
						event['preventDefault']();
						return null;
					}
				}
				else if ($p['bool']((typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', true) : $p['setattr'](self, '_isCtlPressed', true); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ctlStartRow', ($p['bool']($or1=$p['getattr'](self, '_currentRow'))?$or1:$constant_int_0)) : $p['setattr'](self, '_ctlStartRow', ($p['bool']($or1=$p['getattr'](self, '_currentRow'))?$or1:$constant_int_0)); 
					if ($p['bool'](($p['bool']($and5=!$p['op_is']($p['getattr'](self, '_currentRow'), null))?!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__']($p['getattr'](self, '_currentRow'))):$and5))) {
						self['addSelectedRow']($p['getattr'](self, '_currentRow'));
						$pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':false}, null]);
					}
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']((typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCtlPressed', false) : $p['setattr'](self, '_isCtlPressed', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ctlStartRow', null) : $p['setattr'](self, '_ctlStartRow', null); 
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onKeyUp'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentRow'), null))) {
					self['selectionActivatedEvent']['fire'](self, $p['list']([$p['getattr'](self, '_currentRow')]));
				}
				event['preventDefault']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDblClick'] = $method;
			$method = $pyjs__bind_method2('addSelectedRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr;
				if ($p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row))) {
					return null;
				}
				self['_selectedRows']['append'](row);
				tr = self['getTrByIndex'](row);
				tr['__getitem__']('class')['append']('is_selected');
				if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
					$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', true);
				}
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				$p['printFunc']([$p['sprintf']('Currently selected rows: %s', $p['str']($p['getattr'](self, '_selectedRows')))], 1);
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['addSelectedRow'] = $method;
			$method = $pyjs__bind_method2('removeSelectedRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row)))) {
					return null;
				}
				self['_selectedRows']['remove'](row);
				tr = self['getTrByIndex'](row);
				tr['__getitem__']('class')['remove']('is_selected');
				if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
					$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', false);
				}
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['removeSelectedRow'] = $method;
			$method = $pyjs__bind_method2('selectRow', function(newRow) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					newRow = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,tr,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,row;
				self['setCursorRow'](newRow);
				$iter4_iter = $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					row = $iter4_nextval['$nextval'];
					if ($p['bool'](!$p['op_eq'](row, newRow))) {
						self['removeSelectedRow'](row);
					}
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](newRow)))) {
					self['_selectedRows']['append'](newRow);
					tr = self['getTrByIndex'](newRow);
					tr['__getitem__']('class')['append']('is_selected');
				}
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				return null;
			}
	, 1, [null,null,['self'],['newRow']]);
			$cls_definition['selectRow'] = $method;
			$method = $pyjs__bind_method2('setCursorRow', function(row, removeExistingSelection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					removeExistingSelection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof removeExistingSelection == 'undefined') removeExistingSelection=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_array,$iter5_iter,$iter5_idx,$iter5_type;
				if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentRow'), null))) {
					self['getTrByIndex']($p['getattr'](self, '_currentRow'))['__getitem__']('class')['remove']('is_focused');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRow', row) : $p['setattr'](self, '_currentRow', row); 
				if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentRow'), null))) {
					self['getTrByIndex']($p['getattr'](self, '_currentRow'))['__getitem__']('class')['append']('is_focused');
					self['cursorMovedEvent']['fire'](self, row);
				}
				if ($p['bool'](removeExistingSelection)) {
					$iter5_iter = $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						row = $iter5_nextval['$nextval'];
						self['removeSelectedRow'](row);
					}
					self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				}
				$m['DeferredCall']($p['getattr'](self, 'focusRow'), row);
				return null;
			}
	, 1, [null,null,['self'],['row'],['removeExistingSelection', true]]);
			$cls_definition['setCursorRow'] = $method;
			$method = $pyjs__bind_method2('focusRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr;
				tr = self['getTrByIndex'](row);
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['focusRow'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, '_selectedRows'))) {
					return $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
				}
				else if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentRow'), null))) {
					return $p['list']([$p['getattr'](self, '_currentRow')]);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentSelection'] = $method;
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
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['SelectTable'], self)['clear']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRow', null) : $p['setattr'](self, '_currentRow', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedRows', $p['list']([])) : $p['setattr'](self, '_selectedRows', $p['list']([])); 
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				self['tableChangedEvent']['fire'](self, self['getRowCount']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('removeRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row))) {
					self['_selectedRows']['remove'](row);
					self['selectionChangedEvent']['fire'](self);
				}
				if ($p['bool']($p['op_eq']($p['getattr'](self, '_currentRow'), row))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRow', null) : $p['setattr'](self, '_currentRow', null); 
					self['cursorMovedEvent']['fire'](self);
				}
				self['tableChangedEvent']['fire'](self, self['getRowCount']());
				$p['$$super']($m['SelectTable'], self)['removeRow'](row);
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['removeRow'] = $method;
			$method = $pyjs__bind_method2('_extraCols', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13;
				return $p['__op_add']($add13=$p['int']($p['getattr'](self, 'checkboxes')),$add14=$p['int']($p['getattr'](self, 'indexes')));
			}
	, 1, [null,null,['self']]);
			$cls_definition['_extraCols'] = $method;
			$method = $pyjs__bind_method2('prepareCol', function(row, col) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					col = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var checkbox,$add18,lbl,$add15,$add16,$sub8,$sub7,$add17;
				$p['$$super']($m['SelectTable'], self)['prepareCol'](row, $p['__op_sub']($sub7=$p['__op_add']($add15=col,$add16=self['_extraCols']()),$sub8=$constant_int_1));
				if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
					checkbox = $m['html5']['Input']();
					checkbox['__setitem__']('type', 'checkbox');
					checkbox['__getitem__']('class')['append']('check');
					checkbox['__setitem__']('checked', false);
					self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['getattr'](self, 'checkboxes_col'), checkbox);
					$p['getattr'](self, '_checkboxes')['__setitem__'](row, checkbox);
				}
				if ($p['bool']($p['getattr'](self, 'indexes'))) {
					lbl = $m['html5']['Label']($p['str']($p['__op_add']($add17=row,$add18=$constant_int_1)));
					lbl['__getitem__']('class')['append']('index');
					self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['getattr'](self, 'indexes_col'), lbl);
				}
				self['tableChangedEvent']['fire'](self, self['getRowCount']());
				return null;
			}
	, 1, [null,null,['self'],['row'],['col']]);
			$cls_definition['prepareCol'] = $method;
			$method = $pyjs__bind_method2('setCell', function(row, col, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					col = arguments[2];
					val = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,$add19;
				self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['__op_add']($add19=col,$add20=self['_extraCols']()), val);
				return null;
			}
	, 1, [null,null,['self'],['row'],['col'],['val']]);
			$cls_definition['setCell'] = $method;
			$method = $pyjs__bind_method2('selectAll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,tr,$iter6_array,$iter6_iter,row,$iter6_nextval;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedRows', $p['range']($constant_int_0, self['getRowCount']())) : $p['setattr'](self, '_selectedRows', $p['range']($constant_int_0, self['getRowCount']())); 
				$iter6_iter = $p['getattr'](self, '_selectedRows');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					row = $iter6_nextval['$nextval'];
					tr = self['getTrByIndex'](row);
					if ($p['bool'](!$p['bool'](tr['__getitem__']('class')['__contains__']('is_selected')))) {
						tr['__getitem__']('class')['append']('is_selected');
					}
					if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
						$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', true);
					}
				}
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				return $p['len']($p['getattr'](self, '_selectedRows'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['selectAll'] = $method;
			$method = $pyjs__bind_method2('unSelectAll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var unsel,$iter7_nextval,$iter7_iter,$iter7_array,tr,$iter7_idx,$iter7_type,row;
				unsel = $p['len']($p['getattr'](self, '_selectedRows'));
				$iter7_iter = $p['getattr'](self, '_selectedRows');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					row = $iter7_nextval['$nextval'];
					tr = self['getTrByIndex'](row);
					tr['__getitem__']('class')['remove']('is_selected');
					if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
						$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', false);
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedRows', $p['list']([])) : $p['setattr'](self, '_selectedRows', $p['list']([])); 
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				return unsel;
			}
	, 1, [null,null,['self']]);
			$cls_definition['unSelectAll'] = $method;
			$method = $pyjs__bind_method2('invertSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c913091005eb090d5fa389f3c4795457') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_iter,$iter8_idx,tr,$iter8_array,current,$iter8_nextval,$iter8_type,row;
				current = $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_selectedRows', $p['list']([])) : $p['setattr'](self, '_selectedRows', $p['list']([])); 
				$iter8_iter = $p['range']($constant_int_0, self['getRowCount']());
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					row = $iter8_nextval['$nextval'];
					tr = self['getTrByIndex'](row);
					if ($p['bool'](current['__contains__'](row))) {
						tr['__getitem__']('class')['remove']('is_selected');
					}
					else {
						self['_selectedRows']['append'](row);
						tr['__getitem__']('class')['append']('is_selected');
					}
					if ($p['bool']($p['getattr'](self, 'checkboxes'))) {
						$p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', $p['getattr'](self, '_selectedRows')['__contains__'](row));
					}
				}
				self['selectionChangedEvent']['fire'](self, self['getCurrentSelection']());
				return $p['tuple']([$p['len']($p['getattr'](self, '_selectedRows')), $p['len'](current)]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['invertSelection'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Table'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SelectTable', $p['tuple']($bases), $data);
		})();
		$m['DataTable'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.table';
			$cls_definition['__md5__'] = '01386cf9406c34d145c9225d061a7626';
			$method = $pyjs__bind_method2('__init__', function(_loadOnDisplay) {
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
					_loadOnDisplay = arguments[1];
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
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof _loadOnDisplay != 'undefined') {
						if (_loadOnDisplay !== null && typeof _loadOnDisplay['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = _loadOnDisplay;
							_loadOnDisplay = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof _loadOnDisplay == 'undefined') _loadOnDisplay=arguments['callee']['__args__'][3][1];
				var f,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$iter9_type;
				$p['$$super']($m['DataTable'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', $pyjs_kwargs_call(null, $m['SelectTable'], args, kwargs, [{}])) : $p['setattr'](self, 'table', $pyjs_kwargs_call(null, $m['SelectTable'], args, kwargs, [{}])); 
				self['appendChild']($p['getattr'](self, 'table'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loadOnDisplay', _loadOnDisplay) : $p['setattr'](self, '_loadOnDisplay', _loadOnDisplay); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_model', $p['list']([])) : $p['setattr'](self, '_model', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shownFields', $p['list']([])) : $p['setattr'](self, '_shownFields', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_modelIdx', $constant_int_0) : $p['setattr'](self, '_modelIdx', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', false) : $p['setattr'](self, '_isAjaxLoading', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dataProvider', null) : $p['setattr'](self, '_dataProvider', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cellRender', $p['dict']([])) : $p['setattr'](self, '_cellRender', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionChangedEvent', $m['EventDispatcher']('selectionChanged')) : $p['setattr'](self, 'selectionChangedEvent', $m['EventDispatcher']('selectionChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')) : $p['setattr'](self, 'selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tableChangedEvent', $m['EventDispatcher']('tableChanged')) : $p['setattr'](self, 'tableChangedEvent', $m['EventDispatcher']('tableChanged')); 
				self['table']['selectionChangedEvent']['register'](self);
				self['table']['selectionActivatedEvent']['register'](self);
				self['table']['tableChangedEvent']['register'](self);
				$iter9_iter = $p['list'](['cursorMovedEvent', 'setHeader']);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					f = $iter9_nextval['$nextval'];
					$p['setattr'](self, f, $p['getattr']($p['getattr'](self, 'table'), f));
				}
				self['cursorMovedEvent']['register'](self);
				self['__getitem__']('style')['__setitem__']('overflow', 'scroll');
				self['recalcHeight']();
				self['sinkEvent']('onScroll');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['_loadOnDisplay', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('recalcHeight', function() {
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
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
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
				var $sub9,$sub10;
				self['__getitem__']('style')['__setitem__']('max-height', $p['sprintf']('%spx', $p['__op_sub']($sub9=$p['int']((typeof eval == "undefined"?$m['eval']:eval)('window.top.innerHeight')),$sub10=$constant_int_280)));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['recalcHeight'] = $method;
			$method = $pyjs__bind_method2('setDataProvider', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3;
				if (!( ($p['bool']($or3=$p['op_eq'](obj, null))?$or3:$p['dir'](obj)['__contains__']('onNextBatchNeeded')) )) {
				   throw $p['AssertionError']("The dataProvider must provide a 'onNextBatchNeeded' function");
				 }
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dataProvider', obj) : $p['setattr'](self, '_dataProvider', obj); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', false) : $p['setattr'](self, '_isAjaxLoading', false); 
				if ($p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'))) {
					$p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
				}
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['setDataProvider'] = $method;
			$method = $pyjs__bind_method2('onCursorMoved', function(table, row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					row = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add21,$sub12,$add22,tr,$add24,$sub11,$add23;
				tr = table['getTrByIndex'](row);
				if ($p['bool']($p['op_is'](tr, null))) {
					return null;
				}
				return null;
				if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'scrollTop'), $p['getattr'](tr, 'offsetTop')) == 1))) {
					$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('scrollTop', $p['getattr'](tr, 'offsetTop')) : $p['setattr']($p['getattr'](self, 'element'), 'scrollTop', $p['getattr'](tr, 'offsetTop')); 
				}
				else if ($p['bool'](($p['cmp']($p['__op_add']($add21=$p['getattr']($p['getattr'](self, 'element'), 'scrollTop'),$add22=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight')), $p['getattr'](tr, 'offsetTop')) == -1))) {
					$p['getattr'](self, 'element')['__is_instance__'] && typeof $p['getattr'](self, 'element')['__setattr__'] == 'function' ? $p['getattr'](self, 'element')['__setattr__']('scrollTop', $p['__op_sub']($sub11=$p['__op_add']($add23=$p['getattr'](tr, 'offsetTop'),$add24=$p['getattr'](tr, 'clientHeight')),$sub12=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight'))) : $p['setattr']($p['getattr'](self, 'element'), 'scrollTop', $p['__op_sub']($sub11=$p['__op_add']($add23=$p['getattr'](tr, 'offsetTop'),$add24=$p['getattr'](tr, 'clientHeight')),$sub12=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight'))); 
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['row']]);
			$cls_definition['onCursorMoved'] = $method;
			$method = $pyjs__bind_method2('getRowCount', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['len']($p['getattr'](self, '_model'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getRowCount'] = $method;
			$method = $pyjs__bind_method2('add', function(obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$add26;
				obj['__setitem__']('_uniqeIndex', $p['getattr'](self, '_modelIdx'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_modelIdx', $p['__op_add']($add25=$p['getattr'](self, '_modelIdx'),$add26=$constant_int_1)) : $p['setattr'](self, '_modelIdx', $p['__op_add']($add25=$p['getattr'](self, '_modelIdx'),$add26=$constant_int_1)); 
				self['_model']['append'](obj);
				self['_renderObject'](obj);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', false) : $p['setattr'](self, '_isAjaxLoading', false); 
				if ($p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'))) {
					$p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
				}
				self['testIfNextBatchNeededImmediately']();
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('extend', function(objList) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					objList = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add28,$iter10_nextval,obj,$iter10_array,$add27,$iter10_type,$iter10_iter,$iter10_idx;
				self['table']['prepareGrid']($p['len'](objList), $p['len']($p['getattr'](self, '_shownFields')));
				$iter10_iter = objList;
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					obj = $iter10_nextval['$nextval'];
					obj['__setitem__']('_uniqeIndex', $p['getattr'](self, '_modelIdx'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_modelIdx', $p['__op_add']($add27=$p['getattr'](self, '_modelIdx'),$add28=$constant_int_1)) : $p['setattr'](self, '_modelIdx', $p['__op_add']($add27=$p['getattr'](self, '_modelIdx'),$add28=$constant_int_1)); 
					self['_model']['append'](obj);
					$pyjs_kwargs_call(self, '_renderObject', null, null, [{'tableIsPrepared':true}, obj]);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', false) : $p['setattr'](self, '_isAjaxLoading', false); 
					if ($p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'))) {
						$p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
					}
				}
				self['testIfNextBatchNeededImmediately']();
				return null;
			}
	, 1, [null,null,['self'],['objList']]);
			$cls_definition['extend'] = $method;
			$method = $pyjs__bind_method2('testIfNextBatchNeededImmediately', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add29,$and8,c,$or6,$or5,parent,$iter11_iter,$iter11_type,$and7,sumHeight,$iter11_array,$iter11_nextval,$iter11_idx,$add30;
				sumHeight = $constant_int_0;
				$iter11_iter = $p['getattr']($p['getattr'](self, 'table'), '_children');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					c = $iter11_nextval['$nextval'];
					if ($p['bool']($p['dir']($p['getattr'](c, 'element'))['__contains__']('clientHeight'))) {
						sumHeight = $p['__op_add']($add29=sumHeight,$add30=$p['getattr']($p['getattr'](c, 'element'), 'clientHeight'));
					}
				}
				if ($p['bool'](!$p['bool'](sumHeight))) {
					parent = self['parent']();
					parent['removeChild'](self);
					$m['html5']['Body']()['appendChild'](self);
					sumHeight = $p['getattr']($p['getattr']($p['getattr'](self, 'table'), 'element'), 'clientHeight');
					$m['html5']['Body']()['removeChild'](self);
					parent['appendChild'](self);
				}
				if ($p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, '_isAjaxLoading')))?($p['bool']($or5=$p['getattr'](self, '_loadOnDisplay'))?$or5:!$p['bool'](($p['cmp'](sumHeight, $p['int']($p['__getslice'](self['__getitem__']('style')['__getitem__']('max-height'), 0, (typeof ($usub3=$constant_int_2)=='number'?
					-$usub3:
					$p['op_usub']($usub3))))) == 1))):$and7))) {
					if ($p['bool']($p['getattr'](self, '_dataProvider'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', true) : $p['setattr'](self, '_isAjaxLoading', true); 
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading')))) {
							$p['getattr'](self, 'table')['__getitem__']('class')['append']('is_loading');
						}
						self['_dataProvider']['onNextBatchNeeded']();
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIfNextBatchNeededImmediately'] = $method;
			$method = $pyjs__bind_method2('remove', function(objOrIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					objOrIndex = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and10,$and9;
				if ($p['bool']($p['isinstance'](objOrIndex, $p['dict']))) {
					if (!( $p['getattr'](self, '_model')['__contains__'](objOrIndex) )) {
					   throw $p['AssertionError']('Cannot remove unknown object from Table');
					 }
					objOrIndex = self['_model']['index'](objOrIndex);
				}
				if ($p['bool']($p['isinstance'](objOrIndex, $p['int']))) {
					if (!( ($p['bool']($and9=($p['cmp'](objOrIndex, $constant_int_0) == 1))?($p['cmp'](objOrIndex, $p['len']($p['getattr'](self, '_model'))) == -1):$and9) )) {
					   throw $p['AssertionError']('Modelindex out of range');
					 }
					self['_model']['remove']($p['getattr'](self, '_model')['__getitem__'](objOrIndex));
					self['table']['removeRow'](objOrIndex);
				}
				else {
					throw ($p['TypeError']($p['sprintf']('Expected int or dict, got %s', $p['str']($p['type'](objOrIndex)))));
				}
				return null;
			}
	, 1, [null,null,['self'],['objOrIndex']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('clear', function(keepModel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					keepModel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof keepModel == 'undefined') keepModel=arguments['callee']['__args__'][3][1];

				self['table']['clear']();
				if ($p['bool'](!$p['bool'](keepModel))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_model', $p['list']([])) : $p['setattr'](self, '_model', $p['list']([])); 
				}
				return null;
			}
	, 1, [null,null,['self'],['keepModel', false]]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('_renderObject', function(obj, tableIsPrepared) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					tableIsPrepared = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tableIsPrepared == 'undefined') tableIsPrepared=arguments['callee']['__args__'][4][1];
				var $iter12_type,lbl,rowIdx,$sub13,$iter12_idx,$add31,$iter12_array,cellIdx,$sub14,$iter12_iter,field,$add32,$iter12_nextval;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_shownFields')))) {
					return null;
				}
				rowIdx = self['_model']['index'](obj);
				cellIdx = $constant_int_0;
				if ($p['bool'](!$p['bool'](tableIsPrepared))) {
					self['table']['prepareCol'](rowIdx, $p['__op_sub']($sub13=$p['len']($p['getattr'](self, '_shownFields')),$sub14=$constant_int_1));
				}
				$iter12_iter = $p['getattr'](self, '_shownFields');
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					field = $iter12_nextval['$nextval'];
					if ($p['bool'](self['_cellRender']['keys']()['__contains__'](field))) {
						lbl = $p['getattr'](self, '_cellRender')['__getitem__'](field)['render'](obj, field);
					}
					else if ($p['bool'](obj['keys']()['__contains__'](field))) {
						lbl = $m['html5']['Label'](obj['__getitem__'](field));
					}
					else {
						lbl = $m['html5']['Label']('...');
					}
					self['table']['setCell'](rowIdx, cellIdx, lbl);
					cellIdx = $p['__op_add']($add31=cellIdx,$add32=$constant_int_1);
				}
				return null;
			}
	, 1, [null,null,['self'],['obj'],['tableIsPrepared', false]]);
			$cls_definition['_renderObject'] = $method;
			$method = $pyjs__bind_method2('rebuildTable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,obj,$iter13_array;
				$pyjs_kwargs_call(self, 'clear', null, null, [{'keepModel':true}]);
				self['table']['prepareGrid']($p['len']($p['getattr'](self, '_model')), $p['len']($p['getattr'](self, '_shownFields')));
				$iter13_iter = $p['getattr'](self, '_model');
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					obj = $iter13_nextval['$nextval'];
					$pyjs_kwargs_call(self, '_renderObject', null, null, [{'tableIsPrepared':true}, obj]);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rebuildTable'] = $method;
			$method = $pyjs__bind_method2('setShownFields', function(fields) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fields = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shownFields', fields) : $p['setattr'](self, '_shownFields', fields); 
				self['rebuildTable']();
				return null;
			}
	, 1, [null,null,['self'],['fields']]);
			$cls_definition['setShownFields'] = $method;
			$method = $pyjs__bind_method2('onScroll', function(event) {
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
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add33,$add34,$and12,$and11;
				if ($p['bool']($p['getattr'](self, '_loadOnDisplay'))) {
					return null;
				}
				self['recalcHeight']();
				if ($p['bool'](($p['bool']($and11=((($p['cmp']($p['__op_add']($add33=$p['getattr']($p['getattr'](self, 'element'), 'scrollTop'),$add34=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight')), $p['getattr']($p['getattr'](self, 'element'), 'scrollHeight')))|1) == 1))?!$p['bool']($p['getattr'](self, '_isAjaxLoading')):$and11))) {
					if ($p['bool']($p['getattr'](self, '_dataProvider'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isAjaxLoading', true) : $p['setattr'](self, '_isAjaxLoading', true); 
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading')))) {
							$p['getattr'](self, 'table')['__getitem__']('class')['append']('is_loading');
						}
						self['_dataProvider']['onNextBatchNeeded']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onScroll'] = $method;
			$method = $pyjs__bind_method2('onSelectionChanged', function(table, rows) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					rows = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var vals;
				vals = function(){
					var $iter14_array,$iter14_type,$or7,$collcomp1,$or8,$iter14_iter,x,$iter14_idx,$iter14_nextval;
	$collcomp1 = $p['list']();
				$iter14_iter = ($p['bool']($or7=rows)?$or7:$p['list']([]));
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					x = $iter14_nextval['$nextval'];
					$collcomp1['append']($p['getattr'](self, '_model')['__getitem__'](x));
				}

	return $collcomp1;}();
				self['selectionChangedEvent']['fire'](self, vals);
				return null;
			}
	, 1, [null,null,['self'],['table'],['rows']]);
			$cls_definition['onSelectionChanged'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, rows) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					rows = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var vals;
				vals = function(){
					var $iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,x;
	$collcomp2 = $p['list']();
				$iter15_iter = rows;
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					x = $iter15_nextval['$nextval'];
					$collcomp2['append']($p['getattr'](self, '_model')['__getitem__'](x));
				}

	return $collcomp2;}();
				self['selectionActivatedEvent']['fire'](self, vals);
				return null;
			}
	, 1, [null,null,['self'],['table'],['rows']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('onTableChanged', function(table, rowCount) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					rowCount = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['tableChangedEvent']['fire'](self, rowCount);
				return null;
			}
	, 1, [null,null,['self'],['table'],['rowCount']]);
			$cls_definition['onTableChanged'] = $method;
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
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rows,$or9,$or10;
				rows = self['table']['getCurrentSelection']();
				if ($p['bool'](($p['bool']($or9=!$p['bool']($p['getattr'](self, '_model')))?$or9:!$p['bool'](rows)))) {
					return $p['list']([]);
				}
				return function(){
					var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,x,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
				$iter16_iter = rows;
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					x = $iter16_nextval['$nextval'];
					$collcomp3['append']($p['getattr'](self, '_model')['__getitem__'](x));
				}

	return $collcomp3;}();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('setCellRender', function(field, render) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					field = arguments[1];
					render = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['op_is'](render, null))) {
					if ($p['bool'](self['_cellRender']['keys']()['__contains__'](field))) {
						$p['getattr'](self, '_cellRender')['__delitem__'](field);
					}
				}
				else {
					if (!( $p['dir'](render)['__contains__']('render') )) {
					   throw $p['AssertionError']("The render must provide a 'render' method");
					 }
					$p['getattr'](self, '_cellRender')['__setitem__'](field, render);
				}
				self['rebuildTable']();
				return null;
			}
	, 1, [null,null,['self'],['field'],['render']]);
			$cls_definition['setCellRender'] = $method;
			$method = $pyjs__bind_method2('setCellRenders', function(renders) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					renders = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,$iter17_iter,render,field,$iter17_array,$iter17_idx,$iter17_type;
				if (!( $p['isinstance'](renders, $p['dict']) )) {
				   throw $p['AssertionError']();
				 }
				$iter17_iter = renders['items']();
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
					field = $tupleassign1[0];
					render = $tupleassign1[1];
					if ($p['bool']($p['op_is'](render, null))) {
						if ($p['bool'](self['_cellRender']['keys']()['__contains__'](field))) {
							$p['getattr'](self, '_cellRender')['__delitem__'](field);
						}
					}
					else {
						if (!( $p['dir'](render)['__contains__']('render') )) {
						   throw $p['AssertionError']("The render must provide a 'render' method");
						 }
						$p['getattr'](self, '_cellRender')['__setitem__'](field, render);
					}
				}
				self['rebuildTable']();
				return null;
			}
	, 1, [null,null,['self'],['renders']]);
			$cls_definition['setCellRenders'] = $method;
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
					if (self.prototype['__md5__'] !== '01386cf9406c34d145c9225d061a7626') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var selection;
				selection = self['getCurrentSelection']();
				if ($p['bool'](($p['cmp']($p['len'](selection), $constant_int_0) == 1))) {
					self['selectionActivatedEvent']['fire'](self, selection);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activateCurrentSelection'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DataTable', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.table */


/* end module: widgets.table */


/*
PYJS_DEPS: ['html5', 'utils', 'event.EventDispatcher', 'event', 'html5.keycodes', 'network.DeferredCall', 'network']
*/
