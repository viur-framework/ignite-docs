/* start module: handler.tree */
$pyjs['loaded_modules']['handler.tree'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.tree']['__was_initialized__']) return $pyjs['loaded_modules']['handler.tree'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.tree'];
	$m['__repr__'] = function() { return '<module: handler.tree>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.tree';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['handler']['tree'] = $pyjs['loaded_modules']['handler.tree'];
	$m.__track_lines__[1] = 'handler.tree.py, line 1:\n    from priorityqueue import HandlerClassSelector, displayDelegateSelector, initialHashHandler';
	$m.__track_lines__[2] = 'handler.tree.py, line 2:\n    from widgets import TreeWidget';
	$m.__track_lines__[3] = 'handler.tree.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'handler.tree.py, line 4:\n    from pane import Pane';
	$m.__track_lines__[5] = 'handler.tree.py, line 5:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[7] = 'handler.tree.py, line 7:\n    from i18n import translate';
	$m.__track_lines__[8] = 'handler.tree.py, line 8:\n    class TreeHandler( Pane ):';
	$m.__track_lines__[9] = 'handler.tree.py, line 9:\n    def __init__(self, moduleName, moduleInfo, *args, **kwargs):';
	$m.__track_lines__[10] = 'handler.tree.py, line 10:\n    icon = "icons/modules/tree.svg"';
	$m.__track_lines__[12] = 'handler.tree.py, line 12:\n    if "icon" in moduleInfo.keys():';
	$m.__track_lines__[13] = 'handler.tree.py, line 13:\n    icon = moduleInfo["icon"]';
	$m.__track_lines__[15] = 'handler.tree.py, line 15:\n    super( TreeHandler, self ).__init__(moduleInfo["visibleName"], icon )';
	$m.__track_lines__[16] = 'handler.tree.py, line 16:\n    self.moduleName = moduleName';
	$m.__track_lines__[17] = 'handler.tree.py, line 17:\n    self.moduleInfo = moduleInfo';
	$m.__track_lines__[18] = 'handler.tree.py, line 18:\n    if "hideInMainBar" in moduleInfo.keys() and moduleInfo["hideInMainBar"]:';
	$m.__track_lines__[19] = 'handler.tree.py, line 19:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[20] = 'handler.tree.py, line 20:\n    initialHashHandler.insert( 1, self.canHandleInitialHash, self.handleInitialHash)';
	$m.__track_lines__[22] = 'handler.tree.py, line 22:\n    def canHandleInitialHash(self, pathList, params ):';
	$m.__track_lines__[23] = 'handler.tree.py, line 23:\n    if len(pathList)>1:';
	$m.__track_lines__[24] = 'handler.tree.py, line 24:\n    if pathList[0]==self.moduleName:';
	$m.__track_lines__[25] = 'handler.tree.py, line 25:\n    if pathList[1] in ["list"] or (pathList[1]=="edit" and len(pathList)>3 and pathList[2] in ["node","leaf"]):';
	$m.__track_lines__[26] = 'handler.tree.py, line 26:\n    return( True )';
	$m.__track_lines__[27] = 'handler.tree.py, line 27:\n    return( False )';
	$m.__track_lines__[29] = 'handler.tree.py, line 29:\n    def handleInitialHash(self, pathList, params):';
	$m.__track_lines__[30] = 'handler.tree.py, line 30:\n    assert self.canHandleInitialHash( pathList, params )';
	$m.__track_lines__[31] = 'handler.tree.py, line 31:\n    if pathList[1] == "list":';
	$m.__track_lines__[32] = 'handler.tree.py, line 32:\n    wdg = displayDelegateSelector.select( self.moduleName, self.moduleInfo )';
	$m.__track_lines__[33] = 'handler.tree.py, line 33:\n    assert wdg is not None, "Got no handler for %s" % self.moduleName';
	$m.__track_lines__[34] = 'handler.tree.py, line 34:\n    self.addWidget( wdg(self.moduleName ) )';
	$m.__track_lines__[35] = 'handler.tree.py, line 35:\n    self.focus()';
	$m.__track_lines__[37] = 'handler.tree.py, line 37:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=["modul_%s" % self.moduleName, "apptype_tree", "action_edit" ])';
	$m.__track_lines__[38] = 'handler.tree.py, line 38:\n    edwg = EditWidget( self.moduleName, EditWidget.appTree, key=pathList[3], skelType=pathList[2], hashArgs=(params or None))';
	$m.__track_lines__[39] = 'handler.tree.py, line 39:\n    pane.addWidget( edwg )';
	$m.__track_lines__[40] = 'handler.tree.py, line 40:\n    conf["mainWindow"].addPane( pane, parentPane=self)';
	$m.__track_lines__[41] = 'handler.tree.py, line 41:\n    pane.focus()';
	$m.__track_lines__[44] = 'handler.tree.py, line 43:\n    @staticmethod ... def canHandle( moduleName, moduleInfo ):';
	$m.__track_lines__[45] = 'handler.tree.py, line 45:\n    return( moduleInfo["handler"]=="tree" or moduleInfo["handler"].startswith("tree."))';
	$m.__track_lines__[47] = 'handler.tree.py, line 47:\n    def onClick(self, *args, **kwargs ):';
	$m.__track_lines__[48] = 'handler.tree.py, line 48:\n    if not len(self.widgetsDomElm._children):';
	$m.__track_lines__[49] = 'handler.tree.py, line 49:\n    wdg = displayDelegateSelector.select( self.moduleName, self.moduleInfo )';
	$m.__track_lines__[50] = 'handler.tree.py, line 50:\n    assert wdg is not None, "Got no handler for %s" % self.moduleName';
	$m.__track_lines__[51] = 'handler.tree.py, line 51:\n    self.addWidget( wdg(self.moduleName ) )';
	$m.__track_lines__[52] = 'handler.tree.py, line 52:\n    super( TreeHandler, self ).onClick( *args, **kwargs )';
	$m.__track_lines__[55] = 'handler.tree.py, line 55:\n    HandlerClassSelector.insert( 3, TreeHandler.canHandle, TreeHandler )';


	$pyjs['track']['module']='handler.tree';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['displayDelegateSelector'] = $p['___import___']('priorityqueue.displayDelegateSelector', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TreeWidget'] = $p['___import___']('widgets.TreeWidget', 'handler', null, false);
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
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['TreeHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'handler.tree';
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
			$pyjs['track']={'module':'handler.tree', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.tree';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			icon = 'icons/modules/tree.svg';
			$pyjs['track']['lineno']=12;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__']('icon'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=13;
				icon = moduleInfo['__getitem__']('icon');
			}
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__init__'](moduleInfo['__getitem__']('visibleName'), icon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=16;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=17;
			self['moduleInfo'] = moduleInfo;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__']('hideInMainBar'))?moduleInfo['__getitem__']('hideInMainBar'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=19;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['initialHashHandler']['insert'](1, $p['getattr'](self, 'canHandleInitialHash'), $p['getattr'](self, 'handleInitialHash'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['moduleInfo']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('canHandleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or1,$or2,$and3,$and4,$and5;
			$pyjs['track']={'module':'handler.tree', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.tree';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=24;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](pathList['__getitem__'](0), $p['getattr'](self, 'moduleName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=25;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__contains__'](pathList['__getitem__'](1)))?$or1:($p['bool']($and3=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['bool']($and4=($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), 3) == 1))?(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['node', 'leaf']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__contains__'](pathList['__getitem__'](2)):$and4):$and3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
						$pyjs['track']['lineno']=26;
						$pyjs['track']['lineno']=26;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=27;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['canHandleInitialHash'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('handleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or4,$or3,wdg,$and6,$and7,edwg,pane;
			$pyjs['track']={'module':'handler.tree', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.tree';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['canHandleInitialHash'](pathList, params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=31;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pathList['__getitem__'](1), 'list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=32;
				wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['displayDelegateSelector']['select']($p['getattr'](self, 'moduleName'), $p['getattr'](self, 'moduleInfo'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=33;
				if (!( (wdg !== null) )) {
				   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('Got no handler for %s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
				 }
				$pyjs['track']['lineno']=34;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return wdg($p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and6=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), 3) == 1):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=37;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), 'apptype_tree', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=38;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':pathList['__getitem__'](3), 'skelType':pathList['__getitem__'](2), 'hashArgs':($p['bool']($or3=params)?$or3:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=40;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs['track']['lineno']=41;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['handleInitialHash'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
			var $or5,$or6;
			$pyjs['track']={'module':'handler.tree', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.tree';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=45;
			var $pyjs__ret = ($p['bool']($or5=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'tree'))?$or5:(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=47;
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
			var wdg;
			$pyjs['track']={'module':'handler.tree', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.tree';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=49;
				wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['displayDelegateSelector']['select']($p['getattr'](self, 'moduleName'), $p['getattr'](self, 'moduleInfo'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs['track']['lineno']=50;
				if (!( (wdg !== null) )) {
				   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('Got no handler for %s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
				 }
				$pyjs['track']['lineno']=51;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return wdg($p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			$pyjs['track']['lineno']=52;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), 'onClick', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
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
		return $p['_create_class']('TreeHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=55;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['HandlerClassSelector']['insert'](3, $p['getattr']($m['TreeHandler'], 'canHandle'), $m['TreeHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
	return this;
}; /* end handler.tree */


/* end module: handler.tree */


/*
PYJS_DEPS: ['priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.displayDelegateSelector', 'priorityqueue.initialHashHandler', 'widgets.TreeWidget', 'widgets', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.edit.EditWidget', 'widgets.edit', 'i18n.translate', 'i18n']
*/
