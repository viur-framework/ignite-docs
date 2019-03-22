/* start module: html5.ext.inputdialog */
$pyjs['loaded_modules']['html5.ext.inputdialog'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.inputdialog']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.inputdialog'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.inputdialog'];
	$m['__repr__'] = function() { return '<module: html5.ext.inputdialog>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.inputdialog';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.ext']['inputdialog'] = $pyjs['loaded_modules']['html5.ext.inputdialog'];
	$m.__track_lines__[1] = 'html5.ext.inputdialog.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'html5.ext.inputdialog.py, line 2:\n    from html5.ext.popup import Popup';
	$m.__track_lines__[3] = 'html5.ext.inputdialog.py, line 3:\n    from html5.ext.button import Button';
	$m.__track_lines__[5] = 'html5.ext.inputdialog.py, line 5:\n    class InputDialog( Popup ):';
	$m.__track_lines__[6] = 'html5.ext.inputdialog.py, line 6:\n    def __init__(self, text, value="", successHandler=None, abortHandler=None, successLbl="OK", abortLbl="Cancel", *args, **kwargs ):';
	$m.__track_lines__[7] = 'html5.ext.inputdialog.py, line 7:\n    super( InputDialog, self ).__init__(*args, **kwargs)';
	$m.__track_lines__[8] = 'html5.ext.inputdialog.py, line 8:\n    self["class"].append("inputdialog")';
	$m.__track_lines__[9] = 'html5.ext.inputdialog.py, line 9:\n    self.successHandler = successHandler';
	$m.__track_lines__[10] = 'html5.ext.inputdialog.py, line 10:\n    self.abortHandler = abortHandler';
	$m.__track_lines__[12] = 'html5.ext.inputdialog.py, line 12:\n    span = html5.Span()';
	$m.__track_lines__[13] = 'html5.ext.inputdialog.py, line 13:\n    span.element.innerHTML = text';
	$m.__track_lines__[14] = 'html5.ext.inputdialog.py, line 14:\n    self.appendChild(span)';
	$m.__track_lines__[15] = 'html5.ext.inputdialog.py, line 15:\n    self.inputElem = html5.Input()';
	$m.__track_lines__[16] = 'html5.ext.inputdialog.py, line 16:\n    self.inputElem["type"] = "text"';
	$m.__track_lines__[17] = 'html5.ext.inputdialog.py, line 17:\n    self.inputElem["value"] = value';
	$m.__track_lines__[18] = 'html5.ext.inputdialog.py, line 18:\n    self.appendChild( self.inputElem )';
	$m.__track_lines__[19] = 'html5.ext.inputdialog.py, line 19:\n    okayBtn = Button(successLbl, self.onOkay)';
	$m.__track_lines__[20] = 'html5.ext.inputdialog.py, line 20:\n    okayBtn["class"].append("btn_okay")';
	$m.__track_lines__[21] = 'html5.ext.inputdialog.py, line 21:\n    self.appendChild(okayBtn)';
	$m.__track_lines__[22] = 'html5.ext.inputdialog.py, line 22:\n    cancelBtn = Button(abortLbl, self.onCancel)';
	$m.__track_lines__[23] = 'html5.ext.inputdialog.py, line 23:\n    cancelBtn["class"].append("btn_cancel")';
	$m.__track_lines__[24] = 'html5.ext.inputdialog.py, line 24:\n    self.appendChild(cancelBtn)';
	$m.__track_lines__[25] = 'html5.ext.inputdialog.py, line 25:\n    self.sinkEvent("onkeydown")';
	$m.__track_lines__[26] = 'html5.ext.inputdialog.py, line 26:\n    self.inputElem.focus()';
	$m.__track_lines__[28] = 'html5.ext.inputdialog.py, line 28:\n    def onkeydown(self, event):';
	$m.__track_lines__[29] = "html5.ext.inputdialog.py, line 29:\n    if hasattr(event, 'key'):";
	$m.__track_lines__[30] = 'html5.ext.inputdialog.py, line 30:\n    key = event.key';
	$m.__track_lines__[33] = "html5.ext.inputdialog.py, line 33:\n    if event.keyIdentifier in ['Esc', 'U+001B']:";
	$m.__track_lines__[34] = "html5.ext.inputdialog.py, line 34:\n    key = 'Escape'";
	$m.__track_lines__[36] = 'html5.ext.inputdialog.py, line 36:\n    key = event.keyIdentifier';
	$m.__track_lines__[37] = "html5.ext.inputdialog.py, line 37:\n    if 'Enter' == key:";
	$m.__track_lines__[38] = 'html5.ext.inputdialog.py, line 38:\n    event.stopPropagation()';
	$m.__track_lines__[39] = 'html5.ext.inputdialog.py, line 39:\n    event.preventDefault()';
	$m.__track_lines__[40] = 'html5.ext.inputdialog.py, line 40:\n    self.onOkay()';
	$m.__track_lines__[42] = 'html5.ext.inputdialog.py, line 42:\n    event.stopPropagation()';
	$m.__track_lines__[43] = 'html5.ext.inputdialog.py, line 43:\n    event.preventDefault()';
	$m.__track_lines__[44] = 'html5.ext.inputdialog.py, line 44:\n    self.onCancel()';
	$m.__track_lines__[46] = 'html5.ext.inputdialog.py, line 46:\n    def onOkay(self, *args, **kwargs):';
	$m.__track_lines__[47] = 'html5.ext.inputdialog.py, line 47:\n    if self.successHandler:';
	$m.__track_lines__[48] = 'html5.ext.inputdialog.py, line 48:\n    self.successHandler( self, self.inputElem["value"] )';
	$m.__track_lines__[49] = 'html5.ext.inputdialog.py, line 49:\n    self.close()';
	$m.__track_lines__[51] = 'html5.ext.inputdialog.py, line 51:\n    def onCancel(self, *args, **kwargs):';
	$m.__track_lines__[52] = 'html5.ext.inputdialog.py, line 52:\n    if self.abortHandler:';
	$m.__track_lines__[53] = 'html5.ext.inputdialog.py, line 53:\n    self.abortHandler( self, self.inputElem["value"] )';
	$m.__track_lines__[54] = 'html5.ext.inputdialog.py, line 54:\n    self.close()';


	$pyjs['track']['module']='html5.ext.inputdialog';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'html5.ext');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Popup'] = $p['___import___']('html5.ext.popup.Popup', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Button'] = $p['___import___']('html5.ext.button.Button', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['InputDialog'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.inputdialog';
		$pyjs['track']['lineno']=6;
		$method = $pyjs__bind_method2('__init__', function(text, value, successHandler, abortHandler, successLbl, abortLbl) {
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
				text = arguments[1];
				value = arguments[2];
				successHandler = arguments[3];
				abortHandler = arguments[4];
				successLbl = arguments[5];
				abortLbl = arguments[6];
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
				if (typeof abortLbl != 'undefined') {
					if (abortLbl !== null && typeof abortLbl['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = abortLbl;
						abortLbl = arguments[7];
					}
				} else 				if (typeof successLbl != 'undefined') {
					if (successLbl !== null && typeof successLbl['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = successLbl;
						successLbl = arguments[7];
					}
				} else 				if (typeof abortHandler != 'undefined') {
					if (abortHandler !== null && typeof abortHandler['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = abortHandler;
						abortHandler = arguments[7];
					}
				} else 				if (typeof successHandler != 'undefined') {
					if (successHandler !== null && typeof successHandler['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = successHandler;
						successHandler = arguments[7];
					}
				} else 				if (typeof value != 'undefined') {
					if (value !== null && typeof value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = value;
						value = arguments[7];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			if (typeof successHandler == 'undefined') successHandler=arguments['callee']['__args__'][5][1];
			if (typeof abortHandler == 'undefined') abortHandler=arguments['callee']['__args__'][6][1];
			if (typeof successLbl == 'undefined') successLbl=arguments['callee']['__args__'][7][1];
			if (typeof abortLbl == 'undefined') abortLbl=arguments['callee']['__args__'][8][1];
			var span,cancelBtn,okayBtn;
			$pyjs['track']={'module':'html5.ext.inputdialog', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.inputdialog';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['InputDialog'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('inputdialog');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=9;
			self['successHandler'] = successHandler;
			$pyjs['track']['lineno']=10;
			self['abortHandler'] = abortHandler;
			$pyjs['track']['lineno']=12;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=13;
			$p['getattr'](span, 'element')['innerHTML'] = text;
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=15;
			self['inputElem'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'inputElem')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'inputElem')['__setitem__']('value', value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'inputElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=19;
			okayBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Button'](successLbl, $p['getattr'](self, 'onOkay'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return okayBtn['__getitem__']('class')['append']('btn_okay');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](okayBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=22;
			cancelBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Button'](abortLbl, $p['getattr'](self, 'onCancel'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return cancelBtn['__getitem__']('class')['append']('btn_cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](cancelBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onkeydown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=26;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['inputElem']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['text'],['value', ''],['successHandler', null],['abortHandler', null],['successLbl', 'OK'],['abortLbl', 'Cancel']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=28;
		$method = $pyjs__bind_method2('onkeydown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var key;
			$pyjs['track']={'module':'html5.ext.inputdialog', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.inputdialog';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=29;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'key');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=30;
				key = $p['getattr'](event, 'key');
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'keyIdentifier');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs['track']['lineno']=33;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['Esc', 'U+001B']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__contains__']($p['getattr'](event, 'keyIdentifier')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
					$pyjs['track']['lineno']=34;
					key = 'Escape';
				}
				else {
					$pyjs['track']['lineno']=36;
					key = $p['getattr'](event, 'keyIdentifier');
				}
			}
			$pyjs['track']['lineno']=37;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']('Enter', key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=38;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=40;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onOkay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']('Escape', key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=42;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['track']['lineno']=43;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=44;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onCancel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onkeydown'] = $method;
		$pyjs['track']['lineno']=46;
		$method = $pyjs__bind_method2('onOkay', function() {
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

			$pyjs['track']={'module':'html5.ext.inputdialog', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.inputdialog';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'successHandler'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
				$pyjs['track']['lineno']=48;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['successHandler'](self, $p['getattr'](self, 'inputElem')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			}
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onOkay'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('onCancel', function() {
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

			$pyjs['track']={'module':'html5.ext.inputdialog', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.inputdialog';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'abortHandler'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['abortHandler'](self, $p['getattr'](self, 'inputElem')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onCancel'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('InputDialog', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.ext.inputdialog */


/* end module: html5.ext.inputdialog */


/*
PYJS_DEPS: ['html5', 'html5.ext.popup.Popup', 'html5.ext', 'html5.ext.popup', 'html5.ext.button.Button', 'html5.ext.button']
*/
