/* start module: widgets.sidebar */
$pyjs['loaded_modules']['widgets.sidebar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.sidebar']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.sidebar'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.sidebar'];
	$m['__repr__'] = function() { return '<module: widgets.sidebar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.sidebar';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['sidebar'] = $pyjs['loaded_modules']['widgets.sidebar'];
	$m.__track_lines__[1] = 'widgets.sidebar.py, line 1:\n    import html5';
	$m.__track_lines__[4] = 'widgets.sidebar.py, line 4:\n    class SideBar( html5.Div ):';
	$m.__track_lines__[6] = 'widgets.sidebar.py, line 6:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[7] = 'widgets.sidebar.py, line 7:\n    super( SideBar, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[8] = 'widgets.sidebar.py, line 8:\n    self.isInit = False';
	$m.__track_lines__[9] = 'widgets.sidebar.py, line 9:\n    self.currentWidget = None';
	$m.__track_lines__[10] = 'widgets.sidebar.py, line 10:\n    self["class"].append("sidebarwidgets")';
	$m.__track_lines__[11] = 'widgets.sidebar.py, line 11:\n    self["class"].append("isempty")';
	$m.__track_lines__[12] = 'widgets.sidebar.py, line 12:\n    self["style"]["float"] = "right"';
	$m.__track_lines__[14] = 'widgets.sidebar.py, line 14:\n    def onAttach(self):';
	$m.__track_lines__[15] = 'widgets.sidebar.py, line 15:\n    super( SideBar, self ).onAttach()';
	$m.__track_lines__[16] = 'widgets.sidebar.py, line 16:\n    self.parent()["class"].append("isfullview")';
	$m.__track_lines__[17] = 'widgets.sidebar.py, line 17:\n    self.isInit = True';
	$m.__track_lines__[18] = 'widgets.sidebar.py, line 18:\n    if self.currentWidget is not None:';
	$m.__track_lines__[19] = 'widgets.sidebar.py, line 19:\n    cw = self.currentWidget';
	$m.__track_lines__[20] = 'widgets.sidebar.py, line 20:\n    self.currentWidget = None';
	$m.__track_lines__[21] = 'widgets.sidebar.py, line 21:\n    self.setWidget( cw )';
	$m.__track_lines__[23] = 'widgets.sidebar.py, line 23:\n    def onDetach(self):';
	$m.__track_lines__[24] = 'widgets.sidebar.py, line 24:\n    if self.currentWidget:';
	$m.__track_lines__[25] = 'widgets.sidebar.py, line 25:\n    self.removeChild( self.currentWidget )';
	$m.__track_lines__[26] = 'widgets.sidebar.py, line 26:\n    self.currentWidget = None';
	$m.__track_lines__[27] = 'widgets.sidebar.py, line 27:\n    super( SideBar, self ).onDetach()';
	$m.__track_lines__[28] = 'widgets.sidebar.py, line 28:\n    self.isInit = False';
	$m.__track_lines__[30] = 'widgets.sidebar.py, line 30:\n    def setWidget(self, widget):';
	$m.__track_lines__[31] = 'widgets.sidebar.py, line 31:\n    if not self.isInit:';
	$m.__track_lines__[32] = 'widgets.sidebar.py, line 32:\n    self.currentWidget = widget';
	$m.__track_lines__[33] = 'widgets.sidebar.py, line 33:\n    return';
	$m.__track_lines__[35] = 'widgets.sidebar.py, line 35:\n    if self.currentWidget:';
	$m.__track_lines__[36] = 'widgets.sidebar.py, line 36:\n    self.removeChild( self.currentWidget )';
	$m.__track_lines__[37] = 'widgets.sidebar.py, line 37:\n    if widget is None:';
	$m.__track_lines__[38] = 'widgets.sidebar.py, line 38:\n    self["class"].remove("haschild")';
	$m.__track_lines__[39] = 'widgets.sidebar.py, line 39:\n    self["class"].append("isempty")';
	$m.__track_lines__[40] = 'widgets.sidebar.py, line 40:\n    self.parent()["class"].remove("issplitview")';
	$m.__track_lines__[41] = 'widgets.sidebar.py, line 41:\n    self.parent()["class"].append("isfullview")';
	$m.__track_lines__[44] = 'widgets.sidebar.py, line 44:\n    self["class"].append("haschild")';
	$m.__track_lines__[45] = 'widgets.sidebar.py, line 45:\n    self["class"].remove("isempty")';
	$m.__track_lines__[46] = 'widgets.sidebar.py, line 46:\n    self.parent()["class"].append("issplitview")';
	$m.__track_lines__[47] = 'widgets.sidebar.py, line 47:\n    self.parent()["class"].remove("isfullview")';
	$m.__track_lines__[49] = 'widgets.sidebar.py, line 49:\n    self.currentWidget = widget';
	$m.__track_lines__[51] = 'widgets.sidebar.py, line 51:\n    if widget is not None:';
	$m.__track_lines__[52] = 'widgets.sidebar.py, line 52:\n    self.appendChild( widget )';
	$m.__track_lines__[55] = 'widgets.sidebar.py, line 55:\n    def getWidget(self):';
	$m.__track_lines__[56] = 'widgets.sidebar.py, line 56:\n    return( self.currentWidget )';


	$pyjs['track']['module']='widgets.sidebar';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['SideBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.sidebar';
		$pyjs['track']['lineno']=6;
		$method = $pyjs__bind_method2('__init__', function() {
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

			$pyjs['track']={'module':'widgets.sidebar', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.sidebar';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SideBar'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=8;
			self['isInit'] = false;
			$pyjs['track']['lineno']=9;
			self['currentWidget'] = null;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('sidebarwidgets');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('isempty');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('float', 'right');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var cw;
			$pyjs['track']={'module':'widgets.sidebar', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.sidebar';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SideBar'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__getitem__']('class')['append']('isfullview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=17;
			self['isInit'] = true;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'currentWidget') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=19;
				cw = $p['getattr'](self, 'currentWidget');
				$pyjs['track']['lineno']=20;
				self['currentWidget'] = null;
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setWidget'](cw);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=23;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.sidebar', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.sidebar';
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'currentWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild']($p['getattr'](self, 'currentWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=26;
				self['currentWidget'] = null;
			}
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SideBar'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=28;
			self['isInit'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=30;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			$pyjs['track']={'module':'widgets.sidebar', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.sidebar';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isInit')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=32;
				self['currentWidget'] = widget;
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=35;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'currentWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild']($p['getattr'](self, 'currentWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=37;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((widget === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs['track']['lineno']=38;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['remove']('haschild');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					$pyjs['track']['lineno']=39;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['append']('isempty');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					$pyjs['track']['lineno']=40;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__getitem__']('class')['remove']('issplitview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs['track']['lineno']=41;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__getitem__']('class')['append']('isfullview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((widget !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs['track']['lineno']=44;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('haschild');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=45;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('isempty');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=46;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['__getitem__']('class')['append']('issplitview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()['__getitem__']('class')['remove']('isfullview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs['track']['lineno']=49;
			self['currentWidget'] = widget;
			$pyjs['track']['lineno']=51;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((widget !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs['track']['lineno']=52;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$pyjs['track']['lineno']=55;
		$method = $pyjs__bind_method2('getWidget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.sidebar', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.sidebar';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=56;
			var $pyjs__ret = $p['getattr'](self, 'currentWidget');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidget'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SideBar', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.sidebar */


/* end module: widgets.sidebar */


/*
PYJS_DEPS: ['html5']
*/
