/* start module: main */
$pyjs['loaded_modules']['main'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['main']['__was_initialized__']) return $pyjs['loaded_modules']['main'];
	var $m = $pyjs['loaded_modules']['main'];
	$m['__repr__'] = function() { return '<module: main>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'main.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'main.py, line 2:\n    import html5, i18n, pyjd, network';
	$m.__track_lines__[4] = 'main.py, line 4:\n    from login import LoginScreen';
	$m.__track_lines__[5] = 'main.py, line 5:\n    from admin import AdminScreen';
	$m.__track_lines__[6] = 'main.py, line 6:\n    from config import conf';
	$m.__track_lines__[7] = 'main.py, line 7:\n    from i18n import translate';
	$m.__track_lines__[9] = 'main.py, line 9:\n    try:';
	$m.__track_lines__[10] = 'main.py, line 10:\n    import vi_plugins';
	$m.__track_lines__[12] = 'main.py, line 12:\n    pass';
	$m.__track_lines__[14] = 'main.py, line 14:\n    class Application(html5.Div):';
	$m.__track_lines__[15] = 'main.py, line 15:\n    def __init__(self):';
	$m.__track_lines__[16] = 'main.py, line 16:\n    super(Application, self).__init__()';
	$m.__track_lines__[17] = 'main.py, line 17:\n    self["class"].append("vi-application")';
	$m.__track_lines__[18] = 'main.py, line 18:\n    conf["theApp"] = self';
	$m.__track_lines__[21] = 'main.py, line 21:\n    self.loginScreen = None';
	$m.__track_lines__[22] = 'main.py, line 22:\n    self.adminScreen = None';
	$m.__track_lines__[24] = 'main.py, line 24:\n    self.startup()';
	$m.__track_lines__[26] = 'main.py, line 26:\n    def startup(self, *args, **kwargs):';
	$m.__track_lines__[29] = 'main.py, line 29:\n    if conf["server.version"] is None:';
	$m.__track_lines__[30] = 'main.py, line 30:\n    network.NetworkService.request(None, "/vi/getVersion",';
	$m.__track_lines__[35] = 'main.py, line 35:\n    network.NetworkService.request(None, "/vi/config",';
	$m.__track_lines__[40] = 'main.py, line 40:\n    def getVersionSuccess(self, req):';
	$m.__track_lines__[41] = 'main.py, line 41:\n    conf["server.version"] = network.NetworkService.decode(req)';
	$m.__track_lines__[43] = 'main.py, line 43:\n    if ((conf["server.version"][0] >= 0                              # check version?';
	$m.__track_lines__[47] = 'main.py, line 47:\n    params = {';
	$m.__track_lines__[52] = 'main.py, line 52:\n    conf["server.version"] = None';
	$m.__track_lines__[55] = 'main.py, line 54:\n    html5.ext.Alert( ... translate("The ViUR server (v{server.version}) is incompatible to this Vi (v{vi.version}).", **params)';
	$m.__track_lines__[62] = 'main.py, line 62:\n    return';
	$m.__track_lines__[64] = 'main.py, line 64:\n    self.startup()';
	$m.__track_lines__[66] = 'main.py, line 66:\n    def getConfigSuccess(self, req):';
	$m.__track_lines__[67] = 'main.py, line 67:\n    conf["mainConfig"] = network.NetworkService.decode(req)';
	$m.__track_lines__[69] = 'main.py, line 69:\n    if not self.adminScreen:';
	$m.__track_lines__[70] = 'main.py, line 70:\n    self.adminScreen = AdminScreen()';
	$m.__track_lines__[72] = 'main.py, line 72:\n    self.adminScreen.invoke()';
	$m.__track_lines__[74] = 'main.py, line 74:\n    def startupFailure(self, req, err):';
	$m.__track_lines__[75] = 'main.py, line 75:\n    if err in [403, 401]:';
	$m.__track_lines__[76] = 'main.py, line 76:\n    self.login()';
	$m.__track_lines__[79] = 'main.py, line 78:\n    html5.ext.Alert( ... translate("The connection to the server could not be correctly established."),';
	$m.__track_lines__[85] = 'main.py, line 85:\n    def login(self, logout=False):';
	$m.__track_lines__[86] = 'main.py, line 86:\n    if not self.loginScreen:';
	$m.__track_lines__[87] = 'main.py, line 87:\n    self.loginScreen = LoginScreen()';
	$m.__track_lines__[89] = 'main.py, line 89:\n    self.loginScreen.invoke(logout=logout)';
	$m.__track_lines__[91] = 'main.py, line 91:\n    def admin(self):';
	$m.__track_lines__[92] = 'main.py, line 92:\n    if self.loginScreen:';
	$m.__track_lines__[93] = 'main.py, line 93:\n    self.loginScreen.hide()';
	$m.__track_lines__[95] = 'main.py, line 95:\n    self.startup()';
	$m.__track_lines__[97] = 'main.py, line 97:\n    def logout(self):';
	$m.__track_lines__[98] = 'main.py, line 98:\n    self.adminScreen.remove()';
	$m.__track_lines__[99] = 'main.py, line 99:\n    conf["mainWindow"] = self.adminScreen = None';
	$m.__track_lines__[100] = 'main.py, line 100:\n    self.login(logout=True)';
	$m.__track_lines__[102] = "main.py, line 102:\n    if __name__ == '__main__':";
	$m.__track_lines__[103] = 'main.py, line 103:\n    pyjd.setup("public/main.html")';
	$m.__track_lines__[106] = 'main.py, line 106:\n    network.NetworkService.prefix = "/vi"';
	$m.__track_lines__[107] = 'main.py, line 107:\n    conf["currentlanguage"] = i18n.getLanguage()';
	$m.__track_lines__[110] = 'main.py, line 110:\n    app = Application()';
	$m.__track_lines__[111] = 'main.py, line 111:\n    html5.Body().appendChild(app)';
	$m.__track_lines__[113] = 'main.py, line 113:\n    pyjd.run()';
	var $pyjs_try_err;

	$pyjs['track']['module']='main';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['i18n'] = $p['___import___']('i18n', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['network'] = $p['___import___']('network', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['LoginScreen'] = $p['___import___']('login.LoginScreen', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['AdminScreen'] = $p['___import___']('admin.AdminScreen', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
	try {
		try {
			$pyjs['in_try_except'] += 1;
			$pyjs['track']['lineno']=10;
			$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
			$m['vi_plugins'] = $p['___import___']('vi_plugins', null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
		$pyjs['track']['module']='main';
		if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$pyjs['track']['lineno']=12;
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	$pyjs['track']['lineno']=14;
	$m['Application'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'main';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'main', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Application'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('vi-application');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('theApp', self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=21;
			self['loginScreen'] = null;
			$pyjs['track']['lineno']=22;
			self['adminScreen'] = null;
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['startup']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('startup', function() {
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

			$pyjs['track']={'module':'main', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=29;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($m['conf']['__getitem__']('server.version') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=30;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['network']['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getVersionSuccess'), 'failureHandler':$p['getattr'](self, 'startupFailure'), 'cacheable':true}, null, '/vi/getVersion']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['network']['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getConfigSuccess'), 'failureHandler':$p['getattr'](self, 'startupFailure'), 'cacheable':true}, null, '/vi/config']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['startup'] = $method;
		$pyjs['track']['lineno']=40;
		$method = $pyjs__bind_method2('getVersionSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $iter1_nextval,$iter1_iter,$iter2_type,$iter2_iter,params,$iter1_array,$or1,$or2,$and1,$and2,$iter2_idx,$iter2_nextval,$iter1_type,$add2,$add3,$add1,$iter1_idx,$add4,x,$iter2_array;
			$pyjs['track']={'module':'main', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('server.version', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['network']['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=43;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=((($p['cmp']($m['conf']['__getitem__']('server.version')['__getitem__'](0), 0))|1) == 1))?($p['bool']($or1=!$p['op_eq']($m['conf']['__getitem__']('server.version')['__getitem__'](0), $m['conf']['__getitem__']('vi.version')['__getitem__'](0)))?$or1:($p['cmp']($m['conf']['__getitem__']('server.version')['__getitem__'](1), $m['conf']['__getitem__']('vi.version')['__getitem__'](1)) == 1)):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=47;
				params = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['server.version', (function(){try{try{$pyjs['in_try_except'] += 1;
				return '.'['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter1_iter = $m['conf']['__getitem__']('server.version');
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								x = $iter1_nextval['$nextval'];
								$yield_value = $p['str'](x);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()], ['vi.version', (function(){try{try{$pyjs['in_try_except'] += 1;
				return '.'['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter2_iter = $m['conf']['__getitem__']('vi.version');
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								x = $iter2_nextval['$nextval'];
								$yield_value = $p['str'](x);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=52;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__setitem__']('server.version', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=55;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['html5']['ext'], 'Alert', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Version mismatch');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), 'okCallback':$p['getattr'](self, 'startup'), 'okLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Retry');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()}, $p['__op_add']($add3=$p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, params, [{}, 'The ViUR server (v{server.version}) is incompatible to this Vi (v{vi.version}).']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(),$add2='\n'),$add4=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Please update either your server or Vi!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})())]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['startup']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['getVersionSuccess'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('getConfigSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}

			$pyjs['track']={'module':'main', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('mainConfig', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['network']['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=69;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'adminScreen')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=70;
				self['adminScreen'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['AdminScreen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs['track']['lineno']=72;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['adminScreen']['invoke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['getConfigSuccess'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('startupFailure', function(req, err) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				err = arguments[2];
			}

			$pyjs['track']={'module':'main', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([403, 401]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__contains__'](err));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['login']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=79;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['html5']['ext'], 'Alert', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Communication error');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})(), 'okCallback':$p['getattr'](self, 'startup'), 'okLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Retry');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('The connection to the server could not be correctly established.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req'],['err']]);
		$cls_definition['startupFailure'] = $method;
		$pyjs['track']['lineno']=85;
		$method = $pyjs__bind_method2('login', function(logout) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				logout = arguments[1];
			}
			if (typeof logout == 'undefined') logout=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'main', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=85;
			$pyjs['track']['lineno']=86;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'loginScreen')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
				$pyjs['track']['lineno']=87;
				self['loginScreen'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['LoginScreen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self['loginScreen'], 'invoke', null, null, [{'logout':logout}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['logout', false]]);
		$cls_definition['login'] = $method;
		$pyjs['track']['lineno']=91;
		$method = $pyjs__bind_method2('admin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'main', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=92;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'loginScreen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs['track']['lineno']=93;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['loginScreen']['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			}
			$pyjs['track']['lineno']=95;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['startup']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['admin'] = $method;
		$pyjs['track']['lineno']=97;
		$method = $pyjs__bind_method2('logout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $assign1;
			$pyjs['track']={'module':'main', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='main';
			$pyjs['track']['lineno']=97;
			$pyjs['track']['lineno']=98;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['adminScreen']['remove']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=99;
			$assign1 = null;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('mainWindow', $assign1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			self['adminScreen'] = $assign1;
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'login', null, null, [{'logout':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['logout'] = $method;
		$pyjs['track']['lineno']=14;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Application', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=102;
	if ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
		$pyjs['track']['lineno']=103;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['pyjd']['setup']('public/main.html');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs['track']['lineno']=106;
		$p['getattr']($m['network'], 'NetworkService')['prefix'] = '/vi';
		$pyjs['track']['lineno']=107;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['conf']['__setitem__']('currentlanguage', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['i18n']['getLanguage']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs['track']['lineno']=110;
		$m['app'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['Application']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
		$pyjs['track']['lineno']=111;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['html5']['Body']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()['appendChild']($m['app']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
		$pyjs['track']['lineno']=113;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['pyjd']['run']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
	}
	return this;
}; /* end main */


/* end module: main */


/*
PYJS_DEPS: ['html5', 'i18n', 'pyjd', 'network', 'login.LoginScreen', 'login', 'admin.AdminScreen', 'admin', 'config.conf', 'config', 'i18n.translate', 'vi_plugins']
*/
