/* start module: widgets.list */
$pyjs['loaded_modules']['widgets.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.list']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.list'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.list'];
	$m['__repr__'] = function() { return '<module: widgets.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.list';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['list'] = $pyjs['loaded_modules']['widgets.list'];
	$m.__track_lines__[1] = 'widgets.list.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'widgets.list.py, line 2:\n    import pyjd # this is dummy in pyjs.';
	$m.__track_lines__[3] = 'widgets.list.py, line 3:\n    import json';
	$m.__track_lines__[4] = 'widgets.list.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'widgets.list.py, line 5:\n    from network import NetworkService';
	$m.__track_lines__[6] = 'widgets.list.py, line 6:\n    from priorityqueue import viewDelegateSelector';
	$m.__track_lines__[7] = 'widgets.list.py, line 7:\n    from widgets.table import DataTable';
	$m.__track_lines__[8] = 'widgets.list.py, line 8:\n    from widgets.actionbar import ActionBar';
	$m.__track_lines__[9] = 'widgets.list.py, line 9:\n    from widgets.sidebar import SideBar';
	$m.__track_lines__[10] = 'widgets.list.py, line 10:\n    import html5';
	$m.__track_lines__[11] = 'widgets.list.py, line 11:\n    from sidebarwidgets.filterselector import CompoundFilter';
	$m.__track_lines__[12] = 'widgets.list.py, line 12:\n    from i18n import translate';
	$m.__track_lines__[15] = 'widgets.list.py, line 15:\n    class ListWidget( html5.Div ):';
	$m.__track_lines__[21] = 'widgets.list.py, line 21:\n    def __init__(self, module, filter=None, columns=None, isSelector=False, filterID=None, filterDescr=None,';
	$m.__track_lines__[27] = 'widgets.list.py, line 27:\n    if not module in conf["modules"].keys():';
	$m.__track_lines__[28] = 'widgets.list.py, line 28:\n    conf["mainWindow"].log("error", translate("The module \'{module}\' does not exist.", module=module))';
	$m.__track_lines__[29] = 'widgets.list.py, line 29:\n    assert module in conf["modules"].keys()';
	$m.__track_lines__[31] = 'widgets.list.py, line 31:\n    super( ListWidget, self ).__init__(  )';
	$m.__track_lines__[32] = 'widgets.list.py, line 32:\n    self._batchSize = batchSize or conf["batchSize"]    # How many rows do we fetch at once?';
	$m.__track_lines__[33] = 'widgets.list.py, line 33:\n    self.isDetaching = False #If set, this widget is beeing about to be removed - dont issue nextBatchNeeded requests';
	$m.__track_lines__[34] = 'widgets.list.py, line 34:\n    self.module = module';
	$m.__track_lines__[35] = 'widgets.list.py, line 35:\n    self.actionBar = ActionBar(module, "list", currentAction="list")';
	$m.__track_lines__[36] = 'widgets.list.py, line 36:\n    self.appendChild( self.actionBar )';
	$m.__track_lines__[37] = 'widgets.list.py, line 37:\n    self.sideBar = SideBar()';
	$m.__track_lines__[38] = 'widgets.list.py, line 38:\n    self.appendChild( self.sideBar )';
	$m.__track_lines__[40] = 'widgets.list.py, line 40:\n    myView = None';
	$m.__track_lines__[42] = 'widgets.list.py, line 42:\n    if filterID:';
	$m.__track_lines__[43] = 'widgets.list.py, line 43:\n    if conf["modules"] and module in conf["modules"].keys():';
	$m.__track_lines__[44] = 'widgets.list.py, line 44:\n    if "views" in conf["modules"][ module].keys() and conf["modules"][ module]["views"]:';
	$m.__track_lines__[45] = 'widgets.list.py, line 45:\n    for v in conf["modules"][ module]["views"]:';
	$m.__track_lines__[46] = 'widgets.list.py, line 46:\n    if v["__id"] == filterID:';
	$m.__track_lines__[47] = 'widgets.list.py, line 47:\n    myView = v';
	$m.__track_lines__[48] = 'widgets.list.py, line 48:\n    break';
	$m.__track_lines__[49] = 'widgets.list.py, line 49:\n    if myView and "extendedFilters" in myView.keys() and myView["extendedFilters"]:';
	$m.__track_lines__[50] = 'widgets.list.py, line 50:\n    self.appendChild(CompoundFilter(myView, module, embed=True))';
	$m.__track_lines__[52] = 'widgets.list.py, line 52:\n    checkboxes = (conf["modules"]';
	$m.__track_lines__[56] = 'widgets.list.py, line 56:\n    indexes = (conf["modules"]';
	$m.__track_lines__[61] = 'widgets.list.py, line 61:\n    self.table = DataTable( checkboxes=checkboxes, indexes=indexes, *args, **kwargs )';
	$m.__track_lines__[62] = 'widgets.list.py, line 62:\n    self.appendChild( self.table )';
	$m.__track_lines__[63] = 'widgets.list.py, line 63:\n    self._currentCursor = None';
	$m.__track_lines__[64] = 'widgets.list.py, line 64:\n    self._structure = None';
	$m.__track_lines__[65] = 'widgets.list.py, line 65:\n    self._currentRequests = []';
	$m.__track_lines__[66] = 'widgets.list.py, line 66:\n    self.columns = []';
	$m.__track_lines__[68] = 'widgets.list.py, line 68:\n    if isSelector and filter is None and columns is None:';
	$m.__track_lines__[70] = 'widgets.list.py, line 70:\n    if conf["modules"] and module in conf["modules"].keys():';
	$m.__track_lines__[71] = 'widgets.list.py, line 71:\n    tmpData = conf["modules"][module]';
	$m.__track_lines__[72] = 'widgets.list.py, line 72:\n    if "columns" in tmpData.keys():';
	$m.__track_lines__[73] = 'widgets.list.py, line 73:\n    columns = tmpData["columns"]';
	$m.__track_lines__[74] = 'widgets.list.py, line 74:\n    if "filter" in tmpData.keys():';
	$m.__track_lines__[75] = 'widgets.list.py, line 75:\n    filter = tmpData["filter"]';
	$m.__track_lines__[77] = 'widgets.list.py, line 77:\n    self.table.setDataProvider(self)';
	$m.__track_lines__[78] = 'widgets.list.py, line 78:\n    self.filter = filter.copy() if isinstance(filter,dict) else {}';
	$m.__track_lines__[79] = 'widgets.list.py, line 79:\n    self.columns = columns[:] if isinstance(columns,list) else []';
	$m.__track_lines__[80] = 'widgets.list.py, line 80:\n    self.filterID = filterID #Hint for the sidebarwidgets which predefined filter is currently active';
	$m.__track_lines__[81] = 'widgets.list.py, line 81:\n    self.filterDescr = filterDescr #Human-readable description of the current filter';
	$m.__track_lines__[82] = 'widgets.list.py, line 82:\n    self._tableHeaderIsValid = False';
	$m.__track_lines__[83] = 'widgets.list.py, line 83:\n    self.isSelector = isSelector';
	$m.__track_lines__[86] = 'widgets.list.py, line 86:\n    for f in ["selectionChangedEvent",';
	$m.__track_lines__[91] = 'widgets.list.py, line 91:\n    setattr( self, f, getattr(self.table,f))';
	$m.__track_lines__[93] = 'widgets.list.py, line 93:\n    self.actionBar.setActions( self.getDefaultActions( myView ) )';
	$m.__track_lines__[95] = 'widgets.list.py, line 95:\n    if isSelector:';
	$m.__track_lines__[96] = 'widgets.list.py, line 96:\n    self.selectionActivatedEvent.register( self )';
	$m.__track_lines__[98] = 'widgets.list.py, line 98:\n    self.emptyNotificationDiv = html5.Div()';
	$m.__track_lines__[99] = 'widgets.list.py, line 99:\n    self.emptyNotificationDiv.appendChild(html5.TextNode(translate("Currently no entries")))';
	$m.__track_lines__[100] = 'widgets.list.py, line 100:\n    self.emptyNotificationDiv["class"].append("emptynotification")';
	$m.__track_lines__[101] = 'widgets.list.py, line 101:\n    self.appendChild(self.emptyNotificationDiv)';
	$m.__track_lines__[102] = 'widgets.list.py, line 102:\n    self.emptyNotificationDiv["style"]["display"] = "none"';
	$m.__track_lines__[103] = 'widgets.list.py, line 103:\n    self.table["style"]["display"] = "none"';
	$m.__track_lines__[104] = 'widgets.list.py, line 104:\n    self.filterDescriptionSpan = html5.Span()';
	$m.__track_lines__[105] = 'widgets.list.py, line 105:\n    self.appendChild( self.filterDescriptionSpan )';
	$m.__track_lines__[106] = 'widgets.list.py, line 106:\n    self.filterDescriptionSpan["class"].append("filterdescription")';
	$m.__track_lines__[107] = 'widgets.list.py, line 107:\n    self.updateFilterDescription()';
	$m.__track_lines__[108] = 'widgets.list.py, line 108:\n    self.reloadData()';
	$m.__track_lines__[110] = 'widgets.list.py, line 110:\n    def updateFilterDescription(self):';
	$m.__track_lines__[111] = 'widgets.list.py, line 111:\n    self.filterDescriptionSpan.removeAllChildren()';
	$m.__track_lines__[113] = 'widgets.list.py, line 113:\n    if self.filterDescr:';
	$m.__track_lines__[114] = 'widgets.list.py, line 114:\n    self.filterDescriptionSpan.appendChild(html5.TextNode(html5.utils.unescape(self.filterDescr)))';
	$m.__track_lines__[116] = 'widgets.list.py, line 116:\n    def getDefaultActions(self, view = None ):';
	$m.__track_lines__[120] = 'widgets.list.py, line 120:\n    defaultActions = ["add", "edit", "clone", "delete",';
	$m.__track_lines__[128] = 'widgets.list.py, line 128:\n    if view and "actions" in view.keys():';
	$m.__track_lines__[129] = 'widgets.list.py, line 129:\n    if defaultActions[-1] != "|":';
	$m.__track_lines__[130] = 'widgets.list.py, line 130:\n    defaultActions.append( "|" )';
	$m.__track_lines__[132] = 'widgets.list.py, line 132:\n    defaultActions.extend( view[ "actions" ] or [] )';
	$m.__track_lines__[136] = 'widgets.list.py, line 136:\n    cfg = conf["modules"][ self.module ]';
	$m.__track_lines__[138] = 'widgets.list.py, line 138:\n    if "actions" in cfg.keys() and cfg["actions"]:';
	$m.__track_lines__[139] = 'widgets.list.py, line 139:\n    if defaultActions[-1] != "|":';
	$m.__track_lines__[140] = 'widgets.list.py, line 140:\n    defaultActions.append( "|" )';
	$m.__track_lines__[142] = 'widgets.list.py, line 142:\n    defaultActions.extend( cfg["actions"] )';
	$m.__track_lines__[144] = 'widgets.list.py, line 144:\n    return defaultActions';
	$m.__track_lines__[146] = 'widgets.list.py, line 146:\n    def showErrorMsg(self, req=None, code=None):';
	$m.__track_lines__[150] = 'widgets.list.py, line 150:\n    self.actionBar["style"]["display"] = "none"';
	$m.__track_lines__[151] = 'widgets.list.py, line 151:\n    self.table["style"]["display"] = "none"';
	$m.__track_lines__[152] = 'widgets.list.py, line 152:\n    errorDiv = html5.Div()';
	$m.__track_lines__[153] = 'widgets.list.py, line 153:\n    errorDiv["class"].append("error_msg")';
	$m.__track_lines__[154] = 'widgets.list.py, line 154:\n    if code and (code==401 or code==403):';
	$m.__track_lines__[155] = 'widgets.list.py, line 155:\n    txt = translate("Access denied!")';
	$m.__track_lines__[157] = 'widgets.list.py, line 157:\n    txt = translate("An unknown error occurred!")';
	$m.__track_lines__[158] = 'widgets.list.py, line 158:\n    errorDiv["class"].append("error_code_%s" % (code or 0))';
	$m.__track_lines__[159] = 'widgets.list.py, line 159:\n    errorDiv.appendChild( html5.TextNode( txt ) )';
	$m.__track_lines__[160] = 'widgets.list.py, line 160:\n    self.appendChild( errorDiv )';
	$m.__track_lines__[162] = 'widgets.list.py, line 162:\n    def onNextBatchNeeded(self):';
	$m.__track_lines__[166] = 'widgets.list.py, line 166:\n    if self._currentCursor and not self.isDetaching:';
	$m.__track_lines__[167] = 'widgets.list.py, line 167:\n    filter = self.filter.copy()';
	$m.__track_lines__[168] = 'widgets.list.py, line 168:\n    filter["amount"] = self._batchSize';
	$m.__track_lines__[169] = 'widgets.list.py, line 169:\n    filter["cursor"] = self._currentCursor';
	$m.__track_lines__[170] = 'widgets.list.py, line 170:\n    self._currentRequests.append( NetworkService.request(self.module, "list", filter,';
	$m.__track_lines__[173] = 'widgets.list.py, line 173:\n    self._currentCursor = None';
	$m.__track_lines__[175] = 'widgets.list.py, line 175:\n    self.table.setDataProvider(None)';
	$m.__track_lines__[177] = 'widgets.list.py, line 177:\n    def onAttach(self):';
	$m.__track_lines__[178] = 'widgets.list.py, line 178:\n    super( ListWidget, self ).onAttach()';
	$m.__track_lines__[179] = 'widgets.list.py, line 179:\n    NetworkService.registerChangeListener( self )';
	$m.__track_lines__[181] = 'widgets.list.py, line 181:\n    def onDetach(self):';
	$m.__track_lines__[182] = 'widgets.list.py, line 182:\n    self.isDetaching = True';
	$m.__track_lines__[183] = 'widgets.list.py, line 183:\n    super( ListWidget, self ).onDetach()';
	$m.__track_lines__[184] = 'widgets.list.py, line 184:\n    NetworkService.removeChangeListener( self )';
	$m.__track_lines__[186] = 'widgets.list.py, line 186:\n    def onDataChanged(self, module, **kwargs):';
	$m.__track_lines__[190] = 'widgets.list.py, line 190:\n    if module and module != self.module:';
	$m.__track_lines__[191] = 'widgets.list.py, line 191:\n    return';
	$m.__track_lines__[193] = 'widgets.list.py, line 193:\n    self.reloadData()';
	$m.__track_lines__[195] = 'widgets.list.py, line 195:\n    def reloadData(self):';
	$m.__track_lines__[199] = 'widgets.list.py, line 199:\n    self.table.clear()';
	$m.__track_lines__[200] = 'widgets.list.py, line 200:\n    self._currentCursor = None';
	$m.__track_lines__[201] = 'widgets.list.py, line 201:\n    self._currentRequests = []';
	$m.__track_lines__[202] = 'widgets.list.py, line 202:\n    filter = self.filter.copy()';
	$m.__track_lines__[203] = 'widgets.list.py, line 203:\n    filter["amount"] = self._batchSize';
	$m.__track_lines__[206] = 'widgets.list.py, line 205:\n    self._currentRequests.append( ... NetworkService.request( self.module, "list", filter,';
	$m.__track_lines__[211] = 'widgets.list.py, line 211:\n    def setFilter(self, filter, filterID=None, filterDescr=None):';
	$m.__track_lines__[215] = 'widgets.list.py, line 215:\n    self.filter = filter';
	$m.__track_lines__[216] = 'widgets.list.py, line 216:\n    self.filterID = filterID';
	$m.__track_lines__[217] = 'widgets.list.py, line 217:\n    self.filterDescr = filterDescr';
	$m.__track_lines__[218] = 'widgets.list.py, line 218:\n    self.updateFilterDescription()';
	$m.__track_lines__[219] = 'widgets.list.py, line 219:\n    self.reloadData()';
	$m.__track_lines__[221] = 'widgets.list.py, line 221:\n    def getFilter(self):';
	$m.__track_lines__[222] = 'widgets.list.py, line 222:\n    if self.filter:';
	$m.__track_lines__[223] = 'widgets.list.py, line 223:\n    return( {k:v for k,v in self.filter.items()})';
	$m.__track_lines__[224] = 'widgets.list.py, line 224:\n    return( {} )';
	$m.__track_lines__[226] = 'widgets.list.py, line 226:\n    def onCompletion(self, req):';
	$m.__track_lines__[231] = 'widgets.list.py, line 231:\n    if not req in self._currentRequests:';
	$m.__track_lines__[232] = 'widgets.list.py, line 232:\n    return';
	$m.__track_lines__[234] = 'widgets.list.py, line 234:\n    self._currentRequests.remove( req )';
	$m.__track_lines__[235] = 'widgets.list.py, line 235:\n    self.actionBar.resetLoadingState()';
	$m.__track_lines__[237] = 'widgets.list.py, line 237:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[239] = 'widgets.list.py, line 239:\n    if data["structure"] is None:';
	$m.__track_lines__[240] = 'widgets.list.py, line 240:\n    if self.table.getRowCount():';
	$m.__track_lines__[241] = 'widgets.list.py, line 241:\n    self.table.setDataProvider(None) #We cant load any more results';
	$m.__track_lines__[243] = 'widgets.list.py, line 243:\n    self.table["style"]["display"] = "none"';
	$m.__track_lines__[244] = 'widgets.list.py, line 244:\n    self.emptyNotificationDiv["style"]["display"] = ""';
	$m.__track_lines__[246] = 'widgets.list.py, line 246:\n    return';
	$m.__track_lines__[248] = 'widgets.list.py, line 248:\n    self.table["style"]["display"] = ""';
	$m.__track_lines__[249] = 'widgets.list.py, line 249:\n    self.emptyNotificationDiv["style"]["display"] = "none"';
	$m.__track_lines__[250] = 'widgets.list.py, line 250:\n    self._structure = data["structure"]';
	$m.__track_lines__[252] = 'widgets.list.py, line 252:\n    if not self._tableHeaderIsValid:';
	$m.__track_lines__[253] = 'widgets.list.py, line 253:\n    if not self.columns:';
	$m.__track_lines__[254] = 'widgets.list.py, line 254:\n    self.columns = []';
	$m.__track_lines__[255] = 'widgets.list.py, line 255:\n    for boneName, boneInfo in data["structure"]:';
	$m.__track_lines__[256] = 'widgets.list.py, line 256:\n    if boneInfo["visible"]:';
	$m.__track_lines__[257] = 'widgets.list.py, line 257:\n    self.columns.append( boneName )';
	$m.__track_lines__[258] = 'widgets.list.py, line 258:\n    self.setFields( self.columns )';
	$m.__track_lines__[261] = 'widgets.list.py, line 261:\n    if data["skellist"] and "cursor" in data.keys():';
	$m.__track_lines__[262] = 'widgets.list.py, line 262:\n    self._currentCursor = data["cursor"]';
	$m.__track_lines__[263] = 'widgets.list.py, line 263:\n    self.table.setDataProvider(self)';
	$m.__track_lines__[265] = 'widgets.list.py, line 265:\n    self.table.setDataProvider(None)';
	$m.__track_lines__[267] = 'widgets.list.py, line 267:\n    self.table.extend( data["skellist"] )';
	$m.__track_lines__[269] = 'widgets.list.py, line 269:\n    def setFields(self, fields):';
	$m.__track_lines__[270] = 'widgets.list.py, line 270:\n    if not self._structure:';
	$m.__track_lines__[271] = 'widgets.list.py, line 271:\n    self._tableHeaderIsValid = False';
	$m.__track_lines__[272] = 'widgets.list.py, line 272:\n    return';
	$m.__track_lines__[274] = 'widgets.list.py, line 274:\n    boneInfoList = []';
	$m.__track_lines__[275] = 'widgets.list.py, line 275:\n    tmpDict = {key: bone for key, bone in self._structure}';
	$m.__track_lines__[277] = 'widgets.list.py, line 277:\n    fields = [x for x in fields if x in tmpDict.keys()]';
	$m.__track_lines__[278] = 'widgets.list.py, line 278:\n    self.columns = fields';
	$m.__track_lines__[280] = 'widgets.list.py, line 280:\n    for boneName in fields:';
	$m.__track_lines__[281] = 'widgets.list.py, line 281:\n    boneInfo = tmpDict[boneName]';
	$m.__track_lines__[282] = 'widgets.list.py, line 282:\n    delegateFactory = viewDelegateSelector.select( self.module, boneName, tmpDict )( self.module, boneName, tmpDict )';
	$m.__track_lines__[283] = 'widgets.list.py, line 283:\n    self.table.setCellRender( boneName, delegateFactory )';
	$m.__track_lines__[284] = 'widgets.list.py, line 284:\n    boneInfoList.append( boneInfo )';
	$m.__track_lines__[286] = 'widgets.list.py, line 286:\n    if conf["showBoneNames"]:';
	$m.__track_lines__[287] = 'widgets.list.py, line 287:\n    self.table.setHeader(fields)';
	$m.__track_lines__[289] = 'widgets.list.py, line 289:\n    self.table.setHeader([x.get("descr", "") for x in boneInfoList])';
	$m.__track_lines__[291] = 'widgets.list.py, line 291:\n    self.table.setShownFields(fields)';
	$m.__track_lines__[292] = 'widgets.list.py, line 292:\n    rendersDict = {}';
	$m.__track_lines__[294] = 'widgets.list.py, line 294:\n    for boneName in fields:';
	$m.__track_lines__[295] = 'widgets.list.py, line 295:\n    boneInfo = tmpDict[boneName]';
	$m.__track_lines__[296] = 'widgets.list.py, line 296:\n    delegateFactory = viewDelegateSelector.select( self.module, boneName, tmpDict )( self.module, boneName, tmpDict )';
	$m.__track_lines__[297] = 'widgets.list.py, line 297:\n    rendersDict[ boneName ] = delegateFactory';
	$m.__track_lines__[298] = 'widgets.list.py, line 298:\n    boneInfoList.append( boneInfo )';
	$m.__track_lines__[300] = 'widgets.list.py, line 300:\n    self.table.setCellRenders( rendersDict )';
	$m.__track_lines__[301] = 'widgets.list.py, line 301:\n    self._tableHeaderIsValid = True';
	$m.__track_lines__[303] = 'widgets.list.py, line 303:\n    def getFields(self):';
	$m.__track_lines__[304] = 'widgets.list.py, line 304:\n    return( self.columns[:] )';
	$m.__track_lines__[306] = 'widgets.list.py, line 306:\n    def onSelectionActivated(self, table, selection):';
	$m.__track_lines__[307] = 'widgets.list.py, line 307:\n    conf["mainWindow"].removeWidget(self)';
	$m.__track_lines__[309] = 'widgets.list.py, line 309:\n    def activateCurrentSelection(self):';
	$m.__track_lines__[314] = 'widgets.list.py, line 314:\n    self.table.activateCurrentSelection()';


	$pyjs['track']['module']='widgets.list';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['pyjd'] = $p['___import___']('pyjd', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DataTable'] = $p['___import___']('widgets.table.DataTable', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['SideBar'] = $p['___import___']('widgets.sidebar.SideBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['CompoundFilter'] = $p['___import___']('sidebarwidgets.filterselector.CompoundFilter', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=15;
	$m['ListWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.list';
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('__init__', function(module, filter, columns, isSelector, filterID, filterDescr, batchSize) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				module = arguments[1];
				filter = arguments[2];
				columns = arguments[3];
				isSelector = arguments[4];
				filterID = arguments[5];
				filterDescr = arguments[6];
				batchSize = arguments[7];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,8,arguments['length']-1));

				var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof batchSize != 'undefined') {
					if (batchSize !== null && typeof batchSize['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = batchSize;
						batchSize = arguments[8];
					}
				} else 				if (typeof filterDescr != 'undefined') {
					if (filterDescr !== null && typeof filterDescr['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = filterDescr;
						filterDescr = arguments[8];
					}
				} else 				if (typeof filterID != 'undefined') {
					if (filterID !== null && typeof filterID['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = filterID;
						filterID = arguments[8];
					}
				} else 				if (typeof isSelector != 'undefined') {
					if (isSelector !== null && typeof isSelector['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = isSelector;
						isSelector = arguments[8];
					}
				} else 				if (typeof columns != 'undefined') {
					if (columns !== null && typeof columns['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = columns;
						columns = arguments[8];
					}
				} else 				if (typeof filter != 'undefined') {
					if (filter !== null && typeof filter['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = filter;
						filter = arguments[8];
					}
				} else 				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[8];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[8];
					}
				} else {
				}
			}
			if (typeof filter == 'undefined') filter=arguments['callee']['__args__'][4][1];
			if (typeof columns == 'undefined') columns=arguments['callee']['__args__'][5][1];
			if (typeof isSelector == 'undefined') isSelector=arguments['callee']['__args__'][6][1];
			if (typeof filterID == 'undefined') filterID=arguments['callee']['__args__'][7][1];
			if (typeof filterDescr == 'undefined') filterDescr=arguments['callee']['__args__'][8][1];
			if (typeof batchSize == 'undefined') batchSize=arguments['callee']['__args__'][9][1];
			var $pyjs__trackstack_size_1,$iter1_iter,$and15,$iter1_nextval,$and20,$iter2_iter,$iter2_type,indexes,tmpData,$iter1_array,checkboxes,$and8,$and9,$or1,$or2,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$and10,$and11,$and16,$and17,$and14,myView,$and18,$and19,$iter2_nextval,$iter1_type,f,$iter2_idx,$iter1_idx,v,$iter2_array;
			$pyjs['track']={'module':'widgets.list', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=27;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=28;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('error', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'module':module}, "The module '{module}' does not exist."]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['track']['lineno']=29;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__'](module) )) {
				   throw $p['AssertionError']();
				 }
			}
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=32;
			self['_batchSize'] = ($p['bool']($or1=batchSize)?$or1:$m['conf']['__getitem__']('batchSize'));
			$pyjs['track']['lineno']=33;
			self['isDetaching'] = false;
			$pyjs['track']['lineno']=34;
			self['module'] = module;
			$pyjs['track']['lineno']=35;
			self['actionBar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['ActionBar'], null, null, [{'currentAction':'list'}, module, 'list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'actionBar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=37;
			self['sideBar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SideBar']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=38;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'sideBar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=40;
			myView = null;
			$pyjs['track']['lineno']=42;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](filterID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=43;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=$m['conf']['__getitem__']('modules'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['__contains__'](module):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
					$pyjs['track']['lineno']=44;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__contains__']('views'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
						$pyjs['track']['lineno']=45;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							v = $iter1_nextval['$nextval'];
							$pyjs['track']['lineno']=46;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](v['__getitem__']('__id'), filterID));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
								$pyjs['track']['lineno']=47;
								myView = v;
								$pyjs['track']['lineno']=48;
								break;
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.list';
					}
				}
				$pyjs['track']['lineno']=49;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=myView)?($p['bool']($and6=(function(){try{try{$pyjs['in_try_except'] += 1;
				return myView['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['__contains__']('extendedFilters'))?myView['__getitem__']('extendedFilters'):$and6):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=50;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['CompoundFilter'], null, null, [{'embed':true}, myView, module]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
			}
			$pyjs['track']['lineno']=52;
			checkboxes = ($p['bool']($and8=$m['conf']['__getitem__']('modules'))?($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['__contains__'](module))?($p['bool']($and10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__contains__']('checkboxSelection'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('checkboxSelection'):$and10):$and9):$and8);
			$pyjs['track']['lineno']=56;
			indexes = ($p['bool']($and12=$m['conf']['__getitem__']('modules'))?($p['bool']($and13=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['__contains__'](module))?($p['bool']($and14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()['__contains__']('indexes'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('indexes'):$and14):$and13):$and12);
			$pyjs['track']['lineno']=61;
			self['table'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['DataTable'], args, kwargs, [{'checkboxes':checkboxes, 'indexes':indexes}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=62;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'table'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=63;
			self['_currentCursor'] = null;
			$pyjs['track']['lineno']=64;
			self['_structure'] = null;
			$pyjs['track']['lineno']=65;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=66;
			self['columns'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=68;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and16=isSelector)?($p['bool']($and17=(filter === null))?(columns === null):$and17):$and16));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
				$pyjs['track']['lineno']=70;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and19=$m['conf']['__getitem__']('modules'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__contains__'](module):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
					$pyjs['track']['lineno']=71;
					tmpData = $m['conf']['__getitem__']('modules')['__getitem__'](module);
					$pyjs['track']['lineno']=72;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return tmpData['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['__contains__']('columns'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
						$pyjs['track']['lineno']=73;
						columns = tmpData['__getitem__']('columns');
					}
					$pyjs['track']['lineno']=74;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return tmpData['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['__contains__']('filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
						$pyjs['track']['lineno']=75;
						filter = tmpData['__getitem__']('filter');
					}
				}
			}
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['setDataProvider'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=78;
			self['filter'] = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](filter, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})())? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return filter['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()));
			$pyjs['track']['lineno']=79;
			self['columns'] = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](columns, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})())? ($p['__getslice'](columns, 0, null)) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()));
			$pyjs['track']['lineno']=80;
			self['filterID'] = filterID;
			$pyjs['track']['lineno']=81;
			self['filterDescr'] = filterDescr;
			$pyjs['track']['lineno']=82;
			self['_tableHeaderIsValid'] = false;
			$pyjs['track']['lineno']=83;
			self['isSelector'] = isSelector;
			$pyjs['track']['lineno']=86;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['selectionChangedEvent', 'selectionActivatedEvent', 'cursorMovedEvent', 'tableChangedEvent', 'getCurrentSelection']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				f = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=91;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['setattr'](self, f, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'table'), f);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=93;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['setActions']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getDefaultActions'](myView);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=95;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](isSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
				$pyjs['track']['lineno']=96;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			}
			$pyjs['track']['lineno']=98;
			self['emptyNotificationDiv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=99;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['emptyNotificationDiv']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Currently no entries');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('class')['append']('emptynotification');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=101;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'emptyNotificationDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=102;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=103;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=104;
			self['filterDescriptionSpan'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'filterDescriptionSpan'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=106;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'filterDescriptionSpan')['__getitem__']('class')['append']('filterdescription');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateFilterDescription']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['module'],['filter', null],['columns', null],['isSelector', false],['filterID', null],['filterDescr', null],['batchSize', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('updateFilterDescription', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterDescriptionSpan']['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=113;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'filterDescr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=114;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['filterDescriptionSpan']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['unescape']($p['getattr'](self, 'filterDescr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateFilterDescription'] = $method;
		$pyjs['track']['lineno']=116;
		$method = $pyjs__bind_method2('getDefaultActions', function(view) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				view = arguments[1];
			}
			if (typeof view == 'undefined') view=arguments['callee']['__args__'][3][1];
			var $or4,$or3,cfg,$and26,$add2,$add3,$add1,$add4,$and23,$and22,$and21,$and24,defaultActions,$and25;
			$pyjs['track']={'module':'widgets.list', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=120;
			defaultActions = $p['__op_add']($add3=$p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['add', 'edit', 'clone', 'delete', '|', 'preview', 'selectfields']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})(),$add2=($p['bool']($p['getattr'](self, 'isSelector'))? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['|', 'select', 'close']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()))),$add4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['|', 'reload', 'selectfilter']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
			$pyjs['track']['lineno']=128;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and21=view)?(function(){try{try{$pyjs['in_try_except'] += 1;
			return view['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()['__contains__']('actions'):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
				$pyjs['track']['lineno']=129;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](defaultActions['__getitem__']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))), '|'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
					$pyjs['track']['lineno']=130;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return defaultActions['append']('|');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				}
				$pyjs['track']['lineno']=132;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return defaultActions['extend'](($p['bool']($or3=view['__getitem__']('actions'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and23=$m['conf']['__getitem__']('modules'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()['__contains__']($p['getattr'](self, 'module')):$and23));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
				$pyjs['track']['lineno']=136;
				cfg = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
				$pyjs['track']['lineno']=138;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and25=(function(){try{try{$pyjs['in_try_except'] += 1;
				return cfg['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()['__contains__']('actions'))?cfg['__getitem__']('actions'):$and25));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
					$pyjs['track']['lineno']=139;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](defaultActions['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))), '|'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
						$pyjs['track']['lineno']=140;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return defaultActions['append']('|');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					}
					$pyjs['track']['lineno']=142;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return defaultActions['extend'](cfg['__getitem__']('actions'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				}
			}
			$pyjs['track']['lineno']=144;
			$pyjs['track']['lineno']=144;
			var $pyjs__ret = defaultActions;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['view', null]]);
		$cls_definition['getDefaultActions'] = $method;
		$pyjs['track']['lineno']=146;
		$method = $pyjs__bind_method2('showErrorMsg', function(req, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				code = arguments[2];
			}
			if (typeof req == 'undefined') req=arguments['callee']['__args__'][3][1];
			if (typeof code == 'undefined') code=arguments['callee']['__args__'][4][1];
			var $or5,$or7,$or8,errorDiv,$and28,txt,$and27,$or6;
			$pyjs['track']={'module':'widgets.list', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=146;
			$pyjs['track']['lineno']=150;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=151;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['track']['lineno']=152;
			errorDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['track']['lineno']=153;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']('error_msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['track']['lineno']=154;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and27=code)?($p['bool']($or5=$p['op_eq'](code, 401))?$or5:$p['op_eq'](code, 403)):$and27));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
				$pyjs['track']['lineno']=155;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Access denied!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=157;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('An unknown error occurred!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			}
			$pyjs['track']['lineno']=158;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('error_code_%s', ($p['bool']($or7=code)?$or7:0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=159;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['track']['lineno']=160;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](errorDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req', null],['code', null]]);
		$cls_definition['showErrorMsg'] = $method;
		$pyjs['track']['lineno']=162;
		$method = $pyjs__bind_method2('onNextBatchNeeded', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var filter,$and30,$and29;
			$pyjs['track']={'module':'widgets.list', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=166;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and29=$p['getattr'](self, '_currentCursor'))?!$p['bool']($p['getattr'](self, 'isDetaching')):$and29));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
				$pyjs['track']['lineno']=167;
				filter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['filter']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['track']['lineno']=168;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['track']['lineno']=169;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']('cursor', $p['getattr'](self, '_currentCursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				$pyjs['track']['lineno']=170;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_currentRequests']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCompletion'), 'failureHandler':$p['getattr'](self, 'showErrorMsg'), 'cacheable':true}, $p['getattr'](self, 'module'), 'list', filter]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=173;
				self['_currentCursor'] = null;
			}
			else {
				$pyjs['track']['lineno']=175;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setDataProvider'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onNextBatchNeeded'] = $method;
		$pyjs['track']['lineno']=177;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=177;
			$pyjs['track']['lineno']=178;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$pyjs['track']['lineno']=179;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['registerChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=181;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=182;
			self['isDetaching'] = true;
			$pyjs['track']['lineno']=183;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$pyjs['track']['lineno']=184;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['removeChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=186;
		$method = $pyjs__bind_method2('onDataChanged', function(module) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				module = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $and32,$and31;
			$pyjs['track']={'module':'widgets.list', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=190;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and31=module)?!$p['op_eq'](module, $p['getattr'](self, 'module')):$and31));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
				$pyjs['track']['lineno']=191;
				$pyjs['track']['lineno']=191;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=193;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['module']]);
		$cls_definition['onDataChanged'] = $method;
		$pyjs['track']['lineno']=195;
		$method = $pyjs__bind_method2('reloadData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var filter;
			$pyjs['track']={'module':'widgets.list', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=199;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['track']['lineno']=200;
			self['_currentCursor'] = null;
			$pyjs['track']['lineno']=201;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['track']['lineno']=202;
			filter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filter']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['track']['lineno']=203;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return filter['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCompletion'), 'failureHandler':$p['getattr'](self, 'showErrorMsg'), 'cacheable':true}, $p['getattr'](self, 'module'), 'list', filter]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reloadData'] = $method;
		$pyjs['track']['lineno']=211;
		$method = $pyjs__bind_method2('setFilter', function(filter, filterID, filterDescr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
				filterID = arguments[2];
				filterDescr = arguments[3];
			}
			if (typeof filterID == 'undefined') filterID=arguments['callee']['__args__'][4][1];
			if (typeof filterDescr == 'undefined') filterDescr=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'widgets.list', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=215;
			self['filter'] = filter;
			$pyjs['track']['lineno']=216;
			self['filterID'] = filterID;
			$pyjs['track']['lineno']=217;
			self['filterDescr'] = filterDescr;
			$pyjs['track']['lineno']=218;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateFilterDescription']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['track']['lineno']=219;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['filter'],['filterID', null],['filterDescr', null]]);
		$cls_definition['setFilter'] = $method;
		$pyjs['track']['lineno']=221;
		$method = $pyjs__bind_method2('getFilter', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=221;
			$pyjs['track']['lineno']=222;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'filter'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs['track']['lineno']=223;
				$pyjs['track']['lineno']=223;
				var $pyjs__ret = function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,v,$collcomp1,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,k;
	$collcomp1 = $p['dict']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['filter']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.list';

	return $collcomp1;}();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=224;
			$pyjs['track']['lineno']=224;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFilter'] = $method;
		$pyjs['track']['lineno']=226;
		$method = $pyjs__bind_method2('onCompletion', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var boneInfo,boneName,data,$iter4_idx,$and34,$pyjs__trackstack_size_1,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,$and33;
			$pyjs['track']={'module':'widgets.list', 'lineno':226};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=226;
			$pyjs['track']['lineno']=231;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=232;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=234;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['remove'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$pyjs['track']['lineno']=235;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['track']['lineno']=237;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['track']['lineno']=239;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((data['__getitem__']('structure') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
				$pyjs['track']['lineno']=240;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs['track']['lineno']=241;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['table']['setDataProvider'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=243;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
					$pyjs['track']['lineno']=244;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
				}
				$pyjs['track']['lineno']=246;
				$pyjs['track']['lineno']=246;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=248;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'table')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=249;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'emptyNotificationDiv')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['track']['lineno']=250;
			self['_structure'] = data['__getitem__']('structure');
			$pyjs['track']['lineno']=252;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_tableHeaderIsValid')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
				$pyjs['track']['lineno']=253;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'columns')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
					$pyjs['track']['lineno']=254;
					self['columns'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
					$pyjs['track']['lineno']=255;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['__getitem__']('structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
						boneName = $tupleassign2[0];
						boneInfo = $tupleassign2[1];
						$pyjs['track']['lineno']=256;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](boneInfo['__getitem__']('visible'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
							$pyjs['track']['lineno']=257;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['columns']['append'](boneName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.list';
				}
				$pyjs['track']['lineno']=258;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setFields']($p['getattr'](self, 'columns'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			}
			$pyjs['track']['lineno']=261;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and33=data['__getitem__']('skellist'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()['__contains__']('cursor'):$and33));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
				$pyjs['track']['lineno']=262;
				self['_currentCursor'] = data['__getitem__']('cursor');
				$pyjs['track']['lineno']=263;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setDataProvider'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=265;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setDataProvider'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			}
			$pyjs['track']['lineno']=267;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['extend'](data['__getitem__']('skellist'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onCompletion'] = $method;
		$pyjs['track']['lineno']=269;
		$method = $pyjs__bind_method2('setFields', function(fields) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fields = arguments[1];
			}
			var boneInfo,$iter7_nextval,boneName,tmpDict,$iter7_array,$iter9_nextval,$iter9_idx,$iter9_array,$iter9_iter,boneInfoList,rendersDict,$iter7_idx,$iter7_iter,$iter7_type,$pyjs__trackstack_size_1,$iter9_type,delegateFactory;
			$pyjs['track']={'module':'widgets.list', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=269;
			$pyjs['track']['lineno']=270;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_structure')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
				$pyjs['track']['lineno']=271;
				self['_tableHeaderIsValid'] = false;
				$pyjs['track']['lineno']=272;
				$pyjs['track']['lineno']=272;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=274;
			boneInfoList = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
			$pyjs['track']['lineno']=275;
			tmpDict = function(){
				var $iter5_nextval,$iter5_idx,$pyjs__trackstack_size_1,$collcomp2,$iter5_iter,key,$iter5_array,$iter5_type,bone;
	$collcomp2 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				key = $tupleassign3[0];
				bone = $tupleassign3[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['__setitem__'](key, bone);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.list';

	return $collcomp2;}();
			$pyjs['track']['lineno']=277;
			fields = function(){
				var $iter6_idx,$iter6_type,$collcomp3,$iter6_array,$pyjs__trackstack_size_1,x,$iter6_iter,$iter6_nextval;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return fields;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				x = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=277;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return tmpDict['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()['__contains__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp3['append'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.list';

	return $collcomp3;}();
			$pyjs['track']['lineno']=278;
			self['columns'] = fields;
			$pyjs['track']['lineno']=280;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return fields;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				boneName = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=281;
				boneInfo = tmpDict['__getitem__'](boneName);
				$pyjs['track']['lineno']=282;
				delegateFactory = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()($p['getattr'](self, 'module'), boneName, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
				$pyjs['track']['lineno']=283;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setCellRender'](boneName, delegateFactory);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
				$pyjs['track']['lineno']=284;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return boneInfoList['append'](boneInfo);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=286;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($m['conf']['__getitem__']('showBoneNames'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
				$pyjs['track']['lineno']=287;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setHeader'](fields);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=289;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setHeader'](function(){
					var $iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,x;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return boneInfoList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					x = $iter8_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp4['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return x['get']('descr', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.list';

	return $collcomp4;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			}
			$pyjs['track']['lineno']=291;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['setShownFields'](fields);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['track']['lineno']=292;
			rendersDict = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['track']['lineno']=294;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return fields;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				boneName = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=295;
				boneInfo = tmpDict['__getitem__'](boneName);
				$pyjs['track']['lineno']=296;
				delegateFactory = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()($p['getattr'](self, 'module'), boneName, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
				$pyjs['track']['lineno']=297;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return rendersDict['__setitem__'](boneName, delegateFactory);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
				$pyjs['track']['lineno']=298;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return boneInfoList['append'](boneInfo);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=300;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['setCellRenders'](rendersDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$pyjs['track']['lineno']=301;
			self['_tableHeaderIsValid'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['fields']]);
		$cls_definition['setFields'] = $method;
		$pyjs['track']['lineno']=303;
		$method = $pyjs__bind_method2('getFields', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=303;
			$pyjs['track']['lineno']=304;
			$pyjs['track']['lineno']=304;
			var $pyjs__ret = $p['__getslice']($p['getattr'](self, 'columns'), 0, null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFields'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=307;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=309;
		$method = $pyjs__bind_method2('activateCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.list', 'lineno':309};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.list';
			$pyjs['track']['lineno']=309;
			$pyjs['track']['lineno']=314;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['activateCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activateCurrentSelection'] = $method;
		$pyjs['track']['lineno']=15;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ListWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.list */


/* end module: widgets.list */


/*
PYJS_DEPS: ['pyjd', 'json', 'config.conf', 'config', 'network.NetworkService', 'network', 'priorityqueue.viewDelegateSelector', 'priorityqueue', 'widgets.table.DataTable', 'widgets', 'widgets.table', 'widgets.actionbar.ActionBar', 'widgets.actionbar', 'widgets.sidebar.SideBar', 'widgets.sidebar', 'html5', 'sidebarwidgets.filterselector.CompoundFilter', 'sidebarwidgets', 'sidebarwidgets.filterselector', 'i18n.translate', 'i18n']
*/
