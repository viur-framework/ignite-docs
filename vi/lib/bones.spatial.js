/* start module: bones.spatial */
$pyjs['loaded_modules']['bones.spatial'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.spatial']['__was_initialized__']) return $pyjs['loaded_modules']['bones.spatial'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.spatial'];
	$m['__repr__'] = function() { return '<module: bones.spatial>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.spatial';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['spatial'] = $pyjs['loaded_modules']['bones.spatial'];
	$m.__track_lines__[1] = 'bones.spatial.py, line 1:\n    #!/usr/bin/env python2';
	$m.__track_lines__[4] = 'bones.spatial.py, line 4:\n    import html5';
	$m.__track_lines__[5] = 'bones.spatial.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[6] = 'bones.spatial.py, line 6:\n    from priorityqueue import editBoneSelector';
	$m.__track_lines__[9] = 'bones.spatial.py, line 9:\n    class SpatialBone(html5.Div):';
	$m.__track_lines__[10] = 'bones.spatial.py, line 10:\n    def __init__(self, moduleName, boneName, readOnly, *args, **kwargs):';
	$m.__track_lines__[11] = 'bones.spatial.py, line 11:\n    super(SpatialBone, self).__init__(*args, **kwargs)';
	$m.__track_lines__[12] = 'bones.spatial.py, line 12:\n    self.boneName = boneName';
	$m.__track_lines__[13] = 'bones.spatial.py, line 13:\n    self.readOnly = readOnly';
	$m.__track_lines__[14] = 'bones.spatial.py, line 14:\n    self.latitude = html5.Input()';
	$m.__track_lines__[15] = 'bones.spatial.py, line 15:\n    self.longitude = html5.Input()';
	$m.__track_lines__[16] = 'bones.spatial.py, line 16:\n    self.latitude["type"] = "number"';
	$m.__track_lines__[17] = 'bones.spatial.py, line 17:\n    self.longitude["type"] = "number"';
	$m.__track_lines__[18] = 'bones.spatial.py, line 18:\n    self.appendChild(self.latitude)';
	$m.__track_lines__[19] = 'bones.spatial.py, line 19:\n    lbl = html5.Label(translate("longitude"))';
	$m.__track_lines__[20] = 'bones.spatial.py, line 20:\n    lbl["for"] == moduleName + "_" + boneName + "_longitude"';
	$m.__track_lines__[21] = 'bones.spatial.py, line 21:\n    self.appendChild(lbl)';
	$m.__track_lines__[22] = 'bones.spatial.py, line 22:\n    self.longitude["name"] = moduleName + "_" + boneName + "_longitude"';
	$m.__track_lines__[23] = 'bones.spatial.py, line 23:\n    self.appendChild(self.longitude)';
	$m.__track_lines__[24] = 'bones.spatial.py, line 24:\n    if self.readOnly:';
	$m.__track_lines__[25] = 'bones.spatial.py, line 25:\n    self["disabled"] = True';
	$m.__track_lines__[28] = 'bones.spatial.py, line 27:\n    @staticmethod ... def fromSkelStructure(moduleName, boneName, skelStructure):';
	$m.__track_lines__[29] = 'bones.spatial.py, line 29:\n    readOnly = "readonly" in skelStructure[boneName].keys() and skelStructure[boneName]["readonly"]';
	$m.__track_lines__[30] = 'bones.spatial.py, line 30:\n    return SpatialBone(moduleName, boneName, readOnly)';
	$m.__track_lines__[32] = 'bones.spatial.py, line 32:\n    def unserialize(self, data):';
	$m.__track_lines__[33] = 'bones.spatial.py, line 33:\n    try:';
	$m.__track_lines__[34] = 'bones.spatial.py, line 34:\n    self.latitude["value"], self.longitude["value"] = data[self.boneName]';
	$m.__track_lines__[36] = 'bones.spatial.py, line 36:\n    pass';
	$m.__track_lines__[38] = 'bones.spatial.py, line 38:\n    def serializeForPost(self):';
	$m.__track_lines__[39] = 'bones.spatial.py, line 39:\n    return {';
	$m.__track_lines__[44] = 'bones.spatial.py, line 44:\n    def setExtendedErrorInformation(self, errorInfo):';
	$m.__track_lines__[45] = 'bones.spatial.py, line 45:\n    pass';
	$m.__track_lines__[48] = 'bones.spatial.py, line 48:\n    def CheckForSpatialBone(moduleName, boneName, skelStucture, *args, **kwargs):';
	$m.__track_lines__[49] = 'bones.spatial.py, line 49:\n    tmp = str(skelStucture[boneName]["type"]).startswith("spatial")';
	$m.__track_lines__[50] = 'bones.spatial.py, line 50:\n    return tmp';
	$m.__track_lines__[54] = 'bones.spatial.py, line 54:\n    editBoneSelector.insert(5, CheckForSpatialBone, SpatialBone)';


	$pyjs['track']['module']='bones.spatial';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$m['SpatialBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.spatial';
		$pyjs['track']['lineno']=10;
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
			$pyjs['track']={'module':'bones.spatial', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.spatial';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SpatialBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=12;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=13;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=14;
			self['latitude'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=15;
			self['longitude'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'latitude')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'longitude')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'latitude'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=19;
			lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('longitude');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=20;
			$p['op_eq'](lbl['__getitem__']('for'), $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=moduleName,$add2='_'),$add4=boneName),$add6='_longitude'));
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'longitude')['__setitem__']('name', $p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=moduleName,$add8='_'),$add10=boneName),$add12='_longitude'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'longitude'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=24;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs['track']['lineno']=25;
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
		$pyjs['track']['lineno']=28;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and1,$and2,readOnly;
			$pyjs['track']={'module':'bones.spatial', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.spatial';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=29;
			readOnly = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=30;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SpatialBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $pyjs_try_err;
			$pyjs['track']={'module':'bones.spatial', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.spatial';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=34;
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack'](data['__getitem__']($p['getattr'](self, 'boneName')), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'latitude')['__setitem__']('value', $tupleassign1[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'longitude')['__setitem__']('value', $tupleassign1[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				} finally { $pyjs['in_try_except'] -= 1; }
			} catch($pyjs_try_err) {
				$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
				$pyjs['__active_exception_stack__'] = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.spatial';
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					$pyjs['track']['lineno']=36;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
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

			$pyjs['track']={'module':'bones.spatial', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.spatial';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=39;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[(function(){try{try{$pyjs['in_try_except'] += 1;
			return '{0}.lat'['format']($p['getattr'](self, 'boneName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), $p['getattr'](self, 'latitude')['__getitem__']('value')], [(function(){try{try{$pyjs['in_try_except'] += 1;
			return '{0}.lng'['format']($p['getattr'](self, 'boneName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), $p['getattr'](self, 'longitude')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.spatial', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.spatial';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SpatialBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=48;
	$m['CheckForSpatialBone'] = function(moduleName, boneName, skelStucture) {
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
		var tmp;
		$pyjs['track']={'module':'bones.spatial','lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.spatial';
		$pyjs['track']['lineno']=48;
		$pyjs['track']['lineno']=49;
		tmp = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['startswith']('spatial');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs['track']['lineno']=50;
		$pyjs['track']['lineno']=50;
		var $pyjs__ret = tmp;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForSpatialBone']['__name__'] = 'CheckForSpatialBone';

	$m['CheckForSpatialBone']['__bind_type__'] = 0;
	$m['CheckForSpatialBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=54;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForSpatialBone'], $m['SpatialBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
	return this;
}; /* end bones.spatial */


/* end module: bones.spatial */


/*
PYJS_DEPS: ['html5', 'i18n.translate', 'i18n', 'priorityqueue.editBoneSelector', 'priorityqueue']
*/
