/* start module: bones.treedir */
$pyjs['loaded_modules']['bones.treedir'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.treedir']['__was_initialized__']) return $pyjs['loaded_modules']['bones.treedir'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.treedir'];
	$m['__repr__'] = function() { return '<module: bones.treedir>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.treedir';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['treedir'] = $pyjs['loaded_modules']['bones.treedir'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_5 = new $p['int'](5);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['utils'] = $p['___import___']('utils', 'bones');
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['TreeWidget'] = $p['___import___']('widgets.tree.TreeWidget', 'bones', null, false);
		$m['NodeWidget'] = $p['___import___']('widgets.tree.NodeWidget', 'bones', null, false);
		$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'bones', null, false);
		$m['LeafFileWidget'] = $p['___import___']('widgets.file.LeafFileWidget', 'bones', null, false);
		$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
		$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
		$m['RelationalMultiSelectionBoneEntry'] = $p['___import___']('bones.relational.RelationalMultiSelectionBoneEntry', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'bones', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
		$m['TreeDirMultiSelectionBoneEntry'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.treedir';
			$cls_definition['__md5__'] = '661921be790bedd578e5fcaa5267b137';
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
					if (self.prototype['__md5__'] !== '661921be790bedd578e5fcaa5267b137') {
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
				var src,img;
				$pyjs_kwargs_call($p['$$super']($m['TreeDirMultiSelectionBoneEntry'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('fileentry');
				src = $m['utils']['getImagePreview']($p['getattr'](self, 'data'));
				if ($p['bool'](!$p['op_is'](src, null))) {
					img = $m['html5']['Img']();
					img['__setitem__']('src', src);
					img['__getitem__']('class')['append']('previewimg');
					self['appendChild'](img);
					self['element']['removeChild']($p['getattr'](img, 'element'));
					self['element']['insertBefore']($p['getattr'](img, 'element'), self['element']['children']['item']($constant_int_0));
				}
				self['removeChild']($p['getattr'](self, 'editBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editBtn', null) : $p['setattr'](self, 'editBtn', null); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('fetchEntry', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '661921be790bedd578e5fcaa5267b137') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAviable'), 'cacheable':true}, $p['getattr'](self, 'module'), $p['sprintf']('view/node/%s', key)]);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['fetchEntry'] = $method;
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
					if (self.prototype['__md5__'] !== '661921be790bedd578e5fcaa5267b137') {
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
				var edwg,pane;
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr']($p['getattr'](self, 'parent'), 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'data')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
				pane['addWidget'](edwg);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onEdit'] = $method;
			var $bases = new Array($m['RelationalMultiSelectionBoneEntry']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TreeDirMultiSelectionBoneEntry', $p['tuple']($bases), $data);
		})();
		$m['TreeDirMultiSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.treedir';
			$cls_definition['__md5__'] = 'bb82595d53a9ec3a8d3aaef25b4caa00';
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
					if (self.prototype['__md5__'] !== 'bb82595d53a9ec3a8d3aaef25b4caa00') {
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

				if ($p['bool'](kwargs['__contains__']('destModule'))) {
					kwargs['__setitem__']('destModule', $p['__getslice'](kwargs['__getitem__']('destModule'), 0, kwargs['__getitem__']('destModule')['find']('_')));
				}
				$pyjs_kwargs_call($p['$$super']($m['TreeDirMultiSelectionBone'], self), '__init__', args, kwargs, [{}]);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onUploadSuccess', function(uploader, file) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					uploader = arguments[1];
					file = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bb82595d53a9ec3a8d3aaef25b4caa00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setSelection']($p['list']([file]));
				return null;
			}
	, 1, [null,null,['self'],['uploader'],['file']]);
			$cls_definition['onUploadSuccess'] = $method;
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
					if (self.prototype['__md5__'] !== 'bb82595d53a9ec3a8d3aaef25b4caa00') {
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
				currentSelector = $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'node'}, $p['getattr'](self, 'destModule')]);
				currentSelector['selectionReturnEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				self['parent']()['__getitem__']('class')['append']('is_active');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
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
					if (self.prototype['__md5__'] !== 'bb82595d53a9ec3a8d3aaef25b4caa00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,s,hasValidSelection,$iter1_array;
				hasValidSelection = false;
				$iter1_iter = selection;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					s = $iter1_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](s, $m['NodeWidget']))) {
						hasValidSelection = true;
						break;
					}
				}
				if ($p['bool'](!$p['bool'](hasValidSelection))) {
					return null;
				}
				self['setSelection'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,x,$iter2_array;
	$collcomp1 = $p['list']();
				$iter2_iter = selection;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](x, $m['NodeWidget']))) {
						$collcomp1['append']($p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', $p['dict']([])]]));
					}
				}

	return $collcomp1;}());
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionReturn'] = $method;
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
					if (self.prototype['__md5__'] !== 'bb82595d53a9ec3a8d3aaef25b4caa00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,$iter3_idx,$iter3_iter,$iter3_array,entry,data,$iter3_nextval;
				if ($p['bool']($p['op_is'](selection, null))) {
					return null;
				}
				$iter3_iter = selection;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					data = $iter3_nextval['$nextval'];
					entry = $m['TreeDirMultiSelectionBoneEntry'](self, $p['getattr'](self, 'destModule'), data);
					self['addEntry'](entry);
				}
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			var $bases = new Array($m['RelationalMultiSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TreeDirMultiSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['TreeDirSingleSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.treedir';
			$cls_definition['__md5__'] = 'daff775d919ca0bb5ccd5d731b2688e6';
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
					if (self.prototype['__md5__'] !== 'daff775d919ca0bb5ccd5d731b2688e6') {
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

				$p['printFunc']([$p['tuple'](['kwargs', kwargs])], 1);
				if ($p['bool'](kwargs['__contains__']('destModule'))) {
					kwargs['__setitem__']('destModule', $p['__getslice'](kwargs['__getitem__']('destModule'), 0, kwargs['__getitem__']('destModule')['find']('_')));
				}
				$pyjs_kwargs_call($p['$$super']($m['TreeDirSingleSelectionBone'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previewImg', $m['html5']['Img']()) : $p['setattr'](self, 'previewImg', $m['html5']['Img']()); 
				$p['getattr'](self, 'previewImg')['__getitem__']('class')['append']('previewimg');
				self['appendChild']($p['getattr'](self, 'previewImg'));
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== 'daff775d919ca0bb5ccd5d731b2688e6') {
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
				currentSelector = $pyjs_kwargs_call(null, $m['TreeWidget'], null, null, [{'isSelector':'node'}, $p['getattr'](self, 'destModule')]);
				currentSelector['selectionReturnEvent']['register'](self);
				$m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
				self['parent']()['__getitem__']('class')['append']('is_active');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onShowSelector'] = $method;
			$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
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
					if (self.prototype['__md5__'] !== 'daff775d919ca0bb5ccd5d731b2688e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,s,hasValidSelection,$iter4_type,$iter4_array,$iter4_iter;
				hasValidSelection = false;
				$iter4_iter = selection;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					s = $iter4_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](s, $m['NodeWidget']))) {
						hasValidSelection = true;
						break;
					}
				}
				if ($p['bool'](!$p['bool'](hasValidSelection))) {
					return null;
				}
				self['setSelection'](function(){
					var $iter5_nextval,x,$iter5_idx,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['list']();
				$iter5_iter = selection;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					x = $iter5_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](x, $m['NodeWidget']))) {
						$collcomp2['append']($p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', $p['dict']([])]]));
					}
				}

	return $collcomp2;}()['__getitem__']($constant_int_0));
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionReturn'] = $method;
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
					if (self.prototype['__md5__'] !== 'daff775d919ca0bb5ccd5d731b2688e6') {
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
				var edwg,pane;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'selection')))) {
					return null;
				}
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self, 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
				pane['addWidget'](edwg);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onEdit'] = $method;
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
					if (self.prototype['__md5__'] !== 'daff775d919ca0bb5ccd5d731b2688e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', selection) : $p['setattr'](self, 'selection', selection); 
				if ($p['bool'](selection)) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), $p['__op_add']($add1='view/node/',$add2=selection['__getitem__']('dest')['__getitem__']('key'))]);
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', $m['translate']('Loading...'));
					if ($p['bool'](!$p['op_is']($m['utils']['getImagePreview']($p['getattr'](self, 'selection')), null))) {
						$p['getattr'](self, 'previewImg')['__setitem__']('src', $m['utils']['getImagePreview']($p['getattr'](self, 'selection')));
						$p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', '');
					}
					else {
						$p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
					}
				}
				else {
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
					$p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
				}
				self['updateButtons']();
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			var $bases = new Array($m['RelationalSingleSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TreeDirSingleSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForTreeDirBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
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
			var $and1,$and2,$and4,$and3,isMultiple;
			isMultiple = ($p['bool']($and1=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and1);
			return ($p['bool']($and3=(typeof CheckForTreeDirBone == "undefined"?$m['CheckForTreeDirBone']:CheckForTreeDirBone)(moduleName, boneName, skelStructure))?!$p['bool'](isMultiple):$and3);
		};
		$m['CheckForTreeDirBoneSingleSelection']['__name__'] = 'CheckForTreeDirBoneSingleSelection';

		$m['CheckForTreeDirBoneSingleSelection']['__bind_type__'] = 0;
		$m['CheckForTreeDirBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForTreeDirBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
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
			var $and8,$and5,$and6,$and7,isMultiple;
			isMultiple = ($p['bool']($and5=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and5);
			return ($p['bool']($and7=(typeof CheckForTreeDirBone == "undefined"?$m['CheckForTreeDirBone']:CheckForTreeDirBone)(moduleName, boneName, skelStructure))?isMultiple:$and7);
		};
		$m['CheckForTreeDirBoneMultiSelection']['__name__'] = 'CheckForTreeDirBoneMultiSelection';

		$m['CheckForTreeDirBoneMultiSelection']['__bind_type__'] = 0;
		$m['CheckForTreeDirBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForTreeDirBone'] = function(moduleName, boneName, skelStucture) {
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
				if (typeof skelStucture != 'undefined') {
					if (skelStucture !== null && typeof skelStucture['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStucture;
						skelStucture = arguments[3];
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

			return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('treedir.');
		};
		$m['CheckForTreeDirBone']['__name__'] = 'CheckForTreeDirBone';

		$m['CheckForTreeDirBone']['__bind_type__'] = 0;
		$m['CheckForTreeDirBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForTreeDirBoneSingleSelection'], $m['TreeDirSingleSelectionBone']);
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForTreeDirBoneMultiSelection'], $m['TreeDirMultiSelectionBone']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.treedir */


/* end module: bones.treedir */


/*
PYJS_DEPS: ['html5', 'utils', 'config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'widgets.tree.TreeWidget', 'widgets', 'widgets.tree', 'widgets.tree.NodeWidget', 'widgets.file.FileWidget', 'widgets.file', 'widgets.file.LeafFileWidget', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalMultiSelectionBoneEntry', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'widgets.edit.EditWidget', 'widgets.edit', 'pane.Pane', 'pane']
*/
