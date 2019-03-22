/* start module: math */
$pyjs['loaded_modules']['math'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['math']['__was_initialized__']) return $pyjs['loaded_modules']['math'];
	var $m = $pyjs['loaded_modules']['math'];
	$m['__repr__'] = function() { return '<module: math>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_180 = new $p['int'](180);
		$m['ceil'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['ceil'](x['valueOf']()));
		};
		$m['ceil']['__name__'] = 'ceil';

		$m['ceil']['__bind_type__'] = 0;
		$m['ceil']['__args__'] = [null,null,['x']];
		$m['fabs'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['abs'](x['valueOf']()));
		};
		$m['fabs']['__name__'] = 'fabs';

		$m['fabs']['__bind_type__'] = 0;
		$m['fabs']['__args__'] = [null,null,['x']];
		$m['floor'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['floor'](x['valueOf']()));
		};
		$m['floor']['__name__'] = 'floor';

		$m['floor']['__bind_type__'] = 0;
		$m['floor']['__args__'] = [null,null,['x']];
		$m['exp'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['exp'](x['valueOf']()));
		};
		$m['exp']['__name__'] = 'exp';

		$m['exp']['__bind_type__'] = 0;
		$m['exp']['__args__'] = [null,null,['x']];
		$m['log'] = function(x, base) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof base == 'undefined') base=arguments['callee']['__args__'][3][1];

			if ($p['bool']($p['op_is'](base, null))) {
				return $p['float'](Math['log'](x['valueOf']()));
			}
			return $p['float'](Math['log'](x['valueOf']()) / Math['log'](base['valueOf']()));
		};
		$m['log']['__name__'] = 'log';

		$m['log']['__bind_type__'] = 0;
		$m['log']['__args__'] = [null,null,['x'],['base', null]];
		$m['pow'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return $p['float'](Math['pow'](x['valueOf'](), y['valueOf']()));
		};
		$m['pow']['__name__'] = 'pow';

		$m['pow']['__bind_type__'] = 0;
		$m['pow']['__args__'] = [null,null,['x'],['y']];
		$m['sqrt'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['sqrt'](x['valueOf']()));
		};
		$m['sqrt']['__name__'] = 'sqrt';

		$m['sqrt']['__bind_type__'] = 0;
		$m['sqrt']['__args__'] = [null,null,['x']];
		$m['cos'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['cos'](x['valueOf']()));
		};
		$m['cos']['__name__'] = 'cos';

		$m['cos']['__bind_type__'] = 0;
		$m['cos']['__args__'] = [null,null,['x']];
		$m['sin'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['sin'](x['valueOf']()));
		};
		$m['sin']['__name__'] = 'sin';

		$m['sin']['__bind_type__'] = 0;
		$m['sin']['__args__'] = [null,null,['x']];
		$m['tan'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['tan'](x['valueOf']()));
		};
		$m['tan']['__name__'] = 'tan';

		$m['tan']['__bind_type__'] = 0;
		$m['tan']['__args__'] = [null,null,['x']];
		$m['acos'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['acos'](x['valueOf']()));
		};
		$m['acos']['__name__'] = 'acos';

		$m['acos']['__bind_type__'] = 0;
		$m['acos']['__args__'] = [null,null,['x']];
		$m['asin'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['asin'](x['valueOf']()));
		};
		$m['asin']['__name__'] = 'asin';

		$m['asin']['__bind_type__'] = 0;
		$m['asin']['__args__'] = [null,null,['x']];
		$m['atan'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['float'](Math['atan'](x['valueOf']()));
		};
		$m['atan']['__name__'] = 'atan';

		$m['atan']['__bind_type__'] = 0;
		$m['atan']['__args__'] = [null,null,['x']];
		$m['atan2'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return $p['float'](Math['atan2'](x['valueOf'](), y['valueOf']()));
		};
		$m['atan2']['__name__'] = 'atan2';

		$m['atan2']['__bind_type__'] = 0;
		$m['atan2']['__args__'] = [null,null,['x'],['y']];
		$m['pi'] = $p['float'](Math['PI']);
		$m['e'] = $p['float'](Math['E']);
		$m['__log10__'] = $p['float'](Math['LN10']);
		$m['__log2__'] = $m['log']($constant_int_2);
		$m['fsum'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$iter2_array;
			xx = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['enumerate'](x);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				v = $tupleassign1[1];
				$collcomp1['append']($p['tuple']([$m['fabs'](v), i]));
			}

	return $collcomp1;}();
			xx['sort']();
			sum = $constant_int_0;
			$iter2_iter = xx;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				sum = $p['__op_add']($add1=sum,$add2=x['__getitem__'](i['__getitem__']($constant_int_1)));
			}
			return sum;
		};
		$m['fsum']['__name__'] = 'fsum';

		$m['fsum']['__bind_type__'] = 0;
		$m['fsum']['__args__'] = [null,null,['x']];
		$m['frexp'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var e,$pow2,$pow1,m,$add3,$add4,$div3,$div2,$div1,$div4;
			if ($p['bool']($p['op_eq'](x, $constant_int_0))) {
				return $p['tuple']([0.0, $constant_int_0]);
			}
			e = $p['__op_add']($add3=$p['int']((typeof ($div1=$m['log']($p['abs'](x)))==typeof ($div2=$m['__log2__']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))),$add4=$constant_int_1);
			m = (typeof ($div3=x)==typeof ($div4=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2))) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			return $p['tuple']([m, e]);
		};
		$m['frexp']['__name__'] = 'frexp';

		$m['frexp']['__bind_type__'] = 0;
		$m['frexp']['__args__'] = [null,null,['x']];
		$m['ldexp'] = function(x, i) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $pow4,$pow3,$mul2,$mul1;
			return (typeof ($mul1=x)==typeof ($mul2=(typeof ($pow3=$constant_int_2)==typeof ($pow4=i) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
		};
		$m['ldexp']['__name__'] = 'ldexp';

		$m['ldexp']['__bind_type__'] = 0;
		$m['ldexp']['__args__'] = [null,null,['x'],['i']];
		$m['log10'] = function(arg) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $div5,$div6;
			return (typeof ($div5=$m['log'](arg))==typeof ($div6=$m['__log10__']) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
		};
		$m['log10']['__name__'] = 'log10';

		$m['log10']['__bind_type__'] = 0;
		$m['log10']['__args__'] = [null,null,['arg']];
		$m['degrees'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $div8,$mul4,$mul3,$div7;
			return (typeof ($div7=(typeof ($mul3=x)==typeof ($mul4=$constant_int_180) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div8=$m['pi']) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
		};
		$m['degrees']['__name__'] = 'degrees';

		$m['degrees']['__bind_type__'] = 0;
		$m['degrees']['__args__'] = [null,null,['x']];
		$m['radians'] = function(x) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $mul5,$div9,$div10,$mul6;
			return (typeof ($div9=(typeof ($mul5=x)==typeof ($mul6=$m['pi']) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($div10=$constant_int_180) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
		};
		$m['radians']['__name__'] = 'radians';

		$m['radians']['__bind_type__'] = 0;
		$m['radians']['__args__'] = [null,null,['x']];
		$m['hypot'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $mul10,$div14,$add5,$div11,$div12,$div13,$mul7,$add6,$mul9,$mul8;
			x = $p['abs'](x);
			y = $p['abs'](y);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['max'](x, y), $p['min'](x, y)]), 2, null);
			x = $tupleassign2[0];
			y = $tupleassign2[1];
			return (typeof ($mul9=x)==typeof ($mul10=$m['sqrt']($p['__op_add']($add5=$constant_int_1,$add6=(typeof ($mul7=(typeof ($div11=y)==typeof ($div12=x) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)))==typeof ($mul8=(typeof ($div13=y)==typeof ($div14=x) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))))) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10));
		};
		$m['hypot']['__name__'] = 'hypot';

		$m['hypot']['__bind_type__'] = 0;
		$m['hypot']['__args__'] = [null,null,['x'],['y']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end math */


/* end module: math */


