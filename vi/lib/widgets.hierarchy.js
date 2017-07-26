/* start module: widgets.hierarchy */
$pyjs['loaded_modules']['widgets.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.hierarchy'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.hierarchy'];
	$m['__repr__'] = function() { return '<module: widgets.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.hierarchy';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['hierarchy'] = $pyjs['loaded_modules']['widgets.hierarchy'];
	$m.__track_lines__[1] = 'widgets.hierarchy.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[3] = 'widgets.hierarchy.py, line 3:\n    import html5, utils';
	$m.__track_lines__[4] = 'widgets.hierarchy.py, line 4:\n    from time import time';
	$m.__track_lines__[5] = 'widgets.hierarchy.py, line 5:\n    from network import NetworkService';
	$m.__track_lines__[6] = 'widgets.hierarchy.py, line 6:\n    from widgets.actionbar import ActionBar';
	$m.__track_lines__[7] = 'widgets.hierarchy.py, line 7:\n    from event import EventDispatcher';
	$m.__track_lines__[8] = 'widgets.hierarchy.py, line 8:\n    from config import conf';
	$m.__track_lines__[9] = 'widgets.hierarchy.py, line 9:\n    from i18n import translate';
	$m.__track_lines__[11] = 'widgets.hierarchy.py, line 11:\n    class HierarchyItem( html5.Li ):';
	$m.__track_lines__[15] = 'widgets.hierarchy.py, line 15:\n    def __init__(self, modul, data, structure, *args, **kwargs ):';
	$m.__track_lines__[24] = 'widgets.hierarchy.py, line 24:\n    super( HierarchyItem, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[25] = 'widgets.hierarchy.py, line 25:\n    self.module = modul';
	$m.__track_lines__[26] = 'widgets.hierarchy.py, line 26:\n    self.data = data';
	$m.__track_lines__[27] = 'widgets.hierarchy.py, line 27:\n    self.structure = structure';
	$m.__track_lines__[28] = 'widgets.hierarchy.py, line 28:\n    self.expandLink = html5.A()';
	$m.__track_lines__[29] = 'widgets.hierarchy.py, line 29:\n    self.expandLink["class"].append("expandlink")';
	$m.__track_lines__[30] = 'widgets.hierarchy.py, line 30:\n    self.expandLink.appendChild(html5.TextNode(translate("Expand/Collapse")))';
	$m.__track_lines__[31] = 'widgets.hierarchy.py, line 31:\n    self.appendChild(self.expandLink)';
	$m.__track_lines__[33] = 'widgets.hierarchy.py, line 33:\n    self.isLoaded = False';
	$m.__track_lines__[34] = 'widgets.hierarchy.py, line 34:\n    self.isExpanded = False';
	$m.__track_lines__[35] = 'widgets.hierarchy.py, line 35:\n    self.buildDescription()';
	$m.__track_lines__[36] = 'widgets.hierarchy.py, line 36:\n    self.ol = html5.Ol()';
	$m.__track_lines__[37] = 'widgets.hierarchy.py, line 37:\n    self.ol["class"].append("subhierarchy")';
	$m.__track_lines__[38] = 'widgets.hierarchy.py, line 38:\n    self.appendChild(self.ol)';
	$m.__track_lines__[39] = 'widgets.hierarchy.py, line 39:\n    self.currentMargin = None';
	$m.__track_lines__[40] = 'widgets.hierarchy.py, line 40:\n    self.ol["style"]["display"] = "none"';
	$m.__track_lines__[41] = 'widgets.hierarchy.py, line 41:\n    self["class"].append("hierarchyitem")';
	$m.__track_lines__[42] = 'widgets.hierarchy.py, line 42:\n    self["class"].append("unexpaned")';
	$m.__track_lines__[43] = 'widgets.hierarchy.py, line 43:\n    self["class"].append("supports_drag")';
	$m.__track_lines__[44] = 'widgets.hierarchy.py, line 44:\n    self["class"].append("supports_drop")';
	$m.__track_lines__[45] = 'widgets.hierarchy.py, line 45:\n    self["draggable"] = True';
	$m.__track_lines__[46] = 'widgets.hierarchy.py, line 46:\n    self.sinkEvent("onDragStart", "onDrop", "onDragOver","onDragLeave")';
	$m.__track_lines__[48] = 'widgets.hierarchy.py, line 48:\n    def buildDescription(self):';
	$m.__track_lines__[52] = 'widgets.hierarchy.py, line 52:\n    format = "$(name)"';
	$m.__track_lines__[54] = 'widgets.hierarchy.py, line 54:\n    if self.module in conf["modules"].keys():';
	$m.__track_lines__[55] = 'widgets.hierarchy.py, line 55:\n    moduleInfo = conf["modules"][self.module]';
	$m.__track_lines__[56] = 'widgets.hierarchy.py, line 56:\n    if "format" in moduleInfo.keys():';
	$m.__track_lines__[57] = 'widgets.hierarchy.py, line 57:\n    format = moduleInfo["format"]';
	$m.__track_lines__[60] = 'widgets.hierarchy.py, line 59:\n    self.appendChild( ... html5.TextNode(';
	$m.__track_lines__[64] = 'widgets.hierarchy.py, line 64:\n    def onDragOver(self, event):';
	$m.__track_lines__[69] = 'widgets.hierarchy.py, line 69:\n    height = self.element.offsetHeight';
	$m.__track_lines__[70] = 'widgets.hierarchy.py, line 70:\n    offset = event.pageY - self.element.offsetTop';
	$m.__track_lines__[73] = 'widgets.hierarchy.py, line 73:\n    if self.currentMargin is None and offset < height * 0.20:';
	$m.__track_lines__[74] = 'widgets.hierarchy.py, line 74:\n    self.currentMargin = "top"';
	$m.__track_lines__[75] = 'widgets.hierarchy.py, line 75:\n    self["class"].remove("insert_here")';
	$m.__track_lines__[76] = 'widgets.hierarchy.py, line 76:\n    self["class"].remove("insert_after")';
	$m.__track_lines__[77] = 'widgets.hierarchy.py, line 77:\n    self["class"].append("insert_before")';
	$m.__track_lines__[80] = 'widgets.hierarchy.py, line 80:\n    self.currentMargin = "bottom"';
	$m.__track_lines__[81] = 'widgets.hierarchy.py, line 81:\n    self["class"].remove("insert_here")';
	$m.__track_lines__[82] = 'widgets.hierarchy.py, line 82:\n    self["class"].remove("insert_before")';
	$m.__track_lines__[83] = 'widgets.hierarchy.py, line 83:\n    self["class"].append("insert_after")';
	$m.__track_lines__[86] = 'widgets.hierarchy.py, line 86:\n    self.currentMargin = None';
	$m.__track_lines__[87] = 'widgets.hierarchy.py, line 87:\n    self["class"].remove("insert_before")';
	$m.__track_lines__[88] = 'widgets.hierarchy.py, line 88:\n    self["class"].remove("insert_after")';
	$m.__track_lines__[89] = 'widgets.hierarchy.py, line 89:\n    self["class"].append("insert_here")';
	$m.__track_lines__[91] = 'widgets.hierarchy.py, line 91:\n    event.preventDefault()';
	$m.__track_lines__[92] = 'widgets.hierarchy.py, line 92:\n    event.stopPropagation()';
	$m.__track_lines__[94] = 'widgets.hierarchy.py, line 94:\n    def onDragLeave(self, event):';
	$m.__track_lines__[98] = 'widgets.hierarchy.py, line 98:\n    self["class"].remove("insert_before")';
	$m.__track_lines__[99] = 'widgets.hierarchy.py, line 99:\n    self["class"].remove("insert_after")';
	$m.__track_lines__[100] = 'widgets.hierarchy.py, line 100:\n    self["class"].remove("insert_here")';
	$m.__track_lines__[101] = 'widgets.hierarchy.py, line 101:\n    self.currentMargin = None';
	$m.__track_lines__[102] = 'widgets.hierarchy.py, line 102:\n    super(HierarchyItem,self).onDragLeave( event )';
	$m.__track_lines__[104] = 'widgets.hierarchy.py, line 104:\n    def onDragStart(self, event):';
	$m.__track_lines__[108] = 'widgets.hierarchy.py, line 108:\n    event.dataTransfer.setData( "Text", self.data["key"] )';
	$m.__track_lines__[109] = 'widgets.hierarchy.py, line 109:\n    event.stopPropagation()';
	$m.__track_lines__[111] = 'widgets.hierarchy.py, line 111:\n    def onDrop(self, event):';
	$m.__track_lines__[117] = 'widgets.hierarchy.py, line 117:\n    event.stopPropagation()';
	$m.__track_lines__[118] = 'widgets.hierarchy.py, line 118:\n    event.preventDefault()';
	$m.__track_lines__[120] = 'widgets.hierarchy.py, line 120:\n    height = self.element.offsetHeight';
	$m.__track_lines__[121] = 'widgets.hierarchy.py, line 121:\n    offset = event.pageY - self.element.offsetTop';
	$m.__track_lines__[123] = 'widgets.hierarchy.py, line 123:\n    srcKey = event.dataTransfer.getData("Text")';
	$m.__track_lines__[125] = 'widgets.hierarchy.py, line 125:\n    if offset >= height * 0.20 and offset <= height * 0.80:';
	$m.__track_lines__[126] = 'widgets.hierarchy.py, line 126:\n    print( "insert into" )';
	$m.__track_lines__[128] = 'widgets.hierarchy.py, line 128:\n    NetworkService.request(self.module,"reparent",{"item":srcKey,"dest":self.data["key"]}, secure=True, modifies=True )';
	$m.__track_lines__[131] = 'widgets.hierarchy.py, line 131:\n    print( "insert before" )';
	$m.__track_lines__[132] = 'widgets.hierarchy.py, line 132:\n    parentID = self.data["parententry"]';
	$m.__track_lines__[133] = 'widgets.hierarchy.py, line 133:\n    if parentID:';
	$m.__track_lines__[134] = 'widgets.hierarchy.py, line 134:\n    lastIdx = 0';
	$m.__track_lines__[135] = 'widgets.hierarchy.py, line 135:\n    for c in self.parent()._children:';
	$m.__track_lines__[136] = 'widgets.hierarchy.py, line 136:\n    if "data" in dir(c) and "sortindex" in c.data.keys():';
	$m.__track_lines__[137] = 'widgets.hierarchy.py, line 137:\n    if c == self:';
	$m.__track_lines__[138] = 'widgets.hierarchy.py, line 138:\n    break';
	$m.__track_lines__[139] = 'widgets.hierarchy.py, line 139:\n    lastIdx = c.data["sortindex"]';
	$m.__track_lines__[140] = 'widgets.hierarchy.py, line 140:\n    newIdx = str((lastIdx+self.data["sortindex"])/2.0)';
	$m.__track_lines__[141] = 'widgets.hierarchy.py, line 141:\n    req = NetworkService.request(self.module,"reparent",{"item":srcKey,"dest":parentID}, secure=True, successHandler=self.onItemReparented )';
	$m.__track_lines__[142] = 'widgets.hierarchy.py, line 142:\n    req.newIdx = newIdx';
	$m.__track_lines__[143] = 'widgets.hierarchy.py, line 143:\n    req.item = srcKey';
	$m.__track_lines__[146] = 'widgets.hierarchy.py, line 146:\n    print( "insert after" )';
	$m.__track_lines__[147] = 'widgets.hierarchy.py, line 147:\n    parentID = self.data["parententry"]';
	$m.__track_lines__[149] = 'widgets.hierarchy.py, line 149:\n    if parentID:';
	$m.__track_lines__[150] = 'widgets.hierarchy.py, line 150:\n    lastIdx = time()';
	$m.__track_lines__[151] = 'widgets.hierarchy.py, line 151:\n    doUseNextChild = False';
	$m.__track_lines__[152] = 'widgets.hierarchy.py, line 152:\n    for c in self.parent()._children:';
	$m.__track_lines__[153] = 'widgets.hierarchy.py, line 153:\n    if "data" in dir(c) and "sortindex" in c.data.keys():';
	$m.__track_lines__[154] = 'widgets.hierarchy.py, line 154:\n    if doUseNextChild:';
	$m.__track_lines__[155] = 'widgets.hierarchy.py, line 155:\n    lastIdx = c.data["sortindex"]';
	$m.__track_lines__[156] = 'widgets.hierarchy.py, line 156:\n    break';
	$m.__track_lines__[157] = 'widgets.hierarchy.py, line 157:\n    if c == self:';
	$m.__track_lines__[158] = 'widgets.hierarchy.py, line 158:\n    doUseNextChild = True';
	$m.__track_lines__[160] = 'widgets.hierarchy.py, line 160:\n    newIdx = str((lastIdx+self.data["sortindex"])/2.0)';
	$m.__track_lines__[161] = 'widgets.hierarchy.py, line 161:\n    req = NetworkService.request(self.module,"reparent",{"item":srcKey,"dest":parentID},';
	$m.__track_lines__[163] = 'widgets.hierarchy.py, line 163:\n    req.newIdx = newIdx';
	$m.__track_lines__[164] = 'widgets.hierarchy.py, line 164:\n    req.item = srcKey';
	$m.__track_lines__[166] = 'widgets.hierarchy.py, line 166:\n    def onItemReparented(self, req):';
	$m.__track_lines__[170] = 'widgets.hierarchy.py, line 170:\n    assert "newIdx" in dir(req)';
	$m.__track_lines__[171] = 'widgets.hierarchy.py, line 171:\n    NetworkService.request(self.module,"setIndex",{"item":req.item,"index":req.newIdx}, secure=True, modifies=True )';
	$m.__track_lines__[173] = 'widgets.hierarchy.py, line 173:\n    def toggleExpand(self):';
	$m.__track_lines__[181] = 'widgets.hierarchy.py, line 181:\n    if self.isExpanded:';
	$m.__track_lines__[182] = 'widgets.hierarchy.py, line 182:\n    self.ol["style"]["display"] = "none"';
	$m.__track_lines__[183] = 'widgets.hierarchy.py, line 183:\n    self["class"].remove("expaned")';
	$m.__track_lines__[184] = 'widgets.hierarchy.py, line 184:\n    self["class"].append("unexpaned")';
	$m.__track_lines__[186] = 'widgets.hierarchy.py, line 186:\n    self.ol["style"]["display"] = "block"';
	$m.__track_lines__[187] = 'widgets.hierarchy.py, line 187:\n    self["class"].append("expaned")';
	$m.__track_lines__[188] = 'widgets.hierarchy.py, line 188:\n    self["class"].remove("unexpaned")';
	$m.__track_lines__[189] = 'widgets.hierarchy.py, line 189:\n    self.isExpanded = not self.isExpanded';
	$m.__track_lines__[194] = 'widgets.hierarchy.py, line 194:\n    class HierarchyWidget( html5.Div ):';
	$m.__track_lines__[201] = 'widgets.hierarchy.py, line 201:\n    def __init__( self, modul, rootNode=None, node=None, isSelector=False, *args, **kwargs ):';
	$m.__track_lines__[208] = 'widgets.hierarchy.py, line 208:\n    super( HierarchyWidget, self ).__init__( )';
	$m.__track_lines__[209] = 'widgets.hierarchy.py, line 209:\n    self.module = modul';
	$m.__track_lines__[210] = 'widgets.hierarchy.py, line 210:\n    self.rootNode = rootNode';
	$m.__track_lines__[211] = 'widgets.hierarchy.py, line 211:\n    self.actionBar = ActionBar( modul, "hierarchy" )';
	$m.__track_lines__[212] = 'widgets.hierarchy.py, line 212:\n    self.appendChild( self.actionBar )';
	$m.__track_lines__[213] = 'widgets.hierarchy.py, line 213:\n    self.entryFrame = html5.Ol()';
	$m.__track_lines__[214] = 'widgets.hierarchy.py, line 214:\n    self.entryFrame["class"].append("hierarchy")';
	$m.__track_lines__[215] = 'widgets.hierarchy.py, line 215:\n    self.appendChild( self.entryFrame )';
	$m.__track_lines__[216] = 'widgets.hierarchy.py, line 216:\n    self.selectionChangedEvent = EventDispatcher("selectionChanged")';
	$m.__track_lines__[217] = 'widgets.hierarchy.py, line 217:\n    self.selectionActivatedEvent = EventDispatcher("selectionActivated")';
	$m.__track_lines__[218] = 'widgets.hierarchy.py, line 218:\n    self.rootNodeChangedEvent = EventDispatcher("rootNodeChanged")';
	$m.__track_lines__[219] = 'widgets.hierarchy.py, line 219:\n    self._currentCursor = None';
	$m.__track_lines__[220] = 'widgets.hierarchy.py, line 220:\n    self._currentRequests = []';
	$m.__track_lines__[221] = 'widgets.hierarchy.py, line 221:\n    self["class"].append("supports_drop")';
	$m.__track_lines__[222] = 'widgets.hierarchy.py, line 222:\n    self.isSelector = isSelector';
	$m.__track_lines__[223] = 'widgets.hierarchy.py, line 223:\n    self._expandedNodes = []';
	$m.__track_lines__[224] = 'widgets.hierarchy.py, line 224:\n    if self.rootNode:';
	$m.__track_lines__[225] = 'widgets.hierarchy.py, line 225:\n    self.reloadData()';
	$m.__track_lines__[227] = 'widgets.hierarchy.py, line 227:\n    NetworkService.request(self.module,"listRootNodes", successHandler=self.onSetDefaultRootNode, failureHandler=self.showErrorMsg )';
	$m.__track_lines__[228] = 'widgets.hierarchy.py, line 228:\n    self.path = []';
	$m.__track_lines__[229] = 'widgets.hierarchy.py, line 229:\n    self.sinkEvent( "onClick", "onDblClick" )';
	$m.__track_lines__[233] = 'widgets.hierarchy.py, line 233:\n    self.actionBar.setActions(["selectrootnode","add","edit","clone","delete"]+(["select","close"] if isSelector else [])+["reload"])';
	$m.__track_lines__[234] = 'widgets.hierarchy.py, line 234:\n    self.sinkEvent("onDrop","onDragOver")';
	$m.__track_lines__[237] = 'widgets.hierarchy.py, line 237:\n    def showErrorMsg(self, req=None, code=None):';
	$m.__track_lines__[241] = 'widgets.hierarchy.py, line 241:\n    self.actionBar["style"]["display"] = "none"';
	$m.__track_lines__[242] = 'widgets.hierarchy.py, line 242:\n    self.entryFrame["style"]["display"] = "none"';
	$m.__track_lines__[243] = 'widgets.hierarchy.py, line 243:\n    errorDiv = html5.Div()';
	$m.__track_lines__[244] = 'widgets.hierarchy.py, line 244:\n    errorDiv["class"].append("error_msg")';
	$m.__track_lines__[245] = 'widgets.hierarchy.py, line 245:\n    if code and (code==401 or code==403):';
	$m.__track_lines__[246] = 'widgets.hierarchy.py, line 246:\n    txt = translate("Access denied!")';
	$m.__track_lines__[248] = 'widgets.hierarchy.py, line 248:\n    txt = translate("An unknown error occurred!")';
	$m.__track_lines__[249] = 'widgets.hierarchy.py, line 249:\n    errorDiv["class"].append("error_code_%s" % (code or 0))';
	$m.__track_lines__[250] = 'widgets.hierarchy.py, line 250:\n    errorDiv.appendChild( html5.TextNode( txt ) )';
	$m.__track_lines__[251] = 'widgets.hierarchy.py, line 251:\n    self.appendChild( errorDiv )';
	$m.__track_lines__[253] = 'widgets.hierarchy.py, line 253:\n    def onDataChanged(self, module, **kwargs):';
	$m.__track_lines__[255] = 'widgets.hierarchy.py, line 255:\n    if module != self.module:';
	$m.__track_lines__[257] = 'widgets.hierarchy.py, line 257:\n    isRootNode = False';
	$m.__track_lines__[258] = 'widgets.hierarchy.py, line 258:\n    for k, v in conf[ "modules" ].items():';
	$m.__track_lines__[259] = 'widgets.hierarchy.py, line 259:\n    if (k == module';
	$m.__track_lines__[263] = 'widgets.hierarchy.py, line 263:\n    isRootNode = True';
	$m.__track_lines__[264] = 'widgets.hierarchy.py, line 264:\n    break';
	$m.__track_lines__[266] = 'widgets.hierarchy.py, line 266:\n    if not isRootNode:';
	$m.__track_lines__[267] = 'widgets.hierarchy.py, line 267:\n    return';
	$m.__track_lines__[269] = 'widgets.hierarchy.py, line 269:\n    self.actionBar.widgets["selectrootnode"].update()';
	$m.__track_lines__[270] = 'widgets.hierarchy.py, line 270:\n    self.reloadData()';
	$m.__track_lines__[272] = 'widgets.hierarchy.py, line 272:\n    def onAttach(self):';
	$m.__track_lines__[273] = 'widgets.hierarchy.py, line 273:\n    super( HierarchyWidget, self ).onAttach()';
	$m.__track_lines__[274] = 'widgets.hierarchy.py, line 274:\n    NetworkService.registerChangeListener( self )';
	$m.__track_lines__[276] = 'widgets.hierarchy.py, line 276:\n    def onDetach(self):';
	$m.__track_lines__[277] = 'widgets.hierarchy.py, line 277:\n    super( HierarchyWidget, self ).onDetach()';
	$m.__track_lines__[278] = 'widgets.hierarchy.py, line 278:\n    NetworkService.removeChangeListener( self )';
	$m.__track_lines__[280] = 'widgets.hierarchy.py, line 280:\n    def itemForEvent(self,event, elem=None):';
	$m.__track_lines__[285] = 'widgets.hierarchy.py, line 285:\n    if elem is None:';
	$m.__track_lines__[286] = 'widgets.hierarchy.py, line 286:\n    elem = self.entryFrame';
	$m.__track_lines__[287] = 'widgets.hierarchy.py, line 287:\n    for child in elem._children:';
	$m.__track_lines__[288] = 'widgets.hierarchy.py, line 288:\n    if child.element==event.target:';
	$m.__track_lines__[289] = 'widgets.hierarchy.py, line 289:\n    if isinstance( child, HierarchyItem ):';
	$m.__track_lines__[291] = 'widgets.hierarchy.py, line 291:\n    return( child )';
	$m.__track_lines__[295] = 'widgets.hierarchy.py, line 295:\n    return( False )';
	$m.__track_lines__[296] = 'widgets.hierarchy.py, line 296:\n    tmp = self.itemForEvent( event, child )';
	$m.__track_lines__[297] = 'widgets.hierarchy.py, line 297:\n    if tmp is False:';
	$m.__track_lines__[298] = 'widgets.hierarchy.py, line 298:\n    if isinstance(child, HierarchyItem):';
	$m.__track_lines__[299] = 'widgets.hierarchy.py, line 299:\n    return( child )';
	$m.__track_lines__[301] = 'widgets.hierarchy.py, line 301:\n    return( False )';
	$m.__track_lines__[303] = 'widgets.hierarchy.py, line 303:\n    return( tmp )';
	$m.__track_lines__[304] = 'widgets.hierarchy.py, line 304:\n    return( None )';
	$m.__track_lines__[306] = 'widgets.hierarchy.py, line 306:\n    def itemForKey(self, key, elem=None ):';
	$m.__track_lines__[313] = 'widgets.hierarchy.py, line 313:\n    if elem is None:';
	$m.__track_lines__[314] = 'widgets.hierarchy.py, line 314:\n    elem = self.entryFrame';
	$m.__track_lines__[315] = 'widgets.hierarchy.py, line 315:\n    for child in elem._children:';
	$m.__track_lines__[316] = 'widgets.hierarchy.py, line 316:\n    if child.data["key"]==key:';
	$m.__track_lines__[317] = 'widgets.hierarchy.py, line 317:\n    return( child )';
	$m.__track_lines__[318] = 'widgets.hierarchy.py, line 318:\n    tmp = self.itemForKey( key, child.ol )';
	$m.__track_lines__[319] = 'widgets.hierarchy.py, line 319:\n    if tmp is not None:';
	$m.__track_lines__[320] = 'widgets.hierarchy.py, line 320:\n    return( tmp )';
	$m.__track_lines__[321] = 'widgets.hierarchy.py, line 321:\n    return( None )';
	$m.__track_lines__[323] = 'widgets.hierarchy.py, line 323:\n    def onClick(self, event):';
	$m.__track_lines__[324] = 'widgets.hierarchy.py, line 324:\n    item = self.itemForEvent(event)';
	$m.__track_lines__[326] = 'widgets.hierarchy.py, line 326:\n    if item is None:';
	$m.__track_lines__[327] = 'widgets.hierarchy.py, line 327:\n    return';
	$m.__track_lines__[329] = 'widgets.hierarchy.py, line 329:\n    if html5.utils.doesEventHitWidgetOrChildren(event, item.expandLink):';
	$m.__track_lines__[330] = 'widgets.hierarchy.py, line 330:\n    item.toggleExpand()';
	$m.__track_lines__[332] = 'widgets.hierarchy.py, line 332:\n    if not item.isLoaded:';
	$m.__track_lines__[333] = 'widgets.hierarchy.py, line 333:\n    item.isLoaded = True';
	$m.__track_lines__[334] = 'widgets.hierarchy.py, line 334:\n    self.loadNode(item.data["key"])';
	$m.__track_lines__[337] = 'widgets.hierarchy.py, line 337:\n    self.setCurrentItem( item )';
	$m.__track_lines__[338] = 'widgets.hierarchy.py, line 338:\n    self.selectionChangedEvent.fire( self, item )';
	$m.__track_lines__[340] = 'widgets.hierarchy.py, line 340:\n    def onDblClick(self, event):';
	$m.__track_lines__[341] = 'widgets.hierarchy.py, line 341:\n    item = self.itemForEvent( event )';
	$m.__track_lines__[342] = 'widgets.hierarchy.py, line 342:\n    if item is None:';
	$m.__track_lines__[343] = 'widgets.hierarchy.py, line 343:\n    return';
	$m.__track_lines__[344] = 'widgets.hierarchy.py, line 344:\n    self.setCurrentItem( item )';
	$m.__track_lines__[345] = 'widgets.hierarchy.py, line 345:\n    self.selectionActivatedEvent.fire( self, [item] )';
	$m.__track_lines__[346] = 'widgets.hierarchy.py, line 346:\n    if self.isSelector:';
	$m.__track_lines__[347] = 'widgets.hierarchy.py, line 347:\n    conf["mainWindow"].removeWidget(self)';
	$m.__track_lines__[349] = 'widgets.hierarchy.py, line 349:\n    def setCurrentItem(self, item):';
	$m.__track_lines__[350] = 'widgets.hierarchy.py, line 350:\n    if self._currentCursor:';
	$m.__track_lines__[351] = 'widgets.hierarchy.py, line 351:\n    self._currentCursor["class"].remove("is_focused")';
	$m.__track_lines__[352] = 'widgets.hierarchy.py, line 352:\n    item["class"].append("is_focused")';
	$m.__track_lines__[353] = 'widgets.hierarchy.py, line 353:\n    self._currentCursor = item';
	$m.__track_lines__[355] = 'widgets.hierarchy.py, line 355:\n    def onSetDefaultRootNode(self, req):';
	$m.__track_lines__[361] = 'widgets.hierarchy.py, line 361:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[362] = 'widgets.hierarchy.py, line 362:\n    if len(data)>0:';
	$m.__track_lines__[363] = 'widgets.hierarchy.py, line 363:\n    self.setRootNode( data[0]["key"])';
	$m.__track_lines__[365] = 'widgets.hierarchy.py, line 365:\n    def setRootNode(self, rootNode):';
	$m.__track_lines__[371] = 'widgets.hierarchy.py, line 371:\n    self.rootNode = rootNode';
	$m.__track_lines__[372] = 'widgets.hierarchy.py, line 372:\n    self._currentCursor = None';
	$m.__track_lines__[373] = 'widgets.hierarchy.py, line 373:\n    self.rootNodeChangedEvent.fire( rootNode )';
	$m.__track_lines__[374] = 'widgets.hierarchy.py, line 374:\n    self.reloadData()';
	$m.__track_lines__[376] = 'widgets.hierarchy.py, line 376:\n    def reloadData(self):';
	$m.__track_lines__[380] = 'widgets.hierarchy.py, line 380:\n    def collectExpandedNodes( currNode ):';
	$m.__track_lines__[381] = 'widgets.hierarchy.py, line 381:\n    res = []';
	$m.__track_lines__[382] = 'widgets.hierarchy.py, line 382:\n    for c in currNode._children[:]:';
	$m.__track_lines__[383] = 'widgets.hierarchy.py, line 383:\n    if isinstance( c, HierarchyItem ):';
	$m.__track_lines__[384] = 'widgets.hierarchy.py, line 384:\n    if c.isExpanded:';
	$m.__track_lines__[385] = 'widgets.hierarchy.py, line 385:\n    res.append( c.data["key"] )';
	$m.__track_lines__[386] = 'widgets.hierarchy.py, line 386:\n    res.extend( collectExpandedNodes(c.ol) )';
	$m.__track_lines__[387] = 'widgets.hierarchy.py, line 387:\n    return( res )';
	$m.__track_lines__[388] = 'widgets.hierarchy.py, line 388:\n    self._expandedNodes = collectExpandedNodes( self.entryFrame )';
	$m.__track_lines__[389] = 'widgets.hierarchy.py, line 389:\n    self._currentRequests = []';
	$m.__track_lines__[390] = 'widgets.hierarchy.py, line 390:\n    for c in self.entryFrame._children[:]:';
	$m.__track_lines__[391] = 'widgets.hierarchy.py, line 391:\n    self.entryFrame.removeChild(c)';
	$m.__track_lines__[392] = 'widgets.hierarchy.py, line 392:\n    self.loadNode( self.rootNode )';
	$m.__track_lines__[394] = 'widgets.hierarchy.py, line 394:\n    def loadNode(self, node, cursor = None):';
	$m.__track_lines__[401] = 'widgets.hierarchy.py, line 401:\n    params = {';
	$m.__track_lines__[406] = 'widgets.hierarchy.py, line 406:\n    if cursor:';
	$m.__track_lines__[407] = 'widgets.hierarchy.py, line 407:\n    params.update({"cursor": cursor})';
	$m.__track_lines__[409] = 'widgets.hierarchy.py, line 409:\n    r = NetworkService.request(self.module, "list",';
	$m.__track_lines__[413] = 'widgets.hierarchy.py, line 413:\n    r.node = node';
	$m.__track_lines__[414] = 'widgets.hierarchy.py, line 414:\n    self._currentRequests.append(r)';
	$m.__track_lines__[416] = 'widgets.hierarchy.py, line 416:\n    def onRequestSucceded(self, req):';
	$m.__track_lines__[421] = 'widgets.hierarchy.py, line 421:\n    if not req in self._currentRequests:';
	$m.__track_lines__[423] = 'widgets.hierarchy.py, line 423:\n    self.actionBar.resetLoadingState()';
	$m.__track_lines__[424] = 'widgets.hierarchy.py, line 424:\n    return';
	$m.__track_lines__[426] = 'widgets.hierarchy.py, line 426:\n    self._currentRequests.remove(req)';
	$m.__track_lines__[427] = 'widgets.hierarchy.py, line 427:\n    data = NetworkService.decode(req)';
	$m.__track_lines__[429] = 'widgets.hierarchy.py, line 429:\n    if req.node == self.rootNode:';
	$m.__track_lines__[430] = 'widgets.hierarchy.py, line 430:\n    ol = self.entryFrame';
	$m.__track_lines__[432] = 'widgets.hierarchy.py, line 432:\n    tmp = self.itemForKey(req.node)';
	$m.__track_lines__[433] = 'widgets.hierarchy.py, line 433:\n    ol = tmp.ol';
	$m.__track_lines__[434] = 'widgets.hierarchy.py, line 434:\n    assert ol is not None';
	$m.__track_lines__[436] = 'widgets.hierarchy.py, line 436:\n    for skel in data["skellist"]:';
	$m.__track_lines__[437] = 'widgets.hierarchy.py, line 437:\n    hi = HierarchyItem( self.module, skel, data["structure"] )';
	$m.__track_lines__[438] = 'widgets.hierarchy.py, line 438:\n    ol.appendChild( hi )';
	$m.__track_lines__[439] = 'widgets.hierarchy.py, line 439:\n    if hi.data["key"] in self._expandedNodes:';
	$m.__track_lines__[440] = 'widgets.hierarchy.py, line 440:\n    hi.toggleExpand()';
	$m.__track_lines__[441] = 'widgets.hierarchy.py, line 441:\n    if not hi.isLoaded:';
	$m.__track_lines__[442] = 'widgets.hierarchy.py, line 442:\n    hi.isLoaded = True';
	$m.__track_lines__[443] = 'widgets.hierarchy.py, line 443:\n    self.loadNode(hi.data["key"])';
	$m.__track_lines__[445] = 'widgets.hierarchy.py, line 445:\n    if not ol._children and ol != self.entryFrame:';
	$m.__track_lines__[446] = 'widgets.hierarchy.py, line 446:\n    ol.parent()["class"].append("has_no_childs")';
	$m.__track_lines__[448] = 'widgets.hierarchy.py, line 448:\n    if data["skellist"] and data["cursor"]:';
	$m.__track_lines__[449] = 'widgets.hierarchy.py, line 449:\n    self.loadNode(req.node, data["cursor"])';
	$m.__track_lines__[451] = 'widgets.hierarchy.py, line 451:\n    self.actionBar.resetLoadingState()';
	$m.__track_lines__[453] = 'widgets.hierarchy.py, line 453:\n    def getCurrentSelection(self):';
	$m.__track_lines__[458] = 'widgets.hierarchy.py, line 458:\n    if self._currentCursor is not None:';
	$m.__track_lines__[459] = 'widgets.hierarchy.py, line 459:\n    return( [ self._currentCursor.data ] )';
	$m.__track_lines__[460] = 'widgets.hierarchy.py, line 460:\n    return( [] )';
	$m.__track_lines__[462] = 'widgets.hierarchy.py, line 462:\n    def onDrop(self, event):';
	$m.__track_lines__[466] = 'widgets.hierarchy.py, line 466:\n    srcKey = event.dataTransfer.getData("Text")';
	$m.__track_lines__[467] = 'widgets.hierarchy.py, line 467:\n    NetworkService.request(self.module,"reparent",{"item":srcKey,"dest":self.rootNode}, secure=True, modifies=True )';
	$m.__track_lines__[468] = 'widgets.hierarchy.py, line 468:\n    event.stopPropagation()';
	$m.__track_lines__[470] = 'widgets.hierarchy.py, line 470:\n    def onDragOver(self, event):';
	$m.__track_lines__[474] = 'widgets.hierarchy.py, line 474:\n    event.preventDefault()';
	$m.__track_lines__[475] = 'widgets.hierarchy.py, line 475:\n    event.stopPropagation()';
	$m.__track_lines__[477] = 'widgets.hierarchy.py, line 477:\n    def activateCurrentSelection(self):';
	$m.__track_lines__[478] = 'widgets.hierarchy.py, line 478:\n    if self._currentCursor:';
	$m.__track_lines__[479] = 'widgets.hierarchy.py, line 479:\n    self.selectionActivatedEvent.fire( self, [self._currentCursor] )';
	$m.__track_lines__[480] = 'widgets.hierarchy.py, line 480:\n    conf["mainWindow"].removeWidget(self)';


	$pyjs['track']['module']='widgets.hierarchy';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['time'] = $p['___import___']('time.time', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['HierarchyItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.hierarchy';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(modul, data, structure) {
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
				modul = arguments[1];
				data = arguments[2];
				structure = arguments[3];
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
				if (typeof structure != 'undefined') {
					if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = structure;
						structure = arguments[4];
					}
				} else 				if (typeof data != 'undefined') {
					if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = data;
						data = arguments[4];
					}
				} else 				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyItem'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=25;
			self['module'] = modul;
			$pyjs['track']['lineno']=26;
			self['data'] = data;
			$pyjs['track']['lineno']=27;
			self['structure'] = structure;
			$pyjs['track']['lineno']=28;
			self['expandLink'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'expandLink')['__getitem__']('class')['append']('expandlink');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['expandLink']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Expand/Collapse');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'expandLink'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=33;
			self['isLoaded'] = false;
			$pyjs['track']['lineno']=34;
			self['isExpanded'] = false;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['buildDescription']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=36;
			self['ol'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ol']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'ol')['__getitem__']('class')['append']('subhierarchy');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=38;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'ol'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=39;
			self['currentMargin'] = null;
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('hierarchyitem');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('unexpaned');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=43;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_drag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_drop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('draggable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=46;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragStart', 'onDrop', 'onDragOver', 'onDragLeave');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('buildDescription', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var moduleInfo,format;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=52;
			format = '$(name)';
			$pyjs['track']['lineno']=54;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['__contains__']($p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs['track']['lineno']=55;
				moduleInfo = $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'));
				$pyjs['track']['lineno']=56;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return moduleInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
					$pyjs['track']['lineno']=57;
					format = moduleInfo['__getitem__']('format');
				}
			}
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['unescape']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, format, $p['getattr'](self, 'data'), $p['getattr'](self, 'structure')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['buildDescription'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and7,$mul5,$mul8,$mul6,$and1,$and3,$and4,$and5,$and6,height,$and2,$mul2,offset,$mul7,$sub2,$sub1,$mul4,$mul3,$mul1;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=69;
			height = $p['getattr']($p['getattr'](self, 'element'), 'offsetHeight');
			$pyjs['track']['lineno']=70;
			offset = $p['__op_sub']($sub1=$p['getattr'](event, 'pageY'),$sub2=$p['getattr']($p['getattr'](self, 'element'), 'offsetTop'));
			$pyjs['track']['lineno']=73;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=($p['getattr'](self, 'currentMargin') === null))?($p['cmp'](offset, (typeof ($mul1=height)==typeof ($mul2=0.2) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) == -1):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=74;
				self['currentMargin'] = 'top';
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=($p['getattr'](self, 'currentMargin') === null))?($p['cmp'](offset, (typeof ($mul3=height)==typeof ($mul4=0.8) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) == 1):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
				$pyjs['track']['lineno']=80;
				self['currentMargin'] = 'bottom';
				$pyjs['track']['lineno']=81;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['track']['lineno']=82;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['track']['lineno']=83;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('insert_after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and5=$p['getattr'](self, 'currentMargin'))?($p['bool']($and6=((($p['cmp'](offset, (typeof ($mul5=height)==typeof ($mul6=0.2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))))|1) == 1))?($p['cmp'](offset, (typeof ($mul7=height)==typeof ($mul8=0.8) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))) < 1):$and6):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=86;
				self['currentMargin'] = null;
				$pyjs['track']['lineno']=87;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs['track']['lineno']=88;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['track']['lineno']=89;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=92;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=94;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=98;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['remove']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=99;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['remove']('insert_after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['remove']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['track']['lineno']=101;
			self['currentMargin'] = null;
			$pyjs['track']['lineno']=102;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyItem'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()['onDragLeave'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$pyjs['track']['lineno']=104;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=104;
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['setData']('Text', $p['getattr'](self, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=109;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=111;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $mul15,newIdx,height,parentID,$iter2_type,$div3,$div1,$iter2_iter,req,$iter2_nextval,$iter1_array,$sub3,$sub4,$and8,$and9,$iter1_nextval,c,$and12,$and13,$and10,$and11,$mul9,offset,$div2,srcKey,$iter1_iter,$div4,$iter1_type,$mul16,lastIdx,$mul14,$mul13,$mul12,$mul11,$mul10,$iter2_idx,$add2,$add3,$add1,$iter1_idx,$add4,$pyjs__trackstack_size_1,doUseNextChild,$iter2_array;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=117;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=118;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['track']['lineno']=120;
			height = $p['getattr']($p['getattr'](self, 'element'), 'offsetHeight');
			$pyjs['track']['lineno']=121;
			offset = $p['__op_sub']($sub3=$p['getattr'](event, 'pageY'),$sub4=$p['getattr']($p['getattr'](self, 'element'), 'offsetTop'));
			$pyjs['track']['lineno']=123;
			srcKey = (function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['getData']('Text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=125;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and8=((($p['cmp'](offset, (typeof ($mul9=height)==typeof ($mul10=0.2) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))))|1) == 1))?($p['cmp'](offset, (typeof ($mul11=height)==typeof ($mul12=0.8) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))) < 1):$and8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
				$pyjs['track']['lineno']=126;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['insert into'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=128;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'reparent', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['item', srcKey], ['dest', $p['getattr'](self, 'data')['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](offset, (typeof ($mul13=height)==typeof ($mul14=0.2) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['insert before'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs['track']['lineno']=132;
				parentID = $p['getattr'](self, 'data')['__getitem__']('parententry');
				$pyjs['track']['lineno']=133;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](parentID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
					$pyjs['track']['lineno']=134;
					lastIdx = 0;
					$pyjs['track']['lineno']=135;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})(), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						c = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=136;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and10=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dir'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()['__contains__']('data'))?(function(){try{try{$pyjs['in_try_except'] += 1;
						return c['data']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()['__contains__']('sortindex'):$and10));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
							$pyjs['track']['lineno']=137;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](c, self));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
								$pyjs['track']['lineno']=138;
								break;
							}
							$pyjs['track']['lineno']=139;
							lastIdx = $p['getattr'](c, 'data')['__getitem__']('sortindex');
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.hierarchy';
					$pyjs['track']['lineno']=140;
					newIdx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((typeof ($div1=$p['__op_add']($add1=lastIdx,$add2=$p['getattr'](self, 'data')['__getitem__']('sortindex')))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs['track']['lineno']=141;
					req = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'onItemReparented')}, $p['getattr'](self, 'module'), 'reparent', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['item', srcKey], ['dest', parentID]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$pyjs['track']['lineno']=142;
					req['newIdx'] = newIdx;
					$pyjs['track']['lineno']=143;
					req['item'] = srcKey;
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](offset, (typeof ($mul15=height)==typeof ($mul16=0.8) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=146;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['insert after'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs['track']['lineno']=147;
				parentID = $p['getattr'](self, 'data')['__getitem__']('parententry');
				$pyjs['track']['lineno']=149;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](parentID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
					$pyjs['track']['lineno']=150;
					lastIdx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
					$pyjs['track']['lineno']=151;
					doUseNextChild = false;
					$pyjs['track']['lineno']=152;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})(), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						c = $iter2_nextval['$nextval'];
						$pyjs['track']['lineno']=153;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and12=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dir'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()['__contains__']('data'))?(function(){try{try{$pyjs['in_try_except'] += 1;
						return c['data']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()['__contains__']('sortindex'):$and12));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
							$pyjs['track']['lineno']=154;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](doUseNextChild);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
								$pyjs['track']['lineno']=155;
								lastIdx = $p['getattr'](c, 'data')['__getitem__']('sortindex');
								$pyjs['track']['lineno']=156;
								break;
							}
							$pyjs['track']['lineno']=157;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](c, self));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
								$pyjs['track']['lineno']=158;
								doUseNextChild = true;
							}
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.hierarchy';
					$pyjs['track']['lineno']=160;
					newIdx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((typeof ($div3=$p['__op_add']($add3=lastIdx,$add4=$p['getattr'](self, 'data')['__getitem__']('sortindex')))==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					$pyjs['track']['lineno']=161;
					req = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'onItemReparented')}, $p['getattr'](self, 'module'), 'reparent', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['item', srcKey], ['dest', parentID]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
					$pyjs['track']['lineno']=163;
					req['newIdx'] = newIdx;
					$pyjs['track']['lineno']=164;
					req['item'] = srcKey;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=166;
		$method = $pyjs__bind_method2('onItemReparented', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=166;
			$pyjs['track']['lineno']=170;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()['__contains__']('newIdx') )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=171;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'setIndex', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['item', $p['getattr'](req, 'item')], ['index', $p['getattr'](req, 'newIdx')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onItemReparented'] = $method;
		$pyjs['track']['lineno']=173;
		$method = $pyjs__bind_method2('toggleExpand', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=173;
			$pyjs['track']['lineno']=181;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isExpanded'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=182;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				$pyjs['track']['lineno']=183;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('expaned');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=184;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('unexpaned');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=186;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'ol')['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$pyjs['track']['lineno']=187;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('expaned');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs['track']['lineno']=188;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('unexpaned');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			}
			$pyjs['track']['lineno']=189;
			self['isExpanded'] = !$p['bool']($p['getattr'](self, 'isExpanded'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggleExpand'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HierarchyItem', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=194;
	$m['HierarchyWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.hierarchy';
		$pyjs['track']['lineno']=201;
		$method = $pyjs__bind_method2('__init__', function(modul, rootNode, node, isSelector) {
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
				modul = arguments[1];
				rootNode = arguments[2];
				node = arguments[3];
				isSelector = arguments[4];
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
				if (typeof isSelector != 'undefined') {
					if (isSelector !== null && typeof isSelector['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = isSelector;
						isSelector = arguments[5];
					}
				} else 				if (typeof node != 'undefined') {
					if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = node;
						node = arguments[5];
					}
				} else 				if (typeof rootNode != 'undefined') {
					if (rootNode !== null && typeof rootNode['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rootNode;
						rootNode = arguments[5];
					}
				} else 				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof rootNode == 'undefined') rootNode=arguments['callee']['__args__'][4][1];
			if (typeof node == 'undefined') node=arguments['callee']['__args__'][5][1];
			if (typeof isSelector == 'undefined') isSelector=arguments['callee']['__args__'][6][1];
			var $add5,$add7,$add6,$add8;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=201;
			$pyjs['track']['lineno']=208;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['track']['lineno']=209;
			self['module'] = modul;
			$pyjs['track']['lineno']=210;
			self['rootNode'] = rootNode;
			$pyjs['track']['lineno']=211;
			self['actionBar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ActionBar'](modul, 'hierarchy');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$pyjs['track']['lineno']=212;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'actionBar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=213;
			self['entryFrame'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ol']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs['track']['lineno']=214;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'entryFrame')['__getitem__']('class')['append']('hierarchy');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['track']['lineno']=215;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'entryFrame'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			$pyjs['track']['lineno']=216;
			self['selectionChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=217;
			self['selectionActivatedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionActivated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			$pyjs['track']['lineno']=218;
			self['rootNodeChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('rootNodeChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			$pyjs['track']['lineno']=219;
			self['_currentCursor'] = null;
			$pyjs['track']['lineno']=220;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=221;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_drop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=222;
			self['isSelector'] = isSelector;
			$pyjs['track']['lineno']=223;
			self['_expandedNodes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$pyjs['track']['lineno']=224;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'rootNode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
				$pyjs['track']['lineno']=225;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=227;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSetDefaultRootNode'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'listRootNodes']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			}
			$pyjs['track']['lineno']=228;
			self['path'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['track']['lineno']=229;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick', 'onDblClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs['track']['lineno']=233;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['setActions']($p['__op_add']($add7=$p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['selectrootnode', 'add', 'edit', 'clone', 'delete']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})(),$add6=($p['bool'](isSelector)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['select', 'close']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()))),$add8=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['reload']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['track']['lineno']=234;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDrop', 'onDragOver');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['rootNode', null],['node', null],['isSelector', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=237;
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
			var $or4,$or1,$or3,$or2,errorDiv,$and14,$and15,txt;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':237};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=237;
			$pyjs['track']['lineno']=241;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['track']['lineno']=242;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'entryFrame')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=243;
			errorDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['track']['lineno']=244;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']('error_msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$pyjs['track']['lineno']=245;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and14=code)?($p['bool']($or1=$p['op_eq'](code, 401))?$or1:$p['op_eq'](code, 403)):$and14));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=246;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Access denied!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=248;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('An unknown error occurred!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			}
			$pyjs['track']['lineno']=249;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('error_code_%s', ($p['bool']($or3=code)?$or3:0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=250;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs['track']['lineno']=251;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](errorDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req', null],['code', null]]);
		$cls_definition['showErrorMsg'] = $method;
		$pyjs['track']['lineno']=253;
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
			var $iter3_idx,$iter3_type,v,isRootNode,$and16,$iter3_iter,k,$and18,$pyjs__trackstack_size_1,$iter3_nextval,$iter3_array,$and17;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':253};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=253;
			$pyjs['track']['lineno']=255;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](module, $p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
				$pyjs['track']['lineno']=257;
				isRootNode = false;
				$pyjs['track']['lineno']=258;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					$pyjs['track']['lineno']=259;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and16=$p['op_eq'](k, module))?($p['bool']($and17=$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return v['get']('handler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})(), 'list'))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return v['get']('rootNodeOf');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})(), $p['getattr'](self, 'module')):$and17):$and16));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
						$pyjs['track']['lineno']=263;
						isRootNode = true;
						$pyjs['track']['lineno']=264;
						break;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.hierarchy';
				$pyjs['track']['lineno']=266;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](isRootNode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
					$pyjs['track']['lineno']=267;
					$pyjs['track']['lineno']=267;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=269;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'actionBar'), 'widgets')['__getitem__']('selectrootnode')['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$pyjs['track']['lineno']=270;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['module']]);
		$cls_definition['onDataChanged'] = $method;
		$pyjs['track']['lineno']=272;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':272};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=272;
			$pyjs['track']['lineno']=273;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['track']['lineno']=274;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['registerChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=276;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':276};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=276;
			$pyjs['track']['lineno']=277;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HierarchyWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs['track']['lineno']=278;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['removeChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=280;
		$method = $pyjs__bind_method2('itemForEvent', function(event, elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				elem = arguments[2];
			}
			if (typeof elem == 'undefined') elem=arguments['callee']['__args__'][4][1];
			var tmp,$iter4_nextval,$pyjs__trackstack_size_1,$iter4_idx,$iter4_type,child,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=280;
			$pyjs['track']['lineno']=285;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((elem === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
				$pyjs['track']['lineno']=286;
				elem = $p['getattr'](self, 'entryFrame');
			}
			$pyjs['track']['lineno']=287;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](elem, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				child = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=288;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'element'), $p['getattr'](event, 'target')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
					$pyjs['track']['lineno']=289;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](child, $m['HierarchyItem']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
						$pyjs['track']['lineno']=291;
						$pyjs['track']['lineno']=291;
						var $pyjs__ret = child;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=295;
						$pyjs['track']['lineno']=295;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=296;
				tmp = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['itemForEvent'](event, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
				$pyjs['track']['lineno']=297;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((tmp === false));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
					$pyjs['track']['lineno']=298;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](child, $m['HierarchyItem']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
						$pyjs['track']['lineno']=299;
						$pyjs['track']['lineno']=299;
						var $pyjs__ret = child;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=301;
						$pyjs['track']['lineno']=301;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((tmp !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					$pyjs['track']['lineno']=303;
					$pyjs['track']['lineno']=303;
					var $pyjs__ret = tmp;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=304;
			$pyjs['track']['lineno']=304;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event'],['elem', null]]);
		$cls_definition['itemForEvent'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('itemForKey', function(key, elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				elem = arguments[2];
			}
			if (typeof elem == 'undefined') elem=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,tmp,$iter5_array,child,$iter5_iter,$iter5_idx,$iter5_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=313;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((elem === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
				$pyjs['track']['lineno']=314;
				elem = $p['getattr'](self, 'entryFrame');
			}
			$pyjs['track']['lineno']=315;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](elem, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				child = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=316;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'data')['__getitem__']('key'), key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
					$pyjs['track']['lineno']=317;
					$pyjs['track']['lineno']=317;
					var $pyjs__ret = child;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=318;
				tmp = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['itemForKey'](key, $p['getattr'](child, 'ol'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
				$pyjs['track']['lineno']=319;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((tmp !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs['track']['lineno']=320;
					$pyjs['track']['lineno']=320;
					var $pyjs__ret = tmp;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=321;
			$pyjs['track']['lineno']=321;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['key'],['elem', null]]);
		$cls_definition['itemForKey'] = $method;
		$pyjs['track']['lineno']=323;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var item;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':323};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=323;
			$pyjs['track']['lineno']=324;
			item = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['itemForEvent'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
			$pyjs['track']['lineno']=326;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((item === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
				$pyjs['track']['lineno']=327;
				$pyjs['track']['lineno']=327;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=329;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](item, 'expandLink'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
				$pyjs['track']['lineno']=330;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return item['toggleExpand']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
				$pyjs['track']['lineno']=332;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](item, 'isLoaded')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
					$pyjs['track']['lineno']=333;
					item['isLoaded'] = true;
					$pyjs['track']['lineno']=334;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['loadNode']($p['getattr'](item, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=337;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setCurrentItem'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				$pyjs['track']['lineno']=338;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self, item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=340;
		$method = $pyjs__bind_method2('onDblClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var item;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=340;
			$pyjs['track']['lineno']=341;
			item = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['itemForEvent'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			$pyjs['track']['lineno']=342;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((item === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
				$pyjs['track']['lineno']=343;
				$pyjs['track']['lineno']=343;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=344;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setCurrentItem'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs['track']['lineno']=345;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([item]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['track']['lineno']=346;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()) {
				$pyjs['track']['lineno']=347;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDblClick'] = $method;
		$pyjs['track']['lineno']=349;
		$method = $pyjs__bind_method2('setCurrentItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':349};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=349;
			$pyjs['track']['lineno']=350;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_currentCursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
				$pyjs['track']['lineno']=351;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_currentCursor')['__getitem__']('class')['remove']('is_focused');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			}
			$pyjs['track']['lineno']=352;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return item['__getitem__']('class')['append']('is_focused');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=353;
			self['_currentCursor'] = item;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['setCurrentItem'] = $method;
		$pyjs['track']['lineno']=355;
		$method = $pyjs__bind_method2('onSetDefaultRootNode', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var data;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':355};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=355;
			$pyjs['track']['lineno']=361;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			$pyjs['track']['lineno']=362;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
				$pyjs['track']['lineno']=363;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setRootNode'](data['__getitem__'](0)['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onSetDefaultRootNode'] = $method;
		$pyjs['track']['lineno']=365;
		$method = $pyjs__bind_method2('setRootNode', function(rootNode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rootNode = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':365};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=365;
			$pyjs['track']['lineno']=371;
			self['rootNode'] = rootNode;
			$pyjs['track']['lineno']=372;
			self['_currentCursor'] = null;
			$pyjs['track']['lineno']=373;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rootNodeChangedEvent']['fire'](rootNode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['track']['lineno']=374;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['rootNode']]);
		$cls_definition['setRootNode'] = $method;
		$pyjs['track']['lineno']=376;
		$method = $pyjs__bind_method2('reloadData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var collectExpandedNodes,c,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':376};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=376;
			$pyjs['track']['lineno']=380;
			collectExpandedNodes = function(currNode) {
				var c,$iter6_idx,$iter6_type,res,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'widgets.hierarchy','lineno':380};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='widgets.hierarchy';
				$pyjs['track']['lineno']=380;
				$pyjs['track']['lineno']=381;
				res = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$pyjs['track']['lineno']=382;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice']($p['getattr'](currNode, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					c = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=383;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](c, $m['HierarchyItem']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()) {
						$pyjs['track']['lineno']=384;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](c, 'isExpanded'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
							$pyjs['track']['lineno']=385;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return res['append']($p['getattr'](c, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
						}
						$pyjs['track']['lineno']=386;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return collectExpandedNodes($p['getattr'](c, 'ol'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.hierarchy';
				$pyjs['track']['lineno']=387;
				$pyjs['track']['lineno']=387;
				var $pyjs__ret = res;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			collectExpandedNodes['__name__'] = 'collectExpandedNodes';

			collectExpandedNodes['__bind_type__'] = 0;
			collectExpandedNodes['__args__'] = [null,null,['currNode']];
			$pyjs['track']['lineno']=388;
			self['_expandedNodes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return collectExpandedNodes($p['getattr'](self, 'entryFrame'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['track']['lineno']=389;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
			$pyjs['track']['lineno']=390;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'entryFrame'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				c = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=391;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['entryFrame']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=392;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loadNode']($p['getattr'](self, 'rootNode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reloadData'] = $method;
		$pyjs['track']['lineno']=394;
		$method = $pyjs__bind_method2('loadNode', function(node, cursor) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				node = arguments[1];
				cursor = arguments[2];
			}
			if (typeof cursor == 'undefined') cursor=arguments['callee']['__args__'][4][1];
			var r,params;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':394};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=394;
			$pyjs['track']['lineno']=401;
			params = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['parent', node], ['orderby', 'sortindex']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			$pyjs['track']['lineno']=406;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](cursor);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
				$pyjs['track']['lineno']=407;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return params['update']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['cursor', cursor]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
			}
			$pyjs['track']['lineno']=409;
			r = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list', params]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			$pyjs['track']['lineno']=413;
			r['node'] = node;
			$pyjs['track']['lineno']=414;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['append'](r);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['node'],['cursor', null]]);
		$cls_definition['loadNode'] = $method;
		$pyjs['track']['lineno']=416;
		$method = $pyjs__bind_method2('onRequestSucceded', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var tmp,ol,$iter8_idx,$and20,$iter8_array,$iter8_iter,skel,hi,$iter8_nextval,$pyjs__trackstack_size_1,$and22,$and21,$and19,data,$iter8_type;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':416};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=416;
			$pyjs['track']['lineno']=421;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) {
				$pyjs['track']['lineno']=423;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['actionBar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
				$pyjs['track']['lineno']=424;
				$pyjs['track']['lineno']=424;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=426;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['remove'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			$pyjs['track']['lineno']=427;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$pyjs['track']['lineno']=429;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](req, 'node'), $p['getattr'](self, 'rootNode')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})()) {
				$pyjs['track']['lineno']=430;
				ol = $p['getattr'](self, 'entryFrame');
			}
			else {
				$pyjs['track']['lineno']=432;
				tmp = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['itemForKey']($p['getattr'](req, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
				$pyjs['track']['lineno']=433;
				ol = $p['getattr'](tmp, 'ol');
				$pyjs['track']['lineno']=434;
				if (!( (ol !== null) )) {
				   throw $p['AssertionError']();
				 }
			}
			$pyjs['track']['lineno']=436;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['__getitem__']('skellist');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				skel = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=437;
				hi = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HierarchyItem']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				$pyjs['track']['lineno']=438;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ol['appendChild'](hi);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
				$pyjs['track']['lineno']=439;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_expandedNodes')['__contains__']($p['getattr'](hi, 'data')['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
					$pyjs['track']['lineno']=440;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return hi['toggleExpand']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
					$pyjs['track']['lineno']=441;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](hi, 'isLoaded')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
						$pyjs['track']['lineno']=442;
						hi['isLoaded'] = true;
						$pyjs['track']['lineno']=443;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['loadNode']($p['getattr'](hi, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=445;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and19=!$p['bool']($p['getattr'](ol, '_children')))?!$p['op_eq'](ol, $p['getattr'](self, 'entryFrame')):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
				$pyjs['track']['lineno']=446;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return ol['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()['__getitem__']('class')['append']('has_no_childs');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
			}
			$pyjs['track']['lineno']=448;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and21=data['__getitem__']('skellist'))?data['__getitem__']('cursor'):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
				$pyjs['track']['lineno']=449;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['loadNode']($p['getattr'](req, 'node'), data['__getitem__']('cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
			}
			$pyjs['track']['lineno']=451;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onRequestSucceded'] = $method;
		$pyjs['track']['lineno']=453;
		$method = $pyjs__bind_method2('getCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':453};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=453;
			$pyjs['track']['lineno']=458;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentCursor') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})()) {
				$pyjs['track']['lineno']=459;
				$pyjs['track']['lineno']=459;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr']($p['getattr'](self, '_currentCursor'), 'data')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=460;
			$pyjs['track']['lineno']=460;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentSelection'] = $method;
		$pyjs['track']['lineno']=462;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var srcKey;
			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':462};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=462;
			$pyjs['track']['lineno']=466;
			srcKey = (function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['getData']('Text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
			$pyjs['track']['lineno']=467;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr'](self, 'module'), 'reparent', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['item', srcKey], ['dest', $p['getattr'](self, 'rootNode')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
			$pyjs['track']['lineno']=468;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=470;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':470};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=470;
			$pyjs['track']['lineno']=474;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
			$pyjs['track']['lineno']=475;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=477;
		$method = $pyjs__bind_method2('activateCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.hierarchy', 'lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.hierarchy';
			$pyjs['track']['lineno']=477;
			$pyjs['track']['lineno']=478;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_currentCursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})()) {
				$pyjs['track']['lineno']=479;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentCursor')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
				$pyjs['track']['lineno']=480;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activateCurrentSelection'] = $method;
		$pyjs['track']['lineno']=194;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HierarchyWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.hierarchy */


/* end module: widgets.hierarchy */


/*
PYJS_DEPS: ['html5', 'utils', 'time.time', 'time', 'network.NetworkService', 'network', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'event.EventDispatcher', 'event', 'config.conf', 'config', 'i18n.translate', 'i18n']
*/
