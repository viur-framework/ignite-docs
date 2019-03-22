/* start module: bones.color */
$pyjs['loaded_modules']['bones.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.color']['__was_initialized__']) return $pyjs['loaded_modules']['bones.color'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.color'];
	$m['__repr__'] = function() { return '<module: bones.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.color';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['color'] = $pyjs['loaded_modules']['bones.color'];
	$m.__track_lines__[1] = 'bones.color.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.color.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'bones.color.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector';
	$m.__track_lines__[4] = 'bones.color.py, line 4:\n    from config import conf';
	$m.__track_lines__[6] = 'bones.color.py, line 6:\n    class ColorViewBoneDelegate( object ):';
	$m.__track_lines__[7] = 'bones.color.py, line 7:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[8] = 'bones.color.py, line 8:\n    super( ColorViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[9] = 'bones.color.py, line 9:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[10] = 'bones.color.py, line 10:\n    self.boneName = boneName';
	$m.__track_lines__[11] = 'bones.color.py, line 11:\n    self.moduleName = moduleName';
	$m.__track_lines__[13] = 'bones.color.py, line 13:\n    def render( self, data, field ):';
	$m.__track_lines__[14] = 'bones.color.py, line 14:\n    if field in data.keys():';
	$m.__track_lines__[15] = 'bones.color.py, line 15:\n    can = html5.Div()';
	$m.__track_lines__[16] = 'bones.color.py, line 16:\n    can["style"]["width"]="60px"';
	$m.__track_lines__[17] = 'bones.color.py, line 17:\n    adiv = html5.Div()';
	$m.__track_lines__[18] = 'bones.color.py, line 18:\n    adiv["style"]["width"]="10px"';
	$m.__track_lines__[19] = 'bones.color.py, line 19:\n    adiv["style"]["height"]="10px"';
	$m.__track_lines__[20] = 'bones.color.py, line 20:\n    adiv["style"]["background-Color"]=str( data[field])';
	$m.__track_lines__[21] = 'bones.color.py, line 21:\n    adiv["style"]["float"]="left"';
	$m.__track_lines__[22] = 'bones.color.py, line 22:\n    adiv["style"]["margin-top"]="6px"';
	$m.__track_lines__[23] = 'bones.color.py, line 23:\n    adiv["style"]["margin-right"]="3px"';
	$m.__track_lines__[25] = 'bones.color.py, line 25:\n    lbl = html5.Label(str( data[field]))';
	$m.__track_lines__[26] = 'bones.color.py, line 26:\n    can.appendChild(adiv)';
	$m.__track_lines__[27] = 'bones.color.py, line 27:\n    can.appendChild(lbl)';
	$m.__track_lines__[28] = 'bones.color.py, line 28:\n    return(can)';
	$m.__track_lines__[29] = 'bones.color.py, line 29:\n    return( html5.Label( conf[ "empty_value" ] ) )';
	$m.__track_lines__[31] = 'bones.color.py, line 31:\n    class ColorEditBone( html5.Input ):';
	$m.__track_lines__[33] = 'bones.color.py, line 33:\n    def __init__(self, moduleName, boneName,readOnly, *args, **kwargs ):';
	$m.__track_lines__[34] = 'bones.color.py, line 34:\n    super( ColorEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[35] = 'bones.color.py, line 35:\n    self.boneName = boneName';
	$m.__track_lines__[36] = 'bones.color.py, line 36:\n    self.readOnly = readOnly';
	$m.__track_lines__[37] = 'bones.color.py, line 37:\n    self["type"]="color"';
	$m.__track_lines__[38] = 'bones.color.py, line 38:\n    if readOnly:';
	$m.__track_lines__[39] = 'bones.color.py, line 39:\n    self["disabled"]=True';
	$m.__track_lines__[43] = 'bones.color.py, line 42:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[44] = 'bones.color.py, line 44:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[45] = 'bones.color.py, line 45:\n    return( ColorEditBone( moduleName, boneName, readOnly ) )';
	$m.__track_lines__[48] = 'bones.color.py, line 48:\n    def unserialize(self, data, extendedErrorInformation=None):';
	$m.__track_lines__[49] = 'bones.color.py, line 49:\n    if self.boneName in data.keys():';
	$m.__track_lines__[50] = 'bones.color.py, line 50:\n    self._setValue(data[self.boneName])';
	$m.__track_lines__[53] = 'bones.color.py, line 53:\n    def serializeForPost(self):';
	$m.__track_lines__[54] = 'bones.color.py, line 54:\n    return ( { self.boneName: str(self._getValue())} )';
	$m.__track_lines__[57] = 'bones.color.py, line 57:\n    def serializeForDocument(self):';
	$m.__track_lines__[58] = 'bones.color.py, line 58:\n    return( self.serialize( ) )';
	$m.__track_lines__[60] = 'bones.color.py, line 60:\n    def CheckForColorBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[61] = 'bones.color.py, line 61:\n    return( skelStucture[boneName]["type"]=="color" )';
	$m.__track_lines__[64] = 'bones.color.py, line 64:\n    editBoneSelector.insert( 3, CheckForColorBone, ColorEditBone)';
	$m.__track_lines__[65] = 'bones.color.py, line 65:\n    viewDelegateSelector.insert( 3, CheckForColorBone, ColorViewBoneDelegate)';


	$pyjs['track']['module']='bones.color';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
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
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['ColorViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.color';
		$pyjs['track']['lineno']=7;
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

			$pyjs['track']={'module':'bones.color', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ColorViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=9;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=10;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=11;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var adiv,can,lbl;
			$pyjs['track']={'module':'bones.color', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=15;
				can = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['track']['lineno']=16;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return can['__getitem__']('style')['__setitem__']('width', '60px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=17;
				adiv = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['track']['lineno']=18;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('width', '10px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=19;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('height', '10px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=20;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('background-Color', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('float', 'left');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=22;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('margin-top', '6px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=23;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['__getitem__']('style')['__setitem__']('margin-right', '3px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=25;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=26;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return can['appendChild'](adiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=27;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return can['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=28;
				var $pyjs__ret = can;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=29;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ColorViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=31;
	$m['ColorEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.color';
		$pyjs['track']['lineno']=33;
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

			$pyjs['track']={'module':'bones.color', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ColorEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=35;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=36;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('type', 'color');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and1,$and2,readOnly;
			$pyjs['track']={'module':'bones.color', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			readOnly = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=45;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ColorEditBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				extendedErrorInformation = arguments[2];
			}
			if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'bones.color', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=50;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_setValue'](data['__getitem__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.color', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			$pyjs['track']['lineno']=54;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getValue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=57;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.color', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.color';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=58;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=31;
		var $bases = new Array($p['getattr']($m['html5'], 'Input'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ColorEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=60;
	$m['CheckForColorBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.color','lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.color';
		$pyjs['track']['lineno']=60;
		$pyjs['track']['lineno']=61;
		$pyjs['track']['lineno']=61;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'color');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForColorBone']['__name__'] = 'CheckForColorBone';

	$m['CheckForColorBone']['__bind_type__'] = 0;
	$m['CheckForColorBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=64;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForColorBone'], $m['ColorEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
	$pyjs['track']['lineno']=65;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForColorBone'], $m['ColorViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
	return this;
}; /* end bones.color */


/* end module: bones.color */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'config.conf', 'config']
*/
