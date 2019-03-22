/* start module: widgets.hierarchy */
$pyjs['loaded_modules']['widgets.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.hierarchy'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.hierarchy'];
	$m['__repr__'] = function() { return '<module: widgets.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.hierarchy';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['hierarchy'] = $pyjs['loaded_modules']['widgets.hierarchy'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_401 = new $p['int'](401);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['time'] = $p['___import___']('time.time', 'widgets', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['moduleHandlerSelector'] = $p['___import___']('priorityqueue.moduleHandlerSelector', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['HierarchyItem'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.hierarchy';
			$cls_definition['__md5__'] = 'fdf6ad004386c98eb8cb4ef6f775cf11';
			$method = $pyjs__bind_method2('__init__', function(module, data, structure) {
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
					module = arguments[1];
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
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
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($p['$$super']($m['HierarchyItem'], self), '__init__', args, kwargs, [{}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('structure', structure) : $p['setattr'](self, 'structure', structure); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('expandLink', $m['html5']['A']()) : $p['setattr'](self, 'expandLink', $m['html5']['A']()); 
				$p['getattr'](self, 'expandLink')['__getitem__']('class')['append']('expandlink');
				self['expandLink']['appendChild']($m['html5']['TextNode']($m['translate']('Expand/Collapse')));
				self['appendChild']($p['getattr'](self, 'expandLink'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isLoaded', false) : $p['setattr'](self, 'isLoaded', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isExpanded', false) : $p['setattr'](self, 'isExpanded', false); 
				self['buildDescription']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ol', $m['html5']['Ol']()) : $p['setattr'](self, 'ol', $m['html5']['Ol']()); 
				$p['getattr'](self, 'ol')['__getitem__']('class')['append']('subhierarchy');
				self['appendChild']($p['getattr'](self, 'ol'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMargin', null) : $p['setattr'](self, 'currentMargin', null); 
				$p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'none');
				self['__getitem__']('class')['append']('hierarchyitem');
				self['__getitem__']('class')['append']('unexpaned');
				self['__getitem__']('class')['append']('supports_drag');
				self['__getitem__']('class')['append']('supports_drop');
				self['__setitem__']('draggable', true);
				self['sinkEvent']('onDragStart', 'onDrop', 'onDragOver', 'onDragLeave');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['data'],['structure']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('buildDescription', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var moduleInfo,format;
				format = '$(name)';
				if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')))) {
					moduleInfo = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
					if ($p['bool'](moduleInfo['keys']()['__contains__']('format'))) {
						format = moduleInfo['__getitem__']('format');
					}
				}
				self['appendChild']($m['html5']['TextNode']($m['html5']['utils']['unescape']($pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, format, $p['getattr'](self, 'data'), $p['getattr'](self, 'structure')]))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['buildDescription'] = $method;
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and7,$mul5,$mul8,$mul6,$and1,$and3,$and4,$and5,$and6,height,$and2,$mul2,offset,$mul7,$sub2,$sub1,$mul4,$mul3,$mul1;
				height = $p['getattr']($p['getattr'](self, 'element'), 'offsetHeight');
				offset = $p['__op_sub']($sub1=$p['getattr'](event, 'pageY'),$sub2=$p['getattr']($p['getattr'](self, 'element'), 'offsetTop'));
				if ($p['bool'](($p['bool']($and1=$p['op_is']($p['getattr'](self, 'currentMargin'), null))?($p['cmp'](offset, (typeof ($mul1=height)==typeof ($mul2=0.2) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) == -1):$and1))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMargin', 'top') : $p['setattr'](self, 'currentMargin', 'top'); 
					self['__getitem__']('class')['remove']('insert_here');
					self['__getitem__']('class')['remove']('insert_after');
					self['__getitem__']('class')['append']('insert_before');
				}
				else if ($p['bool'](($p['bool']($and3=$p['op_is']($p['getattr'](self, 'currentMargin'), null))?($p['cmp'](offset, (typeof ($mul3=height)==typeof ($mul4=0.8) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) == 1):$and3))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMargin', 'bottom') : $p['setattr'](self, 'currentMargin', 'bottom'); 
					self['__getitem__']('class')['remove']('insert_here');
					self['__getitem__']('class')['remove']('insert_before');
					self['__getitem__']('class')['append']('insert_after');
				}
				else if ($p['bool'](($p['bool']($and5=$p['getattr'](self, 'currentMargin'))?($p['bool']($and6=((($p['cmp'](offset, (typeof ($mul5=height)==typeof ($mul6=0.2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))))|1) == 1))?($p['cmp'](offset, (typeof ($mul7=height)==typeof ($mul8=0.8) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) < 1):$and6):$and5))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMargin', null) : $p['setattr'](self, 'currentMargin', null); 
					self['__getitem__']('class')['remove']('insert_before');
					self['__getitem__']('class')['remove']('insert_after');
					self['__getitem__']('class')['append']('insert_here');
				}
				event['preventDefault']();
				event['stopPropagation']();
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__getitem__']('class')['remove']('insert_before');
				self['__getitem__']('class')['remove']('insert_after');
				self['__getitem__']('class')['remove']('insert_here');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentMargin', null) : $p['setattr'](self, 'currentMargin', null); 
				$p['$$super']($m['HierarchyItem'], self)['onDragLeave'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['dataTransfer']['setData']('Text', $p['getattr'](self, 'data')['__getitem__']('key'));
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul15,newIdx,height,parentID,$iter2_type,$div3,$div1,$iter2_iter,req,$iter2_nextval,$iter1_array,$sub3,$sub4,$and8,$and9,$iter1_nextval,c,$and12,$and13,$and10,$and11,$mul9,offset,$div2,srcKey,$iter1_iter,$div4,$iter1_type,$mul16,lastIdx,$mul14,$mul13,$mul12,$mul11,$mul10,$iter2_idx,$add2,$add3,$add1,$iter1_idx,$add4,doUseNextChild,$iter2_array;
				event['stopPropagation']();
				event['preventDefault']();
				height = $p['getattr']($p['getattr'](self, 'element'), 'offsetHeight');
				offset = $p['__op_sub']($sub3=$p['getattr'](event, 'pageY'),$sub4=$p['getattr']($p['getattr'](self, 'element'), 'offsetTop'));
				srcKey = event['dataTransfer']['getData']('Text');
				if ($p['bool'](($p['bool']($and8=((($p['cmp'](offset, (typeof ($mul9=height)==typeof ($mul10=0.2) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))))|1) == 1))?($p['cmp'](offset, (typeof ($mul11=height)==typeof ($mul12=0.8) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) < 1):$and8))) {
					$p['printFunc'](['insert into'], 1);
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'reparent', $p['dict']([['item', srcKey], ['dest', $p['getattr'](self, 'data')['__getitem__']('key')]])]);
				}
				else if ($p['bool'](($p['cmp'](offset, (typeof ($mul13=height)==typeof ($mul14=0.2) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) == -1))) {
					$p['printFunc'](['insert before'], 1);
					parentID = $p['getattr'](self, 'data')['__getitem__']('parententry');
					if ($p['bool'](parentID)) {
						lastIdx = $constant_int_0;
						$iter1_iter = $p['getattr'](self['parent'](), '_children');
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							c = $iter1_nextval['$nextval'];
							if ($p['bool'](($p['bool']($and10=$p['dir'](c)['__contains__']('data'))?c['data']['keys']()['__contains__']('sortindex'):$and10))) {
								if ($p['bool']($p['op_eq'](c, self))) {
									break;
								}
								lastIdx = $p['getattr'](c, 'data')['__getitem__']('sortindex');
							}
						}
						newIdx = $p['str']((typeof ($div1=$p['__op_add']($add1=lastIdx,$add2=$p['getattr'](self, 'data')['__getitem__']('sortindex')))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2)));
						req = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'onItemReparented')}, $p['getattr'](self, 'module'), 'reparent', $p['dict']([['item', srcKey], ['dest', parentID]])]);
						req['__is_instance__'] && typeof req['__setattr__'] == 'function' ? req['__setattr__']('newIdx', newIdx) : $p['setattr'](req, 'newIdx', newIdx); 
						req['__is_instance__'] && typeof req['__setattr__'] == 'function' ? req['__setattr__']('item', srcKey) : $p['setattr'](req, 'item', srcKey); 
					}
				}
				else if ($p['bool'](($p['cmp'](offset, (typeof ($mul15=height)==typeof ($mul16=0.8) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) == 1))) {
					$p['printFunc'](['insert after'], 1);
					parentID = $p['getattr'](self, 'data')['__getitem__']('parententry');
					if ($p['bool'](parentID)) {
						lastIdx = $m['time']();
						doUseNextChild = false;
						$iter2_iter = $p['getattr'](self['parent'](), '_children');
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
							c = $iter2_nextval['$nextval'];
							if ($p['bool'](($p['bool']($and12=$p['dir'](c)['__contains__']('data'))?c['data']['keys']()['__contains__']('sortindex'):$and12))) {
								if ($p['bool'](doUseNextChild)) {
									lastIdx = $p['getattr'](c, 'data')['__getitem__']('sortindex');
									break;
								}
								if ($p['bool']($p['op_eq'](c, self))) {
									doUseNextChild = true;
								}
							}
						}
						newIdx = $p['str']((typeof ($div3=$p['__op_add']($add3=lastIdx,$add4=$p['getattr'](self, 'data')['__getitem__']('sortindex')))==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)));
						req = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'onItemReparented')}, $p['getattr'](self, 'module'), 'reparent', $p['dict']([['item', srcKey], ['dest', parentID]])]);
						req['__is_instance__'] && typeof req['__setattr__'] == 'function' ? req['__setattr__']('newIdx', newIdx) : $p['setattr'](req, 'newIdx', newIdx); 
						req['__is_instance__'] && typeof req['__setattr__'] == 'function' ? req['__setattr__']('item', srcKey) : $p['setattr'](req, 'item', srcKey); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$method = $pyjs__bind_method2('onItemReparented', function(req) {
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
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( $p['dir'](req)['__contains__']('newIdx') )) {
				   throw $p['AssertionError']();
				 }
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'setIndex', $p['dict']([['item', $p['getattr'](req, 'item')], ['index', $p['getattr'](req, 'newIdx')]])]);
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onItemReparented'] = $method;
			$method = $pyjs__bind_method2('toggleExpand', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fdf6ad004386c98eb8cb4ef6f775cf11') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'isExpanded'))) {
					$p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'none');
					self['__getitem__']('class')['remove']('expaned');
					self['__getitem__']('class')['append']('unexpaned');
				}
				else {
					$p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'block');
					self['__getitem__']('class')['append']('expaned');
					self['__getitem__']('class')['remove']('unexpaned');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isExpanded', !$p['bool']($p['getattr'](self, 'isExpanded'))) : $p['setattr'](self, 'isExpanded', !$p['bool']($p['getattr'](self, 'isExpanded'))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toggleExpand'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HierarchyItem', $p['tuple']($bases), $data);
		})();
		$m['HierarchyWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.hierarchy';
			$cls_definition['__md5__'] = 'b9b02876fba176aa4e07bc9b172eacb0';
			$method = $pyjs__bind_method2('__init__', function(module, rootNode, isSelector, context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					rootNode = arguments[2];
					isSelector = arguments[3];
					context = arguments[4];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
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
							context = arguments[5];
						}
					} else 					if (typeof isSelector != 'undefined') {
						if (isSelector !== null && typeof isSelector['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = isSelector;
							isSelector = arguments[5];
						}
					} else 					if (typeof rootNode != 'undefined') {
						if (rootNode !== null && typeof rootNode['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rootNode;
							rootNode = arguments[5];
						}
					} else 					if (typeof module != 'undefined') {
						if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = module;
							module = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof rootNode == 'undefined') rootNode=arguments['callee']['__args__'][4][1];
				if (typeof isSelector == 'undefined') isSelector=arguments['callee']['__args__'][5][1];
				if (typeof context == 'undefined') context=arguments['callee']['__args__'][6][1];
				var $or1,$or2,$add5,$add7,$add6,$add8;
				$p['$$super']($m['HierarchyWidget'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', module) : $p['setattr'](self, 'module', module); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNode', rootNode) : $p['setattr'](self, 'rootNode', rootNode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionBar', $m['ActionBar'](module, 'hierarchy')) : $p['setattr'](self, 'actionBar', $m['ActionBar'](module, 'hierarchy')); 
				self['appendChild']($p['getattr'](self, 'actionBar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('entryFrame', $m['html5']['Ol']()) : $p['setattr'](self, 'entryFrame', $m['html5']['Ol']()); 
				$p['getattr'](self, 'entryFrame')['__getitem__']('class')['append']('hierarchy');
				self['appendChild']($p['getattr'](self, 'entryFrame'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionChangedEvent', $m['EventDispatcher']('selectionChanged')) : $p['setattr'](self, 'selectionChangedEvent', $m['EventDispatcher']('selectionChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')) : $p['setattr'](self, 'selectionActivatedEvent', $m['EventDispatcher']('selectionActivated')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNodeChangedEvent', $m['EventDispatcher']('rootNodeChanged')) : $p['setattr'](self, 'rootNodeChangedEvent', $m['EventDispatcher']('rootNodeChanged')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', null) : $p['setattr'](self, '_currentCursor', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				self['addClass']('supports_drop');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isSelector', isSelector) : $p['setattr'](self, 'isSelector', isSelector); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_expandedNodes', $p['list']([])) : $p['setattr'](self, '_expandedNodes', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', context) : $p['setattr'](self, 'context', context); 
				if ($p['bool']($p['getattr'](self, 'rootNode'))) {
					self['reloadData']();
				}
				else {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSetDefaultRootNode'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'listRootNodes', ($p['bool']($or1=$p['getattr'](self, 'context'))?$or1:$p['dict']([]))]);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path', $p['list']([])) : $p['setattr'](self, 'path', $p['list']([])); 
				self['sinkEvent']('onClick', 'onDblClick');
				self['actionBar']['setActions']($p['__op_add']($add7=$p['__op_add']($add5=$p['list'](['selectrootnode', 'add', 'edit', 'clone', 'delete']),$add6=($p['bool'](isSelector)? ($p['list'](['select', 'close'])) : ($p['list']([])))),$add8=$p['list'](['reload'])));
				self['sinkEvent']('onDrop', 'onDragOver');
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['module'],['rootNode', null],['isSelector', false],['context', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('showErrorMsg', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
				if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
				var $or5,$or4,$or3,errorDiv,$and14,$and15,txt,$or6;
				$p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
				$p['getattr'](self, 'entryFrame')['__getitem__']('style')['__setitem__']('display', 'none');
				errorDiv = $m['html5']['Div']();
				errorDiv['__getitem__']('class')['append']('error_msg');
				if ($p['bool'](($p['bool']($and14=code)?($p['bool']($or3=$p['op_eq'](code, $constant_int_401))?$or3:$p['op_eq'](code, $constant_int_403)):$and14))) {
					txt = $m['translate']('Access denied!');
				}
				else {
					txt = $m['translate']('An unknown error occurred!');
				}
				errorDiv['__getitem__']('class')['append']($p['sprintf']('error_code_%s', ($p['bool']($or5=code)?$or5:$constant_int_0)));
				errorDiv['appendChild']($m['html5']['TextNode'](txt));
				self['appendChild'](errorDiv);
				return null;
			}
	, 1, [null,null,['self'],['req', null],['code', null]]);
			$cls_definition['showErrorMsg'] = $method;
			$method = $pyjs__bind_method2('onDataChanged', function(module) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					module = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
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
							module = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $iter3_idx,$iter3_type,v,isRootNode,$and16,$iter3_iter,k,$and18,$iter3_nextval,$iter3_array,$and17;
				if ($p['bool'](!$p['op_eq'](module, $p['getattr'](self, 'module')))) {
					isRootNode = false;
					$iter3_iter = $m['conf']['__getitem__']('modules')['items']();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						if ($p['bool'](($p['bool']($and16=$p['op_eq'](k, module))?($p['bool']($and17=$p['op_eq'](v['get']('handler'), 'list'))?$p['op_eq'](v['get']('rootNodeOf'), $p['getattr'](self, 'module')):$and17):$and16))) {
							isRootNode = true;
							break;
						}
					}
					if ($p['bool'](!$p['bool'](isRootNode))) {
						return null;
					}
				}
				$p['getattr']($p['getattr'](self, 'actionBar'), 'widgets')['__getitem__']('selectrootnode')['update']();
				self['reloadData']();
				return null;
			}
	, 1, [null,['kwargs'],['self'],['module']]);
			$cls_definition['onDataChanged'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['HierarchyWidget'], self)['onAttach']();
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['HierarchyWidget'], self)['onDetach']();
				$m['NetworkService']['removeChangeListener'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$method = $pyjs__bind_method2('itemForEvent', function(event, elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					elem = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof elem == 'undefined') elem=arguments['callee']['__args__'][4][1];
				var tmp,$iter4_nextval,$iter4_idx,$iter4_type,child,$iter4_array,$iter4_iter;
				if ($p['bool']($p['op_is'](elem, null))) {
					elem = $p['getattr'](self, 'entryFrame');
				}
				$iter4_iter = $p['getattr'](elem, '_children');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					child = $iter4_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](child, 'element'), $p['getattr'](event, 'target')))) {
						if ($p['bool']($p['isinstance'](child, $m['HierarchyItem']))) {
							return child;
						}
						else {
							return false;
						}
					}
					tmp = self['itemForEvent'](event, child);
					if ($p['bool']($p['op_is'](tmp, false))) {
						if ($p['bool']($p['isinstance'](child, $m['HierarchyItem']))) {
							return child;
						}
						else {
							return false;
						}
					}
					else if ($p['bool'](!$p['op_is'](tmp, null))) {
						return tmp;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event'],['elem', null]]);
			$cls_definition['itemForEvent'] = $method;
			$method = $pyjs__bind_method2('itemForKey', function(key, elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					elem = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof elem == 'undefined') elem=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,tmp,$iter5_array,child,$iter5_iter,$iter5_idx,$iter5_type;
				if ($p['bool']($p['op_is'](elem, null))) {
					elem = $p['getattr'](self, 'entryFrame');
				}
				$iter5_iter = $p['getattr'](elem, '_children');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					child = $iter5_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](child, 'data')['__getitem__']('key'), key))) {
						return child;
					}
					tmp = self['itemForKey'](key, $p['getattr'](child, 'ol'));
					if ($p['bool'](!$p['op_is'](tmp, null))) {
						return tmp;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['key'],['elem', null]]);
			$cls_definition['itemForKey'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var item;
				item = self['itemForEvent'](event);
				if ($p['bool']($p['op_is'](item, null))) {
					return null;
				}
				if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](item, 'expandLink')))) {
					item['toggleExpand']();
					if ($p['bool'](!$p['bool']($p['getattr'](item, 'isLoaded')))) {
						item['__is_instance__'] && typeof item['__setattr__'] == 'function' ? item['__setattr__']('isLoaded', true) : $p['setattr'](item, 'isLoaded', true); 
						self['loadNode']($p['getattr'](item, 'data')['__getitem__']('key'));
					}
				}
				else {
					self['setCurrentItem'](item);
					self['selectionChangedEvent']['fire'](self, item);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var item;
				item = self['itemForEvent'](event);
				if ($p['bool']($p['op_is'](item, null))) {
					return null;
				}
				self['setCurrentItem'](item);
				self['selectionActivatedEvent']['fire'](self, $p['list']([item]));
				if ($p['bool']($p['getattr'](self, 'isSelector'))) {
					$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDblClick'] = $method;
			$method = $pyjs__bind_method2('setCurrentItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, '_currentCursor'))) {
					$p['getattr'](self, '_currentCursor')['__getitem__']('class')['remove']('is_focused');
				}
				item['__getitem__']('class')['append']('is_focused');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', item) : $p['setattr'](self, '_currentCursor', item); 
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['setCurrentItem'] = $method;
			$method = $pyjs__bind_method2('onSetDefaultRootNode', function(req) {
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = $m['NetworkService']['decode'](req);
				if ($p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))) {
					self['setRootNode'](data['__getitem__']($constant_int_0)['__getitem__']('key'));
				}
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onSetDefaultRootNode'] = $method;
			$method = $pyjs__bind_method2('setRootNode', function(rootNode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rootNode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rootNode', rootNode) : $p['setattr'](self, 'rootNode', rootNode); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentCursor', null) : $p['setattr'](self, '_currentCursor', null); 
				self['rootNodeChangedEvent']['fire'](rootNode);
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['rootNode']]);
			$cls_definition['setRootNode'] = $method;
			$method = $pyjs__bind_method2('reloadData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var collectExpandedNodes,c,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
				collectExpandedNodes = function(currNode) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var c,$iter6_idx,$iter6_type,res,$iter6_array,$iter6_iter,$iter6_nextval;
					res = $p['list']([]);
					$iter6_iter = $p['__getslice']($p['getattr'](currNode, '_children'), 0, null);
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						c = $iter6_nextval['$nextval'];
						if ($p['bool']($p['isinstance'](c, $m['HierarchyItem']))) {
							if ($p['bool']($p['getattr'](c, 'isExpanded'))) {
								res['append']($p['getattr'](c, 'data')['__getitem__']('key'));
							}
							res['extend'](collectExpandedNodes($p['getattr'](c, 'ol')));
						}
					}
					return res;
				};
				collectExpandedNodes['__name__'] = 'collectExpandedNodes';

				collectExpandedNodes['__bind_type__'] = 0;
				collectExpandedNodes['__args__'] = [null,null,['currNode']];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_expandedNodes', collectExpandedNodes($p['getattr'](self, 'entryFrame'))) : $p['setattr'](self, '_expandedNodes', collectExpandedNodes($p['getattr'](self, 'entryFrame'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_currentRequests', $p['list']([])) : $p['setattr'](self, '_currentRequests', $p['list']([])); 
				$iter7_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'entryFrame'), '_children'), 0, null);
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					c = $iter7_nextval['$nextval'];
					self['entryFrame']['removeChild'](c);
				}
				self['loadNode']($p['getattr'](self, 'rootNode'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reloadData'] = $method;
			$method = $pyjs__bind_method2('loadNode', function(node, cursor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					node = arguments[1];
					cursor = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof cursor == 'undefined') cursor=arguments['callee']['__args__'][4][1];
				var r,params;
				params = $p['dict']([['parent', node], ['orderby', 'sortindex']]);
				if ($p['bool'](cursor)) {
					params['update']($p['dict']([['cursor', cursor]]));
				}
				if ($p['bool']($p['getattr'](self, 'context'))) {
					params['update']($p['getattr'](self, 'context'));
				}
				r = $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list', params]);
				r['__is_instance__'] && typeof r['__setattr__'] == 'function' ? r['__setattr__']('node', node) : $p['setattr'](r, 'node', node); 
				self['_currentRequests']['append'](r);
				return null;
			}
	, 1, [null,null,['self'],['node'],['cursor', null]]);
			$cls_definition['loadNode'] = $method;
			$method = $pyjs__bind_method2('onRequestSucceded', function(req) {
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tmp,ol,$iter8_idx,$and20,$iter8_array,$iter8_iter,skel,hi,$iter8_nextval,$and22,$and21,$and19,data,$iter8_type;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)))) {
					self['actionBar']['resetLoadingState']();
					return null;
				}
				self['_currentRequests']['remove'](req);
				data = $m['NetworkService']['decode'](req);
				if ($p['bool']($p['op_eq']($p['getattr'](req, 'node'), $p['getattr'](self, 'rootNode')))) {
					ol = $p['getattr'](self, 'entryFrame');
				}
				else {
					tmp = self['itemForKey']($p['getattr'](req, 'node'));
					ol = $p['getattr'](tmp, 'ol');
					if (!( !$p['op_is'](ol, null) )) {
					   throw $p['AssertionError']();
					 }
				}
				$iter8_iter = data['__getitem__']('skellist');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					skel = $iter8_nextval['$nextval'];
					hi = $m['HierarchyItem']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
					ol['appendChild'](hi);
					if ($p['bool']($p['getattr'](self, '_expandedNodes')['__contains__']($p['getattr'](hi, 'data')['__getitem__']('key')))) {
						hi['toggleExpand']();
						if ($p['bool'](!$p['bool']($p['getattr'](hi, 'isLoaded')))) {
							hi['__is_instance__'] && typeof hi['__setattr__'] == 'function' ? hi['__setattr__']('isLoaded', true) : $p['setattr'](hi, 'isLoaded', true); 
							self['loadNode']($p['getattr'](hi, 'data')['__getitem__']('key'));
						}
					}
				}
				if ($p['bool'](($p['bool']($and19=!$p['bool']($p['getattr'](ol, '_children')))?!$p['op_eq'](ol, $p['getattr'](self, 'entryFrame')):$and19))) {
					ol['parent']()['__getitem__']('class')['append']('has_no_childs');
				}
				if ($p['bool'](($p['bool']($and21=data['__getitem__']('skellist'))?data['__getitem__']('cursor'):$and21))) {
					self['loadNode']($p['getattr'](req, 'node'), data['__getitem__']('cursor'));
				}
				self['actionBar']['resetLoadingState']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onRequestSucceded'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](!$p['op_is']($p['getattr'](self, '_currentCursor'), null))) {
					return $p['list']([$p['getattr']($p['getattr'](self, '_currentCursor'), 'data')]);
				}
				return $p['list']([]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentSelection'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var srcKey;
				srcKey = event['dataTransfer']['getData']('Text');
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'reparent', $p['dict']([['item', srcKey], ['dest', $p['getattr'](self, 'rootNode')]])]);
				event['stopPropagation']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
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
					if (self.prototype['__md5__'] !== 'b9b02876fba176aa4e07bc9b172eacb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, '_currentCursor'))) {
					self['selectionActivatedEvent']['fire'](self, $p['list']([$p['getattr'](self, '_currentCursor')]));
					$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activateCurrentSelection'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $or7,$or8;
				return ($p['bool']($or7=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'hierarchy'))?$or7:moduleInfo['__getitem__']('handler')['startswith']('hierarchy.'));
			}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
			$cls_definition['canHandle'] = $method;
			$method = $pyjs__bind_method2('render', function(moduleName, adminInfo, context) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				var rootNode;
				if ($p['bool'](context['__contains__']('@rootNode'))) {
					rootNode = context['__getitem__']('@rootNode');
					context['__delitem__']('@rootNode');
				}
				else {
					rootNode = null;
				}
				return $pyjs_kwargs_call(null, $m['HierarchyWidget'], null, null, [{'module':moduleName, 'rootNode':rootNode, 'context':context}]);
			}
	, 3, [null,null,['moduleName'],['adminInfo'],['context']]);
			$cls_definition['render'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HierarchyWidget', $p['tuple']($bases), $data);
		})();
		$m['moduleHandlerSelector']['insert']($constant_int_1, $p['getattr']($m['HierarchyWidget'], 'canHandle'), $p['getattr']($m['HierarchyWidget'], 'render'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.hierarchy */


/* end module: widgets.hierarchy */


/*
PYJS_DEPS: ['html5', 'utils', 'time.time', 'time', 'network.NetworkService', 'network', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'event.EventDispatcher', 'event', 'priorityqueue.moduleHandlerSelector', 'priorityqueue', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
