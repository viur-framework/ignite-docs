/* start module: widgets.file */
$pyjs['loaded_modules']['widgets.file'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.file']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.file'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.file'];
	$m['__repr__'] = function() { return '<module: widgets.file>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.file';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['file'] = $pyjs['loaded_modules']['widgets.file'];
	try {

		var $constant_int_200 = new $p['int'](200);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_0 = new $p['int'](0);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
		$m['TreeWidget'] = $p['___import___']('widgets.tree.TreeWidget', 'widgets', null, false);
		$m['LeafWidget'] = $p['___import___']('widgets.tree.LeafWidget', 'widgets', null, false);
		$m['displayDelegateSelector'] = $p['___import___']('priorityqueue.displayDelegateSelector', 'widgets', null, false);
		$m['moduleHandlerSelector'] = $p['___import___']('priorityqueue.moduleHandlerSelector', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['json'] = $p['___import___']('json', 'widgets');
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['Search'] = $p['___import___']('widgets.search.Search', 'widgets', null, false);
		$m['LeafFileWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.file';
			$cls_definition['__md5__'] = '342ef278dc67635fbafd3054733f02d9';
			$method = $pyjs__bind_method2('__init__', function(modul, data, structure) {
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
					modul = arguments[1];
					data = arguments[2];
					structure = arguments[3];
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
					if (self.prototype['__md5__'] !== '342ef278dc67635fbafd3054733f02d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof structure != 'undefined') {
						if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = structure;
							structure = arguments[4];
						}
					} else 					if (typeof data != 'undefined') {
						if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = data;
							data = arguments[4];
						}
					} else 					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				var fformat,$pyjs_try_err,ftype;
				$pyjs_kwargs_call($p['$$super']($m['LeafFileWidget'], self), '__init__', args, kwargs, [{}, modul, data, structure]);
				if ($p['bool']($m['utils']['getImagePreview'](data))) {
					self['prependChild']($m['html5']['Img']($m['utils']['getImagePreview'](data)));
				}
				if ($p['bool'](data['keys']()['__contains__']('mimetype'))) {
					try {
						var $tupleassign1 = $p['__ass_unpack'](data['__getitem__']('mimetype')['$$split']('/'), 2, null);
						ftype = $tupleassign1[0];
						fformat = $tupleassign1[1];
						self['__getitem__']('class')['append']($p['sprintf']('type_%s', ftype));
						self['__getitem__']('class')['append']($p['sprintf']('format_%s', fformat['$$replace']('+', '_')));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
				}
				self['__getitem__']('class')['append']('file');
				self['sinkEvent']('onDragOver', 'onDragLeave');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
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
					if (self.prototype['__md5__'] !== '342ef278dc67635fbafd3054733f02d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('insert_before')))) {
					self['__getitem__']('class')['append']('insert_before');
				}
				$p['$$super']($m['LeafFileWidget'], self)['onDragOver'](event);
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
					if (self.prototype['__md5__'] !== '342ef278dc67635fbafd3054733f02d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](self['__getitem__']('class')['__contains__']('insert_before'))) {
					self['__getitem__']('class')['remove']('insert_before');
				}
				$p['$$super']($m['LeafFileWidget'], self)['onDragLeave'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			var $bases = new Array($m['LeafWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LeafFileWidget', $p['tuple']($bases), $data);
		})();
		$m['Uploader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.file';
			$cls_definition['__md5__'] = 'd5a95b8cdbac16205f9b5193248c45b0';
			$method = $pyjs__bind_method2('__init__', function(file, node, context) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					file = arguments[1];
					node = arguments[2];
					context = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
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
							context = arguments[4];
						}
					} else 					if (typeof node != 'undefined') {
						if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = node;
							node = arguments[4];
						}
					} else 					if (typeof file != 'undefined') {
						if (file !== null && typeof file['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = file;
							file = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][5][1];
				var r;
				$pyjs_kwargs_call($p['$$super']($m['Uploader'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('uploadSuccess', $m['EventDispatcher']('uploadSuccess')) : $p['setattr'](self, 'uploadSuccess', $m['EventDispatcher']('uploadSuccess')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('responseValue', null) : $p['setattr'](self, 'responseValue', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onUploadUrlAvaiable'), 'secure':true}, 'file', 'getUploadURL']);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('file', file) : $p['setattr'](r, 'file', file); 
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('node', node) : $p['setattr'](r, 'node', node); 
				$m['conf']['__getitem__']('mainWindow')['log']('progress', self);
				self['parent']()['__getitem__']('class')['append']('is_uploading');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['file'],['node'],['context', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onUploadUrlAvaiable', function(req) {
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSkeyAvaiable')}, '', '/admin/skey']);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('file', $p['getattr'](req, 'file')) : $p['setattr'](r, 'file', $p['getattr'](req, 'file')); 
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('node', $p['getattr'](req, 'node')) : $p['setattr'](r, 'node', $p['getattr'](req, 'node')); 
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('destUrl', $p['getattr'](req, 'result')) : $p['setattr'](r, 'destUrl', $p['getattr'](req, 'result')); 
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onUploadUrlAvaiable'] = $method;
			$method = $pyjs__bind_method2('onSkeyAvaiable', function(req) {
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$and1,$iter1_iter,$and2,$iter1_array,v,k,formData,$iter1_idx;
				formData = (typeof eval == "undefined"?$m['eval']:eval)('new FormData();');
				formData['append']('file', $p['getattr'](req, 'file'));
				if ($p['bool']($p['getattr'](self, 'context'))) {
					$iter1_iter = self['context']['items']();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						formData['append'](k, v);
					}
				}
				if ($p['bool'](($p['bool']($and1=$p['getattr'](req, 'node'))?!$p['op_eq']($p['str']($p['getattr'](req, 'node')), 'null'):$and1))) {
					formData['append']('node', $p['getattr'](req, 'node'));
				}
				formData['append']('skey', $m['NetworkService']['decode'](req));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('xhr', (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()')) : $p['setattr'](self, 'xhr', (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()')); 
				self['xhr']['open']('POST', $p['getattr'](req, 'destUrl'));
				$p['getattr'](self, 'xhr')['__is_instance__'] && typeof $p['getattr'](self, 'xhr')['__setattr__'] == 'function' ? $p['getattr'](self, 'xhr')['__setattr__']('onload', $p['getattr'](self, 'onLoad')) : $p['setattr']($p['getattr'](self, 'xhr'), 'onload', $p['getattr'](self, 'onLoad')); 
				$p['getattr']($p['getattr'](self, 'xhr'), 'upload')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'xhr'), 'upload')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'xhr'), 'upload')['__setattr__']('onprogress', $p['getattr'](self, 'onProgress')) : $p['setattr']($p['getattr']($p['getattr'](self, 'xhr'), 'upload'), 'onprogress', $p['getattr'](self, 'onProgress')); 
				self['xhr']['send'](formData);
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onSkeyAvaiable'] = $method;
			$method = $pyjs__bind_method2('onLoad', function() {
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
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

				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'xhr'), 'status'), $constant_int_200))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('responseValue', $m['json']['loads']($p['getattr']($p['getattr'](self, 'xhr'), 'responseText'))) : $p['setattr'](self, 'responseValue', $m['json']['loads']($p['getattr']($p['getattr'](self, 'xhr'), 'responseText'))); 
					$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':$constant_int_1000}, $p['getattr'](self, 'onSuccess')]);
				}
				else {
					$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':$constant_int_1000}, $p['getattr'](self, 'onFailed'), $p['getattr']($p['getattr'](self, 'xhr'), 'status')]);
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('onProgress', function(event) {
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var complete,$mul2,$div2,$div1,$mul1;
				if ($p['bool']($p['getattr'](event, 'lengthComputable'))) {
					complete = $p['int']((typeof ($mul1=(typeof ($div1=$p['getattr'](event, 'loaded'))==typeof ($div2=$p['getattr'](event, 'total')) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)))==typeof ($mul2=$constant_int_100) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
					self['__setitem__']('value', complete);
					self['__setitem__']('max', $constant_int_100);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onProgress'] = $method;
			$method = $pyjs__bind_method2('onSuccess', function() {
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
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
				var $iter2_nextval,$iter2_type,$iter2_iter,v,$iter2_idx,$iter2_array;
				$iter2_iter = $p['getattr'](self, 'responseValue')['__getitem__']('values');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					v = $iter2_nextval['$nextval'];
					self['uploadSuccess']['fire'](self, v);
				}
				$m['NetworkService']['notifyChange']('file');
				$pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'isSuccess':true}, 'Upload complete']);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onSuccess'] = $method;
			$method = $pyjs__bind_method2('onFailed', function(errorCode) {
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
					errorCode = arguments[1];
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
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof errorCode != 'undefined') {
						if (errorCode !== null && typeof errorCode['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = errorCode;
							errorCode = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'isSuccess':false}, $p['sprintf']('Upload failed with status code %s', errorCode)]);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['errorCode']]);
			$cls_definition['onFailed'] = $method;
			$method = $pyjs__bind_method2('replaceWithMessage', function(message, isSuccess) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					isSuccess = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd5a95b8cdbac16205f9b5193248c45b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var msg;
				self['parent']()['__getitem__']('class')['remove']('is_uploading');
				self['parent']()['__getitem__']('class')['remove']('log_progress');
				if ($p['bool'](isSuccess)) {
					self['parent']()['__getitem__']('class')['append']('log_success');
				}
				else {
					self['parent']()['__getitem__']('class')['append']('log_failed');
				}
				msg = $m['html5']['Span']();
				msg['appendChild']($m['html5']['TextNode'](message));
				self['parent']()['appendChild'](msg);
				self['parent']()['removeChild'](self);
				return null;
			}
	, 1, [null,null,['self'],['message'],['isSuccess']]);
			$cls_definition['replaceWithMessage'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Progress'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Uploader', $p['tuple']($bases), $data);
		})();
		$m['FileWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.file';
			$cls_definition['__md5__'] = '2ec21d928732d8ea882738e8b07a7104';
			$cls_definition['defaultActions'] = $p['list'](['add.node', 'add.leaf', 'selectrootnode', 'edit', 'delete', 'reload', 'download']);
			$cls_definition['leafWidget'] = $m['LeafFileWidget'];
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
					if (self.prototype['__md5__'] !== '2ec21d928732d8ea882738e8b07a7104') {
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

				$pyjs_kwargs_call($p['$$super']($m['FileWidget'], self), '__init__', args, kwargs, [{}]);
				self['sinkEvent']('onDragOver', 'onDrop');
				self['__getitem__']('class')['append']('supports_upload');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('search', $m['Search']()) : $p['setattr'](self, 'search', $m['Search']()); 
				self['appendChild']($p['getattr'](self, 'search'));
				self['search']['startSearchEvent']['register'](self);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onStartSearch', function(searchStr) {
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
					searchStr = arguments[1];
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
					if (self.prototype['__md5__'] !== '2ec21d928732d8ea882738e8b07a7104') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof searchStr != 'undefined') {
						if (searchStr !== null && typeof searchStr['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = searchStr;
							searchStr = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var c,$iter3_idx,$iter3_type,s,$iter3_iter,$iter3_nextval,$iter3_array;
				if ($p['bool'](!$p['bool'](searchStr))) {
					self['setRootNode']($p['getattr'](self, 'rootNode'));
				}
				else {
					$iter3_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'pathList'), '_children'), 0, null);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						c = $iter3_nextval['$nextval'];
						self['pathList']['removeChild'](c);
					}
					s = $m['html5']['Span']();
					s['appendChild']($m['html5']['TextNode']('Search'));
					self['pathList']['appendChild'](s);
					self['reloadData']($p['dict']([['node', $p['getattr'](self, 'rootNode')], ['search', searchStr]]));
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['searchStr']]);
			$cls_definition['onStartSearch'] = $method;
			$method = $pyjs__bind_method2('setNode', function(node) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					node = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2ec21d928732d8ea882738e8b07a7104') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr']($p['getattr'](self, 'search'), 'searchInput')['__setitem__']('value', '');
				$p['$$super']($m['FileWidget'], self)['setNode'](node);
				return null;
			}
	, 1, [null,null,['self'],['node']]);
			$cls_definition['setNode'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(modul, moduleInfo) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				return moduleInfo['__getitem__']('handler')['startswith']('tree.simple.file');
			}
	, 3, [null,null,['modul'],['moduleInfo']]);
			$cls_definition['canHandle'] = $method;
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
					if (self.prototype['__md5__'] !== '2ec21d928732d8ea882738e8b07a7104') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

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
					if (self.prototype['__md5__'] !== '2ec21d928732d8ea882738e8b07a7104') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var files,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,x,$iter4_iter;
				event['preventDefault']();
				event['stopPropagation']();
				files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
				$iter4_iter = $p['range']($constant_int_0, $p['getattr'](files, 'length'));
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					$m['Uploader'](files['item'](x), $p['getattr'](self, 'node'));
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('render', function(moduleName, adminInfo, context) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var rootNode;
				rootNode = ($p['bool'](context)? (context['get']('rootNode')) : (null));
				return $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'module':moduleName, 'rootNode':rootNode, 'context':context}]);
			}
	, 3, [null,null,['moduleName'],['adminInfo'],['context']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($m['TreeWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileWidget', $p['tuple']($bases), $data);
		})();
		$m['displayDelegateSelector']['insert']($constant_int_3, $p['getattr']($m['FileWidget'], 'canHandle'), $m['FileWidget']);
		$m['moduleHandlerSelector']['insert']($constant_int_3, $p['getattr']($m['FileWidget'], 'canHandle'), $p['getattr']($m['FileWidget'], 'render'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.file */


/* end module: widgets.file */


/*
PYJS_DEPS: ['html5', 'utils', 'network.NetworkService', 'network', 'network.DeferredCall', 'widgets.tree.TreeWidget', 'widgets', 'widgets.tree', 'widgets.tree.LeafWidget', 'priorityqueue.displayDelegateSelector', 'priorityqueue', 'priorityqueue.moduleHandlerSelector', 'event.EventDispatcher', 'event', 'config.conf', 'config', 'json', 'i18n.translate', 'i18n', 'widgets.search.Search', 'widgets.search']
*/
