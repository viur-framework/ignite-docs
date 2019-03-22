/* start module: bones.relational */
$pyjs['loaded_modules']['bones.relational'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.relational']['__was_initialized__']) return $pyjs['loaded_modules']['bones.relational'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.relational'];
	$m['__repr__'] = function() { return '<module: bones.relational>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.relational';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['relational'] = $pyjs['loaded_modules']['bones.relational'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['json'] = $p['___import___']('json', 'bones');
		$m['utils'] = $p['___import___']('utils', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
		$m['ListWidget'] = $p['___import___']('widgets.list.ListWidget', 'bones', null, false);
		$m['InternalEdit'] = $p['___import___']('widgets.edit.InternalEdit', 'bones', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'bones', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['getDefaultValues'] = function(structure) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter1_nextval,$iter1_type,$and1,k,$and3,defaultValues,$iter1_iter,$iter1_array,v,$and2,$iter1_idx;
			defaultValues = $p['dict']([]);
			$iter1_iter = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,k,$collcomp1,$iter2_idx,v,$iter2_array;
	$collcomp1 = $p['dict']();
			$iter2_iter = structure;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
				k = $tupleassign2[0];
				v = $tupleassign2[1];
				$collcomp1['__setitem__'](k, v);
			}

	return $collcomp1;}()['items']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				if ($p['bool'](($p['bool']($and1=v['keys']()['__contains__']('params'))?($p['bool']($and2=v['__getitem__']('params'))?v['__getitem__']('params')['keys']()['__contains__']('defaultValue'):$and2):$and1))) {
					defaultValues['__setitem__'](k, v['__getitem__']('params')['__getitem__']('defaultValue'));
				}
			}
			return defaultValues;
		};
		$m['getDefaultValues']['__name__'] = 'getDefaultValues';

		$m['getDefaultValues']['__bind_type__'] = 0;
		$m['getDefaultValues']['__args__'] = [null,null,['structure']];
		$m['RelationalBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = '55e449ab467e04e174d51805595deb46';
			$method = $pyjs__bind_method2('__init__', function(module, boneName, skelStructure) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					boneName = arguments[2];
					skelStructure = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '55e449ab467e04e174d51805595deb46') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RelationalBoneExtractor'], self)['__init__'](module, boneName, skelStructure);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', '$(dest.name)') : $p['setattr'](self, 'format', '$(dest.name)'); 
				if ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('format'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', skelStructure['__getitem__'](boneName)['__getitem__']('format')) : $p['setattr'](self, 'format', skelStructure['__getitem__'](boneName)['__getitem__']('format')); 
				}
				return null;
			}
	, 1, [null,null,['self'],['module'],['boneName'],['skelStructure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('render', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '55e449ab467e04e174d51805595deb46') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,val,$or2,$pyjs_try_err,structure;
				if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
				   throw $p['AssertionError']($p['sprintf']('render() was called with field %s, expected %s', $p['tuple']([field, $p['getattr'](self, 'boneName')])));
				 }
				val = data['get'](field);
				if ($p['bool'](!$p['bool'](field))) {
					return '';
				}
				structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
				try {
					if ($p['bool'](!$p['bool']($p['isinstance'](val, $p['list'])))) {
						val = $p['list']([($p['bool']($or1=val)?$or1:'')]);
					}
					val = ', '['join'](function(){
						var $or4,$iter3_idx,$or3,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type,x;
	$collcomp2 = $p['list']();
					$iter3_iter = val;
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						x = $iter3_nextval['$nextval'];
						$collcomp2['append'](($p['bool']($or3=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['rel']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]), x['__getitem__']('rel'), structure['__getitem__']('using')]))?$or3:x['__getitem__']('key')));
					}

	return $collcomp2;}());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$p['printFunc']([$p['sprintf']('%s: RelationalBoneExtractor.render cannot build relational format, maybe garbage received?', $p['getattr'](self, 'boneName'))], 1);
						$p['printFunc']([val], 1);
						val = '';
					}
				}
				return val;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			$method = $pyjs__bind_method2('raw', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '55e449ab467e04e174d51805595deb46') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val,$pyjs_try_err,structure;
				if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
				   throw $p['AssertionError']($p['sprintf']('render() was called with field %s, expected %s', $p['tuple']([field, $p['getattr'](self, 'boneName')])));
				 }
				val = data['get'](field);
				if ($p['bool'](!$p['bool'](val))) {
					return null;
				}
				structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
				try {
					if ($p['bool'](!$p['bool']($p['isinstance'](val, $p['list'])))) {
						val = $p['list']([val]);
					}
					val = function(){
						var $or5,$or6,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp3 = $p['list']();
					$iter4_iter = val;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x = $iter4_nextval['$nextval'];
						$collcomp3['append'](($p['bool']($or5=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['rel']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]), x['__getitem__']('rel'), structure['__getitem__']('using')]))?$or5:x['__getitem__']('key')));
					}

	return $collcomp3;}();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$p['printFunc']([$p['sprintf']('%s: RelationalBoneExtractor.raw cannot build relational format, maybe garbage received?', $p['getattr'](self, 'boneName'))], 1);
						$p['printFunc']([val], 1);
						return null;
					}
				}
				return ($p['bool']($p['op_eq']($p['len'](val), $constant_int_1))? (val['__getitem__']($constant_int_0)) : (val));
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['raw'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['RelationalViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = 'c71675b9abe6b06dc35cc78ccb3260bb';
			$method = $pyjs__bind_method2('__init__', function(module, boneName, structure) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					boneName = arguments[2];
					structure = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c71675b9abe6b06dc35cc78ccb3260bb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RelationalViewBoneDelegate'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', '$(dest.name)') : $p['setattr'](self, 'format', '$(dest.name)'); 
				if ($p['bool'](structure['__getitem__'](boneName)['keys']()['__contains__']('format'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', structure['__getitem__'](boneName)['__getitem__']('format')) : $p['setattr'](self, 'format', structure['__getitem__'](boneName)['__getitem__']('format')); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', structure) : $p['setattr'](self, 'structure', structure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				return null;
			}
	, 1, [null,null,['self'],['module'],['boneName'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('render', function(data, field) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					field = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c71675b9abe6b06dc35cc78ccb3260bb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,val,res,$and4,$and5,$and6,$and7,$add2,$add1,$pyjs_try_err,$sub2,$sub1,lbl,structure;
				if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
				   throw $p['AssertionError']($p['sprintf']('render() was called with field %s, expected %s', $p['tuple']([field, $p['getattr'](self, 'boneName')])));
				 }
				val = data['get'](field);
				lbl = $m['html5']['Label']();
				if ($p['bool']($p['op_is'](val, null))) {
					lbl['appendChild']($m['conf']['__getitem__']('empty_value'));
					return lbl;
				}
				structure = $p['getattr'](self, 'structure')['__getitem__']($p['getattr'](self, 'boneName'));
				try {
					if ($p['bool'](!$p['bool']($p['isinstance'](val, $p['list'])))) {
						val = $p['list']([val]);
						count = $constant_int_1;
					}
					else {
						count = $p['len'](val);
						if ($p['bool'](($p['bool']($and4=$m['conf']['__getitem__']('maxMultiBoneEntries'))?($p['cmp'](count, $m['conf']['__getitem__']('maxMultiBoneEntries')) == 1):$and4))) {
							val = $p['__getslice'](val, 0, $m['conf']['__getitem__']('maxMultiBoneEntries'));
						}
					}
					if ($p['bool'](structure['__getitem__']('using'))) {
						res = '\n'['join'](function(){
							var $iter5_nextval,x,$or7,$iter5_idx,$collcomp4,$or8,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp4 = $p['list']();
						$iter5_iter = val;
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							x = $iter5_nextval['$nextval'];
							$collcomp4['append'](($p['bool']($or7=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['rel']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]), x['__getitem__']('rel'), structure['__getitem__']('using')]))?$or7:x['__getitem__']('key')));
						}

	return $collcomp4;}());
					}
					else {
						res = '\n'['join'](function(){
							var $iter6_idx,$iter6_type,$collcomp5,$or9,$iter6_array,$or10,x,$iter6_iter,$iter6_nextval;
	$collcomp5 = $p['list']();
						$iter6_iter = val;
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							x = $iter6_nextval['$nextval'];
							$collcomp5['append'](($p['bool']($or9=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]), x['__getitem__']('dest'), structure['__getitem__']('relskel')]))?$or9:x['__getitem__']('key')));
						}

	return $collcomp5;}());
					}
					if ($p['bool'](($p['bool']($and6=$m['conf']['__getitem__']('maxMultiBoneEntries'))?($p['cmp'](count, $m['conf']['__getitem__']('maxMultiBoneEntries')) == 1):$and6))) {
						res = $p['__op_add']($add1=res,$add2=$p['sprintf']('\n%s', $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['__op_sub']($sub1=count,$sub2=$m['conf']['__getitem__']('maxMultiBoneEntries'))}, 'and {count} more'])));
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$p['printFunc']([$p['sprintf']('%s: RelationalViewBoneDelegate.render cannot build relational format, maybe garbage received?', $p['getattr'](self, 'boneName'))], 1);
						$p['printFunc']([val], 1);
						res = '';
					}
				}
				$m['html5']['utils']['textToHtml'](lbl, $m['html5']['utils']['unescape'](res));
				return lbl;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['RelationalSingleSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = '4df6b9840a173898b6007376d20abf90';
			$method = $pyjs__bind_method2('__init__', function(srcModule, boneName, readOnly, destModule, format, required, using, usingDescr, context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,9,arguments['length']-1));

					var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					srcModule = arguments[1];
					boneName = arguments[2];
					readOnly = arguments[3];
					destModule = arguments[4];
					format = arguments[5];
					required = arguments[6];
					using = arguments[7];
					usingDescr = arguments[8];
					context = arguments[9];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,10,arguments['length']-1));

					var kwargs = arguments['length'] >= 11 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof context != 'undefined') {
						if (context !== null && typeof context['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = context;
							context = arguments[10];
						}
					} else 					if (typeof usingDescr != 'undefined') {
						if (usingDescr !== null && typeof usingDescr['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = usingDescr;
							usingDescr = arguments[10];
						}
					} else 					if (typeof using != 'undefined') {
						if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = using;
							using = arguments[10];
						}
					} else 					if (typeof required != 'undefined') {
						if (required !== null && typeof required['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = required;
							required = arguments[10];
						}
					} else 					if (typeof format != 'undefined') {
						if (format !== null && typeof format['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = format;
							format = arguments[10];
						}
					} else 					if (typeof destModule != 'undefined') {
						if (destModule !== null && typeof destModule['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = destModule;
							destModule = arguments[10];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[10];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[10];
						}
					} else 					if (typeof srcModule != 'undefined') {
						if (srcModule !== null && typeof srcModule['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = srcModule;
							srcModule = arguments[10];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[10];
						}
					} else {
					}
				}
				if (typeof format == 'undefined') format=arguments['callee']['__args__'][7][1];
				if (typeof required == 'undefined') required=arguments['callee']['__args__'][8][1];
				if (typeof using == 'undefined') using=arguments['callee']['__args__'][9][1];
				if (typeof usingDescr == 'undefined') usingDescr=arguments['callee']['__args__'][10][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][11][1];
				var $or14,$or16,$or13,$add6,$and8,$and9,$and12,$and13,$and10,$and11,$and14,$or15,$add3,$add5,$or11,$add7,$add4,$or12,$add8;
				$pyjs_kwargs_call($p['$$super']($m['RelationalSingleSelectionBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('srcModule', srcModule) : $p['setattr'](self, 'srcModule', srcModule); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('destModule', destModule) : $p['setattr'](self, 'destModule', destModule); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', format) : $p['setattr'](self, 'format', format); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('using', using) : $p['setattr'](self, 'using', using); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('usingDescr', usingDescr) : $p['setattr'](self, 'usingDescr', usingDescr); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', null) : $p['setattr'](self, 'selection', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionTxt', $m['html5']['Input']()) : $p['setattr'](self, 'selectionTxt', $m['html5']['Input']()); 
				$p['getattr'](self, 'selectionTxt')['__setitem__']('readonly', true);
				$p['getattr'](self, 'selectionTxt')['__setitem__']('type', 'text');
				self['appendChild']($p['getattr'](self, 'selectionTxt'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ie', null) : $p['setattr'](self, 'ie', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('baseContext', context) : $p['setattr'](self, 'baseContext', context); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : (null))) : $p['setattr'](self, 'context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : (null))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('changeEvent', $m['EventDispatcher']('boneChange')) : $p['setattr'](self, 'changeEvent', $m['EventDispatcher']('boneChange')); 
				if ($p['bool'](($p['bool']($and8=$m['conf']['__getitem__']('modules')['keys']()['__contains__'](destModule))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=destModule,$add4='-view'))):$and8))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectBtn', $m['html5']['ext']['Button']($m['translate']('Select'), $p['getattr'](self, 'onShowSelector'))) : $p['setattr'](self, 'selectBtn', $m['html5']['ext']['Button']($m['translate']('Select'), $p['getattr'](self, 'onShowSelector'))); 
					$p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('icon');
					$p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('select');
					self['appendChild']($p['getattr'](self, 'selectBtn'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectBtn', null) : $p['setattr'](self, 'selectBtn', null); 
				}
				if ($p['bool'](($p['bool']($and10=$m['conf']['__getitem__']('modules')['keys']()['__contains__'](destModule))?($p['bool']($or13=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or13:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=destModule,$add6='-edit'))):$and10))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editBtn', $m['html5']['ext']['Button']($m['translate']('Edit'), $p['getattr'](self, 'onEdit'))) : $p['setattr'](self, 'editBtn', $m['html5']['ext']['Button']($m['translate']('Edit'), $p['getattr'](self, 'onEdit'))); 
					$p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('icon');
					$p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('edit');
					self['appendChild']($p['getattr'](self, 'editBtn'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editBtn', null) : $p['setattr'](self, 'editBtn', null); 
				}
				if ($p['bool'](($p['bool']($and12=!$p['bool'](required))?($p['bool']($and13=!$p['bool'](readOnly))?($p['bool']($or15=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or15:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=destModule,$add8='-view'))):$and13):$and12))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('remBtn', $m['html5']['ext']['Button']($m['translate']('Remove'), $p['getattr'](self, 'onRemove'))) : $p['setattr'](self, 'remBtn', $m['html5']['ext']['Button']($m['translate']('Remove'), $p['getattr'](self, 'onRemove'))); 
					$p['getattr'](self, 'remBtn')['__getitem__']('class')['append']('icon');
					$p['getattr'](self, 'remBtn')['__getitem__']('class')['append']('cancel');
					self['appendChild']($p['getattr'](self, 'remBtn'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('remBtn', null) : $p['setattr'](self, 'remBtn', null); 
				}
				if ($p['bool']($p['getattr'](self, 'readOnly'))) {
					self['__setitem__']('disabled', true);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['srcModule'],['boneName'],['readOnly'],['destModule'],['format', '$(dest.name)'],['required', false],['using', null],['usingDescr', null],['context', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_setDisabled', function(disable) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					disable = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and16,$and17,$and15;
				$p['$$super']($m['RelationalSingleSelectionBone'], self)['_setDisabled'](disable);
				if ($p['bool'](($p['bool']($and15=!$p['bool'](disable))?($p['bool']($and16=!$p['bool']($p['getattr'](self, '_disabledState')))?self['parent']()['__getitem__']('class')['__contains__']('is_active'):$and16):$and15))) {
					self['parent']()['__getitem__']('class')['remove']('is_active');
				}
				return null;
			}
	, 1, [null,null,['self'],['disable']]);
			$cls_definition['_setDisabled'] = $method;
			$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
    var cls = this['prototype'];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof skelStructure != 'undefined') {
						if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = skelStructure;
							skelStructure = arguments[4];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[4];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[4];
						}
					} else 					if (typeof cls != 'undefined') {
						if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cls;
							cls = arguments[4];
						}
					} else {
					}
				}
				var $and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,format,readOnly,using,$and18,$and19,required,usingDescr,context,destModule;
				readOnly = ($p['bool']($and18=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and18);
				if ($p['bool'](($p['bool']($and20=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('required'))?skelStructure['__getitem__'](boneName)['__getitem__']('required'):$and20))) {
					required = true;
				}
				else {
					required = false;
				}
				if ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('module'))) {
					destModule = skelStructure['__getitem__'](boneName)['__getitem__']('module');
				}
				else {
					destModule = skelStructure['__getitem__'](boneName)['__getitem__']('type')['$$split']('.')['__getitem__']($constant_int_1);
				}
				format = '$(name)';
				if ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('format'))) {
					format = skelStructure['__getitem__'](boneName)['__getitem__']('format');
				}
				if ($p['bool'](($p['bool']($and22=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('using'))?skelStructure['__getitem__'](boneName)['__getitem__']('using'):$and22))) {
					using = skelStructure['__getitem__'](boneName)['__getitem__']('using');
				}
				else {
					using = null;
				}
				if ($p['bool'](($p['bool']($and24=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('params'))?($p['bool']($and25=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']()['__contains__']('usingDescr'):$and25):$and24))) {
					usingDescr = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('usingDescr');
				}
				else {
					usingDescr = skelStructure['__getitem__'](boneName)['get']('descr', boneName);
				}
				if ($p['bool'](($p['bool']($and27=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('params'))?($p['bool']($and28=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']()['__contains__']('context'):$and28):$and27))) {
					context = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('context');
				}
				else {
					context = null;
				}
				return $pyjs_kwargs_call(null, cls, null, null, [{'destModule':destModule, 'format':format, 'required':required, 'using':using, 'usingDescr':usingDescr, 'context':context}, moduleName, boneName, readOnly]);
			}
	, 2, ['args',['kwargs'],['cls'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['fromSkelStructure'] = $method;
			$method = $pyjs__bind_method2('setContext', function(context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					context = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', $p['dict']([])) : $p['setattr'](self, 'context', $p['dict']([])); 
				if ($p['bool'](context)) {
					self['context']['update'](context);
				}
				if ($p['bool']($p['getattr'](self, 'baseContext'))) {
					self['context']['update']($p['getattr'](self, 'baseContext'));
				}
				return null;
			}
	, 1, [null,null,['self'],['context']]);
			$cls_definition['setContext'] = $method;
			$method = $pyjs__bind_method2('onEdit', function() {
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
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
				var edwg,$pyjs_try_err,pane;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'selection')))) {
					return null;
				}
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('module_%s', $p['getattr'](self, 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				try {
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'), 'context':$p['getattr'](self, 'context')}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appList')]);
					pane['addWidget'](edwg);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						$m['conf']['__getitem__']('mainWindow')['removePane'](pane);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onEdit'] = $method;
			$method = $pyjs__bind_method2('onRemove', function() {
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
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

				self['setSelection'](null);
				self['changeEvent']['fire'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onRemove'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val;
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					val = data['__getitem__']($p['getattr'](self, 'boneName'));
					if ($p['bool']($p['isinstance'](val, $p['list']))) {
						if ($p['bool'](($p['cmp']($p['len'](val), $constant_int_0) == 1))) {
							val = val['__getitem__']($constant_int_0);
						}
						else {
							val = null;
						}
					}
					if ($p['bool']($p['isinstance'](val, $p['dict']))) {
						self['setSelection'](val);
						if ($p['bool']($p['getattr'](self, 'using'))) {
							if ($p['bool']($p['getattr'](self, 'ie'))) {
								self['removeChild']($p['getattr'](self, 'ie'));
							}
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), val['__getitem__']('rel'), $p['dict']([])])) : $p['setattr'](self, 'ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), val['__getitem__']('rel'), $p['dict']([])])); 
							self['appendChild']($p['getattr'](self, 'ie'));
						}
					}
					else {
						self['setSelection'](null);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['unserialize'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res,$and30,$and31,$and32;
				res = $p['dict']([]);
				if ($p['bool'](!$p['bool'](($p['bool']($and30=$p['getattr'](self, 'selection'))?($p['bool']($and31=self['selection']['keys']()['__contains__']('dest'))?$p['getattr'](self, 'selection')['__getitem__']('dest')['keys']()['__contains__']('key'):$and31):$and30)))) {
					return res;
				}
				if ($p['bool']($p['getattr'](self, 'ie'))) {
					res['update'](self['ie']['serializeForPost']());
				}
				res['__setitem__']('key', $p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'));
				return function(){
					var v,$iter7_nextval,$collcomp6,k,$iter7_array,$iter7_idx,$iter7_type,$iter7_iter;
	$collcomp6 = $p['dict']();
				$iter7_iter = res['items']();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					$collcomp6['__setitem__']($p['sprintf']('%s.0.%s', $p['tuple']([$p['getattr'](self, 'boneName'), k])), v);
				}

	return $collcomp6;}();
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForPost'] = $method;
			$method = $pyjs__bind_method2('serializeForDocument', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and34,res,$and33;
				res = $p['dict']([['rel', $p['dict']([])], ['dest', $p['dict']([])]]);
				if ($p['bool'](($p['bool']($and33=$p['getattr'](self, 'selection'))?self['selection']['keys']()['__contains__']('dest'):$and33))) {
					if ($p['bool']($p['getattr'](self, 'ie'))) {
						res['__getitem__']('rel')['update'](self['ie']['serializeForDocument']());
					}
					res['__setitem__']('dest', $p['getattr'](self, 'selection')['__getitem__']('dest'));
				}
				return $p['dict']([[$p['getattr'](self, 'boneName'), res]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('onShowSelector', function() {
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
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
				var currentSelector,$pyjs_try_err;
				try {
					currentSelector = $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true, 'context':$p['getattr'](self, 'context')}, $p['getattr'](self, 'destModule')]);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						return null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				self['parent']()['__getitem__']('class')['append']('is_active');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](selection)) {
					self['setSelection']($p['dict']([['dest', selection['__getitem__']($constant_int_0)]]));
				}
				else {
					self['setSelection'](null);
				}
				self['changeEvent']['fire'](self);
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('setSelection', function(selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					selection = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or17,$and35,$and36,$or18;
				if ($p['bool'](!$p['bool'](selection))) {
					selection = $p['dict']([]);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', null) : $p['setattr'](self, 'selection', null); 
				}
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'selection')))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', $p['dict']([])) : $p['setattr'](self, 'selection', $p['dict']([])); 
				}
				self['selection']['update'](selection);
				if ($p['bool'](selection)) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), $p['sprintf']('view/%s', selection['__getitem__']('dest')['__getitem__']('key')), ($p['bool']($or17=$p['getattr'](self, 'context'))?$or17:$p['dict']([]))]);
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', $m['translate']('Loading...'));
					if ($p['bool'](($p['bool']($and35=$p['getattr'](self, 'using'))?!$p['bool']($p['getattr'](self, 'ie')):$and35))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), $m['getDefaultValues']($p['getattr'](self, 'using')), $p['dict']([])])) : $p['setattr'](self, 'ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), $m['getDefaultValues']($p['getattr'](self, 'using')), $p['dict']([])])); 
						self['ie']['addClass']('relationwrapper');
						self['appendChild']($p['getattr'](self, 'ie'));
					}
				}
				else {
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
				}
				self['updateButtons']();
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			$method = $pyjs__bind_method2('updateButtons', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'selection'))) {
					if ($p['bool']($p['getattr'](self, 'editBtn'))) {
						$p['getattr'](self, 'editBtn')['__setitem__']('disabled', false);
					}
					if ($p['bool']($p['getattr'](self, 'remBtn'))) {
						$p['getattr'](self, 'remBtn')['__setitem__']('disabled', false);
					}
				}
				else {
					if ($p['bool']($p['getattr'](self, 'editBtn'))) {
						$p['getattr'](self, 'editBtn')['__setitem__']('disabled', true);
					}
					if ($p['bool']($p['getattr'](self, 'remBtn'))) {
						$p['getattr'](self, 'remBtn')['__setitem__']('disabled', true);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['updateButtons'] = $method;
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RelationalSingleSelectionBone'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['NetworkService']['removeChangeListener'](self);
				$p['$$super']($m['RelationalSingleSelectionBone'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onDataChanged', function(module, key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					key = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof key != 'undefined') {
						if (key !== null && typeof key['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = key;
							key = arguments[3];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
				var $and38,$and39,$and37;
				if ($p['bool'](($p['bool']($and37=$p['op_eq'](module, $p['getattr'](self, 'destModule')))?($p['bool']($and38=$p['getattr'](self, 'selection'))?$p['op_eq'](key, $p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key')):$and38):$and37))) {
					self['setSelection']($p['getattr'](self, 'selection'));
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['module'],['key', null]]);
			$cls_definition['onDataChanged'] = $method;
			$method = $pyjs__bind_method2('onSelectionDataAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== '4df6b9840a173898b6007376d20abf90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,res,$or19,$or21,$or22,$or20;
				data = $m['NetworkService']['decode'](req);
				if (!( $p['op_eq']($p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'), data['__getitem__']('values')['__getitem__']('key')) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool']($p['getattr'](self, 'using'))) {
					res = ($p['bool']($or19=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['rel']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), data['__getitem__']('values'), data['__getitem__']('structure')]), $p['getattr'](self, 'selection')['__getitem__']('rel'), $p['getattr'](self, 'using')]))?$or19:data['__getitem__']('values')['__getitem__']('key'));
				}
				else {
					res = ($p['bool']($or21=$pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), data['__getitem__']('values'), data['__getitem__']('structure')]), data['__getitem__']('values'), data['__getitem__']('structure')]))?$or21:data['__getitem__']('values')['__getitem__']('key'));
				}
				$p['getattr'](self, 'selectionTxt')['__setitem__']('value', res);
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onSelectionDataAvailable'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalSingleSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['RelationalMultiSelectionBoneEntry'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = '3bf52e6761d352043927f624f7064eb7';
			$method = $pyjs__bind_method2('__init__', function(parent, module, data, using, errorInfo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					module = arguments[2];
					data = arguments[3];
					using = arguments[4];
					errorInfo = arguments[5];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof errorInfo != 'undefined') {
						if (errorInfo !== null && typeof errorInfo['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = errorInfo;
							errorInfo = arguments[6];
						}
					} else 					if (typeof using != 'undefined') {
						if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = using;
							using = arguments[6];
						}
					} else 					if (typeof data != 'undefined') {
						if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = data;
							data = arguments[6];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[6];
						}
					} else 					if (typeof parent != 'undefined') {
						if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = parent;
							parent = arguments[6];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[6];
						}
					} else {
					}
				}
				var wrapperDiv,remBtn,$add9,$and41,$and40,$add10,$or24,$or23;
				$pyjs_kwargs_call($p['$$super']($m['RelationalMultiSelectionBoneEntry'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onDrop', 'onDragOver', 'onDragLeave', 'onDragStart', 'onDragEnd', 'onChange');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', parent) : $p['setattr'](self, 'parent', parent); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txtLbl', $m['html5']['Label']()) : $p['setattr'](self, 'txtLbl', $m['html5']['Label']()); 
				$p['getattr'](self, 'txtLbl')['__setitem__']('draggable', !$p['bool']($p['getattr'](parent, 'readOnly')));
				self['addClass']('selectioncontainer-entry');
				wrapperDiv = $m['html5']['Div']();
				wrapperDiv['appendChild']($p['getattr'](self, 'txtLbl'));
				wrapperDiv['__getitem__']('class')['append']('labelwrapper');
				if ($p['bool'](!$p['bool']($p['getattr'](parent, 'readOnly')))) {
					remBtn = $m['html5']['ext']['Button']($m['translate']('Remove'), $p['getattr'](self, 'onRemove'));
					remBtn['__getitem__']('class')['append']('icon');
					remBtn['__getitem__']('class')['append']('cancel');
					wrapperDiv['appendChild'](remBtn);
				}
				self['appendChild'](wrapperDiv);
				if ($p['bool'](using)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](parent, 'readOnly'), 'defaultCat':$p['getattr'](parent, 'usingDescr')}, using, data['__getitem__']('rel'), errorInfo])) : $p['setattr'](self, 'ie', $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](parent, 'readOnly'), 'defaultCat':$p['getattr'](parent, 'usingDescr')}, using, data['__getitem__']('rel'), errorInfo])); 
					self['ie']['addClass']('relationwrapper');
					self['appendChild']($p['getattr'](self, 'ie'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ie', null) : $p['setattr'](self, 'ie', null); 
				}
				if ($p['bool'](($p['bool']($and40=$m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr']($p['getattr'](self, 'parent'), 'destModule')))?($p['bool']($or23=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or23:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add9=$p['getattr']($p['getattr'](self, 'parent'), 'destModule'),$add10='-edit'))):$and40))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editBtn', $m['html5']['ext']['Button']($m['translate']('Edit'), $p['getattr'](self, 'onEdit'))) : $p['setattr'](self, 'editBtn', $m['html5']['ext']['Button']($m['translate']('Edit'), $p['getattr'](self, 'onEdit'))); 
					$p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('icon');
					$p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('edit');
					wrapperDiv['appendChild']($p['getattr'](self, 'editBtn'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editBtn', null) : $p['setattr'](self, 'editBtn', null); 
				}
				self['updateLabel']();
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['parent'],['module'],['data'],['using'],['errorInfo']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('updateLabel', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				var txt;
				if ($p['bool']($p['op_is'](data, null))) {
					data = $p['getattr'](self, 'data');
				}
				self['txtLbl']['removeAllChildren']();
				txt = $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['dest']), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr']($p['getattr'](self, 'parent'), 'format'), data['__getitem__']('dest'), $p['getattr']($p['getattr'](self, 'parent'), 'relskel')]);
				if ($p['bool']($p['getattr'](self, 'ie'))) {
					txt = $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':$p['list'](['rel']), 'language':$m['conf']['__getitem__']('currentlanguage')}, txt, self['ie']['doSave'](), $p['getattr']($p['getattr'](self, 'parent'), 'using')]);
				}
				$m['html5']['utils']['textToHtml']($p['getattr'](self, 'txtLbl'), txt);
				return null;
			}
	, 1, [null,null,['self'],['data', null]]);
			$cls_definition['updateLabel'] = $method;
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'))) {
					return null;
				}
				self['addClass']('is-dragging');
				$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentDrag', self) : $p['setattr']($p['getattr'](self, 'parent'), 'currentDrag', self); 
				event['dataTransfer']['setData']('application/json', $m['json']['dumps']($p['getattr'](self, 'data')));
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'))) {
					return null;
				}
				if ($p['bool'](!$p['op_is']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), self))) {
					self['addClass']('is-dragging-over');
					$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentOver', self) : $p['setattr']($p['getattr'](self, 'parent'), 'currentOver', self); 
				}
				event['preventDefault']();
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'))) {
					return null;
				}
				self['removeClass']('is-dragging-over');
				$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentOver', null) : $p['setattr']($p['getattr'](self, 'parent'), 'currentOver', null); 
				event['preventDefault']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'))) {
					return null;
				}
				self['removeClass']('is-dragging');
				$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentDrag', null) : $p['setattr']($p['getattr'](self, 'parent'), 'currentDrag', null); 
				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'currentOver'))) {
					self['parent']['currentOver']['removeClass']('is-dragging-over');
					$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentOver', null) : $p['setattr']($p['getattr'](self, 'parent'), 'currentOver', null); 
				}
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and43,$and42,$add11,$add12;
				if ($p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'))) {
					return null;
				}
				event['preventDefault']();
				event['stopPropagation']();
				if ($p['bool'](($p['bool']($and42=$p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'))?!$p['op_eq']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), self):$and42))) {
					if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'offsetTop'), $p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), 'element'), 'offsetTop')) == 1))) {
						if ($p['bool']($p['op_is']($p['getattr']($p['getattr'](self, 'parent'), 'entries')['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))), self))) {
							self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'));
						}
						else {
							self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), $p['getattr']($p['getattr'](self, 'parent'), 'entries')['__getitem__']($p['__op_add']($add11=self['parent']['entries']['index'](self),$add12=$constant_int_1)));
						}
					}
					else {
						self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), self);
					}
				}
				$p['getattr'](self, 'parent')['__is_instance__'] && typeof $p['getattr'](self, 'parent')['__setattr__'] == 'function' ? $p['getattr'](self, 'parent')['__setattr__']('currentDrag', null) : $p['setattr']($p['getattr'](self, 'parent'), 'currentDrag', null); 
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = self['data']['copy']();
				data['__getitem__']('rel')['update'](self['ie']['doSave']());
				self['updateLabel'](data);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('onRemove', function() {
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
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

				self['parent']['removeEntry'](self);
				self['parent']['changeEvent']['fire']($p['getattr'](self, 'parent'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onRemove'] = $method;
			$method = $pyjs__bind_method2('onEdit', function(sender) {
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var edwg,$pyjs_try_err,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('module_%s', $p['getattr']($p['getattr'](self, 'parent'), 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				try {
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'), 'context':$p['getattr']($p['getattr'](self, 'parent'), 'context')}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), $p['getattr']($m['EditWidget'], 'appList')]);
					pane['addWidget'](edwg);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						$m['conf']['__getitem__']('mainWindow')['removePane'](pane);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onEdit'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res;
				if ($p['bool']($p['getattr'](self, 'ie'))) {
					res = self['ie']['serializeForPost']();
					res['__setitem__']('key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'));
					return res;
				}
				else {
					return $p['dict']([['key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key')]]);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForPost'] = $method;
			$method = $pyjs__bind_method2('serializeForDocument', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res;
				res = $p['dict']([['rel', $p['dict']([])], ['dest', $p['dict']([])]]);
				if ($p['bool']($p['getattr'](self, 'ie'))) {
					res['__setitem__']('rel', self['ie']['serializeForPost']());
				}
				res['__getitem__']('dest')['__setitem__']('key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'));
				return res;
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['RelationalMultiSelectionBoneEntry'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['NetworkService']['removeChangeListener'](self);
				$p['$$super']($m['RelationalMultiSelectionBoneEntry'], self)['onDetach']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('onDataChanged', function(module, key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					key = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof key != 'undefined') {
						if (key !== null && typeof key['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = key;
							key = arguments[3];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
				var $or25,$or26;
				if ($p['bool'](($p['bool']($or25=!$p['op_eq'](module, $p['getattr']($p['getattr'](self, 'parent'), 'destModule')))?$or25:!$p['op_eq'](key, $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'))))) {
					return null;
				}
				self['update']();
				return null;
			}
	, 1, [null,['kwargs'],['self'],['module'],['key', null]]);
			$cls_definition['onDataChanged'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':$p['dict']([['key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key')]]), 'successHandler':$p['getattr'](self, 'onModuleViewAvailable')}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), 'view']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('onModuleViewAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== '3bf52e6761d352043927f624f7064eb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var answ;
				answ = $m['NetworkService']['decode'](req);
				$p['getattr'](self, 'data')['__setitem__']('dest', answ['__getitem__']('values'));
				self['updateLabel']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onModuleViewAvailable'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalMultiSelectionBoneEntry', $p['tuple']($bases), $data);
		})();
		$m['RelationalMultiSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = 'ae0f7e39bce830a3ef592fd54d539332';
			$method = $pyjs__bind_method2('__init__', function(srcModule, boneName, readOnly, destModule, format, using, usingDescr, relskel, context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,9,arguments['length']-1));

					var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					srcModule = arguments[1];
					boneName = arguments[2];
					readOnly = arguments[3];
					destModule = arguments[4];
					format = arguments[5];
					using = arguments[6];
					usingDescr = arguments[7];
					relskel = arguments[8];
					context = arguments[9];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,10,arguments['length']-1));

					var kwargs = arguments['length'] >= 11 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof context != 'undefined') {
						if (context !== null && typeof context['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = context;
							context = arguments[10];
						}
					} else 					if (typeof relskel != 'undefined') {
						if (relskel !== null && typeof relskel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = relskel;
							relskel = arguments[10];
						}
					} else 					if (typeof usingDescr != 'undefined') {
						if (usingDescr !== null && typeof usingDescr['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = usingDescr;
							usingDescr = arguments[10];
						}
					} else 					if (typeof using != 'undefined') {
						if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = using;
							using = arguments[10];
						}
					} else 					if (typeof format != 'undefined') {
						if (format !== null && typeof format['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = format;
							format = arguments[10];
						}
					} else 					if (typeof destModule != 'undefined') {
						if (destModule !== null && typeof destModule['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = destModule;
							destModule = arguments[10];
						}
					} else 					if (typeof readOnly != 'undefined') {
						if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = readOnly;
							readOnly = arguments[10];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[10];
						}
					} else 					if (typeof srcModule != 'undefined') {
						if (srcModule !== null && typeof srcModule['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = srcModule;
							srcModule = arguments[10];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[10];
						}
					} else {
					}
				}
				if (typeof format == 'undefined') format=arguments['callee']['__args__'][7][1];
				if (typeof using == 'undefined') using=arguments['callee']['__args__'][8][1];
				if (typeof usingDescr == 'undefined') usingDescr=arguments['callee']['__args__'][9][1];
				if (typeof relskel == 'undefined') relskel=arguments['callee']['__args__'][10][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][11][1];
				var $add14,$and45,$and44,$add13,$or28,$or27;
				$pyjs_kwargs_call($p['$$super']($m['RelationalMultiSelectionBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('srcModule', srcModule) : $p['setattr'](self, 'srcModule', srcModule); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('readOnly', readOnly) : $p['setattr'](self, 'readOnly', readOnly); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('destModule', destModule) : $p['setattr'](self, 'destModule', destModule); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', format) : $p['setattr'](self, 'format', format); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('using', using) : $p['setattr'](self, 'using', using); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('usingDescr', usingDescr) : $p['setattr'](self, 'usingDescr', usingDescr); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('relskel', relskel) : $p['setattr'](self, 'relskel', relskel); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('changeEvent', $m['EventDispatcher']('boneChange')) : $p['setattr'](self, 'changeEvent', $m['EventDispatcher']('boneChange')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('entries', $p['list']([])) : $p['setattr'](self, 'entries', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extendedErrorInformation', $p['dict']([])) : $p['setattr'](self, 'extendedErrorInformation', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentDrag', null) : $p['setattr'](self, 'currentDrag', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentOver', null) : $p['setattr'](self, 'currentOver', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('baseContext', context) : $p['setattr'](self, 'baseContext', context); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : (null))) : $p['setattr'](self, 'context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : (null))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionDiv', $m['html5']['Div']()) : $p['setattr'](self, 'selectionDiv', $m['html5']['Div']()); 
				self['selectionDiv']['addClass']('selectioncontainer');
				self['appendChild']($p['getattr'](self, 'selectionDiv'));
				if ($p['bool'](($p['bool']($and44=$m['conf']['__getitem__']('modules')['keys']()['__contains__'](destModule))?($p['bool']($or27=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or27:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add13=destModule,$add14='-view'))):$and44))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectBtn', $m['html5']['ext']['Button']('Select', $p['getattr'](self, 'onShowSelector'))) : $p['setattr'](self, 'selectBtn', $m['html5']['ext']['Button']('Select', $p['getattr'](self, 'onShowSelector'))); 
					$p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('icon');
					$p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('select');
					self['appendChild']($p['getattr'](self, 'selectBtn'));
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectBtn', null) : $p['setattr'](self, 'selectBtn', null); 
				}
				if ($p['bool']($p['getattr'](self, 'readOnly'))) {
					self['__setitem__']('disabled', true);
				}
				self['sinkEvent']('onDragOver');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['srcModule'],['boneName'],['readOnly'],['destModule'],['format', '$(dest.name)'],['using', null],['usingDescr', null],['relskel', null],['context', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_setDisabled', function(disable) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					disable = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and46,$and47,$and48;
				$p['$$super']($m['RelationalMultiSelectionBone'], self)['_setDisabled'](disable);
				if ($p['bool'](($p['bool']($and46=!$p['bool'](disable))?($p['bool']($and47=!$p['bool']($p['getattr'](self, '_disabledState')))?self['parent']()['__getitem__']('class')['__contains__']('is_active'):$and47):$and46))) {
					self['parent']()['__getitem__']('class')['remove']('is_active');
				}
				return null;
			}
	, 1, [null,null,['self'],['disable']]);
			$cls_definition['_setDisabled'] = $method;
			$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
    var cls = this['prototype'];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof skelStructure != 'undefined') {
						if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = skelStructure;
							skelStructure = arguments[4];
						}
					} else 					if (typeof boneName != 'undefined') {
						if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = boneName;
							boneName = arguments[4];
						}
					} else 					if (typeof moduleName != 'undefined') {
						if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = moduleName;
							moduleName = arguments[4];
						}
					} else 					if (typeof cls != 'undefined') {
						if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cls;
							cls = arguments[4];
						}
					} else {
					}
				}
				var $and49,format,$and52,usingDescr,$and50,$and51,readOnly,$and53,context,using,$and54,destModule;
				readOnly = $p['bool'](skelStructure['__getitem__'](boneName)['get']('readonly', false));
				if ($p['bool'](skelStructure['__getitem__'](boneName)['keys']()['__contains__']('module'))) {
					destModule = skelStructure['__getitem__'](boneName)['__getitem__']('module');
				}
				else {
					destModule = skelStructure['__getitem__'](boneName)['__getitem__']('type')['$$split']('.')['__getitem__']($constant_int_1);
				}
				format = skelStructure['__getitem__'](boneName)['get']('format', '$(name)');
				using = skelStructure['__getitem__'](boneName)['get']('using');
				if ($p['bool'](($p['bool']($and49=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('params'))?($p['bool']($and50=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']()['__contains__']('usingDescr'):$and50):$and49))) {
					usingDescr = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('usingDescr');
				}
				else {
					usingDescr = skelStructure['__getitem__'](boneName)['get']('descr', boneName);
				}
				if ($p['bool'](($p['bool']($and52=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('params'))?($p['bool']($and53=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']()['__contains__']('context'):$and53):$and52))) {
					context = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('context');
				}
				else {
					context = null;
				}
				return $pyjs_kwargs_call(null, cls, null, null, [{'destModule':destModule, 'format':format, 'using':using, 'usingDescr':usingDescr, 'relskel':skelStructure['__getitem__'](boneName)['get']('relskel'), 'context':context}, moduleName, boneName, readOnly]);
			}
	, 2, ['args',['kwargs'],['cls'],['moduleName'],['boneName'],['skelStructure']]);
			$cls_definition['fromSkelStructure'] = $method;
			$method = $pyjs__bind_method2('unserialize', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val;
				if ($p['bool'](data['keys']()['__contains__']($p['getattr'](self, 'boneName')))) {
					self['selectionDiv']['removeAllChildren']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('entries', $p['list']([])) : $p['setattr'](self, 'entries', $p['list']([])); 
					val = data['__getitem__']($p['getattr'](self, 'boneName'));
					if ($p['bool']($p['isinstance'](val, $p['dict']))) {
						val = $p['list']([val]);
					}
					self['setSelection'](val);
				}
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['unserialize'] = $method;
			$method = $pyjs__bind_method2('serializeForPost', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_array,$iter8_idx,idx,$iter9_iter,res,$iter8_array,currRes,$iter9_type,$iter8_iter,$add15,$add16,$iter9_nextval,$iter8_nextval,$iter9_idx,v,entry,$iter8_type,k;
				res = $p['dict']([]);
				idx = $constant_int_0;
				$iter8_iter = $p['getattr'](self, 'entries');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					entry = $iter8_nextval['$nextval'];
					currRes = entry['serializeForPost']();
					if ($p['bool']($p['isinstance'](currRes, $p['dict']))) {
						$iter9_iter = currRes['items']();
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							var $tupleassign4 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
							k = $tupleassign4[0];
							v = $tupleassign4[1];
							res['__setitem__']($p['sprintf']('%s.%s.%s', $p['tuple']([$p['getattr'](self, 'boneName'), idx, k])), v);
						}
					}
					else {
						res['__setitem__']($p['sprintf']('%s.%s.key', $p['tuple']([$p['getattr'](self, 'boneName'), idx])), currRes);
					}
					idx = $p['__op_add']($add15=idx,$add16=$constant_int_1);
				}
				if ($p['bool'](!$p['bool'](res))) {
					res['__setitem__']($p['getattr'](self, 'boneName'), null);
				}
				return res;
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForPost'] = $method;
			$method = $pyjs__bind_method2('serializeForDocument', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['dict']([[$p['getattr'](self, 'boneName'), function(){
					var $iter10_nextval,$collcomp7,$iter10_idx,$iter10_array,$iter10_type,entry,$iter10_iter;
	$collcomp7 = $p['list']();
				$iter10_iter = $p['getattr'](self, 'entries');
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					entry = $iter10_nextval['$nextval'];
					$collcomp7['append'](entry['serializeForDocument']());
				}

	return $collcomp7;}()]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['serializeForDocument'] = $method;
			$method = $pyjs__bind_method2('setContext', function(context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					context = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : ($p['dict']([])))) : $p['setattr'](self, 'context', ($p['bool']($p['getattr'](self, 'baseContext'))? (self['baseContext']['copy']()) : ($p['dict']([])))); 
				if ($p['bool'](context)) {
					self['context']['update'](context);
				}
				return null;
			}
	, 1, [null,null,['self'],['context']]);
			$cls_definition['setContext'] = $method;
			$method = $pyjs__bind_method2('onShowSelector', function() {
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
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
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
				var currentSelector;
				currentSelector = $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true, 'context':$p['getattr'](self, 'context')}, $p['getattr'](self, 'destModule')]);
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				self['parent']()['__getitem__']('class')['append']('is_active');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				selection = function(){
					var $collcomp8,$iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx,data;
	$collcomp8 = $p['list']();
				$iter11_iter = selection;
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					data = $iter11_nextval['$nextval'];
					$collcomp8['append']($p['dict']([['dest', data], ['rel', ($p['bool']($p['getattr'](self, 'using'))? ($m['getDefaultValues']($p['getattr'](self, 'using'))) : (null))]]));
				}

	return $collcomp8;}();
				self['setSelection'](selection);
				self['changeEvent']['fire'](self);
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('setSelection', function(selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					selection = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var errDict,$iter13_nextval,$iter13_type,idx,$iter13_iter,data,$iter12_type,v,$iter12_array,errKey,$iter12_nextval,$iter12_iter,entry,$iter13_array,errIdx,k,$iter12_idx,$iter13_idx;
				if ($p['bool']($p['op_is'](selection, null))) {
					return null;
				}
				$iter12_iter = selection;
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					data = $iter12_nextval['$nextval'];
					errIdx = $p['len']($p['getattr'](self, 'entries'));
					errDict = $p['dict']([]);
					if ($p['bool']($p['getattr'](self, 'extendedErrorInformation'))) {
						$iter13_iter = self['extendedErrorInformation']['items']();
						$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
						while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
							var $tupleassign5 = $p['__ass_unpack']($iter13_nextval['$nextval'], 2, null);
							k = $tupleassign5[0];
							v = $tupleassign5[1];
							k = k['$$replace']($p['sprintf']('%s.', $p['getattr'](self, 'boneName')), '');
							if ($p['bool']($constant_int_1)) {
								var $tupleassign6 = $p['__ass_unpack'](k['$$split']('.'), 2, null);
								idx = $tupleassign6[0];
								errKey = $tupleassign6[1];
								idx = $p['int'](idx);
							}
							else {
								continue;
							}
							if ($p['bool']($p['op_eq'](idx, errIdx))) {
								errDict['__setitem__'](errKey, v);
							}
						}
					}
					entry = $m['RelationalMultiSelectionBoneEntry'](self, $p['getattr'](self, 'destModule'), data, $p['getattr'](self, 'using'), errDict);
					self['addEntry'](entry);
				}
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			$method = $pyjs__bind_method2('addEntry', function(entry) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					entry = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['getattr'](self, 'entries')['__contains__'](entry) )) {
				   throw $p['AssertionError']($p['sprintf']('Entry %s is already in relationalBone', $p['str'](entry)));
				 }
				self['entries']['append'](entry);
				self['selectionDiv']['appendChild'](entry);
				return null;
			}
	, 1, [null,null,['self'],['entry']]);
			$cls_definition['addEntry'] = $method;
			$method = $pyjs__bind_method2('removeEntry', function(entry) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					entry = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( $p['getattr'](self, 'entries')['__contains__'](entry) )) {
				   throw $p['AssertionError']($p['sprintf']('Cannot remove unknown entry %s from relationalBone', $p['str'](entry)));
				 }
				self['selectionDiv']['removeChild'](entry);
				self['entries']['remove'](entry);
				return null;
			}
	, 1, [null,null,['self'],['entry']]);
			$cls_definition['removeEntry'] = $method;
			$method = $pyjs__bind_method2('moveEntry', function(entry, before) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					entry = arguments[1];
					before = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof before == 'undefined') before=arguments['callee']['__args__'][4][1];

				if (!( $p['getattr'](self, 'entries')['__contains__'](entry) )) {
				   throw $p['AssertionError']($p['sprintf']('Cannot remove unknown entry %s from relationalBone', $p['str'](entry)));
				 }
				self['entries']['remove'](entry);
				if ($p['bool'](before)) {
					if (!( $p['getattr'](self, 'entries')['__contains__'](before) )) {
					   throw $p['AssertionError']($p['sprintf']('Cannot remove unknown entry %s from relationalBone', $p['str'](before)));
					 }
					self['selectionDiv']['insertBefore'](entry, before);
					self['entries']['insert'](self['entries']['index'](before), entry);
				}
				else {
					self['addEntry'](entry);
				}
				return null;
			}
	, 1, [null,null,['self'],['entry'],['before', null]]);
			$cls_definition['moveEntry'] = $method;
			$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					errorInfo = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ae0f7e39bce830a3ef592fd54d539332') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,err,idx,$and56,$and55,$iter14_iter,v,k,$iter14_idx,$iter14_nextval;
				$p['printFunc'](['------- EXTENDEND ERROR INFO --------'], 1);
				$p['printFunc']([errorInfo], 1);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extendedErrorInformation', errorInfo) : $p['setattr'](self, 'extendedErrorInformation', errorInfo); 
				$iter14_iter = errorInfo['items']();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter14_nextval['$nextval'], 2, null);
					k = $tupleassign7[0];
					v = $tupleassign7[1];
					k = k['$$replace']($p['sprintf']('%s.', $p['getattr'](self, 'boneName')), '');
					if ($p['bool']($constant_int_1)) {
						var $tupleassign8 = $p['__ass_unpack'](k['$$split']('.'), 2, null);
						idx = $tupleassign8[0];
						err = $tupleassign8[1];
						idx = $p['int'](idx);
					}
					else {
						continue;
					}
					$p['printFunc']([$p['sprintf']('k: %s, v: %s', $p['tuple']([k, v]))], 1);
					$p['printFunc']([$p['sprintf']('idx: %s', idx)], 1);
					$p['printFunc']([$p['len']($p['getattr'](self, 'entries'))], 1);
					if ($p['bool'](($p['bool']($and55=((($p['cmp'](idx, $constant_int_0))|1) == 1))?($p['cmp'](idx, $p['len']($p['getattr'](self, 'entries'))) == -1):$and55))) {
						$p['getattr'](self, 'entries')['__getitem__'](idx)['setError'](err);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['errorInfo']]);
			$cls_definition['setExtendedErrorInformation'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalMultiSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['RelationalSearch'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.relational';
			$cls_definition['__md5__'] = '6f2ad0d9bed397fb7e750290f5a10ab1';
			$method = $pyjs__bind_method2('__init__', function(extension, view, module) {
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
					extension = arguments[1];
					view = arguments[2];
					module = arguments[3];
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
					if (self.prototype['__md5__'] !== '6f2ad0d9bed397fb7e750290f5a10ab1') {
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
							module = arguments[4];
						}
					} else 					if (typeof view != 'undefined') {
						if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = view;
							view = arguments[4];
						}
					} else 					if (typeof extension != 'undefined') {
						if (extension !== null && typeof extension['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = extension;
							extension = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				var btn;
				$pyjs_kwargs_call($p['$$super']($m['RelationalSearch'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extension', extension) : $p['setattr'](self, 'extension', extension); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentSelection', null) : $p['setattr'](self, 'currentSelection', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filterChangedEvent', $m['EventDispatcher']('filterChanged')) : $p['setattr'](self, 'filterChangedEvent', $m['EventDispatcher']('filterChanged')); 
				self['appendChild']($m['html5']['TextNode']('RELATIONAL SEARCH'));
				self['appendChild']($m['html5']['TextNode'](extension['__getitem__']('name')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentEntry', $m['html5']['Span']()) : $p['setattr'](self, 'currentEntry', $m['html5']['Span']()); 
				self['appendChild']($p['getattr'](self, 'currentEntry'));
				btn = $m['html5']['ext']['Button']('Select', $p['getattr'](self, 'openSelector'));
				self['appendChild'](btn);
				btn = $m['html5']['ext']['Button']('Clear', $p['getattr'](self, 'clearSelection'));
				self['appendChild'](btn);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['module']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clearSelection', function() {
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
					if (self.prototype['__md5__'] !== '6f2ad0d9bed397fb7e750290f5a10ab1') {
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

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentSelection', null) : $p['setattr'](self, 'currentSelection', null); 
				self['filterChangedEvent']['fire']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['clearSelection'] = $method;
			$method = $pyjs__bind_method2('openSelector', function() {
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
					if (self.prototype['__md5__'] !== '6f2ad0d9bed397fb7e750290f5a10ab1') {
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
				var currentSelector;
				currentSelector = $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'extension')['__getitem__']('module')]);
				currentSelector['selectionActivatedEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['openSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					selection = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6f2ad0d9bed397fb7e750290f5a10ab1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentSelection', selection) : $p['setattr'](self, 'currentSelection', selection); 
				self['filterChangedEvent']['fire']();
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionActivated'] = $method;
			$method = $pyjs__bind_method2('updateFilter', function(filter) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6f2ad0d9bed397fb7e750290f5a10ab1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add18,$add17,newId;
				if ($p['bool']($p['getattr'](self, 'currentSelection'))) {
					$p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__setattr__']('innerHTML', $p['getattr'](self, 'currentSelection')['__getitem__']($constant_int_0)['__getitem__']('name')) : $p['setattr']($p['getattr']($p['getattr'](self, 'currentEntry'), 'element'), 'innerHTML', $p['getattr'](self, 'currentSelection')['__getitem__']($constant_int_0)['__getitem__']('name')); 
					newId = $p['getattr'](self, 'currentSelection')['__getitem__']($constant_int_0)['__getitem__']('key');
					filter['__setitem__']($p['__op_add']($add17=$p['getattr'](self, 'extension')['__getitem__']('target'),$add18='.key'), newId);
				}
				else {
					$p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['__setattr__']('innerHTML', '') : $p['setattr']($p['getattr']($p['getattr'](self, 'currentEntry'), 'element'), 'innerHTML', ''); 
				}
				return filter;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['updateFilter'] = $method;
			$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, module) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var $and58,$and59,$and57,$or30,$or29;
				return ($p['bool']($and57=$p['isinstance'](extension, $p['dict']))?($p['bool']($and58=extension['keys']()['__contains__']('type'))?($p['bool']($or29=$p['op_eq'](extension['__getitem__']('type'), 'relational'))?$or29:extension['__getitem__']('type')['startswith']('relational.')):$and58):$and57);
			}
	, 3, [null,null,['extension'],['view'],['module']]);
			$cls_definition['canHandleExtension'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RelationalSearch', $p['tuple']($bases), $data);
		})();
		$m['CheckForRelationalBoneSelection'] = function(moduleName, boneName, skelStructure) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[3];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[3];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[3];
					}
				} else {
				}
			}

			return skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.');
		};
		$m['CheckForRelationalBoneSelection']['__name__'] = 'CheckForRelationalBoneSelection';

		$m['CheckForRelationalBoneSelection']['__bind_type__'] = 0;
		$m['CheckForRelationalBoneSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForRelationalBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[3];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[3];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[3];
					}
				} else {
				}
			}
			var $and63,$and62,$and61,$and60,isMultiple;
			isMultiple = ($p['bool']($and60=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and60);
			return ($p['bool']($and62=isMultiple)?skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.'):$and62);
		};
		$m['CheckForRelationalBoneMultiSelection']['__name__'] = 'CheckForRelationalBoneMultiSelection';

		$m['CheckForRelationalBoneMultiSelection']['__bind_type__'] = 0;
		$m['CheckForRelationalBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForRelationalBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

			var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[3];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[3];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[3];
					}
				} else {
				}
			}
			var $and67,$and66,$and65,$and64,isMultiple;
			isMultiple = ($p['bool']($and64=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and64);
			return ($p['bool']($and66=!$p['bool'](isMultiple))?skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.'):$and66);
		};
		$m['CheckForRelationalBoneSingleSelection']['__name__'] = 'CheckForRelationalBoneSingleSelection';

		$m['CheckForRelationalBoneSingleSelection']['__bind_type__'] = 0;
		$m['CheckForRelationalBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForRelationalBoneMultiSelection'], $m['RelationalMultiSelectionBone']);
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForRelationalBoneSingleSelection'], $m['RelationalSingleSelectionBone']);
		$m['viewDelegateSelector']['insert']($constant_int_5, $m['CheckForRelationalBoneSelection'], $m['RelationalViewBoneDelegate']);
		$m['extendedSearchWidgetSelector']['insert']($constant_int_1, $p['getattr']($m['RelationalSearch'], 'canHandleExtension'), $m['RelationalSearch']);
		$m['extractorDelegateSelector']['insert']($constant_int_4, $m['CheckForRelationalBoneSelection'], $m['RelationalBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.relational */


/* end module: bones.relational */


/*
PYJS_DEPS: ['html5', 'json', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'widgets.list.ListWidget', 'widgets', 'widgets.list', 'widgets.edit.InternalEdit', 'widgets.edit', 'widgets.edit.EditWidget', 'config.conf', 'config', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'pane.Pane', 'pane', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
