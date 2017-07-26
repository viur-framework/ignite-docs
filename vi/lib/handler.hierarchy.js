/* start module: handler.hierarchy */
$pyjs['loaded_modules']['handler.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['handler.hierarchy'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.hierarchy'];
	$m['__repr__'] = function() { return '<module: handler.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.hierarchy';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['handler']['hierarchy'] = $pyjs['loaded_modules']['handler.hierarchy'];
	$m.__track_lines__[1] = 'handler.hierarchy.py, line 1:\n    from priorityqueue import HandlerClassSelector, initialHashHandler';
	$m.__track_lines__[2] = 'handler.hierarchy.py, line 2:\n    from widgets import HierarchyWidget';
	$m.__track_lines__[3] = 'handler.hierarchy.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'handler.hierarchy.py, line 4:\n    from pane import Pane';
	$m.__track_lines__[5] = 'handler.hierarchy.py, line 5:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[6] = 'handler.hierarchy.py, line 6:\n    from i18n import translate';
	$m.__track_lines__[8] = 'handler.hierarchy.py, line 8:\n    class HierarchyHandler( Pane ):';
	$m.__track_lines__[9] = 'handler.hierarchy.py, line 9:\n    def __init__(self, moduleName, moduleInfo, *args, **kwargs):';
	$m.__track_lines__[10] = 'handler.hierarchy.py, line 10:\n    icon = "icons/modules/hierarchy.svg"';
	$m.__track_lines__[11] = 'handler.hierarchy.py, line 11:\n    if "icon" in moduleInfo.keys():';
	$m.__track_lines__[12] = 'handler.hierarchy.py, line 12:\n    icon = moduleInfo["icon"]';
	$m.__track_lines__[14] = 'handler.hierarchy.py, line 14:\n    super(HierarchyHandler, self).__init__(moduleInfo["visibleName"], icon )';
	$m.__track_lines__[15] = 'handler.hierarchy.py, line 15:\n    if "hideInMainBar" in moduleInfo.keys() and moduleInfo["hideInMainBar"]:';
	$m.__track_lines__[16] = 'handler.hierarchy.py, line 16:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[17] = 'handler.hierarchy.py, line 17:\n    self.moduleName = moduleName';
	$m.__track_lines__[18] = 'handler.hierarchy.py, line 18:\n    initialHashHandler.insert( 1, self.canHandleInitialHash, self.handleInitialHash)';
	$m.__track_lines__[20] = 'handler.hierarchy.py, line 20:\n    def canHandleInitialHash(self, pathList, params ):';
	$m.__track_lines__[21] = 'handler.hierarchy.py, line 21:\n    if len(pathList)>1:';
	$m.__track_lines__[22] = 'handler.hierarchy.py, line 22:\n    if pathList[0]==self.moduleName:';
	$m.__track_lines__[23] = 'handler.hierarchy.py, line 23:\n    if pathList[1] in ["list"] or (pathList[1]=="edit" and len(pathList)>2):';
	$m.__track_lines__[24] = 'handler.hierarchy.py, line 24:\n    return( True )';
	$m.__track_lines__[25] = 'handler.hierarchy.py, line 25:\n    return( False )';
	$m.__track_lines__[27] = 'handler.hierarchy.py, line 27:\n    def handleInitialHash(self, pathList, params):';
	$m.__track_lines__[28] = 'handler.hierarchy.py, line 28:\n    assert self.canHandleInitialHash( pathList, params )';
	$m.__track_lines__[29] = 'handler.hierarchy.py, line 29:\n    if pathList[1] == "list":';
	$m.__track_lines__[30] = 'handler.hierarchy.py, line 30:\n    self.addWidget( HierarchyWidget( self.moduleName ) )';
	$m.__track_lines__[31] = 'handler.hierarchy.py, line 31:\n    self.focus()';
	$m.__track_lines__[33] = 'handler.hierarchy.py, line 33:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=["modul_%s" % self.moduleName, "apptype_hierarchy", "action_edit" ])';
	$m.__track_lines__[34] = 'handler.hierarchy.py, line 34:\n    edwg = EditWidget( self.moduleName, EditWidget.appHierarchy, key=pathList[2], hashArgs=(params or None))';
	$m.__track_lines__[35] = 'handler.hierarchy.py, line 35:\n    pane.addWidget( edwg )';
	$m.__track_lines__[36] = 'handler.hierarchy.py, line 36:\n    conf["mainWindow"].addPane( pane, parentPane=self)';
	$m.__track_lines__[37] = 'handler.hierarchy.py, line 37:\n    pane.focus()';
	$m.__track_lines__[41] = 'handler.hierarchy.py, line 40:\n    @staticmethod ... def canHandle( moduleName, moduleInfo ):';
	$m.__track_lines__[42] = 'handler.hierarchy.py, line 42:\n    return( moduleInfo["handler"]=="hierarchy" or moduleInfo["handler"].startswith("hierarchy."))';
	$m.__track_lines__[44] = 'handler.hierarchy.py, line 44:\n    def onClick(self, *args, **kwargs ):';
	$m.__track_lines__[45] = 'handler.hierarchy.py, line 45:\n    if not len(self.widgetsDomElm._children):';
	$m.__track_lines__[46] = 'handler.hierarchy.py, line 46:\n    self.addWidget( HierarchyWidget(self.moduleName ) )';
	$m.__track_lines__[47] = 'handler.hierarchy.py, line 47:\n    super( HierarchyHandler, self ).onClick( *args, **kwargs )';
	$m.__track_lines__[50] = 'handler.hierarchy.py, line 50:\n    HandlerClassSelector.insert( 3, HierarchyHandler.canHandle, HierarchyHandler )';


	$pyjs['track']['module']='handler.hierarchy';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HierarchyWidget'] = $p['___import___']('widgets.HierarchyWidget', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['HierarchyHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'handler.hierarchy';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('__init__', function(moduleName, moduleInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				moduleName = arguments[1];
				moduleInfo = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof moduleInfo != 'undefined') {
					if (moduleInfo !== null && typeof moduleInfo['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleInfo;
						moduleInfo = arguments[3];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			var $and1,$and2,icon;
			$pyjs['track']={'module':'handler.hierarchy', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.hierarchy';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			icon = 'icons/modules/hierarchy.svg';
			$pyjs['track']['lineno']=11;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__']('icon'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=12;
				icon = moduleInfo['__getitem__']('icon');
			}
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__init__'](moduleInfo['__getitem__']('visibleName'), icon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=15;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__']('hideInMainBar'))?moduleInfo['__getitem__']('hideInMainBar'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=16;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs['track']['lineno']=17;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['initialHashHandler']['insert'](1, $p['getattr'](self, 'canHandleInitialHash'), $p['getattr'](self, 'handleInitialHash'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['moduleInfo']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('canHandleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or1,$or2,$and3,$and4;
			$pyjs['track']={'module':'handler.hierarchy', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.hierarchy';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=22;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](pathList['__getitem__'](0), $p['getattr'](self, 'moduleName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=23;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__contains__'](pathList['__getitem__'](1)))?$or1:($p['bool']($and3=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), 2) == 1):$and3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
						$pyjs['track']['lineno']=24;
						$pyjs['track']['lineno']=24;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=25;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['canHandleInitialHash'] = $method;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('handleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or4,$or3,edwg,$and6,$and5,pane;
			$pyjs['track']={'module':'handler.hierarchy', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.hierarchy';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['canHandleInitialHash'](pathList, params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=29;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pathList['__getitem__'](1), 'list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=30;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HierarchyWidget']($p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=31;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and5=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), 2) == 1):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs['track']['lineno']=33;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), 'apptype_hierarchy', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=34;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':pathList['__getitem__'](2), 'hashArgs':($p['bool']($or3=params)?$or3:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appHierarchy')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=37;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['handleInitialHash'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
			var $or5,$or6;
			$pyjs['track']={'module':'handler.hierarchy', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.hierarchy';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=42;
			var $pyjs__ret = ($p['bool']($or5=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'hierarchy'))?$or5:(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('onClick', function() {
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

			$pyjs['track']={'module':'handler.hierarchy', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.hierarchy';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
				$pyjs['track']['lineno']=46;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HierarchyWidget']($p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			}
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), 'onClick', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($m['Pane']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HierarchyHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=50;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['HandlerClassSelector']['insert'](3, $p['getattr']($m['HierarchyHandler'], 'canHandle'), $m['HierarchyHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
	return this;
}; /* end handler.hierarchy */


/* end module: handler.hierarchy */


/*
PYJS_DEPS: ['priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'widgets.HierarchyWidget', 'widgets', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.edit.EditWidget', 'widgets.edit', 'i18n.translate', 'i18n']
*/
