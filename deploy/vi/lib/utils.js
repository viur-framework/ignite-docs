/* start module: utils */
$pyjs['loaded_modules']['utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['utils']['__was_initialized__']) return $pyjs['loaded_modules']['utils'];
	var $m = $pyjs['loaded_modules']['utils'];
	$m['__repr__'] = function() { return '<module: utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'utils';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_150 = new $p['int'](150);
		$m['formatString'] = function(format, data, structure, prefix, language, _rec) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 6, arguments['length']);
			if (typeof structure == 'undefined') structure=arguments['callee']['__args__'][4][1];
			if (typeof prefix == 'undefined') prefix=arguments['callee']['__args__'][5][1];
			if (typeof language == 'undefined') language=arguments['callee']['__args__'][6][1];
			if (typeof _rec == 'undefined') _rec=arguments['callee']['__args__'][7][1];
			var $and14,$iter3_type,$add18,$add13,$and15,$iter3_idx,struct,val,res,$iter3_nextval,$or2,$iter3_iter,$and8,$and9,$or1,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$and10,$and11,$add10,$and17,key,$iter3_array,vals,langs,$add14,$add15,$add16,$add3,$add17,$add6,$add7,$add4,$add5,$and16,$add8,$add9;
			if ($p['bool'](($p['bool']($and1=structure)?$p['isinstance'](structure, $p['list']):$and1))) {
				structure = function(){
					var $iter1_nextval,$iter1_type,k,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
				$iter1_iter = structure;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					$collcomp1['__setitem__'](k, v);
				}

	return $collcomp1;}();
			}
			prefix = ($p['bool']($or1=prefix)?$or1:$p['list']([]));
			res = format;
			if ($p['bool']($p['isinstance'](data, $p['list']))) {
				return ', '['join'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$add2,$iter2_idx,$add1,x,$iter2_array;
	$collcomp2 = $p['list']();
				$iter2_iter = data;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					$collcomp2['append']($pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add1=_rec,$add2=$constant_int_1)}, format, x, structure, prefix, language]));
				}

	return $collcomp2;}());
			}
			else if ($p['bool']($p['isinstance'](data, $p['str']))) {
				return data;
			}
			else if ($p['bool'](!$p['bool'](data))) {
				return res;
			}
			$iter3_iter = data['keys']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				key = $iter3_nextval['$nextval'];
				val = data['__getitem__'](key);
				struct = ($p['bool'](structure)? (structure['get'](key)) : (null));
				if ($p['bool']($p['isinstance'](struct, $p['list']))) {
					struct = function(){
						var $iter4_nextval,k,$collcomp3,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp3 = $p['dict']();
					$iter4_iter = struct;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						$collcomp3['__setitem__'](k, v);
					}

	return $collcomp3;}();
				}
				if ($p['bool']($p['isinstance'](val, $p['dict']))) {
					if ($p['bool'](($p['bool']($and3=struct)?res['__contains__']($p['sprintf']('$(%s)', '.'['join']($p['__op_add']($add3=prefix,$add4=$p['list']([key]))))):$and3))) {
						langs = struct['get']('languages');
						if ($p['bool'](langs)) {
							if ($p['bool'](($p['bool']($and5=language)?langs['__contains__'](language):$and5))) {
								val = val['get'](language, '');
							}
							else {
								val = ', '['join'](val['values']());
							}
						}
						else {
							continue;
						}
					}
					else {
						res = $pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add7=_rec,$add8=$constant_int_1)}, res, val, structure, $p['__op_add']($add5=prefix,$add6=$p['list']([key])), language]);
					}
				}
				else if ($p['bool'](($p['bool']($and7=$p['isinstance'](val, $p['list']))?($p['bool']($and8=($p['cmp']($p['len'](val), $constant_int_0) == 1))?$p['isinstance'](val['__getitem__']($constant_int_0), $p['dict']):$and8):$and7))) {
					if ($p['bool'](($p['bool']($and10=struct)?($p['bool']($and11=val['__getitem__']($constant_int_0)['__contains__']('dest'))?val['__getitem__']($constant_int_0)['__contains__']('rel'):$and11):$and10))) {
						if ($p['bool'](($p['bool']($and13=struct['__contains__']('relskel'))?struct['__contains__']('format'):$and13))) {
							format = struct['__getitem__']('format');
							struct = struct['__getitem__']('relskel');
						}
						res = res['$$replace']($p['sprintf']('$(%s)', '.'['join']($p['__op_add']($add9=prefix,$add10=$p['list']([key])))), ', '['join'](function(){
							var $iter5_nextval,v,$iter5_idx,$collcomp4,$iter5_iter,$add11,$add12,$iter5_array,$iter5_type;
	$collcomp4 = $p['list']();
						$iter5_iter = val;
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							v = $iter5_nextval['$nextval'];
							$collcomp4['append']($pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add11=_rec,$add12=$constant_int_1)}, format, v, struct, $p['list']([]), language]));
						}

	return $collcomp4;}()));
					}
					else {
						res = $pyjs_kwargs_call(null, $m['formatString'], null, null, [{'_rec':$p['__op_add']($add15=_rec,$add16=$constant_int_1)}, res, val['__getitem__']($constant_int_0), struct, $p['__op_add']($add13=prefix,$add14=$p['list']([key])), language]);
					}
				}
				else if ($p['bool']($p['isinstance'](val, $p['list']))) {
					val = ', '['join'](val);
				}
				if ($p['bool'](($p['bool']($and15=$p['isinstance'](struct, $p['dict']))?($p['bool']($and16=struct['__contains__']('values'))?struct['__getitem__']('values'):$and16):$and15))) {
					vals = struct['__getitem__']('values');
					if ($p['bool']($p['isinstance'](vals, $p['list']))) {
						vals = function(){
							var $iter6_idx,$iter6_type,$collcomp5,$iter6_array,v,$iter6_iter,k,$iter6_nextval;
	$collcomp5 = $p['dict']();
						$iter6_iter = vals;
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							var $tupleassign3 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
							k = $tupleassign3[0];
							v = $tupleassign3[1];
							$collcomp5['__setitem__'](k, v);
						}

	return $collcomp5;}();
					}
					if ($p['bool']($p['isinstance'](vals, $p['dict']))) {
						if ($p['bool'](vals['__contains__'](val))) {
							val = vals['__getitem__'](val);
						}
					}
				}
				res = res['$$replace']($p['sprintf']('$(%s)', '.'['join']($p['__op_add']($add17=prefix,$add18=$p['list']([key])))), $p['str'](val));
			}
			return res;
		};
		$m['formatString']['__name__'] = 'formatString';

		$m['formatString']['__bind_type__'] = 0;
		$m['formatString']['__args__'] = [null,null,['format'],['data'],['structure', null],['prefix', null],['language', null],['_rec', $constant_int_0]];
		$m['getImagePreview'] = function(data, cropped, size) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
			if (typeof cropped == 'undefined') cropped=arguments['callee']['__args__'][3][1];
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][4][1];
			var $and20,$add21,$add20,$add22,$and18,$and19,$add19;
			if ($p['bool'](($p['bool']($and18=data['keys']()['__contains__']('mimetype'))?($p['bool']($and19=$p['isinstance'](data['__getitem__']('mimetype'), $p['str']))?data['__getitem__']('mimetype')['startswith']('image/svg'):$and19):$and18))) {
				return $p['sprintf']('/file/download/%s', data['__getitem__']('dlkey'));
			}
			else if ($p['bool'](data['keys']()['__contains__']('servingurl'))) {
				if ($p['bool'](data['__getitem__']('servingurl'))) {
					return $p['__op_add']($add21=$p['__op_add']($add19=data['__getitem__']('servingurl'),$add20=($p['bool'](size)? ($p['sprintf']('=s%d', size)) : (''))),$add22=($p['bool'](cropped)? ('-c') : ('')));
				}
				return '';
			}
			return null;
		};
		$m['getImagePreview']['__name__'] = 'getImagePreview';

		$m['getImagePreview']['__bind_type__'] = 0;
		$m['getImagePreview']['__args__'] = [null,null,['data'],['cropped', false],['size', $constant_int_150]];
		$m['setPreventUnloading'] = function(mode) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][2][1];
			var count,$add23,$add24;
			count = (typeof eval == "undefined"?$m['eval']:eval)('window.top.preventViUnloading');
			$p['printFunc']([$p['tuple'](['setPreventUnloading', count, mode])], 1);
			if ($p['bool'](!$p['bool'](mode))) {
				if ($p['bool']($p['op_eq'](count, $constant_int_0))) {
					return null;
				}
			}
			count = $p['__op_add']($add23=count,$add24=($p['bool'](mode)? ($constant_int_1) : ((typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))));
			(typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.top.preventViUnloading = %d;', count));
			return count;
		};
		$m['setPreventUnloading']['__name__'] = 'setPreventUnloading';

		$m['setPreventUnloading']['__bind_type__'] = 0;
		$m['setPreventUnloading']['__args__'] = [null,null,['mode', true]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end utils */


/* end module: utils */


