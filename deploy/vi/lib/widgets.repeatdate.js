/* start module: widgets.repeatdate */
$pyjs['loaded_modules']['widgets.repeatdate'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.repeatdate']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.repeatdate'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.repeatdate'];
	$m['__repr__'] = function() { return '<module: widgets.repeatdate>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.repeatdate';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['repeatdate'] = $pyjs['loaded_modules']['widgets.repeatdate'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_403 = new $p['int'](403);
		var $constant_int_401 = new $p['int'](401);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['Popup'] = $p['___import___']('html5.ext.popup.Popup', 'widgets', null, false);
		$m['isReturn'] = $p['___import___']('html5.keycodes.isReturn', 'widgets', null, false);
		$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
		$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['selectmulti'] = $p['___import___']('bones.selectmulti', 'widgets', null, false);
		$m['date'] = $p['___import___']('bones.date', 'widgets', null, false);
		$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['utils'] = $p['___import___']('utils', 'widgets');
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['fieldset_A'] = $p['___import___']('widgets.edit.fieldset_A', 'widgets', null, false);
		$m['RepeatDatePopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.repeatdate';
			$cls_definition['__md5__'] = 'f37d8d021c30d5dd836e5dec1566cc6f';
			$cls_definition['__editIdx_'] = $constant_int_0;
			$method = $pyjs__bind_method2('__init__', function(modul, key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					modul = arguments[1];
					key = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h3,$add2,$add1;
				$p['$$super']($m['RepeatDatePopup'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('module', modul) : $p['setattr'](self, 'module', modul); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('editIdx', $p['getattr']($m['RepeatDatePopup'], '__editIdx_')) : $p['setattr'](self, 'editIdx', $p['getattr']($m['RepeatDatePopup'], '__editIdx_')); 
				$m['RepeatDatePopup']['__is_instance__'] && typeof $m['RepeatDatePopup']['__setattr__'] == 'function' ? $m['RepeatDatePopup']['__setattr__']('__editIdx_', $p['__op_add']($add1=$p['getattr']($m['RepeatDatePopup'], '__editIdx_'),$add2=$constant_int_1)) : $p['setattr']($m['RepeatDatePopup'], '__editIdx_', $p['__op_add']($add1=$p['getattr']($m['RepeatDatePopup'], '__editIdx_'),$add2=$constant_int_1)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', key) : $p['setattr'](self, 'key', key); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lastData', $p['dict']([])) : $p['setattr'](self, '_lastData', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeOnSuccess', false) : $p['setattr'](self, 'closeOnSuccess', false); 
				h3 = $m['html5']['H3']();
				h3['__getitem__']('class')['append']($p['sprintf']('modul_%s', $p['getattr'](self, 'module')));
				h3['__getitem__']('class')['append']('apptype_list');
				h3['appendChild']($m['html5']['TextNode']($m['translate']('create recurrent dates')));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasInitialRequest', true) : $p['setattr'](self, 'wasInitialRequest', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('actionbar', $m['ActionBar']($p['getattr'](self, 'module'), 'list', 'repeatdate')) : $p['setattr'](self, 'actionbar', $m['ActionBar']($p['getattr'](self, 'module'), 'list', 'repeatdate')); 
				self['appendChild']($p['getattr'](self, 'actionbar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('form', $m['html5']['Form']()) : $p['setattr'](self, 'form', $m['html5']['Form']()); 
				self['appendChild']($p['getattr'](self, 'form'));
				self['actionbar']['setActions']($p['list'](['create.recurrent']));
				self['reloadData']();
				return null;
			}
	, 1, [null,null,['self'],['modul'],['key']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['save']($p['dict']([]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reloadData'] = $method;
			$method = $pyjs__bind_method2('save', function(data) {
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
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasInitialRequest', !$p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))) : $p['setattr'](self, 'wasInitialRequest', !$p['bool'](($p['cmp']($p['len'](data), $constant_int_0) == 1))); 
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'module'), '_tasks'))) {
					return null;
				}
				else {
					if ($p['bool'](!$p['bool'](data))) {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('view/%s', $p['getattr'](self, 'key'))]);
					}
					else {
						$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']($p['len'](data), $constant_int_0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'add', data]);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['save'] = $method;
			$method = $pyjs__bind_method2('setData', function(request, data, ignoreMissing) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					request = arguments[1];
					data = arguments[2];
					ignoreMissing = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof request == 'undefined') request=arguments['callee']['__args__'][3][1];
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][4][1];
				if (typeof ignoreMissing == 'undefined') ignoreMissing=arguments['callee']['__args__'][5][1];
				var $lambda1,containerDiv2,tmpList,fshref,$iter4_type,$iter2_type,containerDiv,$iter4_iter,skelStructure,$iter2_iter,countLabel,$pyjs_try_err,$iter4_nextval,fs,$or1,$or2,$and1,$and2,$and3,$and4,logDiv,$iter2_idx,count_id,legend,$iter2_nextval,startdate_id,k,startdateLabel,cat,$iter4_idx,startdate,$iter2_array,v,$iter4_array,spanMsg,section,fieldSets;
				if (!( ($p['bool']($or1=request)?$or1:data) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](request)) {
					data = $m['NetworkService']['decode'](request);
				}
				try {
					skelStructure = function(){
						var $iter1_nextval,$iter1_type,k,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
					$iter1_iter = data['__getitem__']('structure');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						$collcomp1['__setitem__'](k, v);
					}

	return $collcomp1;}();
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$m['NetworkService']['notifyChange']($p['getattr'](self, 'module'));
						$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
						return null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$p['printFunc']([], 1);
				$p['printFunc']([$p['tuple'](['data', data])], 1);
				$p['printFunc']([$p['tuple'](['action', data['__getitem__']('action')])], 1);
				if ($p['bool'](($p['bool']($and1=data['__contains__']('action'))?$p['list'](['addSuccess', 'editSuccess'])['__contains__'](data['__getitem__']('action')):$and1))) {
					$m['NetworkService']['notifyChange']($p['getattr'](self, 'module'));
					logDiv = $m['html5']['Div']();
					logDiv['__getitem__']('class')['append']('msg');
					spanMsg = $m['html5']['Span']();
					spanMsg['appendChild']($m['html5']['TextNode']($m['translate']('Entry saved!')));
					spanMsg['__getitem__']('class')['append']('msgspan');
					logDiv['appendChild'](spanMsg);
					if ($p['bool']($m['conf']['__getitem__']('modules')['keys']()['__contains__']($p['getattr'](self, 'module')))) {
						spanMsg = $m['html5']['Span']();
						spanMsg['appendChild']($m['html5']['TextNode']($m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('name')));
						spanMsg['__getitem__']('class')['append']('modulspan');
						logDiv['appendChild'](spanMsg);
					}
					if ($p['bool'](($p['bool']($and3=data['keys']()['__contains__']('values'))?data['__getitem__']('values')['keys']()['__contains__']('name'):$and3))) {
						spanMsg = $m['html5']['Span']();
						spanMsg['appendChild']($m['html5']['TextNode']($p['str'](data['__getitem__']('values')['__getitem__']('name'))));
						spanMsg['__getitem__']('class')['append']('namespan');
						logDiv['appendChild'](spanMsg);
					}
					$m['conf']['__getitem__']('mainWindow')['log']('success', logDiv);
					if ($p['bool']($p['getattr'](self, 'closeOnSuccess'))) {
						$m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
						return null;
					}
					self['clear']();
					self['reloadData']();
					return null;
				}
				self['clear']();
				self['actionbar']['resetLoadingState']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dataCache', data) : $p['setattr'](self, 'dataCache', data); 
				fieldSets = $p['dict']([]);
				cat = 'byweek';
				fs = $m['html5']['Fieldset']();
				fs['__setitem__']('class', cat);
				if ($p['bool']($p['op_eq'](cat, 'byweek'))) {
					fs['__getitem__']('class')['append']('active');
				}
				fs['__setitem__']('name', cat);
				legend = $m['html5']['Legend']();
				fshref = $m['fieldset_A']();
				fshref['appendChild']($m['html5']['TextNode'](cat));
				legend['appendChild'](fshref);
				fs['appendChild'](legend);
				section = $m['html5']['Section']();
				fs['appendChild'](section);
				fs['__is_instance__'] && typeof fs['__setattr__'] == 'function' ? fs['__setattr__']('_section', section) : $p['setattr'](fs, '_section', section); 
				fieldSets['__setitem__'](cat, fs);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dtstart', data['__getitem__']('values')['__getitem__']('startdate')) : $p['setattr'](self, 'dtstart', data['__getitem__']('values')['__getitem__']('startdate')); 
				startdateLabel = $m['html5']['Label']('Termin');
				startdateLabel['__getitem__']('class')['append']('termin');
				startdateLabel['__getitem__']('class')['append']('date');
				startdate_id = $p['sprintf']('vi_%s_%s_edit_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), 'repeatdate']));
				startdateLabel['__setitem__']('for', startdate_id);
				startdate = $m['date']['DateViewBoneDelegate']('termin', 'startdate', skelStructure)['render'](data['__getitem__']('values'), 'startdate');
				startdate['__setitem__']('id', startdate_id);
				containerDiv = $m['html5']['Div']();
				containerDiv['appendChild'](startdateLabel);
				containerDiv['appendChild'](startdate);
				containerDiv['__getitem__']('class')['append']('bone');
				containerDiv['__getitem__']('class')['append']('bone_startdate');
				containerDiv['__getitem__']('class')['append']('date');
				fieldSets['__getitem__'](cat)['_section']['appendChild'](containerDiv);
				countLabel = $m['html5']['Label']('Wiederholungen');
				countLabel['__getitem__']('class')['append']('count');
				countLabel['__getitem__']('class')['append']('numeric');
				count_id = $p['sprintf']('vi_%s_%s_edit_bn_%s', $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), 'count']));
				countLabel['__setitem__']('for', count_id);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count', $m['html5']['Input']()) : $p['setattr'](self, 'count', $m['html5']['Input']()); 
				$p['getattr'](self, 'count')['__setitem__']('id', count_id);
				containerDiv2 = $m['html5']['Div']();
				containerDiv2['__getitem__']('class')['append']('bone');
				containerDiv2['__getitem__']('class')['append']('bone_count');
				containerDiv2['__getitem__']('class')['append']('date');
				containerDiv2['appendChild'](countLabel);
				containerDiv2['appendChild']($p['getattr'](self, 'count'));
				fieldSets['__getitem__'](cat)['_section']['appendChild'](containerDiv2);
				$iter2_iter = fieldSets['items']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					k = $tupleassign2[0];
					v = $tupleassign2[1];
					if ($p['bool'](!$p['bool'](v['__getitem__']('class')['__contains__']('active')))) {
						v['__getitem__']('class')['append']('active');
					}
				}
				tmpList = function(){
					var $iter3_idx,$iter3_nextval,$iter3_array,v,$collcomp2,$iter3_iter,$iter3_type,k;
	$collcomp2 = $p['list']();
				$iter3_iter = fieldSets['items']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					$collcomp2['append']($p['tuple']([k, v]));
				}

	return $collcomp2;}();
				var 				$lambda1 = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x['__getitem__']($constant_int_0);
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['x']];
				$pyjs_kwargs_call(tmpList, 'sort', null, null, [{'key':$lambda1}]);
				$iter4_iter = tmpList;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
					k = $tupleassign4[0];
					v = $tupleassign4[1];
					self['form']['appendChild'](v);
					v['__is_instance__'] && typeof v['__setattr__'] == 'function' ? v['__setattr__']('_section', null) : $p['setattr'](v, '_section', null); 
				}
				return null;
			}
	, 1, [null,null,['self'],['request', null],['data', null],['ignoreMissing', false]]);
			$cls_definition['setData'] = $method;
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
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,c,$iter5_idx,$iter5_iter,$iter5_array,$iter5_type;
				$iter5_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'form'), '_children'), 0, null);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					c = $iter5_nextval['$nextval'];
					self['form']['removeChild'](c);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
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
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
				if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
				var $or5,$or4,$or3,$and5,$and6,errorDiv,txt,$or6;
				$p['getattr'](self, 'actionbar')['__getitem__']('style')['__setitem__']('display', 'none');
				$p['getattr'](self, 'form')['__getitem__']('style')['__setitem__']('display', 'none');
				errorDiv = $m['html5']['Div']();
				errorDiv['__getitem__']('class')['append']('error_msg');
				if ($p['bool'](($p['bool']($and5=code)?($p['bool']($or3=$p['op_eq'](code, $constant_int_401))?$or3:$p['op_eq'](code, $constant_int_403)):$and5))) {
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
			$method = $pyjs__bind_method2('doSave', function(closeOnSuccess) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					closeOnSuccess = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f37d8d021c30d5dd836e5dec1566cc6f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof closeOnSuccess == 'undefined') closeOnSuccess=arguments['callee']['__args__'][3][1];
				var data;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeOnSuccess', closeOnSuccess) : $p['setattr'](self, 'closeOnSuccess', closeOnSuccess); 
				data = $p['dict']([['count', self['count']['_getValue']()], ['kind', '2'], ['dtstart', $p['getattr'](self, 'dtstart')]]);
				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), $p['sprintf']('addrecurrent/%s', $p['getattr'](self, 'key')), data]);
				return null;
			}
	, 1, [null,null,['self'],['closeOnSuccess', false]]);
			$cls_definition['doSave'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Div'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RepeatDatePopup', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.repeatdate */


/* end module: widgets.repeatdate */


/*
PYJS_DEPS: ['html5', 'html5.ext.popup.Popup', 'html5.ext', 'html5.ext.popup', 'html5.keycodes.isReturn', 'html5.keycodes', 'event.EventDispatcher', 'event', 'priorityqueue.editBoneSelector', 'priorityqueue', 'i18n.translate', 'i18n', 'bones.selectmulti', 'bones', 'bones.date', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'network.NetworkService', 'network', 'utils', 'config.conf', 'config', 'widgets.edit.fieldset_A', 'widgets.edit']
*/
