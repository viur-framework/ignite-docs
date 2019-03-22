/* start module: bones.hierarchy */
$pyjs['loaded_modules']['bones.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['bones.hierarchy'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.hierarchy'];
	$m['__repr__'] = function() { return '<module: bones.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.hierarchy';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['hierarchy'] = $pyjs['loaded_modules']['bones.hierarchy'];
	$m.__track_lines__[1] = 'bones.hierarchy.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.hierarchy.py, line 2:\n    from config import conf';
	$m.__track_lines__[3] = 'bones.hierarchy.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.hierarchy.py, line 4:\n    from widgets.hierarchy import HierarchyWidget';
	$m.__track_lines__[6] = 'bones.hierarchy.py, line 6:\n    from bones.relational import \\';
	$m.__track_lines__[12] = 'bones.hierarchy.py, line 12:\n    class HierarchyMultiSelectionBone(RelationalMultiSelectionBone):';
	$m.__track_lines__[13] = 'bones.hierarchy.py, line 13:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[17] = 'bones.hierarchy.py, line 17:\n    currentSelector = HierarchyWidget(self.destModule, isSelector=True)';
	$m.__track_lines__[18] = 'bones.hierarchy.py, line 18:\n    currentSelector.selectionActivatedEvent.register(self)';
	$m.__track_lines__[19] = 'bones.hierarchy.py, line 19:\n    conf["mainWindow"].stackWidget(currentSelector)';
	$m.__track_lines__[21] = 'bones.hierarchy.py, line 21:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[25] = 'bones.hierarchy.py, line 25:\n    self.setSelection([{"dest": x.data, "rel": {}} for x in selection])';
	$m.__track_lines__[27] = 'bones.hierarchy.py, line 27:\n    class HierarchySingleSelectionBone( RelationalSingleSelectionBone ):';
	$m.__track_lines__[28] = 'bones.hierarchy.py, line 28:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[32] = 'bones.hierarchy.py, line 32:\n    currentSelector = HierarchyWidget(self.destModule, isSelector=True)';
	$m.__track_lines__[33] = 'bones.hierarchy.py, line 33:\n    currentSelector.selectionActivatedEvent.register(self)';
	$m.__track_lines__[34] = 'bones.hierarchy.py, line 34:\n    conf["mainWindow"].stackWidget(currentSelector)';
	$m.__track_lines__[36] = 'bones.hierarchy.py, line 36:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[40] = 'bones.hierarchy.py, line 40:\n    self.setSelection([{"dest": x.data, "rel": {}} for x in selection][0])';
	$m.__track_lines__[42] = 'bones.hierarchy.py, line 42:\n    def CheckForHierarchyBoneSingleSelection(moduleName, boneName, skelStructure, *args, **kwargs):';
	$m.__track_lines__[43] = 'bones.hierarchy.py, line 43:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[44] = 'bones.hierarchy.py, line 44:\n    return CheckForHierarchyBone(moduleName, boneName, skelStructure) and not isMultiple';
	$m.__track_lines__[46] = 'bones.hierarchy.py, line 46:\n    def CheckForHierarchyBoneMultiSelection(moduleName, boneName, skelStructure, *args, **kwargs):';
	$m.__track_lines__[47] = 'bones.hierarchy.py, line 47:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[48] = 'bones.hierarchy.py, line 48:\n    return CheckForHierarchyBone(moduleName, boneName, skelStructure) and isMultiple';
	$m.__track_lines__[50] = 'bones.hierarchy.py, line 50:\n    def CheckForHierarchyBone(moduleName, boneName, skelStucture, *args, **kwargs):';
	$m.__track_lines__[51] = 'bones.hierarchy.py, line 51:\n    return skelStucture[boneName]["type"].startswith("hierarchy.")';
	$m.__track_lines__[54] = 'bones.hierarchy.py, line 54:\n    editBoneSelector.insert(5, CheckForHierarchyBoneSingleSelection, HierarchySingleSelectionBone)';
	$m.__track_lines__[55] = 'bones.hierarchy.py, line 55:\n    editBoneSelector.insert(5, CheckForHierarchyBoneMultiSelection, HierarchyMultiSelectionBone)';
	$m.__track_lines__[56] = 'bones.hierarchy.py, line 56:\n    viewDelegateSelector.insert(3, CheckForHierarchyBone, RelationalViewBoneDelegate)';
	$m.__track_lines__[57] = 'bones.hierarchy.py, line 57:\n    extractorDelegateSelector.insert(3, CheckForHierarchyBone, RelationalBoneExtractor)';


	$pyjs['track']['module']='bones.hierarchy';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HierarchyWidget'] = $p['___import___']('widgets.hierarchy.HierarchyWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalViewBoneDelegate'] = $p['___import___']('bones.relational.RelationalViewBoneDelegate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalBoneExtractor'] = $p['___import___']('bones.relational.RelationalBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$m['HierarchyMultiSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.hierarchy';
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('onShowSelector', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var currentSelector;
			$pyjs['track']={'module':'bones.hierarchy', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.hierarchy';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=17;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['HierarchyWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'bones.hierarchy', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.hierarchy';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,x,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.hierarchy';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=12;
		var $bases = new Array($m['RelationalMultiSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HierarchyMultiSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=27;
	$m['HierarchySingleSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.hierarchy';
		$pyjs['track']['lineno']=28;
		$method = $pyjs__bind_method2('onShowSelector', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var currentSelector;
			$pyjs['track']={'module':'bones.hierarchy', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.hierarchy';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=32;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['HierarchyWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'bones.hierarchy', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.hierarchy';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.hierarchy';

	return $collcomp2;}()['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=27;
		var $bases = new Array($m['RelationalSingleSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HierarchySingleSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=42;
	$m['CheckForHierarchyBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
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
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
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
		var $and1,$and2,$and4,$and3,isMultiple;
		$pyjs['track']={'module':'bones.hierarchy','lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.hierarchy';
		$pyjs['track']['lineno']=42;
		$pyjs['track']['lineno']=43;
		isMultiple = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and1);
		$pyjs['track']['lineno']=44;
		$pyjs['track']['lineno']=44;
		var $pyjs__ret = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForHierarchyBone == "undefined"?$m['CheckForHierarchyBone']:CheckForHierarchyBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})())?!$p['bool'](isMultiple):$and3);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForHierarchyBoneSingleSelection']['__name__'] = 'CheckForHierarchyBoneSingleSelection';

	$m['CheckForHierarchyBoneSingleSelection']['__bind_type__'] = 0;
	$m['CheckForHierarchyBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=46;
	$m['CheckForHierarchyBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
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
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
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
		var $and8,$and5,$and6,$and7,isMultiple;
		$pyjs['track']={'module':'bones.hierarchy','lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.hierarchy';
		$pyjs['track']['lineno']=46;
		$pyjs['track']['lineno']=47;
		isMultiple = ($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and5);
		$pyjs['track']['lineno']=48;
		$pyjs['track']['lineno']=48;
		var $pyjs__ret = ($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForHierarchyBone == "undefined"?$m['CheckForHierarchyBone']:CheckForHierarchyBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})())?isMultiple:$and7);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForHierarchyBoneMultiSelection']['__name__'] = 'CheckForHierarchyBoneMultiSelection';

	$m['CheckForHierarchyBoneMultiSelection']['__bind_type__'] = 0;
	$m['CheckForHierarchyBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=50;
	$m['CheckForHierarchyBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.hierarchy','lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.hierarchy';
		$pyjs['track']['lineno']=50;
		$pyjs['track']['lineno']=51;
		$pyjs['track']['lineno']=51;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForHierarchyBone']['__name__'] = 'CheckForHierarchyBone';

	$m['CheckForHierarchyBone']['__bind_type__'] = 0;
	$m['CheckForHierarchyBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=54;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForHierarchyBoneSingleSelection'], $m['HierarchySingleSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
	$pyjs['track']['lineno']=55;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForHierarchyBoneMultiSelection'], $m['HierarchyMultiSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
	$pyjs['track']['lineno']=56;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForHierarchyBone'], $m['RelationalViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
	$pyjs['track']['lineno']=57;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForHierarchyBone'], $m['RelationalBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
	return this;
}; /* end bones.hierarchy */


/* end module: bones.hierarchy */


/*
PYJS_DEPS: ['config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'widgets.hierarchy.HierarchyWidget', 'widgets', 'widgets.hierarchy', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalViewBoneDelegate', 'bones.relational.RelationalBoneExtractor']
*/
