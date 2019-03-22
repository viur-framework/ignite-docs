/* start module: log */
$pyjs['loaded_modules']['log'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['log']['__was_initialized__']) return $pyjs['loaded_modules']['log'];
	var $m = $pyjs['loaded_modules']['log'];
	$m['__repr__'] = function() { return '<module: log>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'log';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'log.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'log.py, line 2:\n    from network import DeferredCall';
	$m.__track_lines__[3] = 'log.py, line 3:\n    from datetime import datetime';
	$m.__track_lines__[4] = 'log.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[5] = 'log.py, line 5:\n    from config import conf';
	$m.__track_lines__[7] = 'log.py, line 7:\n    class Log( html5.Div ):';
	$m.__track_lines__[11] = 'log.py, line 11:\n    def __init__(self):';
	$m.__track_lines__[12] = 'log.py, line 12:\n    super(Log, self).__init__()';
	$m.__track_lines__[14] = 'log.py, line 14:\n    self["class"].append("vi_messenger")';
	$m.__track_lines__[15] = 'log.py, line 15:\n    openLink = html5.ext.Button(translate("Open message center"), self.toggleMsgCenter)';
	$m.__track_lines__[16] = 'log.py, line 16:\n    self.appendChild(openLink)';
	$m.__track_lines__[18] = 'log.py, line 18:\n    self.logUL = html5.Ul()';
	$m.__track_lines__[19] = 'log.py, line 19:\n    self.logUL["id"] = "statuslist"';
	$m.__track_lines__[20] = 'log.py, line 20:\n    self.logUL["class"].append( "statuslist" )';
	$m.__track_lines__[21] = 'log.py, line 21:\n    self.appendChild( self.logUL )';
	$m.__track_lines__[23] = 'log.py, line 23:\n    versionDiv = html5.Div()';
	$m.__track_lines__[24] = 'log.py, line 24:\n    versionDiv["class"].append("versiondiv")';
	$m.__track_lines__[27] = 'log.py, line 27:\n    versionspan = html5.Span()';
	$m.__track_lines__[28] = 'log.py, line 28:\n    versionspan.appendChild(html5.TextNode("ViUR v%s" % ".".join([str(x) for x in conf["server.version"]])))';
	$m.__track_lines__[29] = 'log.py, line 29:\n    versionspan["class"].append("serverspan")';
	$m.__track_lines__[30] = 'log.py, line 30:\n    versionDiv.appendChild(versionspan)';
	$m.__track_lines__[33] = 'log.py, line 33:\n    versionspan = html5.Span()';
	$m.__track_lines__[34] = 'log.py, line 34:\n    versionspan.appendChild(html5.TextNode("Vi v%s%s" % (".".join([str(x) for x in conf["vi.version"]]), conf["vi.version.appendix"])))';
	$m.__track_lines__[35] = 'log.py, line 35:\n    versionspan["class"].append("versionspan")';
	$m.__track_lines__[36] = 'log.py, line 36:\n    versionDiv.appendChild(versionspan)';
	$m.__track_lines__[39] = 'log.py, line 39:\n    try:';
	$m.__track_lines__[40] = 'log.py, line 40:\n    from version import builddate, revision';
	$m.__track_lines__[42] = 'log.py, line 42:\n    revspan = html5.Span()';
	$m.__track_lines__[43] = 'log.py, line 43:\n    revspan.appendChild(html5.TextNode("Rev %s" % revision))';
	$m.__track_lines__[44] = 'log.py, line 44:\n    revspan["class"].append("revisionspan")';
	$m.__track_lines__[46] = 'log.py, line 46:\n    datespan = html5.Span()';
	$m.__track_lines__[47] = 'log.py, line 47:\n    datespan.appendChild(html5.TextNode("Built %s" % builddate))';
	$m.__track_lines__[48] = 'log.py, line 48:\n    datespan["class"].append("datespan")';
	$m.__track_lines__[50] = 'log.py, line 50:\n    versionDiv.appendChild(revspan)';
	$m.__track_lines__[51] = 'log.py, line 51:\n    versionDiv.appendChild(datespan)';
	$m.__track_lines__[54] = 'log.py, line 54:\n    pass';
	$m.__track_lines__[56] = 'log.py, line 56:\n    self.appendChild(versionDiv)';
	$m.__track_lines__[58] = 'log.py, line 58:\n    def toggleMsgCenter(self, *args, **kwargs):';
	$m.__track_lines__[59] = 'log.py, line 59:\n    if "is_open" in self["class"]:';
	$m.__track_lines__[60] = 'log.py, line 60:\n    self["class"].remove("is_open")';
	$m.__track_lines__[62] = 'log.py, line 62:\n    self["class"].append("is_open")';
	$m.__track_lines__[64] = 'log.py, line 64:\n    def log(self, type, msg ):';
	$m.__track_lines__[72] = 'log.py, line 72:\n    assert type in ["success", "error", "warning", "info", "progress"]';
	$m.__track_lines__[74] = 'log.py, line 74:\n    liwrap = html5.Li()';
	$m.__track_lines__[75] = 'log.py, line 75:\n    liwrap["class"].append("log_"+type)';
	$m.__track_lines__[76] = 'log.py, line 76:\n    liwrap["class"].append("is_new")';
	$m.__track_lines__[78] = 'log.py, line 78:\n    spanDate = html5.Span()';
	$m.__track_lines__[79] = 'log.py, line 79:\n    spanDate.appendChild( html5.TextNode( datetime.now().strftime("%H:%M:%S") ))';
	$m.__track_lines__[80] = 'log.py, line 80:\n    spanDate["class"].append("date")';
	$m.__track_lines__[81] = 'log.py, line 81:\n    liwrap.appendChild(spanDate)';
	$m.__track_lines__[83] = 'log.py, line 83:\n    if isinstance( msg, html5.Widget ):';
	$m.__track_lines__[85] = 'log.py, line 85:\n    liwrap.appendChild( msg )';
	$m.__track_lines__[89] = 'log.py, line 89:\n    spanMsg = html5.Span()';
	$m.__track_lines__[90] = 'log.py, line 90:\n    spanMsg.appendChild(html5.TextNode(html5.utils.unescape(msg)))';
	$m.__track_lines__[91] = 'log.py, line 91:\n    spanMsg["class"].append("msg")';
	$m.__track_lines__[92] = 'log.py, line 92:\n    liwrap.appendChild(spanMsg)';
	$m.__track_lines__[94] = 'log.py, line 94:\n    DeferredCall(self.removeNewCls, liwrap,_delay=2500)';
	$m.__track_lines__[95] = 'log.py, line 95:\n    self.logUL.appendChild( liwrap )';
	$m.__track_lines__[97] = 'log.py, line 97:\n    if len(self.logUL._children)>1:';
	$m.__track_lines__[98] = 'log.py, line 98:\n    self.logUL.element.removeChild( liwrap.element )';
	$m.__track_lines__[99] = 'log.py, line 99:\n    self.logUL.element.insertBefore( liwrap.element, self.logUL.element.children.item(0) )';
	$m.__track_lines__[101] = 'log.py, line 101:\n    def removeNewCls(self,span):';
	$m.__track_lines__[102] = 'log.py, line 102:\n    span["class"].remove("is_new")';


	$pyjs['track']['module']='log';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$m['Log'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'log';
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var openLink,builddate,versionspan,datespan,$pyjs_try_err,revspan,versionDiv,revision;
			$pyjs['track']={'module':'log', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='log';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Log'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('vi_messenger');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=15;
			openLink = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Open message center');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), $p['getattr'](self, 'toggleMsgCenter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](openLink);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=18;
			self['logUL'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'logUL')['__setitem__']('id', 'statuslist');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'logUL')['__getitem__']('class')['append']('statuslist');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'logUL'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=23;
			versionDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionDiv['__getitem__']('class')['append']('versiondiv');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=27;
			versionspan = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('ViUR v%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return '.'['join'](function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,x,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('server.version');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='log';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionspan['__getitem__']('class')['append']('serverspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionDiv['appendChild'](versionspan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=33;
			versionspan = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Vi v%s%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return '.'['join'](function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('vi.version');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='log';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), $m['conf']['__getitem__']('vi.version.appendix')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionspan['__getitem__']('class')['append']('versionspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return versionDiv['appendChild'](versionspan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=39;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=40;
					$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
					builddate = $p['___import___']('version.builddate', null, null, false);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
					revision = $p['___import___']('version.revision', null, null, false);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['lineno']=42;
					revspan = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
					$pyjs['track']['lineno']=43;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return revspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('Rev %s', revision);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					$pyjs['track']['lineno']=44;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return revspan['__getitem__']('class')['append']('revisionspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					$pyjs['track']['lineno']=46;
					datespan = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
					$pyjs['track']['lineno']=47;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return datespan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('Built %s', builddate);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
					$pyjs['track']['lineno']=48;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return datespan['__getitem__']('class')['append']('datespan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs['track']['lineno']=50;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return versionDiv['appendChild'](revspan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					$pyjs['track']['lineno']=51;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return versionDiv['appendChild'](datespan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
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
				$pyjs['track']['module']='log';
				if (true) {
					$pyjs['track']['lineno']=54;
				}
			}
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](versionDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('toggleMsgCenter', function() {
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

			$pyjs['track']={'module':'log', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='log';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_open'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
				$pyjs['track']['lineno']=60;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=62;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_open');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['toggleMsgCenter'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('log', function(type, msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				msg = arguments[2];
			}
			var liwrap,spanMsg,$add2,$add1,spanDate;
			$pyjs['track']={'module':'log', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='log';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=72;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['success', 'error', 'warning', 'info', 'progress']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()['__contains__'](type) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=74;
			liwrap = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return liwrap['__getitem__']('class')['append']($p['__op_add']($add1='log_',$add2=type));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return liwrap['__getitem__']('class')['append']('is_new');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['track']['lineno']=78;
			spanDate = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=79;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return spanDate['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']['now']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()['strftime']('%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return spanDate['__getitem__']('class')['append']('date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=81;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return liwrap['appendChild'](spanDate);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=83;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](msg, $p['getattr']($m['html5'], 'Widget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs['track']['lineno']=85;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return liwrap['appendChild'](msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=89;
				spanMsg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs['track']['lineno']=90;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['unescape'](msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['track']['lineno']=91;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return spanMsg['__getitem__']('class')['append']('msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return liwrap['appendChild'](spanMsg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			$pyjs['track']['lineno']=94;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':2500}, $p['getattr'](self, 'removeNewCls'), liwrap]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=95;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['logUL']['appendChild'](liwrap);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['track']['lineno']=97;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'logUL'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})(), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs['track']['lineno']=98;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['logUL']['element']['removeChild']($p['getattr'](liwrap, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['logUL']['element']['insertBefore']($p['getattr'](liwrap, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['logUL']['element']['children']['item'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['type'],['msg']]);
		$cls_definition['log'] = $method;
		$pyjs['track']['lineno']=101;
		$method = $pyjs__bind_method2('removeNewCls', function(span) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				span = arguments[1];
			}

			$pyjs['track']={'module':'log', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='log';
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=102;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return span['__getitem__']('class')['remove']('is_new');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['span']]);
		$cls_definition['removeNewCls'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Log', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end log */


/* end module: log */


/*
PYJS_DEPS: ['html5', 'network.DeferredCall', 'network', 'datetime.datetime', 'datetime', 'i18n.translate', 'i18n', 'config.conf', 'config', 'version.builddate', 'version', 'version.revision']
*/
