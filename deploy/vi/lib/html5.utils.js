/* start module: html5.utils */
$pyjs['loaded_modules']['html5.utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.utils']['__was_initialized__']) return $pyjs['loaded_modules']['html5.utils'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.utils'];
	$m['__repr__'] = function() { return '<module: html5.utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.utils';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['utils'] = $pyjs['loaded_modules']['html5.utils'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['html5'] = $p['___import___']('html5', 'html5');
		$m['unescape'] = function(val, maxLength) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof maxLength == 'undefined') maxLength=arguments['callee']['__args__'][3][1];

			val = val['$$replace']('&lt;', '<')['$$replace']('&gt;', '>')['$$replace']('&quot;', '"')['$$replace']('&#39;', "'");
			if ($p['bool'](($p['cmp'](maxLength, $constant_int_0) == 1))) {
				return $p['__getslice'](val, $constant_int_0, maxLength);
			}
			return val;
		};
		$m['unescape']['__name__'] = 'unescape';

		$m['unescape']['__bind_type__'] = 0;
		$m['unescape']['__args__'] = [null,null,['val'],['maxLength', $constant_int_0]];
		$m['doesEventHitWidgetOrParents'] = function(event, widget) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			while ($p['bool'](widget)) {
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr'](widget, 'element')))) {
					return true;
				}
				widget = widget['parent']();
			}
			return false;
		};
		$m['doesEventHitWidgetOrParents']['__name__'] = 'doesEventHitWidgetOrParents';

		$m['doesEventHitWidgetOrParents']['__bind_type__'] = 0;
		$m['doesEventHitWidgetOrParents']['__args__'] = [null,null,['event'],['widget']];
		$m['doesEventHitWidgetOrChildren'] = function(event, widget) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,child,$iter1_idx;
			if ($p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr'](widget, 'element')))) {
				return true;
			}
			$iter1_iter = $p['getattr'](widget, '_children');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				child = $iter1_nextval['$nextval'];
				if ($p['bool']($m['doesEventHitWidgetOrChildren'](event, child))) {
					return true;
				}
			}
			return false;
		};
		$m['doesEventHitWidgetOrChildren']['__name__'] = 'doesEventHitWidgetOrChildren';

		$m['doesEventHitWidgetOrChildren']['__bind_type__'] = 0;
		$m['doesEventHitWidgetOrChildren']['__args__'] = [null,null,['event'],['widget']];
		$m['textToHtml'] = function(node, text) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,part,$iter2_array;
			$iter2_iter = $p['enumerate'](text['$$split']('\n'));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				part = $tupleassign1[1];
				if ($p['bool'](($p['cmp'](i, $constant_int_0) == 1))) {
					node['appendChild']($m['html5']['Br']());
				}
				node['appendChild']($m['html5']['TextNode'](part));
			}
			return null;
		};
		$m['textToHtml']['__name__'] = 'textToHtml';

		$m['textToHtml']['__bind_type__'] = 0;
		$m['textToHtml']['__args__'] = [null,null,['node'],['text']];
		$m['parseInt'] = function(s, ret) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof ret == 'undefined') ret=arguments['callee']['__args__'][3][1];
			var $and1,$and2,ts;
			if ($p['bool'](!$p['bool']($p['isinstance'](s, $p['str'])))) {
				return $p['int'](s);
			}
			else if ($p['bool'](s)) {
				if ($p['bool']('+-'['__contains__'](s['__getitem__']($constant_int_0)))) {
					ts = $p['__getslice'](s, $constant_int_1, null);
				}
				else {
					ts = s;
				}
				if ($p['bool'](($p['bool']($and1=ts)?$p['all'](function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,_;
	$collcomp1 = $p['list']();
				$iter3_iter = ts;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					_ = $iter3_nextval['$nextval'];
					$collcomp1['append']('0123456789'['__contains__'](_));
				}

	return $collcomp1;}()):$and1))) {
					return $p['int'](s);
				}
			}
			return ret;
		};
		$m['parseInt']['__name__'] = 'parseInt';

		$m['parseInt']['__bind_type__'] = 0;
		$m['parseInt']['__args__'] = [null,null,['s'],['ret', $constant_int_0]];
		$m['parseFloat'] = function(s, ret) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof ret == 'undefined') ret=arguments['callee']['__args__'][3][1];
			var $and3,$and4,ts,$and5;
			if ($p['bool'](!$p['bool']($p['isinstance'](s, $p['str'])))) {
				return $p['float'](s);
			}
			else if ($p['bool'](s)) {
				if ($p['bool']('+-'['__contains__'](s['__getitem__']($constant_int_0)))) {
					ts = $p['__getslice'](s, $constant_int_1, null);
				}
				else {
					ts = s;
				}
				if ($p['bool'](($p['bool']($and3=ts)?($p['bool']($and4=($p['cmp'](ts['count']('.'), $constant_int_1) < 1))?$p['all'](function(){
					var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,_;
	$collcomp2 = $p['list']();
				$iter4_iter = ts;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					_ = $iter4_nextval['$nextval'];
					$collcomp2['append']('.0123456789'['__contains__'](_));
				}

	return $collcomp2;}()):$and4):$and3))) {
					return $p['float'](s);
				}
			}
			return ret;
		};
		$m['parseFloat']['__name__'] = 'parseFloat';

		$m['parseFloat']['__bind_type__'] = 0;
		$m['parseFloat']['__args__'] = [null,null,['s'],['ret', 0.0]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.utils */


/* end module: html5.utils */


/*
PYJS_DEPS: ['html5']
*/
