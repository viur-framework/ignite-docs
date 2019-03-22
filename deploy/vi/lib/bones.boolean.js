/* start module: bones.boolean */
$pyjs['loaded_modules']['bones.boolean'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.boolean']['__was_initialized__']) return $pyjs['loaded_modules']['bones.boolean'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.boolean'];
	$m['__repr__'] = function() { return '<module: bones.boolean>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.boolean';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['boolean'] = $pyjs['loaded_modules']['bones.boolean'];
	$m.__track_lines__[1] = 'bones.boolean.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.boolean.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'bones.boolean.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector';
	$m.__track_lines__[4] = 'bones.boolean.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'bones.boolean.py, line 5:\n    from event import EventDispatcher';
	$m.__track_lines__[6] = 'bones.boolean.py, line 6:\n    from i18n import translate';
	$m.__track_lines__[8] = 'bones.boolean.py, line 8:\n    class BooleanViewBoneDelegate( object ):';
	$m.__track_lines__[9] = 'bones.boolean.py, line 9:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[10] = 'bones.boolean.py, line 10:\n    super( BooleanViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[11] = 'bones.boolean.py, line 11:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[12] = 'bones.boolean.py, line 12:\n    self.boneName = boneName';
	$m.__track_lines__[13] = 'bones.boolean.py, line 13:\n    self.moduleName = moduleName';
	$m.__track_lines__[15] = 'bones.boolean.py, line 15:\n    def render( self, data, field ):';
	$m.__track_lines__[16] = 'bones.boolean.py, line 16:\n    if field in data.keys():';
	$m.__track_lines__[17] = 'bones.boolean.py, line 17:\n    return( html5.Label(str( data[field])))';
	$m.__track_lines__[18] = 'bones.boolean.py, line 18:\n    return( html5.Label(conf[ "empty_value" ]) )';
	$m.__track_lines__[20] = 'bones.boolean.py, line 20:\n    class BooleanEditBone( html5.Input ):';
	$m.__track_lines__[22] = 'bones.boolean.py, line 22:\n    def __init__(self, moduleName, boneName,readOnly, *args, **kwargs ):';
	$m.__track_lines__[23] = 'bones.boolean.py, line 23:\n    super( BooleanEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[24] = 'bones.boolean.py, line 24:\n    self.boneName = boneName';
	$m.__track_lines__[25] = 'bones.boolean.py, line 25:\n    self.readOnly = readOnly';
	$m.__track_lines__[26] = 'bones.boolean.py, line 26:\n    self["type"]="checkbox"';
	$m.__track_lines__[27] = 'bones.boolean.py, line 27:\n    if readOnly:';
	$m.__track_lines__[28] = 'bones.boolean.py, line 28:\n    self["disabled"]=True';
	$m.__track_lines__[32] = 'bones.boolean.py, line 31:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[33] = 'bones.boolean.py, line 33:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[34] = 'bones.boolean.py, line 34:\n    return( BooleanEditBone( moduleName, boneName, readOnly ) )';
	$m.__track_lines__[37] = 'bones.boolean.py, line 37:\n    def unserialize(self, data, extendedErrorInformation=None):';
	$m.__track_lines__[38] = 'bones.boolean.py, line 38:\n    if self.boneName in data.keys():';
	$m.__track_lines__[39] = 'bones.boolean.py, line 39:\n    self._setChecked(data[self.boneName])';
	$m.__track_lines__[42] = 'bones.boolean.py, line 42:\n    def serializeForPost(self):';
	$m.__track_lines__[43] = 'bones.boolean.py, line 43:\n    return ( { self.boneName: str(self._getChecked())} )';
	$m.__track_lines__[46] = 'bones.boolean.py, line 46:\n    def serializeForDocument(self):';
	$m.__track_lines__[47] = 'bones.boolean.py, line 47:\n    return( self.serialize( ) )';
	$m.__track_lines__[50] = 'bones.boolean.py, line 50:\n    class ExtendedBooleanSearch( html5.Div ):';
	$m.__track_lines__[51] = 'bones.boolean.py, line 51:\n    def __init__(self, extension, view, modul, *args, **kwargs ):';
	$m.__track_lines__[52] = 'bones.boolean.py, line 52:\n    super( ExtendedBooleanSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[53] = 'bones.boolean.py, line 53:\n    self.view = view';
	$m.__track_lines__[54] = 'bones.boolean.py, line 54:\n    self.extension = extension';
	$m.__track_lines__[55] = 'bones.boolean.py, line 55:\n    self.module = modul';
	$m.__track_lines__[56] = 'bones.boolean.py, line 56:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[57] = 'bones.boolean.py, line 57:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[58] = 'bones.boolean.py, line 58:\n    self.selectionCb = html5.Select()';
	$m.__track_lines__[59] = 'bones.boolean.py, line 59:\n    self.appendChild( self.selectionCb )';
	$m.__track_lines__[60] = 'bones.boolean.py, line 60:\n    o = html5.Option()';
	$m.__track_lines__[61] = 'bones.boolean.py, line 61:\n    o["value"] = ""';
	$m.__track_lines__[62] = 'bones.boolean.py, line 62:\n    o.appendChild(html5.TextNode(translate("Ignore")))';
	$m.__track_lines__[63] = 'bones.boolean.py, line 63:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[64] = 'bones.boolean.py, line 64:\n    o = html5.Option()';
	$m.__track_lines__[65] = 'bones.boolean.py, line 65:\n    o["value"] = "0"';
	$m.__track_lines__[66] = 'bones.boolean.py, line 66:\n    o.appendChild(html5.TextNode(translate("No")))';
	$m.__track_lines__[67] = 'bones.boolean.py, line 67:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[68] = 'bones.boolean.py, line 68:\n    o = html5.Option()';
	$m.__track_lines__[69] = 'bones.boolean.py, line 69:\n    o["value"] = "1"';
	$m.__track_lines__[70] = 'bones.boolean.py, line 70:\n    o.appendChild(html5.TextNode(translate("Yes")))';
	$m.__track_lines__[71] = 'bones.boolean.py, line 71:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[72] = 'bones.boolean.py, line 72:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[74] = 'bones.boolean.py, line 74:\n    def onChange(self, event):';
	$m.__track_lines__[75] = 'bones.boolean.py, line 75:\n    event.stopPropagation()';
	$m.__track_lines__[76] = 'bones.boolean.py, line 76:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[79] = 'bones.boolean.py, line 79:\n    def updateFilter(self, filter):';
	$m.__track_lines__[80] = 'bones.boolean.py, line 80:\n    val = self.selectionCb["options"].item(self.selectionCb["selectedIndex"]).value';
	$m.__track_lines__[81] = 'bones.boolean.py, line 81:\n    if not val:';
	$m.__track_lines__[82] = 'bones.boolean.py, line 82:\n    if self.extension["target"] in filter.keys():';
	$m.__track_lines__[83] = 'bones.boolean.py, line 83:\n    del filter[ self.extension["target"] ]';
	$m.__track_lines__[85] = 'bones.boolean.py, line 85:\n    filter[ self.extension["target"] ] = val';
	$m.__track_lines__[86] = 'bones.boolean.py, line 86:\n    return( filter )';
	$m.__track_lines__[89] = 'bones.boolean.py, line 88:\n    @staticmethod ... def canHandleExtension( extension, view, modul ):';
	$m.__track_lines__[90] = 'bones.boolean.py, line 90:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="boolean" or extension["type"].startswith("boolean.") ) )';
	$m.__track_lines__[94] = 'bones.boolean.py, line 94:\n    def CheckForBooleanBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[95] = 'bones.boolean.py, line 95:\n    return( skelStucture[boneName]["type"]=="bool" )';
	$m.__track_lines__[98] = 'bones.boolean.py, line 98:\n    editBoneSelector.insert( 3, CheckForBooleanBone, BooleanEditBone)';
	$m.__track_lines__[99] = 'bones.boolean.py, line 99:\n    viewDelegateSelector.insert( 3, CheckForBooleanBone, BooleanViewBoneDelegate)';
	$m.__track_lines__[100] = 'bones.boolean.py, line 100:\n    extendedSearchWidgetSelector.insert( 1, ExtendedBooleanSearch.canHandleExtension, ExtendedBooleanSearch )';


	$pyjs['track']['module']='bones.boolean';
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
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['BooleanViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.boolean';
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

			$pyjs['track']={'module':'bones.boolean', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BooleanViewBoneDelegate'], self);
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

			$pyjs['track']={'module':'bones.boolean', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
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
				return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=18;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BooleanViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=20;
	$m['BooleanEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.boolean';
		$pyjs['track']['lineno']=22;
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

			$pyjs['track']={'module':'bones.boolean', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BooleanEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=24;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=25;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=26;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=27;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=28;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and1,$and2,readOnly;
			$pyjs['track']={'module':'bones.boolean', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			readOnly = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and1);
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=34;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['BooleanEditBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				extendedErrorInformation = arguments[2];
			}
			if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'bones.boolean', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_setChecked'](data['__getitem__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=42;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.boolean', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=43;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getChecked']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=46;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.boolean', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=47;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=20;
		var $bases = new Array($p['getattr']($m['html5'], 'Input'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BooleanEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=50;
	$m['ExtendedBooleanSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.boolean';
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('__init__', function(extension, view, modul) {
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
				extension = arguments[1];
				view = arguments[2];
				modul = arguments[3];
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
				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof view != 'undefined') {
					if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = view;
						view = arguments[4];
					}
				} else 				if (typeof extension != 'undefined') {
					if (extension !== null && typeof extension['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = extension;
						extension = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			var o;
			$pyjs['track']={'module':'bones.boolean', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExtendedBooleanSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=53;
			self['view'] = view;
			$pyjs['track']['lineno']=54;
			self['extension'] = extension;
			$pyjs['track']['lineno']=55;
			self['module'] = modul;
			$pyjs['track']['lineno']=56;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=58;
			self['selectionCb'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'selectionCb'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=60;
			o = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=62;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Ignore');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=63;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=64;
			o = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=65;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['__setitem__']('value', '0');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('No');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=68;
			o = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['track']['lineno']=69;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['__setitem__']('value', '1');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=70;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Yes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['track']['lineno']=72;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.boolean', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=79;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var val;
			$pyjs['track']={'module':'bones.boolean', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=80;
			val = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionCb')['__getitem__']('options')['item']($p['getattr'](self, 'selectionCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})(), 'value');
			$pyjs['track']['lineno']=81;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](val));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs['track']['lineno']=82;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()['__contains__']($p['getattr'](self, 'extension')['__getitem__']('target')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
					$pyjs['track']['lineno']=83;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return filter['__delitem__']($p['getattr'](self, 'extension')['__getitem__']('target'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=85;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			}
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=86;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=89;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
			var $or1,$or2,$and3,$and4,$and5;
			$pyjs['track']={'module':'bones.boolean', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.boolean';
			$pyjs['track']['lineno']=89;
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=90;
			var $pyjs__ret = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})())?($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'boolean'))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('boolean.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()):$and4):$and3);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['modul']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=50;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExtendedBooleanSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=94;
	$m['CheckForBooleanBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.boolean','lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.boolean';
		$pyjs['track']['lineno']=94;
		$pyjs['track']['lineno']=95;
		$pyjs['track']['lineno']=95;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'bool');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForBooleanBone']['__name__'] = 'CheckForBooleanBone';

	$m['CheckForBooleanBone']['__bind_type__'] = 0;
	$m['CheckForBooleanBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=98;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForBooleanBone'], $m['BooleanEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
	$pyjs['track']['lineno']=99;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForBooleanBone'], $m['BooleanViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
	$pyjs['track']['lineno']=100;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['ExtendedBooleanSearch'], 'canHandleExtension'), $m['ExtendedBooleanSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
	return this;
}; /* end bones.boolean */


/* end module: bones.boolean */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'config.conf', 'config', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n']
*/
