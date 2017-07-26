/* start module: sidebarwidgets.filterselector */
$pyjs['loaded_modules']['sidebarwidgets.filterselector'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets.filterselector']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	if(typeof $pyjs['loaded_modules']['sidebarwidgets'] == 'undefined' || !$pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) $p['___import___']('sidebarwidgets', null);
	var $m = $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets.filterselector>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets.filterselector';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['sidebarwidgets']['filterselector'] = $pyjs['loaded_modules']['sidebarwidgets.filterselector'];
	$m.__track_lines__[1] = 'sidebarwidgets.filterselector.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'sidebarwidgets.filterselector.py, line 2:\n    from config import conf';
	$m.__track_lines__[3] = 'sidebarwidgets.filterselector.py, line 3:\n    from widgets.search import Search';
	$m.__track_lines__[4] = 'sidebarwidgets.filterselector.py, line 4:\n    from priorityqueue import extendedSearchWidgetSelector';
	$m.__track_lines__[5] = 'sidebarwidgets.filterselector.py, line 5:\n    from pane import Pane';
	$m.__track_lines__[6] = 'sidebarwidgets.filterselector.py, line 6:\n    from i18n import translate';
	$m.__track_lines__[7] = 'sidebarwidgets.filterselector.py, line 7:\n    import utils';
	$m.__track_lines__[11] = 'sidebarwidgets.filterselector.py, line 11:\n    class CompoundFilter( html5.Div ):';
	$m.__track_lines__[12] = 'sidebarwidgets.filterselector.py, line 12:\n    def __init__(self, view, modul, embed=False, *args, **kwargs ):';
	$m.__track_lines__[13] = 'sidebarwidgets.filterselector.py, line 13:\n    super( CompoundFilter, self ).__init__( *args, **kwargs)';
	$m.__track_lines__[15] = 'sidebarwidgets.filterselector.py, line 15:\n    self["class"].append("compoundfilter")';
	$m.__track_lines__[16] = 'sidebarwidgets.filterselector.py, line 16:\n    self.view = view';
	$m.__track_lines__[17] = 'sidebarwidgets.filterselector.py, line 17:\n    self.module = modul';
	$m.__track_lines__[18] = 'sidebarwidgets.filterselector.py, line 18:\n    self.embed = embed';
	$m.__track_lines__[20] = 'sidebarwidgets.filterselector.py, line 20:\n    if embed:';
	$m.__track_lines__[21] = 'sidebarwidgets.filterselector.py, line 21:\n    self["class"].append("embed")';
	$m.__track_lines__[22] = 'sidebarwidgets.filterselector.py, line 22:\n    self["class"].append("expanded")';
	$m.__track_lines__[24] = 'sidebarwidgets.filterselector.py, line 24:\n    self["class"].append("standalone")';
	$m.__track_lines__[25] = 'sidebarwidgets.filterselector.py, line 25:\n    self["class"].append("collapsed")';
	$m.__track_lines__[27] = 'sidebarwidgets.filterselector.py, line 27:\n    if "name" in view.keys():';
	$m.__track_lines__[28] = 'sidebarwidgets.filterselector.py, line 28:\n    h2 = html5.H2()';
	$m.__track_lines__[29] = 'sidebarwidgets.filterselector.py, line 29:\n    h2.appendChild( html5.TextNode( view["name"] ) )';
	$m.__track_lines__[30] = 'sidebarwidgets.filterselector.py, line 30:\n    self.appendChild( h2 )';
	$m.__track_lines__[32] = 'sidebarwidgets.filterselector.py, line 32:\n    self.extendedFilters = []';
	$m.__track_lines__[34] = 'sidebarwidgets.filterselector.py, line 34:\n    for extension in (view["extendedFilters"] if "extendedFilters" in view.keys() else []):';
	$m.__track_lines__[35] = 'sidebarwidgets.filterselector.py, line 35:\n    wdg = extendedSearchWidgetSelector.select( extension, view, modul)';
	$m.__track_lines__[37] = 'sidebarwidgets.filterselector.py, line 37:\n    if wdg is not None:';
	$m.__track_lines__[38] = 'sidebarwidgets.filterselector.py, line 38:\n    container = html5.Div()';
	$m.__track_lines__[39] = 'sidebarwidgets.filterselector.py, line 39:\n    container["class"].append("extendedfilter")';
	$m.__track_lines__[40] = 'sidebarwidgets.filterselector.py, line 40:\n    wdg = wdg( extension, view, modul )';
	$m.__track_lines__[41] = 'sidebarwidgets.filterselector.py, line 41:\n    container.appendChild( wdg )';
	$m.__track_lines__[42] = 'sidebarwidgets.filterselector.py, line 42:\n    self.appendChild( container )';
	$m.__track_lines__[43] = 'sidebarwidgets.filterselector.py, line 43:\n    self.extendedFilters.append( wdg )';
	$m.__track_lines__[44] = 'sidebarwidgets.filterselector.py, line 44:\n    wdg.filterChangedEvent.register( self )';
	$m.__track_lines__[48] = 'sidebarwidgets.filterselector.py, line 48:\n    def onFilterChanged(self, *args, **kwargs):';
	$m.__track_lines__[49] = 'sidebarwidgets.filterselector.py, line 49:\n    self.reevaluate()';
	$m.__track_lines__[51] = 'sidebarwidgets.filterselector.py, line 51:\n    def reevaluate(self, *args, **kwargs ):';
	$m.__track_lines__[52] = 'sidebarwidgets.filterselector.py, line 52:\n    if "filter" in self.view.keys():';
	$m.__track_lines__[53] = 'sidebarwidgets.filterselector.py, line 53:\n    filter = self.view["filter"].copy()';
	$m.__track_lines__[55] = 'sidebarwidgets.filterselector.py, line 55:\n    filter = {}';
	$m.__track_lines__[57] = 'sidebarwidgets.filterselector.py, line 57:\n    for extension in self.extendedFilters:';
	$m.__track_lines__[58] = 'sidebarwidgets.filterselector.py, line 58:\n    filter = extension.updateFilter( filter )';
	$m.__track_lines__[60] = 'sidebarwidgets.filterselector.py, line 60:\n    if self.embed:';
	$m.__track_lines__[61] = 'sidebarwidgets.filterselector.py, line 61:\n    self.parent().setFilter( filter, -1, "" )';
	$m.__track_lines__[63] = 'sidebarwidgets.filterselector.py, line 63:\n    self.parent().applyFilter( filter, -1, translate( "Extended Search" ) )';
	$m.__track_lines__[65] = 'sidebarwidgets.filterselector.py, line 65:\n    def focus(self):';
	$m.__track_lines__[66] = 'sidebarwidgets.filterselector.py, line 66:\n    for extension in self.extendedFilters:';
	$m.__track_lines__[67] = 'sidebarwidgets.filterselector.py, line 67:\n    if ( "focus" in dir( extension )';
	$m.__track_lines__[69] = 'sidebarwidgets.filterselector.py, line 69:\n    extension.focus()';
	$m.__track_lines__[71] = 'sidebarwidgets.filterselector.py, line 71:\n    class FilterSelector( html5.Div ):';
	$m.__track_lines__[72] = 'sidebarwidgets.filterselector.py, line 72:\n    def __init__(self, modul, *args, **kwargs ):';
	$m.__track_lines__[80] = 'sidebarwidgets.filterselector.py, line 80:\n    super( FilterSelector, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[81] = 'sidebarwidgets.filterselector.py, line 81:\n    self.module = modul';
	$m.__track_lines__[82] = 'sidebarwidgets.filterselector.py, line 82:\n    self.currentTarget = None';
	$m.__track_lines__[83] = 'sidebarwidgets.filterselector.py, line 83:\n    self.defaultFilter = True';
	$m.__track_lines__[84] = 'sidebarwidgets.filterselector.py, line 84:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[86] = 'sidebarwidgets.filterselector.py, line 86:\n    def onClick(self, event):';
	$m.__track_lines__[92] = 'sidebarwidgets.filterselector.py, line 92:\n    nextTarget = self.currentTarget';
	$m.__track_lines__[93] = 'sidebarwidgets.filterselector.py, line 93:\n    for c in self._children:';
	$m.__track_lines__[94] = 'sidebarwidgets.filterselector.py, line 94:\n    if c == self.currentTarget and not html5.utils.doesEventHitWidgetOrChildren(event, c):';
	$m.__track_lines__[95] = 'sidebarwidgets.filterselector.py, line 95:\n    c["class"].append("collapsed")';
	$m.__track_lines__[96] = 'sidebarwidgets.filterselector.py, line 96:\n    c["class"].remove("expanded")';
	$m.__track_lines__[97] = 'sidebarwidgets.filterselector.py, line 97:\n    if nextTarget==self.currentTarget: #Did not change yet';
	$m.__track_lines__[98] = 'sidebarwidgets.filterselector.py, line 98:\n    nextTarget = None';
	$m.__track_lines__[100] = 'sidebarwidgets.filterselector.py, line 100:\n    c["class"].remove("collapsed")';
	$m.__track_lines__[101] = 'sidebarwidgets.filterselector.py, line 101:\n    c["class"].append("expanded")';
	$m.__track_lines__[102] = 'sidebarwidgets.filterselector.py, line 102:\n    nextTarget = c';
	$m.__track_lines__[104] = 'sidebarwidgets.filterselector.py, line 104:\n    if self.currentTarget != nextTarget:';
	$m.__track_lines__[105] = 'sidebarwidgets.filterselector.py, line 105:\n    self.defaultFilter = False';
	$m.__track_lines__[106] = 'sidebarwidgets.filterselector.py, line 106:\n    self.currentTarget = nextTarget';
	$m.__track_lines__[108] = 'sidebarwidgets.filterselector.py, line 108:\n    if "reevaluate" in dir( nextTarget ):';
	$m.__track_lines__[109] = 'sidebarwidgets.filterselector.py, line 109:\n    nextTarget.reevaluate()';
	$m.__track_lines__[111] = 'sidebarwidgets.filterselector.py, line 111:\n    if ("focus" in dir(self.currentTarget)';
	$m.__track_lines__[113] = 'sidebarwidgets.filterselector.py, line 113:\n    self.currentTarget.focus()';
	$m.__track_lines__[115] = 'sidebarwidgets.filterselector.py, line 115:\n    def onAttach(self):';
	$m.__track_lines__[116] = 'sidebarwidgets.filterselector.py, line 116:\n    super(FilterSelector, self).onAttach()';
	$m.__track_lines__[118] = 'sidebarwidgets.filterselector.py, line 118:\n    activeFilter = self.parent().parent().filterID';
	$m.__track_lines__[119] = 'sidebarwidgets.filterselector.py, line 119:\n    isSearchDisabled=False';
	$m.__track_lines__[121] = 'sidebarwidgets.filterselector.py, line 121:\n    if self.module in conf["modules"].keys():';
	$m.__track_lines__[122] = 'sidebarwidgets.filterselector.py, line 122:\n    modulConfig = conf["modules"][self.module]';
	$m.__track_lines__[123] = 'sidebarwidgets.filterselector.py, line 123:\n    if "views" in modulConfig.keys() and modulConfig["views"]:';
	$m.__track_lines__[124] = 'sidebarwidgets.filterselector.py, line 124:\n    for view in modulConfig["views"]:';
	$m.__track_lines__[125] = 'sidebarwidgets.filterselector.py, line 125:\n    self.appendChild( CompoundFilter( view, self.module ) )';
	$m.__track_lines__[126] = 'sidebarwidgets.filterselector.py, line 126:\n    if "disabledFunctions" in modulConfig.keys() and modulConfig[ "disabledFunctions" ] and "fulltext-search" in modulConfig[ "disabledFunctions" ]:';
	$m.__track_lines__[127] = 'sidebarwidgets.filterselector.py, line 127:\n    isSearchDisabled = True';
	$m.__track_lines__[129] = 'sidebarwidgets.filterselector.py, line 129:\n    if not isSearchDisabled:';
	$m.__track_lines__[130] = 'sidebarwidgets.filterselector.py, line 130:\n    self.search = Search()';
	$m.__track_lines__[131] = 'sidebarwidgets.filterselector.py, line 131:\n    self.search["class"].append("collapsed")';
	$m.__track_lines__[132] = 'sidebarwidgets.filterselector.py, line 132:\n    self.appendChild(self.search)';
	$m.__track_lines__[133] = 'sidebarwidgets.filterselector.py, line 133:\n    self.search.startSearchEvent.register( self )';
	$m.__track_lines__[135] = 'sidebarwidgets.filterselector.py, line 135:\n    def onDetach(self):';
	$m.__track_lines__[136] = 'sidebarwidgets.filterselector.py, line 136:\n    if not self.defaultFilter:';
	$m.__track_lines__[137] = 'sidebarwidgets.filterselector.py, line 137:\n    self.onStartSearch()';
	$m.__track_lines__[139] = 'sidebarwidgets.filterselector.py, line 139:\n    super(FilterSelector, self).onDetach()';
	$m.__track_lines__[141] = 'sidebarwidgets.filterselector.py, line 141:\n    def onStartSearch(self, searchTxt = None):';
	$m.__track_lines__[142] = 'sidebarwidgets.filterselector.py, line 142:\n    self.defaultFilter = not searchTxt';
	$m.__track_lines__[144] = 'sidebarwidgets.filterselector.py, line 144:\n    if self.module in conf["modules"].keys():';
	$m.__track_lines__[145] = 'sidebarwidgets.filterselector.py, line 145:\n    modulConfig = conf["modules"][self.module]';
	$m.__track_lines__[146] = 'sidebarwidgets.filterselector.py, line 146:\n    if "filter" in modulConfig.keys():';
	$m.__track_lines__[147] = 'sidebarwidgets.filterselector.py, line 147:\n    filter = modulConfig["filter"]';
	$m.__track_lines__[149] = 'sidebarwidgets.filterselector.py, line 149:\n    filter = {}';
	$m.__track_lines__[151] = 'sidebarwidgets.filterselector.py, line 151:\n    if searchTxt:';
	$m.__track_lines__[152] = 'sidebarwidgets.filterselector.py, line 152:\n    filter["search"] = searchTxt';
	$m.__track_lines__[153] = 'sidebarwidgets.filterselector.py, line 153:\n    self.applyFilter( filter, -1, translate("Fulltext search: {token}", token=searchTxt) )';
	$m.__track_lines__[155] = 'sidebarwidgets.filterselector.py, line 155:\n    if "search" in filter.keys():';
	$m.__track_lines__[156] = 'sidebarwidgets.filterselector.py, line 156:\n    filter.pop("search", None )';
	$m.__track_lines__[158] = 'sidebarwidgets.filterselector.py, line 158:\n    self.applyFilter( filter, -1, "" )';
	$m.__track_lines__[160] = 'sidebarwidgets.filterselector.py, line 160:\n    def setView(self, btn):';
	$m.__track_lines__[161] = 'sidebarwidgets.filterselector.py, line 161:\n    self.applyFilter( btn.destView["filter"], btn.destView["__id"], btn.destView["name"]  )';
	$m.__track_lines__[163] = 'sidebarwidgets.filterselector.py, line 163:\n    def applyFilter(self, filter, filterID, filterName):';
	$m.__track_lines__[164] = 'sidebarwidgets.filterselector.py, line 164:\n    self.parent().parent().setFilter( filter, filterID, filterName )';


	$pyjs['track']['module']='sidebarwidgets.filterselector';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'sidebarwidgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Search'] = $p['___import___']('widgets.search.Search', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'sidebarwidgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'sidebarwidgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['CompoundFilter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'sidebarwidgets.filterselector';
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('__init__', function(view, modul, embed) {
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
				view = arguments[1];
				modul = arguments[2];
				embed = arguments[3];
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
				if (typeof embed != 'undefined') {
					if (embed !== null && typeof embed['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = embed;
						embed = arguments[4];
					}
				} else 				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof view != 'undefined') {
					if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = view;
						view = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof embed == 'undefined') embed=arguments['callee']['__args__'][5][1];
			var $iter1_nextval,$iter1_type,extension,$iter1_idx,h2,$iter1_iter,wdg,$iter1_array,container,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CompoundFilter'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('compoundfilter');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=16;
			self['view'] = view;
			$pyjs['track']['lineno']=17;
			self['module'] = modul;
			$pyjs['track']['lineno']=18;
			self['embed'] = embed;
			$pyjs['track']['lineno']=20;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](embed);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('embed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['track']['lineno']=22;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('expanded');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=24;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('standalone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['track']['lineno']=25;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('collapsed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			}
			$pyjs['track']['lineno']=27;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return view['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['__contains__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=28;
				h2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['H2']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=29;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return h2['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](view['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=30;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](h2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			}
			$pyjs['track']['lineno']=32;
			self['extendedFilters'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=34;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return view['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['__contains__']('extendedFilters'))? (view['__getitem__']('extendedFilters')) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				extension = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=35;
				wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['extendedSearchWidgetSelector']['select'](extension, view, modul);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=37;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((wdg !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=38;
					container = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					$pyjs['track']['lineno']=39;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return container['__getitem__']('class')['append']('extendedfilter');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$pyjs['track']['lineno']=40;
					wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return wdg(extension, view, modul);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs['track']['lineno']=41;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return container['appendChild'](wdg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs['track']['lineno']=42;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild'](container);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					$pyjs['track']['lineno']=43;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['extendedFilters']['append'](wdg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
					$pyjs['track']['lineno']=44;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return wdg['filterChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['view'],['modul'],['embed', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('onFilterChanged', function() {
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

			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reevaluate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onFilterChanged'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('reevaluate', function() {
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
			var $iter2_nextval,$iter2_type,extension,$iter2_iter,filter,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['view']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['__contains__']('filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
				$pyjs['track']['lineno']=53;
				filter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'view')['__getitem__']('filter')['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=55;
				filter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs['track']['lineno']=57;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'extendedFilters');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				extension = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=58;
				filter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return extension['updateFilter'](filter);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=60;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'embed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['setFilter'](filter, (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=63;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['applyFilter'](filter, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Extended Search');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['reevaluate'] = $method;
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('focus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,extension,$and1,$iter3_type,$and2,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'extendedFilters');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				extension = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=67;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](extension);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()['__contains__']('focus'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['callable']($p['getattr'](extension, 'focus'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs['track']['lineno']=69;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return extension['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focus'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CompoundFilter', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=71;
	$m['FilterSelector'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'sidebarwidgets.filterselector';
		$pyjs['track']['lineno']=72;
		$method = $pyjs__bind_method2('__init__', function(modul) {
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
				modul = arguments[1];
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
				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FilterSelector'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=81;
			self['module'] = modul;
			$pyjs['track']['lineno']=82;
			self['currentTarget'] = null;
			$pyjs['track']['lineno']=83;
			self['defaultFilter'] = true;
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and8,c,nextTarget,$iter4_nextval,$and3,$and4,$and5,$and6,$and7,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=92;
			nextTarget = $p['getattr'](self, 'currentTarget');
			$pyjs['track']['lineno']=93;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				c = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=94;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and3=$p['op_eq'](c, $p['getattr'](self, 'currentTarget')))?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs['track']['lineno']=95;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['__getitem__']('class')['append']('collapsed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs['track']['lineno']=96;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['__getitem__']('class')['remove']('expanded');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
					$pyjs['track']['lineno']=97;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](nextTarget, $p['getattr'](self, 'currentTarget')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
						$pyjs['track']['lineno']=98;
						nextTarget = null;
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=!$p['op_eq'](c, $p['getattr'](self, 'currentTarget')))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})():$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
					$pyjs['track']['lineno']=100;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['__getitem__']('class')['remove']('collapsed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					$pyjs['track']['lineno']=101;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['__getitem__']('class')['append']('expanded');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs['track']['lineno']=102;
					nextTarget = c;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=104;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](self, 'currentTarget'), nextTarget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
				$pyjs['track']['lineno']=105;
				self['defaultFilter'] = false;
				$pyjs['track']['lineno']=106;
				self['currentTarget'] = nextTarget;
				$pyjs['track']['lineno']=108;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](nextTarget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()['__contains__']('reevaluate'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
					$pyjs['track']['lineno']=109;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return nextTarget['reevaluate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				}
			}
			$pyjs['track']['lineno']=111;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir']($p['getattr'](self, 'currentTarget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['__contains__']('focus'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['callable']($p['getattr']($p['getattr'](self, 'currentTarget'), 'focus'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})():$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['currentTarget']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=115;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var activeFilter,$and9,isSearchDisabled,$iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,$and12,$and13,$and10,$iter5_iter,$and11,$iter5_idx,$iter5_type,modulConfig,view;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=115;
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FilterSelector'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs['track']['lineno']=118;
			activeFilter = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})(), 'filterID');
			$pyjs['track']['lineno']=119;
			isSearchDisabled = false;
			$pyjs['track']['lineno']=121;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()['__contains__']($p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
				$pyjs['track']['lineno']=122;
				modulConfig = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
				$pyjs['track']['lineno']=123;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
				return modulConfig['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()['__contains__']('views'))?modulConfig['__getitem__']('views'):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs['track']['lineno']=124;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return modulConfig['__getitem__']('views');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						view = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=125;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['CompoundFilter'](view, $p['getattr'](self, 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='sidebarwidgets.filterselector';
				}
				$pyjs['track']['lineno']=126;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and11=(function(){try{try{$pyjs['in_try_except'] += 1;
				return modulConfig['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and12=modulConfig['__getitem__']('disabledFunctions'))?modulConfig['__getitem__']('disabledFunctions')['__contains__']('fulltext-search'):$and12):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
					$pyjs['track']['lineno']=127;
					isSearchDisabled = true;
				}
			}
			$pyjs['track']['lineno']=129;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](isSearchDisabled));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs['track']['lineno']=130;
				self['search'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Search']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'search')['__getitem__']('class')['append']('collapsed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['track']['lineno']=132;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'search'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs['track']['lineno']=133;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search']['startSearchEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=135;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=136;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'defaultFilter')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=137;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onStartSearch']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			}
			$pyjs['track']['lineno']=139;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FilterSelector'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=141;
		$method = $pyjs__bind_method2('onStartSearch', function(searchTxt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				searchTxt = arguments[1];
			}
			if (typeof searchTxt == 'undefined') searchTxt=arguments['callee']['__args__'][3][1];
			var filter,modulConfig;
			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=141;
			$pyjs['track']['lineno']=142;
			self['defaultFilter'] = !$p['bool'](searchTxt);
			$pyjs['track']['lineno']=144;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()['__contains__']($p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
				$pyjs['track']['lineno']=145;
				modulConfig = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
				$pyjs['track']['lineno']=146;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return modulConfig['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()['__contains__']('filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs['track']['lineno']=147;
					filter = modulConfig['__getitem__']('filter');
				}
				else {
					$pyjs['track']['lineno']=149;
					filter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				}
				$pyjs['track']['lineno']=151;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](searchTxt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
					$pyjs['track']['lineno']=152;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return filter['__setitem__']('search', searchTxt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
					$pyjs['track']['lineno']=153;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['applyFilter'](filter, (typeof ($usub3=1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'token':searchTxt}, 'Fulltext search: {token}']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=155;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return filter['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()['__contains__']('search'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
						$pyjs['track']['lineno']=156;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return filter['pop']('search', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					}
					$pyjs['track']['lineno']=158;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['applyFilter'](filter, (typeof ($usub4=1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['searchTxt', null]]);
		$cls_definition['onStartSearch'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('setView', function(btn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				btn = arguments[1];
			}

			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=161;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['applyFilter']($p['getattr'](btn, 'destView')['__getitem__']('filter'), $p['getattr'](btn, 'destView')['__getitem__']('__id'), $p['getattr'](btn, 'destView')['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['btn']]);
		$cls_definition['setView'] = $method;
		$pyjs['track']['lineno']=163;
		$method = $pyjs__bind_method2('applyFilter', function(filter, filterID, filterName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
				filterID = arguments[2];
				filterName = arguments[3];
			}

			$pyjs['track']={'module':'sidebarwidgets.filterselector', 'lineno':163};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='sidebarwidgets.filterselector';
			$pyjs['track']['lineno']=163;
			$pyjs['track']['lineno']=164;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()['setFilter'](filter, filterID, filterName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['filter'],['filterID'],['filterName']]);
		$cls_definition['applyFilter'] = $method;
		$pyjs['track']['lineno']=71;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FilterSelector', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end sidebarwidgets.filterselector */


/* end module: sidebarwidgets.filterselector */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'widgets.search.Search', 'widgets', 'widgets.search', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue', 'pane.Pane', 'pane', 'i18n.translate', 'i18n', 'utils']
*/
