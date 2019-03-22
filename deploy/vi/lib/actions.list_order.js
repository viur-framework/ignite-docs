/* start module: actions.list_order */
$pyjs['loaded_modules']['actions.list_order'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.list_order']['__was_initialized__']) return $pyjs['loaded_modules']['actions.list_order'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.list_order'];
	$m['__repr__'] = function() { return '<module: actions.list_order>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.list_order';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['actions']['list_order'] = $pyjs['loaded_modules']['actions.list_order'];
	$m.__track_lines__[1] = 'actions.list_order.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'actions.list_order.py, line 2:\n    from network import NetworkService';
	$m.__track_lines__[3] = 'actions.list_order.py, line 3:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[4] = 'actions.list_order.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'actions.list_order.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[8] = 'actions.list_order.py, line 8:\n    class ShopMarkAction( html5.ext.Button ):';
	$m.__track_lines__[9] = 'actions.list_order.py, line 9:\n    def __init__(self, action, title, cls="", txtQuestion=None, txtSuccess=None, txtFailure=None, *args, **kwargs):';
	$m.__track_lines__[10] = 'actions.list_order.py, line 10:\n    super( ShopMarkAction, self ).__init__( translate( title ), *args, **kwargs )';
	$m.__track_lines__[13] = 'actions.list_order.py, line 13:\n    self["disabled"] = True';
	$m.__track_lines__[14] = 'actions.list_order.py, line 14:\n    self.isDisabled = True';
	$m.__track_lines__[16] = 'actions.list_order.py, line 16:\n    self.action = action';
	$m.__track_lines__[17] = 'actions.list_order.py, line 17:\n    self.txtQuestion = txtQuestion';
	$m.__track_lines__[18] = 'actions.list_order.py, line 18:\n    self.txtSuccess = txtSuccess';
	$m.__track_lines__[19] = 'actions.list_order.py, line 19:\n    self.txtFailure = txtFailure';
	$m.__track_lines__[21] = 'actions.list_order.py, line 21:\n    self.done = 0';
	$m.__track_lines__[22] = 'actions.list_order.py, line 22:\n    self.failed = 0';
	$m.__track_lines__[23] = 'actions.list_order.py, line 23:\n    self.total = 0';
	$m.__track_lines__[25] = 'actions.list_order.py, line 25:\n    def onAttach(self):';
	$m.__track_lines__[26] = 'actions.list_order.py, line 26:\n    super(ShopMarkAction,self).onAttach()';
	$m.__track_lines__[27] = 'actions.list_order.py, line 27:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[29] = 'actions.list_order.py, line 29:\n    def onDetach(self):';
	$m.__track_lines__[30] = 'actions.list_order.py, line 30:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[31] = 'actions.list_order.py, line 31:\n    super(ShopMarkAction,self).onDetach()';
	$m.__track_lines__[33] = 'actions.list_order.py, line 33:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[34] = 'actions.list_order.py, line 34:\n    if len( selection ):';
	$m.__track_lines__[35] = 'actions.list_order.py, line 35:\n    if self.isDisabled:';
	$m.__track_lines__[36] = 'actions.list_order.py, line 36:\n    self.isDisabled = False';
	$m.__track_lines__[37] = 'actions.list_order.py, line 37:\n    self["disabled"] = False';
	$m.__track_lines__[39] = 'actions.list_order.py, line 39:\n    if not self.isDisabled:';
	$m.__track_lines__[40] = 'actions.list_order.py, line 40:\n    self["disabled"] = True';
	$m.__track_lines__[41] = 'actions.list_order.py, line 41:\n    self.isDisabled = True';
	$m.__track_lines__[43] = 'actions.list_order.py, line 43:\n    def setPayed(self, order ):';
	$m.__track_lines__[44] = 'actions.list_order.py, line 44:\n    NetworkService.request( self.parent().parent().module, self.action,';
	$m.__track_lines__[49] = 'actions.list_order.py, line 49:\n    def setPayedSucceeded(self, response):';
	$m.__track_lines__[50] = 'actions.list_order.py, line 50:\n    self.done += 1';
	$m.__track_lines__[52] = 'actions.list_order.py, line 52:\n    if self.done + self.failed == self.total:';
	$m.__track_lines__[53] = 'actions.list_order.py, line 53:\n    conf["mainWindow"].log("success", translate( self.txtSuccess, count=self.done ) )';
	$m.__track_lines__[54] = 'actions.list_order.py, line 54:\n    NetworkService.notifyChange( self.parent().parent().module )';
	$m.__track_lines__[56] = 'actions.list_order.py, line 56:\n    def setPayedFailed(self, response):';
	$m.__track_lines__[57] = 'actions.list_order.py, line 57:\n    conf["mainWindow"].log( "error", translate( self.txtFailure ) )';
	$m.__track_lines__[58] = 'actions.list_order.py, line 58:\n    self.failed += 1';
	$m.__track_lines__[60] = 'actions.list_order.py, line 60:\n    def doMarkPayed( self, *args, **kwargs ):';
	$m.__track_lines__[61] = 'actions.list_order.py, line 61:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[62] = 'actions.list_order.py, line 62:\n    if not selection:';
	$m.__track_lines__[63] = 'actions.list_order.py, line 63:\n    return';
	$m.__track_lines__[65] = 'actions.list_order.py, line 65:\n    self.done = 0';
	$m.__track_lines__[66] = 'actions.list_order.py, line 66:\n    self.total = len( selection )';
	$m.__track_lines__[68] = 'actions.list_order.py, line 68:\n    for item in selection:';
	$m.__track_lines__[69] = 'actions.list_order.py, line 69:\n    self.setPayed( item )';
	$m.__track_lines__[71] = 'actions.list_order.py, line 71:\n    def onClick(self, sender=None):';
	$m.__track_lines__[72] = 'actions.list_order.py, line 72:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[73] = 'actions.list_order.py, line 73:\n    if not selection:';
	$m.__track_lines__[74] = 'actions.list_order.py, line 74:\n    return';
	$m.__track_lines__[76] = 'actions.list_order.py, line 76:\n    html5.ext.YesNoDialog( translate( self.txtQuestion, count=len( selection ) ),';
	$m.__track_lines__[81] = 'actions.list_order.py, line 81:\n    class ShopMarkPayedAction( ShopMarkAction ):';
	$m.__track_lines__[82] = 'actions.list_order.py, line 82:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[84] = 'actions.list_order.py, line 83:\n    super( ShopMarkPayedAction, self ).__init__( ... "markPayed", "Mark payed", cls="order_markpayed",';
	$m.__track_lines__[90] = 'actions.list_order.py, line 89:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[91] = 'actions.list_order.py, line 91:\n    return actionName == "markpayed" and handler == "list.order"';
	$m.__track_lines__[93] = 'actions.list_order.py, line 93:\n    actionDelegateSelector.insert( 1, ShopMarkPayedAction.isSuitableFor, ShopMarkPayedAction )';
	$m.__track_lines__[97] = 'actions.list_order.py, line 97:\n    class ShopMarkSentAction( ShopMarkAction ):';
	$m.__track_lines__[98] = 'actions.list_order.py, line 98:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[100] = 'actions.list_order.py, line 99:\n    super( ShopMarkSentAction, self ).__init__( ... "markSend", "Mark sent", cls="order_marksent",';
	$m.__track_lines__[106] = 'actions.list_order.py, line 105:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[107] = 'actions.list_order.py, line 107:\n    return actionName == "marksent" and handler == "list.order"';
	$m.__track_lines__[109] = 'actions.list_order.py, line 109:\n    actionDelegateSelector.insert( 1, ShopMarkSentAction.isSuitableFor, ShopMarkSentAction )';
	$m.__track_lines__[113] = 'actions.list_order.py, line 113:\n    class ShopMarkCanceledAction( ShopMarkAction ):';
	$m.__track_lines__[114] = 'actions.list_order.py, line 114:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[116] = 'actions.list_order.py, line 115:\n    super( ShopMarkCanceledAction, self ).__init__( ... "markCanceled", "Mark canceled", cls="order_markcanceled",';
	$m.__track_lines__[122] = 'actions.list_order.py, line 121:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[123] = 'actions.list_order.py, line 123:\n    return actionName == "markcanceled" and handler == "list.order"';
	$m.__track_lines__[125] = 'actions.list_order.py, line 125:\n    actionDelegateSelector.insert( 1, ShopMarkCanceledAction.isSuitableFor, ShopMarkCanceledAction )';


	$pyjs['track']['module']='actions.list_order';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'actions');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['ShopMarkAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list_order';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('__init__', function(action, title, cls, txtQuestion, txtSuccess, txtFailure) {
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
				action = arguments[1];
				title = arguments[2];
				cls = arguments[3];
				txtQuestion = arguments[4];
				txtSuccess = arguments[5];
				txtFailure = arguments[6];
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
				if (typeof txtFailure != 'undefined') {
					if (txtFailure !== null && typeof txtFailure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txtFailure;
						txtFailure = arguments[7];
					}
				} else 				if (typeof txtSuccess != 'undefined') {
					if (txtSuccess !== null && typeof txtSuccess['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txtSuccess;
						txtSuccess = arguments[7];
					}
				} else 				if (typeof txtQuestion != 'undefined') {
					if (txtQuestion !== null && typeof txtQuestion['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txtQuestion;
						txtQuestion = arguments[7];
					}
				} else 				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[7];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[7];
					}
				} else 				if (typeof action != 'undefined') {
					if (action !== null && typeof action['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = action;
						action = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof cls == 'undefined') cls=arguments['callee']['__args__'][5][1];
			if (typeof txtQuestion == 'undefined') txtQuestion=arguments['callee']['__args__'][6][1];
			if (typeof txtSuccess == 'undefined') txtSuccess=arguments['callee']['__args__'][7][1];
			if (typeof txtFailure == 'undefined') txtFailure=arguments['callee']['__args__'][8][1];

			$pyjs['track']={'module':'actions.list_order', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate'](title);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=14;
			self['isDisabled'] = true;
			$pyjs['track']['lineno']=16;
			self['action'] = action;
			$pyjs['track']['lineno']=17;
			self['txtQuestion'] = txtQuestion;
			$pyjs['track']['lineno']=18;
			self['txtSuccess'] = txtSuccess;
			$pyjs['track']['lineno']=19;
			self['txtFailure'] = txtFailure;
			$pyjs['track']['lineno']=21;
			self['done'] = 0;
			$pyjs['track']['lineno']=22;
			self['failed'] = 0;
			$pyjs['track']['lineno']=23;
			self['total'] = 0;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['action'],['title'],['cls', ''],['txtQuestion', null],['txtSuccess', null],['txtFailure', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=25;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list_order', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list_order', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=33;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list_order', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=35;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs['track']['lineno']=36;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=37;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=39;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs['track']['lineno']=40;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					$pyjs['track']['lineno']=41;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('setPayed', function(order) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				order = arguments[1];
			}

			$pyjs['track']={'module':'actions.list_order', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'setPayedSucceeded'), 'failureHandler':$p['getattr'](self, 'setPayedFailed')}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), 'module'), $p['getattr'](self, 'action'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['key', order['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['order']]);
		$cls_definition['setPayed'] = $method;
		$pyjs['track']['lineno']=49;
		$method = $pyjs__bind_method2('setPayedSucceeded', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var $add2,$add3,$add1,$add4;
			$pyjs['track']={'module':'actions.list_order', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			self['done'] = $p['__op_add']($add1=$p['getattr'](self, 'done'),$add2=1);
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['__op_add']($add3=$p['getattr'](self, 'done'),$add4=$p['getattr'](self, 'failed')), $p['getattr'](self, 'total')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('success', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['getattr'](self, 'done')}, $p['getattr'](self, 'txtSuccess')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=54;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['NetworkService']['notifyChange']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['setPayedSucceeded'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('setPayedFailed', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var $add6,$add5;
			$pyjs['track']={'module':'actions.list_order', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('error', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']($p['getattr'](self, 'txtFailure'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=58;
			self['failed'] = $p['__op_add']($add5=$p['getattr'](self, 'failed'),$add6=1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['setPayedFailed'] = $method;
		$pyjs['track']['lineno']=60;
		$method = $pyjs__bind_method2('doMarkPayed', function() {
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
			var selection,$iter1_nextval,$iter1_type,$iter1_iter,item,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs['track']={'module':'actions.list_order', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=61;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=62;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=63;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=65;
			self['done'] = 0;
			$pyjs['track']['lineno']=66;
			self['total'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['track']['lineno']=68;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				item = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=69;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPayed'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list_order';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doMarkPayed'] = $method;
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection;
			$pyjs['track']={'module':'actions.list_order', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=72;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=73;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Mark payed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), 'yesCallback':$p['getattr'](self, 'doMarkPayed')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()}, $p['getattr'](self, 'txtQuestion')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ShopMarkAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=81;
	$m['ShopMarkPayedAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list_order';
		$pyjs['track']['lineno']=82;
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

			$pyjs['track']={'module':'actions.list_order', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkPayedAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})(), '__init__', null, null, [{'cls':'order_markpayed', 'txtQuestion':'Do you really want to mark {count} orders as payed?', 'txtSuccess':'{count} orders had been successfully set as payed.', 'txtFailure':'Failed to mark order payed'}, 'markPayed', 'Mark payed']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and2,$and1;
			$pyjs['track']={'module':'actions.list_order', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=91;
			var $pyjs__ret = ($p['bool']($and1=$p['op_eq'](actionName, 'markpayed'))?$p['op_eq'](handler, 'list.order'):$and1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=81;
		var $bases = new Array($m['ShopMarkAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ShopMarkPayedAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=93;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ShopMarkPayedAction'], 'isSuitableFor'), $m['ShopMarkPayedAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
	$pyjs['track']['lineno']=97;
	$m['ShopMarkSentAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list_order';
		$pyjs['track']['lineno']=98;
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

			$pyjs['track']={'module':'actions.list_order', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkSentAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), '__init__', null, null, [{'cls':'order_marksent', 'txtQuestion':'Do you really want to mark {count} orders as sent?', 'txtSuccess':'{count} orders had been successfully set as sent.', 'txtFailure':'Failed to mark order sent'}, 'markSend', 'Mark sent']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=106;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and3,$and4;
			$pyjs['track']={'module':'actions.list_order', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=107;
			var $pyjs__ret = ($p['bool']($and3=$p['op_eq'](actionName, 'marksent'))?$p['op_eq'](handler, 'list.order'):$and3);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=97;
		var $bases = new Array($m['ShopMarkAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ShopMarkSentAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=109;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ShopMarkSentAction'], 'isSuitableFor'), $m['ShopMarkSentAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
	$pyjs['track']['lineno']=113;
	$m['ShopMarkCanceledAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list_order';
		$pyjs['track']['lineno']=114;
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

			$pyjs['track']={'module':'actions.list_order', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ShopMarkCanceledAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(), '__init__', null, null, [{'cls':'order_markcanceled', 'txtQuestion':'Do you really want to cancel {count} orders?', 'txtSuccess':'{count} orders had been successfully canceled.', 'txtFailure':'Failed to cancel order'}, 'markCanceled', 'Mark canceled']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=122;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and6,$and5;
			$pyjs['track']={'module':'actions.list_order', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list_order';
			$pyjs['track']['lineno']=122;
			$pyjs['track']['lineno']=123;
			$pyjs['track']['lineno']=123;
			var $pyjs__ret = ($p['bool']($and5=$p['op_eq'](actionName, 'markcanceled'))?$p['op_eq'](handler, 'list.order'):$and5);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=113;
		var $bases = new Array($m['ShopMarkAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ShopMarkCanceledAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=125;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ShopMarkCanceledAction'], 'isSuitableFor'), $m['ShopMarkCanceledAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
	return this;
}; /* end actions.list_order */


/* end module: actions.list_order */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
