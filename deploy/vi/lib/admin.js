/* start module: admin */
$pyjs['loaded_modules']['admin'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['admin']['__was_initialized__']) return $pyjs['loaded_modules']['admin'];
	var $m = $pyjs['loaded_modules']['admin'];
	$m['__repr__'] = function() { return '<module: admin>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'admin';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', null);
		$m['conf'] = $p['___import___']('config.conf', null, null, false);
		$m['TopBarWidget'] = $p['___import___']('widgets.TopBarWidget', null, null, false);
		$m['UserLogoutMsg'] = $p['___import___']('widgets.userlogoutmsg.UserLogoutMsg', null, null, false);
		$m['NetworkService'] = $p['___import___']('network.NetworkService', null, null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
		$m['viInitializedEvent'] = $p['___import___']('event.viInitializedEvent', null, null, false);
		$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', null, null, false);
		$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', null, null, false);
		$m['startupQueue'] = $p['___import___']('priorityqueue.startupQueue', null, null, false);
		$m['Log'] = $p['___import___']('log.Log', null, null, false);
		$m['Pane'] = $p['___import___']('pane.Pane', null, null, false);
		$m['GroupPane'] = $p['___import___']('pane.GroupPane', null, null, false);
		$m['Screen'] = $p['___import___']('screen.Screen', null, null, false);
		$m['handler'] = $p['___import___']('handler', null);
		$m['bones'] = $p['___import___']('bones', null);
		$m['actions'] = $p['___import___']('actions', null);
		$m['i18n'] = $p['___import___']('i18n', null);
		$m['AdminScreen'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'admin';
			$cls_definition['__md5__'] = '108cf6e95e410c3ad0c1225b080af476';
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
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
				var le,w;
				$pyjs_kwargs_call($p['$$super']($m['AdminScreen'], self), '__init__', args, kwargs, [{}]);
				self['__setitem__']('id', 'CoreWindow');
				$m['conf']['__setitem__']('mainWindow', self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('topBar', $m['TopBarWidget']()) : $p['setattr'](self, 'topBar', $m['TopBarWidget']()); 
				self['appendChild']($p['getattr'](self, 'topBar'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('workSpace', $m['html5']['Div']()) : $p['setattr'](self, 'workSpace', $m['html5']['Div']()); 
				$p['getattr'](self, 'workSpace')['__setitem__']('class', 'vi_workspace');
				self['appendChild']($p['getattr'](self, 'workSpace'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleMgr', $m['html5']['Div']()) : $p['setattr'](self, 'moduleMgr', $m['html5']['Div']()); 
				$p['getattr'](self, 'moduleMgr')['__setitem__']('class', 'vi_wm');
				self['appendChild']($p['getattr'](self, 'moduleMgr'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleList', $m['html5']['Nav']()) : $p['setattr'](self, 'moduleList', $m['html5']['Nav']()); 
				$p['getattr'](self, 'moduleList')['__setitem__']('class', 'vi_manager');
				self['moduleMgr']['appendChild']($p['getattr'](self, 'moduleList'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleListUl', $m['html5']['Ul']()) : $p['setattr'](self, 'moduleListUl', $m['html5']['Ul']()); 
				$p['getattr'](self, 'moduleListUl')['__setitem__']('class', 'modullist');
				self['moduleList']['appendChild']($p['getattr'](self, 'moduleListUl'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('viewport', $m['html5']['Div']()) : $p['setattr'](self, 'viewport', $m['html5']['Div']()); 
				$p['getattr'](self, 'viewport')['__setitem__']('class', 'vi_viewer');
				self['workSpace']['appendChild']($p['getattr'](self, 'viewport'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('logWdg', $m['Log']()) : $p['setattr'](self, 'logWdg', $m['Log']()); 
				self['appendChild']($p['getattr'](self, 'logWdg'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentPane', null) : $p['setattr'](self, 'currentPane', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', null) : $p['setattr'](self, 'nextPane', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panes', $p['list']([])) : $p['setattr'](self, 'panes', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userLoggedOutMsg', null) : $p['setattr'](self, 'userLoggedOutMsg', null); 
				le = (typeof eval == "undefined"?$m['eval']:eval)('window.top.logError');
				w = (typeof eval == "undefined"?$m['eval']:eval)('window');
				w['__is_instance__'] && typeof w['__setattr__'] == 'function' ? w['__setattr__']('onerror', le) : $p['setattr'](w, 'onerror', le); 
				w = (typeof eval == "undefined"?$m['eval']:eval)('window.top');
				w['__is_instance__'] && typeof w['__setattr__'] == 'function' ? w['__setattr__']('onerror', le) : $p['setattr'](w, 'onerror', le); 
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('reset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['moduleListUl']['removeAllChildren']();
				self['viewport']['removeAllChildren']();
				self['logWdg']['reset']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentPane', null) : $p['setattr'](self, 'currentPane', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', null) : $p['setattr'](self, 'nextPane', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panes', $p['list']([])) : $p['setattr'](self, 'panes', $p['list']([])); 
				if ($p['bool']($p['getattr'](self, 'userLoggedOutMsg'))) {
					self['userLoggedOutMsg']['stopInterval']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userLoggedOutMsg', null) : $p['setattr'](self, 'userLoggedOutMsg', null); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$method = $pyjs__bind_method2('invoke', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['show']();
				self['lock']();
				self['reset']();
				$m['startupQueue']['setFinalElem']($p['getattr'](self, 'startup'));
				$m['startupQueue']['run']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invoke'] = $method;
			$method = $pyjs__bind_method2('getCurrentUser', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getCurrentUserSuccess'), 'failureHandler':$p['getattr'](self, 'getCurrentUserFailure')}, 'user', 'view/self']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentUser'] = $method;
			$method = $pyjs__bind_method2('getCurrentUserSuccess', function(req) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var answ;
				answ = $m['NetworkService']['decode'](req);
				$m['conf']['__setitem__']('currentUser', answ['__getitem__']('values'));
				self['startup']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['getCurrentUserSuccess'] = $method;
			$method = $pyjs__bind_method2('getCurrentUserFailure', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['conf']['__getitem__']('theApp')['login']();
				return null;
			}
	, 1, [null,null,['self'],['req'],['code']]);
			$cls_definition['getCurrentUserFailure'] = $method;
			$method = $pyjs__bind_method2('startup', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$and8,predefinedFilterCounter,$lambda2,$lambda1,$or4,$iter6_type,$iter5_array,$iter3_array,module,$iter1_iter,$iter8_iter,$iter5_iter,pane,$iter5_type,$iter6_iter,$iter7_iter,$iter6_nextval,$iter3_idx,moduleGroups,$or3,handlerCls,name,idx,handler,$iter3_iter,$iter5_idx,$iter8_idx,userAccess,$iter7_type,config,$iter8_type,$iter1_array,panes,$and9,$iter1_nextval,$iter6_idx,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and10,$and11,$iter8_nextval,$iter7_idx,$iter3_type,group,groupPanes,$iter7_array,info,c,$iter1_type,$iter7_nextval,k,sortedModules,$iter8_array,$iter6_array,$add2,$add1,$iter1_idx,v,$iter3_nextval;
				config = $m['conf']['__getitem__']('mainConfig');
				if (!( config )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](!$p['bool']($m['conf']['__getitem__']('currentUser')))) {
					self['getCurrentUser']();
					return null;
				}
				$m['conf']['__setitem__']('server', config['get']('configuration', $p['dict']([])));
				if ($p['bool']($m['conf']['__getitem__']('server')['__contains__']('vi.name'))) {
					$m['conf']['__setitem__']('vi.name', $p['str']($m['conf']['__getitem__']('server')['__getitem__']('vi.name')));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('userLoggedOutMsg', $m['UserLogoutMsg']()) : $p['setattr'](self, 'userLoggedOutMsg', $m['UserLogoutMsg']()); 
				self['topBar']['invoke']();
				moduleGroups = $p['list']([]);
				if ($p['bool'](($p['bool']($and1=config['keys']()['__contains__']('configuration'))?$p['isinstance'](config['__getitem__']('configuration'), $p['dict']):$and1))) {
					if ($p['bool'](($p['bool']($and3=config['__getitem__']('configuration')['keys']()['__contains__']('modulGroups'))?$p['isinstance'](config['__getitem__']('configuration')['__getitem__']('modulGroups'), $p['list']):$and3))) {
						(typeof alert == "undefined"?$m['alert']:alert)("Hello! Your project is still using 'admin.modulGroups' for its module grouping information.\nPlease rename it to 'admin.moduleGroups' (yes, with 'e') to avoid this alert message.\n\nThank you!");
						moduleGroups = config['__getitem__']('configuration')['__getitem__']('modulGroups');
					}
					if ($p['bool'](($p['bool']($and5=config['__getitem__']('configuration')['keys']()['__contains__']('moduleGroups'))?$p['isinstance'](config['__getitem__']('configuration')['__getitem__']('moduleGroups'), $p['list']):$and5))) {
						moduleGroups = config['__getitem__']('configuration')['__getitem__']('moduleGroups');
					}
				}
				groupPanes = $p['dict']([]);
				panes = $p['list']([]);
				userAccess = $m['conf']['__getitem__']('currentUser')['get']('access', $p['list']([]));
				predefinedFilterCounter = $constant_int_1;
				$iter1_iter = moduleGroups;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					group = $iter1_nextval['$nextval'];
					groupPanes['__setitem__'](group['__getitem__']('prefix'), $pyjs_kwargs_call(null, $m['GroupPane'], null, null, [{'iconURL':group['get']('icon')}, group['__getitem__']('name')]));
					panes['append']($p['tuple']([group['__getitem__']('name'), group['get']('sortIndex'), groupPanes['__getitem__'](group['__getitem__']('prefix'))]));
				}
				sortedModules = function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,y,x,$iter2_array;
	$collcomp1 = $p['list']();
				$iter2_iter = config['__getitem__']('modules')['items']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					x = $tupleassign1[0];
					y = $tupleassign1[1];
					$collcomp1['append']($p['tuple']([x, y]));
				}

	return $collcomp1;}();
				var 				$lambda1 = function(entry) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return $p['sprintf']('%d-%010d-%s', $p['tuple']([($p['bool']($p['op_is'](entry['__getitem__']($constant_int_1)['get']('sortIndex'), null))? ($constant_int_1) : ($constant_int_0)), entry['__getitem__']($constant_int_1)['get']('sortIndex', $constant_int_0), entry['__getitem__']($constant_int_1)['get']('name')]));
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['entry']];
				$pyjs_kwargs_call(sortedModules, 'sort', null, null, [{'key':$lambda1}]);
				$iter3_iter = sortedModules;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					module = $tupleassign2[0];
					info = $tupleassign2[1];
					if ($p['bool'](($p['bool']($and7=!$p['bool'](userAccess['__contains__']('root')))?!$p['bool']($p['any'](function(){
						var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp2 = $p['list']();
					$iter4_iter = userAccess;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x = $iter4_nextval['$nextval'];
						$collcomp2['append'](x['startswith'](module));
					}

	return $collcomp2;}())):$and7))) {
						continue;
					}
					$m['conf']['__getitem__']('modules')['__setitem__'](module, info);
					if ($p['bool'](($p['bool']($and9=$m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']()['__contains__']('views'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views'):$and9))) {
						$iter5_iter = $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views');
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							v = $iter5_nextval['$nextval'];
							v['__setitem__']('__id', predefinedFilterCounter);
							predefinedFilterCounter = $p['__op_add']($add1=predefinedFilterCounter,$add2=$constant_int_1);
						}
					}
					handlerCls = $m['HandlerClassSelector']['select'](module, info);
					if (!( !$p['op_is'](handlerCls, null) )) {
					   throw $p['AssertionError']($p['sprintf']("No handler available for module '%s'", module));
					 }
					$m['conf']['__getitem__']('modules')['__getitem__'](module)['__setitem__']('visibleName', $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('name'));
					handler = null;
					$iter6_iter = groupPanes['keys']();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						k = $iter6_nextval['$nextval'];
						if ($p['bool'](info['__getitem__']('name')['startswith'](k))) {
							$m['conf']['__getitem__']('modules')['__getitem__'](module)['__setitem__']('visibleName', $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('name')['$$replace'](k, ''));
							handler = handlerCls(module, info);
							groupPanes['__getitem__'](k)['addChildPane'](handler);
							break;
						}
					}
					if ($p['bool'](!$p['bool'](handler))) {
						handler = handlerCls(module, info);
						panes['append']($p['tuple']([info['__getitem__']('visibleName'), info['get']('sortIndex'), handler]));
					}
					$m['conf']['__getitem__']('modules')['__getitem__'](module)['__setitem__']('_handler', handler);
				}
				var 				$lambda2 = function(entry) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $or1,$or2;
					return $p['sprintf']('%d-%010d-%s', $p['tuple']([($p['bool']($p['op_is'](entry['__getitem__']($constant_int_1), null))? ($constant_int_1) : ($constant_int_0)), ($p['bool']($or1=entry['__getitem__']($constant_int_1))?$or1:$constant_int_0), entry['__getitem__']($constant_int_0)]));
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null,['entry']];
				$pyjs_kwargs_call(panes, 'sort', null, null, [{'key':$lambda2}]);
				$iter7_iter = panes;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter7_nextval['$nextval'], 3, null);
					name = $tupleassign3[0];
					idx = $tupleassign3[1];
					pane = $tupleassign3[2];
					if ($p['bool'](($p['bool']($and11=$p['isinstance'](pane, $m['GroupPane']))?($p['bool']($or3=!$p['bool']($p['getattr'](pane, 'childPanes')))?$or3:$p['all'](function(){
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
							$iter8_iter = $p['getattr'](pane, 'childPanes');
							$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter8_nextval['$nextval'];
									$yield_value = $p['op_eq'](c['__getitem__']('style')['get']('display'), 'none');
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
)):$and11))) {
						continue;
					}
					self['addPane'](pane);
				}
				$m['viInitializedEvent']['fire']();
				$m['DeferredCall']($p['getattr'](self, 'checkInitialHash'));
				self['unlock']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['startup'] = $method;
			$method = $pyjs__bind_method2('log', function(type, msg) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					msg = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['logWdg']['log'](type, msg);
				return null;
			}
	, 1, [null,null,['self'],['type'],['msg']]);
			$cls_definition['log'] = $method;
			$method = $pyjs__bind_method2('checkInitialHash', function() {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
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
				var $add3,hashStr,$add4,urlHash,paramsStr;
				urlHash = $m['conf']['__getitem__']('startupHash');
				if ($p['bool'](!$p['bool'](urlHash))) {
					return null;
				}
				if ($p['bool'](urlHash['__contains__']('?'))) {
					hashStr = $p['__getslice'](urlHash, $constant_int_1, urlHash['find']('?'));
					paramsStr = $p['__getslice'](urlHash, $p['__op_add']($add3=urlHash['find']('?'),$add4=$constant_int_1), null);
				}
				else {
					hashStr = $p['__getslice'](urlHash, $constant_int_1, null);
					paramsStr = '';
				}
				self['execCall'](hashStr, paramsStr);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['checkInitialHash'] = $method;
			$method = $pyjs__bind_method2('execCall', function(path, params) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					path = arguments[1];
					params = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof params == 'undefined') params=arguments['callee']['__args__'][4][1];
				var value,$iter10_nextval,$and14,$and13,$add6,param,gen,pair,$iter10_array,key,$add5,$iter10_type,$iter10_iter,$iter10_idx;
				path = function(){
					var $iter9_iter,$collcomp3,$iter9_nextval,$iter9_idx,$iter9_type,x,$iter9_array;
	$collcomp3 = $p['list']();
				$iter9_iter = path['$$split']('/');
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					x = $iter9_nextval['$nextval'];
					if ($p['bool'](x)) {
						$collcomp3['append'](x);
					}
				}

	return $collcomp3;}();
				param = $p['dict']([]);
				if ($p['bool'](params)) {
					if ($p['bool']($p['isinstance'](params, $p['dict']))) {
						param = params;
					}
					else {
						$iter10_iter = params['$$split']('&');
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							pair = $iter10_nextval['$nextval'];
							if ($p['bool'](!$p['bool'](pair['__contains__']('=')))) {
								continue;
							}
							key = $p['__getslice'](pair, 0, pair['find']('='));
							value = $p['__getslice'](pair, $p['__op_add']($add5=pair['find']('='),$add6=$constant_int_1), null);
							if ($p['bool'](!$p['bool'](($p['bool']($and13=key)?value:$and13)))) {
								continue;
							}
							if ($p['bool'](param['keys']()['__contains__'](key))) {
								if ($p['bool'](!$p['bool']($p['isinstance'](param['__getitem__'](key), $p['list'])))) {
									param['__setitem__'](key, $p['list']([params['__getitem__'](key)]));
								}
								param['__getitem__'](key)['append'](value);
							}
							else {
								param['__setitem__'](key, value);
							}
						}
					}
				}
				$p['printFunc']([$p['tuple'](['execCall', path, param])], 1);
				gen = $m['initialHashHandler']['select'](path, param);
				if ($p['bool'](gen)) {
					gen(path, param);
				}
				return null;
			}
	, 1, [null,null,['self'],['path'],['params', null]]);
			$cls_definition['execCall'] = $method;
			$method = $pyjs__bind_method2('switchFullscreen', function(fullscreen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fullscreen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fullscreen == 'undefined') fullscreen=arguments['callee']['__args__'][3][1];

				if ($p['bool'](fullscreen)) {
					self['moduleMgr']['hide']();
					self['viewport']['addClass']('is_fullscreen');
				}
				else {
					self['moduleMgr']['show']();
					self['viewport']['removeClass']('is_fullscreen');
				}
				return null;
			}
	, 1, [null,null,['self'],['fullscreen', true]]);
			$cls_definition['switchFullscreen'] = $method;
			$method = $pyjs__bind_method2('isFullscreen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'viewport')['__getitem__']('class')['__contains__']('is_fullscreen');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isFullscreen'] = $method;
			$method = $pyjs__bind_method2('onError', function(req, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					req = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['printFunc'](['ONERROR'], 1);
				return null;
			}
	, 1, [null,null,['self'],['req'],['code']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('_registerChildPanes', function(pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx,childPane;
				$iter11_iter = $p['getattr'](pane, 'childPanes');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					childPane = $iter11_nextval['$nextval'];
					self['panes']['append'](childPane);
					self['viewport']['appendChild']($p['getattr'](childPane, 'widgetsDomElm'));
					$p['getattr'](childPane, 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
					self['_registerChildPanes'](childPane);
				}
				return null;
			}
	, 1, [null,null,['self'],['pane']]);
			$cls_definition['_registerChildPanes'] = $method;
			$method = $pyjs__bind_method2('addPane', function(pane, parentPane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					parentPane = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof parentPane == 'undefined') parentPane=arguments['callee']['__args__'][4][1];

				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](pane, 'childPanes')), $constant_int_0) == 1))) {
					self['_registerChildPanes'](pane);
				}
				self['panes']['append'](pane);
				if ($p['bool'](parentPane)) {
					parentPane['addChildPane'](pane);
				}
				else {
					self['moduleListUl']['appendChild'](pane);
				}
				self['viewport']['appendChild']($p['getattr'](pane, 'widgetsDomElm'));
				$p['getattr'](pane, 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
				return null;
			}
	, 1, [null,null,['self'],['pane'],['parentPane', null]]);
			$cls_definition['addPane'] = $method;
			$method = $pyjs__bind_method2('insertPane', function(pane, insertAt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					insertAt = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool'](($p['cmp']($p['len']($p['getattr'](pane, 'childPanes')), $constant_int_0) == 1))) {
					self['_registerChildPanes'](pane);
				}
				if (!( $p['getattr'](self, 'panes')['__contains__'](insertAt) )) {
				   throw $p['AssertionError']();
				 }
				self['panes']['append'](pane);
				self['moduleListUl']['insertBefore'](pane, insertAt);
				self['viewport']['appendChild']($p['getattr'](pane, 'widgetsDomElm'));
				$p['getattr'](pane, 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
				return null;
			}
	, 1, [null,null,['self'],['pane'],['insertAt']]);
			$cls_definition['insertPane'] = $method;
			$method = $pyjs__bind_method2('stackPane', function(pane, focus) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					focus = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof focus == 'undefined') focus=arguments['callee']['__args__'][4][1];
				var $and16,$and15;
				if (!( !$p['op_is']($p['getattr'](self, 'currentPane'), null) )) {
				   throw $p['AssertionError']("Cannot stack a pane. There's no current one.");
				 }
				$pyjs_kwargs_call(self, 'addPane', null, null, [{'parentPane':$p['getattr'](self, 'currentPane')}, pane]);
				if ($p['bool'](($p['bool']($and15=focus)?!$p['bool']($p['getattr'](self, 'nextPane')):$and15))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', pane) : $p['setattr'](self, 'nextPane', pane); 
					$m['DeferredCall']($p['getattr'](self, 'focusNextPane'));
				}
				return null;
			}
	, 1, [null,null,['self'],['pane'],['focus', false]]);
			$cls_definition['stackPane'] = $method;
			$method = $pyjs__bind_method2('focusNextPane', function() {
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
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
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
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
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
				var nextPane;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'nextPane')))) {
					return null;
				}
				nextPane = $p['getattr'](self, 'nextPane');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', null) : $p['setattr'](self, 'nextPane', null); 
				self['focusPane'](nextPane);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['focusNextPane'] = $method;
			$method = $pyjs__bind_method2('focusPane', function(pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and18,$and17;
				if (!( $p['getattr'](self, 'panes')['__contains__'](pane) )) {
				   throw $p['AssertionError']('Cannot focus unknown pane!');
				 }
				if ($p['bool'](!$p['bool']($p['getattr'](pane, 'focusable')))) {
					self['topBar']['setCurrentModulDescr']();
					return null;
				}
				if ($p['bool']($p['op_eq'](pane, $p['getattr'](self, 'currentPane')))) {
					if ($p['bool']($p['getattr']($p['getattr'](self, 'currentPane'), 'collapseable'))) {
						if ($p['bool']($p['getattr']($p['getattr'](self, 'currentPane'), 'isExpanded'))) {
							self['currentPane']['collapse']();
						}
						else {
							self['currentPane']['expand']();
						}
					}
					return null;
				}
				self['panes']['remove'](pane);
				self['panes']['append'](pane);
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'currentPane'), null))) {
					self['currentPane']['removeClass']('is_active');
					$p['getattr']($p['getattr'](self, 'currentPane'), 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
				}
				self['topBar']['setCurrentModulDescr']($p['getattr'](pane, 'descr'), $p['getattr'](pane, 'iconURL'), $p['getattr'](pane, 'iconClasses'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentPane', pane) : $p['setattr'](self, 'currentPane', pane); 
				$p['getattr']($p['getattr'](self, 'currentPane'), 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'block');
				if ($p['bool'](($p['bool']($and17=$p['getattr']($p['getattr'](self, 'currentPane'), 'collapseable'))?$p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem'):$and17))) {
					$p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
				}
				self['currentPane']['addClass']('is_active');
				pane = $p['getattr']($p['getattr'](self, 'currentPane'), 'parentPane');
				while ($p['bool']($p['isinstance'](pane, $m['Pane']))) {
					if ($p['bool']($p['op_eq']($p['getattr'](pane, 'childDomElem')['__getitem__']('style')['get']('display', 'none'), 'none'))) {
						$p['getattr'](pane, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
					}
					pane = $p['getattr'](pane, 'parentPane');
				}
				return null;
			}
	, 1, [null,null,['self'],['pane']]);
			$cls_definition['focusPane'] = $method;
			$method = $pyjs__bind_method2('removePane', function(pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pane = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or6;
				if (!( $p['getattr'](self, 'panes')['__contains__'](pane) )) {
				   throw $p['AssertionError']('Cannot remove unknown pane!');
				 }
				self['panes']['remove'](pane);
				if ($p['bool']($p['op_eq'](pane, $p['getattr'](self, 'currentPane')))) {
					if ($p['bool']($p['getattr'](self, 'panes'))) {
						self['focusPane']($p['getattr'](self, 'panes')['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))));
					}
					else {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentPane', null) : $p['setattr'](self, 'currentPane', null); 
					}
				}
				if ($p['bool']($p['op_eq'](pane, $p['getattr'](self, 'nextPane')))) {
					if ($p['bool']($p['getattr'](self, 'panes'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', $p['getattr'](self, 'panes')['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)))) : $p['setattr'](self, 'nextPane', $p['getattr'](self, 'panes')['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)))); 
					}
					else {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextPane', null) : $p['setattr'](self, 'nextPane', null); 
					}
				}
				if ($p['bool'](($p['bool']($or5=!$p['bool']($p['getattr'](pane, 'parentPane')))?$or5:$p['op_is']($p['getattr'](pane, 'parentPane'), self)))) {
					self['moduleListUl']['removeChild'](pane);
				}
				else {
					pane['parentPane']['removeChildPane'](pane);
				}
				self['viewport']['removeChild']($p['getattr'](pane, 'widgetsDomElm'));
				return null;
			}
	, 1, [null,null,['self'],['pane']]);
			$cls_definition['removePane'] = $method;
			$method = $pyjs__bind_method2('addWidget', function(widget, pane) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					pane = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				pane['addWidget'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['pane']]);
			$cls_definition['addWidget'] = $method;
			$method = $pyjs__bind_method2('stackWidget', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if (!( !$p['op_is']($p['getattr'](self, 'currentPane'), null) )) {
				   throw $p['AssertionError']('Cannot stack a widget while no pane is active');
				 }
				self['addWidget'](widget, $p['getattr'](self, 'currentPane'));
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['stackWidget'] = $method;
			$method = $pyjs__bind_method2('removeWidget', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,pane,$iter12_idx;
				$iter12_iter = $p['getattr'](self, 'panes');
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					pane = $iter12_nextval['$nextval'];
					if ($p['bool'](pane['containsWidget'](widget))) {
						pane['removeWidget'](widget);
						return null;
					}
				}
				throw ($p['AssertionError']($p['sprintf']('Tried to remove unknown widget %s', $p['str'](widget))));
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['removeWidget'] = $method;
			$method = $pyjs__bind_method2('containsWidget', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '108cf6e95e410c3ad0c1225b080af476') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,pane,$iter13_array;
				$iter13_iter = $p['getattr'](self, 'panes');
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					pane = $iter13_nextval['$nextval'];
					if ($p['bool'](pane['containsWidget'](widget))) {
						return pane;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['containsWidget'] = $method;
			var $bases = new Array($m['Screen']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('AdminScreen', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end admin */


/* end module: admin */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'widgets.TopBarWidget', 'widgets', 'widgets.userlogoutmsg.UserLogoutMsg', 'widgets.userlogoutmsg', 'network.NetworkService', 'network', 'network.DeferredCall', 'event.viInitializedEvent', 'event', 'priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'priorityqueue.startupQueue', 'log.Log', 'log', 'pane.Pane', 'pane', 'pane.GroupPane', 'screen.Screen', 'screen', 'handler', 'bones', 'actions', 'i18n']
*/
