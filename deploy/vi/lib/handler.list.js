/* start module: handler.list */
$pyjs['loaded_modules']['handler.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.list']['__was_initialized__']) return $pyjs['loaded_modules']['handler.list'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.list'];
	$m['__repr__'] = function() { return '<module: handler.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.list';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['handler']['list'] = $pyjs['loaded_modules']['handler.list'];
	$m.__track_lines__[1] = 'handler.list.py, line 1:\n    import json';
	$m.__track_lines__[2] = 'handler.list.py, line 2:\n    from network import NetworkService';
	$m.__track_lines__[3] = 'handler.list.py, line 3:\n    from priorityqueue import HandlerClassSelector, initialHashHandler';
	$m.__track_lines__[4] = 'handler.list.py, line 4:\n    from widgets import ListWidget';
	$m.__track_lines__[5] = 'handler.list.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'handler.list.py, line 6:\n    from pane import Pane';
	$m.__track_lines__[7] = 'handler.list.py, line 7:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[8] = 'handler.list.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[10] = 'handler.list.py, line 10:\n    class ListHandler( Pane ):';
	$m.__track_lines__[11] = 'handler.list.py, line 11:\n    def __init__(self, moduleName, moduleInfo, isView = False, *args, **kwargs):';
	$m.__track_lines__[12] = 'handler.list.py, line 12:\n    icon = "icons/modules/list.svg"';
	$m.__track_lines__[13] = 'handler.list.py, line 13:\n    if "icon" in moduleInfo.keys():';
	$m.__track_lines__[14] = 'handler.list.py, line 14:\n    icon = moduleInfo["icon"]';
	$m.__track_lines__[16] = 'handler.list.py, line 16:\n    super(ListHandler, self).__init__(moduleInfo.get("visibleName", moduleInfo["name"]), icon)';
	$m.__track_lines__[18] = 'handler.list.py, line 18:\n    self.moduleName = moduleName';
	$m.__track_lines__[19] = 'handler.list.py, line 19:\n    self.moduleInfo = moduleInfo';
	$m.__track_lines__[21] = 'handler.list.py, line 21:\n    if "hideInMainBar" in moduleInfo.keys() and moduleInfo["hideInMainBar"]:';
	$m.__track_lines__[22] = 'handler.list.py, line 22:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[24] = 'handler.list.py, line 24:\n    if "views" in moduleInfo.keys():';
	$m.__track_lines__[25] = 'handler.list.py, line 25:\n    for view in moduleInfo["views"]:';
	$m.__track_lines__[26] = 'handler.list.py, line 26:\n    self.addChildPane(ListHandler(moduleName, view, isView=True))';
	$m.__track_lines__[28] = 'handler.list.py, line 28:\n    if not isView:';
	$m.__track_lines__[29] = 'handler.list.py, line 29:\n    initialHashHandler.insert(1, self.canHandleInitialHash, self.handleInitialHash)';
	$m.__track_lines__[31] = 'handler.list.py, line 31:\n    def canHandleInitialHash(self, pathList, params ):';
	$m.__track_lines__[32] = 'handler.list.py, line 32:\n    if len(pathList)>1:';
	$m.__track_lines__[33] = 'handler.list.py, line 33:\n    if pathList[0]==self.moduleName:';
	$m.__track_lines__[34] = 'handler.list.py, line 34:\n    if pathList[1] in ["add","list"] or (pathList[1]=="edit" and len(pathList)>2):';
	$m.__track_lines__[35] = 'handler.list.py, line 35:\n    return True';
	$m.__track_lines__[37] = 'handler.list.py, line 37:\n    return False';
	$m.__track_lines__[39] = 'handler.list.py, line 39:\n    def handleInitialHash(self, pathList, params):';
	$m.__track_lines__[40] = 'handler.list.py, line 40:\n    assert self.canHandleInitialHash( pathList, params )';
	$m.__track_lines__[41] = 'handler.list.py, line 41:\n    if pathList[1] == "list":';
	$m.__track_lines__[42] = 'handler.list.py, line 42:\n    filter = None';
	$m.__track_lines__[43] = 'handler.list.py, line 43:\n    columns = None';
	$m.__track_lines__[44] = 'handler.list.py, line 44:\n    if "filter" in self.moduleInfo.keys():';
	$m.__track_lines__[45] = 'handler.list.py, line 45:\n    filter = self.moduleInfo["filter"]';
	$m.__track_lines__[46] = 'handler.list.py, line 46:\n    if "columns" in self.moduleInfo.keys():';
	$m.__track_lines__[47] = 'handler.list.py, line 47:\n    columns = self.moduleInfo["columns"]';
	$m.__track_lines__[48] = 'handler.list.py, line 48:\n    self.addWidget( ListWidget( self.moduleName, filter=filter, columns=columns ) )';
	$m.__track_lines__[49] = 'handler.list.py, line 49:\n    self.focus()';
	$m.__track_lines__[51] = 'handler.list.py, line 51:\n    pane = Pane(translate("Add"), closeable=True, iconClasses=["modul_%s" % self.moduleName, "apptype_list", "action_add" ])';
	$m.__track_lines__[52] = 'handler.list.py, line 52:\n    edwg = EditWidget( self.moduleName, EditWidget.appList, hashArgs=(params or None) )';
	$m.__track_lines__[53] = 'handler.list.py, line 53:\n    pane.addWidget( edwg )';
	$m.__track_lines__[54] = 'handler.list.py, line 54:\n    conf["mainWindow"].addPane( pane, parentPane=self)';
	$m.__track_lines__[55] = 'handler.list.py, line 55:\n    pane.focus()';
	$m.__track_lines__[57] = 'handler.list.py, line 57:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=["modul_%s" % self.moduleName, "apptype_list", "action_edit" ])';
	$m.__track_lines__[58] = 'handler.list.py, line 58:\n    edwg = EditWidget( self.moduleName, EditWidget.appList, key=pathList[2], hashArgs=(params or None))';
	$m.__track_lines__[59] = 'handler.list.py, line 59:\n    pane.addWidget( edwg )';
	$m.__track_lines__[60] = 'handler.list.py, line 60:\n    conf["mainWindow"].addPane( pane, parentPane=self)';
	$m.__track_lines__[61] = 'handler.list.py, line 61:\n    pane.focus()';
	$m.__track_lines__[64] = 'handler.list.py, line 63:\n    @staticmethod ... def canHandle( moduleName, moduleInfo ):';
	$m.__track_lines__[65] = 'handler.list.py, line 65:\n    return( moduleInfo["handler"]=="list" or moduleInfo["handler"].startswith("list."))';
	$m.__track_lines__[67] = 'handler.list.py, line 67:\n    def onClick(self, *args, **kwargs ):';
	$m.__track_lines__[68] = 'handler.list.py, line 68:\n    if not len(self.widgetsDomElm._children):';
	$m.__track_lines__[69] = 'handler.list.py, line 69:\n    filter = None';
	$m.__track_lines__[70] = 'handler.list.py, line 70:\n    columns = None';
	$m.__track_lines__[72] = 'handler.list.py, line 72:\n    if "filter" in self.moduleInfo.keys():';
	$m.__track_lines__[73] = 'handler.list.py, line 73:\n    filter = self.moduleInfo["filter"]';
	$m.__track_lines__[75] = 'handler.list.py, line 75:\n    if "columns" in self.moduleInfo.keys():';
	$m.__track_lines__[76] = 'handler.list.py, line 76:\n    columns = self.moduleInfo["columns"]';
	$m.__track_lines__[78] = 'handler.list.py, line 78:\n    self.addWidget(ListWidget(self.moduleName, filter=filter,';
	$m.__track_lines__[82] = 'handler.list.py, line 82:\n    super(ListHandler, self).onClick(*args, **kwargs)';
	$m.__track_lines__[85] = 'handler.list.py, line 85:\n    HandlerClassSelector.insert( 1, ListHandler.canHandle, ListHandler )';


	$pyjs['track']['module']='handler.list';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', 'handler');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ListWidget'] = $p['___import___']('widgets.ListWidget', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$m['ListHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'handler.list';
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('__init__', function(moduleName, moduleInfo, isView) {
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
				moduleInfo = arguments[2];
				isView = arguments[3];
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
				if (typeof isView != 'undefined') {
					if (isView !== null && typeof isView['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = isView;
						isView = arguments[4];
					}
				} else 				if (typeof moduleInfo != 'undefined') {
					if (moduleInfo !== null && typeof moduleInfo['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleInfo;
						moduleInfo = arguments[4];
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
			if (typeof isView == 'undefined') isView=arguments['callee']['__args__'][5][1];
			var $iter1_array,$iter1_nextval,$iter1_type,$iter1_idx,$and1,$iter1_iter,view,$pyjs__trackstack_size_1,$and2,icon;
			$pyjs['track']={'module':'handler.list', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.list';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			icon = 'icons/modules/list.svg';
			$pyjs['track']['lineno']=13;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__']('icon'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=14;
				icon = moduleInfo['__getitem__']('icon');
			}
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__init__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['get']('visibleName', moduleInfo['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), icon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=18;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=19;
			self['moduleInfo'] = moduleInfo;
			$pyjs['track']['lineno']=21;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['__contains__']('hideInMainBar'))?moduleInfo['__getitem__']('hideInMainBar'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs['track']['lineno']=22;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=24;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['__contains__']('views'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs['track']['lineno']=25;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return moduleInfo['__getitem__']('views');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						view = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=26;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['addChildPane']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['ListHandler'], null, null, [{'isView':true}, moduleName, view]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='handler.list';
				}
			}
			$pyjs['track']['lineno']=28;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](isView));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs['track']['lineno']=29;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['initialHashHandler']['insert'](1, $p['getattr'](self, 'canHandleInitialHash'), $p['getattr'](self, 'handleInitialHash'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['moduleInfo'],['isView', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('canHandleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or1,$or2,$and3,$and4;
			$pyjs['track']={'module':'handler.list', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.list';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=33;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](pathList['__getitem__'](0), $p['getattr'](self, 'moduleName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs['track']['lineno']=34;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['add', 'list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['__contains__'](pathList['__getitem__'](1)))?$or1:($p['bool']($and3=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), 2) == 1):$and3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs['track']['lineno']=35;
						$pyjs['track']['lineno']=35;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=37;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['canHandleInitialHash'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('handleInitialHash', function(pathList, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathList = arguments[1];
				params = arguments[2];
			}
			var $or5,$or4,$or6,$or3,edwg,$and6,$and5,filter,pane,columns;
			$pyjs['track']={'module':'handler.list', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.list';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['canHandleInitialHash'](pathList, params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=41;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pathList['__getitem__'](1), 'list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
				$pyjs['track']['lineno']=42;
				filter = null;
				$pyjs['track']['lineno']=43;
				columns = null;
				$pyjs['track']['lineno']=44;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__contains__']('filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					$pyjs['track']['lineno']=45;
					filter = $p['getattr'](self, 'moduleInfo')['__getitem__']('filter');
				}
				$pyjs['track']['lineno']=46;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()['__contains__']('columns'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs['track']['lineno']=47;
					columns = $p['getattr'](self, 'moduleInfo')['__getitem__']('columns');
				}
				$pyjs['track']['lineno']=48;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'filter':filter, 'columns':columns}, $p['getattr'](self, 'moduleName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['track']['lineno']=49;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pathList['__getitem__'](1), 'add'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
				$pyjs['track']['lineno']=51;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})(), 'apptype_list', 'action_add']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs['track']['lineno']=52;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'hashArgs':($p['bool']($or3=params)?$or3:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appList')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs['track']['lineno']=54;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['track']['lineno']=55;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and5=$p['op_eq'](pathList['__getitem__'](1), 'edit'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](pathList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), 2) == 1):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
				$pyjs['track']['lineno']=57;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=58;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':pathList['__getitem__'](2), 'hashArgs':($p['bool']($or5=params)?$or5:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appList')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['track']['lineno']=59;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs['track']['lineno']=60;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'addPane', null, null, [{'parentPane':self}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['handleInitialHash'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
			var $or7,$or8;
			$pyjs['track']={'module':'handler.list', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.list';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=65;
			var $pyjs__ret = ($p['bool']($or7=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'list'))?$or7:(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=67;
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
			var filter,columns;
			$pyjs['track']={'module':'handler.list', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.list';
			$pyjs['track']['lineno']=67;
			$pyjs['track']['lineno']=68;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
				$pyjs['track']['lineno']=69;
				filter = null;
				$pyjs['track']['lineno']=70;
				columns = null;
				$pyjs['track']['lineno']=72;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()['__contains__']('filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
					$pyjs['track']['lineno']=73;
					filter = $p['getattr'](self, 'moduleInfo')['__getitem__']('filter');
				}
				$pyjs['track']['lineno']=75;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()['__contains__']('columns'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
					$pyjs['track']['lineno']=76;
					columns = $p['getattr'](self, 'moduleInfo')['__getitem__']('columns');
				}
				$pyjs['track']['lineno']=78;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'filter':filter, 'columns':columns, 'filterID':(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['get']('__id');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})(), 'filterDescr':(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleInfo']['get']('visibleName', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()}, $p['getattr'](self, 'moduleName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			}
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})(), 'onClick', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=10;
		var $bases = new Array($m['Pane']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ListHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=85;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['HandlerClassSelector']['insert'](1, $p['getattr']($m['ListHandler'], 'canHandle'), $m['ListHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
	return this;
}; /* end handler.list */


/* end module: handler.list */


/*
PYJS_DEPS: ['json', 'network.NetworkService', 'network', 'priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'widgets.ListWidget', 'widgets', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.edit.EditWidget', 'widgets.edit', 'i18n.translate', 'i18n']
*/
