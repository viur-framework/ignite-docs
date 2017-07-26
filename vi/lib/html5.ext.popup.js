/* start module: html5.ext.popup */
$pyjs['loaded_modules']['html5.ext.popup'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext.popup']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext.popup'];
	if(typeof $pyjs['loaded_modules']['html5.ext'] == 'undefined' || !$pyjs['loaded_modules']['html5.ext']['__was_initialized__']) $p['___import___']('html5.ext', null);
	var $m = $pyjs['loaded_modules']['html5.ext.popup'];
	$m['__repr__'] = function() { return '<module: html5.ext.popup>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext.popup';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.ext']['popup'] = $pyjs['loaded_modules']['html5.ext.popup'];
	$m.__track_lines__[1] = 'html5.ext.popup.py, line 1:\n    import html5';
	$m.__track_lines__[3] = 'html5.ext.popup.py, line 3:\n    class Popup( html5.Div ):';
	$m.__track_lines__[4] = 'html5.ext.popup.py, line 4:\n    def __init__(self, title=None, id=None, className=None, *args, **kwargs ):';
	$m.__track_lines__[5] = 'html5.ext.popup.py, line 5:\n    super( Popup, self ).__init__(*args, **kwargs)';
	$m.__track_lines__[7] = 'html5.ext.popup.py, line 7:\n    self["class"] = "alertbox"';
	$m.__track_lines__[8] = 'html5.ext.popup.py, line 8:\n    if className is not None and len(className):';
	$m.__track_lines__[9] = 'html5.ext.popup.py, line 9:\n    self["class"].append(className)';
	$m.__track_lines__[11] = 'html5.ext.popup.py, line 11:\n    if title:';
	$m.__track_lines__[12] = 'html5.ext.popup.py, line 12:\n    lbl = html5.Span()';
	$m.__track_lines__[13] = 'html5.ext.popup.py, line 13:\n    lbl["class"].append("title")';
	$m.__track_lines__[14] = 'html5.ext.popup.py, line 14:\n    lbl.appendChild( html5.TextNode( title ) )';
	$m.__track_lines__[15] = 'html5.ext.popup.py, line 15:\n    self.appendChild( lbl )';
	$m.__track_lines__[18] = 'html5.ext.popup.py, line 18:\n    self.id = id';
	$m.__track_lines__[20] = 'html5.ext.popup.py, line 20:\n    self.frameDiv = html5.Div()';
	$m.__track_lines__[21] = 'html5.ext.popup.py, line 21:\n    self.frameDiv["class"] = "popup"';
	$m.__track_lines__[23] = 'html5.ext.popup.py, line 23:\n    self.frameDiv.appendChild( self )';
	$m.__track_lines__[24] = 'html5.ext.popup.py, line 24:\n    html5.Body().appendChild( self.frameDiv )';
	$m.__track_lines__[26] = 'html5.ext.popup.py, line 26:\n    def close(self, *args, **kwargs):';
	$m.__track_lines__[27] = 'html5.ext.popup.py, line 27:\n    html5.Body().removeChild( self.frameDiv )';
	$m.__track_lines__[28] = 'html5.ext.popup.py, line 28:\n    self.frameDiv = None';
	$m.__track_lines__[30] = 'html5.ext.popup.py, line 30:\n    class Alert(Popup):';
	$m.__track_lines__[34] = 'html5.ext.popup.py, line 34:\n    def __init__(self, msg, title=None, okCallback=None, okLabel="OK", *args, **kwargs):';
	$m.__track_lines__[35] = 'html5.ext.popup.py, line 35:\n    super(Alert, self).__init__(title, *args, **kwargs)';
	$m.__track_lines__[36] = 'html5.ext.popup.py, line 36:\n    self.addClass("alert")';
	$m.__track_lines__[38] = 'html5.ext.popup.py, line 38:\n    self.okCallback = okCallback';
	$m.__track_lines__[40] = 'html5.ext.popup.py, line 40:\n    message = html5.Span()';
	$m.__track_lines__[41] = 'html5.ext.popup.py, line 41:\n    message.addClass("alert-msg")';
	$m.__track_lines__[42] = 'html5.ext.popup.py, line 42:\n    self.appendChild(message)';
	$m.__track_lines__[44] = 'html5.ext.popup.py, line 44:\n    if isinstance(msg, html5.Widget):';
	$m.__track_lines__[45] = 'html5.ext.popup.py, line 45:\n    message.appendChild(msg)';
	$m.__track_lines__[47] = 'html5.ext.popup.py, line 47:\n    html5.utils.textToHtml(message, msg)';
	$m.__track_lines__[49] = 'html5.ext.popup.py, line 49:\n    okBtn = html5.ext.Button(okLabel, callback=self.onOkBtnClick)';
	$m.__track_lines__[50] = 'html5.ext.popup.py, line 50:\n    okBtn.addClass("alert-btn-ok")';
	$m.__track_lines__[51] = 'html5.ext.popup.py, line 51:\n    self.appendChild(okBtn)';
	$m.__track_lines__[53] = 'html5.ext.popup.py, line 53:\n    self.sinkEvent("onKeyDown")';
	$m.__track_lines__[54] = 'html5.ext.popup.py, line 54:\n    okBtn.focus()';
	$m.__track_lines__[56] = 'html5.ext.popup.py, line 56:\n    def drop(self):';
	$m.__track_lines__[57] = 'html5.ext.popup.py, line 57:\n    self.okCallback = None';
	$m.__track_lines__[58] = 'html5.ext.popup.py, line 58:\n    self.close()';
	$m.__track_lines__[60] = 'html5.ext.popup.py, line 60:\n    def onOkBtnClick(self, sender=None):';
	$m.__track_lines__[61] = 'html5.ext.popup.py, line 61:\n    if self.okCallback:';
	$m.__track_lines__[62] = 'html5.ext.popup.py, line 62:\n    self.okCallback(self)';
	$m.__track_lines__[64] = 'html5.ext.popup.py, line 64:\n    self.drop()';
	$m.__track_lines__[66] = 'html5.ext.popup.py, line 66:\n    def onKeyDown(self, event):';
	$m.__track_lines__[67] = 'html5.ext.popup.py, line 67:\n    if hasattr(event, "key"):';
	$m.__track_lines__[68] = 'html5.ext.popup.py, line 68:\n    key = event.key';
	$m.__track_lines__[70] = 'html5.ext.popup.py, line 70:\n    key = event.keyIdentifier';
	$m.__track_lines__[72] = 'html5.ext.popup.py, line 72:\n    key = None';
	$m.__track_lines__[74] = 'html5.ext.popup.py, line 74:\n    if key == "Enter":';
	$m.__track_lines__[75] = 'html5.ext.popup.py, line 75:\n    event.stopPropagation()';
	$m.__track_lines__[76] = 'html5.ext.popup.py, line 76:\n    event.preventDefault()';
	$m.__track_lines__[77] = 'html5.ext.popup.py, line 77:\n    self.onOkBtnClick()';
	$m.__track_lines__[79] = 'html5.ext.popup.py, line 79:\n    class YesNoDialog( Popup ):';
	$m.__track_lines__[80] = 'html5.ext.popup.py, line 80:\n    def __init__(self, question, title=None, yesCallback=None, noCallback=None, yesLabel="Yes", noLabel="No", *args, **kwargs):';
	$m.__track_lines__[81] = 'html5.ext.popup.py, line 81:\n    super( YesNoDialog, self ).__init__( title, *args, **kwargs )';
	$m.__track_lines__[82] = 'html5.ext.popup.py, line 82:\n    self["class"].append("yesnodialog")';
	$m.__track_lines__[84] = 'html5.ext.popup.py, line 84:\n    self.yesCallback = yesCallback';
	$m.__track_lines__[85] = 'html5.ext.popup.py, line 85:\n    self.noCallback = noCallback';
	$m.__track_lines__[87] = 'html5.ext.popup.py, line 87:\n    lbl = html5.Span()';
	$m.__track_lines__[88] = 'html5.ext.popup.py, line 88:\n    lbl["class"].append("question")';
	$m.__track_lines__[89] = 'html5.ext.popup.py, line 89:\n    self.appendChild(lbl)';
	$m.__track_lines__[91] = 'html5.ext.popup.py, line 91:\n    if isinstance(question, html5.Widget):';
	$m.__track_lines__[92] = 'html5.ext.popup.py, line 92:\n    lbl.appendChild(question)';
	$m.__track_lines__[94] = 'html5.ext.popup.py, line 94:\n    html5.utils.textToHtml(lbl, question)';
	$m.__track_lines__[96] = 'html5.ext.popup.py, line 96:\n    btnYes = html5.ext.Button(yesLabel, callback=self.onYesClicked )';
	$m.__track_lines__[97] = 'html5.ext.popup.py, line 97:\n    btnYes["class"].append("btn_yes")';
	$m.__track_lines__[98] = 'html5.ext.popup.py, line 98:\n    self.appendChild(btnYes)';
	$m.__track_lines__[100] = 'html5.ext.popup.py, line 100:\n    if len(noLabel):';
	$m.__track_lines__[101] = 'html5.ext.popup.py, line 101:\n    btnNo = html5.ext.Button(noLabel, callback=self.onNoClicked )';
	$m.__track_lines__[102] = 'html5.ext.popup.py, line 102:\n    btnNo["class"].append("btn_no")';
	$m.__track_lines__[103] = 'html5.ext.popup.py, line 103:\n    self.appendChild(btnNo)';
	$m.__track_lines__[105] = 'html5.ext.popup.py, line 105:\n    self.sinkEvent("onkeydown")';
	$m.__track_lines__[106] = 'html5.ext.popup.py, line 106:\n    btnYes.focus()';
	$m.__track_lines__[108] = 'html5.ext.popup.py, line 108:\n    def onkeydown(self, event):';
	$m.__track_lines__[109] = 'html5.ext.popup.py, line 109:\n    if hasattr(event, "key"):';
	$m.__track_lines__[110] = 'html5.ext.popup.py, line 110:\n    key = event.key';
	$m.__track_lines__[113] = "html5.ext.popup.py, line 113:\n    if event.keyIdentifier in ['Esc', 'U+001B']:";
	$m.__track_lines__[114] = 'html5.ext.popup.py, line 114:\n    key = "Escape"';
	$m.__track_lines__[116] = 'html5.ext.popup.py, line 116:\n    key = event.keyIdentifier';
	$m.__track_lines__[118] = 'html5.ext.popup.py, line 118:\n    key = None';
	$m.__track_lines__[120] = 'html5.ext.popup.py, line 120:\n    if "Enter" == key:';
	$m.__track_lines__[121] = 'html5.ext.popup.py, line 121:\n    event.stopPropagation()';
	$m.__track_lines__[122] = 'html5.ext.popup.py, line 122:\n    event.preventDefault()';
	$m.__track_lines__[123] = 'html5.ext.popup.py, line 123:\n    self.onYesClicked()';
	$m.__track_lines__[125] = 'html5.ext.popup.py, line 125:\n    event.stopPropagation()';
	$m.__track_lines__[126] = 'html5.ext.popup.py, line 126:\n    event.preventDefault()';
	$m.__track_lines__[127] = 'html5.ext.popup.py, line 127:\n    self.onNoClicked()';
	$m.__track_lines__[129] = 'html5.ext.popup.py, line 129:\n    def drop(self):';
	$m.__track_lines__[130] = 'html5.ext.popup.py, line 130:\n    self.yesCallback = None';
	$m.__track_lines__[131] = 'html5.ext.popup.py, line 131:\n    self.noCallback = None';
	$m.__track_lines__[132] = 'html5.ext.popup.py, line 132:\n    self.close()';
	$m.__track_lines__[134] = 'html5.ext.popup.py, line 134:\n    def onYesClicked(self, *args, **kwargs ):';
	$m.__track_lines__[135] = 'html5.ext.popup.py, line 135:\n    if self.yesCallback:';
	$m.__track_lines__[136] = 'html5.ext.popup.py, line 136:\n    self.yesCallback( self )';
	$m.__track_lines__[138] = 'html5.ext.popup.py, line 138:\n    self.drop()';
	$m.__track_lines__[140] = 'html5.ext.popup.py, line 140:\n    def onNoClicked(self, *args, **kwargs ):';
	$m.__track_lines__[141] = 'html5.ext.popup.py, line 141:\n    if self.noCallback:';
	$m.__track_lines__[142] = 'html5.ext.popup.py, line 142:\n    self.noCallback( self )';
	$m.__track_lines__[144] = 'html5.ext.popup.py, line 144:\n    self.drop()';
	$m.__track_lines__[146] = 'html5.ext.popup.py, line 146:\n    class SelectDialog( Popup ):';
	$m.__track_lines__[148] = 'html5.ext.popup.py, line 148:\n    def __init__( self, prompt, items=None, title=None, okBtn="OK", cancelBtn="Cancel", forceSelect=False, *args, **kwargs ):';
	$m.__track_lines__[149] = 'html5.ext.popup.py, line 149:\n    super( SelectDialog, self ).__init__( title, *args, **kwargs )';
	$m.__track_lines__[150] = 'html5.ext.popup.py, line 150:\n    self["class"].append("selectdialog")';
	$m.__track_lines__[153] = 'html5.ext.popup.py, line 153:\n    if prompt:';
	$m.__track_lines__[154] = 'html5.ext.popup.py, line 154:\n    lbl = html5.Span()';
	$m.__track_lines__[155] = 'html5.ext.popup.py, line 155:\n    lbl[ "class" ].append( "prompt" )';
	$m.__track_lines__[156] = 'html5.ext.popup.py, line 156:\n    lbl.appendChild( html5.TextNode( prompt ) )';
	$m.__track_lines__[157] = 'html5.ext.popup.py, line 157:\n    self.appendChild( lbl )';
	$m.__track_lines__[160] = 'html5.ext.popup.py, line 160:\n    self.items = []';
	$m.__track_lines__[162] = 'html5.ext.popup.py, line 162:\n    if not forceSelect and len( items ) <= 3:';
	$m.__track_lines__[163] = 'html5.ext.popup.py, line 163:\n    for item in items:';
	$m.__track_lines__[164] = 'html5.ext.popup.py, line 164:\n    btn = html5.ext.Button( item.get( "title" ), callback=self.onAnyBtnClick )';
	$m.__track_lines__[165] = 'html5.ext.popup.py, line 165:\n    btn._callback = item.get( "callback" )';
	$m.__track_lines__[167] = 'html5.ext.popup.py, line 167:\n    if item.get( "class" ):';
	$m.__track_lines__[168] = 'html5.ext.popup.py, line 168:\n    btn[ "class" ].extend( item[ "class" ] )';
	$m.__track_lines__[170] = 'html5.ext.popup.py, line 170:\n    self.appendChild( btn )';
	$m.__track_lines__[171] = 'html5.ext.popup.py, line 171:\n    self.items.append( btn )';
	$m.__track_lines__[173] = 'html5.ext.popup.py, line 173:\n    self.select = html5.Select()';
	$m.__track_lines__[174] = 'html5.ext.popup.py, line 174:\n    self.appendChild( self.select )';
	$m.__track_lines__[176] = 'html5.ext.popup.py, line 176:\n    for i, item in enumerate( items ):';
	$m.__track_lines__[177] = 'html5.ext.popup.py, line 177:\n    opt = html5.Option()';
	$m.__track_lines__[179] = 'html5.ext.popup.py, line 179:\n    opt[ "value" ] = str( i )';
	$m.__track_lines__[180] = 'html5.ext.popup.py, line 180:\n    opt._callback = item.get( "callback" )';
	$m.__track_lines__[181] = 'html5.ext.popup.py, line 181:\n    opt.appendChild( html5.TextNode( item.get( "title" ) ) )';
	$m.__track_lines__[183] = 'html5.ext.popup.py, line 183:\n    self.select.appendChild( opt )';
	$m.__track_lines__[184] = 'html5.ext.popup.py, line 184:\n    self.items.append( opt )';
	$m.__track_lines__[186] = 'html5.ext.popup.py, line 186:\n    if okBtn:';
	$m.__track_lines__[187] = 'html5.ext.popup.py, line 187:\n    self.appendChild( html5.ext.Button( okBtn, callback=self.onOkClick ) )';
	$m.__track_lines__[189] = 'html5.ext.popup.py, line 189:\n    if cancelBtn:';
	$m.__track_lines__[190] = 'html5.ext.popup.py, line 190:\n    self.appendChild( html5.ext.Button( cancelBtn, callback=self.onCancelClick ) )';
	$m.__track_lines__[192] = 'html5.ext.popup.py, line 192:\n    def onAnyBtnClick( self, sender = None ):';
	$m.__track_lines__[193] = 'html5.ext.popup.py, line 193:\n    for btn in self.items:';
	$m.__track_lines__[194] = 'html5.ext.popup.py, line 194:\n    if btn == sender:';
	$m.__track_lines__[195] = 'html5.ext.popup.py, line 195:\n    if btn._callback:';
	$m.__track_lines__[196] = 'html5.ext.popup.py, line 196:\n    btn._callback( self )';
	$m.__track_lines__[197] = 'html5.ext.popup.py, line 197:\n    break';
	$m.__track_lines__[199] = 'html5.ext.popup.py, line 199:\n    self.items = None';
	$m.__track_lines__[200] = 'html5.ext.popup.py, line 200:\n    self.close()';
	$m.__track_lines__[202] = 'html5.ext.popup.py, line 202:\n    def onCancelClick(self, sender = None ):';
	$m.__track_lines__[203] = 'html5.ext.popup.py, line 203:\n    self.close()';
	$m.__track_lines__[205] = 'html5.ext.popup.py, line 205:\n    def onOkClick(self, sender = None ):';
	$m.__track_lines__[206] = 'html5.ext.popup.py, line 206:\n    if self.select[ "selectedIndex" ] < 0:';
	$m.__track_lines__[207] = 'html5.ext.popup.py, line 207:\n    return';
	$m.__track_lines__[209] = 'html5.ext.popup.py, line 209:\n    item = self.items[ int( self.select[ "options" ].item( self.select[ "selectedIndex" ] ).value ) ]';
	$m.__track_lines__[210] = 'html5.ext.popup.py, line 210:\n    if item._callback:';
	$m.__track_lines__[211] = 'html5.ext.popup.py, line 211:\n    item._callback( self )';
	$m.__track_lines__[213] = 'html5.ext.popup.py, line 213:\n    self.items = None';
	$m.__track_lines__[214] = 'html5.ext.popup.py, line 214:\n    self.select = None';
	$m.__track_lines__[215] = 'html5.ext.popup.py, line 215:\n    self.close()';


	$pyjs['track']['module']='html5.ext.popup';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'html5.ext');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['Popup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.popup';
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('__init__', function(title, id, className) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				title = arguments[1];
				id = arguments[2];
				className = arguments[3];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = className;
						className = arguments[4];
					}
				} else 				if (typeof id != 'undefined') {
					if (id !== null && typeof id['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = id;
						id = arguments[4];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][3][1];
			if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
			if (typeof className == 'undefined') className=arguments['callee']['__args__'][5][1];
			var $and1,lbl,$and2;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Popup'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'alertbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=8;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(className !== null))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](className);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=9;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append'](className);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			$pyjs['track']['lineno']=11;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](title);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs['track']['lineno']=12;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=13;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['__getitem__']('class')['append']('title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=14;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](title);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=15;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['track']['lineno']=18;
			self['id'] = id;
			$pyjs['track']['lineno']=20;
			self['frameDiv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'frameDiv')['__setitem__']('class', 'popup');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['frameDiv']['appendChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Body']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['appendChild']($p['getattr'](self, 'frameDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['title', null],['id', null],['className', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('close', function() {
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

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Body']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()['removeChild']($p['getattr'](self, 'frameDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=28;
			self['frameDiv'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['close'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Popup', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['Alert'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.popup';
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('__init__', function(msg, title, okCallback, okLabel) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				title = arguments[2];
				okCallback = arguments[3];
				okLabel = arguments[4];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof okLabel != 'undefined') {
					if (okLabel !== null && typeof okLabel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = okLabel;
						okLabel = arguments[5];
					}
				} else 				if (typeof okCallback != 'undefined') {
					if (okCallback !== null && typeof okCallback['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = okCallback;
						okCallback = arguments[5];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[5];
					}
				} else 				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][4][1];
			if (typeof okCallback == 'undefined') okCallback=arguments['callee']['__args__'][5][1];
			if (typeof okLabel == 'undefined') okLabel=arguments['callee']['__args__'][6][1];
			var okBtn,message;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Alert'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), '__init__', args, kwargs, [{}, title]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('alert');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=38;
			self['okCallback'] = okCallback;
			$pyjs['track']['lineno']=40;
			message = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return message['addClass']('alert-msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](message);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=44;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](msg, $p['getattr']($m['html5'], 'Widget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs['track']['lineno']=45;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return message['appendChild'](msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['textToHtml'](message, msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs['track']['lineno']=49;
			okBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onOkBtnClick')}, okLabel]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return okBtn['addClass']('alert-btn-ok');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=51;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](okBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=53;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onKeyDown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return okBtn['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg'],['title', null],['okCallback', null],['okLabel', 'OK']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('drop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			self['okCallback'] = null;
			$pyjs['track']['lineno']=58;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drop'] = $method;
		$pyjs['track']['lineno']=60;
		$method = $pyjs__bind_method2('onOkBtnClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=61;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'okCallback'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=62;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['okCallback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			}
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['drop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onOkBtnClick'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var key;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'key');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=68;
				key = $p['getattr'](event, 'key');
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'keyIdentifier');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs['track']['lineno']=70;
				key = $p['getattr'](event, 'keyIdentifier');
			}
			else {
				$pyjs['track']['lineno']=72;
				key = null;
			}
			$pyjs['track']['lineno']=74;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](key, 'Enter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onOkBtnClick']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Alert', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=79;
	$m['YesNoDialog'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.popup';
		$pyjs['track']['lineno']=80;
		$method = $pyjs__bind_method2('__init__', function(question, title, yesCallback, noCallback, yesLabel, noLabel) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

				var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				question = arguments[1];
				title = arguments[2];
				yesCallback = arguments[3];
				noCallback = arguments[4];
				yesLabel = arguments[5];
				noLabel = arguments[6];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof noLabel != 'undefined') {
					if (noLabel !== null && typeof noLabel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = noLabel;
						noLabel = arguments[7];
					}
				} else 				if (typeof yesLabel != 'undefined') {
					if (yesLabel !== null && typeof yesLabel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = yesLabel;
						yesLabel = arguments[7];
					}
				} else 				if (typeof noCallback != 'undefined') {
					if (noCallback !== null && typeof noCallback['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = noCallback;
						noCallback = arguments[7];
					}
				} else 				if (typeof yesCallback != 'undefined') {
					if (yesCallback !== null && typeof yesCallback['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = yesCallback;
						yesCallback = arguments[7];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[7];
					}
				} else 				if (typeof question != 'undefined') {
					if (question !== null && typeof question['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = question;
						question = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][4][1];
			if (typeof yesCallback == 'undefined') yesCallback=arguments['callee']['__args__'][5][1];
			if (typeof noCallback == 'undefined') noCallback=arguments['callee']['__args__'][6][1];
			if (typeof yesLabel == 'undefined') yesLabel=arguments['callee']['__args__'][7][1];
			if (typeof noLabel == 'undefined') noLabel=arguments['callee']['__args__'][8][1];
			var lbl,btnYes,btnNo;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=80;
			$pyjs['track']['lineno']=81;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['YesNoDialog'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), '__init__', args, kwargs, [{}, title]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('yesnodialog');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=84;
			self['yesCallback'] = yesCallback;
			$pyjs['track']['lineno']=85;
			self['noCallback'] = noCallback;
			$pyjs['track']['lineno']=87;
			lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return lbl['__getitem__']('class')['append']('question');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=91;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](question, $p['getattr']($m['html5'], 'Widget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['appendChild'](question);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=94;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['textToHtml'](lbl, question);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			}
			$pyjs['track']['lineno']=96;
			btnYes = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onYesClicked')}, yesLabel]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=97;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return btnYes['__getitem__']('class')['append']('btn_yes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=98;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](btnYes);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=100;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](noLabel);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs['track']['lineno']=101;
				btnNo = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onNoClicked')}, noLabel]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=102;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return btnNo['__getitem__']('class')['append']('btn_no');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs['track']['lineno']=103;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](btnNo);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			}
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onkeydown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=106;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return btnYes['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['question'],['title', null],['yesCallback', null],['noCallback', null],['yesLabel', 'Yes'],['noLabel', 'No']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=108;
		$method = $pyjs__bind_method2('onkeydown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var key;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=108;
			$pyjs['track']['lineno']=109;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'key');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=110;
				key = $p['getattr'](event, 'key');
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](event, 'keyIdentifier');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=113;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['Esc', 'U+001B']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()['__contains__']($p['getattr'](event, 'keyIdentifier')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
					$pyjs['track']['lineno']=114;
					key = 'Escape';
				}
				else {
					$pyjs['track']['lineno']=116;
					key = $p['getattr'](event, 'keyIdentifier');
				}
			}
			else {
				$pyjs['track']['lineno']=118;
				key = null;
			}
			$pyjs['track']['lineno']=120;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']('Enter', key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs['track']['lineno']=121;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onYesClicked']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']('Escape', key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
				$pyjs['track']['lineno']=125;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['track']['lineno']=126;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=127;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onNoClicked']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onkeydown'] = $method;
		$pyjs['track']['lineno']=129;
		$method = $pyjs__bind_method2('drop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=130;
			self['yesCallback'] = null;
			$pyjs['track']['lineno']=131;
			self['noCallback'] = null;
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drop'] = $method;
		$pyjs['track']['lineno']=134;
		$method = $pyjs__bind_method2('onYesClicked', function() {
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

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'yesCallback'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs['track']['lineno']=136;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['yesCallback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			}
			$pyjs['track']['lineno']=138;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['drop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onYesClicked'] = $method;
		$pyjs['track']['lineno']=140;
		$method = $pyjs__bind_method2('onNoClicked', function() {
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

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':140};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=140;
			$pyjs['track']['lineno']=141;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'noCallback'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=142;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['noCallback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			}
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['drop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onNoClicked'] = $method;
		$pyjs['track']['lineno']=79;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('YesNoDialog', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=146;
	$m['SelectDialog'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.ext.popup';
		$pyjs['track']['lineno']=148;
		$method = $pyjs__bind_method2('__init__', function(prompt, items, title, okBtn, cancelBtn, forceSelect) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

				var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				prompt = arguments[1];
				items = arguments[2];
				title = arguments[3];
				okBtn = arguments[4];
				cancelBtn = arguments[5];
				forceSelect = arguments[6];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof forceSelect != 'undefined') {
					if (forceSelect !== null && typeof forceSelect['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = forceSelect;
						forceSelect = arguments[7];
					}
				} else 				if (typeof cancelBtn != 'undefined') {
					if (cancelBtn !== null && typeof cancelBtn['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cancelBtn;
						cancelBtn = arguments[7];
					}
				} else 				if (typeof okBtn != 'undefined') {
					if (okBtn !== null && typeof okBtn['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = okBtn;
						okBtn = arguments[7];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[7];
					}
				} else 				if (typeof items != 'undefined') {
					if (items !== null && typeof items['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = items;
						items = arguments[7];
					}
				} else 				if (typeof prompt != 'undefined') {
					if (prompt !== null && typeof prompt['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = prompt;
						prompt = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof items == 'undefined') items=arguments['callee']['__args__'][4][1];
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][5][1];
			if (typeof okBtn == 'undefined') okBtn=arguments['callee']['__args__'][6][1];
			if (typeof cancelBtn == 'undefined') cancelBtn=arguments['callee']['__args__'][7][1];
			if (typeof forceSelect == 'undefined') forceSelect=arguments['callee']['__args__'][8][1];
			var $iter1_iter,$iter2_type,btn,lbl,$iter2_iter,$iter1_array,opt,$and3,$iter1_nextval,$and4,$iter2_idx,$iter2_nextval,$iter1_type,i,item,$iter1_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=148;
			$pyjs['track']['lineno']=149;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectDialog'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})(), '__init__', args, kwargs, [{}, title]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['track']['lineno']=150;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('selectdialog');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['track']['lineno']=153;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](prompt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
				$pyjs['track']['lineno']=154;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=155;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['__getitem__']('class')['append']('prompt');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=156;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](prompt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['track']['lineno']=157;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			}
			$pyjs['track']['lineno']=160;
			self['items'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['track']['lineno']=162;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=!$p['bool'](forceSelect))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](items);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 3) < 1):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
				$pyjs['track']['lineno']=163;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return items;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					item = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=164;
					btn = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onAnyBtnClick')}, (function(){try{try{$pyjs['in_try_except'] += 1;
					return item['get']('title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
					$pyjs['track']['lineno']=165;
					btn['_callback'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return item['get']('callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					$pyjs['track']['lineno']=167;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return item['get']('class');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
						$pyjs['track']['lineno']=168;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return btn['__getitem__']('class')['extend'](item['__getitem__']('class'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
					}
					$pyjs['track']['lineno']=170;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild'](btn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
					$pyjs['track']['lineno']=171;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['items']['append'](btn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.ext.popup';
			}
			else {
				$pyjs['track']['lineno']=173;
				self['select'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['track']['lineno']=174;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'select'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				$pyjs['track']['lineno']=176;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate'](items);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
					i = $tupleassign1[0];
					item = $tupleassign1[1];
					$pyjs['track']['lineno']=177;
					opt = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
					$pyjs['track']['lineno']=179;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
					$pyjs['track']['lineno']=180;
					opt['_callback'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return item['get']('callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=181;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return item['get']('title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
					$pyjs['track']['lineno']=183;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['select']['appendChild'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
					$pyjs['track']['lineno']=184;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['items']['append'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.ext.popup';
				$pyjs['track']['lineno']=186;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](okBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
					$pyjs['track']['lineno']=187;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onOkClick')}, okBtn]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				}
				$pyjs['track']['lineno']=189;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](cancelBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
					$pyjs['track']['lineno']=190;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onCancelClick')}, cancelBtn]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['prompt'],['items', null],['title', null],['okBtn', 'OK'],['cancelBtn', 'Cancel'],['forceSelect', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=192;
		$method = $pyjs__bind_method2('onAnyBtnClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter3_idx,$iter3_type,$iter3_iter,$iter3_array,btn,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=192;
			$pyjs['track']['lineno']=193;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'items');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				btn = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=194;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](btn, sender));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
					$pyjs['track']['lineno']=195;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](btn, '_callback'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
						$pyjs['track']['lineno']=196;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return btn['_callback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
					}
					$pyjs['track']['lineno']=197;
					break;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=199;
			self['items'] = null;
			$pyjs['track']['lineno']=200;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onAnyBtnClick'] = $method;
		$pyjs['track']['lineno']=202;
		$method = $pyjs__bind_method2('onCancelClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.ext.popup', 'lineno':202};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=202;
			$pyjs['track']['lineno']=203;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onCancelClick'] = $method;
		$pyjs['track']['lineno']=205;
		$method = $pyjs__bind_method2('onOkClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var item;
			$pyjs['track']={'module':'html5.ext.popup', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.ext.popup';
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=206;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']($p['getattr'](self, 'select')['__getitem__']('selectedIndex'), 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
				$pyjs['track']['lineno']=207;
				$pyjs['track']['lineno']=207;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=209;
			item = $p['getattr'](self, 'items')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'select')['__getitem__']('options')['item']($p['getattr'](self, 'select')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})(), 'value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})());
			$pyjs['track']['lineno']=210;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](item, '_callback'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return item['_callback'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			}
			$pyjs['track']['lineno']=213;
			self['items'] = null;
			$pyjs['track']['lineno']=214;
			self['select'] = null;
			$pyjs['track']['lineno']=215;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onOkClick'] = $method;
		$pyjs['track']['lineno']=146;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectDialog', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.ext.popup */


/* end module: html5.ext.popup */


/*
PYJS_DEPS: ['html5']
*/
