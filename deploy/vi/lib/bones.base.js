/* start module: bones.base */
$pyjs['loaded_modules']['bones.base'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.base']['__was_initialized__']) return $pyjs['loaded_modules']['bones.base'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.base'];
	$m['__repr__'] = function() { return '<module: bones.base>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.base';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['base'] = $pyjs['loaded_modules']['bones.base'];
	$m.__track_lines__[1] = 'bones.base.py, line 1:\n    #!/usr/bin/env python2';
	$m.__track_lines__[4] = 'bones.base.py, line 4:\n    import html5';
	$m.__track_lines__[5] = 'bones.base.py, line 5:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[6] = 'bones.base.py, line 6:\n    from config import conf';
	$m.__track_lines__[8] = 'bones.base.py, line 8:\n    class BaseBoneExtractor(object):';
	$m.__track_lines__[9] = 'bones.base.py, line 9:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs):';
	$m.__track_lines__[10] = 'bones.base.py, line 10:\n    super(BaseBoneExtractor, self).__init__()';
	$m.__track_lines__[11] = 'bones.base.py, line 11:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[12] = 'bones.base.py, line 12:\n    self.boneName = boneName';
	$m.__track_lines__[13] = 'bones.base.py, line 13:\n    self.moduleName = moduleName';
	$m.__track_lines__[15] = 'bones.base.py, line 15:\n    def render(self, data, field):';
	$m.__track_lines__[16] = 'bones.base.py, line 16:\n    if field in data.keys():';
	$m.__track_lines__[17] = 'bones.base.py, line 17:\n    return str(data[field])';
	$m.__track_lines__[19] = 'bones.base.py, line 19:\n    return conf["empty_value"]';
	$m.__track_lines__[21] = 'bones.base.py, line 21:\n    def raw(self, data, field):';
	$m.__track_lines__[22] = 'bones.base.py, line 22:\n    if field in data.keys():';
	$m.__track_lines__[23] = 'bones.base.py, line 23:\n    if isinstance(data[field], list):';
	$m.__track_lines__[24] = 'bones.base.py, line 24:\n    return [str(x) for x in data[field]]';
	$m.__track_lines__[26] = 'bones.base.py, line 26:\n    return str(data[field])';
	$m.__track_lines__[28] = 'bones.base.py, line 28:\n    return None';
	$m.__track_lines__[30] = 'bones.base.py, line 30:\n    class BaseViewBoneDelegate( object ):';
	$m.__track_lines__[34] = 'bones.base.py, line 34:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[35] = 'bones.base.py, line 35:\n    super( BaseViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[36] = 'bones.base.py, line 36:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[37] = 'bones.base.py, line 37:\n    self.boneName = boneName';
	$m.__track_lines__[38] = 'bones.base.py, line 38:\n    self.moduleName=moduleName';
	$m.__track_lines__[40] = 'bones.base.py, line 40:\n    def render(self, data, field):';
	$m.__track_lines__[41] = 'bones.base.py, line 41:\n    if field in data.keys():';
	$m.__track_lines__[42] = 'bones.base.py, line 42:\n    return html5.Label(str(data[field]))';
	$m.__track_lines__[44] = 'bones.base.py, line 44:\n    return html5.Label(conf[ "empty_value" ])';
	$m.__track_lines__[47] = 'bones.base.py, line 47:\n    class BaseEditBone( html5.Input ):';
	$m.__track_lines__[51] = 'bones.base.py, line 51:\n    def setParams(self):';
	$m.__track_lines__[52] = 'bones.base.py, line 52:\n    if self.readOnly:';
	$m.__track_lines__[53] = 'bones.base.py, line 53:\n    self["disabled"] = True';
	$m.__track_lines__[55] = 'bones.base.py, line 55:\n    def __init__(self, moduleName, boneName, readOnly, *args, **kwargs ):';
	$m.__track_lines__[56] = 'bones.base.py, line 56:\n    super( BaseEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[57] = 'bones.base.py, line 57:\n    self.boneName = boneName';
	$m.__track_lines__[58] = 'bones.base.py, line 58:\n    self.readOnly = readOnly';
	$m.__track_lines__[59] = 'bones.base.py, line 59:\n    self.setParams()';
	$m.__track_lines__[62] = 'bones.base.py, line 61:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[63] = 'bones.base.py, line 63:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[64] = 'bones.base.py, line 64:\n    return( BaseEditBone( moduleName, boneName, readOnly ) )';
	$m.__track_lines__[66] = 'bones.base.py, line 66:\n    def unserialize(self, data, extendedErrorInformation=None):';
	$m.__track_lines__[67] = 'bones.base.py, line 67:\n    if self.boneName in data.keys():';
	$m.__track_lines__[68] = 'bones.base.py, line 68:\n    self["value"] = data[ self.boneName ] if data[ self.boneName ] else ""';
	$m.__track_lines__[71] = 'bones.base.py, line 71:\n    def serializeForPost(self):';
	$m.__track_lines__[72] = 'bones.base.py, line 72:\n    return( { self.boneName: self["value"] } )';
	$m.__track_lines__[74] = 'bones.base.py, line 74:\n    def serializeForDocument(self):';
	$m.__track_lines__[75] = 'bones.base.py, line 75:\n    return( self.serialize( ) )';
	$m.__track_lines__[77] = 'bones.base.py, line 77:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[78] = 'bones.base.py, line 78:\n    pass';
	$m.__track_lines__[83] = 'bones.base.py, line 83:\n    def CheckForBaseBone(moduleName, boneName, skelStucture, *args, **kwargs):';
	$m.__track_lines__[84] = 'bones.base.py, line 84:\n    res = str(skelStucture[boneName]["type"]).startswith("hidden")';
	$m.__track_lines__[85] = 'bones.base.py, line 85:\n    print("checking basebone", str(skelStucture[boneName]["type"]), res)';
	$m.__track_lines__[86] = 'bones.base.py, line 86:\n    return res';
	$m.__track_lines__[90] = 'bones.base.py, line 90:\n    editBoneSelector.insert( 0, lambda *args, **kwargs: True, BaseEditBone)';
	$m.__track_lines__[93] = 'bones.base.py, line 93:\n    viewDelegateSelector.insert( 0, lambda *args, **kwargs: True, BaseViewBoneDelegate)';
	$m.__track_lines__[94] = 'bones.base.py, line 94:\n    extractorDelegateSelector.insert(0, CheckForBaseBone, BaseBoneExtractor)';
	var $lambda2,$lambda1;

	$pyjs['track']['module']='bones.base';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['BaseBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.base';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, skelStructure) {
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
				skelStructure = arguments[3];
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
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[4];
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

			$pyjs['track']={'module':'bones.base', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BaseBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=11;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=12;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=13;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=17;
				$pyjs['track']['lineno']=17;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=19;
			var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('raw', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs['track']['lineno']=23;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs['track']['lineno']=24;
					$pyjs['track']['lineno']=24;
					var $pyjs__ret = function(){
						var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,x,$iter1_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['__getitem__'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						x = $iter1_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.base';

	return $collcomp1;}();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=26;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=28;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['raw'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BaseBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['BaseViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.base';
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, skelStructure) {
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
				skelStructure = arguments[3];
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
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[4];
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

			$pyjs['track']={'module':'bones.base', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BaseViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=36;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=37;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=38;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=40;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=41;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=44;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BaseViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=47;
	$m['BaseEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.base';
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('setParams', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setParams'] = $method;
		$pyjs['track']['lineno']=55;
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

			$pyjs['track']={'module':'bones.base', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BaseEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=57;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=58;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setParams']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and1,$and2,readOnly;
			$pyjs['track']={'module':'bones.base', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=63;
			readOnly = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=64;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['BaseEditBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				extendedErrorInformation = arguments[2];
			}
			if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'bones.base', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=68;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('value', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ('')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=72;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), self['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=75;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=77;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.base', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.base';
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=47;
		var $bases = new Array($p['getattr']($m['html5'], 'Input'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BaseEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=83;
	$m['CheckForBaseBone'] = function(moduleName, boneName, skelStucture) {
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
		var res;
		$pyjs['track']={'module':'bones.base','lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.base';
		$pyjs['track']['lineno']=83;
		$pyjs['track']['lineno']=84;
		res = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()['startswith']('hidden');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
		$pyjs['track']['lineno']=85;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple'](['checking basebone', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), res]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
		$pyjs['track']['lineno']=86;
		$pyjs['track']['lineno']=86;
		var $pyjs__ret = res;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForBaseBone']['__name__'] = 'CheckForBaseBone';

	$m['CheckForBaseBone']['__bind_type__'] = 0;
	$m['CheckForBaseBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=90;
	var 	$lambda1 = function() {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

		var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}

		$pyjs['track']={'module':'bones.base','lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.base';
		$pyjs['track']['lineno']=90;
		$pyjs['track']['lineno']=90;
		$pyjs['track']['lineno']=90;
		var $pyjs__ret = true;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = ['args',['kwargs']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](0, $lambda1, $m['BaseEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
	$pyjs['track']['lineno']=93;
	var 	$lambda2 = function() {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

		var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}

		$pyjs['track']={'module':'bones.base','lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.base';
		$pyjs['track']['lineno']=93;
		$pyjs['track']['lineno']=93;
		$pyjs['track']['lineno']=93;
		var $pyjs__ret = true;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda2['__name__'] = '$lambda2';

	$lambda2['__bind_type__'] = 0;
	$lambda2['__args__'] = ['args',['kwargs']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](0, $lambda2, $m['BaseViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
	$pyjs['track']['lineno']=94;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](0, $m['CheckForBaseBone'], $m['BaseBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
	return this;
}; /* end bones.base */


/* end module: bones.base */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'config.conf', 'config']
*/
