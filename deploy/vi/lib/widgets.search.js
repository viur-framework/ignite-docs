/* start module: widgets.search */
$pyjs['loaded_modules']['widgets.search'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.search']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.search'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.search'];
	$m['__repr__'] = function() { return '<module: widgets.search>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.search';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['search'] = $pyjs['loaded_modules']['widgets.search'];
	$m.__track_lines__[1] = 'widgets.search.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.search.py, line 2:\n    from html5.keycodes import isReturn';
	$m.__track_lines__[3] = 'widgets.search.py, line 3:\n    from event import EventDispatcher';
	$m.__track_lines__[4] = 'widgets.search.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[6] = 'widgets.search.py, line 6:\n    class Search( html5.Div ):';
	$m.__track_lines__[7] = 'widgets.search.py, line 7:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[8] = 'widgets.search.py, line 8:\n    super( Search, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[9] = 'widgets.search.py, line 9:\n    self.startSearchEvent = EventDispatcher("startSearch")';
	$m.__track_lines__[10] = 'widgets.search.py, line 10:\n    self["class"].append("search")';
	$m.__track_lines__[11] = 'widgets.search.py, line 11:\n    lblSearch = html5.H2()';
	$m.__track_lines__[12] = 'widgets.search.py, line 12:\n    lblSearch.appendChild( html5.TextNode(translate("Fulltext search")))';
	$m.__track_lines__[13] = 'widgets.search.py, line 13:\n    self.appendChild( lblSearch )';
	$m.__track_lines__[14] = 'widgets.search.py, line 14:\n    self.searchInput = html5.Input()';
	$m.__track_lines__[15] = 'widgets.search.py, line 15:\n    self.searchInput["type"] = "text"';
	$m.__track_lines__[16] = 'widgets.search.py, line 16:\n    self.appendChild(self.searchInput)';
	$m.__track_lines__[17] = 'widgets.search.py, line 17:\n    self.btn = html5.ext.Button(translate("Search"), callback=self.doSearch)';
	$m.__track_lines__[18] = 'widgets.search.py, line 18:\n    self.appendChild(self.btn)';
	$m.__track_lines__[19] = 'widgets.search.py, line 19:\n    self.sinkEvent("onKeyDown")';
	$m.__track_lines__[20] = 'widgets.search.py, line 20:\n    self.last_search = ""';
	$m.__track_lines__[22] = 'widgets.search.py, line 22:\n    def doSearch(self, *args, **kwargs):';
	$m.__track_lines__[23] = 'widgets.search.py, line 23:\n    if self.searchInput["value"] != self.last_search:';
	$m.__track_lines__[24] = 'widgets.search.py, line 24:\n    if len( self.searchInput[ "value" ] ):';
	$m.__track_lines__[25] = 'widgets.search.py, line 25:\n    self.startSearchEvent.fire( self.searchInput["value"] )';
	$m.__track_lines__[27] = 'widgets.search.py, line 27:\n    self.resetSearch()';
	$m.__track_lines__[29] = 'widgets.search.py, line 29:\n    self.last_search = self.searchInput["value"]';
	$m.__track_lines__[31] = 'widgets.search.py, line 31:\n    def resetSearch(self):';
	$m.__track_lines__[32] = 'widgets.search.py, line 32:\n    self.startSearchEvent.fire( None )';
	$m.__track_lines__[34] = 'widgets.search.py, line 34:\n    def onKeyDown(self, event):';
	$m.__track_lines__[35] = 'widgets.search.py, line 35:\n    if isReturn(event.keyCode):';
	$m.__track_lines__[36] = 'widgets.search.py, line 36:\n    self.doSearch()';
	$m.__track_lines__[37] = 'widgets.search.py, line 37:\n    event.preventDefault()';
	$m.__track_lines__[38] = 'widgets.search.py, line 38:\n    event.stopPropagation()';
	$m.__track_lines__[40] = 'widgets.search.py, line 40:\n    def resetLoadingState(self):';
	$m.__track_lines__[41] = 'widgets.search.py, line 41:\n    if "is_loading" in self.btn["class"]:';
	$m.__track_lines__[42] = 'widgets.search.py, line 42:\n    self.btn["class"].remove("is_loading")';
	$m.__track_lines__[44] = 'widgets.search.py, line 44:\n    def reevaluate(self):';
	$m.__track_lines__[45] = 'widgets.search.py, line 45:\n    self.doSearch()';
	$m.__track_lines__[47] = 'widgets.search.py, line 47:\n    def focus(self):';
	$m.__track_lines__[48] = 'widgets.search.py, line 48:\n    self.searchInput.focus()';


	$pyjs['track']['module']='widgets.search';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['isReturn'] = $p['___import___']('html5.keycodes.isReturn', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['Search'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.search';
		$pyjs['track']['lineno']=7;
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
			var lblSearch;
			$pyjs['track']={'module':'widgets.search', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Search'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=9;
			self['startSearchEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('startSearch');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('search');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=11;
			lblSearch = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['H2']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return lblSearch['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Fulltext search');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](lblSearch);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=14;
			self['searchInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'searchInput')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'searchInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=17;
			self['btn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSearch')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Search');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'btn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onKeyDown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=20;
			self['last_search'] = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('doSearch', function() {
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

			$pyjs['track']={'module':'widgets.search', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](self, 'searchInput')['__getitem__']('value'), $p['getattr'](self, 'last_search')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=24;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'searchInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs['track']['lineno']=25;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['startSearchEvent']['fire']($p['getattr'](self, 'searchInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=27;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['resetSearch']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				}
				$pyjs['track']['lineno']=29;
				self['last_search'] = $p['getattr'](self, 'searchInput')['__getitem__']('value');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doSearch'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('resetSearch', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.search', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['startSearchEvent']['fire'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetSearch'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.search', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['isReturn']($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doSearch']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=37;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=38;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=40;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.search', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=41;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'btn')['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=42;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'btn')['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('reevaluate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.search', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['doSearch']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reevaluate'] = $method;
		$pyjs['track']['lineno']=47;
		$method = $pyjs__bind_method2('focus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.search', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.search';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['searchInput']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focus'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Search', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.search */


/* end module: widgets.search */


/*
PYJS_DEPS: ['html5', 'html5.keycodes.isReturn', 'html5.keycodes', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n']
*/
