/* start module: html5.document */
$pyjs['loaded_modules']['html5.document'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.document']['__was_initialized__']) return $pyjs['loaded_modules']['html5.document'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.document'];
	$m['__repr__'] = function() { return '<module: html5.document>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.document';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['document'] = $pyjs['loaded_modules']['html5.document'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['createAttribute'] = function(tag, ns) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof ns == 'undefined') ns=arguments['callee']['__args__'][3][1];
			var $or1,uri,$or2;
			if ($p['bool'](($p['bool']($or1=$p['op_is'](ns, null))?$or1:!$p['list'](['SVG', 'XBL', 'XUL'])['__contains__'](ns)))) {
				return (typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.parent.document.createAttribute("%s")', tag));
			}
			if ($p['bool']($p['op_eq'](ns, 'SVG'))) {
				uri = 'http://www.w3.org/2000/svg';
			}
			else if ($p['bool']($p['op_eq'](ns, 'XBL'))) {
				uri = 'http://www.mozilla.org/xbl';
			}
			else if ($p['bool']($p['op_eq'](ns, 'XUL'))) {
				uri = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
			}
			return (typeof eval == "undefined"?$m['eval']:eval)('window.parent.document.createAttributeNS("{}", "{}")'['format'](uri, tag));
		};
		$m['createAttribute']['__name__'] = 'createAttribute';

		$m['createAttribute']['__bind_type__'] = 0;
		$m['createAttribute']['__args__'] = [null,null,['tag'],['ns', null]];
		$m['createElement'] = function(element, ns) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof ns == 'undefined') ns=arguments['callee']['__args__'][3][1];
			var $or4,uri,$or3;
			if ($p['bool'](($p['bool']($or3=$p['op_is'](ns, null))?$or3:!$p['list'](['SVG', 'XBL', 'XUL'])['__contains__'](ns)))) {
				return (typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.parent.document.createElement("%s")', element));
			}
			if ($p['bool']($p['op_eq'](ns, 'SVG'))) {
				uri = 'http://www.w3.org/2000/svg';
			}
			else if ($p['bool']($p['op_eq'](ns, 'XBL'))) {
				uri = 'http://www.mozilla.org/xbl';
			}
			else if ($p['bool']($p['op_eq'](ns, 'XUL'))) {
				uri = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
			}
			return (typeof eval == "undefined"?$m['eval']:eval)('window.parent.document.createElementNS("{}", "{}")'['format'](uri, element));
		};
		$m['createElement']['__name__'] = 'createElement';

		$m['createElement']['__bind_type__'] = 0;
		$m['createElement']['__args__'] = [null,null,['element'],['ns', null]];
		$m['getElementById'] = function(idTag) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return (typeof eval == "undefined"?$m['eval']:eval)($p['sprintf']('window.parent.document.getElementById("%s")', idTag));
		};
		$m['getElementById']['__name__'] = 'getElementById';

		$m['getElementById']['__bind_type__'] = 0;
		$m['getElementById']['__args__'] = [null,null,['idTag']];
		$m['elementFromPoint'] = function(x, y) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return (typeof eval == "undefined"?$m['eval']:eval)('window.parent.document.elementFromPoint("{}", "{}")'['format'](x, y));
		};
		$m['elementFromPoint']['__name__'] = 'elementFromPoint';

		$m['elementFromPoint']['__bind_type__'] = 0;
		$m['elementFromPoint']['__args__'] = [null,null,['x'],['y']];
		$m['getElementsByTagName'] = function(tagName) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter1_nextval,$iter1_type,doc,$iter1_iter,$iter1_array,res,x,htmlCol,$iter1_idx;
			doc = (typeof eval == "undefined"?$m['eval']:eval)('window.parent.document');
			res = $p['list']([]);
			htmlCol = doc['getElementsByTagName'](tagName);
			$iter1_iter = $p['range']($constant_int_0, $p['getattr'](htmlCol, 'length'));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				res['append'](htmlCol['item'](x));
			}
			return res;
		};
		$m['getElementsByTagName']['__name__'] = 'getElementsByTagName';

		$m['getElementsByTagName']['__bind_type__'] = 0;
		$m['getElementsByTagName']['__args__'] = [null,null,['tagName']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.document */


/* end module: html5.document */


