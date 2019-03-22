/* start module: html5.document */
$pyjs['loaded_modules']['html5.document'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.document']['__was_initialized__']) return $pyjs['loaded_modules']['html5.document'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.document'];
	$m['__repr__'] = function() { return '<module: html5.document>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.document';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['document'] = $pyjs['loaded_modules']['html5.document'];
	$m.__track_lines__[1] = 'html5.document.py, line 1:\n    ';
	$m.__track_lines__[2] = 'html5.document.py, line 2:\n    def createAttribute(tag, ns=None):';
	$m.__track_lines__[8] = 'html5.document.py, line 8:\n    if ns is None or ns not in ["SVG", "XBL", "XUL"]:';
	$m.__track_lines__[9] = 'html5.document.py, line 9:\n    return(eval("window.parent.document.createAttribute(\\"%s\\")" % tag))';
	$m.__track_lines__[10] = 'html5.document.py, line 10:\n    if ns=="SVG":';
	$m.__track_lines__[11] = 'html5.document.py, line 11:\n    uri = "http://www.w3.org/2000/svg"';
	$m.__track_lines__[13] = 'html5.document.py, line 13:\n    uri = "http://www.mozilla.org/xbl"';
	$m.__track_lines__[15] = 'html5.document.py, line 15:\n    uri = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"';
	$m.__track_lines__[16] = 'html5.document.py, line 16:\n    return(eval(\'\'\'window.parent.document.createAttributeNS("{}", "{}")\'\'\'.format(uri, tag)))';
	$m.__track_lines__[19] = 'html5.document.py, line 19:\n    def createElement(element, ns=None):';
	$m.__track_lines__[25] = 'html5.document.py, line 25:\n    if ns is None or ns not in ["SVG", "XBL", "XUL"]:';
	$m.__track_lines__[26] = 'html5.document.py, line 26:\n    return(eval("window.parent.document.createElement(\\"%s\\")" % element))';
	$m.__track_lines__[27] = 'html5.document.py, line 27:\n    if ns=="SVG":';
	$m.__track_lines__[28] = 'html5.document.py, line 28:\n    uri = "http://www.w3.org/2000/svg"';
	$m.__track_lines__[30] = 'html5.document.py, line 30:\n    uri = "http://www.mozilla.org/xbl"';
	$m.__track_lines__[32] = 'html5.document.py, line 32:\n    uri = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"';
	$m.__track_lines__[33] = 'html5.document.py, line 33:\n    return(eval(\'\'\'window.parent.document.createElementNS("{}", "{}")\'\'\'.format(uri, element)))';
	$m.__track_lines__[36] = 'html5.document.py, line 36:\n    def getElementById(idTag):';
	$m.__track_lines__[37] = 'html5.document.py, line 37:\n    return(eval("window.parent.document.getElementById(\\"%s\\")" % idTag))';
	$m.__track_lines__[39] = 'html5.document.py, line 39:\n    def elementFromPoint(x, y):';
	$m.__track_lines__[40] = 'html5.document.py, line 40:\n    return(eval(\'\'\'window.parent.document.elementFromPoint("{}", "{}")\'\'\'.format(x, y)))';
	$m.__track_lines__[42] = 'html5.document.py, line 42:\n    def getElementsByTagName( tagName ):';
	$m.__track_lines__[43] = 'html5.document.py, line 43:\n    doc = eval("window.parent.document");';
	$m.__track_lines__[44] = 'html5.document.py, line 44:\n    res = []';
	$m.__track_lines__[45] = 'html5.document.py, line 45:\n    htmlCol = doc.getElementsByTagName(tagName)';
	$m.__track_lines__[46] = 'html5.document.py, line 46:\n    for x in range( 0, htmlCol.length):';
	$m.__track_lines__[47] = 'html5.document.py, line 47:\n    res.append(htmlCol.item(x))';
	$m.__track_lines__[48] = 'html5.document.py, line 48:\n    return( res )';


	$pyjs['track']['module']='html5.document';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$m['createAttribute'] = function(tag, ns) {
		if (typeof ns == 'undefined') ns=arguments['callee']['__args__'][3][1];
		var $or1,uri,$or2;
		$pyjs['track']={'module':'html5.document','lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=2;
		$pyjs['track']['lineno']=8;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($or1=(ns === null))?$or1:!(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](['SVG', 'XBL', 'XUL']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__'](ns)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=9;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('window.parent.document.createAttribute("%s")', tag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=10;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'SVG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
			$pyjs['track']['lineno']=11;
			uri = 'http://www.w3.org/2000/svg';
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'XBL'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
			$pyjs['track']['lineno']=13;
			uri = 'http://www.mozilla.org/xbl';
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'XUL'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
			$pyjs['track']['lineno']=15;
			uri = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
		}
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=16;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
		return 'window.parent.document.createAttributeNS("{}", "{}")'['format'](uri, tag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['createAttribute']['__name__'] = 'createAttribute';

	$m['createAttribute']['__bind_type__'] = 0;
	$m['createAttribute']['__args__'] = [null,null,['tag'],['ns', null]];
	$pyjs['track']['lineno']=19;
	$m['createElement'] = function(element, ns) {
		if (typeof ns == 'undefined') ns=arguments['callee']['__args__'][3][1];
		var $or4,uri,$or3;
		$pyjs['track']={'module':'html5.document','lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=25;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['bool']($or3=(ns === null))?$or3:!(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](['SVG', 'XBL', 'XUL']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['__contains__'](ns)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=26;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('window.parent.document.createElement("%s")', element);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=27;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'SVG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
			$pyjs['track']['lineno']=28;
			uri = 'http://www.w3.org/2000/svg';
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'XBL'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
			$pyjs['track']['lineno']=30;
			uri = 'http://www.mozilla.org/xbl';
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](ns, 'XUL'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
			$pyjs['track']['lineno']=32;
			uri = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
		}
		$pyjs['track']['lineno']=33;
		$pyjs['track']['lineno']=33;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
		return 'window.parent.document.createElementNS("{}", "{}")'['format'](uri, element);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['createElement']['__name__'] = 'createElement';

	$m['createElement']['__bind_type__'] = 0;
	$m['createElement']['__args__'] = [null,null,['element'],['ns', null]];
	$pyjs['track']['lineno']=36;
	$m['getElementById'] = function(idTag) {

		$pyjs['track']={'module':'html5.document','lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=36;
		$pyjs['track']['lineno']=37;
		$pyjs['track']['lineno']=37;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['sprintf']('window.parent.document.getElementById("%s")', idTag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getElementById']['__name__'] = 'getElementById';

	$m['getElementById']['__bind_type__'] = 0;
	$m['getElementById']['__args__'] = [null,null,['idTag']];
	$pyjs['track']['lineno']=39;
	$m['elementFromPoint'] = function(x, y) {

		$pyjs['track']={'module':'html5.document','lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=39;
		$pyjs['track']['lineno']=40;
		$pyjs['track']['lineno']=40;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
		return 'window.parent.document.elementFromPoint("{}", "{}")'['format'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['elementFromPoint']['__name__'] = 'elementFromPoint';

	$m['elementFromPoint']['__bind_type__'] = 0;
	$m['elementFromPoint']['__args__'] = [null,null,['x'],['y']];
	$pyjs['track']['lineno']=42;
	$m['getElementsByTagName'] = function(tagName) {
		var $iter1_nextval,$iter1_type,doc,$pyjs__trackstack_size_1,$iter1_iter,$iter1_array,res,x,htmlCol,$iter1_idx;
		$pyjs['track']={'module':'html5.document','lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=42;
		$pyjs['track']['lineno']=43;
		doc = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof eval == "undefined"?$m['eval']:eval)('window.parent.document');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs['track']['lineno']=44;
		res = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs['track']['lineno']=45;
		htmlCol = (function(){try{try{$pyjs['in_try_except'] += 1;
		return doc['getElementsByTagName'](tagName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		$pyjs['track']['lineno']=46;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['range'](0, $p['getattr'](htmlCol, 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			x = $iter1_nextval['$nextval'];
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return res['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return htmlCol['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='html5.document';
		$pyjs['track']['lineno']=48;
		$pyjs['track']['lineno']=48;
		var $pyjs__ret = res;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getElementsByTagName']['__name__'] = 'getElementsByTagName';

	$m['getElementsByTagName']['__bind_type__'] = 0;
	$m['getElementsByTagName']['__args__'] = [null,null,['tagName']];
	return this;
}; /* end html5.document */


/* end module: html5.document */


