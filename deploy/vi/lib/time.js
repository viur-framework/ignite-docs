/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	try {
		var $sub2,$sub1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_86400 = new $p['int'](86400);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_604800000 = new $p['int'](604800000);
		var $constant_int_60 = new $p['int'](60);
		$m['math'] = $p['___import___']('math', null);
		$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
		$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
		if ($p['bool'](($p['cmp']($m['altzone'], $m['timezone']) == 1))) {
			$m['d'] = $m['timezone'];
			$m['timezone'] = $m['altzone'];
			$m['altzone'] = $m['d'];
		}
		$m['_dst'] = $p['__op_sub']($sub1=$m['timezone'],$sub2=$m['altzone']);
		$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
		$m['d'] = $p['str']($m['d']['toLocaleString']())['$$split']()['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		if ($p['bool']($p['op_eq']($m['d']['__getitem__']($constant_int_0), '('))) {
			$m['d'] = $p['__getslice']($m['d'], $constant_int_1, (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
		}
		$m['tzname'] = $p['tuple']([$m['d'], null]);
		delete $m['d'];
		$m['__c__days'] = $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
		$m['__c__months'] = $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
		$m['time'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $p['float'](new Date()['getTime']() / 1000.0);
		};
		$m['time']['__name__'] = 'time';

		$m['time']['__bind_type__'] = 0;
		$m['time']['__args__'] = [null,null];
		$m['struct_time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'time';
			$cls_definition['__md5__'] = '0d9d18be918958952848029778ec7f45';
			$cls_definition['n_fields'] = $constant_int_9;
			$cls_definition['n_sequence_fields'] = $constant_int_9;
			$cls_definition['n_unnamed_fields'] = $constant_int_0;
			$cls_definition['tm_year'] = null;
			$cls_definition['tm_mon'] = null;
			$cls_definition['tm_mday'] = null;
			$cls_definition['tm_hour'] = null;
			$cls_definition['tm_min'] = null;
			$cls_definition['tm_sec'] = null;
			$cls_definition['tm_wday'] = null;
			$cls_definition['tm_yday'] = null;
			$cls_definition['tm_isdst'] = null;
			$method = $pyjs__bind_method2('__init__', function(ttuple) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ttuple = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];

				if ($p['bool'](!$p['bool']($p['op_is'](ttuple, null)))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_year', ttuple['__getitem__']($constant_int_0)) : $p['setattr'](self, 'tm_year', ttuple['__getitem__']($constant_int_0)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mon', ttuple['__getitem__']($constant_int_1)) : $p['setattr'](self, 'tm_mon', ttuple['__getitem__']($constant_int_1)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mday', ttuple['__getitem__']($constant_int_2)) : $p['setattr'](self, 'tm_mday', ttuple['__getitem__']($constant_int_2)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_hour', ttuple['__getitem__']($constant_int_3)) : $p['setattr'](self, 'tm_hour', ttuple['__getitem__']($constant_int_3)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_min', ttuple['__getitem__']($constant_int_4)) : $p['setattr'](self, 'tm_min', ttuple['__getitem__']($constant_int_4)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_sec', ttuple['__getitem__']($constant_int_5)) : $p['setattr'](self, 'tm_sec', ttuple['__getitem__']($constant_int_5)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_wday', ttuple['__getitem__']($constant_int_6)) : $p['setattr'](self, 'tm_wday', ttuple['__getitem__']($constant_int_6)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_yday', ttuple['__getitem__']($constant_int_7)) : $p['setattr'](self, 'tm_yday', ttuple['__getitem__']($constant_int_7)); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_isdst', ttuple['__getitem__']($constant_int_8)) : $p['setattr'](self, 'tm_isdst', ttuple['__getitem__']($constant_int_8)); 
				}
				return null;
			}
	, 1, [null,null,['self'],['ttuple', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				t = $p['tuple']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
				return t['__str__']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['__str__']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$method = $pyjs__bind_method2('__getitem__', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')])['__getitem__'](idx);
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['__getitem__'] = $method;
			$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['__getslice']($p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]), lower, upper);
			}
	, 1, [null,null,['self'],['lower'],['upper']]);
			$cls_definition['__getslice__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
		})();
		$m['gmtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $add2,$sub3,$div1,$div2,startOfYear,$add6,$add5,tm_year,$add3,tm,$assign1,$add4,$mod2,date,$mod1,$add1,$div3,$div4,$sub4;
			if ($p['bool']($p['op_is'](t, null))) {
				t = $m['time']();
			}
			date = new Date(t*1000);
			tm = $m['struct_time']();
			$assign1 = $p['int'](date['getUTCFullYear']());
			tm_year = $assign1;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign1) : $p['setattr'](tm, 'tm_year', $assign1); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', $p['__op_add']($add1=$p['int'](date['getUTCMonth']()),$add2=$constant_int_1)) : $p['setattr'](tm, 'tm_mon', $p['__op_add']($add1=$p['int'](date['getUTCMonth']()),$add2=$constant_int_1)); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $p['int'](date['getUTCDate']())) : $p['setattr'](tm, 'tm_mday', $p['int'](date['getUTCDate']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getUTCHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getUTCHours']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getUTCMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getUTCMinutes']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getUTCSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getUTCSeconds']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod1=$p['__op_add']($add3=$p['int'](date['getUTCDay']()),$add4=$constant_int_6))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod1=$p['__op_add']($add3=$p['int'](date['getUTCDay']()),$add4=$constant_int_6))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', $constant_int_0) : $p['setattr'](tm, 'tm_isdst', $constant_int_0); 
			startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', $p['__op_add']($add5=$constant_int_1,$add6=$p['int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))) : $p['setattr'](tm, 'tm_yday', $p['__op_add']($add5=$constant_int_1,$add6=$p['int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))); 
			return tm;
		};
		$m['gmtime']['__name__'] = 'gmtime';

		$m['gmtime']['__bind_type__'] = 0;
		$m['gmtime']['__args__'] = [null,null,['t', null]];
		$m['localtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $mod4,$mod3,$sub8,$mul3,$div7,tm,tm_mon,startOfYear,$div5,$sub7,$sub6,$sub5,startOfDay,tm_year,$div8,$add10,$add11,$add12,$add13,date,dt,$mul4,$div6,$mul2,$mul1,dateOffset,$add14,startOfYearOffset,tm_mday,$assign4,$add7,$assign3,$assign2,$add8,$add9;
			if ($p['bool']($p['op_is'](t, null))) {
				t = $m['time']();
			}
			date = new Date(t*1000);
			dateOffset = date['getTimezoneOffset']();
			tm = $m['struct_time']();
			$assign2 = $p['int'](date['getFullYear']());
			tm_year = $assign2;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign2) : $p['setattr'](tm, 'tm_year', $assign2); 
			$assign3 = $p['__op_add']($add7=$p['int'](date['getMonth']()),$add8=$constant_int_1);
			tm_mon = $assign3;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', $assign3) : $p['setattr'](tm, 'tm_mon', $assign3); 
			$assign4 = $p['int'](date['getDate']());
			tm_mday = $assign4;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $assign4) : $p['setattr'](tm, 'tm_mday', $assign4); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getHours']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getMinutes']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getSeconds']())); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod3=$p['__op_add']($add9=$p['int'](date['getDay']()),$add10=$constant_int_6))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod3=$p['__op_add']($add9=$p['int'](date['getDay']()),$add10=$constant_int_6))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))); 
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))))? ($constant_int_0) : ($constant_int_1))) : $p['setattr'](tm, 'tm_isdst', ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))))? ($constant_int_0) : ($constant_int_1))); 
			startOfYear = new Date(tm_year,0,1);
			startOfYearOffset = startOfYear['getTimezoneOffset']();
			startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
			dt = (typeof ($div5=$p['float']($p['__op_sub']($sub5=startOfDay['getTime'](),$sub6=startOfYear['getTime']())))==typeof ($div6=$constant_int_1000) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			dt = $p['__op_add']($add11=dt,$add12=(typeof ($mul3=$constant_int_60)==typeof ($mul4=$p['__op_sub']($sub7=startOfYearOffset,$sub8=dateOffset)) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', $p['__op_add']($add13=$constant_int_1,$add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))))) : $p['setattr'](tm, 'tm_yday', $p['__op_add']($add13=$constant_int_1,$add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))))); 
			return tm;
		};
		$m['localtime']['__name__'] = 'localtime';

		$m['localtime']['__bind_type__'] = 0;
		$m['localtime']['__args__'] = [null,null,['t', null]];
		$m['mktime'] = function(t) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add16,utc,tm_sec,tm_hour,tm_mday,$sub10,$div10,$div11,$div12,ts,tm_year,$add15,$sub9,$div9,tm_mon,$sub12,date,$sub11,tm_min;
			tm_year = t['__getitem__']($constant_int_0);
			tm_mon = $p['__op_sub']($sub9=t['__getitem__']($constant_int_1),$sub10=$constant_int_1);
			tm_mday = t['__getitem__']($constant_int_2);
			tm_hour = t['__getitem__']($constant_int_3);
			tm_min = t['__getitem__']($constant_int_4);
			tm_sec = t['__getitem__']($constant_int_5);
			date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
			utc = (typeof ($div9=Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))==typeof ($div10=$constant_int_1000) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
			ts = (typeof ($div11=date['getTime']())==typeof ($div12=$constant_int_1000) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12));
			if ($p['bool']($p['op_eq'](t['__getitem__']($constant_int_8), $constant_int_0))) {
				if ($p['bool']($p['op_eq']($p['__op_sub']($sub11=ts,$sub12=utc), $m['timezone']))) {
					return ts;
				}
				return $p['__op_add']($add15=ts,$add16=$m['_dst']);
			}
			return ts;
		};
		$m['mktime']['__name__'] = 'mktime';

		$m['mktime']['__bind_type__'] = 0;
		$m['mktime']['__args__'] = [null,null,['t']];
		$m['strftime'] = function(fmt, t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
			var firstMonday,tm_hour,tm_sec,tm_wday,$mod5,$mod6,result,remainder,$div14,$add20,$add22,$div13,tm_mon,startOfYear,tm_min,format,$sub13,$and1,$and2,$sub16,$sub15,$sub14,tm_year,$add17,tm_yday,date,firstWeek,$add18,$add19,tm_mday,weekNo,$add21,re_pct;
			if ($p['bool']($p['op_is'](t, null))) {
				t = $m['localtime']();
			}
			else {
				if ($p['bool'](($p['bool']($and1=!$p['bool']($p['isinstance'](t, $m['struct_time'])))?!$p['op_eq']($p['len'](t), $constant_int_9):$and1))) {
					throw ($p['TypeError']('argument must be 9-item sequence, not float'));
				}
			}
			tm_year = t['__getitem__']($constant_int_0);
			tm_mon = t['__getitem__']($constant_int_1);
			tm_mday = t['__getitem__']($constant_int_2);
			tm_hour = t['__getitem__']($constant_int_3);
			tm_min = t['__getitem__']($constant_int_4);
			tm_sec = t['__getitem__']($constant_int_5);
			tm_wday = t['__getitem__']($constant_int_6);
			tm_yday = t['__getitem__']($constant_int_7);
			date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
			startOfYear = new Date(tm_year,0,1);
			firstMonday = $p['__op_add']($add19=$p['__op_sub']($sub13=$constant_int_1,$sub14=(typeof ($mod5=$p['__op_add']($add17=startOfYear['getDay'](),$add18=$constant_int_6))==typeof ($mod6=$constant_int_7) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6))),$add20=$constant_int_7);
			firstWeek = new Date(tm_year,0,firstMonday);
			weekNo = $p['__op_sub']($sub15=date['getTime'](),$sub16=firstWeek['getTime']());
			if ($p['bool'](($p['cmp'](weekNo, $constant_int_0) == -1))) {
				weekNo = $constant_int_0;
			}
			else {
				weekNo = $p['__op_add']($add21=$constant_int_1,$add22=$p['int']((typeof ($div13=weekNo)==typeof ($div14=$constant_int_604800000) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))));
			}
			format = function(c) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $sub18,$mod11,$mod10,$mod12,$add25,$add23,$sub17,$add24,$add26,$mod7,$mod9,$mod8;
				if ($p['bool']($p['op_eq'](c, '%'))) {
					return '%';
				}
				else if ($p['bool']($p['op_eq'](c, 'a'))) {
					return $p['__getslice'](format('A'), 0, $constant_int_3);
				}
				else if ($p['bool']($p['op_eq'](c, 'A'))) {
					return $m['__c__days']['__getitem__'](format('w'));
				}
				else if ($p['bool']($p['op_eq'](c, 'b'))) {
					return $p['__getslice'](format('B'), 0, $constant_int_3);
				}
				else if ($p['bool']($p['op_eq'](c, 'B'))) {
					return $m['__c__months']['__getitem__']($p['__op_sub']($sub17=tm_mon,$sub18=$constant_int_1));
				}
				else if ($p['bool']($p['op_eq'](c, 'c'))) {
					return date['toLocaleString']();
				}
				else if ($p['bool']($p['op_eq'](c, 'd'))) {
					return $p['sprintf']('%02d', tm_mday);
				}
				else if ($p['bool']($p['op_eq'](c, 'H'))) {
					return $p['sprintf']('%02d', tm_hour);
				}
				else if ($p['bool']($p['op_eq'](c, 'I'))) {
					return $p['sprintf']('%02d', (typeof ($mod7=tm_hour)==typeof ($mod8=$constant_int_12) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8)));
				}
				else if ($p['bool']($p['op_eq'](c, 'j'))) {
					return $p['sprintf']('%03d', tm_yday);
				}
				else if ($p['bool']($p['op_eq'](c, 'm'))) {
					return $p['sprintf']('%02d', tm_mon);
				}
				else if ($p['bool']($p['op_eq'](c, 'M'))) {
					return $p['sprintf']('%02d', tm_min);
				}
				else if ($p['bool']($p['op_eq'](c, 'p'))) {
					if ($p['bool'](($p['cmp'](tm_hour, $constant_int_12) == -1))) {
						return 'AM';
					}
					return 'PM';
				}
				else if ($p['bool']($p['op_eq'](c, 'S'))) {
					return $p['sprintf']('%02d', tm_sec);
				}
				else if ($p['bool']($p['op_eq'](c, 'U'))) {
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				else if ($p['bool']($p['op_eq'](c, 'w'))) {
					return $p['sprintf']('%d', (typeof ($mod9=$p['__op_add']($add23=tm_wday,$add24=$constant_int_1))==typeof ($mod10=$constant_int_7) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10)));
				}
				else if ($p['bool']($p['op_eq'](c, 'W'))) {
					return $p['sprintf']('%d', weekNo);
				}
				else if ($p['bool']($p['op_eq'](c, 'x'))) {
					return $p['sprintf']('%s', date['toLocaleDateString']());
				}
				else if ($p['bool']($p['op_eq'](c, 'X'))) {
					return $p['sprintf']('%s', date['toLocaleTimeString']());
				}
				else if ($p['bool']($p['op_eq'](c, 'y'))) {
					return $p['sprintf']('%02d', (typeof ($mod11=tm_year)==typeof ($mod12=$constant_int_100) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12)));
				}
				else if ($p['bool']($p['op_eq'](c, 'Y'))) {
					return $p['sprintf']('%04d', tm_year);
				}
				else if ($p['bool']($p['op_eq'](c, 'Z'))) {
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				return $p['__op_add']($add25='%',$add26=c);
			};
			format['__name__'] = 'format';

			format['__bind_type__'] = 0;
			format['__args__'] = [null,null,['c']];
			result = '';
			remainder = fmt;
			re_pct = /([^%]*)%(.)(.*)/;
