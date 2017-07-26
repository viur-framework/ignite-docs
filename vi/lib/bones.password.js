/* start module: bones.password */
$pyjs['loaded_modules']['bones.password'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.password']['__was_initialized__']) return $pyjs['loaded_modules']['bones.password'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.password'];
	$m['__repr__'] = function() { return '<module: bones.password>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.password';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['password'] = $pyjs['loaded_modules']['bones.password'];
	$m.__track_lines__[1] = 'bones.password.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.password.py, line 2:\n    import html5,re';
	$m.__track_lines__[3] = 'bones.password.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector';
	$m.__track_lines__[4] = 'bones.password.py, line 4:\n    from widgets.edit import InvalidBoneValueException';
	$m.__track_lines__[5] = 'bones.password.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[7] = 'bones.password.py, line 7:\n    class PasswordEditBone( html5.Div ):';
	$m.__track_lines__[8] = 'bones.password.py, line 8:\n    def __init__(self, moduleName, boneName, readOnly, *args, **kwargs ):';
	$m.__track_lines__[9] = 'bones.password.py, line 9:\n    super( PasswordEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'bones.password.py, line 10:\n    self.boneName = boneName';
	$m.__track_lines__[11] = 'bones.password.py, line 11:\n    self.readOnly = readOnly';
	$m.__track_lines__[12] = 'bones.password.py, line 12:\n    self.primeinput=html5.Input()';
	$m.__track_lines__[13] = 'bones.password.py, line 13:\n    self.secondinput=html5.Input()';
	$m.__track_lines__[14] = 'bones.password.py, line 14:\n    self.primeinput["type"]="password"';
	$m.__track_lines__[15] = 'bones.password.py, line 15:\n    self.secondinput["type"]="password"';
	$m.__track_lines__[16] = 'bones.password.py, line 16:\n    self.appendChild(self.primeinput)';
	$m.__track_lines__[17] = 'bones.password.py, line 17:\n    lbl=html5.Label(translate("reenter password"))';
	$m.__track_lines__[18] = 'bones.password.py, line 18:\n    lbl["for"]==moduleName+"_"+boneName+"_reenterpwd"';
	$m.__track_lines__[19] = 'bones.password.py, line 19:\n    self.appendChild(lbl)';
	$m.__track_lines__[20] = 'bones.password.py, line 20:\n    self.secondinput["name"]=moduleName+"_"+boneName+"_reenterpwd"';
	$m.__track_lines__[21] = 'bones.password.py, line 21:\n    self.appendChild(self.secondinput)';
	$m.__track_lines__[22] = 'bones.password.py, line 22:\n    if self.readOnly:';
	$m.__track_lines__[23] = 'bones.password.py, line 23:\n    self["disabled"] = True';
	$m.__track_lines__[26] = 'bones.password.py, line 25:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[27] = 'bones.password.py, line 27:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[28] = 'bones.password.py, line 28:\n    return( PasswordEditBone( moduleName, boneName, readOnly ) )';
	$m.__track_lines__[30] = 'bones.password.py, line 30:\n    def unserialize(self, data):';
	$m.__track_lines__[31] = 'bones.password.py, line 31:\n    pass';
	$m.__track_lines__[38] = 'bones.password.py, line 38:\n    def serializeForPost(self):';
	$m.__track_lines__[39] = 'bones.password.py, line 39:\n    if self.primeinput["value"]==self.secondinput["value"]: #and re.match("[a-zA-Z0-9]{6,100}$",self.primeinput["value"]):';
	$m.__track_lines__[40] = 'bones.password.py, line 40:\n    return( { self.boneName: self.primeinput["value"] } )';
	$m.__track_lines__[41] = 'bones.password.py, line 41:\n    raise InvalidBoneValueException()';
	$m.__track_lines__[43] = 'bones.password.py, line 43:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[44] = 'bones.password.py, line 44:\n    pass';
	$m.__track_lines__[47] = 'bones.password.py, line 47:\n    def CheckForPasswordBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[48] = 'bones.password.py, line 48:\n    return( str(skelStucture[boneName]["type"]).startswith("password") )';
	$m.__track_lines__[52] = 'bones.password.py, line 52:\n    editBoneSelector.insert( 5, CheckForPasswordBone, PasswordEditBone)';


	$pyjs['track']['module']='bones.password';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['re'] = $p['___import___']('re', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['InvalidBoneValueException'] = $p['___import___']('widgets.edit.InvalidBoneValueException', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$m['PasswordEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.password';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly) {
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
			} else {
				var self = arguments[0];
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[4];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[4];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			var $add12,$add5,$add2,$add3,$add1,$add6,$add7,$add4,$add10,$add8,$add9,lbl,$add11;
			$pyjs['track']={'module':'bones.password', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.password';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['PasswordEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=10;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=11;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=12;
			self['primeinput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=13;
			self['secondinput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'primeinput')['__setitem__']('type', 'password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'secondinput')['__setitem__']('type', 'password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'primeinput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=17;
			lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('reenter password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=18;
			$p['op_eq'](lbl['__getitem__']('for'), $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=moduleName,$add2='_'),$add4=boneName),$add6='_reenterpwd'));
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'secondinput')['__setitem__']('name', $p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=moduleName,$add8='_'),$add10=boneName),$add12='_reenterpwd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'secondinput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=22;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs['track']['lineno']=23;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and1,$and2,readOnly;
			$pyjs['track']={'module':'bones.password', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.password';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			readOnly = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=28;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['PasswordEditBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=30;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			$pyjs['track']={'module':'bones.password', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.password';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.password', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.password';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'primeinput')['__getitem__']('value'), $p['getattr'](self, 'secondinput')['__getitem__']('value')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=40;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'primeinput')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=41;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['InvalidBoneValueException']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.password', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.password';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PasswordEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=47;
	$m['CheckForPasswordBone'] = function(moduleName, boneName, skelStucture) {
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
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}

		$pyjs['track']={'module':'bones.password','lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.password';
		$pyjs['track']['lineno']=47;
		$pyjs['track']['lineno']=48;
		$pyjs['track']['lineno']=48;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['startswith']('password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForPasswordBone']['__name__'] = 'CheckForPasswordBone';

	$m['CheckForPasswordBone']['__bind_type__'] = 0;
	$m['CheckForPasswordBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=52;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForPasswordBone'], $m['PasswordEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
	return this;
}; /* end bones.password */


/* end module: bones.password */


/*
PYJS_DEPS: ['html5', 're', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'widgets.edit.InvalidBoneValueException', 'widgets', 'widgets.edit', 'i18n.translate', 'i18n']
*/
