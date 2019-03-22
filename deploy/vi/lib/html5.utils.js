/* start module: html5.utils */
$pyjs['loaded_modules']['html5.utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.utils']['__was_initialized__']) return $pyjs['loaded_modules']['html5.utils'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.utils'];
	$m['__repr__'] = function() { return '<module: html5.utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.utils';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['utils'] = $pyjs['loaded_modules']['html5.utils'];
	$m.__track_lines__[1] = 'html5.utils.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'html5.utils.py, line 2:\n    import html5';
	$m.__track_lines__[4] = 'html5.utils.py, line 4:\n    def unescape(val, maxLength = 0):';
	$m.__track_lines__[18] = 'html5.utils.py, line 18:\n    val = val \\';
	$m.__track_lines__[24] = 'html5.utils.py, line 24:\n    if maxLength > 0:';
	$m.__track_lines__[25] = 'html5.utils.py, line 25:\n    return val[0:maxLength]';
	$m.__track_lines__[27] = 'html5.utils.py, line 27:\n    return val';
	$m.__track_lines__[29] = 'html5.utils.py, line 29:\n    def doesEventHitWidgetOrParents(event, widget):';
	$m.__track_lines__[33] = 'html5.utils.py, line 33:\n    while widget:';
	$m.__track_lines__[34] = 'html5.utils.py, line 34:\n    if event.target == widget.element:';
	$m.__track_lines__[35] = 'html5.utils.py, line 35:\n    return True';
	$m.__track_lines__[37] = 'html5.utils.py, line 37:\n    widget = widget.parent()';
	$m.__track_lines__[39] = 'html5.utils.py, line 39:\n    return False';
	$m.__track_lines__[41] = 'html5.utils.py, line 41:\n    def doesEventHitWidgetOrChildren(event, widget):';
	$m.__track_lines__[45] = 'html5.utils.py, line 45:\n    if event.target == widget.element:';
	$m.__track_lines__[46] = 'html5.utils.py, line 46:\n    return True';
	$m.__track_lines__[48] = 'html5.utils.py, line 48:\n    for child in widget._children:';
	$m.__track_lines__[49] = 'html5.utils.py, line 49:\n    if doesEventHitWidgetOrChildren(event, child):';
	$m.__track_lines__[50] = 'html5.utils.py, line 50:\n    return True';
	$m.__track_lines__[52] = 'html5.utils.py, line 52:\n    return False';
	$m.__track_lines__[54] = 'html5.utils.py, line 54:\n    def textToHtml(node, text):';
	$m.__track_lines__[63] = 'html5.utils.py, line 63:\n    for (i, part) in enumerate(text.split("\\n")):';
	$m.__track_lines__[64] = 'html5.utils.py, line 64:\n    if i > 0:';
	$m.__track_lines__[65] = 'html5.utils.py, line 65:\n    node.appendChild(html5.Br())';
	$m.__track_lines__[67] = 'html5.utils.py, line 67:\n    node.appendChild(html5.TextNode(part))';


	$pyjs['track']['module']='html5.utils';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'html5');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['unescape'] = function(val, maxLength) {
		if (typeof maxLength == 'undefined') maxLength=arguments['callee']['__args__'][3][1];

		$pyjs['track']={'module':'html5.utils','lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.utils';
		$pyjs['track']['lineno']=4;
		$pyjs['track']['lineno']=18;
		val = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return val['$$replace']('&lt;', '<');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['$$replace']('&gt;', '>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()['$$replace']('&quot;', '"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['$$replace']('&#39;', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs['track']['lineno']=24;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](maxLength, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=25;
			var $pyjs__ret = $p['__getslice'](val, 0, maxLength);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=27;
		$pyjs['track']['lineno']=27;
		var $pyjs__ret = val;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['unescape']['__name__'] = 'unescape';

	$m['unescape']['__bind_type__'] = 0;
	$m['unescape']['__args__'] = [null,null,['val'],['maxLength', 0]];
	$pyjs['track']['lineno']=29;
	$m['doesEventHitWidgetOrParents'] = function(event, widget) {

		$pyjs['track']={'module':'html5.utils','lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.utils';
		$pyjs['track']['lineno']=29;
		$pyjs['track']['lineno']=33;
		while ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
			$pyjs['track']['lineno']=34;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr'](widget, 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=35;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=37;
			widget = (function(){try{try{$pyjs['in_try_except'] += 1;
			return widget['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
		}
		$pyjs['track']['lineno']=39;
		$pyjs['track']['lineno']=39;
		var $pyjs__ret = false;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['doesEventHitWidgetOrParents']['__name__'] = 'doesEventHitWidgetOrParents';

	$m['doesEventHitWidgetOrParents']['__bind_type__'] = 0;
	$m['doesEventHitWidgetOrParents']['__args__'] = [null,null,['event'],['widget']];
	$pyjs['track']['lineno']=41;
	$m['doesEventHitWidgetOrChildren'] = function(event, widget) {
		var $iter1_nextval,$iter1_type,$pyjs__trackstack_size_1,$iter1_iter,$iter1_array,child,$iter1_idx;
		$pyjs['track']={'module':'html5.utils','lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.utils';
		$pyjs['track']['lineno']=41;
		$pyjs['track']['lineno']=45;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr'](widget, 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=46;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=48;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['getattr'](widget, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			child = $iter1_nextval['$nextval'];
			$pyjs['track']['lineno']=49;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['doesEventHitWidgetOrChildren'](event, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='html5.utils';
		$pyjs['track']['lineno']=52;
		$pyjs['track']['lineno']=52;
		var $pyjs__ret = false;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['doesEventHitWidgetOrChildren']['__name__'] = 'doesEventHitWidgetOrChildren';

	$m['doesEventHitWidgetOrChildren']['__bind_type__'] = 0;
	$m['doesEventHitWidgetOrChildren']['__args__'] = [null,null,['event'],['widget']];
	$pyjs['track']['lineno']=54;
	$m['textToHtml'] = function(node, text) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,part,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs['track']={'module':'html5.utils','lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='html5.utils';
		$pyjs['track']['lineno']=54;
		$pyjs['track']['lineno']=63;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['enumerate']((function(){try{try{$pyjs['in_try_except'] += 1;
		return text['$$split']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			i = $tupleassign1[0];
			part = $tupleassign1[1];
			$pyjs['track']['lineno']=64;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](i, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=65;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return node['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Br']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return node['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](part);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='html5.utils';
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['textToHtml']['__name__'] = 'textToHtml';

	$m['textToHtml']['__bind_type__'] = 0;
	$m['textToHtml']['__args__'] = [null,null,['node'],['text']];
	return this;
}; /* end html5.utils */


/* end module: html5.utils */


/*
PYJS_DEPS: ['html5']
*/
