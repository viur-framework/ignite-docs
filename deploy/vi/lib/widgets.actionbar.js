/* start module: widgets.actionbar */
$pyjs['loaded_modules']['widgets.actionbar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.actionbar']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.actionbar'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.actionbar'];
	$m['__repr__'] = function() { return '<module: widgets.actionbar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.actionbar';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['actionbar'] = $pyjs['loaded_modules']['widgets.actionbar'];
	$m.__track_lines__[1] = 'widgets.actionbar.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.actionbar.py, line 2:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[3] = 'widgets.actionbar.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'widgets.actionbar.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[7] = 'widgets.actionbar.py, line 7:\n    class ActionBar( html5.Div ):';
	$m.__track_lines__[11] = 'widgets.actionbar.py, line 11:\n    def __init__( self, modul, appType, currentAction=None, *args, **kwargs ):';
	$m.__track_lines__[18] = 'widgets.actionbar.py, line 18:\n    super( ActionBar, self ).__init__(  )';
	$m.__track_lines__[19] = 'widgets.actionbar.py, line 19:\n    self.actions = []';
	$m.__track_lines__[20] = 'widgets.actionbar.py, line 20:\n    self.widgets = {}';
	$m.__track_lines__[21] = 'widgets.actionbar.py, line 21:\n    self.module = modul';
	$m.__track_lines__[22] = 'widgets.actionbar.py, line 22:\n    self.appType = appType';
	$m.__track_lines__[23] = 'widgets.actionbar.py, line 23:\n    self.currentAction = currentAction';
	$m.__track_lines__[24] = 'widgets.actionbar.py, line 24:\n    self["class"].append("actionbar")';
	$m.__track_lines__[26] = 'widgets.actionbar.py, line 26:\n    def setActions(self, actions):';
	$m.__track_lines__[35] = 'widgets.actionbar.py, line 35:\n    for c in self._children[:]:';
	$m.__track_lines__[36] = 'widgets.actionbar.py, line 36:\n    self.removeChild( c )';
	$m.__track_lines__[37] = 'widgets.actionbar.py, line 37:\n    if self.currentAction is not None:';
	$m.__track_lines__[38] = 'widgets.actionbar.py, line 38:\n    h3 = html5.H3()';
	$m.__track_lines__[39] = 'widgets.actionbar.py, line 39:\n    h3["class"].append("modul_%s" % self.module)';
	$m.__track_lines__[40] = 'widgets.actionbar.py, line 40:\n    h3["class"].append("apptype_%s" %self.appType)';
	$m.__track_lines__[41] = 'widgets.actionbar.py, line 41:\n    h3["class"].append("action_%s" %self.currentAction)';
	$m.__track_lines__[43] = 'widgets.actionbar.py, line 43:\n    h3.appendChild(html5.TextNode(translate(self.currentAction)))';
	$m.__track_lines__[44] = 'widgets.actionbar.py, line 44:\n    self.appendChild(h3)';
	$m.__track_lines__[46] = 'widgets.actionbar.py, line 46:\n    self.widgets = {}';
	$m.__track_lines__[47] = 'widgets.actionbar.py, line 47:\n    self.actions = actions';
	$m.__track_lines__[49] = 'widgets.actionbar.py, line 49:\n    for action in actions:';
	$m.__track_lines__[50] = 'widgets.actionbar.py, line 50:\n    if action=="|":';
	$m.__track_lines__[51] = 'widgets.actionbar.py, line 51:\n    span = html5.Span()';
	$m.__track_lines__[52] = 'widgets.actionbar.py, line 52:\n    span["class"].append( "spacer" )';
	$m.__track_lines__[53] = 'widgets.actionbar.py, line 53:\n    self.appendChild( span )';
	$m.__track_lines__[55] = 'widgets.actionbar.py, line 55:\n    if self.module is not None and self.module in conf["modules"].keys():';
	$m.__track_lines__[56] = 'widgets.actionbar.py, line 56:\n    handler = conf["modules"][self.module]["handler"]';
	$m.__track_lines__[58] = 'widgets.actionbar.py, line 58:\n    handler = ""';
	$m.__track_lines__[60] = 'widgets.actionbar.py, line 60:\n    actionWdg = actionDelegateSelector.select( self.module, handler, action )';
	$m.__track_lines__[61] = 'widgets.actionbar.py, line 61:\n    if actionWdg is not None:';
	$m.__track_lines__[62] = 'widgets.actionbar.py, line 62:\n    actionWdg = actionWdg()';
	$m.__track_lines__[63] = 'widgets.actionbar.py, line 63:\n    self.appendChild( actionWdg )';
	$m.__track_lines__[64] = 'widgets.actionbar.py, line 64:\n    self.widgets[ action ] = actionWdg';
	$m.__track_lines__[66] = 'widgets.actionbar.py, line 66:\n    def getActions(self):';
	$m.__track_lines__[73] = 'widgets.actionbar.py, line 73:\n    return( self.actions )';
	$m.__track_lines__[75] = 'widgets.actionbar.py, line 75:\n    def resetLoadingState(self):';
	$m.__track_lines__[82] = 'widgets.actionbar.py, line 82:\n    for c in self._children[:]:';
	$m.__track_lines__[83] = 'widgets.actionbar.py, line 83:\n    if "resetLoadingState" in dir(c):';
	$m.__track_lines__[84] = 'widgets.actionbar.py, line 84:\n    c.resetLoadingState()';


	$pyjs['track']['module']='widgets.actionbar';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$m['ActionBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.actionbar';
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('__init__', function(modul, appType, currentAction) {
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
				appType = arguments[2];
				currentAction = arguments[3];
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
				if (typeof currentAction != 'undefined') {
					if (currentAction !== null && typeof currentAction['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = currentAction;
						currentAction = arguments[4];
					}
				} else 				if (typeof appType != 'undefined') {
					if (appType !== null && typeof appType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = appType;
						appType = arguments[4];
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
			if (typeof currentAction == 'undefined') currentAction=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'widgets.actionbar', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ActionBar'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=19;
			self['actions'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=20;
			self['widgets'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=21;
			self['module'] = modul;
			$pyjs['track']['lineno']=22;
			self['appType'] = appType;
			$pyjs['track']['lineno']=23;
			self['currentAction'] = currentAction;
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('actionbar');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['appType'],['currentAction', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('setActions', function(actions) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				actions = arguments[1];
			}
			var c,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,actionWdg,h3,$iter1_iter,$iter2_idx,handler,$iter1_array,$and1,$pyjs__trackstack_size_1,action,$iter2_type,span,$and2,$iter2_array,$iter1_idx;
			$pyjs['track']={'module':'widgets.actionbar', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=35;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				c = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['track']['lineno']=37;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'currentAction') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs['track']['lineno']=38;
				h3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['H3']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return h3['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr'](self, 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=40;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return h3['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('apptype_%s', $p['getattr'](self, 'appType'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=41;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return h3['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('action_%s', $p['getattr'](self, 'currentAction'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=43;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return h3['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']($p['getattr'](self, 'currentAction'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=44;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](h3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			$pyjs['track']['lineno']=46;
			self['widgets'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=47;
			self['actions'] = actions;
			$pyjs['track']['lineno']=49;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return actions;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				action = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=50;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](action, '|'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
					$pyjs['track']['lineno']=51;
					span = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs['track']['lineno']=52;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return span['__getitem__']('class')['append']('spacer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs['track']['lineno']=53;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild'](span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=55;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and1=($p['getattr'](self, 'module') !== null))?(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()['__contains__']($p['getattr'](self, 'module')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
						$pyjs['track']['lineno']=56;
						handler = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('handler');
					}
					else {
						$pyjs['track']['lineno']=58;
						handler = '';
					}
					$pyjs['track']['lineno']=60;
					actionWdg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['actionDelegateSelector']['select']($p['getattr'](self, 'module'), handler, action);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
					$pyjs['track']['lineno']=61;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((actionWdg !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
						$pyjs['track']['lineno']=62;
						actionWdg = (function(){try{try{$pyjs['in_try_except'] += 1;
						return actionWdg();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
						$pyjs['track']['lineno']=63;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['appendChild'](actionWdg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
						$pyjs['track']['lineno']=64;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'widgets')['__setitem__'](action, actionWdg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['actions']]);
		$cls_definition['setActions'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('getActions', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.actionbar', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=73;
			var $pyjs__ret = $p['getattr'](self, 'actions');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getActions'] = $method;
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter3_idx,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'widgets.actionbar', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=82;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				c = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=83;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['__contains__']('resetLoadingState'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
					$pyjs['track']['lineno']=84;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.actionbar';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ActionBar', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.actionbar */


/* end module: widgets.actionbar */


/*
PYJS_DEPS: ['html5', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
