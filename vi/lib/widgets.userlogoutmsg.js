/* start module: widgets.userlogoutmsg */
$pyjs['loaded_modules']['widgets.userlogoutmsg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.userlogoutmsg']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.userlogoutmsg'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.userlogoutmsg'];
	$m['__repr__'] = function() { return '<module: widgets.userlogoutmsg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.userlogoutmsg';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['userlogoutmsg'] = $pyjs['loaded_modules']['widgets.userlogoutmsg'];
	$m.__track_lines__[1] = 'widgets.userlogoutmsg.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.userlogoutmsg.py, line 2:\n    from network import NetworkService, DeferredCall';
	$m.__track_lines__[3] = 'widgets.userlogoutmsg.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'widgets.userlogoutmsg.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[5] = 'widgets.userlogoutmsg.py, line 5:\n    from datetime import datetime';
	$m.__track_lines__[7] = 'widgets.userlogoutmsg.py, line 7:\n    class UserLogoutMsg( html5.ext.Popup):';
	$m.__track_lines__[8] = 'widgets.userlogoutmsg.py, line 8:\n    pollInterval = 120 # We query the server once a minute';
	$m.__track_lines__[9] = 'widgets.userlogoutmsg.py, line 9:\n    checkIntervall = 1000*5 # We test if the system has been suspended every 5 seconds';
	$m.__track_lines__[11] = 'widgets.userlogoutmsg.py, line 11:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[12] = 'widgets.userlogoutmsg.py, line 12:\n    super( UserLogoutMsg, self ).__init__( title=translate("Session terminated"), *args, **kwargs )';
	$m.__track_lines__[13] = 'widgets.userlogoutmsg.py, line 13:\n    self["class"].append("userloggendoutmsg")';
	$m.__track_lines__[14] = 'widgets.userlogoutmsg.py, line 14:\n    self.isCurrentlyFailed = False';
	$m.__track_lines__[15] = 'widgets.userlogoutmsg.py, line 15:\n    self.loginWindow = None';
	$m.__track_lines__[16] = 'widgets.userlogoutmsg.py, line 16:\n    self.lastChecked = datetime.now()';
	$m.__track_lines__[17] = 'widgets.userlogoutmsg.py, line 17:\n    self.lbl = html5.Label(translate("Your session was terminated by our server. "';
	$m.__track_lines__[20] = 'widgets.userlogoutmsg.py, line 20:\n    self.appendChild(self.lbl)';
	$m.__track_lines__[21] = 'widgets.userlogoutmsg.py, line 21:\n    self.appendChild(html5.ext.Button(translate("Refresh"), callback=self.startPolling) )';
	$m.__track_lines__[22] = 'widgets.userlogoutmsg.py, line 22:\n    self.appendChild( html5.ext.Button(translate("Login"), callback=self.showLoginWindow) )';
	$m.__track_lines__[23] = 'widgets.userlogoutmsg.py, line 23:\n    setInterval = eval("window.setInterval")';
	$m.__track_lines__[24] = 'widgets.userlogoutmsg.py, line 24:\n    self.interval = setInterval(self.checkForSuspendResume, self.checkIntervall)';
	$m.__track_lines__[25] = 'widgets.userlogoutmsg.py, line 25:\n    self.hideMessage()';
	$m.__track_lines__[27] = 'widgets.userlogoutmsg.py, line 27:\n    def stopInterval(self):';
	$m.__track_lines__[28] = 'widgets.userlogoutmsg.py, line 28:\n    clearInterval = eval("window.clearInterval")';
	$m.__track_lines__[29] = 'widgets.userlogoutmsg.py, line 29:\n    clearInterval(self.interval)';
	$m.__track_lines__[31] = 'widgets.userlogoutmsg.py, line 31:\n    def hideMessage(self):';
	$m.__track_lines__[35] = 'widgets.userlogoutmsg.py, line 35:\n    self.parent()["style"]["display"]="none"';
	$m.__track_lines__[36] = 'widgets.userlogoutmsg.py, line 36:\n    self.isCurrentlyFailed = False';
	$m.__track_lines__[38] = 'widgets.userlogoutmsg.py, line 38:\n    def showMessage(self):';
	$m.__track_lines__[42] = 'widgets.userlogoutmsg.py, line 42:\n    self.parent()["style"]["display"]="block"';
	$m.__track_lines__[43] = 'widgets.userlogoutmsg.py, line 43:\n    self.isCurrentlyFailed = True';
	$m.__track_lines__[45] = 'widgets.userlogoutmsg.py, line 45:\n    def showLoginWindow(self, *args, **kwargs ):';
	$m.__track_lines__[49] = 'widgets.userlogoutmsg.py, line 49:\n    self.hideMessage()';
	$m.__track_lines__[50] = 'widgets.userlogoutmsg.py, line 50:\n    conf["theApp"].logout()';
	$m.__track_lines__[52] = 'widgets.userlogoutmsg.py, line 52:\n    def checkForSuspendResume(self,*args, **kwargs):';
	$m.__track_lines__[56] = 'widgets.userlogoutmsg.py, line 56:\n    if ((datetime.now()-self.lastChecked).seconds>self.pollInterval) or self.isCurrentlyFailed:';
	$m.__track_lines__[57] = 'widgets.userlogoutmsg.py, line 57:\n    self.lastChecked = datetime.now()';
	$m.__track_lines__[58] = 'widgets.userlogoutmsg.py, line 58:\n    self.startPolling()';
	$m.__track_lines__[60] = 'widgets.userlogoutmsg.py, line 60:\n    def startPolling(self, *args, **kwargs ):';
	$m.__track_lines__[64] = 'widgets.userlogoutmsg.py, line 64:\n    NetworkService.request("user", "view/self",';
	$m.__track_lines__[69] = 'widgets.userlogoutmsg.py, line 69:\n    def onUserTestSuccess(self,req):';
	$m.__track_lines__[73] = 'widgets.userlogoutmsg.py, line 73:\n    try:';
	$m.__track_lines__[74] = 'widgets.userlogoutmsg.py, line 74:\n    data = NetworkService.decode(req)';
	$m.__track_lines__[76] = 'widgets.userlogoutmsg.py, line 76:\n    self.showMessage()';
	$m.__track_lines__[77] = 'widgets.userlogoutmsg.py, line 77:\n    return';
	$m.__track_lines__[79] = 'widgets.userlogoutmsg.py, line 79:\n    if self.isCurrentlyFailed:';
	$m.__track_lines__[80] = 'widgets.userlogoutmsg.py, line 80:\n    if conf["currentUser"] != None and conf["currentUser"]["key"] == data["values"]["key"]:';
	$m.__track_lines__[81] = 'widgets.userlogoutmsg.py, line 81:\n    self.hideMessage()';
	$m.__track_lines__[83] = 'widgets.userlogoutmsg.py, line 83:\n    def onUserTestFail(self, text, ns):';
	$m.__track_lines__[87] = 'widgets.userlogoutmsg.py, line 87:\n    self.showMessage()';


	$pyjs['track']['module']='widgets.userlogoutmsg';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['datetime'] = $p['___import___']('datetime.datetime', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$m['UserLogoutMsg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.userlogoutmsg';
		$pyjs['track']['lineno']=8;
		$cls_definition['pollInterval'] = 120;
		$pyjs['track']['lineno']=9;
		$cls_definition['checkIntervall'] = (typeof ($mul1=1000)==typeof ($mul2=5) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2));
		$pyjs['track']['lineno']=11;
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
			var setInterval;
			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UserLogoutMsg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Session terminated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('userloggendoutmsg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=14;
			self['isCurrentlyFailed'] = false;
			$pyjs['track']['lineno']=15;
			self['loginWindow'] = null;
			$pyjs['track']['lineno']=16;
			self['lastChecked'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']['now']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=17;
			self['lbl'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Your session was terminated by our server. Perhaps your computer fall asleep and broke connection?\nPlease relogin to continue your mission.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'lbl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'startPolling')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Refresh');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'showLoginWindow')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Login');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=23;
			setInterval = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.setInterval');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=24;
			self['interval'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return setInterval($p['getattr'](self, 'checkForSuspendResume'), $p['getattr'](self, 'checkIntervall'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['hideMessage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('stopInterval', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var clearInterval;
			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			clearInterval = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.clearInterval');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return clearInterval($p['getattr'](self, 'interval'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopInterval'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('hideMessage', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=36;
			self['isCurrentlyFailed'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hideMessage'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('showMessage', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=43;
			self['isCurrentlyFailed'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showMessage'] = $method;
		$pyjs['track']['lineno']=45;
		$method = $pyjs__bind_method2('showLoginWindow', function() {
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

			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['hideMessage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('theApp')['logout']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['showLoginWindow'] = $method;
		$pyjs['track']['lineno']=52;
		$method = $pyjs__bind_method2('checkForSuspendResume', function() {
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
			var $or1,$or2,$sub2,$sub1;
			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=56;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=($p['cmp']($p['getattr']($p['__op_sub']($sub1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']['now']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(),$sub2=$p['getattr'](self, 'lastChecked')), 'seconds'), $p['getattr'](self, 'pollInterval')) == 1))?$or1:$p['getattr'](self, 'isCurrentlyFailed')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs['track']['lineno']=57;
				self['lastChecked'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['datetime']['now']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=58;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['startPolling']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['checkForSuspendResume'] = $method;
		$pyjs['track']['lineno']=60;
		$method = $pyjs__bind_method2('startPolling', function() {
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

			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onUserTestSuccess'), 'failureHandler':$p['getattr'](self, 'onUserTestFail'), 'cacheable':false}, 'user', 'view/self']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['startPolling'] = $method;
		$pyjs['track']['lineno']=69;
		$method = $pyjs__bind_method2('onUserTestSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $and1,$pyjs_try_err,data,$and2;
			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=73;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=74;
					data = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				} finally { $pyjs['in_try_except'] -= 1; }
			} catch($pyjs_try_err) {
				$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
				$pyjs['__active_exception_stack__'] = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.userlogoutmsg';
				if (true) {
					$pyjs['track']['lineno']=76;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['showMessage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['track']['lineno']=77;
					$pyjs['track']['lineno']=77;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=79;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isCurrentlyFailed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs['track']['lineno']=80;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=!$p['op_eq']($m['conf']['__getitem__']('currentUser'), null))?$p['op_eq']($m['conf']['__getitem__']('currentUser')['__getitem__']('key'), data['__getitem__']('values')['__getitem__']('key')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs['track']['lineno']=81;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['hideMessage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onUserTestSuccess'] = $method;
		$pyjs['track']['lineno']=83;
		$method = $pyjs__bind_method2('onUserTestFail', function(text, ns) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				ns = arguments[2];
			}

			$pyjs['track']={'module':'widgets.userlogoutmsg', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.userlogoutmsg';
			$pyjs['track']['lineno']=83;
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['showMessage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['text'],['ns']]);
		$cls_definition['onUserTestFail'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserLogoutMsg', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.userlogoutmsg */


/* end module: widgets.userlogoutmsg */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'network.DeferredCall', 'config.conf', 'config', 'i18n.translate', 'i18n', 'datetime.datetime', 'datetime']
*/
