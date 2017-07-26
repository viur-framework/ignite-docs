/* start module: sidebarwidgets.internalpreview */
$pyjs['loaded_modules']['sidebarwidgets.internalpreview'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets.internalpreview']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	if(typeof $pyjs['loaded_modules']['sidebarwidgets'] == 'undefined' || !$pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) $p['___import___']('sidebarwidgets', null);
	var $m = $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets.internalpreview>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets.internalpreview';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['sidebarwidgets']['internalpreview'] = $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	$m.__track_lines__[1] = 'sidebarwidgets.internalpreview.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'sidebarwidgets.internalpreview.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'sidebarwidgets.internalpreview.py, line 3:\n    from priorityqueue import viewDelegateSelector';
	$m.__track_lines__[4] = 'sidebarwidgets.internalpreview.py, line 4:\n    from config import conf';
	$m.__track_lines__[6] = 'sidebarwidgets.internalpreview.py, line 6:\n    class InternalPreview( html5.Ul ):';
	$m.__track_lines__[7] = 'sidebarwidgets.internalpreview.py, line 7:\n    def __init__(self, modul, structure, item, *args, **kwargs):';
	$m.__track_lines__[8] = 'sidebarwidgets.internalpreview.py, line 8:\n    super( InternalPreview, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[10] = 'sidebarwidgets.internalpreview.py, line 10:\n    self["class"].append("internalpreview")';
	$m.__track_lines__[12] = 'sidebarwidgets.internalpreview.py, line 12:\n    tmpDict = {key: bone for key, bone in structure}';
	$m.__track_lines__[14] = 'sidebarwidgets.internalpreview.py, line 14:\n    for key, bone in structure:';
	$m.__track_lines__[15] = 'sidebarwidgets.internalpreview.py, line 15:\n    if "params" in bone.keys() and bone[ "params" ] \\';
	$m.__track_lines__[18] = 'sidebarwidgets.internalpreview.py, line 18:\n    continue';
	$m.__track_lines__[20] = 'sidebarwidgets.internalpreview.py, line 20:\n    self.ali= html5.Li()';
	$m.__track_lines__[21] = 'sidebarwidgets.internalpreview.py, line 21:\n    self.ali["class"]=[ modul,"type_"+bone["type"],"bone_"+key]';
	$m.__track_lines__[22] = 'sidebarwidgets.internalpreview.py, line 22:\n    self.adl= html5.Dl()';
	$m.__track_lines__[24] = 'sidebarwidgets.internalpreview.py, line 24:\n    self.adt=html5.Dt()';
	$m.__track_lines__[25] = 'sidebarwidgets.internalpreview.py, line 25:\n    self.adt.appendChild(html5.TextNode(key if conf["showBoneNames"] else bone.get("descr", key)))';
	$m.__track_lines__[27] = 'sidebarwidgets.internalpreview.py, line 27:\n    self.aadd=html5.Dd()';
	$m.__track_lines__[28] = 'sidebarwidgets.internalpreview.py, line 28:\n    delegateFactory = viewDelegateSelector.select( modul, key, tmpDict )( modul, key, tmpDict )';
	$m.__track_lines__[29] = 'sidebarwidgets.internalpreview.py, line 29:\n    self.aadd.appendChild(delegateFactory.render( item, key ))';
	$m.__track_lines__[31] = 'sidebarwidgets.internalpreview.py, line 31:\n    self.adl.appendChild(self.adt)';
	$m.__track_lines__[32] = 'sidebarwidgets.internalpreview.py, line 32:\n    self.adl.appendChild(self.aadd)';
	$m.__track_lines__[33] = 'sidebarwidgets.internalpreview.py, line 33:\n    self.ali.appendChild(self.adl)';
	$m.__track_lines__[35] = 'sidebarwidgets.internalpreview.py, line 35:\n    self.appendChild(self.ali)';


	$pyjs['track']['module']='sidebarwidgets.internalpreview';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'sidebarwidgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['InternalPreview'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'sidebarwidgets.internalpreview';
		$pyjs['track']['lineno']=7;
		$method = $pyjs__bind_method2('__init__', function(modul, structure, item) {
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
				modul = arguments[1];
				structure = arguments[2];
				item = arguments[3];
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
				if (typeof item != 'undefined') {
					if (item !== null && typeof item['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = item;
						item = arguments[4];
					}
				} else 				if (typeof structure != 'undefined') {
					if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = structure;
						structure = arguments[4];
					}
				} else 				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			var delegateFactory,$iter2_iter,$iter2_type,tmpDict,$and1,$and2,$and3,$and4,$iter2_idx,key,$iter2_nextval,$add2,$add3,$add1,$iter2_array,$add4,$pyjs__trackstack_size_1,bone;
			$pyjs['track']={'module':'sidebarwidgets.internalpreview', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.internalpreview';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['InternalPreview'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('internalpreview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=12;
			tmpDict = function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,key,$pyjs__trackstack_size_1,bone,$iter1_array;
	$collcomp1 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return structure;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				key = $tupleassign1[0];
				bone = $tupleassign1[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['__setitem__'](key, bone);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.internalpreview';

	return $collcomp1;}();
			$pyjs['track']['lineno']=14;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return structure;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				key = $tupleassign2[0];
				bone = $tupleassign2[1];
				$pyjs['track']['lineno']=15;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['__contains__']('params'))?($p['bool']($and2=bone['__getitem__']('params'))?($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['__contains__']('previewBone'))?$p['op_eq'](bone['__getitem__']('params')['__getitem__']('previewBone'), false):$and3):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=18;
					continue;
				}
				$pyjs['track']['lineno']=20;
				self['ali'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'ali')['__setitem__']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([modul, $p['__op_add']($add1='type_',$add2=bone['__getitem__']('type')), $p['__op_add']($add3='bone_',$add4=key)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=22;
				self['adl'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Dl']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=24;
				self['adt'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Dt']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['adt']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](($p['bool']($m['conf']['__getitem__']('showBoneNames'))? (key) : ((function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['get']('descr', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})())));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=27;
				self['aadd'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Dd']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['track']['lineno']=28;
				delegateFactory = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['viewDelegateSelector']['select'](modul, key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()(modul, key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs['track']['lineno']=29;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['aadd']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return delegateFactory['render'](item, key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs['track']['lineno']=31;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['adl']['appendChild']($p['getattr'](self, 'adt'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=32;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['adl']['appendChild']($p['getattr'](self, 'aadd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=33;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['ali']['appendChild']($p['getattr'](self, 'adl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'ali'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.internalpreview';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['structure'],['item']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($p['getattr']($m['html5'], 'Ul'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('InternalPreview', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end sidebarwidgets.internalpreview */


/* end module: sidebarwidgets.internalpreview */


/*
PYJS_DEPS: ['html5', 'priorityqueue.viewDelegateSelector', 'priorityqueue', 'config.conf', 'config']
*/
