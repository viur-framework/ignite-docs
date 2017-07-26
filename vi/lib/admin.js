/* start module: admin */
$pyjs['loaded_modules']['admin'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['admin']['__was_initialized__']) return $pyjs['loaded_modules']['admin'];
	var $m = $pyjs['loaded_modules']['admin'];
	$m['__repr__'] = function() { return '<module: admin>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'admin';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'admin.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'admin.py, line 2:\n    import html5';
	$m.__track_lines__[4] = 'admin.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'admin.py, line 5:\n    from widgets import TopBarWidget';
	$m.__track_lines__[6] = 'admin.py, line 6:\n    from widgets.userlogoutmsg import UserLogoutMsg';
	$m.__track_lines__[7] = 'admin.py, line 7:\n    from network import NetworkService, DeferredCall';
	$m.__track_lines__[8] = 'admin.py, line 8:\n    from event import viInitializedEvent, EventDispatcher';
	$m.__track_lines__[9] = 'admin.py, line 9:\n    from priorityqueue import HandlerClassSelector, initialHashHandler, startupQueue';
	$m.__track_lines__[10] = 'admin.py, line 10:\n    from log import Log';
	$m.__track_lines__[11] = 'admin.py, line 11:\n    from pane import Pane, GroupPane';
	$m.__track_lines__[12] = 'admin.py, line 12:\n    from screen import Screen';
	$m.__track_lines__[15] = 'admin.py, line 15:\n    import handler';
	$m.__track_lines__[16] = 'admin.py, line 16:\n    import bones';
	$m.__track_lines__[17] = 'admin.py, line 17:\n    import actions';
	$m.__track_lines__[18] = 'admin.py, line 18:\n    import i18n';
	$m.__track_lines__[20] = 'admin.py, line 20:\n    class AdminScreen(Screen):';
	$m.__track_lines__[22] = 'admin.py, line 22:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[23] = 'admin.py, line 23:\n    super(AdminScreen, self).__init__(*args, **kwargs)';
	$m.__track_lines__[25] = 'admin.py, line 25:\n    self["id"] = "CoreWindow"';
	$m.__track_lines__[26] = 'admin.py, line 26:\n    conf["mainWindow"] = self';
	$m.__track_lines__[28] = 'admin.py, line 28:\n    self.topBar = TopBarWidget()';
	$m.__track_lines__[29] = 'admin.py, line 29:\n    self.appendChild(self.topBar)';
	$m.__track_lines__[31] = 'admin.py, line 31:\n    self.workSpace = html5.Div()';
	$m.__track_lines__[32] = 'admin.py, line 32:\n    self.workSpace["class"] = "vi_workspace"';
	$m.__track_lines__[33] = 'admin.py, line 33:\n    self.appendChild(self.workSpace)';
	$m.__track_lines__[35] = 'admin.py, line 35:\n    self.modulMgr = html5.Div()';
	$m.__track_lines__[36] = 'admin.py, line 36:\n    self.modulMgr["class"] = "vi_wm"';
	$m.__track_lines__[37] = 'admin.py, line 37:\n    self.appendChild(self.modulMgr)';
	$m.__track_lines__[39] = 'admin.py, line 39:\n    self.modulList = html5.Nav()';
	$m.__track_lines__[40] = 'admin.py, line 40:\n    self.modulList["class"] = "vi_manager"';
	$m.__track_lines__[41] = 'admin.py, line 41:\n    self.modulMgr.appendChild(self.modulList)';
	$m.__track_lines__[43] = 'admin.py, line 43:\n    self.moduleListUl = html5.Ul()';
	$m.__track_lines__[44] = 'admin.py, line 44:\n    self.moduleListUl["class"] = "modullist"';
	$m.__track_lines__[45] = 'admin.py, line 45:\n    self.modulList.appendChild(self.moduleListUl)';
	$m.__track_lines__[47] = 'admin.py, line 47:\n    self.viewport = html5.Div()';
	$m.__track_lines__[48] = 'admin.py, line 48:\n    self.viewport["class"] = "vi_viewer"';
	$m.__track_lines__[49] = 'admin.py, line 49:\n    self.workSpace.appendChild(self.viewport)';
	$m.__track_lines__[51] = 'admin.py, line 51:\n    self.logWdg = Log()';
	$m.__track_lines__[52] = 'admin.py, line 52:\n    self.appendChild(self.logWdg)';
	$m.__track_lines__[54] = 'admin.py, line 54:\n    self.currentPane = None';
	$m.__track_lines__[55] = 'admin.py, line 55:\n    self.nextPane = None #Which pane gains focus once the deferred call fires';
	$m.__track_lines__[56] = 'admin.py, line 56:\n    self.panes = [] # List of known panes. The ordering represents the order in which the user visited them.';
	$m.__track_lines__[57] = 'admin.py, line 57:\n    self.userLoggedOutMsg = UserLogoutMsg()';
	$m.__track_lines__[60] = 'admin.py, line 60:\n    le = eval("window.top.logError")';
	$m.__track_lines__[61] = 'admin.py, line 61:\n    w = eval("window")';
	$m.__track_lines__[62] = 'admin.py, line 62:\n    w.onerror = le';
	$m.__track_lines__[63] = 'admin.py, line 63:\n    w = eval("window.top")';
	$m.__track_lines__[64] = 'admin.py, line 64:\n    w.onerror = le';
	$m.__track_lines__[66] = 'admin.py, line 66:\n    def invoke(self):';
	$m.__track_lines__[67] = 'admin.py, line 67:\n    self.show()';
	$m.__track_lines__[68] = 'admin.py, line 68:\n    self.lock()';
	$m.__track_lines__[71] = 'admin.py, line 71:\n    startupQueue.setFinalElem(self.startup)';
	$m.__track_lines__[72] = 'admin.py, line 72:\n    startupQueue.run()';
	$m.__track_lines__[74] = 'admin.py, line 74:\n    def getCurrentUser(self):';
	$m.__track_lines__[75] = 'admin.py, line 75:\n    NetworkService.request("user", "view/self",';
	$m.__track_lines__[79] = 'admin.py, line 79:\n    def getCurrentUserSuccess(self, req):';
	$m.__track_lines__[80] = 'admin.py, line 80:\n    answ =  NetworkService.decode(req)';
	$m.__track_lines__[81] = 'admin.py, line 81:\n    conf["currentUser"] = answ["values"]';
	$m.__track_lines__[82] = 'admin.py, line 82:\n    self.startup()';
	$m.__track_lines__[84] = 'admin.py, line 84:\n    def getCurrentUserFailure(self, req, code):';
	$m.__track_lines__[85] = 'admin.py, line 85:\n    conf["theApp"].login()';
	$m.__track_lines__[87] = 'admin.py, line 87:\n    def startup(self):';
	$m.__track_lines__[88] = 'admin.py, line 88:\n    config = conf["mainConfig"]';
	$m.__track_lines__[89] = 'admin.py, line 89:\n    assert config';
	$m.__track_lines__[91] = 'admin.py, line 91:\n    if not conf["currentUser"]:';
	$m.__track_lines__[92] = 'admin.py, line 92:\n    self.getCurrentUser()';
	$m.__track_lines__[93] = 'admin.py, line 93:\n    return';
	$m.__track_lines__[95] = 'admin.py, line 95:\n    conf["server"] = config.get("configuration", {})';
	$m.__track_lines__[97] = 'admin.py, line 97:\n    moduleGroups = []';
	$m.__track_lines__[100] = 'admin.py, line 100:\n    if ("configuration" in config.keys()';
	$m.__track_lines__[103] = 'admin.py, line 103:\n    if ("modulGroups" in config["configuration"].keys()';
	$m.__track_lines__[106] = 'admin.py, line 106:\n    alert("Hello! Your project is still using \'admin.modulGroups\' for its module grouping information.\\n"';
	$m.__track_lines__[110] = 'admin.py, line 110:\n    moduleGroups = config["configuration"]["modulGroups"]';
	$m.__track_lines__[112] = 'admin.py, line 112:\n    if ("moduleGroups" in config["configuration"].keys()';
	$m.__track_lines__[115] = 'admin.py, line 115:\n    moduleGroups = config["configuration"]["moduleGroups"]';
	$m.__track_lines__[118] = 'admin.py, line 118:\n    groups = {}';
	$m.__track_lines__[119] = 'admin.py, line 119:\n    panes = []';
	$m.__track_lines__[120] = 'admin.py, line 120:\n    userAccess = conf["currentUser"].get("access", [])';
	$m.__track_lines__[121] = 'admin.py, line 121:\n    predefinedFilterCounter = 1';
	$m.__track_lines__[123] = 'admin.py, line 123:\n    for group in moduleGroups:';
	$m.__track_lines__[124] = 'admin.py, line 124:\n    p = GroupPane(group["name"], iconURL=group["icon"])';
	$m.__track_lines__[126] = 'admin.py, line 126:\n    groups[group["prefix"]] = p';
	$m.__track_lines__[127] = 'admin.py, line 127:\n    if "sortIndex" in group.keys():';
	$m.__track_lines__[128] = 'admin.py, line 128:\n    sortIndex = group["sortIndex"]';
	$m.__track_lines__[130] = 'admin.py, line 130:\n    sortIndex = None';
	$m.__track_lines__[132] = 'admin.py, line 132:\n    panes.append((group["name"], sortIndex, p))';
	$m.__track_lines__[135] = 'admin.py, line 135:\n    sorted_modules = [(x,y) for x,y in config["modules"].items()]';
	$m.__track_lines__[136] = 'admin.py, line 136:\n    sorted_modules.sort(key=lambda x: x[1].get("name", "").lower() or None)';
	$m.__track_lines__[137] = 'admin.py, line 137:\n    sorted_modules.sort(key=lambda x: x[1].get("sortIndex"), reverse=True)';
	$m.__track_lines__[139] = 'admin.py, line 139:\n    for module, info in sorted_modules:';
	$m.__track_lines__[140] = 'admin.py, line 140:\n    if not "root" in userAccess and not any([x.startswith(module) for x in userAccess]):';
	$m.__track_lines__[142] = 'admin.py, line 142:\n    continue';
	$m.__track_lines__[144] = 'admin.py, line 144:\n    conf["modules"][module] = info';
	$m.__track_lines__[146] = 'admin.py, line 146:\n    if "views" in conf["modules"][module].keys() and conf["modules"][module]["views"]:';
	$m.__track_lines__[147] = 'admin.py, line 147:\n    for v in conf["modules"][module]["views"]: #Work-a-round for PyJS not supporting id()';
	$m.__track_lines__[148] = 'admin.py, line 148:\n    v["__id"] = predefinedFilterCounter';
	$m.__track_lines__[149] = 'admin.py, line 149:\n    predefinedFilterCounter += 1';
	$m.__track_lines__[151] = 'admin.py, line 151:\n    handlerCls = HandlerClassSelector.select(module, info)';
	$m.__track_lines__[152] = 'admin.py, line 152:\n    assert handlerCls is not None, "No handler available for module \'%s\'" % module';
	$m.__track_lines__[154] = 'admin.py, line 154:\n    conf["modules"][module]["visibleName"] = conf["modules"][module]["name"]';
	$m.__track_lines__[156] = 'admin.py, line 156:\n    isChild = False';
	$m.__track_lines__[157] = 'admin.py, line 157:\n    for k in groups.keys():';
	$m.__track_lines__[158] = 'admin.py, line 158:\n    if info["name"].startswith(k):';
	$m.__track_lines__[159] = 'admin.py, line 159:\n    conf["modules"][module]["visibleName"] = conf["modules"][module]["name"].replace(k, "")';
	$m.__track_lines__[161] = 'admin.py, line 161:\n    handler = handlerCls(module, info)';
	$m.__track_lines__[162] = 'admin.py, line 162:\n    groups[k].addChildPane(handler)';
	$m.__track_lines__[164] = 'admin.py, line 164:\n    isChild = True';
	$m.__track_lines__[165] = 'admin.py, line 165:\n    break';
	$m.__track_lines__[167] = 'admin.py, line 167:\n    if not isChild:';
	$m.__track_lines__[168] = 'admin.py, line 168:\n    handler = handlerCls( module, info )';
	$m.__track_lines__[169] = 'admin.py, line 169:\n    if "sortIndex" in info.keys():';
	$m.__track_lines__[170] = 'admin.py, line 170:\n    sortIndex = info["sortIndex"]';
	$m.__track_lines__[172] = 'admin.py, line 172:\n    sortIndex = None';
	$m.__track_lines__[173] = 'admin.py, line 173:\n    panes.append((info["visibleName"], sortIndex, handler))';
	$m.__track_lines__[176] = 'admin.py, line 176:\n    panes.sort( key=lambda x: x[0] )';
	$m.__track_lines__[177] = 'admin.py, line 177:\n    panes.sort( key=lambda x: x[1], reverse=True )';
	$m.__track_lines__[180] = 'admin.py, line 180:\n    for k, v, pane in panes:';
	$m.__track_lines__[182] = 'admin.py, line 182:\n    if ( isinstance( pane, GroupPane )';
	$m.__track_lines__[185] = 'admin.py, line 185:\n    continue';
	$m.__track_lines__[187] = 'admin.py, line 187:\n    self.addPane( pane )';
	$m.__track_lines__[190] = 'admin.py, line 190:\n    viInitializedEvent.fire()';
	$m.__track_lines__[191] = 'admin.py, line 191:\n    DeferredCall( self.checkInitialHash )';
	$m.__track_lines__[192] = 'admin.py, line 192:\n    self.unlock()';
	$m.__track_lines__[194] = 'admin.py, line 194:\n    def remove(self):';
	$m.__track_lines__[195] = 'admin.py, line 195:\n    self.userLoggedOutMsg.stopInterval()';
	$m.__track_lines__[196] = 'admin.py, line 196:\n    self.userLoggedOutMsg = None';
	$m.__track_lines__[197] = 'admin.py, line 197:\n    super(AdminScreen, self).remove()';
	$m.__track_lines__[199] = 'admin.py, line 199:\n    def log(self, type, msg ):';
	$m.__track_lines__[200] = 'admin.py, line 200:\n    self.logWdg.log( type, msg )';
	$m.__track_lines__[202] = 'admin.py, line 202:\n    def checkInitialHash(self, *args, **kwargs):';
	$m.__track_lines__[203] = 'admin.py, line 203:\n    urlHash = eval("window.top.location.hash")';
	$m.__track_lines__[204] = 'admin.py, line 204:\n    if not urlHash:';
	$m.__track_lines__[205] = 'admin.py, line 205:\n    return';
	$m.__track_lines__[207] = 'admin.py, line 207:\n    if "?" in urlHash:';
	$m.__track_lines__[208] = 'admin.py, line 208:\n    hashStr = urlHash[1:urlHash.find("?")]';
	$m.__track_lines__[209] = 'admin.py, line 209:\n    paramsStr = urlHash[urlHash.find("?")+1:]';
	$m.__track_lines__[211] = 'admin.py, line 211:\n    hashStr = urlHash[1:]';
	$m.__track_lines__[212] = 'admin.py, line 212:\n    paramsStr = ""';
	$m.__track_lines__[214] = 'admin.py, line 214:\n    self.execCall(hashStr, paramsStr)';
	$m.__track_lines__[216] = 'admin.py, line 216:\n    def execCall(self, path, params = None):';
	$m.__track_lines__[223] = 'admin.py, line 223:\n    path = [x for x in path.split("/") if x]';
	$m.__track_lines__[225] = 'admin.py, line 225:\n    param = {}';
	$m.__track_lines__[227] = 'admin.py, line 227:\n    if params:';
	$m.__track_lines__[228] = 'admin.py, line 228:\n    if isinstance(params, dict):';
	$m.__track_lines__[229] = 'admin.py, line 229:\n    param = params';
	$m.__track_lines__[231] = 'admin.py, line 231:\n    for pair in params.split("&"):';
	$m.__track_lines__[232] = 'admin.py, line 232:\n    if not "=" in pair:';
	$m.__track_lines__[233] = 'admin.py, line 233:\n    continue';
	$m.__track_lines__[235] = 'admin.py, line 235:\n    key = pair[:pair.find("=")]';
	$m.__track_lines__[236] = 'admin.py, line 236:\n    value = pair[pair.find("=") + 1:]';
	$m.__track_lines__[238] = 'admin.py, line 238:\n    if not (key and value):';
	$m.__track_lines__[239] = 'admin.py, line 239:\n    continue';
	$m.__track_lines__[241] = 'admin.py, line 241:\n    if key in param.keys():';
	$m.__track_lines__[242] = 'admin.py, line 242:\n    if not isinstance(param[key], list):';
	$m.__track_lines__[243] = 'admin.py, line 243:\n    param[key] = [params[key]]';
	$m.__track_lines__[245] = 'admin.py, line 245:\n    param[key].append(value)';
	$m.__track_lines__[247] = 'admin.py, line 247:\n    param[key] = value';
	$m.__track_lines__[249] = 'admin.py, line 249:\n    print("execCall", path, param)';
	$m.__track_lines__[251] = 'admin.py, line 251:\n    gen = initialHashHandler.select(path, param)';
	$m.__track_lines__[252] = 'admin.py, line 252:\n    if gen:';
	$m.__track_lines__[253] = 'admin.py, line 253:\n    gen(path, param)';
	$m.__track_lines__[255] = 'admin.py, line 255:\n    def onError(self, req, code):';
	$m.__track_lines__[256] = 'admin.py, line 256:\n    print("ONERROR")';
	$m.__track_lines__[258] = 'admin.py, line 258:\n    def _registerChildPanes(self, pane ):';
	$m.__track_lines__[259] = 'admin.py, line 259:\n    for childPane in pane.childPanes:';
	$m.__track_lines__[260] = 'admin.py, line 260:\n    self.panes.append(childPane)';
	$m.__track_lines__[261] = 'admin.py, line 261:\n    self.viewport.appendChild(childPane.widgetsDomElm)';
	$m.__track_lines__[262] = 'admin.py, line 262:\n    childPane.widgetsDomElm["style"]["display"] = "none"';
	$m.__track_lines__[263] = 'admin.py, line 263:\n    self._registerChildPanes(childPane)';
	$m.__track_lines__[265] = 'admin.py, line 265:\n    def addPane(self, pane, parentPane=None):';
	$m.__track_lines__[268] = 'admin.py, line 268:\n    if len(pane.childPanes)>0:';
	$m.__track_lines__[269] = 'admin.py, line 269:\n    self._registerChildPanes( pane )';
	$m.__track_lines__[271] = 'admin.py, line 271:\n    self.panes.append( pane )';
	$m.__track_lines__[273] = 'admin.py, line 273:\n    if parentPane:';
	$m.__track_lines__[274] = 'admin.py, line 274:\n    parentPane.addChildPane( pane )';
	$m.__track_lines__[276] = 'admin.py, line 276:\n    self.moduleListUl.appendChild( pane )';
	$m.__track_lines__[278] = 'admin.py, line 278:\n    self.viewport.appendChild(pane.widgetsDomElm)';
	$m.__track_lines__[279] = 'admin.py, line 279:\n    pane.widgetsDomElm["style"]["display"] = "none"';
	$m.__track_lines__[282] = 'admin.py, line 282:\n    def stackPane(self, pane, focus=False):';
	$m.__track_lines__[283] = 'admin.py, line 283:\n    assert self.currentPane is not None, "Cannot stack a pane. There\'s no current one."';
	$m.__track_lines__[284] = 'admin.py, line 284:\n    self.addPane( pane, parentPane=self.currentPane )';
	$m.__track_lines__[285] = 'admin.py, line 285:\n    if focus and not self.nextPane:';
	$m.__track_lines__[289] = 'admin.py, line 289:\n    self.nextPane = pane';
	$m.__track_lines__[290] = 'admin.py, line 290:\n    DeferredCall( self.focusNextPane )';
	$m.__track_lines__[292] = 'admin.py, line 292:\n    def focusNextPane(self, *args, **kwargs):';
	$m.__track_lines__[296] = 'admin.py, line 296:\n    if not self.nextPane:';
	$m.__track_lines__[297] = 'admin.py, line 297:\n    return';
	$m.__track_lines__[299] = 'admin.py, line 299:\n    nextPane = self.nextPane';
	$m.__track_lines__[300] = 'admin.py, line 300:\n    self.nextPane = None';
	$m.__track_lines__[302] = 'admin.py, line 302:\n    self.focusPane( nextPane )';
	$m.__track_lines__[304] = 'admin.py, line 304:\n    def focusPane(self, pane):';
	$m.__track_lines__[305] = 'admin.py, line 305:\n    assert pane in self.panes, "Cannot focus unknown pane!"';
	$m.__track_lines__[309] = 'admin.py, line 309:\n    if pane == self.currentPane:';
	$m.__track_lines__[310] = 'admin.py, line 310:\n    if self.currentPane.collapseable and self.currentPane.childDomElem:';
	$m.__track_lines__[311] = 'admin.py, line 311:\n    if self.currentPane.childDomElem["style"]["display"] == "none":';
	$m.__track_lines__[312] = 'admin.py, line 312:\n    self.currentPane.childDomElem["style"]["display"] = "block"';
	$m.__track_lines__[314] = 'admin.py, line 314:\n    self.currentPane.childDomElem["style"]["display"] = "none"';
	$m.__track_lines__[315] = 'admin.py, line 315:\n    return';
	$m.__track_lines__[317] = 'admin.py, line 317:\n    self.panes.remove( pane ) # Move the pane to the end of the list';
	$m.__track_lines__[318] = 'admin.py, line 318:\n    self.panes.append( pane )';
	$m.__track_lines__[321] = 'admin.py, line 321:\n    if self.currentPane is not None:';
	$m.__track_lines__[322] = 'admin.py, line 322:\n    self.currentPane["class"].remove("is_active")';
	$m.__track_lines__[323] = 'admin.py, line 323:\n    self.currentPane.widgetsDomElm["style"]["display"] = "none"';
	$m.__track_lines__[326] = 'admin.py, line 326:\n    self.topBar.setCurrentModulDescr( pane.descr, pane.iconURL, pane.iconClasses )';
	$m.__track_lines__[327] = 'admin.py, line 327:\n    self.currentPane = pane';
	$m.__track_lines__[328] = 'admin.py, line 328:\n    self.currentPane.widgetsDomElm["style"]["display"] = "block"';
	$m.__track_lines__[330] = 'admin.py, line 330:\n    if self.currentPane.collapseable and self.currentPane.childDomElem:';
	$m.__track_lines__[331] = 'admin.py, line 331:\n    self.currentPane.childDomElem["style"]["display"] = "block"';
	$m.__track_lines__[333] = 'admin.py, line 333:\n    self.currentPane["class"].append("is_active")';
	$m.__track_lines__[336] = 'admin.py, line 336:\n    pane = self.currentPane.parentPane';
	$m.__track_lines__[337] = 'admin.py, line 337:\n    while isinstance(pane, Pane):';
	$m.__track_lines__[338] = 'admin.py, line 338:\n    if pane.childDomElem["style"].get("display", "none") == "none":';
	$m.__track_lines__[339] = 'admin.py, line 339:\n    pane.childDomElem["style"]["display"] = "block"';
	$m.__track_lines__[341] = 'admin.py, line 341:\n    pane = pane.parentPane';
	$m.__track_lines__[343] = 'admin.py, line 343:\n    def removePane(self, pane):';
	$m.__track_lines__[344] = 'admin.py, line 344:\n    assert pane in self.panes, "Cannot remove unknown pane!"';
	$m.__track_lines__[346] = 'admin.py, line 346:\n    self.panes.remove( pane )';
	$m.__track_lines__[347] = 'admin.py, line 347:\n    if pane == self.currentPane:';
	$m.__track_lines__[348] = 'admin.py, line 348:\n    if self.panes:';
	$m.__track_lines__[349] = 'admin.py, line 349:\n    self.focusPane( self.panes[-1])';
	$m.__track_lines__[351] = 'admin.py, line 351:\n    self.currentPane = None';
	$m.__track_lines__[353] = 'admin.py, line 353:\n    if pane == self.nextPane:';
	$m.__track_lines__[354] = 'admin.py, line 354:\n    if self.panes:';
	$m.__track_lines__[355] = 'admin.py, line 355:\n    self.nextPane = self.panes[-1]';
	$m.__track_lines__[357] = 'admin.py, line 357:\n    self.nextPane = None';
	$m.__track_lines__[359] = 'admin.py, line 359:\n    if not pane.parentPane or pane.parentPane is self:';
	$m.__track_lines__[360] = 'admin.py, line 360:\n    self.moduleListUl.removeChild( pane )';
	$m.__track_lines__[362] = 'admin.py, line 362:\n    pane.parentPane.removeChildPane( pane )';
	$m.__track_lines__[364] = 'admin.py, line 364:\n    self.viewport.removeChild( pane.widgetsDomElm )';
	$m.__track_lines__[366] = 'admin.py, line 366:\n    def addWidget(self, widget, pane ):';
	$m.__track_lines__[367] = 'admin.py, line 367:\n    pane.addWidget(widget)';
	$m.__track_lines__[369] = 'admin.py, line 369:\n    def stackWidget(self, widget ):';
	$m.__track_lines__[370] = 'admin.py, line 370:\n    assert self.currentPane is not None, "Cannot stack a widget while no pane is active"';
	$m.__track_lines__[371] = 'admin.py, line 371:\n    self.addWidget( widget, self.currentPane )';
	$m.__track_lines__[373] = 'admin.py, line 373:\n    def removeWidget(self, widget ):';
	$m.__track_lines__[374] = 'admin.py, line 374:\n    for pane in self.panes:';
	$m.__track_lines__[375] = 'admin.py, line 375:\n    if pane.containsWidget(widget):';
	$m.__track_lines__[376] = 'admin.py, line 376:\n    pane.removeWidget(widget)';
	$m.__track_lines__[377] = 'admin.py, line 377:\n    return';
	$m.__track_lines__[379] = 'admin.py, line 379:\n    raise AssertionError("Tried to remove unknown widget %s" % str( widget ))';


	$pyjs['track']['module']='admin';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TopBarWidget'] = $p['___import___']('widgets.TopBarWidget', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['UserLogoutMsg'] = $p['___import___']('widgets.userlogoutmsg.UserLogoutMsg', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viInitializedEvent'] = $p['___import___']('event.viInitializedEvent', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['HandlerClassSelector'] = $p['___import___']('priorityqueue.HandlerClassSelector', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['initialHashHandler'] = $p['___import___']('priorityqueue.initialHashHandler', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['startupQueue'] = $p['___import___']('priorityqueue.startupQueue', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Log'] = $p['___import___']('log.Log', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['GroupPane'] = $p['___import___']('pane.GroupPane', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Screen'] = $p['___import___']('screen.Screen', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=15;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['handler'] = $p['___import___']('handler', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=16;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['bones'] = $p['___import___']('bones', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=17;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actions'] = $p['___import___']('actions', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=18;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['i18n'] = $p['___import___']('i18n', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=20;
	$m['AdminScreen'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'admin';
		$pyjs['track']['lineno']=22;
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
			var le,w;
			$pyjs['track']={'module':'admin', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AdminScreen'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('id', 'CoreWindow');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=26;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('mainWindow', self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=28;
			self['topBar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['TopBarWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'topBar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=31;
			self['workSpace'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'workSpace')['__setitem__']('class', 'vi_workspace');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'workSpace'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=35;
			self['modulMgr'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modulMgr')['__setitem__']('class', 'vi_wm');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'modulMgr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=39;
			self['modulList'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Nav']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modulList')['__setitem__']('class', 'vi_manager');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modulMgr']['appendChild']($p['getattr'](self, 'modulList'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=43;
			self['moduleListUl'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'moduleListUl')['__setitem__']('class', 'modullist');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modulList']['appendChild']($p['getattr'](self, 'moduleListUl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=47;
			self['viewport'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'viewport')['__setitem__']('class', 'vi_viewer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['workSpace']['appendChild']($p['getattr'](self, 'viewport'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=51;
			self['logWdg'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Log']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=52;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'logWdg'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=54;
			self['currentPane'] = null;
			$pyjs['track']['lineno']=55;
			self['nextPane'] = null;
			$pyjs['track']['lineno']=56;
			self['panes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=57;
			self['userLoggedOutMsg'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['UserLogoutMsg']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=60;
			le = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.logError');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=61;
			w = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=62;
			w['onerror'] = le;
			$pyjs['track']['lineno']=63;
			w = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=64;
			w['onerror'] = le;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('invoke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'admin', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=68;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['startupQueue']['setFinalElem']($p['getattr'](self, 'startup'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=72;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['startupQueue']['run']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invoke'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('getCurrentUser', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'admin', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'getCurrentUserSuccess'), 'failureHandler':$p['getattr'](self, 'getCurrentUserFailure')}, 'user', 'view/self']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentUser'] = $method;
		$pyjs['track']['lineno']=79;
		$method = $pyjs__bind_method2('getCurrentUserSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var answ;
			$pyjs['track']={'module':'admin', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=80;
			answ = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=81;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', answ['__getitem__']('values'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['startup']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['getCurrentUserSuccess'] = $method;
		$pyjs['track']['lineno']=84;
		$method = $pyjs__bind_method2('getCurrentUserFailure', function(req, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				code = arguments[2];
			}

			$pyjs['track']={'module':'admin', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=84;
			$pyjs['track']['lineno']=85;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('theApp')['login']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req'],['code']]);
		$cls_definition['getCurrentUserFailure'] = $method;
		$pyjs['track']['lineno']=87;
		$method = $pyjs__bind_method2('startup', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$and8,predefinedFilterCounter,$lambda3,$lambda2,$lambda1,$iter7_idx,$iter6_type,$iter5_array,$iter3_array,$lambda4,module,$iter1_iter,$iter8_iter,$iter5_iter,pane,$iter5_type,$iter6_iter,$iter8_array,$iter7_iter,$iter6_nextval,sortIndex,$iter3_idx,moduleGroups,$or3,handlerCls,handler,$iter1_array,$iter5_idx,$iter8_idx,userAccess,$iter7_type,config,$iter8_type,$iter3_iter,panes,$and9,$or4,$iter1_nextval,$iter6_idx,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and10,$and11,$iter8_nextval,groups,$iter3_type,group,isChild,info,child,$iter1_type,$iter7_nextval,k,$iter7_array,v,$iter6_array,$add2,p,$add1,$pyjs__trackstack_size_2,$iter1_idx,$pyjs__trackstack_size_1,$iter3_nextval,sorted_modules;
			$pyjs['track']={'module':'admin', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=87;
			$pyjs['track']['lineno']=88;
			config = $m['conf']['__getitem__']('mainConfig');
			$pyjs['track']['lineno']=89;
			if (!( config )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=91;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($m['conf']['__getitem__']('currentUser')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCurrentUser']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=93;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=95;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('server', (function(){try{try{$pyjs['in_try_except'] += 1;
			return config['get']('configuration', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=97;
			moduleGroups = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=100;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return config['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()['__contains__']('configuration'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](config['__getitem__']('configuration'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs['track']['lineno']=103;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
				return config['__getitem__']('configuration')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()['__contains__']('modulGroups'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](config['__getitem__']('configuration')['__getitem__']('modulGroups'), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})():$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs['track']['lineno']=106;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof alert == "undefined"?$m['alert']:alert)("Hello! Your project is still using 'admin.modulGroups' for its module grouping information.\nPlease rename it to 'admin.moduleGroups' (yes, with 'e') to avoid this alert message.\n\nThank you!");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					$pyjs['track']['lineno']=110;
					moduleGroups = config['__getitem__']('configuration')['__getitem__']('modulGroups');
				}
				$pyjs['track']['lineno']=112;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return config['__getitem__']('configuration')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()['__contains__']('moduleGroups'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](config['__getitem__']('configuration')['__getitem__']('moduleGroups'), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})():$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
					$pyjs['track']['lineno']=115;
					moduleGroups = config['__getitem__']('configuration')['__getitem__']('moduleGroups');
				}
			}
			$pyjs['track']['lineno']=118;
			groups = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=119;
			panes = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=120;
			userAccess = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('currentUser')['get']('access', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=121;
			predefinedFilterCounter = 1;
			$pyjs['track']['lineno']=123;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleGroups;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				group = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=124;
				p = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['GroupPane'], null, null, [{'iconURL':group['__getitem__']('icon')}, group['__getitem__']('name')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs['track']['lineno']=126;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return groups['__setitem__'](group['__getitem__']('prefix'), p);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs['track']['lineno']=127;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return group['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()['__contains__']('sortIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs['track']['lineno']=128;
					sortIndex = group['__getitem__']('sortIndex');
				}
				else {
					$pyjs['track']['lineno']=130;
					sortIndex = null;
				}
				$pyjs['track']['lineno']=132;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return panes['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([group['__getitem__']('name'), sortIndex, p]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=135;
			sorted_modules = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_1,y,x,$iter2_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return config['__getitem__']('modules')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';

	return $collcomp1;}();
			$pyjs['track']['lineno']=136;
			var 			$lambda1 = function(x) {
				var $or1,$or2;
				$pyjs['track']={'module':'admin','lineno':136};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='admin';
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=136;
				var $pyjs__ret = ($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return x['__getitem__'](1)['get']('name', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})())?$or1:null);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(sorted_modules, 'sort', null, null, [{'key':$lambda1}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['track']['lineno']=137;
			var 			$lambda2 = function(x) {

				$pyjs['track']={'module':'admin','lineno':137};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='admin';
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=137;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return x['__getitem__'](1)['get']('sortIndex');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(sorted_modules, 'sort', null, null, [{'key':$lambda2, 'reverse':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=139;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return sorted_modules;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				module = $tupleassign2[0];
				info = $tupleassign2[1];
				$pyjs['track']['lineno']=140;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and7=!$p['bool'](userAccess['__contains__']('root')))?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['any'](function(){
					var $iter4_nextval,$collcomp2,$iter4_idx,$pyjs__trackstack_size_2,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return userAccess;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return x['startswith'](module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='admin';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=142;
					continue;
				}
				$pyjs['track']['lineno']=144;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['__setitem__'](module, info);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['track']['lineno']=146;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()['__contains__']('views'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views'):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
					$pyjs['track']['lineno']=147;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('views');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						v = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=148;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return v['__setitem__']('__id', predefinedFilterCounter);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
						$pyjs['track']['lineno']=149;
						predefinedFilterCounter = $p['__op_add']($add1=predefinedFilterCounter,$add2=1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='admin';
				}
				$pyjs['track']['lineno']=151;
				handlerCls = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HandlerClassSelector']['select'](module, info);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=152;
				if (!( (handlerCls !== null) )) {
				   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("No handler available for module '%s'", module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})());
				 }
				$pyjs['track']['lineno']=154;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['__getitem__'](module)['__setitem__']('visibleName', $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$pyjs['track']['lineno']=156;
				isChild = false;
				$pyjs['track']['lineno']=157;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return groups['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					k = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=158;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return info['__getitem__']('name')['startswith'](k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
						$pyjs['track']['lineno']=159;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['conf']['__getitem__']('modules')['__getitem__'](module)['__setitem__']('visibleName', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('name')['$$replace'](k, '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
						$pyjs['track']['lineno']=161;
						handler = (function(){try{try{$pyjs['in_try_except'] += 1;
						return handlerCls(module, info);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
						$pyjs['track']['lineno']=162;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return groups['__getitem__'](k)['addChildPane'](handler);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
						$pyjs['track']['lineno']=164;
						isChild = true;
						$pyjs['track']['lineno']=165;
						break;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='admin';
				$pyjs['track']['lineno']=167;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](isChild));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
					$pyjs['track']['lineno']=168;
					handler = (function(){try{try{$pyjs['in_try_except'] += 1;
					return handlerCls(module, info);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
					$pyjs['track']['lineno']=169;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return info['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()['__contains__']('sortIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
						$pyjs['track']['lineno']=170;
						sortIndex = info['__getitem__']('sortIndex');
					}
					else {
						$pyjs['track']['lineno']=172;
						sortIndex = null;
					}
					$pyjs['track']['lineno']=173;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return panes['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([info['__getitem__']('visibleName'), sortIndex, handler]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=176;
			var 			$lambda3 = function(x) {

				$pyjs['track']={'module':'admin','lineno':176};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='admin';
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=176;
				var $pyjs__ret = x['__getitem__'](0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(panes, 'sort', null, null, [{'key':$lambda3}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$pyjs['track']['lineno']=177;
			var 			$lambda4 = function(x) {

				$pyjs['track']={'module':'admin','lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='admin';
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=177;
				var $pyjs__ret = x['__getitem__'](1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(panes, 'sort', null, null, [{'key':$lambda4, 'reverse':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			$pyjs['track']['lineno']=180;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return panes;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter7_nextval['$nextval'], 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				k = $tupleassign3[0];
				v = $tupleassign3[1];
				pane = $tupleassign3[2];
				$pyjs['track']['lineno']=182;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and11=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](pane, $m['GroupPane']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})())?($p['bool']($or3=!$p['bool']($p['getattr'](pane, 'childPanes')))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['all'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter8_iter = $p['getattr'](pane, 'childPanes');
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								child = $iter8_nextval['$nextval'];
								$yield_value = $p['op_eq'](child['__getitem__']('style')['get']('display'), 'none');
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
					$pyjs['track']['lineno']=185;
					continue;
				}
				$pyjs['track']['lineno']=187;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=190;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['viInitializedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			$pyjs['track']['lineno']=191;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DeferredCall']($p['getattr'](self, 'checkInitialHash'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$pyjs['track']['lineno']=192;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['startup'] = $method;
		$pyjs['track']['lineno']=194;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'admin', 'lineno':194};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=194;
			$pyjs['track']['lineno']=195;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['userLoggedOutMsg']['stopInterval']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['track']['lineno']=196;
			self['userLoggedOutMsg'] = null;
			$pyjs['track']['lineno']=197;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AdminScreen'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()['remove']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs['track']['lineno']=199;
		$method = $pyjs__bind_method2('log', function(type, msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				msg = arguments[2];
			}

			$pyjs['track']={'module':'admin', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=200;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['logWdg']['log'](type, msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['type'],['msg']]);
		$cls_definition['log'] = $method;
		$pyjs['track']['lineno']=202;
		$method = $pyjs__bind_method2('checkInitialHash', function() {
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
			var $add3,hashStr,$add4,urlHash,paramsStr;
			$pyjs['track']={'module':'admin', 'lineno':202};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=202;
			$pyjs['track']['lineno']=203;
			urlHash = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.location.hash');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$pyjs['track']['lineno']=204;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](urlHash));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=205;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=207;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](urlHash['__contains__']('?'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs['track']['lineno']=208;
				hashStr = $p['__getslice'](urlHash, 1, (function(){try{try{$pyjs['in_try_except'] += 1;
				return urlHash['find']('?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})());
				$pyjs['track']['lineno']=209;
				paramsStr = $p['__getslice'](urlHash, $p['__op_add']($add3=(function(){try{try{$pyjs['in_try_except'] += 1;
				return urlHash['find']('?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})(),$add4=1), null);
			}
			else {
				$pyjs['track']['lineno']=211;
				hashStr = $p['__getslice'](urlHash, 1, null);
				$pyjs['track']['lineno']=212;
				paramsStr = '';
			}
			$pyjs['track']['lineno']=214;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['execCall'](hashStr, paramsStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['checkInitialHash'] = $method;
		$pyjs['track']['lineno']=216;
		$method = $pyjs__bind_method2('execCall', function(path, params) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				path = arguments[1];
				params = arguments[2];
			}
			if (typeof params == 'undefined') params=arguments['callee']['__args__'][4][1];
			var value,$iter10_nextval,$and14,$and13,$add5,$add6,param,gen,pair,$iter10_array,key,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
			$pyjs['track']={'module':'admin', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=216;
			$pyjs['track']['lineno']=223;
			path = function(){
				var $iter9_iter,$collcomp3,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_1,x,$iter9_array;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return path['$$split']('/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				x = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=223;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp3['append'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';

	return $collcomp3;}();
			$pyjs['track']['lineno']=225;
			param = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$pyjs['track']['lineno']=227;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
				$pyjs['track']['lineno']=228;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](params, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
					$pyjs['track']['lineno']=229;
					param = params;
				}
				else {
					$pyjs['track']['lineno']=231;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return params['$$split']('&');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						pair = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=232;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](pair['__contains__']('=')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
							$pyjs['track']['lineno']=233;
							continue;
						}
						$pyjs['track']['lineno']=235;
						key = $p['__getslice'](pair, 0, (function(){try{try{$pyjs['in_try_except'] += 1;
						return pair['find']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})());
						$pyjs['track']['lineno']=236;
						value = $p['__getslice'](pair, $p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
						return pair['find']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})(),$add6=1), null);
						$pyjs['track']['lineno']=238;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](($p['bool']($and13=key)?value:$and13)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
							$pyjs['track']['lineno']=239;
							continue;
						}
						$pyjs['track']['lineno']=241;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return param['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()['__contains__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
							$pyjs['track']['lineno']=242;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['isinstance'](param['__getitem__'](key), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
								$pyjs['track']['lineno']=243;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return param['__setitem__'](key, (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['list']([params['__getitem__'](key)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
							}
							$pyjs['track']['lineno']=245;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return param['__getitem__'](key)['append'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=247;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return param['__setitem__'](key, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='admin';
				}
			}
			$pyjs['track']['lineno']=249;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['execCall', path, param]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
			$pyjs['track']['lineno']=251;
			gen = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['initialHashHandler']['select'](path, param);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$pyjs['track']['lineno']=252;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](gen);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
				$pyjs['track']['lineno']=253;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return gen(path, param);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['path'],['params', null]]);
		$cls_definition['execCall'] = $method;
		$pyjs['track']['lineno']=255;
		$method = $pyjs__bind_method2('onError', function(req, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				code = arguments[2];
			}

			$pyjs['track']={'module':'admin', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=255;
			$pyjs['track']['lineno']=256;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc'](['ONERROR'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req'],['code']]);
		$cls_definition['onError'] = $method;
		$pyjs['track']['lineno']=258;
		$method = $pyjs__bind_method2('_registerChildPanes', function(pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
			}
			var $iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,childPane;
			$pyjs['track']={'module':'admin', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=258;
			$pyjs['track']['lineno']=259;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](pane, 'childPanes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				childPane = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=260;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['panes']['append'](childPane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
				$pyjs['track']['lineno']=261;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['viewport']['appendChild']($p['getattr'](childPane, 'widgetsDomElm'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				$pyjs['track']['lineno']=262;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](childPane, 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['track']['lineno']=263;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_registerChildPanes'](childPane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane']]);
		$cls_definition['_registerChildPanes'] = $method;
		$pyjs['track']['lineno']=265;
		$method = $pyjs__bind_method2('addPane', function(pane, parentPane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
				parentPane = arguments[2];
			}
			if (typeof parentPane == 'undefined') parentPane=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'admin', 'lineno':265};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=265;
			$pyjs['track']['lineno']=268;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](pane, 'childPanes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
				$pyjs['track']['lineno']=269;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_registerChildPanes'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			}
			$pyjs['track']['lineno']=271;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['panes']['append'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
			$pyjs['track']['lineno']=273;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](parentPane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
				$pyjs['track']['lineno']=274;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return parentPane['addChildPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=276;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleListUl']['appendChild'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			}
			$pyjs['track']['lineno']=278;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['viewport']['appendChild']($p['getattr'](pane, 'widgetsDomElm'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=279;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](pane, 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane'],['parentPane', null]]);
		$cls_definition['addPane'] = $method;
		$pyjs['track']['lineno']=282;
		$method = $pyjs__bind_method2('stackPane', function(pane, focus) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
				focus = arguments[2];
			}
			if (typeof focus == 'undefined') focus=arguments['callee']['__args__'][4][1];
			var $and16,$and15;
			$pyjs['track']={'module':'admin', 'lineno':282};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=282;
			$pyjs['track']['lineno']=283;
			if (!( ($p['getattr'](self, 'currentPane') !== null) )) {
			   throw $p['AssertionError']("Cannot stack a pane. There's no current one.");
			 }
			$pyjs['track']['lineno']=284;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'addPane', null, null, [{'parentPane':$p['getattr'](self, 'currentPane')}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=285;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and15=focus)?!$p['bool']($p['getattr'](self, 'nextPane')):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
				$pyjs['track']['lineno']=289;
				self['nextPane'] = pane;
				$pyjs['track']['lineno']=290;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DeferredCall']($p['getattr'](self, 'focusNextPane'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane'],['focus', false]]);
		$cls_definition['stackPane'] = $method;
		$pyjs['track']['lineno']=292;
		$method = $pyjs__bind_method2('focusNextPane', function() {
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
			var nextPane;
			$pyjs['track']={'module':'admin', 'lineno':292};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=292;
			$pyjs['track']['lineno']=296;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'nextPane')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
				$pyjs['track']['lineno']=297;
				$pyjs['track']['lineno']=297;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=299;
			nextPane = $p['getattr'](self, 'nextPane');
			$pyjs['track']['lineno']=300;
			self['nextPane'] = null;
			$pyjs['track']['lineno']=302;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focusPane'](nextPane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['focusNextPane'] = $method;
		$pyjs['track']['lineno']=304;
		$method = $pyjs__bind_method2('focusPane', function(pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
			}
			var $and20,$and17,$and18,$and19;
			$pyjs['track']={'module':'admin', 'lineno':304};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=304;
			$pyjs['track']['lineno']=305;
			if (!( $p['getattr'](self, 'panes')['__contains__'](pane) )) {
			   throw $p['AssertionError']('Cannot focus unknown pane!');
			 }
			$pyjs['track']['lineno']=309;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pane, $p['getattr'](self, 'currentPane')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
				$pyjs['track']['lineno']=310;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and17=$p['getattr']($p['getattr'](self, 'currentPane'), 'collapseable'))?$p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem'):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()) {
					$pyjs['track']['lineno']=311;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem')['__getitem__']('style')['__getitem__']('display'), 'none'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
						$pyjs['track']['lineno']=312;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=314;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
					}
				}
				$pyjs['track']['lineno']=315;
				$pyjs['track']['lineno']=315;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=317;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['panes']['remove'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=318;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['panes']['append'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			$pyjs['track']['lineno']=321;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'currentPane') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
				$pyjs['track']['lineno']=322;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'currentPane')['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				$pyjs['track']['lineno']=323;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'currentPane'), 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			}
			$pyjs['track']['lineno']=326;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['topBar']['setCurrentModulDescr']($p['getattr'](pane, 'descr'), $p['getattr'](pane, 'iconURL'), $p['getattr'](pane, 'iconClasses'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['track']['lineno']=327;
			self['currentPane'] = pane;
			$pyjs['track']['lineno']=328;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'currentPane'), 'widgetsDomElm')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			$pyjs['track']['lineno']=330;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and19=$p['getattr']($p['getattr'](self, 'currentPane'), 'collapseable'))?$p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem'):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()) {
				$pyjs['track']['lineno']=331;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'currentPane'), 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
			}
			$pyjs['track']['lineno']=333;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'currentPane')['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
			$pyjs['track']['lineno']=336;
			pane = $p['getattr']($p['getattr'](self, 'currentPane'), 'parentPane');
			$pyjs['track']['lineno']=337;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](pane, $m['Pane']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
				$pyjs['track']['lineno']=338;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](pane, 'childDomElem')['__getitem__']('style')['get']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})(), 'none'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()) {
					$pyjs['track']['lineno']=339;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](pane, 'childDomElem')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				}
				$pyjs['track']['lineno']=341;
				pane = $p['getattr'](pane, 'parentPane');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane']]);
		$cls_definition['focusPane'] = $method;
		$pyjs['track']['lineno']=343;
		$method = $pyjs__bind_method2('removePane', function(pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pane = arguments[1];
			}
			var $or5,$or6;
			$pyjs['track']={'module':'admin', 'lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=343;
			$pyjs['track']['lineno']=344;
			if (!( $p['getattr'](self, 'panes')['__contains__'](pane) )) {
			   throw $p['AssertionError']('Cannot remove unknown pane!');
			 }
			$pyjs['track']['lineno']=346;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['panes']['remove'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['track']['lineno']=347;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pane, $p['getattr'](self, 'currentPane')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
				$pyjs['track']['lineno']=348;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'panes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()) {
					$pyjs['track']['lineno']=349;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['focusPane']($p['getattr'](self, 'panes')['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=351;
					self['currentPane'] = null;
				}
			}
			$pyjs['track']['lineno']=353;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pane, $p['getattr'](self, 'nextPane')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
				$pyjs['track']['lineno']=354;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'panes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()) {
					$pyjs['track']['lineno']=355;
					self['nextPane'] = $p['getattr'](self, 'panes')['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
				}
				else {
					$pyjs['track']['lineno']=357;
					self['nextPane'] = null;
				}
			}
			$pyjs['track']['lineno']=359;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or5=!$p['bool']($p['getattr'](pane, 'parentPane')))?$or5:($p['getattr'](pane, 'parentPane') === self)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
				$pyjs['track']['lineno']=360;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleListUl']['removeChild'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=362;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['parentPane']['removeChildPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
			}
			$pyjs['track']['lineno']=364;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['viewport']['removeChild']($p['getattr'](pane, 'widgetsDomElm'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pane']]);
		$cls_definition['removePane'] = $method;
		$pyjs['track']['lineno']=366;
		$method = $pyjs__bind_method2('addWidget', function(widget, pane) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				pane = arguments[2];
			}

			$pyjs['track']={'module':'admin', 'lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=366;
			$pyjs['track']['lineno']=367;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['pane']]);
		$cls_definition['addWidget'] = $method;
		$pyjs['track']['lineno']=369;
		$method = $pyjs__bind_method2('stackWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			$pyjs['track']={'module':'admin', 'lineno':369};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=369;
			$pyjs['track']['lineno']=370;
			if (!( ($p['getattr'](self, 'currentPane') !== null) )) {
			   throw $p['AssertionError']('Cannot stack a widget while no pane is active');
			 }
			$pyjs['track']['lineno']=371;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addWidget'](widget, $p['getattr'](self, 'currentPane'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['stackWidget'] = $method;
		$pyjs['track']['lineno']=373;
		$method = $pyjs__bind_method2('removeWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,pane,$pyjs__trackstack_size_1,$iter12_idx;
			$pyjs['track']={'module':'admin', 'lineno':373};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=373;
			$pyjs['track']['lineno']=374;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'panes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				pane = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=375;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['containsWidget'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()) {
					$pyjs['track']['lineno']=376;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return pane['removeWidget'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
					$pyjs['track']['lineno']=377;
					$pyjs['track']['lineno']=377;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='admin';
			$pyjs['track']['lineno']=379;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Tried to remove unknown widget %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['removeWidget'] = $method;
		$pyjs['track']['lineno']=20;
		var $bases = new Array($m['Screen']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AdminScreen', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end admin */


/* end module: admin */


/*
PYJS_DEPS: ['html5', 'config.conf', 'config', 'widgets.TopBarWidget', 'widgets', 'widgets.userlogoutmsg.UserLogoutMsg', 'widgets.userlogoutmsg', 'network.NetworkService', 'network', 'network.DeferredCall', 'event.viInitializedEvent', 'event', 'event.EventDispatcher', 'priorityqueue.HandlerClassSelector', 'priorityqueue', 'priorityqueue.initialHashHandler', 'priorityqueue.startupQueue', 'log.Log', 'log', 'pane.Pane', 'pane', 'pane.GroupPane', 'screen.Screen', 'screen', 'handler', 'bones', 'actions', 'i18n']
*/
