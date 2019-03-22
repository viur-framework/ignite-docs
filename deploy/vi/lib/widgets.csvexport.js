/* start module: widgets.csvexport */
$pyjs['loaded_modules']['widgets.csvexport'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.csvexport']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.csvexport'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.csvexport'];
	$m['__repr__'] = function() { return '<module: widgets.csvexport>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.csvexport';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['csvexport'] = $pyjs['loaded_modules']['widgets.csvexport'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_99 = new $p['int'](99);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['datetime'] = $p['___import___']('datetime', 'widgets');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
		$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['addTranslation'] = $p['___import___']('i18n.addTranslation', 'widgets', null, false);
		$m['ExportCsv'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.csvexport';
			$cls_definition['__md5__'] = '0ac696730305ce20c58c2027fcee8df7';
			$method = $pyjs__bind_method2('__init__', function(widget, selection, encoding, language, separator, lineSeparator) {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					selection = arguments[2];
					encoding = arguments[3];
					language = arguments[4];
					separator = arguments[5];
					lineSeparator = arguments[6];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof lineSeparator != 'undefined') {
						if (lineSeparator !== null && typeof lineSeparator['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = lineSeparator;
							lineSeparator = arguments[7];
						}
					} else 					if (typeof separator != 'undefined') {
						if (separator !== null && typeof separator['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = separator;
							separator = arguments[7];
						}
					} else 					if (typeof language != 'undefined') {
						if (language !== null && typeof language['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = language;
							language = arguments[7];
						}
					} else 					if (typeof encoding != 'undefined') {
						if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = encoding;
							encoding = arguments[7];
						}
					} else 					if (typeof selection != 'undefined') {
						if (selection !== null && typeof selection['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = selection;
							selection = arguments[7];
						}
					} else 					if (typeof widget != 'undefined') {
						if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = widget;
							widget = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof encoding == 'undefined') encoding=arguments['callee']['__args__'][5][1];
				if (typeof language == 'undefined') language=arguments['callee']['__args__'][6][1];
				if (typeof separator == 'undefined') separator=arguments['callee']['__args__'][7][1];
				if (typeof lineSeparator == 'undefined') lineSeparator=arguments['callee']['__args__'][8][1];
				var $or5,$or4,$or1,$or3,$or8,$or7,$or6,$or2;
				$p['$$super']($m['ExportCsv'], self)['__init__']();
				if ($p['bool'](($p['bool']($or1=$p['op_is'](encoding, null))?$or1:!$p['list'](['utf-8', 'iso-8859-15'])['__contains__'](encoding)))) {
					encoding = 'utf-8';
				}
				if ($p['bool'](($p['bool']($or3=$p['op_is'](language, null))?$or3:!$m['conf']['__getitem__']('server')['keys']()['__contains__'](language)))) {
					language = $m['conf']['__getitem__']('currentlanguage');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', widget) : $p['setattr'](self, 'widget', widget); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', $p['getattr'](widget, 'module')) : $p['setattr'](self, 'module', $p['getattr'](widget, 'module')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('params', self['widget']['getFilter']()['copy']()) : $p['setattr'](self, 'params', self['widget']['getFilter']()['copy']()); 
				$p['getattr'](self, 'params')['__setitem__']('amount', $constant_int_99);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $p['list']([])) : $p['setattr'](self, 'data', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', null) : $p['setattr'](self, 'structure', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('separator', ($p['bool']($or5=separator)?$or5:';')) : $p['setattr'](self, 'separator', ($p['bool']($or5=separator)?$or5:';')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineSeparator', ($p['bool']($or7=lineSeparator)?$or7:'\n')) : $p['setattr'](self, 'lineSeparator', ($p['bool']($or7=lineSeparator)?$or7:'\n')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('encoding', encoding) : $p['setattr'](self, 'encoding', encoding); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lang', language) : $p['setattr'](self, 'lang', language); 
				$m['conf']['__getitem__']('mainWindow')['log']('progress', self);
				self['parent']()['__getitem__']('class')['append']('is_new');
				self['parent']()['__getitem__']('class')['append']('log_progress');
				self['appendChild']($m['html5']['TextNode']($m['translate']('CSV-Export')));
				$m['DeferredCall']($p['getattr'](self, 'nextChunk'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['widget'],['selection'],['encoding', null],['language', null],['separator', null],['lineSeparator', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('nextChunk', function(cursor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cursor = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof cursor == 'undefined') cursor=arguments['callee']['__args__'][3][1];

				if ($p['bool'](cursor)) {
					$p['getattr'](self, 'params')['__setitem__']('cursor', cursor);
				}
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'nextChunkComplete'), 'failureHandler':$p['getattr'](self, 'nextChunkFailure')}, $p['getattr'](self, 'module'), 'list', $p['getattr'](self, 'params')]);
				return null;
			}
	, 1, [null,null,['self'],['cursor', null]]);
			$cls_definition['nextChunk'] = $method;
			$method = $pyjs__bind_method2('nextChunkComplete', function(req) {
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
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var answ;
				answ = $m['NetworkService']['decode'](req);
				if ($p['bool']($p['op_is']($p['getattr'](self, 'structure'), null))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', answ['__getitem__']('structure')) : $p['setattr'](self, 'structure', answ['__getitem__']('structure')); 
				}
				if ($p['bool'](!$p['bool'](answ['__getitem__']('skellist')))) {
					self['exportToFile']();
					return null;
				}
				self['data']['extend'](answ['__getitem__']('skellist'));
				self['nextChunk'](answ['__getitem__']('cursor'));
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['nextChunkComplete'] = $method;
			$method = $pyjs__bind_method2('exportToFile', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$add12,$iter5_array,$iter3_array,defaultLanguage,titles,$or10,$iter5_type,row,$iter3_idx,struct,$iter2_iter,filename,content,encodeURIComponent,$pyjs_try_err,$iter3_iter,$add7,$iter5_idx,$add6,$iter5_iter,cellRenderer,$iter2_type,$or13,$add5,$or9,$add13,$iter2_idx,$add10,$add11,key,$iter3_type,a,$add14,$iter2_nextval,idx,fields,escape,value,$add2,$add3,$add1,$or11,$iter2_array,$add4,$or12,entry,$add8,$add9,$iter3_nextval,bone;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'data')))) {
					$pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'logClass':'info'}, $m['translate']('No datasets to export.')]);
					return null;
				}
				if (!( $p['getattr'](self, 'structure') )) {
				   throw $p['AssertionError']();
				 }
				defaultLanguage = $m['conf']['__getitem__']('currentlanguage');
				$m['conf']['__setitem__']('currentlanguage', $p['getattr'](self, 'lang'));
				self['__setitem__']('max', $p['len']($p['getattr'](self, 'data')));
				self['__setitem__']('value', $constant_int_0);
				cellRenderer = $p['dict']([]);
				struct = function(){
					var $iter1_nextval,$iter1_type,k,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
				$iter1_iter = $p['getattr'](self, 'structure');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					$collcomp1['__setitem__'](k, v);
				}

	return $collcomp1;}();
				fields = $p['dict']([]);
				titles = $p['list']([]);
				$p['printFunc'](['H1'], 1);
				idx = $constant_int_0;
				$iter2_iter = $p['getattr'](self, 'structure');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					key = $tupleassign2[0];
					bone = $tupleassign2[1];
					$p['printFunc']([$p['tuple']([key, bone])], 1);
					if ($p['bool'](bone['__getitem__']('visible'))) {
						cellRenderer['__setitem__'](key, $m['extractorDelegateSelector']['select']($p['getattr'](self, 'module'), key, struct));
						if ($p['bool'](cellRenderer['__getitem__'](key))) {
							cellRenderer['__setitem__'](key, cellRenderer['__getitem__'](key)($p['getattr'](self, 'module'), key, struct));
						}
						fields['__setitem__'](key, idx);
						idx = $p['__op_add']($add1=idx,$add2=$constant_int_1);
						titles['append'](($p['bool']($or9=bone['get']('descr', key))?$or9:key));
					}
				}
				$p['printFunc'](['H2'], 1);
				content = $p['__op_add']($add3=self['separator']['join'](titles),$add4=$p['getattr'](self, 'lineSeparator'));
				$iter3_iter = $p['getattr'](self, 'data');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					entry = $iter3_nextval['$nextval'];
					row = function(){
						var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,_;
	$collcomp2 = $p['list']();
					$iter4_iter = $p['range']($p['len'](fields['keys']()));
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						_ = $iter4_nextval['$nextval'];
						$collcomp2['append'](null);
					}

	return $collcomp2;}();
					$iter5_iter = entry['items']();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
						key = $tupleassign3[0];
						value = $tupleassign3[1];
						$p['printFunc']([$p['tuple']([key, value])], 1);
						if ($p['bool'](($p['bool']($or11=!fields['__contains__'](key))?$or11:($p['bool']($or12=$p['op_is'](value, null))?$or12:$p['op_eq']($p['str'](value)['lower'](), 'none'))))) {
							continue;
						}
						try {
							if ($p['bool'](!$p['op_is'](cellRenderer['__getitem__'](key), null))) {
								row['__setitem__'](fields['__getitem__'](key), cellRenderer['__getitem__'](key)['render'](entry, key));
							}
							else {
								row['__setitem__'](fields['__getitem__'](key), $p['str'](value));
							}
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					}
					content = $p['__op_add']($add7=content,$add8=$p['__op_add']($add5=self['separator']['join'](row),$add6=$p['getattr'](self, 'lineSeparator')));
					self['__setitem__']('value', $p['__op_add']($add9=self['__getitem__']('value'),$add10=$constant_int_1));
				}
				$m['conf']['__setitem__']('currentlanguage', defaultLanguage);
				a = $m['html5']['A']();
				a['hide']();
				self['appendChild'](a);
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'encoding'), 'utf-8'))) {
					encodeURIComponent = (typeof eval == "undefined"?$m['eval']:eval)('encodeURIComponent');
					a['__setitem__']('href', $p['__op_add']($add11='data:text/csv;charset=utf-8,',$add12=encodeURIComponent(content)));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'encoding'), 'iso-8859-15'))) {
					escape = (typeof eval == "undefined"?$m['eval']:eval)('escape');
					a['__setitem__']('href', $p['__op_add']($add13='data:text/csv;charset=ISO-8859-15,',$add14=escape(content)));
				}
				else {
					throw ($p['ValueError']($p['sprintf']('unknown encoding: %s', $p['getattr'](self, 'encoding'))));
				}
				filename = $p['sprintf']('export-%s-%s-%s-%s.csv', $p['tuple']([$p['getattr'](self, 'module'), $p['getattr'](self, 'lang'), $p['getattr'](self, 'encoding'), $m['datetime']['datetime']['now']()['strftime']('%Y-%m-%d')]));
				a['__setitem__']('download', filename);
				a['element']['click']();
				self['replaceWithMessage']($pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['len']($p['getattr'](self, 'data')), 'filename':filename}, '{count} datasets exported\nas {filename}']));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', null) : $p['setattr'](self, 'data', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', null) : $p['setattr'](self, 'structure', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['exportToFile'] = $method;
			$method = $pyjs__bind_method2('nextChunkFailure', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'logClass':'error'}, $pyjs_kwargs_call(null, $m['translate'], null, null, [{'code':code}, 'Error {code} on CSV export.'])]);
				self['widget']['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['req'],['code']]);
			$cls_definition['nextChunkFailure'] = $method;
			$method = $pyjs__bind_method2('replaceWithMessage', function(message, logClass) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					message = arguments[1];
					logClass = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0ac696730305ce20c58c2027fcee8df7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof logClass == 'undefined') logClass=arguments['callee']['__args__'][4][1];
				var msg;
				self['parent']()['__setitem__']('class', $p['list']([]));
				self['parent']()['__getitem__']('class')['append']($p['sprintf']('log_%s', logClass));
				msg = $m['html5']['Span']();
				$m['html5']['utils']['textToHtml'](msg, message);
				self['parent']()['appendChild'](msg);
				self['parent']()['removeChild'](self);
				return null;
			}
	, 1, [null,null,['self'],['message'],['logClass', 'success']]);
			$cls_definition['replaceWithMessage'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Progress'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExportCsv', $p['tuple']($bases), $data);
		})();
		$m['ExportCsvStarter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.csvexport';
			$cls_definition['__md5__'] = '5329ba6a15d663aeea5de3ead7359f3d';
			$method = $pyjs__bind_method2('__init__', function(widget) {
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
					widget = arguments[1];
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
					if (self.prototype['__md5__'] !== '5329ba6a15d663aeea5de3ead7359f3d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof widget != 'undefined') {
						if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = widget;
							widget = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $iter6_type,$iter6_iter,lbl,$iter6_nextval,$iter7_type,opt,$iter6_idx,$iter7_iter,$iter6_array,key,$iter7_idx,$iter7_nextval,i,k,$iter7_array,value,v,div;
				$pyjs_kwargs_call($p['$$super']($m['ExportCsvStarter'], self), '__init__', null, null, [{'title':$m['translate']('CSV Export')}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget', widget) : $p['setattr'](self, 'widget', widget); 
				if ($p['bool']($m['conf']['__getitem__']('server')['keys']()['__contains__']('viur.defaultlangsvalues'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langSelect', $m['html5']['Select']()) : $p['setattr'](self, 'langSelect', $m['html5']['Select']()); 
					$p['getattr'](self, 'langSelect')['__setitem__']('id', 'lang-select');
					lbl = $m['html5']['Label']($m['translate']('Language selection'));
					lbl['__setitem__']('for', 'lang-select');
					div = $m['html5']['Div']();
					div['appendChild'](lbl);
					div['appendChild']($p['getattr'](self, 'langSelect'));
					div['addClass']('bone');
					self['appendChild'](div);
					$iter6_iter = $m['conf']['__getitem__']('server')['__getitem__']('viur.defaultlangsvalues')['items']();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						var $tupleassign4 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
						key = $tupleassign4[0];
						value = $tupleassign4[1];
						opt = $m['html5']['Option']();
						opt['__setitem__']('value', key);
						opt['appendChild']($m['html5']['TextNode'](value));
						if ($p['bool']($p['op_eq'](key, $m['conf']['__getitem__']('currentlanguage')))) {
							opt['__setitem__']('selected', true);
						}
						self['langSelect']['appendChild'](opt);
					}
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('langSelect', null) : $p['setattr'](self, 'langSelect', null); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('encodingSelect', $m['html5']['Select']()) : $p['setattr'](self, 'encodingSelect', $m['html5']['Select']()); 
				$p['getattr'](self, 'encodingSelect')['__setitem__']('id', 'encoding-select');
				lbl = $m['html5']['Label']($m['translate']('Encoding'));
				lbl['__setitem__']('for', 'encoding-select');
				div = $m['html5']['Div']();
				div['appendChild'](lbl);
				div['appendChild']($p['getattr'](self, 'encodingSelect'));
				div['addClass']('bone');
				self['appendChild'](div);
				$iter7_iter = $p['enumerate']($p['list']([$p['tuple'](['iso-8859-15', 'ISO-8859-15']), $p['tuple'](['utf-8', 'UTF-8'])]));
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
					i = $tupleassign5[0];
					var $tupleassign6 = $p['__ass_unpack']($tupleassign5[1], 2, null);
					k = $tupleassign6[0];
					v = $tupleassign6[1];
					opt = $m['html5']['Option']();
					opt['__setitem__']('value', k);
					if ($p['bool']($p['op_eq'](i, $constant_int_0))) {
						opt['__setitem__']('selected', true);
					}
					opt['appendChild']($m['html5']['TextNode'](v));
					self['encodingSelect']['appendChild'](opt);
				}
				div = $m['html5']['Div']();
				div['addClass']('button-container');
				self['appendChild'](div);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cancelBtn', $m['html5']['ext']['Button']($m['translate']('Cancel'), $p['getattr'](self, 'close'))) : $p['setattr'](self, 'cancelBtn', $m['html5']['ext']['Button']($m['translate']('Cancel'), $p['getattr'](self, 'close'))); 
				div['appendChild']($p['getattr'](self, 'cancelBtn'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('exportBtn', $m['html5']['ext']['Button']($m['translate']('Export'), $p['getattr'](self, 'onExportBtnClick'))) : $p['setattr'](self, 'exportBtn', $m['html5']['ext']['Button']($m['translate']('Export'), $p['getattr'](self, 'onExportBtnClick'))); 
				div['appendChild']($p['getattr'](self, 'exportBtn'));
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['widget']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onExportBtnClick', function() {
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
					if (self.prototype['__md5__'] !== '5329ba6a15d663aeea5de3ead7359f3d') {
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
				var encoding,language;
				encoding = $p['getattr']($p['getattr'](self, 'encodingSelect')['__getitem__']('options')['item']($p['getattr'](self, 'encodingSelect')['__getitem__']('selectedIndex')), 'value');
				if ($p['bool']($p['getattr'](self, 'langSelect'))) {
					language = $p['getattr']($p['getattr'](self, 'langSelect')['__getitem__']('options')['item']($p['getattr'](self, 'langSelect')['__getitem__']('selectedIndex')), 'value');
				}
				else {
					language = null;
				}
				$pyjs_kwargs_call(null, $m['ExportCsv'], null, null, [{'encoding':encoding, 'language':language}, $p['getattr'](self, 'widget'), self['widget']['getCurrentSelection']()]);
				self['close']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['onExportBtnClick'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ExportCsvStarter', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.csvexport */


/* end module: widgets.csvexport */


/*
PYJS_DEPS: ['html5', 'utils', 'datetime', 'network.NetworkService', 'network', 'network.DeferredCall', 'config.conf', 'config', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'priorityqueue.extractorDelegateSelector', 'i18n.translate', 'i18n', 'i18n.addTranslation']
*/
