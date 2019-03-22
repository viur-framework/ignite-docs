/* start module: bones.email */
$pyjs['loaded_modules']['bones.email'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.email']['__was_initialized__']) return $pyjs['loaded_modules']['bones.email'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.email'];
	$m['__repr__'] = function() { return '<module: bones.email>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.email';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['email'] = $pyjs['loaded_modules']['bones.email'];
	$m.__track_lines__[1] = 'bones.email.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.email.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'bones.email.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector';
	$m.__track_lines__[4] = 'bones.email.py, line 4:\n    import bones.string as strBone';
	$m.__track_lines__[5] = 'bones.email.py, line 5:\n    from widgets.edit import InvalidBoneValueException';
	$m.__track_lines__[6] = 'bones.email.py, line 6:\n    import re';
	$m.__track_lines__[8] = 'bones.email.py, line 8:\n    class EmailViewBoneDelegate( strBone.StringViewBoneDelegate ):';
	$m.__track_lines__[9] = 'bones.email.py, line 9:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[10] = 'bones.email.py, line 10:\n    super( EmailViewBoneDelegate, self ).__init__( moduleName, boneName, skelStructure, *args, **kwargs)';
	$m.__track_lines__[12] = 'bones.email.py, line 12:\n    def getViewElement(self,labelstr,datafield):';
	$m.__track_lines__[15] = 'bones.email.py, line 15:\n    if ("params" in self.skelStructure[self.boneName].keys()';
	$m.__track_lines__[18] = 'bones.email.py, line 18:\n    return super(EmailViewBoneDelegate, self).getViewElement(labelstr, datafield)';
	$m.__track_lines__[20] = 'bones.email.py, line 20:\n    aa = html5.A()';
	$m.__track_lines__[21] = 'bones.email.py, line 21:\n    aa["href"]="mailto:"+labelstr';
	$m.__track_lines__[22] = 'bones.email.py, line 22:\n    aa["target"]="_Blank"';
	$m.__track_lines__[23] = 'bones.email.py, line 23:\n    aa.appendChild(html5.TextNode(labelstr))';
	$m.__track_lines__[24] = 'bones.email.py, line 24:\n    if not datafield:';
	$m.__track_lines__[25] = 'bones.email.py, line 25:\n    aa["title"]="open mailclient"';
	$m.__track_lines__[27] = 'bones.email.py, line 27:\n    aa["title"]="open mailclient"+str(datafield)';
	$m.__track_lines__[28] = 'bones.email.py, line 28:\n    return(aa)';
	$m.__track_lines__[30] = 'bones.email.py, line 30:\n    class EmailEditBone( strBone.StringEditBone ):';
	$m.__track_lines__[31] = 'bones.email.py, line 31:\n    def __init__(self, moduleName, boneName,readOnly,*args, **kwargs ):';
	$m.__track_lines__[32] = 'bones.email.py, line 32:\n    super( EmailEditBone,  self ).__init__( moduleName, boneName,readOnly, *args, **kwargs )';
	$m.__track_lines__[35] = 'bones.email.py, line 34:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[36] = 'bones.email.py, line 36:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[37] = 'bones.email.py, line 37:\n    return( EmailEditBone( moduleName, boneName, readOnly ) )';
	$m.__track_lines__[39] = 'bones.email.py, line 39:\n    def unserialize(self, data):';
	$m.__track_lines__[40] = 'bones.email.py, line 40:\n    if self.boneName in data.keys():';
	$m.__track_lines__[41] = 'bones.email.py, line 41:\n    self.input["value"] = data[ self.boneName ] if data[ self.boneName ] else ""';
	$m.__track_lines__[43] = 'bones.email.py, line 43:\n    def serializeForPost(self):';
	$m.__track_lines__[44] = 'bones.email.py, line 44:\n    if not self["value"] or re.match("^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9._-]+.[a-zA-Z]{2,6}$",self.input["value"]):';
	$m.__track_lines__[45] = 'bones.email.py, line 45:\n    return( { self.boneName: self.input["value"] } )';
	$m.__track_lines__[46] = 'bones.email.py, line 46:\n    raise InvalidBoneValueException()';
	$m.__track_lines__[49] = 'bones.email.py, line 49:\n    def setSpecialType(self):';
	$m.__track_lines__[50] = 'bones.email.py, line 50:\n    self.input["type"]="email"';
	$m.__track_lines__[52] = 'bones.email.py, line 52:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[53] = 'bones.email.py, line 53:\n    pass';
	$m.__track_lines__[56] = 'bones.email.py, line 56:\n    def CheckForEmailBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[57] = 'bones.email.py, line 57:\n    return( skelStucture[boneName]["type"]=="str.email" )';
	$m.__track_lines__[60] = 'bones.email.py, line 60:\n    editBoneSelector.insert( 4, CheckForEmailBone, EmailEditBone)';
	$m.__track_lines__[61] = 'bones.email.py, line 61:\n    viewDelegateSelector.insert( 4, CheckForEmailBone, EmailViewBoneDelegate)';


	$pyjs['track']['module']='bones.email';
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
	$m['strBone'] = $p['___import___']('bones.string', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['InvalidBoneValueException'] = $p['___import___']('widgets.edit.InvalidBoneValueException', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['re'] = $p['___import___']('re', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['EmailViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.email';
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

			$pyjs['track']={'module':'bones.email', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EmailViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}, moduleName, boneName, skelStructure]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('getViewElement', function(labelstr, datafield) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				labelstr = arguments[1];
				datafield = arguments[2];
			}
			var aa,$and1,$and3,$add2,$add3,$add1,$add4,$and2;
			$pyjs['track']={'module':'bones.email', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=15;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'))['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__']('params'))?($p['bool']($and2=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']($p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'))['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'))['__getitem__']('params')['get']('renderAsString');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})():$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=18;
				$pyjs['track']['lineno']=18;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['$$super']($m['EmailViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['getViewElement'](labelstr, datafield);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=20;
			aa = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['__setitem__']('href', $p['__op_add']($add1='mailto:',$add2=labelstr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['__setitem__']('target', '_Blank');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](labelstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=24;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](datafield));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aa['__setitem__']('title', 'open mailclient');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=27;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aa['__setitem__']('title', $p['__op_add']($add3='open mailclient',$add4=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](datafield);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=28;
			var $pyjs__ret = aa;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['labelstr'],['datafield']]);
		$cls_definition['getViewElement'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['getattr']($m['strBone'], 'StringViewBoneDelegate'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EmailViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['EmailEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.email';
		$pyjs['track']['lineno']=31;
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

			$pyjs['track']={'module':'bones.email', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EmailEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), '__init__', args, kwargs, [{}, moduleName, boneName, readOnly]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=35;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and4,$and5,readOnly;
			$pyjs['track']={'module':'bones.email', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=36;
			readOnly = ($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and4);
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=37;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EmailEditBone'](moduleName, boneName, readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			$pyjs['track']={'module':'bones.email', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
				$pyjs['track']['lineno']=41;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('value', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ('')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2;
			$pyjs['track']={'module':'bones.email', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=!$p['bool'](self['__getitem__']('value')))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['re']['match']('^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9._-]+.[a-zA-Z]{2,6}$', $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=45;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=46;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['InvalidBoneValueException']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=49;
		$method = $pyjs__bind_method2('setSpecialType', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.email', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'input')['__setitem__']('type', 'email');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setSpecialType'] = $method;
		$pyjs['track']['lineno']=52;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.email', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.email';
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=53;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($p['getattr']($m['strBone'], 'StringEditBone'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EmailEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=56;
	$m['CheckForEmailBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.email','lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.email';
		$pyjs['track']['lineno']=56;
		$pyjs['track']['lineno']=57;
		$pyjs['track']['lineno']=57;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'str.email');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForEmailBone']['__name__'] = 'CheckForEmailBone';

	$m['CheckForEmailBone']['__bind_type__'] = 0;
	$m['CheckForEmailBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=60;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](4, $m['CheckForEmailBone'], $m['EmailEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
	$pyjs['track']['lineno']=61;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](4, $m['CheckForEmailBone'], $m['EmailViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
	return this;
}; /* end bones.email */


/* end module: bones.email */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'bones.string', 'bones', 'widgets.edit.InvalidBoneValueException', 'widgets', 'widgets.edit', 're']
*/
