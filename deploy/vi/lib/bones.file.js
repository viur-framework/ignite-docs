/* start module: bones.file */
$pyjs['loaded_modules']['bones.file'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.file']['__was_initialized__']) return $pyjs['loaded_modules']['bones.file'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.file'];
	$m['__repr__'] = function() { return '<module: bones.file>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.file';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['bones']['file'] = $pyjs['loaded_modules']['bones.file'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_150 = new $p['int'](150);
		$m['html5'] = $p['___import___']('html5', 'bones');
		$m['utils'] = $p['___import___']('utils', 'bones');
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
		$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'bones', null, false);
		$m['LeafFileWidget'] = $p['___import___']('widgets.file.LeafFileWidget', 'bones', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
		$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
		$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
		$m['RelationalMultiSelectionBoneEntry'] = $p['___import___']('bones.relational.RelationalMultiSelectionBoneEntry', 'bones', null, false);
		$m['Uploader'] = $p['___import___']('widgets.file.Uploader', 'bones', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'bones', null, false);
		$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
		$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
		$m['FileImagePopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = '31da1912af7f2ebc9bad0a05c924ef06';
			$method = $pyjs__bind_method2('__init__', function(preview) {
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
					preview = arguments[1];
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
					if (self.prototype['__md5__'] !== '31da1912af7f2ebc9bad0a05c924ef06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof preview != 'undefined') {
						if (preview !== null && typeof preview['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = preview;
							preview = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var btn,img,div;
				$pyjs_kwargs_call($p['$$super']($m['FileImagePopup'], self), '__init__', args, kwargs, [{'title':preview['currentFile']['get']('name', $m['translate']('Unnamed Image')), 'className':'image-viewer'}]);
				self['sinkEvent']('onClick');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('preview', preview) : $p['setattr'](self, 'preview', preview); 
				img = $m['html5']['Img']();
				img['__setitem__']('src', $pyjs_kwargs_call($m['utils'], 'getImagePreview', null, null, [{'size':null}, $p['getattr'](preview, 'currentFile')]));
				self['appendChild'](img);
				div = $m['html5']['Div']();
				self['appendChild'](div);
				btn = $m['html5']['ext']['Button']($m['translate']('Download'), $p['getattr'](self, 'onDownloadBtnClick'));
				btn['addClass']('icon', 'download');
				div['appendChild'](btn);
				btn = $m['html5']['ext']['Button']($m['translate']('Close'), $p['getattr'](self, 'onClick'));
				btn['addClass']('btn_no');
				div['appendChild'](btn);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['preview']]);
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
					if (self.prototype['__md5__'] !== '31da1912af7f2ebc9bad0a05c924ef06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['close']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onDownloadBtnClick', function(sender) {
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
					if (self.prototype['__md5__'] !== '31da1912af7f2ebc9bad0a05c924ef06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				self['preview']['download']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onDownloadBtnClick'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileImagePopup', $p['tuple']($bases), $data);
		})();
		$m['FilePreviewImage'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = 'b1757501979eec920b1fa5414924607d';
			$method = $pyjs__bind_method2('__init__', function(file, size) {
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
					file = arguments[1];
					size = arguments[2];
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
					if (self.prototype['__md5__'] !== 'b1757501979eec920b1fa5414924607d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[3];
						}
					} else 					if (typeof file != 'undefined') {
						if (file !== null && typeof file['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = file;
							file = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof file == 'undefined') file=arguments['callee']['__args__'][3][1];
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][4][1];

				$pyjs_kwargs_call($p['$$super']($m['FilePreviewImage'], self), '__init__', args, kwargs, [{}]);
				self['addClass']('previewimg');
				self['sinkEvent']('onClick');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('size', size) : $p['setattr'](self, 'size', size); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('downloadA', $m['html5']['A']()) : $p['setattr'](self, 'downloadA', $m['html5']['A']()); 
				self['downloadA']['hide']();
				self['appendChild']($p['getattr'](self, 'downloadA'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isImage', false) : $p['setattr'](self, 'isImage', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('downloadOnly', false) : $p['setattr'](self, 'downloadOnly', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentFile', null) : $p['setattr'](self, 'currentFile', null); 
				self['setFile'](file);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['file', null],['size', $constant_int_150]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setFile', function(file) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					file = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1757501979eec920b1fa5414924607d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,icon,$iter1_iter,mime,$iter1_array,$assign1,preview,$iter1_idx;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentFile', file) : $p['setattr'](self, 'currentFile', file); 
				preview = ($p['bool'](file)? ($pyjs_kwargs_call($m['utils'], 'getImagePreview', null, null, [{'cropped':true, 'size':$p['getattr'](self, 'size')}, file])) : (null));
				if ($p['bool'](preview)) {
					$assign1 = true;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('downloadOnly', $assign1) : $p['setattr'](self, 'downloadOnly', $assign1); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isImage', $assign1) : $p['setattr'](self, 'isImage', $assign1); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isImage', false) : $p['setattr'](self, 'isImage', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('downloadOnly', true) : $p['setattr'](self, 'downloadOnly', true); 
					if ($p['bool'](file)) {
						preview = 'icons/filetypes/file.svg';
						mime = file['get']('mimetype');
						if ($p['bool'](mime)) {
							$iter1_iter = $p['list'](['bmp', 'doc', 'gif', 'jpg', 'pdf', 'png', 'tiff', 'image', 'audio', 'video', 'zip']);
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								icon = $iter1_nextval['$nextval'];
								if ($p['bool'](mime['__contains__'](icon))) {
									preview = $p['sprintf']('icons/filetypes/%s.svg', icon);
									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('downloadOnly', false) : $p['setattr'](self, 'downloadOnly', false); 
									break;
								}
							}
						}
					}
				}
				if ($p['bool'](preview)) {
					self['__getitem__']('style')['__setitem__']('background-image', $p['sprintf']("url('%s')", preview));
				}
				else {
					self['__getitem__']('style')['__setitem__']('background-image', null);
				}
				if ($p['bool']($p['getattr'](self, 'currentFile'))) {
					self['addClass']('is-clickable');
				}
				else {
					self['removeClass']('is-clickable');
				}
				return null;
			}
	, 1, [null,null,['self'],['file']]);
			$cls_definition['setFile'] = $method;
			$method = $pyjs__bind_method2('download', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1757501979eec920b1fa5414924607d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'currentFile')))) {
					return null;
				}
				$p['getattr'](self, 'downloadA')['__setitem__']('href', $p['__op_add']($add1='/file/download/',$add2=$p['getattr'](self, 'currentFile')['__getitem__']('dlkey')));
				$p['getattr'](self, 'downloadA')['__setitem__']('download', self['currentFile']['get']('name', $p['getattr'](self, 'currentFile')['__getitem__']('dlkey')));
				self['downloadA']['element']['click']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['download'] = $method;
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
					if (self.prototype['__md5__'] !== 'b1757501979eec920b1fa5414924607d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add4,$add3,w,file;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'currentFile')))) {
					return null;
				}
				if ($p['bool']($p['getattr'](self, 'isImage'))) {
					$m['FileImagePopup'](self);
				}
				else {
					w = (typeof eval == "undefined"?$m['eval']:eval)('window');
					if ($p['bool']($p['getattr'](self, 'downloadOnly'))) {
						self['download']();
						return null;
					}
					file = $p['sprintf']('/file/download/%s', $p['getattr'](self, 'currentFile')['__getitem__']('dlkey'));
					if ($p['bool'](self['currentFile']['get']('name'))) {
						file = $p['__op_add']($add3=file,$add4=$p['sprintf']('?fileName=%s', $p['getattr'](self, 'currentFile')['__getitem__']('name')));
					}
					w['open'](file);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FilePreviewImage', $p['tuple']($bases), $data);
		})();
		$m['FileBoneExtractor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = '6727d6556292f016643b4f9dab8d98ca';
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
					if (self.prototype['__md5__'] !== '6727d6556292f016643b4f9dab8d98ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FileBoneExtractor'], self)['__init__'](module, boneName, structure);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', '$(dest.name)') : $p['setattr'](self, 'format', '$(dest.name)'); 
				if ($p['bool'](structure['__getitem__'](boneName)['keys']()['__contains__']('format'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', structure['__getitem__'](boneName)['__getitem__']('format')) : $p['setattr'](self, 'format', structure['__getitem__'](boneName)['__getitem__']('format')); 
				}
				return null;
			}
	, 1, [null,null,['self'],['module'],['boneName'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('renderFileentry', function(fileentry) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fileentry = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6727d6556292f016643b4f9dab8d98ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var origin;
				origin = (typeof eval == "undefined"?$m['eval']:eval)('window.location.origin');
				return $p['sprintf']('%s %s/file/download/%s?download=1&fileName=%s', $p['tuple']([fileentry['__getitem__']('dest')['__getitem__']('name'), origin, $p['str'](fileentry['__getitem__']('dest')['__getitem__']('dlkey')), $p['str'](fileentry['__getitem__']('dest')['__getitem__']('name'))]));
			}
	, 1, [null,null,['self'],['fileentry']]);
			$cls_definition['renderFileentry'] = $method;
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
					if (self.prototype['__md5__'] !== '6727d6556292f016643b4f9dab8d98ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val;
				if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
				   throw $p['AssertionError']($p['sprintf']('render() was called with field %s, expected %s', $p['tuple']([field, $p['getattr'](self, 'boneName')])));
				 }
				val = data['get'](field, '');
				if ($p['bool']($p['isinstance'](val, $p['list']))) {
					return function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,f,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
					$iter2_iter = val;
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						f = $iter2_nextval['$nextval'];
						$collcomp1['append'](self['renderFileentry'](f));
					}

	return $collcomp1;}();
				}
				else if ($p['bool']($p['isinstance'](val, $p['dict']))) {
					return self['renderFileentry'](val);
				}
				return val;
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['BaseBoneExtractor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileBoneExtractor', $p['tuple']($bases), $data);
		})();
		$m['FileViewBoneDelegate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = '0124a616e884f9b56264aa15db292656';
			$method = $pyjs__bind_method2('__init__', function(modul, boneName, structure) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					modul = arguments[1];
					boneName = arguments[2];
					structure = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0124a616e884f9b56264aa15db292656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FileViewBoneDelegate'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', '$(name)') : $p['setattr'](self, 'format', '$(name)'); 
				if ($p['bool'](structure['__getitem__'](boneName)['keys']()['__contains__']('format'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('format', structure['__getitem__'](boneName)['__getitem__']('format')) : $p['setattr'](self, 'format', structure['__getitem__'](boneName)['__getitem__']('format')); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', structure) : $p['setattr'](self, 'structure', structure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('boneName', boneName) : $p['setattr'](self, 'boneName', boneName); 
				return null;
			}
	, 1, [null,null,['self'],['modul'],['boneName'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('renderFileentry', function(fileEntry) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fileEntry = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0124a616e884f9b56264aa15db292656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ftype,adiv,aspan,$and1,$pyjs_try_err,fformat,$and2;
				if ($p['bool'](!$p['bool'](fileEntry['keys']()['__contains__']('dest')))) {
					return null;
				}
				fileEntry = fileEntry['__getitem__']('dest');
				if ($p['bool'](($p['bool']($and1=!$p['bool'](fileEntry['keys']()['__contains__']('name')))?!$p['bool'](fileEntry['keys']()['__contains__']('dlkey')):$and1))) {
					return null;
				}
				adiv = $m['html5']['Div']();
				if ($p['bool'](fileEntry['keys']()['__contains__']('mimetype'))) {
					try {
						var $tupleassign1 = $p['__ass_unpack'](fileEntry['__getitem__']('mimetype')['$$split']('/'), 2, null);
						ftype = $tupleassign1[0];
						fformat = $tupleassign1[1];
						adiv['__getitem__']('class')['append']($p['sprintf']('type_%s', ftype));
						adiv['__getitem__']('class')['append']($p['sprintf']('format_%s', fformat));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
				}
				adiv['appendChild']($m['FilePreviewImage'](fileEntry));
				aspan = $m['html5']['Span']();
				aspan['appendChild']($m['html5']['TextNode']($p['str'](fileEntry['get']('name', ''))));
				adiv['appendChild'](aspan);
				adiv['__getitem__']('class')['append']('fileBoneViewCell');
				return adiv;
			}
	, 1, [null,null,['self'],['fileEntry']]);
			$cls_definition['renderFileentry'] = $method;
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
					if (self.prototype['__md5__'] !== '0124a616e884f9b56264aa15db292656') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,val,f,$iter3_array,cell,$iter3_iter,$iter3_type,$iter3_nextval;
				if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
				   throw $p['AssertionError']($p['sprintf']('render() was called with field %s, expected %s', $p['tuple']([field, $p['getattr'](self, 'boneName')])));
				 }
				val = data['get'](field, '');
				if ($p['bool']($p['isinstance'](val, $p['list']))) {
					cell = $m['html5']['Div']();
					$iter3_iter = val;
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						f = $iter3_nextval['$nextval'];
						cell['appendChild'](self['renderFileentry'](f));
					}
					return cell;
				}
				else if ($p['bool']($p['isinstance'](val, $p['dict']))) {
					return self['renderFileentry'](val);
				}
				if ($p['bool'](val)) {
					return self['renderFileentry'](val);
				}
				return $m['html5']['Div']();
			}
	, 1, [null,null,['self'],['data'],['field']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileViewBoneDelegate', $p['tuple']($bases), $data);
		})();
		$m['FileMultiSelectionBoneEntry'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = 'e0541730c84a42ab7f425b362d87282d';
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
					if (self.prototype['__md5__'] !== 'e0541730c84a42ab7f425b362d87282d') {
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
				var $and3,$and4;
				$pyjs_kwargs_call($p['$$super']($m['FileMultiSelectionBoneEntry'], self), '__init__', args, kwargs, [{}]);
				self['addClass']('fileentry');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previewImg', $m['FilePreviewImage']()) : $p['setattr'](self, 'previewImg', $m['FilePreviewImage']()); 
				self['prependChild']($p['getattr'](self, 'previewImg'));
				if ($p['bool']($p['getattr'](self, 'data')['__getitem__']('dest'))) {
					if ($p['bool'](($p['bool']($and3=$p['getattr'](self, 'data')['__getitem__']('dest')['__contains__']('key'))?$p['op_eq']($p['len']($p['getattr'](self, 'data')['__getitem__']('dest')), $constant_int_1):$and3))) {
						self['fetchEntry']($p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'));
					}
					else {
						self['previewImg']['setFile']($p['getattr'](self, 'data')['__getitem__']('dest'));
					}
				}
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
					if (self.prototype['__md5__'] !== 'e0541730c84a42ab7f425b362d87282d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add5;
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'module'), $p['__op_add']($add5='view/leaf/',$add6=key)]);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['fetchEntry'] = $method;
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
					if (self.prototype['__md5__'] !== 'e0541730c84a42ab7f425b362d87282d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = $m['NetworkService']['decode'](req);
				if (!( $p['op_eq']($p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'), data['__getitem__']('values')['__getitem__']('key')) )) {
				   throw $p['AssertionError']();
				 }
				$p['getattr'](self, 'data')['__setitem__']('dest', data['__getitem__']('values'));
				self['updateLabel']();
				self['previewImg']['setFile']($p['getattr'](self, 'data')['__getitem__']('dest'));
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onSelectionDataAvailable'] = $method;
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
					if (self.prototype['__md5__'] !== 'e0541730c84a42ab7f425b362d87282d') {
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
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr']($p['getattr'](self, 'parent'), 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				try {
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
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
					if (self.prototype['__md5__'] !== 'e0541730c84a42ab7f425b362d87282d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':$p['dict']([['key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key')]]), 'successHandler':$p['getattr'](self, 'onModuleViewAvailable')}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), 'view/leaf']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			var $bases = new Array($m['RelationalMultiSelectionBoneEntry']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileMultiSelectionBoneEntry', $p['tuple']($bases), $data);
		})();
		$m['FileMultiSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = '963d12321aca3cbb951d304351bf7ba2';
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
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

				$pyjs_kwargs_call($p['$$super']($m['FileMultiSelectionBone'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onDragOver', 'onDrop');
				self['__getitem__']('class')['append']('supports_upload');
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FileMultiSelectionBone'], self)['onDragOver'](event);
				event['preventDefault']();
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var files,$iter4_nextval,$iter4_idx,ul,$iter4_type,$iter4_array,x,$iter4_iter;
				event['preventDefault']();
				event['stopPropagation']();
				files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
				$iter4_iter = $p['range']($constant_int_0, $p['getattr'](files, 'length'));
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					ul = $pyjs_kwargs_call(null, $m['Uploader'], null, null, [{'context':$p['getattr'](self, 'context')}, files['item'](x), null]);
					ul['uploadSuccess']['register'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setSelection']($p['list']([$p['dict']([['dest', file], ['rel', $p['dict']([])]])]));
				self['changeEvent']['fire'](self);
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
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
				currentSelector = $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'leaf'}, $p['getattr'](self, 'destModule')]);
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_idx,$iter5_array,s,$iter5_iter,hasValidSelection,$iter5_type;
				hasValidSelection = false;
				$iter5_iter = selection;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					s = $iter5_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](s, $m['LeafFileWidget']))) {
						hasValidSelection = true;
						break;
					}
				}
				if ($p['bool'](!$p['bool'](hasValidSelection))) {
					return null;
				}
				self['setSelection'](function(){
					var $iter6_idx,$iter6_type,$collcomp2,$iter6_array,x,$iter6_iter,$iter6_nextval;
	$collcomp2 = $p['list']();
				$iter6_iter = selection;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					x = $iter6_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](x, $m['LeafFileWidget']))) {
						$collcomp2['append']($p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', $p['dict']([])]]));
					}
				}

	return $collcomp2;}());
				self['changeEvent']['fire'](self);
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
					if (self.prototype['__md5__'] !== '963d12321aca3cbb951d304351bf7ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,entry,$iter7_type,data;
				if ($p['bool']($p['op_is'](selection, null))) {
					return null;
				}
				$iter7_iter = selection;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					data = $iter7_nextval['$nextval'];
					entry = $pyjs_kwargs_call(null, $m['FileMultiSelectionBoneEntry'], null, null, [{'using':$p['getattr'](self, 'using'), 'errorInfo':$p['dict']([])}, self, $p['getattr'](self, 'destModule'), data]);
					self['addEntry'](entry);
				}
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			var $bases = new Array($m['RelationalMultiSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileMultiSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['FileSingleSelectionBone'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'bones.file';
			$cls_definition['__md5__'] = 'b91397da865010d5484b787f5706cae0';
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
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

				$pyjs_kwargs_call($p['$$super']($m['FileSingleSelectionBone'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onDragOver', 'onDrop');
				self['__getitem__']('class')['append']('supports_upload');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previewImg', $m['FilePreviewImage']()) : $p['setattr'](self, 'previewImg', $m['FilePreviewImage']()); 
				self['prependChild']($p['getattr'](self, 'previewImg'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', null) : $p['setattr'](self, 'selection', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentSelector', null) : $p['setattr'](self, 'currentSelector', null); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FileSingleSelectionBone'], self)['onDragOver'](event);
				event['preventDefault']();
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var files,$iter8_idx,$iter8_array,$iter8_iter,ul,$iter8_nextval,$iter8_type,x;
				event['preventDefault']();
				event['stopPropagation']();
				files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
				if ($p['bool'](($p['cmp']($p['getattr'](files, 'length'), $constant_int_1) == 1))) {
					$m['conf']['__getitem__']('mainWindow')['log']('error', $m['translate']('You cannot drop more than one file here!'));
					return null;
				}
				$iter8_iter = $p['range']($constant_int_0, $p['getattr'](files, 'length'));
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					x = $iter8_nextval['$nextval'];
					ul = $pyjs_kwargs_call(null, $m['Uploader'], null, null, [{'context':$p['getattr'](self, 'context')}, files['item'](x), null]);
					ul['uploadSuccess']['register'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setSelection']($p['dict']([['dest', file], ['rel', $p['dict']([])]]));
				self['changeEvent']['fire'](self);
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
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
				var $or1,$or2,fileSelector;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'currentSelector')))) {
					fileSelector = $m['conf']['get']('fileSelector');
					if ($p['bool'](($p['bool']($or1=!$p['bool'](fileSelector))?$or1:$m['conf']['__getitem__']('mainWindow')['containsWidget'](fileSelector)))) {
						fileSelector = $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'leaf'}, $p['getattr'](self, 'destModule')]);
					}
					if ($p['bool'](!$p['bool']($m['conf']['get']('fileSelector')))) {
						$m['conf']['__setitem__']('fileSelector', fileSelector);
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentSelector', fileSelector) : $p['setattr'](self, 'currentSelector', fileSelector); 
				}
				$pyjs_kwargs_call(self['currentSelector']['selectionReturnEvent'], 'register', null, null, [{'reset':true}, self]);
				$m['conf']['__getitem__']('mainWindow')['stackWidget']($p['getattr'](self, 'currentSelector'));
				self['parent']()['addClass']('is_active');
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,s,hasValidSelection,$iter9_type;
				hasValidSelection = false;
				$iter9_iter = selection;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					s = $iter9_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](s, $m['LeafFileWidget']))) {
						hasValidSelection = true;
						break;
					}
				}
				if ($p['bool'](!$p['bool'](hasValidSelection))) {
					return null;
				}
				self['setSelection']($p['list']([function(){
					var $iter10_nextval,$iter10_idx,$collcomp3,$iter10_array,$iter10_type,x,$iter10_iter;
	$collcomp3 = $p['dict']();
				$iter10_iter = selection;
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					x = $iter10_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](x, $m['LeafFileWidget']))) {
						$collcomp3['__setitem__']('dest', $p['getattr'](x, 'data'));
					}
				}

	return $collcomp3;}()])['__getitem__']($constant_int_0));
				self['changeEvent']['fire'](self);
				return null;
			}
	, 1, [null,null,['self'],['table'],['selection']]);
			$cls_definition['onSelectionReturn'] = $method;
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['FileSingleSelectionBone'], self)['onDetach']();
				if ($p['bool']($p['getattr'](self, 'currentSelector'))) {
					self['currentSelector']['selectionReturnEvent']['unregister'](self);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
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
				pane = $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':$p['list']([$p['sprintf']('modul_%s', $p['getattr'](self, 'destModule')), 'apptype_list', 'action_edit'])}, $m['translate']('Edit')]);
				$pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
				try {
					edwg = $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
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
					if (self.prototype['__md5__'] !== 'b91397da865010d5484b787f5706cae0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selection', selection) : $p['setattr'](self, 'selection', selection); 
				if ($p['bool'](selection)) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), $p['sprintf']('view/leaf/%s', selection['__getitem__']('dest')['__getitem__']('key'))]);
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', $m['translate']('Loading...'));
					self['previewImg']['setFile']($p['getattr'](self, 'selection')['__getitem__']('dest'));
				}
				else {
					self['previewImg']['setFile'](null);
					$p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
				}
				self['updateButtons']();
				return null;
			}
	, 1, [null,null,['self'],['selection']]);
			$cls_definition['setSelection'] = $method;
			var $bases = new Array($m['RelationalSingleSelectionBone']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileSingleSelectionBone', $p['tuple']($bases), $data);
		})();
		$m['CheckForFileBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
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
			return ($p['bool']($and7=(typeof CheckForFileBone == "undefined"?$m['CheckForFileBone']:CheckForFileBone)(moduleName, boneName, skelStructure))?!$p['bool'](isMultiple):$and7);
		};
		$m['CheckForFileBoneSingleSelection']['__name__'] = 'CheckForFileBoneSingleSelection';

		$m['CheckForFileBoneSingleSelection']['__bind_type__'] = 0;
		$m['CheckForFileBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForFileBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
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
			var $and9,$and12,$and10,$and11,isMultiple;
			isMultiple = ($p['bool']($and9=skelStructure['__getitem__'](boneName)['keys']()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and9);
			return ($p['bool']($and11=(typeof CheckForFileBone == "undefined"?$m['CheckForFileBone']:CheckForFileBone)(moduleName, boneName, skelStructure))?isMultiple:$and11);
		};
		$m['CheckForFileBoneMultiSelection']['__name__'] = 'CheckForFileBoneMultiSelection';

		$m['CheckForFileBoneMultiSelection']['__bind_type__'] = 0;
		$m['CheckForFileBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
		$m['CheckForFileBone'] = function(moduleName, boneName, skelStucture) {
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

			return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('treeitem.file');
		};
		$m['CheckForFileBone']['__name__'] = 'CheckForFileBone';

		$m['CheckForFileBone']['__bind_type__'] = 0;
		$m['CheckForFileBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForFileBoneSingleSelection'], $m['FileSingleSelectionBone']);
		$m['editBoneSelector']['insert']($constant_int_5, $m['CheckForFileBoneMultiSelection'], $m['FileMultiSelectionBone']);
		$m['viewDelegateSelector']['insert']($constant_int_3, $m['CheckForFileBone'], $m['FileViewBoneDelegate']);
		$m['extractorDelegateSelector']['insert']($constant_int_3, $m['CheckForFileBone'], $m['FileBoneExtractor']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones.file */


/* end module: bones.file */


/*
PYJS_DEPS: ['html5', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'widgets.file.FileWidget', 'widgets', 'widgets.file', 'widgets.file.LeafFileWidget', 'config.conf', 'config', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalMultiSelectionBoneEntry', 'widgets.file.Uploader', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'widgets.edit.EditWidget', 'widgets.edit', 'pane.Pane', 'pane', 'bones.base.BaseBoneExtractor', 'bones.base']
*/