var a, fmtChar;
			while ($p['bool'](remainder)) {

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
			}
			return $p['str'](result);
		};
		$m['strftime']['__name__'] = 'strftime';

		$m['strftime']['__bind_type__'] = 0;
		$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
		$m['asctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $add28,$sub19,$mod13,$mod14,$sub20,$add27;
			if ($p['bool']($p['op_is'](t, null))) {
				t = $m['localtime']();
			}
			return $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__']((typeof ($mod13=$p['__op_add']($add27=t['__getitem__']($constant_int_6),$add28=$constant_int_1))==typeof ($mod14=$constant_int_7) && typeof $mod13=='number'?
				(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
				$p['op_mod']($mod13,$mod14))), 0, $constant_int_3), $m['__c__months']['__getitem__']($p['__op_sub']($sub19=t['__getitem__']($constant_int_1),$sub20=$constant_int_1)), t['__getitem__']($constant_int_2), t['__getitem__']($constant_int_3), t['__getitem__']($constant_int_4), t['__getitem__']($constant_int_5), t['__getitem__']($constant_int_0)]));
		};
		$m['asctime']['__name__'] = 'asctime';

		$m['asctime']['__bind_type__'] = 0;
		$m['asctime']['__args__'] = [null,null,['t', null]];
		$m['ctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

			return $m['asctime']($m['localtime'](t));
		};
		$m['ctime']['__name__'] = 'ctime';

		$m['ctime']['__bind_type__'] = 0;
		$m['ctime']['__args__'] = [null,null,['t', null]];

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

		$m['_strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $pyjs_try_err;
			try {
				return $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			return null;
		};
		$m['_strptime']['__name__'] = '_strptime';

		$m['_strptime']['__bind_type__'] = 0;
		$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
		$m['strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var tt,$pyjs_try_err;
			try {
				tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
				tt['__is_instance__'] && typeof tt['__setattr__'] == 'function' ? tt['__setattr__']('tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) : $p['setattr'](tt, 'tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))); 
				return tt;
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			return null;
		};
		$m['strptime']['__name__'] = 'strptime';

		$m['strptime']['__bind_type__'] = 0;
		$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/
