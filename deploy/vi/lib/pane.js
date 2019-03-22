/* start module: pane */
$pyjs['loaded_modules']['pane'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pane']['__was_initialized__']) return $pyjs['loaded_modules']['pane'];
	var $m = $pyjs['loaded_modules']['pane'];
	$m['__repr__'] = function() { return '<module: pane>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pane';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'pane.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'pane.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'pane.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'pane.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[6] = 'pane.py, line 6:\n    class Pane( html5.Li ):';
	$m.__track_lines__[15] = 'pane.py, line 15:\n    def __init__(self, descr, iconURL=None, iconClasses=None, closeable=False, collapseable=True ):';
	$m.__track_lines__[16] = 'pane.py, line 16:\n    super( Pane, self ).__init__( )';
	$m.__track_lines__[18] = 'pane.py, line 18:\n    self.parentPane = None';
	$m.__track_lines__[20] = 'pane.py, line 20:\n    self.descr = descr';
	$m.__track_lines__[21] = 'pane.py, line 21:\n    self.iconURL = iconURL';
	$m.__track_lines__[22] = 'pane.py, line 22:\n    self.iconClasses = iconClasses';
	$m.__track_lines__[23] = 'pane.py, line 23:\n    self.closeable = closeable';
	$m.__track_lines__[24] = 'pane.py, line 24:\n    self.collapseable = collapseable';
	$m.__track_lines__[26] = 'pane.py, line 26:\n    self.childPanes = []';
	$m.__track_lines__[28] = 'pane.py, line 28:\n    self.widgetsDomElm = html5.Div()';
	$m.__track_lines__[29] = 'pane.py, line 29:\n    self.widgetsDomElm["class"].append("has_no_child")';
	$m.__track_lines__[31] = 'pane.py, line 31:\n    self.childDomElem = None';
	$m.__track_lines__[33] = 'pane.py, line 33:\n    self.label = html5.A( )';
	$m.__track_lines__[34] = 'pane.py, line 34:\n    self.label["class"].append("button")';
	$m.__track_lines__[36] = 'pane.py, line 36:\n    h=html5.H3()';
	$m.__track_lines__[37] = 'pane.py, line 37:\n    h.element.innerHTML = descr';
	$m.__track_lines__[40] = 'pane.py, line 40:\n    if iconURL is not None:';
	$m.__track_lines__[41] = 'pane.py, line 41:\n    img = html5.Img()';
	$m.__track_lines__[42] = 'pane.py, line 42:\n    img["src"] = iconURL';
	$m.__track_lines__[43] = 'pane.py, line 43:\n    self.label.appendChild(img)';
	$m.__track_lines__[45] = 'pane.py, line 45:\n    if iconClasses is not None:';
	$m.__track_lines__[46] = 'pane.py, line 46:\n    for cls in iconClasses:';
	$m.__track_lines__[47] = 'pane.py, line 47:\n    self.label["class"].append( cls )';
	$m.__track_lines__[49] = 'pane.py, line 49:\n    self.label.appendChild(h)';
	$m.__track_lines__[50] = 'pane.py, line 50:\n    self.appendChild( self.label )';
	$m.__track_lines__[51] = 'pane.py, line 51:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[54] = 'pane.py, line 54:\n    if closeable:';
	$m.__track_lines__[55] = 'pane.py, line 55:\n    self.closeBtn = html5.ext.Button(translate("Close"), self.onBtnCloseReleased)';
	$m.__track_lines__[56] = 'pane.py, line 56:\n    self.closeBtn["class"].append("closebtn")';
	$m.__track_lines__[57] = 'pane.py, line 57:\n    self.appendChild(self.closeBtn)';
	$m.__track_lines__[59] = 'pane.py, line 59:\n    self.closeBtn = None';
	$m.__track_lines__[61] = 'pane.py, line 61:\n    def onBtnCloseReleased(self, *args, **kwargs):';
	$m.__track_lines__[62] = 'pane.py, line 62:\n    conf["mainWindow"].removePane( self )';
	$m.__track_lines__[64] = 'pane.py, line 64:\n    def addChildPane(self, pane):';
	$m.__track_lines__[71] = 'pane.py, line 71:\n    assert pane != self, "A pane cannot be a child of itself"';
	$m.__track_lines__[73] = 'pane.py, line 73:\n    self.childPanes.append( pane )';
	$m.__track_lines__[74] = 'pane.py, line 74:\n    pane.parentPane = self';
	$m.__track_lines__[76] = 'pane.py, line 76:\n    if not self.childDomElem:';
	$m.__track_lines__[77] = 'pane.py, line 77:\n    self.childDomElem = html5.Ul()';
	$m.__track_lines__[79] = 'pane.py, line 79:\n    if self.collapseable and not pane.closeable:';
	$m.__track_lines__[80] = 'pane.py, line 80:\n    self.childDomElem[ "style" ][ "display" ] = "none"';
	$m.__track_lines__[82] = 'pane.py, line 82:\n    self.childDomElem[ "style" ][ "display" ] = "initial"';
	$m.__track_lines__[84] = 'pane.py, line 84:\n    self.appendChild( self.childDomElem )';
	$m.__track_lines__[86] = 'pane.py, line 86:\n    if self.closeBtn:';
	$m.__track_lines__[87] = 'pane.py, line 87:\n    self.closeBtn[ "style" ][ "display" ] = "none"';
	$m.__track_lines__[89] = 'pane.py, line 89:\n    if ( pane.closeable';
	$m.__track_lines__[92] = 'pane.py, line 92:\n    self.childDomElem[ "style" ][ "display" ] = "initial"';
	$m.__track_lines__[94] = 'pane.py, line 94:\n    self.childDomElem.appendChild( pane )';
	$m.__track_lines__[96] = 'pane.py, line 96:\n    def removeChildPane(self, pane):';
	$m.__track_lines__[102] = 'pane.py, line 102:\n    assert pane in self.childPanes, "Cannot remove unknown child-pane %s from %s" % (str(pane),str(self))';
	$m.__track_lines__[104] = 'pane.py, line 104:\n    self.childPanes.remove( pane )';
	$m.__track_lines__[105] = 'pane.py, line 105:\n    self.childDomElem.removeChild( pane )';
	$m.__track_lines__[107] = 'pane.py, line 107:\n    pane.parentPane = None';
	$m.__track_lines__[110] = 'pane.py, line 110:\n    if len(self.childPanes)==0: #No more children, remove the UL element';
	$m.__track_lines__[111] = 'pane.py, line 111:\n    self.removeChild( self.childDomElem )';
	$m.__track_lines__[113] = 'pane.py, line 113:\n    self.childDomElem = None';
	$m.__track_lines__[115] = 'pane.py, line 115:\n    if self.closeBtn:';
	$m.__track_lines__[116] = 'pane.py, line 116:\n    self.closeBtn[ "style" ][ "display" ] = "initial"';
	$m.__track_lines__[119] = 'pane.py, line 119:\n    def onDetach(self):';
	$m.__track_lines__[122] = 'pane.py, line 122:\n    for widget in self.widgetsDomElm._children[:]:';
	$m.__track_lines__[123] = 'pane.py, line 123:\n    self.widgetsDomElm.removeChild(widget)';
	$m.__track_lines__[124] = 'pane.py, line 124:\n    self.closeBtn = None';
	$m.__track_lines__[125] = 'pane.py, line 125:\n    self.label = None';
	$m.__track_lines__[126] = 'pane.py, line 126:\n    super(Pane,self).onDetach()';
	$m.__track_lines__[128] = 'pane.py, line 128:\n    def addWidget(self, widget):';
	$m.__track_lines__[136] = 'pane.py, line 136:\n    div = html5.Div()';
	$m.__track_lines__[137] = 'pane.py, line 137:\n    div["class"].append("vi_operator")';
	$m.__track_lines__[138] = 'pane.py, line 138:\n    div.appendChild(widget)';
	$m.__track_lines__[140] = 'pane.py, line 140:\n    for w in self.widgetsDomElm._children[:]:';
	$m.__track_lines__[141] = 'pane.py, line 141:\n    w["disabled"] = True';
	$m.__track_lines__[143] = 'pane.py, line 143:\n    self.widgetsDomElm.appendChild( div )';
	$m.__track_lines__[144] = 'pane.py, line 144:\n    self.rebuildChildrenClassInfo()';
	$m.__track_lines__[146] = 'pane.py, line 146:\n    def rebuildChildrenClassInfo(self):';
	$m.__track_lines__[147] = 'pane.py, line 147:\n    if "has_no_child" in self.widgetsDomElm["class"]:';
	$m.__track_lines__[148] = 'pane.py, line 148:\n    self.widgetsDomElm["class"].remove("has_no_child")';
	$m.__track_lines__[149] = 'pane.py, line 149:\n    if "has_single_child" in self.widgetsDomElm["class"]:';
	$m.__track_lines__[150] = 'pane.py, line 150:\n    self.widgetsDomElm["class"].remove("has_single_child")';
	$m.__track_lines__[151] = 'pane.py, line 151:\n    if "has_multiple_children" in self.widgetsDomElm["class"]:';
	$m.__track_lines__[152] = 'pane.py, line 152:\n    self.widgetsDomElm["class"].remove("has_multiple_children")';
	$m.__track_lines__[153] = 'pane.py, line 153:\n    if len(self.widgetsDomElm._children)==0:';
	$m.__track_lines__[154] = 'pane.py, line 154:\n    self.widgetsDomElm["class"].append("has_no_child")';
	$m.__track_lines__[156] = 'pane.py, line 156:\n    self.widgetsDomElm["class"].append("has_single_child")';
	$m.__track_lines__[158] = 'pane.py, line 158:\n    self.widgetsDomElm["class"].append("has_multiple_children")';
	$m.__track_lines__[160] = 'pane.py, line 160:\n    def removeWidget(self, widget):';
	$m.__track_lines__[166] = 'pane.py, line 166:\n    for c in self.widgetsDomElm._children:';
	$m.__track_lines__[167] = 'pane.py, line 167:\n    if widget in c._children:';
	$m.__track_lines__[168] = 'pane.py, line 168:\n    self.widgetsDomElm.removeChild( c )';
	$m.__track_lines__[170] = 'pane.py, line 170:\n    if self.closeable and len(self.widgetsDomElm._children)==0:';
	$m.__track_lines__[171] = 'pane.py, line 171:\n    conf["mainWindow"].removePane( self )';
	$m.__track_lines__[173] = 'pane.py, line 173:\n    for w in self.widgetsDomElm._children[:]:';
	$m.__track_lines__[174] = 'pane.py, line 174:\n    w["disabled"] = False';
	$m.__track_lines__[176] = 'pane.py, line 176:\n    self.rebuildChildrenClassInfo()';
	$m.__track_lines__[177] = 'pane.py, line 177:\n    return';
	$m.__track_lines__[179] = 'pane.py, line 179:\n    raise ValueError("Cannot remove unknown widget %s" % str(widget))';
	$m.__track_lines__[181] = 'pane.py, line 181:\n    def containsWidget(self, widget ):';
	$m.__track_lines__[186] = 'pane.py, line 186:\n    for c in self.widgetsDomElm._children:';
	$m.__track_lines__[187] = 'pane.py, line 187:\n    if widget in c._children:';
	$m.__track_lines__[188] = 'pane.py, line 188:\n    return( True )';
	$m.__track_lines__[189] = 'pane.py, line 189:\n    return( False )';
	$m.__track_lines__[191] = 'pane.py, line 191:\n    def onClick(self, event, *args, **kwargs ):';
	$m.__track_lines__[192] = 'pane.py, line 192:\n    self.focus()';
	$m.__track_lines__[193] = 'pane.py, line 193:\n    event.stopPropagation()';
	$m.__track_lines__[195] = 'pane.py, line 195:\n    def focus(self):';
	$m.__track_lines__[196] = 'pane.py, line 196:\n    conf["mainWindow"].focusPane( self )';
	$m.__track_lines__[198] = 'pane.py, line 198:\n    class GroupPane( Pane ):';
	$m.__track_lines__[203] = 'pane.py, line 203:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[204] = 'pane.py, line 204:\n    super( GroupPane, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[205] = 'pane.py, line 205:\n    self.childDomElem = html5.Ul()';
	$m.__track_lines__[206] = 'pane.py, line 206:\n    self.childDomElem["style"]["display"] = "none"';
	$m.__track_lines__[207] = 'pane.py, line 207:\n    self.appendChild( self.childDomElem )';
	$m.__track_lines__[209] = 'pane.py, line 209:\n    def onClick(self, event, *args, **kwargs ):';
	$m.__track_lines__[210] = 'pane.py, line 210:\n    if self.childDomElem["style"]["display"] == "none":';
	$m.__track_lines__[211] = 'pane.py, line 211:\n    self.childDomElem["style"]["display"] = "block"';
	$m.__track_lines__[213] = 'pane.py, line 213:\n    self.childDomElem["style"]["display"] = "none"';
	$m.__track_lines__[214] = 'pane.py, line 214:\n    event.stopPropagation()';
	$m.__track_lines__[216] = 'pane.py, line 216:\n    def onFocus(self,event):';
	$m.__track_lines__[217] = 'pane.py, line 217:\n    if len( self.childPanes )>0:';
	$m.__track_lines__[218] = 'pane.py, line 218:\n    conf["mainWindow"].focusPane( self.childPanes[0] )';


	$pyjs['track']['module']='pane';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['Pane'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pane';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(descr, iconURL, iconClasses, closeable, collapseable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				descr = arguments[1];
				iconURL = arguments[2];
				iconClasses = arguments[3];
				closeable = arguments[4];
				collapseable = arguments[5];
			}
			if (typeof iconURL == 'undefined') iconURL=arguments['callee']['__args__'][4][1];
			if (typeof iconClasses == 'undefined') iconClasses=arguments['callee']['__args__'][5][1];
			if (typeof closeable == 'undefined') closeable=arguments['callee']['__args__'][6][1];
			if (typeof collapseable == 'undefined') collapseable=arguments['callee']['__args__'][7][1];
			var $iter1_nextval,img,$iter1_idx,h,$iter1_array,$pyjs__trackstack_size_1,cls,$iter1_iter,$iter1_type;
			$pyjs['track']={'module':'pane', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Pane'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=18;
			self['parentPane'] = null;
			$pyjs['track']['lineno']=20;
			self['descr'] = descr;
			$pyjs['track']['lineno']=21;
			self['iconURL'] = iconURL;
			$pyjs['track']['lineno']=22;
			self['iconClasses'] = iconClasses;
			$pyjs['track']['lineno']=23;
			self['closeable'] = closeable;
			$pyjs['track']['lineno']=24;
			self['collapseable'] = collapseable;
			$pyjs['track']['lineno']=26;
			self['childPanes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=28;
			self['widgetsDomElm'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_no_child');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=31;
			self['childDomElem'] = null;
			$pyjs['track']['lineno']=33;
			self['$$label'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '$$label')['__getitem__']('class')['append']('button');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=36;
			h = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['H3']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=37;
			$p['getattr'](h, 'element')['innerHTML'] = descr;
			$pyjs['track']['lineno']=40;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((iconURL !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs['track']['lineno']=41;
				img = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['track']['lineno']=42;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__setitem__']('src', iconURL);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=43;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['$$label']['appendChild'](img);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['track']['lineno']=45;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((iconClasses !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs['track']['lineno']=46;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return iconClasses;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					cls = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=47;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '$$label')['__getitem__']('class')['append'](cls);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pane';
			}
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['$$label']['appendChild'](h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, '$$label'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=51;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=54;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](closeable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=55;
				self['closeBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), $p['getattr'](self, 'onBtnCloseReleased'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs['track']['lineno']=56;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'closeBtn')['__getitem__']('class')['append']('closebtn');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs['track']['lineno']=57;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'closeBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=59;
				self['closeBtn'] = null;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['descr'],['iconURL', null],['iconClasses', null],['closeable', false],['collapseable', true]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=61;
		$method = $pyjs__bind_method2('onBtnCloseReleased', function() {
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

			$pyjs['track']={'module':'pane', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=62;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removePane'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onBtnCloseReleased'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('addChildPane', function(pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
			}
			var $and1,$and3,$and4,$and5,$and2;
			$pyjs['track']={'module':'pane', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=71;
			if (!( !$p['op_eq'](pane, self) )) {
			   throw $p['AssertionError']('A pane cannot be a child of itself');
			 }
			$pyjs['track']['lineno']=73;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['childPanes']['append'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=74;
			pane['parentPane'] = self;
			$pyjs['track']['lineno']=76;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'childDomElem')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs['track']['lineno']=77;
				self['childDomElem'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=79;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=$p['getattr'](self, 'collapseable'))?!$p['bool']($p['getattr'](pane, 'closeable')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs['track']['lineno']=80;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=82;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'initial');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
				$pyjs['track']['lineno']=84;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'childDomElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs['track']['lineno']=86;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'closeBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
					$pyjs['track']['lineno']=87;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'closeBtn')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				}
			}
			$pyjs['track']['lineno']=89;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=$p['getattr'](pane, 'closeable'))?($p['bool']($and4=$p['getattr'](self, 'childDomElem')['__getitem__']('style')['__contains__']('display'))?$p['op_eq']($p['getattr'](self, 'childDomElem')['__getitem__']('style')['__getitem__']('display'), 'none'):$and4):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'initial');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
			$pyjs['track']['lineno']=94;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['childDomElem']['appendChild'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane']]);
		$cls_definition['addChildPane'] = $method;
		$pyjs['track']['lineno']=96;
		$method = $pyjs__bind_method2('removeChildPane', function(pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
			}

			$pyjs['track']={'module':'pane', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=102;
			if (!( $p['getattr'](self, 'childPanes')['__contains__'](pane) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Cannot remove unknown child-pane %s from %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
			 }
			$pyjs['track']['lineno']=104;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['childPanes']['remove'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['childDomElem']['removeChild'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=107;
			pane['parentPane'] = null;
			$pyjs['track']['lineno']=110;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'childPanes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=111;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild']($p['getattr'](self, 'childDomElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=113;
				self['childDomElem'] = null;
				$pyjs['track']['lineno']=115;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'closeBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
					$pyjs['track']['lineno']=116;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'closeBtn')['__getitem__']('style')['__setitem__']('display', 'initial');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane']]);
		$cls_definition['removeChildPane'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var widget,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'pane', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=122;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				widget = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['widgetsDomElm']['removeChild'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=124;
			self['closeBtn'] = null;
			$pyjs['track']['lineno']=125;
			self['$$label'] = null;
			$pyjs['track']['lineno']=126;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Pane'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=128;
		$method = $pyjs__bind_method2('addWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter3_idx,$iter3_array,$iter3_iter,w,$iter3_type,div,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'pane', 'lineno':128};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=128;
			$pyjs['track']['lineno']=136;
			div = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=137;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['__getitem__']('class')['append']('vi_operator');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['track']['lineno']=138;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=140;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				w = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=141;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return w['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['widgetsDomElm']['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rebuildChildrenClassInfo']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['addWidget'] = $method;
		$pyjs['track']['lineno']=146;
		$method = $pyjs__bind_method2('rebuildChildrenClassInfo', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'pane', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=146;
			$pyjs['track']['lineno']=147;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_no_child'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
				$pyjs['track']['lineno']=148;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_no_child');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			}
			$pyjs['track']['lineno']=149;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_single_child'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs['track']['lineno']=150;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_single_child');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			}
			$pyjs['track']['lineno']=151;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['__contains__']('has_multiple_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
				$pyjs['track']['lineno']=152;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['remove']('has_multiple_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			}
			$pyjs['track']['lineno']=153;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})(), 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=154;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_no_child');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(), 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs['track']['lineno']=156;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_single_child');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=158;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'widgetsDomElm')['__getitem__']('class')['append']('has_multiple_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rebuildChildrenClassInfo'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('removeWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter5_nextval,$iter5_idx,w,$iter5_array,$iter4_nextval,c,$and6,$and7,$iter4_idx,$iter5_iter,$pyjs__trackstack_size_2,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter5_type,$iter4_iter;
			$pyjs['track']={'module':'pane', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=166;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				c = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=167;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](c, '_children')['__contains__'](widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=168;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['widgetsDomElm']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
					$pyjs['track']['lineno']=170;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and6=$p['getattr'](self, 'closeable'))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(), 0):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
						$pyjs['track']['lineno']=171;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['conf']['__getitem__']('mainWindow')['removePane'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
					}
					$pyjs['track']['lineno']=173;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__getslice']($p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						w = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=174;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return w['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pane';
					$pyjs['track']['lineno']=176;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['rebuildChildrenClassInfo']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$pyjs['track']['lineno']=177;
					$pyjs['track']['lineno']=177;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=179;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Cannot remove unknown widget %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['removeWidget'] = $method;
		$pyjs['track']['lineno']=181;
		$method = $pyjs__bind_method2('containsWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter6_idx,$iter6_type,c,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'pane', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=186;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'widgetsDomElm'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				c = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=187;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](c, '_children')['__contains__'](widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
					$pyjs['track']['lineno']=188;
					$pyjs['track']['lineno']=188;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=189;
			$pyjs['track']['lineno']=189;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['containsWidget'] = $method;
		$pyjs['track']['lineno']=191;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				event = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof event != 'undefined') {
					if (event !== null && typeof event['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = event;
						event = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'pane', 'lineno':191};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=191;
			$pyjs['track']['lineno']=192;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['track']['lineno']=193;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=195;
		$method = $pyjs__bind_method2('focus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'pane', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=196;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['focusPane'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focus'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pane', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=198;
	$m['GroupPane'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pane';
		$pyjs['track']['lineno']=203;
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

			$pyjs['track']={'module':'pane', 'lineno':203};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=203;
			$pyjs['track']['lineno']=204;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['GroupPane'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['track']['lineno']=205;
			self['childDomElem'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			$pyjs['track']['lineno']=207;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'childDomElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=209;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				event = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof event != 'undefined') {
					if (event !== null && typeof event['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = event;
						event = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'pane', 'lineno':209};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=209;
			$pyjs['track']['lineno']=210;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'childDomElem')['__getitem__']('style')['__getitem__']('display'), 'none'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=213;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			}
			$pyjs['track']['lineno']=214;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=216;
		$method = $pyjs__bind_method2('onFocus', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'pane', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pane';
			$pyjs['track']['lineno']=216;
			$pyjs['track']['lineno']=217;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'childPanes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
				$pyjs['track']['lineno']=218;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['focusPane']($p['getattr'](self, 'childPanes')['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFocus'] = $method;
		$pyjs['track']['lineno']=198;
		var $bases = new Array($m['Pane']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GroupPane', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pane */


/* end module: pane */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
