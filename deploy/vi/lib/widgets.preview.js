/* start module: widgets.preview */
$pyjs['loaded_modules']['widgets.preview'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.preview']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.preview'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.preview'];
	$m['__repr__'] = function() { return '<module: widgets.preview>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.preview';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['preview'] = $pyjs['loaded_modules']['widgets.preview'];
	$m.__track_lines__[1] = 'widgets.preview.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.preview.py, line 2:\n    from config import conf';
	$m.__track_lines__[4] = 'widgets.preview.py, line 4:\n    class Preview( html5.Div ):';
	$m.__track_lines__[5] = 'widgets.preview.py, line 5:\n    def __init__(self, urls, entry, modul, *args, **kwargs ):';
	$m.__track_lines__[6] = 'widgets.preview.py, line 6:\n    super( Preview, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[7] = 'widgets.preview.py, line 7:\n    self.urls = urls';
	$m.__track_lines__[8] = 'widgets.preview.py, line 8:\n    self.entry = entry';
	$m.__track_lines__[9] = 'widgets.preview.py, line 9:\n    self.module = modul';
	$m.__track_lines__[10] = 'widgets.preview.py, line 10:\n    containerDiv = html5.Div()';
	$m.__track_lines__[11] = 'widgets.preview.py, line 11:\n    containerDiv["class"].append("actionbar")';
	$m.__track_lines__[12] = 'widgets.preview.py, line 12:\n    self.appendChild(containerDiv)';
	$m.__track_lines__[13] = 'widgets.preview.py, line 13:\n    self.urlCb = html5.Select()';
	$m.__track_lines__[14] = 'widgets.preview.py, line 14:\n    containerDiv.appendChild(self.urlCb)';
	$m.__track_lines__[15] = 'widgets.preview.py, line 15:\n    self.previewFrame = html5.Iframe()';
	$m.__track_lines__[16] = 'widgets.preview.py, line 16:\n    self.appendChild(self.previewFrame)';
	$m.__track_lines__[17] = 'widgets.preview.py, line 17:\n    btnClose = html5.ext.Button("Close", callback=self.doClose)';
	$m.__track_lines__[18] = 'widgets.preview.py, line 18:\n    btnClose["class"].append("icon close")';
	$m.__track_lines__[19] = 'widgets.preview.py, line 19:\n    containerDiv.appendChild(btnClose)';
	$m.__track_lines__[20] = 'widgets.preview.py, line 20:\n    currentUrl = None';
	$m.__track_lines__[21] = 'widgets.preview.py, line 21:\n    for name,url in urls.items():';
	$m.__track_lines__[22] = 'widgets.preview.py, line 22:\n    o = html5.Option()';
	$m.__track_lines__[23] = 'widgets.preview.py, line 23:\n    o["value"] = url';
	$m.__track_lines__[24] = 'widgets.preview.py, line 24:\n    o.appendChild(html5.TextNode(name))';
	$m.__track_lines__[25] = 'widgets.preview.py, line 25:\n    self.urlCb.appendChild(o)';
	$m.__track_lines__[26] = 'widgets.preview.py, line 26:\n    if currentUrl is None:';
	$m.__track_lines__[27] = 'widgets.preview.py, line 27:\n    currentUrl = url';
	$m.__track_lines__[28] = 'widgets.preview.py, line 28:\n    self.setUrl( currentUrl )';
	$m.__track_lines__[29] = 'widgets.preview.py, line 29:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[30] = 'widgets.preview.py, line 30:\n    self["class"].append("preview")';
	$m.__track_lines__[32] = 'widgets.preview.py, line 32:\n    def onChange(self, event):';
	$m.__track_lines__[33] = 'widgets.preview.py, line 33:\n    event.stopPropagation()';
	$m.__track_lines__[34] = 'widgets.preview.py, line 34:\n    newUrl = self.urlCb["options"].item(self.urlCb["selectedIndex"]).value';
	$m.__track_lines__[35] = 'widgets.preview.py, line 35:\n    self.setUrl( newUrl )';
	$m.__track_lines__[37] = 'widgets.preview.py, line 37:\n    def setUrl(self, url ):';
	$m.__track_lines__[38] = 'widgets.preview.py, line 38:\n    url = url.replace("{{id}}",self.entry["id"]).replace("{{modul}}",self.module )';
	$m.__track_lines__[39] = 'widgets.preview.py, line 39:\n    self.previewFrame["src"] = url';
	$m.__track_lines__[41] = 'widgets.preview.py, line 41:\n    def doClose(self, *args, **kwargs ):';
	$m.__track_lines__[42] = 'widgets.preview.py, line 42:\n    conf["mainWindow"].removeWidget(self)';


	$pyjs['track']['module']='widgets.preview';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['Preview'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.preview';
		$pyjs['track']['lineno']=5;
		$method = $pyjs__bind_method2('__init__', function(urls, entry, modul) {
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
				urls = arguments[1];
				entry = arguments[2];
				modul = arguments[3];
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
				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof entry != 'undefined') {
					if (entry !== null && typeof entry['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = entry;
						entry = arguments[4];
					}
				} else 				if (typeof urls != 'undefined') {
					if (urls !== null && typeof urls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = urls;
						urls = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			var currentUrl,$iter1_nextval,$iter1_type,name,url,btnClose,o,$iter1_iter,$iter1_array,containerDiv,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs['track']={'module':'widgets.preview', 'lineno':5};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.preview';
			$pyjs['track']['lineno']=5;
			$pyjs['track']['lineno']=6;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Preview'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=7;
			self['urls'] = urls;
			$pyjs['track']['lineno']=8;
			self['entry'] = entry;
			$pyjs['track']['lineno']=9;
			self['module'] = modul;
			$pyjs['track']['lineno']=10;
			containerDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return containerDiv['__getitem__']('class')['append']('actionbar');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](containerDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=13;
			self['urlCb'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return containerDiv['appendChild']($p['getattr'](self, 'urlCb'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=15;
			self['previewFrame'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Iframe']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'previewFrame'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=17;
			btnClose = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doClose')}, 'Close']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return btnClose['__getitem__']('class')['append']('icon close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return containerDiv['appendChild'](btnClose);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=20;
			currentUrl = null;
			$pyjs['track']['lineno']=21;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return urls['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				name = $tupleassign1[0];
				url = $tupleassign1[1];
				$pyjs['track']['lineno']=22;
				o = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=23;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['__setitem__']('value', url);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=24;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['urlCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['track']['lineno']=26;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((currentUrl === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs['track']['lineno']=27;
					currentUrl = url;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.preview';
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setUrl'](currentUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['urls'],['entry'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var newUrl;
			$pyjs['track']={'module':'widgets.preview', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.preview';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=34;
			newUrl = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), 'value');
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setUrl'](newUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('setUrl', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			$pyjs['track']={'module':'widgets.preview', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.preview';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			url = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return url['$$replace']('{{id}}', $p['getattr'](self, 'entry')['__getitem__']('id'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()['$$replace']('{{modul}}', $p['getattr'](self, 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=39;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'previewFrame')['__setitem__']('src', url);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setUrl'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('doClose', function() {
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

			$pyjs['track']={'module':'widgets.preview', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.preview';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doClose'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Preview', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.preview */


/* end module: widgets.preview */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config']
*/
