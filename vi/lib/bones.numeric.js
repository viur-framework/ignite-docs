/* start module: bones.numeric */
$pyjs['loaded_modules']['bones.numeric'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.numeric']['__was_initialized__']) return $pyjs['loaded_modules']['bones.numeric'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.numeric'];
	$m['__repr__'] = function() { return '<module: bones.numeric>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.numeric';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['numeric'] = $pyjs['loaded_modules']['bones.numeric'];
	$m.__track_lines__[1] = 'bones.numeric.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.numeric.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'bones.numeric.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.numeric.py, line 4:\n    from event import EventDispatcher';
	$m.__track_lines__[5] = 'bones.numeric.py, line 5:\n    from html5.keycodes import *';
	$m.__track_lines__[6] = 'bones.numeric.py, line 6:\n    from config import conf';
	$m.__track_lines__[7] = 'bones.numeric.py, line 7:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[9] = 'bones.numeric.py, line 9:\n    class NumericBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[10] = 'bones.numeric.py, line 10:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[11] = 'bones.numeric.py, line 11:\n    super(NumericBoneExtractor, self ).__init__()';
	$m.__track_lines__[12] = 'bones.numeric.py, line 12:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[13] = 'bones.numeric.py, line 13:\n    self.boneName = boneName';
	$m.__track_lines__[14] = 'bones.numeric.py, line 14:\n    self.moduleName=moduleName';
	$m.__track_lines__[16] = 'bones.numeric.py, line 16:\n    def render( self, data, field ):';
	$m.__track_lines__[18] = 'bones.numeric.py, line 18:\n    if field in data.keys():';
	$m.__track_lines__[19] = 'bones.numeric.py, line 19:\n    value = data[field]';
	$m.__track_lines__[20] = 'bones.numeric.py, line 20:\n    if isinstance(value, int):';
	$m.__track_lines__[21] = 'bones.numeric.py, line 21:\n    return str(value)';
	$m.__track_lines__[23] = 'bones.numeric.py, line 23:\n    return str(round(data[field], self.skelStructure[field].get("precision", 2))).replace(".", ",")';
	$m.__track_lines__[24] = 'bones.numeric.py, line 24:\n    return "-23,42"';
	$m.__track_lines__[27] = 'bones.numeric.py, line 27:\n    class NumericViewBoneDelegate( object ):';
	$m.__track_lines__[28] = 'bones.numeric.py, line 28:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[29] = 'bones.numeric.py, line 29:\n    super( NumericViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[30] = 'bones.numeric.py, line 30:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[31] = 'bones.numeric.py, line 31:\n    self.boneName = boneName';
	$m.__track_lines__[32] = 'bones.numeric.py, line 32:\n    self.moduleName=moduleName';
	$m.__track_lines__[34] = 'bones.numeric.py, line 34:\n    def render( self, data, field ):';
	$m.__track_lines__[35] = 'bones.numeric.py, line 35:\n    s =  conf[ "empty_value" ]';
	$m.__track_lines__[36] = 'bones.numeric.py, line 36:\n    if field in data.keys():';
	$m.__track_lines__[37] = 'bones.numeric.py, line 37:\n    try:';
	$m.__track_lines__[38] = 'bones.numeric.py, line 38:\n    prec = self.skelStructure[field].get( "precision" )';
	$m.__track_lines__[39] = 'bones.numeric.py, line 39:\n    if prec and data[field] is not None:';
	$m.__track_lines__[40] = 'bones.numeric.py, line 40:\n    s = ( "%." + str( prec ) + "f" ) % data[field]';
	$m.__track_lines__[42] = 'bones.numeric.py, line 42:\n    s = str( data[field] )';
	$m.__track_lines__[44] = 'bones.numeric.py, line 44:\n    return str(data[field])';
	$m.__track_lines__[46] = 'bones.numeric.py, line 46:\n    return html5.Label( s )';
	$m.__track_lines__[48] = 'bones.numeric.py, line 48:\n    class NumericEditBone( html5.Input ):';
	$m.__track_lines__[49] = 'bones.numeric.py, line 49:\n    def __init__(self, moduleName, boneName,readOnly,_min=False,_max=False,precision=False, *args, **kwargs ):';
	$m.__track_lines__[50] = 'bones.numeric.py, line 50:\n    super( NumericEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[51] = 'bones.numeric.py, line 51:\n    self.boneName = boneName';
	$m.__track_lines__[52] = 'bones.numeric.py, line 52:\n    self.readOnly = readOnly';
	$m.__track_lines__[53] = 'bones.numeric.py, line 53:\n    self["type"]="number"';
	$m.__track_lines__[54] = 'bones.numeric.py, line 54:\n    if _min:';
	$m.__track_lines__[55] = 'bones.numeric.py, line 55:\n    self["min"]=_min';
	$m.__track_lines__[56] = 'bones.numeric.py, line 56:\n    if _max:';
	$m.__track_lines__[57] = 'bones.numeric.py, line 57:\n    self["max"]=_max';
	$m.__track_lines__[58] = 'bones.numeric.py, line 58:\n    if precision:';
	$m.__track_lines__[59] = 'bones.numeric.py, line 59:\n    self["step"]=pow(10,-precision)';
	$m.__track_lines__[61] = 'bones.numeric.py, line 61:\n    self["step"]=1';
	$m.__track_lines__[62] = 'bones.numeric.py, line 62:\n    if self.readOnly:';
	$m.__track_lines__[63] = 'bones.numeric.py, line 63:\n    self["readonly"] = True';
	$m.__track_lines__[66] = 'bones.numeric.py, line 65:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[67] = 'bones.numeric.py, line 67:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[68] = 'bones.numeric.py, line 68:\n    _min=skelStructure[ boneName ]["min"] if ("min" in skelStructure[ boneName ].keys()) else False';
	$m.__track_lines__[69] = 'bones.numeric.py, line 69:\n    _max=skelStructure[ boneName ]["max"] if ("max" in skelStructure[ boneName ].keys()) else False';
	$m.__track_lines__[70] = 'bones.numeric.py, line 70:\n    precision=skelStructure[ boneName ]["precision"] if ("precision" in skelStructure[ boneName ].keys()) else False';
	$m.__track_lines__[71] = 'bones.numeric.py, line 71:\n    return( NumericEditBone( moduleName, boneName, readOnly,_min,_max,precision ) )';
	$m.__track_lines__[74] = 'bones.numeric.py, line 74:\n    def unserialize(self, data):';
	$m.__track_lines__[75] = 'bones.numeric.py, line 75:\n    self["value"] = data.get(self.boneName, "")';
	$m.__track_lines__[77] = 'bones.numeric.py, line 77:\n    def serializeForPost(self):';
	$m.__track_lines__[78] = 'bones.numeric.py, line 78:\n    return {self.boneName: self["value"]}';
	$m.__track_lines__[80] = 'bones.numeric.py, line 80:\n    def serializeForDocument(self):';
	$m.__track_lines__[81] = 'bones.numeric.py, line 81:\n    return self.serialize()';
	$m.__track_lines__[83] = 'bones.numeric.py, line 83:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[84] = 'bones.numeric.py, line 84:\n    pass';
	$m.__track_lines__[87] = 'bones.numeric.py, line 87:\n    class ExtendedNumericSearch( html5.Div ):';
	$m.__track_lines__[88] = 'bones.numeric.py, line 88:\n    def __init__(self, extension, view, modul, *args, **kwargs ):';
	$m.__track_lines__[89] = 'bones.numeric.py, line 89:\n    super( ExtendedNumericSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[90] = 'bones.numeric.py, line 90:\n    self.view = view';
	$m.__track_lines__[91] = 'bones.numeric.py, line 91:\n    self.extension = extension';
	$m.__track_lines__[92] = 'bones.numeric.py, line 92:\n    self.module = modul';
	$m.__track_lines__[93] = 'bones.numeric.py, line 93:\n    self.opMode = extension["mode"]';
	$m.__track_lines__[94] = 'bones.numeric.py, line 94:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[95] = 'bones.numeric.py, line 95:\n    assert self.opMode in ["equals","from", "to","range"]';
	$m.__track_lines__[96] = 'bones.numeric.py, line 96:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[97] = 'bones.numeric.py, line 97:\n    self.sinkEvent("onKeyDown")';
	$m.__track_lines__[98] = 'bones.numeric.py, line 98:\n    if self.opMode in ["equals","from", "to"]:';
	$m.__track_lines__[99] = 'bones.numeric.py, line 99:\n    self.input = html5.Input()';
	$m.__track_lines__[100] = 'bones.numeric.py, line 100:\n    self.input["type"] = "number"';
	$m.__track_lines__[101] = 'bones.numeric.py, line 101:\n    self.appendChild( self.input )';
	$m.__track_lines__[103] = 'bones.numeric.py, line 103:\n    self.input1 = html5.Input()';
	$m.__track_lines__[104] = 'bones.numeric.py, line 104:\n    self.input1["type"] = "number"';
	$m.__track_lines__[105] = 'bones.numeric.py, line 105:\n    self.appendChild( self.input1 )';
	$m.__track_lines__[106] = 'bones.numeric.py, line 106:\n    self.appendChild( html5.TextNode("to") )';
	$m.__track_lines__[107] = 'bones.numeric.py, line 107:\n    self.input2 = html5.Input()';
	$m.__track_lines__[108] = 'bones.numeric.py, line 108:\n    self.input2["type"] = "number"';
	$m.__track_lines__[109] = 'bones.numeric.py, line 109:\n    self.appendChild( self.input2 )';
	$m.__track_lines__[111] = 'bones.numeric.py, line 111:\n    def onKeyDown(self, event):';
	$m.__track_lines__[112] = 'bones.numeric.py, line 112:\n    if isReturn(event.keyCode):';
	$m.__track_lines__[113] = 'bones.numeric.py, line 113:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[115] = 'bones.numeric.py, line 115:\n    def updateFilter(self, filter):';
	$m.__track_lines__[116] = 'bones.numeric.py, line 116:\n    if self.opMode=="equals":';
	$m.__track_lines__[117] = 'bones.numeric.py, line 117:\n    filter[ self.extension["target"] ] = self.input["value"]';
	$m.__track_lines__[119] = 'bones.numeric.py, line 119:\n    filter[ self.extension["target"]+"$gt" ] = self.input["value"]';
	$m.__track_lines__[121] = 'bones.numeric.py, line 121:\n    filter[ self.extension["target"]+"$lt" ] = self.input["value"]';
	$m.__track_lines__[123] = 'bones.numeric.py, line 123:\n    filter[ self.extension["target"]+"$lk" ] = self.input["value"]';
	$m.__track_lines__[125] = 'bones.numeric.py, line 125:\n    filter[ self.extension["target"]+"$gt" ] = self.input1["value"]';
	$m.__track_lines__[126] = 'bones.numeric.py, line 126:\n    filter[ self.extension["target"]+"$lt" ] = self.input2["value"]';
	$m.__track_lines__[127] = 'bones.numeric.py, line 127:\n    return( filter )';
	$m.__track_lines__[130] = 'bones.numeric.py, line 129:\n    @staticmethod ... def canHandleExtension( extension, view, modul ):';
	$m.__track_lines__[131] = 'bones.numeric.py, line 131:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="numeric" or extension["type"].startswith("numeric.") ) )';
	$m.__track_lines__[136] = 'bones.numeric.py, line 136:\n    def CheckForNumericBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[137] = 'bones.numeric.py, line 137:\n    return( skelStucture[boneName]["type"]=="numeric" )';
	$m.__track_lines__[140] = 'bones.numeric.py, line 140:\n    editBoneSelector.insert( 3, CheckForNumericBone, NumericEditBone)';
	$m.__track_lines__[141] = 'bones.numeric.py, line 141:\n    viewDelegateSelector.insert( 3, CheckForNumericBone, NumericViewBoneDelegate)';
	$m.__track_lines__[142] = 'bones.numeric.py, line 142:\n    extendedSearchWidgetSelector.insert( 1, ExtendedNumericSearch.canHandleExtension, ExtendedNumericSearch )';
	$m.__track_lines__[143] = 'bones.numeric.py, line 143:\n    extractorDelegateSelector.insert( 3, CheckForNumericBone, NumericBoneExtractor)';


	$pyjs['track']['module']='bones.numeric';
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
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$p['__import_all__']('html5.keycodes', 'bones', $m, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$m['NumericBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.numeric';
		$pyjs['track']['lineno']=10;
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

			$pyjs['track']={'module':'bones.numeric', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NumericBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=12;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=13;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=14;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var value;
			$pyjs['track']={'module':'bones.numeric', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=19;
				value = data['__getitem__'](field);
				$pyjs['track']['lineno']=20;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](value, $p['float_int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs['track']['lineno']=21;
					$pyjs['track']['lineno']=21;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](value, $p['float']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs['track']['lineno']=23;
					$pyjs['track']['lineno']=23;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['round'](data['__getitem__'](field), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'skelStructure')['__getitem__'](field)['get']('precision', 2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['$$replace']('.', ',');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=24;
			var $pyjs__ret = '-23,42';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NumericBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=27;
	$m['NumericViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.numeric';
		$pyjs['track']['lineno']=28;
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

			$pyjs['track']={'module':'bones.numeric', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NumericViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=30;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=31;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=32;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $add3,$and1,$pyjs_try_err,prec,$add2,s,$add1,$mod1,$add4,$mod2,$and2;
			$pyjs['track']={'module':'bones.numeric', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			s = $m['conf']['__getitem__']('empty_value');
			$pyjs['track']['lineno']=36;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=37;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=38;
						prec = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'skelStructure')['__getitem__'](field)['get']('precision');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
						$pyjs['track']['lineno']=39;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and1=prec)?(data['__getitem__'](field) !== null):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
							$pyjs['track']['lineno']=40;
							s = (typeof ($mod1=$p['__op_add']($add3=$p['__op_add']($add1='%.',$add2=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['str'](prec);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()),$add4='f'))==typeof ($mod2=data['__getitem__'](field)) && typeof $mod1=='number'?
								(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
								$p['op_mod']($mod1,$mod2));
						}
						else {
							$pyjs['track']['lineno']=42;
							s = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
						}
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
					$pyjs['track']['module']='bones.numeric';
					if (true) {
						$pyjs['track']['lineno']=44;
						$pyjs['track']['lineno']=44;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=46;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=27;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NumericViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=48;
	$m['NumericEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.numeric';
		$pyjs['track']['lineno']=49;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, _min, _max, precision) {
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
			} else {
				var self = arguments[0];
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				_min = arguments[4];
				_max = arguments[5];
				precision = arguments[6];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof precision != 'undefined') {
					if (precision !== null && typeof precision['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = precision;
						precision = arguments[7];
					}
				} else 				if (typeof _max != 'undefined') {
					if (_max !== null && typeof _max['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = _max;
						_max = arguments[7];
					}
				} else 				if (typeof _min != 'undefined') {
					if (_min !== null && typeof _min['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = _min;
						_min = arguments[7];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[7];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[7];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof _min == 'undefined') _min=arguments['callee']['__args__'][6][1];
			if (typeof _max == 'undefined') _max=arguments['callee']['__args__'][7][1];
			if (typeof precision == 'undefined') precision=arguments['callee']['__args__'][8][1];

			$pyjs['track']={'module':'bones.numeric', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NumericEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=51;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=52;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=53;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=54;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](_min);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs['track']['lineno']=55;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('min', _min);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			$pyjs['track']['lineno']=56;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](_max);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=57;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('max', _max);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			$pyjs['track']['lineno']=58;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](precision);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
				$pyjs['track']['lineno']=59;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('step', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['pow'](10, (typeof ($usub1=precision)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('step', 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			}
			$pyjs['track']['lineno']=62;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=63;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['_min', false],['_max', false],['precision', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and3,$and4,precision,_min,_max,readOnly;
			$pyjs['track']={'module':'bones.numeric', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			readOnly = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and3);
			$pyjs['track']['lineno']=68;
			_min = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['__contains__']('min'))? (skelStructure['__getitem__'](boneName)['__getitem__']('min')) : (false));
			$pyjs['track']['lineno']=69;
			_max = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()['__contains__']('max'))? (skelStructure['__getitem__'](boneName)['__getitem__']('max')) : (false));
			$pyjs['track']['lineno']=70;
			precision = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['__contains__']('precision'))? (skelStructure['__getitem__'](boneName)['__getitem__']('precision')) : (false));
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=71;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NumericEditBone'](moduleName, boneName, readOnly, _min, _max, precision);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			$pyjs['track']={'module':'bones.numeric', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['get']($p['getattr'](self, 'boneName'), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=77;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.numeric', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			$pyjs['track']['lineno']=78;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), self['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=80;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.numeric', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=80;
			$pyjs['track']['lineno']=81;
			$pyjs['track']['lineno']=81;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=83;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.numeric', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=83;
			$pyjs['track']['lineno']=84;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=48;
		var $bases = new Array($p['getattr']($m['html5'], 'Input'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NumericEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=87;
	$m['ExtendedNumericSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.numeric';
		$pyjs['track']['lineno']=88;
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

			$pyjs['track']={'module':'bones.numeric', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=88;
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExtendedNumericSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=90;
			self['view'] = view;
			$pyjs['track']['lineno']=91;
			self['extension'] = extension;
			$pyjs['track']['lineno']=92;
			self['module'] = modul;
			$pyjs['track']['lineno']=93;
			self['opMode'] = extension['__getitem__']('mode');
			$pyjs['track']['lineno']=94;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=95;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['equals', 'from', 'to', 'range']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()['__contains__']($p['getattr'](self, 'opMode')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=96;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=97;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onKeyDown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=98;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['equals', 'from', 'to']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()['__contains__']($p['getattr'](self, 'opMode')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=99;
				self['input'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs['track']['lineno']=100;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['track']['lineno']=101;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
				$pyjs['track']['lineno']=103;
				self['input1'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs['track']['lineno']=104;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input1')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs['track']['lineno']=105;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs['track']['lineno']=106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']('to');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs['track']['lineno']=107;
				self['input2'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs['track']['lineno']=108;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input2')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs['track']['lineno']=109;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input2'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=111;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.numeric', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=112;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=115;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var $add14,$add13,$add6,$add7,$add12,$add5,$add10,$add8,$add9,$add11;
			$pyjs['track']={'module':'bones.numeric', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=115;
			$pyjs['track']['lineno']=116;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'equals'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=117;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'from'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
				$pyjs['track']['lineno']=119;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add5=$p['getattr'](self, 'extension')['__getitem__']('target'),$add6='$gt'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'to'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
				$pyjs['track']['lineno']=121;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add7=$p['getattr'](self, 'extension')['__getitem__']('target'),$add8='$lt'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'prefix'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add9=$p['getattr'](self, 'extension')['__getitem__']('target'),$add10='$lk'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
				$pyjs['track']['lineno']=125;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add11=$p['getattr'](self, 'extension')['__getitem__']('target'),$add12='$gt'), $p['getattr'](self, 'input1')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=126;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add13=$p['getattr'](self, 'extension')['__getitem__']('target'),$add14='$lt'), $p['getattr'](self, 'input2')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			}
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=127;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=130;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
			var $or1,$or2,$and5,$and6,$and7;
			$pyjs['track']={'module':'bones.numeric', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.numeric';
			$pyjs['track']['lineno']=130;
			$pyjs['track']['lineno']=131;
			$pyjs['track']['lineno']=131;
			var $pyjs__ret = ($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})())?($p['bool']($and6=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'numeric'))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('numeric.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()):$and6):$and5);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['modul']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=87;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExtendedNumericSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=136;
	$m['CheckForNumericBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.numeric','lineno':136};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.numeric';
		$pyjs['track']['lineno']=136;
		$pyjs['track']['lineno']=137;
		$pyjs['track']['lineno']=137;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'numeric');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForNumericBone']['__name__'] = 'CheckForNumericBone';

	$m['CheckForNumericBone']['__bind_type__'] = 0;
	$m['CheckForNumericBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=140;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForNumericBone'], $m['NumericEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
	$pyjs['track']['lineno']=141;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForNumericBone'], $m['NumericViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
	$pyjs['track']['lineno']=142;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['ExtendedNumericSearch'], 'canHandleExtension'), $m['ExtendedNumericSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
	$pyjs['track']['lineno']=143;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForNumericBone'], $m['NumericBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
	return this;
}; /* end bones.numeric */


/* end module: bones.numeric */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'html5.keycodes', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
