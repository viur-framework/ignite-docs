/* start module: widgets.topbar */
$pyjs['loaded_modules']['widgets.topbar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.topbar']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.topbar'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.topbar'];
	$m['__repr__'] = function() { return '<module: widgets.topbar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.topbar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['widgets']['topbar'] = $pyjs['loaded_modules']['widgets.topbar'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_500 = new $p['int'](500);
		$m['html5'] = $p['___import___']('html5', 'widgets');
		$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
		$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
		$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
		$m['TaskSelectWidget'] = $p['___import___']('widgets.task.TaskSelectWidget', 'widgets', null, false);
		$m['toplevelActionSelector'] = $p['___import___']('priorityqueue.toplevelActionSelector', 'widgets', null, false);
		$m['TopBarWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.topbar';
			$cls_definition['__md5__'] = 'a220818910298c84a2bdf6aeb87f5eb4';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a220818910298c84a2bdf6aeb87f5eb4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var anav;
				$p['$$super']($m['TopBarWidget'], self)['__init__']();
				self['__setitem__']('class', 'vi_topbar');
				anav = $m['html5']['Nav']();
				anav['__getitem__']('class')['append']('iconnav');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iconnav', $m['html5']['Ul']()) : $p['setattr'](self, 'iconnav', $m['html5']['Ul']()); 
				self['sinkEvent']('onClick');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modulH1', $m['html5']['H1']()) : $p['setattr'](self, 'modulH1', $m['html5']['H1']()); 
				self['modulH1']['_setClass']('module');
				self['appendChild']($p['getattr'](self, 'modulH1'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modulContainer', $m['html5']['Div']()) : $p['setattr'](self, 'modulContainer', $m['html5']['Div']()); 
				$p['getattr'](self, 'modulContainer')['__getitem__']('class')['append']('currentmodul');
				self['appendChild']($p['getattr'](self, 'modulContainer'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modulImg', $m['html5']['Label']()) : $p['setattr'](self, 'modulImg', $m['html5']['Label']()); 
				self['modulContainer']['appendChild']($p['getattr'](self, 'modulImg'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('moduleName', $m['html5']['Span']()) : $p['setattr'](self, 'moduleName', $m['html5']['Span']()); 
				self['modulContainer']['appendChild']($p['getattr'](self, 'moduleName'));
				anav['appendChild']($p['getattr'](self, 'iconnav'));
				self['appendChild'](anav);
				$pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':$constant_int_500}, $p['getattr'](self, 'setTitle')]);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== 'a220818910298c84a2bdf6aeb87f5eb4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var widget,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,icon,$iter1_idx;
				self['iconnav']['removeAllChildren']();
				$iter1_iter = $m['conf']['__getitem__']('toplevelactions');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					icon = $iter1_nextval['$nextval'];
					widget = $m['toplevelActionSelector']['select'](icon);
					if ($p['bool'](widget)) {
						self['iconnav']['appendChild'](widget());
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invoke'] = $method;
			$method = $pyjs__bind_method2('setTitle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a220818910298c84a2bdf6aeb87f5eb4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var title;
				title = $m['conf']['get']('vi.name');
				if ($p['bool'](title)) {
					self['modulH1']['appendChild']($m['html5']['TextNode']($m['html5']['utils']['unescape'](title)));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setTitle'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a220818910298c84a2bdf6aeb87f5eb4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'modulH1')))) {
					$m['conf']['__getitem__']('mainWindow')['switchFullscreen'](!$p['bool']($m['conf']['__getitem__']('mainWindow')['isFullscreen']()));
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('setCurrentModulDescr', function(descr, iconURL, iconClasses) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					descr = arguments[1];
					iconURL = arguments[2];
					iconClasses = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a220818910298c84a2bdf6aeb87f5eb4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof descr == 'undefined') descr=arguments['callee']['__args__'][3][1];
				if (typeof iconURL == 'undefined') iconURL=arguments['callee']['__args__'][4][1];
				if (typeof iconClasses == 'undefined') iconClasses=arguments['callee']['__args__'][5][1];
				var $iter5_nextval,$iter5_array,$iter3_type,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$iter5_idx,cls,$iter2_type,img,$iter2_idx,$iter3_array,c,$iter2_nextval,$iter4_nextval,$iter4_idx,$iter4_array,$iter3_nextval,$iter2_array;
				$iter2_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'modulImg'), '_children'), 0, null);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					c = $iter2_nextval['$nextval'];
					self['modulImg']['removeChild'](c);
				}
				$iter3_iter = $p['__getslice']($p['getattr']($p['getattr'](self, 'moduleName'), '_children'), 0, null);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					c = $iter3_nextval['$nextval'];
					self['moduleName']['removeChild'](c);
				}
				$iter4_iter = $p['getattr'](self, 'modulImg')['__getitem__']('class');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					$p['getattr'](self, 'modulImg')['__getitem__']('class')['remove'](c);
				}
				descr = $m['html5']['utils']['unescape'](descr);
				self['moduleName']['appendChild']($m['html5']['TextNode'](descr));
				if ($p['bool'](!$p['op_is'](iconURL, null))) {
					img = $m['html5']['Img']();
					img['__setitem__']('src', iconURL);
					self['modulImg']['appendChild'](img);
				}
				if ($p['bool'](!$p['op_is'](iconClasses, null))) {
					$iter5_iter = iconClasses;
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						cls = $iter5_nextval['$nextval'];
						$p['getattr'](self, 'modulImg')['__getitem__']('class')['append'](cls);
					}
				}
				$m['conf']['__getitem__']('theApp')['setTitle'](descr);
				return null;
			}
	, 1, [null,null,['self'],['descr', ''],['iconURL', null],['iconClasses', null]]);
			$cls_definition['setCurrentModulDescr'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Header'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TopBarWidget', $p['tuple']($bases), $data);
		})();
		$m['UserState'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.topbar';
			$cls_definition['__md5__'] = 'cf9a8916a7524e98845446b175ebfa26';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cf9a8916a7524e98845446b175ebfa26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['UserState'], self)['__init__']();
				self['update']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onCurrentUserAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== 'cf9a8916a7524e98845446b175ebfa26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = $m['NetworkService']['decode'](req);
				$m['conf']['__setitem__']('currentUser', data['__getitem__']('values'));
				self['update']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onCurrentUserAvailable'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cf9a8916a7524e98845446b175ebfa26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aa,user;
				user = $m['conf']['get']('currentUser');
				if ($p['bool'](!$p['bool'](user))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCurrentUserAvailable'), 'cacheable':false}, 'user', 'view/self']);
					return null;
				}
				aa = $m['html5']['A']();
				aa['__setitem__']('title', user['__getitem__']('name'));
				aa['__getitem__']('class')['append']('icon accountmgnt');
				aa['appendChild']($m['html5']['TextNode'](user['__getitem__']('name')));
				self['appendChild'](aa);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(action) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $p['op_eq'](action, 'userstate');
			}
	, 3, [null,null,['action']]);
			$cls_definition['canHandle'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserState', $p['tuple']($bases), $data);
		})();
		$m['toplevelActionSelector']['insert']($constant_int_0, $p['getattr']($m['UserState'], 'canHandle'), $m['UserState']);
		$m['Tasks'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.topbar';
			$cls_definition['__md5__'] = 'e4b533f781c4f5e375313fdb03f3b163';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a;
				$p['$$super']($m['Tasks'], self)['__init__']();
				self['sinkEvent']('onClick');
				self['hide']();
				a = $m['html5']['A']();
				a['__getitem__']('class')['append']('icon tasks');
				a['appendChild']($m['html5']['TextNode']($m['translate']('Tasks')));
				self['appendChild'](a);
				if ($p['bool'](!$p['bool']($m['conf']['__getitem__']('tasks')['__getitem__']('server')))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onTaskListAvailable'), 'cacheable':false}, null, '/vi/_tasks/list']);
				}
				self['update']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onTaskListAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,data,$or2;
				data = $m['NetworkService']['decode'](req);
				if ($p['bool'](($p['bool']($or1=!$p['bool'](data['keys']()['__contains__']('skellist')))?$or1:!$p['bool'](data['__getitem__']('skellist'))))) {
					$m['conf']['__getitem__']('tasks')['__setitem__']('server', $p['list']([]));
					self['hide']();
					return null;
				}
				$m['conf']['__getitem__']('tasks')['__setitem__']('server', data['__getitem__']('skellist'));
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onTaskListAvailable'] = $method;
			$method = $pyjs__bind_method2('onTaskListFailure', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onTaskListFailure'] = $method;
			$method = $pyjs__bind_method2('onCurrentUserAvailable', function(req) {
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
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				data = $m['NetworkService']['decode'](req);
				$m['conf']['__setitem__']('currentUser', data['__getitem__']('values'));
				self['update']();
				return null;
			}
	, 1, [null,null,['self'],['req']]);
			$cls_definition['onCurrentUserAvailable'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var user;
				user = $m['conf']['get']('currentUser');
				if ($p['bool'](!$p['bool'](user))) {
					$pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCurrentUserAvailable'), 'cacheable':false}, 'user', 'view/self']);
					return null;
				}
				if ($p['bool'](user['__getitem__']('access')['__contains__']('root'))) {
					self['show']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e4b533f781c4f5e375313fdb03f3b163') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['TaskSelectWidget']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(action) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $p['op_eq'](action, 'tasks');
			}
	, 3, [null,null,['action']]);
			$cls_definition['canHandle'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Tasks', $p['tuple']($bases), $data);
		})();
		$m['toplevelActionSelector']['insert']($constant_int_0, $p['getattr']($m['Tasks'], 'canHandle'), $m['Tasks']);
		$m['Logout'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'widgets.topbar';
			$cls_definition['__md5__'] = '1f18b4ffa629de490271ee20b5d76ed3';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1f18b4ffa629de490271ee20b5d76ed3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aa;
				$p['$$super']($m['Logout'], self)['__init__']();
				aa = $m['html5']['A']();
				aa['__getitem__']('class')['append']('icon logout');
				aa['appendChild']($m['html5']['TextNode']($m['translate']('Logout')));
				self['appendChild'](aa);
				self['sinkEvent']('onClick');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1f18b4ffa629de490271ee20b5d76ed3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				event['stopPropagation']();
				event['preventDefault']();
				$m['conf']['__getitem__']('theApp')['logout']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('canHandle', function(action) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				return $p['op_eq'](action, 'logout');
			}
	, 3, [null,null,['action']]);
			$cls_definition['canHandle'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Li'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Logout', $p['tuple']($bases), $data);
		})();
		$m['toplevelActionSelector']['insert']($constant_int_0, $p['getattr']($m['Logout'], 'canHandle'), $m['Logout']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end widgets.topbar */


/* end module: widgets.topbar */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'network.DeferredCall', 'i18n.translate', 'i18n', 'config.conf', 'config', 'widgets.task.TaskSelectWidget', 'widgets', 'widgets.task', 'priorityqueue.toplevelActionSelector', 'priorityqueue']
*/
