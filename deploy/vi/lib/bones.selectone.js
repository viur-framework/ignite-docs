/* start module: bones.selectone */
$pyjs['loaded_modules']['bones.selectone'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.selectone']['__was_initialized__']) return $pyjs['loaded_modules']['bones.selectone'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.selectone'];
	$m['__repr__'] = function() { return '<module: bones.selectone>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.selectone';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['selectone'] = $pyjs['loaded_modules']['bones.selectone'];
	$m.__track_lines__[1] = 'bones.selectone.py, line 1:\n    #!/usr/bin/env python2';
	$m.__track_lines__[3] = 'bones.selectone.py, line 3:\n    import html5';
	$m.__track_lines__[4] = 'bones.selectone.py, line 4:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector, extractorDelegateSelector';
	$m.__track_lines__[5] = 'bones.selectone.py, line 5:\n    from event import EventDispatcher';
	$m.__track_lines__[6] = 'bones.selectone.py, line 6:\n    from i18n import translate';
	$m.__track_lines__[7] = 'bones.selectone.py, line 7:\n    from config import conf';
	$m.__track_lines__[8] = 'bones.selectone.py, line 8:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[10] = 'bones.selectone.py, line 10:\n    class SelectOneBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[11] = 'bones.selectone.py, line 11:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[12] = 'bones.selectone.py, line 12:\n    super( SelectOneBoneExtractor, self ).__init__()';
	$m.__track_lines__[13] = 'bones.selectone.py, line 13:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[14] = 'bones.selectone.py, line 14:\n    self.boneName = boneName';
	$m.__track_lines__[15] = 'bones.selectone.py, line 15:\n    self.moduleName=moduleName';
	$m.__track_lines__[17] = 'bones.selectone.py, line 17:\n    def render( self, data, field ):';
	$m.__track_lines__[18] = 'bones.selectone.py, line 18:\n    if field in data.keys():';
	$m.__track_lines__[19] = 'bones.selectone.py, line 19:\n    if data and field and field in self.skelStructure and data[field] and data[field] in self.skelStructure[field]["values"]:';
	$m.__track_lines__[20] = 'bones.selectone.py, line 20:\n    return self.skelStructure[field]["values"][data[field]]';
	$m.__track_lines__[21] = 'bones.selectone.py, line 21:\n    return conf[ "empty_value" ]';
	$m.__track_lines__[24] = 'bones.selectone.py, line 24:\n    class SelectOneViewBoneDelegate( object ):';
	$m.__track_lines__[25] = 'bones.selectone.py, line 25:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[26] = 'bones.selectone.py, line 26:\n    super( SelectOneViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[27] = 'bones.selectone.py, line 27:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[28] = 'bones.selectone.py, line 28:\n    self.boneName = boneName';
	$m.__track_lines__[29] = 'bones.selectone.py, line 29:\n    self.moduleName = moduleName';
	$m.__track_lines__[31] = 'bones.selectone.py, line 31:\n    def render( self, data, field ):';
	$m.__track_lines__[32] = 'bones.selectone.py, line 32:\n    if field in data.keys():';
	$m.__track_lines__[33] = 'bones.selectone.py, line 33:\n    if data and field and field in self.skelStructure:';
	$m.__track_lines__[34] = 'bones.selectone.py, line 34:\n    options = {k: v for k, v in self.skelStructure[field]["values"]}';
	$m.__track_lines__[36] = 'bones.selectone.py, line 36:\n    aspan = html5.Span()';
	$m.__track_lines__[37] = 'bones.selectone.py, line 37:\n    aspan.appendChild(html5.TextNode(options.get(data[field], data[field])))';
	$m.__track_lines__[38] = 'bones.selectone.py, line 38:\n    aspan["Title"]=data[field]';
	$m.__track_lines__[39] = 'bones.selectone.py, line 39:\n    return aspan';
	$m.__track_lines__[41] = 'bones.selectone.py, line 41:\n    return html5.Label(conf["empty_value"])';
	$m.__track_lines__[43] = 'bones.selectone.py, line 43:\n    class SelectOneEditBone( html5.Select ):';
	$m.__track_lines__[45] = 'bones.selectone.py, line 45:\n    def __init__(self, moduleName, boneName, readOnly, values, *args, **kwargs):';
	$m.__track_lines__[46] = 'bones.selectone.py, line 46:\n    super(SelectOneEditBone,  self).__init__(*args, **kwargs)';
	$m.__track_lines__[47] = 'bones.selectone.py, line 47:\n    self["name"] = self.boneName = boneName';
	$m.__track_lines__[48] = 'bones.selectone.py, line 48:\n    self.readOnly = readOnly';
	$m.__track_lines__[51] = 'bones.selectone.py, line 51:\n    if isinstance(values, dict):';
	$m.__track_lines__[52] = 'bones.selectone.py, line 52:\n    self.values = [(k, v) for k, v in values.items()]';
	$m.__track_lines__[54] = 'bones.selectone.py, line 54:\n    self.values = values';
	$m.__track_lines__[57] = 'bones.selectone.py, line 57:\n    for (key, value) in self.values:';
	$m.__track_lines__[58] = 'bones.selectone.py, line 58:\n    opt = html5.Option()';
	$m.__track_lines__[59] = 'bones.selectone.py, line 59:\n    opt["value"] = key';
	$m.__track_lines__[60] = 'bones.selectone.py, line 60:\n    opt.element.innerHTML = value';
	$m.__track_lines__[62] = 'bones.selectone.py, line 62:\n    self.appendChild(opt)';
	$m.__track_lines__[64] = 'bones.selectone.py, line 64:\n    if self.readOnly:';
	$m.__track_lines__[65] = 'bones.selectone.py, line 65:\n    self["disabled"] = True';
	$m.__track_lines__[68] = 'bones.selectone.py, line 67:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[69] = 'bones.selectone.py, line 69:\n    return SelectOneEditBone(moduleName, boneName,';
	$m.__track_lines__[73] = 'bones.selectone.py, line 73:\n    def unserialize(self, data):';
	$m.__track_lines__[74] = 'bones.selectone.py, line 74:\n    if self.boneName in data.keys():';
	$m.__track_lines__[75] = 'bones.selectone.py, line 75:\n    self.val = data[ self.boneName ] if data[ self.boneName ] else ""';
	$m.__track_lines__[76] = 'bones.selectone.py, line 76:\n    for aoption in self._children:';
	$m.__track_lines__[77] = 'bones.selectone.py, line 77:\n    if aoption["value"] == self.val:';
	$m.__track_lines__[78] = 'bones.selectone.py, line 78:\n    aoption["selected"]=True';
	$m.__track_lines__[80] = 'bones.selectone.py, line 80:\n    def serializeForPost(self):';
	$m.__track_lines__[81] = 'bones.selectone.py, line 81:\n    for aoption in self._children:';
	$m.__track_lines__[82] = 'bones.selectone.py, line 82:\n    if aoption["selected"]:';
	$m.__track_lines__[83] = 'bones.selectone.py, line 83:\n    return( { self.boneName: aoption["value"] } )';
	$m.__track_lines__[84] = 'bones.selectone.py, line 84:\n    return ({})';
	$m.__track_lines__[86] = 'bones.selectone.py, line 86:\n    def serializeForDocument(self):';
	$m.__track_lines__[87] = 'bones.selectone.py, line 87:\n    return( self.serialize( ) )';
	$m.__track_lines__[89] = 'bones.selectone.py, line 89:\n    class ExtendedSelectOneSearch( html5.Div ):';
	$m.__track_lines__[90] = 'bones.selectone.py, line 90:\n    def __init__(self, extension, view, modul, *args, **kwargs ):';
	$m.__track_lines__[91] = 'bones.selectone.py, line 91:\n    super( ExtendedSelectOneSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[92] = 'bones.selectone.py, line 92:\n    self.view = view';
	$m.__track_lines__[93] = 'bones.selectone.py, line 93:\n    self.extension = extension';
	$m.__track_lines__[94] = 'bones.selectone.py, line 94:\n    self.module = modul';
	$m.__track_lines__[95] = 'bones.selectone.py, line 95:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[96] = 'bones.selectone.py, line 96:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[97] = 'bones.selectone.py, line 97:\n    self.selectionCb = html5.Select()';
	$m.__track_lines__[98] = 'bones.selectone.py, line 98:\n    self.appendChild( self.selectionCb )';
	$m.__track_lines__[99] = 'bones.selectone.py, line 99:\n    o = html5.Option()';
	$m.__track_lines__[100] = 'bones.selectone.py, line 100:\n    o["value"] = ""';
	$m.__track_lines__[101] = 'bones.selectone.py, line 101:\n    o.appendChild(html5.TextNode(translate("Ignore")))';
	$m.__track_lines__[102] = 'bones.selectone.py, line 102:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[103] = 'bones.selectone.py, line 103:\n    for k,v in extension["values"].items():';
	$m.__track_lines__[104] = 'bones.selectone.py, line 104:\n    o = html5.Option()';
	$m.__track_lines__[105] = 'bones.selectone.py, line 105:\n    o["value"] = k';
	$m.__track_lines__[106] = 'bones.selectone.py, line 106:\n    o.appendChild(html5.TextNode(v))';
	$m.__track_lines__[107] = 'bones.selectone.py, line 107:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[108] = 'bones.selectone.py, line 108:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[110] = 'bones.selectone.py, line 110:\n    def onChange(self, event):';
	$m.__track_lines__[111] = 'bones.selectone.py, line 111:\n    event.stopPropagation()';
	$m.__track_lines__[112] = 'bones.selectone.py, line 112:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[115] = 'bones.selectone.py, line 115:\n    def updateFilter(self, filter):';
	$m.__track_lines__[116] = 'bones.selectone.py, line 116:\n    val = self.selectionCb["options"].item(self.selectionCb["selectedIndex"]).value';
	$m.__track_lines__[117] = 'bones.selectone.py, line 117:\n    if not val:';
	$m.__track_lines__[118] = 'bones.selectone.py, line 118:\n    if self.extension["target"] in filter.keys():';
	$m.__track_lines__[119] = 'bones.selectone.py, line 119:\n    del filter[ self.extension["target"] ]';
	$m.__track_lines__[121] = 'bones.selectone.py, line 121:\n    filter[ self.extension["target"] ] = val';
	$m.__track_lines__[122] = 'bones.selectone.py, line 122:\n    return( filter )';
	$m.__track_lines__[125] = 'bones.selectone.py, line 124:\n    @staticmethod ... def canHandleExtension( extension, view, modul ):';
	$m.__track_lines__[126] = 'bones.selectone.py, line 126:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="selectone" or extension["type"].startswith("selectone.") ) )';
	$m.__track_lines__[128] = 'bones.selectone.py, line 128:\n    def CheckForSelectOneBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[129] = 'bones.selectone.py, line 129:\n    return( skelStucture[boneName]["type"]=="selectone" )';
	$m.__track_lines__[132] = 'bones.selectone.py, line 132:\n    editBoneSelector.insert( 3, CheckForSelectOneBone, SelectOneEditBone)';
	$m.__track_lines__[133] = 'bones.selectone.py, line 133:\n    viewDelegateSelector.insert( 3, CheckForSelectOneBone, SelectOneViewBoneDelegate)';
	$m.__track_lines__[134] = 'bones.selectone.py, line 134:\n    extendedSearchWidgetSelector.insert( 1, ExtendedSelectOneSearch.canHandleExtension, ExtendedSelectOneSearch )';
	$m.__track_lines__[135] = 'bones.selectone.py, line 135:\n    extractorDelegateSelector.insert(3, CheckForSelectOneBone, SelectOneBoneExtractor)';


	$pyjs['track']['module']='bones.selectone';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$m['SelectOneBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectone';
		$pyjs['track']['lineno']=11;
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

			$pyjs['track']={'module':'bones.selectone', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectOneBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=13;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=14;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=15;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $and1,$and3,$and4,$and5,$and2;
			$pyjs['track']={'module':'bones.selectone', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=19;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=data)?($p['bool']($and2=field)?($p['bool']($and3=$p['getattr'](self, 'skelStructure')['__contains__'](field))?($p['bool']($and4=data['__getitem__'](field))?$p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['__contains__'](data['__getitem__'](field)):$and4):$and3):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
					$pyjs['track']['lineno']=20;
					$pyjs['track']['lineno']=20;
					var $pyjs__ret = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['__getitem__'](data['__getitem__'](field));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=21;
			var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=10;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectOneBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=24;
	$m['SelectOneViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectone';
		$pyjs['track']['lineno']=25;
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

			$pyjs['track']={'module':'bones.selectone', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectOneViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=27;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=28;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=29;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $and8,aspan,$and6,$and7,options;
			$pyjs['track']={'module':'bones.selectone', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs['track']['lineno']=33;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and6=data)?($p['bool']($and7=field)?$p['getattr'](self, 'skelStructure')['__contains__'](field):$and7):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs['track']['lineno']=34;
					options = function(){
						var $iter1_nextval,$iter1_type,k,$pyjs__trackstack_size_1,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.selectone';

	return $collcomp1;}();
					$pyjs['track']['lineno']=36;
					aspan = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs['track']['lineno']=37;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return aspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return options['get'](data['__getitem__'](field), data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
					$pyjs['track']['lineno']=38;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return aspan['__setitem__']('Title', data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
					$pyjs['track']['lineno']=39;
					$pyjs['track']['lineno']=39;
					var $pyjs__ret = aspan;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=41;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=24;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectOneViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=43;
	$m['SelectOneEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectone';
		$pyjs['track']['lineno']=45;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, values) {
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
			} else {
				var self = arguments[0];
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				values = arguments[4];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof values != 'undefined') {
					if (values !== null && typeof values['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = values;
						values = arguments[5];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[5];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[5];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			var opt,$iter3_type,value,$iter3_idx,$iter3_iter,key,$assign1,$pyjs__trackstack_size_1,$iter3_nextval,$iter3_array;
			$pyjs['track']={'module':'bones.selectone', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=46;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectOneEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=47;
			$assign1 = boneName;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('name', $assign1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			self['boneName'] = $assign1;
			$pyjs['track']['lineno']=48;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=51;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](values, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=52;
				self['values'] = function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,k,$pyjs__trackstack_size_1,$collcomp2,$iter2_idx,v,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return values['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					k = $tupleassign2[0];
					v = $tupleassign2[1];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([k, v]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectone';

	return $collcomp2;}();
			}
			else {
				$pyjs['track']['lineno']=54;
				self['values'] = values;
			}
			$pyjs['track']['lineno']=57;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				key = $tupleassign3[0];
				value = $tupleassign3[1];
				$pyjs['track']['lineno']=58;
				opt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['track']['lineno']=59;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return opt['__setitem__']('value', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['track']['lineno']=60;
				$p['getattr'](opt, 'element')['innerHTML'] = value;
				$pyjs['track']['lineno']=62;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=64;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=65;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['values']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=68;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {

			$pyjs['track']={'module':'bones.selectone', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=69;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SelectOneEditBone'](moduleName, boneName, (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('readonly', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('values', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=73;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $pyjs__trackstack_size_1,$iter4_idx,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,aoption;
			$pyjs['track']={'module':'bones.selectone', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=74;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs['track']['lineno']=75;
				self['val'] = ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : (''));
				$pyjs['track']['lineno']=76;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					aoption = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=77;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](aoption['__getitem__']('value'), $p['getattr'](self, 'val')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
						$pyjs['track']['lineno']=78;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return aoption['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectone';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=80;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_idx,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type,aoption;
			$pyjs['track']={'module':'bones.selectone', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=80;
			$pyjs['track']['lineno']=81;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				aoption = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=82;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](aoption['__getitem__']('selected'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs['track']['lineno']=83;
					$pyjs['track']['lineno']=83;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([[$p['getattr'](self, 'boneName'), aoption['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=84;
			$pyjs['track']['lineno']=84;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.selectone', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=87;
			$pyjs['track']['lineno']=87;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=43;
		var $bases = new Array($p['getattr']($m['html5'], 'Select'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectOneEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=89;
	$m['ExtendedSelectOneSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectone';
		$pyjs['track']['lineno']=90;
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
			var v,$iter6_idx,$iter6_type,o,$iter6_array,k,$iter6_iter,$iter6_nextval,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.selectone', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExtendedSelectOneSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=92;
			self['view'] = view;
			$pyjs['track']['lineno']=93;
			self['extension'] = extension;
			$pyjs['track']['lineno']=94;
			self['module'] = modul;
			$pyjs['track']['lineno']=95;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['track']['lineno']=96;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=97;
			self['selectionCb'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=98;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'selectionCb'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=99;
			o = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=101;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Ignore');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=102;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=103;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('values')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				k = $tupleassign4[0];
				v = $tupleassign4[1];
				$pyjs['track']['lineno']=104;
				o = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['track']['lineno']=105;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['__setitem__']('value', k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$pyjs['track']['lineno']=106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=107;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.selectone', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=115;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var val;
			$pyjs['track']={'module':'bones.selectone', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=115;
			$pyjs['track']['lineno']=116;
			val = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionCb')['__getitem__']('options')['item']($p['getattr'](self, 'selectionCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(), 'value');
			$pyjs['track']['lineno']=117;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](val));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
				$pyjs['track']['lineno']=118;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()['__contains__']($p['getattr'](self, 'extension')['__getitem__']('target')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs['track']['lineno']=119;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return filter['__delitem__']($p['getattr'](self, 'extension')['__getitem__']('target'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=121;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			}
			$pyjs['track']['lineno']=122;
			$pyjs['track']['lineno']=122;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=125;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
			var $and9,$or1,$or2,$and10,$and11;
			$pyjs['track']={'module':'bones.selectone', 'lineno':125};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectone';
			$pyjs['track']['lineno']=125;
			$pyjs['track']['lineno']=126;
			$pyjs['track']['lineno']=126;
			var $pyjs__ret = ($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})())?($p['bool']($and10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'selectone'))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('selectone.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()):$and10):$and9);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['modul']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=89;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExtendedSelectOneSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=128;
	$m['CheckForSelectOneBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.selectone','lineno':128};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.selectone';
		$pyjs['track']['lineno']=128;
		$pyjs['track']['lineno']=129;
		$pyjs['track']['lineno']=129;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'selectone');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForSelectOneBone']['__name__'] = 'CheckForSelectOneBone';

	$m['CheckForSelectOneBone']['__bind_type__'] = 0;
	$m['CheckForSelectOneBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=132;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForSelectOneBone'], $m['SelectOneEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
	$pyjs['track']['lineno']=133;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForSelectOneBone'], $m['SelectOneViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
	$pyjs['track']['lineno']=134;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['ExtendedSelectOneSearch'], 'canHandleExtension'), $m['ExtendedSelectOneSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
	$pyjs['track']['lineno']=135;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForSelectOneBone'], $m['SelectOneBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
	return this;
}; /* end bones.selectone */


/* end module: bones.selectone */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
