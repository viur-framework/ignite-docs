/* start module: handler.singleton */
$pyjs['loaded_modules']['handler.singleton'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['handler.singleton']['__was_initialized__']) return $pyjs['loaded_modules']['handler.singleton'];
	if(typeof $pyjs['loaded_modules']['handler'] == 'undefined' || !$pyjs['loaded_modules']['handler']['__was_initialized__']) $p['___import___']('handler', null);
	var $m = $pyjs['loaded_modules']['handler.singleton'];
	$m['__repr__'] = function() { return '<module: handler.singleton>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'handler.singleton';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['handler']['singleton'] = $pyjs['loaded_modules']['handler.singleton'];
	$m.__track_lines__[1] = 'handler.singleton.py, line 1:\n    from priorityqueue import HandlerClassSelector, displayDelegateSelector, initialHashHandler';
	$m.__track_lines__[2] = 'handler.singleton.py, line 2:\n    from widgets import EditWidget';
	$m.__track_lines__[3] = 'handler.singleton.py, line 3:\n    from pane import Pane';
	$m.__track_lines__[5] = 'handler.singleton.py, line 5:\n    class SingletonHandler( Pane ):';
	$m.__track_lines__[6] = 'handler.singleton.py, line 6:\n    def __init__(self, moduleName, moduleInfo, *args, **kwargs):';
	$m.__track_lines__[7] = 'handler.singleton.py, line 7:\n    icon = "icons/modules/singleton.svg"';
	$m.__track_lines__[9] = 'handler.singleton.py, line 9:\n    if "icon" in moduleInfo.keys():';
	$m.__track_lines__[10] = 'handler.singleton.py, line 10:\n    icon = moduleInfo["icon"]';
	$m.__track_lines__[12] = 'handler.singleton.py, line 12:\n    super(SingletonHandler, self).__init__(moduleInfo["visibleName"], icon)';
	$m.__track_lines__[14] = 'handler.singleton.py, line 14:\n    self.moduleName = moduleName';
	$m.__track_lines__[15] = 'handler.singleton.py, line 15:\n    self.moduleInfo = moduleInfo';
	$m.__track_lines__[17] = 'handler.singleton.py, line 17:\n    if "hideInMainBar" in moduleInfo.keys() and moduleInfo["hideInMainBar"]:';
	$m.__track_lines__[18] = 'handler.singleton.py, line 18:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[20] = 'handler.singleton.py, line 20:\n    initialHashHandler.insert(1, self.canHandleInitialHash, self.handleInitialHash)';
	$m.__track_lines__[22] = 'handler.singleton.py, line 22:\n    def canHandleInitialHash(self, pathList, params ):';
	$m.__track_lines__[23] = 'handler.singleton.py, line 23:\n    if len(pathList) > 1:';
	$m.__track_lines__[24] = 'handler.singleton.py, line 24:\n    if pathList[0] == self.moduleName and pathList[1] == "edit":';
	$m.__track_lines__[25] = 'handler.singleton.py, line 25:\n    return True';
	$m.__track_lines__[27] = 'handler.singleton.py, line 27:\n    return False';
	$m.__track_lines__[29] = 'handler.singleton.py, line 29:\n    def handleInitialHash(self, pathList, params):';
	$m.__track_lines__[30] = 'handler.singleton.py, line 30:\n    assert self.canHandleInitialHash(pathList, params)';
	$m.__track_lines__[32] = 'handler.singleton.py, line 32:\n    self.addWidget(EditWidget(self.moduleName, EditWidget.appSingleton, hashArgs=(params or None)))';
	$m.__track_lines__[33] = 'handler.singleton.py, line 33:\n    self.focus()';
	$m.__track_lines__[36] = 'handler.singleton.py, line 35:\n    @staticmethod ... def canHandle( moduleName, moduleInfo ):';
	$m.__track_lines__[37] = 'handler.singleton.py, line 37:\n    return moduleInfo["handler"]=="singleton" or moduleInfo["handler"].startswith("singleton.")';
	$m.__track_lines__[39] = 'handler.singleton.py, line 39:\n    def onClick(self, *args, **kwargs ):';
	$m.__track_lines__[40] = 'handler.singleton.py, line 40:\n    if not self.widgetsDomElm.children():';
	$m.__track_lines__[41] = 'handler.singleton.py, line 41:\n    self.addWidget(EditWidget(self.moduleName, EditWidget.appSingleton))';
	$m.__track_lines__[43] = 'handler.singleton.py, line 43:\n    super(SingletonHandler, self).onClick(*args, **kwargs)';
	$m.__track_lines__[45] = 'handler.singleton.py, line 45:\n    HandlerClassSelector.insert( 3, SingletonHandler.canHandle, SingletonHandler )';


	$pyjs['track']['module']='handler.singleton';
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
	$m['EditWidget'] = $p['___import___']('widgets.EditWidget', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'handler', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['SingletonHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'handler.singleton';
		$pyjs['track']['lineno']=6;
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
			$pyjs['track']={'module':'handler.singleton', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.singleton';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			icon = 'icons/modules/singleton.svg';
			$pyjs['track']['lineno']=9;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__']('icon'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=10;
				icon = moduleInfo['__getitem__']('icon');
			}
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SingletonHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__init__'](moduleInfo['__getitem__']('visibleName'), icon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=14;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=15;
			self['moduleInfo'] = moduleInfo;
			$pyjs['track']['lineno']=17;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__']('hideInMainBar'))?moduleInfo['__getitem__']('hideInMainBar'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=18;
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
			var $and4,$and3;
			$pyjs['track']={'module':'handler.singleton', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.singleton';
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
					return $p['bool'](($p['bool']($and3=$p['op_eq'](pathList['__getitem__'](0), $p['getattr'](self, 'moduleName')))?$p['op_eq'](pathList['__getitem__'](1), 'edit'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=25;
					$pyjs['track']['lineno']=25;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
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
			var $or1,$or2;
			$pyjs['track']={'module':'handler.singleton', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.singleton';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['canHandleInitialHash'](pathList, params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'hashArgs':($p['bool']($or1=params)?$or1:null)}, $p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appSingleton')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pathList'],['params']]);
		$cls_definition['handleInitialHash'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('canHandle', function(moduleName, moduleInfo) {
			var $or4,$or3;
			$pyjs['track']={'module':'handler.singleton', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.singleton';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=37;
			var $pyjs__ret = ($p['bool']($or3=$p['op_eq'](moduleInfo['__getitem__']('handler'), 'singleton'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('singleton.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=39;
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

			$pyjs['track']={'module':'handler.singleton', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='handler.singleton';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['widgetsDomElm']['children']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=41;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['EditWidget']($p['getattr'](self, 'moduleName'), $p['getattr']($m['EditWidget'], 'appSingleton'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			}
			$pyjs['track']['lineno']=43;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SingletonHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 'onClick', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Pane']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SingletonHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=45;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['HandlerClassSelector']['insert'](3, $p['getattr']($m['SingletonHandler'], 'canHandle'), $m['SingletonHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
	return this;
}; /* end handler.singleton */


/* end module: handler.singleton */


/*
PYJS_DEPS: ['priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.displayDelegateSelector', 'priorityqueue.initialHashHandler', 'widgets.EditWidget', 'widgets', 'pane.Pane', 'pane']
*/
